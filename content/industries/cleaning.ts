import type { Industry } from '@/lib/industries'

/**
 * Cleaning (house cleaning, maid services, commercial and janitorial): VERIFIED (researched
 * 2026-11-21, batch 3 draft).
 * None of the six FSM vendors has a house cleaning, maid or janitorial page we could confirm:
 * Workiz /industries/cleaning-business-software/ 404 (carpet, window and air duct pages only);
 * ServiceTitan lists only air duct cleaning; FieldPulse /industries/cleaning 404 (quote form offers
 * "Cleaning/Janitorial Services"); Commusoft lists no cleaning trade and says it is designed for
 * businesses with 6 or more staff. Jobber's residential cleaning page and help center returned 403
 * (not retried); Jobber lists cleaning among its industries on its homepage (2026-11-21) and Jobber
 * plan facts reuse the site's verified pages. Housecall Pro help center names home cleaning as an
 * onboarding industry with default job templates. Workiz plan table: recurring jobs, online
 * booking, client portal, team location tracking and QuickBooks Online sync on every plan;
 * checklists and service plans on Ultimate. Cleaning-specific pricing pages: ZenMaid $19/$39/$49
 * month to month (a team-size calculator suggests the price can change with headcount; rate not
 * confirmed), Swept from $150/$225 for up to 15 locations, BookingKoala from $27/$57/$197 by
 * provider count, Launch27 $75/$150/$299 flat.
 */
