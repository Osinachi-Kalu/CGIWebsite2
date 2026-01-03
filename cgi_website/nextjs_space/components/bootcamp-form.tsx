'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2, GraduationCap } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function BootcampForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tradingExperience: '',
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
      const response = await fetch('/api/bootcamp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        toast.success('Enrollment submitted successfully! We\'ll contact you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          tradingExperience: '',
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
          <GraduationCap className="text-gold" size={32} />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Enroll in 5-Day Bootcamp</h3>
          <p className="text-platinum-silver text-sm">Investment: $97</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
            <option value="">Select your experience level</option>
            <option value="beginner">Beginner (0-1 year)</option>
            <option value="intermediate">Intermediate (1-3 years)</option>
            <option value="advanced">Advanced (3+ years)</option>
          </select>
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
            placeholder="Tell us about your trading goals and any questions you have..."
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
              <span>Enrollment Submitted!</span>
            </>
          ) : (
            <span>Submit Enrollment</span>
          )}
        </button>
      </form>
    </div>
  )
}
