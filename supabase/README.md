# Supabase Setup Guide

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com) and create a new project
2. Wait for the project to be fully provisioned
3. Navigate to the SQL Editor in your Supabase dashboard

### 2. Run Database Schema

1. Copy the contents of `supabase/schema.sql`
2. Paste it into the SQL Editor
3. Run the query to create tables and insert sample data

### 3. Configure Environment Variables

1. In your Supabase dashboard, go to Settings > API
2. Copy your project URL and anon/public key
3. Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Test the Connection

Run the development server:

```bash
npm run dev
```

The app should now be able to fetch projects from Supabase!

## Database Tables

### Projects Table
- `id`: UUID (Primary Key)
- `title`: Text
- `description`: Text
- `image_url`: Text
- `category`: Text
- `technologies`: Text Array
- `project_url`: Text (Optional)
- `github_url`: Text (Optional)
- `created_at`: Timestamp

### Contact Messages Table
- `id`: UUID (Primary Key)
- `name`: Text
- `email`: Text
- `message`: Text
- `created_at`: Timestamp

## Security

Row Level Security (RLS) is enabled:
- Projects: Public read access
- Contact Messages: Anyone can insert

## Adding Your Own Projects

You can add projects via the Supabase dashboard or SQL:

```sql
INSERT INTO projects (title, description, image_url, category, technologies) VALUES
('Your Project', 'Description', 'image_url', 'Category', ARRAY['Tech1', 'Tech2']);
```
