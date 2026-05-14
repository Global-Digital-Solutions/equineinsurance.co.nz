import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Get a Horse Insurance Quote | Contact EquineInsurance.co.nz',
  description: 'Get a free horse insurance quote from a specialist equine broker. Mortality cover, vet fees, transit, liability and loss of use. No obligation, 24hr response.',
  alternates: { canonical: `${siteConfig.url}/contact/` },
}

const benefits = [
  {
    icon: '⏱️',
    title: 'Save Time',
    desc: 'One short form connects you to a specialist equine broker who accesses quotes from multiple insurers on your behalf — no hours of research or confusing policy wording.',
  },
  {
    icon: '💰',
    title: 'Better Value Cover',
    desc: 'Specialist brokers access rates and policy terms not available direct to the public. More importantly, they make sure your horse is covered for the right amount — no underinsurance.',
  },
  {
    icon: '🎯',
    title: 'Tailored to Your Horse',
    desc: 'A sport horse has different risks to a racehorse or a broodmare. Our brokers understand equine insurance inside out and tailor cover to your horse\'s actual use and value.',
  },
  {
    icon: '🛡️',
    title: 'Licensed Advisers',
    desc: 'Every broker in our network holds a Financial Advice Provider licence under the Financial Markets Authority. Regulated, qualified advice — not a call centre script.',
  },
]

const steps = [
  { num: '1', title: 'Tell Us About Your Horse', desc: 'Fill in the form — horse type, cover needed, and approximate value. Takes under 2 minutes.' },
  { num: '2', title: 'We Match You With a Specialist', desc: 'We connect you with an equine insurance broker who understands the specific risks for your horse type and use.' },
  { num: '3', title: 'Get Comparative Quotes', desc: 'Your broker sources quotes from multiple equine insurers — you compare options and choose what suits your situation.' },
  { num: '4', title: 'Get Covered', desc: 'Once you\'re happy, cover is arranged quickly. Most horse owners can have a policy in place within 24–48 hours.' },
]

const stats = [
  { value: '5+', label: 'Insurers compared' },
  { value: 'All breeds', label: 'Covered' },
  { value: '24hrs', label: 'Broker response' },
  { value: '100%', label: 'Free service' },
]

