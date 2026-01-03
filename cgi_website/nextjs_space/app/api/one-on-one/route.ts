import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, tradingExperience, currentCapital, goals, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { message: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Create one-on-one application
    const application = await prisma.oneOnOneApplication.create({
      data: {
        name,
        email,
        phone: phone || null,
        tradingExperience: tradingExperience || null,
        currentCapital: currentCapital || null,
        goals: goals || null,
        message: message || null,
        status: 'pending',
      },
    })

    return NextResponse.json(
      { message: 'Application submitted successfully', id: application?.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting one-on-one application:', error)
    return NextResponse.json(
      { message: 'Failed to submit application. Please try again.' },
      { status: 500 }
    )
  }
}
