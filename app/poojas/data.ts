export const poojas = [
  ['rudrabhisheka', 'Rudrabhisheka', '/pooja-images/rudra.jpg'],
  ['pitru-dosha', 'Pitru Dosha Nivarane', '/pooja-images/pitru-dosha.webp'],
  ['narayana-bali', 'Narayana Bali', '/pooja-images/narayana-bali.jpg'],
  ['tripindi', 'Tripindi Shraddha Kriya Karma', '/pooja-images/tripindi.jpg'],
  ['navagraha', 'Navagraha Shanti', '/pooja-images/navagraha.jpg'],
  ['mrityunjaya', 'Mrityunjaya Shanti', '/pooja-images/mrityunjaya-shanti.jpg'],
  ['sarpa-samskara', 'Sarpa Samskara', '/POOJA2.jpeg'],
  ['ashlesha-bali', 'Ashlesha Bali', '/POOJA1.jpeg'],
  ['ekadasha-rudra', 'Ekadasha Rudra', '/pooja-images/rudra.jpg'],
  ['shata-rudra', 'Shata Rudra', '/pooja-images/rudra.jpg'],
] as const;

export const seoSlugs: Record<string, string> = {
  rudrabhisheka: 'rudrabhisheka-gokarna',
  'narayana-bali': 'narayana-bali-gokarna',
  'pitru-dosha': 'pitru-dosha-pooja-gokarna',
  'sarpa-samskara': 'sarpa-samskara-gokarna',
  navagraha: 'navagraha-shanti-gokarna',
};

export const canonicalPoojaSlug = (slug: string) =>
  Object.entries(seoSlugs).find(([, seoSlug]) => seoSlug === slug)?.[0] ?? slug;

export const poojaHref = (slug: string, language?: string) =>
  `/poojas/${seoSlugs[slug] ?? slug}${language ? `?lang=${language}` : ''}`;

export type PoojaLanguage = 'kn' | 'en' | 'te';
export const poojaNames: Record<PoojaLanguage, Record<string, string>> = {
  kn: { rudrabhisheka:'ರುದ್ರಾಭಿಷೇಕ','pitru-dosha':'ಪಿತೃ ದೋಷ ನಿವಾರಣೆ','narayana-bali':'ನಾರಾಯಣ ಬಲಿ',tripindi:'ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ ಕ್ರಿಯಾ ಕರ್ಮ',navagraha:'ನವಗ್ರಹ ಶಾಂತಿ',mrityunjaya:'ಮೃತ್ಯುಂಜಯ ಶಾಂತಿ','sarpa-samskara':'ಸರ್ಪ ಸಂಸ್ಕಾರ','ashlesha-bali':'ಆಶ್ಲೇಷ ಬಲಿ','ekadasha-rudra':'ಏಕಾದಶ ರುದ್ರ','shata-rudra':'ಶತ ರುದ್ರ' },
  en: Object.fromEntries(poojas.map(([slug,name]) => [slug,name])),
  te: { rudrabhisheka:'రుద్రాభిషేకం','pitru-dosha':'పితృ దోష నివారణ','narayana-bali':'నారాయణ బలి',tripindi:'త్రిపిండి శ్రాద్ధ క్రియా కర్మ',navagraha:'నవగ్రహ శాంతి',mrityunjaya:'మృత్యుంజయ శాంతి','sarpa-samskara':'సర్ప సంస్కార','ashlesha-bali':'ఆశ్లేష బలి','ekadasha-rudra':'ఏకాదశ రుద్ర','shata-rudra':'శత రుద్ర' },
};

