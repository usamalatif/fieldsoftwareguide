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
- [ServiceTitan vs Workiz](${site.url}/compare/servicetitan-vs-workiz): two quote-only platforms compared on packages, contract terms, phones, memberships, offline use and QuickBooks
- [Jobber vs FieldPulse](${site.url}/compare/jobber-vs-fieldpulse): published prices vs a seat-based quote, trials, offline use, equipment records and QuickBooks
- [Housecall Pro vs FieldPulse](${site.url}/compare/housecall-pro-vs-fieldpulse): published plans vs a seat-based quote, offline use, service plans, equipment and QuickBooks Desktop
- [FieldPulse vs Workiz](${site.url}/compare/fieldpulse-vs-workiz): two quote-only platforms compared on terms, trials, phone tools, offline use and plan gating
- [Commusoft Alternatives](${site.url}/compare/commusoft-alternatives): Commusoft alternatives compared on published prices, contract terms, planned maintenance and accounting
- [ServiceTitan vs FieldPulse](${site.url}/compare/servicetitan-vs-fieldpulse): two quote-only platforms compared on contract terms, dispatch, memberships, offline use and QuickBooks
- [Jobber vs FieldEdge](${site.url}/compare/jobber-vs-fieldedge): published prices vs quote-only annual memberships, flat rate, agreements, offline use and QuickBooks Desktop
- [Housecall Pro vs FieldEdge](${site.url}/compare/housecall-pro-vs-fieldedge): published plans vs quote-only annual memberships, flat rate, agreements and QuickBooks
- [FieldEdge vs FieldPulse](${site.url}/compare/fieldedge-vs-fieldpulse): two quote-only tools on yearly terms compared on flat rate, agreements, offline use and QuickBooks
- [Service Fusion Alternatives](${site.url}/compare/service-fusion-alternatives): alternatives compared by team size, contract terms, offline use, agreements and QuickBooks
- [ServiceM8 Alternatives](${site.url}/compare/servicem8-alternatives): six alternatives compared on per-user vs per-job pricing, QuickBooks Desktop, offline use and trials
- [Kickserv Alternatives](${site.url}/compare/kickserv-alternatives): six alternatives compared on price for 5 and 10 users, QuickBooks Desktop, routing and trials
- [FieldEdge Alternatives](${site.url}/compare/fieldedge-alternatives): FieldEdge alternatives compared on published pricing, trials, QuickBooks Desktop, flat rate and FieldEdge's published contract terms
- [Field Service Invoicing Software](${site.url}/guides/field-service-invoicing-software): card and ACH processing fees, reminders, progress billing and QuickBooks sync by plan
- [Field Service Quoting Software](${site.url}/guides/field-service-quoting-software): quote options, e-signature, deposits, follow-ups and financing by plan
- [HVAC Maintenance Agreement Software](${site.url}/guides/hvac-maintenance-agreement-software): memberships, visit scheduling, autopay, failed-card handling and renewals compared
- [Open Source Field Service Software](${site.url}/guides/open-source-field-service-software): open source FSM options checked against license files; Odoo's own Field Service is not in its open source edition
- [Refrigerant Tracking Software](${site.url}/guides/refrigerant-tracking-software): seven refrigerant compliance tools compared, with EPA leak repair rules checked against eCFR
- [Field Service Scheduling Software](${site.url}/guides/field-service-scheduling-software): ten tools compared by plan on dispatch boards, online booking, recurring and multi-day jobs, on-my-way texts and technician GPS
- [Route Optimization Software](${site.url}/guides/route-optimization-software): which field service tools document automatic route optimization (ServiceM8, Jobber, Housecall Pro MAX, ServiceTitan), which only claim it, and how vehicle GPS is sold
- [Offline Field Service Apps](${site.url}/guides/offline-field-service-app): what ten field service apps let technicians do without signal, from vendor help centers
- [AI Answering Service for Contractors](${site.url}/guides/ai-answering-service-for-contractors): AI phone answering sold by field service vendors, booking, languages and published prices (Jobber $29, ServiceM8 $32 or $119)
- [Field Service Inventory Management Software](${site.url}/guides/field-service-inventory-management-software): truck and warehouse stock, parts deduction, automatic reordering and purchase orders compared by plan
- [Free FSM Software](${site.url}/free): what is actually free, verified on vendor sites
- [QuickBooks Compatibility](${site.url}/quickbooks): which FSM tools sync with QuickBooks Online vs Desktop
- [Field Service Software Pricing](${site.url}/pricing): published prices, 1 to 15 user costs, billing terms, add-ons and payment fees for six FSM platforms; which tools are quote-only
- [Housecall Pro Pricing](${site.url}/pricing/housecall-pro): Housecall Pro plans, user limits, add-ons, payment fees, and QuickBooks support
- [Jobber Pricing](${site.url}/pricing/jobber): Jobber plans and standard prices by team size and billing option, add-ons, and payment fees
- [ServiceTitan Pricing](${site.url}/pricing/servicetitan): ServiceTitan packages (Core, Demand AI, Field AI, MAX), how it prices per its 10-K, contract length, termination fee and extra costs; no prices published
- [Workiz Pricing](${site.url}/pricing/workiz): Workiz Standard, Pro and Ultimate features, Genius add-ons, 7-day trial, renewal and increase terms; no prices published
- [FieldPulse Pricing](${site.url}/pricing/fieldpulse): FieldPulse seat-based pricing, premium products, one-year auto-renewing terms and seat billing rules; no prices published
- [FieldEdge Pricing](${site.url}/pricing/fieldedge): FieldEdge Select, Premier and Elite features and mobile licenses, annual memberships, renewal terms and extra costs; no prices published
- [Service Fusion Pricing](${site.url}/pricing/service-fusion): Service Fusion Starter $220, Plus $339, Pro $552 a month billed annually with unlimited users, add-ons, payment fees and renewal terms
- [ServiceM8 Pricing](${site.url}/pricing/servicem8): ServiceM8 Free, Starter $29, Growing $79, Premium $149 and Premium Plus $349 a month by jobs with unlimited users, add-ons, phone plans and card fees
- [Kickserv Pricing](${site.url}/pricing/kickserv): Kickserv Start $60 (5 users), Run $119 (10) and Scale $199 (20) a month, QuickBooks Desktop $50 add-on, payment fees and terms
- [Commusoft Pricing](${site.url}/pricing/commusoft): Commusoft per-license pricing, contracted, rolling and daily licenses, add-ons and 12-month terms; no prices published
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
