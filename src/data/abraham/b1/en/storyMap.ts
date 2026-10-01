import type { StoryMapCopy } from '../../../../features/story-maps/types';

// Manually authored B1 map text. Teacher notes and questions are shown only in the Teacher role.
export const abrahamB1StoryMapCopyEn: StoryMapCopy = {
  places: {
    babylon: {
      name: 'Babylon',
      kind: 'City and kingdom',
      text: 'About 4,000 years ago, a boy named Abraham lived in the kingdom of Babylon in Mesopotamia. It was his homeland. People there worshipped the stars, the moon, the sun and statues of wood and stone, and Nimrod was their king.',
      teacherNote: 'The book gives no exact year, only “about 4,000 years ago”. It does not name Abraham’s (pbuh) town; the pin marks the old city of Babylon. Mardukh, the chief god of Babylon, appears in chapter 2.',
      question: 'What did people in Babylon worship?',
    },
    mesopotamia: {
      name: 'Mesopotamia',
      kind: 'Region',
      text: 'Mesopotamia was an old land between two rivers. The kingdom of Babylon was in Mesopotamia, so this was Abraham’s (pbuh) homeland.',
      teacherNote: 'The two rivers are the Tigris and the Euphrates; the B1 story does not name them. The circle is only approximate, as there were no fixed borders.',
      question: 'Which kingdom was in Mesopotamia?',
    },
    fire: {
      name: 'The great fire',
      kind: 'Event',
      text: 'Firewood was collected for days, and the fire was so big that people couldn’t approach it. News about it traveled very fast and far, so people came from many different towns. Abraham (pbuh) was thrown into the flames, but Allah made the fire cool and safe for him.',
      teacherNote: 'The book does not say where the fire was, so the pin beside Babylon only shows the event. After the miracle, Abraham (pbuh) met Nimrod, the king of Babylon (chapter 9).',
      question: 'Why did Abraham (pbuh) stay calm before the fire?',
    },
    syria: {
      name: 'Syria',
      kind: 'Region',
      text: 'Nobody in Babylon was going to listen to Abraham’s (pbuh) message, so he decided to travel to other lands. He traveled from Babylon to Syria and Palestine on camelback. It was a long, hot and tiring journey.',
      teacherNote: 'In Abraham’s (pbuh) time this was a wide region, not the country of today. The circle is approximate. The Arabic edition says سوريا.',
      question: 'Why did Abraham (pbuh) leave Babylon?',
    },
    palestine: {
      name: 'Palestine',
      kind: 'Region',
      text: 'Palestine and Syria were the lands on Abraham’s (pbuh) journey from Babylon. He traveled to these lands to spread Allah’s message. Later, Allah commanded him to travel with his wife Hagar and their little son Ishmael.',
      teacherNote: 'The book says Abraham (pbuh) married Hagar and Ishmael was born “during his journey”, but not where. It also does not say where the family started the journey to the valley; the line is drawn from the Palestine area.',
      question: 'Why did Abraham (pbuh) travel to other lands?',
    },
    mecca: {
      name: 'Mecca',
      kind: 'Valley and city',
      text: 'Abraham (pbuh) left Hagar and Ishmael in a lonely desert valley near two small hills, Safa and Marwa. Hagar ran between the hills seven times, and then Zamzam water started flowing from the ground. People came to settle near the spring and built the city of Mecca. Later, Abraham (pbuh) and Ishmael built the Ka’ba here.',
      teacherNote: 'Safa is about 130 meters from the Ka’ba and Marwa about 300 meters (chapter 11). Hagar’s running is remembered as sa’y in Hajj and Umrah. Abraham (pbuh) visited Mecca several times; the book does not say where he came from.',
      question: 'Why did people come to settle in this valley?',
    },
    arabia: {
      name: 'Arabian Peninsula',
      kind: 'Region',
      text: 'Over the centuries, Ishmael’s descendants grew in number, and Muhammad, the Prophet of Islam (pbuh), was among them. They spread all over the Arabian Peninsula and carried Abraham’s (pbuh) message of the Oneness of Allah.',
      teacherNote: 'The circle is only approximate. The Arabic edition says “the years passed” where the English says “over the centuries”.',
      question: 'What message did Ishmael’s descendants carry?',
    },
  },
  towns: {},
  seas: { mediterranean: 'Mediterranean Sea', redSea: 'Red Sea' },
  timeline: {
    1: 'Abraham in Babylon',
    2: 'The great fire',
    3: 'Leaving Babylon',
    4: 'Zamzam and Mecca',
    5: 'The Ka’ba',
    6: 'The message spreads',
  },
  legend: {
    'route:toSyriaPalestine': 'From Babylon to Syria and Palestine',
    'route:toValley': 'To the valley of Safa and Marwa',
  },
  challenge: {
    babylon: 'Find Babylon, Abraham’s (pbuh) homeland in Mesopotamia.',
    syria: 'Find Syria. Abraham (pbuh) traveled there from Babylon on camelback.',
    palestine: 'Find Palestine. Abraham (pbuh) traveled there from Babylon, as he did to Syria.',
    mecca: 'Find Mecca. A spring of water appeared there in the middle of the desert.',
    arabia: 'Find the Arabian Peninsula. Ishmael’s descendants spread all over it.',
  },
};
