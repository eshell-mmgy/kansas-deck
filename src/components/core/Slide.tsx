import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SlideProps {
  children: ReactNode
  className?: string
  variant?: 'dark' | 'light' | 'white' | 'red'
}

const backgroundVariants = {
  dark: 'bg-mmgy-black text-white',
  light: 'bg-mmgy-cream text-mmgy-black',
  white: 'bg-mmgy-white text-mmgy-black',
  red: 'bg-mmgy-red text-white',
}

export function Slide({ children, className = '', variant = 'dark' }: SlideProps) {
  return (
    <motion.div
      className={`w-full h-full flex flex-col ${backgroundVariants[variant]} ${className}`}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}
