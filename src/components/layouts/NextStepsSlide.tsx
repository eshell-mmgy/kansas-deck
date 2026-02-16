import { motion } from 'framer-motion'
import { Slide } from '../core/Slide'
import { fadeUp, fadeIn, slideFromLeft, stagger } from '../../utils/animations'

interface NextStepsSlideProps {
  steps: Array<{
    number: number
    date: string
    description: string
  }>
}

export function NextStepsSlide({ steps }: NextStepsSlideProps) {
  return (
    <Slide variant="light" className="overflow-hidden">
      <div className="flex w-full h-full items-center">
        {/* Left: Big NEXT STEPS title */}
        <motion.div
          variants={slideFromLeft}
          custom={0}
          className="w-[35%] px-12 md:px-16"
        >
          <h1
            className="font-display font-bold text-mmgy-black uppercase leading-[0.85]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            NEXT
            <br />
            STEPS
          </h1>
        </motion.div>

        {/* Right: Timeline steps */}
        <motion.div
          variants={stagger}
          className="w-[65%] relative px-8 md:px-12"
        >
          {/* Vertical timeline line */}
          <motion.div
            variants={fadeIn}
            custom={0.2}
            className="absolute left-[52px] md:left-[68px] top-[10%] bottom-[10%] w-px bg-mmgy-red"
          />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={0.2 + index * 0.15}
                className="flex items-start gap-6"
              >
                {/* Circled number */}
                <div className="w-10 h-10 rounded-full border-2 border-mmgy-red flex items-center justify-center flex-shrink-0 bg-mmgy-cream z-10">
                  <span className="text-mmgy-red font-display font-bold text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-mmgy-black uppercase text-xl mb-1">
                    {step.date}
                  </h3>
                  <p className="text-mmgy-gray-700 text-sm leading-relaxed">
                    {step.description}
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
