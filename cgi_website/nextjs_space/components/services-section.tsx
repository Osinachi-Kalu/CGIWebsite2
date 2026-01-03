'use client'

import { motion } from 'framer-motion'
import { GraduationCap, UserCheck, Briefcase, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: '5-Day Bootcamp',
      price: '$97',
      description: 'Intensive bootcamp focused on backtesting one proven model extensively and extracting crucial execution data.',
      features: [
        'Deep dive into proven trading model',
        'Comprehensive backtesting techniques',
        'Data extraction for execution',
        'Live trading sessions',
        'Lifetime access to resources',
      ],
      href: '/bootcamp',
      color: 'from-blue-500/20 to-purple-500/20',
    },
    {
      icon: UserCheck,
      title: 'One-on-One Mentorship',
      price: '$10,000',
      description: 'Premium personalized program with comprehensive support, top-tier systems, and exclusive benefits.',
      features: [
        'Personal accountability & support',
        'Economic & business secrets',
        'Top-tier trading systems',
        'Annual exclusive retreats',
        'Direct line access',
        'Account management included',
        'Exclusive community access',
        'Portfolio diversification strategies',
      ],
      href: '/one-on-one',
      color: 'from-gold/20 to-yellow-500/20',
      featured: true,
    },
    {
      icon: Briefcase,
      title: 'Fund Management',
      price: '$100K Min',
      description: 'Professional account management service for qualified investors seeking passive income through expert trading.',
      features: [
        'Professional money management',
        'Minimum capital: $100,000',
        'Expert XAUUSD & EURUSD trading',
        'Regular performance reports',
        'Risk management protocols',
        'Transparent fee structure',
      ],
      href: '/fund-management',
      color: 'from-green-500/20 to-emerald-500/20',
    },
  ]

  return (
    <section className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="text-platinum-silver text-lg max-w-2xl mx-auto">
            Choose the perfect path to achieve your trading and investment goals with our tailored programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => {
            const Icon = service?.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card relative ${service?.featured ? 'lg:scale-105 border-2 border-gold/50' : ''}`}
              >
                {service?.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className={`bg-gradient-to-br ${service?.color} p-4 rounded-lg inline-block mb-4`}>
                  {Icon && <Icon className="text-white" size={32} />}
                </div>

                <h3 className="text-2xl font-bold mb-2">{service?.title}</h3>
                <div className="text-3xl font-bold text-gold mb-4">{service?.price}</div>
                <p className="text-platinum-silver mb-6">{service?.description}</p>

                <ul className="space-y-3 mb-8">
                  {service?.features?.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-2 text-sm text-platinum-silver">
                      <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service?.href ?? '/'}
                  className={`w-full flex items-center justify-center space-x-2 ${service?.featured ? 'btn-primary' : 'btn-secondary'}`}
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
