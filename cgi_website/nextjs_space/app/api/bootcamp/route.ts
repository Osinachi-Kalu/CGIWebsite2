import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, tradingExperience, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { message: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Create bootcamp enrollment
    const enrollment = await prisma.bootcampEnrollment.create({
      data: {
        name,
        email,
        phone: phone || null,
        tradingExperience: tradingExperience || null,
        message: message || null,
        status: 'pending',
      },
    })

    return NextResponse.json(
      { message: 'Bootcamp enrollment submitted successfully', id: enrollment?.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting bootcamp enrollment:', error)
    return NextResponse.json(
      { message: 'Failed to submit enrollment. Please try again.' },
      { status: 500 }
    )
  }
}
