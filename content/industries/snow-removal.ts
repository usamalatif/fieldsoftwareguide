import type { Industry } from '@/lib/industries'

/**
 * Snow removal: VERIFIED (researched 2026-11-23, batch 8 draft).
 * Workiz /industries/snow-removal/: route planning and GPS tracking, On my way texts, service plans for
 * slow months, QuickBooks sync; no per-push billing, storm dispatch, salt logging or photo proof named.
 * ServiceTitan and FieldPulse snow URLs 404; Commusoft has none. Jobber and Housecall Pro snow pages seen
 * in search only (not fetched), so no snow feature is claimed for them. Snow tools: Yeti Software one plan
 * from $66.50 a month billed annually ($798 a year for 1 to 25 sites), unlimited users; live dispatch,
 * optimized multi-crew routes, GPS with required photos and geofencing, GPS, photos and timestamps for
 * claims or disputes, slip-and-fall inspection forms, consumables quantity logging with a Bulk Salt
 * category, batch invoicing, QuickBooks Online; weather reporting add-on. Aspire snow page: real-time
 * scheduling and dispatch during snow events, GPS crew tracking, log materials used, photo and video
 * issue reports, QuickBooks and QuickBooks Online; tiers by revenue, no prices. GorillaDesk snow page:
 * route optimization, GPS, autopay, QuickBooks Online on Pro; $49, $99, $149 a month per route.
 * Plowdesk domain did not resolve (third-party prices not used). No vendor page names per-push or
 * per-event billing or weather-triggered automatic dispatch.
 */
