'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { SectionTitle } from '../ui/section-title'

interface StepItemProps {
  number: string
  title: string
  description: string
  isActive: boolean
}

const StepItem = ({ number, title, description, isActive }: StepItemProps) => {
  return (
    <div className="relative group">
      <div className="flex items-start gap-12">
        <div className="relative">
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[4rem] rounded-full transition-all duration-500 ${
              isActive
                ? 'bg-gradient-to-br from-[rgb(229,208,255)]/20 to-[rgb(243,232,255)]/10 blur-lg'
                : 'bg-black/50'
            }`}
          />

          <div
            className={`flex items-center justify-center size-11 rounded-full relative transition-all duration-500 ${
              isActive
                ? 'bg-gradient-to-br from-[rgb(229,208,255)] to-[rgb(243,232,255)] border-2 border-white shadow-xl scale-110'
                : 'bg-black/50 border border-[rgb(229,208,255)]/20'
            }`}
          >
            <span
              className={`text-sm font-medium transition-colors duration-500 ${
                isActive ? 'text-[rgb(89,0,255)]' : 'text-white'
              }`}
            >
              {number}
            </span>
          </div>

          {isActive && (
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[rgb(229,208,255)]/30 to-[rgb(243,232,255)]/20 blur-md animate-pulse" />
          )}
        </div>
        <div
          className={`flex flex-col gap-3 pt-3 min-h-[120px] transition-all duration-500 ease-out ${
            isActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'
          }`}
        >
          <h3 className="font-medium text-xl relative">
            <span
              className={`absolute inset-0 bg-gradient-to-r from-white to-[rgb(180,120,255)] bg-clip-text text-transparent transition-opacity duration-500 ease-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {title}
            </span>
            <span
              className={`text-white/60 transition-opacity duration-500 ease-out ${
                isActive ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {title}
            </span>
          </h3>
          <p
            className={`leading-relaxed transition-all duration-500 ease-out ${
              isActive ? 'text-[#BCBCBC]' : 'text-[#BCBCBC]/50'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export const Steps = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const [visibleSteps, setVisibleSteps] = useState(Array(5).fill(false))

  const steps = [
    {
      number: '01',
      title: 'Appel stratégique offert',
      description:
        'On fait connaissance : je découvre ton univers, tes objectifs et ton volume de contenu. Tu repars déjà avec des pistes concrètes.',
    },
    {
      number: '02',
      title: 'Choix de l’offre & paiement',
      description:
        'Après analyse de tes besoins, tu reçois une proposition claire : pack existant ou sur-mesure. Tout est transparent : tarifs, délais, formats.',
    },
    {
      number: '03',
      title: 'Définition du style',
      description:
        'On définit ensemble ta charte graphique, les formats à utiliser et les templates personnalisés pour ancrer ton identité.',
    },
    {
      number: '04',
      title: 'Montage & ajustements',
      description:
        'Je t’envoie une première version sous 72h. Tu as deux cycles de retours pour affiner le style, les sous-titres, l’habillage et les détails.',
    },
    {
      number: '05',
      title: 'Livraison & suivi',
      description:
        "Tu reçois les vidéos dans tous les formats souhaités. On fait un point toutes les deux semaines afin d'optimiser ton contenu en continu.",
    },
  ]

  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const progressOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setVisibleSteps([
        latest >= 0.05,
        latest >= 0.21,
        latest >= 0.47,
        latest >= 0.73,
        latest >= 1,
      ])
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section className="relative py-12 md:py-24 overflow-x-clip">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-[#0a0a0a] pointer-events-none z-20" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[rgb(180,120,255)]/5 blur-3xl animate-pulse [animation-delay:1s] [animation-duration:8s]" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[rgb(160,100,255)]/4 blur-3xl animate-pulse [animation-delay:3s] [animation-duration:10s]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-9 lg:px-13 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          <div className="lg:sticky md:top-32 md:self-start md:h-fit">
            <SectionTitle level="h2" showAccent={false}>
              Réaliser tes vidéos n&apos;a jamais été aussi simple.
            </SectionTitle>
          </div>

          <div ref={containerRef} className="lg:col-span-2 relative">
            <div className="absolute left-[1.3rem] top-10 h-[85%] w-[3px]">
              <motion.div
                className="w-full h-full origin-top bg-gradient-to-b from-[rgb(180,120,255)] via-[rgb(120,0,255)] to-[rgb(160,100,255)] shadow-lg will-change-transform"
                style={{
                  scaleY: progressScale,
                  opacity: progressOpacity,
                }}
              />
            </div>

            <div className="absolute left-[1.2rem] top-10 h-[85%] w-[5px]">
              <motion.div
                className="w-full h-full origin-top bg-gradient-to-b from-[rgb(180,120,255)]/50 via-[rgb(120,0,255)]/50 to-[rgb(160,100,255)]/50 blur-sm will-change-transform"
                style={{
                  scaleY: progressScale,
                  opacity: progressOpacity,
                }}
              />
            </div>

            <div className="space-y-20 md:space-y-28">
              {steps.map((step, index) => (
                <StepItem
                  key={step.number}
                  {...step}
                  isActive={visibleSteps[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-20" />
    </section>
  )
}
