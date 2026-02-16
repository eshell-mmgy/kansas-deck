import { motion } from 'framer-motion'
import { Slide } from '../core/Slide'
import { fadeUp, stagger } from '../../utils/animations'

interface NumberedColumnsSlideProps {
  columns: Array<{
    number: string
    headline: string
    description: string
  }>
}

export function NumberedColumnsSlide({ columns }: NumberedColumnsSlideProps) {
  return (
    <Slide variant="white" className="relative overflow-hidden">
      {/* Decorative left edge gradient strip */}
      <motion.div
        variants={fadeUp}
        custom={0}
        className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b from-mmgy-red via-[#E6831A] to-mmgy-red"
      />

      <motion.div
        variants={stagger}
        className="flex w-full h-full items-start pt-20 px-10 md:px-16 pl-8 md:pl-12"
        style={{ marginLeft: '12px' }}
      >
        {columns.map((col, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            custom={0.15 * index}
            className="flex-1 px-4 md:px-6"
          >
            {/* Number */}
            <p className="text-mmgy-red font-body text-sm mb-3">{col.number}</p>

            {/* Headline */}
            <h3
              className="font-display font-bold text-mmgy-black uppercase leading-[0.95] mb-4"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
            >
              {col.headline}
            </h3>

            {/* Description */}
            <p className="text-mmgy-gray-700 text-sm leading-relaxed">
              {col.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Slide>
  )
}
