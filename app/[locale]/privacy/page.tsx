import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { site } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `Privacy policy for ${site.name}, including how we use cookies and advertising partners such as Google AdSense.`,
  slug: 'privacy',
})

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Privacy', href: '/privacy' }]} />
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated: July 2026</p>
      <div className="prose-body mt-6">
        <p>
          This Privacy Policy explains how {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
          collects and uses information when you visit {site.url}.
        </p>
        <h2>Information we collect</h2>
        <p>
          We collect standard analytics data such as pages visited, approximate location,
          device, and referrer. We do not require you to create an account to read our content.
        </p>
        <h2>Cookies and advertising</h2>
        <p>
          We use cookies to understand site usage and to serve advertising. Third-party vendors,
          including Google, use cookies to serve ads based on your prior visits to this and
          other websites. Google&rsquo;s use of advertising cookies enables it and its partners
          to serve ads to you based on your visit to our site and/or other sites on the
          internet. You may opt out of personalised advertising by visiting Google&rsquo;s Ads
          Settings.
        </p>
        <h2>Affiliate links</h2>
        <p>
          Some outbound links are affiliate links. If you click one and sign up with a provider,
          we may receive a commission at no additional cost to you.
        </p>
        <h2>Your choices</h2>
        <p>
          You can control cookies through your browser settings and opt out of personalised ads
          via your ad-settings preferences. Depending on your location, you may have additional
          rights under the GDPR or CCPA.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, email us at{' '}
          <a href="mailto:usamalatif13001@gmail.com">usamalatif13001@gmail.com</a> or use our{' '}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </div>
  )
}
