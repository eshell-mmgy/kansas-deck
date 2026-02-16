import { motion } from 'framer-motion'
import { Slide } from '../core/Slide'
import { fadeUp, stagger } from '../../utils/animations'

interface NumberedColumnsSlideProps {
  title?: string
  description?: string
  columns: Array<{
    number: string
    headline: string
    description: string
  }>
}

export function NumberedColumnsSlide({ title, description, columns }: NumberedColumnsSlideProps) {
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
        className="flex flex-col w-full h-full justify-center px-10 md:px-16 pl-8 md:pl-12"
        style={{ marginLeft: '12px' }}
      >
        {/* Title & Description */}
        {(title || description) && (
          <motion.div variants={fadeUp} custom={0} className="mb-10">
            {title && (
              <h2
                className="font-display font-bold text-mmgy-black uppercase leading-[0.95] mb-3"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="text-mmgy-gray-700 text-base md:text-lg leading-relaxed max-w-5xl">
                {description}
              </p>
            )}
          </motion.div>
        )}

        {/* Columns */}
        <div className="flex w-full">
          {columns.map((col, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={0.15 * (index + 1)}
              className="flex-1 px-4 md:px-8 first:pl-0"
            >
              {/* Number */}
              <p className="text-mmgy-red font-body text-base mb-4">{col.number}</p>

              {/* Headline */}
              <h3
                className="font-display font-bold text-mmgy-black uppercase leading-[0.95] mb-5"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                {col.headline}
              </h3>

              {/* Description */}
              <p className="text-mmgy-gray-700 text-base md:text-lg leading-relaxed">
                {col.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Slide>
  )
}
