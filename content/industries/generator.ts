import type { Industry } from '@/lib/industries'

/**
 * Generator installers and service: VERIFIED (researched 2026-11-23, batch 9 draft).
 * Commusoft /industries/generator-installation-and-maintenance-software/: service history, inspections
 * and component replacements per unit, Service Contract Management for recurring maintenance, SLA
 * clocks, digital forms, handover packs with load bank test results, multi-stage installs from site
 * survey to commissioning, QuickBooks, "designed for businesses with 6 or more staff"; no prices.
 * ServiceTitan and Workiz generator URLs 404; ServiceTitan help center: equipment with manufacturer,
 * model, serial, capacity, install date and manufacturer and service provider warranty dates. FieldPulse
 * electrical CRM page: reminders for annual inspections such as generator service, maintenance
 * agreements. Housecall Pro help center: property profile with make, model, serial and install date (no
 * warranty field); Wisetack financing for jobs of $500 to $65,000. Generator tools: Smart Service
 * (QuickBooks add-on) generator page: make, model, serial, fuel type, transfer switch, install date,
 * warranty status; self-renewing maintenance agreements; inspection and test results on custom forms;
 * multi-visit installs as one job; QuickBooks Online and Desktop; from $129 per user a month with a
 * five-user minimum. GenService Pro: $39 (2 users), $75 (5), $149 (10) a month, $10 per extra user;
 * young product. QuoteIQ generator page price conflicts with its pricing page, so its price is not used.
 * No vendor names remote monitoring integrations or permit tracking.
 */
