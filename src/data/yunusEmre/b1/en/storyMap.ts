import type { StoryMapCopy } from '../../../../features/story-maps/types';

// Manually authored B1 map text. Teacher notes and questions are shown only in the Teacher role.
export const yunusB1StoryMapCopyEn: StoryMapCopy = {
  places: {
    anatolia: {
      name: 'Anatolia',
      kind: 'Region',
      text: 'Yunus Emre was a famous Turkish poet and a Sûfî from Anatolia. He was born around 1240–1241 and died around 1320–1321. He lived in a very difficult time, but he travelled around Anatolia as a wise dervish and helped people with his poetry.',
      teacherNote: 'The book names no birthplace, lodge or grave, so the map shows only the region. Chapter 4: the Anatolian Seljuk Sultan Alaeddin I (1220–1237) built a navy in the Mediterranean and Black Seas; point to both sea names. The line from the east shows people migrating to Anatolia from Central Asia because of the Mongol invasion (Chapter 4); its path is approximate.',
      question: 'Why was Yunus Emre’s time a very difficult time in Anatolia?',
    },
    erzurum: {
      name: 'Erzurum, 1242',
      kind: 'City',
      text: 'In 1242, the Mongols from Azerbaijan captured Erzurum and killed its people. This disaster caused deep sorrow and fear among the people of the Anatolian Seljuks.',
      teacherNote: 'Chapter 5. The book does not describe the Mongols’ road; the army line from Azerbaijan to Erzurum is approximate.',
      question: 'How did people feel after the Mongols captured Erzurum?',
    },
    kosedag: {
      name: 'Kösedağ, 1243',
      kind: 'Battle',
      text: 'In 1243, the Anatolian Seljuk army and the Mongols clashed at Kösedağ, 80 km northeast of Sivas. The Mongols used a false retreat and then circled the army, so they won easily. After that, they destroyed and raided Sivas, Kayseri and Erzincan.',
      teacherNote: 'The book gives the place as 80 km northeast of Sivas; the exact battlefield is not known, so the pin is approximate. Chapter 3 says this defeat caused the Mongols’ invasion of Anatolia. Chapter 6 continues: Men were killed, women and children were taken captive, and the cities were deserted.',
      question: 'Which three cities did the Mongols raid after the battle? Find them on the map.',
    },
    azerbaijan: {
      name: 'Azerbaijan',
      kind: 'Region',
      text: 'In Yunus Emre’s time, there were Mongols in Azerbaijan. The Babai revolts made the Anatolian Seljuks weak, and this gave these Mongols the courage to attack them.',
      teacherNote: 'Medieval Azerbaijan was the land around Tabriz, mostly in north-west Iran today. It is not the same as the modern Republic of Azerbaijan. The pin is approximate.',
      question: 'What gave the Mongols in Azerbaijan the courage to attack?',
    },
    iran: {
      name: 'Iran',
      kind: 'Region',
      text: 'The Ilkhanate Empire was the Mongol state centred in Iran. After 1277, the Mongols ruled Anatolia through the commanders and governors that they sent. In 1308, the lands of Anatolia were directly attached to the Ilkhanate Empire. Under Mongol pressure, shaykhs from Turkestan, Khorasan and Iran came to Anatolia.',
      teacherNote: 'The book does not say where the commanders and governors came from; the light from Iran only shows Mongol rule reaching Anatolia. The pin marks Iran as a region, not a city. Turkestan and Khorasan are farther east, off this map.',
      question: 'What changed in Anatolia in 1308?',
    },
  },
  towns: { sivas: 'Sivas', kayseri: 'Kayseri', erzincan: 'Erzincan' },
  seas: { blackSea: 'Black Sea', mediterranean: 'Mediterranean Sea' },
  timeline: {
    1240: 'Yunus is born',
    1242: 'Erzurum',
    1243: 'Kösedağ',
    1277: 'Mongol governors',
    1308: 'Ilkhanate',
    1320: 'Yunus dies',
  },
  legend: {
    'seljuk-1243': 'Anatolian Seljuk lands',
    'seljuk-pressure': 'Anatolian Seljuk lands under Mongol pressure',
    'ilkhanate-1308': 'Anatolia joined to the Ilkhanate (Iran)',
    'route:migrations': 'Migrations from Central Asia',
    'route:mongols': 'Mongol army, 1242–1243',
  },
  age: {
    born: 'Yunus Emre is born around this time.',
    alive: (value, age) => `Yunus Emre is about ${value} ${age === 1 ? 'year' : 'years'} old.`,
    died: (value, age) => `Yunus Emre dies around this time. He is about ${value} ${age === 1 ? 'year' : 'years'} old.`,
  },
  challenge: {
    anatolia: 'Find Anatolia, the land where Yunus Emre lived and recited his verses.',
    kosedag: 'Find Kösedağ. It is 80 km northeast of Sivas.',
    erzurum: 'Find Erzurum. The Mongols captured it in 1242.',
    kayseri: 'Find Kayseri. The Mongols raided it after the battle of Kösedağ.',
    azerbaijan: 'Find Azerbaijan. The Mongols who attacked the Anatolian Seljuks were there.',
  },
};
