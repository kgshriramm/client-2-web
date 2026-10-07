import type { Metadata } from 'next';
import { poojaCopy, poojaDetails, poojaGuidance, poojaHref, poojaNames, poojas, type PoojaLanguage } from './data';

export const metadata: Metadata = {
  title: 'Pooja Services in Gokarna',
  description: 'Explore traditional Poojas in Gokarna, with clear information on observance and preparation from a local Vedic Purohita.',
  keywords: [
    'Poojas in Gokarna', 'Gokarna Pooja Booking', 'Pooja Booking in Gokarna',
    'Gokarna Purohita', 'Gokarna Priest', 'Gokarna Pandit', 'Vedic Poojas Gokarna',
    'Pitru Dosha Pooja Gokarna', 'Narayana Bali Gokarna', 'Tripindi Shraddha Gokarna',
    'Navagraha Shanti Gokarna', 'Mrityunjaya Shanti Gokarna', 'Sarpa Samskara information',
    'Ashlesha Bali information', 'Ekadasha Rudra Gokarna', 'Vedic Purohita Gokarna',
    'Gokarna Pooja Booking', 'ancestral rituals Gokarna', 'Shiva pooja Gokarna'
  ],
  alternates: { canonical: '/poojas' },
  openGraph: {
    title: 'Pooja Services in Gokarna | Gokarna Purohita',
    description: 'Explore traditional Poojas in Gokarna with a local Vedic Purohita.',
    url: 'https://www.gokarnapurohita.com/poojas',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Poojas in Gokarna' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poojas in Gokarna | Gokarna Purohita',
    description: 'Browse traditional Poojas and ritual services available in Gokarna.',
    images: ['/og-image.svg']
  }
};

function selectedLanguage(value: string | string[] | undefined): PoojaLanguage {
  return value === 'en' || value === 'te' || value === 'kn' ? value : 'kn';
}

export default async function PoojasPage({ searchParams }: { searchParams: Promise<{ lang?: string | string[] }> }) {
  const { lang } = await searchParams;
  const language = selectedLanguage(lang);
  const copy = poojaCopy[language];
  const guidance = poojaGuidance[language];

  return <main className="pooja-page">
    <header className="page-header">
      <a href={`/?lang=${language}`} aria-label="Gokarna Purohita home">ॐ <span>GOKARNA PUROHITHA</span></a>
      <a href={`/?lang=${language}`}>{copy.back}</a>
    </header>
    <section>
      <p className="eyebrow">{copy.label}</p>
      <h1>{language === 'en' ? 'Pooja Services in Gokarna' : copy.title}</h1>
      <p>{copy.intro}</p>
      <div className="pooja-list">
        {poojas.map(([slug, , image]) => <article key={slug}>
          <div className="pooja-card-image"><img src={image} alt={poojaNames[language][slug]} width="720" height="405" loading="lazy" /></div>
          <h2>{poojaNames[language][slug]}</h2>
          <p>{poojaDetails[language][slug].overview}</p>
          <div className="pooja-card-actions"><a href={poojaHref(slug, language)}>{copy.read} →</a><a href={`https://wa.me/919743029249?text=${encodeURIComponent(language === 'en' ? `Namaskara, I would like to enquire about ${poojaNames.en[slug]} in Gokarna. Please share the available dates and details.` : `${poojaNames[language][slug]} ಪೂಜೆಯ ಬಗ್ಗೆ ವಿಚಾರಿಸಬೇಕು.`)}`}>{language === 'en' ? 'Enquire' : copy.whatsapp}</a></div>
        </article>)}
      </div>
      <aside className="pooja-guidance">
        <h2>{guidance.heading}</h2>
        <p>{guidance.body}</p>
      </aside>
    </section>
    <div className="page-actions">
      <a href="tel:+918660751425">☎ {language === 'kn' ? 'ಈಗ ಕರೆ ಮಾಡಿ' : language === 'te' ? 'ఇప్పుడే కాల్ చేయండి' : 'Call Now'}</a>
      <a href={`https://wa.me/919743029249?text=${encodeURIComponent(language === 'kn' ? 'ನಮಸ್ಕಾರ, ಗೋಕರ್ಣದಲ್ಲಿ ಪೂಜೆಯ ಬಗ್ಗೆ ವಿಚಾರಿಸಬೇಕು.' : language === 'te' ? 'నమస్కారం, గోకర్ణలో పూజ గురించి విచారించాలనుకుంటున్నాను.' : 'Namaskara, I would like to enquire about a Pooja in Gokarna.')}`}>{copy.whatsapp}</a>
    </div>
  </main>;
}
