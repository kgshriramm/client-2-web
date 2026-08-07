import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';

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

export async function GET() {
  try {
    const supabase = createClient(await cookies());
    const { data, error } = await supabase
      .from('reviews')
      .select('id, name, rating, text, created_at')
      .order('created_at', { ascending: false })
      .limit(30);

    if (error) throw error;
    return NextResponse.json({ reviews: data });
  } catch {
    return NextResponse.json({ reviews: [] }, { status: 503 });
  }
}

export async function POST(request: Request) {
  try {
    const input = asReviewInput(await request.json());
    if (!input) return NextResponse.json({ error: 'Please enter a valid name, rating, and review.' }, { status: 400 });

    const supabase = createClient(await cookies());
    const { data, error } = await supabase
      .from('reviews')
      .insert(input)
      .select('id, name, rating, text, created_at')
      .single();
    if (error) throw error;

    return NextResponse.json({ review: data }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'We could not submit your review. Please try again.' }, { status: 500 });
  }
}