export const cleaning: Industry = {
  slug: 'cleaning',
  name: 'Cleaning',
  icon: '🧹',
  category: 'Field Services',
  metaDescription:
    'Compare house cleaning, maid service and janitorial software for recurring visits, online booking, checklists and payments. Verified features and prices.',
  datePublished: '2026-11-21',

  answer:
    'Most cleaning businesses are better served by cleaning-specific software than by the big field service platforms. None of the six major FSM vendors has a house cleaning or janitorial page we could confirm, while cleaning tools publish their prices: ZenMaid from $19 a month for maid services, Launch27 from $75 a month with unlimited users and bookings, BookingKoala from $27 a month by provider count, and Swept from $150 a month for up to 15 commercial cleaning locations. Among generalist tools, Jobber (from $29/month billed annually) lists cleaning among its industries and includes online booking on every plan, Housecall Pro (from $59/month) sets up default job templates for home cleaning, and Workiz (quote only) includes recurring jobs, online booking and a client portal on every plan but checklists only on Ultimate.',

  intro:
    'Cleaning runs on repeat customers. A weekly or biweekly home clean, or a nightly office clean, has to schedule itself, land on the right team, follow the same checklist every time and charge the card on file without a phone call. Residential maid services also live on online booking: customers want to see a price, pick a time and pay. Commercial and janitorial companies care more about sites than customers, with checklists and inspections per location, proof that the crew was on site, and payroll for large, often multilingual teams. That is why the tools built for cleaning price by appointments, providers or locations rather than by office user.',

  keyFeatures: [
    'Recurring visits (weekly, biweekly, monthly) that schedule themselves',
    'Online booking forms that show your price and availability',
    'Cleaning checklists per job or per location, with photo proof',
    'Team assignment, mobile clock in and out and GPS site verification',
    'Automatic charging of the card on file after each clean',
    'Client portal and QuickBooks or payroll integration',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Generalist FSM plans start at $29/mo (Jobber Core, 1 user) and $59/mo (Housecall Pro Basic, 1 user), billed annually. Cleaning-specific tools can cost less: ZenMaid $19, $39 and $49 a month (month to month; Starter is capped at 40 appointments), BookingKoala from $27 a month for 5 providers, Launch27 $75 to $299 a month with unlimited users and bookings, and Swept from $150 or $225 a month for up to 15 locations. Workiz, FieldPulse, ServiceTitan and Commusoft are quote only.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 6,

  providers: [
    {
      slug: 'jobber',
      positioning: 'Lowest published generalist price; lists cleaning among its industries',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Cleaning businesses that also do other home services, or want one tool for quotes, jobs and invoices',
        strengths: [
          'Published plans from $29/month billed annually; online booking on every plan',
          'Recurring jobs, with automatic payments and QuickBooks Online from Connect',
          'Checklists on Connect and up',
        ],
        limitations: [
          'Its residential cleaning page blocked our checks, so we list no cleaning-specific Jobber feature',
          'Prices by user, which costs more than location- or appointment-based cleaning tools for large teams',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Home cleaning job templates at setup; published price',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small home cleaning teams of up to 5 that want a known price',
        strengths: [
          'Creates default job templates when you pick home cleaning as your industry',
          'Online booking from Basic; employee GPS tracking and QuickBooks Online and Desktop on Essentials',
        ],
        limitations: [
          'No cleaning page or cleaning checklist template found in its help center',
          'Recurring Service Plans and route optimization are on MAX ($299/month)',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Recurring jobs, online booking and client portal on every plan',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Carpet, window and air duct cleaning companies, which Workiz has pages for',
        strengths: [
          'Recurring jobs, online booking with optional checkout and a client portal on every plan',
          'Team location and fleet tracking on every plan',
        ],
        limitations: [
          'No house cleaning or janitorial page; checklists and service plans are on Ultimate only',
          'Every plan is “Request pricing”',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo cleaner or new maid service', pick: 'ZenMaid Starter ($19/mo)', why: 'Month to month, up to 40 appointments a month. Pro ($39/mo) removes the cap and adds checklists, cleaner GPS tracking and booking forms.' },
    { size: 'Growing residential maid service', pick: 'Launch27 PLUS ($299/mo) or BookingKoala Growing (from $57/mo)', why: 'Launch27 includes unlimited users and bookings, and PLUS adds automatic card charging. BookingKoala prices by provider and adds GPS clock in and out on Growing.' },
    { size: 'Cleaning plus other home services', pick: 'Jobber Connect ($99/mo, 1 user) or Housecall Pro Essentials ($149/mo, up to 5 users)', why: 'Published prices, online booking, and QuickBooks; Jobber starts automatic payments on Connect.' },
    { size: 'Commercial and janitorial', pick: 'Swept Optimize (from $150/mo for up to 15 locations)', why: 'Prices by location with unlimited employees, and includes checklists per location, inspections with photo proof, GPS site verification and 150+ languages.' },
  ],

  extraSections: [
    {
      id: 'cleaning-pricing-models',
      heading: 'Per appointment, per provider, per location: how cleaning software is priced',
      paragraphs: [
        'Cleaning tools count different things, so line up the same team before you compare. ZenMaid Starter caps you at 40 appointments a month, and its page asks how many cleaners and office managers you have, so confirm the total for your headcount. BookingKoala counts each team member who performs services as a provider (5, 15 or 50 on its main plans). Swept counts cleaning locations and lets you add unlimited employees and subcontractors. Launch27 charges a flat fee with unlimited users and bookings. Jobber and Housecall Pro price by plan and user count.',
        'Then test the two things that decide a cleaning tool: booking and payment. Book a biweekly clean through the online form as a customer, see whether the price shows before checkout, then complete the job and check that the card on file is charged without office work. Launch27 lists automatic charging on its PLUS plan only, and ZenMaid’s QuickBooks integration was marked coming soon when we checked. Our [field service software pricing](/pricing) guide covers the generalist plans in detail.',
      ],
    },
  ],

  mistakes: [
    'Paying per office user for a large cleaning team. Location- or provider-based tools like Swept and BookingKoala can cost less for big crews; compare the totals for your headcount.',
    'Assuming online booking shows a price. Check that customers see your price and availability before they book.',
    'Missing the automatic charging plan. Launch27 includes automatic credit card charging on PLUS only.',
    'Picking a field service platform built for trades. None of the six major FSM vendors has a house cleaning or janitorial page we could confirm.',
  ],

  faqs: [
    {
      question: 'What is the best software for a cleaning business?',
      answer:
        'For residential maid services, cleaning-specific tools publish prices: ZenMaid from $19/month, BookingKoala from $27/month and Launch27 from $75/month. For commercial and janitorial work, Swept starts at $150/month for up to 15 locations. Jobber (from $29/month billed annually) suits cleaners who also run other home services.',
    },
    {
      question: 'How much does cleaning business software cost?',
      answer:
        'ZenMaid costs $19, $39 or $49 a month, BookingKoala starts at $27, $57 or $197 by provider count, Launch27 costs $75, $150 or $299 a month, and Swept starts at $150 or $225 a month for up to 15 locations. Jobber starts at $29 and Housecall Pro at $59 a month billed annually.',
    },
    {
      question: 'Which cleaning software charges customers automatically?',
      answer:
        'Launch27 lists automatic pre-authorization and automatic charging on credit cards on its PLUS plan ($299/month). Jobber starts automatic payments on recurring jobs on Connect. Confirm how other tools handle card-on-file charging in a trial.',
    },
    {
      question: 'Is there software for commercial and janitorial cleaning?',
      answer:
        'Yes. Swept is built for commercial cleaning teams: it prices by location with unlimited employees and includes checklists per location, inspections with photo proof, mobile clock in and out, GPS site verification and 150+ languages. Scale adds a client portal, profit and loss by location and QuickBooks Online payroll integration.',
    },
    {
      question: 'Does Housecall Pro or Jobber work for house cleaning?',
      answer:
        'Both can. Housecall Pro creates default job templates when you choose home cleaning as your industry, and includes online booking from Basic ($59/month billed annually). Jobber lists cleaning among its industries and includes online booking on every plan, from $29/month billed annually.',
    },
    {
      question: 'Which cleaning software works with QuickBooks?',
      answer:
        'Launch27 lists a QuickBooks integration from PRO ($150/month), and Swept a QuickBooks Online payroll integration on Scale. Jobber syncs with QuickBooks Online from Connect, and Housecall Pro’s plan data lists QuickBooks Online and Desktop on Essentials. ZenMaid’s QuickBooks integration was marked coming soon.',
    },
  ],

  lastUpdated: '2026-11-21',
  dataVerified: true,
  sources: [
    { name: 'ZenMaid pricing', url: 'https://www.zenmaid.com/pricing', checked: '2026-11-21' },
    { name: 'Swept plans (per location)', url: 'https://sweptworks.com/compare-plans', checked: '2026-11-21' },
    { name: 'BookingKoala pricing (per provider)', url: 'https://www.bookingkoala.com/pricing', checked: '2026-11-21' },
    { name: 'Launch27 pricing', url: 'https://www.launch27.com/pricing/', checked: '2026-11-21' },
    { name: 'Jobber pricing (plans, online booking, checklists, QuickBooks)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Jobber homepage (industries list includes cleaning)', url: 'https://www.getjobber.com/', checked: '2026-11-21' },
    { name: 'Jobber help: automatic payments', url: 'https://help.getjobber.com/hc/en-us/articles/360036931633-Automatic-Payments', checked: '2026-11-20' },
    { name: 'Housecall Pro help: job templates (home cleaning)', url: 'https://help.housecallpro.com/en/articles/9101271-using-job-templates', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Workiz industries (carpet, window and air duct cleaning only)', url: 'https://www.workiz.com/industries/', checked: '2026-11-21' },
    { name: 'ServiceTitan industries (air duct cleaning only)', url: 'https://www.servicetitan.com/industries', checked: '2026-11-21' },
    { name: 'FieldPulse solutions (no cleaning)', url: 'https://www.fieldpulse.com/solutions', checked: '2026-11-21' },
    { name: 'Commusoft plans (licenses, 6 or more staff)', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-21' },
  ],
}
