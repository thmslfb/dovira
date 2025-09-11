import { Footer } from '@/components/sections/footer'
import type { Metadata } from 'next'
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Playfair_Display,
  Syne,
} from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: '800',
})

const playfair = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: '400',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: '700',
})

export const metadata: Metadata = {
  title: 'Dovira - Monteur Vidéo Professionnel | Reels, Ads, YouTube',
  description:
    'Monteur vidéo professionnel spécialisé en Reels, publicités et vidéos YouTube. Livraison sous 72h, satisfaction garantie. Transformez vos contenus en vidéos qui convertissent.',
  keywords: [
    'monteur vidéo',
    'montage vidéo professionnel',
    'création reels',
    'vidéo publicitaire',
    'montage YouTube',
    'éditeur vidéo',
    'video marketing',
    'contenu vidéo',
  ],
  authors: [{ name: 'Dovira' }],
  creator: 'Dovira',
  publisher: 'Dovira',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dovira.fr'),
  alternates: {
    canonical: 'https://dovira.fr',
  },
  openGraph: {
    title: 'Dovira - Monteur Vidéo Professionnel',
    description:
      'Spécialiste du montage vidéo pour créateurs et entreprises. Reels, publicités, YouTube - Livraison sous 72h.',
    url: 'https://dovira.fr',
    siteName: 'Dovira',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dovira - Monteur Vidéo Professionnel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dovira - Monteur Vidéo Professionnel',
    description:
      'Spécialiste du montage vidéo pour créateurs et entreprises. Reels, publicités, YouTube - Livraison sous 72h.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${playfair.variable} ${montserrat.variable} antialiased bg-[#0a0a0a] text-white overflow-x-clip`}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
