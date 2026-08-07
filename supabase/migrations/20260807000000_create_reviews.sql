create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 80),
  rating smallint not null check (rating between 1 and 5),
  text text not null check (char_length(text) between 1 and 1000),
  created_at timestamptz not null default now()
);

alter table public.reviews enable row level security;
alter table public.reviews drop column if exists status;

drop policy if exists "Anyone can read approved reviews" on public.reviews;
drop policy if exists "Anyone can submit a pending review" on public.reviews;
drop policy if exists "Anyone can read reviews" on public.reviews;
drop policy if exists "Anyone can submit reviews" on public.reviews;

create policy "Anyone can read reviews"
  on public.reviews for select using (true);

create policy "Anyone can submit reviews"
  on public.reviews for insert
  with check (true);
