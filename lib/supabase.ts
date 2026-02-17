import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types
export interface Project {
  id: string
  title: string
  description: string
  image_url: string
  category: string
  technologies: string[]
  project_url?: string
  github_url?: string
  created_at: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

// Project API
export const projectApi = {
  // Get all projects
  async getAll() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Project[]
  },

  // Get projects by category
  async getByCategory(category: string) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Project[]
  },

  // Get single project
  async getById(id: string) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data as Project
  },

  // Get featured projects (latest 6)
  async getFeatured() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(6)
    
    if (error) throw error
    return data as Project[]
  },
}

// Contact API
export const contactApi = {
  // Submit contact form
  async submit(formData: Omit<ContactMessage, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([formData])
      .select()
    
    if (error) throw error
    return data[0] as ContactMessage
  },
}
