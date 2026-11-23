import type { Industry } from '@/lib/industries'

/**
 * Chimney sweep: VERIFIED (researched 2026-11-23, batch 7 draft).
 * ServiceTitan /industries/chimney-sweep-software: multi-option estimate builder, photos and videos in
 * the mobile app, automated recurring services and service agreements, online booking notifications,
 * dispatch, QuickBooks Online (Desktop seen only in a snippet, not claimed). Its free PDF inspection
 * report template names Levels 1 to 3; the page does not say the PDF is in the app (it says custom forms
 * can be built in the app). Workiz /industries/chimney-sweep/: Good|Better|Best options, recurring
 * maintenance work for slow months, team planning, QuickBooks. Housecall Pro: chimney page seen in
 * search only; help center confirms checklist photo uploads and Photo Reports (PDF, SMS, email; plan not
 * stated). Jobber, FieldPulse and Commusoft: no chimney page confirmed. Chimney tools: QuoteIQ chimney
 * page: inspection forms with photos from Beginner, yearly repeat jobs, InstaSchedule booking link,
 * cap and crown repair options, dryer vents on the same visit, QuickBooks Online on Pro; prices $29.99
 * to $699.99. SweepNspect inspection app: Solo $49 a month ($490 a year), Pro $69 ($690), NFPA
 * 211-style workflow with a disclaimer that it makes no code compliance judgments, photos, branded
 * reports, offline, repeat reminders on Pro, QuickBooks (Team plan still "coming", not used). Zoho FSM
 * has a chimney page; its prices did not render, so not used. Workiz promotion ignored.
 */
