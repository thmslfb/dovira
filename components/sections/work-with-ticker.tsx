'use client'

import { ScrollAnimated } from '@/components/animations'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export const WorkWithTicker = () => {
  const [scrollWidth, setScrollWidth] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const channels = [
    {
      id: 1,
      name: 'Tomy',
      image:
        'https://yt3.googleusercontent.com/4rSXoW6AUEPvWHwyGLNJEO41mweWRdQ4KqFHwbBAYOwIBZJQZkimg558wcz3A2wt8g6xUq9B=s160-c-k-c0x00ffffff-no-rj',
      at: '@TomyMotiv',
      followers: '260',
    },
    {
      id: 2,
      name: 'Angelo',
      image: '/images/angelo.jpg',
      at: '@angelorodrigues__',
      followers: '12,9 k',
    },
    {
      id: 3,
      name: 'Quentin',
      image: 'https://yt3.googleusercontent.com/8CfhPIJgEjxMrbPLEJ-flOGtvwHefWgSdvR1S1rqwsM76SRnD4cV-0LgcHVqYyAp4U_rJgFgWBs=s160-c-k-c0x00ffffff-no-rj',
      at: '@QuentinChapeaux',
      followers: '12 k',
    },
    {
      id: 4,
      name: 'Angelo',
      image: '/images/my-sbm.jpg',
      at: '@my.sbm',
      followers: '3,4 k',
    },
  ]

  useEffect(() => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstElementChild
      if (firstChild) {
        setScrollWidth((firstChild as HTMLElement).offsetWidth)
      }
    }
  }, [])

  return (
    <section className="relative py-8 md:pt-4 overflow-x-clip">
      <div className="relative mx-auto max-w-6xl px-4 md:px-9 lg:px-12 z-10">
        <ScrollAnimated delay={0.1}>
          <div className="flex justify-center mb-12 z-50">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] animate-pulse" />
              <h3 className="text-xs font-medium text-white/80">
                ILS M&apos;ONT CHOISI POUR BOOSTER LEURS VIDÉOS
              </h3>
            </div>
          </div>
        </ScrollAnimated>
        <ScrollAnimated delay={0.3}>
          <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] relative w-full">
            <motion.div
              ref={scrollRef}
              className="flex md:opacity-80"
              animate={{
                x: scrollWidth ? [0, -scrollWidth] : 0,
              }}
              transition={{
                duration: 40,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <div className="flex gap-24 pr-24">
                {channels.map((channel) => (
                  <div
                    key={channel.id}
                    className="flex flex-row items-center gap-3 flex-shrink-0 group hover:scale-105 transition-all duration-300"
                  >
                    <Avatar className="size-10 relative">
                      <AvatarImage src={channel.image} />
                      <AvatarFallback>
                        {channel.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="whitespace-nowrap text-white group-hover:text-white/90 transition-colors duration-300">
                        {channel.name}
                      </span>
                      <span className="text-sm text-[#BCBCBC] whitespace-nowrap group-hover:text-white/70 transition-colors duration-300">
                        {channel.at} • {channel.followers} abonnés
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-24 pr-24">
                {channels.map((channel) => (
                  <div
                    key={`${channel.id}-copy`}
                    className="flex flex-row items-center gap-3 flex-shrink-0 group hover:scale-105 transition-all duration-300"
                  >
                    <Avatar className="size-10 relative">
                      <AvatarImage src={channel.image} />
                      <AvatarFallback>
                        {channel.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="whitespace-nowrap text-white group-hover:text-white/90 transition-colors duration-300">
                        {channel.name}
                      </span>
                      <span className="text-sm text-[#BCBCBC] whitespace-nowrap group-hover:text-white/70 transition-colors duration-300">
                        {channel.at} • {channel.followers} abonnés
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </ScrollAnimated>
      </div>
    </section>
  )
}
