'use client'

import { useState, useEffect } from 'react'
import { X, ClipboardList } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-hot-toast'

export default function SurveyModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasSeenSurvey, setHasSeenSurvey] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    tradingExperience: '',
    primaryGoal: '',
    capitalRange: '',
    interests: [] as string[],
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if user has already seen the survey
    const surveySeen = localStorage.getItem('cgi_survey_seen')
    if (!surveySeen) {
      // Show survey after 10 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasSeenSurvey(false)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('cgi_survey_seen', 'true')
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => {
      const interests = prev?.interests || []
      const newInterests = interests.includes(interest)
        ? interests.filter((i) => i !== interest)
        : [...interests, interest]
      return { ...prev, interests: newInterests }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Thank you for your feedback!')
        handleClose()
      } else {
        toast.error('Failed to submit survey. Please try again.')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-charcoal-gray w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gold p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ClipboardList size={28} className="text-black" />
                <h3 className="text-2xl font-bold text-black">Quick Survey</h3>
              </div>
              <button
                onClick={handleClose}
                className="text-black hover:text-charcoal-gray transition-colors"
                aria-label="Close survey"
              >
                <X size={28} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <p className="text-platinum-silver mb-6">
                Help us understand your trading journey better. This will only take a minute!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium">Email (Optional)</label>
                  <input
                    type="email"
                    value={formData?.email}
                    onChange={(e) => setFormData({ ...formData, email: e?.target?.value ?? '' })}
                    className="w-full px-4 py-2 bg-black/50 border border-gold/30 rounded text-white"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Trading Experience */}
                <div>
                  <label className="block mb-2 text-sm font-medium">Trading Experience</label>
                  <select
                    value={formData?.tradingExperience}
                    onChange={(e) => setFormData({ ...formData, tradingExperience: e?.target?.value ?? '' })}
                    className="w-full px-4 py-2 bg-black/50 border border-gold/30 rounded text-white"
                    required
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner (0-1 year)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="advanced">Advanced (3+ years)</option>
                  </select>
                </div>

                {/* Primary Goal */}
                <div>
                  <label className="block mb-2 text-sm font-medium">Primary Goal</label>
                  <select
                    value={formData?.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e?.target?.value ?? '' })}
                    className="w-full px-4 py-2 bg-black/50 border border-gold/30 rounded text-white"
                    required
                  >
                    <option value="">Select your primary goal</option>
                    <option value="education">Trading Education</option>
                    <option value="account_management">Account Management</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                {/* Capital Range */}
                <div>
                  <label className="block mb-2 text-sm font-medium">Trading Capital Range</label>
                  <select
                    value={formData?.capitalRange}
                    onChange={(e) => setFormData({ ...formData, capitalRange: e?.target?.value ?? '' })}
                    className="w-full px-4 py-2 bg-black/50 border border-gold/30 rounded text-white"
                    required
                  >
                    <option value="">Select your capital range</option>
                    <option value="under_10k">Under $10,000</option>
                    <option value="10k_50k">$10,000 - $50,000</option>
                    <option value="50k_100k">$50,000 - $100,000</option>
                    <option value="over_100k">Over $100,000</option>
                  </select>
                </div>

                {/* Interests */}
                <div>
                  <label className="block mb-2 text-sm font-medium">Interests (Select all that apply)</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['XAUUSD', 'EURUSD', 'Risk Management', 'Technical Analysis', 'Psychology', 'Fund Management']?.map((interest) => (
                      <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData?.interests?.includes(interest) ?? false}
                          onChange={() => handleInterestToggle(interest)}
                          className="w-4 h-4 text-gold bg-black/50 border-gold/30 rounded focus:ring-gold"
                        />
                        <span className="text-sm text-platinum-silver">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 btn-primary"
                  >
                    {isLoading ? 'Submitting...' : 'Submit Survey'}
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 btn-secondary"
                  >
                    Skip for Now
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
