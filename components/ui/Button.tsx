'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-accent text-black hover:bg-accent-light shadow-glow hover:shadow-glow-lg font-bold',
    secondary: 'bg-transparent border-2 border-white/30 hover:border-accent text-white hover:text-accent',
    whatsapp: 'bg-neon-green text-white hover:bg-neon-green/90 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)]',
  }

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const ButtonContent = () => (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
        <ButtonContent />
      </a>
    )
  }

  return (
    <button onClick={onClick}>
      <ButtonContent />
    </button>
  )
}
