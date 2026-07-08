import type { Locale } from './config'

export interface Dictionary {
  nav: { industries: string; sizes: string; compare: string; free: string; guides: string }
  cta: { compare: string; viewAll: string }
  industry: {
    heroSub: (name: string) => string
    reviewed: string
    updated: string
    bestSoftware: (name: string) => string
    bestSoftwareSub: string
    featuresTitle: (name: string) => string
    featuresSub: (name: string) => string
    pricingTitle: (name: string) => string
    pricingSub: (name: string) => string
    faqTitle: string
    faqSub: (name: string) => string
    bottomLine: (name: string) => string
    sources: string
    keepExploring: { compare: string; free: string; all: string }
  }
  footer: { tagline: string; learn: string; browse: string; site: string; affiliate: string; rights: string }
}

const en: Dictionary = {
  nav: { industries: 'By Industry', sizes: 'By Size', compare: 'Compare', free: 'Free', guides: 'Guides' },
  cta: { compare: 'Compare software', viewAll: 'View all industries' },
  industry: {
    heroSub: (name) =>
      `The best field service management software for ${name} companies, compared on real pricing, features, and fit — not generic top-10 lists.`,
    reviewed: 'Pricing checked against vendor pages',
    updated: 'Updated',
    bestSoftware: (name) => `Best FSM software for ${name} — ranked`,
    bestSoftwareSub: 'Compared on starting price, rating, and core strength. Prices are the lowest plan each vendor publishes.',
    featuresTitle: (name) => `Key features ${name} companies need`,
    featuresSub: (name) => `What actually matters when you run field service for a ${name} business.`,
    pricingTitle: (name) => `What ${name} FSM software costs`,
    pricingSub: (name) => `Real, vendor-published starting prices for the tools ${name} companies use most.`,
    faqTitle: 'Frequently asked questions',
    faqSub: (name) => `FSM software for ${name} companies, answered.`,
    bottomLine: (name) => `Bottom line — FSM software for ${name}`,
    sources: 'Sources',
    keepExploring: { compare: 'Compare all FSM software →', free: 'Free FSM software →', all: 'All industries →' },
  },
  footer: {
    tagline: 'Independent field service management software comparison. We are not a software vendor.',
    learn: 'Compare',
    browse: 'By industry',
    site: 'Site',
    affiliate: 'Some links are affiliate links. We may earn a commission — it never affects our scoring.',
    rights: 'Independent FSM software research · by industry & business size',
  },
}

const dictionaries: Record<string, Dictionary> = { en }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en
}
