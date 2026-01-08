'use client'

import { ScrollAnimated } from '@/components/animations'
import Image from 'next/image'

export const AboutHero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pb-24 md:pt-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-[#0a0a0a] pointer-events-none z-20" />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[rgb(180,120,255)]/5 blur-3xl animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '8s' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-9 lg:px-13 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <ScrollAnimated delay={0.1}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/50 border border-[rgb(229,208,255)]/20 backdrop-blur-sm mb-8">
                <span className="relative flex items-center size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                </span>
                <span className="text-[rgb(229,208,255)] text-sm font-light">
                  Fondateur de Dovira
                </span>
              </div>
            </ScrollAnimated>

            <ScrollAnimated delay={0.2}>
              <h1
                className="text-4xl md:text-5xl font-semibold text-left mb-6 tracking-tighter md:tracking-tight"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(180,120,255) 0%, rgb(200,140,255) 40%, rgb(160,100,255) 70%, rgb(140,80,255) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Khalid Capron
              </h1>
            </ScrollAnimated>

            <ScrollAnimated delay={0.3}>
              <p className="text-xl text-[#BCBCBC] leading-relaxed mb-8">
                Je transforme tes idées en contenus vidéo qui marquent les
                esprits et boostent tes résultats.
              </p>
            </ScrollAnimated>

            <ScrollAnimated delay={0.4}>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-[rgb(180,120,255)] rounded-full mt-1 flex-shrink-0" />
                  <p className="text-[#BCBCBC] leading-relaxed">
                    <strong className="text-white">Expert</strong> en montage
                    vidéo et motion design
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-[rgb(180,120,255)] rounded-full mt-1 flex-shrink-0" />
                  <p className="text-[#BCBCBC] leading-relaxed">
                    <strong className="text-white">
                      Partenaire stratégique
                    </strong>{' '}
                    pour créateurs et entrepreneurs ambitieux
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-[rgb(180,120,255)] rounded-full mt-1 flex-shrink-0" />
                  <p className="text-[#BCBCBC] leading-relaxed">
                    <strong className="text-white">Spécialisé</strong> dans tous
                    les secteurs : business, formation,{' '}
                    <span className="inline-block">e-commerce</span>
                  </p>
                </div>
              </div>
            </ScrollAnimated>
          </div>

          <div className="order-1 lg:order-2">
            <ScrollAnimated delay={0.5}>
              <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[rgb(229,208,255)]/20">
                  <Image
                    src="/images/hero-image.jpg"
                    alt="Khalid Capron, fondateur de Dovira"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-[rgb(180,120,255)]/10 via-transparent to-[rgb(160,100,255)]/10 rounded-3xl blur-2xl -z-10" />
              </div>
            </ScrollAnimated>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-20" />
    </section>
  )
}
