import { motion } from 'framer-motion'
import { Slide } from '../core/Slide'
import { fadeUp, fadeIn, slideFromLeft, stagger } from '../../utils/animations'

interface LadderSlideProps {
  title: string
  rungs: Array<{
    label: string
    headline: string
    description: string
  }>
  variant?: 'light' | 'dark'
}

export function LadderSlide({ title, rungs, variant = 'light' }: LadderSlideProps) {
  const isDark = variant === 'dark'

  return (
    <Slide variant={variant} className="overflow-hidden">
      <div className="flex w-full h-full items-center">
        {/* Left: Big stacked title */}
        <motion.div
          variants={slideFromLeft}
          custom={0}
          className="w-[28%] px-8 md:px-12"
        >
          <h1
            className={`font-display font-bold uppercase leading-[0.85] ${
              isDark ? 'text-mmgy-red' : 'text-mmgy-black'
            }`}
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
          >
            {title.split(' ').map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Right: Vertical ladder progression */}
        <motion.div
          variants={stagger}
          className="w-[72%] relative px-6 md:px-10 py-8"
        >
          {/* Vertical ladder line */}
          <motion.div
            variants={fadeIn}
            custom={0.2}
            className="absolute left-[38px] md:left-[54px] top-[8%] bottom-[8%] w-0.5 bg-mmgy-red/30"
          />

          <div className="space-y-5">
            {rungs.map((rung, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={0.15 + index * 0.12}
                className="flex items-start gap-4"
              >
                {/* Rung marker */}
                <div className="flex flex-col items-center flex-shrink-0 z-10">
                  <div
                    className={`w-7 h-7 rounded-full border-2 border-mmgy-red flex items-center justify-center ${
                      isDark ? 'bg-mmgy-black' : 'bg-mmgy-cream'
                    }`}
                  >
                    <span className="text-mmgy-red font-display font-bold text-xs">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className={`text-[10px] uppercase tracking-[0.2em] mb-0.5 ${
                    isDark ? 'text-white/40' : 'text-mmgy-gray-500'
                  }`}>
                    {rung.label}
                  </p>
                  <h3
                    className={`font-display font-bold uppercase leading-tight mb-1 ${
                      isDark ? 'text-white' : 'text-mmgy-black'
                    }`}
                    style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)' }}
                  >
                    {rung.headline}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    isDark ? 'text-white/60' : 'text-mmgy-gray-700'
                  }`}>
                    {rung.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