type Detail = { overview: string; tradition: string; preparation: string };
export const poojaDetails: Record<PoojaLanguage, Record<string, Detail>> = {
  en: {
    rudrabhisheka: { overview: 'Rudrabhisheka is a traditional Shiva worship in which abhisheka is offered with Vedic prayers to Lord Rudra.', tradition: 'The recitation, offerings and form of abhisheka are arranged according to the Purohita’s procedure, the venue and the family’s tradition.', preparation: 'Share your preferred date, location and number of devotees. The Purohita will confirm the suitable format and preparation details.' },
    'pitru-dosha': { overview: 'A family-led ancestral remembrance rite, traditionally performed with sankalpa, tarpana and offerings as advised by the priest.', tradition: 'It is commonly requested around annual remembrance days, Amavasya, or a family pilgrimage. The exact observance differs by family tradition.', preparation: 'Please share the names, gotra and relevant tithi, if known. The Purohita will confirm the suitable form, materials and timing.' },
    'narayana-bali': { overview: 'Narayana Bali is a traditional rite in which prayers and offerings are made to Lord Narayana in connection with ancestral remembrance.', tradition: 'Customs, eligibility and sequence vary by sampradaya and regional practice. It is planned only after a personal consultation with the Purohita.', preparation: 'Please contact us before fixing travel or a date. The Purohita will advise on the family details, tithi and materials required.' },
    tripindi: { overview: 'Tripindi Shraddha is an ancestral rite in which three pindas are offered as part of a formal Shraddha observance.', tradition: 'It is performed according to family lineage and local Vedic custom, often alongside other ancestral observances when appropriate.', preparation: 'Share the family gotra and ancestor details available to you. The appropriate day, procedure and offerings will be confirmed personally.' },
    navagraha: { overview: 'Navagraha Shanti is a worship of the nine grahas, with prayers for harmony, clarity and auspicious guidance.', tradition: 'The sankalpa, mantras and offerings are selected by the Purohita in keeping with the family’s tradition and stated intention.', preparation: 'Please provide your preferred date and purpose of worship. Horoscope-based advice, if sought, should be discussed directly with the Purohita.' },
    mrityunjaya: { overview: 'Mrityunjaya Shanti centres on prayers to Lord Shiva as Mrityunjaya, traditionally associated with wellbeing, courage and longevity.', tradition: 'The Mahamrityunjaya mantra is a revered Vedic prayer to Rudra. The form of japa, abhisheka or homa is decided by the Purohita.', preparation: 'Share the devotee’s name, nakshatra if known, and preferred date. The Purohita will advise the suitable observance and materials.' },
    'sarpa-samskara': { overview: 'Sarpa Samskara is a specialised serpent-related expiatory observance in certain South Indian temple traditions.', tradition: 'Its procedure, eligibility and venue are tradition-specific. At Kukke Subrahmanya, the temple’s official guidance sets particular eligibility and reporting requirements.', preparation: 'Please consult the Purohita before booking. For a temple-specific seva, always confirm the current procedure and booking rules directly with that temple.' },
    'ashlesha-bali': { overview: 'Ashlesha Bali is a naga-related worship observed in some South Indian traditions, especially in connection with Subrahmanya worship.', tradition: 'The mantras, offerings and eligibility differ across temples and family practices; it should not be treated as a one-size-fits-all ceremony.', preparation: 'Contact the Purohita with your intended venue and date. Temple-specific bookings and requirements must be verified with the respective temple.' },
    'ekadasha-rudra': { overview: 'Ekadasha Rudra is an extended Shiva worship involving repeated recitation of Sri Rudram and abhisheka in a traditional format.', tradition: 'It is a devotional observance for Lord Shiva. The number of priests, recitations and offerings is planned according to time, venue and family custom.', preparation: 'Please enquire with the date, location and number of devotees. The Purohita will suggest the appropriate scale and preparation list.' },
    'shata-rudra': { overview: 'Shata Rudra is a more elaborate Rudra worship, arranged with repeated Vedic recitation and Shiva abhisheka.', tradition: 'Because arrangements can vary substantially, the precise format is finalised by the Purohita after discussing the family’s intention, venue and available time.', preparation: 'Advance planning is recommended. Contact us for priest availability, required materials and a ceremony plan suited to your occasion.' },
  },
  kn: {
    rudrabhisheka: { overview: 'ರುದ್ರಾಭಿಷೇಕವು ರುದ್ರನಿಗೆ ವೈದಿಕ ಪ್ರಾರ್ಥನೆಗಳೊಂದಿಗೆ ಅಭಿಷೇಕ ಅರ್ಪಿಸುವ ಸಾಂಪ್ರದಾಯಿಕ ಶಿವಾರಾಧನೆಯಾಗಿದೆ.', tradition: 'ಪಠಣ, ಅರ್ಪಣೆ ಮತ್ತು ಅಭಿಷೇಕದ ವಿಧಾನವನ್ನು ಪುರೋಹಿತರ ಪದ್ಧತಿ, ಸ್ಥಳ ಮತ್ತು ಕುಟುಂಬದ ಸಂಪ್ರದಾಯಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಆಯೋಜಿಸಲಾಗುತ್ತದೆ.', preparation: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ದಿನಾಂಕ, ಸ್ಥಳ ಮತ್ತು ಭಕ್ತರ ಸಂಖ್ಯೆಯನ್ನು ತಿಳಿಸಿ. ಸೂಕ್ತ ವಿಧಾನ ಮತ್ತು ಸಿದ್ಧತೆಯನ್ನು ಪುರೋಹಿತರು ದೃಢೀಕರಿಸುತ್ತಾರೆ.' },
    'pitru-dosha': { overview: 'ಇದು ಕುಟುಂಬದ ಪೂರ್ವಜರ ಸ್ಮರಣಾರ್ಥ ಸಂಕಲ್ಪ, ತರ್ಪಣ ಮತ್ತು ಅರ್ಪಣೆಗಳೊಂದಿಗೆ ಪುರೋಹಿತರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ನೆರವೇರಿಸುವ ವಿಧಿಯಾಗಿದೆ.', tradition: 'ಇದನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ವಾರ್ಷಿಕ ಸ್ಮರಣಾ ದಿನ, ಅಮಾವಾಸ್ಯೆ ಅಥವಾ ತೀರ್ಥಯಾತ್ರೆಯ ಸಂದರ್ಭದಲ್ಲಿ ಮಾಡಲಾಗುತ್ತದೆ. ಕುಟುಂಬದ ಸಂಪ್ರದಾಯಕ್ಕೆ ಅನುಗುಣವಾಗಿ ವಿಧಾನ ಬದಲಾಗಬಹುದು.', preparation: 'ಗೋತ್ರ, ತಿಳಿದಿರುವ ತಿಥಿ ಮತ್ತು ಪೂರ್ವಜರ ಹೆಸರುಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ. ಸೂಕ್ತ ವಿಧಾನ, ಸಾಮಗ್ರಿ ಮತ್ತು ಸಮಯವನ್ನು ಪುರೋಹಿತರು ತಿಳಿಸುತ್ತಾರೆ.' },
    'narayana-bali': { overview: 'ನಾರಾಯಣ ಬಲಿಯು ಪೂರ್ವಜರ ಸ್ಮರಣೆಯ ಅಂಗವಾಗಿ ಶ್ರೀನಾರಾಯಣನಿಗೆ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಅರ್ಪಣೆ ಮಾಡುವ ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಿಯಾಗಿದೆ.', tradition: 'ಸಂಪ್ರದಾಯ, ಅರ್ಹತೆ ಮತ್ತು ಕ್ರಮವು ಕುಟುಂಬದ ಹಾಗೂ ಪ್ರಾದೇಶಿಕ ಪದ್ಧತಿಗಳ ಪ್ರಕಾರ ಬದಲಾಗುತ್ತದೆ. ಪುರೋಹಿತರ ವೈಯಕ್ತಿಕ ಸಲಹೆಯ ನಂತರವೇ ಯೋಜಿಸಲಾಗುತ್ತದೆ.', preparation: 'ಪ್ರಯಾಣ ಅಥವಾ ದಿನಾಂಕ ನಿಗದಿಪಡಿಸುವ ಮೊದಲು ಸಂಪರ್ಕಿಸಿ. ಕುಟುಂಬದ ವಿವರ, ತಿಥಿ ಮತ್ತು ಅಗತ್ಯ ಸಾಮಗ್ರಿಗಳ ಬಗ್ಗೆ ಪುರೋಹಿತರು ತಿಳಿಸುತ್ತಾರೆ.' },
    tripindi: { overview: 'ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧವು ಔಪಚಾರಿಕ ಶ್ರಾದ್ಧದ ಅಂಗವಾಗಿ ಮೂರು ಪಿಂಡಗಳನ್ನು ಅರ್ಪಿಸುವ ಪಿತೃಕಾರ್ಯವಾಗಿದೆ.', tradition: 'ಇದು ಕುಟುಂಬದ ಗೋತ್ರ ಮತ್ತು ಸ್ಥಳೀಯ ವೈದಿಕ ಸಂಪ್ರದಾಯದಂತೆ ನಡೆಯುತ್ತದೆ; ಅಗತ್ಯವಿದ್ದಲ್ಲಿ ಇತರ ಪಿತೃಕಾರ್ಯಗಳ ಜೊತೆಗೆ ನೆರವೇರಿಸಬಹುದು.', preparation: 'ನಿಮಗೆ ತಿಳಿದಿರುವ ಗೋತ್ರ ಮತ್ತು ಪೂರ್ವಜರ ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ. ಸೂಕ್ತ ದಿನ, ವಿಧಾನ ಮತ್ತು ಅರ್ಪಣೆಗಳನ್ನು ವೈಯಕ್ತಿಕವಾಗಿ ದೃಢೀಕರಿಸಲಾಗುತ್ತದೆ.' },
    navagraha: { overview: 'ನವಗ್ರಹ ಶಾಂತಿಯು ಒಂಬತ್ತು ಗ್ರಹಗಳಿಗೆ ಸಮರ್ಪಿತವಾದ ಪೂಜೆಯಾಗಿದ್ದು, ಸಾಮರಸ್ಯ, ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಶುಭ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಪ್ರಾರ್ಥಿಸಲಾಗುತ್ತದೆ.', tradition: 'ಕುಟುಂಬದ ಸಂಪ್ರದಾಯ ಮತ್ತು ಉದ್ದೇಶಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಸಂಕಲ್ಪ, ಮಂತ್ರ ಮತ್ತು ಅರ್ಪಣೆಗಳನ್ನು ಪುರೋಹಿತರು ಆಯ್ಕೆಮಾಡುತ್ತಾರೆ.', preparation: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ದಿನಾಂಕ ಮತ್ತು ಪೂಜೆಯ ಉದ್ದೇಶವನ್ನು ತಿಳಿಸಿ. ಜಾತಕಾಧಾರಿತ ಸಲಹೆ ಬೇಕಿದ್ದರೆ ಪುರೋಹಿತರೊಂದಿಗೆ ನೇರವಾಗಿ ಚರ್ಚಿಸಿ.' },
    mrityunjaya: { overview: 'ಮೃತ್ಯುಂಜಯ ಶಾಂತಿಯು ಕ್ಷೇಮ, ಧೈರ್ಯ ಮತ್ತು ದೀರ್ಘಾಯುಷ್ಯಕ್ಕಾಗಿ ಪರಂಪರೆಯಿಂದ ಪ್ರಾರ್ಥಿಸುವ ಭಗವಾನ್ ಶಿವನ ಮೃತ್ಯುಂಜಯ ಸ್ವರೂಪದ ಆರಾಧನೆಯಾಗಿದೆ.', tradition: 'ಮಹಾಮೃತ್ಯುಂಜಯ ಮಂತ್ರವು ರುದ್ರನಿಗೆ ಸಮರ್ಪಿತವಾದ ಗೌರವಾನ್ವಿತ ವೈದಿಕ ಪ್ರಾರ್ಥನೆ. ಜಪ, ಅಭಿಷೇಕ ಅಥವಾ ಹೋಮದ ರೂಪವನ್ನು ಪುರೋಹಿತರು ನಿರ್ಧರಿಸುತ್ತಾರೆ.', preparation: 'ಭಕ್ತರ ಹೆಸರು, ತಿಳಿದಿದ್ದರೆ ನಕ್ಷತ್ರ ಮತ್ತು ದಿನಾಂಕವನ್ನು ತಿಳಿಸಿ. ಸೂಕ್ತ ವಿಧಾನ ಮತ್ತು ಸಾಮಗ್ರಿಗಳನ್ನು ಪುರೋಹಿತರು ಸೂಚಿಸುತ್ತಾರೆ.' },
    'sarpa-samskara': { overview: 'ಸರ್ಪ ಸಂಸ್ಕಾರವು ದಕ್ಷಿಣ ಭಾರತದ ಕೆಲವು ದೇವಾಲಯ ಸಂಪ್ರದಾಯಗಳಲ್ಲಿ ನಡೆಯುವ ವಿಶೇಷ ನಾಗ-ಸಂಬಂಧಿತ ಪ್ರಾಯಶ್ಚಿತ್ತ ವಿಧಿಯಾಗಿದೆ.', tradition: 'ಇದರ ವಿಧಾನ, ಅರ್ಹತೆ ಮತ್ತು ಸ್ಥಳವು ಸಂಪ್ರದಾಯ ನಿರ್ದಿಷ್ಟವಾಗಿದೆ. ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯದಲ್ಲಿ ದೇವಾಲಯದ ಅಧಿಕೃತ ಮಾರ್ಗಸೂಚಿಗಳು ವಿಶೇಷ ಅರ್ಹತೆ ಮತ್ತು ವರದಿ ನಿಯಮಗಳನ್ನು ಸೂಚಿಸುತ್ತವೆ.', preparation: 'ಕಾಯ್ದಿರಿಸುವ ಮೊದಲು ಪುರೋಹಿತರೊಂದಿಗೆ ಸಮಾಲೋಚಿಸಿ. ದೇವಾಲಯದ ಸೇವೆಗಾಗಿ ಪ್ರಸ್ತುತ ವಿಧಾನ ಮತ್ತು ಬುಕ್ಕಿಂಗ್ ನಿಯಮಗಳನ್ನು ಆಯಾ ದೇವಾಲಯದಲ್ಲಿಯೇ ದೃಢೀಕರಿಸಿ.' },
    'ashlesha-bali': { overview: 'ಆಶ್ಲೇಷ ಬಲಿಯು ಕೆಲವು ದಕ್ಷಿಣ ಭಾರತೀಯ ಸಂಪ್ರದಾಯಗಳಲ್ಲಿ, ವಿಶೇಷವಾಗಿ ಸುಬ್ರಹ್ಮಣ್ಯ ಆರಾಧನೆಯೊಂದಿಗೆ, ಆಚರಿಸುವ ನಾಗ-ಸಂಬಂಧಿತ ಪೂಜೆಯಾಗಿದೆ.', tradition: 'ಮಂತ್ರ, ಅರ್ಪಣೆ ಮತ್ತು ಅರ್ಹತೆ ದೇವಾಲಯ ಹಾಗೂ ಕುಟುಂಬದ ಪದ್ಧತಿಯಂತೆ ಬದಲಾಗುತ್ತದೆ; ಇದನ್ನು ಎಲ್ಲರಿಗೂ ಒಂದೇ ರೀತಿಯ ವಿಧಿ ಎಂದು ಪರಿಗಣಿಸಬಾರದು.', preparation: 'ಉದ್ದೇಶಿತ ಸ್ಥಳ ಮತ್ತು ದಿನಾಂಕದೊಂದಿಗೆ ಪುರೋಹಿತರನ್ನು ಸಂಪರ್ಕಿಸಿ. ದೇವಾಲಯದ ಬುಕ್ಕಿಂಗ್ ಮತ್ತು ನಿಯಮಗಳನ್ನು ಆಯಾ ದೇವಾಲಯದಲ್ಲಿಯೇ ಪರಿಶೀಲಿಸಿ.' },
    'ekadasha-rudra': { overview: 'ಏಕಾದಶ ರುದ್ರವು ಶ್ರೀ ರುದ್ರದ ಪುನರಾವರ್ತಿತ ಪಠಣ ಮತ್ತು ಅಭಿಷೇಕದೊಂದಿಗೆ ನಡೆಯುವ ವಿಸ್ತೃತ ಶಿವಾರಾಧನೆಯಾಗಿದೆ.', tradition: 'ಇದು ಶಿವನಿಗೆ ಸಮರ್ಪಿತ ಭಕ್ತಿಪೂರ್ವಕ ಆಚರಣೆ. ಪುರೋಹಿತರ ಸಂಖ್ಯೆ, ಪಠಣ ಮತ್ತು ಅರ್ಪಣೆಗಳನ್ನು ಸಮಯ, ಸ್ಥಳ ಮತ್ತು ಕುಟುಂಬದ ಪದ್ಧತಿಯಂತೆ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ.', preparation: 'ದಿನಾಂಕ, ಸ್ಥಳ ಮತ್ತು ಭಕ್ತರ ಸಂಖ್ಯೆಯೊಂದಿಗೆ ವಿಚಾರಿಸಿ. ಸೂಕ್ತ ಪ್ರಮಾಣ ಮತ್ತು ಸಿದ್ಧತಾ ಪಟ್ಟಿಯನ್ನು ಪುರೋಹಿತರು ಸೂಚಿಸುತ್ತಾರೆ.' },
    'shata-rudra': { overview: 'ಶತ ರುದ್ರವು ಪುನರಾವರ್ತಿತ ವೈದಿಕ ಪಠಣ ಮತ್ತು ಶಿವಾಭಿಷೇಕದೊಂದಿಗೆ ಆಯೋಜಿಸುವ ಹೆಚ್ಚು ವಿಸ್ತೃತ ರುದ್ರಾರಾಧನೆಯಾಗಿದೆ.', tradition: 'ವ್ಯವಸ್ಥೆಗಳು ಬಹಳ ಬದಲಾಗಬಹುದಾದ ಕಾರಣ, ಕುಟುಂಬದ ಉದ್ದೇಶ, ಸ್ಥಳ ಮತ್ತು ಸಮಯವನ್ನು ಚರ್ಚಿಸಿದ ನಂತರವೇ ನಿಖರ ವಿಧಾನವನ್ನು ಪುರೋಹಿತರು ಅಂತಿಮಗೊಳಿಸುತ್ತಾರೆ.', preparation: 'ಮುಂಚಿತ ಯೋಜನೆ ಶಿಫಾರಸು ಮಾಡಲಾಗುತ್ತದೆ. ಪುರೋಹಿತರ ಲಭ್ಯತೆ, ಸಾಮಗ್ರಿ ಮತ್ತು ಸಮಾರಂಭದ ಯೋಜನೆಗಾಗಿ ಸಂಪರ್ಕಿಸಿ.' },
  },
  te: {
    rudrabhisheka: { overview: 'రుద్రాభిషేకం అనేది రుద్రునికి వైదిక ప్రార్థనలతో అభిషేకం సమర్పించే సాంప్రదాయ శివారాధన.', tradition: 'పారాయణం, సమర్పణలు, అభిషేక విధానాన్ని పురోహితుని పద్ధతి, ప్రదేశం, కుటుంబ సంప్రదాయం ప్రకారం ఏర్పాటు చేస్తారు.', preparation: 'మీ ఇష్టమైన తేదీ, ప్రదేశం, భక్తుల సంఖ్యను తెలియజేయండి. సరైన విధానం, సిద్ధతను పురోహితుడు నిర్ధారిస్తారు.' },
    'pitru-dosha': { overview: 'ఇది కుటుంబ పితృస్మరణ కోసం సంకల్పం, తర్పణం మరియు సమర్పణలతో పురోహితుని మార్గదర్శకత్వంలో నిర్వహించే కర్మ.', tradition: 'సాధారణంగా వార్షిక స్మరణ దినం, అమావాస్య లేదా తీర్థయాత్ర సమయంలో చేస్తారు. కుటుంబ సంప్రదాయం ప్రకారం విధానం మారవచ్చు.', preparation: 'గోత్రం, తెలిసిన తిథి మరియు పితృదేవతల పేర్లను పంచుకోండి. సరైన విధానం, సామగ్రి మరియు సమయాన్ని పురోహితుడు నిర్ధారిస్తారు.' },
    'narayana-bali': { overview: 'నారాయణ బలి అనేది పితృస్మరణ సందర్భంలో శ్రీనారాయణునికి ప్రార్థనలు, సమర్పణలు చేసే సాంప్రదాయ కర్మ.', tradition: 'సంప్రదాయం, అర్హత మరియు క్రమం కుటుంబ, ప్రాంతీయ పద్ధతులను బట్టి మారుతాయి. పురోహితుని వ్యక్తిగత సంప్రదింపు తరువాతే ప్రణాళిక చేస్తారు.', preparation: 'ప్రయాణం లేదా తేదీ ఖరారు చేయకముందు సంప్రదించండి. కుటుంబ వివరాలు, తిథి, అవసరమైన సామగ్రి గురించి పురోహితుడు సూచిస్తారు.' },
    tripindi: { overview: 'త్రిపిండి శ్రాద్ధం అనేది అధికారిక శ్రాద్ధంలో భాగంగా మూడు పిండాలను సమర్పించే పితృకర్మ.', tradition: 'ఇది కుటుంబ గోత్రం, స్థానిక వైదిక ఆచారం ప్రకారం నిర్వహిస్తారు; అవసరమైతే ఇతర పితృకర్మలతో కలిపి చేయవచ్చు.', preparation: 'మీకు తెలిసిన గోత్రం, పితృదేవతల వివరాలు పంచుకోండి. తగిన రోజు, విధానం, సమర్పణలను వ్యక్తిగతంగా నిర్ధారిస్తారు.' },
    navagraha: { overview: 'నవగ్రహ శాంతి అనేది తొమ్మిది గ్రహాలకు చేసే పూజ; సామరస్యం, స్పష్టత మరియు శుభ మార్గదర్శకత్వం కోసం ప్రార్థిస్తారు.', tradition: 'కుటుంబ సంప్రదాయం, ఉద్దేశ్యానికి అనుగుణంగా సంకల్పం, మంత్రాలు, సమర్పణలను పురోహితుడు ఎంచుకుంటారు.', preparation: 'మీ ఇష్టమైన తేదీ, పూజ ఉద్దేశ్యాన్ని తెలపండి. జాతక ఆధారిత సలహా కావాలంటే పురోహితునితో నేరుగా చర్చించండి.' },
    mrityunjaya: { overview: 'మృత్యుంజయ శాంతి అనేది క్షేమం, ధైర్యం, దీర్ఘాయుష్షు కోసం పరంపరగా ప్రార్థించే శివుని మృత్యుంజయ స్వరూప ఆరాధన.', tradition: 'మహామృత్యుంజయ మంత్రం రుద్రునికి అంకితమైన గౌరవనీయ వైదిక ప్రార్థన. జపం, అభిషేకం లేదా హోమం రూపాన్ని పురోహితుడు నిర్ణయిస్తారు.', preparation: 'భక్తుని పేరు, తెలిసినట్లయితే నక్షత్రం, తేదీ పంచుకోండి. సరైన విధానం, సామగ్రిని పురోహితుడు సూచిస్తారు.' },
    'sarpa-samskara': { overview: 'సర్ప సంస్కారం అనేది కొన్ని దక్షిణ భారత దేవాలయ సంప్రదాయాలలో నిర్వహించే ప్రత్యేక నాగ సంబంధిత ప్రాయశ్చిత్త కర్మ.', tradition: 'దీని విధానం, అర్హత, స్థలం సంప్రదాయానికే ప్రత్యేకం. కుక్కే సుబ్రహ్మణ్యంలో దేవాలయ అధికారిక మార్గదర్శకాలు ప్రత్యేక అర్హత, హాజరు నియమాలను సూచిస్తాయి.', preparation: 'బుకింగ్ ముందు పురోహితునితో సంప్రదించండి. దేవాలయ సేవ కోసం తాజా విధానం, బుకింగ్ నియమాలను సంబంధిత దేవాలయంలోనే నిర్ధారించండి.' },
    'ashlesha-bali': { overview: 'ఆశ్లేష బలి అనేది కొన్ని దక్షిణ భారత సంప్రదాయాల్లో, ముఖ్యంగా సుబ్రహ్మణ్య ఆరాధనతో, చేసే నాగ సంబంధిత పూజ.', tradition: 'మంత్రాలు, సమర్పణలు, అర్హత దేవాలయం, కుటుంబ పద్ధతి బట్టి మారుతాయి; దీనిని అందరికీ ఒకే రకమైన కర్మగా చూడకూడదు.', preparation: 'ఉద్దేశించిన ప్రదేశం, తేదీతో పురోహితుని సంప్రదించండి. దేవాలయ బుకింగ్, నియమాలను సంబంధిత దేవాలయంలోనే నిర్ధారించండి.' },
    'ekadasha-rudra': { overview: 'ఏకాదశ రుద్ర అనేది శ్రీరుద్రం పునరావృత పారాయణం, అభిషేకంతో నిర్వహించే విస్తృత శివారాధన.', tradition: 'ఇది శివునికి అంకితమైన భక్తి ఆచారం. పురోహితుల సంఖ్య, పారాయణాలు, సమర్పణలను సమయం, స్థలం, కుటుంబ ఆచారం బట్టి నిర్ణయిస్తారు.', preparation: 'తేదీ, స్థలం, భక్తుల సంఖ్యతో విచారించండి. సరైన స్థాయి, సిద్ధత జాబితాను పురోహితుడు సూచిస్తారు.' },
    'shata-rudra': { overview: 'శత రుద్ర అనేది పునరావృత వైదిక పారాయణం, శివాభిషేకంతో నిర్వహించే మరింత విస్తృత రుద్రారాధన.', tradition: 'ఏర్పాట్లు గణనీయంగా మారవచ్చు కాబట్టి, కుటుంబ ఉద్దేశ్యం, స్థలం, సమయాన్ని చర్చించిన తరువాతే పురోహితుడు ఖచ్చితమైన విధానాన్ని ఖరారు చేస్తారు.', preparation: 'ముందస్తు ప్రణాళిక సిఫార్సు. పురోహితుని లభ్యత, సామగ్రి, కార్యక్రమ ప్రణాళిక కోసం సంప్రదించండి.' },
  },
};

export const poojaPurposes: Record<PoojaLanguage, Record<string, string[]>> = {
  en: {
    rudrabhisheka: ['Worship of Lord Shiva', 'Family prayers and peace', 'Auspicious occasions', 'Seeking the blessings of Lord Rudra'],
    'pitru-dosha': ['Traditional ancestral prayers', 'Honouring departed ancestors', 'Family-prescribed Pitru Karya', 'Addressing missed ancestral observances'],
    'narayana-bali': ['A prescribed ancestral observance', 'Traditional concerns following an untimely death', 'Incomplete or disturbed final rites', 'Prayers for the departed'],
    tripindi: ['Honouring departed ancestors', 'Long-standing gaps in annual Shraddha', 'Traditional Pitru Karya', 'Pinda and Tarpana offerings'],
    navagraha: ['Traditional Graha Shanti', 'Beginning an important life stage', 'Family and personal wellbeing prayers', 'Blessings before an important event'],
    mrityunjaya: ['Prayers for health and longevity', 'Spiritual strength and protection', 'Recovery-related prayers', 'Blessings of Lord Shiva'],
    'sarpa-samskara': ['Naga Devata worship', 'Sarpa-related religious observances', 'A family-prescribed naga ritual', 'Traditional Sarpa Dosha parihara'],
    'ashlesha-bali': ['Naga Devata worship', 'Ashlesha Nakshatra observance', 'A family-prescribed naga ritual', 'Traditional Sarpa Dosha parihara'],
    'ekadasha-rudra': ['Worship of Lord Shiva', 'Family wellbeing and peace', 'Spiritual purification', 'Prayers for strength and protection'],
    'shata-rudra': ['Elaborate worship of Lord Shiva', 'Family prayers and spiritual wellbeing', 'Special religious occasions', 'Deepening devotional connection with Rudra'],
  },
  kn: {
    rudrabhisheka: ['ಶ್ರೀ ಶಿವನ ಆರಾಧನೆಗಾಗಿ', 'ಕುಟುಂಬದ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಶಾಂತಿಗಾಗಿ', 'ಶುಭ ಸಂದರ್ಭಗಳಿಗಾಗಿ', 'ಶ್ರೀ ರುದ್ರನ ಆಶೀರ್ವಾದಕ್ಕಾಗಿ'],
    'pitru-dosha': ['ಸಾಂಪ್ರದಾಯಿಕ ಪಿತೃ ಪ್ರಾರ್ಥನೆಗಳು', 'ಮೃತ ಪಿತೃಗಳನ್ನು ಗೌರವಿಸಲು', 'ಕುಟುಂಬ ಸಂಪ್ರದಾಯದ ಪಿತೃಕಾರ್ಯ', 'ಬಾಕಿಯಿರುವ ಪಿತೃ ಆಚರಣೆಗಳಿಗಾಗಿ'],
    'narayana-bali': ['ನಿಗದಿತ ಪಿತೃ ಸಂಬಂಧಿತ ಆಚರಣೆ', 'ಅಕಾಲಿಕ ಮರಣದ ಹಿನ್ನೆಲೆಯ ಸಾಂಪ್ರದಾಯಿಕ ಸಂದರ್ಭಗಳು', 'ಅಪೂರ್ಣ ಅಂತ್ಯಕ್ರಿಯೆಗಳ ಸಂದರ್ಭಗಳು', 'ಮೃತರ ಸ್ಮರಣೆಯ ಪ್ರಾರ್ಥನೆಗಳು'],
    tripindi: ['ಮೃತ ಪಿತೃಗಳನ್ನು ಗೌರವಿಸಲು', 'ಬಾಕಿಯಿರುವ ವಾರ್ಷಿಕ ಶ್ರಾದ್ಧಕ್ಕಾಗಿ', 'ಸಾಂಪ್ರದಾಯಿಕ ಪಿತೃಕಾರ್ಯಕ್ಕಾಗಿ', 'ಪಿಂಡ ಮತ್ತು ತರ್ಪಣ ಅರ್ಪಣೆಗಾಗಿ'],
    navagraha: ['ಸಾಂಪ್ರದಾಯಿಕ ಗ್ರಹ ಶಾಂತಿಗಾಗಿ', 'ಪ್ರಮುಖ ಜೀವನದ ಹಂತದ ಆರಂಭಕ್ಕಾಗಿ', 'ಕುಟುಂಬ ಮತ್ತು ವೈಯಕ್ತಿಕ ಕ್ಷೇಮಕ್ಕಾಗಿ', 'ಪ್ರಮುಖ ಸಂದರ್ಭದ ಮೊದಲು ಆಶೀರ್ವಾದಕ್ಕಾಗಿ'],
    mrityunjaya: ['ಆರೋಗ್ಯ ಮತ್ತು ದೀರ್ಘಾಯುಷ್ಯದ ಪ್ರಾರ್ಥನೆಗಾಗಿ', 'ಆಧ್ಯಾತ್ಮಿಕ ಶಕ್ತಿ ಮತ್ತು ರಕ್ಷಣೆಗಾಗಿ', 'ಚೇತರಿಕೆಗೆ ಸಂಬಂಧಿಸಿದ ಪ್ರಾರ್ಥನೆಗಾಗಿ', 'ಶ್ರೀ ಶಿವನ ಆಶೀರ್ವಾದಕ್ಕಾಗಿ'],
    'sarpa-samskara': ['ನಾಗ ದೇವತಾ ಆರಾಧನೆಗಾಗಿ', 'ಸರ್ಪ ಸಂಬಂಧಿತ ಧಾರ್ಮಿಕ ಆಚರಣೆಗಾಗಿ', 'ಕುಟುಂಬ ನಿರ್ದಿಷ್ಟ ನಾಗ ವಿಧಿಗಾಗಿ', 'ಸಾಂಪ್ರದಾಯಿಕ ಸರ್ಪ ದೋಷ ಪರಿಹಾರಕ್ಕಾಗಿ'],
    'ashlesha-bali': ['ನಾಗ ದೇವತಾ ಆರಾಧನೆಗಾಗಿ', 'ಆಶ್ಲೇಷಾ ನಕ್ಷತ್ರ ಆಚರಣೆಗಾಗಿ', 'ಕುಟುಂಬ ನಿರ್ದಿಷ್ಟ ನಾಗ ವಿಧಿಗಾಗಿ', 'ಸಾಂಪ್ರದಾಯಿಕ ಸರ್ಪ ದೋಷ ಪರಿಹಾರಕ್ಕಾಗಿ'],
    'ekadasha-rudra': ['ಶ್ರೀ ಶಿವನ ಆರಾಧನೆಗಾಗಿ', 'ಕುಟುಂಬದ ಕ್ಷೇಮ ಮತ್ತು ಶಾಂತಿಗಾಗಿ', 'ಆಧ್ಯಾತ್ಮಿಕ ಪರಿಶುದ್ಧಿಗಾಗಿ', 'ಶಕ್ತಿ ಮತ್ತು ರಕ್ಷಣೆಯ ಪ್ರಾರ್ಥನೆಗಾಗಿ'],
    'shata-rudra': ['ವಿಸ್ತೃತ ಶಿವಾರಾಧನೆಗಾಗಿ', 'ಕುಟುಂಬದ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಕ್ಷೇಮಕ್ಕಾಗಿ', 'ವಿಶೇಷ ಧಾರ್ಮಿಕ ಸಂದರ್ಭಗಳಿಗಾಗಿ', 'ರುದ್ರನ ಭಕ್ತಿಯನ್ನು ಗಾಢಗೊಳಿಸಲು'],
  },
  te: {
    rudrabhisheka: ['శివుని ఆరాధన కోసం', 'కుటుంబ ప్రార్థనలు, శాంతి కోసం', 'శుభ సందర్భాల కోసం', 'శ్రీ రుద్రుని ఆశీర్వాదం కోసం'],
    'pitru-dosha': ['సాంప్రదాయ పితృ ప్రార్థనలు', 'మరణించిన పితృదేవతలను గౌరవించడానికి', 'కుటుంబ సంప్రదాయం ప్రకారం పితృకార్యాలు', 'జరగని పితృ ఆచారాల కోసం'],
    'narayana-bali': ['నిర్దేశిత పితృ సంబంధిత కర్మ', 'అకాల మరణానికి సంబంధించిన సాంప్రదాయ సందర్భాలు', 'అసంపూర్ణ అంత్యక్రియల సందర్భాలు', 'మరణించిన వారి కోసం ప్రార్థనలు'],
    tripindi: ['పితృదేవతలను గౌరవించడానికి', 'చాలా కాలంగా జరగని వార్షిక శ్రాద్ధం కోసం', 'సాంప్రదాయ పితృకార్యాల కోసం', 'పిండం, తర్పణ సమర్పణల కోసం'],
    navagraha: ['సాంప్రదాయ గ్రహ శాంతి కోసం', 'ముఖ్యమైన జీవన దశ ప్రారంభానికి', 'కుటుంబ, వ్యక్తిగత క్షేమ ప్రార్థనల కోసం', 'ముఖ్యమైన కార్యక్రమానికి ముందు ఆశీర్వాదం కోసం'],
    mrityunjaya: ['ఆరోగ్యం, దీర్ఘాయుష్షు కోసం ప్రార్థనలకు', 'ఆధ్యాత్మిక శక్తి, రక్షణ కోసం', 'కోలుకునే సందర్భాల్లో ప్రార్థనలకు', 'శివుని ఆశీర్వాదం కోసం'],
    'sarpa-samskara': ['నాగదేవతల ఆరాధన కోసం', 'సర్ప సంబంధిత ధార్మిక ఆచారాల కోసం', 'కుటుంబం నిర్దేశించిన నాగ కర్మ కోసం', 'సాంప్రదాయ సర్ప దోష పరిహారం కోసం'],
    'ashlesha-bali': ['నాగదేవతల ఆరాధన కోసం', 'ఆశ్లేష నక్షత్ర ఆచారం కోసం', 'కుటుంబం నిర్దేశించిన నాగ కర్మ కోసం', 'సాంప్రదాయ సర్ప దోష పరిహారం కోసం'],
    'ekadasha-rudra': ['శివుని ఆరాధన కోసం', 'కుటుంబ క్షేమం, శాంతి కోసం', 'ఆధ్యాత్మిక శుద్ధి కోసం', 'శక్తి, రక్షణ ప్రార్థనల కోసం'],
    'shata-rudra': ['విస్తృత శివారాధన కోసం', 'కుటుంబ ప్రార్థనలు, ఆధ్యాత్మిక క్షేమం కోసం', 'ప్రత్యేక ధార్మిక సందర్భాల కోసం', 'రుద్రునిపై భక్తిని మరింత గాఢం చేసుకోవడానికి'],
  },
};

export const poojaGuidance: Record<PoojaLanguage, { heading: string; body: string }> = {
  en: { heading: 'Which Pooja is right for you?', body: 'Choosing a Pooja in Gokarna depends on the purpose of the visit and the family’s religious tradition. Pitru Dosha Nivarana, Narayana Bali and Tripindi Shraddha are not interchangeable rituals; Sarpa Samskara and Ashlesha Bali also have distinct traditional procedures. Before booking, discuss your family circumstances, previous observances and relevant dates with the Purohita so that the appropriate vidhi, participants, duration and preparation can be confirmed.' },
  kn: { heading: 'ನಿಮಗೆ ಸೂಕ್ತವಾದ ಪೂಜೆ ಯಾವುದು?', body: 'ಗೋಕರ್ಣದಲ್ಲಿ ಯಾವ ಪೂಜೆ ಮಾಡಬೇಕು ಎಂಬುದು ಭೇಟಿಯ ಉದ್ದೇಶ ಮತ್ತು ಕುಟುಂಬದ ಧಾರ್ಮಿಕ ಸಂಪ್ರದಾಯವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ. ಪಿತೃ ದೋಷ ನಿವಾರಣೆ, ನಾರಾಯಣ ಬಲಿ ಮತ್ತು ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ ಒಂದೇ ಪೂಜೆಗಳಲ್ಲ; ಸರ್ಪ ಸಂಸ್ಕಾರ ಮತ್ತು ಆಶ್ಲೇಷಾ ಬಲಿಗೂ ವಿಭಿನ್ನ ವೈದಿಕ ವಿಧಾನಗಳಿವೆ. ಬುಕ್ಕಿಂಗ್ ಮಾಡುವ ಮೊದಲು ಕುಟುಂಬದ ಪರಿಸ್ಥಿತಿ, ಹಿಂದಿನ ಆಚರಣೆಗಳು ಮತ್ತು ಸಂಬಂಧಿತ ತಿಥಿಗಳ ಬಗ್ಗೆ ಪುರೋಹಿತರೊಂದಿಗೆ ಚರ್ಚಿಸಿ; ಆಗ ಸೂಕ್ತ ವಿಧಿ, ಭಾಗವಹಿಸುವವರು, ಅವಧಿ ಮತ್ತು ಸಿದ್ಧತೆಯನ್ನು ದೃಢೀಕರಿಸಬಹುದು.' },
  te: { heading: 'మీకు సరైన పూజ ఏది?', body: 'గోకర్ణంలో ఏ పూజ చేయాలనేది సందర్శన ఉద్దేశ్యం, కుటుంబ ధార్మిక సంప్రదాయంపై ఆధారపడి ఉంటుంది. పితృ దోష నివారణ, నారాయణ బలి, త్రిపిండి శ్రాద్ధం ఒకే కర్మలు కావు; సర్ప సంస్కారం, ఆశ్లేష బలికి కూడా వేర్వేరు వైదిక విధానాలు ఉన్నాయి. బుకింగ్‌కు ముందు కుటుంబ పరిస్థితులు, గత ఆచారాలు, సంబంధిత తేదీల గురించి పురోహితునితో చర్చించండి. అప్పుడు తగిన విధి, పాల్గొనేవారు, వ్యవధి, సిద్ధతను నిర్ధారించవచ్చు.' },
};

type Faq = { question: string; answer: string };
export const poojaFaqs: Record<PoojaLanguage, Record<string, Faq[]>> = {
  en: Object.fromEntries(poojas.map(([slug, name]) => [slug, [
    { question: `How can I enquire about ${name} in Gokarna?`, answer: `Use the WhatsApp or call option on this page. Please share your preferred date, location and family details relevant to the observance.` },
    { question: 'How are dates and requirements confirmed?', answer: 'The Purohita confirms availability, the suitable observance, required participants and preparations after understanding your family tradition and circumstances.' },
    { question: 'Where is the ritual conducted?', answer: 'The location is confirmed during the enquiry based on the service, date and family requirements.' },
    { question: 'Is the cost shown online?', answer: 'Please contact the Purohita for the current contribution and any requirements. It depends on the confirmed observance and arrangements.' },
  ]])) as Record<string, Faq[]>,
  kn: Object.fromEntries(poojas.map(([slug, name]) => [slug, [
    { question: `${poojaNames.kn[slug]} ಪೂಜೆಯ ಬಗ್ಗೆ ಗೋಕರ್ಣದಲ್ಲಿ ಹೇಗೆ ವಿಚಾರಿಸಬಹುದು?`, answer: 'ಈ ಪುಟದಲ್ಲಿರುವ ವಾಟ್ಸಾಪ್ ಅಥವಾ ಕರೆ ಆಯ್ಕೆಯನ್ನು ಬಳಸಿ. ನಿಮ್ಮ ಆದ್ಯತೆಯ ದಿನಾಂಕ, ಸ್ಥಳ ಮತ್ತು ಸಂಬಂಧಿತ ಕುಟುಂಬದ ವಿವರಗಳನ್ನು ತಿಳಿಸಿ.' },
    { question: 'ದಿನಾಂಕ ಮತ್ತು ಅಗತ್ಯಗಳನ್ನು ಹೇಗೆ ದೃಢೀಕರಿಸಲಾಗುತ್ತದೆ?', answer: 'ಕುಟುಂಬದ ಸಂಪ್ರದಾಯ ಮತ್ತು ಪರಿಸ್ಥಿತಿಯನ್ನು ತಿಳಿದ ನಂತರ ಪುರೋಹಿತರು ಲಭ್ಯತೆ, ಸೂಕ್ತ ವಿಧಿ, ಭಾಗವಹಿಸುವವರು ಮತ್ತು ಸಿದ್ಧತೆಯನ್ನು ದೃಢೀಕರಿಸುತ್ತಾರೆ.' },
    { question: 'ಪೂಜೆಯನ್ನು ಎಲ್ಲಿ ನಡೆಸಲಾಗುತ್ತದೆ?', answer: 'ಸೇವೆ, ದಿನಾಂಕ ಮತ್ತು ಕುಟುಂಬದ ಅಗತ್ಯತೆಗಳ ಆಧಾರದ ಮೇಲೆ ವಿಚಾರಣೆಯ ಸಮಯದಲ್ಲಿ ಸ್ಥಳವನ್ನು ದೃಢೀಕರಿಸಲಾಗುತ್ತದೆ.' },
    { question: 'ವೆಚ್ಚವನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ತೋರಿಸಲಾಗಿದೆಯೇ?', answer: 'ಪ್ರಸ್ತುತ ಕಾಣಿಕೆ ಮತ್ತು ಅಗತ್ಯಗಳಿಗಾಗಿ ಪುರೋಹಿತರನ್ನು ಸಂಪರ್ಕಿಸಿ. ದೃಢೀಕರಿಸಿದ ವಿಧಿ ಮತ್ತು ವ್ಯವಸ್ಥೆಗಳ ಪ್ರಕಾರ ಅದು ಬದಲಾಗಬಹುದು.' },
  ]])) as Record<string, Faq[]>,
  te: Object.fromEntries(poojas.map(([slug]) => [slug, [
    { question: `${poojaNames.te[slug]} గురించి గోకర్ణంలో ఎలా విచారించాలి?`, answer: 'ఈ పేజీలోని వాట్సాప్ లేదా కాల్ ఎంపికను ఉపయోగించండి. మీకు ఇష్టమైన తేదీ, ప్రదేశం, కుటుంబ వివరాలను పంచుకోండి.' },
    { question: 'తేదీలు, అవసరాలు ఎలా నిర్ధారిస్తారు?', answer: 'కుటుంబ సంప్రదాయం, పరిస్థితులను తెలుసుకున్న తరువాత పురోహితుడు లభ్యత, సరైన విధి, పాల్గొనేవారు, సిద్ధతను నిర్ధారిస్తారు.' },
    { question: 'పూజ ఎక్కడ నిర్వహిస్తారు?', answer: 'సేవ, తేదీ, కుటుంబ అవసరాల ప్రకారం విచారణ సమయంలో ప్రదేశాన్ని నిర్ధారిస్తారు.' },
    { question: 'ఖర్చు ఆన్‌లైన్‌లో చూపించబడుతుందా?', answer: 'ప్రస్తుత వివరాలు, అవసరాల కోసం పురోహితుడిని సంప్రదించండి. నిర్ధారించిన విధి, ఏర్పాట్ల ప్రకారం మారవచ్చు.' },
  ]])) as Record<string, Faq[]>,
};

export const poojaCopy = {
  kn: { label:'ಗೋಕರ್ಣದಲ್ಲಿ ಪೂಜಾ ಸೇವೆಗಳು', title:'ಪೂಜೆಗಳ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ', intro:'ಗೋಕರ್ಣದಲ್ಲಿ ನಡೆಯುವ ಸಾಂಪ್ರದಾಯಿಕ ಪೂಜೆಗಳ ಬಗ್ಗೆ ತಿಳಿದುಕೊಳ್ಳಿ. ನಿಮ್ಮ ಕುಟುಂಬದ ಸಂಪ್ರದಾಯಕ್ಕೆ ಸೂಕ್ತವಾದ ವಿಧಾನವನ್ನು ಪುರೋಹಿತರೊಂದಿಗೆ ದೃಢೀಕರಿಸಿ.', read:'ಇನ್ನಷ್ಟು ಓದಿ', back:'← ಹಿಂದಕ್ಕೆ', all:'ಎಲ್ಲಾ ಪೂಜೆಗಳು', enquiry:'ಪುರೋಹಿತರೊಂದಿಗೆ ವಿಚಾರಿಸಿ', overview:'ಪೂಜೆಯ ಕುರಿತು', tradition:'ಸಂಪ್ರದಾಯ ಮತ್ತು ವಿಧಾನ', preparation:'ತಯಾರಿಯ ಕುರಿತು', purpose:'ಭಕ್ತರು ಸಾಮಾನ್ಯವಾಗಿ ಈ ಪೂಜೆಯನ್ನು ಏಕೆ ಮಾಡುತ್ತಾರೆ', whatsapp:'ಈಗ ಸಂಪರ್ಕಿಸಿ' },
  en: { label:'Pooja services in Gokarna', title:'Know more about Poojas', intro:'Explore traditional poojas in Gokarna and confirm the right observance for your family tradition with the Purohita.', read:'Read more', back:'← Back', all:'All Poojas', enquiry:'Enquire with the Purohita', overview:'About this Pooja', tradition:'Tradition and procedure', preparation:'Before you plan', purpose:'Devotees generally seek this Pooja for', whatsapp:'Contact Now' },
  te: { label:'గోకర్ణలో పూజా సేవలు', title:'పూజల గురించి మరింత తెలుసుకోండి', intro:'గోకర్ణలోని సాంప్రదాయ పూజల గురించి తెలుసుకోండి. మీ కుటుంబ సంప్రదాయానికి తగిన విధానాన్ని పురోహితునితో నిర్ధారించండి.', read:'మరింత చదవండి', back:'← వెనుకకు', all:'అన్ని పూజలు', enquiry:'పౌరోహిత్యుడితో విచారించండి', overview:'ఈ పూజ గురించి', tradition:'సంప్రదాయం మరియు విధానం', preparation:'ప్రణాళికకు ముందు', purpose:'భక్తులు సాధారణంగా ఈ పూజను ఎందుకు కోరుకుంటారు', whatsapp:'ఇప్పుడే సంప్రదించండి' },
} as const;
