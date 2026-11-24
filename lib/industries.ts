/**
 * Industry data layer — the engine of the site.
 *
 * Every industry page (/by-industry/[slug]) is rendered from one typed `Industry`
 * object. Add an industry by dropping a file in /content/industries and registering
 * it below. The dynamic route, sitemap, schema, comparison table, and pricing card all
 * read from this single shape, so every industry page stays structurally identical and
 * AI-extractable (the GEO goal).
 *
 * DATA-CONFIDENCE POLICY (field-level, not page-level):
 *  - A price is publishable + fed to the AI-extractable block ONLY when it comes from a
 *    vendor's own current pricing page. Mark such a figure `structured: true` and attach
 *    its `source` (URL + date checked).
 *  - A vendor that does NOT publish a price is recorded as `monthlyFromUsd: null`
 *    ("Custom / contact sales") — never a guessed number.
 *  - Third-party "estimated ranges" are NOT treated as vendor-confirmed facts.
 *  - Index an industry page only when `dataVerified: true` (researched + sourced).
 *    Draft/seed pages stay `dataVerified: false` and are set to noindex.
 */

export interface FieldSource {
  name: string
  url: string
  /** ISO date the figure was checked, e.g. "2026-07-08". */
  checked: string
}

export interface SearchMeta {
  /** Monthly search volume for the primary keyword (from Semrush). */
  monthlyVolume: number | null
  /** Keyword difficulty 0-100. */
  kd: number | null
  /** CPC in USD — drives AdSense priority. */
  cpc: number | null
}

/** Published plan price range for this industry, in USD per month (plan price, not per technician). */
export interface PriceRange {
  min: number | null
  max: number | null
  /** e.g. "per technician / month", or a caveat when figures are indicative. */
  note?: string
  source?: FieldSource
  /** Include in the AI-extractable structured data card (only when vendor-sourced). */
  structured: boolean
}

export function isPricePublishable(p: PriceRange): boolean {
  return p.structured === true && p.min != null
}

export interface IndustryProviderRef {
  /** Must match a slug in lib/providers.ts */
  slug: string
  /** Industry-specific positioning, e.g. "Best overall", "Most affordable". */
  positioning: string
  /**
   * Lowest published starting price per month in USD, or null when the vendor only
   * quotes custom pricing ("Custom / contact sales").
   */
  monthlyFromUsd: number | null
  /** Optional fit notes; rendered as a per-tool breakdown when any provider has them. Sourced claims only. */
  fit?: {
    bestFor: string
    strengths: string[]
    limitations: string[]
  }
}

export interface IndustryFAQ {
  question: string
  /** Keep concrete: include a tool name + a $ figure where possible. <300 chars ideal for GEO. */
  answer: string
}

export interface Industry {
  slug: string
  /** Short display name used in copy, e.g. "HVAC", "Plumbing". */
  name: string
  /** Emoji glyph shown in the hero chip / cards. */
  icon: string
  category: 'Trades' | 'Field Services' | 'Technical' | 'Facilities' | 'Specialized'

  /** ~120-150 word direct answer rendered above the fold (GEO requirement). */
  answer: string

  /** One-paragraph "what makes FSM software right for this industry". */
  intro: string

  /** The features companies in this industry specifically need. */
  keyFeatures: string[]

  /** Published plan price range for FSM software in this industry, per month. */
  priceRange: PriceRange

  /** Prioritization data from Semrush (used for build ordering / reporting). */
  search: SearchMeta

  /** Ranked software picks for this industry (first = "Best overall"). */
  providers: IndustryProviderRef[]

  faqs: IndustryFAQ[]

  /** ISO date (YYYY-MM-DD), surfaced as "Last updated" for freshness signals. */
  lastUpdated: string
  /** Gate: false = scaffold/draft data (noindex). true = researched + sourced. */
  dataVerified: boolean
  /** Master list of sources used for this industry (URL + date checked). */
  sources?: FieldSource[]
  /** Page-specific meta description (falls back to the shared template). Keep <=160 chars. */
  metaDescription?: string
  /** Original publish date for Article schema; omit when unknown (falls back to lastUpdated). */
  datePublished?: string
  /** "Which software should you choose?" rows, by business size. Sourced claims only. */
  bySize?: { size: string; pick: string; why: string }[]
  /** Extra H2 sections. Paragraphs may contain [label](/internal-path) links. */
  extraSections?: { id: string; heading: string; paragraphs: string[] }[]
  /** Industry-specific buying mistakes. */
  mistakes?: string[]
  /** Vendors researched, when more than the shortlisted `providers` (shown as "5 of 6"). */
  reviewedCount?: number
}

