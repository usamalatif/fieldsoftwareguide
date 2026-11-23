import type { Industry } from '@/lib/industries'

/**
 * Air duct cleaning: VERIFIED (researched 2026-11-23, batch 7 draft).
 * ServiceTitan /industries/air-duct-cleaning-software: visual pricebook and mobile estimates with
 * multiple pricing options, photos and videos from the tablet, memberships and service contracts,
 * booking confirmations and reminders, drag-and-drop dispatch board, route-visualization map,
 * QuickBooks Online and Desktop Premier and Enterprise. Workiz /industries/air-duct-cleaning/: estimates
 * in minutes, Good/Better/Best proposals to sell premium services, service plans, team assignment by
 * jobs, traffic and expertise, QuickBooks sync. FieldPulse duct URL 404; Commusoft has no duct page.
 * Jobber and Housecall Pro duct pages seen in search only (not fetched). Duct tools: QuoteIQ prices by
 * vent count or system on every plan, before/after photos (QuoteIQ Cam) and inspection reports from
 * Beginner, dryer vent package add-ons, InstaSchedule on Elite, QuickBooks Online on Pro; mentions
 * NADCA only as the trade association. Vent & Duct Pro: Solo $49 (1 tech seat), Crew $99 (up to 6),
 * Fleet $199 (unlimited) a month, before/after readings and photos, fire-risk report, annual and
 * semi-annual subscriptions, QuickBooks Online on Crew and Fleet (small vendor; background not
 * verified). Service Fusion duct page: self-service web booking, photos, GPS fleet tracking add-on,
 * QuickBooks; $220/$339/$552 billed annually or $259/$399/$649 monthly, unlimited users. No vendor
 * offers a NADCA-format report or names a sanitizing upsell. Workiz promotion ignored.
 */
