import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Disclaimer | EquineInsurance.co.nz',
  description: 'Full disclaimer for EquineInsurance.co.nz — our status as a referral service, not a financial adviser, and important information about our service.',
  alternates: { canonical: `${siteConfig.url}/disclaimer/` },
}

export default function DisclaimerPage() {
  return (
    <>
      <div className="bg-brand border-b border-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Disclaimer</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Disclaimer</h1>
          <p className="text-green-200 text-sm">Last updated: 10 May 2026</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2>Referral Service — Not a Financial Adviser</h2>
          <p>EquineInsurance.co.nz is an information and referral service only. We are not a licensed financial adviser, and we do not provide financial advice, insurance recommendations, or insurance products.</p>
          <p>EquineInsurance.co.nz is not regulated under the Financial Markets Conduct Act 2013 (FMCA) as a financial advice provider. Only the licensed brokers and advisers we refer you to are regulated under the FMCA.</p>

          <h2>What We Do</h2>
          <p>EquineInsurance.co.nz provides general information about equine insurance products available in New Zealand and connects users who request a quote with licensed NZ insurance brokers and advisers. We act as an introducer only — we do not assess your circumstances, recommend specific products, or have any involvement in the advice or policy issuance process.</p>

          <h2>What the Referred Advisers Do</h2>
          <p>The licensed brokers and advisers in our referral network are regulated under the Financial Markets Conduct Act 2013. They are authorised to provide financial advice about insurance products. Any advice, quotations, or policy recommendations you receive will come from those licensed advisers, not from EquineInsurance.co.nz.</p>

          <h2>General Information Only</h2>
          <p>All information published on EquineInsurance.co.nz is general in nature and is provided for informational purposes only. It does not constitute financial, legal, or professional advice. The information may not be applicable to your individual circumstances.</p>
          <p>We endeavour to keep information accurate, but insurance products, premiums, coverage terms, and regulatory requirements change regularly. We make no warranty as to the accuracy, completeness, or currency of information on this site.</p>

          <h2>No Liability</h2>
          <p>To the maximum extent permitted by applicable law, EquineInsurance.co.nz and its operators, directors, employees, and agents are not liable for any loss, damage, or expense of any kind arising from your use of this website or reliance on information published here, including any decisions about insurance cover made on the basis of information on this site.</p>

          <h2>Referral Fee Disclosure</h2>
          <p>EquineInsurance.co.nz may receive a referral fee from licensed brokers when we introduce a user who subsequently purchases an insurance product. This fee is paid by the broker, not by you. You pay no additional cost as a result of using our referral service.</p>

          <h2>Contact</h2>
          <p>If you have questions about this disclaimer or our service, please contact us at <a href="mailto:hello@cover4you.co.nz">hello@cover4you.co.nz</a>.</p>
        </div>
      </div>
    </>
  )
}
