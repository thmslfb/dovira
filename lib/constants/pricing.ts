export const PRICING_CONFIG = {
  starter: {
    name: 'Pack Starter',
    price: 295,
    priceId: 'price_1Rl3BvHGR8lUvrPHgtd8V0V3',
    description: 'Lancement express',
    features: [
      '5 Réels dynamiques sous-titrés',
      'Effets et animations inclus',
      '1 Vidéo publicitaire (50-60 sec)',
      'Optimisé Instagram/Facebook',
      'Vidéo YouTube sur devis',
    ],
  },
  growth: {
    name: 'Pack Growth',
    priceWithoutYoutube: 700,
    priceWithYoutube: 980,
    priceIdWithoutYoutube: 'price_1RjQKbHGR8lUvrPH8fE41i88',
    priceIdWithYoutube: 'price_1RjQKuHGR8lUvrPHXjOlvPWv',
    description: 'Visibilité & conversion',
    features: [
      '10 Réels optimisés et sous-titrés',
      'Engagement boosté avec effets',
      '3 Vidéos publicitaires pro',
      'Multi-plateformes stratégiques',
      'Montage professionnel',
    ],
    youtubeFeature: 'Vidéo YouTube 5-8 min',
  },
  pro: {
    name: 'Pack Pro',
    originalPrice: 1899,
    price: 1600,
    priceId: 'price_1RjQL8HGR8lUvrPHstf7QS1B',
    description: 'Stratégie vidéo complète',
    features: [
      '20 Réels impactants et engageants',
      "Stratégie d'engagement maximale",
      '6 Vidéos publicitaires multi-plateformes',
      '3 Vidéos YouTube 5-8 min',
      'Montage haut de gamme',
      'Stratégie complète de croissance',
    ],
    availableSlots: 4,
    totalSlots: 5,
  },
} as const

export type PricingTier = keyof typeof PRICING_CONFIG