import type { Industry } from '@/lib/industries'

/**
 * Handyman: VERIFIED (researched 2026-11-21, batch 5 draft).
 * ServiceTitan /industries/handyman-service-software: estimates with multiple options, photos and
 * materials, costs for time, materials and margins; online booking via portal; real-time tech
 * tracking; service agreements; QuickBooks Online, Desktop Premier and Enterprise. Workiz
 * /industries/handyman/: Good, Better, Best proposals, scheduling, route planning, recurring
 * maintenance work, "fully integrates with QuickBooks" (its FAQ mentions garage door teams, so it is
 * not quoted). Jobber: handyman is in its homepage industries list (page not fetched). Housecall Pro:
 * not checked. FieldPulse (/industries/handyman 404), Commusoft and ServiceM8 have no handyman page.
 * Small-business tools with handyman pages: Markate (Owner Operator $49.95 a month, $45.95 billed
 * annually; Team adds $5 per active employee; online booking add-on $10; time tracking included) and
 * Kickserv (Start $60 for 5 users, Run $119 for 10 with GPS check-ins and QuickBooks Desktop at $50 a
 * month, Scale $199 for 20). ServiceM8 prices by jobs per month (Free 30 jobs, then $29, $79, $149,
 * $349) with time tracking, materials, recurring jobs, online booking and QuickBooks Online on every
 * plan. Workiz's "increase revenue by 22%" claim is not used. No vendor documents hourly billing for
 * multi-task visits or says "line items".
 */
