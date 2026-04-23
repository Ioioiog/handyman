'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import Section from '../ui/Section'
import Button from '../ui/Button'

export default function CTA() {
  return (
    <Section id="contact" className="bg-[#0a0e1a] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-[#141824] border border-accent/30 rounded-3xl p-8 md:p-12 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&q=80" 
                  alt="Toolbox"
                  className="w-64 h-64 object-contain drop-shadow-2xl"
                />
              </motion.div>
              
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(255, 195, 0, 0.4)',
                    '0 0 80px rgba(255, 195, 0, 0.6)',
                    '0 0 40px rgba(255, 195, 0, 0.4)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(255,195,0,0.3) 0%, transparent 70%)' }}
              />
              
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border-2 border-accent/20 rounded-full"
              />
            </div>
          </motion.div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Ready to get<br />your </span>
              <span className="text-accent">job done?</span>
            </h2>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Contact us today for a free quote.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <Button variant="primary" size="lg" href="https://wa.me/59995112097">
                <MessageCircle size={20} />
                WhatsApp Us Now
              </Button>
              <Button variant="secondary" size="lg" href="tel:+59995112097">
                <Phone size={20} />
                +5999 511 2097
              </Button>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Built with pride in Curaçao 🇨🇼 💛
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
