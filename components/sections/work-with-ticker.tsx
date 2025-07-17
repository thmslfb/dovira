'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollAnimated } from '@/components/animations'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export const WorkWithTicker = () => {
  const [scrollWidth, setScrollWidth] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const channels = [
    {
      id: 1,
      name: 'Harry JMG',
      image:
        'https://yt3.googleusercontent.com/hTNJ4FrWeYuwhhz96V068Z4Nm82brusKZ45P0zfGuHrrAoubXgX3HuSZLHSo9T-x3Yp2xApWJg=s160-c-k-c0x00ffffff-no-rj',
      at: '@HarryJMG',
      followers: '85,8 k',
    },
    {
      id: 2,
      name: 'Yann Darwin',
      image:
        'https://yt3.googleusercontent.com/BoH48ZFsxLUxST5tZQ_dM4eiqn6p56ANAuSQuZVMOQYToqx497l1DyM9qPyUtrbl2yuddPbWWQ=s160-c-k-c0x00ffffff-no-rj',
      at: '@YannDarwin',
      followers: '1,27M',
    },

    {
      id: 3,
      name: 'Arthur Mosa',
      image:
        'https://yt3.googleusercontent.com/S0quWyDjk8dNQ5KU3CvzFP4Bz3qrz35RMZ4m_TGc-S5redn5-6v662wlO_MRkLjIqmXxyXxFUng=s160-c-k-c0x00ffffff-no-rj',
      at: '@arthurmosa',
      followers: '390 k',
    },
    {
      id: 4,
      name: 'Carolin Arthaud Immobilier',
      image:
        'https://yt3.googleusercontent.com/tZWUtk7dwsEydZDtOXnk2cxEpZPldvouzlhzTGfDbopC1JsydkCub1WxnRuxrrDqK143cLR2hg=s160-c-k-c0x00ffffff-no-rj',
      at: '@carolinarthaudimmobilier',
      followers: '19,4 k',
    },
    {
      id: 5,
      name: 'Nassim Boukrouh',
      image:
        'https://yt3.googleusercontent.com/lYzc-8I2cYYje_TQO8f9vdw9NEsHdHS_cl8ewXoGlnj2TRkCRcjNSjAnItJF1j4sGtPxo3Onig=s160-c-k-c0x00ffffff-no-rj',
      at: '@nassimboukrouh',
      followers: '2,06 k',
    },
    {
      id: 6,
      name: 'Finou TV',
      image:
        'https://yt3.googleusercontent.com/PZu3iIw85W7kFAX3YGxZOv1ChL_Mxu1huP_Fe6XaTR-2v14fPiOPeUxChNmhDTX6TSsdqffwvg=s160-c-k-c0x00ffffff-no-rj',
      at: '@finoutv',
      followers: '47,4 k',
    },
    {
      id: 7,
      name: 'Jordan Girbon',
      image:
        'https://yt3.googleusercontent.com/8ODhz1R1OR5zACZ0b8Dg2z2eaQHEaEXp6sAQtwjgFdDw89cVtNUeK8gcyrv-n4ErUWYN8ILs=s160-c-k-c0x00ffffff-no-rj',
      at: '@jordangirbon',
      followers: '14,8 k',
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
                    <AvatarFallback>{channel.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
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
                    <AvatarFallback>{channel.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
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
