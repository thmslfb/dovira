'use client'

import { ScrollAnimated } from '@/components/animations'
import { SectionTitle } from '@/components/ui'
import { CheckCircle, Clock, Shield, Zap } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Montage Performant et Stratégique',
    description: 'Nous créons des vidéos conçues pour convertir. Chaque séquence est pensée pour maximiser l\'engagement et soutenir votre croissance.'
  },
  {
    icon: Shield,
    title: 'Votre Équipe Dédiée de Montage',
    description: 'Vous travaillez directement avec une équipe spécialisée qui comprend vos objectifs. Pas de sous-traitance, pas de jonglage.'
  },
  {
    icon: Clock,
    title: 'Rapidité Sans Compromis sur la Qualité',
    description: 'Obtenez des montages de haute qualité livrés en quelques jours. Parfait pour les entrepreneurs pressés.'
  },
  {
    icon: CheckCircle,
    title: 'Travail Premium à Tarif Prévisible',
    description: 'Montage vidéo de niveau supérieur sans les frais d\'agence gonflés. Tarification transparente, que des résultats.'
  }
]

export const WhyChooseUs = () => {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-[#0a0a0a] pointer-events-none z-20" />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-[rgb(229,208,255)]/6 to-[rgb(243,232,255)]/3 blur-3xl animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '7s' }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tl from-[rgb(243,232,255)]/5 to-[rgb(229,208,255)]/4 blur-3xl animate-pulse"
          style={{ animationDelay: '2s', animationDuration: '9s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-[rgb(229,208,255)]/2 to-[rgb(243,232,255)]/4 blur-3xl animate-pulse"
          style={{ animationDelay: '4s', animationDuration: '6s' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
        <ScrollAnimated delay={0.1}>
          <SectionTitle level="h2">Pourquoi choisir Dovira ?</SectionTitle>
        </ScrollAnimated>

        <ScrollAnimated delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mt-8 sm:mt-12">
            {reasons.map((reason, index) => (
              <div key={index} className="group relative py-2 sm:py-0">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-r from-[rgb(111,0,255)]/20 to-[rgb(154,76,255)]/20 border border-[rgb(229,208,255)]/30">
                    <reason.icon className="size-5 sm:size-6 text-[rgb(229,208,255)]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-[rgb(229,208,255)] transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-[#BCBCBC] font-light leading-relaxed text-sm sm:text-base">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimated>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-20" />
    </section>
  )
}