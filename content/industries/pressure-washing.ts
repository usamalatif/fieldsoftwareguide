import type { Industry } from '@/lib/industries'

/**
 * Pressure washing: VERIFIED (researched 2026-11-21, batch 5 draft).
 * Workiz /industries/pressure-washing/: service plans for recurring revenue, Good|Better|Best
 * proposals, route planning, "fully integrates with QuickBooks"; no measurement quoting, photo or
 * weather features named. Jobber: pressure washing is in its homepage industries list (page itself
 * not fetched, getjobber.com blocks us). Housecall Pro: www not fetched, so no feature claimed.
 * ServiceTitan (27-trade index), Commusoft (10 industries) and FieldPulse (/industries/pressure-washing
 * 404) have no pressure washing page. Exterior-cleaning tools: QuoteIQ publishes monthly prices
 * ($29.99 to $699.99, $25 per extra user), MapMeasure Pro satellite measuring from Beginner, InstaQuote
 * and InstaSchedule on Elite and Max, weather forecasts on every plan (no automatic rescheduling).
 * ResponsiBid is a quoting tool: Startup free, Scaling $179, Pro $229 a month plus a setup fee with no
 * amount shown. Markate $49.95 a month ($45.95 billed annually), online booking add-on $10 a month.
 * Ignored: QuoteIQ countdown promo code, QuoteIQ competitor "alternative" pages, search-snippet claims
 * about Housecall Pro's pressure washing page.
 */
