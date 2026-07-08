import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

/**
 * robots.txt as a route handler. Explicitly allows AI crawlers (GPTBot,
 * ClaudeBot, PerplexityBot, Google-Extended), core to the GEO strategy.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'CCBot',
  ]

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: '/' })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
