'use client'

import { Check, MessageCircle, Play, Sparkles, Star, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import {
  Button,
  BuyButton,
  BuyGrowthButton,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  SectionTitle,
  Switch,
} from '../ui'

export const Pricing = () => {
  const [includeYoutube, setIncludeYoutube] = useState(false)
  const clientsRemaining = 4 // Simulation: 4 clients restants sur 5

  return (
    <section
      id="pricing"
      className="relative py-12 md:py-24 overflow-hidden scroll-mt-12"
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-[#0a0a0a] pointer-events-none z-20" />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[rgb(229,208,255)]/8 to-[rgb(243,232,255)]/4 blur-3xl animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '12s' }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-tl from-[rgb(243,232,255)]/6 to-[rgb(229,208,255)]/3 blur-3xl animate-pulse"
          style={{ animationDelay: '4s', animationDuration: '10s' }}
        />
        <div
          className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-[rgb(229,208,255)]/4 to-[rgb(243,232,255)]/6 blur-3xl animate-pulse"
          style={{ animationDelay: '8s', animationDuration: '14s' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-9 lg:px-13 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle level="h2">
            Mes packs pour révolutionner ton contenu
          </SectionTitle>
        </motion.div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="flex h-full flex-col hover:shadow-xl hover:shadow-[rgb(229,208,255)]/10 transition-all duration-500 group bg-[#0f0f0f]/90 backdrop-blur-sm border-[rgb(229,208,255)]/30 hover:border-[rgb(229,208,255)]/50 hover:-translate-y-1 relative overflow-hidden">
              {/* Gradient de fond subtil */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(111,0,255)]/4 via-[#0f0f0f]/50 to-[rgb(111,0,255)]/6 pointer-events-none" />
              {/* Gradient hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/3 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[rgb(229,208,255)]/10 to-[rgb(243,232,255)]/5 border border-[rgb(229,208,255)]/20 group-hover:bg-gradient-to-br group-hover:from-[rgb(229,208,255)]/15 group-hover:to-[rgb(243,232,255)]/8 transition-all duration-500">
                    <Zap className="size-5 text-[rgb(229,208,255)]" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    Pack Starter
                  </CardTitle>
                </div>
                <CardDescription className="text-[#BCBCBC] text-sm font-medium">
                  Lancement express
                </CardDescription>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-3xl font-bold text-white">295 €</span>
                  <span className="text-sm text-[#BCBCBC]/80">
                    pack complet
                  </span>
                </div>
                <p className="text-sm text-[#BCBCBC] mt-2">
                  Idéal pour débuter et créer du contenu engageant rapidement
                </p>
              </CardHeader>

              <CardContent className="space-y-4 flex-1 relative z-10">
                <hr className="border-dashed border-[rgb(229,208,255)]/20" />

                <ul className="space-y-3 text-sm">
                  {[
                    '5 Réels dynamiques sous-titrés',
                    'Effets et animations inclus',
                    '1 Vidéo publicitaire (50-60 sec)',
                    'Optimisé Instagram/Facebook',
                    'Vidéo YouTube sur devis',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="size-4 text-[rgb(229,208,255)] flex-shrink-0" />
                      <span className="text-[#BCBCBC]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6 relative z-10">
                <BuyButton priceId="price_1Rl3BvHGR8lUvrPHgtd8V0V3">
                  Lancer mon contenu
                </BuyButton>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative group h-full">
              {/* Badge populaire */}
              <div className="absolute inset-x-0 -top-3 mx-auto flex h-7 w-fit items-center rounded-full bg-gradient-to-r from-[rgb(229,208,255)] to-[rgb(243,232,255)] px-4 py-1 text-xs font-bold text-[rgb(89,0,255)] shadow-lg z-30 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                <Star className="size-3 mr-1" />
                Plus populaire
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              <Card className="relative h-full flex flex-col group-hover:shadow-2xl group-hover:shadow-[rgb(229,208,255)]/15 transition-all duration-500 bg-[#0f0f0f]/90 backdrop-blur-sm border-[rgb(229,208,255)]/40 group-hover:border-[rgb(229,208,255)]/60 group-hover:-translate-y-2">
                {/* Gradient de fond subtil - plus intense pour la carte populaire */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(229,208,255)]/6 via-[#0f0f0f]/50 to-[rgb(243,232,255)]/8 pointer-events-none" />
                {/* Gradient hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/4 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <CardHeader className="pb-6 pt-8 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[rgb(229,208,255)]/15 to-[rgb(243,232,255)]/8 border border-[rgb(229,208,255)]/30 group-hover:bg-gradient-to-br group-hover:from-[rgb(229,208,255)]/20 group-hover:to-[rgb(243,232,255)]/12 transition-all duration-500">
                      <Play className="size-5 text-[rgb(229,208,255)]" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">
                      Pack Growth
                    </CardTitle>
                  </div>
                  <CardDescription className="text-[#BCBCBC] text-sm font-medium">
                    Visibilité & conversion
                  </CardDescription>

                  {/* Switch YouTube */}
                  <div className="mt-4 flex justify-center">
                    <Switch
                      checked={includeYoutube}
                      onCheckedChange={setIncludeYoutube}
                      leftLabel="Sans YouTube"
                      rightLabel="Avec YouTube"
                    />
                  </div>

                  <div className="flex items-baseline gap-2 mt-4">
                    <motion.span
                      className="text-3xl font-bold text-white"
                      key={includeYoutube ? 'price-with' : 'price-without'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {includeYoutube ? '980 €' : '700 €'}
                    </motion.span>
                    <span className="text-sm text-[#BCBCBC]/80">
                      pack complet
                    </span>
                  </div>

                  <p className="text-sm text-[#BCBCBC] mt-2">
                    Pour augmenter ta présence avec du contenu régulier
                  </p>
                </CardHeader>

                <CardContent className="space-y-4 flex-1 relative z-10">
                  <hr className="border-dashed border-[rgb(229,208,255)]/20" />

                  <ul className="space-y-3 text-sm">
                    {[
                      '10 Réels optimisés et sous-titrés',
                      'Engagement boosté avec effets',
                      '3 Vidéos publicitaires pro',
                      'Multi-plateformes stratégiques',
                      'Montage professionnel',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="size-4 text-[rgb(229,208,255)] flex-shrink-0" />
                        <span className="text-[#BCBCBC]">{item}</span>
                      </li>
                    ))}

                    {/* Option YouTube conditionnelle */}
                    <motion.li
                      key="youtube-option"
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{
                        opacity: includeYoutube ? 1 : 0,
                        height: includeYoutube ? 'auto' : 0,
                        y: includeYoutube ? 0 : -10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3 overflow-hidden"
                    >
                      <Check className="size-4 text-[rgb(229,208,255)] flex-shrink-0" />
                      <span className="text-[#BCBCBC]">
                        Vidéo YouTube 5-8 min
                      </span>
                    </motion.li>
                  </ul>
                </CardContent>

                <CardFooter className="pt-6 relative z-10">
                  <BuyGrowthButton
                    includeYoutube={includeYoutube}
                    className="w-full bg-gradient-to-r from-[rgb(111,0,255)] via-[#954cff] to-[rgb(111,0,255)] text-white font-semibold hover:opacity-95 border-none shadow-lg shadow-[rgb(111,0,255)]/40 transition-all duration-300 relative overflow-hidden cursor-pointer"
                  />
                </CardFooter>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="flex h-full flex-col hover:shadow-xl hover:shadow-[rgb(229,208,255)]/10 transition-all duration-500 group bg-[#0f0f0f]/90 backdrop-blur-sm border-[rgb(229,208,255)]/30 hover:border-[rgb(229,208,255)]/50 hover:-translate-y-1 relative overflow-hidden">
              {/* Gradient de fond subtil */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(111,0,255)]/4 via-[#0f0f0f]/50 to-[rgb(111,0,255)]/6 pointer-events-none" />
              {/* Gradient hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/3 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[rgb(229,208,255)]/10 to-[rgb(243,232,255)]/5 border border-[rgb(229,208,255)]/20 group-hover:bg-gradient-to-br group-hover:from-[rgb(229,208,255)]/15 group-hover:to-[rgb(243,232,255)]/8 transition-all duration-500">
                    <Sparkles className="size-5 text-[rgb(229,208,255)]" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    Pack Pro
                  </CardTitle>
                </div>
                <CardDescription className="text-[#BCBCBC] text-sm font-medium">
                  Stratégie vidéo complète
                </CardDescription>

                <div className="flex items-baseline gap-2 mt-4">
                  <span
                    className="text-lg font-bold line-through"
                    style={{ color: '#ef4444' }}
                  >
                    1 899 €
                  </span>
                  <span className="text-3xl font-bold text-white">1 600 €</span>
                  <span className="text-sm text-[#BCBCBC]/80">tout inclus</span>
                </div>
                <p className="text-sm text-[#BCBCBC] mt-2">
                  Solution premium pour une présence vidéo forte et stratégique
                </p>

                {/* Compteur places restantes */}
                <motion.div
                  className="flex items-center gap-2 mt-3 p-3 bg-gradient-to-r from-[rgb(229,208,255)]/5 to-[rgb(243,232,255)]/5 rounded-lg border border-[rgb(229,208,255)]/20"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <span className="text-xs text-[rgb(229,208,255)] font-medium">
                    Plus que {clientsRemaining} place
                    {clientsRemaining > 1 ? 's' : ''} disponible
                    {clientsRemaining > 1 ? 's' : ''}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < 5 - clientsRemaining
                            ? 'bg-[rgb(229,208,255)]'
                            : 'bg-[rgb(229,208,255)]/20'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </CardHeader>

              <CardContent className="space-y-4 flex-1">
                <hr className="border-dashed border-[rgb(229,208,255)]/20" />

                <ul className="space-y-3 text-sm">
                  {[
                    '20 Réels impactants et engageants',
                    "Stratégie d'engagement maximale",
                    '6 Vidéos publicitaires multi-plateformes',
                    '3 Vidéos YouTube 5-8 min',
                    'Montage haut de gamme',
                    'Stratégie complète de croissance',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="size-4 text-[rgb(229,208,255)] flex-shrink-0" />
                      <span className="text-[#BCBCBC]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <BuyButton priceId="price_1RjQL8HGR8lUvrPHstf7QS1B">
                  Passer au Premium
                </BuyButton>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        {/* Carte Custom horizontale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-6"
        >
          <Card className="bg-[#0f0f0f]/90 border-[rgb(229,208,255)]/30 hover:border-[rgb(229,208,255)]/50 transition-all duration-500 hover:shadow-lg hover:shadow-[rgb(229,208,255)]/10 group hover:-translate-y-1">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-gradient-to-br from-[rgb(229,208,255)]/15 to-[rgb(243,232,255)]/8 border border-[rgb(229,208,255)]/30 group-hover:bg-gradient-to-br group-hover:from-[rgb(229,208,255)]/20 group-hover:to-[rgb(243,232,255)]/12 transition-all duration-500">
                    <MessageCircle className="size-8 text-[rgb(229,208,255)]" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-[rgb(229,208,255)] transition-colors duration-300">
                    Besoin d&apos;une solution sur mesure ?
                  </h3>
                  <p className="text-[#BCBCBC] text-sm md:text-base max-w-xl">
                    Tu as un projet spécifique ou des besoins particuliers ?
                    Contacte-moi directement pour une proposition personnalisée
                    adaptée à tes objectifs.
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="!bg-gradient-to-r !from-[rgb(111,0,255)] !via-[rgb(111,0,255)] !to-[rgb(111,0,255)] text-white hover:opacity-90 !border-none shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer"
                  >
                    <a
                      href="https://calendly.com/khalidcapron"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Me contacter
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-20" />
    </section>
  )
}
