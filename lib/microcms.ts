import { createClient } from 'microcms-js-sdk'


const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || '',
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
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

// Helper to normalize data from microCMS
function normalizeProject(project: any): Project {
    return {
        ...project,
        // タイポ対応は残しつつ、image_url は単純な文字列として扱う
        description: project.description || project.descriotion || '',
        image_url: project.image_url || '',
        // category が配列で返ってくる場合に対応（最初の要素を取得）
        category: Array.isArray(project.category) ? project.category[0] : project.category,
        technologies: typeof project.technologies === 'string'
            ? project.technologies.split(',').map((t: string) => t.trim()).filter(Boolean)
            : Array.isArray(project.technologies) ? project.technologies : []
    }
}

// Get all projects
export async function getProjects(): Promise<Project[]> {
    const data = await client.get<ProjectsResponse>({
        endpoint: 'projects',
        queries: { orders: '-createdAt', limit: 100 },
    })
    return data.contents.map(normalizeProject)
}

// Get featured projects (latest 6)
export async function getFeaturedProjects(): Promise<Project[]> {
    const data = await client.get<ProjectsResponse>({
        endpoint: 'projects',
        queries: { orders: '-createdAt', limit: 6 },
    })
    return data.contents.map(normalizeProject)
}

// Get single project by ID
export async function getProjectById(id: string): Promise<Project> {
    const data = await client.get<Project>({
        endpoint: 'projects',
        contentId: id,
    })
    return normalizeProject(data)
}
