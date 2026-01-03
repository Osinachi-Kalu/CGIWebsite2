'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2, Briefcase } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function FundManagementForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    capitalAmount: '',
    investmentGoals: '',
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
      const response = await fetch('/api/fund-management', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        toast.success('Inquiry submitted successfully! Our team will contact you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          capitalAmount: '',
          investmentGoals: '',
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
          <Briefcase className="text-gold" size={32} />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Fund Management Inquiry</h3>
          <p className="text-platinum-silver text-sm">Minimum: $100,000</p>
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
          <label htmlFor="capitalAmount" className="block mb-2 text-sm font-medium">
            Investment Capital Amount
          </label>
          <select
            id="capitalAmount"
            name="capitalAmount"
            value={formData?.capitalAmount}
            onChange={handleChange}
            className="w-full"
          >
            <option value="">Select capital range</option>
            <option value="100k_250k">$100,000 - $250,000</option>
            <option value="250k_500k">$250,000 - $500,000</option>
            <option value="500k_1m">$500,000 - $1,000,000</option>
            <option value="over_1m">Over $1,000,000</option>
          </select>
        </div>

        <div>
          <label htmlFor="investmentGoals" className="block mb-2 text-sm font-medium">
            Investment Goals
          </label>
          <textarea
            id="investmentGoals"
            name="investmentGoals"
            value={formData?.investmentGoals}
            onChange={handleChange}
            rows={3}
            className="w-full"
            placeholder="What are your investment objectives and expectations?"
          ></textarea>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            value={formData?.message}
            onChange={handleChange}
            rows={4}
            className="w-full"
            placeholder="Any additional information or questions..."
          ></textarea>
        </div>

        <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
          <p className="text-sm text-platinum-silver">
            <strong className="text-white">Note:</strong> Fund management services require a minimum investment of $100,000. Our team will review your inquiry and schedule a consultation to discuss our services in detail.
          </p>
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
              <span>Inquiry Submitted!</span>
            </>
          ) : (
            <span>Submit Inquiry</span>
          )}
        </button>
      </form>
    </div>
  )
}
