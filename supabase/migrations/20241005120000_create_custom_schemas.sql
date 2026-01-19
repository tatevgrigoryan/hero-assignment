create extension if not exists pgcrypto;

create schema if not exists "HeroOS";

create table if not exists "HeroOS".listings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  team text not null,
  location text not null,
  type text not null,
  summary text not null,
  is_public boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists "HeroOS".applications (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references "HeroOS".listings(id) on delete cascade,
  applicant_name text not null,
  applicant_email text not null,
  cover_letter text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table "HeroOS".listings enable row level security;
alter table "HeroOS".listings force row level security;

alter table "HeroOS".applications enable row level security;
alter table "HeroOS".applications force row level security;

create policy "heroos_listings_public_read" on "HeroOS".listings
  for select
  to anon, authenticated
  using (is_public = true);

create policy "heroos_listings_authenticated_insert" on "HeroOS".listings
  for insert
  to authenticated
  with check (true);

create policy "heroos_listings_authenticated_update" on "HeroOS".listings
  for update
  to authenticated
  using (true)
  with check (true);

create policy "heroos_listings_authenticated_delete" on "HeroOS".listings
  for delete
  to authenticated
  using (true);

create policy "heroos_applications_public_insert" on "HeroOS".applications
  for insert
  to anon, authenticated
  with check (listing_id is not null);

create policy "heroos_applications_authenticated_update" on "HeroOS".applications
  for update
  to authenticated
  using (true)
  with check (true);

create policy "heroos_applications_authenticated_delete" on "HeroOS".applications
  for delete
  to authenticated
  using (true);

create or replace view public.v_heroos__listings_public with (security_invoker) as
select
  id,
  title,
  team,
  location,
  type,
  summary
from "HeroOS".listings
where is_public = true;

alter view public.v_heroos__listings_public set (security_barrier = true);

grant select on public.v_heroos__listings_public to anon, authenticated;

grant usage on schema "HeroOS" to anon, authenticated;

create or replace function public.fn_heroos__create_listing(
  title text,
  team text,
  location text,
  type text,
  summary text,
  is_public boolean
) returns "HeroOS".listings
language plpgsql
security definer
set search_path = public, "HeroOS"
as $$
declare
  new_listing "HeroOS".listings;
begin
  insert into "HeroOS".listings (
    title,
    team,
    location,
    type,
    summary,
    is_public
  ) values (
    title,
    team,
    location,
    type,
    summary,
    coalesce(is_public, true)
  )
  returning * into new_listing;

  return new_listing;
end;
$$;

create or replace function public.fn_heroos__update_listing(
  listing_id uuid,
  title text,
  team text,
  location text,
  type text,
  summary text,
  is_public boolean
) returns "HeroOS".listings
language plpgsql
security definer
set search_path = public, "HeroOS"
as $$
declare
  updated_listing "HeroOS".listings;
begin
  update "HeroOS".listings
  set
    title = coalesce(title, "HeroOS".listings.title),
    team = coalesce(team, "HeroOS".listings.team),
    location = coalesce(location, "HeroOS".listings.location),
    type = coalesce(type, "HeroOS".listings.type),
    summary = coalesce(summary, "HeroOS".listings.summary),
    is_public = coalesce(is_public, "HeroOS".listings.is_public),
    updated_at = now()
  where id = listing_id
  returning * into updated_listing;

  return updated_listing;
end;
$$;

create or replace function public.fn_heroos__delete_listing(
  listing_id uuid
) returns void
language plpgsql
security definer
set search_path = public, "HeroOS"
as $$
begin
  delete from "HeroOS".listings
  where id = listing_id;
end;
$$;

create or replace function public.fn_heroos__create_application(
  listing_id uuid,
  applicant_name text,
  applicant_email text,
  cover_letter text
) returns "HeroOS".applications
language plpgsql
security definer
set search_path = public, "HeroOS"
as $$
declare
  new_application "HeroOS".applications;
begin
  insert into "HeroOS".applications (
    listing_id,
    applicant_name,
    applicant_email,
    cover_letter
  ) values (
    listing_id,
    applicant_name,
    applicant_email,
    cover_letter
  )
  returning * into new_application;

  return new_application;
end;
$$;

create or replace function public.fn_heroos__update_application(
  application_id uuid,
  applicant_name text,
  applicant_email text,
  cover_letter text
) returns "HeroOS".applications
language plpgsql
security definer
set search_path = public, "HeroOS"
as $$
declare
  updated_application "HeroOS".applications;
begin
  update "HeroOS".applications
  set
    applicant_name = coalesce(applicant_name, "HeroOS".applications.applicant_name),
    applicant_email = coalesce(applicant_email, "HeroOS".applications.applicant_email),
    cover_letter = coalesce(cover_letter, "HeroOS".applications.cover_letter),
    updated_at = now()
  where id = application_id
  returning * into updated_application;

  return updated_application;
end;
$$;

create or replace function public.fn_heroos__delete_application(
  application_id uuid
) returns void
language plpgsql
security definer
set search_path = public, "HeroOS"
as $$
begin
  delete from "HeroOS".applications
  where id = application_id;
end;
$$;

grant execute on function public.fn_heroos__create_listing(text, text, text, text, text, boolean)
  to authenticated;

grant execute on function public.fn_heroos__update_listing(uuid, text, text, text, text, text, boolean)
  to authenticated;

grant execute on function public.fn_heroos__delete_listing(uuid)
  to authenticated;

grant execute on function public.fn_heroos__create_application(uuid, text, text, text)
  to anon, authenticated;

grant execute on function public.fn_heroos__update_application(uuid, text, text, text)
  to authenticated;

grant execute on function public.fn_heroos__delete_application(uuid)
  to authenticated;