export const generator: Industry = {
  slug: 'generator',
  name: 'Generator',
  icon: '⚡',
  category: 'Trades',
  metaDescription:
    'Compare generator dealer software for unit records, maintenance agreements, load bank test reports, multi-visit installs and QuickBooks. Verified prices.',
  datePublished: '2026-11-24',

  answer:
    'Generator dealers earn on installs and then years of maintenance, so unit records, maintenance agreements and test reports matter most. Commusoft is the only big field service tool we checked with a generator page: multi-stage installs from site survey to commissioning, recurring maintenance contracts and handover packs with load bank test results (quote only, built for 6 or more staff). Smart Service, a QuickBooks add-on, has a generator page that records make, model, serial, fuel type, transfer switch, install date and warranty status, from $129 per user a month with a five-user minimum. GenService Pro, a newer generator-only tool, costs $39 to $149 a month. No tool we checked names a remote monitoring integration.',

  intro:
    'A generator business sells and installs standby units, then services them on a schedule: annual or semi-annual maintenance, load bank tests on commercial sites and emergency calls when the power goes out. An install often takes several visits, from site survey to startup. The software has to keep a record of each unit, renew maintenance agreements automatically, capture inspection and test results and bill the work. Many dealers also sell financing on residential installs.',

  keyFeatures: [
    'Unit records with model, serial, install date and warranty',
    'Maintenance agreements that schedule and renew themselves',
    'Inspection checklists and load bank test results',
    'Multi-visit installs from site survey to startup',
    'Emergency dispatch when the power goes out',
    'Financing and QuickBooks sync',
  ],

  priceRange: {
    min: 39,
    max: null,
    note: 'Generator tools: GenService Pro $39, $75 or $149 a month for 2, 5 or 10 users, plus $10 per extra user; Smart Service from $129 per user a month with a five-user minimum. Generalist FSM: Jobber from $29/mo and Housecall Pro from $59/mo, billed annually, with no confirmed generator page. Commusoft, which has a generator page, is quote only.',
    source: { name: 'GenService Pro plans', url: 'https://www.genservicepro.com/', checked: '2026-11-23' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 9,

  providers: [
    {
      slug: 'commusoft',
      positioning: 'Only big FSM tool we checked with a generator page',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Generator dealers with 6 or more staff and commercial maintenance contracts',
        strengths: [
          'Multi-stage installs from site survey to final commissioning',
          'Service Contract Management automates recurring maintenance; SLA clocks for urgent calls',
          'Handover packs with load bank test results, site photos and spec sheets; QuickBooks integration',
        ],
        limitations: [
          'No published price; per-user licences',
          'Its generator page does not list serial, kW or warranty fields',
        ],
      },
    },
    {
      slug: 'servicetitan',
      positioning: 'Detailed equipment records with warranty dates',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Electrical contractors that sell generators alongside other work',
        strengths: [
          'Equipment records with manufacturer, model, serial, capacity and install date',
          'Manufacturer and service provider warranty dates; memberships in Core',
        ],
        limitations: [
          'No generator page (its generator URL returns not found); no published price',
          'No load bank or generator inspection forms confirmed',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; unit records and Wisetack financing',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Residential generator installers that offer customer financing',
        strengths: [
          'Property profiles with make, model, serial number and install date',
          'Wisetack financing for jobs from $500 to $65,000; QuickBooks Online and Desktop on Essentials',
        ],
        limitations: [
          'No warranty field on property profiles; we could not check a generator page',
          'Recurring service plans need MAX ($299/mo billed annually)',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Small residential installer', pick: 'GenService Pro Starter ($39/mo, 2 users)', why: 'Generator-only tool with unit records, a warranty module and service schedules that book the next visit automatically. A newer product.' },
    { size: 'Installer that offers financing', pick: 'Housecall Pro Essentials ($149/mo billed annually)', why: 'Unit records with serial and install date, Wisetack financing and QuickBooks Online and Desktop.' },
    { size: 'Dealer running on QuickBooks', pick: 'Smart Service (from $129 per user a month, 5-user minimum)', why: 'A QuickBooks add-on with detailed generator unit records, self-renewing maintenance agreements and multi-visit installs.' },
    { size: 'Commercial service company with load bank testing', pick: 'Commusoft (custom quote)', why: 'Generator page with service contracts, SLA clocks and handover packs that include load bank test results.' },
    { size: 'Electrical contractor adding generators', pick: 'ServiceTitan (custom quote)', why: 'Equipment records with capacity and warranty dates, plus memberships.' },
  ],

  extraSections: [
    {
      id: 'generator-units-agreements',
      heading: 'Unit records, maintenance agreements and test reports: what to test',
      paragraphs: [
        'Add a real unit. Smart Service records make, model, serial, fuel type, transfer switch, install date and warranty status, ServiceTitan tracks manufacturer and service provider warranty dates, and Housecall Pro stores serial and install date but has no warranty field. None of the tools we checked lists kW as its own field, so note where you would record it.',
        'Then set up a maintenance agreement and a test. Smart Service generates agreement visits ahead of time and sends renewal reminders, and Commusoft automates recurring maintenance through service contracts and puts load bank test results into handover packs. No tool we checked connects to generator remote monitoring, so alerts still reach you outside the software. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Losing warranty dates. Record install date and warranty on every unit so claims go through.',
    'Renewing agreements by hand. Choose a tool that generates visits and reminds you before contracts expire.',
    'Keeping test results in email. Store inspection and load bank results on the unit record.',
    'Expecting remote monitoring alerts in your field software. No tool we checked integrates them.',
  ],

  faqs: [
    {
      question: 'What is the best software for a generator business?',
      answer:
        'Commusoft is the only big field service tool we checked with a generator page (quote only). Smart Service, a QuickBooks add-on, has a generator page from $129 per user a month, and GenService Pro costs $39 to $149 a month.',
    },
    {
      question: 'How much does generator service software cost?',
      answer:
        'GenService Pro costs $39, $75 or $149 a month for 2, 5 or 10 users. Smart Service starts at $129 per user a month with a five-user minimum. Housecall Pro starts at $59 a month billed annually. Commusoft does not publish prices.',
    },
    {
      question: 'Which generator software tracks serial numbers and warranties?',
      answer:
        'Smart Service records make, model, serial, fuel type, transfer switch, install date and warranty status. ServiceTitan tracks serial, install date and warranty dates, and Housecall Pro stores serial and install date without a warranty field.',
    },
    {
      question: 'Which software records load bank test results?',
      answer:
        'Commusoft’s handover packs gather load bank test results, site photos and equipment spec sheets. Smart Service captures inspection and test results on custom forms stored with each unit.',
    },
    {
      question: 'Does generator software connect to remote monitoring?',
      answer:
        'Not in any tool we checked. Commusoft, Smart Service, GenService Pro and the generalist tools do not name a remote monitoring integration on their pages.',
    },
    {
      question: 'Which generator software works with QuickBooks?',
      answer:
        'Smart Service is a QuickBooks add-on for QuickBooks Online and Desktop, and Commusoft lists a QuickBooks integration. Housecall Pro lists Online and Desktop on Essentials, and Jobber offers QuickBooks Online from Connect.',
    },
  ],

  lastUpdated: '2026-11-24',
  dataVerified: true,
  sources: [
    { name: 'Commusoft generator installation and maintenance software', url: 'https://www.commusoft.com/en-us/industries/generator-installation-and-maintenance-software/', checked: '2026-11-23' },
    { name: 'ServiceTitan help: installed equipment', url: 'https://help.servicetitan.com/docs/track-manage-installed-equipment', checked: '2026-11-23' },
    { name: 'FieldPulse electrical CRM (generator service reminders)', url: 'https://www.fieldpulse.com/solutions/electrical/crm-software', checked: '2026-11-23' },
    { name: 'Housecall Pro help: property profile', url: 'https://help.housecallpro.com/en/articles/3703307-property-profile', checked: '2026-11-23' },
    { name: 'Housecall Pro help: financing options', url: 'https://help.housecallpro.com/en/articles/12977893-financing-options-with-housecall-pro', checked: '2026-11-23' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Jobber pricing (plans)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Smart Service generator service software', url: 'https://www.smartservice.com/industry/generator-service-software', checked: '2026-11-23' },
    { name: 'Smart Service pricing', url: 'https://www.smartservice.com/pricing', checked: '2026-11-23' },
    { name: 'GenService Pro (features and plans)', url: 'https://www.genservicepro.com/', checked: '2026-11-23' },
  ],
}
