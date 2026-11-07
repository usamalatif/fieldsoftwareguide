import type { Industry } from '@/lib/industries'

/**
 * Pest Control — VERIFIED (researched 2026-07-08).
 * Vertical pages: Jobber, Housecall Pro, FieldPulse have real pest pages;
 * ServiceTitan's pest page hands off to FieldRoutes (its pest-specific platform);
 * Workiz has NO pest page (404, absent from industries list); Commusoft removed its
 * legacy pest page (404). Neither is listed as a provider here.
 * Chemical tracking: Jobber's chemical-tracking page documents chemical + registration-number
 * capture (help center: "select plans", recorded on jobber.com, not the mobile app);
 * ServiceTitan documents chemical tracking for pest/lawn/pool accounts (limited rollout,
 * requires the Purchasing module and account configuration, no registration-number field
 * listed); FieldPulse has treatment-log checklists. Jobber route optimization is run on
 * jobber.com, not in the mobile app (the app shows the optimized order).
 * 2026-11-07: Jobber route optimization is Connect, Grow and Plus (help center), so the solo
 * pick moved from Core to Connect; removed the $299 "ceiling" (Jobber Plus 15 users $529).
 * NONE of the six documents state pesticide-use reporting — that's pest-specific
 * platforms: PestPac (EPA-number database + CA/AZ/NY reports), FieldRoutes,
 * GorillaDesk (published: $49/$99/$149 per route/mo, or $539/$1,089/$1,639 per year).
 * 2026-10-24: GorillaDesk rechecked — $49/$99/$149 per month for the first route; extra
 * routes cost more; yearly billing shows "one month free" but no annual dollar amounts.
 * A route = one schedule (a technician running their own route). Housecall Pro rechecked.
 */
