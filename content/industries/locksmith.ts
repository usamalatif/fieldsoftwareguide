import type { Industry } from '@/lib/industries'

/**
 * Locksmith: VERIFIED (researched 2026-11-21, batch 4 draft).
 * Workiz /industries/locksmiths/: Genius AI Answering 24/7 answer and dispatch, Good|Better|Best
 * proposals, stock across trucks, On My Way live location texts, says QuickBooks Online and Desktop
 * (pricing page lists Online sync). FieldPulse /solutions/locksmith: call routing, real-time GPS,
 * 24/7 online booking requests, QuickBooks integration (edition not stated). ServiceTitan locksmith
 * page aimed at commercial locksmiths: mobile estimates, inventory, GPS tracking, customer portal,
 * QuickBooks. Commusoft: no locksmith page. Jobber: locksmith not in its homepage industries list.
 * Housecall Pro: www not fetched; help center lists Locksmith among Google Local Services Ads
 * industries. No vendor documents after-hours fee pricing or phone quotes. Locksmith-specific FSM:
 * KeyBolt Pro $189 a month for up to 10 team members (carrier usage billed separately), encrypted
 * key codes and bitting; Unlokt Free $0 (1 user) and Pro $49 a month for 2 users plus $19 per extra
 * user, no automatic routing. TheKeyBot (AI receptionist), PowerDispatch (generic dispatch) and key
 * code lookup tools are not field service software and are not recommended here.
 */
