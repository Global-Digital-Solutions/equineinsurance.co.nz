export interface Provider {
  slug: string
  name: string
  logo: string
  description: string
  specialties: string[]
}

export const providers: Provider[] = [
  {
    slug: 'nzi',
    name: 'NZI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/NZI_logo.svg/320px-NZI_logo.svg.png',
    description: 'NZI is one of New Zealand\'s largest commercial insurers with a significant presence in specialist rural and equine markets. Their rural insurance team has deep experience with high-value livestock and horses.',
    specialties: ['Mortality cover', 'Veterinary fees', 'Liability', 'Rural packages'],
  },
  {
    slug: 'vero',
    name: 'Vero',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Vero_Insurance_NZ_logo.svg/320px-Vero_Insurance_NZ_logo.svg.png',
    description: 'Vero Insurance provides a range of specialist equine and rural products through their broker network. Their horse insurance solutions cover mortality, medical, and liability for all horse types.',
    specialties: ['Sport horse cover', 'Mortality', 'Major medical', 'Liability'],
  },
  {
    slug: 'aig',
    name: 'AIG',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/AIG_logo.svg/320px-AIG_logo.svg.png',
    description: 'AIG is an international insurer with specialist equine underwriting capacity. Their global bloodstock and equine team handles high-value sport horses, thoroughbreds, and breeding stock.',
    specialties: ['High-value horses', 'Bloodstock', 'Racehorses', 'Loss of use'],
  },
  {
    slug: 'allianz',
    name: 'Allianz',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Allianz_logo.svg/320px-Allianz_logo.svg.png',
    description: 'Allianz operates a specialist equine division through their global underwriting operations. They have access to Lloyd\'s of London markets for exceptional risks and high-value horses.',
    specialties: ['Breeding stock', 'Transit', 'Loss of use', 'International cover'],
  },
  {
    slug: 'gow-gates',
    name: 'Gow-Gates Equine',
    logo: '',
    description: 'Gow-Gates is a specialist equine and bloodstock insurance broker with decades of experience in the Australasian market. They provide tailored solutions for sport horses, racehorses, and breeding operations across New Zealand.',
    specialties: ['Specialist equine', 'Bloodstock', 'All horse types', 'Bespoke solutions'],
  },
]
