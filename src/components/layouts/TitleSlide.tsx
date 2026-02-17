import { motion } from 'framer-motion'
import { Slide } from '../core/Slide'
import { MmgyLogo } from '../core/MmgyLogo'
import { fadeUp, fadeIn, slideFromLeft } from '../../utils/animations'

interface TitleSlideProps {
  clientName: string
  subtitle?: string
  date?: string
  meetingTopics?: string[]
  backgroundImage?: string
}

export function TitleSlide({
  clientName,
  subtitle,
  date,
  meetingTopics,
  backgroundImage,
}: TitleSlideProps) {
  return (
    <Slide variant="dark" className="relative overflow-hidden">
      <div className="flex w-full h-full">
        {/* Left side: Pentagon image */}
        <motion.div
          variants={slideFromLeft}
          custom={0}
          className="relative w-[55%] h-full flex items-center justify-center p-8 pl-12"
        >
          <div className="relative w-full h-[85%]">
            {/* Red border frame */}
            <div
              className="absolute top-6 left-8 inset-0 clip-pentagon"
              style={{
                background: '#E63312',
                padding: '3px',
              }}
            >
              <div className="w-full h-full clip-pentagon overflow-hidden bg-mmgy-black">
                {backgroundImage ? (
                  <img
                    src={backgroundImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-mmgy-charcoal to-mmgy-black" />
                )}
              </div>
            </div>

            {/* MMGY Logo overlaid on top-left of the image */}
            <motion.div
              variants={fadeIn}
              custom={0.4}
              className="absolute top-4 left-4 z-10"
            >
              <MmgyLogo className="w-16 h-12" color="red" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right side: Content */}
        <div className="w-[45%] flex flex-col justify-center pr-12 pl-4">
          {/* Client name - massive red condensed caps */}
          <motion.h1
            variants={fadeUp}
            custom={0.2}
            className="font-display font-bold text-mmgy-red uppercase leading-[0.9] mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            {clientName}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={fadeUp}
              custom={0.35}
              className="font-display font-bold text-white uppercase text-2xl md:text-3xl leading-tight mb-8"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Date */}
          {date && (
            <motion.div variants={fadeUp} custom={0.45} className="mb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">
                Date
              </p>
              <p className="text-white text-sm">{date}</p>
            </motion.div>
          )}

          {/* Meeting Topics */}
          {meetingTopics && meetingTopics.length > 0 && (
            <motion.div variants={fadeUp} custom={0.55}>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
                Meeting Topics
              </p>
              <ul className="space-y-1">
                {meetingTopics.map((topic, i) => (
                  <li key={i} className="text-white text-sm flex items-center gap-2">
                    <span className="text-mmgy-red text-xs">•</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </Slide>
  )
}
