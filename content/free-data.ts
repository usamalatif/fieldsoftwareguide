/**
 * Free-plan / trial facts for the six tracked vendors plus the two verified
 * genuinely-free options. Single source of truth: rendered on /free AND emitted
 * into /llms.txt + /llms-full.txt so the facts cannot drift between them.
 * Verified 2026-07-08 on each vendor's own site.
 */
export interface FreeRow {
  tool: string
  freePlan: string
  trial: string
  paidFrom: string
  highlight?: boolean
}

export const FREE_FACTS_CHECKED = '2026-07-08'

export const freeRows: FreeRow[] = [
  { tool: 'Odoo Field Service', freePlan: 'Yes — free forever, unlimited users (One App Free)', trial: '—', paidFrom: '$7.25/user/mo annual (all apps)', highlight: true },
  { tool: 'Connecteam', freePlan: 'Yes — up to 10 users (no invoicing/estimates)', trial: '—', paidFrom: 'Paid plans above 10 users', highlight: true },
  { tool: 'Jobber', freePlan: 'No', trial: '14 days (Grow plan, no card)', paidFrom: '$29/mo annual · $49 month-to-month' },
  { tool: 'Housecall Pro', freePlan: 'No', trial: '14 days (MAX plan, no card)', paidFrom: '$59/mo annual · $79 month-to-month' },
  { tool: 'Workiz', freePlan: 'No', trial: '7 days (all features, no card)', paidFrom: 'Custom / request pricing' },
  { tool: 'ServiceTitan', freePlan: 'No', trial: 'None — demo only', paidFrom: 'Custom / request pricing' },
  { tool: 'FieldPulse', freePlan: 'No', trial: 'None — demo only (vendor’s own FAQ)', paidFrom: 'Custom / request pricing' },
  { tool: 'Commusoft', freePlan: 'No', trial: 'None — sales call', paidFrom: 'Custom (12-month licenses; built for 6+ staff)' },
]
