import { motion } from 'framer-motion'
import { Slide } from '../core/Slide'
import { fadeUp, fadeIn } from '../../utils/animations'

interface SplitImageContentSlideProps {
  headline: string
  body: string
  image: string
  imagePosition?: 'left' | 'right'
  variant?: 'light' | 'dark'
}

export function SplitImageContentSlide({
  headline,
  body,
  image,
  imagePosition = 'left',
  variant = 'light',
}: SplitImageContentSlideProps) {
  const isDark = variant === 'dark'

  const imageBlock = (
    <motion.div
      variants={fadeIn}
      custom={0}
      className="w-1/2 h-full"
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />
    </motion.div>
  )

  const contentBlock = (
    <div
      className={`w-1/2 h-full flex flex-col justify-center px-12 md:px-16 ${
        isDark ? 'bg-mmgy-black' : 'bg-mmgy-white'
      }`}
    >
      <motion.h2
        variants={fadeUp}
        custom={0.2}
        className={`font-display font-bold uppercase leading-[0.9] mb-6 ${
          isDark ? 'text-white' : 'text-mmgy-black'
        }`}
        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
      >
        {headline}
      </motion.h2>

      <motion.p
        variants={fadeUp}
        custom={0.35}
        className={`text-base leading-relaxed ${
          isDark ? 'text-white/70' : 'text-mmgy-gray-700'
        }`}
      >
        {body}
      </motion.p>
    </div>
  )

  return (
    <Slide
      variant={isDark ? 'dark' : 'white'}
      className="overflow-hidden"
    >
      <div className="flex w-full h-full">
        {imagePosition === 'left' ? (
          <>
            {imageBlock}
            {contentBlock}
          </>
        ) : (
          <>
            {contentBlock}
            {imageBlock}
          </>
        )}
      </div>
    </Slide>
  )
}
