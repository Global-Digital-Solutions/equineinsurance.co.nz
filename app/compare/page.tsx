import type { Metadata } from 'next'
import Link from 'next/link'
import { providers } from '@/data/providers'
import { coverageTypes } from '@/data/coverage-types'
import { siteConfig } from '@/data/site-config'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Compare Horse Insurance Providers NZ 2026 | EquineInsurance.co.nz',
  description: 'Compare NZ equine insurance providers — Pet-n-Sur, Petcover NZ, NZB Insurance, and Gallagher. See real stats, claims speeds, cover limits, and what each provider does best.',
  alternates: { canonical: `${siteConfig.url}/compare/` },
}

const accentClasses: Record<string, { border: string; badge: string; stat: string; tag: string }> = {
  blue: {
    border: 'border-blue-400',
    badge: 'bg-blue-600',
    stat: 'text-blue-700',
    tag: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  emerald: {
    border: 'border-emerald-400',
    badge: 'bg-emerald-600',
    stat: 'text-emerald-700',
    tag: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  purple: {
    border: 'border-purple-400',
    badge: 'bg-purple-700',
    stat: 'text-purple-700',
    tag: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  orange: {
    border: 'border-orange-400',
    badge: 'bg-orange-600',
    stat: 'text-orange-700',
    tag: 'bg-orange-50 text-orange-700 border-orange-200',
  },
}

const pricingDots: Record<string, number> = {
  'Competitive': 1,
  'Mid-range': 2,
  'Premium / high-value': 3,
}

const pricingColor: Record<string, string> = {
  'Competitive': 'text-green-700',
  'Mid-range': 'text-amber-700',
  'Premium / high-value': 'text-purple-700',
}

// Coverage comparison matrix
const coverMatrix = [
  { feature: 'Horse mortality', petnsur: true, petcover: true, nzb: true, gallagher: true },
  { feature: 'Major vet / surgical fees', petnsur: true, petcover: true, nzb: false, gallagher: false },
  { feature: 'Colic cover', petnsur: true, petcover: true, nzb: false, gallagher: false },
  { feature: 'Public liability', petnsur: true, petcover: true, nzb: false, gallagher: true },
  { feature: 'Personal accident (rider)', petnsur: true, petcover: true, nzb: false, gallagher: false },
  { feature: 'Loss of use', petnsur: false, petcover: true, nzb: true, gallagher: true },
  { feature: 'Transit / transport cover', petnsur: true, petcover: false, nzb: true, gallagher: true },
  { feature: 'Theft & straying', petnsur: true, petcover: true, nzb: false, gallagher: false },
  { feature: 'Bloodstock / mortality > $50k', petnsur: false, petcover: false, nzb: true, gallagher: true },
  { feature: 'Stallion infertility', petnsur: false, petcover: false, nzb: true, gallagher: true },
  { feature: 'Prospective foal cover', petnsur: false, petcover: false, nzb: true, gallagher: true },
  { feature: 'Worldwide cover', petnsur: false, petcover: false, nzb: true, gallagher: true },
]

function Tick({ yes }: { yes: boolean }) {
  if (yes) return <span className="text-green-600 text-lg font-bold">✓</span>
  return <span className="text-gray-300 text-lg">—</span>
}

export default function ComparePage() {
  return (
    <>
      {/* ── HERO ── */}
      <div
        className="relative min-h-[70vh] flex flex-col justify-center"
        style={{
          backgroundImage: 'url(/images/equine-hero-3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
        }}
      >
        {/* Dual gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <nav className="text-sm text-green-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Compare Providers</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
            {/* Left: copy */}
            <div>
              <span className="inline-block bg-green-500/30 border border-green-400/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                4 Specialist NZ Providers Compared
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Compare Horse Insurance<br />Providers With One Click
              </h1>
              <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-xl">
                Not all equine insurers are equal. We've researched the real differences — claims speed, cover limits, what each provider actually does best — so you don't have to. Then our specialist brokers access them all to find your best fit.
              </p>

              {/* Key insight cards */}
              <div className="grid grid-cols-2 gap-3 max-w-xl">
                {[
                  { icon: '⚡', stat: '99.3%', label: 'Pet-n-Sur claims in 14 days' },
                  { icon: '🏦', stat: 'Lloyd\'s', label: 'NZB & Gallagher market access' },
                  { icon: '💊', stat: '$10k', label: 'Petcover vet fee limit' },
                  { icon: '🏇', stat: '40+ yrs', label: 'Gallagher bloodstock experience' },
                ].map((item) => (
                  <div key={item.stat} className="bg-black/50 border border-white/20 rounded-xl p-3.5 backdrop-blur-sm">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-green-300 font-extrabold text-xl leading-tight">{item.stat}</div>
                    <div className="text-white/70 text-xs mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:sticky lg:top-8">
              <QuoteForm compact />
            </div>
          </div>
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <div className="bg-green-800 border-y border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap justify-center gap-6 text-green-200 text-sm font-medium">
            {[
              '✓ All providers broker-accessed',
              '✓ No cost to compare',
              '✓ Licensed NZ advisers',
              '✓ Genuine comparative quotes',
              '✓ FAP-licensed brokers',
              '✓ Response within 1 business day',
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROVIDER CARDS ── */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">The Providers. What You Need to Know.</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These are the specialist equine insurers our brokers access. Here's what makes each one different — the stuff you won't find on their own websites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {providers.map((p) => {
              const ac = accentClasses[p.accentColor] ?? accentClasses.blue
              return (
                <div
                  key={p.slug}
                  className={`bg-white rounded-2xl border-2 ${ac.border} shadow-sm hover:shadow-lg transition-all flex flex-col`}
                >
                  {/* Card header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-bold text-white px-2.5 py-0.5 rounded-full ${ac.badge}`}>
                            {p.type}
                          </span>
                          <span className={`text-xs font-semibold ${pricingColor[p.pricingIndicator]}`}>
                            {p.pricingIndicator}
                          </span>
                        </div>
                        <h3 className="text-xl font-extrabold text-gray-900">{p.name}</h3>
                        <p className="text-sm text-gray-500 mt-0.5">{p.tagline}</p>
                      </div>
                    </div>

                    {/* Highlight callout */}
                    <div className={`rounded-xl px-4 py-2.5 border ${ac.tag} text-sm font-semibold flex items-center gap-2`}>
                      <span>⚡</span>
                      <span>{p.highlight}</span>
                    </div>
                  </div>

                  {/* Key stats */}
                  <div className="grid grid-cols-2 gap-0 border-b border-gray-100">
                    {p.keyStats.map((stat, i) => (
                      <div
                        key={stat.label}
                        className={`px-5 py-3 ${i % 2 === 0 ? 'border-r border-gray-100' : ''} ${i < 2 ? '' : 'border-t border-gray-100'}`}
                      >
                        <div className={`text-xl font-extrabold ${ac.stat}`}>{stat.value}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="px-6 py-4 border-b border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                  </div>

                  {/* Best for */}
                  <div className="px-6 py-4 border-b border-gray-100">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Best For</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.bestFor.map((b) => (
                        <span key={b} className={`text-xs border px-2 py-0.5 rounded-full font-medium ${ac.tag}`}>
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Coverage highlights */}
                  <div className="px-6 py-4 flex-1">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">What's Covered</p>
                    <ul className="space-y-1.5">
                      {p.coverageHighlights.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-500 font-bold mt-0.5">✓</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="px-6 py-4 border-t border-gray-100">
                    <Link
                      href="/contact/"
                      className={`block text-center text-white font-bold text-sm px-4 py-2.5 rounded-xl transition-colors ${ac.badge} hover:opacity-90`}
                    >
                      Get a Quote via {p.name} →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── COVERAGE MATRIX ── */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Coverage Comparison Matrix</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              What's actually included — and where each provider's focus lies.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full border-collapse text-sm min-w-[640px]">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="text-left px-5 py-4 font-bold w-2/5">Cover Type</th>
                  <th className="text-center px-4 py-4 font-bold">Pet-n-Sur</th>
                  <th className="text-center px-4 py-4 font-bold">Petcover NZ</th>
                  <th className="text-center px-4 py-4 font-bold">NZB Insurance</th>
                  <th className="text-center px-4 py-4 font-bold">Gallagher</th>
                </tr>
              </thead>
              <tbody>
                {coverMatrix.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 text-gray-800 font-medium">{row.feature}</td>
                    <td className="px-4 py-3 text-center"><Tick yes={row.petnsur} /></td>
                    <td className="px-4 py-3 text-center"><Tick yes={row.petcover} /></td>
                    <td className="px-4 py-3 text-center"><Tick yes={row.nzb} /></td>
                    <td className="px-4 py-3 text-center"><Tick yes={row.gallagher} /></td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 border-t-2 border-gray-200">
                  <td className="px-5 py-3 text-xs text-gray-500 italic" colSpan={5}>
                    Matrix is indicative. Coverage varies by policy and horse type. Your broker will confirm exact inclusions for your situation.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* ── HOW BROKER COMPARISON WORKS ── */}
      <div className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Why Use a Broker
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
                The Right Provider Depends on Your Horse.<br />A Broker Knows Which One.
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                A leisure pony owner and a thoroughbred racing syndicate have completely different needs. Going direct to a single insurer means you only see one set of options. Our specialist brokers access Pet-n-Sur, Petcover NZ, NZB Insurance, Gallagher, and more — then present the policy that actually fits your horse.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: '🔍',
                    heading: 'They know the gaps',
                    body: 'A broker knows that Pet-n-Sur excels for everyday horses, but NZB is the only real option for a $200k thoroughbred. You won\'t find that on a comparison widget.',
                  },
                  {
                    icon: '📋',
                    heading: 'They manage the claims',
                    body: 'When your horse needs surgery at 2am, you want someone who can call the insurer on your behalf — not just a 0800 number.',
                  },
                  {
                    icon: '💰',
                    heading: 'No cost to you',
                    body: 'Brokers are paid by insurers via commission. Your quote is the same price as going direct — often lower due to broker relationships.',
                  },
                ].map((item) => (
                  <div key={item.heading} className="flex gap-4 bg-white rounded-xl p-4 border border-gray-200">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.heading}</h3>
                      <p className="text-gray-600 text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: what to expect */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-brand px-6 py-5">
                <h3 className="text-white font-extrabold text-xl">What Happens When You Submit</h3>
                <p className="text-green-200 text-sm mt-1">Typically within 1 business day:</p>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { step: '1', heading: 'We receive your enquiry', body: 'Your details go directly to a specialist equine insurance adviser — not a call centre.' },
                  { step: '2', heading: 'Broker contacts you', body: 'A licensed NZ adviser calls or emails to discuss your horse, budget, and requirements.' },
                  { step: '3', heading: 'Quotes presented', body: 'You receive genuine quotes from multiple providers — Pet-n-Sur, Petcover, NZB, or others depending on your horse.' },
                  { step: '4', heading: 'You decide', body: 'No pressure. Review the options at your own pace and choose only if you\'re satisfied.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 px-6 py-4">
                    <div className="w-8 h-8 rounded-full bg-brand text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{item.heading}</p>
                      <p className="text-gray-500 text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-5 bg-green-50 border-t border-green-100">
                <Link
                  href="/contact/"
                  className="block text-center bg-brand hover:bg-brand-light text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  Start Your Quote Request →
                </Link>
                <p className="text-center text-green-700 text-xs mt-2 font-medium">Free · No obligation · Licensed NZ advisers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── COVERAGE TYPE OVERVIEW ── */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Types of Horse Insurance Cover</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Understanding what each cover type does helps you know which ones to ask about when your broker calls.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-4 font-bold">Cover Type</th>
                  <th className="text-left px-5 py-4 font-bold">What It Covers</th>
                  <th className="text-left px-5 py-4 font-bold hidden md:table-cell">Who Needs It</th>
                </tr>
              </thead>
              <tbody>
                {coverageTypes.map((c, i) => (
                  <tr key={c.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3">
                      <Link
                        href={`/types/${c.slug}/`}
                        className="flex items-center gap-2 font-bold text-gray-900 hover:text-brand transition-colors"
                      >
                        <span>{c.icon}</span>
                        <span>{c.name}</span>
                      </Link>
                    </td>
                    <td className="px-5 py-3 text-gray-600">{c.description.split('.')[0]}.</td>
                    <td className="px-5 py-3 text-gray-600 hidden md:table-cell">{c.whoNeeds[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── SECOND FORM CTA ── */}
      <div className="bg-brand-dark py-16" id="get-quotes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_480px] gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Ready to Compare Quotes for Your Horse?
              </h2>
              <p className="text-green-200 text-lg mb-8 max-w-lg">
                Fill in the form and a specialist NZ equine insurance broker will contact you with genuine quotes from the providers that suit your horse — at no cost to you.
              </p>
              <div className="space-y-3">
                {[
                  '✓ Quotes from Pet-n-Sur, Petcover NZ, NZB & more',
                  '✓ Licensed Financial Advice Providers (FAP)',
                  '✓ No obligation — review and decide in your own time',
                  '✓ Expert advice on cover types for your specific horse',
                  '✓ NZ-based advisers who understand our equine market',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-green-200 text-sm font-medium">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
