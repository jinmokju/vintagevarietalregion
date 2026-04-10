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
  vintage text,
  type text,
  varietal text,
  region text,
  average_price text,
  image_url text,
  created_at timestamptz default now()
);

create table if not exists reviews (
  id bigint generated always as identity primary key,
  wine_id text references wines(id) on delete cascade,
  persona_id text references personas(id) on delete cascade,
  note text not null,
  created_at date default current_date
);
