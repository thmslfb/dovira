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
  title:
    'Agence de montage vidéo – Dovira | Réels, TikTok, Ads, YouTube',
  description:
    "Agence de montage vidéo spécialisée en formats courts et publicitaires. Réels, TikTok, Shorts, Ads, YouTube. Livraison 72h. Devis sur-mesure.",
  keywords: [
    'monteur vidéo',
    'montage vidéo professionnel',
    'agence de montage vidéo',
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
    title: 'Agence de montage vidéo – Dovira',
    description:
      'Agence spécialisée en montage vidéo pour créateurs et marques. Réels, TikTok, Ads, YouTube – Livraison 72h.',
    url: 'https://dovira.fr',
    siteName: 'Dovira',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Agence de montage vidéo – Dovira',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence de montage vidéo – Dovira',
    description:
      'Réels, TikTok, Ads, YouTube. Livraison 72h. Devis sur-mesure.',
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
