import type { Industry } from '@/lib/industries'

/**
 * Mosquito control: VERIFIED (researched 2026-11-23, batch 9 draft). General pest control has its own page.
 * None of the six FSM vendors has a mosquito page: ServiceTitan mosquito URL 404 (its pest page: recurring
 * service agreements, chemical logging in the Field App with compliance fields, intelligent routing);
 * FieldPulse pest page (seasonal service agreements, chemicals used per visit, treatment log checklists;
 * no mosquito mention); Workiz has no pest page; Commusoft none; Jobber and Housecall Pro not fetched.
 * Housecall Pro help center: material quantity reports (no EPA fields). Mosquito tools: GorillaDesk
 * mosquito page: treatments every 14, 21 or 30 days, season scheduling, product library with EPA
 * registration numbers and batch info via the Material Usage add-on (price not stated), rain delay
 * handling, route optimization, autopay, QuickBooks Online (from Pro per pricing page); $49, $99, $149 a
 * month per route. QuoteIQ mosquito page: season programs, rain-day rescheduling, usage tab with product,
 * rate, area and applicator, wind reading above label limit stops the save, Auto Optimize routes,
 * recurring season invoices, QuickBooks Online on Pro; $29.99 to $699.99 a month. FieldRoutes: no
 * mosquito page; pest page with recurring contracts, weather in scheduling, route optimization, AutoPay,
 * QuickBooks Online; priced by active customers, not published. No vendor page mentions tick programs.
 */
