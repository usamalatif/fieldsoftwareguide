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
}

const withMDX = createMDX({
  // Add markdown/MDX plugins here later (remark-gfm, rehype-slug, etc.)
  options: {},
})

export default withMDX(nextConfig)