const faqs = [
  {
    q: 'Is this service really free?',
    a: 'Yes. Our referral service costs you nothing. We receive a fee from the broker if you proceed with a policy — you pay only the policy premium, and the broker\'s commission is included in that, just as it would be buying direct.',
  },
  {
    q: 'How quickly will a broker contact me?',
    a: 'Most horse owners hear from a broker within 24 business hours. Urgent requests for horses about to travel or compete can often be expedited — mention this in the form.',
  },
  {
    q: 'Will I be pressured to buy a policy?',
    a: 'No. There is zero obligation. You can take the quotes away, compare them at your own pace, and come back when you\'re ready. Our brokers are advisers, not salespeople.',
  },
  {
    q: 'What types of horses and cover can you arrange?',
    a: 'All breeds and disciplines — sport horses, thoroughbreds, racehorses, breeding stock, and leisure horses. Cover types include mortality, major medical/vet fees, transit, liability, and loss of use.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero with form */}
      <section
        className="relative py-16 lg:py-24"
        style={{
          backgroundImage: 'url(/images/equine-hero-8.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/70 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2 text-white/40">›</span>
            <span className="text-white font-medium">Get a Quote</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
            {/* Left — value proposition */}
            <div className="flex-1 lg:max-w-lg">
              <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                Free Broker Matching
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                Get the Right <span className="text-green-300">Horse Insurance</span> — Fast
              </h1>
              <p className="text-green-100 text-xl leading-relaxed mb-8">
                Our free service connects you with a specialist equine insurance broker who knows your horse type and finds the right cover — no hours of research or confusing policies.
              </p>

              {/* Key benefits list */}
              <div className="space-y-3 mb-8">
                {[
                  'Quotes from multiple top equine insurers',
                  'Cover tailored to your horse\'s breed and use',
                  'Mortality, vet fees, transit, liability & loss of use',
                  'Licensed advisers — zero obligation',
                  'Most horses covered within 24–48 hours',
                ].map((b) => (
                  <div key={b} className="flex items-center gap-3 text-white font-medium text-sm">
                    <span className="w-5 h-5 rounded-full bg-green-600 text-white text-xs flex items-center justify-center flex-shrink-0 font-bold shadow-md">✓</span>
                    {b}
                  </div>
                ))}
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-center backdrop-blur-sm">
                    <div className="text-green-300 font-extrabold text-xl leading-tight">{s.value}</div>
                    <div className="text-green-100 text-xs mt-0.5 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="w-full lg:w-[420px] lg:flex-shrink-0">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-green-600 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
            {[
              '✓ Licensed & FMA-Regulated Brokers',
              '✓ 100% Free Service',
              '✓ No Obligation',
              '✓ All Horse Types Covered',
              '✓ Locally Based',
              '✓ 24hr Broker Response',
            ].map((t) => (
              <span key={t} className="text-white text-xs font-bold tracking-wide">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Why use us — 4 benefit cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Why Horse Owners Choose Us</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">The Smarter Way to Insure Your Horse</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Going direct to an insurer means one quote. Going through us means a specialist equine broker comparing the whole market — on your behalf, at no cost to you.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">How It Works</span>
            <h2 className="text-3xl font-extrabold text-white mb-4">Covered in 4 Simple Steps</h2>
            <p className="text-green-200 text-lg max-w-2xl mx-auto">From enquiry to policy — most horse owners have cover in place within 24–48 hours.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 h-0.5 bg-green-500/30 z-0" style={{ width: 'calc(100% - 3.5rem)', left: '3.5rem' }} />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-green-600 text-white font-extrabold text-xl flex items-center justify-center mb-5 shadow-lg shadow-green-900/30">
                    {s.num}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-green-200 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#second-form" className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg">
              Get Your Quote — It&apos;s Free →
            </a>
          </div>
        </div>
      </section>

      {/* Direct vs broker comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Expert Matching</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-5">Your Broker Works For <em>You</em> — Not the Insurer</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Unlike going direct to an insurer, a broker&apos;s job is to find the best outcome for you. They compare policies from multiple equine insurers, explain the differences in plain English, and recommend cover that actually matches your horse&apos;s risk profile and value.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Many horse owners either underinsure — and face a shortfall at claim time — or pay for cover they don&apos;t need. A specialist equine broker makes sure neither happens.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Insurers compared', value: '5+ major providers' },
                  { label: 'Horse types covered', value: 'All breeds & uses' },
                  { label: 'Average response', value: 'Within 24 hours' },
                  { label: 'Cost to you', value: '$0 — completely free' },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="font-extrabold text-gray-900 text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 font-bold text-sm">✗</span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-1">Going Direct to an Insurer</h3>
                    <ul className="space-y-1.5 text-sm text-gray-500">
                      <li>One insurer, one set of rates</li>
                      <li>Generic policy — not tailored to your horse type</li>
                      <li>No advocate at claim time</li>
                      <li>Hours researching, comparing, reading fine print</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 rounded-2xl border-2 border-green-300 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-1">Using EquineInsurance.co.nz</h3>
                    <ul className="space-y-1.5 text-sm text-gray-700">
                      <li className="flex items-center gap-2"><span className="text-green-600">›</span> Multiple insurers compared on your behalf</li>
                      <li className="flex items-center gap-2"><span className="text-green-600">›</span> Cover tailored to your horse&apos;s breed and use</li>
                      <li className="flex items-center gap-2"><span className="text-green-600">›</span> Broker advocates for you if a claim arises</li>
                      <li className="flex items-center gap-2"><span className="text-green-600">›</span> 2 minutes to fill in the form — broker does the rest</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 rounded-2xl p-6">
                <p className="text-white font-extrabold text-sm mb-4">Why trust our service?</p>
                <div className="space-y-3">
                  {[
                    { icon: '🏆', text: 'All brokers licensed under the FMA' },
                    { icon: '💸', text: 'Completely free — no hidden fees' },
                    { icon: '🔒', text: 'Your data is never sold or shared' },
                    { icon: '🎯', text: 'Matched to specialists in equine insurance' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-sm">
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second form — anchored */}
      <section id="second-form" className="py-20 bg-brand-dark scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left — reassurance */}
            <div className="flex-1">
              <span className="inline-block bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">Get Matched Now</span>
              <h2 className="text-3xl font-extrabold text-white mb-6 leading-tight">
                Tell Us About Your Horse — We&apos;ll Handle the Rest
              </h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: '🔒', title: 'Your details are safe', desc: 'We only share your information with the matched broker. No spam lists, no third-party marketing.' },
                  { icon: '📋', title: 'No obligation whatsoever', desc: 'Receiving quotes commits you to nothing. Compare at your own pace and walk away if it\'s not right for you.' },
                  { icon: '⚡', title: 'Fast response', desc: 'Most enquiries are matched within the hour during business hours. Same-day response on urgent requests.' },
                  { icon: '🏆', title: 'Licensed advisers only', desc: 'Every broker in our network holds a Financial Advice Provider licence. You\'re getting qualified equine insurance advice.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-brand/40 rounded-xl p-4 border border-brand-light/50">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-extrabold text-white text-sm mb-1">{item.title}</p>
                      <p className="text-green-200 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-green-200 text-sm leading-relaxed">
                  <strong className="text-white">How we&apos;re paid:</strong> Our referral service is funded by a fee from the broker — not by you. This means you get unbiased matching based on your horse&apos;s needs. All brokers in our network are licensed under the Financial Markets Conduct Act 2013.
                </p>
              </div>
            </div>
            {/* Right — form */}
            <div className="w-full lg:w-[420px] lg:flex-shrink-0">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Common Questions</span>
            <h2 className="text-2xl font-extrabold text-gray-900">Quick Answers Before You Submit</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h3 className="font-extrabold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="py-14 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3">Ready to Protect Your Horse?</h2>
          <p className="text-green-100 text-lg mb-8">
            Fill in the form above and a specialist equine insurance broker will be in touch within 24 hours — no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#second-form" className="bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-3 rounded-xl transition-colors shadow-md">
              Get a Quote →
            </a>
            <Link href="/coverage/" className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3 rounded-xl transition-colors border border-green-500">
              Explore Coverage →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
