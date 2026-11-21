import type { Industry } from '@/lib/industries'

/**
 * Security and alarm: VERIFIED (researched 2026-11-21, batch 5 draft). Fire protection has its own page.
 * ServiceTitan /industries/alarm-business-software: multi-option estimate builder, recurring-services
 * management and service agreements, drag-and-drop dispatch board, route map (QuickBooks, inspections,
 * device records not named on that page). Workiz /industries/alarm-and-security/: Good|Better|Best
 * quotes, service plans, inventory management, "fully integrates with QuickBooks"; service plans,
 * equipment tracking and multi-day jobs are on Ultimate. FieldPulse /solutions/fire-and-security:
 * estimates for complex fire and security systems, system inspections (FAQ), asset and equipment
 * management, real-time inventory, QuickBooks integration (serial-number columns seen only in an image,
 * not used). Housecall Pro help center: multi-day job appointments (plan not stated). Commusoft and
 * Jobber: no security page. Specialists: SedonaOffice (Bold Group) accounting and service software for
 * security companies, "increase RMR", Service & Inspections, own general ledger, no prices. Manitou is
 * central station monitoring software, not FSM. D-Tools Cloud publishes prices for new subscribers:
 * Single $99/mo ($89 billed annually) to Enterprise $1,199/mo ($1,079), office and field users priced
 * separately, one-time setup $250 to $2,500, QuickBooks/Xero add-on $50/mo, serial-number tracking.
 * No FSM vendor page names RMR, monitoring contracts, zone records or site surveys. ServiceTrade
 * security URL 404, left out.
 */
