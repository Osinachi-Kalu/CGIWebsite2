import { CheckCircle2, Crown, Users, TrendingUp, Calendar, Shield, MessageCircle, Award } from 'lucide-react'
import OneOnOneForm from '@/components/one-on-one-form'

export const metadata = {
  title: 'One-on-One Mentorship Program | Capital Growth Investment',
  description: 'Premium personalized trading mentorship with comprehensive support, top-tier systems, exclusive retreats, and direct access. Investment: $10,000.',
}

export default function OneOnOnePage() {
  const features = [
    {
      icon: Users,
      title: 'Personal Accountability',
      description: 'Dedicated support and accountability to keep you on track toward your trading goals.',
    },
    {
      icon: Shield,
      title: 'Economic & Business Secrets',
      description: 'Exclusive insights into market economics and business strategies not available elsewhere.',
    },
    {
      icon: TrendingUp,
      title: 'Top-Tier Systems',
      description: 'Access to our most advanced and profitable trading systems and strategies.',
    },
    {
      icon: Calendar,
      title: 'Annual Retreats',
      description: 'Exclusive annual retreats for networking, learning, and celebrating success.',
    },
    {
      icon: MessageCircle,
      title: 'Direct Line Access',
      description: 'Direct communication channel with expert traders for real-time guidance.',
    },
    {
      icon: Award,
      title: 'Account Management',
      description: 'Professional account management services included in the program.',
    },
    {
      icon: Users,
      title: 'Exclusive Community',
      description: 'Join an elite community of serious traders committed to excellence.',
    },
    {
      icon: TrendingUp,
      title: 'Portfolio Diversification',
      description: 'Learn advanced portfolio management and diversification strategies.',
    },
  ]

  const included = [
    'Weekly one-on-one video calls',
    'Unlimited email and message support',
    'Custom trading plan development',
    'Real-time trade analysis and feedback',
    'Access to all CGI trading systems',
    'Private Discord/Telegram community',
    'Annual in-person retreat',
    'Portfolio management guidance',
    'Economic analysis and insights',
    'Business development strategies',
    'Lifetime access to resources',
    'Account management services',
  ]

  const ideal = [
    'Traders who are serious about achieving consistent profitability',
    'Investors looking for professional guidance and support',
    'Those ready to invest in premium education and accountability',
    'Individuals seeking exclusive networking opportunities',
    'Traders with at least $10,000+ in trading capital',
    'Professionals looking to scale their trading business',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-charcoal-gray to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEFGMzciIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnpNNiA0OWMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6TTM2IDQ5YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 bg-gold border border-gold rounded-full">
              <Crown className="text-black" size={20} />
              <span className="text-black text-sm font-bold">PREMIUM PROGRAM</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              One-on-One <span className="gold-gradient">Elite Mentorship</span>
            </h1>
            <p className="text-xl text-platinum-silver leading-relaxed mb-8">
              Transform your trading with personalized guidance, exclusive insights, and comprehensive support from industry experts.
            </p>
            <div className="inline-block">
              <div className="text-5xl font-bold text-gold mb-2">$10,000</div>
              <div className="text-platinum-silver">Comprehensive premium package</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              What's <span className="text-gold">Included</span>
            </h2>
            <p className="text-platinum-silver text-lg max-w-2xl mx-auto">
              A comprehensive program designed for serious traders committed to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features?.map((feature, index) => {
              const Icon = feature?.icon
              return (
                <div key={index} className="card text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gold/10 rounded-full">
                      {Icon && <Icon className="text-gold" size={28} />}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature?.title}</h3>
                  <p className="text-platinum-silver text-sm">{feature?.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="section bg-charcoal-gray/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Everything You <span className="text-gold">Get</span>
              </h2>
              <p className="text-platinum-silver mb-8">
                The One-on-One program is our most comprehensive offering, designed for traders who demand the best.
              </p>
              <div className="space-y-3">
                {included?.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-platinum-silver">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4">Is This Program Right for You?</h3>
              <p className="text-platinum-silver mb-6">
                This exclusive program is ideal for:
              </p>
              <ul className="space-y-3">
                {ideal?.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3 text-platinum-silver">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Success <span className="text-gold">Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <p className="text-platinum-silver mb-4 italic">
                "The one-on-one mentorship completely transformed my approach to trading. The personalized attention and direct access to experts is invaluable. Worth every penny."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  MC
                </div>
                <div>
                  <div className="font-bold">Michael Chen</div>
                  <div className="text-sm text-platinum-silver">Program Graduate</div>
                </div>
              </div>
            </div>

            <div className="card">
              <p className="text-platinum-silver mb-4 italic">
                "The annual retreats and exclusive community alone are worth the investment. Combined with the trading education and accountability, this program is unmatched."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  JW
                </div>
                <div>
                  <div className="font-bold">James Wilson</div>
                  <div className="text-sm text-platinum-silver">Elite Member</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section bg-charcoal-gray/10">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                Apply for <span className="text-gold">Elite Mentorship</span>
              </h2>
              <p className="text-platinum-silver">
                Limited spots available. Applications are reviewed individually to ensure program fit.
              </p>
            </div>
            <OneOnOneForm />
          </div>
        </div>
      </section>
    </>
  )
}