export const chimneySweep: Industry = {
  slug: 'chimney-sweep',
  name: 'Chimney Sweep',
  icon: '🧹',
  category: 'Trades',
  metaDescription:
    'Compare chimney sweep software for inspection reports with photos, Level 1 to 3 forms, yearly reminders, repair options and QuickBooks. Verified prices.',
  datePublished: '2026-11-23',

  answer:
    'Chimney sweeps sell repairs from inspections, so photo inspection reports, yearly repeat visits and repair options matter most. ServiceTitan and Workiz both have chimney sweep pages with multi-option estimates, recurring services and QuickBooks (quote only), and ServiceTitan offers a free Level 1 to 3 inspection report template as a PDF. QuoteIQ has a chimney page with inspection forms that turn into photo reports from its $99.99 Beginner plan, and yearly repeat jobs on every plan. SweepNspect is an inspection app for chimney inspectors at $49 or $69 a month, with branded reports that work offline. None of the big six we checked puts NFPA 211 forms in the app.',

  intro:
    'A chimney business sweeps flues, inspects chimneys at Level 1, 2 or 3, and sells repairs such as caps, crowns, liners and waterproofing. Most of the year’s work lands in fall and winter, so the software has to book quickly in season, document each inspection with photos and a report the homeowner can read, quote repairs with options and rebook every customer for next year. Many sweeps also clean dryer vents. Check whether inspection forms live in the app or only as a separate template.',

  keyFeatures: [
    'Inspection forms that become photo reports',
    'Level 1, 2 and 3 inspection documentation',
    'Yearly repeat sweeps and reminders',
    'Repair estimates with options (cap, crown, liner)',
    'Online booking for the busy season',
    'Dispatch, payments and QuickBooks sync',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Generalist FSM: Jobber from $29/mo (Core, 1 user) and Housecall Pro from $59/mo (Basic, 1 user), billed annually. Chimney tools: QuoteIQ $29.99 to $699.99 a month billed monthly (1 to 20 users, $25 per extra user); SweepNspect $49 or $69 a month ($490 or $690 a year). ServiceTitan and Workiz, which have chimney pages, are quote only.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 9,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Chimney page with option estimates, photos and service agreements',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger chimney companies with sweep crews, repair crews and an office',
        strengths: [
          'Multi-option estimate builder; techs take and store photos and videos in the app',
          'Automated recurring services and chimney service agreements',
          'Custom forms in the app, plus a free Level 1 to 3 inspection report PDF template; QuickBooks Online',
        ],
        limitations: [
          'No published price; packages are behind one “Get Pricing” button',
          'Its chimney page does not mention NFPA 211 or dryer vents',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Chimney page with Good, Better, Best options and maintenance work',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Chimney sweeps that want repair options and recurring maintenance revenue',
        strengths: [
          'Good, Better, Best options that fit any budget',
          'Recurring maintenance work to pad slow months; team planning',
          'Online booking and QuickBooks Online sync on every plan',
        ],
        limitations: [
          'Every plan is “Request pricing”; checklists and sales proposals are on Ultimate',
          'Its chimney page does not mention inspection reports or photos',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; checklists with photos and photo reports',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small chimney businesses that want photo reports at a known price',
        strengths: [
          'Checklists with photo uploads that can be attached to the invoice',
          'Photo Reports sent by email, SMS or PDF',
          'Online booking from Basic; QuickBooks Online and Desktop on Essentials',
        ],
        limitations: [
          'Its help center does not say which plans include checklists and Photo Reports',
          'We could not check its chimney sweep page',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo sweep', pick: 'QuoteIQ Essentials ($29.99/mo, 1 user)', why: 'Yearly repeat jobs on every plan. Inspection forms with photo reports start on Beginner.' },
    { size: 'Inspector who wants a reporting app', pick: 'SweepNspect Solo ($49/mo) or Pro ($69/mo)', why: 'Inspection workflow with photos and branded reports that works offline; Pro adds repeat reminders. It is an inspection tool, not full dispatch software.' },
    { size: 'Sweep that sells repairs from inspections', pick: 'QuoteIQ Beginner ($99.99/mo, 2 users)', why: 'Inspection forms that become photo reports, plus cap, crown and waterproofing options on quotes.' },
    { size: 'Small crew that wants a known US price', pick: 'Housecall Pro Essentials ($149/mo billed annually, up to 5 users)', why: 'Checklists with photos, photo reports, online booking and QuickBooks Online and Desktop.' },
    { size: 'Multi-crew chimney company', pick: 'ServiceTitan or Workiz (custom quote)', why: 'Both have chimney pages; ServiceTitan adds service agreements and in-app custom forms, Workiz tiered options.' },
  ],

  extraSections: [
    {
      id: 'chimney-inspections-rebooking',
      heading: 'Inspection reports, Level 1 to 3 forms and rebooking: what to test',
      paragraphs: [
        'Run a real inspection in the trial. QuoteIQ turns your checklist into a report with photos the homeowner opens from a text, Housecall Pro sends photo reports by email, SMS or PDF, and SweepNspect produces branded inspection reports offline. ServiceTitan lets you build custom forms in its app and offers a free Level 1 to 3 report template as a PDF. SweepNspect describes its workflow in NFPA 211-style language but says it does not make code compliance judgments, so the inspector is still responsible for the findings.',
        'Then rebook before you leave. QuoteIQ suggests setting the job to repeat yearly so next fall’s sweep is already booked, ServiceTitan automates recurring services, and Workiz pitches maintenance work for slow months. If you clean dryer vents, QuoteIQ is the only tool here that mentions them on its chimney page. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Writing inspection notes on paper. A photo report sells repairs and protects you if something goes wrong.',
    'Waiting for customers to call back next fall. Rebook yearly sweeps before you leave the house.',
    'Assuming NFPA 211 forms are built in. None of the big six we checked puts them in the app.',
    'Quoting repairs with one price. Offer cap, crown and waterproofing options on the same quote.',
  ],

  faqs: [
    {
      question: 'What is the best software for a chimney sweep business?',
      answer:
        'ServiceTitan and Workiz have chimney sweep pages with option estimates and recurring services (quote only). QuoteIQ has a chimney page with photo inspection reports from $99.99 a month, and SweepNspect is an inspection app at $49 or $69 a month.',
    },
    {
      question: 'How much does chimney sweep software cost?',
      answer:
        'QuoteIQ costs $29.99 to $699.99 a month billed monthly. SweepNspect is $49 a month ($490 a year) or $69 a month ($690 a year). Jobber starts at $29 and Housecall Pro at $59 a month, billed annually. ServiceTitan and Workiz are quote only.',
    },
    {
      question: 'Which chimney software creates inspection reports with photos?',
      answer:
        'QuoteIQ inspection forms become photo reports the homeowner opens from a text, from Beginner. Housecall Pro sends photo reports by email, SMS or PDF, SweepNspect generates branded reports, and ServiceTitan techs store photos and videos in the app.',
    },
    {
      question: 'Is there chimney software with Level 1, 2 and 3 inspection forms?',
      answer:
        'ServiceTitan offers a free Level 1 to 3 inspection report template as a PDF and lets you build custom forms in its app. We could not confirm built-in Level 1 to 3 forms in any of the big six apps.',
    },
    {
      question: 'Can chimney software rebook yearly sweeps?',
      answer:
        'Yes. QuoteIQ lets you set a job to repeat yearly on every plan, ServiceTitan automates recurring services and service agreements, and SweepNspect includes repeat reminders on Pro.',
    },
    {
      question: 'Which chimney sweep software works with QuickBooks?',
      answer:
        'ServiceTitan integrates with QuickBooks Online, Workiz says it fully integrates with QuickBooks, and QuoteIQ includes QuickBooks Online on Pro and up. SweepNspect lists a QuickBooks integration, and Housecall Pro lists Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan chimney sweep software', url: 'https://www.servicetitan.com/industries/chimney-sweep-software', checked: '2026-11-23' },
    { name: 'ServiceTitan chimney inspection report template', url: 'https://www.servicetitan.com/templates/chimney-sweep/inspection-report', checked: '2026-11-23' },
    { name: 'Workiz chimney sweep software', url: 'https://www.workiz.com/industries/chimney-sweep/', checked: '2026-11-23' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Housecall Pro help: checklists', url: 'https://help.housecallpro.com/en/articles/9528709-checklists-overview', checked: '2026-11-23' },
    { name: 'Housecall Pro help: photo reports', url: 'https://help.housecallpro.com/en/articles/14299953-photo-report-on-jobs', checked: '2026-11-23' },
    { name: 'Jobber pricing (plans)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Commusoft industries (no chimney)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'QuoteIQ chimney sweep software (features and prices)', url: 'https://myquoteiq.com/industries/chimney-sweep-software/', checked: '2026-11-23' },
    { name: 'SweepNspect chimney inspection app', url: 'https://sweepnspect.com/', checked: '2026-11-23' },
  ],
}
