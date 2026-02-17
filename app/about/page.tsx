'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/home/AnimatedSection'
import { fadeInUp } from '@/lib/animations'
import {
  HiCode,
  HiColorSwatch,
  HiDeviceMobile,
  HiLightningBolt,
  HiCheckCircle
} from 'react-icons/hi'

const skills = [
  {
    category: 'Frontend Development',
    icon: HiCode,
    items: [
      'React / Next.js',
      'TypeScript / JavaScript',
      'Tailwind CSS / Styled Components',
      'Framer Motion / GSAP',
      'HTML5 / CSS3',
    ],
  },
  {
    category: 'Design',
    icon: HiColorSwatch,
    items: [
      'UI/UX Design',
      'Figma / Adobe XD',
      'Adobe Photoshop / Illustrator',
      'Prototyping',
      'Design Systems',
    ],
  },
  {
    category: 'Backend & Database',
    icon: HiLightningBolt,
    items: [
      'Node.js / Express',
      'Supabase / Firebase',
      'PostgreSQL / MongoDB',
      'RESTful APIs',
      'GraphQL',
    ],
  },
  {
    category: 'Mobile & Others',
    icon: HiDeviceMobile,
    items: [
      'React Native',
      'Responsive Design',
      'Git / GitHub',
      'Vercel / Netlify',
      'Agile / Scrum',
    ],
  },
]

const experiences = [
  {
    year: '2023 - Present',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of enterprise-level web applications using Next.js and modern tech stack.',
  },
  {
    year: '2021 - 2023',
    title: 'UI/UX Designer & Frontend Developer',
    company: 'Creative Digital Agency',
    description: 'Designed and developed responsive websites and web applications for various clients.',
  },
  {
    year: '2019 - 2021',
    title: 'Junior Web Developer',
    company: 'StartUp Solutions',
    description: 'Built and maintained web applications, collaborated with design team on UI implementations.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-matt-black">
      {/* Hero Section */}
      <section className="container-custom mb-20">
        <AnimatedSection>
          <motion.p
            variants={fadeInUp}
            className="text-gold font-medium mb-4 tracking-wider"
          >
            ABOUT ME
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Creating Digital <span className="gradient-text">Excellence</span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="text-gray-400 text-lg space-y-4 max-w-3xl"
          >
            <p>
              I'm a passionate designer and engineer with over 5 years of experience
              crafting exceptional digital experiences. My expertise spans across
              modern web technologies, user interface design, and creating scalable
              applications.
            </p>
            <p>
              I believe in the perfect blend of aesthetics and functionality,
              ensuring every project not only looks stunning but also delivers
              outstanding performance and user experience.
            </p>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Skills Section */}
      <section className="container-custom mb-20">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.category} delay={index * 0.1}>
              <motion.div
                className="glass-effect rounded-2xl p-8 h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/10 rounded-xl">
                    <skill.icon className="text-3xl text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold">{skill.category}</h3>
                </div>

                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-400">
                      <HiCheckCircle className="text-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container-custom">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-12 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="glass-effect rounded-2xl p-8 border-l-4 border-gold"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-gold font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="px-4 py-2 bg-light-gray rounded-full text-sm font-medium">
                      {exp.year}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400">{exp.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  )
}
