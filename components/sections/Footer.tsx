'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const services = [
    'General Repairs',
    'Painting',
    'Plumbing',
    'Electrical Work',
    'Furniture Assembly',
    'Air Conditioning',
  ]

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:info@curacaohandyman.com', label: 'Email' },
  ]

  return (
    <footer className="bg-[#050810] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">DLH</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">DILIGENCE</div>
                <div className="text-xs text-accent font-semibold">LOCAL HANDYMAN</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Your trusted handyman<br />for all jobs in Curaçao.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-accent flex items-center justify-center transition-all duration-300 hover:text-accent"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <span>Serving all of Curaçao</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
                <a href="tel:+59995112097" className="hover:text-accent transition-colors">
                  +5999 511 2097
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={20} className="text-accent mt-1 flex-shrink-0" />
                <a href="mailto:info@curacaohandyman.com" className="hover:text-accent transition-colors">
                  info@curacaohandyman.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Diligence Local Handyman. All rights reserved. Built with pride in Curaçao 🇨🇼 💛</p>
        </div>
      </div>
    </footer>
  )
}
