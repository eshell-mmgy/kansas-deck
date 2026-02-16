import { motion } from 'framer-motion'
import { Slide } from '../core/Slide'
import { fadeUp, slideFromLeft, stagger } from '../../utils/animations'

interface BulletListSlideProps {
  title: string
  bullets: string[]
}

export function BulletListSlide({ title, bullets }: BulletListSlideProps) {
  return (
    <Slide variant="light" className="relative overflow-hidden">
      {/* Thin vertical divider line */}
      <motion.div
        variants={fadeUp}
        custom={0.1}
        className="absolute left-[38%] top-[12%] bottom-[12%] w-px bg-mmgy-gray-300"
      />

      <div className="flex w-full h-full items-center">
        {/* Left side: Big stacked title */}
        <motion.div
          variants={slideFromLeft}
          custom={0}
          className="w-[38%] px-12 md:px-16"
        >
          <h1
            className="font-display font-bold text-mmgy-black uppercase leading-[0.9]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            {title}
          </h1>
        </motion.div>

        {/* Right side: Bullet points */}
        <motion.div
          variants={stagger}
          className="w-[62%] px-8 md:px-12"
        >
          <ul className="space-y-6">
            {bullets.map((bullet, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                custom={0.1 * index}
                className="flex items-start gap-4"
              >
                <span className="text-mmgy-red mt-1 flex-shrink-0 text-lg">→</span>
                <span className="text-mmgy-black/80 text-base leading-relaxed">
                  {bullet}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Slide>
  )
}
