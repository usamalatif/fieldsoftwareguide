import type { Industry } from '@/lib/industries'

/**
 * Transportation / fleet maintenance field service — VERIFIED (researched 2026-07-08).
 * No FSM vendor markets a transportation/trucking vertical (checked each vendor's
 * industries page). Vehicle GPS verified per vendor: built-in/add-on for Housecall Pro
 * (Force by Mojio), ServiceTitan (Fleet Pro), Commusoft (built-in), FieldPulse (Azuga
 * ~$30/vehicle/mo); integration-only for Jobber (FleetSharp/Force) and Workiz (Linxup).
 * Per-asset service history verified for ServiceTitan, FieldPulse, Commusoft, Workiz,
 * Housecall Pro — NOT Jobber (no native asset tracking).
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates).
 */
export const transportation: Industry = {
  slug: 'transportation',
  name: 'Transportation',
  icon: '🚚',
  category: 'Field Services',

  answer:
    'No major field service management vendor markets a transportation or trucking vertical (checked July 2026), so the best pick for mobile mechanics, trailer-repair shops, and fleet-service contractors is the tool with real vehicle-tracking and asset-history features. Housecall Pro (from $59/month billed annually) offers a built-in vehicle GPS add-on powered by Force by Mojio, Commusoft includes real-time vehicle tracking with hardwired trackers, and ServiceTitan offers its Fleet Pro GPS add-on for larger operations — Commusoft and ServiceTitan are custom-quoted. FieldPulse adds partner-powered fleet tracking at roughly $30/vehicle/month. Jobber (from $29/month billed annually) is the cheapest published entry, with vehicle GPS available only via integrations. Transportation teams specifically need per-vehicle service history, preventive-maintenance scheduling, GPS dispatch, and parts tracking. Expect published plans of $29–$299/month with annual billing, plus GPS add-on costs.',

  intro:
    'Transportation and fleet maintenance is about keeping vehicles on the road, so downtime is the enemy. Whether you run mobile mechanics, a trailer-repair operation, or on-site fleet servicing, the right FSM software has to track service history per vehicle (by VIN or unit number), schedule preventive maintenance before failures, dispatch the nearest tech to a breakdown, and keep parts and inventory in check. Fast mobile work orders and same-day invoicing keep cash flowing while trucks keep moving.',

  keyFeatures: [
    'Per-vehicle service history by VIN or unit number',
    'Preventive-maintenance scheduling per vehicle or unit',
    'Vehicle GPS tracking (built-in, add-on, or integration — varies by tool)',
    'Parts and inventory tracking tied to each work order',
    'Mobile work orders, photos, and DVIR-style inspection capture in the field',
    'Accounting sync and fast same-day invoicing to reduce downtime cost',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'ServiceTitan, FieldPulse, and Commusoft are custom-quoted and scale with technicians and vehicles. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo (annual billing); vehicle-GPS add-ons cost extra (e.g. FieldPulse fleet tracking ~$30/vehicle/mo).',
    structured: false,
  },

  search: { monthlyVolume: 40, kd: 3, cpc: null },

  providers: [
    { slug: 'housecall-pro', positioning: 'Best overall for small fleet-service teams — built-in vehicle GPS add-on + published pricing', monthlyFromUsd: 59 },
    { slug: 'servicetitan', positioning: 'Best for large operations — Fleet Pro GPS add-on with geofencing', monthlyFromUsd: null },
    { slug: 'commusoft', positioning: 'Real-time vehicle tracking built in, plus per-asset service history', monthlyFromUsd: null },
    { slug: 'fieldpulse', positioning: 'Strong asset management; fleet tracking add-on (~$30/vehicle/mo)', monthlyFromUsd: null },
    { slug: 'jobber', positioning: 'Most affordable published plan; vehicle GPS via integrations only', monthlyFromUsd: 29 },
  ],

  faqs: [
    {
      question: 'What software do mobile mechanics and fleet-repair teams use?',
      answer:
        'No major FSM vendor markets a transportation vertical (checked July 2026). Fleet-service teams pick by capability: Housecall Pro (from $59/month billed annually) with its built-in vehicle GPS add-on, Commusoft with built-in vehicle tracking, or ServiceTitan Fleet Pro for larger operations — the latter two custom-quoted.',
    },
    {
      question: 'Can it track preventive maintenance by mileage or engine hours?',
      answer:
        'Mostly no — major FSM tools schedule recurring maintenance by date, not odometer or engine hours. Per-vehicle service history is well covered (ServiceTitan Installed Equipment, FieldPulse Asset Management, Commusoft asset records, Workiz Equipment Tracking), but if you need mileage- or hours-triggered PM, confirm it in a demo or consider dedicated fleet-maintenance software.',
    },
    {
      question: 'How much does fleet maintenance field service software cost?',
      answer:
        'ServiceTitan, FieldPulse, and Commusoft are custom-quoted and scale with techs and vehicles. Published entry points are Jobber from $29/month and Housecall Pro from $59/month (annual billing). Budget extra for vehicle GPS: FieldPulse’s fleet-tracking add-on runs about $30/vehicle/month.',
    },
    {
      question: 'Which FSM tools include real vehicle GPS tracking?',
      answer:
        'Housecall Pro has a built-in vehicle GPS add-on (Force by Mojio OBD device), ServiceTitan offers Fleet Pro with geofencing, Commusoft includes real-time vehicle tracking from its mid plan up, and FieldPulse offers Azuga-powered fleet tracking (~$30/vehicle/month). Jobber and Workiz cover vehicle GPS only through integrations (FleetSharp/Force and Linxup).',
    },
    {
      question: 'Can it keep service history per vehicle?',
      answer:
        'Yes — via equipment/asset records: ServiceTitan Installed Equipment, FieldPulse Asset Management (serials, warranties, barcodes), Commusoft asset maintenance, and Workiz Equipment Tracking all keep serial-level service history per unit. Jobber has no native asset tracking — it relies on job forms and custom fields.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro vehicle GPS tracking', url: 'https://www.housecallpro.com/features/vehicle-gps-tracking/', checked: '2026-07-08' },
    { name: 'ServiceTitan Fleet Pro', url: 'https://www.servicetitan.com/features/pro/fleet', checked: '2026-07-08' },
    { name: 'Commusoft fleet management', url: 'https://www.commusoft.com/en-us/features/fleet-management-software/', checked: '2026-07-08' },
    { name: 'FieldPulse fleet management', url: 'https://www.fieldpulse.com/features/fleet-management', checked: '2026-07-08' },
    { name: 'Jobber GPS tracking (integrations)', url: 'https://www.getjobber.com/features/gps-tracking-app/', checked: '2026-07-08' },
    { name: 'Workiz Linxup fleet tracking', url: 'https://help.workiz.com/hc/en-us/articles/18052929800337-Tracking-your-fleet-in-real-time-with-Linxup', checked: '2026-07-08' },
  ],
}
