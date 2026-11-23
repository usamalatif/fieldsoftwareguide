import type { Industry } from '@/lib/industries'

/**
 * Fencing: VERIFIED (researched 2026-11-23, batch 9 draft).
 * None of the six FSM vendors has a fencing page: ServiceTitan (/industries/fencing-software 404, not in
 * its 27-trade index), Workiz (404, not in index), FieldPulse (404), Commusoft (not in its US list);
 * Jobber and Housecall Pro sites not fetched. Housecall Pro help center: deposits on estimates as a flat
 * amount or percentage up to 100%, multi-day job appointments (plan not stated). Fence tools: QuoteIQ
 * fence page: satellite fence-line measuring (MapMeasure Pro from Beginner $99.99), linear-foot price
 * book on every plan, materials behind each price in job costing (Pro), inventory and purchase orders
 * (Elite), materials deposit on every plan, photos (Beginner), crew scheduling (Max $699.99), QuickBooks
 * Online (Pro); mentions 811 only as advice. Projul fencing page: field takeoffs, estimate and material
 * list in the crew app, purchase orders, deposit invoices before materials ship, drag-and-drop crew
 * scheduling, QuickBooks Desktop sync; $199 to $1,199 a month billed annually. Visual Fence Pro: draws
 * fence lines on satellite maps with automatic material lists, crew scheduling and work orders,
 * QuickBooks sync on Pro; Free (1 user, 10 estimates a month), Starter $79 (2 users), Pro $179 (5 users),
 * Enterprise $299 (15 users) a month; founder promotion ignored. FenceCloud returned 403, not used. No
 * vendor names 811 utility-locate tracking as a feature.
 */
