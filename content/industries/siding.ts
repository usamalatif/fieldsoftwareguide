import type { Industry } from '@/lib/industries'

/**
 * Siding: VERIFIED (researched 2026-11-23, batch 8 draft). Roofing has its own page.
 * ServiceTitan /industries/siding-software: estimates with good-better-best options, pricebook with
 * siding rates, real-time inventory, crew schedules and project tracking, on-the-spot financing,
 * QuickBooks Online and Desktop Premier and Enterprise. Its exteriors partnerships page lists EagleView
 * (roofing, siding and window measurements), Hover, GAF QuickMeasure, ABC Supply, SRS, QXO, CompanyCam
 * and financing partners (GreenSky, GoodLeap, Service Finance, Synchrony, Wells Fargo). Workiz, FieldPulse
 * (404s) and Commusoft have no siding page; Jobber and Housecall Pro not checked. Siding tools: Builder
 * Prime siding page: Hover and EagleView, multi-day exterior jobs, materials per project (not full
 * warehouse inventory), GreenSky, CompanyCam, QuickBooks; $300 a month platform plus $60 per core user
 * and $10 per field user. Leap siding page: good-better-best pricing, materials ordering, ABC Supply, SRS,
 * EagleView, QuickBooks, financing; Essential $79 (1 user), Team $298 (+$99 per user), Premium $750 (6
 * users, measurement integrations and in-app financing) a month on one-year contracts. Hover: Pro $999
 * and Business $2,999 a year, Starter pay per project; supplier ordering with ABC, SRS or QXO from Pro.
 * Hover per-scan prices were truncated in the fetch, so not used. AccuLynx: no published prices. No
 * vendor page uses "squares" or names change orders.
 */