export const airDuctCleaning: Industry = {
  slug: 'air-duct-cleaning',
  name: 'Air Duct Cleaning',
  icon: '🌬️',
  category: 'Field Services',
  metaDescription:
    'Compare air duct cleaning software for vent-count pricing, before and after photos, reports, dryer vent upsells, memberships and QuickBooks. Verified.',
  datePublished: '2026-11-23',

  answer:
    'Duct cleaners sell on trust, so pricing by vent count, before and after proof and repeat visits matter most. ServiceTitan and Workiz both have air duct cleaning pages, with multi-option estimates, memberships or service plans, dispatch and QuickBooks (quote only). QuoteIQ prices jobs by vent count or by system on every plan and adds before and after photos and inspection reports from its $99.99 Beginner plan. Vent & Duct Pro, a smaller duct and dryer vent tool, costs $49 to $199 a month and hands homeowners a fire-risk report after each visit. Service Fusion has a duct page and costs $220 to $552 a month billed annually, with unlimited users. No tool we checked produces a NADCA-format report.',

  intro:
    'An air duct cleaning job is priced by vents, returns or systems, and customers want to see the dirt that came out. The software has to quote quickly with options such as dryer vent or coil cleaning, show before and after photos, leave a report, and bring the customer back in a year or two. Many duct companies also offer dryer vent cleaning on its own, which is a fire safety sale. If you work for HVAC contractors or commercial buildings, check how the tool handles larger jobs and service contracts.',

  keyFeatures: [
    'Price book by vent count, returns or system',
    'Good, better, best options with dryer vent add-ons',
    'Before and after photos and customer reports',
    'Memberships, service plans and repeat-visit reminders',
    'Online booking and dispatch with routes',
    'Payments in the field and QuickBooks sync',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Generalist FSM: Jobber from $29/mo (Core, 1 user) and Housecall Pro from $59/mo (Basic, 1 user), billed annually. Duct tools: QuoteIQ $29.99 to $699.99 a month billed monthly (1 to 20 users); Vent & Duct Pro $49, $99 or $199 a month by tech seats; Service Fusion $220, $339 or $552 a month billed annually ($259, $399, $649 monthly) with unlimited users. ServiceTitan and Workiz, which have duct pages, are quote only.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 9,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Duct page with a visual pricebook, memberships and QuickBooks Desktop',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger duct and indoor air quality companies with dispatchers and memberships',
        strengths: [
          'Visual pricebook and mobile estimates with multiple pricing options',
          'Memberships and service contracts; booking confirmations and reminders',
          'Drag-and-drop dispatch board, route map, and QuickBooks Online and Desktop',
        ],
        limitations: [
          'No published price; packages are behind one “Get Pricing” button',
          'Its duct page names no vent-count pricing, before and after report or dryer vent upsell',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Duct page with Good, Better, Best upsells and service plans',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Growing duct crews that sell tiered packages and recurring plans',
        strengths: [
          'Good, Better, Best proposals to sell premium air duct cleaning services',
          'Service plans for recurring maintenance; teams assigned by jobs, traffic and expertise',
          'QuickBooks sync of invoices, customers and payments; online booking on every plan',
        ],
        limitations: [
          'Every plan is “Request pricing”; service plans and sales proposals are on Ultimate',
          'Its duct page does not mention photos, reports or vent-count pricing',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; flat-rate pricing and recurring plans',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small duct cleaning businesses that want online booking and a known price',
        strengths: [
          'Online booking from Basic; flat-rate pricing and QuickBooks Online and Desktop on Essentials',
          'Recurring Service Plans and route optimization on MAX',
        ],
        limitations: [
          'We could not check its duct cleaning page, so no duct feature is listed',
          'Recurring service plans need MAX ($299/mo billed annually)',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo duct and dryer vent cleaner', pick: 'Vent & Duct Pro Solo ($49/mo, 1 tech seat)', why: 'Before and after readings and photos, a fire-risk report and annual visit subscriptions. QuickBooks needs Crew ($99).' },
    { size: 'Owner who quotes by vent count', pick: 'QuoteIQ Beginner ($99.99/mo, 2 users)', why: 'Vent-count or system pricing on every plan, plus before and after photos and inspection reports from Beginner.' },
    { size: 'Small crew that wants a known US price', pick: 'Housecall Pro Essentials ($149/mo billed annually, up to 5 users)', why: 'Flat-rate pricing, online booking and QuickBooks Online and Desktop.' },
    { size: 'Company that wants unlimited users', pick: 'Service Fusion Starter ($220/mo billed annually)', why: 'Duct page with self-service web booking and QuickBooks, and every plan includes unlimited users.' },
    { size: 'Large company with memberships and dispatch', pick: 'ServiceTitan or Workiz (custom quote)', why: 'Both have duct pages; ServiceTitan adds a visual pricebook and memberships, Workiz tiered proposals and service plans.' },
  ],

  extraSections: [
    {
      id: 'duct-pricing-proof',
      heading: 'Vent pricing, before and after proof and upsells: what to test',
      paragraphs: [
        'Quote a real house. QuoteIQ prices by vent count or system and lets you add a dryer vent package beside good, better and best duct packages, with coil and blower cleaning as a higher option. ServiceTitan uses a visual pricebook with multiple pricing options, and Workiz offers Good, Better, Best proposals. Check that a dryer vent add-on takes one tap.',
        'Then test the proof. QuoteIQ Cam keeps before and after photos on the job and texts the customer a link, and Vent & Duct Pro records before and after airflow readings and leaves a fire-risk report. No tool we checked produces a NADCA-format report or names a sanitizing upsell, so ask how you would add your own. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Quoting by guesswork. Price by vent count or system so every tech quotes the same house the same way.',
    'Skipping before and after photos. Customers who see the result buy again and leave reviews.',
    'Forgetting dryer vents. Add a dryer vent option to every duct quote.',
    'Assuming NADCA reports are built in. No tool we checked produces a NADCA-format report.',
  ],

  faqs: [
    {
      question: 'What is the best software for an air duct cleaning business?',
      answer:
        'ServiceTitan and Workiz have air duct cleaning pages with options, memberships or service plans and QuickBooks (quote only). QuoteIQ prices by vent count from $29.99 a month, and Vent & Duct Pro costs $49 to $199 a month.',
    },
    {
      question: 'How much does air duct cleaning software cost?',
      answer:
        'QuoteIQ costs $29.99 to $699.99 a month billed monthly. Vent & Duct Pro is $49, $99 or $199 a month. Service Fusion is $220 to $552 a month billed annually with unlimited users. Jobber starts at $29 and Housecall Pro at $59 a month, billed annually.',
    },
    {
      question: 'Which duct cleaning software prices by vent count?',
      answer:
        'QuoteIQ prices air duct and dryer vent jobs by vent count or by system, with a dropdown in its pricing matrix, on every plan. ServiceTitan offers a visual pricebook but does not name vent-count pricing.',
    },
    {
      question: 'Which duct cleaning software shows before and after photos?',
      answer:
        'QuoteIQ Cam keeps before and after photos on the job and texts the customer a link, from the Beginner plan. Vent & Duct Pro records before and after photos and airflow readings on every plan.',
    },
    {
      question: 'Is there duct cleaning software with NADCA reports?',
      answer:
        'Not that we found. QuoteIQ mentions NADCA only as the trade association, and no other tool we checked names a NADCA-format report. QuoteIQ and Vent & Duct Pro offer their own customer reports.',
    },
    {
      question: 'Which duct cleaning software works with QuickBooks?',
      answer:
        'ServiceTitan integrates with QuickBooks Online and Desktop, and Workiz syncs invoices, customers and payments. QuoteIQ includes QuickBooks Online on Pro and up, Vent & Duct Pro on Crew and Fleet, and Service Fusion on every plan.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan air duct cleaning software', url: 'https://www.servicetitan.com/industries/air-duct-cleaning-software', checked: '2026-11-23' },
    { name: 'Workiz air duct cleaning software', url: 'https://www.workiz.com/industries/air-duct-cleaning/', checked: '2026-11-23' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Jobber pricing (plans)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Commusoft industries (no duct cleaning)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-23' },
    { name: 'QuoteIQ air duct cleaning software', url: 'https://myquoteiq.com/industries/air-duct-cleaning-software/', checked: '2026-11-23' },
    { name: 'QuoteIQ pricing', url: 'https://myquoteiq.com/pricing/', checked: '2026-11-23' },
    { name: 'Vent & Duct Pro (features and pricing)', url: 'https://ventductpro.com/', checked: '2026-11-23' },
    { name: 'Service Fusion air duct cleaning software', url: 'https://www.servicefusion.com/air-duct-cleaning-service-software', checked: '2026-11-23' },
    { name: 'Service Fusion pricing', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-23' },
  ],
}
