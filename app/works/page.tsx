'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getProjects, Project } from '@/lib/microcms'
import ProjectCard from '@/components/projects/ProjectCard'
import AnimatedSection from '@/components/home/AnimatedSection'
import { fadeInUp } from '@/lib/animations'

const categories = [
  'All',
  'Web Development',
  'Mobile Development',
  'Design',
  'UI/UX',
  'Branding',
]

export default function WorksPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects()
        setProjects(data)
        setFilteredProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const filterProjects = (category: string) => {
    setActiveCategory(category)

    if (category === 'All') {
      setFilteredProjects(projects)
    } else {
      const filtered = projects.filter((project) => project.category === category)
      setFilteredProjects(filtered)
    }
  }

  if (loading) {
    return (
      <div className="pt-32 pb-20 bg-matt-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass-effect rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 bg-matt-black">
      {/* Hero Section */}
      <section className="container-custom mb-16">
        <AnimatedSection>
          <motion.p
            variants={fadeInUp}
            className="text-gold font-medium mb-4 tracking-wider"
          >
            MY PORTFOLIO
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Featured <span className="gradient-text">Works</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-3xl"
          >
            Explore my collection of projects showcasing design excellence,
            technical expertise, and creative problem-solving across various
            domains.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* Filter Section */}
      <section className="container-custom mb-12">
        <AnimatedSection>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => filterProjects(category)}
                className={`px-6 py-3 rounded-full font-medium smooth-transition cursor-pointer ${activeCategory === category
                  ? 'bg-gold text-matt-black'
                  : 'glass-effect text-white hover:border-gold'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Projects Grid */}
      <section className="container-custom">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">
              No projects found in this category.
            </p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        )}
      </section>

      {/* Stats Section */}
      <section className="container-custom mt-20">
        <AnimatedSection>
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <motion.h3
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  {projects.length}+
                </motion.h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>

              <div>
                <motion.h3
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  S-Tier
                </motion.h3>
                <p className="text-gray-400">Streaming Rank</p>
              </div>

              <div>
                <motion.h3
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  2025
                </motion.h3>
                <p className="text-gray-400">Tech Transition</p>
              </div>

              <div>
                <motion.h3
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  10+
                </motion.h3>
                <p className="text-gray-400">Creators Supported</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
