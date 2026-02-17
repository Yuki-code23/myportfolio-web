// Framer Motion Variants for common animations

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const cardHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

export const imageZoom = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

// Page transition variants
export const pageTransition = {
  hidden: { opacity: 0, y: 20 },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.4, ease: 'easeIn' }
  }
}

// Reveal animation with intersection observer
export const revealVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: 'easeOut'
    }
  })
}
