import { motion } from 'framer-motion'
import { Slide } from '../core/Slide'
import { fadeUp, fadeIn } from '../../utils/animations'

interface QuoteSlideProps {
  quote: string
  highlightWords?: string[]
  variant?: 'dark' | 'light' | 'dark-image'
  image?: string
}

function renderQuoteWithHighlights(quote: string, highlightWords: string[] = []) {
  if (highlightWords.length === 0) return quote

  // Build a regex that matches any of the highlight words (case-insensitive)
  const pattern = highlightWords
    .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')
  const regex = new RegExp(`(${pattern})`, 'gi')

  const parts = quote.split(regex)

  return parts.map((part, i) => {
    const isHighlighted = highlightWords.some(
      (w) => w.toLowerCase() === part.toLowerCase()
    )
    return isHighlighted ? (
      <span key={i} className="text-mmgy-red">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  })
}

export function QuoteSlide({
  quote,
  highlightWords,
  variant = 'dark',
  image,
}: QuoteSlideProps) {
  if (variant === 'dark-image') {
    return (
      <Slide variant="dark" className="overflow-hidden">
        <div className="flex w-full h-full">
          {/* Left: Quote text */}
          <div className="w-[55%] flex items-center px-12 md:px-16">
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-display font-bold text-white uppercase leading-[0.95]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              {renderQuoteWithHighlights(quote, highlightWords)}
            </motion.h2>
          </div>

          {/* Right: Image with red geometric corner */}
          <div className="w-[45%] h-full relative">
            {/* Red corner accent */}
            <motion.div
              variants={fadeIn}
              custom={0.2}
              className="absolute top-0 right-0 w-32 h-32 bg-mmgy-red z-10"
              style={{
                clipPath: 'polygon(30% 0%, 100% 0%, 100% 70%)',
              }}
            />
            <motion.div
              variants={fadeIn}
              custom={0.1}
              className="w-full h-full"
            >
              {image ? (
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-mmgy-charcoal to-mmgy-black" />
              )}
            </motion.div>
          </div>
        </div>
      </Slide>
    )
  }

  // Dark or light full-bleed quote
  const isDark = variant === 'dark'

  return (
    <Slide variant={isDark ? 'dark' : 'light'} className="overflow-hidden">
      <div className="flex items-center h-full px-12 md:px-20">
        {/* Red accent line on the left for dark variant */}
        {isDark && (
          <motion.div
            variants={fadeIn}
            custom={0}
            className="w-1 h-48 bg-mmgy-red mr-8 flex-shrink-0"
          />
        )}

        <motion.h2
          variants={fadeUp}
          custom={0.1}
          className={`font-display font-bold uppercase leading-[0.95] ${
            isDark ? 'text-white' : 'text-mmgy-black'
          }`}
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          {renderQuoteWithHighlights(quote, highlightWords)}
        </motion.h2>
      </div>
    </Slide>
  )
}
