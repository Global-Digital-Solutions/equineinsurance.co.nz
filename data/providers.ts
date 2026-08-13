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
  rating: number | null
  reviewCount: number | null
  ratingSource: string | null
  placeId: string | null
  googleMapsUri: string | null
  ratingAsAt: string | null
  lastVerified: string
}

export const providers: Provider[] = [
  {
    slug: 'pet-n-sur',
    name: 'Pet-n-Sur',
    tagline: 'New Zealand\'s Longest-Running Specialist Equine Insurer',
    type: 'Direct insurer',
    description: 'Pet-n-Sur is a 100% New Zealand owned and operated specialist equine insurer with over 19 years in the market. They insure horses, ponies, and livestock directly — no broker middleman required. FMA registered and IFSO scheme member, with over $37 million in claims paid to clients over the past three years.',
    highlight: '99.3% of claims paid within 14 days',
    specialties: ['Mortality', 'Major medical / vet fees', 'Colic', 'Theft & straying', 'Personal accident (rider)', 'Liability'],
    keyStats: [
      { label: 'Claims paid within 14 days', value: '99.3%' },
      { label: 'Claims paid (last 3 years)', value: '$37M+' },
      { label: 'Years in NZ equine market', value: '19+' },
      { label: 'Ownership', value: '100% NZ owned' },
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
    rating: 4.4,
    reviewCount: 1045,
    ratingSource: 'Google',
    placeId: 'ChIJB-mhW-pHDW0RgmNT_EoE-BU',
    googleMapsUri: 'https://maps.google.com/?cid=1583019989128143746',
    ratingAsAt: '13 Aug 2026',
    lastVerified: 'August 2026',
  },
  {
    slug: 'petcover-nz',
    name: 'Petcover NZ',
    tagline: 'Fast Claims — Direct Vet Payment, No Out-of-Pocket Stress',
    type: 'Direct insurer',
    description: 'Petcover NZ specialises in horse and pet insurance with a strong focus on claims speed and vet-direct payment — meaning your vet bills are settled directly with the clinic in most cases. Winner of Canstar\'s Most Satisfied Customers Award 2025 — the only provider to earn a 5-Star rating for Overall Satisfaction in Canstar\'s NZ survey of 547 pet owners. Over 90% of claims are paid within 5 days. Source: petcovergroup.com/nz/horse-insurance/ and canstar.co.nz/pet-insurance/, 13 August 2026.',
    highlight: 'Canstar Most Satisfied Customers Award 2025 — 5-Star Overall Satisfaction',
    specialties: ['Vet fees / major medical', 'Colic cover', 'Public liability', 'Personal accident', 'Theft', 'Loss of use'],
    keyStats: [
      { label: 'Claims paid within 5 days', value: '>90%' },
      { label: 'Canstar award', value: '2025 ★★★★★' },
      { label: 'Vet direct-pay available', value: 'Yes' },
      { label: 'Independently owned', value: '15+ years' },
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
    claimsSpeed: '>90% within 5 days',
    pricingIndicator: 'Mid-range',
    accentColor: 'emerald',
    badgeColor: 'bg-emerald-600',
    rating: 3.5,
    reviewCount: 141,
    ratingSource: 'Google',
    placeId: 'ChIJUaNzldhIDW0RE3xCK-G6VU8',
    googleMapsUri: 'https://maps.google.com/?cid=5716680778272898067',
    ratingAsAt: '13 Aug 2026',
    lastVerified: 'August 2026',
  },
  {
    slug: 'nzb-insurance',
    name: 'NZB Insurance',
    tagline: 'NZ\'s Leading Bloodstock & Thoroughbred Specialist',
    type: 'Lloyd\'s coverholder',
    description: 'NZB Insurance is New Zealand\'s leading specialist bloodstock insurer with over 30 years of experience. A New Zealand-owned company backed by AXA XL and Lloyd\'s of London underwriters, giving capacity to insure horses of almost any value. Long-time partner of New Zealand Bloodstock and sponsor of the Pearl Series.',
    highlight: 'Lloyd\'s of London coverholder — unlimited capacity for high-value horses',
    specialties: ['Thoroughbred mortality', 'Bloodstock & breeding stock', 'Stallion infertility', 'Prospective foal cover', 'Transit worldwide', 'Racing stables'],
    keyStats: [
      { label: 'NZ company', value: 'NZ owned' },
      { label: 'Underwriting backing', value: 'AXA XL + Lloyd\'s' },
      { label: 'Industry presence', value: 'Pearl Series sponsor' },
      { label: 'Years experience', value: '30+' },
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
    pricingIndicator: 'Premium / high-value',
    accentColor: 'purple',
    badgeColor: 'bg-purple-700',
    rating: null,
    reviewCount: null,
    ratingSource: null,
    placeId: null,
    googleMapsUri: null,
    ratingAsAt: null,
    lastVerified: 'August 2026',
  },
  {
    slug: 'gallagher',
    name: 'Gallagher Insurance NZ',
    tagline: 'Specialist Equine & Bloodstock Broker — Dedicated NZ Bloodstock Division',
    type: 'Specialist broker',
    description: 'Gallagher (formerly Crombie Lockwood in New Zealand) operates across 30+ offices nationwide — from Invercargill to Kaitaia — with around 160,000 NZ clients and approximately 1,000 insurance professionals. Their dedicated Bloodstock and Agriculture divisions provide specialist cover for thoroughbreds, standardbreds, sport horses, and equestrian operations. Source: ajg.co.nz/about/, 13 August 2026.',
    highlight: '~160,000 NZ clients · 30+ offices nationwide · Dedicated Bloodstock division',
    specialties: ['Thoroughbred & standardbred', 'Sport & equestrian horses', 'Stallion infertility', 'Prospective foal', 'Loss of use', 'Equestrian operations'],
    keyStats: [
      { label: 'NZ clients', value: '~160,000' },
      { label: 'NZ insurance professionals', value: '~1,000' },
      { label: 'NZ offices', value: '30+' },
      { label: 'NZ heritage', value: 'Crombie Lockwood' },
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
    rating: 4.1,
    reviewCount: 27,
    ratingSource: 'Google',
    placeId: 'ChIJkX5U5_pHDW0RKm5TlpiW53g',
    googleMapsUri: 'https://maps.google.com/?cid=8712097586272759338',
    ratingAsAt: '13 Aug 2026',
    lastVerified: 'August 2026',
  },
]
