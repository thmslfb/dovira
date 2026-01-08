// components/BuyButton.js
'use client'

import { useState } from 'react'
import { Button } from './button'

// Liste blanche des prix autorisés (doit correspondre à l'API)
const ALLOWED_PRICES = {
  price_1Rl3BvHGR8lUvrPHgtd8V0V3: 'Pack Starter',
  price_1RjQL8HGR8lUvrPHstf7QS1B: 'Pack Pro',
} as const

interface BuyButtonProps {
  priceId: keyof typeof ALLOWED_PRICES
  children: React.ReactNode
  className?: string
}

export default function BuyButton({
  priceId,
  children,
  className,
}: BuyButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)

    // Validation côté client (défense en profondeur)
    if (!ALLOWED_PRICES[priceId]) {
      console.error('❌ Invalid price ID:', priceId)
      alert('Erreur: Prix non valide.')
      setLoading(false)
      return
    }

    // console.log(
    //   '🛒 Starting checkout for:',
    //   ALLOWED_PRICES[priceId],
    //   '(',
    //   priceId,
    //   ')'
    // )

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
        'w-full !bg-gradient-to-r !from-[rgb(120,0,255)] !via-[rgb(120,0,255)] !to-[rgb(120,0,255)] text-white hover:opacity-90 !border-none shadow-lg shadow-[rgb(120,0,255)]/50 transition-all duration-300 relative overflow-hidden cursor-pointer'
      }
    >
      {loading ? 'Redirection...' : children}
    </Button>
  )
}
