'use client';

import { type FormEvent, useEffect, useState } from 'react';

type Language = 'kn' | 'en' | 'te';
type Service = { id: string; kn: string; en: string; te: string; image: string };

const CALL_PHONE = '918660751425';
const WHATSAPP_PHONE = '919743029249';
function WhatsAppIcon() { return <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3.2A12.7 12.7 0 0 0 5.1 22.2L3.2 28.8l6.8-1.8A12.7 12.7 0 1 0 16 3.2Zm0 22.9a10.3 10.3 0 0 1-5.2-1.4l-.4-.2-4 1.1 1.1-3.9-.2-.4A10.3 10.3 0 1 1 16 26.1Zm5.7-7.7c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.4.2-.7.1a8.5 8.5 0 0 1-2.5-1.5 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4Z" /></svg>; }
const services: Service[] = [
  { id: 'pitru-dosha', kn: 'ಪಿತೃ ದೋಷ ನಿವಾರಣೆ', en: 'Pitru Dosha Nivarane', te: 'పితృ దోష నివారణ', image: 'https://temple.yatradham.org/public/Product/puja-rituals/puja-rituals_u0iJVshq_202404221602350.webp' },
  { id: 'narayana-bali', kn: 'ನಾರಾಯಣ ಬಲಿ', en: 'Narayana Bali', te: 'నారాయణ బలి', image: 'https://dorituals.com/wp-content/uploads/2024/07/narayan-nagbali-trimbakeshwar.jpg' },
  { id: 'tripindi', kn: 'ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ ಕ್ರಿಯಾ ಕರ್ಮ', en: 'Tripindi Shraddha Kriya Karma', te: 'త్రిపిండి శ్రాద్ధ క్రియా కర్మ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlZ-aipl_EJ2sPZCgRGFnAcTXrzXqVh0M5FeTzhwdMA&s=10' },
  { id: 'navagraha', kn: 'ನವಗ್ರಹ ಶಾಂತಿ', en: 'Navagraha Shanti', te: 'నవగ్రహ శాంతి', image: 'https://temple.yatradham.org/public/Product/puja-rituals/puja-rituals_pTtmxopr_202411152235270.jpg' },
  { id: 'mrityunjaya', kn: 'ಮೃತ್ಯುಂಜಯ ಶಾಂತಿ', en: 'Mrityunjaya Shanti', te: 'మృత్యుంజయ శాంతి', image: 'https://vedniketan.org/wp-content/uploads/2019/09/homa.jpg' },
  { id: 'sarpa-samskara', kn: 'ಸರ್ಪ ಸಂಸ್ಕಾರ', en: 'Sarpa Samskara', te: 'సర్ప సంస్కార', image: 'https://famousastrologycentre.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-1.18.10-PM.jpeg' },
  { id: 'ashlesha-bali', kn: 'ಆಶ್ಲೇಷ ಬಲಿ', en: 'Ashlesha Bali', te: 'ఆశ్లేష బలి', image: '/POOJA2.jpeg' },
  { id: 'ekadasha-rudra', kn: 'ಏಕಾದಶ ರುದ್ರ', en: 'Ekadasha Rudra', te: 'ఏకాదశ రుద్ర', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6BYFwLLWlihFjZJhKcZzVzOBtPtI6p4usGXZTzq0-NKrVX-pRt_6FvMX&s=10' },
  { id: 'shata-rudra', kn: 'ಶತ ರುದ್ರ', en: 'Shata Rudra', te: 'శత రుద్ర', image: '/POOJA1.jpeg' },
];

const words = {
  kn: { home: 'ಮುಖಪುಟ', services: 'ಪೂಜೆಗಳು', booking: 'ಕಾಯ್ದಿರಿಸಿ', call: 'ಈಗ ಕರೆ ಮಾಡಿ', hero: 'ಗೋಕರ್ಣದಲ್ಲಿ ಶಾಸ್ತ್ರೋಕ್ತ ಪೂಜೆಗಳು ಮತ್ತು ವೈದಿಕ ಪುನಸ್ಕಾರಗಳನ್ನು ಕಾಯ್ದಿರಿಸಿ', sub: 'ರುದ್ರಾಭಿಷೇಕ, ನಾರಾಯಣ ಬಲಿ, ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ, ಪಿತೃ ಕಾರ್ಯ ಮತ್ತು ನವಗ್ರಹ ಶಾಂತಿ ಪೂಜೆಗಳಿಗಾಗಿ ನಂಬಿಕೆಯ ಗೋಕರ್ಣ ಪುರೋಹಿತರ ಸೇವೆಯನ್ನು ಪಡೆಯಿರಿ.', offerings: 'ನಮ್ಮ ಪೂಜಾ ಸೇವೆಗಳು', keywordIntro: 'ಗೋಕರ್ಣದಲ್ಲಿ ರುದ್ರಾಭಿಷೇಕ, ನಾರಾಯಣ ಬಲಿ, ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ, ಪಿತೃ ಕಾರ್ಯ ಮತ್ತು ಇತರ ವೈದಿಕ ಪೂಜೆಗಳಿಗಾಗಿ ನಂಬಿಕೆಯ ಪುರೋಹಿತರನ್ನು ಸಂಪರ್ಕಿಸಿ.', seoKeywords: 'ಗೋಕರ್ಣ ಪೂಜೆ, ಗೋಕರ್ಣ ಪಿತೃ ದೋష ಪೂಜೆ ಬೆಲೆ, ನಾರಾಯಣ ಬಲಿ ಪೂಜೆ ಗೋಕರ್ಣ, ಗೋಕರ್ಣ ದೇವಸ್ಥಾನದ ಪೂಜಾ ವಿವರಗಳು, ಪಂಡಿತ್ ಜೀ ನıkಡಿ, ಪಂಡಿತ್ ನ ಕೈಗೆ, ಆನ್ಲೈನ್ ಪೂಜಾ ಬುಕಿಂಗ್, ಮನೆಪೂಜೆ, ಕುಕ್ಕೇ ಸುಬ್ರಮಣ್ಯ ಪೂಜೆ ಬುಕಿಂಗ್ ಮತ್ತು ಬಂಗಾರೂರ್‌ನಲ್ಲಿ ಪಂಡಿತ್ ಸೇವೆಗಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.', enquiry: 'ಪೂಜಾ ವಿಚಾರಣೆ ಕಳುಹಿಸಿ', name: 'ನಿಮ್ಮ ಹೆಸರು', mobile: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ', place: 'ಸ್ಥಳ / ವಿಳಾಸ', date: 'ಆದ್ಯತೆಯ ದಿನಾಂಕ', devotees: 'ಭಕ್ತರ ಸಂಖ್ಯೆ', notes: 'ಹೆಚ್ಚುವರಿ ವಿವರಗಳು', select: 'ಪೂಜೆ ಆಯ್ಕೆಮಾಡಿ', send: 'ವಾಟ್ಸ್ಆ್ಯಪ್‌ನಲ್ಲಿ ವಿಚಾರಣೆ ಕಳುಹಿಸಿ', formNote: 'ಸಲ್ಲಿಸಿದ ಬಳಿಕ ವಾಟ್ಸ್ಆ್ಯಪ್‌ನಲ್ಲಿ ನಿಮ್ಮ ವಿಚಾರಣೆಯೊಂದಿಗೆ ಸಂದೇಶ ತೆರೆಯುತ್ತದೆ.', about: 'ಗೋಕರ್ಣ ಪುರೋಹಿತ', aboutText: 'ಗೋಕರ್ಣದಲ್ಲಿ ಸಾಂಪ್ರದಾಯಿಕ ವೇದಿಕ ಪೂಜೆ ಮತ್ತು ಪುನಸ್ಕಾರಗಳಿಗಾಗಿ ನೇರವಾಗಿ ಪುರೋಹಿತರನ್ನು ಸಂಪರ್ಕಿಸಿ.' },
  en: { home: 'Home', services: 'Poojas', booking: 'Book a Pooja', call: 'Call Now', hero: 'Book traditional poojas and Vedic rituals in Gokarna', sub: 'Trusted Gokarna Purohita for Rudrabhisheka, Narayana Bali, Tripindi Shraddha, Pitru Karya and Navagraha Shanti.', offerings: 'Pooja services offered', keywordIntro: 'Book a trusted Gokarna Purohita for Rudrabhisheka, Narayana Bali, Tripindi Shraddha, Pitru Karya and other Vedic rituals in Gokarna.', seoKeywords: 'Looking for Gokarna pooja, Gokarna pitru dosha pooja cost, Narayana Bali pooja in Gokarna, Gokarna temple pooja details, pitru dosha pooja in Gokarna, pandit ji near me, pandit in Bangalore, online pooja booking, pooja at home, or Kukke Subramanya pooja booking? We help you plan your ritual with a trusted purohita.', enquiry: 'Send a Pooja enquiry', name: 'Your name', mobile: 'Mobile number', place: 'Place / address', date: 'Preferred date', devotees: 'Number of devotees', notes: 'Additional details', select: 'Select a Pooja', send: 'Send enquiry on WhatsApp', formNote: 'Submitting opens WhatsApp with your booking enquiry.', about: 'Gokarna Purohitha', aboutText: 'Contact a Purohitha directly for traditional Vedic poojas and rituals in Gokarna.' },
  te: { home: 'హోమ్', services: 'పూజలు', booking: 'పూజ బుక్ చేయండి', call: 'ఇప్పుడే కాల్ చేయండి', hero: 'గోకర్ణలో సాంప్రదాయ పూజలు మరియు వైదిక కర్మకాండలను బుక్ చేయండి', sub: 'రుద్రాభిషేకం, నారాయణ బలి, త్రిపిండి శ్రాద్ధం, పితృకార్యాలు మరియు నవగ్రహ శాంతి పూజల కోసం విశ్వసనీయ గోకర్ణ పౌరోహిత్య సేవ.', offerings: 'అందుబాటులో ఉన్న పూజలు', keywordIntro: 'గోకర్ణలో రుద్రాభిషేకం, నారాయణ బలి, త్రిపిండి శ్రాద్ధం, పితృకార్యాలు మరియు ఇతర వైదిక పూజల కోసం విశ్వసనీయ పౌరోహిత్యుడిని సంప్రదించండి.', seoKeywords: 'గోకర్ణ పూజ, గోకర్ణ పితృ దోష పూజ ధర, నారాయణ బలి పూజ గోకర్ణ, గోకర్ణ ఆలయ పూజ వివరాలు, పండిత్ జీ నెరె మీ, పండిత్ ఇన్ బాంగ్లోరు, ఆన్లైన్ పూజా బుకింగ్, హోమ్ పూజ, కుక్కే సుబ్రమణ్య పూజ బుకింగ్ కోసం విశ్వసనీయ పౌరోహిత్య సేవలను కనుగొనండి.', enquiry: 'పూజ విచారణ పంపండి', name: 'మీ పేరు', mobile: 'మొబైల్ నంబర్', place: 'స్థలం / చిరునామా', date: 'అనుకూల తేదీ', devotees: 'భక్తుల సంఖ్య', notes: 'అదనపు వివరాలు', select: 'పూజ ఎంచుకోండి', send: 'వాట్స్ఆప్‌లో విచారణ పంపండి', formNote: 'సమర్పించిన తర్వాత మీ వివరాలతో వాట్స్ఆప్ సందేశం తెరుచుకుంటుంది.', about: 'గోకర్ణ పౌరోహిత్యుడు', aboutText: 'గోకర్ణలో సాంప్రదాయ వేద పూజలు, కర్మకాండల కోసం పౌరోహిత్యుడిని నేరుగా సంప్రదించండి.' }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [selected, setSelected] = useState('');
  const [languageOpen, setLanguageOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [comingSoon, setComingSoon] = useState(false);
  useEffect(() => {
    const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
    if (requestedLanguage === 'en' || requestedLanguage === 'kn' || requestedLanguage === 'te') setLanguage(requestedLanguage);
  }, []);
  const t = words[language];
  const seoSummary = t.seoKeywords;
  const connectLabel = language === 'kn' ? 'ಈಗ ಸಂಪರ್ಕಿಸಿ' : language === 'te' ? 'ఇప్పుడే సంప్రదించండి' : 'Contact Now';
  const bookNowLabel = language === 'kn' ? 'ಈಗ ಕಾಯ್ದಿರಿಸಿ' : language === 'te' ? 'ఇప్పుడే బుక్ చేయండి' : 'Book Now';
  const offeringsIntro = language === 'kn' ? 'ಪೂಜೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ನೇರವಾಗಿ ವಿಚಾರಣೆ ಕಳುಹಿಸಿ. ವಿವರ, ಸಿದ್ಧತೆ ಮತ್ತು ಲಭ್ಯತೆಯನ್ನು ಪುರೋಹಿತರು ದೃಢೀಕರಿಸುತ್ತಾರೆ.' : language === 'te' ? 'పూజను ఎంచుకుని నేరుగా విచారణ పంపండి. వివరాలు, సన్నాహాలు మరియు అందుబాటును పౌరోహిత్యుడు నిర్ధారిస్తారు.' : 'Choose an offering and send a direct booking enquiry. Details, preparations and availability are confirmed by the Purohitha.';
  const serviceName = (s: Service) => s[language];
  const placeSections = [
    {
      id: 'gokarna',
      image: '/place-images/gokarna-origin.jpg',
      heading: { en: 'About Gokarna', kn: 'ಗೋಕರ್ಣದ ಬಗ್ಗೆ', te: 'గోకర్ణం గురించి' },
      paragraphs: {
        en: [
          'Gokarna is one of the most sacred pilgrimage destinations in Karnataka, located along the Arabian Sea. The name "Gokarna" means "Cow\'s Ear", as the town is believed to have emerged from the ear of Mother Earth in the form of a cow.',
          'The town is famous for the ancient Sri Mahabaleshwar Temple, which houses the sacred Atma Linga of Lord Shiva. Devotees from across India visit Gokarna to perform spiritual rituals, ancestral ceremonies like Pitru Karya, Rudrabhisheka, Narayana Bali, Tripindi Shraddha, and other Vedic poojas.',
          'Gokarna is regarded as one of the seven important Mukti Sthalas of Karnataka and is a place where spirituality, devotion, and natural beauty come together.'
        ],
        kn: [
          'ಗೋಕರ್ಣವು ಕರ್ನಾಟಕದ ಅತ್ಯಂತ ಪವಿತ್ರ ತೀರ್ಥಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇದು ಅರಬ್ಬೀ ಸಮುದ್ರದ ತೀರದಲ್ಲಿದೆ. "ಗೋಕರ್ಣ" ಎಂಬ ಪದದ ಅರ್ಥ "ಹಸುವಿನ ಕಿವಿ". ಪುರಾಣಗಳ ಪ್ರಕಾರ ಈ ಪವಿತ್ರ ಕ್ಷೇತ್ರವು ಹಸುವಿನ ಕಿವಿಯ ಆಕಾರದಿಂದ ಉದ್ಭವಿಸಿದೆ.',
          'ಇಲ್ಲಿರುವ ಶ್ರೀ ಮಹಾಬಲೇಶ್ವರ ದೇವಸ್ಥಾನವು ಭಗವಾನ್ ಶಿವನ ಆತ್ಮಲಿಂಗವನ್ನು ಹೊಂದಿರುವ ಅತ್ಯಂತ ಪವಿತ್ರ ಕ್ಷೇತ್ರವಾಗಿದೆ. ದೇಶದ ವಿವಿಧ ಭಾಗಗಳಿಂದ ಭಕ್ತರು ಇಲ್ಲಿ ಬಂದು ಪಿತೃಕಾರ್ಯ, ರುದ್ರಾಭಿಷೇಕ, ನಾರಾಯಣ ಬಲಿ, ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ ಹಾಗೂ ಅನೇಕ ವೈದಿಕ ಪೂಜೆಗಳನ್ನು ನೆರವೇರಿಸುತ್ತಾರೆ.',
          'ಗೋಕರ್ಣವು ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ಮುಕ್ತಿ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.'
        ],
        te: [
          'గోకర్ణం కర్ణాటకలోని అత్యంత పవిత్రమైన తీర్థక్షేత్రాలలో ఒకటి. ఇది అరేబియా సముద్ర తీరంలో ఉంది. "గోకర్ణం" అంటే "ఆవు చెవి".',
          'ఇక్కడ ఉన్న శ్రీ మహాబలేశ్వర ఆలయంలో భగవాన్ శివుని ఆత్మలింగం ప్రతిష్ఠించబడింది. దేశం నలుమూలల నుంచి భక్తులు ఇక్కడికి వచ్చి పితృకార్యాలు, రుద్రాభిషేకం, నారాయణ బలి, త్రిపిండి శ్రాద్ధం మరియు ఇతర వైదిక పూజలను నిర్వహిస్తారు.',
          'గోకర్ణం కర్ణాటకలోని ప్రసిద్ధ ముక్తి ಕ್ಷೇತ್ರాలలో ఒకటి.'
        ]
      }
    },
    {
      id: 'mahaba',
      image: '/place-images/mahabaleshwar.webp',
      heading: { en: 'Sri Mahabaleshwar Temple', kn: 'ಶ್ರೀ ಮಹಾಬಲೇಶ್ವರ ದೇವಸ್ಥಾನ', te: 'శ్రీ మహాబలేశ్వర ఆలయం' },
      paragraphs: {
        en: [
          'Sri Mahabaleshwar Temple is one of the most revered Shiva temples in India. It is believed that the temple enshrines the Atma Linga, originally granted by Lord Shiva to Ravana.',
          'According to Hindu mythology, Lord Ganesha, disguised as a young Brahmin boy, cleverly placed the Atma Linga on the ground at Gokarna. Once placed, the Atma Linga became permanently fixed to the earth, making Gokarna an eternal place of worship.',
          'The temple has been a center of Vedic traditions for centuries and attracts thousands of devotees every year seeking blessings, peace, prosperity, and liberation.'
        ],
        kn: [
          'ಶ್ರೀ ಮಹಾಬಲೇಶ್ವರ ದೇವಸ್ಥಾನವು ಭಾರತದ ಅತ್ಯಂತ ಪವಿತ್ರ ಶಿವ ದೇವಾಲಯಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇಲ್ಲಿ ಭಗವಾನ್ ಶಿವನ ಆತ್ಮಲಿಂಗ ಪ್ರತಿಷ್ಠಾಪಿತವಾಗಿದೆ.',
          'ಪುರಾಣಗಳ ಪ್ರಕಾರ ರಾವಣನಿಗೆ ಶಿವನು ಆತ್ಮಲಿಂಗವನ್ನು ನೀಡಿದನು. ಆದರೆ ಗಣೇಶನು ಬಾಲ ಬ್ರಾಹ್ಮಣನ ರೂಪದಲ್ಲಿ ಬಂದು ಆತ್ಮಲಿಂಗವನ್ನು ಗೋಕರ್ಣದಲ್ಲಿ ಭೂಮಿಗೆ ಇಟ್ಟನು. ನಂತರ ಅದು ಅಲ್ಲಿಯೇ ಶಾಶ್ವತವಾಗಿ ನೆಲೆಗೊಂಡಿತು.',
          'ಶತಮಾನಗಳಿಂದ ಈ ದೇಗುಲವು ವೈದಿಕ ಸಂಪ್ರದಾಯದ ಪ್ರಮುಖ ಕೇಂದ್ರವಾಗಿದೆ.'
        ],
        te: [
          'శ్రీ మహాబలేశ్వర ఆలయం భారతదేశంలోని అత్యంత పవిత్రమైన శివాలయాలలో ఒకటి. ఇక్కడ భగవాన్ శివుని ఆత్మలింగం ప్రతిష్ఠించబడింది.',
          'పురాణాల ప్రకారం శివుడు రావణునికి ఆత్మలింగాన్ని ప్రసాదించాడు. గణేశుడు బాల బ్రాహ్మణుడి వేషంలో వచ్చి ఆ లింగాన్ని గోకర్ణంలో నేలపై ఉంచాడు. అప్పటి నుండి అది శాశ్వతంగా అక్కడే స్థిరపడింది.',
          'ఈ ఆలయం శతాబ్దాలుగా వైదిక సంప్రదాయానికి প্রধান కేంద్రంగా నిలిచింది.'
        ]
      }
    },
    {
      id: 'mahaganapati',
      image: '/place-images/mahaganapati.jpg',
      heading: { en: 'Sri Mahaganapati Temple', kn: 'ಶ್ರೀ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ', te: 'శ్రీ మహాగణపతి ఆలయం' },
      paragraphs: {
        en: [
          'Located near the Mahabaleshwar Temple, Sri Mahaganapati Temple holds immense importance in Gokarna. It is customary for devotees to first seek the blessings of Lord Ganesha before visiting Lord Mahabaleshwar.',
          'According to tradition, Lord Ganesha prevented Ravana from carrying the Atma Linga to Lanka, ensuring that it remained in Gokarna for the welfare of humanity.',
          'Devotees believe that worshipping Mahaganapati removes obstacles and brings success in all auspicious endeavors.'
        ],
        kn: [
          'ಮಹಾಬಲೇಶ್ವರ ದೇವಸ್ಥಾನದ ಸಮೀಪದಲ್ಲಿರುವ ಶ್ರೀ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನವು ಗೋಕರ್ಣದ ಪ್ರಮುಖ ದೇವಾಲಯಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.',
          'ಸಂಪ್ರದಾಯದಂತೆ ಭಕ್ತರು ಮೊದಲು ಮಹಾಗಣಪತಿಯನ್ನು ದರ್ಶನ ಮಾಡಿ ನಂತರ ಮಹಾಬಲೇಶ್ವರನ ದರ್ಶನ ಮಾಡುತ್ತಾರೆ.',
          'ಗಣೇಶನು ರಾವಣನಿಂದ ಆತ್ಮಲಿಂಗವನ್ನು ಗೋಕರ್ಣದಲ್ಲೇ ಸ್ಥಾಪಿಸಿದನೆಂದು ಪುರಾಣಗಳು ಹೇಳುತ್ತವೆ.'
        ],
        te: [
          'మహాబలేశ్వర ఆలయానికి సమీపంలో ఉన్న శ్రీ మహాగణపతి ఆలయం గోకర్ణంలోని ప్రముఖ ఆలయాలలో ఒకటి.',
          'సంప్రదాయం ప్రకారం భక్తులు ముందుగా మహాగణపతిని దర్శించి తరువాత మహాబలేశ్వర స్వామిని దర్శిస్తారు.',
          'రావణుడు ఆత్మలింగాన్ని లంకకు తీసుకెళ్లకుండా గణేశుడు అడ్డుకున్నాడని పురాణాలు చెబుతున్నాయి.'
        ]
      }
    },
    {
      id: 'why',
      image: '/place-images/gokarna-pooja.jpg',
      heading: { en: 'Why Perform Poojas in Gokarna?', kn: 'ಗೋಕರ್ಣದಲ್ಲಿ ಪೂಜೆಗಳನ್ನು ಏಕೆ ನೀವು ಮಾಡಬೇಕು?', te: 'గోకర్ణంలో పూజలు ఎందుకు జరపాలి?' },
      paragraphs: {
        en: [
          'Gokarna is considered one of the holiest places to perform Vedic rituals for Lord Shiva and ancestral ceremonies. Rituals performed here are believed to bring spiritual peace, remove obstacles, seek divine blessings, and offer prayers for departed ancestors.'
        ],
        kn: [
          'ಗೋಕರ್ಣವು ಶಿವಪೂಜೆ ಹಾಗೂ ಪಿತೃಕಾರ್ಯಗಳಿಗೆ ಅತ್ಯಂತ ಪವಿತ್ರ ಕ್ಷೇತ್ರವಾಗಿದೆ. ಇಲ್ಲಿ ಪೂಜೆಗಳನ್ನು ನೆರವೇರಿಸುವುದರಿಂದ ಆಧ್ಯಾತ್ಮಿಕ ಶಾಂತಿ, ಅಡಚಣೆಗಳನ್ನು ನಿವಾರಣೆ, ದೈವ ಅನುಗ್ರಹ ಮತ್ತು ಮೃತರಾದ ಪೂರ್ವಜರಿಗೆ ಪ್ರಾರ್ಥನೆ ಎನ್ನುವುದು ನಂಬಿಕೆಯಾಗಿದೆ.'
        ],
        te: [
          'గోకర్ణం శివారాధన మరియు పితృకార్యాలకు అత్యంత పవిత్రమైన క్షేత్రంగా భావించబడుతుంది. ఇక్కడ నిర్వహించే కర్మకాండలు ఆధ్యాత్మిక శాంతి, ఆటంకాల ఏర్పాటును తగ్గించడం, దివ్య అనుగ్రహాన్ని పొందడం మరియు departed ancestors కోసం ప్రార్ధనలు చేయడం నమ్మకం.'
        ]
      },
      list: {
        en: [
          'Rudrabhisheka',
          'Maha Rudra Pooja',
          'Laghu Rudra',
          'Narayana Bali',
          'Tripindi Shraddha',
          'Pitru Karya',
          'Tila Tarpana',
          'Graha Shanti',
          'Navagraha Pooja',
          'Satyanarayana Pooja',
          'Ganapati Homa',
          'Ayushya Homa'
        ],
        kn: [
          'ರುದ್ರಾಭಿಷೇಕ',
          'ಮಹಾ ರುದ್ರ ಪೂಜೆ',
          'ಲಘು ರುದ್ರ',
          'ನಾರಾಯಣ ಬಲಿ',
          'ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ',
          'ಪಿತೃ ಕಾರ್ಯ',
          'ತಿಲ ತರ್ಪಣ',
          'ಗ್ರಹ ಶಾಂತಿ',
          'ನವಗ್ರಹ ಪೂಜೆ',
          'ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ',
          'ಗಣಪತಿ ಹೋಮ',
          'ಆಯುಷ್ಯ ಹೋಮ'
        ],
        te: [
          'రుద్రాభిషేకం',
          'మహా రుద్ర పూజ',
          'లఘు రుద్రం',
          'నారాయణ బలి',
          'త్రిపిండి శ్రాద్ధం',
          'పితృకార్యాలు',
          'తిల తర్పణం',
          'గ్రహ శాంతి',
          'నవగ్రహ పూజ',
          'సత్యనారాయణ పూజ',
          'గణపతి హోమ',
          'ఆయుష్య హోమ'
        ]
      }
    }
  ];
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const message = `Namaskara, my name is ${data.get('name')}.\n\nI would like to enquire about: ${data.get('pooja')}.\nPreferred date: ${data.get('date') || 'To be discussed'}\nPlace: ${data.get('place')}\nMobile: ${data.get('mobile')}\nNumber of devotees: ${data.get('devotees') || 'To be discussed'}\nAdditional details: ${data.get('notes') || 'None'}\n\nPlease let me know availability and required preparations.`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };
  return <main>
    <header><a className="logo" href="#home"><span>ॐ</span><b>GOKARNA</b><small>VEDIC PUROHITHA</small></a><nav><a href="#home">{t.home}</a><a href="#poojas">{t.services}</a><button onClick={() => setBookingOpen(true)}>{t.booking}</button></nav><div className="language-menu"><button className="language-trigger" onClick={() => setLanguageOpen(!languageOpen)} aria-expanded={languageOpen}>{language === 'kn' ? 'ಕನ್ನಡ' : language === 'en' ? 'English' : 'తెలుగు'} <span>⌄</span></button>{languageOpen ? <div className="language-options">{([['kn','ಕನ್ನಡ'],['en','English'],['te','తెలుగు']] as const).map(([code,label]) => <button className={language === code ? 'active' : ''} key={code} onClick={() => { setLanguage(code); setLanguageOpen(false); }}>{label}</button>)}</div> : null}</div></header>
    <section id="home" className="hero"><div className="hero-image" /><div className="hero-copy"><p>GOKARNA, KARNATAKA</p><h1>{t.hero}</h1><h2>{t.sub}</h2><div><button className="cta" onClick={() => setBookingOpen(true)}>{t.booking} →</button><a className="call" href={`tel:+${CALL_PHONE}`}>{t.call}: +91 86607 51425</a></div></div></section>
    <section id="poojas" className="section"><p className="eyebrow">GOKARNA POOJA BOOKING</p><h2>{t.offerings}</h2><p className="intro">{offeringsIntro}</p><p className="intro" style={{ marginTop: '0.75rem' }}>{t.keywordIntro}</p><p className="intro" style={{ marginTop: '0.75rem', fontSize: '0.95rem' }}>{seoSummary}</p><div className="cards">{services.map(service => <article key={service.id}><div style={{ backgroundImage: `url("${service.image}")` }} role="img" aria-label={serviceName(service)} /><h3>{serviceName(service)}</h3><button onClick={() => { setSelected(serviceName(service)); setBookingOpen(true); }}>{t.booking} →</button></article>)}</div><a className="learn-poojas" href={`/poojas?lang=${language}`}>{language === 'kn' ? 'ಪೂಜೆಗಳ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ' : language === 'te' ? 'పూజల గురించి మరింత తెలుసుకోండి' : 'Know more about Poojas'} →</a><div className="pooja-image-strip" aria-label="Pooja gallery"><img src="/place-images/image1.jpeg" alt="Pooja ritual" loading="lazy" /><img src="/place-images/image2.jpeg" alt="Pooja ritual" loading="lazy" /><img src="/place-images/image3.jpeg" alt="Pooja ritual" loading="lazy" /><img src="/place-images/image4.jpeg" alt="Pooja ritual" loading="lazy" /></div></section>
    <section className="place"><div className="place-header"><p className="eyebrow">{language === 'kn' ? 'ಗೋಕರ್ಣ ಪರಿಚಯ' : language === 'te' ? 'గోకర్ణ పరిచయం' : 'About Gokarna'}</p><h2>{language === 'kn' ? 'Gokarna Purohita ಮತ್ತು ಗೋಕರ್ಣದ ಧಾರ್ಮಿಕ ಮಹತ್ತ್ವ' : language === 'te' ? 'Gokarna Purohita మరియు గోకర్ణం ధಾರ్మిక ప్రಾಮుఖ్యత' : 'Gokarna Purohita and the Spiritual Significance of Gokarna'}</h2></div>{placeSections.map((section, index) => <article key={section.id} className={index % 2 === 1 ? 'reverse' : ''}><div className="place-image"><img src={section.image} alt={section.heading[language]} width="850" height="508" loading="lazy" /></div><div className="place-copy"><p className="eyebrow">{section.heading[language]}</p>{section.paragraphs[language].map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}{section.list ? <ul>{section.list[language].map(item => <li key={item}>{item}</li>)}</ul> : null}</div></article>)}</section>
    <section className="about"><p className="eyebrow">{t.about}</p><h2>{t.aboutText}</h2><a href={`https://wa.me/${WHATSAPP_PHONE}`}>{connectLabel} →</a></section>
    <footer>© {new Date().getFullYear()} Gokarna Purohitha · <a href={`tel:+${CALL_PHONE}`}>+91 86607 51425</a></footer><a className="whatsapp" href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Namaskara, I would like to enquire about a Pooja in Gokarna.')}`} aria-label="WhatsApp"><WhatsAppIcon /></a>{!bookingOpen ? <div className="mobile-actions"><a href={`tel:+${CALL_PHONE}`}>☎ &nbsp; {t.call}</a><a href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Namaskara, I would like to enquire about a Pooja in Gokarna.')}`}><WhatsAppIcon /> {connectLabel}</a></div> : null}
    {bookingOpen ? <div className="booking-overlay" role="dialog" aria-modal="true" aria-label={t.enquiry} onClick={() => setBookingOpen(false)}><section className="booking-modal" onClick={event => event.stopPropagation()}><button className="back" onClick={() => setBookingOpen(false)} aria-label="Back">←</button><p className="eyebrow">POOJA ENQUIRY</p><h2>{t.enquiry}</h2><p>{t.formNote}</p><form onSubmit={submit}><label>{t.name}<input name="name" required autoComplete="name" /></label><label>{t.mobile}<input name="mobile" type="tel" required autoComplete="tel" /></label><label>{t.place}<input name="place" required autoComplete="street-address" /></label><label>{t.select}<select name="pooja" required value={selected} onChange={e => setSelected(e.target.value)}><option value="">{t.select}</option>{services.map(s => <option value={serviceName(s)} key={s.id}>{serviceName(s)}</option>)}</select></label><label>{t.date}<input name="date" type="date" /></label><label>{t.devotees}<input name="devotees" type="number" min="1" /></label><label className="wide">{t.notes}<textarea name="notes" rows={3} /></label><div className="modal-actions"><button className="whatsapp-action" type="submit">{connectLabel}</button><button className="book-action" type="button" onClick={() => setComingSoon(true)}>{bookNowLabel}</button></div>{comingSoon ? <p className="coming-soon">{language === 'kn' ? 'ಆನ್‌ಲೈನ್ ಕಾಯ್ದಿರಿಸುವಿಕೆ ಶೀಘ್ರದಲ್ಲೇ ಲಭ್ಯವಾಗಲಿದೆ.' : language === 'te' ? 'ఆన్‌లైన్ బుకింగ్ త్వరలో అందుబాటులో ఉంటుంది.' : 'Online booking is coming soon.'}</p> : null}</form></section></div> : null}
  </main>;
}
