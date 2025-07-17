'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface ScrollAnimatedProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  blur?: boolean
}

export const ScrollAnimated = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 20,
  blur = true,
}: ScrollAnimatedProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: y,
        filter: blur ? 'blur(6px)' : 'blur(0px)',
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }
          : {}
      }
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeOut',
      }}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  )
}