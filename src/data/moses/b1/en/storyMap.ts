import type { StoryMapCopy } from '../../../../features/story-maps/types';

// Manually authored B1 map text. Teacher notes and questions are shown only in the Teacher role.
export const mosesB1StoryMapCopyEn: StoryMapCopy = {
  places: {
    egypt: {
      name: 'Egypt',
      kind: 'Region',
      text: 'Moses (pbuh) was born in the land of Egypt. He lived there in the 13th century BC, over 3000 years ago. At that time, the Pharaoh ruled Egypt, and the Children of Israel were a large group there. Moses grew up safely in the palace of the Pharaoh.',
      teacherNote: 'The B1 text does not say where the palace or the city was, so Egypt is shown as a region, not as one exact place.',
      question: 'Why was the Pharaoh afraid of the Children of Israel?',
    },
    nile: {
      name: 'The River Nile',
      kind: 'River',
      text: 'Moses’s mother put her baby in a basket and took it to the River Nile. The waters carried the basket away, and the waves brought it ashore near the Pharaoh’s palace. When Queen Asiye saw the baby, she felt a strong love for him.',
      teacherNote: 'The text does not say where on the Nile this happened. The soft area only shows the river in Egypt.',
      question: 'Why did Moses’s mother put her baby in the river?',
    },
    midian: {
      name: 'Midian',
      kind: 'Region',
      text: 'Moses escaped from Egypt and, after many days, he reached the land of Midian. It was the closest place between Egypt and Syria, on the eastern side of the Gulf of Aqaba, and the Pharaoh was not the ruler there. At a well, Moses helped two sisters. Then he lived in Midian for about ten years.',
      teacherNote: 'In chapter 6 the English text says Midian was “the closest place between Egypt and Syria”; the Arabic text says it was near the road between Egypt and al-Sham. The exact place of the well is not known.',
      question: 'How did Moses help the two sisters? What happened after that?',
    },
    mountain: {
      name: 'The Mountain',
      kind: 'Mountain',
      text: 'After about ten years, Moses and his family started to travel towards Egypt. It was winter. While they were crossing a valley between mountains, Moses saw a fire on the hillside. He climbed the mountain and heard the voice of Allah.',
      teacherNote: 'The B1 text does not name this mountain. The B2 book calls it Mount Sinai, also known as Mount Tur. The soft area in the south of the Sinai Peninsula is approximate; the exact place is not known.',
      question: 'Which two signs did Allah give Moses on the mountain?',
    },
    redSea: {
      name: 'The Red Sea',
      kind: 'Sea',
      text: 'Moses (pbuh) and his people left Egypt at night. When the sun rose, the caravan reached the Red Sea, and the Pharaoh’s army was behind them. Allah parted the sea, so they walked safely between the walls of water. Then the sea closed over the Pharaoh and his soldiers, and they drowned.',
      teacherNote: 'The exact place of the crossing is not known. The soft area near the Gulf of Suez, in the north of the Red Sea, is approximate.',
      question: 'How did Moses’s people feel when they saw the army? What did Moses say to them?',
    },
  },
  towns: {},
  seas: { mediterranean: 'Mediterranean Sea', gulfOfAqaba: 'Gulf of Aqaba' },
  timeline: {
    1: 'Moses in Egypt',
    2: 'A baby in the river',
    3: 'Escape from Egypt',
    4: 'A simple life in Midian',
    5: 'The voice on the mountain',
    6: 'Back to Egypt',
    7: 'To the Red Sea',
    8: 'The Red Sea parts',
  },
  legend: {
    'route:flight': 'Moses escapes to Midian',
    'route:return': 'The family travels towards Egypt',
    'route:toEgypt': 'Moses heads to Egypt',
    'route:exodus': 'The night journey to the Red Sea',
  },
  challenge: {
    egypt: 'Find Egypt, the land where Moses was born.',
    nile: 'Find the River Nile. Its waters carried the basket to the palace.',
    midian: 'Find Midian. It was on the eastern side of the Gulf of Aqaba.',
    mountain: 'Find the mountain. Moses saw a fire there on the way from Midian to Egypt.',
    redSea: 'Find the Red Sea. The caravan left Egypt at night and reached it at sunrise.',
  },
};
