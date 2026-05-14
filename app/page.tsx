import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import USPBar from '@/components/USPBar'
import { coverageTypes } from '@/data/coverage-types'
import { horseTypes } from '@/data/horse-types'
import { providers } from '@/data/providers'
import { faqs } from '@/data/faqs'
import { blogPosts } from '@/data/blog-posts'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
 title: 'Horse Insurance NZ | Compare & Save | EquineInsurance.co.nz',
 description: 'Compare horse insurance. Mortality cover, vet fees, transit, liability and loss of use. Free quotes from licensed equine insurance brokers.',
 alternates: { canonical: siteConfig.url + '/' },
}

const steps = [
 { num: '1', title: 'Tell Us About Your Horse', desc: 'Share your horse type, what cover you need, and the approximate value of your horse using our simple online form.' },
 { num: '2', title: 'We Match You with a Broker', desc: 'We connect you with a specialist equine insurance broker who understands the unique risks of horse ownership.' },
 { num: '3', title: 'Compare & Choose', desc: 'Your broker presents options from multiple insurers. You choose the best fit for your needs and budget — no pressure.' },
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
 backgroundImage: 'url(/images/equine-hero-8.png)',
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 }}
 >
 <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
 NZ Specialist Equine Insurance
 </span>
 <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
 Horse Insurance — <span className="text-green-300">Compare & Save</span>
 </h1>
 <p className="text-green-100 text-xl leading-relaxed mb-8">
 Mortality cover, vet fees, transit, liability and loss of use. Get free quotes from licensed equine insurance brokers — no obligation.
 </p>
 <div className="flex flex-wrap gap-4 mb-8">
 <div className="flex items-center gap-2 text-green-100 text-sm">
 <span className="text-green-300">✓</span> Free broker matching
 </div>
 <div className="flex items-center gap-2 text-green-100 text-sm">
 <span className="text-green-300">✓</span> All horse types covered
 </div>
 <div className="flex items-center gap-2 text-green-100 text-sm">
 <span className="text-green-300">✓</span> Licensed advisers only
 </div>
 <div className="flex items-center gap-2 text-green-100 text-sm">
 <span className="text-green-300">✓</span> 24hr response
 </div>
 </div>
 <div className="flex flex-wrap gap-4">
 <Link href="/contact/" className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
 Get Free Quote →
 </Link>
 <Link href="/coverage/" className="bg-brand-dark hover:bg-brand-light text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm border border-brand-light">
 Explore Coverage
 </Link>
 </div>
 </div>
 <div>
 <QuoteForm />
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
 <h2 className="text-3xl font-extrabold text-white mb-4">Get Your Horse Covered in 3 Simple Steps</h2>
 <p className="text-green-200 text-lg max-w-2xl mx-auto">Our free service connects you with the right equine insurance broker quickly — so you can focus on your horses, not the paperwork.</p>
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
 Start Now — It&apos;s Free
 </Link>
 </div>
 </div>
 </section>

 {/* Provider Strip */}
 <section className="py-12 bg-white border-b border-gray-100">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-8">Providers Our Brokers Access</p>
 <div className="flex flex-wrap justify-center items-center gap-8">
 {providers.map((p) => (
 <div key={p.slug} className="flex items-center gap-2 text-gray-600 font-bold text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2">
 <span>{p.name}</span>
 </div>
 ))}
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

 {/* CTA Strip */}
 <section className="py-16 bg-brand-dark">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Get Your Horse Covered?</h2>
 <p className="text-green-200 text-lg mb-8">
 Connect with a specialist equine insurance broker — it&apos;s free, fast, and no obligation.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Link href="/contact/" className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-colors">
 Get Free Quote →
 </Link>
 <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="bg-brand hover:bg-brand-light text-white font-bold px-8 py-3 rounded-xl transition-colors border border-brand-light">
 Call {siteConfig.phone}
 </a>
 </div>
 </div>
 </section>
 </>
 )
}
