'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2, Mail } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData?.name || !formData?.email || !formData?.subject || !formData?.message) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        toast.success('Message sent successfully! We\'ll get back to you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        toast.error(data?.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e?.target?.name ?? '']: e?.target?.value ?? '',
    })
  }

  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-gold/10 rounded-full">
          <Mail className="text-gold" size={32} />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Send us a Message</h3>
          <p className="text-platinum-silver text-sm">We'll respond within 24 hours</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Full Name <span className="text-gold">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData?.name}
              onChange={handleChange}
              required
              className="w-full"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email <span className="text-gold">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData?.email}
              onChange={handleChange}
              required
              className="w-full"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData?.phone}
            onChange={handleChange}
            className="w-full"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium">
            Subject <span className="text-gold">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData?.subject}
            onChange={handleChange}
            required
            className="w-full"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="bootcamp">Bootcamp Information</option>
            <option value="one-on-one">One-on-One Program</option>
            <option value="fund-management">Fund Management</option>
            <option value="support">Technical Support</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Message <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData?.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full"
            placeholder="Tell us how we can help you..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading || isSuccess}
          className="w-full btn-primary flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Sending...</span>
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 size={20} />
              <span>Message Sent!</span>
            </>
          ) : (
            <>
              <Mail size={20} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}
