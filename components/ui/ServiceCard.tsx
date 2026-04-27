'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  image: string
  title: string
  description: string
  index: number
}

export default function ServiceCard({ image, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      <div className="bg-[#141824] border border-accent/20 hover:border-accent/50 rounded-2xl p-6 h-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,87,184,0.15)]">
        <motion.div
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ duration: 0.3 }}
          className="w-full h-32 mb-6 flex items-center justify-center"
        >
          <img src={image} alt={title} className="w-24 h-24 object-contain" />
        </motion.div>
        
        <h3 className="text-lg font-bold mb-2 text-white">
          {title}
        </h3>
        
        <p className="text-gray-400 text-xs leading-relaxed mb-4">
          {description}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="flex items-center gap-2 text-accent text-xs font-semibold"
        >
          <div className="w-6 h-6 rounded-full border border-accent flex items-center justify-center">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
