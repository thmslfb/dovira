// app/api/checkout/route.js
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

// Liste blanche des price IDs autorisés
const ALLOWED_PRICES = {
  price_1Rl3BvHGR8lUvrPHgtd8V0V3: { name: 'Pack Starter', amount: 295 },
  price_1RjQKbHGR8lUvrPH8fE41i88: {
    name: 'Pack Growth sans YouTube',
    amount: 700,
  },
  price_1RjQKuHGR8lUvrPHXjOlvPWv: {
    name: 'Pack Growth avec YouTube',
    amount: 980,
  },
  price_1RjQL8HGR8lUvrPHstf7QS1B: { name: 'Pack Pro', amount: 1600 },
} as const

export async function POST(request: Request) {
  try {
    // Validation de la méthode
    if (request.method !== 'POST') {
      return Response.json({ error: 'Method not allowed' }, { status: 405 })
    }

    // Validation du Content-Type
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return Response.json({ error: 'Invalid content type' }, { status: 400 })
    }

    let body
    try {
      body = await request.json()
    } catch {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 })
    }

    const { priceId } = body

    console.log('🛒 Creating checkout session for price:', priceId)

    // Vérifier que le priceId est fourni et est une string
    if (!priceId || typeof priceId !== 'string') {
      return Response.json(
        { error: 'Valid price ID is required' },
        { status: 400 }
      )
    }

    // Validation sécurisée : vérifier que le price ID est autorisé
    console.log('📋 Available price IDs:', Object.keys(ALLOWED_PRICES))
    if (!ALLOWED_PRICES[priceId as keyof typeof ALLOWED_PRICES]) {
      console.error('❌ Unauthorized price ID attempted:', priceId)
      return Response.json({ error: 'Invalid price ID' }, { status: 400 })
    }

    // const priceInfo = ALLOWED_PRICES[priceId as keyof typeof ALLOWED_PRICES]
    // console.log('✅ Authorized price:', priceInfo.name, '-', priceInfo.amount, '€')

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel?session_id={CHECKOUT_SESSION_ID}`,
    })

    // console.log('✅ Session created for price:', priceId)
    return Response.json({ url: session.url })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('❌ Checkout error:', err)
    console.error('❌ Checkout error message:', message)
    return Response.json({ error: message }, { status: 500 })
  }
}
