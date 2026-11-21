import type { Industry } from '@/lib/industries'

/**
 * Roofing: VERIFIED (researched 2026-11-21, batch 3 draft).
 * ServiceTitan has a full roofing page: EagleView, GAF QuickMeasure and Hover measurements (order
 * from the mobile app, US and Canada only), ABC Supply, QXO and SRS ordering, two-way Xactimate
 * sync, supplements via change orders, depreciation tracking, financing from seven partners,
 * QuickBooks Online and Desktop Premier/Enterprise. Who pays for measurement reports: not stated.
 * Workiz has a roofing page with Good|Better|Best quoting (sales proposals and multi-day jobs on
 * Ultimate), CompanyCam, Wisetack and Sunbit; no measurement, supplier or insurance integration
 * named. Housecall Pro (help center only; www.housecallpro.com not fetched): good-better-best
 * proposal templates, deposits, progress invoicing, Wisetack ($500 to $65,000), CompanyCam.
 * Jobber's roofing page and help center returned 403 (not retried), so no Jobber roofing feature
 * is claimed; Jobber lists roofing among its industries on its homepage (checked 2026-11-21).
 * FieldPulse (/roofing 404, not in its industry menu) and Commusoft (US roofing page 404) are not
 * shortlisted. Roofing-specific: Roofr publishes prices (pricing page, 2026-11-21; Measure+ figures
 * conflict on the page, so not quoted; Black Friday promo not mentioned); AccuLynx Pro and Elite are
 * quote only; JobNimbus pricing returned 403.
 * datePublished: set to the merge day when published.
 */
