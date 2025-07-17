import Link from 'next/link'
import { Separator } from '../ui/separator'

export const Footer = () => {
  return (
    <footer className="relative pt-20 mt-12 pb-10 text-sm text-[#BCBCBC] overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/8 via-transparent to-[rgb(160,100,255)]/5" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(180,120,255)]/3 to-[rgb(200,140,255)]/8" />

      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-[rgb(180,120,255)]/6 to-[rgb(160,100,255)]/3 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-tl from-[rgb(200,140,255)]/5 to-[rgb(180,120,255)]/4 blur-3xl animate-pulse [animation-delay:2s]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(229,208,255)]/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-9 lg:px-13">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="flex flex-col items-start gap-4 lg:col-span-1">
            <Link
              href="/"
              aria-label="home"
              className="relative group inline-block"
            >
              <span
                className="relative font-bold tracking-tight font-montserrat transition-all duration-300 group-hover:opacity-80 text-white"
                style={{
                  fontSize: 'clamp(1.4rem, 3.5vw, 2.1rem)',
                }}
              >
                Dovira
              </span>
            </Link>
            <p className="text-sm max-w-xs leading-relaxed text-[#BCBCBC]">
              Ton monteur vidéo pour scaler ton business.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[rgb(180,120,255)]" />
              <span className="text-xs text-[rgb(229,208,255)]">
                Ouvert à de nouveaux projets
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-1">
            <h3 className="font-semibold text-base bg-gradient-to-r from-white to-[rgb(180,120,255)] bg-clip-text text-transparent">
              Légal
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/politique-confidentialite"
                className="font-light text-[#BCBCBC] hover:text-[rgb(229,208,255)] transition-all duration-300 hover:translate-x-1 text-sm"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/mentions-legales"
                className="font-light text-[#BCBCBC] hover:text-[rgb(229,208,255)] transition-all duration-300 hover:translate-x-1 text-sm"
              >
                Mentions légales
              </Link>
              <Link
                href="/cgv"
                className="font-light text-[#BCBCBC] hover:text-[rgb(229,208,255)] transition-all duration-300 hover:translate-x-1 text-sm"
              >
                CGV
              </Link>
              <Link
                href="/cgu"
                className="font-light text-[#BCBCBC] hover:text-[rgb(229,208,255)] transition-all duration-300 hover:translate-x-1 text-sm"
              >
                CGU
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-1">
            <h3 className="font-semibold text-base bg-gradient-to-r from-white to-[rgb(180,120,255)] bg-clip-text text-transparent">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="mailto:contact@dovira.fr"
                className="font-light text-[#BCBCBC] hover:text-[rgb(229,208,255)] transition-all duration-300 hover:translate-x-1 text-sm"
              >
                contact@dovira.fr
              </Link>
              <Link
                href="https://calendly.com/khalidcapron"
                target="_blank"
                rel="noopener noreferrer"
                className="font-light text-[#BCBCBC] hover:text-[rgb(229,208,255)] transition-all duration-300 hover:translate-x-1 text-sm"
              >
                Réserver un appel
              </Link>
            </div>
          </div>
        </div>

        <div className="relative my-12">
          <Separator className="bg-gradient-to-r from-transparent via-[rgb(229,208,255)]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(180,120,255)]/10 to-transparent blur-sm" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[#BCBCBC] text-sm">
            &copy; 2025 Dovira. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
