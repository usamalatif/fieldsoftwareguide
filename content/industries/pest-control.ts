import type { Industry } from '@/lib/industries'

/**
 * Pest Control — VERIFIED (researched 2026-07-08).
 * Vertical pages: Jobber, Housecall Pro, FieldPulse have real pest pages;
 * ServiceTitan's pest page hands off to FieldRoutes (its pest-specific platform);
 * Workiz has NO pest page (404, absent from industries list); Commusoft removed its
 * legacy pest page (404). Neither is listed as a provider here.
 * Chemical tracking: Jobber is the only one of the six documenting chemical +
 * registration-number capture (forms-based); FieldPulse has treatment-log checklists.
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
    'Pest control is where generalist FSM software hits its limits, so the honest answer depends on your compliance burden. Among the six major FSM vendors, Jobber (from $29/month billed annually; $49 month-to-month) is the best fit — the only one that documents capturing chemicals and registration numbers on the job, plus native route optimization and auto-billing for recurring commercial accounts. Housecall Pro (from $59/month billed annually) covers recurring jobs and dispatch, and FieldPulse handles monthly and seasonal service agreements with treatment-log checklists (custom-quoted). ServiceTitan hands pest control to FieldRoutes, its pest-specific platform, and Workiz and Commusoft have no pest-control product page at all. Critically, none of the six generates state pesticide-use reports. If you file California, Arizona, or New York reports, use a pest-specific platform: PestPac (EPA-number database plus state reports, quote-based) or GorillaDesk (published pricing from $49/month per route).',

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
    max: 299,
    note: 'Published generalist plans run $29/mo (Jobber Core, annual billing; $49 month-to-month) to $299/mo (Housecall Pro MAX, annual billing; $329 month-to-month). Pest-specific: GorillaDesk publishes $49–$149/mo for the first route, with extra routes priced on top; PestPac and FieldRoutes are quote-based.',
    source: { name: 'GorillaDesk pricing', url: 'https://gorilladesk.com/pricing/', checked: '2026-10-24' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  providers: [
    { slug: 'jobber', positioning: 'Best generalist for pest control — chemical capture + native route optimization', monthlyFromUsd: 29 },
    { slug: 'housecall-pro', positioning: 'Recurring jobs + dispatch with published pricing', monthlyFromUsd: 59 },
    { slug: 'fieldpulse', positioning: 'Monthly / seasonal service agreements + treatment-log checklists', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Routes pest control to FieldRoutes, its pest-specific platform', monthlyFromUsd: null },
  ],

  bySize: [
    { size: 'Solo operator, no state reporting', pick: 'Jobber Core ($29/mo)', why: 'Documents chemical and registration-number capture through job forms, plus native route optimization.' },
    { size: 'Pest-only business with 1–3 routes', pick: 'GorillaDesk Basic ($49/mo for the first route)', why: 'Pest-specific tool with published per-route pricing; on Basic, routes 2 and 3 add $50/mo each.' },
    { size: 'Recurring commercial accounts', pick: 'Housecall Pro or FieldPulse', why: 'Housecall Pro covers recurring jobs and dispatch with published pricing; FieldPulse handles service agreements with treatment-log checklists (custom quote).' },
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
        'Where state reporting matters, pest control companies often use pest-specific platforms such as PestPac, FieldRoutes, GorillaDesk (published from $49/month for the first route), and Briostack. Among generalist FSM tools, Jobber (from $29/month billed annually) is the strongest pest fit, with Housecall Pro (from $59/month billed annually) for recurring jobs and dispatch.',
    },
    {
      question: 'What is the best pest control software for a small business?',
      answer:
        'A solo operator without state reporting can start on Jobber Core ($29/month billed annually), which documents chemical capture and route optimization. A pest-only business that wants a pest-specific tool can compare GorillaDesk, which starts at $49/month for the first route. If you file California, Arizona, or New York pesticide-use reports, look at PestPac.',
    },
    {
      question: 'Can FSM software track chemicals and application rates?',
      answer:
        'Only partially. Jobber is the only major FSM vendor documenting chemical and registration-number capture (via job forms), and FieldPulse supports treatment-log checklists. None of the six offers a real chemical database. PestPac does: every chemical carries its EPA registration number, concentration, and quantity, auto-populated from the mobile app.',
    },
    {
      question: 'Does any FSM software generate state pesticide-use reports?',
      answer:
        'None of the six major FSM vendors (Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, Commusoft) documents state pesticide-use reporting as of July 2026. PestPac builds in California material, Arizona TARF, and New York material reports; if you file these, a pest-specific platform is the safer choice.',
    },
    {
      question: 'How much does pest control software cost?',
      answer:
        'Generalist FSM: Jobber from $29/month (annual billing; $49 month-to-month) and Housecall Pro from $59/month (annual billing; $79 month-to-month). Pest-specific: GorillaDesk publishes $49, $99, and $149 per month for the first route on its Basic, Pro, and Growth plans, with extra routes added on top; PestPac and FieldRoutes are quote-based.',
    },
    {
      question: 'Do Workiz or Commusoft support pest control?',
      answer:
        'Neither markets to pest control as of July 2026. Workiz has no pest-control page and pest is absent from its 23-industry list; Commusoft removed its legacy pest-control page. Both could run pest jobs as generic field service, but neither documents chemical tracking or pest-specific workflows.',
    },
  ],

  lastUpdated: '2026-10-24',
  dataVerified: true,
  sources: [
    { name: 'Jobber pest control software', url: 'https://www.getjobber.com/industries/pest-control-software/', checked: '2026-07-08' },
    { name: 'Housecall Pro pest control software', url: 'https://www.housecallpro.com/industries/pest-control-software/', checked: '2026-07-08' },
    { name: 'FieldPulse pest control solution', url: 'https://www.fieldpulse.com/solutions/field-service-pest-control', checked: '2026-07-08' },
    { name: 'ServiceTitan pest page (FieldRoutes hand-off)', url: 'https://www.servicetitan.com/industries/pest-control-software', checked: '2026-07-08' },
    { name: 'FieldRoutes pest control software', url: 'https://www.fieldroutes.com/solutions/pest-control-software', checked: '2026-07-08' },
    { name: 'GorillaDesk pricing (per route, route definition)', url: 'https://gorilladesk.com/pricing/', checked: '2026-10-24' },
    { name: 'PestPac chemical tracking', url: 'https://www.pestpac.com/features/chemical-tracking-software', checked: '2026-07-08' },
    { name: 'Workiz industries (no pest control)', url: 'https://www.workiz.com/industries/', checked: '2026-07-08' },
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-22' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-24' },
  ],
}
