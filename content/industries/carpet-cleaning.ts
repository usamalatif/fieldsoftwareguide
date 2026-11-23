import type { Industry } from '@/lib/industries'

/**
 * Carpet cleaning: VERIFIED (researched 2026-11-23, batch 6 draft).
 * Workiz /industries/carpet-cleaning-software/: Good|Better|Best options, recurring maintenance work,
 * automated review requests, dispatch with real-time location and route planning, premium upsells,
 * QuickBooks; no room or sq ft pricing, upholstery, tile or rugs named. Housecall Pro help center:
 * Pricing Forms with quantity (bedrooms) and numerical range (square footage) fields that can show in
 * online booking (plan not stated); a Service Plan Template for Carpet Cleaning (example plans only;
 * Recurring Service Plans on MAX); its carpet page was not fetched. ServiceTitan, FieldPulse and
 * Commusoft have no carpet page. Jobber: carpet page seen in search only, not fetched. Carpet tools:
 * QuoteIQ carpet page prices by room or square foot, room-by-room quotes, upholstery, tile and grout and
 * rugs, van assignment on Pro and up; pricing $29.99 to $699.99 a month, InstaSchedule and route
 * optimization on Elite and Max, QuickBooks Online on Pro and up. GorillaDesk prices by route: Basic
 * $49, Pro $99, Growth $149 a month for 1 route, extra routes extra; online booking and QuickBooks
 * Online from Pro; its carpet page mentions truck mounts. ServiceMonster pricing page 403 (no price
 * used); its help center shows prices by square foot and optional upsells on proposals. QuoteIQ
 * rating and "less than the competition" claims not used.
 */