export const handyman: Industry = {
  slug: 'handyman',
  name: 'Handyman',
  icon: '🔨',
  category: 'Trades',
  metaDescription:
    'Compare handyman software for quick estimates, online booking, time tracking, materials, scheduling and QuickBooks. Verified vendor features and prices.',
  datePublished: '2026-11-21',

  answer:
    'Handyman businesses run many small, mixed jobs, so fast estimates, easy booking and time tracking matter most. Jobber lists handyman among its industries, with plans from $29 a month billed annually, and ServiceTitan has a handyman page with estimates that include photos, options and materials (quote only). ServiceM8 is free for one user and 30 jobs a month, then $29 to $349 a month by job volume, with time tracking and materials on every plan. Kickserv has a handyman page and costs $60 a month for 5 users, and Markate costs $49.95 a month for an owner operator. No tool we checked documents hourly billing for a visit with several small tasks, so test that in a demo.',

  intro:
    'A handyman visit can mean hanging a door, fixing a leak and patching drywall in one trip. The software has to quote that mix quickly, often with photos, book the visit, track time on site and add the materials used to the invoice. Many handymen work alone or with one or two helpers, so a low price for a small team matters, and repeat customers and property managers make recurring maintenance worth setting up. Check how each tool counts users or jobs, since that decides what you pay as you grow.',

  keyFeatures: [
    'Quick estimates with options, photos and materials',
    'Online booking and a customer portal',
    'Time tracking on site for hourly work',
    'Materials and parts added to invoices',
    'Scheduling and dispatch for a small crew',
    'Recurring maintenance jobs and QuickBooks sync',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Generalist FSM plans start at $29/mo (Jobber Core, 1 user) and $59/mo (Housecall Pro Basic, 1 user), billed annually. ServiceM8 Free is $0 for 1 user and 30 jobs a month; paid plans are $29, $79, $149 and $349 a month by job volume. Handyman pages with prices: Markate $49.95 a month ($45.95 billed annually), Kickserv $60 (5 users), $119 (10 users) and $199 (20 users) a month. Workiz and ServiceTitan are quote only.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 8,

  providers: [
    {
      slug: 'jobber',
      positioning: 'Lowest published generalist price; lists handyman among its industries',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Solo handymen and small crews that want quotes, booking and invoicing at a known price',
        strengths: [
          'Published plans from $29/month billed annually; quotes and online booking on every plan',
          'Route optimization, checklists, automatic payments and QuickBooks Online from Connect',
        ],
        limitations: [
          'Its handyman page blocked our checks, so we list no handyman-specific Jobber feature',
          'QuickBooks Desktop is not supported',
        ],
      },
    },
    {
      slug: 'servicetitan',
      positioning: 'Handyman page with photo estimates, service agreements and QuickBooks Desktop',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger handyman companies with an office, dispatcher and service agreements',
        strengths: [
          'Estimates with multiple options, sent as a link with photos, options and materials',
          'Customers book online, via chat or phone, or through a portal; real-time tech tracking',
          'QuickBooks Online, Desktop Premier and Desktop Enterprise with two-way sync',
        ],
        limitations: [
          'No published price; packages are behind one “Get Pricing” button',
          'Time tracking for hourly jobs is not described on its handyman page',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Handyman page with Good, Better, Best proposals and route planning',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Handyman teams that want proposals and recurring maintenance work',
        strengths: [
          'Detailed proposals with multiple options to meet customer budgets',
          'Route planning and real-time team location; recurring maintenance work for slow months',
          'Online booking and QuickBooks Online sync on every plan',
        ],
        limitations: [
          'Every plan is “Request pricing”; multi-day jobs are on Ultimate',
          'Its handyman page does not name time tracking or materials on invoices',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price, online booking from Basic',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small home repair businesses that want a known monthly price',
        strengths: [
          'Online booking from Basic; flat-rate pricing, employee GPS and QuickBooks Online and Desktop on Essentials',
          'Recurring Service Plans and route optimization on MAX',
        ],
        limitations: [
          'We could not check a Housecall Pro handyman page, so no handyman feature is listed',
          'Recurring service plans need MAX ($299/mo billed annually)',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo handyman, under 30 jobs a month', pick: 'ServiceM8 Free ($0, 1 user)', why: 'Quotes, invoicing, scheduling, recurring jobs, online booking, time tracking and QuickBooks Online are on every plan, including Free.' },
    { size: 'Owner operator who wants a handyman-focused tool', pick: 'Markate ($49.95/mo, or $45.95 billed annually)', why: 'Has a handyman page with an AI estimator, photos and time tracking. Online booking is a $10/mo add-on; Team adds $5 per active employee.' },
    { size: 'Small crew, up to 5 people', pick: 'Kickserv Start ($60/mo, 5 users)', why: 'Has a handyman page, time tracking and QuickBooks Online. GPS check-ins and QuickBooks Desktop ($50/mo) need Run ($119, 10 users).' },
    { size: 'Growing team that sends proposals', pick: 'Jobber Connect ($99/mo) or Workiz (custom quote)', why: 'Jobber adds route optimization and QuickBooks Online on Connect; Workiz pitches Good, Better, Best proposals and route planning.' },
    { size: 'Multi-crew company with service agreements', pick: 'ServiceTitan (custom quote)', why: 'Handyman page with photo estimates, a pricebook, service agreements and QuickBooks Desktop support.' },
  ],

  extraSections: [
    {
      id: 'handyman-estimates-time',
      heading: 'Mixed jobs, hourly time and materials: what to test in a demo',
      paragraphs: [
        'Quote a real visit with three small tasks. ServiceTitan sends estimates with photos, options and materials and calculates costs for time, materials and margins. Markate offers an AI estimator that prices a job from photos or details, and Workiz and Jobber send proposals with options. No vendor page we checked documents hourly billing across several tasks on one visit, so ask how the tool turns tracked time into invoice lines.',
        'Then check what you pay as you grow. ServiceM8 charges by jobs per month, so a high-volume solo handyman can outgrow Free quickly, while Kickserv charges by users (5, 10 or 20) and Jobber and Housecall Pro charge by user tier. Time tracking is on every ServiceM8 plan, Kickserv Start and Markate. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Quoting mixed jobs as one flat price without options. Tools with good, better, best options often win larger tickets.',
    'Not tracking time on site. Hourly work you cannot prove is hard to bill, so test time tracking in the app.',
    'Picking a job-count plan without checking volume. ServiceM8 Free covers 30 jobs a month, and paid plans step up by job volume.',
    'Forgetting materials. Make sure the parts you buy for a job land on the invoice.',
  ],

  faqs: [
    {
      question: 'What is the best software for a handyman business?',
      answer:
        'Jobber lists handyman among its industries, from $29 a month billed annually. ServiceTitan and Workiz have handyman pages (quote only). For a low price, ServiceM8 is free for 30 jobs a month, Markate is $49.95 a month and Kickserv is $60 a month for 5 users.',
    },
    {
      question: 'How much does handyman software cost?',
      answer:
        'ServiceM8 is $0 for 30 jobs a month, then $29 to $349 a month by job volume. Jobber starts at $29 and Housecall Pro at $59 a month, billed annually. Markate is $49.95 a month, and Kickserv is $60, $119 or $199 a month for 5, 10 or 20 users.',
    },
    {
      question: 'Is there free handyman software?',
      answer:
        'ServiceM8’s Free plan is $0 for one user and 30 jobs a month, and includes quotes, invoicing, scheduling, online booking, time tracking and QuickBooks Online sync.',
    },
    {
      question: 'Which handyman software tracks time on the job?',
      answer:
        'ServiceM8 tracks time on site on every plan, Kickserv includes time tracking from Start ($60 a month), and Markate lists time tracking as included. ServiceTitan’s handyman estimates calculate costs for time, materials and margins.',
    },
    {
      question: 'Can customers book a handyman online?',
      answer:
        'Yes. ServiceM8 includes online bookings on every plan, Jobber has online booking on every plan, Housecall Pro from Basic, and ServiceTitan lets customers book online, via chat or phone. Markate charges $10 a month for online booking.',
    },
    {
      question: 'Which handyman software works with QuickBooks?',
      answer:
        'ServiceTitan lists QuickBooks Online, Desktop Premier and Desktop Enterprise. Kickserv includes QuickBooks Online and offers Desktop for $50 a month on Run. Jobber and ServiceM8 sync with QuickBooks Online, and Housecall Pro lists Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-21',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan handyman software', url: 'https://www.servicetitan.com/industries/handyman-service-software', checked: '2026-11-21' },
    { name: 'Workiz handyman software', url: 'https://www.workiz.com/industries/handyman/', checked: '2026-11-21' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Jobber pricing (plans, quotes, online booking, QuickBooks)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Jobber homepage (industries list includes handyman)', url: 'https://www.getjobber.com/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Commusoft industries (no handyman)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'Markate handyman software', url: 'https://www.markate.com/industries/handyman', checked: '2026-11-21' },
    { name: 'Markate pricing', url: 'https://www.markate.com/pricing', checked: '2026-11-21' },
    { name: 'Kickserv handyman and home improvement', url: 'https://www.kickserv.com/industries/handyman-and-home-improvement', checked: '2026-11-21' },
    { name: 'Kickserv pricing', url: 'https://www.kickserv.com/pricing', checked: '2026-11-21' },
    { name: 'ServiceM8 pricing', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-21' },
  ],
}
