import type { StoryMapCopy } from '../../../../features/story-maps/types';

// Manually authored A2 map text. Teacher notes and questions are shown only in the Teacher role.
// Babylon, Mesopotamia, Syria, Palestine and Mecca follow the historical place cards of chapters 1, 10, 11, 13 and 14.
export const abrahamA2StoryMapCopyEn: StoryMapCopy = {
  places: {
    babylon: {
      name: 'Babylon',
      kind: 'City and kingdom',
      text: 'Babylon was an old kingdom in Mesopotamia. Abraham (pbuh) was born here a very long time ago. Nimrod was the King of Babylon.',
      teacherNote: 'The book gives no year. It says only “a very long time ago”. It does not name Abraham’s (pbuh) town; the pin marks the old city of Babylon.',
      question: 'Who was the King of Babylon?',
    },
    mesopotamia: {
      name: 'Mesopotamia',
      kind: 'Region',
      text: 'Mesopotamia was an old land between two rivers. The kingdom of Babylon was in Mesopotamia.',
      teacherNote: 'The two rivers are the Tigris and the Euphrates; the A2 story does not name them. The circle is only approximate. There were no fixed borders.',
      question: 'Which kingdom was in Mesopotamia?',
    },
    fire: {
      name: 'The fire',
      kind: 'Event',
      text: 'The people of the kingdom collected firewood for days and made a huge fire. They threw Abraham (pbuh) into it. Allah told the fire to be cool, and Abraham (pbuh) came out safe.',
      teacherNote: 'The book does not say where the fire was. It says only that the people of the kingdom made it, so the pin beside Babylon just shows the event. After the miracle, King Nimrod met Abraham (pbuh) (chapter 10).',
      question: 'Why did Abraham (pbuh) stay calm near the fire?',
    },
    syria: {
      name: 'Syria / al-Sham',
      kind: 'Region',
      text: 'Syria, or al-Sham, was a land west of Mesopotamia. Abraham (pbuh) travelled there after Babylon. He travelled on camels.',
      teacherNote: 'Old al-Sham was larger than the country of Syria today. The circle is approximate. The Arabic edition says بلاد الشام.',
      question: 'How did Abraham (pbuh) travel from Babylon?',
    },
    palestine: {
      name: 'Palestine',
      kind: 'Region',
      text: 'Palestine was a land near the Mediterranean Sea. Abraham (pbuh) travelled there on his journey. It was a long, hot and tiring journey.',
      teacherNote: 'The book says that Abraham (pbuh) married Hagar and had his son Ishmael “during his journey”, but it does not say where.',
      question: 'Was the journey easy? Why not?',
    },
    mecca: {
      name: 'Mecca',
      kind: 'Valley and city',
      text: 'This was a quiet valley near two small hills, Safa and Marwah. Here, Zamzam water came out of the ground, and people built the city of Mecca. Abraham (pbuh) and Ishmael built the Ka’ba here.',
      teacherNote: 'The book does not say where the family started this journey; the line is drawn from the Palestine area. Abraham (pbuh) visited Mecca several times, but the book does not say where he came from. The Ka’ba was the first holy place on Earth, and people still visit it for Hajj.',
      question: 'What does “Zamzam” mean?',
    },
  },
  towns: {},
  seas: { mediterranean: 'Mediterranean Sea', redSea: 'Red Sea' },
  timeline: {
    1: 'Abraham is born',
    2: 'The fire',
    3: 'Leaving Babylon',
    4: 'Zamzam water',
    5: 'The Ka’ba',
  },
  legend: {
    'route:toSyriaPalestine': 'From Babylon to Syria and Palestine',
    'route:toValley': 'To the valley of Safa and Marwah',
  },
  challenge: {
    babylon: 'Find Babylon. Abraham (pbuh) was born in this kingdom.',
    mesopotamia: 'Find Mesopotamia, the old land between two rivers.',
    syria: 'Find Syria (al-Sham). Abraham (pbuh) went there from Babylon on camels.',
    palestine: 'Find Palestine. It is near the Mediterranean Sea.',
    mecca: 'Find Mecca. Zamzam water is there, in the desert.',
  },
};
