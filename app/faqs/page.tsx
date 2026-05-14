import type { Metadata } from 'next'
import Link from 'next/link'
import { faqs } from '@/data/faqs'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
 title: 'Horse Insurance FAQs NZ | Equine Insurance Questions Answered | EquineInsurance.co.nz',
 description: 'Answers to common horse insurance questions — colic cover, premiums, pre-existing conditions, ACC, and more. Get expert answers from equine specialists.',
 alternates: { canonical: `${siteConfig.url}/faqs/` },
}

export default function FAQsPage() {
 const faqSchema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: faqs.map((faq) => ({
 '@type': 'Question',
 name: faq.q,
 acceptedAnswer: {
 '@type': 'Answer',
 text: faq.a,
 },
 })),
 }

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

 <div className="bg-brand border-b border-brand-dark">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
 <nav className="text-sm text-green-300 mb-4">
 <Link href="/" className="hover:text-white">Home</Link>
 <span className="mx-2">›</span>
 <span className="text-white">FAQs</span>
 </nav>
 <h1 className="text-4xl font-extrabold text-white mb-4">Horse Insurance FAQs</h1>
 <p className="text-green-100 text-xl leading-relaxed max-w-2xl">
 Answers to the most common questions horse owners have about equine insurance.
 </p>
 </div>
 </div>

 <div className="bg-white py-14">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="space-y-4 mb-14">
 {faqs.map((faq, i) => (
 <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
 <h2 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h2>
 <p className="text-gray-600 leading-relaxed">{faq.a}</p>
 </div>
 ))}
 </div>

 <div className="bg-brand rounded-2xl p-8 text-center">
 <h2 className="text-2xl font-extrabold text-white mb-4">Still Have Questions?</h2>
 <p className="text-green-200 mb-6">
 Our specialist equine insurance brokers are happy to answer any questions about horse insurance. Contact us for a free, no-obligation chat.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Link href="/contact/" className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
 Get in Touch →
 </Link>
 </div>
 </div>
 </div>
 </div>
 </>
 )
}
