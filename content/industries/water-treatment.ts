import type { Industry } from '@/lib/industries'

/**
 * Water treatment: VERIFIED (researched 2026-11-23, batch 8 draft).
 * ServiceTitan /industries/water-treatment-software and /watersoftware: on-the-spot financing from the
 * tech's tablet, route-visualization map, QuickBooks Online and Desktop. ServiceTitan help center:
 * installed equipment with model, serial number and install date driving scheduled maintenance; Kinetico
 * Dealer Playbook covers recurring water treatment services via memberships, route optimization for salt
 * deliveries and equipment rental memberships with automatic rental billing. Housecall Pro help center:
 * property profile items with make, model, serial number and install date (customer equipment tracking on
 * Essentials); its industry page not confirmed. Workiz (index), FieldPulse (404) and Commusoft (404) have
 * no water treatment page; Jobber well water page seen in search only. Water tools: WorkBoss water page
 * logs model, serial, install date and warranty, test results (hardness), filter swaps and salt refills;
 * pricing WorkBoss $79, DispatchBoss $129 (1 to 5 users), RetailBoss $269 (1 to 10 users) a month, $12 per
 * extra user, 15% off annually, QuickBooks Online on every plan. Watertight: rentals, leases and service
 * contracts with recurring billing and autopay, routes, financing; no prices. SableCRM: thin water page,
 * $49 to $299 a month by user cap. QuoteIQ blog and Service Fusion water page noted but not used.
 */
