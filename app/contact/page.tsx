import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Horse Insurance Quote | EquineInsurance.co.nz',
  description: 'Contact EquineInsurance.co.nz for a free horse insurance quote. Connect with licensed NZ equine insurance brokers — no obligation.',
  alternates: { canonical: `${siteConfig.url}/contact/` },
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-brand border-b border-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Contact</span>
          </nav>
          <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Get in Touch</span>
          <h1 className="text-4xl font-extrabold text-white mb-4">Get a Free Horse Insurance Quote</h1>
          <p className="text-green-100 text-xl leading-relaxed max-w-2xl">
            Fill in the form below and we will connect you with a specialist NZ equine insurance broker within 24 hours — no obligation.
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <QuoteForm />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-brand font-bold hover:text-brand-light">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-brand font-bold hover:text-brand-light">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇳🇿</span>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-900 font-medium">New Zealand — serving all regions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <p className="text-gray-600 text-sm">We receive your enquiry and review your horse type and cover requirements.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <p className="text-gray-600 text-sm">We match you with the most appropriate specialist equine insurance broker in our NZ network.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <p className="text-gray-600 text-sm">The broker contacts you within 24 hours to discuss your needs and provide comparative quotes.</p>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">No Obligation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our service is completely free to use. There is no obligation to proceed with any quote provided. The broker only earns a commission if you choose to take out a policy — and that commission is paid by the insurer, not by you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