export const snowRemoval: Industry = {
  slug: 'snow-removal',
  name: 'Snow Removal',
  icon: '❄️',
  category: 'Field Services',
  metaDescription:
    'Compare snow removal software for storm dispatch, plow routes, GPS and photo proof of service, salt logging, site billing and QuickBooks. Verified prices.',
  datePublished: '2026-11-23',

  answer:
    'Snow contractors work in bursts at 3 a.m., so storm dispatch, plow routes and proof of service matter most. Workiz has a snow removal page with route planning, GPS tracking and QuickBooks sync (quote only). Snow-specific tools go further. Yeti Software costs from $66.50 a month billed annually for up to 25 sites, with unlimited users, and records GPS, photos and timestamps on every visit for slip-and-fall claims, plus salt and other materials used. Aspire has a snow page with real-time dispatch, GPS crew tracking and material logging (quote only). GorillaDesk has a snow page from $49 a month per route. No tool we checked names per-push billing or weather-triggered dispatch.',

  intro:
    'A snow removal business sits idle until a storm, then has to plow and salt every site on the list before people arrive. The software has to dispatch crews and subcontractors fast, give each driver a route, track plows by GPS and capture photos and timestamps that prove the lot was cleared and salted. That proof is your defense in a slip-and-fall claim. Billing can be per push, per event or a seasonal contract, so check how each tool turns site visits into invoices.',

  keyFeatures: [
    'Storm dispatch for crews and subcontractors',
    'Optimized plow routes for every storm',
    'GPS tracking of crews and plows',
    'Photo and timestamp proof of service',
    'Salt and material usage logging',
    'Site-based invoicing and QuickBooks sync',
  ],

  priceRange: {
    min: 49,
    max: null,
    note: 'Snow tools: Yeti Software from $66.50 a month billed annually ($798 a year for 1 to 25 sites) with unlimited users; GorillaDesk $49, $99 or $149 a month per route; Aspire quote only. Generalist FSM: Jobber from $29/mo and Housecall Pro from $59/mo, billed annually. Workiz, which has a snow removal page, is quote only.',
    source: { name: 'GorillaDesk snow removal software', url: 'https://gorilladesk.com/industries/snow-removal-software/', checked: '2026-11-23' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 9,

  providers: [
    {
      slug: 'workiz',
      positioning: 'Snow removal page with route planning, GPS and QuickBooks',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Residential snow crews that also run other seasonal services',
        strengths: [
          'Route planning and GPS tracking, with On my way texts showing real-time location',
          'Service plans for predictable work in slow months',
          'QuickBooks sync of invoices, customers and payments',
        ],
        limitations: [
          'Every plan is “Request pricing”',
          'Its snow page names no per-push billing, storm dispatch, salt logging or photo proof',
        ],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Lowest published generalist price',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Lawn and landscape companies that add residential snow work',
        strengths: [
          'Published plans from $29/month billed annually; quotes and online booking on every plan',
          'Route optimization, automatic payments and QuickBooks Online from Connect',
        ],
        limitations: [
          'Its snow removal page blocked our checks, so we list no snow-specific Jobber feature',
          'No salt logging or slip-and-fall proof confirmed',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; GPS and recurring plans',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small residential snow businesses that want a known monthly price',
        strengths: [
          'Employee GPS and QuickBooks Online and Desktop on Essentials',
          'Recurring Service Plans and route optimization on MAX',
        ],
        limitations: [
          'We could not check its snow removal page, so no snow feature is listed',
          'No salt logging or photo proof of service confirmed',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Owner with one truck and residential driveways', pick: 'GorillaDesk Basic ($49/mo, 1 route)', why: 'Snow page with route optimization, GPS and autopay. QuickBooks Online sync needs Pro ($99).' },
    { size: 'Commercial lots with slip-and-fall risk', pick: 'Yeti Software (from $66.50/mo billed annually, 1 to 25 sites)', why: 'GPS, photos and timestamps on every visit, slip-and-fall inspection forms and salt usage logging, with unlimited users.' },
    { size: 'Contractor using subcontractors', pick: 'Yeti Software', why: 'Tracks crews and subs by GPS with required photos and geofencing, and tracks subcontractor payables.' },
    { size: 'Landscape company that also plows', pick: 'Aspire (custom quote)', why: 'Snow page with real-time dispatch during snow events, GPS crew tracking, material logging and QuickBooks.' },
    { size: 'Residential crew on a general tool', pick: 'Workiz (custom quote) or Jobber Connect ($99/mo)', why: 'Workiz pitches route planning and GPS for snow; Jobber adds route optimization on Connect.' },
  ],

  extraSections: [
    {
      id: 'snow-proof-billing',
      heading: 'Proof of service, salt and billing: what to test',
      paragraphs: [
        'Start with a slip-and-fall scenario. Yeti records GPS, photos and timestamps on every visit and offers inspection forms built for claims, and crews log consumables such as bulk salt. Aspire lets field teams log materials used and upload photos. Workiz, Jobber and Housecall Pro schedule and track jobs, but none of their pages we could check names photo proof or salt logging, so test how you would show a lot was cleared at 5 a.m.',
        'Then check billing. No tool we checked names per-push or per-event billing on its pages; Yeti batches invoices across sites and pushes service data to QuickBooks Online, and GorillaDesk offers autopay for seasonal customers. Ask each vendor to bill a real storm with three pushes and two salt applications. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Clearing lots without proof. Photos, GPS and timestamps are your defense in a slip-and-fall claim.',
    'Building routes during the storm. Set up routes before the season and reuse them every event.',
    'Not logging salt. Material use drives cost and billing on commercial sites.',
    'Assuming per-push billing is built in. Ask each vendor to bill a real storm in the demo.',
  ],

  faqs: [
    {
      question: 'What is the best software for a snow removal business?',
      answer:
        'For commercial snow, Yeti Software is built for it, from $66.50 a month billed annually for up to 25 sites. Aspire has a snow page (quote only). Workiz has a snow removal page with routes and GPS, and GorillaDesk starts at $49 a month per route.',
    },
    {
      question: 'How much does snow removal software cost?',
      answer:
        'Yeti Software starts at $66.50 a month billed annually ($798 a year for 1 to 25 sites). GorillaDesk is $49, $99 or $149 a month per route. Jobber starts at $29 and Housecall Pro at $59 a month, billed annually. Workiz and Aspire are quote only.',
    },
    {
      question: 'Which snow software provides proof of service for slip-and-fall claims?',
      answer:
        'Yeti Software records GPS, photos and timestamps on every visit and offers customizable inspection forms for slip-and-fall claims. Companies can require weather and photo entries from crew leaders.',
    },
    {
      question: 'Can snow removal software track salt usage?',
      answer:
        'Yeti lets crews register the quantity of consumables used, with a Bulk Salt category, and Aspire lets field teams log materials used. None of the general field service pages we checked names salt logging.',
    },
    {
      question: 'Does snow removal software bill per push or per event?',
      answer:
        'None of the vendor pages we checked names per-push or per-event billing. Yeti batches invoices across sites and sends service data to QuickBooks Online, so ask each vendor to bill a real storm in the demo.',
    },
    {
      question: 'Which snow removal software works with QuickBooks?',
      answer:
        'Yeti integrates with QuickBooks Online, Aspire lists QuickBooks and QuickBooks Online, and Workiz says it fully integrates with QuickBooks. GorillaDesk includes QuickBooks Online on Pro, and Jobber from Connect.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'Workiz snow removal software', url: 'https://www.workiz.com/industries/snow-removal/', checked: '2026-11-23' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Jobber pricing (plans, routes, QuickBooks)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'ServiceTitan industries (no snow removal)', url: 'https://www.servicetitan.com/industries', checked: '2026-11-21' },
    { name: 'Commusoft industries (no snow removal)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'Yeti Software pricing', url: 'https://yetisoftware.com/pricing/', checked: '2026-11-23' },
    { name: 'Yeti Software', url: 'https://yetisoftware.com/', checked: '2026-11-23' },
    { name: 'Yeti Software mobile app guide', url: 'https://support.yetisoftware.com/mobile-app-guide', checked: '2026-11-23' },
    { name: 'Aspire snow removal management software', url: 'https://www.youraspire.com/industries/snow-removal-management-software', checked: '2026-11-23' },
    { name: 'GorillaDesk snow removal software', url: 'https://gorilladesk.com/industries/snow-removal-software/', checked: '2026-11-23' },
  ],
}
