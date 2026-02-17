'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-matt-black flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="text-4xl font-bold gradient-text mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          PORTFOLIO
        </motion.div>
        
        <div className="flex space-x-2 justify-center">
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
      </div>
    </div>
  )
}
