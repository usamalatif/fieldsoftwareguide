import type { Industry } from '@/lib/industries'

/**
 * Irrigation: VERIFIED (researched 2026-11-23, batch 8 draft). Landscaping has its own page.
 * ServiceTitan /industries/irrigation-business-software: memberships for start-ups and winterization,
 * bulk booking to schedule thousands of appointments months in advance, recurring services, equipment
 * service histories, inventory reporting, route-visualization map and route optimization, QuickBooks
 * Online and Desktop; no backflow or zone records named. Workiz, FieldPulse and Commusoft irrigation
 * URLs 404. Jobber: irrigation not in its homepage list. Housecall Pro: irrigation page seen in search
 * only (not fetched); its help center has no irrigation or backflow articles. Irrigation tools: QuoteIQ
 * irrigation page: zone-by-zone quotes, photo record per system, recurring jobs and billing on every
 * plan, backflow test and zone check reports from Beginner, winterization text blasts, inventory and
 * route optimization on Elite, QuickBooks Online on Pro; $29.99 to $699.99 a month. Syncta (Watts):
 * backflow testing tool that submits reports on purveyor forms, test scheduling, reminders, routing;
 * plans Pay As You Go, Per Tester, Unlimited, no prices published. SingleOps irrigation help article
 * failed (SSL) and Service Autopilot prices did not load, so neither is used. No vendor confirms
 * controller records or truck-level inventory.
 */
