export const poojas = [
  ['pitru-dosha','Pitru Dosha Nivarane','https://temple.yatradham.org/public/Product/puja-rituals/puja-rituals_u0iJVshq_202404221602350.webp'],
  ['narayana-bali','Narayana Bali','https://dorituals.com/wp-content/uploads/2024/07/narayan-nagbali-trimbakeshwar.jpg'],
  ['tripindi','Tripindi Shraddha Kriya Karma','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlZ-aipl_EJ2sPZCgRGFnAcTXrzXqVh0M5FeTzhwdMA&s=10'],
  ['navagraha','Navagraha Shanti','https://temple.yatradham.org/public/Product/puja-rituals/puja-rituals_pTtmxopr_202411152235270.jpg'],
  ['mrityunjaya','Mrityunjaya Shanti','/POOJA1.jpeg'],
  ['sarpa-samskara','Sarpa Samskara','https://dorituals.com/wp-content/uploads/2024/07/narayan-nagbali-trimbakeshwar.jpg'],
  ['ashlesha-bali','Ashlesha Bali','/POOJA2.jpeg'],
  ['ekadasha-rudra','Ekadasha Rudra','https://t4.ftcdn.net/jpg/02/82/22/25/360_F_282222546_qiGzPx9W9BeuZiXJaDr7o3A3AdgisMnY.jpg'],
  ['shata-rudra','Shata Rudra','https://t4.ftcdn.net/jpg/02/82/22/25/360_F_282222546_qiGzPx9W9BeuZiXJaDr7o3A3AdgisMnY.jpg'],
] as const;

export type PoojaLanguage = 'kn' | 'en' | 'te';
export const poojaNames: Record<PoojaLanguage, Record<string, string>> = {
  kn: { 'pitru-dosha':'ಪಿತೃ ದೋಷ ನಿವಾರಣೆ','narayana-bali':'ನಾರಾಯಣ ಬಲಿ',tripindi:'ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ ಕ್ರಿಯಾ ಕರ್ಮ',navagraha:'ನವಗ್ರಹ ಶಾಂತಿ',mrityunjaya:'ಮೃತ್ಯುಂಜಯ ಶಾಂತಿ','sarpa-samskara':'ಸರ್ಪ ಸಂಸ್ಕಾರ','ashlesha-bali':'ಆಶ್ಲೇಷ ಬಲಿ','ekadasha-rudra':'ಏಕಾದಶ ರುದ್ರ','shata-rudra':'ಶತ ರುದ್ರ' },
  en: Object.fromEntries(poojas.map(([slug,name]) => [slug,name])),
  te: { 'pitru-dosha':'పితృ దోష నివారణ','narayana-bali':'నారాయణ బలి',tripindi:'త్రిపిండి శ్రాద్ధ క్రియా కర్మ',navagraha:'నవగ్రహ శాంతి',mrityunjaya:'మృత్యుంజయ శాంతి','sarpa-samskara':'సర్ప సంస్కార','ashlesha-bali':'ఆశ్లేష బలి','ekadasha-rudra':'ఏకాదశ రుద్ర','shata-rudra':'శత రుద్ర' },
};
export const poojaCopy = {
  kn: { label:'ಗೋಕರ್ಣದಲ್ಲಿ ಪೂಜಾ ಸೇವೆಗಳು', title:'ಪೂಜೆಗಳ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ', intro:'ಅವಲೋಕನವನ್ನು ಓದಲು ಪೂಜೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಪ್ರಾಯೋಗಿಕ ವಿವರ ಮತ್ತು ಸೂಕ್ತತೆಯನ್ನು ಪುರೋಹಿತರು ನೇರವಾಗಿ ದೃಢೀಕರಿಸುತ್ತಾರೆ.', read:'ಇನ್ನಷ್ಟು ಓದಿ', back:'← ಹಿಂದಕ್ಕೆ', all:'ಎಲ್ಲಾ ಪೂಜೆಗಳು', enquiry:'ಪುರೋಹಿತರೊಂದಿಗೆ ವಿಚಾರಿಸಿ', detail:'ಪ್ರತಿ ಪೂಜೆಯನ್ನು ಭಕ್ತರ ಅವಶ್ಯಕತೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಾನದಂತೆ ಆಯೋಜಿಸಲಾಗುತ್ತದೆ. ಸೂಕ್ತತೆ, ಸಿದ್ಧತೆ, ಸಾಮಗ್ರಿ, ಅವಧಿ ಮತ್ತು ಲಭ್ಯತೆಯನ್ನು ಪುರೋಹಿತರೊಂದಿಗೆ ದೃಢೀಕರಿಸಿ.', whatsapp:'ವಾಟ್ಸ್ಆ್ಯಪ್‌ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ' },
  en: { label:'Pooja services in Gokarna', title:'Know more about Poojas', intro:'Choose a Pooja to read its overview. Practical details and suitability are confirmed directly by the Purohita.', read:'Read more', back:'← Back', all:'All Poojas', enquiry:'Enquire with the Purohita', detail:'Each Pooja is arranged according to the devotee’s requirements and traditional procedure. Please contact the Purohita to confirm suitability, preparation, materials, duration and availability.', whatsapp:'Connect on WhatsApp' },
  te: { label:'గోకర్ణలో పూజా సేవలు', title:'పూజల గురించి మరింత తెలుసుకోండి', intro:'అవలోకనం చదవడానికి పూజను ఎంచుకోండి. ఆచరణాత్మక వివరాలు మరియు అనుకూలతను పౌరోహిత్యుడు నేరుగా నిర్ధారిస్తారు.', read:'మరింత చదవండి', back:'← వెనుకకు', all:'అన్ని పూజలు', enquiry:'పౌరోహిత్యుడితో విచారించండి', detail:'ప్రతి పూజ భక్తుల అవసరాలు, సాంప్రదాయ పద్ధతి ప్రకారం నిర్వహించబడుతుంది. అనుకూలత, సన్నాహాలు, సామగ్రి, వ్యవధి మరియు అందుబాటును పౌరోహిత్యుడితో నిర్ధారించండి.', whatsapp:'వాట్స్ఆప్‌లో సంప్రదించండి' },
} as const;
