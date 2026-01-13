export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar_url?: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url?: string;
  author: string;
  published_at: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface NewsletterSubscription {
  email: string;
}
