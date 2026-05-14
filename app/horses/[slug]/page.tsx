import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { horseTypes, getHorseTypeBySlug } from '@/data/horse-types'
import { siteConfig } from '@/data/site-config'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return horseTypes.map((h) => ({ slug: h.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const horse = getHorseTypeBySlug(slug)
  if (!horse) return {}
  return {
    title: horse.metaTitle,
    description: horse.metaDescription,
    alternates: { canonical: `${siteConfig.url}/horses/${slug}/` },
    openGraph: {
      type: 'website',
      title: horse.metaTitle,
      description: horse.metaDescription,
      url: `${siteConfig.url}/horses/${slug}/`,
    },
  }
}

function renderLongForm(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-extrabold text-gray-900 mt-8 mb-3">{line.replace('### ', '')}</h3>)
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-extrabold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3">{line.replace('## ', '')}</h2>)
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<p key={i} className="font-bold text-gray-900 mt-4 mb-1">{line.replace(/\*\*/g, '')}</p>)
    } else if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].replace('- ', ''))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1.5 my-4 text-gray-600">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
        </ul>
      )
      continue
    } else if (line.trim() === '') {
      // skip blank
    } else {
      const html = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      elements.push(<p key={i} className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: html }} />)
    }
    i++
  }
  return elements
}