export const siding: Industry = {
  slug: 'siding',
  name: 'Siding',
  icon: '🧱',
  category: 'Trades',
  metaDescription:
    'Compare siding contractor software for EagleView and Hover measurements, estimates, supplier ordering, crews, financing and QuickBooks. Verified prices.',
  datePublished: '2026-11-23',

  answer:
    'Siding contractors sell from measurements, so aerial or 3D measurements, estimates with options, supplier ordering and financing matter most. ServiceTitan is the only big field service tool we checked with a siding page: good-better-best estimates, a siding pricebook, crew scheduling, on-the-spot financing and QuickBooks Online and Desktop, with EagleView, Hover, ABC Supply and SRS integrations listed for exteriors (quote only). Exterior sales tools publish prices. Leap costs $79 a month for one user, $298 for a team and $750 for six users with measurement integrations. Builder Prime costs $300 a month plus $60 per office user and handles multi-day exterior jobs. Hover measurement plans are $999 or $2,999 a year.',

  intro:
    'A siding job starts with measurements of every wall, opening and trim run, then turns into an estimate, a material order and a crew schedule that can run several days. Many siding contractors also sell windows, gutters and roofing, and most offer financing to close larger jobs. The software has to pull measurements from EagleView or Hover, price options, order from the supplier and keep the office, sales reps and crews on the same project. Check whether measurement reports and supplier connections cost extra.',

  keyFeatures: [
    'Aerial or 3D measurements from EagleView or Hover',
    'Estimates with good, better, best options',
    'Supplier ordering from ABC Supply, SRS or QXO',
    'Crew scheduling for multi-day projects',
    'Financing offered during the sale',
    'Job photos and QuickBooks sync',
  ],

  priceRange: {
    min: 79,
    max: null,
    note: 'Exterior sales and project tools: Leap $79 a month (1 user), $298 (plus $99 per extra user) or $750 (6 users) on one-year contracts; Builder Prime $300 a month platform fee plus $60 per core user and $10 per field user; Hover measurement plans $999 or $2,999 a year, or pay per project. Generalist FSM: Jobber from $29/mo and Housecall Pro from $59/mo, billed annually, with no confirmed siding page. ServiceTitan, which has a siding page, is quote only.',
    source: { name: 'Leap pricing', url: 'https://leaptodigital.com/pricing/', checked: '2026-11-23' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 9,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Only big FSM tool we checked with a siding page',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger exterior contractors with sales reps, crews and an office',
        strengths: [
          'Good-better-best estimates and a pricebook with siding rates',
          'EagleView, Hover and GAF QuickMeasure measurements; ABC Supply, SRS and QXO listed for exteriors',
          'On-the-spot financing, inventory, crew scheduling and QuickBooks Online and Desktop',
        ],
        limitations: [
          'No published price; we could not confirm which package includes the exterior integrations',
          'Its siding page does not mention change orders',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; general tool with no siding page',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small siding repair businesses that want a known monthly price',
        strengths: [
          'Online booking from Basic; QuickBooks Online and Desktop on Essentials',
        ],
        limitations: [
          'We could not check a Housecall Pro siding page',
          'No measurement or supplier integrations confirmed',
        ],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Lowest published generalist price; no siding page',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Small repair-focused contractors that need quotes and invoices',
        strengths: [
          'Published plans from $29/month billed annually; quotes on every plan',
          'QuickBooks Online from Connect',
        ],
        limitations: [
          'Siding is not in its homepage industry list',
          'No measurement or supplier integrations confirmed',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Owner who sells in the home', pick: 'Leap Essential ($79/mo, 1 user)', why: 'Siding estimating with good, better, best pricing. One-year contract paid monthly.' },
    { size: 'Sales team with financing and measurements', pick: 'Leap Premium ($750/mo, 6 users)', why: 'Adds measurement integrations, in-app financing and advanced estimating.' },
    { size: 'Contractor that wants one CRM for sales and production', pick: 'Builder Prime ($300/mo plus $60 per core user)', why: 'Siding page with Hover and EagleView, multi-day exterior jobs, GreenSky financing and QuickBooks. Field users cost $10 each.' },
    { size: 'Contractor that measures many homes', pick: 'Hover Pro ($999/yr)', why: 'Discounted per-project scans, estimates with material lists and supplier ordering with ABC, SRS or QXO.' },
    { size: 'Large exterior company with service and install crews', pick: 'ServiceTitan (custom quote)', why: 'Siding page with a pricebook, financing, crew scheduling and EagleView, Hover and supplier integrations.' },
  ],

  extraSections: [
    {
      id: 'siding-measure-order',
      heading: 'Measurements, supplier orders and financing: what to test',
      paragraphs: [
        'Start with a real house. EagleView delivers roofing, siding and window measurements remotely, and Hover builds 3D measurements from phone photos. ServiceTitan imports both, Builder Prime names both, and Leap lists EagleView. Check that measurements flow into the estimate without retyping, and ask whether the measurement report is billed separately: Hover charges per project, with lower rates on its paid plans.',
        'Then follow the job to the supplier and the crew. ServiceTitan lists ABC Supply, SRS and QXO for exteriors, Leap lists ABC Supply and SRS, and Hover offers direct ordering from Pro. Builder Prime tracks materials per project but says it is not a full warehouse inventory system. None of the siding pages we checked mentions change orders, so test how each tool handles an added wall mid-job. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Measuring every home by hand. EagleView and Hover reports save trips and reduce errors.',
    'Retyping measurements into estimates. Choose a tool that imports them.',
    'Ordering materials by phone. Supplier integrations cut wrong orders and missed deliveries.',
    'Forgetting change orders. None of the siding pages we checked mentions them, so test it in the demo.',
  ],

  faqs: [
    {
      question: 'What is the best software for a siding contractor?',
      answer:
        'ServiceTitan is the only big field service tool we checked with a siding page (quote only). Exterior sales tools publish prices: Leap from $79 a month and Builder Prime from $300 a month plus users. Hover handles measurements from $999 a year.',
    },
    {
      question: 'How much does siding contractor software cost?',
      answer:
        'Leap costs $79, $298 or $750 a month on one-year contracts. Builder Prime is $300 a month plus $60 per core user and $10 per field user. Hover plans are $999 or $2,999 a year, or pay per project. ServiceTitan is quote only.',
    },
    {
      question: 'Which siding software works with EagleView or Hover?',
      answer:
        'ServiceTitan lists EagleView, Hover and GAF QuickMeasure for exteriors, Builder Prime names Hover and EagleView on its siding page, and Leap lists EagleView, with measurement integrations on its Premium plan.',
    },
    {
      question: 'Can siding software order materials from suppliers?',
      answer:
        'Yes. ServiceTitan lists ABC Supply, SRS and QXO for exteriors, Leap lists ABC Supply and SRS, and Hover offers direct ordering with ABC, SRS or QXO from its Pro plan.',
    },
    {
      question: 'Which siding software offers customer financing?',
      answer:
        'ServiceTitan offers on-the-spot financing with partners including GreenSky and GoodLeap, Builder Prime names GreenSky, and Leap offers in-app financing on Premium.',
    },
    {
      question: 'Which siding software works with QuickBooks?',
      answer:
        'ServiceTitan integrates with QuickBooks Online and Desktop Premier and Enterprise. Builder Prime and Leap list QuickBooks integrations, Jobber offers QuickBooks Online from Connect, and Housecall Pro lists Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan siding business software', url: 'https://www.servicetitan.com/industries/siding-software', checked: '2026-11-23' },
    { name: 'ServiceTitan exteriors partnerships', url: 'https://www.servicetitan.com/industries/roofing-software/partnerships', checked: '2026-11-23' },
    { name: 'Workiz industries (no siding)', url: 'https://www.workiz.com/industries/', checked: '2026-11-23' },
    { name: 'Commusoft industries (no siding)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Jobber pricing (plans)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Builder Prime siding contractor software', url: 'https://www.builderprime.com/industries/siding', checked: '2026-11-23' },
    { name: 'Builder Prime pricing', url: 'https://www.builderprime.com/pricing', checked: '2026-11-23' },
    { name: 'Leap siding estimating software', url: 'https://leaptodigital.com/solutions/siding-estimating-software/', checked: '2026-11-23' },
    { name: 'Leap pricing', url: 'https://leaptodigital.com/pricing/', checked: '2026-11-23' },
    { name: 'Hover pricing', url: 'https://hover.to/pricing', checked: '2026-11-23' },
  ],
}
