import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Disclaimer | EquineInsurance.co.nz',
  description: 'Disclaimer for EquineInsurance.co.nz — important information about our referral service, our relationship with brokers, and what we are and are not.',
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
          <h1 className="text-4xl font-extrabold text-white mb-2">Disclaimer</h1>
          <p className="text-green-200 text-sm">Last updated: 14 May 2026</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
            <p className="font-bold text-gray-900 mb-2">Important Notice</p>
            <p className="text-gray-700 text-sm leading-relaxed">EquineInsurance.co.nz is an information and referral service. We are NOT a licensed financial adviser, insurance broker, or insurer. We do not provide financial advice. All information on this website is general in nature only. Speak with a licensed broker before making any insurance decisions.</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2>1. We Are a Referral Service, Not a Regulated Financial Adviser</h2>
            <p>EquineInsurance.co.nz operates as a referral and information service connecting horse owners with licensed insurance brokers. This website does not provide financial advice and is not regulated under the Financial Markets Conduct Act 2013 (FMCA) as a financial advice provider.</p>
            <p>The licensed insurance brokers and financial advisers we refer you to are regulated under the FMCA. They hold Financial Advice Provider (FAP) licences issued by the Financial Markets Authority (FMA) and are required to comply with the obligations of that licensing regime, including providing personalised financial advice and disclosing any conflicts of interest.</p>

            <h2>2. General Information Only</h2>
            <p>All information on this website about equine insurance products, premiums, coverage types, and provider comparisons is general information only. It is not tailored to your individual circumstances and should not be relied upon as financial advice.</p>
            <p>Equine insurance needs vary significantly depending on the type of horse, its value, its use, and your individual circumstances. Always seek advice from a licensed financial adviser or specialist equine insurance broker before making insurance decisions.</p>

            <h2>3. Premium and Cost Estimates</h2>
            <p>Any premium ranges or cost estimates mentioned on this website are indicative only, based on typical market conditions at the time of writing. Actual premiums will vary based on your horse&apos;s type, value, age, use, health history, and the specific insurer. Always obtain a formal quote from a licensed broker before making any decision.</p>

            <h2>4. Provider Information</h2>
            <p>Information about insurance providers on this website is based on publicly available information and is provided for general comparison purposes only. It does not constitute an endorsement of any provider. Provider offerings, ratings, and pricing change over time — always verify current information with the provider or a licensed broker.</p>

            <h2>5. Veterinary and Horse Health Information</h2>
            <p>Any general information about horse health, common conditions, or veterinary costs on this website is provided for context only. It does not constitute veterinary advice. Always consult a qualified veterinarian for advice specific to your horse&apos;s health and treatment requirements.</p>

            <h2>6. Remuneration Disclosure</h2>
            <p>EquineInsurance.co.nz may receive a referral fee from licensed insurance brokers when we introduce a user who subsequently purchases an insurance policy. This fee is paid by the broker, not by you — you pay no additional cost as a result of using our referral service. The brokers we refer you to will provide their own remuneration disclosure as required under the FMCA.</p>

            <h2>7. No Warranty</h2>
            <p>To the maximum extent permitted by law, EquineInsurance.co.nz makes no warranties, express or implied, regarding the accuracy, completeness, or suitability of information on this website for any particular purpose. We endeavour to keep information current but cannot guarantee it reflects the latest product terms, premiums, or regulatory requirements.</p>

            <h2>8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable New Zealand law, EquineInsurance.co.nz and its operators, directors, employees, and agents are not liable for any loss, damage, or expense of any kind arising from your use of this website or reliance on information published here, including any decisions about insurance cover made on the basis of information on this site.</p>

            <h2>9. Contact</h2>
            <p>For any questions about this disclaimer or our service, contact us at <a href={`mailto:${siteConfig.email}`} className="text-green-600 hover:text-green-700">{siteConfig.email}</a>.</p>
          </div>
        </div>
      </div>
    </>
  )
}
