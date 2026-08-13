import type { Metadata } from 'next'
import Link from 'next/link'
import HoldingPanel from '@/components/HoldingPanel'
import USPBar from '@/components/USPBar'
import OfficialProviders from '@/components/OfficialProviders'
import { coverageTypes } from '@/data/coverage-types'
import { horseTypes } from '@/data/horse-types'
import { faqs } from '@/data/faqs'
import { blogPosts } from '@/data/blog-posts'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
 title: { absolute: 'Horse Insurance NZ | EquineInsurance.co.nz' },
 description: 'Horse insurance information for NZ owners. Mortality cover, vet fees, transit, liability and loss of use. Find a specialist broker or go direct.',
 alternates: { canonical: siteConfig.url + '/' },
}

const steps = [
 { num: '1', title: 'Find a Specialist Broker', desc: 'Search IBANZ to find a licensed NZ broker who specialises in equine and rural insurance. They can access multiple insurers and arrange the right cover for you.' },
 { num: '2', title: 'Understand Your Cover Options', desc: 'Horse insurance can cover mortality, vet fees, transit, liability and loss of use. A specialist broker or insurer can explain which cover suits your situation.' },
 { num: '3', title: 'Place Your Cover', desc: 'Once you have chosen the right policy, your broker or insurer arranges cover and handles the documentation.' },
]

