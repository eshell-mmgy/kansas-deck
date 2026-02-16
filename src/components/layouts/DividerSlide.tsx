import { motion } from 'framer-motion'
import { Slide } from '../core/Slide'
import { fadeUp } from '../../utils/animations'

interface DividerSlideProps {
  title: string
  headerOne?: string
  subtitleOne?: string
  headerTwo?: string
  subtitleTwo?: string
  variant?: 'dark' | 'light'
}

export function DividerSlide({
  title,
  headerOne,
  subtitleOne,
  headerTwo,
  subtitleTwo,
  variant = 'light',
}: DividerSlideProps) {
  const isDark = variant === 'dark'

  return (
    <Slide variant={variant} className="relative overflow-hidden">
      <div className="flex flex-col justify-end h-full px-12 pb-16 md:px-20 md:pb-20">
        {/* Big title */}
        <motion.h1
          variants={fadeUp}
          custom={0}
          className={`font-display font-bold uppercase leading-[0.9] mb-8 ${
            isDark ? 'text-mmgy-red' : 'text-mmgy-black'
          }`}
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          {title}
        </motion.h1>

        {/* Header/subtitle pairs */}
        <div className="space-y-4">
          {headerOne && (
            <motion.div variants={fadeUp} custom={0.2}>
              <p
                className={`text-xs uppercase tracking-[0.2em] mb-0.5 ${
                  isDark ? 'text-white/50' : 'text-mmgy-gray-500'
                }`}
              >
                {headerOne}
              </p>
              {subtitleOne && (
                <p className={`text-sm ${isDark ? 'text-white' : 'text-mmgy-black'}`}>
                  {subtitleOne}
                </p>
              )}
            </motion.div>
          )}

          {headerTwo && (
            <motion.div variants={fadeUp} custom={0.35}>
              <p
                className={`text-xs uppercase tracking-[0.2em] mb-0.5 ${
                  isDark ? 'text-white/50' : 'text-mmgy-gray-500'
                }`}
              >
                {headerTwo}
              </p>
              {subtitleTwo && (
                <p className={`text-sm ${isDark ? 'text-white' : 'text-mmgy-black'}`}>
                  {subtitleTwo}
                </p>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </Slide>
  )
}
