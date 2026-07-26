import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gokarna Vedic Purohitha | Traditional Poojas & Homas',
  description: 'Book traditional Hindu poojas and homas in Gokarna with a Vedic Purohitha.',
  openGraph: { title: 'Gokarna Vedic Purohitha', description: 'Traditional Hindu poojas and homas performed by a Vedic Purohitha in Gokarna.' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: 'Gokarna Vedic Purohitha', description: 'Traditional Hindu poojas and homas performed by a Vedic Purohitha in Gokarna, Karnataka.',
    address: { '@type': 'PostalAddress', addressLocality: 'Gokarna', addressRegion: 'Karnataka', postalCode: '581326', addressCountry: 'IN' },
    telephone: '+919743029249', priceRange: '₹₹'
  };
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
