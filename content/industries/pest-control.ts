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
 * 2026-11-20: ServiceTitan now has its own pest control page (servicetitan.com/industries/
 * pest-control-software) aimed at "established operations" (multi-truck to multi-branch) and says
 * smaller pest businesses are "typically a better fit for FieldRoutes". Its marketing page says it
 * logs EPA registrations; its help center says Chemical Tracking is a limited rollout needing the
 * Purchasing module. Housecall Pro's pest page uses the standard plan grid (no trade package) and
 * says its checklists "do not replace dedicated chemical-application tracking". Jobber chemical
 * tracking: jobber.com only, select plans, CSV download. Workiz and Commusoft pest URLs still 404.
 * Pest-specific platforms checked 2026-11-20 on their own sites: PestPac (quote; CA Material,
 * CA Cal-Ag, AZ TARF on its chemical page; CA + NY Material on its reporting page), FieldRoutes
 * (quote, priced by active customers, no free trial; ServSuite is now ServSuite by FieldRoutes),
 * GorillaDesk ($49/$99/$149 first route), Fieldwork ($59/$79/$99 per field user, office free;
 * CA + NY usage logs), Pocomos ($109-$275 by active customers), Briostack (quote, concurrent
 * licensing; CalAg). FieldRoutes blog 2026-10-23: ServiceTitan Property Care adds chemical
 * tracking and local/state compliance reporting (no states named).
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
    'Pest control is where generalist FSM software hits its limits, so the honest answer depends on your compliance burden. Among the six major FSM vendors, Jobber is the strongest generalist fit. Its chemical tracking page says it records the chemicals and pesticides used on each job with their registration numbers and target pests, and route optimization and automatic payments start on Connect ($99/month billed annually for one user; Core at $29/month does not include route optimization). Jobber runs route optimization on jobber.com rather than in its mobile app. Housecall Pro (from $59/month billed annually) covers scheduling and dispatch, with route optimization and Recurring Service Plans listed on MAX ($299/month for up to 8 users). FieldPulse handles monthly and seasonal service agreements with custom treatment-log and bait-station checklists (custom-quoted). ServiceTitan markets pest control software to established multi-truck and multi-branch operations and points smaller pest businesses to FieldRoutes, its pest-specific platform. Workiz and Commusoft have no pest-control product page at all. Critically, none of the six documents state pesticide-use reports by name. If you file California, Arizona, or New York reports, use a pest-specific platform: PestPac (EPA-number database plus state reports, quote-based), Fieldwork (California and New York usage logs, from $59/month per field user) or GorillaDesk (published pricing from $49/month per route).',

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
    source: { name: 'GorillaDesk pricing', url: 'https://gorilladesk.com/pricing/', checked: '2026-11-20' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  providers: [
    {
      slug: 'jobber',
      positioning: 'Best generalist for pest control: chemical tracking, with route optimization from Connect',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Solo operators and small pest crews that want chemical records and route optimization at a published price',
        strengths: [
          'Chemical tracking records the chemical and concentration, applicator, application details and weather for each treatment, and Jobber says it captures registration numbers and target pests.',
          'Chemical application history downloads as a CSV and sorts by date, client or applicator.',
          'Route optimization on Connect ($99/month billed annually for 1 user), Grow and Plus.',
        ],
        limitations: [
          'Chemical tracking is on select plans and is recorded on jobber.com only; the mobile app has no chemical tracking.',
          'Jobber does not say it produces state pesticide-use reports; its feature page says you can download your chemical application history when you need to report.',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Dispatch with published pricing; route optimization and service plans on MAX',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Pest companies selling recurring residential or commercial service plans that want published pricing',
        strengths: [
          'Service plans with defined treatments, visit frequency and pricing, monthly, quarterly or annual payment options, and online renewal by the customer.',
          'Its pest page quotes the standard plans: Basic $59/month billed annually ($79 monthly), Essentials $149 for 5 users, MAX $299 for 8 users.',
          'Inspection checklists and photos of pest damage, entry points or treated areas are saved with the job.',
        ],
        limitations: [
          'Housecall Pro says its checklists help document visits but do not replace dedicated chemical-application tracking.',
          'On the main pricing grid, Recurring Service Plans and route optimization are included only in MAX.',
        ],
      },
    },
    {
      slug: 'fieldpulse',
      positioning: 'Monthly / seasonal service agreements + treatment-log checklists',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Pest teams with commercial accounts that need custom documentation and per-visit cost tracking',
        strengths: [
          'Custom checklists for treatment logs, bait-station checks and inspection steps, filled out on site.',
          'Schedules routine visits for monthly or seasonal service agreements automatically.',
          'Tracks labor, chemicals and equipment used on each visit.',
        ],
        limitations: [
          'Quote-only, seat-based pricing, and FieldPulse says it does not offer a free trial.',
          'Its pest page does not mention route optimization or state pesticide-use reports.',
        ],
      },
    },
    {
      slug: 'servicetitan',
      positioning: 'Pest software for multi-truck and multi-branch operations; points smaller shops to FieldRoutes',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Established multi-truck and multi-branch pest operations, including multi-brand or PE-backed groups',
        strengths: [
          'Its pest page describes routes built around technician skill, vehicle capacity and service zones, plus recurring service agreements.',
          'Chemical Tracking logs product, quantities, dilution and lot in the field app and generates a Chemical Application Report for each completed job.',
          'Roll-up reporting across locations, permission-based access by branch and a system-wide audit trail.',
        ],
        limitations: [
          'Chemical Tracking is rolling out to a limited number of pest accounts, needs account configuration and requires the Purchasing module.',
          'Per-technician pricing is quote-only, and ServiceTitan says smaller pest businesses are typically a better fit for FieldRoutes.',
        ],
      },
    },
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
    {
      id: 'pest-chemical-records',
      heading: 'Chemical records: what each tool actually stores',
      paragraphs: [
        'Jobber’s chemical tracking records the service address, job, applicator, chemical name and concentration, application details and weather for each treatment, plus company and applicator license numbers and tank mixtures. Its feature page says it captures registration numbers and target pests. The records are entered on jobber.com, not in the mobile app, the feature is on select plans, and you can download your full application history as a CSV.',
        'ServiceTitan’s Chemical Tracking lets technicians log product, quantity, dilution and lot in its field app and produces a Chemical Application Report for each completed job. Its help center says the feature is rolling out to a limited number of pest accounts and requires the Purchasing module, so confirm it is switched on for your account before you rely on it.',
        'A FieldRoutes blog post dated October 23, 2026 says ServiceTitan’s new Property Care platform for pest, lawn and pool businesses adds chemical tracking and dosing and compliance reporting for local and state regulations. It names no states, so ask for a sample report from your state before you buy.',
        'FieldPulse uses custom checklists for treatment logs, bait-station checks and inspections, and tracks chemicals used on each visit. Housecall Pro offers inspection checklists and photos but says they do not replace dedicated chemical-application tracking. Jobber, Housecall Pro and FieldPulse name no state pesticide-use report. If your state requires one, check whether the export gives the fields your report needs, or use a pest-specific platform that builds the report for you.',
      ],
    },
    {
      id: 'pest-specific-platforms',
      heading: 'Pest-specific software compared: PestPac, FieldRoutes, GorillaDesk and others',
      paragraphs: [
        'If you file state pesticide-use reports or run termite inspections, a pest-specific platform usually fits better than a generalist tool. Three of them publish prices (GorillaDesk, Fieldwork and Pocomos), and each prices on a different basis: routes, field users or active customers. PestPac, FieldRoutes and Briostack are quote-only.',
        'PestPac (by WorkWave) sells Small Business, Professional and Enterprise packages by quote. Every chemical carries its EPA registration number, concentration and undiluted quantity, and PestPac says California Material, California Cal-Ag and Arizona TARF reports are built in. Its reporting page also lists California and New York Material Reports and NPMA termite forms.',
        'FieldRoutes, a ServiceTitan company, prices its Growth and Corporate plans by quote, based on your number of active customers, and says it does not offer a free trial because each setup is customized. ServSuite is now “ServSuite by FieldRoutes” after ServicePro became part of FieldRoutes. ServiceTitan points smaller pest businesses to FieldRoutes.',
        'GorillaDesk prices per route, not per user, with unlimited users on every plan: Basic $49, Pro $99 and Growth $149 per month for the first route, extra routes on top, and a 14-day trial with no card. It stores EPA registration numbers, active ingredients and dilution rates, says it generates pesticide usage logs for states that require them, and splits material reports by county or job.',
        'Fieldwork prices per field user, and office users are free: $59 (Startup), $79 (Business) or $99 (Pro) per month for one field user, with route optimization and device management from Business and a two-week trial with no card. It says it generates the state-required pesticide usage logs for California and New York.',
        'Pocomos prices by active and on-hold customers, not users: $109 a month for up to 20, $159 for 21 to 50, $239 for 51 to 300, $275 for 301 to 500, then $0.16 per customer over 500. Briostack is quote-only with concurrent licensing based on active users, and says California customers can submit CalAg reports without paper.',
      ],
    },
  ],

  mistakes: [
    'Assuming ServiceTitan is only for large shops or only for HVAC. It now markets pest control software to established multi-truck operations, and it points smaller pest businesses to FieldRoutes.',
    'Comparing per-route and per-user prices as if they were the same. GorillaDesk charges per route; Jobber and Housecall Pro charge per plan and user count.',
    'Expecting a generalist FSM tool to file state pesticide-use reports. None of the six major FSM vendors documents this; PestPac builds in California, Arizona, and New York reports.',
    'Shortlisting Workiz or Commusoft for pest work without checking fit. Neither markets to pest control, and neither documents chemical tracking.',
    'Leaving chemical records outside the job. Capture the product, registration number, and target pest on each visit so records are complete when you need them.',
  ],

  faqs: [
    {
      question: 'Which pest control software publishes its prices?',
      answer:
        'GorillaDesk ($49 to $149/month for the first route), Fieldwork ($59 to $99/month for one field user; office users free) and Pocomos ($109 to $275/month by active customers). PestPac, FieldRoutes and Briostack are quote-only. Among generalists, Jobber and Housecall Pro publish prices.',
    },
    {
      question: 'What software do pest control companies use?',
      answer:
        'Where state reporting matters, pest control companies often use pest-specific platforms such as PestPac, FieldRoutes, GorillaDesk (from $49/month for the first route), Fieldwork (from $59/month per field user), Pocomos (from $109/month by customer count) and Briostack. Among generalist FSM tools, Jobber is the strongest pest fit (from $29/month billed annually, with route optimization from Connect at $99/month), with Housecall Pro (from $59/month billed annually) for scheduling and dispatch.',
    },
    {
      question: 'What is the best pest control software for a small business?',
      answer:
        'A solo operator without state reporting can start on Jobber Connect ($99/month billed annually for one user), the first Jobber plan with route optimization, which you run on jobber.com rather than in the mobile app; Jobber also documents chemical tracking on select plans. Jobber Core ($29/month) is cheaper but has no route optimization. A pest-only business that wants a pest-specific tool can compare GorillaDesk, which starts at $49/month for the first route. If you file California, Arizona, or New York pesticide-use reports, look at PestPac.',
    },
    {
      question: 'Can FSM software track chemicals and application rates?',
      answer:
        'Partially. Jobber’s chemical tracking page says it records chemicals and pesticides with their registration numbers and target pests, but its help center says the feature is on select plans and is entered on jobber.com, not in the mobile app. ServiceTitan documents chemical tracking for pest, lawn, and pool accounts (product, amount, dilution, and technician license number, logged in its mobile app), but the feature is currently rolling out to a limited number of pest control accounts and requires ServiceTitan’s Purchasing module plus account configuration; its pest marketing page says it logs EPA registrations. FieldPulse supports treatment-log checklists, and Housecall Pro says its checklists do not replace dedicated chemical-application tracking. PestPac keeps a chemical database in which every chemical carries its EPA registration number, concentration, and quantity, auto-populated from the mobile app.',
    },
    {
      question: 'Does any FSM software generate state pesticide-use reports?',
      answer:
        'None of the six major FSM vendors (Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, Commusoft) names state pesticide-use reports on its own pages (rechecked November 2026). Jobber lets you download chemical records to report yourself. PestPac builds in California material, Arizona TARF, and New York material reports; if you file these, a pest-specific platform is the safer choice.',
    },
    {
      question: 'How much does pest control software cost?',
      answer:
        'Generalist FSM: Jobber from $29/month (annual billing; $49 month-to-month) and Housecall Pro from $59/month (annual billing; $79 month-to-month). Route optimization starts on Jobber Connect ($99/month for one user) and Housecall Pro MAX ($299/month for up to 8 users). Pest-specific: GorillaDesk publishes $49, $99, and $149 per month for the first route on its Basic, Pro, and Growth plans, with extra routes added on top; PestPac and FieldRoutes are quote-based.',
    },
    {
      question: 'Do Workiz or Commusoft support pest control?',
      answer:
        'Neither markets to pest control (rechecked November 2026). Workiz has no pest-control page and pest is absent from its industries page; Commusoft removed its legacy pest-control page. Both could run pest jobs as generic field service, but neither documents chemical tracking or pest-specific workflows.',
    },
  ],

  // Set to the actual merge day (PR held until after the Dec 9 GSC review).
  lastUpdated: '2026-11-20',
  dataVerified: true,
  sources: [
    { name: 'Jobber pest control software', url: 'https://www.getjobber.com/industries/pest-control-software/', checked: '2026-07-08' },
    { name: 'Housecall Pro pest control software (standard plans; checklists vs chemical tracking; service plans)', url: 'https://www.housecallpro.com/industries/pest-control-software/', checked: '2026-11-20' },
    { name: 'FieldPulse pest control solution (treatment-log and bait-station checklists, seasonal agreements)', url: 'https://www.fieldpulse.com/solutions/field-service-pest-control', checked: '2026-11-20' },
    { name: 'FieldPulse pricing (quote only; no free trial)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-20' },
    { name: 'ServiceTitan pest control software (established operations; FieldRoutes for smaller shops)', url: 'https://www.servicetitan.com/industries/pest-control-software', checked: '2026-11-20' },
    { name: 'ServiceTitan chemical tracking overview (limited rollout, Purchasing module required)', url: 'https://help.servicetitan.com/v1/docs/chemical-tracking-overview', checked: '2026-11-20' },
    { name: 'FieldRoutes pest control software', url: 'https://www.fieldroutes.com/solutions/pest-control-software', checked: '2026-07-08' },
    { name: 'FieldRoutes pricing (by active customers; no free trial)', url: 'https://www.fieldroutes.com/company/pricing', checked: '2026-11-20' },
    { name: 'ServSuite by FieldRoutes', url: 'https://www.fieldroutes.com/servsuite-by-fieldroutes', checked: '2026-11-20' },
    { name: 'FieldRoutes blog: ServiceTitan Property Care at PestWorld (Oct 23, 2026)', url: 'https://www.fieldroutes.com/blog/servicetitan-property-care-pestworld', checked: '2026-11-20' },
    { name: 'GorillaDesk pricing (per route, route definition)', url: 'https://gorilladesk.com/pricing/', checked: '2026-11-20' },
    { name: 'GorillaDesk chemical tracking (EPA numbers, state usage logs, county reports)', url: 'https://gorilladesk.com/features/chemical-tracking-software/', checked: '2026-11-20' },
    { name: 'PestPac chemical tracking (CA Material, CA Cal-Ag, AZ TARF)', url: 'https://www.pestpac.com/features/chemical-tracking-software', checked: '2026-11-20' },
    { name: 'PestPac reporting (CA and NY Material Reports, NPMA forms)', url: 'https://www.pestpac.com/features/pest-control-reporting-software', checked: '2026-11-20' },
    { name: 'PestPac pricing (quote-based packages)', url: 'https://www.pestpac.com/pricing', checked: '2026-11-20' },
    { name: 'Fieldwork pricing (per field user; office users free)', url: 'https://fieldworkhq.com/pricing/', checked: '2026-11-20' },
    { name: 'Fieldwork chemical tracking (CA and NY pesticide usage logs)', url: 'https://fieldworkhq.com/features/chemical-tracking-and-reporting/', checked: '2026-11-20' },
    { name: 'Pocomos pricing (by active and on-hold customers)', url: 'https://www.pocomos.com/pricing', checked: '2026-11-20' },
    { name: 'Briostack vs PestPac (concurrent licensing, quote)', url: 'https://www.briostack.com/comparison/briostack-vs-pestpac/', checked: '2026-11-20' },
    { name: 'Briostack scheduling and routing (CalAg reports)', url: 'https://www.briostack.com/pest-control-software/scheduling-routing-software/', checked: '2026-11-20' },
    { name: 'Workiz industries (no pest control)', url: 'https://www.workiz.com/industries/', checked: '2026-11-20' },
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-19' },
    { name: 'Jobber chemical tracking (registration numbers, target pests, download history)', url: 'https://www.getjobber.com/features/chemical-tracking/', checked: '2026-11-20' },
    { name: 'Jobber help: chemical tracking (select plans, jobber.com only, CSV download)', url: 'https://help.getjobber.com/en/articles/chemical-tracking/', checked: '2026-11-20' },
    { name: 'Jobber help: route optimization (Connect, Grow, Plus; run on jobber.com)', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
    { name: 'Housecall Pro pricing (route optimization and Recurring Service Plans on MAX)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  ],
}
