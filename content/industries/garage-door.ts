import type { Industry } from '@/lib/industries'

/**
 * Garage door: VERIFIED (researched 2026-11-21, batch 4 draft).
 * ServiceTitan garage door page: good-better-best options, keeps trucks stocked, equipment history,
 * recurring services, online booking, Phones Pro, QuickBooks Online; no prices. Workiz garage door
 * page: AI Answering for emergency calls, Good|Better|Best proposals, inventory, online booking,
 * consumer financing, and says QuickBooks Online and Desktop (its pricing page lists Online sync only).
 * FieldPulse /solutions/garage-door: scheduling, pre-set labor and material rates, parts tracking;
 * its own guide names equipment records and two-way QuickBooks Online sync; seat-based quote.
 * Commusoft: no garage door page. Jobber: garage door is not in its homepage industry list and
 * getjobber.com was not fetched (403 earlier). Housecall Pro: www not fetched; plan-level facts only.
 * Service Fusion (adjacent, garage door page) publishes unlimited-user plans $220/$339/$552 a month
 * billed annually ($259/$399/$649 monthly), QuickBooks Online and Desktop on every plan.
 * No garage-door-specific platform with a verifiable pricing page was found.
 */
export const garageDoor: Industry = {
  slug: 'garage-door',
  name: 'Garage Door',
  icon: '🚪',
  category: 'Trades',
  metaDescription:
    'Compare garage door software for emergency calls, good-better-best quotes, truck inventory, equipment history and financing. Verified features and prices.',
  datePublished: '2026-11-21',

  answer:
    'Garage door work is mostly urgent repairs plus installs, so phone handling, good-better-best pricing and truck parts decide the tool. ServiceTitan, Workiz and FieldPulse all market garage door software. ServiceTitan documents good-better-best options, keeping trucks stocked and equipment history (custom quote). Workiz answers emergency calls with AI Answering, offers Good, Better, Best proposals and consumer financing, and puts flat rate and equipment tracking on Ultimate (quote only). FieldPulse tracks parts and uses pre-set labor and material rates (custom quote). If you want a published price, Housecall Pro starts at $59/month billed annually and lists flat-rate pricing and equipment tracking on Essentials ($149 for up to 5 users), and Service Fusion has a garage door page and unlimited-user plans from $220/month billed annually.',

  intro:
    'A garage door company lives on the phone. A broken spring or a door stuck open is an emergency, so the call has to be answered, booked and dispatched within minutes, and the tech has to arrive with the right springs, cables and openers on the truck. On site, a clear good-better-best quote (repair, repair plus tune-up, or a new door or opener) lifts the average ticket, and financing helps close install jobs. Recording the door and opener on the customer record makes the next visit, the warranty and the annual tune-up easier to sell.',

  keyFeatures: [
    'Fast call answering and booking for emergency repairs',
    'Good-better-best or flat-rate pricing presented on site',
    'Parts and inventory tracking on each truck',
    'Door and opener equipment history on the customer record',
    'Maintenance or tune-up plans with automatic scheduling',
    'Consumer financing for new doors and openers',
  ],

  priceRange: {
    min: 59,
    max: null,
    note: 'Housecall Pro publishes Basic $59, Essentials $149 (up to 5 users) and MAX $299 (up to 8 users) a month billed annually. Service Fusion, which has a garage door page, publishes unlimited-user plans at $220, $339 and $552 a month billed annually ($259, $399 and $649 monthly). ServiceTitan, Workiz and FieldPulse, which all market garage door software, are quote only.',
    source: { name: 'Service Fusion pricing', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-21' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 6,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Good-better-best options, stocked trucks and equipment history',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Multi-truck garage door companies with dispatchers and a call center',
        strengths: [
          'Garage door page names good-better-best options, keeping trucks stocked and equipment history',
          'Recurring services, online booking and a cloud phone system (Phones Pro)',
          'Call booking, pricebook and memberships in its Core package',
        ],
        limitations: [
          'No published price; the garage door page names QuickBooks Online only',
          'Financing appears only as a menu link on the garage door page',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'AI Answering for emergency calls; Good, Better, Best proposals',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Call-heavy repair shops that want answering and dispatch in one tool',
        strengths: [
          'AI Answering to answer and dispatch emergency calls, emails and texts',
          'Good, Better, Best sales proposals, inventory tracking and consumer financing',
          'Garage door page says it integrates with QuickBooks Online and Desktop',
        ],
        limitations: [
          'Every plan is “Request pricing”; flat rate, sales proposals and equipment tracking are on Ultimate',
          'Its pricing page lists QuickBooks Online sync only, so confirm Desktop in the demo',
        ],
      },
    },
    {
      slug: 'fieldpulse',
      positioning: 'Garage door page with parts tracking and pre-set rates',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Garage door teams that want parts and pricing control',
        strengths: [
          'Pre-set labor and material rates for consistent estimates',
          'Tracks parts, labor and expenses in real time',
          'Its garage door guide names equipment records and two-way QuickBooks Online sync',
        ],
        limitations: [
          'Seat-based pricing is not published',
          'Garage door page does not mention good-better-best or flat-rate pricing',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price with flat rate and equipment tracking on Essentials',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small garage door teams that want a known monthly price',
        strengths: [
          'Plan data lists flat-rate pricing, customer equipment tracking and QuickBooks Online and Desktop on Essentials ($149/month for up to 5 users)',
          'Online booking from Basic; Voice add-on from $45/month plus overages',
        ],
        limitations: [
          'We could not check its garage door page, so no garage-door-specific feature is listed here',
          'Recurring Service Plans are on MAX ($299/month)',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Owner-operator', pick: 'Housecall Pro Basic ($59/mo)', why: 'Published price with online booking; Essentials ($149/mo, up to 5 users) adds flat-rate pricing, equipment tracking and QuickBooks.' },
    { size: 'Growing shop, 5 to 15 techs', pick: 'Service Fusion Plus ($339/mo billed annually)', why: 'Unlimited users on one price, inventory management and integrated voice and text from Plus, and QuickBooks Online and Desktop on every plan.' },
    { size: 'Call-heavy repair business', pick: 'Workiz (custom quote)', why: 'AI Answering for emergency calls plus Good, Better, Best proposals and consumer financing; ask which plan includes the answering add-on.' },
    { size: 'Multi-truck operation with a call center', pick: 'ServiceTitan (custom quote)', why: 'Good-better-best options, stocked-truck inventory, equipment history and a cloud phone system on one platform.' },
  ],

  extraSections: [
    {
      id: 'garage-door-calls-parts',
      heading: 'Calls, quotes and truck parts: what to test in a garage door demo',
      paragraphs: [
        'Run one emergency through every tool: a broken spring call comes in after hours, gets answered and booked, and the nearest tech goes out. Workiz markets AI Answering for exactly this, ServiceTitan sells Phones Pro, Housecall Pro sells a Voice add-on from $45 a month plus overages, and Service Fusion includes integrated voice and text from Plus. Ask each vendor whether calls are recorded and tied to the job.',
        'On site, the tech should present a three-option quote, take a deposit or offer financing, and use parts from truck stock. ServiceTitan and Workiz both name good-better-best quoting on their garage door pages, and Workiz lists consumer financing. Check that the parts used come off the right truck’s inventory and that the door and opener end up on the customer record for the next tune-up. Our [quoting software guide](/guides/field-service-quoting-software) compares estimate tools in more depth, and [field service software pricing](/pricing) has every published plan.',
      ],
    },
  ],

  mistakes: [
    'Missing after-hours calls. Emergency springs and stuck doors go to whoever answers first, so test call answering before you buy.',
    'Buying a plan without flat rate or proposals. Workiz puts flat rate and sales proposals on Ultimate, and Housecall Pro puts flat-rate pricing on Essentials.',
    'Ignoring truck inventory. If parts usage is not tracked per truck, techs arrive without the right spring or opener.',
    'Assuming every tool syncs with QuickBooks Desktop. ServiceTitan’s garage door page names QuickBooks Online, and Workiz’s pricing page lists Online sync only.',
  ],

  faqs: [
    {
      question: 'What is the best software for a garage door company?',
      answer:
        'ServiceTitan, Workiz and FieldPulse all market garage door software, priced by quote. ServiceTitan names good-better-best options, stocked trucks and equipment history; Workiz adds AI Answering for emergency calls. For a published price, Housecall Pro starts at $59/month and Service Fusion at $220/month with unlimited users, both billed annually.',
    },
    {
      question: 'How much does garage door software cost?',
      answer:
        'Housecall Pro costs $59, $149 or $299 a month billed annually for 1, 5 or 8 users. Service Fusion costs $220, $339 or $552 a month billed annually with unlimited users. ServiceTitan, Workiz and FieldPulse publish no prices.',
    },
    {
      question: 'Which garage door software handles emergency calls?',
      answer:
        'Workiz’s garage door page says its AI Answering answers and dispatches emergency calls, emails and texts. ServiceTitan sells a cloud phone system (Phones Pro), Housecall Pro a Voice add-on from $45 a month plus overages, and Service Fusion includes integrated voice and text from its Plus plan.',
    },
    {
      question: 'Can garage door software track parts on each truck?',
      answer:
        'ServiceTitan’s garage door page says it keeps trucks stocked, Workiz tracks inventory with real-time usage data, and FieldPulse monitors parts, labor and expenses in real time. Service Fusion includes inventory management on Plus and Pro. Confirm in a demo that stock is tracked per truck.',
    },
    {
      question: 'Does garage door software offer good-better-best pricing?',
      answer:
        'Yes. ServiceTitan names good-better-best options on its garage door page, and Workiz offers Good, Better, Best sales proposals on its Ultimate plan. Housecall Pro lists flat-rate pricing from Essentials ($149/month billed annually for up to 5 users).',
    },
    {
      question: 'Which garage door software works with QuickBooks Desktop?',
      answer:
        'Service Fusion supports QuickBooks Online and Desktop on every plan, and Housecall Pro’s plan data lists both on Essentials. Workiz’s garage door page says it supports Online and Desktop, though its pricing page lists Online sync only. ServiceTitan’s garage door page and FieldPulse’s guide name QuickBooks Online.',
    },
  ],

  lastUpdated: '2026-11-21',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan garage door software', url: 'https://www.servicetitan.com/industries/garage-door-software', checked: '2026-11-21' },
    { name: 'ServiceTitan pricing (Core, Demand AI, Field AI and MAX packages; Get Pricing)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-21' },
    { name: 'Workiz garage door software', url: 'https://www.workiz.com/industries/garage-door/', checked: '2026-11-21' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'FieldPulse garage door solution', url: 'https://www.fieldpulse.com/solutions/garage-door', checked: '2026-11-21' },
    { name: 'FieldPulse garage door software guide', url: 'https://www.fieldpulse.com/articles/fieldpulse-garage-door-software-guide/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Housecall Pro help: Voice FAQs (pricing)', url: 'https://help.housecallpro.com/en/articles/6666356-voice-faqs', checked: '2026-11-21' },
    { name: 'Service Fusion garage door software', url: 'https://www.servicefusion.com/garage-door-software', checked: '2026-11-21' },
    { name: 'Service Fusion pricing (unlimited users, QuickBooks Online and Desktop)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-21' },
    { name: 'Commusoft industries (no garage door)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
  ],
}
