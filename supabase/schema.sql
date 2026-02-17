-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  category TEXT NOT NULL,
  technologies TEXT[] NOT NULL,
  project_url TEXT,
  github_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- Insert sample projects
INSERT INTO projects (title, description, image_url, category, technologies, project_url, github_url) VALUES
(
  'E-Commerce Platform',
  'A modern, high-performance e-commerce platform with advanced features including real-time inventory management, AI-powered recommendations, and seamless payment integration.',
  'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
  'Web Development',
  ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
  'https://example.com',
  'https://github.com'
),
(
  'Brand Identity Design',
  'Complete brand identity system for a luxury fashion brand, including logo design, color palette, typography, and brand guidelines.',
  'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800',
  'Design',
  ARRAY['Figma', 'Adobe Illustrator', 'Photoshop'],
  'https://behance.net',
  NULL
),
(
  'Mobile Banking App',
  'Intuitive mobile banking application with biometric authentication, instant transfers, and comprehensive financial analytics.',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
  'Mobile Development',
  ARRAY['React Native', 'TypeScript', 'Firebase', 'Redux'],
  'https://example.com',
  'https://github.com'
),
(
  'AI-Powered Analytics Dashboard',
  'Advanced analytics dashboard utilizing machine learning for predictive insights and real-time data visualization.',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
  'Web Development',
  ARRAY['React', 'Python', 'TensorFlow', 'D3.js', 'PostgreSQL'],
  'https://example.com',
  'https://github.com'
),
(
  'Minimalist Portfolio Website',
  'Clean and elegant portfolio design focusing on typography and white space to showcase creative work.',
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
  'Design',
  ARRAY['Figma', 'Webflow'],
  'https://example.com',
  NULL
),
(
  'Real Estate Marketplace',
  'Comprehensive real estate platform with 3D property tours, mortgage calculators, and AI-driven property matching.',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
  'Web Development',
  ARRAY['Next.js', 'Three.js', 'Supabase', 'Stripe', 'Google Maps API'],
  'https://example.com',
  'https://github.com'
);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for projects (public read access)
CREATE POLICY "Enable read access for all users" ON projects
  FOR SELECT USING (true);

-- Create policies for contact_messages (authenticated users can insert)
CREATE POLICY "Enable insert for all users" ON contact_messages
  FOR INSERT WITH CHECK (true);
