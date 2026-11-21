import type { Industry } from '@/lib/industries'

/**
 * Appliance repair: VERIFIED (researched 2026-11-21, batch 4 draft).
 * Workiz appliance page: track back-ordered parts, link purchase orders and tracking to the job,
 * QuickBooks, JB Warranties (selling warranties, not claims); its Dispatch.me integration brings OEM,
 * home warranty and network work orders into the Workiz inbox and is included with all plans.
 * FieldPulse /solutions/appliance-repair plus its own article: brand, model and serial at booking,
 * per-van parts tracking, a configurable parts-pending stage (ClearPath), two-way QuickBooks Online;
 * no built-in manufacturer claim filing. ServiceTitan appliance page: online booking, equipment
 * history, automated truck inventory, pricebook and mobile estimates, QuickBooks Online. Housecall
 * Pro help center has an appliance repair service plan template (example prices set by the user).
 * Jobber's appliance page and Housecall Pro's www page were not fetched. Commusoft: no appliance page.
 * Warranty networks: ServiceBench (Asurion) and ServicePower are claims and dispatch networks run for
 * manufacturers and administrators, not software a shop buys; no prices. Rossware ServiceDesk links
 * to ServiceBench, ServicePower, Samsung and LG dispatches; its only price list is dated 12/1/16, so
 * no Rossware price is shown. No vendor documents diagnostic or service-call fee pricing.
 */
