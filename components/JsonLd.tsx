import { site } from '@/lib/site'

/** Base JSON-LD injector. */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject; no user HTML.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function ArticleJsonLd({
  headline,
  description,
  slug,
  datePublished,
  dateModified,
  authorName,
  authorUrl = `${site.url}/author/usama-latif`,
}: {
  headline: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  /** Person author. Omit to attribute the article to the site Organization. */
  authorName?: string
  authorUrl?: string
}) {
  const url = `${site.url}/${slug}`
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline,
        description,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        datePublished,
        dateModified: dateModified ?? datePublished,
        author: authorName
          ? { '@type': 'Person', name: authorName, url: authorUrl }
          : { '@type': 'Organization', name: site.publisher, url: site.url },
        publisher: {
          '@type': 'Organization',
          name: site.publisher,
          url: site.url,
          logo: { '@type': 'ImageObject', url: `${site.url}/icon.png` },
        },
      }}
    />
  )
}

export function FAQJsonLd({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((i) => ({
          '@type': 'Question',
          name: i.question,
          acceptedAnswer: { '@type': 'Answer', text: i.answer },
        })),
      }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[]
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: `${site.url}${item.href}`,
        })),
      }}
    />
  )
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: site.name,
        url: site.url,
        description: site.description,
        logo: { '@type': 'ImageObject', url: `${site.url}/icon.png` },
      }}
    />
  )
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: site.name,
        url: site.url,
        publisher: { '@type': 'Organization', name: site.name, url: site.url },
      }}
    />
  )
}
