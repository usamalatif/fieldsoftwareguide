import type { Industry } from '@/lib/industries'

/**
 * Landscaping and lawn care: VERIFIED (researched 2026-11-21, batch 3 draft).
 * ServiceTitan: its landscaping page sells Aspire (acquired 2021); its lawn care page sells core
 * ServiceTitan with memberships for lawn treatment plans, bulk booking and routing optimization
 * (no package named). Workiz has lawn care and landscaping pages; recurring jobs on every plan,
 * service plans, checklists and multi-day jobs on Ultimate; route planning plan not stated; QuickBooks
 * Online sync only listed. Housecall Pro help center: Optimize by Drive Time is MAX only and does not
 * move jobs between days or techs. FieldPulse: no landscaping page, but its help center describes
 * seasonal recurring billing (24 weekly sessions example) and its QuickBooks page names Online only.
 * Commusoft: no landscaping page; not shortlisted. Jobber industry pages and help center returned 403
 * (not retried); Jobber lists landscaping and lawn care among its industries on its homepage
 * (checked 2026-11-21). Specialists: LMN publishes Starter $297 and Professional $648 a month billed
 * monthly after a one-time onboarding fee; Aspire Crew Control publishes $39 and $59 a month per crew
 * (billing basis not stated); Aspire and PropertyIntel publish no prices. Service Autopilot and
 * Yardbook could not be read. No vendor confirmed chemical or fertilizer application records.
 * Black Friday promotions are not mentioned. datePublished: set to the merge day when published.
 */
