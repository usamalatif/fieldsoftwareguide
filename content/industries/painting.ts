import type { Industry } from '@/lib/industries'

/**
 * Painting: VERIFIED (researched 2026-11-23, batch 6 draft).
 * ServiceTitan /industries/painting: good-better-best options, estimates with photos, costs for time,
 * materials and margins, crew mobile app, routing, two-way QuickBooks sync (Online, Desktop Premier and
 * Enterprise); no sq ft estimating, change orders or deposits named. Workiz /industries/painting/:
 * Good|Better|Best options (sales proposals are on Ultimate), estimates in one or two minutes,
 * before/after images with CompanyCam, QuickBooks sync. Jobber: painting is in its homepage list (page
 * not fetched). Housecall Pro help center: progress invoicing, deposits by amount or percentage,
 * multiple appointments per job with their own employees, job costing (plan tier not stated); its
 * painting page was not fetched. FieldPulse (/industries/painting and /painting-software/ 404) and
 * Commusoft (404) have no painting page. Painting tools: PaintScout Sales $99/mo annual or $119
 * monthly, Operations add-on $79/$99, seats $20/user/mo, sq ft per hour production rates, change
 * orders, deposits; DripJobs Pro $97 and Advanced $147 a month (1 admin user), Good/Better/Best and
 * change orders on Advanced, production rates $99/mo and job costing $49/mo add-ons; Estimate Rocket
 * $139/$259/$359 a month for 3/7/15 full users, job costing, change orders, QuickBooks Online.
 * Promotions (Workiz, Estimate Rocket) ignored. No vendor offers room-by-room estimating on a fetched page.
 */
