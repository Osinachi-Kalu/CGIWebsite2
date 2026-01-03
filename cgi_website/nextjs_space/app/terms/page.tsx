import { FileText, AlertTriangle, Scale, Shield, DollarSign, UserX } from 'lucide-react'

export const metadata = {
  title: 'Terms & Conditions | Capital Growth Investment',
  description: 'Terms and conditions for using Capital Growth Investment services, including educational programs and fund management.',
}

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-charcoal-gray to-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <span className="text-gold text-sm font-semibold">Legal</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms & <span className="gold-gradient">Conditions</span>
            </h1>
            <p className="text-xl text-platinum-silver leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-platinum-silver mt-4">
              Last updated: January 3, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Agreement */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <FileText className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                    <p className="text-platinum-silver leading-relaxed">
                      By accessing or using Capital Growth Investment's ("CGI") website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <Scale className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Services Provided</h2>
                    <div className="space-y-4 text-platinum-silver leading-relaxed">
                      <p>CGI offers the following services:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">5-Day Bootcamp:</strong> Educational program focused on forex trading strategies and backtesting</li>
                        <li><strong className="text-white">One-on-One Mentorship:</strong> Personalized trading education and support</li>
                        <li><strong className="text-white">Fund Management:</strong> Professional account management services (minimum $100,000)</li>
                      </ul>
                      <p className="mt-4">
                        All services are subject to availability and may be modified or discontinued at our discretion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Disclaimer */}
              <div className="card bg-red-900/10 border border-red-500/30">
                <div className="flex items-start space-x-3 mb-4">
                  <AlertTriangle className="text-red-500 flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-red-400">Important Risk Disclaimer</h2>
                    <div className="space-y-4 text-platinum-silver leading-relaxed">
                      <p className="font-semibold text-white">
                        TRADING INVOLVES SUBSTANTIAL RISK OF LOSS AND IS NOT SUITABLE FOR ALL INVESTORS.
                      </p>
                      <p>
                        Forex and CFD trading carries a high level of risk to your capital. You should only trade with money you can afford to lose. Past performance is not indicative of future results. The high degree of leverage can work against you as well as for you.
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>You may lose all of your invested capital</li>
                        <li>CGI does not guarantee profits or success</li>
                        <li>Educational programs do not guarantee trading profitability</li>
                        <li>Fund management services carry investment risks</li>
                        <li>You should seek independent financial advice before investing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <DollarSign className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
                    <div className="space-y-4 text-platinum-silver leading-relaxed">
                      <div>
                        <h3 className="text-white font-semibold mb-2">Educational Programs</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Bootcamp: $97 one-time payment required before access</li>
                          <li>One-on-One: $10,000 (payment plans available, contact for details)</li>
                          <li>All prices are in USD</li>
                          <li>Payments are non-refundable except as specified in our refund policy</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Fund Management</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Minimum investment: $100,000</li>
                          <li>Fee structure discussed during consultation</li>
                          <li>Management agreement required</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refund Policy */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <Shield className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
                    <div className="space-y-4 text-platinum-silver leading-relaxed">
                      <p>
                        We offer a satisfaction guarantee on our educational programs:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Bootcamp:</strong> 7-day money-back guarantee if you're not satisfied</li>
                        <li><strong className="text-white">One-on-One:</strong> Satisfaction guarantee terms discussed during enrollment</li>
                        <li><strong className="text-white">Fund Management:</strong> Terms specified in management agreement</li>
                      </ul>
                      <p className="mt-4">
                        To request a refund, contact us at info@capitalgrowth.com within the applicable timeframe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <FileText className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                    <p className="text-platinum-silver leading-relaxed">
                      All content, including but not limited to text, graphics, logos, images, videos, and software, is the property of CGI or its licensors and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                    </p>
                  </div>
                </div>
              </div>

              {/* User Conduct */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <UserX className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">User Conduct</h2>
                    <div className="text-platinum-silver leading-relaxed">
                      <p className="mb-4">You agree not to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Share your account access with others</li>
                        <li>Reproduce or distribute course materials</li>
                        <li>Use our services for any illegal purpose</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>Impersonate CGI or our staff</li>
                        <li>Harass or abuse other members or staff</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <Shield className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                    <p className="text-platinum-silver leading-relaxed">
                      To the maximum extent permitted by law, CGI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or trading losses, arising from your use of our services. Our total liability shall not exceed the amount you paid for the service in question.
                    </p>
                  </div>
                </div>
              </div>

              {/* Governing Law */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <Scale className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                    <p className="text-platinum-silver leading-relaxed">
                      These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or our services shall be resolved through binding arbitration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <FileText className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                    <p className="text-platinum-silver leading-relaxed">
                      We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified Terms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="card bg-gold/5 border border-gold/30">
                <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
                <p className="text-platinum-silver leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-platinum-silver">
                  <p>Email: info@capitalgrowth.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
