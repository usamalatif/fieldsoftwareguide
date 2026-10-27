import type { Industry } from '@/lib/industries'

/**
 * Telecom (tower, line, and network field service) — VERIFIED (researched 2026-07-08).
 * No FSM vendor has a telecom/ISP/cabling vertical (checked each vendor's industries
 * page). Closest adjacency: Workiz (alarm & security), ServiceTitan (alarm + AV),
 * FieldPulse (fire & security + A/V). Jobber, Housecall Pro, Commusoft are NOT aimed
 * at telecom/low-voltage. Offline + custom-form claims verified against vendor docs.
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates).
 * 2026-10-27: verticals rechecked (still no telecom vertical); offline support rechecked per
 * vendor (Housecall Pro: view only, no offline editing); progress invoicing verified for
 * Jobber (all plans), Housecall Pro, ServiceTitan, FieldPulse, Workiz; Jobber and Housecall
 * Pro plan prices rechecked (Jobber prices now vary by team size; standard annual rates used,
 * not the 12-month intro offer).
 */
export const telecom: Industry = {
  slug: 'telecom',
  name: 'Telecom',
  icon: '📡',
  category: 'Technical',

  metaDescription:
    'Compare telecom field service management software for technician dispatch, fiber installs, offline job updates and site records, with verified plan prices.',
  datePublished: '2026-07-08',

  answer:
    'No major vendor sells telecom field service management software as a dedicated telecom product (rechecked October 2026), so telecom installers and ISP subcontractors pick the tool whose dispatch, offline editing, field forms, and billing fit their work. FieldPulse (custom-quoted) ranks first on documented evidence: its help docs list the widest offline editing for a field job (notes, photos, forms, estimates, invoices, and clock-ins), and it adds custom forms with signatures, progress invoices, asset records, and fire, security, and A/V solutions close to low-voltage work. ServiceTitan (custom-quoted) is a close second for large dispersed operations, with most job actions available offline. Small install teams can start on Jobber (from $29/month billed annually), whose app keeps timers, job forms, and notes working offline. Housecall Pro (from $59/month billed annually) lets techs view previously opened jobs offline but not edit them. These are dispatch and work-order tools, not network design or telecom project management software.',

  intro:
    'Telecom field work spans fiber and drop installs, line and tower repairs, and broadband maintenance, often at remote or rural sites with poor coverage. The right field service software dispatches technicians to each ticket, keeps a record of the equipment at every site, captures photos and test readings on forms, and keeps working when the signal drops. Longer builds add a billing problem: if you bill a carrier or general contractor in stages, you need progress invoicing, which most of these tools now support with different limits.',

  keyFeatures: [
    'Technician dispatch to install, repair, and maintenance tickets across dispersed crews',
    'Offline mobile app that keeps forms, notes, and photos until crews are back in coverage',
    'Custom forms for safety checks, close-out photos, test readings, and signatures',
    'Per-site equipment records (ONTs, radios, cabinets, nodes) with service history',
    'Progress invoicing for multi-day installs billed to carriers or general contractors',
    'QuickBooks / accounting sync for job costing across crews',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'The tools closest to telecom work (Workiz, ServiceTitan, FieldPulse) are custom-quoted and scale with crews and sites. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo (annual billing) for smaller install and low-voltage teams.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-27' },
    structured: false,
  },

  search: { monthlyVolume: 70, kd: 6, cpc: 34.06 },

  providers: [
    { slug: 'fieldpulse', positioning: 'Best documented offline editing, plus custom forms, progress invoices, and asset records', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Close second for large dispersed operations: most job actions offline, progress billing', monthlyFromUsd: null },
    { slug: 'workiz', positioning: 'Closest vertical fit: markets to alarm & security / low-voltage', monthlyFromUsd: null },
    { slug: 'jobber', positioning: 'Lowest published plan; timers, job forms, and notes work offline', monthlyFromUsd: 29 },
    { slug: 'housecall-pro', positioning: 'Published pricing for small install teams; offline viewing only', monthlyFromUsd: 59 },
  ],

  bySize: [
    { size: 'Solo installer', pick: 'Jobber Core ($29/mo)', why: 'Lowest published plan. Timers, job forms, notes, and attachments work offline and sync later. No QuickBooks sync on Core.' },
    { size: 'Small crew, 2–5 users', pick: 'Jobber Connect ($149/mo for 5 users)', why: 'Adds checklists and QuickBooks Online sync. Housecall Pro Essentials costs the same for 5 users but cannot edit jobs offline.' },
    { size: 'Multiple crews at remote sites', pick: 'FieldPulse (custom quote)', why: 'Offline, techs can still edit notes, photos, forms, estimates, and invoices and clock in or out. You cannot create jobs or take payments offline.' },
    { size: 'Large dispersed operation', pick: 'ServiceTitan (custom quote)', why: 'Most job actions work offline, plus progress billing on projects. Built and priced for larger companies.' },
  ],

  extraSections: [
    {
      id: 'telecom-fsm-vs-project-management',
      heading: 'Telecom field service software vs telecom project management',
      paragraphs: [
        'Field service software runs the work a technician does on site: a ticket comes in, someone dispatches the nearest qualified tech, the tech installs or repairs, documents the job with photos and forms, and the customer or contractor is invoiced. That covers fiber drops and ONT installs, line and cabinet repairs, small-cell and tower maintenance visits, and broadband troubleshooting calls.',
        'Network build planning is a different category. Route design, permitting, splice records, and GIS mapping for a fiber build are handled by telecom project and network management systems, and none of the six FSM tools here markets those features. Many contractors run both: the carrier or general contractor manages the build plan, and the subcontractor uses field service software to dispatch crews and get paid. If your work is mostly multi-week builds, compare how each tool handles projects before you compare dispatch.',
      ],
    },
    {
      id: 'telecom-offline',
      heading: 'What actually works offline in each app',
      paragraphs: [
        '“Works offline” means different things in each app, and the difference is what techs can edit, not whether the app opens. FieldPulse switches to offline mode when it loses signal and keeps job notes, photos, forms, estimates, invoices, and clock-ins editable, but you cannot create new jobs or customers or take payments until you reconnect. ServiceTitan says you can take most actions within a job offline, though directions, location history, and automated timesheets need a connection. Jobber keeps timers, job forms, notes, and attachments working offline and syncs them later. Workiz says techs can update job information with limited or no connectivity.',
        'Housecall Pro is the exception: techs can view a job offline if they opened it while connected, but editing without cell service or Wi-Fi is not supported. We rank FieldPulse first because its documentation lists the widest offline editing alongside the other telecom needs (custom forms with signatures, progress invoices, asset records); ServiceTitan is close behind but is built and priced for larger companies. Neither ranking is based on hands-on testing, so for rural fiber routes or tower sites, test offline mode in a trial with the phone in airplane mode before you buy.',
      ],
    },
    {
      id: 'telecom-job-workflow',
      heading: 'A fiber install, end to end: what to test in a demo',
      paragraphs: [
        'Run one realistic job through every tool on your shortlist: an install ticket is created, the dispatcher assigns it to a tech near the route, the tech loses signal at the site, completes a safety checklist and a close-out form with photos of the splice point and the installed equipment, records test readings in custom fields, gets a signature, and the job syncs back when the tech is in coverage. If you bill in stages, finish by raising a progress invoice for the first stage of a multi-day job.',
        'Progress invoicing is documented by Jobber (payment schedules on all plans), Housecall Pro, ServiceTitan, FieldPulse, and Workiz (payment schedules). Housecall Pro’s version applies to new jobs only and cannot invoice more than the job total. Accounting is the other check: Jobber Core and Housecall Pro Basic do not include QuickBooks sync, so see [which FSM tools work with QuickBooks](/quickbooks). For a full Housecall Pro plan breakdown, read [Housecall Pro pricing](/pricing/housecall-pro), and for other remote-site trades see [oil and gas field service software](/by-industry/oil-gas).',
      ],
    },
  ],

  mistakes: [
    'Assuming “offline” means the whole app works without signal. Every tool here limits something offline, and Housecall Pro does not allow offline editing at all.',
    'Buying field service software to plan a network build. FSM tools dispatch and document field work; route design, permitting, and splice records belong in telecom project or network management systems.',
    'Skipping the progress-billing test. If carriers or contractors pay in stages, raise a progress invoice in the trial and check its limits.',
    'Waiting for a telecom template. No vendor here ships telecom-specific forms, so plan to build your safety, close-out, and test-reading forms once and reuse them.',
  ],

  faqs: [
    {
      question: 'What is the best telecom field service management software?',
      answer:
        'No major FSM vendor markets a telecom vertical (rechecked October 2026). For crews at remote sites, FieldPulse ranks first because its help docs list the widest offline editing (notes, photos, forms, estimates, invoices) alongside custom forms, progress invoices, and asset records. ServiceTitan is a close second for large operations and Workiz markets an alarm and security vertical close to low-voltage work; all three are custom-quoted. Small install teams can start on Jobber (from $29/month billed annually).',
    },
    {
      question: 'Is telecom field service software the same as telecom project management software?',
      answer:
        'No. Field service software dispatches technicians to install, repair, and maintenance tickets and documents the work on site. Network build planning, permitting, splice records, and GIS mapping are handled by telecom project and network management systems, which none of the FSM tools compared here market.',
    },
    {
      question: 'Does telecom field software work offline at remote sites?',
      answer:
        'Mostly, with limits on what techs can edit. FieldPulse keeps notes, photos, forms, estimates, and invoices editable offline (no new jobs or payments), ServiceTitan supports most job actions offline, Jobber keeps timers, job forms, notes, and attachments working offline, and Workiz says techs can update jobs with limited connectivity. Housecall Pro lets techs view previously opened jobs offline but not edit them.',
    },
    {
      question: 'Can it handle multi-day telecom installs and progress billing?',
      answer:
        'Yes, with differences. Jobber includes payment schedules for progress invoices on all plans, and Housecall Pro, ServiceTitan, FieldPulse, and Workiz also document progress invoicing or payment schedules. Housecall Pro applies it to new jobs only and caps it at the job total. Test your billing stages in a trial before you commit.',
    },
    {
      question: 'How much does telecom field service software cost?',
      answer:
        'The closest-fit platforms (Workiz, ServiceTitan, FieldPulse) are custom-quoted and scale with crews and sites. Published plans start at $29/month for Jobber Core (1 user) and $59/month for Housecall Pro Basic (1 user), billed annually; for a 5-user crew, Jobber Connect and Housecall Pro Essentials are both $149/month billed annually.',
    },
    {
      question: 'Can it capture safety and close-out inspections for tower and line work?',
      answer:
        'Yes. FieldPulse and ServiceTitan include custom form builders with signature fields, and photos can be attached to the job, so you can build climb-safety checklists and close-out packages for the carrier or general contractor. No vendor ships telecom-specific templates; you build them once and reuse them.',
    },
  ],

  lastUpdated: '2026-10-27',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-27' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-27' },
    { name: 'Workiz alarm & security vertical', url: 'https://www.workiz.com/industries/alarm-and-security/', checked: '2026-10-27' },
    { name: 'ServiceTitan alarm business software', url: 'https://www.servicetitan.com/industries/alarm-business-software', checked: '2026-10-27' },
    { name: 'ServiceTitan audio-visual business software', url: 'https://www.servicetitan.com/industries/audio-visual-business-software', checked: '2026-10-27' },
    { name: 'FieldPulse fire & security vertical', url: 'https://www.fieldpulse.com/solutions/fire-and-security', checked: '2026-10-27' },
    { name: 'FieldPulse A/V installation', url: 'https://www.fieldpulse.com/solutions/av-installation', checked: '2026-10-27' },
    { name: 'FieldPulse offline mode', url: 'https://help.fieldpulse.com/en/articles/4063488-offline-mode', checked: '2026-10-27' },
    { name: 'ServiceTitan field mobile app FAQ (offline)', url: 'https://help.servicetitan.com/faq/servicetitan-field-mobile-app-faq', checked: '2026-10-27' },
    { name: 'Jobber app troubleshooting (offline use)', url: 'https://help.getjobber.com/hc/en-us/articles/360037203234-Troubleshooting-Tips-How-to-Help-Us-Help-You', checked: '2026-10-27' },
    { name: 'Housecall Pro mobile FAQ (offline viewing)', url: 'https://help.housecallpro.com/en/articles/4747652-housecall-pro-mobile-faq', checked: '2026-10-27' },
    { name: 'Workiz mobile app', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-10-27' },
    { name: 'FieldPulse custom forms', url: 'https://www.fieldpulse.com/features/custom-forms', checked: '2026-10-27' },
    { name: 'Jobber progress invoicing', url: 'https://help.getjobber.com/en/articles/progress-invoicing/', checked: '2026-10-27' },
    { name: 'Housecall Pro progress invoicing', url: 'https://help.housecallpro.com/en/articles/8142156-progress-invoicing-basics-and-faqs', checked: '2026-10-27' },
    { name: 'ServiceTitan progress billing', url: 'https://help.servicetitan.com/how-to/project-tracking-progress-billing', checked: '2026-10-27' },
    { name: 'FieldPulse progress payments', url: 'https://help.fieldpulse.com/using-fieldpulse/payments/how-to/partial-progress-payments', checked: '2026-10-27' },
    { name: 'Workiz payment schedules', url: 'https://help.workiz.com/hc/en-us/articles/38044340324753', checked: '2026-10-27' },
  ],
}
