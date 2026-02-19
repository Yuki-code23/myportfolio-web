import { Metadata } from 'next'
import { getProjectById } from '@/lib/microcms'
import ProjectDetailView from './ProjectDetailView'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const project = await getProjectById(params.id)
    if (!project) return {}

    return {
      title: project.title,
      description: project.description.substring(0, 160),
      openGraph: {
        title: `${project.title} | Yuki Uemoto`,
        description: project.description.substring(0, 160),
        images: [project.image_url],
      },
    }
  } catch (error) {
    return {
      title: 'Project Details',
    }
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  try {
    const project = await getProjectById(params.id)
    if (!project) {
      notFound()
    }

    return <ProjectDetailView project={project} />
  } catch (error) {
    notFound()
  }
}
