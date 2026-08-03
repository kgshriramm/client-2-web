import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://www.gokarnapurohita.com';
const siteName = 'Gokarna Purohita';
const defaultTitle = 'Gokarna Purohita | Pooja Booking in Gokarna';
const defaultDescription = 'Book traditional Poojas in Gokarna with a trusted Vedic Purohita for Pitru Karya, Narayana Bali, Tripindi Shraddha, Rudrabhisheka, Navagraha Shanti and more.';

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
    'Online Pooja Booking Gokarna',
    'Gokarna Pooja Booking',
    'Pooja Booking in Gokarna',
    'Gokarna Pandit',
    'Gokarna Pujari',
    'Gokarna Temple Priest',
    'Gokarna Mahabaleshwar Temple Pooja',
    'Mahaganapati Temple Gokarna Pooja',
    'Pitru Dosha Pooja Gokarna',
    'Narayana Bali Pooja Gokarna',
    'Tripindi Shraddha Pooja Gokarna',
    'Navagraha Shanti Pooja Gokarna',
    'Mrityunjaya Shanti Gokarna',
    'Sarpa Samskara Gokarna',
    'Ashlesha Bali Gokarna',
    'Ekadasha Rudra Gokarna',
    'Shata Rudra Gokarna',
    'Hindu Rituals in Gokarna',
    'Vedic Rituals Karnataka',
    'ಗೋಕರ್ಣ ಪೂಜೆ ಬುಕ್ಕಿಂಗ್',
    'ಗೋಕರ್ಣ ಪುರೋಹಿತ',
    'గోకర్ణ పూజ బుకింగ్'
  ],
  verification: {
    google: 'KfF8Pd4-E2nZdCkEtgV0RmsWAkrEtsVMMOeA5_9QbkI'
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml', sizes: '48x48' }],
    apple: [{ url: '/icon.svg', type: 'image/svg+xml', sizes: '180x180' }]
  },
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
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    image: `${siteUrl}/icon.svg`,
    description: defaultDescription,
    address: { '@type': 'PostalAddress', addressLocality: 'Gokarna', addressRegion: 'Karnataka', postalCode: '581326', addressCountry: 'IN' },
    telephone: '+918660751425',
    priceRange: '₹₹',
    areaServed: { '@type': 'City', name: 'Gokarna' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Vedic Pooja Services in Gokarna',
      itemListElement: [
        'Pitru Dosha Nivarane', 'Narayana Bali', 'Tripindi Shraddha Kriya Karma',
        'Navagraha Shanti', 'Mrityunjaya Shanti', 'Sarpa Samskara',
        'Ashlesha Bali', 'Ekadasha Rudra', 'Shata Rudra'
      ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, areaServed: 'Gokarna, Karnataka' } }))
    }
  };
  return <html lang="kn"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
