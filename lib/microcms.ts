import { createClient } from 'microcms-js-sdk'

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
    apiKey: process.env.MICROCMS_API_KEY || '',
})

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
    createdAt: string
}

interface ProjectsResponse {
    contents: Project[]
    totalCount: number
    offset: number
    limit: number
}

// Get all projects
export async function getProjects(): Promise<Project[]> {
    const data = await client.get<ProjectsResponse>({
        endpoint: 'projects',
        queries: { orders: '-createdAt', limit: 100 },
    })
    return data.contents
}

// Get featured projects (latest 6)
export async function getFeaturedProjects(): Promise<Project[]> {
    const data = await client.get<ProjectsResponse>({
        endpoint: 'projects',
        queries: { orders: '-createdAt', limit: 6 },
    })
    return data.contents
}

// Get single project by ID
export async function getProjectById(id: string): Promise<Project> {
    const data = await client.get<Project>({
        endpoint: 'projects',
        contentId: id,
    })
    return data
}
