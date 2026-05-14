import type { Metadata } from 'next'
import Link from 'next/link'
import { coverageTypes } from '@/data/coverage-types'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
 title: 'Horse Insurance Coverage Types NZ | Equine Cover Options | EquineInsurance.co.nz',
 description: 'Explore all horse insurance coverage types in — mortality, major medical, transit, liability, and loss of use. Find the right equine cover for your horse.',
 alternates: { canonical: `${siteConfig.url}/coverage/` },
}

export default function CoveragePage() {
 return (
 <>
 <div className="bg-brand border-b border-brand-dark">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
 <nav className="text-sm text-green-300 mb-4">
 <Link href="/" className="hover:text-white">Home</Link>
 <span className="mx-2">›</span>
 <span className="text-white">Coverage Types</span>
 </nav>
 <h1 className="text-4xl font-extrabold text-white mb-4">Horse Insurance Coverage Types</h1>
 <p className="text-green-100 text-xl leading-relaxed max-w-2xl">
 Equine insurance covers far more than just death. Explore all the cover types available to horse owners and find what you need.
 </p>
 </div>
 </div>

 <div className="bg-white py-14">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
 {coverageTypes.map((c) => (
 <Link
 key={c.slug}
 href={`/types/${c.slug}/`}
 className="group bg-white border-2 border-gray-100 hover:border-green-200 rounded-2xl overflow-hidden transition-all hover:shadow-lg"
 >
 <div
 className="h-40 w-full bg-brand"
 style={{
 backgroundImage: `url(${c.image})`,
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 }}
 />
 <div className="p-6">
 <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{c.name}</h2>
 <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.description.split('.')[0]}.</p>
 <ul className="space-y-1 mb-4">
 {c.features.slice(0, 3).map((f, i) => (
 <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
 <span className="text-green-600 font-bold mt-0.5">✓</span>
 {f}
 </li>
 ))}
 </ul>
 <span className="text-green-600 font-bold text-sm">Learn more →</span>
 </div>
 </Link>
 ))}
 </div>

 <div className="bg-green-50 rounded-2xl p-8 border border-green-100 text-center">
 <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Not Sure What Cover You Need?</h2>
 <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
 Our specialist equine insurance brokers can assess your horse and situation to recommend the right combination of cover for your needs and budget.
 </p>
 <Link href="/contact/" className="inline-block bg-brand hover:bg-brand-light text-white font-bold px-8 py-3 rounded-xl transition-colors">
 Get Expert Advice — Free →
 </Link>
 </div>
 </div>
 </div>
 </>
 )
}
