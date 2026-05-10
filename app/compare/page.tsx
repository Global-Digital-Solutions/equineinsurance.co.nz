import type { Metadata } from 'next'
import Link from 'next/link'
import { providers } from '@/data/providers'
import { coverageTypes } from '@/data/coverage-types'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Compare Horse Insurance NZ | Equine Insurance Providers | EquineInsurance.co.nz',
  description: 'Compare horse insurance providers in New Zealand. See which equine insurers cover mortality, vet fees, transit, liability, and loss of use — and get free quotes.',
  alternates: { canonical: `${siteConfig.url}/compare/` },
}

export default function ComparePage() {
  return (
    <>
      <div className="bg-brand border-b border-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Compare</span>
          </nav>
          <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Compare Providers</span>
          <h1 className="text-4xl font-extrabold text-white mb-4">Compare Horse Insurance Providers in NZ</h1>
          <p className="text-green-100 text-xl leading-relaxed max-w-2xl">
            NZ horse owners have several specialist equine insurance options. Our broker network accesses multiple providers to find the right fit for your horse.
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Equine Insurance Providers Our Brokers Access</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {providers.map((p) => (
                <div key={p.slug} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.description}</p>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Specialties</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.specialties.map((s) => (
                        <span key={s} className="text-xs bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Coverage Type Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-brand text-white">
                    <th className="text-left px-4 py-3 font-bold">Cover Type</th>
                    <th className="text-left px-4 py-3 font-bold">What It Covers</th>
                    <th className="text-left px-4 py-3 font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {coverageTypes.map((c, i) => (
                    <tr key={c.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-bold text-gray-900">
                        <Link href={`/types/${c.slug}/`} className="text-brand hover:text-brand-light flex items-center gap-2">
                          <span>{c.icon}</span>
                          <span>{c.name}</span>
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{c.description.split('.')[0]}.</td>
                      <td className="px-4 py-3 text-gray-600">{c.whoNeeds[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Get Comparative Quotes from Multiple Providers</h2>
            <p className="text-gray-600 mb-6 text-lg">
              The best way to compare horse insurance in New Zealand is to work with a specialist broker who has access to multiple insurers. Our free service connects you with licensed NZ equine insurance brokers who can present genuine comparative options.
            </p>
            <Link href="/contact/" className="inline-block bg-brand hover:bg-brand-light text-white font-bold px-8 py-3 rounded-xl transition-colors">
              Get Free Comparative Quotes →
            </Link>
          </section>
        </div>
      </div>
    </>
  )
}
