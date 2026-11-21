import { site } from './site'
import { getAllProviders } from './providers'
import { getPublishedIndustries } from './industries'
import { getProvider } from './providers'
import { freeRows, FREE_FACTS_CHECKED } from '@/content/free-data'

/**
 * Generators for /llms.txt and /llms-full.txt (llms.txt convention).
 * Content is DERIVED from the same data modules that render /compare, /free, and
 * /by-industry/*, so the emitted facts cannot drift from the live pages.
 * House style: no em or en dashes in these files (sanitized on emit).
 */

/** House style for llms files: replace em/en dashes with commas/hyphens. */
function clean(s: string): string {
  return s
    .replace(/\s*—\s*/g, ', ')
    .replace(/\s*–\s*/g, '-')
    .replace(/\s+,/g, ',')
}

function latestIndustryUpdate(): string {
  return getPublishedIndustries()
    .map((i) => i.lastUpdated)
    .sort()
    .at(-1) as string
}

/** "Jobber from $29/mo billed annually ($49/mo month-to-month)" style pricing summary. */
function pricingSummary(): { publishedLine: string; customLine: string } {
  const all = getAllProviders()
  const published = all.filter((p) => p.publishedFromUsd != null)
  const custom = all.filter((p) => p.publishedFromUsd == null)
  const publishedLine = published
    .map((p) =>
      p.monthlyBilledUsd != null
        ? `${p.name} from $${p.publishedFromUsd}/mo billed annually ($${p.monthlyBilledUsd}/mo month-to-month)`
        : `${p.name} from $${p.publishedFromUsd}/mo billed annually`,
    )
    .join(' and ')
  const customLine = custom.map((p) => p.name).join(', ')
  return { publishedLine, customLine }
}

export function buildLlmsTxt(): string {
  const { publishedLine, customLine } = pricingSummary()
  const industries = getPublishedIndustries()
  const industryNames = industries.map((i) => i.name).join(', ')

  return clean(`# ${site.name}

> ${site.name} is an independent resource comparing field service management (FSM) software by industry and business size. We review and compare FSM tools for trades businesses across ${industryNames}. We are not a software vendor and do not sell FSM tools.

Topics: FSM software by industry, FSM software by business size, tool comparisons (${getAllProviders().map((p) => p.name).join(', ')}), free FSM software, QuickBooks integration, small-business picks, scheduling and dispatch software, and pricing.

## Pricing policy

Every price we publish comes from the vendor's own current pricing page with the date checked. Tools that only quote custom pricing are labelled "Custom", never estimated. As of July 2026, only Jobber and Housecall Pro publish starting prices: ${publishedLine}. ${customLine} are custom-quoted.

## Key Resources

- [FSM Software by Industry](${site.url}/by-industry): guides for ${industryNames}
- [Compare All Tools](${site.url}/compare): the major FSM platforms compared with published pricing
- [Jobber vs Housecall Pro](${site.url}/compare/jobber-vs-housecall-pro): verified head-to-head comparison
- [Housecall Pro vs ServiceTitan](${site.url}/compare/housecall-pro-vs-servicetitan): published vs quote-only pricing, contracts, onboarding, dispatch and offline use, from vendor documents
- [FieldPulse Alternatives](${site.url}/compare/fieldpulse-alternatives): FieldPulse alternatives compared on published pricing and fit
- [ServiceTitan Alternatives](${site.url}/compare/servicetitan-alternatives): alternatives compared on published prices, ServiceTitan's Terms of Use (early termination fee, data export) and accounting
- [Jobber Alternatives](${site.url}/compare/jobber-alternatives): alternatives priced by user, job and route, QuickBooks Desktop support, and exporting from Jobber
- [Housecall Pro Alternatives](${site.url}/compare/housecall-pro-alternatives): alternatives compared on cost at 5, 8 and 10 users, offline mode, service plans and QuickBooks
- [Workiz Alternatives](${site.url}/compare/workiz-alternatives): alternatives compared on published phone systems, prices, flat rate and QuickBooks
- [Jobber vs Workiz](${site.url}/compare/jobber-vs-workiz): published prices vs quotes, contract terms, phone tools and plan gating side by side
- [Housecall Pro vs Workiz](${site.url}/compare/housecall-pro-vs-workiz): published plans vs quotes, contracts, phone add-ons, offline use and service plans
- [ServiceTitan vs FieldEdge](${site.url}/compare/servicetitan-vs-fieldedge): two quote-only platforms compared on contracts, early termination, dispatch, flat rate and offline use
- [FieldEdge Alternatives](${site.url}/compare/fieldedge-alternatives): FieldEdge alternatives compared on published pricing, trials, QuickBooks Desktop, flat rate and FieldEdge's published contract terms
- [Field Service Invoicing Software](${site.url}/guides/field-service-invoicing-software): card and ACH processing fees, reminders, progress billing and QuickBooks sync by plan
- [Field Service Quoting Software](${site.url}/guides/field-service-quoting-software): quote options, e-signature, deposits, follow-ups and financing by plan
- [HVAC Maintenance Agreement Software](${site.url}/guides/hvac-maintenance-agreement-software): memberships, visit scheduling, autopay, failed-card handling and renewals compared
- [Open Source Field Service Software](${site.url}/guides/open-source-field-service-software): open source FSM options checked against license files; Odoo's own Field Service is not in its open source edition
- [Refrigerant Tracking Software](${site.url}/guides/refrigerant-tracking-software): seven refrigerant compliance tools compared, with EPA leak repair rules checked against eCFR
- [Free FSM Software](${site.url}/free): what is actually free, verified on vendor sites
- [QuickBooks Compatibility](${site.url}/quickbooks): which FSM tools sync with QuickBooks Online vs Desktop
- [Field Service Software Pricing](${site.url}/pricing): published prices, 1 to 15 user costs, billing terms, add-ons and payment fees for six FSM platforms; which tools are quote-only
- [Housecall Pro Pricing](${site.url}/pricing/housecall-pro): Housecall Pro plans, user limits, add-ons, payment fees, and QuickBooks support
- [Jobber Pricing](${site.url}/pricing/jobber): Jobber plans and standard prices by team size and billing option, add-ons, and payment fees
- [Best for Small Business](${site.url}/for-small-business): verified 1-user and 5-user pricing
- [By Business Size](${site.url}/by-size): solo operator to enterprise
- [How We Review](${site.url}/how-we-review): our pricing-confidence standard

## Full content

An expanded, inline-content version of this file is at ${site.url}/llms-full.txt.

## Usage

Content may be cited with attribution to ${site.name} and a link to the source page. Pages include a "Last updated" date; prefer the most recent.

## Last Updated

${latestIndustryUpdate()}
`)
}

