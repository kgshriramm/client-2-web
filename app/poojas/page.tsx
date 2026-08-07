import type { Metadata } from 'next';
import { poojaCopy, poojaNames, poojas, type PoojaLanguage } from './data';

export const metadata: Metadata = {
  title: 'Poojas in Gokarna',
  description: 'Browse traditional Poojas and ritual services available in Gokarna.',
  keywords: [
    'Poojas in Gokarna', 'Gokarna Pooja Booking', 'Pooja Booking in Gokarna',
    'Gokarna Purohita', 'Gokarna Priest', 'Gokarna Pandit', 'Vedic Poojas Gokarna',
    'Pitru Dosha Pooja Gokarna', 'Narayana Bali Gokarna', 'Tripindi Shraddha Gokarna',
    'Navagraha Shanti Gokarna', 'Rudra Pooja Gokarna', 'gokarna pooja', 'gokarna pitru dosha pooja cost',
    'narayana bali pooja in gokarna', 'narayana bali pooja in gokarna cost', 'gokarna pitru dosha pooja',
    'gokarna temple pooja list', 'pitru dosha pooja in gokarna', 'gokarna temple pooja details',
    'pitru dosha pooja cost in gokarna', 'gokarna pooja details', 'pandit ji', 'pandit',
    'pandit near me', 'pandit ji near me', 'pooja at home', 'online pooja booking', 'pandit in bangalore',
    'kukke subramanya pooja booking'
  ],
  alternates: { canonical: '/poojas' },
  openGraph: {
    title: 'Poojas in Gokarna | Gokarna Purohita',
    description: 'Browse traditional Poojas and ritual services available in Gokarna.',
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

  return <main className="pooja-page">
    <header className="page-header">
      <a href={`/?lang=${language}`} aria-label="Gokarna Purohita home">ॐ <span>GOKARNA PUROHITHA</span></a>
      <a href={`/?lang=${language}`}>{copy.back}</a>
    </header>
    <section>
      <p className="eyebrow">{copy.label}</p>
      <h1>{copy.title}</h1>
      <p>{copy.intro}</p>
      <p style={{ marginTop: '0.75rem' }}>{language === 'kn' ? 'ಗೋಕರ್ಣ ಪೂಜೆ, ಗೋಕರ್ಣ ಪೂಜಾ ವಿವರಗಳು, ನಾರಾಯಣ ಬಲಿ ಪೂಜೆ ಗೋಕರ್ಣ, ಪಿತೃ ದೋಷ ಪೂಜೆ ಬೆಲೆ ಮತ್ತು ಆನ್ಲೈನ್ ಪೂಜಾ ಬುಕಿಂಗ್‌ಗೆ ಸಂಬಂಧಿಸಿದ ಈ ಪುಟವನ್ನು ನೋಡಬಹುದು.' : language === 'te' ? 'గోకర్ణ పూజ, గోకర్ణ పూజ వివరాలు, నారాయణ బలి పూజ గోకర్ణ, పితృ దోష పూజ ధర మరియు ఆన్లైన్ పూజా బుకింగ్ కోసం ఈ పేజీ ఉపయోగపడుతుంది.' : 'This page covers common searches such as Gokarna pooja, Gokarna temple pooja details, Narayana Bali pooja in Gokarna, pitru dosha pooja cost in Gokarna, and online pooja booking.'}</p>
      <div className="pooja-list">
        {poojas.map(([slug, , image]) => <a href={`/poojas/${slug}?lang=${language}`} key={slug}>
          <div className="pooja-card-image"><img src={image} alt={poojaNames[language][slug]} width="720" height="405" loading="lazy" /></div>
          <h2>{poojaNames[language][slug]}</h2>
          <span>{copy.read} →</span>
        </a>)}
      </div>
    </section>
    <div className="page-actions">
      <a href="tel:+918660751425">☎ {language === 'kn' ? 'ಈಗ ಕರೆ ಮಾಡಿ' : language === 'te' ? 'ఇప్పుడే కాల్ చేయండి' : 'Call Now'}</a>
      <a href={`https://wa.me/919743029249?text=${encodeURIComponent(language === 'kn' ? 'ನಮಸ್ಕಾರ, ಗೋಕರ್ಣದಲ್ಲಿ ಪೂಜೆಯ ಬಗ್ಗೆ ವಿಚಾರಿಸಬೇಕು.' : language === 'te' ? 'నమస్కారం, గోకర్ణలో పూజ గురించి విచారించాలనుకుంటున్నాను.' : 'Namaskara, I would like to enquire about a Pooja in Gokarna.')}`}>{copy.whatsapp}</a>
    </div>
  </main>;
}
