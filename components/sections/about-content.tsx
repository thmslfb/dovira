'use client'

import { ScrollAnimated } from '@/components/animations'
import { Check } from 'lucide-react'

const strengths = [
  'Capacité d\'adaptation à toutes les niches',
  'Montage vidéo et motion design haute qualité',
  'Suivi personnalisé toutes les deux semaines',
  'Comprendre vos enjeux business',
  'Traduire votre message avec précision',
  'Créer des contenus hautement engageants'
]

export const AboutContent = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-[#0a0a0a] pointer-events-none z-20" />
      
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[rgb(200,140,255)]/4 blur-3xl animate-pulse"
          style={{ animationDelay: '3s', animationDuration: '10s' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-9 lg:px-13 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          <div className="lg:sticky md:top-32 md:self-start md:h-fit">
            <ScrollAnimated delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-semibold text-left mb-6 tracking-tighter" style={{
                background: 'linear-gradient(135deg, rgb(180,120,255) 0%, rgb(200,140,255) 40%, rgb(160,100,255) 70%, rgb(140,80,255) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Une approche humaine et stratégique
              </h2>
            </ScrollAnimated>
          </div>

          <div className="lg:col-span-2 space-y-16">
            <ScrollAnimated delay={0.2}>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 text-left">
                  Ma mission
                </h3>
                <div className="space-y-6 text-[#BCBCBC] text-lg leading-relaxed">
                  <p>
                    Je m&apos;appelle <strong className="text-white">Khalid Capron</strong>, fondateur de Dovira — une agence de montage vidéo et motion design pensée comme un véritable partenaire stratégique pour les créateurs et entrepreneurs ambitieux.
                  </p>
                  <p>
                    Chez Dovira, notre mission va <strong className="text-white">bien au-delà du simple montage</strong>. Nous donnons du sens à tes contenus, en traduisant ton message avec clarté, puissance et précision, pour qu&apos;il parle vraiment à ton audience.
                  </p>
                </div>
              </div>
            </ScrollAnimated>

            <ScrollAnimated delay={0.3}>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 text-left">
                  Mes forces
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {strengths.map((strength, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-1.5 rounded-full bg-[rgb(180,120,255)] shadow-lg mt-0.5 flex-shrink-0">
                        <Check className="size-2.5 text-[rgb(89,0,255)]" strokeWidth={5} />
                      </div>
                      <p className="text-[#BCBCBC] leading-relaxed">
                        {strength}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimated>

            <ScrollAnimated delay={0.4}>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 text-left">
                  Ma méthode de travail
                </h3>
                <div className="space-y-6 text-[#BCBCBC] text-lg leading-relaxed">
                  <p>
                    Notre force, c&apos;est notre <strong className="text-white">capacité d&apos;adaptation à toutes les niches</strong> : business en ligne, formation, coaching, immobilier, e-commerce, personal branding…
                  </p>
                  <p>
                    Quel que soit ton secteur, on s&apos;imprègne de ton univers pour en faire ressortir l&apos;essence à travers des contenus hautement engageants.
                  </p>
                  <p>
                    Nous avançons avec <strong className="text-white">méthode et intention</strong> : chaque collaboration inclut des points réguliers, toutes les deux semaines, pour ajuster, optimiser et construire une vraie dynamique de croissance autour de tes vidéos.
                  </p>
                </div>
              </div>
            </ScrollAnimated>

            <ScrollAnimated delay={0.5}>
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[rgb(180,120,255)]/8 via-black/50 to-[rgb(160,100,255)]/10 border border-[rgb(229,208,255)]/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/5 to-transparent rounded-2xl" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-4 text-left">
                    Une collaboration sélective
                  </h3>
                  <div className="space-y-4 text-[#BCBCBC] leading-relaxed">
                    <p>
                      Mais nous ne travaillons pas avec tout le monde. Nous sélectionnons des profils <strong className="text-white">motivés, investis, prêts à passer à l&apos;action</strong>.
                    </p>
                    <p>
                      Si tu cherches bien plus qu&apos;un exécutant, mais un <strong className="text-white">partenaire créatif qui comprend tes enjeux</strong>, alors tu es au bon endroit.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-20" />
    </section>
  )
}