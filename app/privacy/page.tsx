import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy | EquineInsurance.co.nz',
  description: 'Privacy policy for EquineInsurance.co.nz — how we collect, use, and protect your personal information in accordance with the NZ Privacy Act 2020.',
  alternates: { canonical: `${siteConfig.url}/privacy/` },
}

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-brand border-b border-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-green-200 text-sm">Last updated: 10 May 2026</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2>1. Introduction</h2>
          <p>EquineInsurance.co.nz (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information in accordance with the New Zealand Privacy Act 2020.</p>

          <h2>2. Information We Collect</h2>
          <p>We collect information you provide when you submit an enquiry or quote request, including your name, email address, phone number, and details about your horse and insurance requirements.</p>
          <p>We may also collect information automatically when you visit our website, including IP address, browser type, pages visited, and time spent on pages.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Connect you with suitable licensed NZ insurance brokers</li>
            <li>Respond to your enquiries</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Sharing Your Information</h2>
          <p>We will share your personal information with licensed NZ insurance brokers in our referral network for the purpose of providing you with insurance quotes and advice. By submitting an enquiry, you consent to this sharing.</p>
          <p>We do not sell your personal information to third parties for marketing purposes.</p>

          <h2>5. Data Security</h2>
          <p>We take reasonable steps to protect your personal information from unauthorised access, use, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>

          <h2>6. Your Rights</h2>
          <p>Under the NZ Privacy Act 2020, you have the right to access your personal information and request corrections. To exercise these rights, contact us at <a href="mailto:hello@cover4you.co.nz">hello@cover4you.co.nz</a>.</p>

          <h2>7. Cookies</h2>
          <p>Our website uses cookies to improve your browsing experience. You can control cookies through your browser settings. Disabling cookies may affect some website functionality.</p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting an updated policy on this page with a revised date.</p>

          <h2>9. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or how we handle your personal information, please contact us at <a href="mailto:hello@cover4you.co.nz">hello@cover4you.co.nz</a>.</p>
        </div>
      </div>
    </>
  )
}
