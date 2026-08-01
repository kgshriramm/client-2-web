import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gokarnapurohita.com'),
  title: 'Gokarna Purohita | Pooja Booking in Gokarna',
  description: 'Book traditional poojas and Vedic rituals in Gokarna directly with a Purohita.',
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
  alternates: { canonical: '/' },
  openGraph: { title: 'Gokarna Purohita | Pooja Booking in Gokarna', description: 'Book traditional poojas and Vedic rituals in Gokarna directly with a Purohita.', url: 'https://gokarnapurohita.com' },
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
