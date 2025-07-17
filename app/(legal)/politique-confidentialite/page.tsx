'use client'

import { AnimatedGroup } from '@/components/animations'
import { Button } from '@/components/ui'
import { AlertCircle, ArrowLeft, Clock, Eye, Lock, Shield } from 'lucide-react'
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

export default function PolitiqueConfidentialitePage() {
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
              <Shield className="w-12 h-12 text-[rgb(229,208,255)]" />
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-br from-[rgb(180,120,255)] via-[rgb(200,140,255)] to-[rgb(140,80,255)] bg-clip-text text-transparent"
            >
              Politique de Confidentialité
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-[#BCBCBC] mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Protection des données personnelles et respect du RGPD
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
            {/* Responsable du traitement */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-[rgb(180,120,255)]/8 border border-[rgb(229,208,255)]/30 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/20 border border-[rgb(229,208,255)]/30">
                  <Shield className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Responsable du traitement
                </h2>
              </div>
              <p className="text-[#BCBCBC] leading-relaxed">
                Dovira, en qualité de responsable du traitement, s&apos;engage à
                respecter la réglementation en vigueur applicable au traitement
                des données personnelles et, en particulier, le règlement (UE)
                2016/679 du Parlement européen et du Conseil du 27 avril 2016
                (RGPD).
              </p>
            </motion.section>

            {/* Données collectées */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <Eye className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Données collectées
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Dovira collecte un minimum de données personnelles, uniquement celles nécessaires au traitement des commandes :
                </p>
                <ul className="space-y-3 text-[#BCBCBC]">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <span><strong>Adresse e-mail :</strong> collectée automatiquement par Stripe lors du paiement (visible dans notre dashboard Stripe)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                    <span><strong>Données techniques :</strong> cookies strictement nécessaires (Stripe, Vercel, Vimeo)</span>
                  </li>
                </ul>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                  <p className="text-green-400 text-sm">
                    <strong>Aucune autre donnée personnelle</strong> n'est collectée directement par Dovira. Pas de formulaire de contact, pas de newsletter, pas de tracking.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Finalités et base légale */}
            <div className="grid md:grid-cols-2 gap-6">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    Finalités
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-[#BCBCBC] leading-relaxed">
                    Les données collectées sont utilisées uniquement pour :
                  </p>
                  <ul className="space-y-3 text-[#BCBCBC]">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <span><strong>Traitement des paiements</strong> via Stripe (email requis pour la facturation)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <span><strong>Fonctionnement technique</strong> du site (cookies nécessaires)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <span><strong>Livraison des services</strong> de montage vidéo commandés</span>
                    </li>
                  </ul>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
                    <p className="text-blue-400 text-sm">
                      <strong>Aucun marketing, aucun suivi, aucune revente</strong> de données. Utilisation strictement limitée à l'exécution de votre commande.
                    </p>
                  </div>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                    <Lock className="w-6 h-6 text-[rgb(229,208,255)]" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    Base légale
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-[#BCBCBC] leading-relaxed">
                    Le traitement est fondé sur :
                  </p>
                  <ul className="space-y-3 text-[#BCBCBC]">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <span>Votre consentement (art. 6.1.a RGPD)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <span>Exécution du contrat (art. 6.1.b RGPD)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <span>Intérêt légitime (art. 6.1.f RGPD)</span>
                    </li>
                  </ul>
                </div>
              </motion.section>
            </div>

            {/* Vos droits */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="bg-[rgb(180,120,255)]/8 border border-[rgb(229,208,255)]/30 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/20 border border-[rgb(229,208,255)]/30">
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
                  Vos droits
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <div>
                        <h3 className="text-[rgb(229,208,255)] font-medium">
                          Droit d&apos;accès
                        </h3>
                        <p className="text-[#BCBCBC] text-sm">
                          Connaître les données traitées vous concernant
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <div>
                        <h3 className="text-[rgb(229,208,255)] font-medium">
                          Droit de rectification
                        </h3>
                        <p className="text-[#BCBCBC] text-sm">
                          Corriger vos données inexactes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <div>
                        <h3 className="text-[rgb(229,208,255)] font-medium">
                          Droit à l&apos;effacement
                        </h3>
                        <p className="text-[#BCBCBC] text-sm">
                          Demander la suppression de vos données
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <div>
                        <h3 className="text-[rgb(229,208,255)] font-medium">
                          Droit à la portabilité
                        </h3>
                        <p className="text-[#BCBCBC] text-sm">
                          Récupérer vos données dans un format structuré
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <div>
                        <h3 className="text-[rgb(229,208,255)] font-medium">
                          Droit d&apos;opposition
                        </h3>
                        <p className="text-[#BCBCBC] text-sm">
                          Vous opposer au traitement de vos données
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)] mt-2" />
                      <div>
                        <h3 className="text-[rgb(229,208,255)] font-medium">
                          Droit à la limitation
                        </h3>
                        <p className="text-[#BCBCBC] text-sm">
                          Limiter le traitement de vos données
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-[rgb(229,208,255)]/10 border border-[rgb(229,208,255)]/20 rounded-lg">
                  <p className="text-[#BCBCBC] text-sm">
                    <strong className="text-[rgb(229,208,255)]">
                      Pour exercer ces droits :
                    </strong>{' '}
                    Contactez-nous à contact@dovira.fr en précisant votre
                    demande.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Cookies */}
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white">Cookies</h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#BCBCBC] leading-relaxed">
                  Nous n’utilisons pas de cookies de suivi ni de
                  personnalisation. Toutefois, des cookies techniques
                  indispensables peuvent être déposés par nos prestataires :
                  Vercel (hébergement / performance) et Stripe (paiement
                  sécurisé).
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-[rgb(229,208,255)] font-medium">
                      Cookies techniques
                    </h3>
                    <ul className="space-y-2 text-[#BCBCBC] text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[rgb(229,208,255)] mt-2" />
                        <span>Fonctionnement du site</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[rgb(229,208,255)] mt-2" />
                        <span>Sécurité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[rgb(229,208,255)] mt-2" />
                        <span>Préférences utilisateur</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[rgb(229,208,255)] font-medium">
                      Cookies tiers indispensables
                    </h3>
                    <ul className="space-y-2 text-[#BCBCBC] text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[rgb(229,208,255)] mt-2" />
                        <span>
                          Cookies Stripe&nbsp;: sécurisation et validation du
                          paiement
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[rgb(229,208,255)] mt-2" />
                        <span>
                          Cookies Vercel&nbsp;: performance et équilibrage de
                          charge
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[rgb(229,208,255)] mt-2" />
                        <span>
                          Cookies Vimeo&nbsp;: lecture et affichage des vidéos
                          intégrées
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[rgb(229,208,255)] mt-2" />
                        <span>
                          Cookies Calendly&nbsp;: système de prise de rendez-vous
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-[rgb(229,208,255)]/10 border border-[rgb(229,208,255)]/20 rounded-lg">
                  <p className="text-[#BCBCBC] text-sm">
                    Vous pouvez configurer votre navigateur pour refuser les
                    cookies, mais certaines fonctionnalités du site pourraient
                    être affectées.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Réclamation */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-8 hover:border-[rgb(229,208,255)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                  <AlertCircle className="w-6 h-6 text-[rgb(229,208,255)]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  Réclamation
                </h2>
              </div>
              <p className="text-[#BCBCBC] leading-relaxed">
                Si vous estimez que le traitement de vos données personnelles
                constitue une violation du RGPD, vous avez le droit
                d&apos;introduire une réclamation auprès de la{' '}
                <strong className="text-[rgb(229,208,255)]">CNIL</strong>{' '}
                (Commission Nationale de l&apos;Informatique et des Libertés) ou
                de l&apos;autorité de contrôle compétente de votre pays de
                résidence.
              </p>
            </motion.section>

            {/* Section finale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="mt-12 bg-[rgb(180,120,255)]/8 border border-[rgb(229,208,255)]/20 rounded-2xl p-8"
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
                  Pour toute question concernant cette politique de
                  confidentialité, contactez-nous à : contact@dovira.fr
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
