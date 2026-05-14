export interface CoverageType {
  slug: string
  name: string
  icon: string
  image: string
  description: string
  features: string[]
  whoNeeds: string[]
}

export const coverageTypes: CoverageType[] = [
  {
    slug: 'mortality',
    name: 'Mortality Insurance',
    icon: '🐴',
    image: '/images/equine-hero-1.png',
    description:
      'Equine mortality insurance is the most fundamental form of horse insurance in New Zealand. It pays the insured value of your horse if it dies from accidental injury, illness, or disease, or if it must be humanely destroyed on veterinary advice. Cover is available for horses of all breeds and disciplines, from leisure ponies to high-value sport horses and racehorses.',
    features: [
      'Pays the agreed insured value on death',
      'Covers accidental injury, illness, and disease',
      'Includes humane destruction on veterinary advice',
      'Available for horses from $5,000 to $500,000+ value',
      'Optional extension for theft cover',
      'Worldwide cover available for horses competing overseas',
    ],
    whoNeeds: [
      'Owners of high-value sport horses and competition horses',
      'Thoroughbred and standardbred racehorse owners',
      'Breeding stallion and broodmare owners',
      'Anyone whose horse represents a significant financial investment',
    ],
  },
  {
    slug: 'major-medical',
    name: 'Major Medical Insurance',
    icon: '🏥',
    image: '/images/equine-hero-2.png',
    description:
      'Major medical insurance covers veterinary treatment costs when your horse suffers a serious illness or injury requiring significant medical intervention. Veterinary fees in New Zealand can quickly reach tens of thousands of dollars for surgeries, diagnostics, and extended hospitalisation. Major medical cover ensures cost does not drive treatment decisions.',
    features: [
      'Covers veterinary fees for illness and injury',
      'Includes surgery, hospitalisation, and diagnostics',
      'Annual limits typically from $10,000 to $30,000',
      'Option to include colic surgery as standard or add-on',
      'Some policies cover complementary therapies',
      'Can be bundled with mortality cover for better value',
    ],
    whoNeeds: [
      'Any horse owner wanting to protect against large vet bills',
      'Competition and sport horse owners with active horses',
      'Owners of older horses more prone to health issues',
      'Anyone who wants peace of mind that vet costs are covered',
    ],
  },
  {
    slug: 'transit',
    name: 'Transit Insurance',
    icon: '🚛',
    image: '/images/equine-hero-3.png',
    description:
      'Transit insurance covers your horse against injury, illness, or death that occurs during transportation — whether by float, truck, or air freight. Horses can be injured during loading, travel, or unloading, and standard vehicle insurance does not cover the horse itself. Transit cover gives you protection every time your horse moves.',
    features: [
      'Covers injury and death during transportation',
      'Includes loading and unloading operations',
      'Available for domestic and international transit',
      'Can be combined with mortality cover',
      'Covers hired and owner-operated floats and trucks',
      'Air freight cover available for export or competition horses',
    ],
    whoNeeds: [
      'Horse owners who regularly travel to competitions or events',
      'Breeders transporting horses to stud or sales',
      'Thoroughbred trainers moving racehorses between tracks',
      'Anyone transporting high-value horses over long distances',
    ],
  },
  {
    slug: 'liability',
    name: 'Liability Insurance',
    icon: '⚖️',
    image: '/images/equine-hero-4.png',
    description:
      'Equine liability insurance protects you if your horse causes injury to a person or damage to property. Even well-handled horses can behave unpredictably — a kick, a bite, or an escape can result in significant injury or property damage claims. Liability cover is strongly recommended for all horse owners, particularly those who agist or who have horses in public areas.',
    features: [
      'Covers third-party bodily injury caused by your horse',
      'Includes property damage claims',
      'Limits from $1 million to $5 million available',
      'Covers horses at agistment, events, and public places',
      'Legal defence costs included',
      'Can extend to cover riders and handlers',
    ],
    whoNeeds: [
      'All horse owners, particularly those at agistment',
      'Riding instructors and equestrian coaches',
      'Horse breeders with horses in paddocks near public land',
      'Anyone whose horse interacts with the public or third parties',
    ],
  },
  {
    slug: 'loss-of-use',
    name: 'Loss of Use Insurance',
    icon: '🎖️',
    image: '/images/equine-hero-5.png',
    description:
      'Loss of use insurance provides compensation when your horse becomes permanently unfit for its primary purpose due to illness or injury — even if the horse is still alive. This is particularly relevant for competition horses, racehorses, and breeding stock where the animal\'s usefulness is tied to its ability to perform a specific function. Policies typically pay 50–60% of the insured value.',
    features: [
      'Pays a percentage of insured value if horse cannot perform its purpose',
      'Covers permanent unsoundness from illness or injury',
      'Typically pays 50–60% of mortality sum insured',
      'Available for sport, racing, and breeding horses',
      'Veterinary certification required to make a claim',
      'Can be combined with mortality and medical cover',
    ],
    whoNeeds: [
      'Competition horse owners whose horse\'s value depends on performance',
      'Racehorse owners where racing ability is the horse\'s primary value',
      'Breeding stallion owners where fertility loss is a significant risk',
      'Owners of horses purchased specifically for a defined purpose',
    ],
  },
]

export function getCoverageBySlug(slug: string): CoverageType | undefined {
  return coverageTypes.find((c) => c.slug === slug)
}
