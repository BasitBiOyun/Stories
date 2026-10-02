import type { HistoricalEntity, HistoricalEntityCopy, HistoricalEntityKind, HistoricalMapFocus } from '../types';
import { mediterraneanContextMap, medArea, medPoint, medStrip } from '../mediterraneanMap';

// Places and historical names in Ibn Jubayr A2 (English only).
// Copy is A2 English: short sentences and story words. The Turkish name sits in
// `learnerNames.tr`, so the story text itself can stay free of Turkish glosses.

const POINT_NOTE = 'Location shown on a regional map';
const AREA_NOTE = 'Area shown approximately';

interface PlaceInput {
  id: string;
  kind: HistoricalEntityKind;
  aliases: string[];
  title: string;
  kindLabel: string;
  periodLabel: string;
  summary: string;
  tr?: string;
  focus?: HistoricalMapFocus;
  sources: string[];
}

const place = ({ id, kind, aliases, title, kindLabel, periodLabel, summary, tr, focus, sources }: PlaceInput): HistoricalEntity => {
  const hasMap = Boolean(focus);
  const isArea = focus?.mode === 'area';
  const copy: HistoricalEntityCopy = {
    title,
    kindLabel,
    periodLabel,
    summary,
    mapAlt: hasMap ? `Map showing where ${title} is.` : '',
    ...(hasMap ? { approximateLabel: isArea ? AREA_NOTE : POINT_NOTE } : {}),
  };
  return {
    id,
    kind,
    aliases: { en: aliases },
    copy: { en: copy },
    ...(focus ? { mapAsset: mediterraneanContextMap, focus, showFocus: true } : {}),
    approximate: isArea,
    ...(tr ? { learnerNames: { tr } } : {}),
    sources,
  };
};

const CITY_ZOOM = 1.8;
// Sources are reference works by article title, for the teacher's check.