export const locksmith: Industry = {
  slug: 'locksmith',
  name: 'Locksmith',
  icon: '🔑',
  category: 'Trades',
  metaDescription:
    'Compare locksmith software for 24/7 lockout calls, dispatch, GPS, van inventory, key code records and invoicing. Verified vendor features and published prices.',
  datePublished: '2026-11-21',

  answer:
    'Locksmiths win jobs by answering first, so call handling and fast dispatch matter most. Workiz markets locksmith software with Genius AI Answering that answers and dispatches lockout calls 24/7, plus truck stock tracking and live tech location texts (quote only). FieldPulse has a locksmith page with call routing, real-time GPS and 24/7 online booking requests (custom quote), and ServiceTitan targets commercial locksmiths. Locksmith-specific tools publish prices: KeyBolt Pro costs $189 a month for up to 10 team members and stores key codes and bitting encrypted, and Unlokt is free for one user or $49 a month for two users plus $19 per extra user. No tool we checked documents after-hours fee pricing, so ask how each one handles emergency surcharges.',

  intro:
    'A locksmith business swings between emergency lockouts at 2 a.m. and scheduled rekeys, lock installs and commercial access work. The software has to answer or route the call, quote a price the customer accepts, send the nearest tech, and let the customer see when they will arrive. In the van, techs need to know which key blanks, cylinders and hardware are in stock, and the office needs a secure record of key codes and bitting for repeat customers. Residential, automotive and commercial work each add their own details, so check that the tool handles your mix.',

  keyFeatures: [
    '24/7 call answering and fast dispatch for lockouts',
    'Live tech location and arrival texts for customers',
    'On-site estimates with good-better-best options',
    'Van and shop inventory for key blanks and hardware',
    'Secure key code, bitting and customer key records',
    'Online booking, invoicing and QuickBooks sync',
  ],

  priceRange: {
    min: 0,
    max: null,
    note: 'Locksmith-specific: Unlokt Free $0 for one user and Pro $49 a month for two users plus $19 per extra user; KeyBolt Pro $189 a month for up to 10 team members, with phone carrier usage billed separately. Generalist: Housecall Pro from $59/mo billed annually. Workiz, FieldPulse and ServiceTitan, which have locksmith pages, are quote only.',
    source: { name: 'Unlokt pricing', url: 'https://getunlokt.com/for-locksmiths/pricing', checked: '2026-11-21' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 6,

  providers: [
    {
      slug: 'workiz',
      positioning: '24/7 AI answering and dispatch for lockouts',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Emergency-heavy locksmiths that lose jobs to missed calls',
        strengths: [
          'Genius AI Answering answers and dispatches calls 24/7',
          'Monitors stock across trucks from one dashboard',
          'On My Way texts send customers the tech’s live location and ETA; Good, Better, Best proposals',
        ],
        limitations: [
          'Every plan is “Request pricing”, and Genius Answering is sold separately',
          'No key code or key record feature named on its locksmith page',
        ],
      },
    },
    {
      slug: 'fieldpulse',
      positioning: 'Call routing, real-time GPS and 24/7 online booking requests',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Locksmiths that want online booking and GPS-based dispatch',
        strengths: [
          'Automatically directs incoming service calls',
          'Real-time technician locations with GPS-based routing',
          'Online booking so customers can request service 24/7; parts and upgrades on quotes',
        ],
        limitations: [
          'Seat-based pricing is not published',
          'No key code records named; QuickBooks edition not stated on its locksmith page',
        ],
      },
    },
    {
      slug: 'servicetitan',
      positioning: 'Built for commercial locksmith businesses',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Commercial locksmith and access companies with dispatchers',
        strengths: [
          'Mobile estimates with multiple options and inventory that updates with purchase orders',
          'GPS tracking and drive time; customers can see the tech’s location and schedule jobs in the portal',
          'QuickBooks integration',
        ],
        limitations: [
          'No published price; 24/7 call handling is not described on its locksmith page',
          'Mentions key control systems as a service, not key code records',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; Google Local Services Ads integration covers locksmiths',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small residential locksmiths that want a known monthly price',
        strengths: [
          'Its Google Local Services Ads integration lists Locksmith among supported industries',
          'Online booking from Basic; employee GPS and QuickBooks Online and Desktop on Essentials',
        ],
        limitations: [
          'We could not check a Housecall Pro locksmith page, so no locksmith feature is listed',
          'Voice add-on costs from $45 a month plus overages',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo locksmith', pick: 'Unlokt Free ($0, 1 user)', why: 'Dispatch, job records, invoicing and payments for one user; Unlokt Pay is required and card fees apply.' },
    { size: 'Small shop, 2 to 5 techs', pick: 'Unlokt Pro ($49/mo for 2 users, $19 per extra user)', why: 'Five users cost $106 a month. It sends invoices and payments to QuickBooks Online but does not route jobs automatically.' },
    { size: 'Shop that stores key codes', pick: 'KeyBolt Pro ($189/mo, up to 10 team members)', why: 'Encrypts codes, bitting and safe combinations, tracks van inventory and includes a shop phone line and after-hours AI receptionist.' },
    { size: 'Emergency-heavy multi-van operation', pick: 'Workiz (custom quote)', why: 'AI Answering answers and dispatches 24/7, with truck stock tracking and live ETA texts.' },
    { size: 'Commercial locksmith and access control', pick: 'ServiceTitan (custom quote)', why: 'Aimed at commercial locksmiths, with mobile estimates, inventory and GPS tracking.' },
  ],

  extraSections: [
    {
      id: 'locksmith-calls-keys',
      heading: 'Calls, dispatch and key records: what to test in a locksmith demo',
      paragraphs: [
        'Start with a 2 a.m. lockout. Check who answers, how the job gets booked and how fast the nearest tech is sent. Workiz markets Genius AI Answering for 24/7 answering and dispatch, KeyBolt includes an AI receptionist that answers after hours and books the job, and FieldPulse routes incoming calls and takes online booking requests around the clock. No tool we checked documents automatic after-hours fees, so ask how each one adds an emergency surcharge to the quote.',
        'Then check key records and stock. KeyBolt is the only tool here that says it stores key codes, bitting and safe combinations encrypted. Workiz, ServiceTitan, FieldPulse, KeyBolt and Unlokt all track inventory, so confirm that key blanks and hardware draw down per van. Be careful with the term “locksmith software”: some products are key code lookup tools or AI answering services, not field service software. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Missing night calls. Lockouts go to whoever answers first, so test after-hours answering before you buy.',
    'Keeping key codes in spreadsheets. If you store codes and bitting, choose a tool that encrypts them, such as KeyBolt.',
    'Buying a key code lookup tool or answering service and expecting dispatch and invoicing.',
    'Assuming emergency surcharges are built in. No tool we checked documents after-hours fee pricing.',
  ],

  faqs: [
    {
      question: 'What is the best software for a locksmith business?',
      answer:
        'For emergency-heavy shops, Workiz markets 24/7 AI answering and dispatch (quote only). Locksmith-specific tools publish prices: KeyBolt Pro is $189 a month for up to 10 team members with encrypted key codes, and Unlokt is free for one user or $49 a month for two. FieldPulse and ServiceTitan also have locksmith pages.',
    },
    {
      question: 'How much does locksmith software cost?',
      answer:
        'Unlokt is $0 for one user and $49 a month for two users plus $19 per extra user. KeyBolt Pro is $189 a month for up to 10 team members, with phone carrier usage billed separately. Housecall Pro starts at $59 a month billed annually. Workiz, FieldPulse and ServiceTitan are quote only.',
    },
    {
      question: 'Which locksmith software answers calls 24/7?',
      answer:
        'Workiz’s locksmith page says Genius AI Answering answers and dispatches 24/7. KeyBolt’s AI receptionist answers after hours, takes the customer’s name and address and books the job. FieldPulse routes incoming calls and offers 24/7 online booking requests.',
    },
    {
      question: 'Can locksmith software store key codes?',
      answer:
        'KeyBolt says codes, bitting and safe combinations are encrypted in its database and lists key code storage on its pricing page. Workiz, FieldPulse and ServiceTitan do not name key code records on their locksmith pages.',
    },
    {
      question: 'Does locksmith software track van inventory?',
      answer:
        'Yes. Workiz monitors stock across trucks, KeyBolt draws down inventory as parts are used with van and shelf locations, Unlokt tracks stock locations and part movement, and ServiceTitan updates inventory with each purchase order.',
    },
    {
      question: 'Which locksmith software works with QuickBooks?',
      answer:
        'Workiz’s locksmith page says it integrates with QuickBooks Online and Desktop, though its pricing page lists Online sync. Unlokt sends invoices and payments to QuickBooks Online, and KeyBolt exports a QuickBooks-ready file. Housecall Pro’s plan data lists QuickBooks Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-21',
  dataVerified: true,
  sources: [
    { name: 'Workiz locksmith software', url: 'https://www.workiz.com/industries/locksmiths/', checked: '2026-11-21' },
    { name: 'Workiz pricing plans (features by plan, add-ons)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'FieldPulse locksmith solution', url: 'https://www.fieldpulse.com/solutions/locksmith', checked: '2026-11-21' },
    { name: 'ServiceTitan locksmith software', url: 'https://www.servicetitan.com/industries/locksmith-software', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Housecall Pro help: Google Local Services Ads integration (industries incl. Locksmith)', url: 'https://help.housecallpro.com/en/articles/4005026-job-inbox-integration-with-google-local-service-ads', checked: '2026-11-21' },
    { name: 'KeyBolt locksmith software', url: 'https://keybolt.tech/', checked: '2026-11-21' },
    { name: 'KeyBolt pricing', url: 'https://keybolt.tech/pricing', checked: '2026-11-21' },
    { name: 'Unlokt locksmith software', url: 'https://getunlokt.com/locksmith-software', checked: '2026-11-21' },
    { name: 'Unlokt pricing', url: 'https://getunlokt.com/for-locksmiths/pricing', checked: '2026-11-21' },
    { name: 'Commusoft industries (no locksmith)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
  ],
}
