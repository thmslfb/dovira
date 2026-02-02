'use client'

import { AnimatedGroup } from '@/components/animations'
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui'
import { ArrowDownRight, Play } from 'lucide-react'
import { AnimatePresence, motion, useSpring } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { WorkWithTicker } from './index'

import { PORTFOLIO_VIDEOS } from '@/lib/constants/videos'

const videos = PORTFOLIO_VIDEOS

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export const Hero = () => {
  const [isHover, setIsHover] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isPlayHover, setIsPlayHover] = useState(false)
  const [isPortfolioHover, setIsPortfolioHover] = useState(false)
  const mousePosition = {
    x: useSpring(0, { stiffness: 90, damping: 18, mass: 1.7 }),
    y: useSpring(0, { stiffness: 90, damping: 18, mass: 1.7 }),
  }
  const offset = 115

  useEffect(() => {
    if (isHover) {
      const manageMouseMove = (e: MouseEvent) => {
        mousePosition.x.set(e.clientX + offset / 4.5)
        mousePosition.y.set(e.clientY - offset)
      }
      window.addEventListener('mousemove', manageMouseMove)
      return () => window.removeEventListener('mousemove', manageMouseMove)
    }
  }, [isHover, mousePosition.x, mousePosition.y, offset])

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    window.addEventListener('mouseup', handleMouseUp)
    return () => window.removeEventListener('mouseup', handleMouseUp)
  }, [])

  return (
    <section className="relative pt-24 pb-12 md:pb-20 lg:pb-8 md:pt-36 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[rgb(180,120,255)]/8 blur-3xl animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <div
          className="absolute top-40 right-20 w-96 h-96 rounded-full bg-[rgb(160,100,255)]/6 blur-3xl animate-pulse"
          style={{ animationDelay: '2s', animationDuration: '6s' }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-[rgb(200,140,255)]/4 blur-3xl animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(229,208,255)]/30 to-transparent" />
      </div>

      <AnimatePresence>
        {isHover && (
          <motion.div
            className="py-3 px-6 bg-neutral-900/50 text-white backdrop-blur-2xl rounded-full w-fit fixed z-50 pointer-events-none text-xs font-semibold"
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{
              scale: { type: 'spring', stiffness: 400, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <motion.span
              key={
                isPortfolioHover
                  ? 'portfolio'
                  : isPlayHover
                    ? 'lancer'
                    : 'glisser'
              }
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.8 }}
              transition={{
                duration: 0.2,
                ease: [0.4, 0.0, 0.2, 1],
                type: 'spring',
                damping: 15,
                stiffness: 300,
              }}
            >
              {isPortfolioHover
                ? 'Portfolio'
                : isPlayHover
                  ? 'Lancer'
                  : 'Glisser'}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative mx-auto max-w-6xl px-9 lg:px-12 z-10">
        <div className="lg:mt-0">
          {/* Layout responsive - left aligned content */}
          <div>
            {/* Contenu textuel */}
            <div>
              <AnimatedGroup variants={transitionVariants}>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[rgb(180,120,255)]/10 border border-[rgb(229,208,255)]/20 backdrop-blur-sm w-fit">
                  <span className="relative flex items-center size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                  </span>

                  <span className="text-[rgb(229,208,255)] text-sm font-light">
                    Ouvert à de nouveaux projets
                  </span>
                </div>
              </AnimatedGroup>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-8 text-4xl md:text-5xl md:mt-16 lg:mt-8 max-w-2xl tracking-tighter md:tracking-tight font-semibold leading-[1.15] md:leading-[1.15]"
                suppressHydrationWarning
                style={{
                  background:
                    'linear-gradient(135deg, rgb(180,120,255) 0%, rgb(200,140,255) 40%, rgb(160,100,255) 70%, rgb(140,80,255) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Ton contenu mérite plus qu&apos;un simple montage.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-5 text-base md:text-base font-light max-w-md tracking-tight text-[#BCBCBC]"
              >
                Avec Dovira, ton agence de montage vidéo, chaque vidéo est conçue
                pour capter l&apos;attention, renforcer ton images et générer des
                résultats. Notre équipe dédiée s&apos;adapte à ton univers pour
                t&apos;aider à scaler ton business plus vite.
              </motion.p>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex flex-wrap sm:flex-row md:items-center gap-3"
              >
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="py-5 w-full sm:w-auto bg-gradient-to-r from-[rgb(120,0,255)] via-[#a855ff] to-[rgb(120,0,255)] text-white font-semibold hover:opacity-95 border-none shadow-lg shadow-[rgb(120,0,255)]/50 transition-all duration-300 relative overflow-hidden cursor-pointer"
                >
                  <Link
                    href="https://calendly.com/khalidcapron"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-4"
                  >
                    Réserver un appel
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[rgb(229,208,255)]/30 text-[rgb(229,208,255)] hover:bg-[rgb(229,208,255)]/10 hover:border-[rgb(229,208,255)]/50 transition-all duration-300"
                >
                  <Link href="#work">
                    <span className="text-nowrap">Voir les réalisations</span>
                  </Link>
                </Button>
              </AnimatedGroup>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 lg:mt-12">
        <WorkWithTicker />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-12 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-20" />
    </section>
  )
}