export const carpetCleaning: Industry = {
  slug: 'carpet-cleaning',
  name: 'Carpet Cleaning',
  icon: '🧽',
  category: 'Field Services',
  metaDescription:
    'Compare carpet cleaning software for room and square foot pricing, online booking, upsells, van routes, follow-ups and QuickBooks. Verified vendor prices.',
  datePublished: '2026-11-23',

  answer:
    'Carpet cleaners price by the room or square foot and grow by selling add-ons and repeat cleanings, so the price book, upsells and follow-ups matter most. Workiz is the only big field service tool we checked with a carpet cleaning page: tiered options, premium upsells, recurring work, routes and QuickBooks (quote only). Housecall Pro’s pricing forms can price by bedroom count or square footage, from $59 a month billed annually. QuoteIQ quotes carpet, upholstery, tile and rugs room by room, from $29.99 a month. GorillaDesk charges by route, from $49 a month, and its online booking and QuickBooks start on Pro ($99). No tool we checked sends an automatic “time to clean again” reminder by itself.',

  intro:
    'A carpet cleaning job is priced by rooms, square feet or pieces of furniture, and the profit is often in the add-ons: stain and pet treatment, protector, upholstery, tile and grout, and area rugs. The software has to quote that quickly, let customers book online, send the right van and crew and bring customers back every year or so. Many carpet cleaners run truck mounts, so the number of vans you run can decide what you pay. Check how each tool counts users or routes before you compare prices.',

  keyFeatures: [
    'Price book by room, square foot or item',
    'Add-on and upsell options on quotes',
    'Online booking for customers',
    'Van and crew scheduling with routes',
    'Recurring cleanings and marketing follow-ups',
    'Upholstery, tile and rug services, and QuickBooks sync',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Generalist FSM: Jobber from $29/mo (Core, 1 user) and Housecall Pro from $59/mo (Basic, 1 user), billed annually. Carpet tools: QuoteIQ $29.99 to $699.99 a month billed monthly (1 to 20 users, $25 per extra user); GorillaDesk $49, $99 or $149 a month for one route, with extra routes charged. Workiz, which has a carpet cleaning page, is quote only.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 8,

  providers: [
    {
      slug: 'workiz',
      positioning: 'Carpet cleaning page with tiered options, upsells and routes',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Multi-van carpet cleaning companies that want dispatch, upsells and recurring work',
        strengths: [
          'Good, Better, Best options and a pitch to sell premium carpet cleaning services',
          'Real-time tech location and route planning; recurring maintenance work for existing clients',
          'Automated review requests; its FAQ says it fully integrates with QuickBooks',
        ],
        limitations: [
          'Every plan is “Request pricing”; flat rate pricing and sales proposals are on Ultimate',
          'Its carpet page names no room or square foot pricing, upholstery, tile or rugs',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; pricing forms by room count or square footage',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small carpet cleaning businesses that want online booking with set prices',
        strengths: [
          'Pricing forms with bedroom counts and square footage ranges that can show in online booking',
          'A carpet cleaning service plan template; Recurring Service Plans on MAX',
          'QuickBooks Online and Desktop on Essentials',
        ],
        limitations: [
          'Its help center does not say which plan includes pricing forms',
          'We could not check its carpet cleaning page',
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
          'Its carpet cleaning page blocked our checks, so we list no carpet-specific feature',
          'Room or square foot pricing not confirmed',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo cleaner with one van', pick: 'QuoteIQ Essentials ($29.99/mo, 1 user)', why: 'Price book for carpet, upholstery, tile and rugs on every plan. Online self-scheduling and route optimization need Elite.' },
    { size: 'Owner who wants online booking and a set price', pick: 'GorillaDesk Pro ($99/mo, 1 route)', why: 'Online booking, routing and QuickBooks Online sync, with unlimited office users. Each extra route costs $50 a month.' },
    { size: 'Small crew with set room prices', pick: 'Housecall Pro Essentials ($149/mo billed annually, up to 5 users)', why: 'Pricing forms by bedroom count or square footage, online booking and QuickBooks Online and Desktop.' },
    { size: 'Two to four vans', pick: 'QuoteIQ Pro ($199.99/mo, 4 users)', why: 'Assign each van its jobs, automated follow-ups and QuickBooks Online.' },
    { size: 'Multi-van company focused on upsells', pick: 'Workiz (custom quote)', why: 'Carpet cleaning page with tiered options, premium upsells, route planning and review requests.' },
  ],

  extraSections: [
    {
      id: 'carpet-pricing-upsells',
      heading: 'Room pricing, upsells and repeat cleanings: what to test',
      paragraphs: [
        'Quote a real house. QuoteIQ prices by the room or square foot and bundles rooms into packages, Housecall Pro’s pricing forms use bedroom counts and square footage ranges, and ServiceMonster’s help center shows prices set by the square foot with optional add-ons, such as pet urine treatment, that customers can tick on a proposal. Workiz offers Good, Better, Best options. Check that protector, stain treatment and upholstery add to the ticket in one tap.',
        'Then check repeat business. No tool we checked sends a “time to clean again” reminder after 12 or 18 months by itself, so set up recurring jobs, a service plan or a follow-up campaign instead. QuoteIQ and GorillaDesk include email and text campaigns, Housecall Pro has a carpet cleaning service plan template, and Workiz sends review requests. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Quoting by eye. A price book by room or square foot keeps every tech’s prices the same.',
    'Leaving upsells to memory. Put protector, stain treatment and upholstery on every quote as options.',
    'Letting customers drift away. Set up recurring cleanings or follow-up campaigns, since no tool reminds them by itself.',
    'Ignoring how the tool counts. GorillaDesk charges by route, QuoteIQ by user, so price your real van count.',
  ],

  faqs: [
    {
      question: 'What is the best software for a carpet cleaning business?',
      answer:
        'Workiz has a carpet cleaning page with tiered options, upsells and routes (quote only). QuoteIQ quotes carpet, upholstery, tile and rugs room by room from $29.99 a month, and GorillaDesk starts at $49 a month per route.',
    },
    {
      question: 'How much does carpet cleaning software cost?',
      answer:
        'QuoteIQ costs $29.99 to $699.99 a month billed monthly. GorillaDesk is $49, $99 or $149 a month for one route, plus a fee per extra route. Jobber starts at $29 and Housecall Pro at $59 a month, billed annually. Workiz is quote only.',
    },
    {
      question: 'Which carpet cleaning software prices by room or square foot?',
      answer:
        'QuoteIQ prices by the room or square foot and bundles rooms into packages. Housecall Pro’s pricing forms use bedroom counts and square footage ranges, and ServiceMonster lets you set a service unit such as square feet.',
    },
    {
      question: 'Can customers book a carpet cleaning online?',
      answer:
        'Yes. GorillaDesk offers 24/7 online booking from Pro ($99 a month), Housecall Pro has online booking from Basic and can show pricing forms in it, Jobber has online booking on every plan, and QuoteIQ’s self-scheduling is on Elite and Max.',
    },
    {
      question: 'Which carpet cleaning software helps with upsells?',
      answer:
        'Workiz pitches selling premium carpet cleaning services with Good, Better, Best options. ServiceMonster proposals let customers add optional services, and QuoteIQ adds clean, treat and protect options to quotes.',
    },
    {
      question: 'Which carpet cleaning software works with QuickBooks?',
      answer:
        'Workiz says it fully integrates with QuickBooks. QuoteIQ includes QuickBooks Online on Pro and up, GorillaDesk syncs with QuickBooks Online from Pro, and Jobber from Connect. Housecall Pro lists Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'Workiz carpet cleaning software', url: 'https://www.workiz.com/industries/carpet-cleaning-software/', checked: '2026-11-23' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Housecall Pro help: pricing forms', url: 'https://help.housecallpro.com/en/articles/8774752-pricing-forms-setup-features-and-faqs', checked: '2026-11-23' },
    { name: 'Housecall Pro help: service plan template for carpet cleaning', url: 'https://help.housecallpro.com/en/articles/2463495-service-plan-template-for-carpet-cleaning', checked: '2026-11-23' },
    { name: 'Jobber pricing (plans, online booking, QuickBooks)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'ServiceTitan industries (no carpet cleaning)', url: 'https://www.servicetitan.com/industries', checked: '2026-11-21' },
    { name: 'Commusoft industries (no carpet cleaning)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'QuoteIQ carpet cleaning software', url: 'https://myquoteiq.com/industries/carpet-cleaning-software/', checked: '2026-11-23' },
    { name: 'QuoteIQ pricing', url: 'https://myquoteiq.com/pricing/', checked: '2026-11-23' },
    { name: 'GorillaDesk carpet cleaning software', url: 'https://gorilladesk.com/industries/carpet-cleaning-software/', checked: '2026-11-23' },
    { name: 'GorillaDesk pricing', url: 'https://gorilladesk.com/pricing/', checked: '2026-11-23' },
    { name: 'ServiceMonster help: adding products and services', url: 'https://www.help.servicemonster.net/help-articles/adding-products-services', checked: '2026-11-23' },
    { name: 'ServiceMonster help: proposals with options', url: 'https://help.servicemonster.net/help-articles/creating-a-proposal-with-options-t', checked: '2026-11-23' },
  ],
}
