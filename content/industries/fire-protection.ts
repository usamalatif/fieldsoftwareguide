import type { Industry } from '@/lib/industries'

/**
 * Fire protection and life safety: VERIFIED (researched 2026-11-21, batch 4 draft).
 * ServiceTitan fire page names NFPA 25 and NFPA 72 forms (not NFPA 10), deficiency-to-quote,
 * equipment scanning, AHJ-ready reports and a customer portal; no compliance portal named; its
 * accounting page lists QuickBooks Online and Desktop. FieldPulse "Fire and Security" page names no
 * NFPA standard and no deficiency workflow; asset columns for serial number, manufacturer and
 * warranty. Commusoft has no fire page (404); its building maintenance page mentions inspecting fire
 * safety equipment, multi-site management and a customer portal. Workiz has Alarm and Security only
 * (no fire or NFPA). Jobber does not list fire in its homepage industries; Housecall Pro help center
 * has nothing fire-specific. Specialists: ServiceTrade (no prices shown 2026-11-21; priced mainly by
 * technician count, office users free; digital inspections and Brycer/The Compliance Engine on Fire
 * Premium), Inspect Point (NFPA 10, 25, 72, 80, 101 and ULC S536/S537; The Compliance Engine, IROL,
 * LivSafe; QuickBooks Online and Desktop; quoted, from three technicians), BuildOps (NFPA 25 and 72
 * on its page; inspections through Inspect Point; priced by field and office users). No tool here
 * publishes a price for fire work, so the price range is not structured.
 */
