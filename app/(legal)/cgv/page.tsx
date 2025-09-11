'use client'

import { AnimatedGroup } from '@/components/animations'
import { Button } from '@/components/ui'
import { AlertCircle, ArrowLeft, Clock, FileText, Scale } from 'lucide-react'
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

export default function CGVPage() {
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
              <Scale className="w-12 h-12 text-[rgb(229,208,255)]" />
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-br from-[rgb(180,120,255)] via-[rgb(200,140,255)] to-[rgb(140,80,255)] bg-clip-text text-transparent"
            >
              Conditions Générales de Vente
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-[#BCBCBC] mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Conditions commerciales pour les services de montage vidéo
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
            {/* Objet */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-[rgb(180,120,255)]/8 border border-[rgb(229,208,255)]/30 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/20 border border-[rgb(229,208,255)]/30">
                  <Scale className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Objet</h2>
              </div>
              <p className="text-[#BCBCBC] leading-relaxed">
                Les présentes conditions générales de vente régissent les
                relations commerciales entre Dovira et ses clients dans le cadre
                de la prestation de services de montage vidéo professionnel.
              </p>
            </motion.section>

            {/* Services */}
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
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Services proposés
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Dovira propose les services suivants :
                </p>
                <ul className="space-y-3 text-[#BCBCBC]">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <span>Montage vidéo professionnel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <span>Post-production et étalonnage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <span>Création d&apos;animations et effets visuels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <span>Optimisation pour différents formats</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Commandes */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <FileText className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Modalités de commande
                </h2>
              </div>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* <div className="bg-[rgb(229,208,255)]/10 border border-[rgb(229,208,255)]/20 rounded-lg p-4">
                    <h3 className="text-[rgb(229,208,255)] font-medium mb-2">
                      Packs standardisés
                    </h3>
                    <ul className="text-[#BCBCBC] text-sm space-y-1">
                      <li>• Commande directe en ligne</li>
                      <li>• Paiement immédiat par carte</li>
                      <li>• Pas de devis nécessaire</li>
                      <li>• Démarrage sous 24-48h</li>
                    </ul>
                  </div> */}

                  <div className="bg-[#0a0a0a]/50 border border-[rgb(229,208,255)]/20 rounded-lg p-4">
                    <h3 className="text-[rgb(229,208,255)] font-medium mb-2">
                      Projets sur mesure
                    </h3>
                    <ul className="text-[#BCBCBC] text-sm space-y-1">
                      <li>• Devis personnalisé requis</li>
                      <li>• Délai de réponse : 48h</li>
                      <li>• Devis valable 30 jours</li>
                      <li>• Paiement selon modalités convenues</li>
                    </ul>
                  </div>
                </div>

                <p className="text-[#BCBCBC] leading-relaxed">
                  Les packs Starter, Growth et Pro sont disponibles à
                  l&apos;achat immédiat. Les projets nécessitant des
                  spécifications particulières font l&apos;objet d&apos;un devis
                  personnalisé.
                </p>
              </div>
            </motion.section>

            {/* Prix et paiement */}
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Prix et modalités de paiement
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-400 text-sm font-medium">
                    <strong>Micro-entreprise :</strong> En tant que
                    micro-entrepreneur, Dovira ne facture pas la TVA (art. 293 B
                    du CGI).
                  </p>
                </div>

                <div className="space-y-4">
                  {/* <h3 className="text-[rgb(229,208,255)] font-medium text-lg">
                    Nos packs :
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[#0a0a0a]/50 border border-[rgb(229,208,255)]/20 rounded-lg p-4">
                      <h4 className="text-white font-medium">Pack Starter</h4>
                      <p className="text-2xl font-bold text-[rgb(229,208,255)] mt-1">
                        295€
                      </p>
                      <p className="text-[#BCBCBC] text-sm mt-1">
                        5 Réels + 1 Vidéo pub
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[rgb(229,208,255)]/10 to-[rgb(180,120,255)]/5 border border-[rgb(229,208,255)]/30 rounded-lg p-4">
                      <h4 className="text-white font-medium">Pack Growth</h4>
                      <p className="text-2xl font-bold text-[rgb(229,208,255)] mt-1">
                        700€ / 980€
                      </p>
                      <p className="text-[#BCBCBC] text-sm mt-1">
                        10 Réels + 3 Vidéos pub
                      </p>
                    </div>
                    <div className="bg-[#0a0a0a]/50 border border-[rgb(229,208,255)]/20 rounded-lg p-4">
                      <h4 className="text-white font-medium">Pack Pro</h4>
                      <p className="text-2xl font-bold text-[rgb(229,208,255)] mt-1">
                        1 600€
                      </p>
                      <p className="text-[#BCBCBC] text-sm mt-1">
                        20 Réels + 6 Vidéos pub + 3 YouTube
                      </p>
                    </div>
                  </div> */}
                </div>

                <div className="space-y-3">
                  <p className="text-[rgb(229,208,255)] font-medium">
                    Modalités de paiement :
                  </p>
                  <ul className="space-y-3 text-[#BCBCBC]">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <span>Projets sur mesure : devis personnalisé</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <span>
                        Retard de paiement (devis sur-mesure) : pénalités BCE +
                        10 pts & indemnité forfaitaire de 40 €
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-400 text-sm">
                    <strong>Avantage :</strong> Paiement simple par facture,
                    conditions définies dans le devis, démarrage du projet dès
                    validation.
                  </p>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400 text-sm">
                    <strong>Remboursements :</strong> Conformément à l&apos;art.
                    L221-28 du Code de la consommation, les services
                    personnalisés ne sont pas remboursables une fois démarrés.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Livraison */}
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
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">Livraison</h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  La livraison s&apos;effectue par voie électronique (lien de
                  téléchargement sécurisé) ou via des plateformes de partage
                  professionnel.
                </p>
                <p className="text-[#BCBCBC] leading-relaxed">
                  Les délais de livraison sont convenus lors de la commande et
                  dépendent de la complexité du projet. Une validation finale
                  est requise avant livraison.
                </p>
              </div>
            </motion.section>

            {/* Modifications */}
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Modifications et révisions
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-[rgb(229,208,255)]/10 border border-[rgb(229,208,255)]/20 rounded-lg p-4">
                  <p className="text-[rgb(229,208,255)] text-sm font-medium mb-2">
                    <strong>Révisions incluses :</strong> 2 allers-retours de
                    modifications par vidéo
                  </p>
                  <ul className="text-[#BCBCBC] text-sm space-y-1">
                    <li>• Ajustements de timing et transitions</li>
                    <li>• Modifications de textes et sous-titres</li>
                    <li>• Changements de musique ou effets sonores</li>
                    <li>• Retouches d&apos;effets visuels</li>
                  </ul>
                </div>

                <p className="text-[#BCBCBC] leading-relaxed">
                  Les révisions supplémentaires (au-delà de 2 par vidéo) sont
                  facturées 30€ HT par aller-retour.
                </p>

                <p className="text-[#BCBCBC] leading-relaxed">
                  Les modifications majeures (changement de concept, ajout de
                  séquences non prévues) font l&apos;objet d&apos;un devis
                  complémentaire.
                </p>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <p className="text-orange-400 text-sm">
                    <strong>Annulation :</strong> En cas d&apos;annulation après
                    démarrage du projet, aucun remboursement n&apos;est possible
                    (service personnalisé entamé).
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Propriété intellectuelle */}
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Propriété intellectuelle
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Le client garantit détenir tous les droits sur les éléments
                  fournis (vidéos, musiques, images, textes). Dovira décline
                  toute responsabilité en cas de litige.
                </p>
                <p className="text-[#BCBCBC] leading-relaxed">
                  Les droits d&apos;exploitation de la vidéo finale sont
                  transférés au client après paiement intégral, sauf accord
                  contraire.
                </p>
              </div>
            </motion.section>

            {/* Responsabilité */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <AlertCircle className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Responsabilité
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  La responsabilité de Dovira est limitée au montant de la
                  prestation. Les dommages indirects ou pertes d&
                </p>
                <p className="text-[#BCBCBC] leading-relaxed">
                  Il appartient au client de vérifier et sauvegarder ses
                  données. Dovira ne peut être tenu responsable de leur perte.
                </p>
              </div>
            </motion.section>

            {/* Droit de rétractation */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
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
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Droit de rétractation
                </h2>
              </div>
              <p className="text-[#BCBCBC] leading-relaxed">
                Les prestations de services personnalisées commencent
                immédiatement après acceptation du devis. Le droit de
                rétractation ne s&apos;applique pas aux services déjà entamés
                (art. L221-28 du Code de la consommation).
              </p>
            </motion.section>

            {/* Droit applicable */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <Scale className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Droit applicable
                </h2>
              </div>
              <p className="text-[#BCBCBC] leading-relaxed">
                Les présentes CGV sont régies par le droit français. En cas de
                litige, les tribunaux français seront compétents après tentative
                de résolution amiable.
              </p>
            </motion.section>

            {/* Section finale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.0 }}
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
                  Pour toute question, contactez-nous à : contact@dovira.fr
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