export const landscaping: Industry = {
  slug: 'landscaping',
  name: 'Landscaping',
  icon: '🌿',
  category: 'Field Services',
  metaDescription:
    'Compare landscaping and lawn care software for recurring visits, route optimization, crews, seasonal billing and QuickBooks. Verified features and prices.',
  datePublished: '2026-11-21',

  answer:
    'Landscaping and lawn care run on recurring visits and tight routes, so check where route optimization and seasonal billing sit before you compare prices. Jobber (from $29/month billed annually) lists landscaping and lawn care among its industries and puts route optimization on Connect ($99/month for one user). Housecall Pro (from $59/month) limits route optimization and Recurring Service Plans to MAX ($299/month for up to 8 users). ServiceTitan sells lawn treatment memberships and bulk booking with routing by quote, and sells Aspire to larger commercial landscapers. Workiz (quote only) has lawn and landscaping pages, with service plans on Ultimate. Landscape-specific tools publish prices too: LMN starts at $297/month for a lead and five crew licenses, and Aspire Crew Control at $39/month per crew. None of the tools we checked documents chemical or fertilizer application records, so ask in the demo if you apply treatments.',

  intro:
    'A landscaping or lawn care company earns its margin on the route. Weekly mowing, seasonal cleanups and treatment programs repeat all year, so the software has to create recurring visits on its own, group them into efficient daily routes for each crew, track crew time on site, and bill either per visit or on a seasonal schedule. Larger companies add estimating for installs, equipment costs and job costing by property. Snow removal often fills the winter. Generalist FSM tools cover recurring scheduling and billing well; job costing by crew, property measurement and commercial maintenance contracts are where landscape-specific platforms like LMN and Aspire focus.',

  keyFeatures: [
    'Recurring visits (weekly, biweekly, seasonal) created automatically',
    'Route optimization for each crew’s daily stops',
    'Crew scheduling with GPS and time tracking on site',
    'Seasonal or per-visit recurring billing on saved cards',
    'Estimates for installs and enhancements, with job costing by property',
    'QuickBooks sync (check Online vs Desktop by plan)',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Published generalist plans start at $29/mo (Jobber Core, 1 user, billed annually) and $59/mo (Housecall Pro Basic, 1 user). Route optimization starts on Jobber Connect ($99/mo, 1 user) and Housecall Pro MAX ($299/mo, up to 8 users). Landscape-specific: LMN Starter $297/mo and Professional $648/mo billed monthly after a one-time onboarding fee; Aspire Crew Control $39/mo per crew. ServiceTitan, Aspire, Workiz and FieldPulse are quote only.',
    source: { name: 'LMN pricing', url: 'https://granum.com/lmn/pricing/', checked: '2026-11-21' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 6,

  providers: [
    {
      slug: 'jobber',
      positioning: 'Lowest published price; route optimization from Connect',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Owner-operators and small lawn crews that want a published price',
        strengths: [
          'Published plans from $29/month billed annually; lists landscaping and lawn care among its industries',
          'Route optimization on Connect, Grow and Plus, run by admins on the web app',
          'Recurring jobs, with automatic payments and QuickBooks Online from Connect',
        ],
        limitations: [
          'Its landscaping and lawn care pages blocked our checks, so we list no lawn-specific Jobber feature',
          'QuickBooks Online only, no Desktop',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; route optimization and service plans on MAX',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Lawn care teams of up to 8 that want routing and plans at a known price',
        strengths: [
          'Optimize by Drive Time reorders a tech’s day using live traffic (MAX)',
          'Recurring Service Plans on MAX ($299/month billed annually for up to 8 users)',
          'Plan data lists QuickBooks Online and Desktop on Essentials',
        ],
        limitations: [
          'Route optimization does not move jobs to other days or techs, and is MAX only',
          'No lawn or landscaping feature confirmed in what we could check',
        ],
      },
    },
    {
      slug: 'servicetitan',
      positioning: 'Lawn treatment memberships and bulk booking; sells Aspire for commercial landscaping',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger lawn treatment companies, or commercial landscapers through Aspire',
        strengths: [
          'Lawn care page offers memberships for lawn treatment plans that techs can sell on site',
          'Bulk booking with routing optimization for recurring appointments',
          'Owns Aspire (commercial landscaping) and FieldRoutes, which added lawn care features',
        ],
        limitations: [
          'No published price, and the lawn page does not say which package includes routing',
          'Its landscaping page sells Aspire, a separate product, rather than core ServiceTitan',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Lawn care and landscaping pages; service plans on Ultimate',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Lawn and landscape teams that want Workiz’s phone and booking tools',
        strengths: [
          'Recurring jobs, fleet tracking and team location tracking on every plan',
          'Service plans, checklists and multi-day jobs on Ultimate',
        ],
        limitations: [
          'Every plan is “Request pricing”',
          'Route planning is offered but the plan that includes it is not stated',
        ],
      },
    },
    {
      slug: 'fieldpulse',
      positioning: 'Seasonal recurring billing documented for landscaping',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Seasonal maintenance companies that bill a fixed number of visits',
        strengths: [
          'Recurring billing can attach to a recurring job or agreement and end after a set number of sessions, such as 24 weekly visits',
          'Two-way QuickBooks Online sync',
        ],
        limitations: [
          'No landscaping page; seat-based pricing is not published',
          'Its scheduling page makes no multi-stop route optimization claim',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo mower or owner-operator', pick: 'Jobber Core ($29/mo) or Connect ($99/mo)', why: 'Lowest published price; Connect adds route optimization, automatic payments and QuickBooks Online.' },
    { size: 'Lawn crew of up to 8', pick: 'Housecall Pro MAX ($299/mo, up to 8 users)', why: 'Route optimization with live traffic and Recurring Service Plans at a published price; extra users $35/mo each.' },
    { size: 'Several crews, priced per crew', pick: 'Aspire Crew Control ($39/mo per crew)', why: 'Landscape-specific, with route optimization and QuickBooks Online on both plans and a 14-day free trial.' },
    { size: 'Landscape company with job costing', pick: 'LMN Starter ($297/mo) or Professional ($648/mo)', why: 'Published prices billed monthly after onboarding; route optimization on all plans; Professional adds real-time job costing and QuickBooks Desktop.' },
    { size: 'Large commercial landscaper', pick: 'Aspire (custom quote)', why: 'ServiceTitan’s landscaping platform, with recurring jobs, equipment tracking on higher tiers and PropertyIntel aerial measuring.' },
  ],

  extraSections: [
    {
      id: 'landscaping-routes-billing',
      heading: 'Routes, recurring visits and seasonal billing: what to test in a demo',
      paragraphs: [
        'Set up one real route in every tool you test: ten weekly mowing stops for one crew, with one stop skipped for rain. Check that the visits repeat on their own, that route optimization reorders the stops and who can run it, and what happens to the skipped visit. Jobber runs route optimization on the web app from Connect; Housecall Pro’s Optimize by Drive Time is on MAX and reorders a single tech’s day without moving jobs to other days; LMN includes route optimization on every plan.',
        'Then bill the season. FieldPulse documents recurring billing that ends after a set number of sessions, such as 24 weekly visits. LMN includes automated batch invoicing on every plan, and Jobber starts automatic payments on Connect. Check QuickBooks before you commit: Jobber and FieldPulse name QuickBooks Online, LMN adds Desktop on Professional, and Housecall Pro lists Desktop on Essentials. See our [QuickBooks guide](/quickbooks) and [field service software pricing](/pricing) for the full plan detail.',
      ],
    },
  ],

  mistakes: [
    'Assuming every plan includes route optimization. Jobber starts it on Connect and Housecall Pro only on MAX.',
    'Comparing per-crew, per-user and flat-plan prices as if they were the same. Aspire Crew Control prices per crew, LMN by license bundle, and Jobber and Housecall Pro by plan and user count.',
    'Forgetting onboarding fees. LMN’s published monthly prices apply after a one-time onboarding fee.',
    'Expecting chemical or fertilizer application records by default. None of the tools we checked documents them, so ask in the demo if you apply treatments.',
  ],

  faqs: [
    {
      question: 'What is the best software for a landscaping business?',
      answer:
        'For small crews, Jobber (from $29/month billed annually, route optimization from Connect) and Housecall Pro (route optimization and service plans on MAX at $299/month) publish prices. Landscape-specific LMN starts at $297/month and Aspire Crew Control at $39/month per crew. Larger commercial landscapers often evaluate Aspire, which is quote only.',
    },
    {
      question: 'How much does lawn care software cost?',
      answer:
        'Jobber starts at $29/month and Housecall Pro at $59/month, both billed annually for one user. Aspire Crew Control costs $39 or $59 a month per crew, and LMN $297 or $648 a month billed monthly after an onboarding fee. ServiceTitan, Aspire, Workiz and FieldPulse are quote only.',
    },
    {
      question: 'Which landscaping software has route optimization?',
      answer:
        'Jobber includes it on Connect, Grow and Plus, and Housecall Pro on MAX. LMN and Aspire Crew Control include it on every plan. ServiceTitan’s lawn page describes bulk booking with routing optimization without naming a package, and Workiz offers route planning without saying which plan.',
    },
    {
      question: 'Can I bill lawn care customers for a season?',
      answer:
        'Yes. FieldPulse documents recurring billing that ends after a set number of sessions, such as 24 weekly visits. Jobber charges automatic payments on recurring jobs from Connect, Housecall Pro offers Recurring Service Plans on MAX, and Workiz puts service plans on Ultimate.',
    },
    {
      question: 'Does landscaping software track fertilizer and chemical applications?',
      answer:
        'None of the tools we checked documents chemical or fertilizer application records as a feature. ServiceTitan’s lawn page mentions notes on previous lawn treatments and tracking lawn treatment products. If you need application records for compliance, ask each vendor to show them in a demo.',
    },
    {
      question: 'Which landscaping software works with QuickBooks Desktop?',
      answer:
        'Housecall Pro’s plan data lists QuickBooks Online and Desktop on Essentials, and LMN supports Desktop on Professional and Enterprise. Jobber, FieldPulse, Aspire Crew Control and LMN Starter name QuickBooks Online only, and Workiz lists QuickBooks Online sync.',
    },
  ],

  lastUpdated: '2026-11-21',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Jobber homepage (industries list includes landscaping and lawn care)', url: 'https://www.getjobber.com/', checked: '2026-11-21' },
    { name: 'Jobber help: route optimization', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
    { name: 'Jobber help: automatic payments', url: 'https://help.getjobber.com/hc/en-us/articles/360036931633-Automatic-Payments', checked: '2026-11-20' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Housecall Pro help: optimize by drive time (MAX)', url: 'https://help.housecallpro.com/en/articles/14093813-optimize-by-drive-time', checked: '2026-11-21' },
    { name: 'ServiceTitan lawn care software', url: 'https://www.servicetitan.com/industries/lawn-care-software', checked: '2026-11-21' },
    { name: 'ServiceTitan landscaping page (Aspire)', url: 'https://www.servicetitan.com/industries/landscape-business-software', checked: '2026-11-21' },
    { name: 'ServiceTitan blog: acquisition of Aspire (June 2021)', url: 'https://www.servicetitan.com/blog/servicetitan-expands-landscaping-acquires-aspire-software', checked: '2026-11-21' },
    { name: 'FieldRoutes about us (lawn care, ServiceTitan family)', url: 'https://www.fieldroutes.com/company/about-us', checked: '2026-11-21' },
    { name: 'Workiz lawn care software', url: 'https://www.workiz.com/industries/lawn-care/', checked: '2026-11-21' },
    { name: 'Workiz landscaping software', url: 'https://www.workiz.com/industries/landscaping/', checked: '2026-11-21' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Workiz route planning', url: 'https://www.workiz.com/features/route-planning/', checked: '2026-11-21' },
    { name: 'FieldPulse help: recurring billing', url: 'https://help.fieldpulse.com/estimates-invoices/recurring/recurring-billing', checked: '2026-11-21' },
    { name: 'FieldPulse QuickBooks (Online, two-way sync)', url: 'https://www.fieldpulse.com/company/partners/quickbooks', checked: '2026-11-21' },
    { name: 'FieldPulse pricing (seat-based, quote only)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-21' },
    { name: 'Commusoft industries (no landscaping)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'LMN pricing (Starter, Professional, Enterprise)', url: 'https://granum.com/lmn/pricing/', checked: '2026-11-21' },
    { name: 'Aspire Crew Control (per-crew pricing)', url: 'https://www.youraspire.com/products/crew-control', checked: '2026-11-21' },
    { name: 'Aspire landscape business software', url: 'https://www.youraspire.com/industries/landscape-business-software', checked: '2026-11-21' },
    { name: 'Aspire PropertyIntel (aerial measuring)', url: 'https://www.youraspire.com/products/propertyintel', checked: '2026-11-21' },
  ],
}
