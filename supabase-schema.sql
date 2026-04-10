create table if not exists personas (
  id text primary key,
  name text not null,
  role text,
  focus text,
  red_taste jsonb not null,
  white_taste jsonb not null,
  display_order integer default 0
);

create table if not exists wines (
  id text primary key,
  name text not null,
  producer text,
  vintage text,
  type text,
  varietal text,
  region text,
  average_price text,
  image_url text,
  created_at timestamptz default now()
);

alter table wines add column if not exists producer text;

create table if not exists reviews (
  id bigint generated always as identity primary key,
  wine_id text references wines(id) on delete cascade,
  persona_id text references personas(id) on delete cascade,
  note text not null,
  summary text,
  overall_score integer,
  structure jsonb default '{}'::jsonb,
  primary_aromas text[] default '{}'::text[],
  secondary_aromas text[] default '{}'::text[],
  tertiary_aromas text[] default '{}'::text[],
  created_at date default current_date
);

alter table reviews add column if not exists summary text;
alter table reviews add column if not exists overall_score integer;
alter table reviews add column if not exists structure jsonb default '{}'::jsonb;
alter table reviews add column if not exists primary_aromas text[] default '{}'::text[];
alter table reviews add column if not exists secondary_aromas text[] default '{}'::text[];
alter table reviews add column if not exists tertiary_aromas text[] default '{}'::text[];

alter table personas enable row level security;
alter table wines enable row level security;
alter table reviews enable row level security;

drop policy if exists personas_public_read on personas;
create policy personas_public_read on personas
for select
using (true);

drop policy if exists wines_public_read on wines;
create policy wines_public_read on wines
for select
using (true);

drop policy if exists reviews_public_read on reviews;
create policy reviews_public_read on reviews
for select
using (true);

drop policy if exists personas_admin_write on personas;
create policy personas_admin_write on personas
for all
using ((auth.jwt() ->> 'email') = 'jinmokju@gmail.com')
with check ((auth.jwt() ->> 'email') = 'jinmokju@gmail.com');

drop policy if exists wines_admin_write on wines;
create policy wines_admin_write on wines
for all
using ((auth.jwt() ->> 'email') = 'jinmokju@gmail.com')
with check ((auth.jwt() ->> 'email') = 'jinmokju@gmail.com');

drop policy if exists reviews_admin_write on reviews;
create policy reviews_admin_write on reviews
for all
using ((auth.jwt() ->> 'email') = 'jinmokju@gmail.com')
with check ((auth.jwt() ->> 'email') = 'jinmokju@gmail.com');
