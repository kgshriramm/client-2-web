'use client';

import { useEffect, useState } from 'react';
import en from './locales/en.json';
import kn from './locales/kn.json';

type Language = 'en' | 'kn';
type Service = { id: string; name: string; kannada: string; imageLabel: string };

const services: Service[] = [
  { id: 'rudrabhisheka', name: 'Rudrabhisheka', kannada: 'ರುದ್ರಾಭಿಷೇಕ', imageLabel: 'Rudrabhisheka ritual image' },
  { id: 'maha-mrityunjaya-homa', name: 'Maha Mrityunjaya Homa', kannada: 'ಮಹಾ ಮೃತ್ಯುಂಜಯ ಹೋಮ', imageLabel: 'Homa ritual image' },
  { id: 'ganapati-homa', name: 'Ganapati Homa', kannada: 'ಗಣಪತಿ ಹೋಮ', imageLabel: 'Ganapati Homa ritual image' },
  { id: 'satyanarayana-pooja', name: 'Satyanarayana Pooja', kannada: 'ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ', imageLabel: 'Pooja ritual image' },
  { id: 'navagraha-shanti', name: 'Navagraha Shanti', kannada: 'ನವಗ್ರಹ ಶಾಂತಿ', imageLabel: 'Navagraha ritual image' },
  { id: 'narayana-bali', name: 'Narayana Bali', kannada: 'ನಾರಾಯಣ ಬಲಿ', imageLabel: 'Traditional ritual image' },
  { id: 'pitru-dosha-pooja', name: 'Pitru Dosha Pooja', kannada: 'ಪಿತೃ ದೋಷ ಪೂಜೆ', imageLabel: 'Traditional ritual image' },
  { id: 'tripindi-shraddha', name: 'Tripindi Shraddha', kannada: 'ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ', imageLabel: 'Shraddha ritual image' },
  { id: 'ayushya-homa', name: 'Ayushya Homa', kannada: 'ಆಯುಷ್ಯ ಹೋಮ', imageLabel: 'Homa ritual image' },
  { id: 'lakshmi-pooja', name: 'Lakshmi Pooja', kannada: 'ಲಕ್ಷ್ಮೀ ಪೂಜೆ', imageLabel: 'Lakshmi Pooja ritual image' },
  { id: 'chandi-homa', name: 'Chandi Homa', kannada: 'ಚಂಡಿ ಹೋಮ', imageLabel: 'Chandi Homa ritual image' },
  { id: 'griha-pravesha', name: 'Griha Pravesha', kannada: 'ಗೃಹ ಪ್ರವೇಶ', imageLabel: 'Griha Pravesha ritual image' },
];

const galleryLabels = ['Gokarna Mahabaleshwar Temple', 'Temple bells', 'Deepa / oil lamps', 'Kalasha', 'Pooja flowers', 'Homa ritual'];
const galleryImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_2cemKVm-yT71nv_pVXy40Bs9er85vYLmB5qU96wQyg&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UVVbTzIwXAs7GgboNUNvnbuFjc9knSCLnClscd9RAA&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEW8xdsr4TbgDwMYpOOIBPglTIk4Iw--TgZZ5hkwyBLv4mFk5dMCDaKis&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9d4VCuHMzCqhAB6wxAInxRpyd3oAm0_6D39bMnVnalg&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrzYKkq7FoCuG9b9_1cy8oBoOj5DDM3DqEBn3p84IEA&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtuqjTM7sGFm_hgtRnXPVscFVAfhCZjdsTcrjcH-e8-l-IbSyGUieUpc&s=10'
];
const heroImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO120BD11barpa1GwZQb90ShadaN5Kgd0nc3gPlyvSyhEtBjwLNoU905w&s=10';
const serviceImages = [
  'https://t4.ftcdn.net/jpg/02/82/22/25/360_F_282222546_qiGzPx9W9BeuZiXJaDr7o3A3AdgisMnY.jpg', 'https://homas.org/wp-content/uploads/2025/02/Mrutyunjaya-homam.jpg', 'https://homas.org/wp-content/uploads/2022/02/Ganapathi-sudarshana-homa.jpg', 'https://temple.yatradham.org/public/Product/puja-rituals/puja-rituals_D4BC0VP1_202410271641330.webp', 'https://temple.yatradham.org/public/Product/puja-rituals/puja-rituals_pTtmxopr_202411152235270.jpg', 'https://dorituals.com/wp-content/uploads/2024/07/narayan-nagbali-trimbakeshwar.jpg', 'https://temple.yatradham.org/public/Product/puja-rituals/puja-rituals_u0iJVshq_202404221602350.webp', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlZ-aipl_EJ2sPZCgRGFnAcTXrzXqVh0M5FeTzhwdMA&s=10', 'https://homas.org/wp-content/uploads/2022/02/Nava-chandee-homam.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-O-U2lljNlDZCSHe6iQyoeg5NjE8y5W1ELBPpn4M7oA&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiBXtnsEvQgQAjDrd-qpdoTdrHiyyHfpYktv9o8nhCQ&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rxL82cDTCKhKB8TXThOQ36v_3Ohz47zusJswQekltQ&s=10'
];
const whatsappNumber = '919743029249';

