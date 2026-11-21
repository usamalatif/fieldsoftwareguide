import type { Industry } from '@/lib/industries'

/**
 * Pool service: VERIFIED (researched 2026-11-21, batch 4 draft).
 * ServiceTitan pool and spa page: volume scheduling of recurring appointments, route optimization,
 * equipment service histories, multi-option estimates, automated payments for recurring plans,
 * customers check chemical readings in the portal (no tech-side dosage log described), QuickBooks
 * Online and Desktop Premier/Enterprise. Housecall Pro help center uses weekly pool cleaning as its
 * recurring job example; its pool page (www) was not fetched. Jobber's pool page exists in search
 * results but getjobber.com was not fetched, so no Jobber pool claim is made. Workiz, FieldPulse and
 * Commusoft have no pool page (404 or not listed). Pool-specific: Skimmer $1 or $2 per serviced
 * location a month (minimum $49 or $98), Pool Brain $65 per tech a month plus a base fee (amount not
 * shown), Pool Office Manager $125 a month for the first user plus $25 per extra user. PoolTrac
 * refused the connection and is not covered.
 */
export const poolService: Industry = {
  slug: 'pool-service',
  name: 'Pool Service',
  icon: '🏊',
  category: 'Field Services',
  metaDescription:
    'Compare pool service software for weekly routes, chemical readings and dosing, service reports with photos, equipment records and autopay. Verified prices.',
  datePublished: '2026-11-21',

  answer:
    'Pool service runs on weekly routes and chemistry, so pool-specific software usually fits better than a general FSM tool. Skimmer prices by serviced location ($1 a month each, minimum $49, or $2 with route optimization and an Orenda dosing calculator, minimum $98) and emails service reports with chemical readings and photos. Pool Brain charges $65 per technician a month plus a base fee and calculates dosing when techs enter readings. Pool Office Manager costs $125 a month for the first user plus $25 per extra user. Among the six major FSM vendors, ServiceTitan has a pool and spa page with recurring volume scheduling, route optimization and equipment histories (custom quote), and Housecall Pro (from $59/month billed annually) handles weekly recurring jobs but puts route optimization on MAX.',

  intro:
    'A pool route is the same stops every week: test the water, add chemicals, brush and skim, check the pump and filter, take a photo and move on. The software has to build and optimize those routes, record readings and the chemicals added at each stop, send the homeowner a report with photos, keep the equipment on each body of water on file, and bill the customer every month without chasing payment. Repairs and equipment replacements need quotes on top. Because pricing is often per pool or per technician, compare totals for your route count, not just the headline price.',

  keyFeatures: [
    'Weekly route building and route optimization',
    'Chemical readings and dosing per visit',
    'Service reports with photos emailed after each stop',
    'Equipment records per body of water (pump, filter, heater)',
    'Repair quotes that turn into jobs when approved',
    'Monthly autopay billing and QuickBooks sync',
  ],

  priceRange: {
    min: 49,
    max: null,
    note: 'Pool-specific: Skimmer $1 a month per serviced location (minimum $49) or $2 with route optimization and dosing (minimum $98); Pool Brain $65 per technician a month plus a base fee; Pool Office Manager $125 a month for the first user plus $25 per extra user. Generalist: Housecall Pro from $59/mo billed annually (route optimization on MAX, $299/mo). ServiceTitan is quote only.',
    source: { name: 'Skimmer pricing', url: 'https://www.getskimmer.com/pricing', checked: '2026-11-21' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 6,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Pool and spa page with volume scheduling, route optimization and equipment history',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger pool service and repair companies that also sell equipment and remodels',
        strengths: [
          'Volume scheduling for thousands of recurring appointments, with route optimization',
          'Equipment service histories and a multi-option estimate builder',
          'Automated payments for recurring plans; customers can check chemical readings in the portal',
          'QuickBooks Online and QuickBooks Desktop Premier and Enterprise',
        ],
        limitations: [
          'Its pool page does not describe a technician-side chemical dosage log or emailed service reports',
          'No published price',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; weekly recurring jobs, with route optimization on MAX',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small pool cleaning businesses that also do repairs and want a known price',
        strengths: [
          'Its help center uses weekly pool cleaning as the example for recurring jobs',
          'Customer equipment tracking and QuickBooks Online and Desktop on Essentials ($149/month for up to 5 users)',
        ],
        limitations: [
          'No help center article on logging chemical readings',
          'Route optimization and Recurring Service Plans are on MAX ($299/month)',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo pool tech, under 50 pools', pick: 'Skimmer Getting Started ($1 per pool, minimum $49/mo)', why: 'Route builder, service report emails with photos and online payments, priced by serviced location.' },
    { size: 'Growing route, 50 to 1,000 pools', pick: 'Skimmer Scaling Up ($2 per pool, minimum $98/mo)', why: 'Adds route optimization, the Orenda LSI and dosing calculator, quotes and recurring work orders.' },
    { size: 'Several techs, per-tech pricing', pick: 'Pool Brain ($65 per tech a month plus a base fee)', why: 'Unlimited office users, dosing calculated from readings, automatic service emails and autopay by card or ACH.' },
    { size: 'Small team, per-user pricing', pick: 'Pool Office Manager ($125/mo first user, $25 each extra)', why: 'One plan with dosing suggestions by gallons, service reports and quotes; QuickBooks Online is $25/mo extra.' },
    { size: 'Pool service plus repair, remodel and equipment sales', pick: 'ServiceTitan (custom quote)', why: 'Recurring volume scheduling, route optimization, equipment histories and multi-option estimates on one platform.' },
  ],

  extraSections: [
    {
      id: 'pool-pricing-chemistry',
      heading: 'Per pool, per tech or per user: comparing pool software prices',
      paragraphs: [
        'Pool software counts different things. Skimmer charges per serviced location each month, where several pools or spas at one address count once. Pool Brain charges per active field technician plus a base fee for unlimited office users. Pool Office Manager charges per user. A solo tech with 40 pools pays the $49 Skimmer minimum; at 120 pools on Scaling Up, Skimmer is $240 a month, so model your own route before you compare.',
        'Then test the water-chemistry workflow. Skimmer’s service emails can include chemical readings, dosages and checklist items, and its Scaling Up plan adds an Orenda-powered dosing calculator. Pool Brain calculates dosing when a tech enters readings, and Pool Office Manager computes dosing suggestions from each body of water’s gallons. ServiceTitan lets customers check chemical readings in its portal. Our [field service software pricing](/pricing) guide covers the general FSM plans.',
      ],
    },
  ],

  mistakes: [
    'Comparing a per-pool price with a per-tech price. Skimmer charges per serviced location, Pool Brain per technician, and Pool Office Manager per user.',
    'Skipping the chemistry workflow in the trial. Check that readings and dosages land on the service report the homeowner receives.',
    'Paying for QuickBooks you did not plan for. Pool Office Manager’s QuickBooks Online integration costs $25 a month extra.',
    'Choosing a trades tool without a pool workflow. Workiz, FieldPulse and Commusoft have no pool page.',
  ],

  faqs: [
    {
      question: 'What is the best software for a pool service business?',
      answer:
        'Pool-specific tools fit most route businesses: Skimmer (from $49 a month, priced per serviced location), Pool Brain ($65 per tech a month plus a base fee) and Pool Office Manager ($125 a month plus $25 per extra user). For pool service plus repairs and equipment sales, ServiceTitan has a pool and spa product priced by quote.',
    },
    {
      question: 'How much does pool service software cost?',
      answer:
        'Skimmer costs $1 per serviced location a month with a $49 minimum, or $2 with a $98 minimum on Scaling Up. Pool Brain is $65 per technician a month plus a base fee. Pool Office Manager is $125 a month for the first user and $25 for each extra user. Housecall Pro starts at $59 a month billed annually.',
    },
    {
      question: 'Which pool software tracks chemical readings and dosing?',
      answer:
        'Skimmer’s service emails can include chemical readings and dosages, and Scaling Up adds an Orenda dosing calculator. Pool Brain calculates dosing automatically when techs enter readings, and Pool Office Manager suggests doses from each pool’s gallons. ServiceTitan lets customers view chemical readings in its portal.',
    },
    {
      question: 'Does pool software have route optimization?',
      answer:
        'Yes. Skimmer includes route optimization on Scaling Up ($2 per location, minimum $98 a month), Pool Brain optimizes routes with one click, and Pool Office Manager optimizes schedules and routes. ServiceTitan lists route optimization on its pool page, and Housecall Pro includes it on MAX ($299 a month billed annually).',
    },
    {
      question: 'Can pool software send service reports with photos?',
      answer:
        'Yes. Skimmer sends email reports with photo evidence after every visit (5 photos per visit on Getting Started, 20 on Scaling Up). Pool Brain sends service emails with labeled pictures when a stop is completed, and Pool Office Manager offers customizable service reports by email or text.',
    },
    {
      question: 'Which pool software works with QuickBooks?',
      answer:
        'ServiceTitan supports QuickBooks Online and Desktop Premier and Enterprise. Skimmer syncs payments to QuickBooks Online, Pool Brain syncs customers, invoices and payments, and Pool Office Manager offers QuickBooks Online for $25 a month extra. Housecall Pro’s plan data lists QuickBooks Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-21',
  dataVerified: true,
  sources: [
    { name: 'Skimmer pricing (per serviced location)', url: 'https://www.getskimmer.com/pricing', checked: '2026-11-21' },
    { name: 'Skimmer features', url: 'https://www.getskimmer.com/features', checked: '2026-11-21' },
    { name: 'Pool Brain pricing', url: 'https://www.poolbrain.com/pricing', checked: '2026-11-21' },
    { name: 'Pool Brain features', url: 'https://www.poolbrain.com/features', checked: '2026-11-21' },
    { name: 'Pool Office Manager pricing', url: 'https://www.poolofficemanager.com/pricing', checked: '2026-11-21' },
    { name: 'ServiceTitan pool and spa service software', url: 'https://www.servicetitan.com/industries/pool-service-software', checked: '2026-11-21' },
    { name: 'Housecall Pro help: appointments vs segments vs recurring jobs (weekly pool example)', url: 'https://help.housecallpro.com/en/articles/12892543-appointments-vs-segments-vs-recurring-jobs', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Workiz industries (no pool service)', url: 'https://www.workiz.com/industries/', checked: '2026-11-21' },
    { name: 'Commusoft industries (no pool service)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
  ],
}
