'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import { siteConfig } from '@/data/site-config'

const REDIRECT_URL = '/thank-you/'
const TURNSTILE_SITEKEY = '0x4AAAAAADMnsakZUoyx534R'

const horseTypeOptions = [
  'Sport Horse / Competition Horse',
  'Thoroughbred / Racehorse',
  'Breeding Stallion',
  'Broodmare',
  'Leisure / Pleasure Horse',
  'Pony',
  'Draught Horse',
  'Other',
]

const coverOptions = [
  'Mortality Insurance',
  'Major Medical / Vet Fees',
  'Transit Insurance',
  'Liability Insurance',
  'Loss of Use',
  'Full Package (All Cover)',
  'Not Sure – Need Advice',
]

const horseValueOptions = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $30,000',
  '$30,000 – $75,000',
  '$75,000 – $200,000',
  'Over $200,000',
]

interface QuoteFormProps {
  compact?: boolean
}

export default function QuoteForm({ compact = false }: QuoteFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    horseType: '',
    coverNeeded: '',
    horseValue: '',
    name: '',
    email: '',
    phone: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    const fd = new FormData(e.currentTarget)
    const cfToken = fd.get('cf-turnstile-response')
    if (!cfToken) {
      setError('Please complete the security check and try again.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/submit-form/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          horse_type: form.horseType,
          cover_needed: form.coverNeeded,
          horse_value: form.horseValue,
          _subject: 'New Equine Insurance Quote Request',
          cfTurnstileToken: cfToken,
        }),
        redirect: 'manual',
      })
      if (res.ok || res.status === 0 || res.type === 'opaqueredirect') {
        router.push(REDIRECT_URL)
        return
      }
      throw new Error('Submission failed')
    } catch {
      setError('Something went wrong. Please call us on ' + siteConfig.phone + ' or try again.')
      setLoading(false)
    }
  }

  return (
    <div className={`bg-brand-dark rounded-2xl border border-brand-light ${compact ? 'p-6' : 'p-8'}`}>
      {!compact && (
        <div className="mb-6">
          <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Free Quote
          </span>
          <h2 className="text-2xl font-extrabold text-white mb-2">Get Your Horse Insurance Quote</h2>
          <p className="text-green-200 text-sm">Connect with a licensed NZ equine insurance broker — no obligation.</p>
        </div>
      )}
      {compact && (
        <h3 className="text-lg font-bold text-white mb-4">Get a Free Quote</h3>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
        <div>
          <label className="block text-sm font-medium text-green-200 mb-1">Horse Type</label>
          <select
            name="horseType"
            value={form.horseType}
            onChange={handleChange}
            required
            className="w-full bg-brand border border-brand-light text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
          >
            <option value="">Select horse type...</option>
            {horseTypeOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-green-200 mb-1">Cover Needed</label>
          <select
            name="coverNeeded"
            value={form.coverNeeded}
            onChange={handleChange}
            required
            className="w-full bg-brand border border-brand-light text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
          >
            <option value="">Select cover type...</option>
            {coverOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-green-200 mb-1">Horse Value</label>
          <select
            name="horseValue"
            value={form.horseValue}
            onChange={handleChange}
            required
            className="w-full bg-brand border border-brand-light text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
          >
            <option value="">Select approximate value...</option>
            {horseValueOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-green-200 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full bg-brand border border-brand-light text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 placeholder-green-700"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-green-200 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full bg-brand border border-brand-light text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 placeholder-green-700"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-green-200 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="021 123 4567"
            className="w-full bg-brand border border-brand-light text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 placeholder-green-700"
          />
        </div>

        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer strategy="afterInteractive" />
        <div className="flex justify-center">
          <div className="cf-turnstile" data-sitekey={TURNSTILE_SITEKEY} data-size="invisible" />
        </div>

        {error && (
          <p className="text-red-400 text-sm bg-red-900/20 border border-red-500/30 rounded-lg px-3 py-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-500 disabled:bg-green-900 text-white font-bold py-3 rounded-lg transition-colors text-sm"
        >
          {loading ? 'Submitting...' : 'Get My Free Quote →'}
        </button>
      </form>

      {/* Trust pills */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {['Licensed Brokers', 'No Obligation', 'NZ Based', '24hr Response'].map((pill) => (
          <span key={pill} className="text-xs text-green-200 bg-brand px-2.5 py-1 rounded-full border border-brand-light">
            ✓ {pill}
          </span>
        ))}
      </div>
    </div>
  )
}