export const painting: Industry = {
  slug: 'painting',
  name: 'Painting',
  icon: '🎨',
  category: 'Trades',
  metaDescription:
    'Compare painting contractor software for square foot estimates, options, job costing, crews, change orders, deposits and QuickBooks. Verified prices.',
  datePublished: '2026-11-23',

  answer:
    'Painting contractors win on estimates, so production-rate pricing, options and deposits matter most. ServiceTitan and Workiz have painting pages with good-better-best options and QuickBooks sync (quote only), and Jobber lists painting among its industries from $29 a month billed annually. Painting-specific tools publish prices: PaintScout costs $99 a month billed annually ($119 monthly) with square-foot-per-hour production rates, change orders and deposits, and DripJobs costs $97 or $147 a month, with production rates as a $99 add-on. Estimate Rocket costs $139 to $359 a month for 3 to 15 users and includes job costing and change orders. No tool we checked estimates room by room.',

  intro:
    'A painting job is sold on the estimate: square footage, surfaces, coats, prep and paint, turned into a price the customer accepts. After the sale, the software has to schedule crews across several days, track paint and labor against the estimate, handle change orders when the customer adds a room, and collect a deposit and progress payments. Residential repaints and commercial projects need different things, so check how each tool handles multi-day jobs and billing in stages before you buy.',

  keyFeatures: [
    'Estimates from square footage and production rates',
    'Good, better, best options and upgrades on proposals',
    'Job costing for paint, materials and labor',
    'Crew scheduling across multi-day jobs',
    'Change orders and job photos',
    'Deposits, progress invoicing and QuickBooks sync',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Generalist FSM: Jobber from $29/mo (Core, 1 user) and Housecall Pro from $59/mo (Basic, 1 user), billed annually. Painting tools: PaintScout Sales $99/mo billed annually ($119 monthly), Operations add-on $79/mo ($99 monthly), $20 per extra user; DripJobs $97 or $147 a month; Estimate Rocket $139, $259 or $359 a month for 3, 7 or 15 users. ServiceTitan and Workiz, which have painting pages, are quote only.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 8,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Painting page with options, photo estimates, job costing and QuickBooks Desktop',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger painting companies with sales reps, crews and an office',
        strengths: [
          'Good-better-best options and digital estimates with photos',
          'Estimates costs for time, materials and margins to manage painting job costs',
          'Crew mobile app, routing, and two-way sync with QuickBooks Online and Desktop',
        ],
        limitations: [
          'No published price; packages are behind one “Get Pricing” button',
          'Its painting page does not mention square foot estimating, change orders or deposits',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Painting page with Good, Better, Best options and CompanyCam photos',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Residential painters that want fast estimates with options',
        strengths: [
          'Good, Better, Best options that fit any budget; estimates in one or two minutes',
          'Before and after images with CompanyCam; tracks inventory and expenses',
          'QuickBooks sync of invoices, customers and payments',
        ],
        limitations: [
          'Every plan is “Request pricing”; sales proposals and multi-day jobs are on Ultimate',
          'Its painting page does not mention change orders, deposits or job costing',
        ],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Lowest published generalist price; lists painting among its industries',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Small painting businesses that want quotes and invoicing at a known price',
        strengths: [
          'Published plans from $29/month billed annually; quotes and online booking on every plan',
          'Automatic payments and QuickBooks Online from Connect',
        ],
        limitations: [
          'Its painting page blocked our checks, so we list no painting-specific Jobber feature',
          'QuickBooks Desktop is not supported',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; deposits, progress invoicing and job costing in its help center',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Painters that bill in stages on multi-day jobs',
        strengths: [
          'Deposits by amount or percentage, and progress invoicing to bill in stages',
          'Several appointments per job, each with its own crew; job costing for labor and materials',
          'QuickBooks Online and Desktop on Essentials',
        ],
        limitations: [
          'Its help articles do not say which plan includes deposits, progress invoicing or job costing',
          'We could not check its painting page; change orders not confirmed',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Owner who sells and paints', pick: 'Jobber Core ($29/mo) or Housecall Pro Basic ($59/mo), billed annually', why: 'Quotes, invoicing and payments at a published price. Neither names square foot estimating.' },
    { size: 'Painter who wants production-rate estimates', pick: 'PaintScout Sales ($99/mo billed annually)', why: 'Built for painting contractors, with square-foot-per-hour production rates, change orders and deposits. Scheduling comes with the Operations add-on.' },
    { size: 'Residential painting company focused on sales', pick: 'DripJobs Advanced ($147/mo)', why: 'Good, Better, Best packages and change orders on Advanced. Production rates ($99/mo) and job costing ($49/mo) are add-ons.' },
    { size: 'Team of 3 to 15 estimators and office staff', pick: 'Estimate Rocket ($139 to $359/mo)', why: 'Includes 3, 7 or 15 full users with job costing, change orders, crew schedules and QuickBooks Online.' },
    { size: 'Large painting company with crews and an office', pick: 'ServiceTitan (custom quote)', why: 'Painting page with options, photo estimates, job costing and QuickBooks Desktop support.' },
  ],

  extraSections: [
    {
      id: 'painting-estimates-billing',
      heading: 'Estimates, change orders and deposits: what to test in a demo',
      paragraphs: [
        'Build a real estimate from square footage. PaintScout uses square-foot-per-hour production rates, and DripJobs lets you enter square footage and substrates such as walls, trim and ceilings, though its production rates are a $99 add-on. ServiceTitan estimates costs for time, materials and margins, and ServiceTitan and Workiz both offer good-better-best options. None of the tools we checked estimates room by room on its own pages, so ask how each one handles a whole-house repaint.',
        'Then test the money side. PaintScout and DripJobs collect deposits, Housecall Pro creates deposits and progress invoices, and PaintScout, DripJobs and Estimate Rocket handle change orders. Check job costing too: ServiceTitan, Housecall Pro and Estimate Rocket track it, and DripJobs charges $49 a month for it. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Guessing hours instead of using production rates. Square-foot-per-hour pricing makes estimates repeatable.',
    'Skipping change orders. When the customer adds a room, get it priced and signed before the crew starts.',
    'Starting work without a deposit. Choose a tool that collects one when the estimate is approved.',
    'Missing add-on costs. DripJobs charges extra for production rates and job costing, and PaintScout for Operations.',
  ],

  faqs: [
    {
      question: 'What is the best software for painting contractors?',
      answer:
        'ServiceTitan and Workiz have painting pages with good-better-best options (quote only), and Jobber lists painting from $29 a month billed annually. Painting tools: PaintScout from $99 a month billed annually, DripJobs from $97 a month and Estimate Rocket from $139 a month.',
    },
    {
      question: 'How much does painting estimating software cost?',
      answer:
        'PaintScout Sales is $99 a month billed annually or $119 monthly, plus $20 per extra user. DripJobs is $97 or $147 a month. Estimate Rocket is $139, $259 or $359 a month for 3, 7 or 15 users. Jobber starts at $29 and Housecall Pro at $59 a month, billed annually.',
    },
    {
      question: 'Which painting software estimates by square footage?',
      answer:
        'PaintScout uses a production rate calculator with square-foot-per-hour settings. DripJobs lets you enter square footage and substrates to calculate labor and material costs, with production rates as a $99 a month add-on.',
    },
    {
      question: 'Which painting software handles change orders?',
      answer:
        'PaintScout lists change orders and additional work, Estimate Rocket includes change orders on every plan, and DripJobs includes them on Advanced ($147 a month). ServiceTitan’s and Workiz’s painting pages do not mention change orders.',
    },
    {
      question: 'Can painting software collect deposits and progress payments?',
      answer:
        'Yes. PaintScout and DripJobs collect deposits, and Housecall Pro creates deposits by amount or percentage and supports progress invoicing to bill in stages. Its help articles do not say which plan includes them.',
    },
    {
      question: 'Which painting software works with QuickBooks?',
      answer:
        'ServiceTitan syncs both ways with QuickBooks Online and Desktop, Workiz syncs invoices, customers and payments, and Estimate Rocket syncs with QuickBooks Online. Jobber offers QuickBooks Online from Connect, and Housecall Pro lists Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan painting business software', url: 'https://www.servicetitan.com/industries/painting', checked: '2026-11-23' },
    { name: 'Workiz painting contractor software', url: 'https://www.workiz.com/industries/painting/', checked: '2026-11-23' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Jobber pricing (plans, quotes, QuickBooks)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Jobber homepage (industries list includes painting)', url: 'https://www.getjobber.com/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Housecall Pro help: progress invoicing', url: 'https://help.housecallpro.com/en/articles/8142156-progress-invoicing-faqs', checked: '2026-11-23' },
    { name: 'Housecall Pro help: deposits', url: 'https://help.housecallpro.com/en/articles/3066064-deposits', checked: '2026-11-23' },
    { name: 'Housecall Pro help: appointments, segments and recurring jobs', url: 'https://help.housecallpro.com/en/articles/12892543-appointments-vs-segments-vs-recurring-jobs', checked: '2026-11-23' },
    { name: 'Housecall Pro help: job costing', url: 'https://help.housecallpro.com/en/articles/6536636-using-job-costing', checked: '2026-11-23' },
    { name: 'PaintScout', url: 'https://www.paintscout.com/', checked: '2026-11-23' },
    { name: 'PaintScout pricing', url: 'https://www.paintscout.com/pricing', checked: '2026-11-23' },
    { name: 'DripJobs painting CRM', url: 'https://dripjobs.com/painting-business-crm', checked: '2026-11-23' },
    { name: 'DripJobs pricing', url: 'https://dripjobs.com/pricing', checked: '2026-11-23' },
    { name: 'Estimate Rocket pricing', url: 'https://www.estimaterocket.com/pricing', checked: '2026-11-23' },
  ],
}
