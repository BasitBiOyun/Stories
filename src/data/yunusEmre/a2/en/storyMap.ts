import type { StoryMapCopy } from '../../../../features/story-maps/types';

// Manually authored A2 map cards. Teacher notes are shown only in the Teacher role.
export const yunusA2StoryMapCopyEn: StoryMapCopy = {
  places: {
    anatolia: {
      name: 'Anatolia',
      kind: 'Region',
      text: 'Yunus Emre was born in Anatolia in 1240. He died in 1320. Today, Anatolia is a part of Türkiye.',
      teacherNote: 'Many towns say they have the grave of Yunus Emre. Do not show one place as certain.',
      source: 'TDV İslâm Ansiklopedisi, “Yûnus Emre”',
    },
    konya: {
      name: 'Konya',
      kind: 'City',
      text: 'Konya was the capital city of the Seljuks. Mevlana lived here and died here in 1273. Yunus Emre lived at the same time.',
      teacherNote: 'Chapter 1 says Yunus was 33 or 34 years old when Mevlana died. Ask: How old was Yunus in 1273?',
      source: 'TDV İslâm Ansiklopedisi, “Mevlânâ Celâleddîn-i Rûmî”',
    },
    kosedag: {
      name: 'Kösedağ, 1243',
      kind: 'Battle',
      text: 'In 1243, the Seljuk army fought the Mongol army here. The Seljuks lost. After that, life in Anatolia became very hard. Yunus Emre was only three years old.',
      teacherNote: 'The exact battlefield is not known. Sources place it near Kösedağ, about 80 km northeast of Sivas. The B1 and B2 books tell this event in detail.',
      source: 'TDV İslâm Ansiklopedisi, “Kösedağ Savaşı”',
    },
    syria: {
      name: 'Syria',
      kind: 'Region',
      text: 'Yunus Emre traveled to Syria. Big cities like Aleppo and Damascus were there.',
      teacherNote: 'In the 13th century, Syria (al-Sham) was a larger region than the country today.',
      source: 'TDV İslâm Ansiklopedisi, “Suriye”',
    },
    azerbaijan: {
      name: 'Azerbaijan',
      kind: 'Region',
      text: 'Yunus Emre also traveled to Azerbaijan. At that time, Azerbaijan was the land around the city of Tabriz. The Mongol army came to Anatolia from here.',
      teacherNote: 'Medieval Azerbaijan is mostly in north-west Iran today. It is not the same as the modern Republic of Azerbaijan.',
      source: 'TDV İslâm Ansiklopedisi, “Azerbaycan”',
    },
  },
  towns: { sivas: 'Sivas', erzurum: 'Erzurum', aleppo: 'Aleppo', damascus: 'Damascus' },
  seas: { blackSea: 'Black Sea', mediterranean: 'Mediterranean Sea' },
  timeline: { 1240: 'Yunus is born', 1243: 'Kösedağ', 1273: 'Mevlana dies', 1320: 'Yunus dies' },
  legend: { 'seljuk-1243': 'Seljuk lands around 1243', 'mongol-1243': 'Mongol army, 1242–1243' },
};
