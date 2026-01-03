import Image from 'next/image'
import { Award, Target, TrendingUp, Users, Globe, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | Capital Growth Investment',
  description: 'Learn about Capital Growth Investment, our expertise in forex trading, and our mission to empower traders worldwide.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering traders with proven strategies and comprehensive education for long-term success.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in trading education and fund management services.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive network of traders committed to mutual growth and success.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving traders and investors across all continents with world-class expertise.',
    },
  ]

  const expertise = [
    'Advanced XAUUSD trading strategies',
    'Expert EURUSD market analysis',
    'Risk management frameworks',
    'Portfolio diversification',
    'Psychological trading discipline',
    'Economic analysis integration',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-charcoal-gray to-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <span className="text-gold text-sm font-semibold">About CGI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building <span className="gold-gradient">Trading Excellence</span>
            </h1>
            <p className="text-xl text-platinum-silver leading-relaxed">
              Capital Growth Investment is dedicated to transforming aspiring traders into consistently profitable investors through proven methodologies and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-gold">Story</span>
              </h2>
              <div className="space-y-4 text-platinum-silver leading-relaxed">
                <p>
                  Capital Growth Investment was founded by a team of professional forex traders with over a decade of experience in financial markets. What started as a passion for trading evolved into a mission to share proven strategies with aspiring traders worldwide.
                </p>
                <p>
                  Specializing in XAUUSD (Gold) and EURUSD markets, our founder developed a systematic approach to trading that combines technical analysis, fundamental insights, and psychological discipline. This methodology has been refined through years of real-market experience across all asset classes.
                </p>
                <p>
                  Today, CGI serves hundreds of students and manages millions in client funds, maintaining a track record of excellence in both education and fund management. Our commitment remains unchanged: to provide the highest quality trading education and professional money management services.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="CGI Logo"
                  fill
                  className="object-contain p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-charcoal-gray/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our Core <span className="text-gold">Values</span>
            </h2>
            <p className="text-platinum-silver text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Capital Growth Investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values?.map((value, index) => {
              const Icon = value?.icon
              return (
                <div key={index} className="card text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gold/10 rounded-full">
                      {Icon && <Icon className="text-gold" size={32} />}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value?.title}</h3>
                  <p className="text-platinum-silver text-sm">{value?.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-gold">Expertise</span>
              </h2>
              <p className="text-platinum-silver mb-8 leading-relaxed">
                With extensive experience across all asset classes, our team specializes in forex trading with a particular focus on XAUUSD and EURUSD markets. Our comprehensive approach ensures students and clients benefit from:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertise?.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={20} />
                    <span className="text-platinum-silver">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <div className="flex items-center space-x-4 mb-6">
                <TrendingUp className="text-gold" size={48} />
                <div>
                  <h3 className="text-2xl font-bold">10+ Years</h3>
                  <p className="text-platinum-silver">Professional Trading Experience</p>
                </div>
              </div>
              <p className="text-platinum-silver text-sm leading-relaxed">
                Our founder's journey in financial markets spans over a decade, with proven success in forex, commodities, indices, and cryptocurrencies. This diverse background provides students with a comprehensive understanding of market dynamics and cross-market correlations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-charcoal-gray/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-gold">Journey?</span>
            </h2>
            <p className="text-platinum-silver mb-8 text-lg">
              Join our community of successful traders and investors. Whether you're looking for education or professional fund management, we have the perfect solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bootcamp" className="btn-primary">
                Explore Programs
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
