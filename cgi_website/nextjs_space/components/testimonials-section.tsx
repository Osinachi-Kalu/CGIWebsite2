'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bootcamp Graduate',
      image: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      content: 'The 5-day bootcamp completely transformed my trading approach. The focus on backtesting one model extensively gave me the confidence and data I needed to trade profitably.',
    },
    {
      name: 'Michael Chen',
      role: 'One-on-One Client',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      content: 'The one-on-one mentorship is worth every penny. Having direct access to the experts and the exclusive community has accelerated my trading journey beyond my expectations.',
    },
    {
      name: 'David Martinez',
      role: 'Fund Management Client',
      image: 'https://i.pravatar.cc/150?img=8',
      rating: 5,
      content: 'As a busy professional, having CGI manage my trading account has been a game-changer. Consistent returns and transparent reporting give me peace of mind.',
    },
    {
      name: 'Emily Roberts',
      role: 'Bootcamp Graduate',
      image: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      content: 'I went from a complete beginner to a confident trader in just 5 days. The structured approach and practical insights from CGI made all the difference.',
    },
    {
      name: 'James Wilson',
      role: 'One-on-One Client',
      image: 'https://i.pravatar.cc/150?img=13',
      rating: 5,
      content: 'The annual retreats and exclusive community are incredible bonuses. The networking opportunities alone have been invaluable for my trading and business growth.',
    },
    {
      name: 'Lisa Anderson',
      role: 'Fund Management Client',
      image: 'https://i.pravatar.cc/150?img=10',
      rating: 5,
      content: 'Professional, transparent, and consistently profitable. CGI has exceeded my expectations in managing my investment portfolio.',
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
            What Our Clients <span className="text-gold">Say</span>
          </h2>
          <p className="text-platinum-silver text-lg max-w-2xl mx-auto">
            Real stories from traders and investors who transformed their financial futures with CGI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card relative"
            >
              <Quote className="absolute top-4 right-4 text-gold/20" size={48} />
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-charcoal-gray flex-shrink-0">
                  <Image
                    src={testimonial?.image ?? 'https://i.pravatar.cc/150'}
                    alt={testimonial?.name ?? 'Client'}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial?.name}</h4>
                  <p className="text-gold text-sm">{testimonial?.role}</p>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {Array.from({ length: testimonial?.rating ?? 5 })?.map((_, i) => (
                  <Star key={i} className="text-gold fill-gold" size={16} />
                ))}
              </div>

              <p className="text-platinum-silver text-sm leading-relaxed">
                "{testimonial?.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