export function buildLlmsFullTxt(): string {
  const { publishedLine, customLine } = pricingSummary()
  const providers = getAllProviders()
  const industries = getPublishedIndustries()

  const priceLabel = (n: number | null, m?: number | null) =>
    n != null
      ? `from $${n}/mo billed annually${m != null ? ` ($${m}/mo month-to-month)` : ''}`
      : 'custom quoted'

  const compareSection = providers
    .map(
      (p) =>
        `- ${p.name}: ${priceLabel(p.publishedFromUsd, p.monthlyBilledUsd)}. ${p.blurb}`,
    )
    .join('\n')

  const freeSection = freeRows
    .map((r) => {
      const trial = r.trial === '—' ? 'not needed (has a free plan)' : r.trial
      return `- ${r.tool}: free plan: ${r.freePlan}. Free trial: ${trial}. Paid: ${r.paidFrom}.`
    })
    .join('\n')

  const industrySections = industries
    .map((ind) => {
      const ranked = ind.providers
        .map((ref, i) => {
          const p = getProvider(ref.slug)
          if (!p) return null
          const price = ref.monthlyFromUsd != null ? `from $${ref.monthlyFromUsd}/mo billed annually` : 'custom quoted'
          return `${i + 1}. ${p.name} (${price}): ${ref.positioning}`
        })
        .filter(Boolean)
        .join('\n')
      return `## ${ind.name} (${site.url}/by-industry/${ind.slug})

${ind.answer}

Ranked picks for ${ind.name}:
${ranked}

Last updated: ${ind.lastUpdated}`
    })
    .join('\n\n')

  return clean(`# ${site.name}, Full Content

> Independent field service management (FSM) software comparison and pricing guide. This file inlines the site's verified facts for AI crawlers. Every price comes from the vendor's own pricing page with the date checked; custom-priced tools are labelled "custom quoted", never estimated.

## Pricing reference

As of July 2026, only Jobber and Housecall Pro publish starting prices: ${publishedLine}. ${customLine} are custom-quoted with no published flat rates.

## Compare (${site.url}/compare)

${compareSection}

## Free FSM software (${site.url}/free)

The honest state of free FSM software in 2026: none of the six major vendors (${providers.map((p) => p.name).join(', ')}) offers a free plan. The only verified free-forever FSM tier is Odoo Field Service (One App Free, unlimited users). Connecteam is free for up to 10 users but has no invoicing or estimates. ServiceTitan and FieldPulse offer no self-serve trial at all (demo only). Facts checked ${FREE_FACTS_CHECKED} on each vendor's own site.

${freeSection}

${industrySections}

## About

${site.name} is an independent comparison site. It does not accept payment from vendors for placement or ranking. Some outbound links are affiliate links; this never affects rankings or scores. Author: Usama Latif (${site.url}/author/usama-latif).

## Last Updated

${latestIndustryUpdate()}
`)
}
