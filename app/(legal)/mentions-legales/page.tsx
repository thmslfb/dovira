'use client'

import { AnimatedGroup } from '@/components/animations'
import { Button } from '@/components/ui'
import { ArrowLeft, Clock, FileText, Globe, Mail, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export default function MentionsLegalesPage() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-[#0a0a0a]">
      {/* Orbes d'arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[rgb(180,120,255)]/8 blur-3xl animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '6s' }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[rgb(160,100,255)]/6 blur-3xl animate-pulse"
          style={{ animationDelay: '3s', animationDuration: '8s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[rgb(200,140,255)]/6 blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s', animationDuration: '7s' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-9 lg:px-12 z-10">
        <AnimatedGroup variants={transitionVariants}>
          <div className="text-center mb-16">
            {/* Icône */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: 'spring',
                bounce: 0.5,
              }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[rgb(180,120,255)]/20 border border-[rgb(229,208,255)]/30 mb-8"
            >
              <FileText className="w-12 h-12 text-[rgb(229,208,255)]" />
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-br from-[rgb(180,120,255)] via-[rgb(200,140,255)] to-[rgb(140,80,255)] bg-clip-text text-transparent"
            >
              Mentions Légales
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-[#BCBCBC] mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Informations légales obligatoires
            </motion.p>

            {/* Bouton retour */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-12"
            >
              <div className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,rgb(229,208,255)_85%,transparent_100%)]" />
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0a0a0a]/90 text-white hover:bg-[#0a0a0a]/95 backdrop-blur-3xl shadow-lg transition-all duration-300"
                >
                  <Link href="/" className="flex items-center gap-3 py-4 px-8">
                    <ArrowLeft className="w-5 h-5" />
                    Retour à l&apos;accueil
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Éditeur du site */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-[rgb(180,120,255)]/8 border border-[rgb(229,208,255)]/30 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/20 border border-[rgb(229,208,255)]/30">
                  <FileText className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Éditeur du site
                </h2>
              </div>
              <div className="bg-[#0a0a0a]/30 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <div>
                      <span className="text-[rgb(229,208,255)] font-medium">
                        Dénomination :
                      </span>
                      <span className="text-[#BCBCBC] ml-2">Dovira</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <div>
                      <span className="text-[rgb(229,208,255)] font-medium">
                        Statut :
                      </span>
                      <span className="text-[#BCBCBC] ml-2">
                        Micro-entreprise
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <div>
                      <span className="text-[rgb(229,208,255)] font-medium">
                        Numéro SIREN :
                      </span>
                      <span className="text-[#BCBCBC] ml-2">909 902 595</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <div>
                      <span className="text-[rgb(229,208,255)] font-medium">
                        Code APE :
                      </span>
                      <span className="text-[#BCBCBC] ml-2">
                        5320Z (Autres activités de poste et de courrier)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <div>
                      <span className="text-[rgb(229,208,255)] font-medium">
                        Responsable de la publication :
                      </span>
                      <span className="text-[#BCBCBC] ml-2">Khalid CAPRON</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Coordonnées */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <MapPin className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Coordonnées
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[rgb(229,208,255)] mt-1" />
                    <div>
                      <h3 className="text-[rgb(229,208,255)] font-medium">
                        Email
                      </h3>
                      <p className="text-[#BCBCBC] text-sm">
                        contact@dovira.fr
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[rgb(229,208,255)] mt-1" />
                    <div>
                      <h3 className="text-[rgb(229,208,255)] font-medium">
                        Site web
                      </h3>
                      <p className="text-[#BCBCBC] text-sm">
                        https://dovira.fr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Hébergement */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <svg
                    className="w-6 h-6 text-[rgb(229,208,255)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Hébergement
                </h2>
              </div>
              <div className="bg-[#0a0a0a]/30 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <div>
                      <span className="text-[rgb(229,208,255)] font-medium">
                        Hébergeur :
                      </span>
                      <span className="text-[#BCBCBC] ml-2">Vercel Inc.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <div>
                      <span className="text-[rgb(229,208,255)] font-medium">
                        Adresse :
                      </span>
                      <span className="text-[#BCBCBC] ml-2">
                        440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <div>
                      <span className="text-[rgb(229,208,255)] font-medium">
                        Site web :
                      </span>
                      <span className="text-[#BCBCBC] ml-2">
                        https://vercel.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Propriété intellectuelle */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <svg
                    className="w-6 h-6 text-[rgb(229,208,255)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Propriété intellectuelle
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  L&apos;ensemble des contenus présents sur ce site (textes,
                  images, vidéos, logos, etc.) sont protégés par le droit
                  d&apos;auteur et appartiennent à Dovira ou à ses partenaires.
                </p>
                <p className="text-[#BCBCBC] leading-relaxed">
                  Toute reproduction, représentation, modification, publication,
                  adaptation de tout ou partie des éléments du site, quel que
                  soit le moyen ou le procédé utilisé, est interdite, sauf
                  autorisation écrite préalable.
                </p>
                <div className="bg-[rgb(229,208,255)]/10 border border-[rgb(229,208,255)]/20 rounded-lg p-4">
                  <p className="text-[#BCBCBC] text-sm">
                    <strong className="text-[rgb(229,208,255)]">
                      Marque :
                    </strong>{' '}
                    &quot;Dovira&quot; est une marque déposée. Toute utilisation
                    non autorisée est strictement interdite.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Responsabilité */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <svg
                    className="w-6 h-6 text-[rgb(229,208,255)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Limitation de responsabilité
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Dovira s&apos;efforce d&apos;assurer l&apos;exactitude et la
                  mise à jour des informations diffusées sur ce site. Cependant,
                  nous ne pouvons garantir l&apos;exactitude, la précision ou
                  l&apos;exhaustivité des informations.
                </p>
                <p className="text-[#BCBCBC] leading-relaxed">
                  En conséquence, nous déclinons toute responsabilité pour les
                  erreurs, inexactitudes ou omissions portant sur les
                  informations disponibles sur ce site.
                </p>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <p className="text-orange-400 text-sm">
                    <strong>Avertissement :</strong> L&apos;utilisation des
                    informations et contenus disponibles sur ce site se fait
                    sous votre entière responsabilité.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Droit applicable */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <svg
                    className="w-6 h-6 text-[rgb(229,208,255)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Droit applicable
                </h2>
              </div>
              <p className="text-[#BCBCBC] leading-relaxed">
                Les présentes mentions légales sont régies par le droit
                français. En cas de litige, les tribunaux français seront seuls
                compétents.
              </p>
            </motion.section>

            {/* Section finale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="mt-12 bg-gradient-to-r from-[rgb(229,208,255)]/5 to-[rgb(180,120,255)]/8 border border-[rgb(229,208,255)]/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <Clock className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Informations de mise à jour
                </h3>
              </div>

              <div className="space-y-3">
                <p className="text-[#BCBCBC]">
                  <strong className="text-[rgb(229,208,255)]">
                    Dernière mise à jour :
                  </strong>{' '}
                  10/07/2025
                </p>
                <p className="text-[#BCBCBC]">
                  <strong className="text-[rgb(229,208,255)]">Contact :</strong>{' '}
                  Pour toute question concernant ces mentions légales,
                  contactez-nous à : contact@dovira.fr
                </p>
              </div>
            </motion.div>
          </div>
        </AnimatedGroup>
      </div>

      {/* Gradient de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-20" />
    </section>
  )
}
