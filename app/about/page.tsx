import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
 title: { absolute: 'About EquineInsurance.co.nz | Horse Insurance NZ' },
 description: 'About EquineInsurance.co.nz — an independent equine insurance information site operated by Cover4You. General information about horse insurance in New Zealand.',
 alternates: { canonical: `${siteConfig.url}/about/` },
}

const differences = [
 {
 icon: '🐴',
 title: 'Equine-Only Focus',
 desc: 'We only deal with horse and equine insurance — not home, car, or pet insurance. That focus means we understand equine risks better than any generalist insurer.',
 },
 {
 icon: '🔍',
 title: 'Independent',
 desc: 'We are not owned by or affiliated with any insurer or broker. The information on this site is a starting point for your research.',
 },
 {
 icon: '🇳🇿',
 title: 'NZ Owned',
 desc: 'EquineInsurance.co.nz is operated by Cover4You, a New Zealand business.',
 },
 {
 icon: '📋',
 title: 'Claims Guidance',
 desc: 'Information on how to make a claim is available on this site to help policyholders from any provider find the right process.',
 },
]

export default function AboutPage() {
 const breadcrumbSchema = {
 '@context': 'https://schema.org',
 '@type': 'BreadcrumbList',
 itemListElement: [
 { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
 { '@type': 'ListItem', position: 2, name: 'About', item: `${siteConfig.url}/about/` },
 ],
 }

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

 <div className="bg-brand border-b border-brand-dark">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
 <nav className="text-sm text-green-300 mb-4">
 <Link href="/" className="hover:text-white">Home</Link>
 <span className="mx-2">›</span>
 <span className="text-white">About</span>
 </nav>
 <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Who We Are</span>
 <h1 className="text-4xl font-extrabold text-white mb-4">About EquineInsurance.co.nz</h1>
 <p className="text-green-100 text-xl leading-relaxed max-w-2xl">
 Independent equine insurance information for horse owners in New Zealand — general guidance, provider overviews, and resources to help you make informed decisions.
 </p>
 </div>
 </div>

 <div className="bg-white py-14">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <section className="mb-14">
 <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
 <p className="text-gray-600 text-lg leading-relaxed mb-4">
 horse owners invest significant time, money, and emotional energy in their horses — but many lack adequate insurance because they do not know what they need, or have not had time to compare specialist options.
 </p>
 <p className="text-gray-600 text-lg leading-relaxed mb-4">
 EquineInsurance.co.nz was built to fix that. We provide clear, unbiased information about equine insurance options for every horse type, so you can research your options before speaking with a specialist equine insurance broker.
 </p>
 <p className="text-gray-600 text-lg leading-relaxed">
 Our goal is simple: give horse owners the information they need to have a productive conversation with a broker, so they end up with cover that actually protects their investment — not just the cheapest policy that leaves critical gaps.
 </p>
 </section>

 <section className="mb-14">
 <h2 className="text-2xl font-extrabold text-gray-900 mb-8">How We&apos;re Different</h2>
 <div className="grid sm:grid-cols-2 gap-6">
 {differences.map((d) => (
 <div key={d.title} className="flex gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
 <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 text-2xl">
 {d.icon}
 </div>
 <div>
 <h3 className="font-bold text-gray-900 mb-1">{d.title}</h3>
 <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </section>

 <section className="mb-14">
 <h2 className="text-2xl font-extrabold text-gray-900 mb-4">How This Site Works</h2>
 <p className="text-gray-600 leading-relaxed mb-4">
 EquineInsurance.co.nz is an independent information site operated by Cover4You. We publish general information about equine insurance in New Zealand. We are not an insurer, a broker, or a licensed financial adviser, and we do not arrange cover or provide advice.
 </p>
 <p className="text-gray-600 leading-relaxed mb-4">
 Use the information on this site as a starting point for your research. To arrange cover, search the IBANZ directory for a specialist equine insurance broker, or contact an insurer directly. Any broker you engage will be regulated under the Financial Markets Conduct Act 2013.
 </p>
 <p className="text-gray-600 leading-relaxed">
 Anyone giving you insurance advice should hold a licence under the Financial Markets Conduct Act 2013. You can verify this on the Financial Service Providers Register at fsp-register.companiesoffice.govt.nz.
 </p>
 </section>

 <section className="bg-brand rounded-2xl p-8 text-center">
 <h2 className="text-2xl font-extrabold text-white mb-4">Looking for a Horse Insurance Specialist?</h2>
 <p className="text-green-200 mb-6">Find a licensed specialist broker, check the FSP register, or go direct to an insurer.</p>
 <div className="flex flex-wrap justify-center gap-4">
 <Link href="/contact/" className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-colors">
 Find a Specialist →
 </Link>
 </div>
 </section>
 </div>
 </div>
 </>
 )
}