export const fencing: Industry = {
  slug: 'fencing',
  name: 'Fencing',
  icon: '🚧',
  category: 'Trades',
  metaDescription:
    'Compare fence contractor software for satellite fence-line measuring, linear foot quotes, material lists, deposits, crews and QuickBooks. Verified prices.',
  datePublished: '2026-11-23',

  answer:
    'Fence contractors quote by the linear foot, so measuring the fence line, turning it into a material list and collecting a deposit matter most. None of the six big field service tools we checked has a fencing page. Fence-focused tools do the measuring. Visual Fence Pro draws fence lines on satellite maps and builds the material list, with a free plan and paid plans from $79 a month. QuoteIQ has a fence page with satellite fence-line measuring from its $99.99 Beginner plan, linear-foot pricing and materials deposits on every plan. Projul has a fencing page with material lists, purchase orders, deposit invoices and crew scheduling, from $199 a month billed annually. No tool we checked tracks 811 utility locates.',

  intro:
    'A fence job is priced by the linear foot for each material and height, plus gates, corners and posts. The software has to measure the line, ideally from a satellite map, turn it into a list of posts, rails, panels, pickets, concrete and hardware, and collect a materials deposit when the customer says yes. Installs usually take one to three days, so crews and material deliveries have to line up. Call 811 before digging; no tool we checked tracks locate tickets for you.',

  keyFeatures: [
    'Fence-line measuring on satellite maps',
    'Linear-foot pricing by material and height',
    'Automatic material lists for posts, panels and gates',
    'Materials deposits when the quote is signed',
    'Crew scheduling and purchase orders',
    'Job photos and QuickBooks sync',
  ],

  priceRange: {
    min: 0,
    max: null,
    note: 'Fence tools: Visual Fence Pro Free (1 user, 10 estimates a month), $79, $179 or $299 a month for 2, 5 or 15 users; QuoteIQ $29.99 to $699.99 a month billed monthly; Projul $199, $399, $599 or $1,199 a month billed annually for 3, 10, 20 or unlimited users. Generalist FSM: Jobber from $29/mo and Housecall Pro from $59/mo, billed annually, with no confirmed fencing page.',
    source: { name: 'Visual Fence Pro', url: 'https://visualfencepro.com/', checked: '2026-11-23' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 9,

  providers: [
    {
      slug: 'jobber',
      positioning: 'Lowest published generalist price; no fencing page',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Fence repair businesses that need quotes, scheduling and invoicing',
        strengths: [
          'Published plans from $29/month billed annually; quotes and online booking on every plan',
          'Automatic payments and QuickBooks Online from Connect',
        ],
        limitations: [
          'No fencing page confirmed',
          'No fence-line measuring or material lists confirmed',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; estimate deposits and multi-day jobs',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small fence installers that want deposits and multi-day jobs at a known price',
        strengths: [
          'Deposits on estimates as a flat amount or a percentage, up to 100%',
          'Multi-day jobs with several appointments; QuickBooks Online and Desktop on Essentials',
        ],
        limitations: [
          'We could not check a fencing page; its help articles do not state plan tiers',
          'No fence-line measuring or material lists confirmed',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Multi-day jobs and proposals on Ultimate; no fencing page',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Fence crews that want multi-day jobs in a general tool',
        strengths: [
          'Multi-day jobs and sales proposals on Ultimate',
          'QuickBooks Online sync on every plan',
        ],
        limitations: [
          'No fencing page (its fencing URL returns not found); every plan is “Request pricing”',
          'No fence-line measuring or material lists',
        ],
      },
    },
  ],

  bySize: [
    { size: 'New fence business testing software', pick: 'Visual Fence Pro Free ($0, 1 user)', why: 'Draw fence lines on satellite maps and get a material list, limited to 10 estimates a month.' },
    { size: 'Owner who quotes from the office', pick: 'QuoteIQ Beginner ($99.99/mo, 2 users)', why: 'Satellite fence-line measuring, linear-foot pricing, materials deposits and photos.' },
    { size: 'Small crew that wants scheduling and QuickBooks', pick: 'Visual Fence Pro Pro ($179/mo, 5 users)', why: 'Adds work orders, crew scheduling, QuickBooks, Stripe and Google Calendar sync.' },
    { size: 'Install company with purchase orders', pick: 'Projul Starter ($199/mo billed annually, 3 users)', why: 'Fencing page with material lists in the crew app, purchase orders, deposit invoices and crew scheduling.' },
    { size: 'Repair-focused business', pick: 'Housecall Pro Essentials ($149/mo billed annually)', why: 'Estimate deposits, multi-day jobs and QuickBooks Online and Desktop, without fence measuring.' },
  ],

  extraSections: [
    {
      id: 'fencing-measure-materials',
      heading: 'Fence-line measuring, materials and deposits: what to test',
      paragraphs: [
        'Measure a real yard. Visual Fence Pro and QuoteIQ both draw the fence line on a satellite map; Visual Fence Pro calculates the material list automatically, and QuoteIQ prices each material and height by the linear foot. Projul uses field takeoffs instead. Check that gates, corners and terminal posts land on the material list without manual edits.',
        'Then follow the money. QuoteIQ collects a materials deposit with the signed quote on every plan, Projul sends deposit invoices before materials ship, and Housecall Pro takes deposits on estimates as a flat amount or percentage. For ordering, Projul and QuoteIQ Elite handle purchase orders. No tool we checked tracks 811 locate tickets, so keep that step in your checklist. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Measuring every yard with a wheel. Satellite measuring saves trips on most residential quotes.',
    'Building material lists by hand. Choose a tool that turns the fence line into posts, panels and gates.',
    'Ordering materials without a deposit. Collect it when the customer signs.',
    'Forgetting 811. No tool we checked tracks utility locate requests, so build it into your checklist.',
  ],

  faqs: [
    {
      question: 'What is the best software for a fence company?',
      answer:
        'Fence-focused tools fit best. Visual Fence Pro has a free plan and paid plans from $79 a month, QuoteIQ has a fence page from $29.99 a month, and Projul has a fencing page from $199 a month billed annually. None of the six big field service tools we checked has a fencing page.',
    },
    {
      question: 'How much does fence estimating software cost?',
      answer:
        'Visual Fence Pro is free for 1 user and 10 estimates a month, then $79, $179 or $299 a month. QuoteIQ costs $29.99 to $699.99 a month. Projul costs $199 to $1,199 a month billed annually. Jobber starts at $29 a month billed annually.',
    },
    {
      question: 'Which fence software measures on satellite maps?',
      answer:
        'Visual Fence Pro draws fence lines on satellite maps and calculates materials automatically. QuoteIQ measures the fence line on satellite with MapMeasure Pro from its Beginner plan ($99.99 a month).',
    },
    {
      question: 'Can fence software create a material list?',
      answer:
        'Yes. Visual Fence Pro builds a material list from the drawn fence line, Projul shows the material list to crews in its app, and QuoteIQ records the posts, rails, panels, pickets, concrete, hardware and gates behind each price on Pro.',
    },
    {
      question: 'Which fence software collects deposits?',
      answer:
        'QuoteIQ collects a materials deposit with the signed quote on every plan, Projul sends deposit invoices before materials ship, and Housecall Pro takes deposits on estimates as a flat amount or percentage.',
    },
    {
      question: 'Which fence software works with QuickBooks?',
      answer:
        'Visual Fence Pro syncs with QuickBooks on Pro, QuoteIQ includes QuickBooks Online on Pro and up, and Projul’s fencing page names QuickBooks Desktop sync. Housecall Pro lists Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan industries (no fencing)', url: 'https://www.servicetitan.com/industries', checked: '2026-11-23' },
    { name: 'Workiz industries (no fencing)', url: 'https://www.workiz.com/industries/', checked: '2026-11-23' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Housecall Pro help: deposits on estimates', url: 'https://help.housecallpro.com/en/articles/12151673-collect-deposits-on-estimates', checked: '2026-11-23' },
    { name: 'Housecall Pro help: multi-day job appointments', url: 'https://help.housecallpro.com/en/articles/6930497-multi-day-job-appointments-overview', checked: '2026-11-23' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Jobber pricing (plans)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'QuoteIQ fence installation software', url: 'https://myquoteiq.com/industries/fence-installation-software/', checked: '2026-11-23' },
    { name: 'QuoteIQ pricing', url: 'https://myquoteiq.com/pricing/', checked: '2026-11-23' },
    { name: 'Projul fencing software', url: 'https://projul.com/industries/fencing/', checked: '2026-11-23' },
    { name: 'Projul pricing', url: 'https://projul.com/pricing/', checked: '2026-11-23' },
    { name: 'Visual Fence Pro (features and plans)', url: 'https://visualfencepro.com/', checked: '2026-11-23' },
  ],
}
