import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Terms of Use | EquineInsurance.co.nz',
  description: 'Terms of Use for EquineInsurance.co.nz — the terms governing your use of our equine insurance referral and information service.',
  alternates: { canonical: `${siteConfig.url}/terms/` },
}

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Use', href: '/terms/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
]

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gray-900 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Terms of Use</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-white mb-1">Terms of Use</h1>
          <p className="text-gray-400 text-sm">Last updated: 14 May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-7 text-gray-700 leading-relaxed">

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">1. Acceptance of Terms</h2>
                <p className="text-sm">By accessing and using EquineInsurance.co.nz (the &quot;Website&quot;), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Website.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">2. Nature of Service</h2>
                <p className="text-sm mb-2">EquineInsurance.co.nz is an information and referral service only. We do not provide financial advice, act as an insurance broker, or sell insurance products directly. We connect users with licensed insurance brokers and advisers who hold Financial Advice Provider (FAP) licences under the Financial Markets Conduct Act 2013.</p>
                <p className="text-sm">The information on this website is general in nature and does not constitute financial advice. You should seek advice from a licensed financial adviser before making any insurance decisions.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">3. Accuracy of Information</h2>
                <p className="text-sm">We endeavour to keep the information on this Website accurate and up to date. However, we make no representation or warranty as to the accuracy, completeness, or currency of any information on the Website. Insurance products, premiums, and requirements can change — always confirm current details with the broker or insurer.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">4. Referral Process</h2>
                <p className="text-sm">When you submit a quote request, you consent to us sharing your contact details and insurance requirements with a licensed insurance broker in our referral network. That broker may contact you by phone or email to discuss your requirements. We may receive a referral fee if you proceed with a policy arranged through the broker.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">5. Third-Party Links and Services</h2>
                <p className="text-sm">This Website may contain links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of those websites. Referral to a broker through this Website does not constitute an endorsement of that broker&apos;s services beyond matching you based on your stated requirements.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">6. Limitation of Liability</h2>
                <p className="text-sm">To the maximum extent permitted by law, EquineInsurance.co.nz and its operators shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of the Website or from any insurance decisions made on the basis of information found on this Website.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">7. Intellectual Property</h2>
                <p className="text-sm">All content on this Website, including text, graphics, and design, is owned by or licensed to EquineInsurance.co.nz. You may not reproduce, distribute, or use this content without written permission, except for personal, non-commercial purposes.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">8. Governing Law</h2>
                <p className="text-sm">These Terms of Use are governed by the laws of New Zealand. Any disputes will be subject to the exclusive jurisdiction of the New Zealand courts.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">9. Changes to Terms</h2>
                <p className="text-sm">We may update these Terms of Use from time to time. Continued use of the Website after changes are posted constitutes acceptance of the revised terms.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">10. Contact</h2>
                <p className="text-sm">For questions about these terms, contact us at <a href={`mailto:${siteConfig.email}`} style={{ color: '#2c4a2e' }}>{siteConfig.email}</a>.</p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-5">

              {/* Legal Pages nav */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">Legal Pages</h3>
                <ul className="space-y-2">
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} style={{ color: '#2c4a2e' }} className="text-sm font-medium hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlight card */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Referral Service</h3>
                <p className="text-gray-600 text-sm leading-relaxed">We are an information and referral service — not an insurer or broker. You pay nothing to use our service. The brokers we refer you to hold FAP licences under the FMCA.</p>
              </div>

              {/* Questions card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Questions?</h3>
                <p className="text-gray-600 text-sm mb-3">For any questions about these terms, please get in touch.</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-block text-sm font-bold text-white px-4 py-2 rounded-xl transition-colors"
                  style={{ backgroundColor: '#2c4a2e' }}
                >
                  Email Us
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