export const pestControl: Industry = {
  slug: 'pest-control',
  name: 'Pest Control',
  icon: '🐜',
  category: 'Field Services',
  metaDescription:
    'Compare pest control service software for routes, recurring visits, scheduling and invoicing. See verified vendor features and pricing terms.',
  datePublished: '2026-07-08',

  answer:
    'Pest control is where generalist FSM software hits its limits, so the honest answer depends on your compliance burden. Among the six major FSM vendors, Jobber is the strongest generalist fit. Its chemical tracking page says it records the chemicals and pesticides used on each job with their registration numbers and target pests, and route optimization and automatic payments start on Connect ($99/month billed annually for one user; Core at $29/month does not include route optimization). Jobber runs route optimization on jobber.com rather than in its mobile app. Housecall Pro (from $59/month billed annually) covers scheduling and dispatch, with route optimization and Recurring Service Plans listed on MAX ($299/month for up to 8 users). FieldPulse handles monthly and seasonal service agreements with treatment-log checklists (custom-quoted). ServiceTitan hands pest control to FieldRoutes, its pest-specific platform, and Workiz and Commusoft have no pest-control product page at all. Critically, none of the six generates state pesticide-use reports. If you file California, Arizona, or New York reports, use a pest-specific platform: PestPac (EPA-number database plus state reports, quote-based) or GorillaDesk (published pricing from $49/month per route).',

  intro:
    'Pest control runs on dense recurring routes and regulatory record-keeping. Every stop needs the treatment plan, the products applied — with registration numbers — and the bait-station checks documented, and in states like California, Arizona, and New York that record feeds mandatory pesticide-use reports. The right software has to automate quarterly and monthly recurrences, charge cards on file for commercial accounts, optimize tightly packed residential routes, and keep chemical records audit-ready. Generalist FSM tools cover the scheduling and billing side well; the compliance side is where pest-specific platforms earn their keep.',

  keyFeatures: [
    'Recurring treatment plans (monthly / quarterly) with auto-billing on saved cards',
    'Chemical / application records: product, registration number, target pest',
    'Route optimization for dense residential treatment routes',
    'State pesticide-use reporting (pest-specific platforms only — see FAQ)',
    'Bait-station and trap checklists with photos',
    'QuickBooks sync with per-visit or per-period invoicing',
  ],

  priceRange: {
    min: 29,
    // No ceiling: Jobber publishes tiers above $299 (e.g. Plus 15 users $529).
    max: null,
    note: 'Published generalist plans start at $29/mo (Jobber Core, 1 user, annual billing; $49 month-to-month) and $59/mo (Housecall Pro Basic, 1 user). Route optimization starts on Jobber Connect ($99/mo, 1 user) and Housecall Pro MAX ($299/mo, up to 8 users), and Jobber Plus reaches $529/mo for 15 users (annual billing). Pest-specific: GorillaDesk publishes $49–$149/mo for the first route, with extra routes priced on top; PestPac and FieldRoutes are quote-based.',
    source: { name: 'GorillaDesk pricing', url: 'https://gorilladesk.com/pricing/', checked: '2026-11-07' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  providers: [
    { slug: 'jobber', positioning: 'Best generalist for pest control: chemical tracking, with route optimization from Connect', monthlyFromUsd: 29 },
    { slug: 'housecall-pro', positioning: 'Dispatch with published pricing; route optimization and service plans on MAX', monthlyFromUsd: 59 },
    { slug: 'fieldpulse', positioning: 'Monthly / seasonal service agreements + treatment-log checklists', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Routes pest control to FieldRoutes, its pest-specific platform', monthlyFromUsd: null },
  ],

  bySize: [
    { size: 'Solo operator, no state reporting', pick: 'Jobber Connect ($99/mo, 1 user)', why: 'Route optimization starts on Connect (run on jobber.com, not in the mobile app), and Jobber documents chemical tracking with registration numbers (on select plans, recorded on jobber.com rather than the mobile app). Core ($29/mo) is cheaper but has no route optimization.' },
    { size: 'Pest-only business with 1–3 routes', pick: 'GorillaDesk Basic ($49/mo for the first route)', why: 'Pest-specific tool with published per-route pricing; on Basic, routes 2 and 3 add $50/mo each.' },
    { size: 'Recurring commercial accounts', pick: 'Housecall Pro or FieldPulse', why: 'Housecall Pro lists Recurring Service Plans and route optimization on MAX ($299/mo, up to 8 users); FieldPulse handles service agreements with treatment-log checklists (custom quote).' },
    { size: 'Operation filing state pesticide-use reports', pick: 'PestPac (custom quote)', why: 'Builds in California, Arizona, and New York reports and an EPA-number chemical database; none of the six generalist FSM tools documents this.' },
  ],

  extraSections: [
    {
      id: 'pest-routes-pricing',
      heading: 'Route density, recurring visits, and how pest software is priced',
      paragraphs: [
        'Pest control revenue depends on how many recurring stops a technician can fit into a day, so route optimization and automatic recurrences matter more here than in most trades. A quarterly residential plan should schedule itself, charge the card on file, and land on the right route without a dispatcher rebuilding the week.',
        'Watch the pricing basis when you compare tools. Jobber and Housecall Pro price by plan and number of users. GorillaDesk prices by route, where a route is one schedule: a technician running their own route usually needs one, while a crew that rides together can share one. A three-technician business on GorillaDesk Basic pays for three routes, not one. For general small-business pricing, see our guide to [field service software for small business](/for-small-business); if you need accounting sync, check [which FSM tools work with QuickBooks](/quickbooks).',
      ],
    },
  ],

  mistakes: [
    'Comparing per-route and per-user prices as if they were the same. GorillaDesk charges per route; Jobber and Housecall Pro charge per plan and user count.',
    'Expecting a generalist FSM tool to file state pesticide-use reports. None of the six major FSM vendors documents this; PestPac builds in California, Arizona, and New York reports.',
    'Shortlisting Workiz or Commusoft for pest work without checking fit. Neither markets to pest control, and neither documents chemical tracking.',
    'Leaving chemical records outside the job. Capture the product, registration number, and target pest on each visit so records are complete when you need them.',
  ],

  faqs: [
    {
      question: 'What software do pest control companies use?',
      answer:
        'Where state reporting matters, pest control companies often use pest-specific platforms such as PestPac, FieldRoutes, GorillaDesk (published from $49/month for the first route), and Briostack. Among generalist FSM tools, Jobber is the strongest pest fit (from $29/month billed annually, with route optimization from Connect at $99/month), with Housecall Pro (from $59/month billed annually) for scheduling and dispatch.',
    },
    {
      question: 'What is the best pest control software for a small business?',
      answer:
        'A solo operator without state reporting can start on Jobber Connect ($99/month billed annually for one user), the first Jobber plan with route optimization, which you run on jobber.com rather than in the mobile app; Jobber also documents chemical tracking on select plans. Jobber Core ($29/month) is cheaper but has no route optimization. A pest-only business that wants a pest-specific tool can compare GorillaDesk, which starts at $49/month for the first route. If you file California, Arizona, or New York pesticide-use reports, look at PestPac.',
    },
    {
      question: 'Can FSM software track chemicals and application rates?',
      answer:
        'Partially. Jobber’s chemical tracking page says it records chemicals and pesticides with their registration numbers and target pests, but its help center says the feature is on select plans and is entered on jobber.com, not in the mobile app. ServiceTitan documents chemical tracking for pest, lawn, and pool accounts (product, amount, dilution, and technician license number, logged in its mobile app), but the feature is currently rolling out to a limited number of pest control accounts and requires ServiceTitan’s Purchasing module plus account configuration. FieldPulse supports treatment-log checklists. PestPac keeps a chemical database in which every chemical carries its EPA registration number, concentration, and quantity, auto-populated from the mobile app.',
    },
    {
      question: 'Does any FSM software generate state pesticide-use reports?',
      answer:
        'None of the six major FSM vendors (Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, Commusoft) documents state pesticide-use reporting as of July 2026. PestPac builds in California material, Arizona TARF, and New York material reports; if you file these, a pest-specific platform is the safer choice.',
    },
    {
      question: 'How much does pest control software cost?',
      answer:
        'Generalist FSM: Jobber from $29/month (annual billing; $49 month-to-month) and Housecall Pro from $59/month (annual billing; $79 month-to-month). Route optimization starts on Jobber Connect ($99/month for one user) and Housecall Pro MAX ($299/month for up to 8 users). Pest-specific: GorillaDesk publishes $49, $99, and $149 per month for the first route on its Basic, Pro, and Growth plans, with extra routes added on top; PestPac and FieldRoutes are quote-based.',
    },
    {
      question: 'Do Workiz or Commusoft support pest control?',
      answer:
        'Neither markets to pest control as of July 2026. Workiz has no pest-control page and pest is absent from its 23-industry list; Commusoft removed its legacy pest-control page. Both could run pest jobs as generic field service, but neither documents chemical tracking or pest-specific workflows.',
    },
  ],

  lastUpdated: '2026-11-07',
  dataVerified: true,
  sources: [
    { name: 'Jobber pest control software', url: 'https://www.getjobber.com/industries/pest-control-software/', checked: '2026-07-08' },
    { name: 'Housecall Pro pest control software', url: 'https://www.housecallpro.com/industries/pest-control-software/', checked: '2026-07-08' },
    { name: 'FieldPulse pest control solution', url: 'https://www.fieldpulse.com/solutions/field-service-pest-control', checked: '2026-07-08' },
    { name: 'ServiceTitan pest page (FieldRoutes hand-off)', url: 'https://www.servicetitan.com/industries/pest-control-software', checked: '2026-07-08' },
    { name: 'FieldRoutes pest control software', url: 'https://www.fieldroutes.com/solutions/pest-control-software', checked: '2026-07-08' },
    { name: 'GorillaDesk pricing (per route, route definition)', url: 'https://gorilladesk.com/pricing/', checked: '2026-11-07' },
    { name: 'PestPac chemical tracking', url: 'https://www.pestpac.com/features/chemical-tracking-software', checked: '2026-07-08' },
    { name: 'Workiz industries (no pest control)', url: 'https://www.workiz.com/industries/', checked: '2026-07-08' },
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-07' },
    { name: 'Jobber chemical tracking (registration numbers, target pests)', url: 'https://www.getjobber.com/features/chemical-tracking/', checked: '2026-11-07' },
    { name: 'Jobber help: chemical tracking (select plans, jobber.com only)', url: 'https://help.getjobber.com/en/articles/chemical-tracking/', checked: '2026-11-07' },
    { name: 'Jobber help: route optimization (Connect, Grow, Plus; run on jobber.com)', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-07' },
    { name: 'ServiceTitan chemical tracking overview (limited rollout, Purchasing module required)', url: 'https://help.servicetitan.com/v1/docs/chemical-tracking-overview', checked: '2026-11-07' },
    { name: 'Housecall Pro pricing (route optimization and Recurring Service Plans on MAX)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-07' },
  ],
}
