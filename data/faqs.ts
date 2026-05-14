export interface FAQ {
  q: string
  a: string
  category: string
}

export const faqs: FAQ[] = [
  // BASICS
  {
    category: 'Basics',
    q: 'Is horse insurance mandatory in New Zealand?',
    a: 'Horse insurance is not legally required, but it is strongly recommended. Equine veterinary costs can be extremely high — a single colic surgery can cost $10,000 to $25,000 — and third-party liability claims can arise if your horse injures someone or damages property. Many agistment properties and equestrian facilities also require horse owners to hold liability insurance as a condition of access.',
  },
  {
    category: 'Basics',
    q: 'What is the difference between agreed value and market value horse insurance?',
    a: 'Agreed value policies pay the sum insured stated in the policy without depreciation or market value arguments at claim time. Market value policies pay what the insurer determines the horse was worth at the time of the claim — which may be less than what you paid. Most specialist equine insurers offer agreed value policies, which provide greater certainty for high-value horses.',
  },
  {
    category: 'Basics',
    q: 'Can I insure a horse with a pre-existing condition?',
    a: 'Yes, horses with pre-existing conditions can usually be insured, but the pre-existing condition itself is typically excluded from cover. For example, a horse with a history of laminitis may be insured, but any claim relating to laminitis would be excluded. It is essential to disclose all known health conditions on the application — failing to do so can void your policy and prevent you from making a claim.',
  },
  {
    category: 'Basics',
    q: 'Can I get horse insurance for a leased horse?',
    a: 'Yes, horse insurance can generally be arranged for leased horses. The policy must clearly identify the insurable interest — typically the lessee, the lessor, or both. The lease agreement should specify which party is responsible for maintaining insurance during the lease period. A specialist equine insurance broker can help structure a policy appropriate to a lease arrangement.',
  },

  // COVER TYPES
  {
    category: 'Cover Types',
    q: 'What does equine mortality insurance cover?',
    a: 'Equine mortality insurance pays the insured (agreed) value of your horse if it dies from accidental injury, illness, or disease — or if a veterinarian certifies it must be humanely destroyed due to a condition that cannot be treated. It does not cover horses that are sold, given away, or retired. The policy pays out the sum insured, not just what you paid for the horse, so it is important to insure at current market value.',
  },
  {
    category: 'Cover Types',
    q: 'What is loss of use insurance for horses?',
    a: 'Loss of use insurance provides compensation if your horse becomes permanently unable to perform its intended purpose due to illness or injury — even if the horse remains alive. This is particularly relevant for competition horses, racehorses, and breeding stock. Policies typically pay 50–60% of the mortality sum insured on proof of permanent unsoundness certified by a veterinarian after an observation period.',
  },
  {
    category: 'Cover Types',
    q: 'Does horse insurance cover colic surgery?',
    a: 'Most comprehensive major medical horse insurance policies include cover for colic surgery, but the terms vary between insurers. Some policies have a specific colic surgery benefit; others include it within the overall veterinary fee limit. Some budget policies may exclude colic surgery entirely. Always ask your broker specifically about colic cover — it is one of the most important things to confirm before purchasing.',
  },
  {
    category: 'Cover Types',
    q: 'Is my horse covered while being transported in a float?',
    a: 'Your horse is covered during transport only if your equine insurance policy includes transit cover. Transit cover is a specific extension that protects your horse against injury, illness, or death during transportation. It is separate from horse float insurance, which covers damage to the float itself. Check whether transit cover is included in your policy or available as an add-on — it is not automatic in all policies.',
  },

  // COSTS
  {
    category: 'Costs',
    q: 'How much does horse insurance cost?',
    a: 'Horse insurance premiums vary widely depending on the horse\'s value, age, breed, intended use, and the level of cover selected. Liability-only cover can start from around $150 per year. Mortality-only cover for a $5,000 leisure pony might cost $180–$300 per year, while comprehensive cover for a $50,000 sport horse could be $2,000–$4,000 per year. The best way to find out what your cover will cost is to request a free quote.',
  },
  {
    category: 'Costs',
    q: 'Do I need separate insurance for my horse float?',
    a: 'Yes — your horse float and your horse require separate insurance. Horse float insurance covers damage to the float structure, while equine transit insurance covers your horse during travel. Some vehicle policies include basic float cover, but may exclude commercial use or horses above a certain value. Check your existing policies and talk to a specialist broker about getting appropriate combined cover.',
  },

  // CLAIMS
  {
    category: 'Claims',
    q: 'How do I make a horse insurance claim?',
    a: 'If you need to make a claim, contact your insurer or broker as soon as possible — ideally before or immediately after vet treatment begins, as some insurers require pre-approval for non-emergency procedures. You will generally need to provide a completed claim form, veterinary reports and itemised invoices, and any other supporting documentation requested. Your broker can assist you through the claims process.',
  },
  {
    category: 'Claims',
    q: 'Does ACC cover horse riding injuries?',
    a: 'ACC covers the cost of medical treatment and rehabilitation for personal injuries sustained while horse riding. However, ACC does not cover damage to your horse, damage to third-party property, or income loss beyond certain limits. Horse owners still need liability insurance for property damage claims and may want additional personal accident cover to supplement ACC entitlements — particularly for self-employed riders.',
  },
]

export const faqCategories = ['All', 'Basics', 'Cover Types', 'Costs', 'Claims']

export const categoryConfig: Record<string, { color: string; bg: string; border: string; icon: string }> = {
  Basics:      { color: 'text-blue-700',   bg: 'bg-blue-50',   border: 'border-blue-200',   icon: '📋' },
  'Cover Types': { color: 'text-green-700',  bg: 'bg-green-50',  border: 'border-green-200',  icon: '🛡️' },
  Costs:       { color: 'text-amber-700',  bg: 'bg-amber-50',  border: 'border-amber-200',  icon: '💰' },
  Claims:      { color: 'text-purple-700', bg: 'bg-purple-50', border: 'border-purple-200', icon: '📝' },
}
