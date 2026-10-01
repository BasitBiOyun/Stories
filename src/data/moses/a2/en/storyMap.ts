import type { StoryMapCopy } from '../../../../features/story-maps/types';

// Manually authored A2 map text. Teacher notes and questions are shown only in the Teacher role.
export const mosesA2StoryMapCopyEn: StoryMapCopy = {
  places: {
    egypt: {
      name: 'Egypt',
      kind: 'Region',
      text: 'Moses (pbuh) lived in Egypt more than 3000 years ago. Pharaoh was the king of Egypt. The king’s palace and the city were here. The Children of Israel lived here too.',
      teacherNote: 'The A2 text does not name the city or say where the palace was. Show Egypt as a region, not as one exact place.',
      question: 'Who was the king of Egypt? Was he kind or cruel?',
    },
    nile: {
      name: 'The River Nile',
      kind: 'River',
      text: 'Moses’s mother put her baby in a basket. She put the basket on the River Nile. The water carried it to the waterside near the king’s palace.',
      teacherNote: 'The text does not say where on the Nile this happened. The soft area shows the river in Egypt, not an exact place. The Arabic edition says “a small box” (tābūt) instead of a basket.',
      question: 'Who followed the basket? Why?',
    },
    midian: {
      name: 'Midian',
      kind: 'Region',
      text: 'Moses left Egypt and travelled for many days to Midian. The king of Egypt was not the ruler there. At a well, Moses helped two sisters with their sheep. He lived in Midian for ten years.',
      teacherNote: 'The A2 text says only that Midian was near Egypt. The B1 and B2 books say it was on the eastern side of the Gulf of Aqaba. The place of the well is not known.',
      question: 'Why did Moses go to Midian? Who did he meet there?',
    },
    mountain: {
      name: 'The Mountain',
      kind: 'Mountain',
      text: 'After ten years, Moses and his family travelled back to Egypt. It was winter. In a valley between mountains, Moses saw a fire. He climbed the mountain and heard the voice of Allah.',
      teacherNote: 'The A2 text does not name this mountain. The B2 book calls it Mount Sinai, also known as Mount Tur. The soft area in the south of the Sinai Peninsula is approximate; the exact place is not known.',
      question: 'What did Allah tell Moses to do with his walking stick?',
    },
    sea: {
      name: 'The Sea',
      kind: 'Sea',
      text: 'Moses (pbuh) and his people left Egypt at night. When the sun rose, they arrived at the sea. Moses hit the sea with his stick and the sea parted. The king and his soldiers died in the water.',
      teacherNote: 'The A2 text does not name the sea. The B1 and B2 books call it the Red Sea. The exact place of the crossing is not known; the soft area at the Gulf of Suez is approximate.',
      question: 'How did Allah help Moses and his people at the sea?',
    },
  },
  towns: {},
  seas: { mediterranean: 'Mediterranean Sea' },
  timeline: {
    1: 'Moses in Egypt',
    2: 'A baby on the Nile',
    3: 'Escape to Midian',
    4: 'Ten years in Midian',
    5: 'The voice on the mountain',
    6: 'Back to Egypt',
    7: 'The night journey',
    8: 'The sea opens',
  },
  legend: {
    'route:flight': 'Moses escapes to Midian',
    'route:return': 'The family travels toward Egypt',
    'route:toEgypt': 'Moses goes to Egypt',
    'route:exodus': 'The night journey to the sea',
  },
  challenge: {
    egypt: 'Find Egypt. Pharaoh was the king here.',
    nile: 'Find the River Nile. Moses’s mother put the basket on it.',
    midian: 'Find Midian. Moses travelled there from Egypt for many days.',
    mountain: 'Find the mountain. Moses saw a fire there on his way back to Egypt.',
    sea: 'Find the sea. Moses and his people left Egypt at night and arrived there at sunrise.',
  },
};
