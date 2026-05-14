export interface HorseType {
  slug: string
  name: string
  icon: string
  image: string
  description: string
  commonRisks: string[]
  recommendedCover: string[]
}

export const horseTypes: HorseType[] = [
  {
    slug: 'sport-horses',
    name: 'Sport Horses',
    icon: '🏆',
    image: '/images/equine-hero-1.png',
    description:
      'Sport horses in New Zealand compete across showjumping, dressage, eventing, endurance, and polo. These horses often represent significant financial investments — both in purchase price and ongoing training costs. Their active competition schedules and demanding physical work increase the risk of injury, making comprehensive insurance essential for serious competitors.',
    commonRisks: [
      'Competition injuries from jumping and fast work',
      'Lameness from hard ground or intensive training',
      'Soft tissue injuries to tendons and ligaments',
      'Fractures from falls or missteps in competition',
      'Colic risk increased by travel and competition stress',
    ],
    recommendedCover: [
      'Mortality insurance at full purchase/market value',
      'Major medical cover for vet fees up to $20,000+',
      'Loss of use cover in case of career-ending injury',
      'Transit cover for competition travel',
      'Liability cover at events and agistment',
    ],
  },
  {
    slug: 'thoroughbreds',
    name: 'Thoroughbreds & Racehorses',
    icon: '🏇',
    image: '/images/equine-hero-2.png',
    description:
      'Thoroughbred and standardbred racehorses in New Zealand face unique insurance challenges. Racing values fluctuate significantly based on track performance, and the physical demands of training and racing create elevated injury risks. Specialist racehorse insurance can cover mortality, vet fees, and loss of use — including reduced racing value following injury.',
    commonRisks: [
      'High-speed training and racing injuries',
      'Musculoskeletal injuries from intensive work',
      'Fractures and catastrophic breakdown on track',
      'Respiratory and digestive conditions',
      'Paddock injuries during rest periods',
    ],
    recommendedCover: [
      'Mortality insurance at agreed racing value',
      'Major medical and surgical cover',
      'Loss of use for horses that cannot race after injury',
      'Transit cover for track movements',
      'Third-party liability cover',
    ],
  },
  {
    slug: 'breeding',
    name: 'Breeding Stock',
    icon: '🌿',
    image: '/images/equine-hero-3.png',
    description:
      'Breeding stallions and broodmares represent some of the most valuable horses in New Zealand. A top thoroughbred stallion\'s value can be extraordinary, and even a quality warmblood broodmare represents a significant investment. Breeding stock insurance must account for fertility risks, pregnancy complications, and the value of unborn foals.',
    commonRisks: [
      'Stallion infertility from injury or illness',
      'Broodmare pregnancy complications and difficult foaling',
      'Foal losses at birth or in early life',
      'Reproductive system injuries affecting breeding ability',
      'Reduced fertility from age or health conditions',
    ],
    recommendedCover: [
      'Mortality insurance for stallions and broodmares',
      'Infertility cover for breeding stallions',
      'Foaling complications cover for broodmares',
      'Veterinary fee cover for reproductive treatments',
      'Loss of use cover if breeding function is lost',
    ],
  },
  {
    slug: 'leisure',
    name: 'Leisure & Pleasure Horses',
    icon: '🌄',
    image: '/images/equine-hero-4.png',
    description:
      'Leisure horses and family ponies may not have the same financial value as elite competition horses, but they are often priceless to their owners. New Zealand has a strong recreational horse culture, with thousands of horses and ponies used for trail riding, pony club, Pony Club competitions, and casual hacking. Liability insurance is especially important for leisure horses used by multiple family members.',
    commonRisks: [
      'Trail riding accidents and terrain injuries',
      'Paddock injuries from fencing or other horses',
      'Colic — a common risk for all horses',
      'Injuries to riders and handlers',
      'Damage caused to neighbouring property',
    ],
    recommendedCover: [
      'Mortality insurance if the horse has significant value',
      'Liability insurance — strongly recommended for all leisure horses',
      'Basic major medical for colic and emergencies',
      'Transit cover if the horse is regularly floated',
      'Personal accident cover for riders',
    ],
  },
]

export function getHorseTypeBySlug(slug: string): HorseType | undefined {
  return horseTypes.find((h) => h.slug === slug)
}
