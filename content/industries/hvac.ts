import type { Industry } from '@/lib/industries'

/**
 * HVAC — the anchor page (highest CPC target). VERIFIED (researched Jul 2026).
 * Prices checked against each vendor's own pricing page on 2026-07-08; Housecall Pro
 * plans rechecked 2026-10-24, Jobber Core standard annual rate rechecked 2026-10-22.
 * Only Jobber and Housecall Pro publish starting prices; ServiceTitan, Workiz,
 * FieldPulse are custom/quote and recorded as null (never guessed).
 * 2026-11-07: removed the $299 "ceiling" (Jobber publishes Grow/Plus tiers above it, e.g.
 * Plus 15 users $529); Jobber, Housecall Pro, Workiz and FieldPulse pricing rechecked.
 * 2026-11-19: added per-tool fit, HVAC features by plan, and Housecall Pro's separate HVAC
 * package (its /industries/hvac-software/ page, modified 2026-10-28, lists Basic $79,
 * Essentials $229 for 1 user / $299 for 5, MAX $649 for 8; its FAQ says MAX is $399 for
 * one user while the card shows $349, so both are stated). Billing basis of that package
 * is not labeled. Other Housecall Pro trade pages returned 405 and were not checked.
 */
export const hvac: Industry = {
  slug: 'hvac',
  name: 'HVAC',
  icon: '❄️',
  category: 'Trades',
  metaDescription:
    'Compare HVAC field service management software for small and commercial HVAC companies: Jobber from $29/mo, Housecall Pro from $59/mo, and ServiceTitan.',
  datePublished: '2026-07-08',

  answer:
    'The best HVAC field service management software depends on how many technicians you run. Small HVAC businesses usually start with Housecall Pro (Basic from $59/month billed annually; $79 month-to-month) or Jobber (Core from $29/month billed annually; $49 month-to-month). Both publish their prices and cover scheduling, dispatch, invoicing, and payments. Larger commercial HVAC operations that need dispatch and reporting at scale typically evaluate ServiceTitan, which is custom-quoted. Workiz and FieldPulse are mid-market alternatives, also quote-based. Before you buy, check three HVAC needs: maintenance-agreement tracking, equipment history per customer site, and QuickBooks sync, which neither Jobber Core nor Housecall Pro Basic includes. Published plans start at $29/month (Jobber Core) and $59/month (Housecall Pro Basic) with annual billing and rise with team size, up to $529/month for Jobber Plus with 15 users; ServiceTitan is quoted separately. Housecall Pro also shows a separate HVAC package at higher prices on its HVAC page, so confirm which one your quote uses.',

  intro:
    'HVAC companies live and die by scheduling and recurring maintenance contracts. The right FSM software has to handle seasonal demand spikes, track equipment and warranty history per site, manage maintenance agreements, and get invoices out the same day a tech leaves the job. QuickBooks sync is non-negotiable for most shops, and a fast mobile app matters because your techs are on rooftops, not at desks.',

  keyFeatures: [
    'Maintenance-agreement / service-contract tracking for recurring HVAC visits',
    'Equipment & asset history per customer site (model, serial, warranty)',
    'Scheduling and dispatch built for seasonal demand spikes',
    'Mobile app for techs in the field (photos, estimates, capture signatures)',
    'QuickBooks / accounting sync to avoid double entry',
    'Upfront quoting with good/better/best options and financing',
    'Flat-rate price book so every tech quotes the same price for the same repair',
  ],

  priceRange: {
    min: 29,
    // No ceiling: Jobber publishes tiers above $299 (e.g. Grow 15 users $399, Plus 15 users $529).
    max: null,
    note: 'Published plans start at $29/mo (Jobber Core, 1 user, annual billing; $49 month-to-month) and $59/mo (Housecall Pro Basic, 1 user). Prices rise with team size and features, for example Housecall Pro MAX at $299/mo for up to 8 users and Jobber Plus at $529/mo for 15 users (annual billing). ServiceTitan, Workiz, and FieldPulse are custom-quoted.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-07' },
    structured: true,
  },

  search: { monthlyVolume: 720, kd: 19, cpc: 192.44 },

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Best for larger / commercial HVAC operations',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger residential and commercial HVAC operations with dispatchers and a membership program',
        strengths: [
          'Every package card on its pricing page lists dispatching, pricebook, mobile estimates and customizable memberships.',
          'Tracks installed equipment at each service location, including install dates, service history and memberships.',
          'Recurring service events for maintenance visits populate up to 12 months ahead by default.',
        ],
        limitations: [
          'Per-technician pricing is quote-only, and Dispatch Pro, Scheduling Pro, Fleet Pro and Pricebook Pro are sold as separate Pro products.',
          'ServiceTitan’s own HVAC page says a 1–2 truck operation just starting out may be better served by a lighter, cheaper tool.',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Best overall for small-to-midsize HVAC shops',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small and midsize residential HVAC shops that want published prices and a 14-day trial',
        strengths: [
          'Main pricing grid: Basic $59/month for 1 user, Essentials $149 for 5 users, MAX $299 for 8 users (billed annually).',
          'Price book and consumer financing on every plan; flat-rate pricing, phone GPS and QuickBooks Online sync from Essentials.',
          'Its HVAC package lists membership plans, equipment tracking and a good-better-best sales proposal tool on Essentials and MAX.',
        ],
        limitations: [
          'Its HVAC page shows a separate HVAC package at higher prices (Basic $79; Essentials $229 for 1 user or $299 for 5), so confirm which grid your quote uses.',
          'On the main pricing grid, Recurring Service Plans and route optimization are included only in MAX.',
        ],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Most affordable published plan',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Solo technicians and small HVAC crews that want the lowest published entry price',
        strengths: [
          'Core is $29/month billed annually for 1 user; Connect is $149 for 5 users and Plus is $529 for 15 users (annual billing).',
          'Route optimization on Connect, Grow and Plus, and QuickBooks Online or Xero sync from Connect.',
          'Maintenance visits run as recurring jobs, and progress invoicing is on every plan.',
        ],
        limitations: [
          'No dedicated equipment-tracking module: Jobber’s HVAC guide suggests saving unit details and warranty information in custom client fields.',
          'Real-time GPS needs a device from a fleet partner; built-in GPS waypoints are on select plans.',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Strong on dispatch + built-in phone/CRM',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'HVAC shops that want fleet tracking and online booking on the entry plan',
        strengths: [
          'Standard includes fleet tracking, team location tracking, online booking, recurring jobs, price book and consumer financing.',
          'QuickBooks integration is listed among Standard’s key features.',
        ],
        limitations: [
          'Service plans, equipment tracking, flat-rate pricing, sales proposals and checklists are included only on Ultimate.',
          'No published prices: all three plans say “Request pricing”.',
        ],
      },
    },
    {
      slug: 'fieldpulse',
      positioning: 'Good for growing multi-crew HVAC teams',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Growing multi-crew HVAC teams that want maintenance agreements and asset records in one system',
        strengths: [
          'Maintenance agreements run on the same jobs, dispatch board, invoices and customer records as the rest of the business.',
          'Asset records cover installations, warranties and equipment condition for customer-owned equipment.',
        ],
        limitations: [
          'Seat-based pricing is quote-only, and FieldPulse says it does not offer a free trial (it offers a demo).',
          'Pricebook and Fleet Tracking are paid add-ons; add-on prices are not published.',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo HVAC technician', pick: 'Jobber Core ($29/mo)', why: 'Lowest published entry price. QuickBooks sync starts on the higher Connect plan, so budget more if you need it.' },
    { size: 'Small shop, 2–5 users', pick: 'Housecall Pro Essentials ($149/mo, up to 5 users)', why: 'Includes QuickBooks Online sync. Housecall Pro also supports QuickBooks Desktop; confirm which plan includes it. Its HVAC package lists Essentials at $299 for 5 users, so ask which price applies.' },
    { size: 'Growing shop, up to 8 users', pick: 'Housecall Pro MAX ($299/mo, up to 8 users)', why: 'Housecall Pro’s largest published plan; extra users are $35/mo each. For bigger teams, Jobber publishes 10- and 15-user prices, up to $529/mo for Plus with 15 users (annual billing).' },
    { size: 'Mid-size, multiple crews', pick: 'Workiz or FieldPulse (custom quote)', why: 'Neither publishes a price. Get quotes for your technician count and compare them with Housecall Pro MAX.' },
    { size: 'Commercial or high-volume', pick: 'ServiceTitan (custom quote)', why: 'Built for larger commercial and high-volume residential operations; expect a sales-led demo and quote.' },
  ],

  extraSections: [
    {
      id: 'hvac-small-business',
      heading: 'Best HVAC software for small business',
      paragraphs: [
        'For a small HVAC business, the practical shortlist is Jobber and Housecall Pro. They are the two vendors in this comparison that publish prices, and both offer a 14-day free trial with no credit card. Jobber Core is the cheapest way in at $29/month billed annually for one user. Housecall Pro Basic is $59/month billed annually and includes review tools and online booking on the entry plan. If most of your work is for commercial accounts with multiple sites, see [commercial HVAC software](/guides/commercial-hvac-software).',
        'The catch for HVAC shops is accounting: neither entry plan includes QuickBooks sync. If you need it, compare Jobber Connect (QuickBooks Online only) with Housecall Pro Essentials (QuickBooks Online; confirm the plan for Desktop) in our guide to [FSM software that works with QuickBooks](/quickbooks). For the head-to-head decision, read [Jobber vs Housecall Pro](/compare/jobber-vs-housecall-pro). If scheduling is the bottleneck, compare [HVAC dispatch software](/guides/hvac-dispatch-software) by plan. Running a different trade too? See [field service software for small business](/for-small-business).',
      ],
    },
    {
      id: 'housecall-pro-hvac-package',
      heading: 'Housecall Pro’s HVAC package costs more than its main plans',
      paragraphs: [
        'Housecall Pro shows two price grids. Its main pricing page lists Basic at $59/month for 1 user, Essentials at $149 for 5 users and MAX at $299 for 8 users, billed annually. Its HVAC software page, last modified October 28, 2026, shows an HVAC package instead: Basic at $79/month for 1 user, Essentials at $229 for 1 user or $299 with 5 users, and MAX at $649 with 8 users. For MAX with one user, that page’s FAQ says $399/month while its plan card shows $349.',
        'The HVAC package also moves features down a tier. It lists membership plans, equipment tracking, flat-rate pricing and the sales proposal tool on Essentials, while the main grid includes Recurring Service Plans only in MAX. The HVAC page does not label its prices as annual or monthly billing. Before you sign, ask Housecall Pro which package your quote is based on and get the included features in writing. Other Housecall Pro prices on this page come from its main pricing grid; for the full breakdown see [Housecall Pro pricing](/pricing/housecall-pro).',
      ],
    },
    {
      id: 'hvac-features-by-plan',
      heading: 'Which plan includes the HVAC features you need',
      paragraphs: [
        'Maintenance agreements: ServiceTitan lists customizable memberships on every package card. Housecall Pro includes Recurring Service Plans in MAX on its main grid and lists membership plans on Essentials in its HVAC package. Workiz includes service plans only on Ultimate. FieldPulse runs maintenance agreements on the same jobs and dispatch board as other work. Jobber handles maintenance visits as recurring jobs.',
        'Equipment history: ServiceTitan tracks installed equipment at each service location with install dates and service history. FieldPulse keeps records of installations, warranties and equipment condition. Housecall Pro lists equipment tracking on Essentials and MAX in its HVAC package. Workiz includes equipment tracking only on Ultimate. Jobber has no dedicated equipment module; its HVAC guide suggests custom client fields for unit details and warranty information.',
        'Flat-rate pricing and price books: Housecall Pro includes a price book on every plan and flat-rate pricing from Essentials. Workiz includes a price book on every plan but flat rate only on Ultimate. ServiceTitan lists a pricebook on every package and sells Pricebook Pro separately. FieldPulse sells Pricebook as a paid add-on.',
        'Financing and good-better-best proposals: Housecall Pro includes consumer financing on every plan; its sales proposal tool is in MAX on the main grid and on Essentials in the HVAC package. Workiz includes consumer financing on every plan and sales proposals on Ultimate. ServiceTitan lists Integrated Financing among its payment products.',
        'Accounting: QuickBooks Online sync starts on Housecall Pro Essentials and Jobber Connect, which also syncs with Xero. Workiz lists QuickBooks integration on Standard, and FieldPulse lists a QuickBooks integration among its features. See [FSM software that works with QuickBooks](/quickbooks) for plan details.',
      ],
    },
    {
      id: 'more-hvac-guides',
      heading: 'More HVAC software guides',
      paragraphs: [
        'By job type: [HVAC dispatch software](/guides/hvac-dispatch-software) compares seven tools by which plan includes routing, GPS and maintenance visits. [Commercial HVAC software](/guides/commercial-hvac-software) covers multi-site accounts, PM agreements and progress billing. [Refrigerant tracking software](/guides/refrigerant-tracking-software) compares seven tools for refrigerant and leak records.',
        'Head to head: [Jobber vs Housecall Pro](/compare/jobber-vs-housecall-pro), [Housecall Pro vs ServiceTitan](/compare/housecall-pro-vs-servicetitan) and [ServiceTitan vs Jobber](/compare/servicetitan-vs-jobber). Plan prices in detail: [Housecall Pro pricing](/pricing/housecall-pro) and [Jobber pricing](/pricing/jobber).',
      ],
    },
  ],

  mistakes: [
    'Buying an entry plan and finding out later that QuickBooks sync is not included. It is not on Jobber Core or Housecall Pro Basic.',
    'Paying for an enterprise platform too early. Custom-quoted tools such as ServiceTitan are built around larger teams, so a two- or three-technician shop can end up paying for features it does not use.',
    'Skipping maintenance-agreement and equipment-history workflows during the trial or demo. These are the HVAC-specific features that separate tools, and support can vary by plan.',
    'Comparing an annual price with a month-to-month price. Housecall Pro Basic is $59/month billed annually but $79 month-to-month.',
  ],

  faqs: [
    {
      question: 'What field service software do HVAC companies use?',
      answer:
        'Small and midsize HVAC shops commonly evaluate Housecall Pro (from $59/month billed annually) and Jobber (from $29/month billed annually), while larger commercial HVAC operations tend to evaluate ServiceTitan, which is custom-priced.',
    },
    {
      question: 'What is the best HVAC software for a small business?',
      answer:
        'For most small HVAC businesses, start with Housecall Pro (from $59/month billed annually) or Jobber (from $29/month billed annually). Both publish prices and offer 14-day trials without a credit card. If you need QuickBooks sync, budget for Jobber Connect or Housecall Pro Essentials ($149/month billed annually for up to 5 users).',
    },
    {
      question: 'How much does HVAC field service software cost?',
      answer:
        'Published plans start at $29/month for Jobber Core (1 user, billed annually; $49 month-to-month) and $59/month for Housecall Pro Basic (1 user). Cost rises with team size and features: Housecall Pro MAX is $299/month for up to 8 users ($329 month-to-month), and Jobber’s 15-user tiers run up to $529/month on Plus, both billed annually. ServiceTitan, Workiz, and FieldPulse are quote-based and scale with the number of technicians.',
    },
    {
      question: 'Is ServiceTitan worth it for a small HVAC company?',
      answer:
        'ServiceTitan is built for larger commercial and high-volume residential HVAC operations. For a small HVAC shop with a handful of techs, Housecall Pro or Jobber usually deliver what you need at a lower, published price.',
    },
    {
      question: 'Does HVAC field service software integrate with QuickBooks?',
      answer:
        'Yes. Jobber, Housecall Pro, ServiceTitan, and Workiz all offer QuickBooks integration, but not always on the entry plan: Jobber needs Connect (QuickBooks Online only) and Housecall Pro needs Essentials for QuickBooks Online (confirm the plan for Desktop). Confirm Online vs Desktop support for your setup.',
    },
    {
      question: 'Is there free field service software for HVAC businesses?',
      answer:
        'None of the major FSM vendors compared here offers a free plan (checked July 2026). Jobber and Housecall Pro both offer 14-day free trials without a credit card, which is the practical way to test HVAC workflows before paying.',
    },
    {
      question: 'Does Housecall Pro charge more for HVAC businesses?',
      answer:
        'Its HVAC page shows an HVAC package priced above its main grid: Basic $79/month, Essentials $229 for 1 user or $299 for 5, and MAX $649 for 8. The main pricing page lists $59, $149 and $299 billed annually. Ask which package your quote uses.',
    },
    {
      question: 'Which HVAC software includes maintenance agreements on the cheapest plan?',
      answer:
        'ServiceTitan lists memberships on every package, but it is quote-only. Housecall Pro’s HVAC package lists membership plans from Essentials; its main grid includes Recurring Service Plans in MAX ($299/month billed annually). Workiz needs Ultimate.',
    },
  ],

  // Set to the actual merge day (PR held until after the Dec 9 GSC review).
  lastUpdated: '2026-11-19',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-19' },
    { name: 'Jobber route optimization (Connect, Grow, Plus)', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
    { name: 'Jobber GPS waypoint tracking', url: 'https://help.getjobber.com/hc/en-us/articles/115009612507-GPS-Waypoint-Tracking', checked: '2026-11-19' },
    { name: 'Jobber progress invoicing (all plans)', url: 'https://help.getjobber.com/en/articles/progress-invoicing/', checked: '2026-11-19' },
    { name: 'Jobber recurring jobs', url: 'https://help.getjobber.com/hc/en-us/articles/115009542848-Create-a-Recurring-Job', checked: '2026-11-19' },
    { name: 'Jobber HVAC CRM guide (unit details in client fields)', url: 'https://www.getjobber.com/academy/hvac/best-hvac-crm-software/', checked: '2026-11-19' },
    { name: 'Housecall Pro pricing (main plan grid)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Housecall Pro HVAC software (HVAC package and FAQ)', url: 'https://www.housecallpro.com/industries/hvac-software/', checked: '2026-11-19' },
    { name: 'Housecall Pro QuickBooks (Online + Desktop)', url: 'https://www.housecallpro.com/quickbooks/', checked: '2026-07-08' },
    { name: 'ServiceTitan pricing', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-19' },
    { name: 'ServiceTitan HVAC software', url: 'https://www.servicetitan.com/industries/hvac-software', checked: '2026-11-19' },
    { name: 'ServiceTitan installed equipment', url: 'https://help.servicetitan.com/docs/installed-equipment-landing-page', checked: '2026-11-19' },
    { name: 'ServiceTitan recurring service events', url: 'https://help.servicetitan.com/docs/manage-recurring-service-events', checked: '2026-11-19' },
    { name: 'Workiz pricing (request pricing only)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-19' },
    { name: 'FieldPulse pricing (custom quote)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-19' },
    { name: 'FieldPulse maintenance agreements', url: 'https://www.fieldpulse.com/features/maintenance-agreements', checked: '2026-11-19' },
    { name: 'FieldPulse asset management', url: 'https://www.fieldpulse.com/features/asset-management', checked: '2026-11-19' },
  ],
}
