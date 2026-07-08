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

/** A typical software price range for this industry, in USD per technician / month. */
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

  /** Typical price range for FSM software in this industry, per tech / month. */
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
    return p.max != null && p.max !== p.min ? `$${p.min}-$${p.max}` : `$${p.min}`
  }
  return 'Varies'
}
