import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Slide } from '../core/Slide'
import { fadeUp, fadeIn, scaleIn } from '../../utils/animations'

interface StatHighlightSlideProps {
  stat: string
  headline: string
  description: ReactNode
  image?: string
  variant?: 'light' | 'red'
}

export function StatHighlightSlide({
  stat,
  headline,
  description,
  image,
  variant = 'light',
}: StatHighlightSlideProps) {
  const isRed = variant === 'red'

  return (
    <Slide variant="white" className="overflow-hidden">
      <div className="flex w-full h-full">
        {/* Left side: Illustration / Image */}
        <motion.div
          variants={fadeIn}
          custom={0}
          className="w-1/2 h-full flex items-center justify-center bg-mmgy-white p-12"
        >
          {image ? (
            <img
              src={image}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            /* Placeholder line art illustration */
            <svg viewBox="0 0 300 250" className="w-72 h-60 text-mmgy-black">
              <rect x="60" y="40" width="180" height="140" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="200" cy="70" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M60 140 L120 100 L160 120 L220 70 L240 90" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M40 60 Q30 30 50 20 Q70 10 80 30" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M40 60 L40 100 L30 90" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <rect x="20" y="100" width="30" height="50" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="35" y="190" r="8" fill="none" stroke="#E63312" strokeWidth="1.5" />
              <path d="M30 190 L32 192 L40 184" fill="none" stroke="#E63312" strokeWidth="1.5" />
            </svg>
          )}
        </motion.div>

        {/* Right side: Stat + Content */}
        <div
          className={`w-1/2 h-full flex flex-col justify-center px-12 md:px-16 ${
            isRed ? 'bg-mmgy-red text-white' : 'bg-mmgy-cream text-mmgy-black'
          }`}
        >
          {/* Massive stat number */}
          <motion.p
            variants={scaleIn}
            custom={0.15}
            className={`font-display font-bold leading-none mb-2 ${
              isRed ? 'text-white' : 'text-mmgy-black'
            }`}
            style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
          >
            {stat}
          </motion.p>

          {/* Headline */}
          <motion.h3
            variants={fadeUp}
            custom={0.3}
            className={`font-display font-bold uppercase leading-tight mb-4 ${
              isRed ? 'text-white' : 'text-mmgy-black'
            }`}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
          >
            {headline}
          </motion.h3>

          {/* Red accent line */}
          <motion.div
            variants={fadeUp}
            custom={0.4}
            className={`w-full h-px mb-4 ${isRed ? 'bg-white/30' : 'bg-mmgy-red'}`}
          />

          {/* Description */}
          <motion.div
            variants={fadeUp}
            custom={0.45}
            className={`text-sm leading-relaxed ${
              isRed ? 'text-white/80' : 'text-mmgy-gray-700'
            }`}
          >
            {description}
          </motion.div>
        </div>
      </div>
    </Slide>
  )
}
