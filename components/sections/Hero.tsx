'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Award, MessageCircle } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  const badges = [
    { icon: Shield, text: 'Reliable & Professional' },
    { icon: Clock, text: 'On Time & Efficient' },
    { icon: Award, text: 'Satisfaction Guaranteed' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0e1a]">
      <div 
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80)',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/90 to-[#0a0e1a]/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-accent text-xs font-bold tracking-widest uppercase">
              RELIABLE. LOCAL. PROFESSIONAL.
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">We fix it.</span>
            <br />
            <span className="text-accent relative inline-block">
              You enjoy it.
              <div className="absolute -bottom-2 left-0 h-1 w-32 bg-accent"></div>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base text-gray-300 mb-10 max-w-md leading-relaxed"
          >
            Premium handyman services for homes and businesses across Curaçao.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button variant="primary" size="lg" href="https://wa.me/59995112097">
              <MessageCircle size={20} />
              WhatsApp Us Now
            </Button>
            <Button variant="secondary" size="lg" href="#services">
              Our Services
              <ArrowRight size={20} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-4"
          >
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
                  <badge.icon className="text-accent" size={18} />
                </div>
                <span className="text-xs text-gray-300 font-medium leading-tight">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:flex justify-end items-end h-full"
        >
          <div className="absolute bottom-12 right-12 bg-[#0a0e1a]/90 backdrop-blur-sm border border-accent/30 px-5 py-4 rounded-xl">
            <p className="text-accent text-xs font-bold mb-1">Fast Response</p>
            <p className="text-white text-sm">We reply in</p>
            <p className="text-white text-3xl font-bold">5 minutes</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e1a] to-transparent" />
    </section>
  )
}
