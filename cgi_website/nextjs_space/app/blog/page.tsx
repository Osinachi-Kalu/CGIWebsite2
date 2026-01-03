import { Calendar, Clock, TrendingUp, Brain, Target, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Trading Insights & Education | CGI Blog',
  description: 'Expert forex trading insights, strategies, risk management tips, and market analysis from Capital Growth Investment.',
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Mastering XAUUSD: 5 Key Strategies for Gold Trading',
      slug: 'mastering-xauusd-gold-trading-strategies',
      excerpt: 'Discover the essential strategies that professional traders use to consistently profit from gold (XAUUSD) markets.',
      category: 'Strategy',
      icon: TrendingUp,
      readTime: '8 min read',
      date: 'December 15, 2025',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800',
    },
    {
      id: 2,
      title: 'The Psychology of Trading: Overcoming Emotional Decisions',
      slug: 'psychology-of-trading-emotional-decisions',
      excerpt: 'Learn how to master your trading psychology and make rational decisions even in volatile market conditions.',
      category: 'Psychology',
      icon: Brain,
      readTime: '6 min read',
      date: 'December 10, 2025',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800',
    },
    {
      id: 3,
      title: 'Risk Management: Protecting Your Trading Capital',
      slug: 'risk-management-protecting-capital',
      excerpt: 'Essential risk management principles that separate profitable traders from those who blow their accounts.',
      category: 'Risk Management',
      icon: Shield,
      readTime: '7 min read',
      date: 'December 5, 2025',
      image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=800',
    },
    {
      id: 4,
      title: 'EURUSD Analysis: Understanding the Major Currency Pair',
      slug: 'eurusd-analysis-major-currency-pair',
      excerpt: 'A comprehensive guide to trading EURUSD, including key factors that move this popular forex pair.',
      category: 'Market Analysis',
      icon: TrendingUp,
      readTime: '9 min read',
      date: 'November 28, 2025',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800',
    },
    {
      id: 5,
      title: 'Building a Winning Trading Plan: A Step-by-Step Guide',
      slug: 'building-winning-trading-plan',
      excerpt: 'How to create a comprehensive trading plan that keeps you disciplined and focused on your goals.',
      category: 'Strategy',
      icon: Target,
      readTime: '10 min read',
      date: 'November 20, 2025',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
    },
    {
      id: 6,
      title: 'The Importance of Backtesting Your Trading Strategy',
      slug: 'importance-of-backtesting-trading-strategy',
      excerpt: 'Learn why backtesting is crucial for trading success and how to do it effectively.',
      category: 'Education',
      icon: Target,
      readTime: '7 min read',
      date: 'November 15, 2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
    },
  ]

  const categories = ['All', 'Strategy', 'Psychology', 'Risk Management', 'Market Analysis', 'Education']

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-charcoal-gray to-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <span className="text-gold text-sm font-semibold">Trading Insights</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Learn From <span className="gold-gradient">Expert Traders</span>
            </h1>
            <p className="text-xl text-platinum-silver leading-relaxed">
              Insights, strategies, and analysis to elevate your trading game and achieve consistent profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Categories - Commented out for simplicity
      <section className="section pt-8">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories?.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gold/30 hover:bg-gold/10 transition-colors text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Blog Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts?.map((post) => {
              const Icon = post?.icon
              return (
                <Link
                  key={post?.id}
                  href={`/blog/${post?.slug}`}
                  className="card group cursor-pointer block"
                >
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-charcoal-gray">
                    <Image
                      src={post?.image ?? ''}
                      alt={post?.title ?? 'Blog post'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    {Icon && <Icon className="text-gold" size={16} />}
                    <span className="text-gold text-sm font-medium">{post?.category}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                    {post?.title}
                  </h3>

                  <p className="text-platinum-silver text-sm mb-4 line-clamp-2">
                    {post?.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-platinum-silver text-xs">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post?.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post?.readTime}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-charcoal-gray/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Never Miss an <span className="text-gold">Insight</span>
            </h2>
            <p className="text-platinum-silver mb-8">
              Subscribe to our newsletter for weekly trading insights, market analysis, and exclusive tips delivered to your inbox.
            </p>
            <div className="flex justify-center">
              <a href="/#newsletter" className="btn-primary">
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
