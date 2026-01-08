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
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
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
    <section className="relative pt-24 pb-12 md:pb-20 md:pt-36 overflow-hidden bg-[#0a0a0a]">
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
          {/* Layout responsive - mobile stack, desktop two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Colonne de gauche - Contenu textuel */}
            <div className="order-1">
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
                className="mt-8 text-4xl md:text-5xl md:mt-16 lg:mt-8 max-w-2xl lg:max-w-none tracking-tighter md:tracking-tight font-semibold leading-[1.15] md:leading-[1.15]"
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
                className="mt-5 text-base md:text-base font-light max-w-md lg:max-w-none tracking-tight text-[#BCBCBC]"
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

            {/* Colonne de droite - Vidéo YouTube */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="order-2 relative"
            >
              {/* Container avec effet glassmorphisme */}
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[rgb(180,120,255)]/20 via-[rgb(200,140,255)]/10 to-[rgb(160,100,255)]/20 backdrop-blur-sm border border-[rgb(229,208,255)]/30">
                {/* Effets de lumière */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/8 via-transparent to-[rgb(160,100,255)]/8 rounded-2xl pointer-events-none" />
                
                {/* Vidéo YouTube responsive */}
                <div className="relative rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&modestbranding=1&rel=0&showinfo=0"
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                      style={{ border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Dovira - Présentation"
                    />
                  </div>
                  
                  {/* Overlay décoratif subtle */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/3 to-transparent pointer-events-none rounded-xl" />
                </div>

                {/* Particules brillantes décoratives */}
                <div className="absolute top-4 right-6 w-1 h-1 bg-[rgb(180,120,255)]/60 rounded-full animate-pulse" />
                <div className="absolute bottom-6 left-4 w-0.5 h-0.5 bg-[rgb(200,140,255)]/80 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Glow effect externe */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[rgb(180,120,255)]/10 via-[rgb(200,140,255)]/15 to-[rgb(160,100,255)]/10 blur-xl opacity-50 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <WorkWithTicker />
      </div>

      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6,
              },
            },
          },
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
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
              },
            },
          },
        }}
      >
        <div id="work" className="pt-12 md:pt-24 scroll-mt-12">
          <Carousel
            className={`w-screen relative left-1/2 right-1/2 -mx-[50vw] flex items-center justify-center ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            opts={{
              align: 'center',
              loop: true,
            }}
          >
            <CarouselContent>
              {videos.map((video, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[75vw] md:basis-[650px]"
                >
                  <div className="p-0.5 md:p-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card
                          className="p-3 rounded-2xl md:shadow-md cursor-grab active:cursor-grabbing hover:scale-[1.02] transition-transform duration-300 group"
                          onMouseEnter={() => setIsHover(true)}
                          onMouseLeave={() => setIsHover(false)}
                        >
                          <CardContent className="relative flex h-[175px] md:h-[395px] w-full items-center justify-center bg-[rgb(229,208,255)]/10 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing">
                            {/* Overlay avec bouton play */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 group-hover:bg-black/50 transition-colors duration-300 cursor-grab active:cursor-grabbing">
                              <div
                                className="relative group/play"
                                onMouseEnter={() => setIsPlayHover(true)}
                                onMouseLeave={() => setIsPlayHover(false)}
                              >
                                {/* Glow effect externe */}
                                <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[rgb(180,120,255)]/20 via-[rgb(200,140,255)]/30 to-[rgb(160,100,255)]/20 blur-lg opacity-0 group-hover/play:opacity-100 transition-opacity duration-500" />

                                {/* Ring animé */}
                                <div className="absolute -inset-1.5 rounded-full border border-white/20 group-hover/play:border-[rgb(180,120,255)]/50 transition-colors duration-300" />
                                <div className="absolute -inset-2 rounded-full border border-white/10 animate-pulse opacity-0 group-hover/play:opacity-100 transition-opacity duration-300" />

                                {/* Bouton principal glassmorphisme */}
                                <div
                                  className="relative w-12 h-12 rounded-full cursor-pointer group-hover/play:scale-110 transition-all duration-500 backdrop-blur-md border border-white/30 shadow-2xl overflow-hidden"
                                  style={{
                                    background:
                                      'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                                    boxShadow:
                                      '0 8px 32px rgba(180,120,255,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)',
                                  }}
                                >
                                  {/* Gradient overlay animé */}
                                  <div
                                    className="absolute inset-0 rounded-full opacity-0 group-hover/play:opacity-100 transition-opacity duration-300"
                                    style={{
                                      background:
                                        'linear-gradient(135deg, rgba(180,120,255,0.1) 0%, rgba(200,140,255,0.15) 50%, rgba(160,100,255,0.1) 100%)',
                                    }}
                                  />

                                  {/* Reflet glassmorphisme */}
                                  <div
                                    className="absolute top-0 left-0 w-full h-1/2 rounded-t-full opacity-40 group-hover/play:opacity-60 transition-opacity duration-300"
                                    style={{
                                      background:
                                        'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
                                    }}
                                  />

                                  {/* Icône Play */}
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <Play
                                      className="w-4 h-4 ml-0.5 text-white drop-shadow-lg transition-all duration-300 group-hover/play:text-[rgb(220,180,255)] group-hover/play:scale-110"
                                      fill="currentColor"
                                    />
                                  </div>

                                  {/* Particules brillantes */}
                                  <div className="absolute top-1.5 right-2 w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse opacity-0 group-hover/play:opacity-100 transition-opacity duration-300" />
                                  <div className="absolute bottom-2 left-1.5 w-0.5 h-0.5 bg-[rgb(180,120,255)]/80 rounded-full animate-pulse opacity-0 group-hover/play:opacity-100 transition-opacity duration-500 delay-150" />
                                </div>
                              </div>
                            </div>

                            {/* Thumbnail vidéo */}
                            <div className="absolute inset-2 md:inset-7 rounded-lg cursor-grab active:cursor-grabbing">
                              {video.thumbnail.endsWith('.mp4') ? (
                                <video
                                  className="w-full h-full object-cover rounded-lg cursor-grab active:cursor-grabbing"
                                  muted
                                  loop
                                  preload="metadata"
                                >
                                  <source
                                    src={video.thumbnail}
                                    type="video/mp4"
                                  />
                                </video>
                              ) : (
                                <Image
                                  src={video.thumbnail}
                                  alt={video.alt}
                                  fill
                                  className="object-cover rounded-lg cursor-grab active:cursor-grabbing"
                                />
                              )}
                            </div>
                          </CardContent>
                          <CardFooter className="px-3 text-sm flex items-center gap-1 text-[rgb(229,208,255)] cursor-pointer">
                            <a
                              href="https://dovira.myportfolio.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-[rgb(229,208,255)] hover:text-white transition-colors duration-200"
                              onClick={(e) => e.stopPropagation()}
                              onMouseEnter={() => setIsPortfolioHover(true)}
                              onMouseLeave={() => setIsPortfolioHover(false)}
                            >
                              Voir mon portfolio
                              <ArrowDownRight
                                className="size-3.5 rotate-270"
                                strokeWidth={2}
                              />
                            </a>
                          </CardFooter>
                        </Card>
                      </DialogTrigger>

                      <DialogContent
                        className="p-0 bg-black/80 border border-[rgb(229,208,255)]/20 backdrop-blur-sm rounded-2xl w-[95vw] max-w-[95vw] md:w-[70vw] md:max-w-[70vw]"
                        style={{
                          maxHeight: '80vh',
                        }}
                        showCloseButton={false}
                      >
                        <DialogTitle className="sr-only">
                          {video.alt}
                        </DialogTitle>

                        {/* Bouton de fermeture custom */}
                        <DialogClose asChild>
                          <button className="absolute -top-2 -right-2 z-50 w-8 h-8 rounded-full bg-black/60 border border-[rgb(229,208,255)]/40 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 hover:border-[rgb(229,208,255)]/60 hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </DialogClose>

                        {/* Container avec le même style que les cards */}
                        <div className="relative rounded-xl overflow-hidden bg-[rgb(229,208,255)]/10 border border-[rgb(229,208,255)]/20 shadow-lg backdrop-blur-sm p-3">
                          {/* Effets de background similaires aux cards */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/8 via-[#0f0f0f]/30 to-[rgb(160,100,255)]/10 pointer-events-none" />
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/3 to-transparent pointer-events-none" />

                          {/* Vidéo Vimeo avec aspect ratio 16:9 */}
                          <div
                            className="relative w-full"
                            style={{ paddingBottom: '56.25%' }}
                          >
                            <iframe
                              src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`}
                              className="absolute top-0 left-0 w-full h-full rounded-xl"
                              style={{ border: 'none' }}
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                              title={video.alt}
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </AnimatedGroup>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-20" />
    </section>
  )
}
