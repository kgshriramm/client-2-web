import { NextResponse } from 'next/server';
import { Timestamp } from 'firebase-admin/firestore';
import { getAdminFirestore } from '@/utils/firebase/admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const NAME_LIMIT = 80;
const REVIEW_LIMIT = 1_000;

function asReviewInput(value: unknown) {
  if (!value || typeof value !== 'object') return null;

  const { name, rating, text, website } = value as Record<string, unknown>;
  if (website) return null;
  if (typeof name !== 'string' || typeof text !== 'string' || typeof rating !== 'number') return null;

  const safeName = name.trim();
  const safeText = text.trim();
  if (!safeName || safeName.length > NAME_LIMIT || !safeText || safeText.length > REVIEW_LIMIT || !Number.isInteger(rating) || rating < 1 || rating > 5) return null;

  return { name: safeName, rating, text: safeText };
}

type SerializedReview = { id: string; name: string; rating: number; text: string; created_at: string };

const pause = (milliseconds: number) => new Promise(resolve => setTimeout(resolve, milliseconds));

function asDate(value: unknown): Date | null {
  if (value instanceof Timestamp) return value.toDate();
  if (value instanceof Date) return value;
  if (typeof value === 'string' || typeof value === 'number') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  return null;
}

function serializeReview(id: string, data: FirebaseFirestore.DocumentData): SerializedReview | null {
  // Supports the original Firestore field as well as older/manual entries.
  const createdAt = asDate(data.created_at ?? data.createdAt);
  if (
    !createdAt ||
    typeof data.name !== 'string' ||
    typeof data.text !== 'string' ||
    typeof data.rating !== 'number' ||
    !Number.isInteger(data.rating) ||
    data.rating < 1 ||
    data.rating > 5
  ) return null;

  return { id, name: data.name, rating: data.rating, text: data.text, created_at: createdAt.toISOString() };
}

async function loadReviewsFromFirestore() {
  let lastError: unknown;

  // The Admin SDK already retries many network errors. This small additional retry
  // protects the public endpoint from short cold-start/network interruptions.
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const snapshot = await getAdminFirestore().collection('reviews').limit(100).get();
      return snapshot.docs
        .map(doc => serializeReview(doc.id, doc.data()))
        .filter((review): review is SerializedReview => review !== null)
        .sort((first, second) => Date.parse(second.created_at) - Date.parse(first.created_at))
        .slice(0, 30);
    } catch (error) {
      lastError = error;
      if (attempt === 0) await pause(250);
    }
  }

  throw lastError;
}

export async function GET() {
  try {
    // Do not order in Firestore: documents created before this implementation may
    // not have created_at, and Firestore would silently omit them from an ordered
    // query. We normalise and sort valid documents safely below.
    const reviews = await loadReviewsFromFirestore();

    return NextResponse.json(
      { reviews },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } },
    );
  } catch (error) {
    console.error('Failed to load reviews from Firestore.', error);
    return NextResponse.json({ reviews: [] }, { status: 503 });
  }
}

export async function POST(request: Request) {
  try {
    const input = asReviewInput(await request.json());
    if (!input) return NextResponse.json({ error: 'Please enter a valid name, rating, and review.' }, { status: 400 });

    const reviewRef = getAdminFirestore().collection('reviews').doc();
    const createdAt = Timestamp.now();
    try {
      await reviewRef.create({
        ...input,
        created_at: createdAt,
      });
    } catch (error) {
      // A request can time out after Firestore has committed the document. Check
      // the known document ID before reporting a failed submission to the visitor.
      const existing = await reviewRef.get().catch(() => null);
      if (!existing?.exists) throw error;
    }

    return NextResponse.json({
      review: {
        id: reviewRef.id,
        ...input,
        created_at: createdAt.toDate().toISOString(),
      },
    }, { status: 201 });
  } catch (error) {
    console.error('Failed to submit review to Firestore.', error);
    return NextResponse.json({ error: 'We could not submit your review. Please try again.' }, { status: 500 });
  }
}
