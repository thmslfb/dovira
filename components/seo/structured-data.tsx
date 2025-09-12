export const StructuredData = () => {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dovira',
    url: 'https://dovira.fr',
    logo: 'https://dovira.fr/images/logo.png',
    description:
      "Agence de montage vidéo spécialisée en formats courts et publicitaires (Réels, TikTok, Ads, YouTube). Livraison 72h. Devis sur-mesure.",
    sameAs: ['https://www.instagram.com/agence_dovira/'],
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
  }

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Agence de montage vidéo',
    provider: {
      '@type': 'Organization',
      name: 'Dovira',
      url: 'https://dovira.fr',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://dovira.fr',
      availableLanguage: ['fr'],
    },
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
          text:
            "Je réalise tous types de montages : vidéos courtes (Réels, TikTok, Shorts), publicités (Ads), vidéos YouTube longues, VSL, et bien plus. Je m’adapte à tous les formats et styles selon ton besoin.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quels sont tes délais de livraison ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Je m’engage à te livrer la vidéo finale sous un maximum de 72 heures après réception des rushs et du brief.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment fonctionnent tes tarifs ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Pas d’abonnement : les prestations se font sur devis. Contacte-moi pour discuter de ton besoin et je te proposerai un devis clair et transparent adapté à ton projet.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  )
}