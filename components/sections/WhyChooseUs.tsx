'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, DollarSign, Clock, Users } from 'lucide-react'
import Section from '../ui/Section'
import { useRef } from 'react'

export default function WhyChooseUs() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const features = [
    {
      icon: MapPin,
      title: 'Local expertise in Curaçao',
      description: 'We know the island, the climate, and the unique needs of homes and businesses here.',
    },
    {
      icon: DollarSign,
      title: 'Clear pricing — no surprises',
      description: 'Transparent quotes and honest pricing. You know exactly what you\'re paying for.',
    },
    {
      icon: Clock,
      title: 'Fast response times',
      description: 'We respond within minutes and arrive on time, every time. Your time matters.',
    },
    {
      icon: Users,
      title: 'Friendly & professional',
      description: 'Our team is courteous, skilled, and dedicated to exceeding your expectations.',
    },
  ]

  return (
    <Section id="why-us" className="bg-[#0a0e1a] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">WHY CHOOSE US?</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Local. Reliable.<br /></span>
              <span className="text-accent">Skilled.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Curaçao Handyman stands for quality, honesty, and clear communication. We treat your home or business like it's our own.
            </p>
          </motion.div>

          <div className="space-y-3" ref={ref}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white text-sm font-medium">{feature.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-accent/20">
            <div 
              className="aspect-video bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-accent/90 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-bold text-lg mb-3">Proudly serving all areas in Curaçao</p>
              <div className="flex flex-wrap gap-2">
                {['Willemstad', 'Jan Thiel', 'Blue Bay', 'Westpunt', 'Banda Abou'].map((location) => (
                  <span key={location} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
