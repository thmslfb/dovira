import { ScrollAnimated } from '@/components/animations'
import { SectionTitle, Separator } from '../ui'
import { Check, Frown, Smile, X } from 'lucide-react'

export const WorkWithMe = () => {
  const otherEditors = [
    {
      id: 1,
      description: 'Prix fixes peu adaptables',
    },
    {
      id: 2,
      description: 'Délais de livraison aléatoires',
    },
    {
      id: 3,
      description: 'Communication limitée',
    },
    {
      id: 4,
      description: "Pas d'accompagnement",
    },
    {
      id: 5,
      description: 'Pas de spécialisation par niche',
    },
    {
      id: 6,
      description: 'Manque de cohérence dans les livrables',
    },
    {
      id: 7,
      description: 'Pas de veille sur les tendances vidéo',
    },
  ]

  const dovira = [
    {
      id: 1,
      description: 'Tarification flexible',
    },
    {
      id: 2,
      description: 'Délais garantis',
    },
    {
      id: 3,
      description: 'Suivi personnalisé',
    },
    {
      id: 4,
      description: 'Expertise créative',
    },
    {
      id: 5,
      description: 'Spécialiste business & personal branding',
    },
    {
      id: 6,
      description: 'Charte graphique et style cohérent',
    },
    {
      id: 7,
      description: 'Formats optimisés pour chaque plateforme',
    },
  ]

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-[#0a0a0a] pointer-events-none z-20" />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-0 w-96 h-96 rounded-full bg-[rgb(180,120,255)]/6 blur-3xl animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '7s' }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[rgb(160,100,255)]/5 blur-3xl animate-pulse"
          style={{ animationDelay: '2s', animationDuration: '9s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[rgb(200,140,255)]/4 blur-3xl animate-pulse"
          style={{ animationDelay: '4s', animationDuration: '6s' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-9 lg:px-13 z-10">
        <ScrollAnimated delay={0.1}>
          <SectionTitle level="h2">Pourquoi travailler avec moi ?</SectionTitle>
        </ScrollAnimated>
        <ScrollAnimated delay={0.3}>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-7 mt-12 rounded-2xl pt-10 pb-5 md:pb-7 px-5 md:px-30">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/8 via-black/50 to-[rgb(160,100,255)]/10 rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/5 to-transparent rounded-2xl" />
            <div className="absolute inset-0 border border-[rgb(229,208,255)]/20 rounded-2xl" />
            <div className="relative flex flex-col gap-4 md:gap-6 z-10">
              <div className="flex items-center justify-center gap-2 font-semibold text-[#BCBCBC] lg:text-lg">
                <div className="p-2 rounded-full bg-red-500/15">
                  <Frown className="size-5 text-red-300" />
                </div>
                Autres monteurs vidéos:
              </div>
              <div className="relative bg-[#0f0f0f]/80 backdrop-blur-sm shadow-lg rounded-2xl p-7 h-full border border-red-500/15 hover:shadow-red-500/20 transition-all duration-300 opacity-80">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/3 to-transparent rounded-2xl pointer-events-none" />
                {otherEditors.map((editor, index) => {
                  return (
                    <div
                      key={editor.id}
                      className="relative flex flex-col gap-2"
                    >
                      <div className="flex text-sm items-start gap-4 mt-2">
                        <div className="p-1 rounded-full bg-red-400 mt-0.5">
                          <X className="size-2 text-white" strokeWidth={4} />
                        </div>
                        <p className="text-sm text-[#BCBCBC]/80">
                          {editor.description}
                        </p>
                      </div>
                      {index !== otherEditors.length - 1 && (
                        <Separator className="my-3 bg-red-500/15" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="relative flex flex-col gap-4 md:gap-6 z-10">
              <div className="flex items-center justify-center gap-2 font-semibold lg:text-lg">
                <div className="p-2 rounded-full bg-[rgb(180,120,255)]/25">
                  <Smile className="size-5 text-[rgb(159,118,255)]" />
                </div>
                <span>
                  <span className="bg-gradient-to-r from-[rgb(186,149,255)] to-[rgb(159,118,255)] bg-clip-text text-transparent">
                    Dovira
                  </span>
                  <span className="text-[rgb(159,118,255)]">:</span>
                </span>
              </div>
              <div className="relative h-full bg-[#0f0f0f]/90 backdrop-blur-sm shadow-lg rounded-2xl p-7 border border-[rgb(229,208,255)]/30 hover:shadow-[rgb(229,208,255)]/20 transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/5 via-transparent to-[rgb(160,100,255)]/8 rounded-2xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/3 to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {dovira.map((editor, index) => {
                  return (
                    <div
                      key={editor.id}
                      className="relative flex flex-col gap-2"
                    >
                      <div className="flex text-sm items-start gap-4 mt-2">
                        <div className="p-1.5 rounded-full bg-[rgb(180,120,255)] shadow-lg">
                          <Check
                            className="size-2.5 text-[rgb(89,0,255)]"
                            strokeWidth={5}
                          />
                        </div>
                        <p className="text-sm text-[#BCBCBC] hover:text-[rgb(229,208,255)] transition-colors duration-200">
                          {editor.description}
                        </p>
                      </div>
                      {index !== dovira.length - 1 && (
                        <Separator className="my-3 bg-gradient-to-r from-transparent via-[rgb(229,208,255)]/30 to-transparent" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </ScrollAnimated>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-20" />
    </section>
  )
}
