'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getProjectById, Project } from '@/lib/microcms'
import AnimatedSection from '@/components/home/AnimatedSection'
import { fadeInUp } from '@/lib/animations'
import { HiArrowLeft, HiExternalLink, HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const id = params.id as string
        const data = await getProjectById(id)
        console.log('Project Detail Data:', data)
        setProject(data)
      } catch (error) {
        console.error('Error fetching project:', error)
        router.push('/works')
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchProject()
    }
  }, [params.id, router])

  if (loading) {
    return (
      <div className="pt-32 pb-20 bg-matt-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="flex space-x-2 justify-center mb-4">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-4 h-4 bg-gold rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.15,
                }}
              />
            ))}
          </div>
          <p className="text-gray-400">Loading project...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return null
  }

  return (
    <div className="pt-32 pb-20 bg-matt-black">
      {/* Back Button */}
      <div className="container-custom mb-8">
        <Link href="/works">
          <motion.button
            className="flex items-center gap-2 text-gray-400 hover:text-gold smooth-transition cursor-pointer"
            whileHover={{ x: -5 }}
          >
            <HiArrowLeft className="text-xl" />
            <span>Back to Works</span>
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container-custom mb-16">
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 glass-effect rounded-full text-sm font-medium text-gold">
              {project.category}
            </span>
          </div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mb-8"
          >
            {project.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            {project.project_url && (
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 cursor-pointer"
              >
                <HiExternalLink className="text-xl" />
                <span>View Live Site</span>
              </a>
            )}

            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2 cursor-pointer"
              >
                <FaGithub className="text-xl" />
                <span>View Code</span>
              </a>
            )}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Project Image */}
      <section className="container-custom mb-16">
        <AnimatedSection>
          <motion.div
            className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden glass-effect"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.image_url}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Project Details */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technologies */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <div className="glass-effect rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <HiCode className="text-3xl text-gold" />
                  <h2 className="text-3xl font-bold">Technologies Used</h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-light-gray rounded-lg text-white font-medium"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <div className="space-y-4 text-gray-400 whitespace-pre-wrap">
                  {project.description}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Project Info */}
          <div className="lg:col-span-1">
            <AnimatedSection delay={0.2}>
              <div className="glass-effect rounded-2xl p-8 sticky top-32">
                <h3 className="text-2xl font-bold mb-6">Project Info</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Category</p>
                    <p className="text-white font-medium">{project.category}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-2">Date</p>
                    <p className="text-white font-medium">
                      {new Date(project.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}
                    </p>
                  </div>

                  {project.project_url && (
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Live Site</p>
                      <a
                        href={project.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:underline break-all"
                      >
                        View Project →
                      </a>
                    </div>
                  )}

                  {project.github_url && (
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Repository</p>
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:underline break-all"
                      >
                        GitHub →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
