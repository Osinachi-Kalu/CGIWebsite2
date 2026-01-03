import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create contact inquiry
    const inquiry = await prisma.contactInquiry.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject,
        message,
        status: 'new',
      },
    })

    return NextResponse.json(
      { message: 'Contact inquiry submitted successfully', id: inquiry?.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting contact inquiry:', error)
    return NextResponse.json(
      { message: 'Failed to submit inquiry. Please try again.' },
      { status: 500 }
    )
  }
}
