import type { Industry } from '@/lib/industries'

/**
 * Junk removal: VERIFIED (researched 2026-11-23, batch 6 draft).
 * Workiz /industries/junk-removal/: instant estimates, online booking through your website, route
 * planning and GPS tracking, card readers in the field, QuickBooks sync of customers, invoices and
 * payments; no load-size quoting, time windows or dump fees named. ServiceTitan and Commusoft junk URLs
 * 404 and not in their indexes; FieldPulse has no junk page. Jobber: junk removal not in its homepage
 * list (a search result URL was not fetched, so not claimed). Housecall Pro help center lists junk
 * removal only among Google Local Services Ads categories. Junk-specific tools: HaulHQ $0 base plus
 * $1.50 per completed job and 1.5% on cards on top of Stripe, capped at $149 a month per service type,
 * photo estimates and load-tier pricing; Junk-Desk $3.99 to $29.99 a month, load-based quotes with
 * disposal cost per yard or ton, scheduling from Business ($12.99), crew assignments on Team ($15.99).
 * Hauler Hero is roll-off and waste hauling software, no pricing page; directory prices not used.
 * No vendor confirms booking time windows; neither HaulHQ nor Junk-Desk names QuickBooks.
 */
export const junkRemoval: Industry = {
  slug: 'junk-removal',
  name: 'Junk Removal',
  icon: '🚛',
  category: 'Field Services',
  metaDescription:
    'Compare junk removal software for load-size and photo quotes, online booking, crew dispatch, dump fees, payments and QuickBooks. Verified vendor prices.',
  datePublished: '2026-11-23',

  answer:
    'Junk removal companies price by load, so quoting from photos or truck volume, fast booking and on-site payment matter most. Workiz is the only big field service tool we checked with a junk removal page: online booking, route planning with GPS, card readers in the field and QuickBooks sync (quote only). Junk-specific apps publish low prices. HaulHQ has no base fee and charges $1.50 per completed job plus 1.5% on cards, capped at $149 a month per service type, with photo estimates and load-tier pricing. Junk-Desk costs $3.99 to $29.99 a month and builds load-based quotes that include disposal cost per yard or ton. Neither junk app names QuickBooks.',

  intro:
    'A junk removal job is priced by how much of the truck it fills, and customers often want a number from a few photos before anyone drives out. The software has to quote by load, book the job, send the right truck and crew, collect payment on the spot and keep track of what each dump run costs. Many operators also rent dumpsters, which adds container tracking. Check whether a tool counts users, jobs or trucks, because a fee per job can be cheap in a slow month and costly in a busy one.',

  keyFeatures: [
    'Quotes by load size, truck volume or photos',
    'Online booking from your website',
    'Truck and crew scheduling with routes and GPS',
    'Dump fee and disposal cost tracking',
    'On-site card, cash and digital payments',
    'Invoicing and QuickBooks sync',
  ],

  priceRange: {
    min: 0,
    max: null,
    note: 'Junk-specific: HaulHQ $0 base plus $1.50 per completed job and 1.5% on cards on top of Stripe, capped at $149 a month per service type; Junk-Desk $3.99 to $29.99 a month. Generalist FSM: Jobber from $29/mo and Housecall Pro from $59/mo, billed annually. Workiz, which has a junk removal page, is quote only.',
    source: { name: 'HaulHQ pricing', url: 'https://haulhq.app/pricing', checked: '2026-11-23' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 8,

  providers: [
    {
      slug: 'workiz',
      positioning: 'Junk removal page with online booking, GPS routes and card readers',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Multi-truck junk removal companies that want one tool for booking, dispatch and payments',
        strengths: [
          'Customers book online directly through your website; estimates generated instantly',
          'Route planning and GPS tracking for trucks and crews',
          'Card readers in the field; QuickBooks sync of customers, invoices and payments',
        ],
        limitations: [
          'Every plan is “Request pricing”',
          'Its junk removal page names no load-size quoting, time windows or dump fee tracking',
        ],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Lowest published generalist price',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Owner-operators that want quotes, booking and invoicing at a known price',
        strengths: [
          'Published plans from $29/month billed annually; quotes and online booking on every plan',
          'Route optimization, automatic payments and QuickBooks Online from Connect',
        ],
        limitations: [
          'Junk removal is not in its homepage industry list, and we could not check a junk page',
          'No load-size quoting or dump fee tracking confirmed',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; Google Local Services Ads covers junk removal',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small junk removal crews that want online booking and a known monthly price',
        strengths: [
          'Its Google Local Services Ads integration lists junk removal among supported categories',
          'Online booking from Basic; employee GPS and QuickBooks Online and Desktop on Essentials',
        ],
        limitations: [
          'We could not check a Housecall Pro junk removal page, so no junk feature is listed',
          'Route optimization needs MAX ($299/mo billed annually)',
        ],
      },
    },
  ],

  bySize: [
    { size: 'New owner-operator with one truck', pick: 'Junk-Desk Basic ($3.99/mo) or Business ($12.99/mo)', why: 'Load-based quotes with disposal, fuel and labor costs. Scheduling starts on Business.' },
    { size: 'Seasonal or low-volume business', pick: 'HaulHQ ($0 base, $1.50 per completed job)', why: 'You pay per job plus 1.5% on cards, capped at $149 a month per service type, with photo estimates and a free booking page.' },
    { size: 'Small crew that wants a known price', pick: 'Jobber Core ($29/mo) or Housecall Pro Basic ($59/mo), billed annually', why: 'Quotes, online booking and invoicing. Neither confirms load-size quoting or dump fees.' },
    { size: 'Operator with crews on two or more trucks', pick: 'Junk-Desk Team ($15.99/mo) or HaulHQ', why: 'Junk-Desk adds team scheduling and crew assignments; HaulHQ has drag-and-drop dispatch and live crew location.' },
    { size: 'Multi-truck company that needs routes and QuickBooks', pick: 'Workiz (custom quote)', why: 'Junk removal page with online booking, GPS route planning, card readers and QuickBooks sync.' },
  ],

  extraSections: [
    {
      id: 'junk-quotes-dump-fees',
      heading: 'Load quotes, dump fees and per-job pricing: what to test',
      paragraphs: [
        'Quote a real job from photos. HaulHQ offers photo estimates and load-tier pricing, and Junk-Desk builds load-based quotes that include disposal, fuel, labor and overhead, with disposal cost tracked per yard or ton. Workiz, Jobber and Housecall Pro quote jobs, but none of them names load-size quoting or dump fee tracking, so check how you would record what each dump run costs.',
        'Then check how you pay. HaulHQ charges per completed job and a card fee, capped at $149 a month per service type, while Junk-Desk and the generalist tools charge a flat monthly price. Work out the cost for your busiest month, not your slowest. If you also rent dumpsters, HaulHQ and Junk-Desk cover both; Hauler Hero is built for roll-off and waste haulers, not junk removal. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Quoting every job on site. If customers send photos, a tool with photo estimates saves the drive.',
    'Ignoring dump fees. If the tool does not track disposal costs, your job margins are guesses.',
    'Picking per-job pricing without checking busy months. HaulHQ caps its fee at $149 a month per service type.',
    'Buying roll-off software for junk removal. Hauler Hero lists roll-off and waste hauling, not junk removal.',
  ],

  faqs: [
    {
      question: 'What is the best software for a junk removal business?',
      answer:
        'Workiz has a junk removal page with online booking, GPS route planning, card readers and QuickBooks sync (quote only). For a low price, HaulHQ charges $1.50 per completed job with no base fee, and Junk-Desk costs $3.99 to $29.99 a month.',
    },
    {
      question: 'How much does junk removal software cost?',
      answer:
        'HaulHQ has a $0 base and charges $1.50 per completed job plus 1.5% on cards, capped at $149 a month per service type. Junk-Desk costs $3.99 to $29.99 a month. Jobber starts at $29 and Housecall Pro at $59 a month, billed annually. Workiz is quote only.',
    },
    {
      question: 'Which junk removal software quotes from photos or load size?',
      answer:
        'HaulHQ offers photo estimates and load-tier pricing, and Junk-Desk builds load-based quotes with disposal, fuel, labor and overhead costs. Workiz’s junk removal page mentions instant estimates but not load size or photos.',
    },
    {
      question: 'Can junk removal software track dump fees?',
      answer:
        'Junk-Desk tracks disposal cost per yard or ton in its quotes and lists receipt tracking from its Business plan. None of the six generalist tools we cover names dump fee tracking.',
    },
    {
      question: 'Is there software for junk removal and dumpster rental together?',
      answer:
        'Yes. HaulHQ and Junk-Desk both cover junk removal and dumpster rental. HaulHQ caps its fees at $149 a month per service type, and every Junk-Desk plan includes both service types.',
    },
    {
      question: 'Which junk removal software works with QuickBooks?',
      answer:
        'Workiz says it syncs customers, invoices and payments with QuickBooks. Jobber offers QuickBooks Online from Connect, and Housecall Pro lists Online and Desktop on Essentials. HaulHQ and Junk-Desk do not name QuickBooks on their pages.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'Workiz junk removal software', url: 'https://www.workiz.com/industries/junk-removal/', checked: '2026-11-23' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Jobber pricing (plans, quotes, online booking, QuickBooks)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Housecall Pro help: Google Local Services Ads integration (categories incl. junk removal)', url: 'https://help.housecallpro.com/en/articles/4005026-job-inbox-integration-with-google-local-service-ads', checked: '2026-11-23' },
    { name: 'ServiceTitan industries (no junk removal)', url: 'https://www.servicetitan.com/industries', checked: '2026-11-21' },
    { name: 'Commusoft industries (no junk removal)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'HaulHQ junk removal and dumpster rental software', url: 'https://haulhq.app/', checked: '2026-11-23' },
    { name: 'HaulHQ pricing', url: 'https://haulhq.app/pricing', checked: '2026-11-23' },
    { name: 'Junk-Desk', url: 'https://junk-desk.com/', checked: '2026-11-23' },
    { name: 'Junk-Desk pricing', url: 'https://junk-desk.com/pricing', checked: '2026-11-23' },
    { name: 'Hauler Hero (roll-off and waste hauling)', url: 'https://www.haulerhero.com/', checked: '2026-11-23' },
  ],
}
