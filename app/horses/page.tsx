import type { Metadata } from 'next'
import Link from 'next/link'
import { horseTypes } from '@/data/horse-types'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
 title: 'Horse Types | Equine Insurance for Every Breed & Use | EquineInsurance.co.nz',
 description: 'Equine insurance for every horse type in — sport horses, thoroughbreds, breeding stock, and leisure horses. Find the right cover for your horse.',
 alternates: { canonical: `${siteConfig.url}/horses/` },
}

export default function HorsesPage() {
 return (
 <>
 <div className="bg-brand border-b border-brand-dark">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
 <nav className="text-sm text-green-300 mb-4">
 <Link href="/" className="hover:text-white">Home</Link>
 <span className="mx-2">›</span>
 <span className="text-white">Horse Types</span>
 </nav>
 <h1 className="text-4xl font-extrabold text-white mb-4">Equine Insurance by Horse Type</h1>
 <p className="text-green-100 text-xl leading-relaxed max-w-2xl">
 Different horses have different insurance needs. Find tailored advice and cover options for your type of horse.
 </p>
 </div>
 </div>

 <div className="bg-white py-14">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid md:grid-cols-2 gap-8">
 {horseTypes.map((h) => (
 <Link
 key={h.slug}
 href={`/horses/${h.slug}/`}
 className="group bg-white border-2 border-gray-100 hover:border-green-200 rounded-2xl overflow-hidden transition-all hover:shadow-lg"
 >
 <div
 className="h-48 w-full bg-brand"
 style={{
 backgroundImage: `url(${h.image})`,
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 }}
 />
 <div className="p-8">
 <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{h.name}</h2>
 <p className="text-gray-500 text-sm leading-relaxed mb-4">{h.description.split('.')[0]}.</p>
 <div className="mb-4">
 <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Recommended Cover</p>
 <ul className="space-y-1">
 {h.recommendedCover.slice(0, 3).map((r, i) => (
 <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
 <span className="text-green-600">✓</span>
 {r}
 </li>
 ))}
 </ul>
 </div>
 <span className="text-green-600 font-bold text-sm">Learn more →</span>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </div>
 </>
 )
}
