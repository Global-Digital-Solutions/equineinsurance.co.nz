import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy | EquineInsurance.co.nz',
  description: 'Privacy Policy for EquineInsurance.co.nz — how we collect, use, and protect your personal information under the Privacy Act 2020.',
  alternates: { canonical: `${siteConfig.url}/privacy/` },
}

const collectItems = [
  'Name and email address',
  'Information about your horse type, value, and insurance requirements',
  'Technical information about your device and browser (via analytics tools)',
  'IP address and general location data',
]

const useItems = [
  'Match you with appropriate specialist equine insurance brokers in our referral network',
  'Share your details with the selected broker so they can contact you with quotes and advice',
  'Improve our website and services using aggregated, anonymised analytics data',
  'Comply with legal obligations',
]

const rightsItems = [
  'Request access to personal information we hold about you',
  'Request correction of inaccurate personal information',
  'Complain to the Privacy Commissioner if you believe we have breached the Privacy Act',
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#2c4a2e' }} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Use', href: '/terms/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
]

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gray-900 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-white mb-1">Privacy Policy</h1>
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
                <h2 className="text-xl font-bold text-gray-900 mb-2">1. Who We Are</h2>
                <p className="text-sm">EquineInsurance.co.nz is operated as a specialist equine insurance referral and information service for horse owners. Our website is located at <a href={siteConfig.url} style={{ color: '#2c4a2e' }}>{siteConfig.url}</a> and our contact email is <a href={`mailto:${siteConfig.email}`} style={{ color: '#2c4a2e' }}>{siteConfig.email}</a>.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">2. Our Commitment to Your Privacy</h2>
                <p className="text-sm">We are committed to protecting your personal information in accordance with the Privacy Act 2020 (NZ). This policy explains what information we collect, why we collect it, how we use it, and your rights in relation to it.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">3. Information We Collect</h2>
                <p className="text-sm mb-3">When you use our website or submit a quote request, we may collect:</p>
                <ul className="space-y-2">
                  {collectItems.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <CheckIcon />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">4. How We Use Your Information</h2>
                <p className="text-sm mb-3">We use your personal information to:</p>
                <ul className="space-y-2">
                  {useItems.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <CheckIcon />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">5. Sharing Your Information</h2>
                <p className="text-sm mb-2">We will share your personal information with the licensed insurance broker we match you with. That broker will use your information to provide insurance quotes and services. They have their own privacy obligations under the Privacy Act 2020 and their Financial Advice Provider (FAP) licence conditions.</p>
                <p className="text-sm">We do not sell your personal information to third parties for marketing purposes.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">6. Third-Party Services</h2>
                <p className="text-sm">Our website uses third-party services including Google Analytics (for website analytics). These services may collect information about your visit in accordance with their own privacy policies. You can opt out of Google Analytics tracking using the Google Analytics Opt-out Browser Add-on.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">7. Data Retention</h2>
                <p className="text-sm">We retain your personal information for as long as necessary to provide our services and comply with our legal obligations. Enquiry data is typically retained for up to 7 years for record-keeping purposes.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">8. Your Rights Under the Privacy Act 2020</h2>
                <p className="text-sm mb-3">Under the Privacy Act 2020, you have the right to:</p>
                <ul className="space-y-2">
                  {rightsItems.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <CheckIcon />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm mt-3">To exercise these rights, contact us at <a href={`mailto:${siteConfig.email}`} style={{ color: '#2c4a2e' }}>{siteConfig.email}</a>.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">9. Cookies</h2>
                <p className="text-sm">Our website uses cookies to improve your experience and enable analytics. By continuing to use our site, you consent to our use of cookies. You can disable cookies in your browser settings, though this may affect website functionality.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">10. Contact Us</h2>
                <p className="text-sm">For privacy-related enquiries, contact us at: <a href={`mailto:${siteConfig.email}`} style={{ color: '#2c4a2e' }}>{siteConfig.email}</a>.</p>
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
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Your Data is Safe</h3>
                <p className="text-gray-600 text-sm leading-relaxed">We never sell your personal information. Your details are only shared with the broker we match you with — no third-party marketing.</p>
              </div>

              {/* Questions card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Questions?</h3>
                <p className="text-gray-600 text-sm mb-3">For any privacy-related questions, please get in touch.</p>
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
