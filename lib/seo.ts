import { Metadata } from 'next'

interface SEOConfig {
  title: string
  description: string
  path?: string
  noIndex?: boolean
  keywords?: string[]
  type?: 'website' | 'article'
}

export function generateSEO({
  title,
  description,
  path = '',
  noIndex = false,
  keywords = [],
  type = 'website',
}: SEOConfig): Metadata {
  const baseUrl = 'https://dovira.fr'
  const url = `${baseUrl}${path}`

  return {
    title,
    description,
    keywords: [
      'monteur vidéo',
      'montage vidéo professionnel',
      'création reels',
      'vidéo publicitaire',
      'montage YouTube',
      'éditeur vidéo',
      'video marketing',
      'contenu vidéo',
      ...keywords,
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Dovira',
      locale: 'fr_FR',
      type,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}