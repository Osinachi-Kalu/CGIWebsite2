'use client'

import { useState } from 'react'
import { Mail, Loader2, CheckCircle2 } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        toast.success('Successfully subscribed to newsletter!')
        setEmail('')
        setName('')
        setTimeout(() => setIsSuccess(false), 3000)
      } else {
        toast.error(data?.message || 'Failed to subscribe. Please try again.')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e?.target?.value ?? '')}
            className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-white placeholder-platinum-silver/50 focus:outline-none focus:border-gold transition-colors"
            disabled={isLoading}
          />
        </div>
        <div className="flex-1">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e?.target?.value ?? '')}
            className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-white placeholder-platinum-silver/50 focus:outline-none focus:border-gold transition-colors"
            disabled={isLoading}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || isSuccess}
          className="btn-primary px-8 py-3 flex items-center justify-center space-x-2 whitespace-nowrap"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Subscribing...</span>
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 size={20} />
              <span>Subscribed!</span>
            </>
          ) : (
            <>
              <Mail size={20} />
              <span>Subscribe</span>
            </>
          )}
        </button>
      </div>
    </form>
  )
}
