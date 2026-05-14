export interface ProviderStat {
  label: string
  value: string
}

export interface Provider {
  slug: string
  name: string
  tagline: string
  type: 'Direct insurer' | 'Specialist broker' | 'Lloyd\'s coverholder'
  description: string
  highlight: string
  specialties: string[]
  keyStats: ProviderStat[]
  bestFor: string[]
  coverageHighlights: string[]
  claimsSpeed?: string
  founded?: string
  ownership?: string
  pricingIndicator: 'Competitive' | 'Mid-range' | 'Premium / high-value'
  accentColor: string
  badgeColor: string
}

export const providers: Provider[] = [
  {
    slug: 'pet-n-sur',
    name: 'Pet-n-Sur',
    tagline: 'New Zealand\'s Longest-Running Specialist Equine Insurer',
    type: 'Direct insurer',
    description: 'Pet-n-Sur is a 100% New Zealand owned and operated specialist equine insurer with over 19 years in the market. They insure horses, ponies, and livestock directly — no broker middleman required. With an AM Best B++ rating and over $60 million in claims paid, they are the default choice for everyday horse owners across NZ.',
    highlight: '99.3% of claims paid within 14 days',
    specialties: ['Mortality', 'Major medical / vet fees', 'Colic', 'Theft & straying', 'Personal accident (rider)', 'Liability'],
    keyStats: [
      { label: 'Claims paid within 14 days', value: '99.3%' },
      { label: 'Total claims paid', value: '$60M+' },
      { label: 'Years in NZ equine market', value: '19+' },
      { label: 'AM Best financial rating', value: 'B++' },
    ],
    bestFor: ['Leisure horses', 'Ponies', 'Lifestyle block horses', 'First-time insurance buyers', 'Budget-conscious owners'],
    coverageHighlights: [
      'Mortality cover including humane destruction',
      'Major medical / surgical vet fees',
      'Colic surgery included in vet cover',
      'Theft and straying protection',
      'Personal accident cover for the rider',
      'Public liability up to $1M+',
    ],
    claimsSpeed: '99.3% within 14 days',
    founded: '2005',
    ownership: '100% NZ owned',
    pricingIndicator: 'Competitive',
    accentColor: 'blue',
    badgeColor: 'bg-blue-600',
  },
  {
    slug: 'petcover-nz',
    name: 'Petcover NZ',
    tagline: 'Fast Claims — Direct Vet Payment, No Out-of-Pocket Stress',
    type: 'Direct insurer',
    description: 'Petcover NZ specialises in horse and pet insurance with a strong focus on claims speed and vet-direct payment — meaning your vet bills are settled directly with the clinic in most cases, removing the stress of out-of-pocket costs during a crisis. Their $10,000 vet cover limit and $5 million public liability option make them a compelling choice for performance horse owners.',
    highlight: 'Vet bills paid directly to clinic — no out-of-pocket costs',
    specialties: ['Vet fees / major medical', 'Colic cover', 'Public liability', 'Personal accident', 'Theft', 'Loss of use'],
    keyStats: [
      { label: 'Claims processed in 5 days', value: '90%+' },
      { label: 'Max vet cover per event', value: '$10,000' },
      { label: 'Public liability available', value: '$5M' },
      { label: 'Vet direct-pay available', value: 'Yes' },
    ],
    bestFor: ['Performance horses', 'Show & competition horses', 'Owners who want fast vet reimbursement', 'Horses with regular vet visits'],
    coverageHighlights: [
      'Up to $10,000 vet fees per illness or injury',
      'Direct payment to vet clinic available',
      'Colic cover including emergency surgery',
      'Public liability up to $5 million',
      'Personal accident for rider',
      'Loss of use cover for competition horses',
    ],
    claimsSpeed: '90%+ within 5 days',
    pricingIndicator: 'Mid-range',
    accentColor: 'emerald',
    badgeColor: 'bg-emerald-600',
  },
  {
    slug: 'nzb-insurance',
    name: 'NZB Insurance',
    tagline: 'NZ\'s Leading Bloodstock & Thoroughbred Specialist',
    type: 'Lloyd\'s coverholder',
    description: 'NZB Insurance is New Zealand\'s leading specialist bloodstock insurer and an official Lloyd\'s of London coverholder — giving them the capacity to insure horses of almost any value. Long-time partner of New Zealand Bloodstock, they are the go-to insurer for thoroughbred studs, racing stables, and high-value breeding stock. Pearl Series race sponsorship reflects deep industry roots.',
    highlight: 'Lloyd\'s of London coverholder — unlimited capacity for high-value horses',
    specialties: ['Thoroughbred mortality', 'Bloodstock & breeding stock', 'Stallion infertility', 'Prospective foal cover', 'Transit worldwide', 'Racing stables'],
    keyStats: [
      { label: 'Market position', value: '#1 NZ bloodstock' },
      { label: 'Lloyd\'s coverholder', value: 'Yes' },
      { label: 'Industry presence', value: 'Pearl Series sponsor' },
      { label: 'Cover capacity', value: 'Unlimited' },
    ],
    bestFor: ['Thoroughbred owners', 'Racing stables', 'Thoroughbred studs', 'High-value breeding mares', 'Bloodstock investors'],
    coverageHighlights: [
      'Mortality cover for horses of any value',
      'Stallion infertility and loss of use',
      'Prospective foal insurance (in utero)',
      'Worldwide transit including air freight',
      'Bloodstock portfolio policies',
      'Tailored stud farm packages',
    ],
    founded: 'Established NZ partner',
    pricingIndicator: 'Premium / high-value',
    accentColor: 'purple',
    badgeColor: 'bg-purple-700',
  },
  {
    slug: 'gallagher',
    name: 'Gallagher Insurance NZ',
    tagline: '40+ Years of Specialist Equine & Bloodstock Brokering',
    type: 'Specialist broker',
    description: 'Gallagher (formerly Gow-Gates and other specialists) is a global insurance brokerage with a dedicated NZ equine and bloodstock team carrying over 40 years of specialist experience. Their Lloyd\'s of London relationships give access to bespoke policies for thoroughbreds, standardbreds, sport horses, and equestrian operations — including rare covers like stallion infertility and prospective foal insurance that few others offer in NZ.',
    highlight: 'Bespoke Lloyd\'s policies — covers every horse type including standardbreds & sport horses',
    specialties: ['Thoroughbred & standardbred', 'Sport & equestrian horses', 'Stallion infertility', 'Prospective foal', 'Loss of use', 'Equestrian operations'],
    keyStats: [
      { label: 'Years specialist experience', value: '40+' },
      { label: 'Lloyd\'s market access', value: 'Yes' },
      { label: 'Horse disciplines covered', value: 'All' },
      { label: 'Bespoke policy capacity', value: 'Yes' },
    ],
    bestFor: ['Standardbred racing owners', 'Sport & dressage horses', 'Equestrian operations', 'Horses needing bespoke cover', 'Multi-horse portfolios'],
    coverageHighlights: [
      'Thoroughbred, standardbred, and sport horse mortality',
      'Stallion infertility cover',
      'Prospective foal and breeding insurance',
      'Loss of use for competition horses',
      'Worldwide transit and show cover',
      'Multi-horse and stud farm packages',
    ],
    pricingIndicator: 'Premium / high-value',
    accentColor: 'orange',
    badgeColor: 'bg-orange-600',
  },
]