const entities: HistoricalEntity[] = [
  // Cities
  place({
    id: 'ibnjubayr-valencia', kind: 'city', aliases: ['Valencia'],
    title: 'Valencia', kindLabel: 'City', periodLabel: 'Al-Andalus · Spain',
    summary: 'Valencia is a city on the east coast of Spain, near the Mediterranean Sea. Ibn Jubayr was born here in 1145.',
    tr: 'Valensiya', focus: medPoint(39.47, -0.38, CITY_ZOOM),
    sources: ['Britannica: Valencia Spain', 'TDV İslâm Ansiklopedisi: Belensiye'],
  }),
  place({
    id: 'ibnjubayr-granada', kind: 'city', aliases: ['Granada'],
    title: 'Granada', kindLabel: 'City', periodLabel: 'Al-Andalus · Spain',
    summary: 'Granada is a city in the south of Spain, near high mountains. Ibn Jubayr worked here. His long journey started and ended here.',
    tr: 'Gırnata', focus: medPoint(37.18, -3.6, CITY_ZOOM),
    sources: ['Britannica: Granada Spain', 'TDV İslâm Ansiklopedisi: Gırnata'],
  }),
  place({
    id: 'ibnjubayr-seville', kind: 'city', aliases: ['Sevilla', 'Seville'],
    title: 'Sevilla', kindLabel: 'City', periodLabel: 'Al-Andalus · Spain',
    summary: 'Sevilla (Seville) is a city in the south-west of Spain, on a big river. In Al-Andalus, it was a large and rich city.',
    tr: 'Sevilla · tarihî adı İşbîliye', focus: medPoint(37.39, -5.98, CITY_ZOOM),
    sources: ['Britannica: Sevilla Spain', 'TDV İslâm Ansiklopedisi: İşbîliye'],
  }),
  place({
    id: 'ibnjubayr-cordoba', kind: 'city', aliases: ['Córdoba', 'Cordoba'],
    title: 'Córdoba', kindLabel: 'City', periodLabel: 'Al-Andalus · Spain',
    summary: 'Córdoba is a city in the south of Spain. For a long time, it was the capital of Al-Andalus and a great city of learning.',
    tr: 'Kurtuba', focus: medPoint(37.88, -4.78, CITY_ZOOM),
    sources: ['Britannica: Cordoba Spain', 'TDV İslâm Ansiklopedisi: Kurtuba'],
  }),
  place({
    id: 'ibnjubayr-ceuta', kind: 'city', aliases: ['Ceuta'],
    title: 'Ceuta', kindLabel: 'Port city', periodLabel: 'North Africa',
    summary: 'Ceuta is a port city in North Africa, across the sea from Spain. Here, Ibn Jubayr got on a ship to the east.',
    tr: 'Sebte', focus: medPoint(35.89, -5.32, CITY_ZOOM),
    sources: ['Britannica: Ceuta', 'TDV İslâm Ansiklopedisi: Sebte'],
  }),
  place({
    id: 'ibnjubayr-genoa', kind: 'city', aliases: ['Genoese', 'Genoa'],
    title: 'Genoa', kindLabel: 'Port city', periodLabel: 'Italy',
    summary: 'Genoa is a port city in the north-west of Italy. In the Middle Ages, its ships carried people and goods across the Mediterranean. "Genoese" means "from Genoa".',
    tr: 'Cenova · Genoese: Cenevizli', focus: medPoint(44.41, 8.93, 1.4),
    sources: ['Britannica: Genoa'],
  }),
  place({
    id: 'ibnjubayr-alexandria', kind: 'city', aliases: ['Alexandria'],
    title: 'Alexandria', kindLabel: 'Port city', periodLabel: 'Egypt',
    summary: 'Alexandria is a port city in Egypt, on the Mediterranean Sea. Ibn Jubayr arrived here by ship. At the end of his life, he died here.',
    tr: 'İskenderiye', focus: medPoint(31.2, 29.92, CITY_ZOOM),
    sources: ['Britannica: Alexandria Egypt', 'TDV İslâm Ansiklopedisi: İskenderiye'],
  }),
  place({
    id: 'ibnjubayr-cairo', kind: 'city', aliases: ['Cairo'],
    title: 'Cairo', kindLabel: 'City', periodLabel: 'Egypt',
    summary: 'Cairo is a big city in Egypt, near the Nile River. In Ibn Jubayr’s time, it was the capital of Saladin’s state.',
    tr: 'Kahire', focus: medPoint(30.04, 31.24, CITY_ZOOM),
    sources: ['Britannica: Cairo', 'TDV İslâm Ansiklopedisi: Kahire'],
  }),
  place({
    id: 'ibnjubayr-mecca', kind: 'city', aliases: ['Mecca'],
    title: 'Mecca', kindLabel: 'Holy city', periodLabel: 'Western Arabia',
    summary: 'Mecca is the holy city of Islam, in western Arabia. The Ka’bah is here. Muslims come to Mecca for Hajj.',
    tr: 'Mekke', focus: medPoint(21.42, 39.83, CITY_ZOOM),
    sources: ['Britannica: Mecca', 'TDV İslâm Ansiklopedisi: Mekke'],
  }),
  place({
    id: 'ibnjubayr-medina', kind: 'city', aliases: ['Medina'],
    title: 'Medina', kindLabel: 'Holy city', periodLabel: 'Western Arabia',
    summary: 'Medina is a holy city in western Arabia, north of Mecca. The Prophet Muhammad (pbuh) lived here, and his mosque is here.',
    tr: 'Medine', focus: medPoint(24.47, 39.61, CITY_ZOOM),
    sources: ['Britannica: Medina Saudi Arabia', 'TDV İslâm Ansiklopedisi: Medine'],
  }),
  place({
    id: 'ibnjubayr-baghdad', kind: 'city', aliases: ['Baghdad'],
    title: 'Baghdad', kindLabel: 'City', periodLabel: 'Iraq',
    summary: 'Baghdad is a big city on the Tigris River, in today’s Iraq. For a long time, it was the capital of the Abbasids.',
    tr: 'Bağdat', focus: medPoint(33.31, 44.36, CITY_ZOOM),
    sources: ['Britannica: Baghdad', 'TDV İslâm Ansiklopedisi: Bağdat'],
  }),
  place({
    id: 'ibnjubayr-mosul', kind: 'city', aliases: ['Mosul'],
    title: 'Mosul', kindLabel: 'City', periodLabel: 'Iraq',
    summary: 'Mosul is an old city on the Tigris River, in the north of today’s Iraq.',
    tr: 'Musul', focus: medPoint(36.34, 43.13, CITY_ZOOM),
    sources: ['Britannica: Mosul', 'TDV İslâm Ansiklopedisi: Musul'],
  }),
  place({
    id: 'ibnjubayr-aleppo', kind: 'city', aliases: ['Aleppo'],
    title: 'Aleppo', kindLabel: 'City', periodLabel: 'Syria',
    summary: 'Aleppo is one of the oldest cities in the world. It is in the north of Syria and has a famous castle on a hill.',
    tr: 'Halep', focus: medPoint(36.2, 37.16, CITY_ZOOM),
    sources: ['Britannica: Aleppo', 'TDV İslâm Ansiklopedisi: Halep'],
  }),
  place({
    id: 'ibnjubayr-damascus', kind: 'city', aliases: ['Damascus'],
    title: 'Damascus', kindLabel: 'City', periodLabel: 'Syria',
    summary: 'Damascus is a very old city in Syria. It was the capital of the Umayyads, and its Great Mosque is famous.',
    tr: 'Şam', focus: medPoint(33.51, 36.29, CITY_ZOOM),
    sources: ['Britannica: Damascus', 'TDV İslâm Ansiklopedisi: Şam'],
  }),
  place({
    id: 'ibnjubayr-jerusalem', kind: 'city', aliases: ['Jerusalem'],
    title: 'Jerusalem', kindLabel: 'Holy city', periodLabel: 'Palestine',
    summary: 'Jerusalem is a holy city for Muslims, Christians and Jews. Al-Aqsa Mosque is here.',
    tr: 'Kudüs', focus: medPoint(31.78, 35.23, CITY_ZOOM),
    sources: ['Britannica: Jerusalem', 'TDV İslâm Ansiklopedisi: Kudüs'],
  }),
  place({
    id: 'ibnjubayr-acre', kind: 'city', aliases: ['Acre'],
    title: 'Acre', kindLabel: 'Port city', periodLabel: 'Palestine',
    summary: 'Acre is an old port city on the coast of Palestine. In Ibn Jubayr’s time, the Crusaders ruled it.',
    tr: 'Akkâ', focus: medPoint(32.93, 35.07, CITY_ZOOM),
    sources: ['Britannica: Acre Israel', 'TDV İslâm Ansiklopedisi: Akkâ'],
  }),

  // Lands and regions
  place({
    id: 'ibnjubayr-al-andalus', kind: 'region', aliases: ['Al-Andalus'],
    title: 'Al-Andalus', kindLabel: 'Historical land', periodLabel: '711–1492',
    summary: 'Al-Andalus was the name of the Muslim lands in Spain and Portugal. Its borders changed many times.',
    tr: 'Endülüs', focus: medArea({ west: -8.9, east: -0.2, south: 36, north: 40.6 }, { zoom: 1.3 }),
    sources: ['Britannica: al Andalus', 'TDV İslâm Ansiklopedisi: Endülüs'],
  }),
  place({
    id: 'ibnjubayr-middle-east', kind: 'region', aliases: ['Middle East'],
    title: 'The Middle East', kindLabel: 'Region', periodLabel: 'Western Asia and Egypt',
    summary: 'The Middle East is a large area in western Asia and Egypt. Today, it has countries like Egypt, Syria, Iraq and Saudi Arabia.',
    tr: 'Ortadoğu', focus: medArea({ west: 25, east: 50, south: 14, north: 38 }),
    sources: ['Britannica: Middle East'],
  }),
  place({
    id: 'ibnjubayr-north-africa', kind: 'region', aliases: ['North Africa'],
    title: 'North Africa', kindLabel: 'Region', periodLabel: 'Africa',
    summary: 'North Africa is the north part of Africa, along the Mediterranean Sea.',
    tr: 'Kuzey Afrika', focus: medArea({ west: -9, east: 33, south: 26, north: 37 }),
    sources: ['Britannica: North Africa'],
  }),
  place({
    id: 'ibnjubayr-egypt', kind: 'country', aliases: ['Egypt'],
    title: 'Egypt', kindLabel: 'Country', periodLabel: 'North-east Africa',
    summary: 'Egypt is a country in the north-east of Africa. The Nile River runs through it from south to north.',
    tr: 'Mısır', focus: medArea({ west: 25, east: 35, south: 22, north: 31.6 }, { zoom: 1.3 }),
    sources: ['Britannica: Egypt'],
  }),
  place({
    id: 'ibnjubayr-syria', kind: 'region', aliases: ['Syria'],
    title: 'Syria', kindLabel: 'Historical land', periodLabel: 'East of the Mediterranean',
    summary: 'In the Middle Ages, Syria was a large land east of the Mediterranean Sea. Aleppo and Damascus were its great cities.',
    tr: 'Suriye · tarihte Şam diyarı', focus: medArea({ west: 35.4, east: 40.5, south: 32.6, north: 37 }, { zoom: 1.6 }),
    sources: ['Britannica: Syria', 'TDV İslâm Ansiklopedisi: Suriye'],
  }),
  place({
    id: 'ibnjubayr-palestine', kind: 'region', aliases: ['Palestine'],
    title: 'Palestine', kindLabel: 'Historical land', periodLabel: 'East of the Mediterranean',
    summary: 'Palestine is a land on the east coast of the Mediterranean Sea. Jerusalem is its most famous city.',
    tr: 'Filistin', focus: medArea({ west: 34.2, east: 35.7, south: 31, north: 33.2 }, { zoom: 2.2 }),
    sources: ['Britannica: Palestine', 'TDV İslâm Ansiklopedisi: Filistin'],
  }),
  place({
    id: 'ibnjubayr-kingdom-of-jerusalem', kind: 'kingdom', aliases: ['Kingdom of Jerusalem'],
    title: 'Kingdom of Jerusalem', kindLabel: 'Crusader state', periodLabel: '1099–1291',
    summary: 'The Kingdom of Jerusalem was a Christian state. The Crusaders started it in 1099. Acre was its main port.',
    tr: 'Kudüs Krallığı (Haçlı devleti)', focus: medArea({ west: 34.2, east: 36.2, south: 30, north: 34.3 }, { zoom: 2 }),
    sources: ['Britannica: Latin Kingdom of Jerusalem'],
  }),

  // Seas, rivers and islands
  place({
    id: 'ibnjubayr-mediterranean', kind: 'sea', aliases: ['Mediterranean'],
    title: 'The Mediterranean Sea', kindLabel: 'Sea', periodLabel: 'Between Europe, Africa and Asia',
    summary: 'The Mediterranean is a big sea between Europe, Africa and Asia. Ibn Jubayr crossed it two times, to the east and back.',
    tr: 'Akdeniz', focus: medArea({ west: -4, east: 35, south: 31, north: 44 }),
    sources: ['Britannica: Mediterranean Sea'],
  }),
  place({
    id: 'ibnjubayr-red-sea', kind: 'sea', aliases: ['Red Sea'],
    title: 'The Red Sea', kindLabel: 'Sea', periodLabel: 'Between Africa and Arabia',
    summary: 'The Red Sea is a long, narrow sea between Africa and Arabia. Ibn Jubayr crossed it by ship on his way to Mecca.',
    tr: 'Kızıldeniz', focus: medStrip([28.6, 33.0], [13.0, 43.2], 44),
    sources: ['Britannica: Red Sea'],
  }),
  place({
    id: 'ibnjubayr-nile', kind: 'river', aliases: ['Nile'],
    title: 'The Nile', kindLabel: 'River', periodLabel: 'Egypt',
    summary: 'The Nile is a very long river in Africa. It flows north through Egypt to the Mediterranean Sea. Every year, its floods brought water to the farms.',
    tr: 'Nil Nehri', focus: medStrip([31.4, 31.0], [16.5, 32.6], 40),
    sources: ['Britannica: Nile River'],
  }),
  place({
    id: 'ibnjubayr-euphrates', kind: 'river', aliases: ['Euphrates River', 'Euphrates'],
    title: 'The Euphrates', kindLabel: 'River', periodLabel: 'Türkiye · Syria · Iraq',
    summary: 'The Euphrates is a long river. It starts in the mountains of Türkiye and flows through Syria and Iraq.',
    tr: 'Fırat Nehri', focus: medStrip([39.4, 39.2], [31.0, 47.2], 36, 1.4),
    sources: ['Britannica: Euphrates River'],
  }),
  place({
    id: 'ibnjubayr-sardinia', kind: 'island', aliases: ['Sardinia'],
    title: 'Sardinia', kindLabel: 'Island', periodLabel: 'Mediterranean Sea',
    summary: 'Sardinia is a large island in the Mediterranean Sea, west of Italy.',
    tr: 'Sardinya', focus: medPoint(40.1, 9.0, 1.4),
    sources: ['Britannica: Sardinia island Italy'],
  }),
  place({
    id: 'ibnjubayr-sicily', kind: 'island', aliases: ['Sicily'],
    title: 'Sicily', kindLabel: 'Island', periodLabel: 'Mediterranean Sea',
    summary: 'Sicily is the largest island in the Mediterranean Sea, south of Italy. On the way home, Ibn Jubayr’s ship hit the ground near its coast.',
    tr: 'Sicilya', focus: medPoint(37.55, 14.1, 1.4),
    sources: ['Britannica: Sicily'],
  }),
  place({
    id: 'ibnjubayr-crete', kind: 'island', aliases: ['Crete'],
    title: 'Crete', kindLabel: 'Island', periodLabel: 'Mediterranean Sea',
    summary: 'Crete is a large island in the Mediterranean Sea, south of Greece.',
    tr: 'Girit', focus: medPoint(35.2, 24.9, 1.4),
    sources: ['Britannica: Crete'],
  }),

  // Buildings
  place({
    id: 'ibnjubayr-lighthouse-of-alexandria', kind: 'landmark', aliases: ['Lighthouse of Alexandria'],
    title: 'Lighthouse of Alexandria', kindLabel: 'Building', periodLabel: 'Egypt',
    summary: 'The Lighthouse of Alexandria was a very tall tower near the port. Its light helped ships find the port. Later, earthquakes destroyed it.',
    tr: 'İskenderiye Feneri', focus: medPoint(31.21, 29.89, 2.4),
    sources: ['Britannica: lighthouse of Alexandria'],
  }),
  place({
    id: 'ibnjubayr-great-mosque-of-damascus', kind: 'landmark', aliases: ['Great Mosque of Damascus'],
    title: 'Great Mosque of Damascus', kindLabel: 'Mosque', periodLabel: 'Syria · early 700s',
    summary: 'The Great Mosque of Damascus is also called the Umayyad Mosque. The Umayyads built it in the early 700s. It is one of the oldest great mosques in the world.',
    tr: 'Emevî Camii (Şam)', focus: medPoint(33.51, 36.31, 2.4),
    sources: ['Britannica: Great Mosque of Damascus', 'TDV İslâm Ansiklopedisi: Emevî Camii'],
  }),
  place({
    id: 'ibnjubayr-kerak', kind: 'landmark', aliases: ['Kerak'],
    title: 'Kerak', kindLabel: 'Castle', periodLabel: 'East of the Dead Sea',
    summary: 'Kerak is a big castle on a hill, east of the Dead Sea, in today’s Jordan. The Crusaders built it.',
    tr: 'Kerek Kalesi', focus: medPoint(31.18, 35.7, 2.4),
    sources: ['Britannica: Al Karak', 'TDV İslâm Ansiklopedisi: Kerek'],
  }),

  // People and ruling families (no map)
  place({
    id: 'ibnjubayr-crusaders', kind: 'people', aliases: ['Crusaders'],
    title: 'The Crusaders', kindLabel: 'Soldiers', periodLabel: '1096–1291',
    summary: 'The Crusaders were Christian soldiers from Europe. They came to the Middle East and took Jerusalem and other lands in 1099.',
    tr: 'Haçlılar',
    sources: ['Britannica: Crusades', 'TDV İslâm Ansiklopedisi: Haçlı Seferleri'],
  }),
  place({
    id: 'ibnjubayr-ayyubids', kind: 'dynasty', aliases: ['Ayyubid state'],
    title: 'The Ayyubids', kindLabel: 'Ruling family', periodLabel: 'From 1171',
    summary: 'The Ayyubids were a Muslim family of rulers. Saladin started their state in Egypt. They also ruled Syria, Yemen and other lands.',
    tr: 'Eyyûbîler',
    sources: ['Britannica: Ayyubid dynasty', 'TDV İslâm Ansiklopedisi: Eyyûbîler'],
  }),
  place({
    id: 'ibnjubayr-saladin', kind: 'person', aliases: ['Salah ad-Din al-Ayyubi', 'Saladin'],
    title: 'Saladin (Salah ad-Din al-Ayyubi)', kindLabel: 'Sultan', periodLabel: '1138–1193',
    summary: 'Saladin was a great Muslim ruler and army leader. He ruled Egypt and Syria. In 1187, he took Jerusalem back from the Crusaders.',
    tr: 'Selâhaddîn-i Eyyûbî',
    sources: ['Britannica: Saladin', 'TDV İslâm Ansiklopedisi: Selâhaddîn-i Eyyûbî'],
  }),
  place({
    id: 'ibnjubayr-abbasids', kind: 'dynasty', aliases: ['Abbasids'],
    title: 'The Abbasids', kindLabel: 'Ruling family', periodLabel: '750–1258',
    summary: 'The Abbasids were a family of caliphs. They ruled from Baghdad until the Mongols attacked the city in 1258.',
    tr: 'Abbâsîler',
    sources: ['Britannica: Abbasid caliphate', 'TDV İslâm Ansiklopedisi: Abbâsîler'],
  }),
  place({
    id: 'ibnjubayr-mongols', kind: 'people', aliases: ['Mongols'],
    title: 'The Mongols', kindLabel: 'People', periodLabel: '13th century',
    summary: 'The Mongols were people from Central Asia. In 1258, their army attacked Baghdad and destroyed a large part of it.',
    tr: 'Moğollar',
    sources: ['Britannica: Mongol', 'Britannica: Siege of Baghdad 1258'],
  }),
  place({
    id: 'ibnjubayr-umayyads', kind: 'dynasty', aliases: ['Umayyads'],
    title: 'The Umayyads', kindLabel: 'Ruling family', periodLabel: '661–750',
    summary: 'The Umayyads were the first family of caliphs. They ruled from Damascus from 661 to 750. Later, another Umayyad family ruled Al-Andalus from Córdoba.',
    tr: 'Emevîler',
    sources: ['Britannica: Umayyad dynasty Islamic history', 'TDV İslâm Ansiklopedisi: Emevîler'],
  }),
];

