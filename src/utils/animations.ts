const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      delay: delay + 0.2,
      ease: smoothEase,
    },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0, filter: 'blur(4px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: delay + 0.2,
      ease: smoothEase,
    },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(4px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: delay + 0.2,
      ease: smoothEase,
    },
  }),
}

export const slideFromLeft = {
  hidden: { opacity: 0, x: -60, filter: 'blur(4px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: delay + 0.2,
      ease: smoothEase,
    },
  }),
}

export const slideFromRight = {
  hidden: { opacity: 0, x: 60, filter: 'blur(4px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: delay + 0.2,
      ease: smoothEase,
    },
  }),
}

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}
