'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { TrendingUp, DollarSign, BarChart3, Users } from 'lucide-react'

interface CounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

function Counter({ end, duration = 2, prefix = '', suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: 95,
      suffix: '%',
      label: 'Success Rate',
      description: 'Of our students achieve profitability',
    },
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Traders Trained',
      description: 'Across beginner to advanced levels',
    },
    {
      icon: DollarSign,
      value: 100,
      suffix: 'M+',
      prefix: '$',
      label: 'Assets Under Management',
      description: 'Professional fund management services',
    },
    {
      icon: BarChart3,
      value: 10,
      suffix: '+',
      label: 'Years Experience',
      description: 'In forex and financial markets',
    },
  ]

  return (
    <section className="section bg-charcoal-gray/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven Track Record of <span className="text-gold">Excellence</span>
          </h2>
          <p className="text-platinum-silver text-lg max-w-2xl mx-auto">
            Numbers that speak for our commitment to transforming traders into profitable investors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat, index) => {
            const Icon = stat?.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group cursor-default"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors">
                    {Icon && <Icon className="text-gold" size={32} />}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  <Counter
                    end={stat?.value ?? 0}
                    prefix={stat?.prefix}
                    suffix={stat?.suffix}
                  />
                </div>
                <div className="text-xl font-semibold text-gold mb-2">{stat?.label}</div>
                <p className="text-platinum-silver text-sm">{stat?.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
