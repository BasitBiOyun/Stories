import type { StoryMapCopy } from '../../../../features/story-maps/types';

// Manually authored A2 map text. Teacher notes and questions are shown only in the Teacher role.
export const meccaA2StoryMapCopyEn: StoryMapCopy = {
  places: {
    mecca: {
      name: 'Mecca',
      kind: 'City',
      text: 'Bilal was born in Mecca. Mecca was a business city. People bought and sold things there.',
      teacherNote: 'Chapters 1–10 happen in Mecca: Umayya’s house, the desert of Mecca and Abu Bakr’s house. The book does not name these places, so the map shows only the city.',
      question: 'Why was life hard for Bilal in Mecca?',
    },
    arabia: {
      name: 'Arabia',
      kind: 'Region',
      text: 'Slave markets were very common in Arabia. Mecca was a center for buying and selling slaves.',
      teacherNote: 'The circle is only approximate. The A2 book does not describe Arabia; it only mentions its slave markets (chapter 3).',
      question: 'What was very common in Arabia at that time?',
    },
    abyssinia: {
      name: 'Abyssinia',
      kind: 'Region',
      text: 'Bilal’s mother was an Ethiopian woman. Many slaves in the homes of Meccan people came from Abyssinia. But Bilal was born in Mecca.',
      teacherNote: 'Chapter 1 says “Ethiopian” and chapter 3 says “Abyssinia”. Bilal himself was born in Mecca, so the map draws no journey for him from here. The circle is approximate.',
      question: 'Where was Bilal born: in Abyssinia or in Mecca?',
    },
    medina: {
      name: 'Medina',
      kind: 'City',
      text: 'After many years of hardship in Mecca, the Muslims moved to Medina. After the Hijrah, Bilal gave the first Adhan. When the Prophet (pbuh) died, Bilal could not stay in Medina.',
      teacherNote: 'The move to Medina is called the Hijrah (chapter 11). The book gives no year for it. The line from Mecca is only a guide.',
      question: 'Who gave the first Adhan after the Hijrah?',
    },
    damascus: {
      name: 'Damascus',
      kind: 'City',
      text: 'The Prophet (pbuh) died in 632. Bilal was very sad. He left Medina and went to Damascus. He died there.',
      teacherNote: 'Chapter 12 gives the year 632. Chapter 13 gives no year for Bilal’s journey or his death, and no route. The line on the map is only a guide.',
      question: 'Why did Bilal leave Medina?',
    },
  },
  towns: {},
  seas: { redSea: 'Red Sea', mediterranean: 'Mediterranean Sea' },
  timeline: {
    1: 'Bilal is born',
    2: 'Slaves in Mecca',
    3: 'A new message',
    4: 'Bilal is free',
    5: 'The Hijrah',
    6: 'Bilal goes to Damascus',
  },
  legend: {
    'route:hijra': 'The move to Medina (Hijrah)',
    'route:toDamascus': 'Bilal goes to Damascus',
  },
  challenge: {
    mecca: 'Find Mecca. Bilal was born in this city.',
    medina: 'Find Medina. The Muslims moved here from Mecca.',
    damascus: 'Find Damascus. Bilal went here at the end of his life.',
    abyssinia: 'Find Abyssinia. Many slaves in Mecca came from here.',
    arabia: 'Find Arabia. Slave markets were very common here.',
  },
};
