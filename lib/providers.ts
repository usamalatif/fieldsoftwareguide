/**
 * Central FSM software registry. Affiliate/partner URLs live HERE only, never
 * hardcode them in pages. Swap a placeholder for your real tracked affiliate link
 * once approved and every page updates at once.
 *
 * affiliateUrl: set to your tracked affiliate link. Until approved, leave the
 * partner/marketing URL (rel="sponsored nofollow" is applied automatically).
 *
 * Pricing note: `publishedFromUsd` is the lowest price the vendor lists on its OWN
 * pricing page (checked 2026-07-08), which is the ANNUAL-BILLING rate — the basis
 * vendors advertise as "from $X/mo". Month-to-month rates are higher (see
 * `monthlyBilledUsd`). null = the vendor only quotes custom pricing. Per the
 * data-confidence policy we never invent a number for custom-priced tools.
 */
export interface Provider {
  slug: string
  name: string
  /** Short, neutral one-liner. */
  blurb: string
  /** Tracked affiliate/partner link (replace placeholders post-approval). */
  affiliateUrl: string
  /** Internal review page, if published (re-enable per tool as review pages ship). */
  reviewHref?: string
  /** Aggregate rating from public review platforms (0-5). */
  rating: number
  /** Lowest vendor-published starting price per month with ANNUAL billing (USD), or null = custom/quote. */
  publishedFromUsd: number | null
  /** Same entry plan billed month-to-month (USD), when the vendor publishes it. */
  monthlyBilledUsd?: number | null
  /** Source for the published price (vendor pricing page + date checked). */
  priceSource?: { url: string; checked: string }
  /** Avatar background hex (brand mono letter swatch — fallback when no logo file exists). */
  mono: string
  /** Brand domain (reference / favicon fallback). */
  domain: string
  /** Self-hosted logo path under /public/logos/<slug>.svg. Mono tile shows until it exists. */
  logo?: string
}

export const providers: Record<string, Provider> = {
  jobber: {
    slug: 'jobber',
    name: 'Jobber',
    blurb: 'Cloud FSM for small home-service businesses: quoting, scheduling, invoicing, payments.',
    affiliateUrl: 'https://www.getjobber.com/partners/', // TODO: replace with tracked affiliate link
    rating: 4.5,
    publishedFromUsd: 29, // Core, 1 user, annual billing
    monthlyBilledUsd: 49, // Core, month-to-month
    priceSource: { url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    mono: '#149A5B',
    domain: 'getjobber.com',
  },
  'housecall-pro': {
    slug: 'housecall-pro',
    name: 'Housecall Pro',
    blurb: 'All-in-one field service app for home-service pros: scheduling, dispatch, invoicing, payments.',
    affiliateUrl: 'https://www.housecallpro.com/partner/', // TODO: replace with tracked affiliate link
    rating: 4.6,
    publishedFromUsd: 59, // Basic, 1 user, annual billing
    monthlyBilledUsd: 79, // Basic, month-to-month
    priceSource: { url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
    mono: '#0A5AF5',
    domain: 'housecallpro.com',
  },
  servicetitan: {
    slug: 'servicetitan',
    name: 'ServiceTitan',
    blurb: 'Enterprise-grade platform for larger commercial + residential trades, deep operations tooling.',
    affiliateUrl: 'https://www.servicetitan.com/partners', // TODO: replace with tracked affiliate link
    rating: 4.4,
    publishedFromUsd: null, // custom / contact sales (verified 2026-07-08)
    priceSource: { url: 'https://www.servicetitan.com/pricing', checked: '2026-07-08' },
    mono: '#1F1F1F',
    domain: 'servicetitan.com',
  },
  workiz: {
    slug: 'workiz',
    name: 'Workiz',
    blurb: 'FSM for small-to-midsize service businesses, strong on scheduling, dispatch, and built-in comms.',
    affiliateUrl: 'https://www.workiz.com/partners/', // TODO: replace with tracked affiliate link
    rating: 4.5,
    publishedFromUsd: null, // base plan custom / contact sales (verified 2026-07-08)
    priceSource: { url: 'https://www.workiz.com/pricing-plans/', checked: '2026-07-08' },
    mono: '#7A3BF5',
    domain: 'workiz.com',
  },
  fieldpulse: {
    slug: 'fieldpulse',
    name: 'FieldPulse',
    blurb: 'FSM suite for growing trades and multi-location contractors: CRM, scheduling, estimates, work orders.',
    affiliateUrl: 'https://www.fieldpulse.com/partners', // TODO: replace with tracked affiliate link
    rating: 4.7,
    publishedFromUsd: null, // seat-based, custom / contact sales (verified 2026-07-08)
    priceSource: { url: 'https://www.fieldpulse.com/pricing', checked: '2026-07-08' },
    mono: '#F0642D',
    domain: 'fieldpulse.com',
  },
  commusoft: {
    slug: 'commusoft',
    name: 'Commusoft',
    blurb: 'Job-management software for UK/US trades (heating, plumbing, HVAC): scheduling, reminders, CRM.',
    affiliateUrl: 'https://www.commusoft.com/partners/referral-partners/', // TODO: replace with tracked affiliate link
    rating: 4.6,
    publishedFromUsd: null, // contracted licenses, custom / contact sales (verified 2026-07-08)
    priceSource: { url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-07-08' },
    mono: '#0E6DD4',
    domain: 'commusoft.com',
  },
}

export function getProvider(slug: string): Provider | undefined {
  return providers[slug]
}

export function getAllProviders(): Provider[] {
  return Object.values(providers)
}
