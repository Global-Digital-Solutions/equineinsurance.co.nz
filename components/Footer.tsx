import Link from 'next/link'
import { siteConfig } from '@/data/site-config'
import { coverageTypes } from '@/data/coverage-types'
import { horseTypes } from '@/data/horse-types'

export default function Footer() {
  return (
    <footer className="bg-brand border-t border-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + CTA */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-white font-extrabold text-xl">🐴</span>
              <span className="text-white font-extrabold text-lg">
                Equine<span className="text-green-300">Insurance</span>
              </span>
            </Link>
            <p className="text-green-200 text-sm leading-relaxed mb-4">
              NZ&apos;s specialist equine insurance comparison and referral service. Connecting horse owners with licensed brokers since 2020.
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors mb-4"
            >
              Get Free Quote
            </Link>
            <div className="text-sm text-green-200 space-y-1">
              <p>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  📞 {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  ✉️ {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          {/* Coverage Types */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Cover Types</h3>
            <ul className="space-y-2">
              {coverageTypes.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/types/${c.slug}/`}
                    className="text-green-200 hover:text-green-300 text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs">{c.icon}</span>
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/coverage/" className="text-green-300 hover:text-white text-sm font-medium">
                  All Cover Types →
                </Link>
              </li>
            </ul>
          </div>

          {/* Horse Types */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Horse Types</h3>
            <ul className="space-y-2">
              {horseTypes.map((h) => (
                <li key={h.slug}>
                  <Link
                    href={`/horses/${h.slug}/`}
                    className="text-green-200 hover:text-green-300 text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs">{h.icon}</span>
                    {h.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/horses/" className="text-green-300 hover:text-white text-sm font-medium">
                  All Horse Types →
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog / Resources */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/" className="text-green-200 hover:text-green-300 text-sm transition-colors">Blog & Guides</Link></li>
              <li><Link href="/blog/horse-insurance-nz-complete-guide/" className="text-green-200 hover:text-green-300 text-sm transition-colors">Complete Horse Insurance Guide</Link></li>
              <li><Link href="/blog/colic-insurance-nz-what-you-need-to-know/" className="text-green-200 hover:text-green-300 text-sm transition-colors">Colic Insurance Guide</Link></li>
              <li><Link href="/blog/how-much-does-horse-insurance-cost-nz/" className="text-green-200 hover:text-green-300 text-sm transition-colors">Insurance Cost Guide</Link></li>
              <li><Link href="/blog/equine-liability-insurance-nz/" className="text-green-200 hover:text-green-300 text-sm transition-colors">Liability Insurance Guide</Link></li>
              <li><Link href="/blog/racehorse-insurance-new-zealand/" className="text-green-200 hover:text-green-300 text-sm transition-colors">Racehorse Insurance Guide</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/compare/" className="text-green-200 hover:text-green-300 text-sm transition-colors">Compare Providers</Link></li>
              <li><Link href="/equine/cheap-horse-insurance/" className="text-green-200 hover:text-green-300 text-sm transition-colors">Cheap Horse Insurance</Link></li>
              <li><Link href="/equine/horse-insurance-cost-nz/" className="text-green-200 hover:text-green-300 text-sm transition-colors">Insurance Costs NZ</Link></li>
              <li><Link href="/equine/racehorse-insurance-nz/" className="text-green-200 hover:text-green-300 text-sm transition-colors">Racehorse Insurance</Link></li>
              <li><Link href="/faqs/" className="text-green-200 hover:text-green-300 text-sm transition-colors">FAQs</Link></li>
              <li><Link href="/about/" className="text-green-200 hover:text-green-300 text-sm transition-colors">About Us</Link></li>
              <li><Link href="/contact/" className="text-green-200 hover:text-green-300 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-green-300 text-xs leading-relaxed mb-4">
            <strong className="text-green-200">Disclaimer:</strong> EquineInsurance.co.nz is an information and referral service only. We connect you with licensed NZ insurance brokers and advisers who are regulated under the Financial Markets Conduct Act 2013 (FMCA). EquineInsurance.co.nz itself is not a registered financial adviser and does not provide financial advice. All insurance recommendations and quotations are provided by the referred licensed advisers, not by this website. See our{' '}
            <Link href="/disclaimer/" className="hover:text-white underline">full disclaimer</Link>.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-green-300 text-xs">
              © {new Date().getFullYear()} EquineInsurance.co.nz — All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <Link href="/privacy/" className="text-green-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms/" className="text-green-300 hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/disclaimer/" className="text-green-300 hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
