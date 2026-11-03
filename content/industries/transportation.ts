import type { Industry } from '@/lib/industries'

/**
 * Transportation / fleet maintenance field service — VERIFIED (researched 2026-07-08).
 * No FSM vendor markets a transportation/trucking vertical (checked each vendor's
 * industries page). Per-asset service history verified for ServiceTitan, FieldPulse,
 * Commusoft, Workiz, Housecall Pro — NOT Jobber (no native asset tracking).
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates).
 * 2026-10-27: vehicle GPS rechecked. Housecall Pro's add-on is now Force Fleet Tracking at
 * $20/vehicle/month (Mojio no longer named); FieldPulse fleet tracking runs through Azuga but
 * no price is published (old ~$30 figure removed); Jobber via FleetSharp or Force; Workiz via
 * Linxup. Mileage/engine-hour alerts: ServiceTitan Fleet Pro and Commusoft (mileage), both for
 * the contractor's OWN vehicles. Page now separates FSM from trucking dispatch / TMS.
 * 2026-10-31: Housecall Pro equipment tracking qualified as listed from Essentials (HVAC page);
 * $20/vehicle GPS add-on rechecked and unchanged. Market claim narrowed to the six platforms.
 */
export const transportation: Industry = {
  slug: 'transportation',
  name: 'Transportation',
  icon: '🚚',
  category: 'Field Services',

  metaDescription:
    'Compare transportation field service software for mobile fleet repair, vehicle maintenance, roadside work orders and scheduling. Not trucking dispatch or TMS.',
  datePublished: '2026-07-08',

  answer:
    'Transportation field service software schedules and documents repair work on vehicles: mobile mechanics, mobile fleet repair, trailer and reefer service, and roadside jobs. None of the six platforms we review markets a transportation vertical (rechecked October 2026), so pick by vehicle records and dispatch. ServiceTitan, FieldPulse, Commusoft, and Workiz keep service history per unit, and Housecall Pro lists equipment tracking from Essentials ($149/month billed annually; Basic starts at $59) and stores equipment details in property profiles. Jobber (from $29/month billed annually) is the cheapest published plan but has no native asset tracking. For your own service vans, Housecall Pro sells Force Fleet Tracking at $20 per vehicle per month, ServiceTitan offers Fleet Pro, and Commusoft includes fleet tracking. None of these replaces trucking dispatch or a transportation management system (TMS), which plan loads, drivers, and freight.',

  intro:
    'Transportation field service is about keeping customers’ vehicles on the road. Mobile mechanics and fleet-repair contractors drive to the truck, yard, or roadside, so the software has to dispatch the nearest tech, open the right unit by VIN or unit number, record the repair with photos and parts, and invoice the same day. Two kinds of vehicle data get mixed up here: the customer’s vehicles you repair, which live in asset records, and your own service vans, which GPS add-ons track. Freight dispatch and load planning are a separate software category.',

  keyFeatures: [
    'Per-vehicle service history by VIN or unit number (asset records)',
    'Recurring preventive-maintenance visits for fleet customers',
    'Dispatch to the nearest tech for roadside and on-site repairs',
    'Parts and van inventory tied to each work order',
    'Mobile work orders with photos, inspection checklists, and signatures',
    'GPS tracking for your own service vans (add-on or integration, varies by tool)',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'ServiceTitan, FieldPulse, and Commusoft are custom-quoted and scale with technicians. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo (annual billing). Vehicle GPS for your own vans costs extra on some tools (Housecall Pro Force Fleet Tracking: $20/vehicle/mo).',
    source: { name: 'Housecall Pro vehicle GPS tracking', url: 'https://www.housecallpro.com/features/vehicle-gps-tracking/', checked: '2026-10-27' },
    structured: false,
  },

  search: { monthlyVolume: 40, kd: 3, cpc: null },

  providers: [
    { slug: 'housecall-pro', positioning: 'Published pricing for small fleet-repair teams; Force Fleet Tracking add-on ($20/vehicle/mo)', monthlyFromUsd: 59 },
    { slug: 'servicetitan', positioning: 'Large operations: truck inventory, installed-equipment history, Fleet Pro GPS', monthlyFromUsd: null },
    { slug: 'commusoft', positioning: 'Per-asset history, van stock control, and built-in fleet tracking', monthlyFromUsd: null },
    { slug: 'fieldpulse', positioning: 'Asset management with maintenance history; Azuga-powered fleet tracking', monthlyFromUsd: null },
    { slug: 'jobber', positioning: 'Lowest published plan; no native asset tracking, GPS via integrations', monthlyFromUsd: 29 },
  ],

  bySize: [
    { size: 'Solo mobile mechanic', pick: 'Jobber Core ($29/mo)', why: 'Lowest published plan for scheduling, quotes, and invoices. No native asset tracking, so vehicle history lives in notes and custom fields.' },
    { size: 'Small fleet-repair team, 2–5 users', pick: 'Housecall Pro Essentials ($149/mo, up to 5 users)', why: 'Equipment tracking, checklists, and employee GPS on the plan; add Force Fleet Tracking at $20 per van per month.' },
    { size: 'Growing shop with van stock', pick: 'Commusoft or FieldPulse (custom quote)', why: 'Both track inventory across vans and job sites and keep service history per asset.' },
    { size: 'Large multi-location operation', pick: 'ServiceTitan (custom quote)', why: 'Truck inventory with min/max replenishment, installed-equipment history, and the Fleet Pro add-on for your own vehicles.' },
  ],

  extraSections: [
    {
      id: 'fsm-vs-tms',
      heading: 'Transportation field service software vs trucking dispatch and TMS',
      paragraphs: [
        'Many “transportation dispatch” searches are about freight: assigning loads to drivers, planning routes for deliveries, tracking hours, and billing shippers. That is the job of trucking dispatch software and a transportation management system (TMS). The field service tools on this page do not plan loads or manage freight.',
        'Field service software is for the businesses that repair and maintain vehicles where they are: mobile mechanics, mobile fleet-repair contractors, trailer and reefer techs, tire and roadside service, and in-house maintenance teams that send techs to yards. If your work starts with a repair request and ends with an invoice for labor and parts, you are in the right category. If it starts with a load, you need a TMS.',
      ],
    },
    {
      id: 'customer-vehicles-vs-your-vans',
      heading: 'Customer vehicles vs your own service vans',
      paragraphs: [
        'Customer vehicles belong in asset records. ServiceTitan installed equipment shows every completed job for an item, Commusoft keeps a complete job history per asset, FieldPulse tracks maintenance history, Workiz stores model numbers, serial numbers, and service history (equipment tracking is on its Ultimate plan), and Housecall Pro keeps equipment on property profiles, with equipment tracking listed from Essentials. Jobber has no native asset tracking. We found no vendor that documents preventive maintenance on customer vehicles triggered by mileage or engine hours; recurring visits are scheduled by date.',
        'Your own vans are a different feature. Housecall Pro sells Force Fleet Tracking at $20 per vehicle per month, ServiceTitan Fleet Pro adds geofences and maintenance alerts based on odometer readings, engine hours, and fault codes, and Commusoft fleet tracking is built in with reminders based on time or mileage. FieldPulse fleet tracking runs through its Azuga partnership (price on request), Jobber connects to FleetSharp and Force, and Workiz connects to Linxup. If you need full mileage-based maintenance for a large customer fleet, compare dedicated fleet-maintenance software too.',
      ],
    },
    {
      id: 'roadside-workflow',
      heading: 'A roadside repair, end to end: what to test in a demo',
      paragraphs: [
        'Run one breakdown call through each trial: the request comes in, the dispatcher sends the nearest available tech, the tech opens the unit by VIN or unit number, completes an inspection checklist with photos, records parts pulled from the van, gets a signature, and invoices before leaving. Then check that the repair appears on that unit’s history and that van stock dropped by the parts used.',
        'Inventory is where tools split. ServiceTitan sets minimum and maximum stock per truck or warehouse, Commusoft deducts parts from the van automatically, FieldPulse tracks stock across trucks and job sites, and Workiz inventory is enabled from its Feature Center. Jobber and Housecall Pro rely on integrations or reports rather than a full inventory module. No vendor ships a DOT-style vehicle inspection (DVIR) template, so build your checklist once. Fleet customers who also rent out equipment may fit [equipment rental field service software](/by-industry/equipment-rental) better, and plan-level QuickBooks limits are in our [QuickBooks guide](/quickbooks).',
      ],
    },
  ],

  mistakes: [
    'Shopping for a TMS when you repair vehicles. Load planning and freight dispatch are a different category from field service software.',
    'Confusing van GPS with customer vehicle history. GPS add-ons track your own fleet; customer units need asset records.',
    'Expecting mileage-based maintenance on customer vehicles. We found no vendor that documents it; recurring visits are date-based.',
    'Leaving out GPS and inventory costs. Housecall Pro Force Fleet Tracking adds $20 per van per month, and full inventory is not on every tool.',
  ],

  faqs: [
    {
      question: 'What is transportation field service software?',
      answer:
        'It is software for businesses that repair and maintain vehicles on site: mobile mechanics, mobile fleet repair, trailer and reefer service, and roadside work. It schedules and dispatches techs, keeps service history per vehicle, records parts and photos, and invoices. It is not trucking dispatch software or a TMS, which plan loads and freight.',
    },
    {
      question: 'What software do mobile mechanics and fleet-repair teams use?',
      answer:
        'None of the six FSM platforms we review markets a transportation vertical (rechecked October 2026). Small teams often start on Housecall Pro (from $59/month billed annually) or Jobber (from $29/month billed annually), while larger operations evaluate ServiceTitan, Commusoft, or FieldPulse, which are custom-quoted and keep service history per vehicle.',
    },
    {
      question: 'Can it track preventive maintenance by mileage or engine hours?',
      answer:
        'For customer vehicles, we found no vendor that documents it; recurring maintenance is scheduled by date. For your own service vans, ServiceTitan Fleet Pro sends alerts based on odometer readings and engine hours, and Commusoft fleet reminders can be based on time or mileage. For large customer fleets, compare dedicated fleet-maintenance software.',
    },
    {
      question: 'Which FSM tools include vehicle GPS tracking?',
      answer:
        'Housecall Pro sells Force Fleet Tracking at $20 per vehicle per month, ServiceTitan offers the Fleet Pro add-on with geofencing, and Commusoft includes fleet tracking. FieldPulse fleet tracking runs through Azuga with pricing on request. Jobber and Workiz connect to third-party trackers (FleetSharp or Force, and Linxup).',
    },
    {
      question: 'Can it keep service history per vehicle?',
      answer:
        'Yes, through asset records: ServiceTitan installed equipment, FieldPulse asset management, Commusoft asset maintenance, Workiz equipment tracking (Ultimate plan), and Housecall Pro property profiles (equipment tracking listed from Essentials). Jobber has no native asset tracking and relies on checklists and custom fields.',
    },
    {
      question: 'How much does fleet repair field service software cost?',
      answer:
        'ServiceTitan, FieldPulse, and Commusoft are custom-quoted. Published plans start at $29/month for Jobber Core and $59/month for Housecall Pro Basic, billed annually. Budget extra for van GPS where it is an add-on, such as Housecall Pro Force Fleet Tracking at $20 per vehicle per month.',
    },
  ],

  lastUpdated: '2026-10-31',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-27' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-27' },
    { name: 'Housecall Pro vehicle GPS tracking (Force Fleet Tracking)', url: 'https://www.housecallpro.com/features/vehicle-gps-tracking/', checked: '2026-10-31' },
    { name: 'Housecall Pro HVAC page (equipment tracking on Essentials and MAX)', url: 'https://www.housecallpro.com/industries/hvac-software/', checked: '2026-10-31' },
    { name: 'Housecall Pro property profiles', url: 'https://help.housecallpro.com/en/articles/3703307-property-profile', checked: '2026-10-31' },
    { name: 'ServiceTitan Fleet Pro', url: 'https://www.servicetitan.com/features/pro/fleet', checked: '2026-10-27' },
    { name: 'ServiceTitan installed equipment', url: 'https://help.servicetitan.com/docs/installed-equipment-landing-page', checked: '2026-10-27' },
    { name: 'ServiceTitan truck inventory replenishment', url: 'https://help.servicetitan.com/docs/truck-inventory-replenishment-overview', checked: '2026-10-27' },
    { name: 'Commusoft fleet management', url: 'https://www.commusoft.com/en-us/features/fleet-management-software/', checked: '2026-10-27' },
    { name: 'Commusoft asset maintenance', url: 'https://www.commusoft.com/en-us/features/asset-maintenance-software/', checked: '2026-10-27' },
    { name: 'Commusoft inventory management', url: 'https://www.commusoft.com/en-us/features/inventory-management/', checked: '2026-10-27' },
    { name: 'FieldPulse fleet tracking (Azuga)', url: 'https://help.fieldpulse.com/features-add-ons/pulse-fleet-tracking', checked: '2026-10-27' },
    { name: 'FieldPulse asset management', url: 'https://www.fieldpulse.com/features/asset-management', checked: '2026-10-27' },
    { name: 'Jobber GPS tracking (integrations)', url: 'https://www.getjobber.com/features/gps-tracking-app/', checked: '2026-10-27' },
    { name: 'Jobber and Force Fleet Tracking', url: 'https://help.getjobber.com/hc/en-us/articles/29976893311255-Jobber-and-Force-Fleet-Tracking', checked: '2026-10-27' },
    { name: 'Workiz Linxup integration', url: 'https://www.workiz.com/integrations/linxup/', checked: '2026-10-27' },
    { name: 'Workiz equipment tracking', url: 'https://www.workiz.com/features/equipment-tracking/', checked: '2026-10-27' },
  ],
}
