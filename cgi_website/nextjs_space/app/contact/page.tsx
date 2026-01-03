import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import ContactForm from '@/components/contact-form'

export const metadata = {
  title: 'Contact Us | Capital Growth Investment',
  description: 'Get in touch with Capital Growth Investment. We\'re here to answer your questions about our trading programs and fund management services.',
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@capitalgrowth.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM - 6PM EST',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Global Trading Network',
      description: 'Serving clients worldwide',
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'We typically respond quickly',
    },
  ]

  const faqs = [
    {
      question: 'Which program is right for me?',
      answer: 'The Bootcamp ($97) is great for beginners and those wanting to learn our model. One-on-One ($10,000) is for serious traders seeking personalized mentorship. Fund Management ($100K min) is for investors wanting professional account management.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Payment plans are available for the One-on-One program. Please contact us to discuss options. The Bootcamp requires full payment upfront.',
    },
    {
      question: 'What markets do you trade?',
      answer: 'We specialize in XAUUSD (Gold) and EURUSD forex pairs, though our expertise extends across all asset classes.',
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'We offer a satisfaction guarantee on our educational programs. Fund management terms are discussed during consultation.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-charcoal-gray to-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <span className="text-gold text-sm font-semibold">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Start a <span className="gold-gradient">Conversation</span>
            </h1>
            <p className="text-xl text-platinum-silver leading-relaxed">
              Have questions about our programs or services? We're here to help you find the perfect solution for your trading journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo?.map((info, index) => {
              const Icon = info?.icon
              return (
                <div key={index} className="card text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gold/10 rounded-full">
                      {Icon && <Icon className="text-gold" size={28} />}
                    </div>
                  </div>
                  <h3 className="font-bold mb-1">{info?.title}</h3>
                  <p className="text-gold mb-2">{info?.value}</p>
                  <p className="text-platinum-silver text-sm">{info?.description}</p>
                </div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* FAQs */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Frequently Asked <span className="text-gold">Questions</span>
                </h2>
                <p className="text-platinum-silver">
                  Quick answers to common questions. Can't find what you're looking for? Send us a message!
                </p>
              </div>

              <div className="space-y-4">
                {faqs?.map((faq, index) => (
                  <div key={index} className="card">
                    <h3 className="font-bold mb-2 text-gold">{faq?.question}</h3>
                    <p className="text-platinum-silver text-sm">{faq?.answer}</p>
                  </div>
                ))}
              </div>

              <div className="card mt-6 bg-gold/5 border border-gold/30">
                <div className="flex items-start space-x-3">
                  <MessageCircle className="text-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Need Immediate Assistance?</h3>
                    <p className="text-platinum-silver text-sm mb-3">
                      For urgent inquiries, please call us directly during business hours or send us an email with "URGENT" in the subject line.
                    </p>
                    <a href="tel:+15551234567" className="text-gold hover:underline text-sm font-medium">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-charcoal-gray/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to <span className="text-gold">Get Started?</span>
            </h2>
            <p className="text-platinum-silver mb-8">
              Don't wait to transform your trading journey. Explore our programs and find the perfect fit for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/bootcamp" className="btn-primary">
                View Programs
              </a>
              <a href="/about" className="btn-secondary">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
