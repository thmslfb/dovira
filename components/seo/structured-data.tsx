export const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Dovira',
    description:
      'Monteur vidéo professionnel spécialisé en Reels, publicités et vidéos YouTube. Livraison sous 72h, satisfaction garantie.',
    url: 'https://dovira.fr',
    logo: 'https://dovira.fr/logo.png',
    image: 'https://dovira.fr/og-image.jpg',
    serviceType: 'Montage vidéo professionnel',
    provider: {
      '@type': 'Person',
      name: 'Dovira',
      jobTitle: 'Monteur vidéo professionnel',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de montage vidéo',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pack Starter',
            description:
              '5 Reels dynamiques sous-titrés + 1 Vidéo publicitaire + effets et animations inclus',
          },
          price: '270',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pack Growth',
            description:
              '10 Reels optimisés + 3 Vidéos publicitaires + montage professionnel multi-plateformes',
          },
          price: '700',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pack Pro',
            description:
              '20 Reels impactants + 6 Vidéos publicitaires + 3 Vidéos YouTube + stratégie complète',
          },
          price: '1600',
          priceCurrency: 'EUR',
        },
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'French',
    },
    sameAs: [
      // Ajoutez ici vos réseaux sociaux
      // 'https://www.instagram.com/dovira',
      // 'https://www.youtube.com/@dovira',
      // 'https://www.linkedin.com/company/dovira',
    ],
  }

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dovira',
    url: 'https://dovira.fr',
    logo: 'https://dovira.fr/logo.png',
    description:
      'Agence spécialisée en montage vidéo pour créateurs et entreprises',
    founder: {
      '@type': 'Person',
      name: 'Dovira',
    },
    knowsAbout: [
      'Montage vidéo',
      'Création de Reels',
      'Vidéos publicitaires',
      'Montage YouTube',
      'Video marketing',
      'Effets visuels',
      'Post-production',
    ],
  }

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels types de vidéos peux-tu monter ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Je réalise tous types de montages : vidéos courtes (Réels, TikTok, Shorts), publicités (Ads), vidéos YouTube longues, VSL, et bien plus. Je m\'adapte à tous les formats et styles selon ton besoin.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quels sont tes délais de livraison ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Je m\'engage à te livrer la vidéo finale sous un maximum de 72 heures après réception des rushs et du brief. La rapidité et la qualité sont mes priorités.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment fonctionnent tes tarifs ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pas d\'abonnement : tu choisis simplement le pack qui te correspond et tu payes directement en ligne via Stripe. Si tu as besoin d\'une solution sur-mesure, contacte-moi : je préparerai alors un devis clair et transparent adapté à ton projet.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  )
}