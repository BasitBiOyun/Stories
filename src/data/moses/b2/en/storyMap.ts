import type { StoryMapCopy } from '../../../../features/story-maps/types';

// Manually authored B2 map text. Teacher notes and questions are shown only in the Teacher role.
export const mosesB2StoryMapCopyEn: StoryMapCopy = {
  places: {
    egypt: {
      name: 'Egypt',
      kind: 'Region',
      text: 'Around 1700 BC, in the time of Prophet Joseph (pbuh), the Israelites settled in Egypt. Later, the pharaohs made them work on huge projects, such as the new capital city of Ramses. In the Nile Delta, canals were built for irrigation, transportation and trade. Moses (pbuh) was raised as a prince in the Pharaoh’s palace.',
      teacherNote: 'All dates in the B2 text are approximate, and the text itself says that the exact date of the Exodus is unknown. The text does not say where the palace or the capital city of Ramses was, so Egypt is shown as a region.',
      question: 'Why did the pharaohs need so many workers?',
    },
    nile: {
      name: 'The Nile',
      kind: 'River',
      text: '“Egypt is the gift of the Nile,” said the historian Herodotus: the fertile waters of the river were the source of life for Egypt. Moses’ mother put her baby into a basket on the waters of the Nile. The river carried him to the Pharaoh’s palace, where he was given the name “Musa”.',
      teacherNote: 'The text does not say where on the Nile the basket was found. The soft area only shows the river in Egypt. Chapter 4 explains the name: “mu” means water and “sa” means tree in the Coptic language.',
      question: 'Why was control of the Nile so important for the pharaohs?',
    },
    midian: {
      name: 'Midian',
      kind: 'Region',
      text: 'Moses (pbuh) hurried out of Egypt and crossed the hot desert, travelling by night and hiding during the day. Midian was the closest inhabited area between Egypt and Syria, in the eastern part of the Gulf of Aqaba. At a well, he helped the two daughters of Prophet Shu’ayb (pbuh). He then worked as a shepherd there for ten long years.',
      teacherNote: 'The text calls the water “a watering hole outside Midian” (ch. 11), “a well in Midian” (ch. 12) and “the spring” (ch. 13). Its exact place is not known.',
      question: 'Why were the ten years in Midian important for Moses?',
    },
    sinai: {
      name: 'Sinai',
      kind: 'Region',
      text: 'Moses left Midian with his family to return to Egypt across the Sinai. On a winter night, they reached Mount Sinai, also known as Mount Tur. There, in the sacred valley of Tuwa, Allah called Moses and gave him two signs. Later, after leading his people out of Egypt, Moses stayed on Mount Tur for forty days, and the Torah was given to him.',
      teacherNote: 'The soft area shows the region, not an exact peak or valley: the text does not say where Mount Tur or Tuwa is. It also does not say directly that the Mount Tur of chapter 24 is the same place as in chapter 15, but chapter 15 says Mount Sinai is also known as Mount Tur.',
      question: 'What did Allah tell Moses to take off in the sacred valley?',
    },
    redSea: {
      name: 'The Red Sea',
      kind: 'Sea',
      text: 'The Children of Israel set out at night and journeyed toward the Red Sea. When the sun rose, they reached the beach, with the sea in front of them and the Pharaoh’s army behind. A strong wind blew, the sea parted, and the waves stood like mountains on each side. The Pharaoh and his army entered the parted waters and drowned.',
      teacherNote: 'The exact place of the crossing is not known; the soft area at the Gulf of Suez is approximate. Chapter 2 says the pharaoh who drowned was probably Ramses II and that most sources place the Exodus in the early 13th century BC, but its exact date is unknown.',
      question: 'How did the Pharaoh explain the parting of the sea to his men?',
    },
    canaan: {
      name: 'The Land of Canaan',
      kind: 'Region',
      text: 'After the sea crossing, Moses (pbuh) led the Children of Israel toward the land of Canaan, the land of Palestine. It is the historical homeland where Jacob’s (pbuh) offspring settled. On the way, they saw a group of people who worshipped idols and calves.',
      teacherNote: 'The text gives no route and no place for the people who worshipped idols. The line on the map only shows the direction, “toward the land of Canaan”.',
      question: 'What did some of the Children of Israel ask Moses on the way?',
    },
  },
  towns: {},
  seas: { mediterranean: 'Mediterranean Sea', gulfOfAqaba: 'Gulf of Aqaba' },
  timeline: {
    1: 'The Israelites in Egypt',
    2: 'A baby in the Nile',
    3: 'Escape to Midian',
    4: 'A shepherd’s life',
    5: 'The voice at Mount Sinai',
    6: 'Moses and Aaron before Pharaoh',
    7: 'The Red Sea opens',
    8: 'Toward Canaan',
    9: 'Forty days on Mount Tur',
  },
  legend: {
    'route:flight': 'Moses escapes to Midian',
    'route:return': 'Back across the Sinai',
    'route:toEgypt': 'Moses returns to Egypt',
    'route:exodus': 'The Exodus to the Red Sea',
    'route:toCanaan': 'Toward the land of Canaan',
  },
  challenge: {
    egypt: 'Find Egypt. The Israelites settled here in the time of Prophet Joseph (pbuh).',
    midian: 'Find Midian. It was in the eastern part of the Gulf of Aqaba.',
    sinai: 'Find Sinai. Moses crossed it on his way from Midian back to Egypt.',
    redSea: 'Find the Red Sea. The Children of Israel set out at night and reached its beach at sunrise.',
    canaan: 'Find the land of Canaan. Moses led his people toward it after the sea crossing.',
  },
};