export default async function HorseTypePage({ params }: Props) {
  const { slug } = await params
  const horse = getHorseTypeBySlug(slug)
  if (!horse) notFound()

  const otherHorses = horseTypes.filter((h) => h.slug !== horse.slug)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'Horse Types', item: siteConfig.url + '/horses/' },
      { '@type': 'ListItem', position: 3, name: horse.name, item: `${siteConfig.url}/horses/${slug}/` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/horses/${slug}/#service`,
    name: `${horse.name} Insurance`,
    description: horse.description,
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: 'EquineInsurance.co.nz',
    },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
    serviceType: 'Equine Insurance Referral',
    url: `${siteConfig.url}/horses/${slug}/`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: horse.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <div
        className="relative min-h-[420px] flex items-end"
        style={{
          backgroundImage: `url(${horse.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full">
          <nav className="text-sm text-green-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/horses/" className="hover:text-white transition-colors">Horse Types</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{horse.name}</span>
          </nav>
          <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {horse.icon} {horse.name} Insurance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight max-w-3xl">
            {horse.name} Insurance
          </h1>
          <p className="text-green-100 text-xl max-w-2xl leading-relaxed mb-8">{horse.description}</p>

          {/* Key stats */}
          <div className="flex flex-wrap gap-3">
            {horse.keyStats.map((stat) => (
              <div key={stat.label} className="bg-black/50 border border-white/20 rounded-xl px-4 py-2.5 backdrop-blur-sm">
                <div className="text-green-300 font-extrabold text-lg leading-tight">{stat.value}</div>
                <div className="text-white/70 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <div className="bg-green-800 border-y border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap justify-center gap-6 text-green-200 text-sm font-medium">
            {['✓ Free broker referral', '✓ Licensed NZ advisers', '✓ FAP-licence holders', '✓ Multiple provider quotes', '✓ No obligation'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">

            {/* Left: long-form content */}
            <div>

              {/* Why Insure */}
              <section className="mb-12">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Why Insure Your {horse.name}?</h2>
                <div className="space-y-4">
                  {horse.whyInsure.map((item) => (
                    <div key={item.heading} className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-2">{item.heading}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Coverage Breakdown Table */}
              <section className="mb-12">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Coverage Options for {horse.name}</h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-brand text-white">
                        <th className="text-left px-4 py-3 font-bold">Cover Type</th>
                        <th className="text-left px-4 py-3 font-bold hidden md:table-cell">What It Covers</th>
                        <th className="text-left px-4 py-3 font-bold">Typical Limit</th>
                        <th className="text-center px-4 py-3 font-bold">Essential?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {horse.coverageBreakdown.map((row, i) => (
                        <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 font-bold text-gray-900">
                            <Link href={`/types/${row.slug}/`} className="text-brand hover:text-brand-light transition-colors">
                              {row.type}
                            </Link>
                          </td>
                          <td className="px-4 py-3 text-gray-600 text-xs hidden md:table-cell">{row.description}</td>
                          <td className="px-4 py-3 text-gray-700 text-xs">{row.typicalLimit}</td>
                          <td className="px-4 py-3 text-center">
                            {row.isEssential
                              ? <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">Yes</span>
                              : <span className="inline-block bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">Optional</span>
                            }
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Long-form editorial body */}
              <section className="mb-12 prose-like">
                {renderLongForm(horse.longFormBody)}
              </section>

              {/* Cost Guide */}
              <section className="mb-12">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">How Much Does {horse.name} Insurance Cost?</h2>
                <p className="text-gray-600 mb-6">Premium estimates for common {horse.name.toLowerCase()} insurance scenarios. Actual premiums depend on the horse's age, health history, value, and intended use.</p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        <th className="text-left px-4 py-3 font-bold">Scenario</th>
                        <th className="text-left px-4 py-3 font-bold">Cover Level</th>
                        <th className="text-left px-4 py-3 font-bold">Est. Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      {horse.costGuide.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 text-gray-700 text-xs">{row.scenario}</td>
                          <td className="px-4 py-3 text-gray-600 text-xs">{row.coverLevel}</td>
                          <td className="px-4 py-3 font-bold text-green-700 text-sm">{row.estimatedPremium}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-2">Estimates only. Get an accurate quote by submitting a request to a licensed adviser →</p>
              </section>

              {/* Common Risks */}
              <section className="mb-12">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Common Risks for {horse.name}</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {horse.commonRisks.map((risk) => (
                    <div key={risk} className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-100">
                      <span className="text-red-500 font-bold text-sm mt-0.5 flex-shrink-0">!</span>
                      <p className="text-gray-700 text-sm">{risk}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Policy Tips */}
              <section className="mb-12">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Policy Tips for {horse.name} Owners</h2>
                <div className="space-y-3">
                  {horse.policyTips.map((tip) => (
                    <div key={tip} className="flex items-start gap-3 bg-green-50 rounded-xl p-4 border border-green-100">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <p className="text-gray-700 text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section className="mb-12">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions — {horse.name} Insurance</h2>
                <div className="space-y-4">
                  {horse.faqs.map((faq, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
                      <h3 className="font-extrabold text-gray-900 mb-2 text-base">{faq.q}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Internal links */}
              <section className="mb-10">
                <h2 className="text-xl font-extrabold text-gray-900 mb-4">Related Insurance Topics</h2>
                <div className="flex flex-wrap gap-2">
                  {horse.relatedSlugs.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="bg-green-50 hover:bg-green-100 border border-green-200 text-green-800 text-sm font-medium px-4 py-2 rounded-full transition-colors"
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </section>

              {/* Other Horse Types */}
              <section>
                <h2 className="text-xl font-extrabold text-gray-900 mb-4">Other Horse Types</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {otherHorses.map((h) => (
                    <Link
                      key={h.slug}
                      href={`/horses/${h.slug}/`}
                      className="group flex items-center gap-3 bg-white border border-gray-200 hover:border-green-300 rounded-xl p-4 transition-all hover:shadow-sm"
                    >
                      <span className="text-2xl">{h.icon}</span>
                      <div>
                        <p className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">{h.name}</p>
                        <p className="text-gray-500 text-xs">View insurance →</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">
              <div className="lg:sticky lg:top-8 space-y-6">
                <QuoteForm compact />

                {/* Recommended cover */}
                <div className="bg-brand rounded-2xl p-6 text-white">
                  <h3 className="font-extrabold text-lg mb-4">Recommended Cover</h3>
                  <ul className="space-y-2">
                    {horse.recommendedCover.map((cover) => (
                      <li key={cover} className="flex items-start gap-2 text-sm text-green-100">
                        <span className="text-green-300 font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>{cover}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact/"
                    className="mt-6 block text-center bg-white text-brand font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-green-50 transition-colors"
                  >
                    Get a Quote →
                  </Link>
                </div>

                {/* Cover type quick links */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Coverage Types Explained</h3>
                  <ul className="space-y-1.5">
                    {[
                      { name: 'Mortality', slug: 'mortality' },
                      { name: 'Major Medical', slug: 'major-medical' },
                      { name: 'Loss of Use', slug: 'loss-of-use' },
                      { name: 'Transit Cover', slug: 'transit' },
                      { name: 'Liability', slug: 'liability' },
                    ].map((c) => (
                      <li key={c.slug}>
                        <Link href={`/types/${c.slug}/`} className="text-green-600 hover:text-green-700 text-sm transition-colors">
                          {c.name} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compare providers */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">Not Sure Which Provider?</h3>
                  <p className="text-gray-600 text-xs mb-3">See Pet-n-Sur, Petcover NZ, NZB Insurance, and Gallagher compared side by side.</p>
                  <Link href="/compare/" className="block text-center bg-brand text-white font-bold text-sm px-4 py-2 rounded-xl hover:bg-brand-light transition-colors">
                    Compare Providers →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
