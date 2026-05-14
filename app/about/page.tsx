import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
 title: 'About EquineInsurance.co.nz | NZ Horse Insurance Referral Service',
 description: 'About EquineInsurance.co.nz — NZ\'s specialist equine insurance comparison and referral service. We connect horse owners with licensed insurance brokers.',
 alternates: { canonical: `${siteConfig.url}/about/` },
}

const differences = [
 {
 icon: '🐴',
 title: 'Equine-Only Focus',
 desc: 'We only deal with horse and equine insurance — not home, car, or pet insurance. That focus means we understand equine risks better than any generalist insurer.',
 },
 {
 icon: '🤝',
 title: 'Licensed Broker Network',
 desc: 'Every broker in our network is licensed under the FMCA and specialises in equine insurance. You get genuine expertise, not a call centre script.',
 },
 {
 icon: '🆓',
 title: 'Truly Free Service',
 desc: 'There is no catch. We are paid a referral fee by brokers — you pay nothing extra and the competition between brokers keeps pricing competitive.',
 },
 {
 icon: '⚡',
 title: 'Fast Turnaround',
 desc: 'We aim to connect you with a broker within 24 hours of your enquiry. Standard cover can often be arranged quickly for straightforward requirements.',
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
 NZ&apos;s specialist equine insurance comparison service — connecting horse owners with licensed insurance brokers to find the best cover at competitive prices.
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
 EquineInsurance.co.nz was built to fix that. We provide clear, unbiased information about equine insurance options for every horse type, and connect you with specialist brokers who can arrange the right cover quickly and efficiently.
 </p>
 <p className="text-gray-600 text-lg leading-relaxed">
 Our goal is simple: get horse owners speaking with the right broker, so they end up with cover that actually protects their investment — not just the cheapest policy that leaves critical gaps.
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
 <h2 className="text-2xl font-extrabold text-gray-900 mb-4">How Our Service Works</h2>
 <p className="text-gray-600 leading-relaxed mb-4">
 EquineInsurance.co.nz is a referral service. We do not sell insurance directly or act as a financial adviser. Instead, we connect you with licensed insurance brokers who are regulated under the Financial Markets Conduct Act 2013.
 </p>
 <p className="text-gray-600 leading-relaxed mb-4">
 When you submit a quote request, we assess your horse type and cover needs, then match you with the most appropriate specialist equine insurance broker in our network. That broker contacts you to discuss your requirements and provides comparative quotes from multiple insurers.
 </p>
 <p className="text-gray-600 leading-relaxed">
 We receive a referral fee from the broker if you proceed — you pay nothing additional. The broker is remunerated by commission from the insurer.
 </p>
 </section>

 <section className="bg-brand rounded-2xl p-8 text-center">
 <h2 className="text-2xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
 <p className="text-green-200 mb-6">Connect with a specialist equine insurance broker — it takes 2 minutes and costs nothing.</p>
 <div className="flex flex-wrap justify-center gap-4">
 <Link href="/contact/" className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-colors">
 Get Quote →
 </Link>
 </div>
 </section>
 </div>
 </div>
 </>
 )
}
