import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { canonicalPoojaSlug, poojaCopy, poojaDetails, poojaFaqs, poojaHref, poojaNames, poojaPurposes, poojas, seoSlugs, type PoojaLanguage } from '../data';

export function generateStaticParams() { return poojas.map(([slug]) => ({ slug: seoSlugs[slug] ?? slug })); }

const serviceKeywords: Record<string, string[]> = {
  rudrabhisheka: ['Rudrabhisheka Gokarna', 'Rudrabhisheka in Gokarna', 'Shiva Abhisheka Gokarna', 'Rudra Pooja Gokarna'],
  'pitru-dosha': ['Pitru Dosha Pooja in Gokarna', 'Gokarna Pitru Dosha Pooja', 'Pitru Dosha Pooja cost in Gokarna', 'Pitru Dosha Nivarane Gokarna', 'Pitru Karya Gokarna', 'ancestral rituals Gokarna'],
  'narayana-bali': ['Narayana Bali Pooja in Gokarna', 'Gokarna Narayana Bali', 'Gokarna Narayan Bali Pooja', 'Moksha Narayana Bali Pooja in Gokarna', 'Narayana Bali Pooja procedure', 'Narayana Bali cost in Gokarna'],
  tripindi: ['Tripindi Shraddha Gokarna', 'Tripindi Shraddha Kriya Gokarna', 'Tripindi Pooja Gokarna', 'gokarna temple pooja details'],
  navagraha: ['Navagraha Shanti Pooja in Gokarna', 'Navagraha Shanti Gokarna', 'Navagraha Pooja Gokarna', 'Graha Shanti Gokarna'],
  mrityunjaya: ['Mrityunjaya Shanti Gokarna', 'Maha Mrityunjaya Pooja Gokarna', 'Mrityunjaya Homa Gokarna', 'gokarna pooja details'],
  'sarpa-samskara': ['Sarpa Samskara Pooja details', 'Sarpa Samskara in Gokarna', 'Sarpa Samskara Pooja benefits', 'Who can do Sarpa Samskara Pooja', 'Sarpa Dosha Pooja Gokarna'],
  'ashlesha-bali': ['Ashlesha Bali Gokarna', 'Ashlesha Bali Pooja Gokarna', 'Sarpa Dosha Nivarane Gokarna', 'pooja at home'],
  'ekadasha-rudra': ['Ekadasha Rudra Gokarna', 'Ekadasha Rudrabhisheka Gokarna', 'Rudra Pooja Gokarna', 'online pooja booking'],
  'shata-rudra': ['Shata Rudra Gokarna', 'Shata Rudrabhisheka Gokarna', 'Maha Rudra Pooja Gokarna', 'pandit ji near me']
};

const seoTitles: Record<string, string> = {
  rudrabhisheka: 'Rudrabhisheka in Gokarna',
  'narayana-bali': 'Narayana Bali Pooja in Gokarna',
  'pitru-dosha': 'Pitru Dosha Pooja in Gokarna',
  'sarpa-samskara': 'Sarpa Samskara Pooja in Gokarna',
  navagraha: 'Navagraha Shanti Pooja in Gokarna',
};

