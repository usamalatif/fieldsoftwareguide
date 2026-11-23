import type { Industry } from '@/lib/industries'

/**
 * Window cleaning: VERIFIED (researched 2026-11-23, batch 6 draft).
 * Workiz /industries/window-cleaning/: estimates in minutes, Good/Better/Best proposals, recurring
 * maintenance revenue, team assignment by traffic and expertise, Stripe and Sunbit payments, QuickBooks
 * sync; no per-pane quoting, gutters or autopay named. Housecall Pro help center: daily, weekly,
 * monthly, yearly and custom recurring jobs (4 or 8 week interval not stated); Optimize by Drive Time
 * on MAX only; its window page was not fetched. ServiceTitan, FieldPulse and Commusoft window URLs 404.
 * Jobber: window cleaning not in its homepage list; its page was not fetched. help.workiz.com 403.
 * QuoteIQ window page: per window and per pane rates on every plan, recurring jobs on every plan,
 * InstaQuote and Auto Optimize routes on Elite and up, card on file billing on every plan, QuickBooks
 * Online on Pro and up, MapMeasure Pro for gutters from Beginner; prices from 2026-11-21 ($29.99 to
 * $699.99 a month). ResponsiBid homepage: instant quotes on your website, self-scheduling, card or ACH,
 * deposits, connects to Jobber and Housecall Pro; prices from 2026-11-21. Squeegee is UK focused (GBP,
 * VAT, GoCardless), rounds and optimised routes, "from £15.83/mo + VAT", no QuickBooks named.
 */
