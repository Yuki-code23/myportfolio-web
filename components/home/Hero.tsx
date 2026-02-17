'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-matt-black via-dark-gray to-matt-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <motion.div
        className="container-custom relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          variants={fadeInUp}
          className="text-gold font-medium mb-4 tracking-wider"
        >
          WELCOME TO MY PORTFOLIO
        </motion.p>

        {/* Main headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Designer &<br />
          <span className="gradient-text">Engineer</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Crafting exceptional digital experiences through innovative design
          and cutting-edge technology
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/works">
            <motion.button
              className="btn-primary flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Works
              <HiArrowRight className="text-xl" />
            </motion.button>
          </Link>
          
          <Link href="/contact">
            <motion.button
              className="btn-outline cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gold rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
