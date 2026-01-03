import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, capitalAmount, investmentGoals, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { message: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Create fund management inquiry
    const inquiry = await prisma.fundManagementInquiry.create({
      data: {
        name,
        email,
        phone: phone || null,
        capitalAmount: capitalAmount || null,
        investmentGoals: investmentGoals || null,
        message: message || null,
        status: 'pending',
      },
    })

    return NextResponse.json(
      { message: 'Fund management inquiry submitted successfully', id: inquiry?.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting fund management inquiry:', error)
    return NextResponse.json(
      { message: 'Failed to submit inquiry. Please try again.' },
      { status: 500 }
    )
  }
}
