import type { StoryMapCopy } from '../../../../features/story-maps/types';

// Manually authored B2 map text. Teacher notes and questions are shown only in the Teacher role.
export const yunusB2StoryMapCopyEn: StoryMapCopy = {
  places: {
    anatolia: {
      name: 'Anatolia',
      kind: 'Region',
      text: 'Yunus Emre was a great Anatolian poet and Sûfî. According to the widely accepted view, he was born in 1240–41 and died in 1320–21. In 1240, the Turkmen rebelled under the leadership of Baba İshak. Throughout Yunus’s life, the Mongol storm swept across Anatolia, and he travelled around it as a wise dervish.',
      teacherNote: 'The book names no birthplace, lodge or grave, so the map shows only the region. Chapter 3: the Anatolian Seljuk Sultan Alaeddin I (1220–1237) established a navy in the Mediterranean and Black Seas; point to both sea names. The line from the east shows the Oguz and Turkmen tribes who migrated to Anatolia from Central Asia to escape the Mongol invasion (Chapter 4); its path is approximate.',
      question: 'How did Yunus Emre respond to people’s search for meaning in such hard days?',
    },
    konya: {
      name: 'Konya',
      kind: 'City',
      text: 'The Anatolian Seljuk state was also called the Seljuk Sultanate of Konya. As it grew weaker, small principalities quickly appeared in Anatolia. They were in constant conflict over the throne, wealth, and summer and winter pastures. At that time, the Ottoman state was still a small principality.',
      teacherNote: 'The B2 text names Konya only in the state’s name, “the Seljuk Sultanate of Konya” (Chapter 6). It does not call Konya the capital, so the card does not either.',
      question: 'What happened in Anatolia when the Anatolian Seljuk state grew weaker?',
    },
    erzurum: {
      name: 'Erzurum, 1242',
      kind: 'City',
      text: 'The Babai uprisings gave the Mongols in Azerbaijan the courage to attack. In late 1242, they captured Erzurum and killed its people with swords. This disaster caused deep sorrow and fear among the Anatolian Seljuks.',
      teacherNote: 'Chapter 5. The book does not describe the Mongols’ road; the army line from Azerbaijan to Erzurum is approximate.',
      question: 'Why did the Mongols in Azerbaijan feel ready to attack at this moment?',
    },
    kosedag: {
      name: 'Kösedağ, 1243',
      kind: 'Battle',
      text: 'In 1243, the Anatolian Seljuk army and the Mongols clashed at Kösedağ, 80 km northeast of Sivas. Using their classic false retreat and circling tactic, the Mongols wiped out the Anatolian Seljuk forces. After this easy victory, they destroyed and plundered Sivas, Kayseri and Erzincan, leaving not a single stone standing. Women and children were taken captive and forced to follow the Mongol army.',
      teacherNote: 'The book gives the place as 80 km northeast of Sivas; the exact battlefield is not known, so the pin is approximate. Chapter 3 says the defeat at Kösedağ made the Mongols’ invasion of Anatolia easier.',
      question: 'The book says the Mongol storm swept across Anatolia “like a roller”. What does this image tell us?',
    },
    azerbaijan: {
      name: 'Azerbaijan',
      kind: 'Region',
      text: 'In Yunus Emre’s time, there were Mongols in Azerbaijan. The Anatolian Seljuk forces stopped the Babai uprisings only with great difficulty, and this gave these Mongols the courage to attack. Their army then took Erzurum and fought at Kösedağ.',
      teacherNote: 'Medieval Azerbaijan was the land around Tabriz, mostly in north-west Iran today. It is not the same as the modern Republic of Azerbaijan. The pin is approximate.',
      question: 'How did the Babai uprisings open the way for the Mongol attack?',
    },
    iran: {
      name: 'Iran',
      kind: 'Region',
      text: 'The Ilkhanate Empire was the Mongol state centred in Iran. In time, the Anatolian Seljuks became dependent on the Mongols, and a large part of the state’s income was sent to them every year. Finally, in 1308, the lands of Anatolia were directly attached to the Ilkhanate Empire. Under Mongol pressure, shaykhs from Turkestan, Transoxiana, Khorasan, Khwarezm and Iran came to Anatolia.',
      teacherNote: 'The pin marks Iran as a region, not a city. Turkestan, Transoxiana, Khorasan and Khwarezm are farther east, off this map.',
      question: 'Why did the yearly tax make both the state and the people poorer?',
    },
  },
  towns: { sivas: 'Sivas', kayseri: 'Kayseri', erzincan: 'Erzincan' },
  seas: { blackSea: 'Black Sea', mediterranean: 'Mediterranean Sea' },
  timeline: {
    1240: 'Uprising · Yunus born',
    1242: 'Erzurum',
    1243: 'Kösedağ',
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
    konya: 'Find Konya. The Anatolian Seljuk state was also called the Seljuk Sultanate of Konya.',
    kosedag: 'Find Kösedağ, where the Anatolian Seljuk army and the Mongols clashed in 1243. It is 80 km northeast of Sivas.',
    erzurum: 'Find Erzurum. The Mongols captured it in late 1242.',
    erzincan: 'Find Erzincan. The Mongols plundered it after their victory at Kösedağ.',
    azerbaijan: 'Find Azerbaijan. The Mongols who attacked the Anatolian Seljuks were there.',
  },
};
