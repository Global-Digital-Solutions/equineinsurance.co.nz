import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { landingPages, getLandingPageBySlug } from '@/data/landing-pages'
import { siteConfig } from '@/data/site-config'

interface Props {
 params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
 return landingPages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params
 const page = getLandingPageBySlug(slug)
 if (!page) return {}
 return {
 title: page.metaTitle,
 description: page.metaDesc,
 alternates: { canonical: `${siteConfig.url}/equine/${slug}/` },
 }
}

export default async function LandingPage({ params }: Props) {
 const { slug } = await params
 const page = getLandingPageBySlug(slug)
 if (!page) notFound()

 const breadcrumbSchema = {
 '@context': 'https://schema.org',
 '@type': 'BreadcrumbList',
 itemListElement: [
 { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
 { '@type': 'ListItem', position: 2, name: page.title, item: `${siteConfig.url}/equine/${slug}/` },
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
 <span className="text-white">{page.title}</span>
 </nav>
 <h1 className="text-4xl font-extrabold text-white mb-4">{page.h1}</h1>
 <p className="text-green-100 text-xl max-w-2xl leading-relaxed">{page.intro}</p>
 </div>
 </div>

 <div className="bg-white py-14">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-3 gap-10">
 <div className="lg:col-span-2">
 <div className="space-y-10">
 {page.sections.map((s, i) => (
 <div key={i}>
 <h2 className="text-2xl font-extrabold text-gray-900 mb-4">{s.heading}</h2>
 <div className="text-gray-600 leading-relaxed space-y-3">
 {s.body.split('\n\n').map((para, j) => {
 if (para.startsWith('- ')) {
 const items = para.split('\n').filter(l => l.startsWith('- '))
 return (
 <ul key={j} className="list-disc list-inside space-y-1">
 {items.map((item, k) => (
 <li key={k} className="text-gray-600">
 {item.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '$1')}
 </li>
 ))}
 </ul>
 )
 }
 return (
 <p key={j} className="text-gray-600">
 {para.replace(/\*\*(.*?)\*\*/g, '$1')}
 </p>
 )
 })}
 </div>
 </div>
 ))}
 </div>

 <div className="mt-10 bg-green-50 rounded-2xl p-8 border border-green-100">
 <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Ready to Get Covered?</h2>
 <p className="text-gray-600 mb-6">Use our free service to connect with a specialist equine insurance broker — no cost, no obligation.</p>
 <Link href="/contact/" className="inline-block bg-brand hover:bg-brand-light text-white font-bold px-6 py-3 rounded-xl transition-colors">
 Get Quote →
 </Link>
 </div>
 </div>

 <div className="space-y-6">
 <QuoteForm compact />
 <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3">Related Resources</h3>
 <ul className="space-y-2">
 <li><Link href="/coverage/" className="text-green-600 hover:text-green-700 text-sm">All Cover Types →</Link></li>
 <li><Link href="/horses/" className="text-green-600 hover:text-green-700 text-sm">All Horse Types →</Link></li>
 <li><Link href="/compare/" className="text-green-600 hover:text-green-700 text-sm">Compare Providers →</Link></li>
 <li><Link href="/faqs/" className="text-green-600 hover:text-green-700 text-sm">Insurance FAQs →</Link></li>
 <li><Link href="/blog/" className="text-green-600 hover:text-green-700 text-sm">Blog & Guides →</Link></li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 </>
 )
}
