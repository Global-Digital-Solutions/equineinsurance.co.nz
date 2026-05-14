import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Thank You | Enquiry Received | EquineInsurance.co.nz',
  description: 'Thank you for your horse insurance enquiry. A specialist NZ equine insurance broker will contact you shortly.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✅</span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Enquiry Received!</h1>
        <p className="text-gray-600 text-xl leading-relaxed mb-8">
          Thank you for your horse insurance enquiry. A specialist NZ equine insurance broker will contact you within 24 hours to discuss your needs and provide comparative quotes.
        </p>
        <div className="bg-green-50 rounded-2xl p-6 border border-green-100 mb-8 text-left">
          <h2 className="font-bold text-gray-900 mb-3">What Happens Next</h2>
          <ol className="space-y-2">
            <li className="flex gap-3 text-gray-600 text-sm">
              <span className="w-5 h-5 rounded-full bg-brand text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              We review your horse type and cover requirements.
            </li>
            <li className="flex gap-3 text-gray-600 text-sm">
              <span className="w-5 h-5 rounded-full bg-brand text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              We match you with the most appropriate specialist equine insurance broker.
            </li>
            <li className="flex gap-3 text-gray-600 text-sm">
              <span className="w-5 h-5 rounded-full bg-brand text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              Your broker contacts you to discuss your needs and provide comparative quotes — no obligation.
            </li>
          </ol>
        </div>
        <p className="text-gray-500 text-sm mb-8">
          If you need to speak with someone urgently, call us on{' '}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="bg-brand hover:bg-brand-light text-white font-bold px-6 py-3 rounded-xl transition-colors">
            Back to Home
          </Link>
          <Link href="/blog/" className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors">
            Read Our Guides
          </Link>
        </div>
      </div>
    </div>
  )
}
