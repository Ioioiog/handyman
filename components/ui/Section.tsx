import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-12 relative ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
