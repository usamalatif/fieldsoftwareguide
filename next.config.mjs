import createMDX from '@next/mdx'
import { fileURLToPath } from 'node:url'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .mdx pages/content alongside .ts/.tsx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  // Pin the workspace root to THIS project. A stray lockfile in a parent folder
  // (e.g. ~/package-lock.json) otherwise makes Next misdetect the root, which made
  // `next lint` silently skip. Safer than deleting the parent lockfile.
  outputFileTracingRoot: fileURLToPath(new URL('.', import.meta.url)),
  // Country pages are fully static (SSG). Keep images optimized + no layout shift.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Host canonicalization: www serves a 200 duplicate of the apex domain, which
  // Bing's webmaster guidelines penalize (it held indexation of the whole site).
  // 308 every www URL to the apex host. Belt-and-braces with the Vercel domain
  // redirect setting; keeping it in code means no dashboard drift.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.fieldsoftwareguide.com' }],
        destination: 'https://fieldsoftwareguide.com/:path*',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  // Add markdown/MDX plugins here later (remark-gfm, rehype-slug, etc.)
  options: {},
})

export default withMDX(nextConfig)
