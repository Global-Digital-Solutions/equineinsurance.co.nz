export interface HorseTypeFAQ {
  q: string
  a: string
}

export interface CoverageRow {
  type: string
  slug: string
  description: string
  typicalLimit: string
  isEssential: boolean
}

export interface CostRow {
  scenario: string
  coverLevel: string
  estimatedPremium: string
}

export interface HorseType {
  slug: string
  name: string
  icon: string
  image: string
  metaTitle: string
  metaDescription: string
  description: string
  keyStats: { label: string; value: string }[]
  commonRisks: string[]
  recommendedCover: string[]
  whyInsure: { heading: string; body: string }[]
  coverageBreakdown: CoverageRow[]
  costGuide: CostRow[]
  longFormBody: string
  policyTips: string[]
  faqs: HorseTypeFAQ[]
  relatedSlugs: { label: string; href: string }[]
}

export const horseTypes: HorseType[] = [
  {
    slug: 'sport-horses',
    name: 'Sport Horses',
    icon: '🏆',
    image: '/images/equine-hero-1.png',
    metaTitle: 'Sport Horse Insurance NZ | Showjumping, Dressage & Eventing | EquineInsurance.co.nz',
    metaDescription: 'Specialist sport horse insurance for showjumping, dressage, eventing, polo and endurance horses. Compare cover options and get a free quote from licensed NZ equine insurance brokers.',
    description: 'Sport horses competing in showjumping, dressage, eventing, polo, and endurance represent substantial financial investments — both in purchase price and the years of training required to reach competition level. Their demanding schedules, travel commitments, and physical workloads create elevated insurance risks that standard policies may not adequately cover.',
    keyStats: [
      { label: 'Avg sport horse value', value: '$15k–$150k' },
      { label: 'Colic surgery cost', value: '$10k–$25k' },
      { label: 'Tendon repair', value: '$8k–$20k' },
      { label: 'Competition liability claims', value: '$50k–$500k+' },
    ],
    commonRisks: [
      'Competition injuries from jumping, fast work, and falls',
      'Tendon and ligament injuries from intensive training',
      'Fractures from missteps or falls at competition',
      'Colic — risk elevated by travel stress and irregular feeding',
      'Paddock injuries during rest and recovery periods',
      'Transit accidents during float travel to events',
      'Third-party liability at competitions, clinics, and agistment',
    ],
    recommendedCover: [
      'Mortality insurance at current market value (not original purchase price)',
      'Major medical cover — minimum $15,000 for serious illness or surgery',
      'Loss of use cover if a career-ending injury prevents competition',
      'Transit cover for float travel to events and clinics',
      'Public liability at events, agistment, and on the road',
      'Personal accident cover for the rider',
    ],
    whyInsure: [
      {
        heading: 'The financial exposure is significant',
        body: 'A competitive showjumper or dressage horse purchased for $40,000 can be worth considerably more after successful competition results — or worth significantly less if injury prevents further performance. A single colic surgery can cost $10,000 to $25,000. Tendon repair and rehabilitation can run $15,000 or more over an 18-month recovery. Without insurance, a single veterinary event can wipe out years of investment.',
      },
      {
        heading: 'Competition increases the risk profile',
        body: 'Sport horses work harder and travel more than leisure horses. A horse competing at A-grade showjumping may float 200+ kilometres each weekend, compete on unfamiliar ground, be stabled away from home, and face the cumulative physical stress of regular high-intensity exercise. Each of these factors independently increases the probability of injury or illness — combined, they make the risk profile substantially higher than a paddock horse.',
      },
      {
        heading: 'Loss of use is a real risk competitors face',
        body: 'A sport horse that suffers a career-ending tendon or ligament injury is still alive — but it can no longer compete. This is where loss of use insurance matters. If a horse purchased for $60,000 as a competition horse can no longer jump due to injury, loss of use insurance pays a proportion (typically 50–60% of the mortality sum insured) to compensate for the loss of intended purpose. Mortality insurance alone would pay nothing in this scenario.',
      },
      {
        heading: 'Third-party liability is essential at events',
        body: 'Competition horses interact with other horses, riders, spectators, and venue property. A horse that bolts, kicks, or causes an accident at a competition can generate a liability claim that runs into hundreds of thousands of dollars — particularly if a person is seriously injured. Most equestrian venues and Equestrian Sports NZ events require competitors to hold public liability insurance.',
      },
    ],
    coverageBreakdown: [
      { type: 'Mortality', slug: 'mortality', description: 'Pays the insured value if your sport horse dies from injury or illness, or is humanely destroyed on veterinary advice.', typicalLimit: 'Full market value — commonly $20,000–$150,000', isEssential: true },
      { type: 'Major Medical', slug: 'major-medical', description: 'Covers vet fees for illness and injury including colic surgery, tendon injury treatment, and hospitalisation.', typicalLimit: '$10,000–$25,000 per event or per year', isEssential: true },
      { type: 'Loss of Use', slug: 'loss-of-use', description: 'Pays compensation if your horse can no longer perform its intended sport due to permanent injury or illness.', typicalLimit: '50–60% of the mortality sum insured', isEssential: true },
      { type: 'Transit', slug: 'transit', description: 'Covers your horse during float travel to and from competitions, clinics, and veterinary appointments.', typicalLimit: 'Full insured value during transit', isEssential: true },
      { type: 'Liability', slug: 'liability', description: 'Third-party cover for injury or property damage caused by your horse at events, agistment, or on the road.', typicalLimit: '$1M–$5M', isEssential: true },
    ],
    costGuide: [
      { scenario: 'A-grade showjumper, $40,000 value, mortality + major medical', coverLevel: 'Mortality + vet fees to $15k', estimatedPremium: '$1,200–$2,200/yr' },
      { scenario: 'FEI dressage horse, $80,000, full cover including loss of use', coverLevel: 'Comprehensive + loss of use', estimatedPremium: '$3,500–$6,000/yr' },
      { scenario: 'Eventing horse, $25,000, mortality + medical + transit', coverLevel: 'Mortality + $12k vet + transit', estimatedPremium: '$900–$1,500/yr' },
      { scenario: 'Polo pony, $30,000, mortality only', coverLevel: 'Mortality only', estimatedPremium: '$600–$1,100/yr' },
    ],
    longFormBody: `## Sport Horse Insurance: Everything You Need to Know

Sport horse insurance in New Zealand is a specialist area that sits between standard leisure horse policies and the bloodstock coverage used for racehorses. Correctly insuring a competition horse means understanding what you stand to lose — and under what circumstances you would need to make a claim.

### What Makes Sport Horses Different to Insure

The key difference between a sport horse and a leisure horse, from an insurance perspective, is the combination of high value and elevated risk. A well-trained, competition-proven showjumper might cost $20,000 to $100,000 or more to replace. The investment in training — potentially $1,000 to $3,000 per month over several years — adds further value that isn't directly captured by the purchase price but is very much at risk if the horse is injured.

Sport horses also work harder. A horse competing at A-grade or FEI level is galloping, jumping, or performing collected movements multiple times a week. High-intensity work increases the probability of musculoskeletal injury. Travel to competitions — often several hours each way — introduces transit risks and the stresses of unfamiliar stabling, altered routines, and competition-day adrenaline. All of these factors are recognised by insurers when calculating premiums for competition horses.

### Showjumping Horse Insurance

Showjumping horses face specific injury risks: falls at fences, overjumping-related back problems, hard-ground concussion injuries, and tendon strain from frequent jumping at speed. A horse that clears 1.40m fences week after week is placing enormous physical demand on its legs, tendons, and joints.

Insurance for showjumpers should include major medical cover with a limit high enough to cover tendon surgery and rehabilitation — budgeting a minimum of $15,000 per event for a serious competition horse. Loss of use cover is strongly recommended: a showjumper that suffers a career-ending tendon injury is alive but permanently retired, and mortality insurance pays nothing in that scenario.

### Dressage Horse Insurance

Dressage horses are often warmbloods purchased specifically for their movement and trainability, and their value can appreciate significantly as training progresses. A PSG or GP dressage horse trained to top level might be worth $80,000 to $200,000 or more — and the years of systematic training represent an investment that is very difficult to replace.

Dressage horses are less likely to suffer traumatic jump-related injuries, but they are susceptible to back problems, hind-end issues, and the cumulative wear of collected work. Gastric ulcers from competition stress are also a recognised issue. Comprehensive vet fee cover, combined with mortality and loss of use cover at the current competition value, is the recommended approach for serious dressage competitors.

### Eventing Horse Insurance

Three-day eventing is widely considered one of the most demanding equestrian disciplines — and one of the highest-risk from an insurance perspective. Cross-country phases involve jumping fixed obstacles at speed, and falls happen even at the highest level of rider skill. Eventing horses need comprehensive coverage across mortality, major medical, and transit at minimum, with loss of use cover strongly recommended for horses competing at Intermediate or Advanced level.

### Endurance and Polo Insurance

Endurance horses cover enormous distances — 80km to 160km per ride — placing unique demands on their cardiovascular systems and metabolic health. Tying-up (exertional rhabdomyolysis), electrolyte imbalances, and metabolic complications are specific risks for endurance horses that should be discussed with your broker.

Polo ponies face high-speed collision risks, stick injuries, and the physical demands of sharp turns and rapid acceleration. Their competitive value — particularly well-trained imported ponies — can be substantial, and mortality coverage is typically the first priority.

### How to Value Your Sport Horse for Insurance

One of the most common mistakes sport horse owners make is underinsuring by insuring at the original purchase price rather than the current market value. If you purchased a horse for $20,000 five years ago and it has since competed successfully and is now worth $45,000, insuring at $20,000 creates a significant gap. In the event of a claim, you would receive only $20,000 while having to replace a $45,000 horse.

Work with your trainer and a specialist equine insurer to establish the current market value of your horse before placing cover. If your horse has had significant competition success, consider whether a professional valuation is appropriate — this can support a higher insured value and give you greater confidence that the policy would cover a genuine replacement.

### Loss of Use: Why It Matters for Competition Horses

Loss of use insurance is often overlooked but is arguably the most important cover for competition horses. Statistics from equine insurers suggest that far more horses suffer career-ending injuries than die — making loss of use claims more common than mortality claims for competition horses.

Policies typically pay 50–60% of the mortality sum insured on proof of permanent unsoundness confirmed by a veterinarian, often following a 12-month observation period. While this doesn't fully replace the horse's value, it provides meaningful compensation to offset the cost of purchasing a replacement.`,
    policyTips: [
      'Insure at current market value, not original purchase price — values change as horses compete',
      'Check whether loss of use requires a 12-month wait period before a claim can be assessed',
      'Confirm that your policy covers your specific disciplines — some policies exclude certain sports',
      'Transit cover should include travel to clinics, camps, and veterinary appointments, not just competitions',
      'Check if your agistment or competition venue has liability requirements — most do',
      'Declare all known health conditions including previous injuries — non-disclosure can void a claim',
    ],
    faqs: [
      {
        q: 'Is horse insurance required to compete at ESNZ events?',
        a: 'Equestrian Sports NZ (ESNZ) requires competitors to hold current third-party public liability insurance to participate in affiliated events. The minimum required limit is typically $1 million. Most equine insurance policies that include a liability component will satisfy this requirement, but confirm your policy wording and limit before competing.',
      },
      {
        q: 'Does loss of use cover apply if my horse is injured but can still be ridden?',
        a: 'Loss of use insurance pays out when a horse is permanently unable to perform its intended purpose — typically the discipline it was insured for. A showjumper that can still hack but can no longer jump competitively may qualify for a loss of use claim, depending on the policy wording. The key is "permanent" incapacity for the stated purpose, certified by a veterinarian after a defined observation period (often 12 months).',
      },
      {
        q: 'Can I insure my horse for more than I paid for it?',
        a: 'Yes. If your horse\'s value has increased through successful competition, training, or market conditions, you can insure at its current market value rather than original purchase price. You will need to be able to justify the insured value — your trainer\'s assessment, comparable sales, and competition results all support this. Insuring above true market value is not permitted, so it is important the sum insured reflects a fair current value.',
      },
      {
        q: 'What happens if my horse is injured at a competition — is the organiser liable?',
        a: 'Competition organisers are generally not liable for injuries to horses unless there was clear negligence on their part. If your horse is injured at an event due to a defective fence, unsafe ground, or equipment failure attributable to the organisers, a liability claim may be possible — but proving negligence is complex. Your own horse insurance (mortality and major medical) is the primary protection for injury at events.',
      },
      {
        q: 'Is my horse insured when competing overseas?',
        a: 'Standard NZ equine policies typically cover horses within New Zealand. If you plan to take your horse to Australia or further afield for competitions, you will need to confirm overseas transit and competition cover with your broker. Specialist policies can provide worldwide coverage, but these are generally arranged through brokers with access to Lloyd\'s of London or specialist international equine markets.',
      },
      {
        q: 'How does the claims process work for a vet fee claim?',
        a: 'Contact your insurer or broker as soon as possible after an injury or illness — ideally before significant treatment is undertaken where time allows. Most insurers require a claim form, veterinary reports, and itemised invoices. Some insurers offer direct payment to the vet clinic, which avoids the need for you to pay large bills upfront. Petcover NZ, for example, pays 90%+ of claims within five working days.',
      },
    ],
    relatedSlugs: [
      { label: 'Mortality Insurance', href: '/types/mortality/' },
      { label: 'Major Medical Cover', href: '/types/major-medical/' },
      { label: 'Loss of Use Insurance', href: '/types/loss-of-use/' },
      { label: 'Transit Insurance', href: '/types/transit/' },
      { label: 'Liability Insurance', href: '/types/liability/' },
      { label: 'Compare Providers', href: '/compare/' },
    ],
  },

  {
    slug: 'thoroughbreds',
    name: 'Thoroughbreds & Racehorses',
    icon: '🏇',
    image: '/images/equine-hero-2.png',
    metaTitle: 'Racehorse Insurance NZ | Thoroughbred & Standardbred | EquineInsurance.co.nz',
    metaDescription: 'Specialist racehorse and thoroughbred insurance in New Zealand. Mortality, vet fees, loss of use, and bloodstock cover. Get a free quote from licensed NZ equine insurance brokers.',
    description: 'Thoroughbred and standardbred racehorses present unique insurance challenges. Racing values fluctuate with track performance, injury risk is inherently elevated, and the industry requires specialist policies that standard equine insurers are not always equipped to provide. From a two-year-old in training to a proven stakes winner, every racehorse has a different risk profile and insurance requirement.',
    keyStats: [
      { label: 'Average NZ stakes winner value', value: '$150k–$2M+' },
      { label: 'Fracture treatment cost', value: '$15k–$50k+' },
      { label: 'Surgical colic cost', value: '$12k–$28k' },
      { label: 'Bloodstock insurance capacity', value: 'Unlimited (Lloyd\'s)' },
    ],
    commonRisks: [
      'High-speed training and racing injuries to limbs and tendons',
      'Catastrophic fracture on track — a low-probability but high-consequence risk',
      'Musculoskeletal injury from intensive daily training',
      'Respiratory conditions including exercise-induced pulmonary haemorrhage (EIPH)',
      'Digestive issues including gastric ulcers and colic from training stress',
      'Paddock injuries during recovery and rest periods',
      'Transit risks from track to agistment and between venues',
    ],
    recommendedCover: [
      'Mortality insurance at current racing or stud value — not original purchase price',
      'Major medical and surgical cover for vet fees',
      'Loss of use cover if racing injury ends the horse\'s racing career',
      'Transit cover for track movements and inter-venue float travel',
      'Third-party liability cover for training, racing, and agistment',
      'Stallion infertility cover for breeding stallions retired from racing',
    ],
    whyInsure: [
      {
        heading: 'Racing values are unpredictable — and significant',
        body: 'A thoroughbred purchased as a yearling for $50,000 might race for $8,000 as a modest winner — or be syndicated and sold for $500,000 on the back of exceptional race results. Racing values are genuinely volatile, and the insurance sum insured needs to reflect the current value of the horse in the market, not a historical purchase price. Working with a specialist bloodstock broker ensures your coverage accurately represents your exposure.',
      },
      {
        heading: 'The injury risk is structurally elevated',
        body: 'Racehorses gallop at speeds of 60–70km/h under physical stress. The probability of musculoskeletal injury is meaningfully higher than for horses in lower-intensity work. A fracture on the track — while statistically uncommon — is catastrophic in cost and outcome. Soft tissue injuries, by contrast, are common across all levels of racing and can end a horse\'s career without being life-threatening. Vet fee coverage that covers ongoing treatment is essential.',
      },
      {
        heading: 'Syndicate and ownership structure matters',
        body: 'Many NZ racehorses are owned through syndicates. Insurance must correctly reflect the ownership interests — ideally with a policy that covers the horse\'s full value regardless of how ownership is divided. Syndicate managers should ensure all co-owners are noted on the policy and understand the claims process. A broker experienced in racing syndicate structures can save significant administration and conflict in the event of a claim.',
      },
      {
        heading: 'Transition from racing to stud creates new risks',
        body: 'A successful racehorse transitioning to stud as a breeding stallion faces a new set of risks — particularly infertility. Stallion infertility insurance covers the horse\'s stud value if it becomes unable to breed due to injury, illness, or unexplained reproductive failure. This is a specialist cover not available from all insurers and requires specialist brokers like NZB Insurance or Gallagher who have Lloyd\'s of London market access.',
      },
    ],
    coverageBreakdown: [
      { type: 'Mortality', slug: 'mortality', description: 'Pays the agreed value if your racehorse dies or must be humanely destroyed due to injury or illness sustained during training, racing, or at rest.', typicalLimit: 'Agreed value — from $10,000 to millions for elite horses', isEssential: true },
      { type: 'Major Medical', slug: 'major-medical', description: 'Covers vet fees for injury and illness including colic surgery, fracture treatment, respiratory conditions, and hospitalisation.', typicalLimit: '$15,000–$30,000 per event', isEssential: true },
      { type: 'Loss of Use', slug: 'loss-of-use', description: 'Compensates if your racehorse permanently cannot race following injury — particularly relevant for horses with high racing or stud value.', typicalLimit: '50–60% of the mortality sum insured', isEssential: false },
      { type: 'Transit', slug: 'transit', description: 'Covers float travel between track, agistment, spelling farms, and veterinary clinics.', typicalLimit: 'Full insured value in transit', isEssential: true },
      { type: 'Liability', slug: 'liability', description: 'Third-party cover for injury or damage caused by the horse during training, racing, agistment, or transit.', typicalLimit: '$1M–$5M', isEssential: true },
    ],
    costGuide: [
      { scenario: 'Horse in training, $25,000 value, mortality + vet fees', coverLevel: 'Mortality + $15k vet cover', estimatedPremium: '$900–$1,600/yr' },
      { scenario: 'Stakes winner, $200,000 value, comprehensive cover', coverLevel: 'Mortality + vet + loss of use', estimatedPremium: '$7,000–$14,000/yr' },
      { scenario: 'Breeding stallion, $500,000 value, mortality + infertility', coverLevel: 'Mortality + stallion infertility', estimatedPremium: '$18,000–$35,000/yr' },
      { scenario: 'Standardbred in training, $15,000, mortality only', coverLevel: 'Mortality only', estimatedPremium: '$500–$900/yr' },
    ],
    longFormBody: `## Racehorse & Thoroughbred Insurance: A Complete Guide

Insuring a racehorse is not simply a matter of applying a standard equine policy. The racing industry in New Zealand has its own risk profile, ownership structures, and valuation conventions that demand specialist knowledge. Whether you own a single thoroughbred in a small syndicate or manage a racing stable of 20 horses, understanding the insurance landscape is essential.

### Thoroughbred Insurance vs Standard Equine Insurance

Standard equine insurance policies are designed for leisure and sport horses. They work well for a $15,000 showjumper or a family pony — but they often fall short for thoroughbreds because they may not accommodate agreed value policies that reflect racing value, may exclude coverage during racing, may not extend to stallion infertility or reproductive covers, and may have insufficient vet fee limits for the costs common in racing.

Specialist thoroughbred insurers — particularly those with Lloyd's of London access such as NZB Insurance and Gallagher — can provide agreed value policies, flexible vet fee limits, and covers like stallion infertility and prospective foal insurance that standard policies simply don't offer.

### Insuring at Racing Value vs Purchase Price

Thoroughbred values are dynamic. A horse purchased as a yearling for $40,000 might be worth $20,000 if it has modest race results — or worth $400,000 if it becomes a stakes performer. The insurance sum insured should reflect the current market value of the horse as a going racing entity, informed by recent race performance, earnings, and comparable sales.

Underinsuring is a common and costly mistake. If you insure a $200,000 horse for $80,000 (its original purchase price) and it dies on the track, you receive $80,000 while facing a $200,000 replacement cost. Work with your trainer, bloodstock agent, or a specialist insurance broker to establish and annually review the appropriate sum insured.

### Insurance for Racing Syndicates

Most New Zealand thoroughbreds are owned through registered racing syndicates. From an insurance perspective, the key considerations for syndicates are:

**Insured value vs proportional ownership**: The policy should cover the horse's full value, not just your proportional share. In the event of a claim, the manager distributes proceeds to owners according to their ownership percentage.

**Named insured and interests**: All ownership interests should be noted on the policy. This is important in the event of a claim or dispute.

**Syndicate manager responsibilities**: Syndicate managers have an obligation to keep owners informed of insurance arrangements. Most syndicates include insurance costs as part of the monthly training fees.

**What happens when a horse changes hands**: If shares are sold or the horse is transferred to a new syndicate, the policy needs to be updated to reflect the change in ownership.

### Standardbred Insurance

Standardbred harness racing horses — pacers and trotters — are covered by the same specialist equine insurers as thoroughbreds. The key differences in the risk profile are the gait (which places different physical stress on the horse), the equipment (sulky, harness, and associated gear risks), and the valuation (standardbreds are generally valued lower than thoroughbreds of equivalent race success).

The insurance principles are the same: insure at current racing value, carry adequate vet fee cover, and consider loss of use for horses with significant racing or stud value.

### NZB Insurance: The Industry's First Choice

For thoroughbred and bloodstock insurance in New Zealand, NZB Insurance is the specialist first port of call. As a Lloyd's of London coverholder and long-standing New Zealand Bloodstock partner, NZB Insurance has the market capacity to insure horses of any value and the industry knowledge to structure policies that reflect how the racing industry actually works. Pearl Series race sponsorship reflects their commitment to New Zealand thoroughbred racing at every level.

### Gallagher: Specialist Broker with 40+ Years in Bloodstock

Gallagher Insurance NZ brings four decades of specialist equine and bloodstock experience, with Lloyd's of London relationships that allow bespoke policy construction for complex racing operations. Their team understands the nuances of insuring stallions transitioning from racing to stud, insuring broodmares, and arranging cover for multi-horse racing stables.

### Checklist for Racing Syndicate Insurance

Before your next racing season, confirm: current market value of every horse has been reviewed; transit cover is in place for all float movements; vet fee limits are adequate for emergency surgery costs; all syndicate participants are aware of insurance arrangements; and the policy covers racing activities specifically.`,
    policyTips: [
      'Review the insured value at least annually — racing success can significantly change your horse\'s value',
      'Confirm that your policy explicitly covers racing and training activities — some standard policies exclude high-risk activities',
      'Syndicate managers should document insurance arrangements and share policy details with all co-owners',
      'For a horse valued over $100,000, use a specialist bloodstock broker with Lloyd\'s access',
      'Stallion infertility insurance should be arranged before the horse begins stud duties',
      'Always disclose previous injuries and health conditions — non-disclosure is the most common reason claims are declined',
    ],
    faqs: [
      {
        q: 'Is my thoroughbred insured while it\'s actually racing?',
        a: 'Most specialist thoroughbred policies cover the horse during training and racing. However, standard equine policies may exclude racing activities as a high-risk activity. Always confirm with your broker that your policy explicitly covers your horse during race starts, barrier trials, jump-outs, and training gallops. Specialist providers like NZB Insurance and Gallagher structure their policies to cover horses in active racing.',
      },
      {
        q: 'What is bloodstock insurance and how does it differ from standard horse insurance?',
        a: 'Bloodstock insurance is specialist coverage for thoroughbred and standardbred horses — particularly those with significant racing or stud value. It is typically placed through insurers with Lloyd\'s of London capacity, which allows coverage for horses of any value with agreed policy terms. Standard equine policies cap at relatively modest values and may not accommodate the specific needs of the racing industry.',
      },
      {
        q: 'Can I insure a horse for its potential future racing value?',
        a: 'No — insurance covers the current market value of the horse, not projected future value. However, once your horse achieves significant race success and its value increases, you can and should update the sum insured to reflect the new value. Annual policy reviews are important for racehorses whose value changes with performance.',
      },
      {
        q: 'What is stallion infertility insurance?',
        a: 'Stallion infertility insurance provides compensation if a breeding stallion becomes unable to breed due to injury, illness, or unexplained reproductive failure. Given that a top stallion\'s value is entirely tied to its reproductive capacity, this cover is essential for any stallion that has significant stud value. It is a specialist product available through brokers like NZB Insurance and Gallagher with Lloyd\'s market access.',
      },
      {
        q: 'What does prospective foal insurance cover?',
        a: 'Prospective foal insurance (also called in-foal insurance) covers the value of an unborn foal. This is typically arranged once a mare is confirmed in foal after the first 45 days of gestation. It covers the loss of the foal through abortion, stillbirth, or death shortly after birth. The insured value is based on the expected value of the foal given the bloodlines of both sire and dam. Available through specialist bloodstock brokers only.',
      },
      {
        q: 'My horse fractured on the track. Is it covered?',
        a: 'A horse that suffers a catastrophic fracture on the track and must be humanely destroyed is covered under a mortality policy — provided the policy is in force and the horse was engaged in covered activities (racing and training). The insurer will require a veterinarian\'s certificate confirming the nature of the injury and the necessity of destruction. Claims involving on-track fatalities are generally processed quickly given the urgent nature.',
      },
    ],
    relatedSlugs: [
      { label: 'Mortality Insurance', href: '/types/mortality/' },
      { label: 'Major Medical Cover', href: '/types/major-medical/' },
      { label: 'Loss of Use Insurance', href: '/types/loss-of-use/' },
      { label: 'Transit Insurance', href: '/types/transit/' },
      { label: 'Racehorse Insurance Guide', href: '/blog/racehorse-insurance-new-zealand/' },
      { label: 'Compare Providers', href: '/compare/' },
    ],
  },

  {
    slug: 'breeding',
    name: 'Breeding Stock',
    icon: '🌿',
    image: '/images/equine-hero-3.png',
    metaTitle: 'Breeding Horse Insurance NZ | Stallion, Broodmare & Foal Cover | EquineInsurance.co.nz',
    metaDescription: 'Specialist breeding stock insurance for stallions, broodmares, and foals. Stallion infertility, prospective foal, and mortality cover. Free quotes from licensed NZ equine insurance brokers.',
    description: 'Breeding stallions, broodmares, and valuable foals represent some of the highest-value and most complex insurance exposures in the equine world. The risks extend beyond the horse itself to include reproductive function, unborn foals, and the significant veterinary costs associated with breeding, foaling, and early foal care.',
    keyStats: [
      { label: 'Top NZ stallion stud fee', value: '$50,000+/service' },
      { label: 'Difficult foaling vet cost', value: '$5,000–$20,000' },
      { label: 'Neonatal foal intensive care', value: '$500–$2,000/day' },
      { label: 'Breeding mare value range', value: '$20,000–$500,000+' },
    ],
    commonRisks: [
      'Stallion infertility from injury, illness, or unexplained reproductive failure',
      'Broodmare complications during pregnancy, foaling, or post-foaling recovery',
      'Foal losses at birth, from neonatal illness, or in the first weeks of life',
      'Reproductive tract injuries affecting future breeding capacity',
      'Retained placenta and resulting complications in broodmares',
      'Hernias and neonatal maladjustment syndrome (dummy foal) in newborns',
      'Paddock injuries during the critical breeding and foaling season',
    ],
    recommendedCover: [
      'Mortality insurance for stallions and broodmares at full reproductive value',
      'Stallion infertility cover — essential for any stallion with significant stud value',
      'Prospective foal insurance once pregnancy is confirmed after 45 days gestation',
      'Broodmare infertility cover if loss of breeding function would materially affect value',
      'Veterinary fee cover for reproductive treatments, foaling complications, and neonatal care',
      'Loss of use if the horse\'s value is tied to its breeding function',
    ],
    whyInsure: [
      {
        heading: 'Stallion infertility is a financial catastrophe without cover',
        body: 'A thoroughbred stallion covering 100 mares per season at $5,000 per service generates $500,000 in stud fees annually. If that stallion becomes infertile due to injury or illness, the entire revenue stream disappears — along with a capital asset worth hundreds of thousands or even millions of dollars. Stallion infertility insurance covers the capital value of the horse in the event reproductive function is permanently lost. Without it, the financial exposure is existential for a stud operation.',
      },
      {
        heading: 'Broodmare foaling complications are common',
        body: 'Foaling is one of the most dangerous events in a broodmare\'s life. Dystocia (difficult birth), uterine rupture, retained placenta, and post-foaling laminitis are all genuine risks with significant veterinary costs. A difficult foaling requiring surgical intervention can cost $10,000 to $20,000 in emergency vet fees. Comprehensive vet fee cover that specifically includes foaling complications is essential for any serious breeding operation.',
      },
      {
        heading: 'Foal losses represent both financial and emotional loss',
        body: 'Foal mortality in the first weeks of life is more common than many owners expect. Neonatal maladjustment syndrome, septicaemia, ruptured bladder, and joint ill are among the conditions that can kill foals quickly despite intensive veterinary care. Prospective foal insurance and early foal cover can help offset the cost of both veterinary treatment and the loss of the foal itself — which may represent significant value depending on the bloodlines involved.',
      },
      {
        heading: 'Breeding values change quickly',
        body: 'A stallion\'s commercial value fluctuates with his book size, race results of his progeny, and the overall thoroughbred market. A stallion worth $2M in 2022 might be worth $800,000 in 2025 if his progeny underperform — or $5M if a Group 1 winner emerges. Annual insurance valuations are essential to keep coverage aligned with the current market.',
      },
    ],
    coverageBreakdown: [
      { type: 'Mortality', slug: 'mortality', description: 'Pays the agreed value of your breeding stock if the horse dies from injury or illness or is humanely destroyed.', typicalLimit: 'Agreed value — from $20,000 to millions for elite breeding animals', isEssential: true },
      { type: 'Stallion Infertility', slug: 'loss-of-use', description: 'Pays if a breeding stallion permanently loses the ability to reproduce due to injury, illness, or reproductive failure.', typicalLimit: 'Full breeding/stud value or a defined proportion', isEssential: true },
      { type: 'Major Medical', slug: 'major-medical', description: 'Covers vet fees for illness and injury including reproductive treatments, foaling complications, and neonatal care.', typicalLimit: '$10,000–$30,000 per event', isEssential: true },
      { type: 'Prospective Foal', slug: 'mortality', description: 'Insures the value of an unborn foal once pregnancy is confirmed after 45 days gestation. Covers abortion, stillbirth, and early foal death.', typicalLimit: 'Expected foal value based on bloodlines', isEssential: false },
      { type: 'Transit', slug: 'transit', description: 'Covers mares during transport to and from stud farms and vet clinics, and foals during transport.', typicalLimit: 'Full insured value in transit', isEssential: true },
    ],
    costGuide: [
      { scenario: 'Broodmare, $30,000, mortality + vet fees', coverLevel: 'Mortality + $15k vet cover', estimatedPremium: '$1,100–$2,000/yr' },
      { scenario: 'Commercial stallion, $500,000, mortality + infertility', coverLevel: 'Mortality + stallion infertility', estimatedPremium: '$18,000–$35,000/yr' },
      { scenario: 'Warmblood broodmare, $80,000, comprehensive cover', coverLevel: 'Mortality + vet + foaling cover', estimatedPremium: '$3,000–$5,500/yr' },
      { scenario: 'Prospective foal, expected value $25,000', coverLevel: 'Prospective foal only', estimatedPremium: '$500–$1,200/yr' },
    ],
    longFormBody: `## Breeding Stock Insurance: Protecting Your Stud Operation

Breeding horse insurance is among the most complex and highest-stakes areas of equine insurance. The animals involved are often the most valuable in the industry, the risks are unique, and the financial consequences of an uninsured loss can be catastrophic for a stud operation.

### Why Breeding Insurance is Different

When you insure a leisure horse or competition horse, the primary concern is the horse's life and health. When you insure breeding stock, you're also insuring the horse's functional capacity — its ability to reproduce. A stallion that lives but cannot breed is, from a commercial stud perspective, worth nothing as a breeding entity despite still being alive. Standard mortality insurance would not pay a cent in that scenario. Specialist infertility and loss of use covers exist to address exactly this risk.

Similarly, broodmare insurance needs to account for the value of what the mare produces — not just the mare herself. A broodmare from elite bloodlines might be worth $60,000 herself, but could produce foals worth $100,000 or more each. Covers like prospective foal insurance extend protection to the unborn foal, providing meaningful financial protection for breeding operations.

### Stallion Insurance: The Core Considerations

**Agreed value at stud**: Stallion values are primarily a function of their earning potential as a sire — which is itself a function of their book size, service fee, and most importantly, the race performance of their progeny. The insured value should reflect the current commercial stud value, which changes as the stallion's reputation develops.

**Infertility cover**: This is the most important specialist cover for any commercial stallion. Stallion infertility insurance pays the agreed stud value if the horse permanently loses reproductive function, whether due to physical injury to the reproductive tract, systemic illness affecting fertility, or unexplained reproductive failure. Note that most policies require a defined waiting period (often 12 months) and objective veterinary confirmation of permanent infertility before paying.

**Coverage during covering season**: Confirm that your policy covers the horse during the covering season — the highest-risk period for reproductive tract injury.

**Book limitations**: Some policies apply different terms based on whether the stallion is a thoroughbred, warmblood, or standardbred, and whether the book size (number of mares covered per season) is private or commercial.

### Broodmare Insurance: Key Considerations

A broodmare's value is a combination of her own bloodlines and proven record as a producer. A mare who has produced multiple stakes winners is worth considerably more than her purchase price, and this value needs to be reflected in the insurance coverage.

**Foaling cover**: Not all equine policies automatically include coverage during foaling. For broodmares, this is the highest-risk time. Confirm that your policy covers complications arising during foaling, including dystocia, uterine rupture, retained placenta, and post-foaling illness.

**Infertility or loss of reproductive use**: If a broodmare suffers a reproductive tract injury that prevents future breeding, she may still be alive but her commercial value is dramatically reduced or eliminated. Broodmare infertility cover addresses this — though it is less commonly arranged than stallion infertility cover.

**In-foal mares**: Mares confirmed in foal carry a higher risk profile and may be assessed differently at renewal. Ensure your policy remains in force and covers the mare throughout the foaling season.

### Prospective Foal Insurance

Prospective foal insurance provides coverage for an unborn foal from the point pregnancy is confirmed — typically after the first 45 days of gestation when the risk of early embryonic loss reduces. It covers:

- Abortion (loss of pregnancy before 300 days gestation)
- Stillbirth (foal born dead after 300 days)
- Death of the live-born foal within the first 30 days (varies by policy)

The insured value is typically set based on the expected commercial value of the foal given the sire and dam's pedigree and race records. For a foal by a top thoroughbred sire out of a well-credentialed mare, this can be $50,000 to $200,000 or more.

### Foal Insurance

Once a foal is born alive, prospective foal insurance typically converts to a live foal policy covering the first 30 days of life — the highest-risk period. Extended foal cover can be arranged to cover the foal through weaning and beyond.

Young foal illnesses including joint ill, neonatal maladjustment syndrome, and enteritis are genuine risks with significant treatment costs and high mortality rates. A week in an equine intensive care unit can cost $1,500 to $2,000 per day.

### Which Providers Cover Breeding Stock?

**NZB Insurance** is New Zealand's leading bloodstock insurer and the primary specialist for thoroughbred breeding operations. As a Lloyd's coverholder, NZB can insure horses of any value and provide all the specialist covers — stallion infertility, prospective foal, in-foal mare coverage — that a stud farm requires.

**Gallagher Insurance NZ** brings 40+ years of specialist bloodstock brokering experience and Lloyd's market access. Gallagher's team can arrange bespoke coverage for complex stud operations including warmblood and sport horse breeding programmes where NZB's thoroughbred focus may be less directly applicable.

For warmblood, sport horse, and non-thoroughbred breeding operations, both brokers can access specialist markets, though the policy terms may differ from thoroughbred bloodstock products.`,
    policyTips: [
      'Stallion infertility insurance should be arranged before the breeding season begins — not after',
      'Review breeding stock values annually — stallion and broodmare values change with progeny performance',
      'Ensure foaling cover is explicitly included in your broodmare policy',
      'Prospective foal insurance is typically available from day 45 of gestation',
      'For commercial stud operations, consult a specialist bloodstock broker — standard equine policies are inadequate',
      'Disclose all reproductive history including previous foaling difficulties or fertility treatments',
    ],
    faqs: [
      {
        q: 'At what point can I insure my in-foal mare for the foal?',
        a: 'Prospective foal insurance is typically available once pregnancy is confirmed after 45 days gestation. Early embryonic loss (before 45 days) is common and is generally not covered. After 45 days, when pregnancy is confirmed via ultrasound, you can arrange prospective foal insurance to cover the risk of abortion, stillbirth, or early foal death. Contact your broker as soon as pregnancy is confirmed to arrange this cover.',
      },
      {
        q: 'What does stallion infertility insurance actually pay out?',
        a: 'Stallion infertility insurance pays the agreed insured value of the stallion\'s stud worth — not the mortality/market value of the horse as a physical animal. A stallion might be worth $30,000 as a horse but $800,000 as a breeding stallion. The infertility policy covers the stud value. Payout requires veterinary confirmation of permanent infertility, typically after a defined waiting period of 12 months of documented breeding failure.',
      },
      {
        q: 'Is my broodmare covered during foaling?',
        a: 'This depends on the specific policy. Not all equine policies automatically include foaling cover — some exclude injuries or complications arising directly from foaling as a standard exclusion. It is essential to confirm with your broker that your policy explicitly covers foaling complications including dystocia, uterine rupture, retained placenta, and post-foaling illness. If your current policy excludes foaling, this is a significant gap that should be addressed before the breeding season.',
      },
      {
        q: 'Can I insure a foal that has not yet been born?',
        a: 'Yes. Prospective foal insurance covers the unborn foal from approximately day 45 of confirmed pregnancy. The insured value is typically based on the expected commercial value of the foal given the sire, dam, and market conditions. At birth, the policy typically converts to a live foal policy covering the first 30 days of life. Your broker can advise on timing and the appropriate insured value.',
      },
      {
        q: 'My broodmare had twins — are both foals covered?',
        a: 'Twin pregnancies in mares are high-risk — most equine vets recommend reducing to a single foal because the survival rate for both twins is low. Twin coverage and what happens to the prospective foal policy in a twin pregnancy should be discussed with your broker before foaling season. Some policies may have specific exclusions or conditions relating to twin pregnancies.',
      },
      {
        q: 'What information do I need to get a quote for breeding stock?',
        a: 'For a quote, you will typically need: the horse\'s name, age, breed, and registered details; current market or stud value; breeding history including seasons covered (for stallions) or foaling record (for mares); any known health conditions or reproductive history; and details of your intended covers (mortality, infertility, prospective foal). A specialist broker will guide you through the process and may request a veterinary certificate for higher-value animals.',
      },
    ],
    relatedSlugs: [
      { label: 'Mortality Insurance', href: '/types/mortality/' },
      { label: 'Major Medical Cover', href: '/types/major-medical/' },
      { label: 'Loss of Use Insurance', href: '/types/loss-of-use/' },
      { label: 'Thoroughbred Breeding Guide', href: '/blog/thoroughbred-breeding-insurance-nz/' },
      { label: 'Compare Providers', href: '/compare/' },
      { label: 'Racehorse Insurance', href: '/horses/thoroughbreds/' },
    ],
  },

  {
    slug: 'leisure',
    name: 'Leisure & Pleasure Horses',
    icon: '🌄',
    image: '/images/equine-hero-4.png',
    metaTitle: 'Leisure Horse Insurance NZ | Family Ponies, Hacking & Pony Club | EquineInsurance.co.nz',
    metaDescription: 'Horse insurance for leisure horses, family ponies, trail riding, and pony club in New Zealand. Get a free quote from licensed NZ equine insurance advisers. From $150/year.',
    description: 'New Zealand has one of the highest rates of horse ownership per capita in the world, and the majority of those horses are leisure horses — paddock companions, family ponies, trail riding horses, and pony club mounts. While these horses may not carry the financial value of elite competition horses, they are often irreplaceable to their owners, and the liability risks they create are identical to those of high-value horses.',
    keyStats: [
      { label: 'NZ horse owners (est)', value: '100,000+' },
      { label: 'Basic mortality cover from', value: '~$150/yr' },
      { label: 'Colic surgery cost', value: '$10,000–$25,000' },
      { label: 'Third-party liability claim', value: 'Up to $500,000+' },
    ],
    commonRisks: [
      'Colic — a leading cause of death and major vet expense for all horses',
      'Paddock injuries from fencing, other horses, and terrain hazards',
      'Rider falls and resulting injury claims from third parties',
      'Damage caused to neighbouring property or vehicles',
      'Injuries from trail riding on varied terrain',
      'Float accidents during transport to pony club or events',
      'Theft — especially of ponies and small horses in rural areas',
    ],
    recommendedCover: [
      'Public liability insurance — essential for all horses regardless of value',
      'Major medical cover for colic and emergency vet treatment',
      'Mortality insurance if the horse has significant financial value',
      'Transit cover if regularly floated to events or clinics',
      'Personal accident cover for riders — to supplement ACC entitlements',
      'Theft cover in higher-risk rural or semi-rural areas',
    ],
    whyInsure: [
      {
        heading: 'Colic can strike any horse — and costs a fortune',
        body: 'Colic is the single most common reason horses are presented for emergency veterinary care in New Zealand. Surgical colic — where the horse requires an operation to correct an intestinal obstruction or displacement — can cost $10,000 to $25,000 in veterinary fees. Even medical colic with intensive treatment and hospitalisation can cost $3,000 to $8,000. For a leisure horse owner who didn\'t budget for this, a single colic event can be financially devastating.',
      },
      {
        heading: 'Liability is the same regardless of the horse\'s value',
        body: 'A family pony that bolts and causes a car accident creates the same liability exposure as a $200,000 competition horse. If your horse escapes from the paddock and causes a vehicle crash on the road — which does happen — the driver of the car can make a substantial claim against you. If a rider falls from your horse and suffers a serious injury, a liability claim can run into hundreds of thousands of dollars. Public liability insurance addresses this risk for a few hundred dollars a year.',
      },
      {
        heading: 'The emotional value often exceeds the financial value',
        body: 'A family pony that a child has grown up with for ten years is irreplaceable emotionally, even if its market value is only $3,000. Many leisure horse owners insure at a value that reflects what they would actually spend to find an equivalent horse — which is often more than the strict market value of the animal. Some insurance policies allow you to insure at an agreed value that accounts for replacement cost in the real market.',
      },
      {
        heading: 'Pony Club and equestrian venue requirements',
        body: 'Most pony clubs and equestrian facilities require members and riders to hold current public liability insurance. Pony Club NZ generally requires affiliated members to hold liability insurance as a condition of participation in events. This is one of the most practical reasons for leisure horse owners to take out even a basic insurance policy.',
      },
    ],
    coverageBreakdown: [
      { type: 'Liability', slug: 'liability', description: 'Third-party cover for injury or property damage caused by your horse. Essential for all horse owners regardless of value.', typicalLimit: '$1M–$5M', isEssential: true },
      { type: 'Major Medical', slug: 'major-medical', description: 'Covers vet fees for illness and injury including colic treatment, surgery, and hospitalisation.', typicalLimit: '$5,000–$15,000 per event', isEssential: true },
      { type: 'Mortality', slug: 'mortality', description: 'Pays the insured value if your horse dies from injury or illness or is humanely destroyed.', typicalLimit: 'Agreed value — commonly $3,000–$20,000 for leisure horses', isEssential: false },
      { type: 'Transit', slug: 'transit', description: 'Covers your horse during float travel to pony club, events, trail rides, and vet appointments.', typicalLimit: 'Full insured value in transit', isEssential: false },
      { type: 'Personal Accident', slug: 'major-medical', description: 'Covers the rider for accidents while riding — supplements ACC for income loss, disability, and some medical costs not covered by ACC.', typicalLimit: 'Varies — typically $100k–$500k', isEssential: false },
    ],
    costGuide: [
      { scenario: 'Family pony, $5,000 value, liability + mortality', coverLevel: 'Liability $2M + mortality', estimatedPremium: '$180–$350/yr' },
      { scenario: 'Trail horse, $12,000, liability + major medical + mortality', coverLevel: 'Comprehensive leisure cover', estimatedPremium: '$450–$750/yr' },
      { scenario: 'Two horses, $8,000 each, liability + colic cover', coverLevel: 'Liability + vet fees to $8k', estimatedPremium: '$600–$1,000/yr' },
      { scenario: 'Liability only (no mortality)', coverLevel: '$2M public liability', estimatedPremium: '$150–$280/yr' },
    ],
    longFormBody: `## Leisure Horse Insurance: The Complete Guide for NZ Horse Owners

Horse insurance is not just for elite competition horses and high-value thoroughbreds. Every horse — from a $3,000 family pony to a $25,000 trail horse — creates financial and legal risks that are worth protecting against. This guide covers everything New Zealand leisure horse owners need to know about insurance.

### Do I Really Need to Insure My Horse?

Horse insurance is not legally required in New Zealand. But consider this: if your horse colics overnight and requires emergency surgery, you are looking at a $10,000 to $25,000 vet bill with no warning. If your horse escapes its paddock, causes a vehicle accident on the road, and the driver is seriously injured, you are personally liable for a claim that could exceed $500,000. If your horse injures another person at a pony club event, the same liability exposure applies.

For most horse owners, the answer to "do I need insurance?" is yes — at minimum for public liability, and strongly recommended for veterinary fee cover.

### Understanding Public Liability for Horse Owners

Public liability insurance for horse owners covers you when your horse causes injury or damage to a third party. This includes:

- Your horse escaping and causing a vehicle accident
- Your horse injuring another person (whether or not they were riding)
- Your horse damaging a neighbour's property or fencing
- A visitor to your property being injured by your horse
- Your horse injuring or killing another animal

New Zealand's ACC system covers injury treatment costs for people injured in accidents, but it does not cover property damage, lost income for the injured party, or compensation for pain and suffering. A serious liability claim that results in permanent disability for the injured party can generate a damages award of $300,000 to $1,000,000 or more — figures that would be ruinous without insurance.

Public liability premiums for a single horse typically start at around $150 to $250 per year. This is one of the best-value insurance purchases available to any horse owner.

### Colic Insurance: Why It Matters More Than Mortality

Many horse owners focus on mortality insurance — the cover that pays out if their horse dies. But statistically, horses are far more likely to require emergency colic surgery than to die from an accident. And colic surgery, unlike death, creates a large and immediate financial demand on the owner.

Surgical colic requires the horse to be transported to an equine hospital, placed under general anaesthetic, and operated on by specialist equine surgeons. The direct cost of surgery and post-operative care is typically $10,000 to $25,000. Follow-up care, medications, and the recovery period add further costs.

Many insurance policies include a specific colic surgery benefit, or cover it within a broader major medical or vet fee policy. When comparing policies, ask specifically about colic surgery cover — whether it is included or excluded, what the per-event limit is, and whether there is a waiting period before you can claim.

### The Value Question: How Much to Insure For

Setting the right sum insured for a leisure horse is straightforward but important. The insured value should reflect what you would actually spend to replace the horse with something comparable — not just the horse's market value in isolation.

If you have a 14-hand grey pony that your daughter has been competing successfully with for three years, the replacement cost of finding an equivalent, proven, child-safe pony in the current market might be $10,000 to $18,000 even if you bought it for $6,000. Insuring at the original purchase price creates a gap between the claim settlement and what you actually need to spend.

### Pony Club Insurance Requirements

Pony Club NZ requires members to hold current liability insurance as a condition of participation in affiliated events, rallies, and competitions. The requirement is typically for a minimum of $1 million public liability per event, though checking with your specific club for the current requirements is advisable.

Most standard equine insurance policies that include a liability component will satisfy Pony Club NZ requirements. Confirm the liability limit and geographic coverage (ensure it covers off-property activities) with your broker.

### Agistment and Shared Horse Care

If your horse is agisted (kept at a property you don't own), the agistment operator may carry public liability insurance for their property — but this typically protects them, not you as the horse owner. Your own liability policy covers claims made against you as the horse owner, which is a separate exposure.

If you share ownership, share agistment costs, or allow others to ride or handle your horse, discuss these arrangements with your broker. Some policies cover injuries involving handlers and riders; others do not. Getting this right before an incident is important.

### Trail Riding and Off-Property Cover

Many leisure horse owners trail ride on public land, tracks managed by local councils, or private property with permission. Confirm that your liability policy covers off-property activities — most standard equine liability policies do, but it is worth confirming.

If you participate in organised trail rides through clubs or associations, check whether the organising group's liability cover extends to participants, or whether you need your own policy.

### What Pet-n-Sur Offers Leisure Horse Owners

Pet-n-Sur is the best-known direct equine insurer for leisure horses in New Zealand. As a 100% NZ-owned company with 19+ years in the market and over $60 million in claims paid, they have the track record and market knowledge for everyday horse insurance. Their claims process pays 99.3% of claims within 14 days — an important practical consideration when you're waiting for reimbursement after an emergency vet visit.

### What Petcover NZ Offers

Petcover NZ is a strong alternative for leisure horse owners, particularly if fast claims processing and direct vet payment are priorities. Their 90%+ claims settlement within 5 days and vet-direct payment facility (where bills are settled directly with the clinic) removes the financial stress of large upfront vet costs during an emergency.`,
    policyTips: [
      'Start with public liability — it is the most important cover for any horse owner and one of the cheapest',
      'Ask specifically whether colic surgery is covered in your major medical policy',
      'Insure at replacement cost, not original purchase price',
      'If your child rides the horse, confirm the policy covers rider personal accident',
      'Check whether your policy covers the horse if someone else is riding or handling it',
      'Tell your broker if the horse is floated regularly — transit cover should be added',
    ],
    faqs: [
      {
        q: 'What is the minimum insurance I should have for a horse?',
        a: 'At minimum, every horse owner should carry public liability insurance. This covers you for claims made by third parties who are injured or suffer property damage because of your horse. Liability premiums start from around $150 per year and provide $1 million to $5 million in coverage. Major medical cover (vet fees) is the next most important addition, particularly for cover against colic surgery.',
      },
      {
        q: 'My horse is only worth $3,000 — is it worth insuring?',
        a: 'Yes. Mortality insurance for a $3,000 horse may not be essential, but liability insurance absolutely is. Your horse\'s value has no bearing on the liability it creates. If a $3,000 pony causes a $400,000 personal injury claim, you are personally responsible. Vet fee cover is also worth considering: a $3,000 horse can generate a $15,000 colic surgery bill. Insuring for liability and vet fees is the right approach even when the horse has modest financial value.',
      },
      {
        q: 'Does ACC cover horse riding injuries?',
        a: 'ACC covers the cost of medical treatment and some rehabilitation for injuries sustained while horse riding. However, ACC does not cover: damage to your horse; damage to other people\'s property; income replacement beyond ACC\'s defined entitlements; compensation for pain and suffering; or liability claims made against you by an injured third party. Horse owners need their own liability and personal accident insurance to complement ACC.',
      },
      {
        q: 'My horse escaped and damaged my neighbour\'s fence. Am I covered?',
        a: 'Property damage caused by your horse to a third party is covered under a public liability policy. If your horse breaks through a fence onto a neighbour\'s property and damages their fence, garden, or other property, your liability policy should cover the repair or replacement cost. You are the owner of the horse and responsible for its containment — if your horse causes damage, you are liable.',
      },
      {
        q: 'Can I insure a horse I share with someone else?',
        a: 'Yes. Shared horses can be insured, but the policy should reflect the ownership arrangement. If you and another person jointly own the horse, both owners can be named on the policy. If you share costs but one person is the legal owner, the owner should be the policyholder and any other regular users should be named as additional insured parties where the policy allows.',
      },
      {
        q: 'How do I make a claim for a vet fee after colic treatment?',
        a: 'Contact your insurer or broker as soon as possible — ideally before major treatment begins where time allows. For emergency colic, treatment necessarily comes first. After treatment, submit a claim form with the vet\'s invoices and clinical notes describing the diagnosis and treatment. Most insurers settle vet fee claims within 5 to 14 business days. Petcover NZ pays directly to the vet clinic, which eliminates the need to pay large bills upfront.',
      },
    ],
    relatedSlugs: [
      { label: 'Liability Insurance', href: '/types/liability/' },
      { label: 'Major Medical Cover', href: '/types/major-medical/' },
      { label: 'Colic Insurance Guide', href: '/blog/colic-insurance-nz-what-you-need-to-know/' },
      { label: 'Horse Insurance Costs', href: '/blog/how-much-does-horse-insurance-cost-nz/' },
      { label: 'Compare Providers', href: '/compare/' },
      { label: 'Get a Quote', href: '/contact/' },
    ],
  },
]

export function getHorseTypeBySlug(slug: string): HorseType | undefined {
  return horseTypes.find((h) => h.slug === slug)
}
