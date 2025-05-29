/*
  # Create masterclass registrations table

  1. New Tables
    - `masterclass_registrations`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `whatsapp` (text)
      - `payment_status` (text)
      - `created_at` (timestamp)
      - `user_id` (uuid, references auth.users)

  2. Security
    - Enable RLS on `masterclass_registrations` table
    - Add policies for:
      - Insert: Allow authenticated users to insert their own data
      - Select: Allow authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS masterclass_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  whatsapp text NOT NULL,
  payment_status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

ALTER TABLE masterclass_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own registrations"
  ON masterclass_registrations
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read their own registrations"
  ON masterclass_registrations
  FOR SELECT
  USING (auth.uid() = user_id);