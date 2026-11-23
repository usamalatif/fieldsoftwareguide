import type { Industry } from '@/lib/industries'

/**
 * Gutter: VERIFIED (researched 2026-11-23, batch 7 draft).
 * ServiceTitan /industries/gutter-software: self-service portal to book, track jobs and pay, crew
 * scheduling, real-time routing in the mobile app, photos in job records, Service Agreements, QuickBooks
 * and Sage Intacct; no measurement or linear-foot quoting, guards or downspouts named. Workiz
 * (/industries/gutter-cleaning-software/ 404, not in index), FieldPulse (404) and Commusoft (404) have
 * no gutter page. Jobber: gutter not in its homepage list; no gutter page found in search (a member
 * discount landing page was a promotion, not used). Housecall Pro: no gutter help articles; www not
 * fetched. Gutter tools: QuoteIQ gutter installation and cleaning pages: MapMeasure Pro satellite
 * measuring from Beginner, price by the foot per profile and color in the price book (every plan),
 * downspouts and fittings as lines, gutter guard add-on, recurring jobs on every plan, InstaSchedule and
 * route optimization on Elite and up, QuickBooks Online on Pro and up. Projul gutter page: linear-foot
 * pricing, guard and downspout templates, recurring maintenance jobs, routes by area, photos, QuickBooks
 * Online and Desktop; pricing Starter $199 (up to 3 users), Core $399 (10), Core+ $599 (20), Pro $1,199
 * (unlimited) a month billed annually; QuickBooks Online from Core+, Desktop on Pro (its gutter page's
 * "no per-user fees" line conflicts with the pricing page caps, so not used). Builder Prime: EagleView
 * and Paradigm Vendo measurement integrations, downspouts and leaf guards as price book lines; $300 a
 * month platform fee plus $60 per core user and $10 per field user a month.
 */
