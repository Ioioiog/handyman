'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/59995112097"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-neon-green text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110"
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      <MessageCircle size={28} />
    </motion.a>
  )
}
