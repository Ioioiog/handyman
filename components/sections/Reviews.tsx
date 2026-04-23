'use client'

import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Section from '../ui/Section'
import { useState } from 'react'

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      name: 'Maria S.',
      location: 'Willemstad',
      rating: 5,
      text: 'Fast service, top quality, and very friendly. Highly recommended in Curaçao!',
    },
    {
      name: 'John D.',
      location: 'Punda',
      rating: 5,
      text: 'Professional team that arrived on time and fixed everything perfectly. Will definitely call again.',
    },
    {
      name: 'Carmen R.',
      location: 'Saliña',
      rating: 5,
      text: 'Excellent work on our AC installation. Fair pricing and great communication throughout.',
    },
    {
      name: 'Roberto M.',
      location: 'Otrobanda',
      rating: 5,
      text: 'Best handyman service on the island! They transformed our office space beautifully.',
    },
  ]

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <Section id="reviews" className="bg-[#0a0e1a]">
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-gray-400 text-sm">5.0 rating from 200+ satisfied customers</p>
        </motion.div>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-[#141824] border border-accent/20 rounded-3xl p-8 md:p-12"
        >
          <div className="flex gap-1 mb-6">
            {[...Array(reviews[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            "{reviews[currentIndex].text}"
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent font-bold text-xl">
              {reviews[currentIndex].name.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-white">{reviews[currentIndex].name}</div>
              <div className="text-gray-400 text-sm">— {reviews[currentIndex].location}</div>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevReview}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-accent flex items-center justify-center transition-all duration-300 hover:text-accent"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent w-8' : 'bg-gray-600 w-2'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextReview}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-accent flex items-center justify-center transition-all duration-300 hover:text-accent"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </Section>
  )
}
