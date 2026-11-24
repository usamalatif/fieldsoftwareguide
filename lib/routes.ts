import { articleDates } from '@/content/articles'

/**
 * Single source of truth for static, indexable routes.
 *
 * The sitemap derives from this list, so a new top-level page is added to the sitemap
 * by adding it HERE once. Industry pages are NOT listed here — they are generated
 * dynamically from getPublishedIndustries() in app/sitemap.ts.
 *
 * When you add a new top-level page under app/[locale]/, add its path here too,
 * with the date its CONTENT last genuinely changed (not the build date). Bump a
 * route's date only when you actually change that page's content.
 */
export const staticRouteLastmod: Record<string, string> = {
  '/': '2026-11-24',
  '/by-industry': '2026-11-24',
  '/by-size': '2026-11-10',
  '/compare': '2026-11-24',
  '/compare/jobber-vs-housecall-pro': '2026-11-21',
  '/compare/fieldpulse-alternatives': articleDates['/compare/fieldpulse-alternatives'].contentUpdated,
  '/compare/housecall-pro-vs-servicetitan': articleDates['/compare/housecall-pro-vs-servicetitan'].contentUpdated,
  '/compare/servicetitan-vs-jobber': articleDates['/compare/servicetitan-vs-jobber'].contentUpdated,
  '/compare/fieldedge-alternatives': articleDates['/compare/fieldedge-alternatives'].contentUpdated,
  '/compare/servicetitan-alternatives': articleDates['/compare/servicetitan-alternatives'].contentUpdated,
  '/compare/jobber-alternatives': articleDates['/compare/jobber-alternatives'].contentUpdated,
  '/compare/housecall-pro-alternatives': articleDates['/compare/housecall-pro-alternatives'].contentUpdated,
  '/compare/workiz-alternatives': articleDates['/compare/workiz-alternatives'].contentUpdated,
  '/compare/jobber-vs-workiz': articleDates['/compare/jobber-vs-workiz'].contentUpdated,
  '/compare/housecall-pro-vs-workiz': articleDates['/compare/housecall-pro-vs-workiz'].contentUpdated,
  '/compare/servicetitan-vs-fieldedge': articleDates['/compare/servicetitan-vs-fieldedge'].contentUpdated,
  '/compare/servicetitan-vs-workiz': articleDates['/compare/servicetitan-vs-workiz'].contentUpdated,
  '/compare/jobber-vs-fieldpulse': articleDates['/compare/jobber-vs-fieldpulse'].contentUpdated,
  '/compare/housecall-pro-vs-fieldpulse': articleDates['/compare/housecall-pro-vs-fieldpulse'].contentUpdated,
  '/compare/fieldpulse-vs-workiz': articleDates['/compare/fieldpulse-vs-workiz'].contentUpdated,
  '/compare/commusoft-alternatives': articleDates['/compare/commusoft-alternatives'].contentUpdated,
  '/compare/servicetitan-vs-fieldpulse': articleDates['/compare/servicetitan-vs-fieldpulse'].contentUpdated,
  '/compare/jobber-vs-fieldedge': articleDates['/compare/jobber-vs-fieldedge'].contentUpdated,
  '/compare/housecall-pro-vs-fieldedge': articleDates['/compare/housecall-pro-vs-fieldedge'].contentUpdated,
  '/compare/fieldedge-vs-fieldpulse': articleDates['/compare/fieldedge-vs-fieldpulse'].contentUpdated,
  '/compare/service-fusion-alternatives': articleDates['/compare/service-fusion-alternatives'].contentUpdated,
  '/free': '2026-11-10',
  '/quickbooks': '2026-10-24',
  '/pricing': articleDates['/pricing'].contentUpdated,
  '/pricing/housecall-pro': articleDates['/pricing/housecall-pro'].contentUpdated,
  '/pricing/jobber': articleDates['/pricing/jobber'].contentUpdated,
  '/pricing/servicetitan': articleDates['/pricing/servicetitan'].contentUpdated,
  '/pricing/workiz': articleDates['/pricing/workiz'].contentUpdated,
  '/pricing/fieldpulse': articleDates['/pricing/fieldpulse'].contentUpdated,
  '/pricing/fieldedge': articleDates['/pricing/fieldedge'].contentUpdated,
  '/pricing/service-fusion': articleDates['/pricing/service-fusion'].contentUpdated,
  '/for-small-business': '2026-10-24',
  '/guides': '2026-11-21',
  '/guides/refrigerant-tracking-software': articleDates['/guides/refrigerant-tracking-software'].contentUpdated,
  '/guides/hvac-dispatch-software': articleDates['/guides/hvac-dispatch-software'].contentUpdated,
  '/guides/commercial-hvac-software': articleDates['/guides/commercial-hvac-software'].contentUpdated,
  '/guides/field-service-invoicing-software': articleDates['/guides/field-service-invoicing-software'].contentUpdated,
  '/guides/field-service-quoting-software': articleDates['/guides/field-service-quoting-software'].contentUpdated,
  '/guides/hvac-maintenance-agreement-software': articleDates['/guides/hvac-maintenance-agreement-software'].contentUpdated,
  '/guides/open-source-field-service-software': articleDates['/guides/open-source-field-service-software'].contentUpdated,
  '/about': '2026-10-22',
  '/contact': '2026-07-08',
  '/privacy': '2026-07-08',
  '/terms': '2026-07-08',
  '/how-we-review': '2026-10-22',
  '/author/usama-latif': '2026-10-22',
}

export const staticRoutes: readonly string[] = Object.keys(staticRouteLastmod)
