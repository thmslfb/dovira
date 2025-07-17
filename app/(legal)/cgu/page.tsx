'use client'

import { AnimatedGroup } from '@/components/animations'
import { Button } from '@/components/ui'
import {
  AlertCircle,
  ArrowLeft,
  Clock,
  Eye,
  Monitor,
  Shield,
} from 'lucide-react'
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

export default function CGUPage() {
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
              <Monitor className="w-12 h-12 text-[rgb(229,208,255)]" />
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-br from-[rgb(180,120,255)] via-[rgb(200,140,255)] to-[rgb(140,80,255)] bg-clip-text text-transparent"
            >
              Conditions Générales d&apos;Utilisation
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-[#BCBCBC] mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Conditions d&apos;utilisation du site web Dovira
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
            {/* Objet et acceptation */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-[rgb(180,120,255)]/8 border border-[rgb(229,208,255)]/30 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/20 border border-[rgb(229,208,255)]/30">
                  <Monitor className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Objet et acceptation
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Les présentes conditions générales d&apos;utilisation
                  régissent l&apos;accès et l&apos;utilisation du site web
                  Dovira (https://dovira.fr).
                </p>
                <p className="text-[#BCBCBC] leading-relaxed">
                  En accédant au site, vous acceptez sans réserve les présentes
                  conditions. Si vous n&apos;acceptez pas ces conditions,
                  veuillez ne pas utiliser le site.
                </p>
              </div>
            </motion.section>

            {/* Accès au site */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
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
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Accès au site
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Le site est accessible gratuitement 24h/24, 7j/7, sauf en cas
                  de force majeure, difficultés informatiques ou interruptions
                  liées à la maintenance.
                </p>
                <p className="text-[#BCBCBC] leading-relaxed">
                  Dovira se réserve le droit de modifier, suspendre ou
                  interrompre l&apos;accès au site à tout moment et sans
                  préavis.
                </p>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <p className="text-orange-400 text-sm">
                    <strong>Attention :</strong> L&apos;accès peut être limité
                    ou suspendu pour des raisons techniques ou de maintenance.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Utilisation du site */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <Eye className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Utilisation du site
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Vous vous engagez à utiliser le site de manière licite et
                  respectueuse :
                </p>
                <ul className="space-y-3 text-[#BCBCBC]">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 mt-2" />
                    <span>Respecter les lois en vigueur</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 mt-2" />
                    <span>
                      Ne pas porter atteinte aux droits de propriété
                      intellectuelle
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 mt-2" />
                    <span>
                      Ne pas introduire de virus ou programmes malveillants
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 mt-2" />
                    <span>
                      Ne pas utiliser le site à des fins commerciales sans
                      autorisation
                    </span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Contenu du site */}
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
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4 3L9 8l3 3 3-3"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Contenu du site
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Tous les contenus présents sur le site (textes, images,
                  vidéos, logos) sont protégés par le droit d&apos;auteur et
                  appartiennent à Dovira ou à ses partenaires.
                </p>
                <p className="text-[#BCBCBC] leading-relaxed">
                  Dovira s&apos;efforce de maintenir des informations exactes et
                  à jour, mais ne peut garantir l&apos;exactitude, la précision
                  ou l&apos;exhaustivité des informations présentes sur le site.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-400 text-sm">
                    <strong>Information :</strong> Les contenus sont fournis à
                    titre informatif et peuvent être modifiés sans préavis.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Liens externes */}
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
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Liens externes
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Le site peut contenir des liens vers des sites tiers. Dovira
                  n&apos;exerce aucun contrôle sur ces sites et décline toute
                  responsabilité quant à leur contenu ou leur politique de
                  confidentialité.
                </p>
                <p className="text-[#BCBCBC] leading-relaxed">
                  L&apos;accès à ces sites se fait sous votre entière
                  responsabilité et selon les conditions d&apos;utilisation de
                  ces sites.
                </p>
              </div>
            </motion.section>

            {/* Collecte d'informations */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <Shield className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Collecte d&apos;informations
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Les informations collectées via les formulaires de contact
                  sont utilisées uniquement pour répondre à vos demandes et ne
                  sont jamais transmises à des tiers.
                </p>
                <p className="text-[#BCBCBC] leading-relaxed">
                  Pour plus d&apos;informations sur le traitement de vos données
                  personnelles, consultez notre{' '}
                  <Link
                    href="/politique-confidentialite"
                    className="text-[rgb(229,208,255)] hover:underline"
                  >
                    Politique de Confidentialité
                  </Link>
                  .
                </p>
              </div>
            </motion.section>

            {/* Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Cookies et technologies similaires
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Le site n'utilise pas de cookies de suivi ou de personnalisation. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés :
                </p>
                <ul className="space-y-2 text-[#BCBCBC] ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <span><strong>Stripe :</strong> Sécurisation des paiements en ligne</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <span><strong>Vercel :</strong> Hébergement et performance du site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <span><strong>Vimeo :</strong> Lecture des vidéos intégrées</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <span><strong>Calendly :</strong> Système de prise de rendez-vous</span>
                  </li>
                </ul>
                <p className="text-[#BCBCBC] leading-relaxed">
                  Ces cookies techniques ne nécessitent pas votre consentement et ne collectent aucune donnée personnelle à des fins de tracking.
                </p>
              </div>
            </motion.section>

            {/* Disponibilité du service */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Disponibilité du service
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Dovira s&apos;efforce de maintenir le site accessible en
                  permanence, mais ne peut garantir une disponibilité
                  ininterrompue du service.
                </p>
                <p className="text-[#BCBCBC] leading-relaxed">
                  Le site peut être temporairement indisponible en raison de
                  maintenance, mises à jour ou problèmes techniques indépendants
                  de notre volonté.
                </p>
              </div>
            </motion.section>

            {/* Responsabilité et garanties */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <AlertCircle className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Responsabilité et garanties
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  L&apos;utilisation du site se fait à vos risques et périls.
                  Dovira décline toute responsabilité pour les dommages directs
                  ou indirects résultant de l&apos;utilisation du site.
                </p>
                <p className="text-[#BCBCBC] leading-relaxed">
                  Dovira ne garantit pas que le site soit exempt d&apos;erreurs,
                  de virus ou d&apos;autres éléments nuisibles.
                </p>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400 text-sm">
                    <strong>Limitation :</strong> Dovira ne saurait être tenu
                    responsable des pertes de données, interruptions d&apos;activité ou dommages indirects résultant de l&apos;utilisation du site.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Modification des CGU */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Modification des CGU
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Dovira se réserve le droit de modifier les présentes
                  conditions à tout moment. Les modifications entrent en vigueur
                  dès leur publication sur le site.
                </p>
                <p className="text-[#BCBCBC] leading-relaxed">
                  Il est conseillé de consulter régulièrement cette page pour
                  prendre connaissance des éventuelles modifications.
                </p>
              </div>
            </motion.section>

            {/* Droit applicable */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.0 }}
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
                Les présentes CGU sont régies par le droit français. En cas de
                litige, les tribunaux français seront compétents.
              </p>
            </motion.section>

            {/* Section finale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
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
                  {new Date().toLocaleDateString('fr-FR')}
                </p>
                <p className="text-[#BCBCBC]">
                  <strong className="text-[rgb(229,208,255)]">Contact :</strong>{' '}
                  Pour toute question concernant ces conditions
                  d&apos;utilisation, contactez-nous à : contact@dovira.fr
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
