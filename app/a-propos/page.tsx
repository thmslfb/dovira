import { AboutHero, AboutContent, Header } from '@/components/sections'
import { StructuredData } from '@/components/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos - Khalid Capron | Dovira',
  description: 'Découvrez Khalid Capron, fondateur de Dovira, votre partenaire stratégique en montage vidéo et motion design pour créateurs et entrepreneurs ambitieux.',
  openGraph: {
    title: 'À propos - Khalid Capron | Dovira',
    description: 'Découvrez Khalid Capron, fondateur de Dovira, votre partenaire stratégique en montage vidéo et motion design pour créateurs et entrepreneurs ambitieux.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <StructuredData />
      
      <div className="fixed inset-0 bg-[#0a0a0a] z-[-2]" />
      <div className="absolute top-0 z-[-1] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,208,255,0.3),rgba(255,255,255,0))]" />

      <Header />
      <main className="bg-[#0a0a0a]">
        <AboutHero />
        <AboutContent />
      </main>
    </>
  )
}