// ── Registry ───────────────────────────────────────────────────────
// All 7 industries verified (researched + sourced 2026-07-08, dataVerified: true).
// Vendor pricing checked against each vendor's own pricing page; vertical-fit,
// offline, GPS, and asset-tracking claims verified against vendor docs.
import { hvac } from '@/content/industries/hvac'
import { plumbing } from '@/content/industries/plumbing'
import { electrical } from '@/content/industries/electrical'
import { pestControl } from '@/content/industries/pest-control'
import { oilGas } from '@/content/industries/oil-gas'
import { healthcare } from '@/content/industries/healthcare'
import { transportation } from '@/content/industries/transportation'
import { refrigeration } from '@/content/industries/refrigeration'
import { telecom } from '@/content/industries/telecom'
import { equipmentRental } from '@/content/industries/equipment-rental'
import { landscaping } from '@/content/industries/landscaping'
import { cleaning } from '@/content/industries/cleaning'
import { roofing } from '@/content/industries/roofing'
import { poolService } from '@/content/industries/pool-service'
import { garageDoor } from '@/content/industries/garage-door'
import { applianceRepair } from '@/content/industries/appliance-repair'
import { locksmith } from '@/content/industries/locksmith'
import { fireProtection } from '@/content/industries/fire-protection'
import { solar } from '@/content/industries/solar'
import { handyman } from '@/content/industries/handyman'
import { securityAlarm } from '@/content/industries/security-alarm'
import { pressureWashing } from '@/content/industries/pressure-washing'
import { painting } from '@/content/industries/painting'
import { windowCleaning } from '@/content/industries/window-cleaning'
import { carpetCleaning } from '@/content/industries/carpet-cleaning'
import { junkRemoval } from '@/content/industries/junk-removal'
import { septic } from '@/content/industries/septic'
import { chimneySweep } from '@/content/industries/chimney-sweep'
import { airDuctCleaning } from '@/content/industries/air-duct-cleaning'
import { gutter } from '@/content/industries/gutter'
import { moving } from '@/content/industries/moving'
import { treeCare } from '@/content/industries/tree-care'
import { snowRemoval } from '@/content/industries/snow-removal'
import { irrigation } from '@/content/industries/irrigation'
import { waterTreatment } from '@/content/industries/water-treatment'
import { siding } from '@/content/industries/siding'
import { restoration } from '@/content/industries/restoration'
import { generator } from '@/content/industries/generator'
import { janitorial } from '@/content/industries/janitorial'
import { mosquitoControl } from '@/content/industries/mosquito-control'
import { flooring } from '@/content/industries/flooring'
import { fencing } from '@/content/industries/fencing'

export const industries: Industry[] = [
  hvac,
  plumbing,
  electrical,
  pestControl,
  oilGas,
  healthcare,
  transportation,
  refrigeration,
  telecom,
  equipmentRental,
  landscaping,
  cleaning,
  roofing,
  poolService,
  garageDoor,
  applianceRepair,
  locksmith,
  fireProtection,
  solar,
  handyman,
  securityAlarm,
  pressureWashing,
  painting,
  windowCleaning,
  carpetCleaning,
  junkRemoval,
  septic,
  chimneySweep,
  airDuctCleaning,
  gutter,
  moving,
  treeCare,
  snowRemoval,
  irrigation,
  waterTreatment,
  siding,
  restoration,
  generator,
  janitorial,
  mosquitoControl,
  flooring,
  fencing,
]

const bySlug = new Map(industries.map((i) => [i.slug, i]))

export function getIndustryData(slug: string): Industry | undefined {
  return bySlug.get(slug)
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug)
}

/** Only industries safe to render publicly (verified + sourced). */
export function getPublishedIndustries(): Industry[] {
  return industries.filter((i) => i.dataVerified)
}

/** All industries for index/listing pages (drafts included, shown with a badge). */
export function getAllIndustries(): Industry[] {
  return industries
}

/** Short price label for cards / KPI strips, honoring the confidence policy. */
export function priceShort(i: Industry): string {
  const p = i.priceRange
  if (p.structured && p.min != null) {
    if (p.max == null) return `from $${p.min}`
    return p.max !== p.min ? `$${p.min}-$${p.max}` : `$${p.min}`
  }
  return 'Varies'
}
