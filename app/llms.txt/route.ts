import { buildLlmsTxt } from '@/lib/llms'

/**
 * /llms.txt (llms.txt convention) — generated at build time from the same data
 * modules that render /compare, /free, and /by-industry/* so facts cannot drift.
 * Replaces the previously hand-maintained public/llms.txt.
 */
export const dynamic = 'force-static'

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