export const irrigation: Industry = {
  slug: 'irrigation',
  name: 'Irrigation',
  icon: '💧',
  category: 'Field Services',
  metaDescription:
    'Compare irrigation software for spring start-ups, winterizations, zone quotes, backflow test reports, routes and QuickBooks. Verified vendor prices.',
  datePublished: '2026-11-23',

  answer:
    'Irrigation contractors live on two rushes, spring start-ups and fall winterizations, so mass scheduling, recurring plans and routes matter most. ServiceTitan has an irrigation page with memberships for start-ups and winterization, bulk booking of thousands of appointments months ahead, route optimization and QuickBooks Online and Desktop (quote only). QuoteIQ has an irrigation page with zone-by-zone quotes and recurring jobs on every plan, backflow test reports from its $99.99 Beginner plan and route optimization on Elite ($299.99). For backflow testing as its own line of business, Syncta by Watts submits test reports on the forms water purveyors require (quote only).',

  intro:
    'An irrigation business installs systems, then services them on a seasonal cycle: spring start-ups, mid-season repairs and fall winterizations or blowouts, often for hundreds of customers in a few weeks. Many also test backflow preventers, which means filing reports with the local water authority. The software has to book the rush fast, keep a record of each property’s zones and equipment, route crews tightly and bill service plans. Check how each tool handles backflow paperwork before you commit.',

  keyFeatures: [
    'Spring start-up and winterization scheduling in bulk',
    'Service plans and recurring billing',
    'Zone-by-zone quotes and property records',
    'Backflow test reports for water purveyors',
    'Parts inventory for heads, valves and fittings',
    'Route optimization and QuickBooks sync',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Generalist FSM: Jobber from $29/mo (Core, 1 user) and Housecall Pro from $59/mo (Basic, 1 user), billed annually; neither has a confirmed irrigation page. Irrigation tools: QuoteIQ $29.99 to $699.99 a month billed monthly (1 to 20 users, $25 per extra user); Syncta backflow plans are not priced publicly. ServiceTitan, which has an irrigation page, is quote only.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 8,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Irrigation page with start-up and winterization memberships and bulk booking',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger irrigation companies that book hundreds of seasonal visits',
        strengths: [
          'Memberships for start-ups and winterization; plan recurring services from contracts',
          'Bulk booking to schedule thousands of appointments months in advance',
          'Route optimization, equipment service histories and QuickBooks Online and Desktop',
        ],
        limitations: [
          'No published price; packages are behind one “Get Pricing” button',
          'Its irrigation page does not mention backflow reports or zone records',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; recurring plans and equipment tracking',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small sprinkler service companies that want a known monthly price',
        strengths: [
          'Customer equipment tracking, flat-rate pricing and QuickBooks Online and Desktop on Essentials',
          'Recurring Service Plans and route optimization on MAX',
        ],
        limitations: [
          'We could not check its irrigation page, and its help center has no irrigation or backflow articles',
          'Recurring service plans need MAX ($299/mo billed annually)',
        ],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Lowest published generalist price',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Owner-operators that want quotes, scheduling and invoicing at a known price',
        strengths: [
          'Published plans from $29/month billed annually; quotes and online booking on every plan',
          'Route optimization and QuickBooks Online from Connect',
        ],
        limitations: [
          'Irrigation is not in its homepage industry list, and we could not check an irrigation page',
          'No backflow reports or zone records confirmed',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo sprinkler tech', pick: 'QuoteIQ Essentials ($29.99/mo, 1 user)', why: 'Zone-by-zone quotes and recurring jobs on every plan. Backflow reports start on Beginner.' },
    { size: 'Irrigation company that tests backflow', pick: 'QuoteIQ Beginner ($99.99/mo, 2 users)', why: 'Adds inspection forms and reports for zone checks and backflow tests.' },
    { size: 'Backflow testing as its own business', pick: 'Syncta by Watts (custom quote)', why: 'Submits test results on the forms water purveyors require, with test scheduling, reminders and routing.' },
    { size: 'Crew running the fall rush', pick: 'QuoteIQ Elite ($299.99/mo, 10 users)', why: 'Winterization text blasts, inventory for heads and valves, and route optimization.' },
    { size: 'Large company with memberships', pick: 'ServiceTitan (custom quote)', why: 'Start-up and winterization memberships, bulk booking months ahead and QuickBooks Desktop support.' },
  ],

  extraSections: [
    {
      id: 'irrigation-season-backflow',
      heading: 'Start-ups, winterizations and backflow: what to test',
      paragraphs: [
        'Load last fall’s customer list and book the whole winterization run. ServiceTitan says it can schedule thousands of appointments months in advance with bulk booking and tags, and QuoteIQ opens winterization booking with one text blast on Elite. Then route the work: ServiceTitan and QuoteIQ Elite both optimize routes. Check that each property keeps its zones, photos and equipment history for the next visit.',
        'If you test backflow preventers, check the paperwork. QuoteIQ includes backflow test reports from Beginner, and Syncta by Watts is built for testers, submitting results on the forms your water purveyor requires. ServiceTitan’s irrigation page does not mention backflow, so ask how its forms would handle your local report. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Booking the fall rush by phone. Use bulk booking or text blasts to fill winterization routes.',
    'Losing zone details. Keep each property’s zones and photos so the next tech knows the system.',
    'Filing backflow reports by hand. Choose a tool that produces reports on your water purveyor’s form.',
    'Skipping service plans. Sell start-up and winterization as one plan so customers come back each season.',
  ],

  faqs: [
    {
      question: 'What is the best software for an irrigation business?',
      answer:
        'ServiceTitan has an irrigation page with start-up and winterization memberships and bulk booking (quote only). QuoteIQ has an irrigation page with zone quotes, backflow reports and routes, from $29.99 a month.',
    },
    {
      question: 'How much does irrigation software cost?',
      answer:
        'QuoteIQ costs $29.99 to $699.99 a month billed monthly, plus $25 per extra user. Jobber starts at $29 and Housecall Pro at $59 a month, billed annually. ServiceTitan and Syncta do not publish prices.',
    },
    {
      question: 'Which irrigation software handles backflow test reports?',
      answer:
        'QuoteIQ includes inspection reports for zone checks and backflow tests from its Beginner plan. Syncta by Watts submits backflow test results on the forms water purveyors require. ServiceTitan’s irrigation page does not mention backflow.',
    },
    {
      question: 'Can irrigation software schedule winterizations in bulk?',
      answer:
        'Yes. ServiceTitan says it can schedule thousands of appointments months in advance with bulk booking, and QuoteIQ sends winterization booking text blasts on Elite and up.',
    },
    {
      question: 'Does irrigation software store zone records?',
      answer:
        'QuoteIQ quotes systems zone by zone and keeps a photo record of every system. ServiceTitan keeps equipment service histories. No tool we checked names controller-level records.',
    },
    {
      question: 'Which irrigation software works with QuickBooks?',
      answer:
        'ServiceTitan integrates with QuickBooks Online and Desktop. QuoteIQ includes QuickBooks Online on Pro and up, Jobber offers it from Connect, and Housecall Pro lists Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan irrigation business software', url: 'https://www.servicetitan.com/industries/irrigation-business-software', checked: '2026-11-23' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Housecall Pro help center (no irrigation or backflow articles)', url: 'https://help.housecallpro.com/en/', checked: '2026-11-23' },
    { name: 'Jobber pricing (plans, routes, QuickBooks)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Workiz industries (no irrigation)', url: 'https://www.workiz.com/industries/', checked: '2026-11-23' },
    { name: 'Commusoft industries (no irrigation)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'QuoteIQ irrigation software (features and prices)', url: 'https://myquoteiq.com/industries/irrigation-software/', checked: '2026-11-23' },
    { name: 'Syncta by Watts for backflow testers', url: 'https://www.syncta.com/backflow-testers', checked: '2026-11-23' },
  ],
}
