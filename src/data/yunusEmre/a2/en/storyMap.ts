import type { StoryMapCopy } from '../../../../features/story-maps/types';

// Manually authored A2 map text. Teacher notes and questions are shown only in the Teacher role.
export const yunusA2StoryMapCopyEn: StoryMapCopy = {
  places: {
    anatolia: {
      name: 'Anatolia',
      kind: 'Region',
      text: 'Yunus Emre was born in Anatolia in 1240. He died in 1320. Today, Anatolia is a part of Türkiye.',
      teacherNote: 'Many towns say they have the grave of Yunus Emre. Do not show one place as certain.',
      question: 'Which country is Anatolia a part of today?',
    },
    konya: {
      name: 'Konya',
      kind: 'City',
      text: 'Konya was the capital city of the Anatolian Seljuks. Mevlana lived here and died here in 1273. Yunus Emre lived at the same time.',
      teacherNote: 'Chapter 1 says Yunus was 33 or 34 years old when Mevlana died.',
      question: 'How old was Yunus Emre in 1273? Move the slider to check.',
    },
    kosedag: {
      name: 'Kösedağ, 1243',
      kind: 'Battle',
      text: 'In 1243, the Seljuk army fought the Mongol army here. The Seljuks lost. After that, life in Anatolia became very hard. Yunus Emre was only three years old.',
      teacherNote: 'The exact battlefield is not known. Sources place it near Kösedağ, about 80 km northeast of Sivas. The B1 and B2 books tell this event in detail.',
      question: 'What happened in Anatolia after 1243?',
    },
    syria: {
      name: 'Syria',
      kind: 'Region',
      text: 'Yunus Emre traveled to Syria. Big cities like Aleppo and Damascus were there.',
      teacherNote: 'In the 13th century, Syria (al-Sham) was a larger region than the country today.',
      question: 'Which two big cities can you see in Syria?',
    },
    azerbaijan: {
      name: 'Azerbaijan',
      kind: 'Region',
      text: 'Yunus Emre also traveled to Azerbaijan. At that time, Azerbaijan was the land around the city of Tabriz. The Mongol army came to Anatolia from here.',
      teacherNote: 'Medieval Azerbaijan is mostly in north-west Iran today. It is not the same as the modern Republic of Azerbaijan.',
      question: 'Which army came to Anatolia from this land?',
    },
  },
  towns: { sivas: 'Sivas', erzurum: 'Erzurum', aleppo: 'Aleppo', damascus: 'Damascus' },
  seas: { blackSea: 'Black Sea', mediterranean: 'Mediterranean Sea' },
  timeline: { 1240: 'Yunus is born', 1243: 'Kösedağ', 1273: 'Mevlana dies', 1320: 'Yunus dies' },
  legend: {
    'seljuk-1243': 'Seljuk lands',
    'seljuk-pressure': 'Seljuk lands under Mongol pressure',
    'mongol-1243': 'Mongol army, 1242–1243',
  },
  age: {
    born: 'Yunus Emre is born.',
    alive: (value, age) => `Yunus Emre is about ${value} ${age === 1 ? 'year' : 'years'} old.`,
    died: (value, age) => `Yunus Emre dies. He is about ${value} ${age === 1 ? 'year' : 'years'} old.`,
  },
  challenge: {
    anatolia: 'Find Anatolia, the home of Yunus Emre.',
    konya: 'Find Konya. It was the capital city of the Anatolian Seljuks.',
    syria: 'Find Syria. Aleppo and Damascus were there.',
    azerbaijan: 'Find Azerbaijan. It is east of Anatolia.',
    kosedag: 'Find Kösedağ. It is about 80 km northeast of Sivas.',
  },
};
