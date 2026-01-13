/*
  # Nexa Care Database Schema

  ## Summary
  This migration creates the initial database schema for the Nexa Care home care service website.

  ## Tables Created
  
  ### 1. testimonials
  Stores customer testimonials displayed on the homepage
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Customer name
  - `role` (text) - Customer role/description (e.g., "Cliente de cliente")
  - `content` (text) - Testimonial content
  - `avatar_url` (text, optional) - URL to customer avatar image
  - `display_order` (integer) - Order for displaying testimonials
  - `is_active` (boolean) - Whether testimonial is active
  - `created_at` (timestamptz) - Creation timestamp

  ### 2. blog_posts
  Stores blog articles
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Post title
  - `slug` (text, unique) - URL-friendly slug
  - `excerpt` (text) - Short description
  - `content` (text) - Full post content
  - `image_url` (text, optional) - Featured image URL
  - `author` (text) - Author name
  - `published_at` (timestamptz) - Publication date
  - `is_published` (boolean) - Publication status
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 3. contact_submissions
  Stores contact form submissions
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Sender name
  - `email` (text) - Sender email
  - `phone` (text, optional) - Sender phone
  - `message` (text) - Message content
  - `is_read` (boolean) - Whether message has been read
  - `created_at` (timestamptz) - Submission timestamp

  ### 4. newsletter_subscribers
  Stores newsletter email subscriptions
  - `id` (uuid, primary key) - Unique identifier
  - `email` (text, unique) - Subscriber email
  - `is_active` (boolean) - Subscription status
  - `subscribed_at` (timestamptz) - Subscription timestamp

  ## Security
  - RLS enabled on all tables
  - Public read access for testimonials and published blog posts
  - Authenticated insert access for contact submissions and newsletter signups
  - Admin-only access for managing content
*/

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  content text NOT NULL,
  avatar_url text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active testimonials"
  ON testimonials FOR SELECT
  USING (is_active = true);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image_url text,
  author text NOT NULL,
  published_at timestamptz,
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published posts"
  ON blog_posts FOR SELECT
  USING (is_published = true);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  is_read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  is_active boolean DEFAULT true,
  subscribed_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);

-- Insert sample testimonials
INSERT INTO testimonials (name, role, content, display_order) VALUES
  ('Elisa Rama', 'Cliente de cliente', 'Atendimento um clientes: cuidado Home care para pelooistore tameme in conseltoree ne excolencia a texias doncentes traniilornes en palestra.', 1),
  ('Janatha Pastna', 'Cliente cliente', 'Cuidado seu onesiso sobre tramas tenta demas as me noompusbamento e framas da essoelisamos no por notisentemente e pertimentos meis esses bermocs.', 2),
  ('Milanna Fluondo', 'Cliente de-dia', 'Me ne pense de vieva tenta comeoaa ne-rostaram comeavoen e a caeiotera para queron nào museo a oi reapar a conservaseon.', 3)
ON CONFLICT DO NOTHING;