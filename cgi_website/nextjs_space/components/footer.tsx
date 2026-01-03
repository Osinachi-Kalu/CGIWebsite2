'use client'

import Link from 'next/link'
import Image from 'next/image'
import NewsletterForm from './newsletter-form'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-charcoal-gray">
      {/* Newsletter Section */}
      <div className="bg-charcoal-gray/30 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Ahead of the <span className="text-gold">Market</span>
            </h3>
            <p className="text-platinum-silver mb-6">
              Get exclusive trading insights, market analysis, and updates delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="CGI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">CGI</span>
            </div>
            <p className="text-platinum-silver text-sm mb-4">
              Capital Growth Investment - Your partner in forex trading excellence and wealth building.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-platinum-silver hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-platinum-silver hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-platinum-silver hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-platinum-silver hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/bootcamp" className="text-platinum-silver hover:text-gold transition-colors text-sm">
                  5-Day Bootcamp
                </Link>
              </li>
              <li>
                <Link href="/one-on-one" className="text-platinum-silver hover:text-gold transition-colors text-sm">
                  One-on-One Mentorship
                </Link>
              </li>
              <li>
                <Link href="/fund-management" className="text-platinum-silver hover:text-gold transition-colors text-sm">
                  Fund Management
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-platinum-silver hover:text-gold transition-colors text-sm">
                  Trading Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-platinum-silver hover:text-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-platinum-silver hover:text-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-platinum-silver text-sm">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>info@capitalgrowth.com</span>
              </li>
              <li className="flex items-start space-x-2 text-platinum-silver text-sm">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-platinum-silver text-sm">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Global Trading Network</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-gray">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-platinum-silver text-sm">
              © {currentYear} Capital Growth Investment. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-platinum-silver hover:text-gold transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-platinum-silver hover:text-gold transition-colors text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
