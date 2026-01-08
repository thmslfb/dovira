'use client'

import { ReactNode, useState } from 'react'
import { Button } from './button'

// Liste blanche des prix autorisés pour le Pack Growth (doit correspondre à l'API)
const GROWTH_PRICES = {
  withoutYoutube: 'price_1RjQKbHGR8lUvrPH8fE41i88',
  withYoutube: 'price_1RjQKuHGR8lUvrPHXjOlvPWv',
} as const

interface BuyGrowthButtonProps {
  includeYoutube: boolean
  /** Optional custom button/content */
  children?: ReactNode
  className?: string
}

export default function BuyGrowthButton({
  includeYoutube,
  children,
  className,
}: BuyGrowthButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)

    // Utilisation des prix sécurisés de la liste blanche
    const priceId = includeYoutube
      ? GROWTH_PRICES.withYoutube
      : GROWTH_PRICES.withoutYoutube

    // const packType = includeYoutube
    //   ? 'Pack Growth avec YouTube'
    //   : 'Pack Growth sans YouTube'
    console.log('🛒 Starting checkout for priceId:', priceId)

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || `HTTP ${res.status}`)
      }

      const data = await res.json()
      if (data.url) {
        window.location = data.url
      } else {
        throw new Error('URL de redirection manquante')
      }
    } catch (error) {
      console.error('❌ Checkout error:', error)
      alert(
        `Erreur lors de la redirection vers le paiement: ${
          error instanceof Error ? error.message : 'Erreur inconnue'
        }`
      )
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      variant="ghost"
      className={
        className ||
        'w-full bg-gradient-to-r from-[rgb(120,0,255)] via-[rgb(120,0,255)] to-[rgb(120,0,255)] hover:opacity-90 text-white font-medium cursor-pointer transition-all duration-300 group-hover:scale-105 shadow-lg shadow-[rgb(120,0,255)]/50 relative overflow-hidden'
      }
    >
      {loading ? 'Redirection...' : children ?? 'Booster ma croissance'}
    </Button>
  )
}
