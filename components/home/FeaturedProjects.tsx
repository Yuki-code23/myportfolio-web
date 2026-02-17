'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { projectApi, Project } from '@/lib/supabase'
import ProjectCard from '@/components/projects/ProjectCard'
import AnimatedSection from '@/components/home/AnimatedSection'
import { HiArrowRight } from 'react-icons/hi'

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectApi.getFeatured()
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section className="section-padding bg-matt-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-effect rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-matt-black">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-medium mb-4 tracking-wider"
            >
              FEATURED WORKS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Selected <span className="gradient-text">Projects</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Explore my latest works showcasing design excellence and technical expertise
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <AnimatedSection>
          <div className="text-center">
            <Link href="/works">
              <motion.button
                className="btn-outline flex items-center gap-2 mx-auto cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
                <HiArrowRight className="text-xl" />
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
