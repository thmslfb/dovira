'use client'

import { AnimatedGroup } from '@/components/animations'
import { Button } from '@/components/ui'
import { ArrowLeft, CheckCircle, Clock, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

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

function SuccessPageContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (!sessionId) {
      const redirectTimer = setTimeout(() => {
        window.location.href = '/'
      }, 8000)

      // Nettoyer le timer si le composant se démonte
      return () => clearTimeout(redirectTimer)
    }
  }, [sessionId])

  if (!sessionId) {
    return (
      <section className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
        {/* Orbes d'arrière-plan */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-red-500/15 to-orange-500/8 blur-3xl animate-pulse"
            style={{ animationDelay: '0s', animationDuration: '4s' }}
          />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-tl from-orange-500/12 to-red-500/6 blur-3xl animate-pulse"
            style={{ animationDelay: '2s', animationDuration: '6s' }}
          />
        </div>

        <div className="relative z-10 text-center max-w-lg mx-auto px-6">
          {/* Icône d'alerte */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/30 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <svg
                className="w-12 h-12 text-red-400"
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
            </motion.div>
          </motion.div>

          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-red-400 to-orange-400 bg-clip-text text-transparent"
          >
            Accès non autorisé
          </motion.h1>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-[#BCBCBC] mb-8 leading-relaxed"
          >
            Cette page est réservée aux clients ayant effectué un paiement
            valide.
          </motion.p>

          {/* Carte d'information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-red-500/15 to-orange-500/8 border border-red-500/20">
                <svg
                  className="w-6 h-6 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Redirection automatique
              </h3>
            </div>
            <p className="text-[#BCBCBC] text-sm leading-relaxed">
              Vous allez être redirigé vers la page d&apos;accueil dans 8
              secondes.
            </p>
          </motion.div>

          {/* Bouton retour immédiat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,rgb(239,68,68)_85%,transparent_100%)]" />
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0a0a0a]/90 text-white hover:bg-[#0a0a0a]/95 backdrop-blur-3xl shadow-lg transition-all duration-300"
              >
                <Link href="/" className="flex items-center gap-3 py-4 px-8">
                  <ArrowLeft className="w-5 h-5" />
                  Retour immédiat
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[rgb(200,140,255)]/12 blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s', animationDuration: '7s' }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-9 lg:px-12 z-10">
        <AnimatedGroup variants={transitionVariants}>
          <div className="text-center">
            {/* Icône de succès animée */}
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
              <CheckCircle className="w-12 h-12 text-[rgb(229,208,255)]" />
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-[rgb(200,140,255)] to-[rgb(130,50,255)] bg-clip-text text-transparent"
            >
              Commande confirmée !
            </motion.h1>

            {/* Message de remerciement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-[#BCBCBC] mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Merci pour votre confiance ! Votre paiement a été traité avec succès. 
              Je vais vous contacter prochainement pour commencer à travailler sur votre projet.
            </motion.p>

            {/* Cartes d'information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              <div className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-6 hover:border-[rgb(229,208,255)]/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                    <Mail className="w-6 h-6 text-[rgb(229,208,255)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Reçu de paiement
                  </h3>
                </div>
                <p className="text-[#BCBCBC] text-sm leading-relaxed">
                  Stripe vous a envoyé un email de confirmation avec le reçu de 
                  votre paiement. Vérifiez votre boîte de réception et vos spams.
                </p>
              </div>

              <div className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[rgb(229,208,255)]/20 rounded-2xl p-6 hover:border-[rgb(229,208,255)]/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[rgb(180,120,255)]/15 border border-[rgb(229,208,255)]/20">
                    <Clock className="w-6 h-6 text-[rgb(229,208,255)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Prochaines étapes
                  </h3>
                </div>
                <p className="text-[#BCBCBC] text-sm leading-relaxed">
                  Je vais vous contacter dans les 24-48h pour faire connaissance,
                  comprendre votre projet et planifier notre collaboration.
                </p>
              </div>
            </motion.div>

            {/* Citation inspirante */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-[rgb(180,120,255)]/8 border border-[rgb(229,208,255)]/20 rounded-2xl p-8 mb-12"
            >
              <p className="text-[rgb(229,208,255)] text-lg md:text-xl font-medium italic mb-4">
                &quot;Ensemble, nous allons transformer votre vision en contenu
                vidéo percutant qui marquera vos audiences.&quot;
              </p>
              <p className="text-[#BCBCBC] text-sm">
                — Dovira, Votre monteur vidéo dédié
              </p>
            </motion.div>

            {/* Bouton retour */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
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
        </AnimatedGroup>
      </div>

      {/* Gradient de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-20" />
    </section>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  )
}
