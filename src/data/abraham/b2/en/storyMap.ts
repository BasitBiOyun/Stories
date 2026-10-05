import type { StoryMapCopy } from '../../../../features/story-maps/types';

// Manually authored B2 map text. Teacher notes and questions are shown only in the Teacher role.
export const abrahamB2StoryMapCopyEn: StoryMapCopy = {
  places: {
    babylon: {
      name: 'Babylon or Ur',
      kind: 'Birthplace',
      text: 'There are different ideas about Abraham (pbuh)’s birthplace. Most generally, the book says he was born in the city of Ur or Babylon, the country of King Nimrod. He is believed to have lived in the 20th century BC, and some sources suggest 2200–2000 BC. At that time, the Sumerian/Mesopotamian country was prosperous in agriculture and industry.',
      teacherNote: 'The book gives both names, so the pin marks Babylon and the small dot marks Ur; neither is presented as certain. Chapter 5 adds that he was born in a cave where his mother was hidden from Nimrod. The dates are hedged (“believed”, “some sources”).',
      question: 'Why does the book give two names for Abraham (pbuh)’s birthplace?',
    },
    harran: {
      name: 'Harran',
      kind: 'Place (some sources)',
      text: 'Some sources say that Abraham (pbuh) was born in the land of Sumer, Mesopotamia, and migrated from there to Harran. The book presents this as one of several ideas about his early life. That is why this line shows a possibility, not a certain journey.',
      teacherNote: 'The book does not say when or why this migration happened, so the line is drawn from the area of Ur (Sumer). The pin marks ancient Harran, in south-eastern Türkiye today. Ask learners to find the hedging language in chapter 4.',
      question: 'Which words in chapter 4 show that the Harran journey is not certain?',
    },
    fire: {
      name: 'The fire',
      kind: 'Event',
      text: 'All the citizens were ordered to gather wood, and for several days they collected fuel. They dug a deep pit, set it on fire and threw Abraham (pbuh) in with a catapult. Allah commanded the fire to be coolness and safety for him. Afterwards, his fame spread throughout the entire kingdom of Babylonia.',
      teacherNote: 'The book does not say where the fire was, so the pin beside Babylon only marks the event. The debate with King Nimrod follows in chapters 23–24, after which only Sarah and Lot shared his belief.',
      question: 'Why did the people decide to burn Abraham (pbuh) instead of admitting they were wrong?',
    },
    egypt: {
      name: 'Egypt',
      kind: 'Region',
      text: 'When Abraham (pbuh) realized that no one else was going to believe in his call, he decided to emigrate. He left his people and traveled with his wife Sarah and Lot to Egypt. While they were in Egypt, Sarah was given an Egyptian woman, Hagar, as a servant.',
      teacherNote: 'The book does not say which way Abraham (pbuh) traveled from his people to Egypt, so no line is drawn to Egypt. The circle is approximate.',
      question: 'Who traveled with Abraham (pbuh) to Egypt?',
    },
    palestine: {
      name: 'Palestine',
      kind: 'Region',
      text: 'After Egypt, Abraham (pbuh) traveled to Palestine and settled there, calling people to Allah and judging fairly between them. Years later, he returned to Palestine from Mecca. Before his death, he left Palestine to his son Isaac, and he died there.',
      teacherNote: 'Ishmael was born when Abraham (pbuh) was an old man; the book does not say where, though chapter 28 says Hagar and Ishmael had to leave Palestine. In chapter 33 the return to Palestine and the reunion with Ishmael are told briefly; chapter 34 then says he traveled to Mecca to build the Ka’ba.',
      question: 'Which son received Palestine, and which son received Mecca?',
    },
    mecca: {
      name: 'Mecca',
      kind: 'Valley and city',
      text: 'Abraham (pbuh) walked through cultivated land, desert and mountains to an uncultivated valley near the hills of Safa and Marwa. There, Zamzam water flowed for Hagar and Ishmael, and it still flows in the city of Mecca today. Years later, father and son built the Ka’ba on the foundations of the old structure. Before his death, Abraham (pbuh) left Mecca to Ishmael.',
      teacherNote: 'While building, Abraham (pbuh) stood over the stone of Al-Maqam (chapter 34). Hagar’s running between Safa and Marwa is remembered in Hajj. Chapter 35 adds that Ishmael taught his father’s faith in the Hijaz region.',
      question: 'Why does the book call the Ka’ba the oldest place of worship?',
    },
    yemen: {
      name: 'Yemen',
      kind: 'Region',
      text: 'The tribe of Jurham was moving from southern Arabia, Yemen. When they saw a bird flying towards the valley of Mecca, they knew there was water, so they stopped there. They settled in Mecca, and Ishmael grew up among them and learned Arabic from them.',
      teacherNote: 'The book does not give Jurham’s route; the line only joins Yemen to Mecca. The circle is approximate. Ishmael later married the daughter of one of Jurham’s leaders (chapter 31).',
      question: 'How did the tribe of Jurham know that there was water in the valley?',
    },
  },
  towns: { ur: 'Ur' },
  seas: { mediterranean: 'Mediterranean Sea', redSea: 'Red Sea' },
  timeline: {
    1: 'Ur or Babylon',
    2: 'Harran?',
    3: 'The fire',
    4: 'Egypt',
    5: 'Palestine',
    6: 'To Mecca',
    7: 'Zamzam, Jurham',
    8: 'Back to Palestine',
    9: 'Ka’ba, legacy',
  },
  legend: {
    'route:harran': 'To Harran (some sources)',
    'route:egyptPalestine': 'From Egypt to Palestine',
    'route:toMecca': 'From Palestine to the valley of Mecca',
    'route:jurham': 'Jurham, from Yemen to Mecca',
    'route:returnPalestine': 'Abraham (pbuh) returns to Palestine',
  },
  challenge: {
    babylon: 'Find the area of Abraham (pbuh)’s birthplace. The book names two cities in the country of King Nimrod.',
    egypt: 'Find Egypt. Abraham (pbuh) traveled there with Sarah and Lot, and Hagar came from there.',
    palestine: 'Find Palestine. Abraham (pbuh) settled there after Egypt and died there.',
    mecca: 'Find Mecca. Zamzam water still flows there today.',
    yemen: 'Find Yemen. The tribe of Jurham came from this part of southern Arabia.',
  },
};
