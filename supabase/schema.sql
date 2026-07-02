create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.missions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  objective text,
  context text,
  constraints text,
  success_criteria text,
  priority text not null default 'Medium',
  status text not null default 'Draft',
  output jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.mission_runs (
  id uuid primary key default gen_random_uuid(),
  mission_id uuid references public.missions(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  run_type text not null,
  input_payload jsonb,
  output_payload jsonb,
  model_used text,
  status text not null default 'success',
  confidence numeric,
  created_at timestamptz not null default now()
);

create table if not exists public.workflows (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  mission_id uuid references public.missions(id) on delete set null,
  name text not null,
  description text,
  payload jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.missions enable row level security;
alter table public.mission_runs enable row level security;
alter table public.workflows enable row level security;

create policy "Users can read own profile"
on public.profiles for select
using (auth.uid() = id);

create policy "Users can update own profile"
on public.profiles for update
using (auth.uid() = id);

create policy "Users can read own missions"
on public.missions for select
using (auth.uid() = user_id);

create policy "Users can insert own missions"
on public.missions for insert
with check (auth.uid() = user_id);

create policy "Users can update own missions"
on public.missions for update
using (auth.uid() = user_id);

create policy "Users can delete own missions"
on public.missions for delete
using (auth.uid() = user_id);

create policy "Users can read own mission runs"
on public.mission_runs for select
using (auth.uid() = user_id);

create policy "Users can insert own mission runs"
on public.mission_runs for insert
with check (auth.uid() = user_id);

create policy "Users can read own workflows"
on public.workflows for select
using (auth.uid() = user_id);

create policy "Users can insert own workflows"
on public.workflows for insert
with check (auth.uid() = user_id);

create policy "Users can update own workflows"
on public.workflows for update
using (auth.uid() = user_id);

create policy "Users can delete own workflows"
on public.workflows for delete
using (auth.uid() = user_id);
