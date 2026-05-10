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
    title: `${horse.name} Insurance NZ | EquineInsurance.co.nz`,
    description: `Horse insurance for ${horse.name.toLowerCase()} in New Zealand. ${horse.description.split('.')[0]}. Free quotes from licensed NZ equine insurance brokers.`,
    alternates: { canonical: `${siteConfig.url}/horses/${slug}/` },
  }
}

export default async function HorseTypePage({ params }: Props) {
  const { slug } = await params
  const horse = getHorseTypeBySlug(slug)
  if (!horse) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'Horse Types', item: siteConfig.url + '/horses/' },
      { '@type': 'ListItem', position: 3, name: horse.name, item: `${siteConfig.url}/horses/${slug}/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-brand border-b border-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/horses/" className="hover:text-white">Horse Types</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{horse.name}</span>
          </nav>
          <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {horse.icon} {horse.name}
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-4">
            {horse.name} Insurance NZ
          </h1>
          <p className="text-green-100 text-xl max-w-2xl leading-relaxed">{horse.description}</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {/* Common Risks */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Common Risks for {horse.name}</h2>
                <div className="space-y-3">
                  {horse.commonRisks.map((risk, i) => (
                    <div key={i} className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-100">
                      <span className="text-red-500 font-bold mt-0.5">!</span>
                      <p className="text-gray-700 text-sm">{risk}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Cover */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Recommended Cover for {horse.name}</h2>
                <div className="space-y-3">
                  {horse.recommendedCover.map((cover, i) => (
                    <div key={i} className="flex items-start gap-3 bg-green-50 rounded-xl p-4 border border-green-100">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <p className="text-gray-700 text-sm">{cover}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Horse Types */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Other Horse Types</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {horseTypes
                    .filter((h) => h.slug !== horse.slug)
                    .map((h) => (
                      <Link
                        key={h.slug}
                        href={`/horses/${h.slug}/`}
                        className="group flex items-center gap-3 bg-white border border-gray-200 hover:border-green-300 rounded-xl p-4 transition-all hover:shadow-sm"
                      >
                        <span className="text-2xl">{h.icon}</span>
                        <div>
                          <p className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">{h.name}</p>
                          <p className="text-gray-500 text-xs">Learn more →</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <QuoteForm compact />
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Specialist Equine Advice</h3>
                <p className="text-gray-600 text-sm mb-4">Our brokers specialise in equine insurance and understand the unique risks of {horse.name.toLowerCase()}.</p>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-green-600 font-bold text-sm">
                  📞 {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
