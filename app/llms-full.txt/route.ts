import { buildLlmsFullTxt } from '@/lib/llms'

/**
 * /llms-full.txt — expanded companion to /llms.txt per the llms.txt convention.
 * Inlines the site's verified pricing facts, comparison table content, free-tier
 * findings, and every industry page's answer + ranked picks, generated at build
 * time from the same data modules that render the live pages.
 */
export const dynamic = 'force-static'

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
