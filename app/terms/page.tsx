import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Terms of Use | EquineInsurance.co.nz',
  description: 'Terms of use for EquineInsurance.co.nz — the terms governing use of our horse insurance referral and comparison service.',
  alternates: { canonical: `${siteConfig.url}/terms/` },
}

export default function TermsPage() {
  return (
    <>
      <div className="bg-brand border-b border-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Terms of Use</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Terms of Use</h1>
          <p className="text-green-200 text-sm">Last updated: 10 May 2026</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using EquineInsurance.co.nz, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.</p>

          <h2>2. Nature of Service</h2>
          <p>EquineInsurance.co.nz is an information and referral service only. We provide general information about equine insurance products and connect users with licensed NZ insurance brokers and advisers. We do not provide financial advice, and we are not a registered financial adviser under the Financial Markets Conduct Act 2013 (FMCA).</p>
          <p>The licensed brokers and advisers we refer you to are regulated under the FMCA. Any financial advice you receive will be from those licensed advisers, not from EquineInsurance.co.nz.</p>

          <h2>3. No Financial Advice</h2>
          <p>The information on this website is general in nature and does not constitute financial advice. You should seek advice from a licensed financial adviser before making any insurance decisions. The brokers we connect you with are licensed to provide such advice.</p>

          <h2>4. Accuracy of Information</h2>
          <p>We endeavour to keep the information on this website accurate and up to date. However, insurance products, premiums, and policy terms change regularly. We make no warranty as to the accuracy, completeness, or currency of the information provided.</p>

          <h2>5. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We have no control over the content of those sites and accept no responsibility for them. Links do not constitute endorsement of any third-party products or services.</p>

          <h2>6. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, and design, is the property of EquineInsurance.co.nz or its licensors. You may not reproduce, distribute, or use our content without prior written permission.</p>

          <h2>7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by NZ law, EquineInsurance.co.nz and its operators are not liable for any loss or damage arising from your use of this website or reliance on information contained herein.</p>

          <h2>8. Governing Law</h2>
          <p>These Terms of Use are governed by the laws of New Zealand. Any disputes shall be subject to the exclusive jurisdiction of the New Zealand courts.</p>

          <h2>9. Changes to Terms</h2>
          <p>We may update these Terms of Use from time to time. Continued use of the website after changes constitutes acceptance of the updated terms.</p>

          <h2>10. Contact</h2>
          <p>Questions about these terms can be directed to <a href="mailto:hello@cover4you.co.nz">hello@cover4you.co.nz</a>.</p>
        </div>
      </div>
    </>
  )
}
