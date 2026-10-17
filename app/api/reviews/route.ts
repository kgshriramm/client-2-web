import { NextResponse } from 'next/server';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';
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

function serializeReview(id: string, data: FirebaseFirestore.DocumentData) {
  const createdAt = data.created_at;
  if (!(createdAt instanceof Timestamp) && typeof createdAt !== 'string') {
    throw new Error('Review is missing a valid created_at timestamp.');
  }

  return {
    id,
    name: data.name,
    rating: data.rating,
    text: data.text,
    created_at: createdAt instanceof Timestamp ? createdAt.toDate().toISOString() : new Date(createdAt).toISOString(),
  };
}

export async function GET() {
  try {
    const snapshot = await getAdminFirestore()
      .collection('reviews')
      .orderBy('created_at', 'desc')
      .limit(30)
      .get();

    return NextResponse.json(
      { reviews: snapshot.docs.map(doc => serializeReview(doc.id, doc.data())) },
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
    const { writeTime } = await reviewRef.create({
      ...input,
      created_at: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({
      review: {
        id: reviewRef.id,
        ...input,
        created_at: writeTime.toDate().toISOString(),
      },
    }, { status: 201 });
  } catch (error) {
    console.error('Failed to submit review to Firestore.', error);
    return NextResponse.json({ error: 'We could not submit your review. Please try again.' }, { status: 500 });
  }
}
