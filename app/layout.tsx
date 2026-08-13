import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Horse Insurance NZ | Compare & Save | EquineInsurance.co.nz',
    template: '%s | EquineInsurance.co.nz',
  },
  description: 'EquineInsurance.co.nz is operated by Cover4You. We publish independent information about equine insurance in New Zealand.',
  keywords: ['horse insurance NZ', 'equine insurance NZ', 'horse insurance quote NZ', 'horse mortality insurance NZ', 'equine vet fee insurance'],
  authors: [{ name: 'EquineInsurance.co.nz' }],
  creator: 'EquineInsurance.co.nz',
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Horse Insurance NZ | Compare & Save | EquineInsurance.co.nz',
    description: 'EquineInsurance.co.nz is operated by Cover4You. We publish independent information about equine insurance in New Zealand.',
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'EquineInsurance.co.nz — Horse Insurance NZ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horse Insurance NZ | EquineInsurance.co.nz',
    description: 'EquineInsurance.co.nz is operated by Cover4You. We publish independent information about equine insurance in New Zealand.',
    images: [`${siteConfig.url}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: 'EquineInsurance.co.nz',
  alternateName: 'Equine Insurance NZ',
  url: siteConfig.url,
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/android-chrome-192x192.png`,
    width: 192,
    height: 192,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: siteConfig.email,
    contactType: 'customer service',
    areaServed: 'NZ',
    availableLanguage: 'English',
  },
  areaServed: {
    '@type': 'Country',
    name: 'New Zealand',
  },
  description: 'EquineInsurance.co.nz is an independent equine insurance information site operated by Cover4You. We publish general information about equine insurance in New Zealand including Pet-n-Sur, Petcover NZ, NZB Insurance, and more.',
  sameAs: [
    'https://www.cover4you.co.nz',
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Cover4You',
    url: 'https://www.cover4you.co.nz',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: 'EquineInsurance.co.nz',
  publisher: { '@id': `${siteConfig.url}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/blog/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
