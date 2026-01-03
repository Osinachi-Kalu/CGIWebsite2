import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, tradingExperience, primaryGoal, capitalRange, interests } = body

    // Create survey response
    const response = await prisma.surveyResponse.create({
      data: {
        email: email || null,
        tradingExperience: tradingExperience || null,
        primaryGoal: primaryGoal || null,
        capitalRange: capitalRange || null,
        interests: interests ? JSON.stringify(interests) : null,
      },
    })

    return NextResponse.json(
      { message: 'Survey response submitted successfully', id: response?.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting survey response:', error)
    return NextResponse.json(
      { message: 'Failed to submit survey. Please try again.' },
      { status: 500 }
    )
  }
}