export const applianceRepair: Industry = {
  slug: 'appliance-repair',
  name: 'Appliance Repair',
  icon: '🔌',
  category: 'Trades',
  metaDescription:
    'Compare appliance repair software for model and serial capture, parts on order, second visits, warranty company work orders and booking. Verified features.',
  datePublished: '2026-11-21',

  answer:
    'Appliance repair hinges on parts and warranty work: you capture the model and serial number, diagnose, order the part, and come back for a second visit, often for a warranty company. Workiz fits that flow best among the six major FSM vendors: it tracks back-ordered parts on the job, and its Dispatch.me integration, included with all plans, brings in work orders from manufacturers and home warranty companies (quote only). FieldPulse captures brand, model and serial at booking, tracks parts per van and supports a configurable parts-pending stage (custom quote). ServiceTitan offers online booking, equipment history and truck inventory (custom quote). Housecall Pro publishes prices from $59/month and lists customer equipment tracking on Essentials. Manufacturer claims run through networks like ServiceBench and ServicePower, which shops join as servicers.',

  intro:
    'An appliance repair call rarely ends on the first visit. The tech diagnoses a washer, dryer, refrigerator or range, records the brand, model and serial number, orders the part and books a return visit when it arrives. A good share of the work comes from manufacturers and home warranty companies, which send their own work orders and pay through their own claim systems. The right software keeps each appliance on the customer record, tracks parts on order and on the van, schedules the second visit without losing the job, and brings warranty-company jobs into the same schedule as your retail calls.',

  keyFeatures: [
    'Brand, model and serial number capture at booking and on site',
    'Parts on order linked to the job, with a waiting-on-parts status',
    'Second visits under the same job when the part arrives',
    'Work orders from manufacturers and home warranty companies in your inbox',
    'Van inventory for common parts',
    'Online booking, equipment history and QuickBooks sync',
  ],

  priceRange: {
    min: 59,
    max: null,
    note: 'Housecall Pro publishes Basic $59, Essentials $149 (up to 5 users) and MAX $299 (up to 8 users) a month billed annually. Workiz, FieldPulse and ServiceTitan, which all have appliance repair pages, are quote only. ServiceBench and ServicePower are warranty networks rather than software a shop buys, and publish no prices.',
    source: { name: 'Workiz pricing plans', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 6,

  providers: [
    {
      slug: 'workiz',
      positioning: 'Back-ordered parts tracking and warranty company work orders via Dispatch.me',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Shops that take manufacturer and home warranty work alongside retail calls',
        strengths: [
          'Tracks back-ordered parts and links purchase orders and tracking info to the job',
          'Dispatch.me integration, included with all plans, brings OEM, home warranty and network jobs into the Workiz inbox',
          'Online booking and QuickBooks Online sync on every plan',
        ],
        limitations: [
          'Every plan is “Request pricing”; equipment tracking is on Ultimate',
          'JB Warranties is for selling warranties, not filing manufacturer claims',
        ],
      },
    },
    {
      slug: 'fieldpulse',
      positioning: 'Model and serial capture, per-van parts and a parts-pending stage',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Independent repair shops that want strong appliance records and parts tracking',
        strengths: [
          'Captures brand, model number, serial number and symptom at booking; asset records with serial numbers',
          'Per-van parts tracking with barcode scanning and low-stock alerts',
          'Configurable parts-pending stage and multiple visits under one parent job; two-way QuickBooks Online',
        ],
        limitations: [
          'Return visits take configuration rather than a purpose-built feature',
          'No built-in manufacturer claim filing; seat-based pricing not published',
        ],
      },
    },
    {
      slug: 'servicetitan',
      positioning: 'Online booking, equipment history and automated truck inventory',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger multi-truck appliance companies with dispatchers',
        strengths: [
          'Online booking and equipment history on site',
          'Automated inventory management to keep trucks stocked; pricebook and mobile estimates',
          'QuickBooks Online integration',
        ],
        limitations: [
          'Its appliance page does not mention model and serial capture, parts on order or warranty work orders',
          'No published price',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; appliance repair service plan template',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small appliance repair businesses that want a known monthly price',
        strengths: [
          'Help center includes a service plan template for appliance repair',
          'Customer equipment tracking, flat-rate pricing and QuickBooks Online and Desktop on Essentials ($149/month for up to 5 users)',
        ],
        limitations: [
          'No parts-on-order or warranty company work order feature found in its help center',
          'Recurring Service Plans are on MAX ($299/month)',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Owner-operator', pick: 'Housecall Pro Basic ($59/mo) or Essentials ($149/mo)', why: 'Published prices with online booking; Essentials adds customer equipment tracking and QuickBooks.' },
    { size: 'Shop with warranty company work', pick: 'Workiz (custom quote)', why: 'Dispatch.me brings OEM and home warranty work orders into the inbox on every plan, and parts on back order stay linked to the job.' },
    { size: 'Independent shop focused on parts and records', pick: 'FieldPulse (custom quote)', why: 'Model and serial capture at booking, per-van parts tracking and a parts-pending status.' },
    { size: 'Multi-truck operation', pick: 'ServiceTitan (custom quote)', why: 'Online booking, equipment history and automated truck inventory with a full pricebook.' },
  ],

  extraSections: [
    {
      id: 'appliance-parts-warranty',
      heading: 'Parts on order, second visits and warranty work: what to test',
      paragraphs: [
        'Run a two-visit job through every tool on your shortlist: book a refrigerator call and capture the brand, model and serial number, diagnose on site, order the part, set the job to waiting on parts, then schedule the return visit when the part arrives. Workiz tracks back-ordered parts and links purchase orders and tracking info to the job. FieldPulse supports a parts-pending stage and several visits under one parent job, though it says this takes configuration. Check that the second visit keeps the original diagnosis, photos and serial number.',
        'If you do manufacturer or home warranty work, check how those jobs arrive. Workiz’s Dispatch.me integration brings OEM, home warranty and network work orders into its inbox and is included with all plans. Claims themselves usually run through the warranty networks: ServiceBench and ServicePower are platforms that manufacturers and administrators run, and repair shops join them as servicers rather than buying them. No tool we checked documents a built-in diagnostic or service-call fee feature, so set it up as a price book item. Our [quoting software guide](/guides/field-service-quoting-software) covers estimate tools in more detail.',
      ],
    },
  ],

  mistakes: [
    'Losing the job between visits. Make sure a parts-pending job keeps its diagnosis, serial number and photos for the return visit.',
    'Expecting your field service tool to file manufacturer claims. Claims usually go through networks like ServiceBench or ServicePower.',
    'Mixing up warranty sales and warranty claims. Workiz’s JB Warranties integration sells extended warranties; it does not file claims.',
    'Skipping model and serial capture at booking. Ordering the wrong part costs a second trip.',
  ],

  faqs: [
    {
      question: 'What is the best software for appliance repair?',
      answer:
        'Workiz fits shops with warranty work, since Dispatch.me brings OEM and home warranty work orders into its inbox on every plan and it tracks back-ordered parts. FieldPulse is strong on model and serial records and per-van parts. Both are quote only; Housecall Pro publishes prices from $59/month billed annually.',
    },
    {
      question: 'How much does appliance repair software cost?',
      answer:
        'Housecall Pro costs $59, $149 or $299 a month billed annually for 1, 5 or 8 users. Workiz, FieldPulse and ServiceTitan publish no prices. ServiceBench and ServicePower are warranty networks that shops join as servicers rather than buy.',
    },
    {
      question: 'Can appliance repair software track parts on order?',
      answer:
        'Yes. Workiz tracks back-ordered parts and links purchase orders and tracking info to the job. FieldPulse supports a configurable parts-pending stage and tracks parts per van, and ServiceTitan automates truck inventory.',
    },
    {
      question: 'Which software handles home warranty and manufacturer work orders?',
      answer:
        'Workiz’s Dispatch.me integration, included with all Workiz plans, brings work orders from manufacturers such as Carrier, Trane and Rheem, home warranty companies such as American Home Shield, and service networks into the Workiz inbox. Claims are usually filed through networks like ServiceBench and ServicePower.',
    },
    {
      question: 'Can I record appliance model and serial numbers?',
      answer:
        'FieldPulse says the office can capture brand, model number, serial number and symptom at booking, and it keeps asset records with serial numbers. Workiz lists equipment tracking on Ultimate, and Housecall Pro lists customer equipment tracking on Essentials.',
    },
    {
      question: 'Which appliance repair software works with QuickBooks?',
      answer:
        'ServiceTitan’s appliance page names QuickBooks Online, FieldPulse offers two-way QuickBooks Online sync, and Workiz includes QuickBooks Online sync on every plan. Housecall Pro’s plan data lists QuickBooks Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-21',
  dataVerified: true,
  sources: [
    { name: 'Workiz appliance repair software', url: 'https://www.workiz.com/industries/appliance-repair/', checked: '2026-11-21' },
    { name: 'Workiz Dispatch.me integration (OEM and home warranty work orders)', url: 'https://www.workiz.com/integrations/dispatch-me/', checked: '2026-11-21' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'FieldPulse appliance repair solution', url: 'https://www.fieldpulse.com/solutions/appliance-repair', checked: '2026-11-21' },
    { name: 'FieldPulse article: field service software for appliance repair', url: 'https://www.fieldpulse.com/articles/best-field-service-software-appliance-repair/', checked: '2026-11-21' },
    { name: 'ServiceTitan appliance repair software', url: 'https://www.servicetitan.com/industries/appliance-repair-software', checked: '2026-11-21' },
    { name: 'Housecall Pro help: service plan template for appliance repair', url: 'https://help.housecallpro.com/en/articles/2463497-service-plan-template-for-appliance-repair', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'ServiceBench for service providers (Asurion)', url: 'https://asurion.com/servicebench/service-provider', checked: '2026-11-21' },
    { name: 'ServicePower warranty claims management', url: 'https://www.servicepower.com/products/warranty-claims-management', checked: '2026-11-21' },
    { name: 'Commusoft industries (no appliance repair)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
  ],
}
