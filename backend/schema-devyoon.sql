-- ═══════════════════════════════════════════════════════════
-- DEVYOON — Schéma Supabase (à ajouter au MÊME projet que DevKëf)
-- Dashboard Supabase → SQL Editor → New query → coller → Run
--
-- Prérequis : le schéma DevKëf (profiles, level_progress, trigger)
-- est déjà en place — voir Devkef/backend/schema.sql sur GitHub.
-- Ce script ajoute UNIQUEMENT la table de progression DevYoon.
-- ═══════════════════════════════════════════════════════════

create table if not exists public.devyoon_progress (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  track         text not null check (track in ('web', 'ia')),
  phase_id      text not null,          -- ex. 'web-01', 'ia-00'
  completed_at  timestamptz not null default now(),
  objectives    jsonb,                  -- détail optionnel (scores, etc.)
  unique (user_id, phase_id)            -- requis pour l'upsert côté front
);

alter table public.devyoon_progress enable row level security;

create policy "devyoon_progress_select_own"
  on public.devyoon_progress for select
  using (auth.uid() = user_id);

create policy "devyoon_progress_insert_own"
  on public.devyoon_progress for insert
  with check (auth.uid() = user_id);

create policy "devyoon_progress_update_own"
  on public.devyoon_progress for update
  using (auth.uid() = user_id);

create index if not exists devyoon_progress_user_idx
  on public.devyoon_progress (user_id, track);