export const waterTreatment: Industry = {
  slug: 'water-treatment',
  name: 'Water Treatment',
  icon: '🚰',
  category: 'Specialized',
  metaDescription:
    'Compare water treatment dealer software for equipment records, salt delivery routes, filter changes, rental billing, water tests and QuickBooks. Verified.',
  datePublished: '2026-11-23',

  answer:
    'Water treatment dealers earn on repeat work, so equipment records, salt and filter routes and rental billing matter most. ServiceTitan is the only big field service tool we checked with a water treatment page: on-the-spot financing, installed equipment with serial numbers and install dates, recurring services, salt delivery routes, automatic rental billing and QuickBooks Online and Desktop (quote only). WorkBoss has a water treatment page with equipment records, water test results, filter swaps and salt refills, from $79 a month for up to 5 users. Watertight is built for water dealers with rentals, leases and recurring billing (quote only). Housecall Pro tracks equipment serials and install dates from $149 a month billed annually.',

  intro:
    'A water treatment dealer sells softeners, filters, reverse osmosis and well systems, then services them for years with salt deliveries, filter changes and repairs. Many systems are rented or leased, so the dealer bills every month. The software has to keep a record of each customer’s equipment, schedule recurring deliveries on efficient routes, bill rentals automatically and record water test results that justify the sale. Financing at the kitchen table helps close larger systems.',

  keyFeatures: [
    'Equipment records with model, serial and install date',
    'Recurring salt deliveries and filter changes',
    'Route optimization for delivery days',
    'Rental and lease billing on autopay',
    'Water test results on the customer record',
    'Financing in proposals and QuickBooks sync',
  ],

  priceRange: {
    min: 59,
    max: null,
    note: 'Water-specific: WorkBoss $79, $129 or $269 a month (up to 5, 5 or 10 users, $12 per extra user, 15% off annually); Watertight quote only. Generalist FSM: Housecall Pro from $59/mo (Basic, 1 user), with equipment tracking on Essentials ($149/mo), and Jobber from $29/mo, billed annually. ServiceTitan, which has a water treatment page, is quote only.',
    source: { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 9,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Water treatment page with rental billing, salt routes and financing',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Established dealers with rentals, salt routes and sales reps',
        strengths: [
          'Installed equipment with serial number and install date that drives scheduled maintenance',
          'Recurring water treatment services, route optimization for salt deliveries and automatic rental billing',
          'On-the-spot financing and QuickBooks Online and Desktop',
        ],
        limitations: [
          'No published price; packages are behind one “Get Pricing” button',
          'Water test results are not described on its pages',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; equipment serials and install dates',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small dealers that want equipment records at a known price',
        strengths: [
          'Property profiles with make, model, serial number and install date; customer equipment tracking on Essentials',
          'Recurring Service Plans and route optimization on MAX; QuickBooks Online and Desktop',
        ],
        limitations: [
          'We could not confirm a water treatment page',
          'No rental billing or water test records confirmed',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Equipment tracking and service plans on Ultimate; no water page',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Plumbing companies that also sell water treatment',
        strengths: [
          'Equipment tracking, service plans and sales proposals on Ultimate',
          'Recurring jobs and QuickBooks Online sync on every plan',
        ],
        limitations: [
          'No water treatment page; every plan is “Request pricing”',
          'No rental billing or salt routes confirmed',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Small dealer starting out', pick: 'WorkBoss ($79/mo, up to 5 users)', why: 'Water treatment page with equipment records, water test results, filter swaps and salt refills; QuickBooks Online on every plan.' },
    { size: 'Dealer that needs dispatch', pick: 'WorkBoss DispatchBoss ($129/mo, up to 5 users)', why: 'Adds job scheduling and dispatch. Extra users cost $12 a month.' },
    { size: 'Dealer with many rentals and leases', pick: 'Watertight (custom quote)', why: 'Built for water treatment, with recurring billing for rentals, leases and service contracts, autopay and routes.' },
    { size: 'Plumbing company adding softeners', pick: 'Housecall Pro Essentials ($149/mo billed annually)', why: 'Equipment records with serials and install dates, plus QuickBooks Online and Desktop.' },
    { size: 'Large dealer with salt routes and sales reps', pick: 'ServiceTitan (custom quote)', why: 'Salt delivery route optimization, automatic rental billing, equipment records and on-the-spot financing.' },
  ],

  extraSections: [
    {
      id: 'water-rentals-routes',
      heading: 'Rentals, salt routes and equipment records: what to test',
      paragraphs: [
        'Start with recurring revenue. ServiceTitan’s dealer playbook covers equipment rental memberships with automatic rental billing, and Watertight bills rentals, leases and service contracts on autopay. Then set up a salt route: ServiceTitan optimizes routes for salt deliveries, and WorkBoss schedules recurring services, routes and delivery schedules. Check that a missed delivery moves cleanly to the next route day.',
        'Then check the equipment and test record. ServiceTitan and Housecall Pro store model, serial number and install date, and ServiceTitan uses the install date to flag replacement eligibility. WorkBoss also keeps water test results, such as hardness, on the customer profile, which helps when you sell an upgrade. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Billing rentals by hand. Use automatic rental billing or autopay so monthly revenue arrives on time.',
    'Running salt deliveries without routes. Optimized routes cut fuel and missed stops.',
    'Losing equipment details. Record model, serial and install date so you know when to replace.',
    'Not recording water tests. Test results on the customer record back up the next sale.',
  ],

  faqs: [
    {
      question: 'What is the best software for a water treatment dealer?',
      answer:
        'ServiceTitan has a water treatment page with rental billing, salt routes and financing (quote only). WorkBoss has a water page with equipment and test records from $79 a month, and Watertight is built for water dealers with rentals and leases (quote only).',
    },
    {
      question: 'How much does water treatment software cost?',
      answer:
        'WorkBoss costs $79, $129 or $269 a month, plus $12 per extra user, with 15% off annually. Housecall Pro starts at $59 a month billed annually, with equipment tracking on Essentials ($149). ServiceTitan and Watertight do not publish prices.',
    },
    {
      question: 'Which water treatment software bills rentals and leases?',
      answer:
        'Watertight handles recurring billing for rentals, leases and service contracts with autopay. ServiceTitan’s dealer playbook covers equipment rental memberships with automatic rental billing.',
    },
    {
      question: 'Can water treatment software route salt deliveries?',
      answer:
        'Yes. ServiceTitan’s dealer playbook covers route optimization for salt deliveries, and WorkBoss schedules recurring salt refills, routes and delivery schedules.',
    },
    {
      question: 'Which software stores water test results?',
      answer:
        'WorkBoss keeps test results, such as a hardness reading, on the customer profile. We could not confirm water test records on ServiceTitan, Housecall Pro or Watertight pages.',
    },
    {
      question: 'Which water treatment software works with QuickBooks?',
      answer:
        'ServiceTitan integrates with QuickBooks Online and Desktop, and WorkBoss includes QuickBooks Online on every plan. Housecall Pro lists Online and Desktop on Essentials. Watertight says it keeps external accounting systems synchronized.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan water treatment software', url: 'https://www.servicetitan.com/industries/water-treatment-software', checked: '2026-11-23' },
    { name: 'ServiceTitan water software', url: 'https://www.servicetitan.com/watersoftware', checked: '2026-11-23' },
    { name: 'ServiceTitan help: installed equipment', url: 'https://help.servicetitan.com/docs/track-manage-installed-equipment', checked: '2026-11-23' },
    { name: 'ServiceTitan help: Kinetico dealer playbook', url: 'https://help.servicetitan.com/commercial/docs/kinetico-dealer-playbook', checked: '2026-11-23' },
    { name: 'Housecall Pro help: property profile', url: 'https://help.housecallpro.com/en/articles/3703307-property-profile', checked: '2026-11-23' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Workiz industries (no water treatment)', url: 'https://www.workiz.com/industries/', checked: '2026-11-23' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'WorkBoss water treatment software', url: 'https://www.workboss.com/water-treatment/', checked: '2026-11-23' },
    { name: 'WorkBoss pricing', url: 'https://www.workboss.com/pricing', checked: '2026-11-23' },
    { name: 'Watertight', url: 'https://www.watertight.com/', checked: '2026-11-23' },
    { name: 'Watertight features', url: 'https://www.watertight.com/features', checked: '2026-11-23' },
  ],
}