export const windowCleaning: Industry = {
  slug: 'window-cleaning',
  name: 'Window Cleaning',
  icon: '🪟',
  category: 'Field Services',
  metaDescription:
    'Compare window cleaning software for per-pane quotes, instant online quotes, recurring rounds, routes, autopay and QuickBooks. Verified vendor prices.',
  datePublished: '2026-11-23',

  answer:
    'Window cleaners live on repeat rounds, so recurring jobs, tight routes and automatic payment matter most. Workiz is the only big field service tool we checked with a window cleaning page: fast estimates, recurring maintenance work, payments in the field and QuickBooks sync (quote only). QuoteIQ is built for exterior cleaning and stores per window and per pane rates on every plan, from $29.99 a month; customer self-quoting and route optimization come on Elite ($299.99). ResponsiBid puts an instant quote on your website and connects to Jobber and Housecall Pro, with a free Startup plan. Squeegee runs rounds and direct debit for UK window cleaners, from £15.83 a month plus VAT.',

  intro:
    'A window cleaning business sells by the pane or the window, then keeps customers on a round every few weeks or months. The software has to price glass the same way every time, put recurring visits on the right day, order the stops to cut drive time and take payment without chasing. Many window cleaners also sell gutter cleaning, solar panel cleaning and pressure washing, so check that the tool can quote those too. Most owners start solo, so the price for one user matters.',

  keyFeatures: [
    'Per-pane and per-window price book',
    'Instant quotes and booking from your website',
    'Recurring rounds every few weeks or months',
    'Route optimization for the day’s stops',
    'Card on file, autopay and payment links',
    'Add-on services like gutters, and QuickBooks sync',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Generalist FSM: Jobber from $29/mo (Core, 1 user) and Housecall Pro from $59/mo (Basic, 1 user), billed annually. Exterior cleaning tools: QuoteIQ $29.99 to $699.99 a month billed monthly (1 to 20 users, $25 per extra user); ResponsiBid quoting from free, with paid plans at $179 and $229 a month plus a setup fee; Squeegee (UK) from £15.83 a month plus VAT. Workiz, which has a window cleaning page, is quote only.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 8,

  providers: [
    {
      slug: 'workiz',
      positioning: 'Window cleaning page with recurring work and field payments',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Window cleaning crews that want one tool for estimates, recurring work and payments',
        strengths: [
          'Estimates in minutes and Good, Better, Best proposals',
          'Recurring maintenance work for slow months; team assignment by traffic and expertise',
          'Payments in the field through Stripe and Sunbit; QuickBooks sync of invoices and payments',
        ],
        limitations: [
          'Every plan is “Request pricing”; service plans are on Ultimate',
          'Its window page names no per-pane quoting, gutter work or autopay',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; custom recurring jobs',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small window cleaning businesses that want online booking and a known price',
        strengths: [
          'Daily, weekly, monthly, yearly and custom recurring jobs',
          'Online booking from Basic; QuickBooks Online and Desktop on Essentials',
          'Optimize by Drive Time reorders a tech’s jobs for the day on MAX',
        ],
        limitations: [
          'We could not check its window cleaning page; per-pane quoting not confirmed',
          'Its help center does not say whether custom recurrence covers every 4 or 8 weeks',
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
          'Window cleaning is not in its homepage industry list, and we could not check a window page',
          'Per-pane quoting and round intervals not confirmed',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo window cleaner starting out', pick: 'QuoteIQ Essentials ($29.99/mo, 1 user)', why: 'Per window and per pane rates, recurring jobs and card on file billing on every plan. Route optimization needs Elite.' },
    { size: 'Business that sells from its website', pick: 'ResponsiBid (Startup free; Scaling $179/mo)', why: 'Customers get a quote on your website and self-schedule from it. It connects to Jobber and Housecall Pro for job management.' },
    { size: 'UK window cleaner on rounds', pick: 'Squeegee (from £15.83/mo + VAT)', why: 'Groups jobs into rounds, optimises routes and collects direct debit through GoCardless on all plans.' },
    { size: 'Small crew that wants a known US price', pick: 'Jobber Connect ($99/mo) or Housecall Pro Essentials ($149/mo), billed annually', why: 'Recurring jobs, online booking and QuickBooks. Jobber adds route optimization on Connect; Housecall Pro needs MAX for it.' },
    { size: 'Multi-crew company', pick: 'QuoteIQ Elite ($299.99/mo, 10 users) or Workiz (custom quote)', why: 'QuoteIQ adds InstaQuote and route optimization; Workiz has a window cleaning page with recurring work and QuickBooks sync.' },
  ],

  extraSections: [
    {
      id: 'window-quotes-rounds',
      heading: 'Per-pane quotes, rounds and autopay: what to test in a demo',
      paragraphs: [
        'Start with pricing. QuoteIQ keeps per window and per pane rates in its price book so every quote uses the same rate for the same glass, and its MapMeasure Pro measures gutters and roofs you sell beside the windows. ResponsiBid puts an instant quote on your website. None of the six generalist tools we cover names per-pane pricing, so build a real house quote in the trial.',
        'Then set up a round. Squeegee groups jobs into rounds and gives a four-weekly clean as an example, QuoteIQ includes recurring jobs on every plan, and Housecall Pro offers custom recurring jobs. Check that a visit every 4 or 8 weeks lands on the right day for a year, and that the customer’s card or direct debit is charged when the job is done. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Pricing by eye. A per-pane price book keeps quotes consistent across your team.',
    'Testing only one-off jobs. Set up a real 4 or 8 week round in the trial before you commit.',
    'Chasing payments after every visit. Use card on file or direct debit so customers are charged when the work is done.',
    'Choosing a UK tool for a US business without checking. Squeegee prices in pounds plus VAT and names no QuickBooks integration.',
  ],

  faqs: [
    {
      question: 'What is the best software for a window cleaning business?',
      answer:
        'Workiz has a window cleaning page with recurring work and QuickBooks sync (quote only). QuoteIQ is built for exterior cleaning, with per-pane rates from $29.99 a month. ResponsiBid adds instant website quotes and connects to Jobber and Housecall Pro.',
    },
    {
      question: 'How much does window cleaning software cost?',
      answer:
        'QuoteIQ costs $29.99 to $699.99 a month billed monthly, plus $25 per extra user. Jobber starts at $29 and Housecall Pro at $59 a month, billed annually. ResponsiBid has a free plan and paid plans at $179 and $229 a month. Squeegee (UK) starts at £15.83 a month plus VAT.',
    },
    {
      question: 'Which window cleaning software quotes per pane?',
      answer:
        'QuoteIQ stores per window and per pane rates in its price book on every plan. None of the six generalist tools we cover names per-pane pricing on its pages.',
    },
    {
      question: 'Can window cleaning software run rounds every 4 or 8 weeks?',
      answer:
        'Squeegee groups jobs into rounds and uses a four-weekly clean as an example. QuoteIQ includes recurring jobs on every plan, and Housecall Pro offers custom recurring jobs, though its help center does not state the intervals.',
    },
    {
      question: 'Which window cleaning software takes automatic payments?',
      answer:
        'QuoteIQ charges a customer’s saved card on every plan. Squeegee collects direct debit through GoCardless on all plans and card on file on Advanced and above. Jobber offers automatic payments from Connect.',
    },
    {
      question: 'Which window cleaning software works with QuickBooks?',
      answer:
        'Workiz says it fully integrates with QuickBooks, and QuoteIQ includes QuickBooks Online on Pro and up. Jobber offers QuickBooks Online from Connect, and Housecall Pro lists Online and Desktop on Essentials. Squeegee names Xero, not QuickBooks.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'Workiz window cleaning software', url: 'https://www.workiz.com/industries/window-cleaning/', checked: '2026-11-23' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Housecall Pro help: create a recurring job', url: 'https://help.housecallpro.com/en/articles/2789168-create-a-recurring-job', checked: '2026-11-23' },
    { name: 'Housecall Pro help: optimize by drive time (MAX)', url: 'https://help.housecallpro.com/en/articles/14093813-optimize-by-drive-time', checked: '2026-11-23' },
    { name: 'Jobber pricing (plans, online booking, routes, QuickBooks)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Commusoft industries (no window cleaning)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'QuoteIQ window cleaning software', url: 'https://myquoteiq.com/industries/window-cleaning/', checked: '2026-11-23' },
    { name: 'QuoteIQ pricing', url: 'https://myquoteiq.com/pricing/', checked: '2026-11-21' },
    { name: 'ResponsiBid', url: 'https://responsibid.com/', checked: '2026-11-23' },
    { name: 'ResponsiBid pricing', url: 'https://responsibid.com/pricing/', checked: '2026-11-21' },
    { name: 'Squeegee window cleaning software', url: 'https://squeeg.ee/landing-pages/are-you-a-window-cleaner/', checked: '2026-11-23' },
    { name: 'Squeegee pricing', url: 'https://squeeg.ee/pricing', checked: '2026-11-23' },
    { name: 'Squeegee payments', url: 'https://squeeg.ee/payments', checked: '2026-11-23' },
  ],
}