function WhatsAppIcon() { return <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3.2A12.7 12.7 0 0 0 5.1 22.2L3.2 28.8l6.8-1.8A12.7 12.7 0 1 0 16 3.2Zm0 22.9a10.3 10.3 0 0 1-5.2-1.4l-.4-.2-4 1.1 1.1-3.9-.2-.4A10.3 10.3 0 1 1 16 26.1Zm5.7-7.7c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.4.2-.7.1a8.5 8.5 0 0 1-2.5-1.5 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4Z" /></svg>; }

export default function Home() {
  const [selected, setSelected] = useState<Service | null>(null);
  const [language, setLanguage] = useState<Language>('kn');
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const t = language === 'en' ? en : kn;
  const serviceName = (service: Service) => language === 'en' ? service.name : service.kannada;
  const goTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [['home', t.home], ['poojas', t.poojas], ['priest', t.aboutPriest], ['gallery', t.gallery], ['faq', t.faq], ['contact', t.contact]] as const;

  return <main>
    <nav className={scrolled ? 'nav nav-solid' : 'nav'}>
      <button className="brand" onClick={() => goTo('home')} aria-label="Home"><span>ॐ</span><strong>GOKARNA</strong><small>VEDIC PUROHITHA</small></button>
      <div className={menuOpen ? 'navlinks show' : 'navlinks'}>{navItems.map(([id, label]) => <button key={id} onClick={() => goTo(id)}>{label}</button>)}</div>
      <div className="nav-actions"><button className="lang" onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}>{language === 'en' ? 'ಕನ್ನಡ' : 'English'}</button><button className="button compact" onClick={() => goTo('contact')}>{t.bookNow}</button><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? '×' : '☰'}</button></div>
    </nav>

    <section id="home" className="hero">
      <div className="hero-art" style={{ backgroundImage: `url("${heroImage}")` }} />
      <div className="hero-copy"><p className="eyebrow">GOKARNA, KARNATAKA</p><h1>{t.heroTitle}</h1><p>{t.heroText}</p><div className="actions"><button className="button" onClick={() => goTo('poojas')}>{t.bookPooja} <i>→</i></button><a className="call" href={`tel:+${whatsappNumber}`}>{t.callNow}</a></div></div>
    </section>

    <section className="trust" aria-label="Trust markers">{[t.experience, t.vedic, t.onlineOffline, t.guidance].map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b></div>)}</section>

    <section id="poojas" className="section services"><div className="section-head"><p className="eyebrow">{t.ritualServices}</p><h2>{t.ritualTitle}</h2><p>{t.ritualIntro}</p></div><div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.id}><div className="ritual-image" style={{ backgroundImage: `url("${serviceImages[index]}")` }} role="img" aria-label={service.imageLabel} /><div className="card-copy"><h3>{serviceName(service)}</h3><p>{t.servicePlaceholder}</p><div><button className="text-link" onClick={() => setSelected(service)}>{t.learnMore} →</button><button className="book-link" onClick={() => goTo('contact')}>{t.bookNow}</button></div></div></article>)}</div></section>

    <section id="about" className="section about"><div><p className="eyebrow">{t.aboutGokarnaLabel}</p><h2>{t.aboutGokarnaTitle}</h2></div><div className="about-copy"><p>{t.aboutGokarnaOne}</p><p>{t.aboutGokarnaTwo}</p><p>{t.aboutGokarnaThree}</p></div></section>

    <section id="priest" className="priest"><div className="portrait-placeholder"><span>Professional portrait placeholder</span><b>Vedic Purohitha</b></div><div className="priest-copy"><p className="eyebrow">{t.aboutPriest}</p><h2>{t.priestTitle}</h2><p>{t.priestText}</p><dl><div><dt>{t.experience}</dt><dd>{t.toBeConfirmed}</dd></div><div><dt>{t.tradition}</dt><dd>{t.toBeConfirmed}</dd></div><div><dt>{t.languages}</dt><dd>English · ಕನ್ನಡ</dd></div><div><dt>{t.mission}</dt><dd>{t.toBeConfirmed}</dd></div></dl><button className="button" onClick={() => goTo('contact')}>{t.contactPriest} →</button></div></section>

    <section className="process"><p className="eyebrow">{t.bookingProcess}</p><h2>{t.processTitle}</h2><div className="steps">{[t.choosePooja, t.selectDate, t.confirmDetails, t.receiveConfirmation].map((step, index) => <div key={step}><span>0{index + 1}</span><h3>{step}</h3></div>)}</div></section>

    <section id="gallery" className="section gallery"><div className="section-head centered"><p className="eyebrow">{t.gallery}</p><h2>{t.galleryTitle}</h2><p>{t.galleryIntro}</p></div><div className="gallery-grid">{galleryLabels.map((label, index) => <div className="gallery-image" key={label} style={{ backgroundImage: `url(\"${galleryImages[index]}\")` }} role="img" aria-label={label} />)}</div></section>

    <section className="section why"><p className="eyebrow">{t.whyChoose}</p><h2>{t.whyTitle}</h2><div>{[t.traditionalMethods, t.authenticRituals, t.personalGuidance, t.onlineConsultation, t.experiencedPriest, t.easyBooking].map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3></article>)}</div></section>

    <section className="section testimonials"><div className="section-head"><p className="eyebrow">{t.testimonials}</p><h2>{t.testimonialTitle}</h2></div><div className="testimonial-grid">{[1, 2, 3].map(n => <article key={n}><span>★★★★★</span><p>{t.testimonialPlaceholder}</p><b>{t.devoteeName}</b><small>{t.reviewPlaceholder}</small></article>)}</div></section>

    <section id="faq" className="section faq"><div><p className="eyebrow">{t.faq}</p><h2>{t.faqTitle}</h2><p>{t.faqIntro}</p></div><div>{t.faqs.map((item, index) => <article className="faq-item" key={item.question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{item.question}<span>{openFaq === index ? '−' : '+'}</span></button>{openFaq === index ? <p>{item.answer}</p> : null}</article>)}</div></section>

    <section id="contact" className="contact"><div><p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a href={`tel:+${whatsappNumber}`}>+91 97430 29249</a><a href="mailto:namaste@gokarnavedicrituals.in">namaste@gokarnavedicrituals.in</a><p>Near Mahabaleshwar Temple, Gokarna, Karnataka 581326</p></div><div className="contact-card"><b>{t.bookingRequest}</b><p>{t.contactFormPlaceholder}</p><a className="button" href={`https://wa.me/${whatsappNumber}`}>{t.sendRequest} →</a><small>{t.mapPlaceholder}</small></div></section>

    <footer><div className="brand"><span>ॐ</span><strong>GOKARNA</strong><small>VEDIC PUROHITHA</small></div><p>{t.footer}</p></footer>
    <a className="whatsapp" href={`https://wa.me/${whatsappNumber}`} aria-label="Chat on WhatsApp"><WhatsAppIcon /><span>WhatsApp</span></a>

    {selected ? <div className="overlay" role="dialog" aria-modal="true" aria-label={serviceName(selected)} onClick={() => setSelected(null)}><article className="modal" onClick={event => event.stopPropagation()}><button className="close" onClick={() => setSelected(null)} aria-label="Close">×</button><div className="modal-image" style={{ backgroundImage: `url("${serviceImages[services.indexOf(selected)]}")` }} role="img" aria-label={selected.imageLabel} /><div><p className="eyebrow">{t.ritualServices}</p><h2>{serviceName(selected)}</h2><p>{t.detailsPending}</p><dl className="modal-details"><div><dt>{t.benefits}</dt><dd>{t.toBeConfirmed}</dd></div><div><dt>{t.idealFor}</dt><dd>{t.toBeConfirmed}</dd></div><div><dt>{t.duration}</dt><dd>{t.toBeConfirmed}</dd></div></dl><button className="button" onClick={() => { setSelected(null); goTo('contact'); }}>{t.bookNow} →</button></div></article></div> : null}
  </main>;
}
