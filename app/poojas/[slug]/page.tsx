import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { poojaCopy, poojaNames, poojas, type PoojaLanguage } from '../data';

export function generateStaticParams() { return poojas.map(([slug]) => ({ slug })); }

function selectedLanguage(value: string | string[] | undefined): PoojaLanguage {
  return value === 'en' || value === 'te' || value === 'kn' ? value : 'kn';
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pooja = poojas.find(([id]) => id === slug);

  if (!pooja) {
    return {};
  }

  const title = `${pooja[1]} in Gokarna`;
  const description = `Enquire about ${pooja[1]} with a Gokarna Purohita.`;
  const canonicalUrl = `https://www.gokarnapurohita.com/poojas/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/poojas/${slug}` },
    openGraph: {
      title: `${title} | Gokarna Purohita`,
      description,
      url: canonicalUrl,
      type: 'article',
      images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Gokarna Purohita`,
      description,
      images: ['/og-image.svg']
    }
  };
}

export default async function PoojaDetail({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string | string[] }> }) {
  const [{ slug }, { lang }] = await Promise.all([params, searchParams]);
  const pooja = poojas.find(([id]) => id === slug);
  if (!pooja) notFound();

  const language = selectedLanguage(lang);
  const copy = poojaCopy[language];
  const [, , image] = pooja;
  const name = poojaNames[language][slug];
  const whatsappMessage = language === 'kn' ? `ನಮಸ್ಕಾರ, ${name} ಪೂಜೆಯ ಬಗ್ಗೆ ವಿಚಾರಿಸಬೇಕು.` : language === 'te' ? `నమస్కారం, ${name} పూజ గురించి విచారించాలనుకుంటున్నాను.` : `Namaskara, I would like to enquire about ${name}.`;

  return <main className="pooja-detail">
    <header className="page-header">
      <a href={`/?lang=${language}`} aria-label="Gokarna Purohita home">ॐ <span>GOKARNA PUROHITHA</span></a>
      <a href={`/poojas?lang=${language}`}>{copy.back}</a>
    </header>
    <div className="detail-hero">
      <img src={image} alt="" width="720" height="405" />
      <div><p>{copy.label}</p><h1>{name}</h1></div>
    </div>
    <article>
      <h2>{copy.enquiry}</h2>
      <p>{copy.detail}</p>
      <a href={`https://wa.me/919743029249?text=${encodeURIComponent(whatsappMessage)}`}>{copy.whatsapp} →</a>
    </article>
    <div className="page-actions">
      <a href="tel:+919743029249">☎ {language === 'kn' ? 'ಈಗ ಕರೆ ಮಾಡಿ' : language === 'te' ? 'ఇప్పుడే కాల్ చేయండి' : 'Call Now'}</a>
      <a href={`https://wa.me/919743029249?text=${encodeURIComponent(whatsappMessage)}`}>{copy.whatsapp}</a>
    </div>
  </main>;
}
