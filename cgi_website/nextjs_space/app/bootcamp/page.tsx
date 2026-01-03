import { CheckCircle2, Clock, Target, TrendingUp, Users, Award } from 'lucide-react'
import BootcampForm from '@/components/bootcamp-form'

export const metadata = {
  title: '5-Day Trading Bootcamp | Capital Growth Investment',
  description: 'Transform your trading with our intensive 5-day bootcamp. Learn proven strategies, backtesting techniques, and execution data extraction for just $97.',
}

export default function BootcampPage() {
  const benefits = [
    'Deep dive into one proven trading model',
    'Comprehensive backtesting techniques',
    'Data extraction for precise execution',
    'Live trading sessions and demonstrations',
    'Lifetime access to all course materials',
    'Private community access',
    'Q&A sessions with expert traders',
    'Personalized trading plan template',
  ]

  const curriculum = [
    {
      day: 1,
      title: 'Foundation & Model Introduction',
      topics: [
        'Trading psychology fundamentals',
        'Introduction to the proven model',
        'Risk management principles',
        'Setting up your trading environment',
      ],
    },
    {
      day: 2,
      title: 'Backtesting Framework',
      topics: [
        'Backtesting methodology',
        'Data collection and organization',
        'Identifying key patterns',
        'Statistical validation techniques',
      ],
    },
    {
      day: 3,
      title: 'Data Extraction & Analysis',
      topics: [
        'Extracting execution data',
        'Analyzing win rates and risk-reward',
        'Identifying optimal entry/exit points',
        'Performance metrics tracking',
      ],
    },
    {
      day: 4,
      title: 'Live Trading Application',
      topics: [
        'Applying the model in real-time',
        'Trade management strategies',
        'Dealing with emotions in live trading',
        'Position sizing and scaling',
      ],
    },
    {
      day: 5,
      title: 'Refinement & Next Steps',
      topics: [
        'Fine-tuning your approach',
        'Creating your trading plan',
        'Long-term consistency strategies',
        'Ongoing support and resources',
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-charcoal-gray to-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <span className="text-gold text-sm font-semibold">5-Day Intensive Program</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Trading in <span className="gold-gradient">5 Days</span>
            </h1>
            <p className="text-xl text-platinum-silver leading-relaxed mb-8">
              Master backtesting, data extraction, and execution with our proven trading model. 
              Limited spots available.
            </p>
            <div className="flex items-center justify-center space-x-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gold">$97</div>
                <div className="text-sm text-platinum-silver">One-time payment</div>
              </div>
              <div className="h-12 w-px bg-gold/30"></div>
              <div>
                <div className="text-4xl font-bold text-white">5</div>
                <div className="text-sm text-platinum-silver">Days intensive</div>
              </div>
              <div className="h-12 w-px bg-gold/30"></div>
              <div>
                <div className="text-4xl font-bold text-white">∞</div>
                <div className="text-sm text-platinum-silver">Lifetime access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                What You'll <span className="text-gold">Learn</span>
              </h2>
              <p className="text-platinum-silver text-lg">
                This bootcamp focuses on mastering one proven model through extensive backtesting and data extraction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits?.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={20} />
                  <span className="text-platinum-silver">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section bg-charcoal-gray/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              5-Day <span className="text-gold">Curriculum</span>
            </h2>
            <p className="text-platinum-silver text-lg max-w-2xl mx-auto">
              A structured approach to mastering profitable trading through one proven model.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {curriculum?.map((day) => (
              <div key={day?.day} className="card">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-gold font-bold text-lg">Day {day?.day}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{day?.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {day?.topics?.map((topic, index) => (
                    <li key={index} className="flex items-start space-x-2 text-platinum-silver">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Bootcamp */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-gold">Our Bootcamp</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gold/10 rounded-full">
                  <Target className="text-gold" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Focused Approach</h3>
              <p className="text-platinum-silver text-sm">
                Unlike other courses that overwhelm you, we focus on mastering ONE proven model deeply.
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gold/10 rounded-full">
                  <TrendingUp className="text-gold" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Data-Driven</h3>
              <p className="text-platinum-silver text-sm">
                Learn to extract and analyze execution data for consistent, profitable trading decisions.
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gold/10 rounded-full">
                  <Award className="text-gold" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Lifetime Support</h3>
              <p className="text-platinum-silver text-sm">
                Get lifetime access to materials and ongoing community support for continuous growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="section bg-charcoal-gray/10">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                Secure Your <span className="text-gold">Spot</span>
              </h2>
              <p className="text-platinum-silver">
                Limited spots available. Enroll now to transform your trading journey.
              </p>
            </div>
            <BootcampForm />
          </div>
        </div>
      </section>
    </>
  )
}
