import { ScrollAnimated } from '../animations'
import { SectionTitle } from '../ui'

export const Stats = () => {
  const stats = [
    {
      number: '+500',
      label: 'Vidéos créées',
      description: 'Montages réalisés pour nos clients',
    },
    {
      number: '95%',
      label: 'Avis positif',
      description: 'De retour client satisfait',
    },
    {
      number: '72h',
      label: 'Délai moyen',
      description: 'Temps de livraison standard',
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
          <SectionTitle level="h2">Nos chiffres clés</SectionTitle>
        </ScrollAnimated>

        <ScrollAnimated delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-[#0f0f0f]/80 backdrop-blur-sm border border-[rgb(229,208,255)]/20 hover:border-[rgb(229,208,255)]/40 hover:shadow-[rgb(229,208,255)]/20 transition-all duration-500 hover:-translate-y-1 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/8 via-[#0f0f0f]/30 to-[rgb(160,100,255)]/10 rounded-2xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/3 to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-4">
                  <div className="text-4xl md:text-5xl font-bold text-white group-hover:text-[rgb(229,208,255)] transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white group-hover:text-[rgb(229,208,255)] transition-colors duration-300">
                      {stat.label}
                    </p>
                    <p className="text-[#BCBCBC] font-light text-sm">
                      {stat.description}
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