export const gutter: Industry = {
  slug: 'gutter',
  name: 'Gutter',
  icon: '🏠',
  category: 'Trades',
  metaDescription:
    'Compare gutter contractor software for satellite measuring, linear foot quotes, guards and downspouts, recurring cleaning, routes and QuickBooks. Verified.',
  datePublished: '2026-11-23',

  answer:
    'Gutter companies price by the linear foot, so measuring, a price book with guards and downspouts, and recurring cleaning routes matter most. ServiceTitan is the only big field service tool we checked with a gutter page: self-service booking, crew scheduling, real-time routing, service agreements and QuickBooks (quote only), but it does not mention measurement. QuoteIQ measures gutters by satellite from its $99.99 Beginner plan and prices each profile by the foot on every plan. Projul prices seamless gutters by the linear foot with guard and downspout templates, from $199 a month billed annually for up to 3 users. Builder Prime connects to EagleView for measurements and costs $300 a month plus $60 per office user.',

  intro:
    'A gutter business runs two kinds of work: installs priced by the linear foot with corners, downspouts and guards, and cleaning visits that repeat every season. The software has to measure the eave runs, build a quote with options, schedule install crews and route cleaning crews, and bring cleaning customers back each year. Photos of clogged or damaged gutters help sell repairs and guards. Check whether a tool counts users or charges a platform fee, because install-heavy companies often have more office staff than field crews.',

  keyFeatures: [
    'Satellite or on-site measurement of eave runs',
    'Price book by linear foot, profile and color',
    'Guard, downspout and fitting options on quotes',
    'Recurring gutter cleaning jobs',
    'Crew scheduling, routes and job photos',
    'Online booking and QuickBooks sync',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Generalist FSM: Jobber from $29/mo (Core, 1 user) and Housecall Pro from $59/mo (Basic, 1 user), billed annually, neither with a gutter page. Gutter tools: QuoteIQ $29.99 to $699.99 a month billed monthly (1 to 20 users); Projul $199, $399, $599 or $1,199 a month billed annually for up to 3, 10, 20 or unlimited users; Builder Prime $300 a month plus $60 per core user and $10 per field user. ServiceTitan, which has a gutter page, is quote only.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 9,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Only big FSM tool we checked with a gutter page',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger gutter companies with install crews, cleaning crews and an office',
        strengths: [
          'Self-service portal where customers book appointments, track jobs and pay bills',
          'Crew scheduling and real-time routing in the mobile app; photos in job records',
          'Service agreements; connects with QuickBooks and Sage Intacct',
        ],
        limitations: [
          'No published price; packages are behind one “Get Pricing” button',
          'Its gutter page does not mention measurement, linear-foot pricing, guards or downspouts',
        ],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Lowest published generalist price; no gutter page',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Small gutter cleaning businesses that want quotes, booking and invoicing',
        strengths: [
          'Published plans from $29/month billed annually; quotes and online booking on every plan',
          'Route optimization, automatic payments and QuickBooks Online from Connect',
        ],
        limitations: [
          'Gutter is not in its industry list, and we found no gutter page',
          'No measurement or linear-foot quoting confirmed',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; flat-rate pricing and recurring plans',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small gutter cleaning crews that want online booking at a known price',
        strengths: [
          'Online booking from Basic; flat-rate pricing and QuickBooks Online and Desktop on Essentials',
          'Recurring Service Plans and route optimization on MAX',
        ],
        limitations: [
          'No gutter page or gutter help articles found',
          'No measurement or linear-foot quoting confirmed',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo gutter cleaner', pick: 'QuoteIQ Essentials ($29.99/mo, 1 user)', why: 'Price book by the foot and recurring jobs on every plan. Satellite measuring starts on Beginner.' },
    { size: 'Owner who quotes installs remotely', pick: 'QuoteIQ Beginner ($99.99/mo, 2 users)', why: 'MapMeasure Pro measures eave runs by satellite, with downspouts, fittings and a guard add-on as quote lines.' },
    { size: 'Install company with a small office', pick: 'Projul Starter ($199/mo billed annually, up to 3 users)', why: 'Linear-foot pricing, guard and downspout templates, recurring maintenance jobs and routes. QuickBooks Online needs Core+.' },
    { size: 'Exterior contractor using EagleView', pick: 'Builder Prime ($300/mo plus $60 per core user)', why: 'Connects to EagleView and Paradigm Vendo for measurements, with downspouts and leaf guards as price book lines.' },
    { size: 'Large gutter company with crews and agreements', pick: 'ServiceTitan (custom quote)', why: 'Gutter page with self-service booking, crew scheduling, routing and service agreements.' },
  ],

  extraSections: [
    {
      id: 'gutter-measure-price',
      heading: 'Measuring, linear-foot pricing and cleaning routes: what to test',
      paragraphs: [
        'Measure a real house. QuoteIQ’s MapMeasure Pro measures eave runs on a satellite map, and its price book holds a rate per foot for each profile and color. Builder Prime takes measurements from EagleView or Paradigm Vendo, and Projul prices seamless work by the linear foot after an on-site measure. ServiceTitan’s gutter page does not mention measuring, so ask how you would enter footage.',
        'Then check the cleaning side. QuoteIQ and Projul include recurring jobs, and ServiceTitan lists service agreements. Route cleaning stops by area: QuoteIQ adds route optimization on Elite, and Projul groups jobs by area. Count users too: Projul caps users by plan and Builder Prime charges per core user on top of a $300 platform fee. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Driving out to measure every quote. Satellite or EagleView measurements save trips on simple homes.',
    'Pricing guards and downspouts by hand. Put them in the price book as options on every quote.',
    'Letting cleaning customers lapse. Set up recurring cleaning jobs each season.',
    'Ignoring platform fees. Builder Prime charges $300 a month before any user fees.',
  ],

  faqs: [
    {
      question: 'What is the best software for a gutter business?',
      answer:
        'ServiceTitan is the only big field service tool we checked with a gutter page (quote only). For measuring and linear-foot quotes, QuoteIQ starts at $29.99 a month, Projul at $199 a month billed annually, and Builder Prime at $300 a month plus users.',
    },
    {
      question: 'How much does gutter software cost?',
      answer:
        'QuoteIQ costs $29.99 to $699.99 a month billed monthly. Projul costs $199 to $1,199 a month billed annually. Builder Prime is $300 a month plus $60 per core user and $10 per field user. Jobber starts at $29 a month billed annually.',
    },
    {
      question: 'Which gutter software measures by satellite?',
      answer:
        'QuoteIQ’s MapMeasure Pro measures eave runs on a satellite map from the Beginner plan ($99.99 a month). Builder Prime connects to EagleView and Paradigm Vendo for measurements. None of the six generalist tools we cover names satellite measuring.',
    },
    {
      question: 'Can gutter software quote guards and downspouts?',
      answer:
        'Yes. QuoteIQ lists downspouts and fittings as their own lines with an optional gutter guard add-on, Projul builds guard options into estimate templates, and Builder Prime prices downspouts and leaf guards as line items.',
    },
    {
      question: 'Which gutter software handles recurring cleaning?',
      answer:
        'QuoteIQ includes recurring jobs on every plan, Projul sets up recurring maintenance jobs, and ServiceTitan lists service agreements. Housecall Pro puts Recurring Service Plans on MAX.',
    },
    {
      question: 'Which gutter software works with QuickBooks?',
      answer:
        'Projul integrates with QuickBooks Online from Core+ and Desktop on Pro. QuoteIQ includes QuickBooks Online on Pro and up, and ServiceTitan connects with QuickBooks and Sage Intacct. Builder Prime lists QuickBooks sync.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan gutter business software', url: 'https://www.servicetitan.com/industries/gutter-software', checked: '2026-11-23' },
    { name: 'Workiz industries (no gutter)', url: 'https://www.workiz.com/industries/', checked: '2026-11-23' },
    { name: 'Jobber pricing (plans, online booking, QuickBooks)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Commusoft industries (no gutter)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'QuoteIQ gutter installation software', url: 'https://myquoteiq.com/industries/gutter-installation-software/', checked: '2026-11-23' },
    { name: 'QuoteIQ gutter cleaning software', url: 'https://myquoteiq.com/industries/gutter-cleaning-software/', checked: '2026-11-23' },
    { name: 'QuoteIQ pricing', url: 'https://myquoteiq.com/pricing/', checked: '2026-11-23' },
    { name: 'Projul gutter contractor software', url: 'https://projul.com/industries/gutter-contractor/', checked: '2026-11-23' },
    { name: 'Projul pricing', url: 'https://projul.com/pricing/', checked: '2026-11-23' },
    { name: 'Builder Prime gutter estimate software', url: 'https://www.builderprime.com/estimating-software/gutters', checked: '2026-11-23' },
    { name: 'Builder Prime pricing', url: 'https://www.builderprime.com/pricing', checked: '2026-11-23' },
  ],
}