export const pressureWashing: Industry = {
  slug: 'pressure-washing',
  name: 'Pressure Washing',
  icon: '💦',
  category: 'Field Services',
  metaDescription:
    'Compare pressure washing software for quotes, satellite measuring, online booking, recurring house washes, routes and QuickBooks. Verified vendor prices.',
  datePublished: '2026-11-21',

  answer:
    'Pressure washing companies need fast quotes, recurring work for the slow months and tight routes. Workiz has a pressure washing page with service plans, Good, Better, Best proposals and route planning (quote only), and Jobber lists pressure washing among its industries with plans from $29 a month billed annually. QuoteIQ is built for exterior cleaning: plans run from $29.99 to $699.99 a month, satellite measuring starts on the $99.99 Beginner plan, and customer self-quoting and online booking come on Elite ($299.99). ResponsiBid is a website quoting tool with a free Startup plan and paid plans at $179 and $229 a month. No tool we checked reschedules jobs automatically when rain is forecast.',

  intro:
    'A pressure washing or soft washing business sells driveways, house washes, roofs, decks and commercial flatwork, often to customers who want a price before anyone visits. The software has to turn square footage or a photo into a quote quickly, book the job, put the day’s washes in a sensible route and bring customers back every year. Before and after photos help close the next sale, and rain can wipe out a whole day, so check how each tool handles rescheduling. Many owners start solo, so the price for one user matters as much as the features.',

  keyFeatures: [
    'Fast quotes from measurements, photos or a website calculator',
    'Online booking so customers can schedule themselves',
    'Recurring jobs for annual house washes and commercial routes',
    'Route planning to cut drive time between jobs',
    'Before and after photos on jobs and quotes',
    'Invoicing, card payments and QuickBooks sync',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Generalist FSM plans start at $29/mo (Jobber Core, 1 user) and $59/mo (Housecall Pro Basic, 1 user), billed annually. Exterior cleaning tools: QuoteIQ $29.99 to $699.99 a month billed monthly (1 to 20 users, $25 per extra user); Markate $49.95 a month or $45.95 billed annually; ResponsiBid quoting from free, with paid plans at $179 and $229 a month plus a setup fee. Workiz is quote only.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 7,

  providers: [
    {
      slug: 'workiz',
      positioning: 'Pressure washing page with service plans and route planning',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Growing crews that want recurring service plans and planned routes',
        strengths: [
          'Its pressure washing page pitches service plans to get recurring revenue all year round',
          'Good, Better, Best proposals with multiple price options',
          'Route planning; its FAQ says it fully integrates with QuickBooks',
        ],
        limitations: [
          'Every plan is “Request pricing”, and service plans are on Ultimate',
          'Its pressure washing page names no measurement quoting, photo or weather feature',
        ],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Lowest published generalist price; lists pressure washing among its industries',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Owner-operators that want quotes, booking and invoicing at a known price',
        strengths: [
          'Published plans from $29/month billed annually; online booking and quotes on every plan',
          'Route optimization, automatic payments and QuickBooks Online from Connect',
        ],
        limitations: [
          'Its pressure washing page blocked our checks, so we list no pressure washing feature',
          'QuickBooks Desktop is not supported',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price, online booking from Basic',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small crews that want online booking and a published monthly price',
        strengths: [
          'Online booking from Basic; QuickBooks Online and Desktop on Essentials',
          'Recurring Service Plans and route optimization on MAX',
        ],
        limitations: [
          'We could not check its pressure washing page, so no pressure washing feature is listed',
          'Recurring service plans need MAX ($299/mo billed annually)',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo washer, quotes by phone and text', pick: 'QuoteIQ Essentials ($29.99/mo, 1 user)', why: 'Built for exterior cleaning, with recurring jobs and weather forecasts on every plan. Satellite measuring needs Beginner.' },
    { size: 'Owner plus a helper who measures from the office', pick: 'QuoteIQ Beginner ($99.99/mo, 2 users)', why: 'Adds MapMeasure Pro satellite measuring for driveways, roofs and fence lines, plus a before and after photo editor.' },
    { size: 'Small crew on a tight budget', pick: 'Markate ($49.95/mo, or $45.95 billed annually)', why: 'Has a pressure washing page with an AI estimator and recurring work orders. Online booking is a $10/mo add-on.' },
    { size: 'Business that sells from its website', pick: 'ResponsiBid (Startup free; Scaling $179/mo)', why: 'A quoting calculator on your website lets customers price their own job and schedule themselves. It quotes, so pair it with job management software.' },
    { size: 'Multi-crew company with commercial routes', pick: 'Workiz (custom quote) or Jobber Connect ($99/mo)', why: 'Workiz pitches service plans and route planning for pressure washing; Jobber adds route optimization from Connect.' },
  ],

  extraSections: [
    {
      id: 'pressure-washing-quotes-weather',
      heading: 'Quotes, recurring work and rain days: what to test in a demo',
      paragraphs: [
        'Start with a real quote. QuoteIQ’s MapMeasure Pro measures driveways, roofs and fence lines on a satellite map, from its Beginner plan. Markate offers an AI estimator that prices a job from photos or details, and ResponsiBid puts a quoting calculator on your website so customers can price their own job. Workiz and Jobber offer quotes and proposals, but none of the six generalist tools we cover names satellite measuring. Time how long a house wash quote takes from first call to sent price.',
        'Then check recurring work and rain days. Workiz pitches service plans to fill slow months, QuoteIQ includes recurring jobs on every plan, and Housecall Pro puts Recurring Service Plans on MAX. No tool we checked reschedules jobs automatically when rain is forecast; QuoteIQ shows forecasts on the calendar, so you still move jobs by hand. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Driving to every job to measure. If most quotes are driveways and house washes, test satellite measuring first.',
    'Buying a quoting tool and expecting dispatch, invoicing and routes. ResponsiBid quotes and books; it connects to Jobber and Housecall Pro for the rest.',
    'Forgetting repeat customers. Set up recurring jobs or service plans so annual washes come back without a phone call.',
    'Assuming weather rescheduling is automatic. No tool we checked moves jobs on its own when rain is forecast.',
  ],

  faqs: [
    {
      question: 'What is the best software for a pressure washing business?',
      answer:
        'Workiz has a pressure washing page with service plans and route planning (quote only). Jobber lists pressure washing among its industries, from $29 a month billed annually. QuoteIQ is built for exterior cleaning, from $29.99 a month, with satellite measuring from the $99.99 Beginner plan.',
    },
    {
      question: 'How much does pressure washing software cost?',
      answer:
        'QuoteIQ costs $29.99 to $699.99 a month billed monthly, plus $25 per extra user. Markate is $49.95 a month or $45.95 billed annually. Jobber starts at $29 and Housecall Pro at $59 a month, billed annually. ResponsiBid quoting has a free plan and paid plans at $179 and $229 a month.',
    },
    {
      question: 'Which pressure washing software measures properties by satellite?',
      answer:
        'QuoteIQ’s MapMeasure Pro measures driveways, roofs and fence lines on a satellite map, on the Beginner plan ($99.99 a month) and above. None of the six generalist tools we cover names satellite measuring.',
    },
    {
      question: 'Can customers get an instant quote online?',
      answer:
        'Yes. ResponsiBid installs a quoting calculator on your website so customers can get their own quote, and QuoteIQ’s InstaQuote lets customers create estimates themselves on its Elite ($299.99) and Max plans.',
    },
    {
      question: 'Does pressure washing software reschedule jobs for rain?',
      answer:
        'Not automatically, in any tool we checked. QuoteIQ shows built-in weather forecasts on the calendar on every plan, so you can see rain coming and move jobs by hand.',
    },
    {
      question: 'Which pressure washing software works with QuickBooks?',
      answer:
        'Workiz says it fully integrates with QuickBooks. QuoteIQ includes QuickBooks Online on Pro and above, Jobber offers QuickBooks Online from Connect, and Housecall Pro lists QuickBooks Online and Desktop on Essentials. Markate lists a QuickBooks integration.',
    },
  ],

  lastUpdated: '2026-11-21',
  dataVerified: true,
  sources: [
    { name: 'Workiz pressure washing software', url: 'https://www.workiz.com/industries/pressure-washing/', checked: '2026-11-21' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Jobber pricing (plans, online booking, routes, QuickBooks)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Jobber homepage (industries list includes pressure washing)', url: 'https://www.getjobber.com/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'ServiceTitan industries (no pressure washing)', url: 'https://www.servicetitan.com/industries', checked: '2026-11-21' },
    { name: 'Commusoft industries (no pressure washing)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'QuoteIQ pricing', url: 'https://myquoteiq.com/pricing/', checked: '2026-11-21' },
    { name: 'QuoteIQ pressure washing software', url: 'https://myquoteiq.com/pressure-washing-software/', checked: '2026-11-21' },
    { name: 'ResponsiBid pricing', url: 'https://responsibid.com/pricing/', checked: '2026-11-21' },
    { name: 'Markate pressure washing software', url: 'https://www.markate.com/industries/pressure_wash', checked: '2026-11-21' },
    { name: 'Markate pricing', url: 'https://www.markate.com/pricing', checked: '2026-11-21' },
  ],
}
