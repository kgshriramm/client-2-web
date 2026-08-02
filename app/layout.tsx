import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://www.gokarnapurohita.com';
const siteName = 'Gokarna Purohita';
const defaultTitle = 'Gokarna Purohita | Pooja Booking in Gokarna';
const defaultDescription = 'Book traditional poojas and Vedic rituals in Gokarna directly with a Purohita.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: '%s | Gokarna Purohita' },
  description: defaultDescription,
  keywords: [
    'Gokarna Purohit',
    'Gokarna Priest',
    'Gokarna Temple Pooja',
    'Gokarna Mahabaleshwar Temple',
    'Mahaganapati Temple Gokarna',
    'Gokarna Rudrabhisheka',
    'Narayana Bali Gokarna',
    'Tripindi Shraddha Gokarna',
    'Pitru Karya Gokarna',
    'Gokarna Pandit Booking',
    'Vedic Pooja in Gokarna',
    'Gokarna Homam Services',
    'Online Pooja Booking Gokarna'
  ],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/?lang=en',
      'kn-IN': '/?lang=kn',
      'te-IN': '/?lang=te'
    }
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    type: 'website',
    siteName,
    locale: 'en_US',
    alternateLocale: ['kn_IN', 'te_IN'],
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Gokarna Purohita - Traditional Pooja Booking in Gokarna' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/og-image.svg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: 'Gokarna Purohita', url: 'https://gokarnapurohita.com', description: 'Traditional Hindu poojas and Vedic rituals in Gokarna, Karnataka.',
    address: { '@type': 'PostalAddress', addressLocality: 'Gokarna', addressRegion: 'Karnataka', postalCode: '581326', addressCountry: 'IN' },
    telephone: '+919743029249', priceRange: '₹₹'
  };
  return <html lang="kn"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
