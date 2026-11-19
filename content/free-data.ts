/**
 * Free-plan / trial facts for the six tracked vendors plus the two verified
 * genuinely-free options. Single source of truth: rendered on /free AND emitted
 * into /llms.txt + /llms-full.txt so the facts cannot drift between them.
 * Verified 2026-07-08 on each vendor's own site. Rechecked 2026-10-24: Odoo (free tier; its
 * paid price/billing basis was ambiguous on the page, so no paid price is published), Connecteam free tier, Jobber/Housecall Pro trials, Workiz 7-day trial.
 * 2026-11-19: all rows rechecked. Added Zoho FSM (free: up to 20 users, 30 appointments/month)
 * and ServiceM8 (free: 1 user, 30 jobs/month). FieldPulse's pricing FAQ now says it offers no
 * free trial. Odoo's /app/field-service URL redirects to /app/planning; the One App Free rule
 * ("any app ... free for unlimited users, forever") is on odoo.com/pricing.
 */
export interface FreeRow {
  tool: string
  freePlan: string
  trial: string
  paidFrom: string
  highlight?: boolean
}

export const FREE_FACTS_CHECKED = '2026-11-19'

export const freeRows: FreeRow[] = [
  { tool: 'Odoo Field Service', freePlan: 'Yes — free forever, unlimited users (One App Free)', trial: '—', paidFrom: 'Per-user paid plans (see Odoo pricing)', highlight: true },
  { tool: 'Zoho FSM', freePlan: 'Yes — up to 20 users and 30 appointments/month; includes estimates, work orders, dispatch console, invoicing and the mobile app', trial: '15-day trial, no card (its FAQ says 14 days); afterwards the account moves to the free plan', paidFrom: 'Paid plans priced by appointments per month (see Zoho FSM pricing)', highlight: true },
  { tool: 'ServiceM8', freePlan: 'Yes — 1 user, 30 jobs/month; jobs, quotes, invoices and scheduling', trial: '14 days', paidFrom: '$29/mo Starter (unlimited users, 50 jobs/month)', highlight: true },
  { tool: 'Connecteam', freePlan: 'Yes — up to 10 users (no invoicing/estimates)', trial: '—', paidFrom: 'Paid plans above 10 users', highlight: true },
  { tool: 'Jobber', freePlan: 'No', trial: '14 days (Grow plan, no card)', paidFrom: '$29/mo annual · $49 month-to-month' },
  { tool: 'Housecall Pro', freePlan: 'No', trial: '14 days (MAX plan, no card)', paidFrom: '$59/mo annual · $79 month-to-month' },
  { tool: 'Workiz', freePlan: 'No', trial: '7 days (all features, no card)', paidFrom: 'Custom / request pricing' },
  { tool: 'ServiceTitan', freePlan: 'No', trial: 'None listed — demo only', paidFrom: 'Custom / request pricing' },
  { tool: 'FieldPulse', freePlan: 'No', trial: 'No free trial (its pricing FAQ says so); free demo instead', paidFrom: 'Custom / request pricing' },
  { tool: 'Commusoft', freePlan: 'No', trial: 'Free trial advertised; signup, length and eligibility not stated', paidFrom: 'Custom (12-month licenses; built for 6+ staff)' },
]
