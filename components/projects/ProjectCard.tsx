'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/supabase'
import { HiArrowRight } from 'react-icons/hi'
import { cardHover, imageZoom } from '@/lib/animations'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/works/${project.id}`}>
        <motion.div
          className="group relative glass-effect rounded-2xl overflow-hidden cursor-pointer"
          variants={cardHover}
          initial="rest"
          whileHover="hover"
        >
          {/* Image */}
          <div className="relative h-80 overflow-hidden">
            <motion.div variants={imageZoom} className="h-full w-full">
              <Image
                src={project.image_url}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-matt-black via-matt-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Category badge */}
            <div className="absolute top-4 right-4 px-4 py-2 glass-effect rounded-full text-sm font-medium text-gold">
              {project.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-gold transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-400 mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-light-gray rounded-full text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-3 py-1 bg-light-gray rounded-full text-xs text-gray-300">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* View more */}
            <div className="flex items-center text-gold font-medium group-hover:gap-2 transition-all">
              <span>View Project</span>
              <HiArrowRight className="text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
