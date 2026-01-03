import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | Capital Growth Investment',
  description: 'Learn how Capital Growth Investment collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
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
              Privacy <span className="gold-gradient">Policy</span>
            </h1>
            <p className="text-xl text-platinum-silver leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-platinum-silver mt-4">
              Last updated: January 3, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <Shield className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                    <p className="text-platinum-silver leading-relaxed">
                      Capital Growth Investment ("CGI", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Information We Collect */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <Database className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                    <div className="space-y-4 text-platinum-silver leading-relaxed">
                      <div>
                        <h3 className="text-white font-semibold mb-2">Personal Information</h3>
                        <p>We may collect personal information that you provide directly to us, including:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                          <li>Name and contact information (email, phone number)</li>
                          <li>Trading experience and financial information</li>
                          <li>Communication preferences</li>
                          <li>Payment and billing information</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Automatically Collected Information</h3>
                        <p>When you visit our website, we may automatically collect:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                          <li>IP address and device information</li>
                          <li>Browser type and version</li>
                          <li>Pages visited and time spent on our site</li>
                          <li>Referring website addresses</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <Eye className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                    <div className="text-platinum-silver leading-relaxed">
                      <p className="mb-4">We use the information we collect for various purposes, including:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Providing and improving our services</li>
                        <li>Processing enrollments and applications</li>
                        <li>Communicating with you about our programs</li>
                        <li>Sending newsletters and marketing communications (with your consent)</li>
                        <li>Analyzing website usage and improving user experience</li>
                        <li>Complying with legal obligations</li>
                        <li>Protecting against fraud and unauthorized access</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <Lock className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                    <p className="text-platinum-silver leading-relaxed">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <UserCheck className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                    <div className="text-platinum-silver leading-relaxed">
                      <p className="mb-4">You have the right to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate or incomplete data</li>
                        <li>Request deletion of your personal information</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Object to processing of your personal data</li>
                        <li>Request data portability</li>
                      </ul>
                      <p className="mt-4">
                        To exercise these rights, please contact us at info@capitalgrowth.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <FileText className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                    <p className="text-platinum-silver leading-relaxed">
                      We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                    </p>
                  </div>
                </div>
              </div>

              {/* Third-Party Services */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <Database className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                    <p className="text-platinum-silver leading-relaxed">
                      We may use third-party service providers to help us operate our business and website. These providers have access to your personal information only to perform specific tasks on our behalf and are obligated to protect your information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Changes to Policy */}
              <div className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <FileText className="text-gold flex-shrink-0" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                    <p className="text-platinum-silver leading-relaxed">
                      We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="card bg-gold/5 border border-gold/30">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-platinum-silver leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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
