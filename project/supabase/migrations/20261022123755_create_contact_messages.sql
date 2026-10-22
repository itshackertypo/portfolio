/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `message` (text, not null) — the message body
  - `created_at` (timestamptz, defaults to now) — when the message was sent

2. Security
- Enable RLS on `contact_messages`.
- Grant INSERT to `anon` + `authenticated` so any visitor (no login) can submit the contact form.
- No SELECT/UPDATE/DELETE grants for anon/authenticated — only the portfolio owner (via service role) should read messages.
- Allow anon + authenticated INSERT because the contact form is intentionally public.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);