export const roofing: Industry = {
  slug: 'roofing',
  name: 'Roofing',
  icon: '🏠',
  category: 'Trades',
  metaDescription:
    'Compare roofing software for aerial measurements, supplier ordering, insurance claims, good-better-best estimates and crews. Verified features and prices.',
  datePublished: '2026-11-21',

  answer:
    'Roofing needs more than scheduling: aerial measurements, supplier ordering and insurance claims decide how fast a roof gets sold and built. Among the six major FSM vendors, ServiceTitan documents the most roofing depth, with EagleView, GAF QuickMeasure and Hover measurements, ABC Supply, QXO and SRS ordering, and a two-way Xactimate sync for insurance work (custom quote). Housecall Pro (from $59/month billed annually) and Workiz (quote only) cover good-better-best proposals, deposits and financing for smaller retail roofers, but neither names a measurement or supplier integration. Roofing-specific platforms fill that gap: Roofr publishes plans from $0 a month, with paid plans at $209 or $299 a month billed yearly and measurement reports from $13, and AccuLynx sells Pro and Elite plans by quote, with supplement and production tracking on Elite.',

  intro:
    'A roofing job starts with a measurement and ends with a crew on the roof for one to three days. In between, the estimate has to turn squares and pitch into a price the homeowner can choose from, materials have to arrive at the right address, and for storm work the claim has to match what the adjuster approves. The right software pulls aerial measurements straight into the estimate, orders materials from your supplier, tracks photos and supplements for insurance jobs, and schedules crews across multi-day jobs. Generalist FSM tools handle the sales and billing side; measurement, supplier and claim workflows are where roofing-specific tools and ServiceTitan pull ahead.',

  keyFeatures: [
    'Aerial roof measurements (EagleView, Hover, GAF QuickMeasure or built in) feeding the estimate',
    'Good-better-best estimates with financing shown on the proposal',
    'Supplier ordering with live material pricing (ABC Supply, SRS, QXO)',
    'Insurance workflow: Xactimate sync, supplements and depreciation tracking',
    'Photo documentation tied to the job (for example through CompanyCam)',
    'Crew and production scheduling for multi-day jobs, plus deposits and progress invoicing',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Published generalist plans start at $29/mo (Jobber Core, 1 user, billed annually) and $59/mo (Housecall Pro Basic, 1 user, billed annually). Roofing-specific Roofr publishes a $0 Starter plan and paid plans at $209/mo (Essentials) or $299/mo (Scale) billed yearly, with measurement reports charged per report ($13 to $19). ServiceTitan, Workiz and AccuLynx are quote only.',
    source: { name: 'Roofr pricing', url: 'https://roofr.com/pricing', checked: '2026-11-21' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 6,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Most roofing depth: aerial measurements, supplier ordering and Xactimate sync',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Growing retail and insurance roofers that want measurement, materials and claims in one system',
        strengths: [
          'Integrates EagleView, GAF QuickMeasure and Hover; techs can order measurements from the mobile app (US and Canada)',
          'Direct ordering from ABC Supply, QXO and SRS Distribution, with supplier price updates',
          'Two-way Xactimate sync, change orders for supplements and uncollected depreciation tracking',
          'QuickBooks Online and QuickBooks Desktop Premier and Enterprise',
        ],
        limitations: [
          'No published price; its roofing page says pricing is tailored and quoted after a demo',
          'Does not say whether measurement reports cost extra or who bills for them',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price with good-better-best proposals, deposits and financing',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small retail roofers that want a known monthly price',
        strengths: [
          'Good-better-best proposal templates with as many options as you want',
          'Deposits as a flat amount or a percentage before the customer approves, plus progress invoicing',
          'Wisetack financing for jobs from $500 to $65,000; CompanyCam photo sync',
        ],
        limitations: [
          'No aerial measurement, roofing supplier or insurance claim integration documented in its help center',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Roofing page with Good|Better|Best quoting; multi-day jobs on Ultimate',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Roofers who also want Workiz’s phone and scheduling tools',
        strengths: [
          'Sales proposals with three ranked options and multi-day jobs on Ultimate',
          'CompanyCam, Wisetack and Sunbit integrations listed on its roofing page',
        ],
        limitations: [
          'Every plan is “Request pricing”',
          'Names no measurement, supplier or insurance integration; parts of its roofing page FAQ describe garage door teams',
        ],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Lowest published starting price; lists roofing among its industries',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Solo roofers and small repair crews on a tight budget',
        strengths: [
          'Published plans from $29/month billed annually for one user',
          'Quotes on every plan; automated quote follow-ups and QuickBooks Online from Connect',
        ],
        limitations: [
          'Its roofing page and help center blocked our checks, so we do not list any roofing-specific Jobber feature',
          'QuickBooks Online only, no Desktop',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo roofer or small repair crew', pick: 'Jobber Core ($29/mo) or Roofr Starter ($0)', why: 'Jobber has the lowest published FSM price. Roofr Starter costs nothing and charges $19 per measurement report, with 10 trial proposals.' },
    { size: 'Small retail roofing company', pick: 'Roofr Essentials ($209/mo billed yearly) or Housecall Pro Essentials ($149/mo, up to 5 users)', why: 'Roofr builds in $13 measurement reports and ABC, QXO and SRS ordering. Housecall Pro adds good-better-best proposals, deposits and Wisetack financing at a published price.' },
    { size: 'Growing crew with job costing', pick: 'Roofr Scale ($299/mo billed yearly)', why: 'Adds crew management, profit margins and job costs, role permissions and a QuickBooks Online integration (beta, US only, no Desktop).' },
    { size: 'Insurance and storm restoration', pick: 'ServiceTitan or AccuLynx Elite (custom quote)', why: 'ServiceTitan documents a two-way Xactimate sync and supplement change orders; AccuLynx Elite adds supplement and mortgage-check tracking.' },
  ],

  extraSections: [
    {
      id: 'roofing-measurement-materials',
      heading: 'Measurements, materials and insurance: what to test in a roofing demo',
      paragraphs: [
        'Run one real roof through every tool on your shortlist: order an aerial measurement, build a good-better-best estimate from it, send the proposal with financing, collect a deposit, order the materials and schedule the crew. ServiceTitan pulls EagleView, GAF QuickMeasure and Hover measurements into its estimating tools and lets techs order them from the mobile app. Roofr builds measurement in, charges per report ($13 on paid plans, $19 on Starter) and does not import reports from other providers. AccuLynx includes aerial measurement ordering on both plans. Ask every vendor who bills you for each report and what it costs.',
        'Material ordering is the second test. ServiceTitan and Roofr both name ABC Supply, QXO and SRS; AccuLynx lists supplier direct ordering without naming suppliers on its plans page. For insurance work, ServiceTitan documents a two-way Xactimate sync that moves line items and photos, and AccuLynx puts supplement tracking on Elite. Generalist tools like Housecall Pro and Workiz handle proposals, deposits and financing well but name none of these integrations. Compare published plan prices in our [field service software pricing](/pricing) guide and quoting features in our [quoting software guide](/guides/field-service-quoting-software).',
      ],
    },
  ],

  mistakes: [
    'Forgetting per-report measurement costs. Roofr charges $13 to $19 per report on top of the plan, and ServiceTitan does not say who bills for EagleView, GAF QuickMeasure or Hover reports.',
    'Assuming a generalist FSM tool connects to your supplier. Of the six major vendors, only ServiceTitan names ABC Supply, QXO and SRS ordering.',
    'Running storm work without a claims workflow. Only ServiceTitan (Xactimate sync) and AccuLynx Elite (supplement tracking) document one among the tools here.',
    'Comparing a monthly price with a yearly one. Roofr Essentials is $249 a month billed monthly but $209 a month billed yearly.',
  ],

  faqs: [
    {
      question: 'What is the best roofing software?',
      answer:
        'It depends on your work. ServiceTitan documents the most roofing depth among general FSM tools (aerial measurements, ABC, QXO and SRS ordering, Xactimate sync), priced by quote. Roofr publishes prices from $0 and builds in measurement reports. AccuLynx is a quote-only roofing platform with supplement tracking on Elite.',
    },
    {
      question: 'How much does roofing software cost?',
      answer:
        'Jobber starts at $29/month and Housecall Pro at $59/month, both billed annually for one user. Roofr has a $0 Starter plan, Essentials at $209/month and Scale at $299/month billed yearly, plus $13 to $19 per measurement report. ServiceTitan, Workiz and AccuLynx are quote only.',
    },
    {
      question: 'Which roofing software integrates with EagleView?',
      answer:
        'ServiceTitan integrates with EagleView, GAF QuickMeasure and Hover and lets techs order measurements from its mobile app in the US and Canada. Roofr sells its own measurement reports and does not import reports from other providers. Confirm who bills for each report before you sign.',
    },
    {
      question: 'Can roofing software order materials from ABC Supply or SRS?',
      answer:
        'Yes. ServiceTitan names ABC Supply, QXO and SRS Distribution, and Roofr lists ABC Supply, QXO and SRS Roofhub ordering with real-time pricing on every plan. AccuLynx includes supplier direct ordering on both plans. Housecall Pro, Workiz and Jobber name no roofing supplier integration in what we checked.',
    },
    {
      question: 'Which roofing software handles insurance claims?',
      answer:
        'ServiceTitan documents a two-way Xactimate sync for line items and photos, change orders for supplements and depreciation tracking. AccuLynx puts supplement and mortgage-check tracking on its Elite plan. Roofr sells Xactimate-format ESX files for $12 a report.',
    },
    {
      question: 'Does roofing software work with QuickBooks?',
      answer:
        'ServiceTitan supports QuickBooks Online and QuickBooks Desktop Premier and Enterprise. Housecall Pro’s plan data lists QuickBooks Online and Desktop on Essentials. Roofr’s QuickBooks integration is a US-only beta on Scale and does not support Desktop. Jobber syncs with QuickBooks Online only.',
    },
  ],

  lastUpdated: '2026-11-21',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan roofing software (measurements, suppliers, Xactimate, financing, QuickBooks)', url: 'https://www.servicetitan.com/industries/roofing-software', checked: '2026-11-21' },
    { name: 'ServiceTitan roofing estimating software', url: 'https://www.servicetitan.com/industries/roofing-software/estimating', checked: '2026-11-21' },
    { name: 'ServiceTitan help: order and view roofing measurements in the mobile app', url: 'https://help.servicetitan.com/docs/order-and-view-roofing-measurements-in-fma', checked: '2026-11-21' },
    { name: 'ServiceTitan pricing (Core, Demand AI, Field AI and MAX packages; Get Pricing)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-21' },
    { name: 'Workiz roofing software', url: 'https://www.workiz.com/industries/roofing/', checked: '2026-11-21' },
    { name: 'Workiz pricing plans (sales proposals and multi-day jobs on Ultimate)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Housecall Pro help: sales proposal tool on mobile', url: 'https://help.housecallpro.com/en/articles/7834798-sales-proposal-tool-on-mobile', checked: '2026-11-21' },
    { name: 'Housecall Pro help: collect deposits on estimates', url: 'https://help.housecallpro.com/en/articles/12151673-collect-deposits-on-estimates', checked: '2026-11-21' },
    { name: 'Housecall Pro help: important updates to invoices (progress invoicing)', url: 'https://help.housecallpro.com/en/articles/9342740-important-updates-to-invoices', checked: '2026-11-21' },
    { name: 'Housecall Pro help: financing options (Wisetack)', url: 'https://help.housecallpro.com/en/articles/12977893-financing-options-with-housecall-pro', checked: '2026-11-21' },
    { name: 'Housecall Pro help: CompanyCam integration', url: 'https://help.housecallpro.com/en/articles/5138242-companycam-integration-overview', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Jobber homepage (industries list includes roofing)', url: 'https://www.getjobber.com/', checked: '2026-11-21' },
    { name: 'Roofr pricing (plans, measurement reports, suppliers, QuickBooks)', url: 'https://roofr.com/pricing', checked: '2026-11-21' },
    { name: 'AccuLynx plan options (Pro and Elite)', url: 'https://acculynx.com/plan-options/', checked: '2026-11-21' },
    { name: 'FieldPulse roofing (404, no roofing page)', url: 'https://www.fieldpulse.com/roofing', checked: '2026-11-21' },
    { name: 'Commusoft industries (no roofing)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
  ],
}
