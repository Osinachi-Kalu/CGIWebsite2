'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2, UserCheck } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function OneOnOneForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tradingExperience: '',
    currentCapital: '',
    goals: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData?.name || !formData?.email) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/one-on-one', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        toast.success('Application submitted successfully! We\'ll review and contact you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          tradingExperience: '',
          currentCapital: '',
          goals: '',
          message: '',
        })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        toast.error(data?.message || 'Failed to submit. Please try again.')
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
          <UserCheck className="text-gold" size={32} />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Apply for One-on-One Program</h3>
          <p className="text-platinum-silver text-sm">Investment: $10,000</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="tradingExperience" className="block mb-2 text-sm font-medium">
              Trading Experience
            </label>
            <select
              id="tradingExperience"
              name="tradingExperience"
              value={formData?.tradingExperience}
              onChange={handleChange}
              className="w-full"
            >
              <option value="">Select your experience</option>
              <option value="beginner">Beginner (0-1 year)</option>
              <option value="intermediate">Intermediate (1-3 years)</option>
              <option value="advanced">Advanced (3+ years)</option>
            </select>
          </div>

          <div>
            <label htmlFor="currentCapital" className="block mb-2 text-sm font-medium">
              Current Trading Capital
            </label>
            <select
              id="currentCapital"
              name="currentCapital"
              value={formData?.currentCapital}
              onChange={handleChange}
              className="w-full"
            >
              <option value="">Select capital range</option>
              <option value="under_10k">Under $10,000</option>
              <option value="10k_50k">$10,000 - $50,000</option>
              <option value="50k_100k">$50,000 - $100,000</option>
              <option value="over_100k">Over $100,000</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="goals" className="block mb-2 text-sm font-medium">
            Trading Goals
          </label>
          <textarea
            id="goals"
            name="goals"
            value={formData?.goals}
            onChange={handleChange}
            rows={3}
            className="w-full"
            placeholder="What are your trading and financial goals?"
          ></textarea>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Why are you interested in the One-on-One program?
          </label>
          <textarea
            id="message"
            name="message"
            value={formData?.message}
            onChange={handleChange}
            rows={4}
            className="w-full"
            placeholder="Tell us why you're interested and any specific questions..."
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
              <span>Submitting...</span>
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 size={20} />
              <span>Application Submitted!</span>
            </>
          ) : (
            <span>Submit Application</span>
          )}
        </button>
      </form>
    </div>
  )
}
