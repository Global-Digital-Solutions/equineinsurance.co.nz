import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { coverageTypes, getCoverageBySlug } from '@/data/coverage-types'
import { siteConfig } from '@/data/site-config'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return coverageTypes.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const coverage = getCoverageBySlug(slug)
  if (!coverage) return {}
  return {
    title: `${coverage.name} | NZ Horse Insurance | EquineInsurance.co.nz`,
    description: `${coverage.name} for NZ horses. ${coverage.description.split('.')[0]}. Get free quotes from licensed NZ equine insurance brokers.`,
    alternates: { canonical: `${siteConfig.url}/types/${slug}/` },
  }
}

export default async function CoverageTypePage({ params }: Props) {
  const { slug } = await params
  const coverage = getCoverageBySlug(slug)
  if (!coverage) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'Coverage Types', item: siteConfig.url + '/coverage/' },
      { '@type': 'ListItem', position: 3, name: coverage.name, item: `${siteConfig.url}/types/${slug}/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div
        className="relative min-h-[340px] flex items-end"
        style={{
          backgroundImage: `url(${coverage.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <nav className="text-sm text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/coverage/" className="hover:text-white">Coverage Types</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{coverage.name}</span>
          </nav>
          <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {coverage.icon} {coverage.name}
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-4">
            {coverage.name} for NZ Horses
          </h1>
          <p className="text-green-100 text-xl max-w-2xl leading-relaxed">{coverage.description}</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Key Features of {coverage.name}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {coverage.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 bg-green-50 rounded-xl p-4 border border-green-100">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <p className="text-gray-700 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Needs It */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Who Needs {coverage.name}?</h2>
                <div className="space-y-3">
                  {coverage.whoNeeds.map((w, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <span className="text-green-600 text-xl">🐴</span>
                      <p className="text-gray-700">{w}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Coverage */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Other Coverage Types to Consider</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {coverageTypes
                    .filter((c) => c.slug !== coverage.slug)
                    .slice(0, 4)
                    .map((c) => (
                      <Link
                        key={c.slug}
                        href={`/types/${c.slug}/`}
                        className="group flex items-center gap-3 bg-white border border-gray-200 hover:border-green-300 rounded-xl p-4 transition-all hover:shadow-sm"
                      >
                        <span className="text-2xl">{c.icon}</span>
                        <div>
                          <p className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">{c.name}</p>
                          <p className="text-gray-500 text-xs">Learn more →</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <QuoteForm compact />
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Need Help Deciding?</h3>
                <p className="text-gray-600 text-sm mb-4">Our specialist equine insurance brokers can assess your horse and recommend the right level of cover for your situation.</p>
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
