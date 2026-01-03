import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name } = body

    // Validate email
    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existing = await prisma.newsletterSubscription.findUnique({
      where: { email },
    })

    if (existing) {
      if (existing?.subscribed) {
        return NextResponse.json(
          { message: 'This email is already subscribed' },
          { status: 400 }
        )
      } else {
        // Re-subscribe
        await prisma.newsletterSubscription.update({
          where: { email },
          data: { subscribed: true, name: name || existing?.name },
        })
        return NextResponse.json(
          { message: 'Successfully re-subscribed to newsletter' },
          { status: 200 }
        )
      }
    }

    // Create new subscription
    const subscription = await prisma.newsletterSubscription.create({
      data: {
        email,
        name: name || null,
        subscribed: true,
      },
    })

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter', id: subscription?.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing newsletter subscription:', error)
    return NextResponse.json(
      { message: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