function selectedLanguage(value: string | string[] | undefined): PoojaLanguage {
  return value === 'en' || value === 'te' || value === 'kn' ? value : 'kn';
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = canonicalPoojaSlug(slug);
  const pooja = poojas.find(([id]) => id === canonicalSlug);

  if (!pooja) {
    return {};
  }

  const title = seoTitles[canonicalSlug] ?? `${pooja[1]} in Gokarna`;
  const description = `Enquire about ${title}. Contact the Gokarna Purohita for traditional observance details, available dates and booking information.`;
  const canonicalUrl = `https://www.gokarnapurohita.com${poojaHref(canonicalSlug)}`;

  return {
    title,
    description,
    keywords: [pooja[1], `${pooja[1]} Gokarna`, `Book ${pooja[1]} in Gokarna`, 'Gokarna Purohita', 'Gokarna Pooja Booking', ...(serviceKeywords[canonicalSlug] ?? [])],
    alternates: { canonical: poojaHref(canonicalSlug) },
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
  const canonicalSlug = canonicalPoojaSlug(slug);
  // Redirect only the previous internal URL (for example /poojas/narayana-bali).
  // The SEO URL already resolves back to its internal service key, so redirecting
  // it again would send the visitor to the same URL and create a redirect loop.
  if (slug === canonicalSlug && seoSlugs[canonicalSlug]) permanentRedirect(poojaHref(canonicalSlug, typeof lang === 'string' ? lang : undefined));
  const pooja = poojas.find(([id]) => id === canonicalSlug);
  if (!pooja) notFound();

  const language = selectedLanguage(lang);
  const copy = poojaCopy[language];
  const [, , image] = pooja;
  const name = poojaNames[language][canonicalSlug];
  const heading = language === 'en' ? seoTitles[canonicalSlug] ?? name : name;
  const details = poojaDetails[language][canonicalSlug];
  const purposes = poojaPurposes[language][canonicalSlug];
  const faqs = poojaFaqs[language][canonicalSlug];
  const related = poojas.filter(([id]) => id !== canonicalSlug).slice(0, 3);
  const whatsappMessage = language === 'kn' ? `ನಮಸ್ಕಾರ, ${name} ಪೂಜೆಯ ಬಗ್ಗೆ ಗೋಕರ್ಣದಲ್ಲಿ ವಿಚಾರಿಸಬೇಕು. ಲಭ್ಯ ದಿನಾಂಕ ಮತ್ತು ವಿವರಗಳನ್ನು ತಿಳಿಸಿ.` : language === 'te' ? `నమస్కారం, గోకర్ణంలో ${name} పూజ గురించి విచారించాలనుకుంటున్నాను. అందుబాటులో ఉన్న తేదీలు, వివరాలు తెలియజేయండి.` : `Namaskara, I would like to enquire about ${name} in Gokarna. Please share the available dates and details.`;
  const pageUrl = `https://www.gokarnapurohita.com${poojaHref(canonicalSlug)}`;
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Service', name: `${name} in Gokarna`, description: details.overview, areaServed: { '@type': 'City', name: 'Gokarna' }, provider: { '@type': 'LocalBusiness', name: 'Gokarna Purohita', telephone: '+918660751425', url: 'https://www.gokarnapurohita.com' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gokarnapurohita.com' }, { '@type': 'ListItem', position: 2, name: 'Pooja Services', item: 'https://www.gokarnapurohita.com/poojas' }, { '@type': 'ListItem', position: 3, name, item: pageUrl }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
  ];

  return <main className="pooja-detail">
    <header className="page-header">
      <a href={`/?lang=${language}`} aria-label="Gokarna Purohita home">ॐ <span>GOKARNA PUROHITHA</span></a>
      <a href={`/poojas?lang=${language}`}>{copy.back}</a>
    </header>
    <div className="detail-hero">
      <img src={image} alt={`${name} ritual service in Gokarna`} width="720" height="405" />
      <div><p>{copy.label}</p><h1>{heading}</h1><div className="detail-hero-actions"><a href={`tel:+918660751425`}>☎ {language === 'kn' ? 'ಕರೆ ಮಾಡಿ' : language === 'te' ? 'కాల్ చేయండి' : 'Call now'}</a><a href={`https://wa.me/919743029249?text=${encodeURIComponent(whatsappMessage)}`}>{language === 'kn' ? 'ವಾಟ್ಸಾಪ್ ಮಾಡಿ' : language === 'te' ? 'వాట్సాప్ చేయండి' : 'WhatsApp to book'}</a></div></div>
    </div>
    <article>
      <h2>{copy.overview}</h2>
      <p>{details.overview}</p>
      <h3>{copy.tradition}</h3>
      <p>{details.tradition}</p>
      <h3>{copy.preparation}</h3>
      <p>{details.preparation}</p>
      <h3>{copy.purpose}</h3>
      <ul>{purposes.map((purpose) => <li key={purpose}>{purpose}</li>)}</ul>
      <a href={`https://wa.me/919743029249?text=${encodeURIComponent(whatsappMessage)}`}>{copy.whatsapp} →</a>
      <a className="detail-call" href="tel:+918660751425">☎ {language === 'kn' ? 'ಕರೆ ಮಾಡಿ' : language === 'te' ? 'కాల్ చేయండి' : 'Call the Purohita'}</a>
      <section className="pooja-faq" aria-labelledby="faq-heading">
        <h2 id="faq-heading">{language === 'kn' ? 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು' : language === 'te' ? 'తరచుగా అడిగే ప్రశ్నలు' : 'Frequently asked questions'}</h2>
        {faqs.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </section>
      <section className="related-poojas" aria-labelledby="related-heading">
        <h2 id="related-heading">{language === 'kn' ? 'ಸಂಬಂಧಿತ ಪೂಜೆಗಳು' : language === 'te' ? 'సంబంధిత పూజలు' : 'Related Pooja services'}</h2>
        <ul>{related.map(([relatedSlug]) => <li key={relatedSlug}><a href={poojaHref(relatedSlug, language)}>{poojaNames[language][relatedSlug]}</a></li>)}</ul>
      </section>
    </article>
    <div className="page-actions">
      <a href="tel:+918660751425">☎ {language === 'kn' ? 'ಈಗ ಕರೆ ಮಾಡಿ' : language === 'te' ? 'ఇప్పుడే కాల్ చేయండి' : 'Call Now'}</a>
      <a href={`https://wa.me/919743029249?text=${encodeURIComponent(whatsappMessage)}`}>{copy.whatsapp}</a>
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