export default function HomePage() {
 const topFaqs = faqs.slice(0, 5)
 const latestPosts = blogPosts.slice(0, 3)

 return (
 <>
 {/* Hero */}
 <section
 className="relative py-16 lg:py-24"
 style={{
 backgroundImage: 'url(/images/equine-hero-8.jpg)',
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 }}
 >
 <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
 <div>
 <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
 NZ Specialist Equine Insurance
 </span>
 <h1 className="text-white leading-tight mb-6 font-extrabold" style={{ fontSize: 'clamp(1.9rem, 8vw, 3rem)' }}>
 Horse Insurance NZ
 </h1>
 <p className="text-green-100 text-xl leading-relaxed mb-8">
 Mortality cover, vet fees, transit, liability and loss of use. Find a specialist broker or contact an insurer directly.
 </p>
 <div className="flex flex-wrap gap-2 mb-8">
 {['NZ owned & operated', 'Independent, not owned by an insurer'].map((t) => (
 <span key={t} className="bg-black/40 border border-white/40 text-white text-xs font-medium px-2.5 py-1 rounded-full">{t}</span>
 ))}
 </div>
 <div className="flex flex-wrap gap-4">
 <Link href="/contact/" className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
 Find a Specialist →
 </Link>
 <Link href="/coverage/" className="bg-brand-dark hover:bg-brand-light text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm border border-brand-light">
 Explore Coverage
 </Link>
 </div>
 </div>
 <div>
 <HoldingPanel />
 </div>
 </div>
 </div>
 </section>

 <USPBar />

 {/* Coverage Types */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Coverage Types</span>
 <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Every Type of Horse Insurance Cover</h2>
 <p className="text-gray-600 text-lg max-w-2xl mx-auto">From mortality to vet fees, transit, and liability — find the right cover for your horse and circumstances.</p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {coverageTypes.map((c) => (
 <Link
 key={c.slug}
 href={`/types/${c.slug}/`}
 className="group bg-white border-2 border-gray-100 hover:border-green-200 rounded-2xl overflow-hidden transition-all hover:shadow-lg"
 >
 <div
 className="h-36 w-full bg-brand"
 style={{
 backgroundImage: `url(${c.image})`,
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 }}
 />
 <div className="p-6">
 <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{c.name}</h3>
 <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-2">{c.description.split('.')[0]}.</p>
 <span className="text-green-600 font-bold text-sm">Learn more →</span>
 </div>
 </Link>
 ))}
 </div>
 <div className="text-center mt-8">
 <Link href="/coverage/" className="inline-block bg-brand hover:bg-brand-light text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
 View All Coverage Types →
 </Link>
 </div>
 </div>
 </section>

 {/* Horse Types */}
 <section className="py-16 bg-gray-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Horse Types</span>
 <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Insurance for Every Type of Horse</h2>
 <p className="text-gray-600 text-lg max-w-2xl mx-auto">Different horses carry different risks. Find cover tailored to your horse&apos;s breed, use, and value.</p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
 {horseTypes.map((h) => (
 <Link
 key={h.slug}
 href={`/horses/${h.slug}/`}
 className="group bg-white border border-gray-200 hover:border-green-300 rounded-2xl overflow-hidden transition-all hover:shadow-md"
 >
 <div
 className="h-36 w-full bg-brand"
 style={{
 backgroundImage: `url(${h.image})`,
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 }}
 />
 <div className="p-6 flex items-start gap-4">
 <div>
 <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">{h.name}</h3>
 <p className="text-gray-500 text-sm line-clamp-2">{h.description.split('.')[0]}.</p>
 </div>
 </div>
 </Link>
 ))}
 </div>
 <div className="text-center mt-8">
 <Link href="/horses/" className="inline-block bg-brand hover:bg-brand-light text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
 All Horse Types →
 </Link>
 </div>
 </div>
 </section>

 {/* How It Works */}
 <section className="py-16 bg-brand">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">How It Works</span>
 <h2 className="text-3xl font-extrabold text-white mb-4">How to Find Horse Insurance in NZ</h2>
 <p className="text-green-200 text-lg max-w-2xl mx-auto">Horse and equine cover is handled by a small number of specialist brokers and insurers. Here is how to find the right fit for your situation.</p>
 </div>
 <div className="grid md:grid-cols-3 gap-8">
 {steps.map((s) => (
 <div key={s.num} className="text-center">
 <div className="w-14 h-14 rounded-full bg-green-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
 {s.num}
 </div>
 <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
 <p className="text-green-200 leading-relaxed">{s.desc}</p>
 </div>
 ))}
 </div>
 <div className="text-center mt-10">
 <Link href="/contact/" className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-colors">
 Find a Specialist →
 </Link>
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 bg-gray-50">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">FAQs</span>
 <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Common Horse Insurance Questions</h2>
 </div>
 <div className="space-y-4">
 {topFaqs.map((faq, i) => (
 <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
 <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
 <p className="text-gray-600 leading-relaxed">{faq.a}</p>
 </div>
 ))}
 </div>
 <div className="text-center mt-8">
 <Link href="/faqs/" className="inline-block bg-brand hover:bg-brand-light text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
 View All FAQs →
 </Link>
 </div>
 </div>
 </section>

 {/* Blog */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Latest Articles</span>
 <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Horse Insurance Guides & News</h2>
 </div>
 <div className="grid md:grid-cols-3 gap-8">
 {latestPosts.map((post) => (
 <Link
 key={post.slug}
 href={`/blog/${post.slug}/`}
 className="group bg-white border border-gray-200 hover:border-green-200 rounded-2xl p-6 transition-all hover:shadow-md"
 >
 <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-3">
 {post.category}
 </span>
 <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors leading-snug">
 {post.title}
 </h3>
 <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
 <div className="flex items-center justify-between text-xs text-gray-400">
 <span>{post.readTime}</span>
 <span>{new Date(post.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
 </div>
 </Link>
 ))}
 </div>
 <div className="text-center mt-8">
 <Link href="/blog/" className="inline-block bg-brand hover:bg-brand-light text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
 View All Articles →
 </Link>
 </div>
 </div>
 </section>

 <OfficialProviders />

 {/* CTA Strip */}
 <section className="py-16 bg-brand-dark">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className="text-3xl font-extrabold text-white mb-4">Looking for Horse Insurance?</h2>
 <p className="text-green-200 text-lg mb-8">
 Find a licensed specialist broker or go direct to an insurer. Use our contact page to get started.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Link href="/contact/" className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-colors">
 Find a Specialist →
 </Link>
 </div>
 </div>
 </section>
 </>
 )
}
