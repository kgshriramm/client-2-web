import type { Metadata } from 'next';

const callPhone = '918660751425';
const whatsappPhone = '919743029249';
const siteUrl = 'https://www.gokarnapurohita.com';

export const metadata: Metadata = {
  title: 'Contact Gokarna Purohita',
  description: 'Call or WhatsApp Gokarna Purohita to enquire about traditional Pooja and Vedic ritual services, available dates and booking details.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact Gokarna Purohita', description: 'Enquire about Pooja services, dates and booking details in Gokarna.', url: `${siteUrl}/contact`, images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Contact Gokarna Purohita' }] },
};

export default function ContactPage() {
  const message = 'Namaskara, I would like to enquire about a Pooja in Gokarna. Please share the available dates and details.';
  return <main className="contact-page">
    <header className="page-header"><a href="/" aria-label="Gokarna Purohita home">ॐ <span>GOKARNA PUROHITHA</span></a><a href="/poojas">Pooja services</a></header>
    <section>
      <p className="eyebrow">ENQUIRY & BOOKING</p>
      <h1>Contact Gokarna Purohita</h1>
      <p>For traditional Pooja and Vedic ritual services in Gokarna, please call or send a WhatsApp message with your preferred date and the Pooja you wish to enquire about.</p>
      <div className="contact-actions">
        <a href={`tel:+${callPhone}`}>☎ Call now: +91 86607 51425</a>
        <a href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`}>WhatsApp to book</a>
      </div>
      <h2>Information helpful for your enquiry</h2>
      <ul><li>The Pooja or ritual you are considering</li><li>Your preferred date and location</li><li>Relevant family tradition or observance details, if applicable</li></ul>
      <p className="contact-note">Availability, the suitable observance, requirements and contribution are confirmed personally by the Purohita before booking.</p>
    </section>
  </main>;
}
