import { Shield, TrendingUp, BarChart3, DollarSign, FileText, Users, CheckCircle2, AlertCircle } from 'lucide-react'
import FundManagementForm from '@/components/fund-management-form'

export const metadata = {
  title: 'Professional Fund Management | Capital Growth Investment',
  description: 'Professional forex trading account management services for qualified investors. Minimum investment: $100,000. Expert XAUUSD and EURUSD trading.',
}

export default function FundManagementPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Expert Management',
      description: 'Professional traders with 10+ years experience managing your capital.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Strict risk protocols to protect and grow your investment.',
    },
    {
      icon: BarChart3,
      title: 'Transparent Reporting',
      description: 'Regular performance reports and complete transparency.',
    },
    {
      icon: DollarSign,
      title: 'Competitive Fees',
      description: 'Performance-based fee structure aligned with your success.',
    },
  ]

  const process = [
    {
      step: 1,
      title: 'Submit Inquiry',
      description: 'Fill out the inquiry form below with your investment details.',
    },
    {
      step: 2,
      title: 'Initial Consultation',
      description: 'Schedule a call to discuss your investment goals and our services.',
    },
    {
      step: 3,
      title: 'Due Diligence',
      description: 'We review your application and ensure program fit.',
    },
    {
      step: 4,
      title: 'Agreement & Setup',
      description: 'Sign management agreement and complete account setup.',
    },
    {
      step: 5,
      title: 'Active Management',
      description: 'We actively manage your account with regular reporting.',
    },
  ]

  const features = [
    'Professional XAUUSD and EURUSD trading',
    'Strict risk management (maximum 2% risk per trade)',
    'Monthly performance reports',
    'Quarterly strategy reviews',
    'Direct account manager access',
    'Transparent fee structure',
    'Flexible withdrawal options',
    'Regulated broker partnerships',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-charcoal-gray to-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <span className="text-gold text-sm font-semibold">Professional Fund Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let Experts Manage Your <span className="gold-gradient">Trading Capital</span>
            </h1>
            <p className="text-xl text-platinum-silver leading-relaxed mb-8">
              Professional account management service for qualified investors seeking consistent returns through expert forex trading.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-1">$100K</div>
                <div className="text-sm text-platinum-silver">Minimum Investment</div>
              </div>
              <div className="h-12 w-px bg-gold/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-platinum-silver">Years Experience</div>
              </div>
              <div className="h-12 w-px bg-gold/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-platinum-silver">Market Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-gold">CGI Fund Management</span>
            </h2>
            <p className="text-platinum-silver text-lg max-w-2xl mx-auto">
              Professional expertise, proven strategies, and transparent operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits?.map((benefit, index) => {
              const Icon = benefit?.icon
              return (
                <div key={index} className="card text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gold/10 rounded-full">
                      {Icon && <Icon className="text-gold" size={32} />}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit?.title}</h3>
                  <p className="text-platinum-silver text-sm">{benefit?.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-charcoal-gray/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              How It <span className="text-gold">Works</span>
            </h2>
            <p className="text-platinum-silver text-lg max-w-2xl mx-auto">
              A simple, transparent process from inquiry to active management.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process?.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black font-bold text-lg">
                    {item?.step}
                  </div>
                </div>
                <div className="card flex-1">
                  <h3 className="text-xl font-bold mb-2">{item?.title}</h3>
                  <p className="text-platinum-silver">{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Details */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Service <span className="text-gold">Features</span>
              </h2>
              <p className="text-platinum-silver mb-8">
                Our fund management service provides comprehensive professional trading with complete transparency and regular communication.
              </p>
              <div className="space-y-3">
                {features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-platinum-silver">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <FileText className="text-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Fee Structure</h3>
                    <p className="text-platinum-silver text-sm">
                      Our fee structure is designed to align our success with yours. We charge a management fee plus performance-based fees. Detailed terms are provided during consultation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-gold/5 border border-gold/30">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="text-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Important Disclaimer</h3>
                    <p className="text-platinum-silver text-sm">
                      Trading involves risk. Past performance does not guarantee future results. All investments carry the risk of loss. We recommend consulting with a financial advisor before investing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start space-x-3">
                  <Users className="text-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Qualification Requirements</h3>
                    <ul className="text-platinum-silver text-sm space-y-2 mt-2">
                      <li>• Minimum investment: $100,000</li>
                      <li>• Understanding of forex market risks</li>
                      <li>• Long-term investment horizon (6+ months)</li>
                      <li>• Completed due diligence process</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section bg-charcoal-gray/10">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                Start Your <span className="text-gold">Consultation</span>
              </h2>
              <p className="text-platinum-silver">
                Submit your inquiry and our team will contact you to schedule a consultation.
              </p>
            </div>
            <FundManagementForm />
          </div>
        </div>
      </section>
    </>
  )
}