export const securityAlarm: Industry = {
  slug: 'security-alarm',
  name: 'Security and Alarm',
  icon: '🚨',
  category: 'Specialized',
  metaDescription:
    'Compare security and alarm software for proposals, service agreements, inspections, device records, inventory and QuickBooks. Verified vendor features.',
  datePublished: '2026-11-21',

  answer:
    'Security and alarm companies need multi-option proposals, recurring service agreements, inventory and records of the equipment they installed. ServiceTitan, Workiz and FieldPulse all have alarm or security pages, with multi-option estimates, service plans or agreements and dispatch, but none publishes a price and none of their pages names RMR or monitoring contracts. D-Tools Cloud, built for AV, security and low-voltage integrators, publishes prices from $99 a month ($89 billed annually) and tracks units by serial number. SedonaOffice, from Bold Group, is accounting and service software made for security companies. Manitou, also from Bold Group, is central station monitoring software, not a tool for scheduling installers.',

  intro:
    'An alarm or security company designs systems, installs burglar alarms, cameras and access control, then services and inspects them for years. The software has to build a proposal with options, run an install that may span several days, keep a record of the panels, cameras and devices at each site and bill recurring service agreements. Inventory matters because installs use many small parts. Many companies also bill monitoring as recurring monthly revenue (RMR), which is often handled in accounting software, so check what each tool covers before you replace anything.',

  keyFeatures: [
    'Multi-option proposals for security system designs',
    'Recurring service agreements and service plans',
    'Inspections and scheduled service visits',
    'Equipment and device records per site, with serial numbers',
    'Inventory and purchasing for install parts',
    'Dispatch, multi-day installs and QuickBooks sync',
  ],

  priceRange: {
    min: 59,
    max: null,
    note: 'Generalist FSM: Housecall Pro from $59/mo (Basic, 1 user) and Jobber from $29/mo, billed annually; neither has a security page. Security and low-voltage specialist: D-Tools Cloud $99 to $1,199 a month billed monthly, or $89 to $1,079 billed annually, plus a one-time setup fee of $250 to $2,500 and $50/mo for QuickBooks or Xero. ServiceTitan, Workiz, FieldPulse, SedonaOffice and Commusoft are quote only.',
    source: { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 7,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Alarm and security page with service agreements and a dispatch board',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger alarm companies with dispatchers and many service agreements',
        strengths: [
          'Multi-option estimate builder for techs in the field',
          'Recurring-services management and service agreements',
          'Drag-and-drop dispatch board and route-visualization map',
        ],
        limitations: [
          'No published price; packages are behind one “Get Pricing” button',
          'Its alarm page does not name inspections, device records or RMR billing',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Alarm and security page with tiered quotes, service plans and inventory',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Small and mid-size installers that want options on quotes and recurring service plans',
        strengths: [
          'Good, Better, Best quotes that fit any budget',
          'Service plans for recurring revenue and inventory management',
          'Its alarm page says it fully integrates with QuickBooks; real-time technician location',
        ],
        limitations: [
          'Every plan is “Request pricing”; service plans, equipment tracking and multi-day jobs are on Ultimate',
          'Its alarm page does not mention CCTV, access control or inspections',
        ],
      },
    },
    {
      slug: 'fieldpulse',
      positioning: 'Fire and security page with inspections, asset records and inventory',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Companies that install and inspect both fire and security systems',
        strengths: [
          'Detailed estimates for complex fire and security systems on site',
          'Automated system inspections and asset and equipment management',
          'Real-time inventory tracking and QuickBooks integration',
        ],
        limitations: [
          'Seat-based pricing is not published',
          'Its page does not name monitoring contracts, CCTV or access control',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; equipment tracking and multi-day appointments',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small residential alarm installers that want a known monthly price',
        strengths: [
          'Customer equipment tracking, employee GPS and QuickBooks Online and Desktop on Essentials',
          'Multi-day jobs with several appointments in one job (help center)',
        ],
        limitations: [
          'We could not check a Housecall Pro security page, so no security feature is listed',
          'Its help center does not say which plan includes multi-day appointments',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Owner-operator installing residential alarms', pick: 'Housecall Pro Essentials ($149/mo billed annually, up to 5 users)', why: 'Published price with customer equipment tracking, employee GPS and QuickBooks Online and Desktop.' },
    { size: 'Low-voltage integrator selling designed systems', pick: 'D-Tools Cloud (Single $99/mo, or $89 billed annually)', why: 'Built for AV, security and low-voltage integrators, with proposals, project tracking, inventory, service plans and serial-number tracking. Setup fee from $250.' },
    { size: 'Service-focused installer with recurring plans', pick: 'Workiz Ultimate (custom quote)', why: 'Good, Better, Best quotes, service plans, inventory and equipment tracking.' },
    { size: 'Company that also does fire inspections', pick: 'FieldPulse (custom quote)', why: 'One fire and security page with system inspections, asset records and inventory.' },
    { size: 'Large alarm company with RMR and its own accounting', pick: 'ServiceTitan or SedonaOffice (custom quote)', why: 'ServiceTitan runs agreements and dispatch; SedonaOffice is security-specific accounting and service software that says it helps increase RMR.' },
  ],

  extraSections: [
    {
      id: 'security-rmr-devices',
      heading: 'RMR, device records and monitoring: what to check before you buy',
      paragraphs: [
        'Field service software and monitoring software do different jobs. Manitou is central station software that receives and handles alarm signals; it does not schedule installers. SedonaOffice is accounting and service software for security companies, with its own general ledger and a Service and Inspections feature, and it is the only tool here that talks about RMR. ServiceTitan, Workiz and FieldPulse bill service agreements and plans, but none of their security pages names monitoring contracts, so ask how they bill recurring monthly monitoring.',
        'Then check device records. D-Tools Cloud can track individual units by serial number, location and lifecycle stage, FieldPulse lists asset and equipment management, and Housecall Pro tracks customer equipment on Essentials. No vendor we checked documents zone-by-zone records, so test how a tech finds the panel, zones and cameras at a site. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Confusing monitoring software with field service software. Central station tools handle alarm signals, not install schedules.',
    'Assuming recurring monthly monitoring bills itself. Ask each tool how it bills RMR, not just service agreements.',
    'Skipping device records. Without the equipment list for each site, every service call starts with guesswork.',
    'Forgetting setup fees. D-Tools Cloud charges a one-time setup fee of $250 to $2,500 on top of the monthly plan.',
  ],

  faqs: [
    {
      question: 'What is the best software for a security and alarm company?',
      answer:
        'ServiceTitan, Workiz and FieldPulse all have alarm or security pages (quote only). D-Tools Cloud is built for security and low-voltage integrators and costs $99 to $1,199 a month. SedonaOffice is accounting and service software made for security companies.',
    },
    {
      question: 'How much does alarm company software cost?',
      answer:
        'D-Tools Cloud costs $99 to $1,199 a month, or $89 to $1,079 billed annually, plus a $250 to $2,500 setup fee. Housecall Pro starts at $59 a month billed annually. ServiceTitan, Workiz, FieldPulse and SedonaOffice do not publish prices.',
    },
    {
      question: 'Which software handles RMR for alarm companies?',
      answer:
        'SedonaOffice, from Bold Group, says it helps security businesses increase RMR and includes full accounting. ServiceTitan, Workiz and FieldPulse bill service agreements and plans, but their security pages do not name RMR or monitoring contracts.',
    },
    {
      question: 'Is Manitou field service software?',
      answer:
        'No. Manitou is central station alarm monitoring software that receives and manages security signals and alarms. It does not schedule installers or run work orders.',
    },
    {
      question: 'Which security software tracks equipment by serial number?',
      answer:
        'D-Tools Cloud can track individual units by serial number, location and lifecycle stage. FieldPulse lists asset and equipment management, and Housecall Pro tracks customer equipment on Essentials.',
    },
    {
      question: 'Which security and alarm software works with QuickBooks?',
      answer:
        'Workiz says it fully integrates with QuickBooks, and FieldPulse lists a QuickBooks integration. D-Tools Cloud syncs with QuickBooks Online, Desktop and Xero for $50 a month, and Housecall Pro lists Online and Desktop on Essentials. SedonaOffice has its own general ledger.',
    },
  ],

  lastUpdated: '2026-11-21',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan alarm business software', url: 'https://www.servicetitan.com/industries/alarm-business-software', checked: '2026-11-21' },
    { name: 'Workiz alarm and security software', url: 'https://www.workiz.com/industries/alarm-and-security/', checked: '2026-11-21' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'FieldPulse fire and security solution', url: 'https://www.fieldpulse.com/solutions/fire-and-security', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Housecall Pro help: multi-day job appointments', url: 'https://help.housecallpro.com/en/articles/6930497-multi-day-job-appointments-overview', checked: '2026-11-21' },
    { name: 'Commusoft industries (no security)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'SedonaOffice (Bold Group)', url: 'https://www.boldgroup.com/financial-management-solutions/sedonaoffice/', checked: '2026-11-21' },
    { name: 'Manitou alarm monitoring software (Bold Group)', url: 'https://www.boldgroup.com/alarm-monitoring-software/manitou/', checked: '2026-11-21' },
    { name: 'D-Tools Cloud', url: 'https://www.d-tools.com/cloud', checked: '2026-11-21' },
    { name: 'D-Tools Cloud pricing', url: 'https://www.d-tools.com/cloud-pricing', checked: '2026-11-21' },
  ],
}