export const ibnJubayrA2Entities: Record<string, HistoricalEntity> = Object.fromEntries(
  entities.map(entity => [entity.id, entity]),
);

/** Which cards each chapter offers. The first mention in the chapter is tappable. */
export const IBN_JUBAYR_A2_CHAPTER_ENTITIES: Record<number, string[]> = {
  1: ['ibnjubayr-al-andalus', 'ibnjubayr-middle-east', 'ibnjubayr-valencia', 'ibnjubayr-granada', 'ibnjubayr-seville', 'ibnjubayr-cordoba'],
  2: ['ibnjubayr-baghdad', 'ibnjubayr-mosul', 'ibnjubayr-aleppo', 'ibnjubayr-jerusalem', 'ibnjubayr-damascus'],
  3: ['ibnjubayr-mediterranean', 'ibnjubayr-crusaders', 'ibnjubayr-palestine'],
  4: ['ibnjubayr-ceuta', 'ibnjubayr-north-africa', 'ibnjubayr-genoa', 'ibnjubayr-sardinia', 'ibnjubayr-sicily', 'ibnjubayr-crete', 'ibnjubayr-egypt', 'ibnjubayr-alexandria', 'ibnjubayr-lighthouse-of-alexandria', 'ibnjubayr-cairo'],
  5: ['ibnjubayr-ayyubids', 'ibnjubayr-saladin', 'ibnjubayr-nile'],
  6: ['ibnjubayr-red-sea'],
  7: ['ibnjubayr-mecca'],
  8: ['ibnjubayr-medina', 'ibnjubayr-baghdad', 'ibnjubayr-euphrates', 'ibnjubayr-abbasids', 'ibnjubayr-mongols', 'ibnjubayr-syria'],
  9: ['ibnjubayr-aleppo', 'ibnjubayr-damascus', 'ibnjubayr-umayyads', 'ibnjubayr-great-mosque-of-damascus'],
  10: ['ibnjubayr-palestine', 'ibnjubayr-crusaders', 'ibnjubayr-kingdom-of-jerusalem', 'ibnjubayr-acre', 'ibnjubayr-kerak', 'ibnjubayr-jerusalem'],
  11: ['ibnjubayr-sicily'],
};
