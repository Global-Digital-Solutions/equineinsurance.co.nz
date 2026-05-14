import type { Metadata } from 'next'
import Link from 'next/link'
import { faqs, categoryConfig } from '@/data/faqs'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Horse Insurance FAQs | Equine Insurance Questions Answered | EquineInsurance.co.nz',
  description: 'Answers to common horse insurance questions — colic cover, premiums, pre-existing conditions, ACC, transit, loss of use, and more.',
  alternates: { canonical: `${siteConfig.url}/faqs/` },
}

const categories = ['Basics', 'Cover Types', 'Costs', 'Claims'] as const

const catBorderLeft: Record<string, string> = {
  Basics:        'border-l-blue-400',
  'Cover Types': 'border-l-green-500',
  Costs:         'border-l-amber-400',
  Claims:        'border-l-purple-500',
}

const catAccent: Record<string, string> = {
  Basics:        'bg-blue-600',
  'Cover Types': 'bg-green-600',
  Costs:         'bg-amber-500',
  Claims:        'bg-purple-600',
}

const catHeadingBg: Record<string, string> = {
  Basics:        'from-blue-600 to-blue-700',
  'Cover Types': 'from-green-600 to-green-700',
  Costs:         'from-amber-500 to-amber-600',
  Claims:        'from-purple-600 to-purple-700',
}

export default function FAQsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'FAQs', item: siteConfig.url + '/faqs/' },
    ],
  }

  // group by category
  const grouped = categories.map((cat) => ({
    cat,
    items: faqs.filter((f) => f.category === cat),
    cfg: categoryConfig[cat],
  }))

  // running index for numbered items
  let globalIdx = 0

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HERO ── */}
      <div className="bg-brand border-b border-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-green-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">FAQs</span>
          </nav>
          <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {faqs.length} Questions Answered
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-4">Horse Insurance FAQs</h1>
          <p className="text-green-100 text-xl leading-relaxed max-w-2xl mb-8">
            Everything horse owners ask about equine insurance — from basic cover questions to claims, costs, and NZ-specific rules.
          </p>

          {/* Category jump links */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const cfg = categoryConfig[cat]
              return (
                <a
                  key={cat}
                  href={`#${cat.toLowerCase().replace(' ', '-')}`}
                  className={`inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-full border transition-colors ${cfg.bg} ${cfg.color} ${cfg.border} hover:opacity-80`}
                >
                  <span>{cfg.icon}</span>
                  <span>{cat}</span>
                  <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs text-white font-extrabold ${catAccent[cat]}`}>
                    {faqs.filter((f) => f.category === cat).length}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── FAQ GROUPS ── */}
      <div className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {grouped.map(({ cat, items, cfg }) => (
            <section key={cat} id={cat.toLowerCase().replace(' ', '-')}>
              {/* Category heading */}
              <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${catHeadingBg[cat]} text-white px-5 py-3 rounded-2xl mb-6`}>
                <span className="text-xl">{cfg.icon}</span>
                <h2 className="text-lg font-extrabold tracking-wide">{cat}</h2>
                <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {items.length} Q&amp;A
                </span>
              </div>

              {/* Accordion items */}
              <div className="space-y-3">
                {items.map((faq) => {
                  globalIdx++
                  const num = globalIdx
                  return (
                    <details
                      key={faq.q}
                      className={`group bg-white rounded-2xl border-l-4 ${catBorderLeft[cat]} border border-gray-200 shadow-sm overflow-hidden`}
                    >
                      <summary className="flex items-start gap-4 px-5 py-4 cursor-pointer list-none select-none hover:bg-gray-50 transition-colors">
                        {/* Number badge */}
                        <span className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-extrabold text-white flex items-center justify-center mt-0.5 ${catAccent[cat]}`}>
                          {num}
                        </span>
                        {/* Question */}
                        <h3 className="flex-1 font-bold text-gray-900 text-base leading-snug pr-6">{faq.q}</h3>
                        {/* Chevron */}
                        <span className="flex-shrink-0 text-gray-400 mt-0.5 transition-transform duration-200 group-open:rotate-180">
                          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </summary>
                      {/* Answer */}
                      <div className="px-5 pb-5 pt-0">
                        <div className="ml-11">
                          <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">{faq.a}</p>
                        </div>
                      </div>
                    </details>
                  )
                })}
              </div>
            </section>
          ))}

          {/* Quick stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '$150/yr', label: 'Liability cover from' },
              { value: '$10k–$25k', label: 'Colic surgery cost' },
              { value: '14 days', label: 'Pet-n-Sur claim speed' },
              { value: '4 providers', label: 'Brokers compare' },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm">
                <div className="text-green-700 font-extrabold text-xl">{s.value}</div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Related links */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="font-extrabold text-gray-900 mb-4">Explore Further</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: 'Compare Providers', href: '/compare/', desc: 'Pet-n-Sur, Petcover NZ, NZB, Gallagher compared' },
                { label: 'Mortality Insurance', href: '/types/mortality/', desc: 'What it covers and how to value your horse' },
                { label: 'Major Medical Cover', href: '/types/major-medical/', desc: 'Vet fees, colic surgery, hospitalisation' },
                { label: 'Liability Insurance', href: '/types/liability/', desc: 'Third-party cover — essential for all owners' },
                { label: 'Loss of Use', href: '/types/loss-of-use/', desc: 'When your horse can\'t perform its purpose' },
                { label: 'Horse Insurance Cost Guide', href: '/blog/how-much-does-horse-insurance-cost-nz/', desc: 'Indicative premiums by horse type' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-start gap-3 group p-3 rounded-xl hover:bg-green-50 transition-colors"
                >
                  <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">→</span>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">{link.label}</p>
                    <p className="text-gray-500 text-xs">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-3">Still Have Questions?</h2>
            <p className="text-green-200 mb-6 max-w-lg mx-auto">
              Our specialist equine insurance advisers can answer any question about cover, costs, and providers — and provide a genuine comparative quote at no cost.
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-brand font-extrabold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors"
            >
              Get a Quote →
            </Link>
            <p className="text-green-400 text-xs mt-3">No obligation · Licensed NZ advisers · Response within 1 business day</p>
          </div>
        </div>
      </div>
    </>
  )
}