export const fireProtection: Industry = {
  slug: 'fire-protection',
  name: 'Fire Protection',
  icon: '🧯',
  category: 'Specialized',
  metaDescription:
    'Compare fire protection software for NFPA 10, 25 and 72 inspections, deficiency quotes, compliance portals and multi-site accounts. Verified vendor features.',
  datePublished: '2026-11-21',

  answer:
    'Fire protection companies need inspection software first and field service software second, so check which NFPA standards a tool names and how deficiencies and reports reach customers and AHJs. Among the six major FSM vendors, only ServiceTitan documents fire inspection depth: NFPA 25 and NFPA 72 forms, deficiencies turned into quotes, equipment scanning and AHJ-ready reports. FieldPulse has a fire and security page but names no NFPA standard. Fire-specific platforms go further: Inspect Point names NFPA 10, 25, 72, 80 and 101 and submits results to The Compliance Engine, IROL and LivSafe, and ServiceTrade connects to The Compliance Engine on its Fire Premium plan. BuildOps runs inspections through Inspect Point. None of these publishes a price, so get quotes based on your technician count.',

  intro:
    'A fire protection company sells recurring compliance. Extinguishers, sprinkler systems and fire alarm panels each have their own inspection, testing and maintenance cycle, every visit has to produce a report that the building owner and often the local authority having jurisdiction (AHJ) will read, and every deficiency found is a repair job waiting to be quoted. The right software schedules inspections by system and frequency, records each device at each site, turns deficiencies into priced quotes, and delivers reports to the customer and, where the jurisdiction uses one, a compliance portal.',

  keyFeatures: [
    'Recurring inspections scheduled per system and NFPA frequency',
    'Digital inspection forms for NFPA 10, 25 and 72 (check which standards each tool names)',
    'Deficiencies turned into repair quotes without re-entry',
    'Device and asset records per site, with barcode or QR scanning',
    'Report delivery to customers and compliance portals such as The Compliance Engine',
    'Multi-site commercial accounts with a customer portal',
  ],

  priceRange: {
    min: null,
    max: null,
    note: 'No fire-focused tool we checked publishes a price. ServiceTrade prices mainly by technician count with free office users, Inspect Point quotes by team size, trades and modules (plans start at three technicians), BuildOps prices by field and office users, and ServiceTitan, FieldPulse and Commusoft are quote only. Jobber and Housecall Pro publish prices but document no fire inspection features.',
    source: { name: 'ServiceTrade pricing', url: 'https://servicetrade.com/pricing/', checked: '2026-11-21' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 6,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'NFPA 25 and 72 forms, deficiency quotes and AHJ-ready reports',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Fire companies that also run service and installs and want one platform',
        strengths: [
          'Recurring inspections tied to NFPA-mandated frequencies, with NFPA 25 and NFPA 72 forms',
          'Converts deficiencies into quotes from field findings',
          'Equipment scanning, AHJ-ready reports and a customer portal',
          'QuickBooks Online and Desktop, Sage Intacct, NetSuite and Viewpoint integrations',
        ],
        limitations: [
          'Its fire page does not name NFPA 10 or a compliance portal such as The Compliance Engine',
          'No published price',
        ],
      },
    },
    {
      slug: 'fieldpulse',
      positioning: 'Fire and security page with asset records and custom forms',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Small fire and security contractors that build their own inspection forms',
        strengths: [
          'Asset records with serial number, manufacturer and warranty expiration',
          'Custom digital forms, customer sites management and stock tracking across trucks and sites',
        ],
        limitations: [
          'Names no NFPA standard and no deficiency-to-quote workflow',
          'Seat-based pricing is not published; QuickBooks Online access is requested first',
        ],
      },
    },
    {
      slug: 'commusoft',
      positioning: 'Building maintenance product that mentions fire safety inspections',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Facility maintenance firms that inspect fire safety equipment alongside other work',
        strengths: [
          'Service contracts for recurring planned maintenance, with equipment history and inspection forms',
          'Multi-site management and a customer portal',
        ],
        limitations: [
          'No fire protection page; no NFPA standard or deficiency workflow named',
          'Says it is designed for businesses with six or more staff; no published price',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Small inspection company (3+ techs)', pick: 'Inspect Point (custom quote)', why: 'Plans start at three technicians and name NFPA 10, 25, 72, 80 and 101, with submission to The Compliance Engine, IROL and LivSafe and QuickBooks Online and Desktop.' },
    { size: 'Growing fire service and inspection company', pick: 'ServiceTrade Fire Premium (custom quote)', why: 'Priced mainly by technicians with free office users; Premium adds digital inspections, compliance reporting and the Brycer (The Compliance Engine) integration.' },
    { size: 'Fire plus HVAC, plumbing or other trades', pick: 'ServiceTitan (custom quote)', why: 'NFPA 25 and 72 forms and deficiency quotes alongside full service, dispatch and accounting integrations.' },
    { size: 'Commercial MEP contractor with a fire division', pick: 'BuildOps with Inspect Point (custom quote)', why: 'Inspection findings from Inspect Point flow into BuildOps scheduling and billing; priced by field and office users.' },
  ],

  extraSections: [
    {
      id: 'fire-standards-reports',
      heading: 'Standards, deficiencies and reports: what to check before you buy',
      paragraphs: [
        'Start with the standards you inspect to. Inspect Point names NFPA 10 for extinguishers, NFPA 25 for sprinklers and NFPA 72 for fire alarms, plus NFPA 80 and 101 and Canada’s ULC S536 and S537. ServiceTitan names NFPA 25 and 72 on its fire page, BuildOps names 25 and 72 on its fire page (and NFPA 10 in a resource article), and ServiceTrade refers to NFPA forms without naming numbers. Ask each vendor to show the exact form for every system type you service.',
        'Then follow one deficiency from the field to the invoice. ServiceTitan, ServiceTrade and Inspect Point all describe turning deficiencies into quotes, and BuildOps does it through its Inspect Point integration. Finally, check report delivery: Inspect Point submits to The Compliance Engine, IROL and LivSafe where the jurisdiction uses them, ServiceTrade connects to The Compliance Engine on Fire Premium, and ServiceTitan generates AHJ-ready reports and a customer portal. Our [commercial HVAC software guide](/guides/commercial-hvac-software) covers multi-site service features that also matter here.',
      ],
    },
  ],

  mistakes: [
    'Assuming “NFPA forms” covers every standard. ServiceTitan names NFPA 25 and 72 but not NFPA 10; ask for the extinguisher form if you service extinguishers.',
    'Ignoring the compliance portal your AHJ uses. Inspect Point submits to The Compliance Engine, IROL and LivSafe; ServiceTrade connects to The Compliance Engine on Premium only.',
    'Buying a home-service tool for commercial inspections. Jobber, Housecall Pro and Workiz document no fire inspection features.',
    'Comparing prices without counting technicians. ServiceTrade prices mainly by technician count, Inspect Point starts at three technicians, and BuildOps counts field and office users.',
  ],

  faqs: [
    {
      question: 'What is the best software for fire protection companies?',
      answer:
        'Fire-specific platforms cover the most: Inspect Point names NFPA 10, 25, 72, 80 and 101 and submits to The Compliance Engine, IROL and LivSafe, and ServiceTrade adds The Compliance Engine on Fire Premium. Among general FSM tools, ServiceTitan documents NFPA 25 and 72 forms and deficiency quotes. All are quote only.',
    },
    {
      question: 'How much does fire inspection software cost?',
      answer:
        'None of the fire-focused tools we checked publishes a price. ServiceTrade prices mainly by technician count with free office users, Inspect Point quotes by team size, trades and modules starting at three technicians, and BuildOps prices by field and office users. Get written quotes for the same technician count.',
    },
    {
      question: 'Which software supports NFPA 10, 25 and 72 inspections?',
      answer:
        'Inspect Point names all three, plus NFPA 80 and 101. ServiceTitan names NFPA 25 and 72 inspection forms on its fire page. BuildOps names 25 and 72 on its fire page and NFPA 10 in a resource article. FieldPulse names no NFPA standard.',
    },
    {
      question: 'Does fire protection software integrate with The Compliance Engine?',
      answer:
        'Inspect Point says results and deficiencies submit to The Compliance Engine, IROL and LivSafe where the jurisdiction uses them. ServiceTrade lists a Brycer integration (Brycer runs The Compliance Engine) on its Fire Premium plan. ServiceTitan names AHJ-ready reports but no specific compliance portal.',
    },
    {
      question: 'Can fire inspection software turn deficiencies into quotes?',
      answer:
        'Yes. ServiceTitan says it converts every deficiency into a quote, ServiceTrade sends deficiency repair quotes customers approve with a click, and Inspect Point turns deficiencies into priced proposals from your price book. BuildOps receives deficiencies from Inspect Point and quotes and bills the repairs.',
    },
    {
      question: 'Which fire protection software works with QuickBooks?',
      answer:
        'ServiceTitan supports QuickBooks Online and Desktop, and Inspect Point names QuickBooks Desktop and Online. ServiceTrade includes a QuickBooks integration from its Select plan, BuildOps lists QuickBooks without naming the edition, and FieldPulse offers QuickBooks Online on request.',
    },
  ],

  lastUpdated: '2026-11-21',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan fire and life safety software', url: 'https://www.servicetitan.com/industries/fire-life-safety-software', checked: '2026-11-21' },
    { name: 'ServiceTitan accounting integrations', url: 'https://www.servicetitan.com/features/accounting/integrations', checked: '2026-11-21' },
    { name: 'FieldPulse fire and security solution', url: 'https://www.fieldpulse.com/solutions/fire-and-security', checked: '2026-11-21' },
    { name: 'FieldPulse help: QuickBooks Online sync', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-online/sync', checked: '2026-11-21' },
    { name: 'Commusoft building maintenance software', url: 'https://www.commusoft.com/en-us/industries/building-maintenance-software/', checked: '2026-11-21' },
    { name: 'Workiz industries (alarm and security, no fire)', url: 'https://www.workiz.com/industries/', checked: '2026-11-21' },
    { name: 'ServiceTrade fire protection software', url: 'https://servicetrade.com/industries/fire-protection/', checked: '2026-11-21' },
    { name: 'ServiceTrade pricing (by technician count, Fire suite tiers)', url: 'https://servicetrade.com/pricing/', checked: '2026-11-21' },
    { name: 'Inspect Point company information (standards, portals, pricing basis)', url: 'https://www.inspectpoint.com/inspect-point-information', checked: '2026-11-21' },
    { name: 'Inspect Point platform', url: 'https://www.inspectpoint.com/platform', checked: '2026-11-21' },
    { name: 'BuildOps fire safety software', url: 'https://buildops.com/industries/fire-safety', checked: '2026-11-21' },
    { name: 'BuildOps fire protection service software (resource)', url: 'https://buildops.com/resources/fire-protection-service-software', checked: '2026-11-21' },
    { name: 'BuildOps pricing (by field and office users)', url: 'https://buildops.com/pricing', checked: '2026-11-21' },
  ],
}
