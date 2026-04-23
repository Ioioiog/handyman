'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-xl shadow-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">DLH</span>
            </div>
            <div>
              <div className="text-lg font-bold text-white">DILIGENCE</div>
              <div className="text-xs text-accent font-semibold">LOCAL HANDYMAN</div>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-accent transition-colors duration-300 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/59995112097"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-accent text-black rounded-full font-bold hover:bg-accent-light transition-all duration-300 shadow-glow hover:shadow-glow-lg text-sm flex items-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp / Call
              <span className="text-xs">+5999 511 2097</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-accent transition-colors duration-300 font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/59995112097"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 bg-accent text-black rounded-full font-bold"
            >
              WhatsApp / Call
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
