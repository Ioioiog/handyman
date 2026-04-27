'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Section from '../ui/Section'
import ServiceCard from '../ui/ServiceCard'
import Button from '../ui/Button'

export default function Services() {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=200&q=80',
      title: 'General Repairs',
      description: 'Small or large jobs, we fix it right.',
    },
    {
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=200&q=80',
      title: 'Painting',
      description: 'Interior or exterior with a perfect finish.',
    },
    {
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=200&q=80',
      title: 'Plumbing',
      description: 'From leaks to full installations.',
    },
    {
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=200&q=80',
      title: 'Electrical Work',
      description: 'Safe installations, repairs & maintenance.',
    },
    {
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80',
      title: 'Furniture Assembly',
      description: 'Flat-pack or custom — fast and precise.',
    },
    {
      image: 'https://images.unsplash.com/photo-1631545806609-c2b0e2f0e4c9?w=200&q=80',
      title: 'Air Conditioning Services',
      description: 'Installation, maintenance & repair.',
    },
  ]

  return (
    <Section id="services" className="bg-[#0a0e1a]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">OUR SERVICES</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          What can we<br />
          <span className="text-accent">help you with?</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Button variant="secondary" size="md" href="#contact">
          View All Services
          <ArrowRight size={20} />
        </Button>
      </motion.div>
    </Section>
  )
}
