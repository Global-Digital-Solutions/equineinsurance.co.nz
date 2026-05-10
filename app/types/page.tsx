import type { Metadata } from 'next'
import Link from 'next/link'
import { coverageTypes } from '@/data/coverage-types'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Horse Insurance Cover Types NZ | EquineInsurance.co.nz',
  description: 'All equine insurance coverage types in New Zealand — mortality, major medical, transit, liability, and loss of use. Compare options and get free quotes.',
  alternates: { canonical: `${siteConfig.url}/types/` },
}

export default function TypesPage() {
  return (
    <>
      <div className="bg-brand border-b border-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/coverage/" className="hover:text-white">Coverage</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Cover Types</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Equine Insurance Cover Types</h1>
          <p className="text-green-100 text-xl leading-relaxed max-w-2xl">
            Explore all the insurance cover types available for horses in New Zealand.
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageTypes.map((c) => (
              <Link
                key={c.slug}
                href={`/types/${c.slug}/`}
                className="group bg-white border-2 border-gray-100 hover:border-green-200 rounded-2xl p-6 transition-all hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{c.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{c.name}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.description.split('.')[0]}.</p>
                <span className="text-green-600 font-bold text-sm">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
