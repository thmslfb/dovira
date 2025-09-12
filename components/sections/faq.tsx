import { PlusIcon } from 'lucide-react'
import { Accordion as AccordionPrimitive } from 'radix-ui'

import { ScrollAnimated } from '@/components/animations'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'
import Link from 'next/link'
import { Button } from '../ui'
import { SectionTitle } from '../ui/section-title'

interface FAQItem {
  id: string
  title: string
  content: string
  isHtml?: boolean
}

const items: FAQItem[] = [
  {
    id: '1',
    title: 'Quels types de vidéos peux-tu monter ?',
    content:
      'Je réalise tous types de montages : vidéos courtes (Réels, TikTok, Shorts), publicités (Ads), vidéos YouTube longues, VSL, et bien plus. Je m’adapte à tous les formats et styles selon ton besoin.',
  },
  {
    id: '2',
    title: 'Comment se passe le processus de travail ?',
    content:
      'On commence par un appel personnalisé pour cerner ton univers et tes objectifs. Ensuite, tu m’envoies tes rushs avec un brief clair. Je livre une première version sous 72h, tu peux faire jusqu’à 2 retours, puis je finalise la vidéo. On continue avec un suivi toutes les 2 semaines.',
  },
  {
    id: '3',
    title: 'Quels sont tes délais de livraison ?',
    content:
      'Je m’engage à te livrer la vidéo finale sous un maximum de 72 heures après réception des rushs et du brief. La rapidité et la qualité sont mes priorités.',
  },
  {
    id: '4',
    title: 'Combien de retours sont inclus ?',
    content:
      'Chaque vidéo inclut deux retours pour ajuster les détails mineurs. Si tu souhaites plus de modifications, on peut voir ça ensemble selon la complexité.',
  },
  {
    id: '5',
    title: 'Comment fonctionnent tes tarifs ?',
    content:
      'Pas d’abonnement : les prestations se font sur devis. Contacte-moi pour discuter de ton besoin et je te proposerai un devis clair et transparent adapté à ton projet.',
  },
  {
    id: '6',
    title: 'Peut-on changer de style en cours de route ?',
    content:
      'Bien sûr ! Lors des retours ou des appels stratégiques, on ajuste le style pour qu’il colle parfaitement à ta marque et à ta vision.',
  },
  {
    id: '7',
    title: 'Quels formats de fichiers fournis-tu ?',
    content:
      'Je livre les vidéos dans les formats optimisés pour chaque plateforme : 9/16 pour les Réels et TikTok, 16/9 pour YouTube, etc. Tu peux aussi demander d’autres formats si besoin.',
  },
  {
    id: '8',
    title: 'Quelles options sont incluses dans tes prestations ?',
    content:
      'Toutes mes vidéos incluent systématiquement les sous-titres intégrés, le voice-over si nécessaire, et un habillage graphique adapté. Tu as donc un contenu prêt à publier, complet et professionnel.',
  },
  {
    id: '9',
    title: 'Que se passe-t-il si je ne suis pas satisfait ?',
    content:
      'La satisfaction client est ma priorité. Pendant les deux retours inclus, on ajuste la vidéo ensemble. Si un problème persiste, on en discute directement pour trouver la meilleure solution.',
  },
]

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative py-12 md:py-24 overflow-hidden scroll-mt-12"
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-[#0a0a0a] pointer-events-none z-20" />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-[rgb(229,208,255)]/8 to-[rgb(243,232,255)]/4 blur-3xl animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '8s' }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-gradient-to-bl from-[rgb(243,232,255)]/5 to-[rgb(229,208,255)]/3 blur-3xl animate-pulse"
          style={{ animationDelay: '3s', animationDuration: '10s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-[rgb(229,208,255)]/4 to-[rgb(243,232,255)]/6 blur-3xl animate-pulse"
          style={{ animationDelay: '5s', animationDuration: '7s' }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(229,208,255)]/2 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-9 lg:px-13 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          <ScrollAnimated delay={0.1}>
            <SectionTitle level="h2">
              Des questions ?<br />
              J&apos;ai les réponses.
            </SectionTitle>
          </ScrollAnimated>

          <div className="lg:col-span-2">
            <ScrollAnimated delay={0.3}>
              <div className="grid grid-cols-1 gap-4">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full flex flex-col gap-2"
                >
                  {items.map((item) => (
                    <AccordionItem
                      value={item.id}
                      key={item.id}
                      className="py-3 px-6 rounded-2xl border border-[rgb(229,208,255)]/10 hover:border-[rgb(229,208,255)]/25 data-[state=open]:border-[rgb(229,208,255)]/25 transition-all duration-300 bg-gradient-to-br from-black/50 to-[rgb(229,208,255)]/5 backdrop-blur-sm hover:shadow-lg hover:shadow-[rgb(229,208,255)]/10 data-[state=open]:shadow-lg data-[state=open]:shadow-[rgb(229,208,255)]/10 group"
                    >
                      <AccordionPrimitive.Header className="flex">
                        <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 cursor-pointer rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 text-white group-hover:text-[rgb(229,208,255)] [&[data-state=open]]:text-[rgb(229,208,255)] [&[data-state=open]_svg]:rotate-45">
                          <h3 className="font-semibold">{item.title}</h3>
                          <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgb(229,208,255)]/20 to-[rgb(243,232,255)]/10 opacity-0 group-hover:opacity-100 [&[data-state=open]]:opacity-100 transition-opacity duration-300 blur-sm" />
                            <PlusIcon
                              size={16}
                              className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200 relative text-white group-hover:text-[rgb(229,208,255)] group-hover:opacity-100 [&[data-state=open]]:opacity-100 [&[data-state=open]]:text-[rgb(229,208,255)]"
                              aria-hidden="true"
                            />
                          </div>
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>
                      <AccordionContent className="text-[#BCBCBC] pb-2 group-hover:text-white transition-colors duration-300">
                        {item.isHtml ? (
                          <div
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          />
                        ) : (
                          item.content
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollAnimated>
          </div>
        </div>

        <ScrollAnimated delay={0.4}>
          <div className="mt-24 md:mt-32 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/20 via-[rgb(229,208,255)]/10 to-[rgb(243,232,255)]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative bg-[#0f0f0f]/95 backdrop-blur-sm border-2 border-[rgb(229,208,255)]/40 group-hover:border-[rgb(229,208,255)]/60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[rgb(229,208,255)]/20 group-hover:-translate-y-2 rounded-3xl p-8 md:p-12 text-center space-y-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgb(229,208,255)]/50 to-transparent" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[rgb(180,120,255)]/30 to-[rgb(229,208,255)]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-[rgb(243,232,255)]/20 to-[rgb(229,208,255)]/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-[rgb(229,208,255)] transition-colors duration-300 max-w-4xl mx-auto leading-tight">
                  Prêt à révolutionner ton contenu vidéo ?
                </h3>

                <p className="text-base md:text-lg text-[#BCBCBC] max-w-2xl mx-auto leading-relaxed mt-6 group-hover:text-white/90 transition-colors duration-300">
                  Transformons tes idées en vidéos qui captivent, engagent et
                  convertissent.
                  <br />
                  <span className="text-[rgb(229,208,255)] font-semibold">
                    Ton succès commence maintenant.
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 relative z-10">
                <Button
                  asChild
                  size="default"
                  className="group/btn relative overflow-hidden bg-gradient-to-r from-[rgb(120,0,255)] via-[#a855ff] to-[rgb(120,0,255)] text-white font-semibold py-3 px-6 text-sm border-none shadow-lg shadow-[rgb(120,0,255)]/50 transition-all duration-300 "
                >
                  <Link
                    href="https://calendly.com/khalidcapron"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span>Réserver un appel</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="default"
                  variant="outline"
                  className="border border-[rgb(229,208,255)]/40 text-[rgb(229,208,255)] hover:bg-[rgb(229,208,255)]/10 hover:border-[rgb(229,208,255)]/70 transition-all duration-300 py-3 px-6 text-sm  font-semibold backdrop-blur-sm "
                >
                  <Link href="#work" className="flex items-center gap-2">
                    <span>Voir mes réalisations</span>
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-[#BCBCBC] relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[rgb(180,120,255)] rounded-full animate-pulse" />
                  <span>Livraison sous 72h</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-[rgb(180,120,255)]/20" />
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[rgb(229,208,255)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Satisfaction garantie</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-[rgb(180,120,255)]/20" />
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[rgb(229,208,255)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span>Résultats prouvés</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimated>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-20" />
    </section>
  )
}