export const mosquitoControl: Industry = {
  slug: 'mosquito-control',
  name: 'Mosquito Control',
  icon: '🦟',
  category: 'Field Services',
  metaDescription:
    'Compare mosquito control software for 21-day spray programs, chemical and EPA records, wind checks, routes, autopay and QuickBooks. Verified prices.',
  datePublished: '2026-11-24',

  answer:
    'Mosquito companies run season-long spray programs, so recurring treatments, chemical records, routes and autopay matter most. None of the six big field service tools we cover has a mosquito page, though ServiceTitan and FieldPulse have pest control pages with chemical logging and seasonal agreements (quote only). GorillaDesk has a mosquito page with treatments every 14, 21 or 30 days, autopay and a product library with EPA registration numbers through its Material Usage add-on, from $49 a month per route. QuoteIQ has a mosquito page that blocks saving an application when wind is above the label limit, from $29.99 a month. FieldRoutes covers pest and mosquito work with weather-aware scheduling (quote only).',

  intro:
    'A mosquito control business sells a season: a barrier spray every few weeks from spring until the first cold snap, often on autopay. The software has to schedule the whole season at once, route trucks tightly, move a day’s sprays when it rains and record what was applied, where and how much, for state pesticide rules. Wind matters too, because spraying above the label limit is a compliance problem. If you also do general pest work, see our pest control page.',

  keyFeatures: [
    'Season programs with treatments every 14 to 30 days',
    'Chemical records with product, amount and EPA number',
    'Wind and weather checks before spraying',
    'Rain-day rescheduling of the whole route',
    'Route optimization for spray trucks',
    'Autopay for season plans and QuickBooks sync',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Mosquito tools: QuoteIQ $29.99 to $699.99 a month billed monthly (1 to 20 users); GorillaDesk $49, $99 or $149 a month per route, with chemical tracking as a paid add-on; FieldRoutes priced by active customers, not published. Generalist FSM: Jobber from $29/mo and Housecall Pro from $59/mo, billed annually. ServiceTitan and FieldPulse, which have pest pages, are quote only.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 9,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Pest control page with chemical logging and recurring agreements',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Large pest companies that also run mosquito programs',
        strengths: [
          'Log chemicals in the Field App with compliance fields',
          'Recurring service agreements and intelligent routing by stops, skills and zones',
        ],
        limitations: [
          'No mosquito page (its mosquito URL returns not found); no published price',
          'Wind or weather logging is not described on its pest page',
        ],
      },
    },
    {
      slug: 'fieldpulse',
      positioning: 'Pest control page with seasonal agreements and treatment logs',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Pest and mosquito companies that want custom treatment checklists',
        strengths: [
          'Schedules routine visits for monthly or seasonal service agreements',
          'Tracks labor, chemicals and equipment per visit; custom checklists for treatment logs',
        ],
        limitations: [
          'No mosquito page; seat-based pricing is not published',
          'No EPA number fields or wind logging confirmed',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; recurring plans and material reports',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small mosquito businesses that want a known monthly price',
        strengths: [
          'Recurring Service Plans and route optimization on MAX; QuickBooks Online and Desktop on Essentials',
          'Material reports show quantities used on jobs',
        ],
        limitations: [
          'We could not check a mosquito page; no EPA fields or weather logging confirmed',
          'Recurring service plans need MAX ($299/mo billed annually)',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo sprayer starting out', pick: 'QuoteIQ Essentials ($29.99/mo, 1 user)', why: 'Mosquito page with season programs, a usage tab and a wind check before saving an application. QuickBooks Online needs Pro.' },
    { size: 'Owner with one truck and many 21-day customers', pick: 'GorillaDesk Pro ($99/mo, 1 route)', why: 'Treatments every 14, 21 or 30 days, autopay and QuickBooks Online. Chemical tracking with EPA numbers is a paid add-on.' },
    { size: 'Company that needs state chemical records', pick: 'GorillaDesk with Material Usage add-on', why: 'Records product, EPA number, amount, method, target pests and area, and prints them on the work order.' },
    { size: 'Growing pest and mosquito company', pick: 'FieldRoutes (custom quote)', why: 'Weather-aware scheduling, route optimization, AutoPay and QuickBooks Online, priced by active customers.' },
    { size: 'Large pest company adding mosquito', pick: 'ServiceTitan or FieldPulse (custom quote)', why: 'Pest pages with chemical logging and seasonal agreements, though neither has a mosquito page.' },
  ],

  extraSections: [
    {
      id: 'mosquito-chemicals-weather',
      heading: 'Chemical records, wind and rain days: what to test',
      paragraphs: [
        'Record a real application. GorillaDesk’s Material Usage add-on stores each product with its EPA registration number and records quantity, unit, method, target pests and area, then prints a materials table on the work order. QuoteIQ’s usage tab totals each product applied, with rate, area and applicator, and stops the save when the wind reading is above the product’s label limit unless the applicator overrides it. ServiceTitan logs chemicals with compliance fields. Check that the record matches your state’s pesticide rules.',
        'Then cancel a spray day for rain. QuoteIQ proposes moving every job to the next day, GorillaDesk handles rain delays and resprays, and FieldRoutes factors weather into scheduling. Make sure the 21-day cycle stays on track after a move. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Scheduling sprays one by one. Set the whole season’s treatments when the customer signs up.',
    'Keeping chemical records on paper. Most states require product, amount and location for each application.',
    'Spraying in high wind. Use a tool that checks wind against the label limit before the record is saved.',
    'Chasing payments every 21 days. Put season customers on autopay.',
  ],

  faqs: [
    {
      question: 'What is the best software for a mosquito control business?',
      answer:
        'GorillaDesk and QuoteIQ both have mosquito pages with published prices, from $49 a month per route and $29.99 a month. FieldRoutes covers pest and mosquito work (quote only). None of the six big field service tools we cover has a mosquito page.',
    },
    {
      question: 'How much does mosquito control software cost?',
      answer:
        'QuoteIQ costs $29.99 to $699.99 a month billed monthly. GorillaDesk is $49, $99 or $149 a month per route, with chemical tracking as an add-on. Jobber starts at $29 and Housecall Pro at $59 a month, billed annually. FieldRoutes does not publish prices.',
    },
    {
      question: 'Can mosquito software schedule 21-day treatments for the season?',
      answer:
        'Yes. GorillaDesk handles recurring treatments every 14, 21 or 30 days and can schedule the entire season in a few clicks. QuoteIQ sets up season programs with a recurring invoice, and FieldRoutes automates scheduling for ongoing contracts.',
    },
    {
      question: 'Which mosquito software records EPA numbers?',
      answer:
        'GorillaDesk’s Material Usage add-on stores materials with EPA registration numbers and records quantity, method, target pests and area. We could not confirm EPA number fields for the other tools we checked.',
    },
    {
      question: 'Does mosquito software check wind before spraying?',
      answer:
        'QuoteIQ stops the save when a wind reading is above the product’s label limit until the applicator acknowledges an override. No other tool we checked documents a wind check.',
    },
    {
      question: 'Which mosquito control software works with QuickBooks?',
      answer:
        'GorillaDesk pushes customers, invoices and payments to QuickBooks Online, QuoteIQ includes QuickBooks Online on Pro and up, and FieldRoutes lists a QuickBooks Online integration. Housecall Pro lists Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-24',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan pest control software', url: 'https://www.servicetitan.com/industries/pest-control-software', checked: '2026-11-23' },
    { name: 'FieldPulse pest control software', url: 'https://www.fieldpulse.com/solutions/field-service-pest-control', checked: '2026-11-23' },
    { name: 'Workiz industries (no pest control)', url: 'https://www.workiz.com/industries/', checked: '2026-11-23' },
    { name: 'Housecall Pro help: material inventory tracking', url: 'https://help.housecallpro.com/en/articles/7119757-material-inventory-detail-tracking', checked: '2026-11-23' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Jobber pricing (plans)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'GorillaDesk mosquito control software', url: 'https://gorilladesk.com/industries/mosquito-control-software/', checked: '2026-11-23' },
    { name: 'GorillaDesk chemical tracking', url: 'https://gorilladesk.com/features/chemical-tracking-software/', checked: '2026-11-23' },
    { name: 'GorillaDesk Material Usage add-on', url: 'https://gorilladesk.com/academy/gorilladesk-training/add-ons/material-usage/', checked: '2026-11-23' },
    { name: 'GorillaDesk pricing', url: 'https://gorilladesk.com/pricing/', checked: '2026-11-23' },
    { name: 'QuoteIQ mosquito control software', url: 'https://myquoteiq.com/industries/mosquito-control-software/', checked: '2026-11-23' },
    { name: 'QuoteIQ pricing', url: 'https://myquoteiq.com/pricing/', checked: '2026-11-23' },
    { name: 'FieldRoutes pest control software', url: 'https://www.fieldroutes.com/solutions/pest-control-software', checked: '2026-11-23' },
    { name: 'FieldRoutes pricing', url: 'https://www.fieldroutes.com/company/pricing', checked: '2026-11-23' },
  ],
}
