import { motion } from 'framer-motion'
import { Slide } from '../core/Slide'
import { fadeUp } from '../../utils/animations'

interface ContactSlideProps {
  headline?: string
  date?: string
  clientBrand?: string
  socialHandle?: string
  email?: string
}

export function ContactSlide({
  headline = "LET'S TALK",
  date,
  clientBrand,
  socialHandle,
  email,
}: ContactSlideProps) {
  return (
    <Slide variant="dark" className="overflow-hidden">
      <div className="flex flex-col justify-between h-full px-12 md:px-20 py-16 md:py-20">
        {/* Top row: date + client brand on left, social + email on right */}
        <div className="flex justify-between items-start">
          <div>
            {date && (
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-mmgy-red text-sm mb-2"
              >
                {date}
              </motion.p>
            )}
            {clientBrand && (
              <motion.p
                variants={fadeUp}
                custom={0.1}
                className="text-white text-sm uppercase tracking-wider"
              >
                {clientBrand}
              </motion.p>
            )}
          </div>

          <div className="text-right">
            {socialHandle && (
              <motion.p
                variants={fadeUp}
                custom={0.1}
                className="text-mmgy-red text-sm mb-2"
              >
                {socialHandle}
              </motion.p>
            )}
            {email && (
              <motion.p
                variants={fadeUp}
                custom={0.15}
                className="text-mmgy-red text-sm"
              >
                {email}
              </motion.p>
            )}
          </div>
        </div>

        {/* Bottom: Massive headline */}
        <motion.h1
          variants={fadeUp}
          custom={0.2}
          className="font-display font-bold text-white uppercase leading-[0.85]"
          style={{ fontSize: 'clamp(5rem, 14vw, 12rem)' }}
        >
          {headline}
        </motion.h1>
      </div>
    </Slide>
  )
}
