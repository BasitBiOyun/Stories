import type { StoryMapCopy } from '../../../../features/story-maps/types';

// Manually authored B1 map text. Teacher notes and questions are shown only in the Teacher role.
export const meccaB1StoryMapCopyEn: StoryMapCopy = {
  places: {
    mecca: {
      name: 'Mecca',
      kind: 'Holy city',
      text: 'Mecca is the holy city of Islam, and the Holy Ka’ba is here. The Qur’an describes Mecca as a valley where no crops grow, so people made money through trade. In the 5th century, the Quraysh tribe took over the city and the Ka’ba. In the pilgrimage season, people went to big fairs such as Ukaz, Majannah and Dhul-Majaz first, and then to Arafat.',
      teacherNote: 'The book does not give the locations of Arafat or of the fairs (Ukaz, Majannah, Dhul-Majaz), so they are not drawn. Chapter 2 adds that the Qiblah is in Mecca and that Prophet Muhammad (pbuh) was born here and spent 52 years of his life here.',
      question: 'Why did the people of Mecca make money through trade?',
    },
    yemen: {
      name: 'Yemen',
      kind: 'Region',
      text: 'After the discovery of Zamzam water, the Jurhumites from Yemen settled in Mecca. Ishmael (pbuh) learned Arabic from them. Later, Meccan merchants traveled safely to Yemen to trade.',
      teacherNote: 'The book does not say which way the Jurhumites traveled, so both lines are only a guide. Chapter 4 says the Khuza’a tribe later defeated the Jurhum tribe, but it does not say where the Khuza’a came from, so they are not on the map.',
      question: 'What did Ishmael (pbuh) learn from the Jurhumites?',
    },
    palestine: {
      name: 'Palestine',
      kind: 'Region',
      text: 'Prophet Abraham (pbuh) came to Mecca to reconstruct the Holy Ka’ba with his son Ishmael (pbuh). After he completed his mission and invited people for pilgrimage, he returned to Palestine.',
      teacherNote: 'The book gives no date for Abraham (pbuh) and does not say where he set out from when he first brought Hagar and Ishmael (pbuh) to Mecca. Only his return to Palestine (chapter 4) is drawn.',
      question: 'What did Abraham (pbuh) and Ishmael (pbuh) do together in Mecca?',
    },
    iraq: {
      name: 'Iraq',
      kind: 'Region',
      text: 'Iraq was one of the places where Meccan merchants traded. Hashim ibn Abd Manaf and the Quraysh leaders made special trade agreements, so the merchants could travel there safely.',
      teacherNote: 'Chapter 5 names Iraq only as a trade destination. The circle and the route are approximate.',
      question: 'Who was Hashim ibn Abd Manaf, and how did he help Mecca?',
    },
    ethiopia: {
      name: 'Ethiopia',
      kind: 'Region',
      text: 'Ethiopia was another place where Meccan merchants traded. Thanks to the trade agreements of the Quraysh, they could travel there safely.',
      teacherNote: 'B1 does not say whether the merchants reached Ethiopia by land or by sea, so no route is drawn; Ethiopia is joined to Mecca only by a thread in the chapter 5 step. In chapter 13 the book calls Bilal “an Abyssinian slave”.',
      question: 'Which four places does chapter 5 name for Meccan trade?',
    },
    byzantium: {
      name: 'Byzantium',
      kind: 'Empire',
      text: 'When Islam began, the Byzantine Empire was a powerful state. It traded with both the north and the south of Arabia. Meccan merchants also traded in Byzantium.',
      teacherNote: 'The soft area only shows that the Byzantine lands lay to the north. B1 does not describe their borders; the B2 book tells more about this empire.',
      question: 'Which two powerful empires does chapter 4 name?',
    },
    sassanids: {
      name: 'Sassanid Empire',
      kind: 'Empire',
      text: 'The Sassanid Empire was the other powerful state when Islam began. Like the Byzantine Empire, it traded with both the north and the south of Arabia.',
      teacherNote: 'B1 does not say where the Sassanid lands were. The area east of Iraq is only approximate; the B2 book says the Sassanids were the Arabs’ neighbors in the east.',
      question: 'Why were these two empires important for trade in Arabia?',
    },
  },
  towns: {},
  seas: { redSea: 'Red Sea', mediterranean: 'Mediterranean Sea' },
  timeline: {
    1: '7th century: Islam begins',
    2: 'The Ka’ba and the Qiblah',
    3: 'The Jurhumites settle',
    4: 'Back to Palestine',
    5: 'Two powerful empires',
    6: '6th century: a trade center',
    7: 'Fairs and wealth',
  },
  legend: {
    'route:jurhum': 'The Jurhumites come from Yemen',
    'route:abraham': 'Abraham (pbuh) returns to Palestine',
    'route:tradeByzantium': 'Trade with Byzantium',
    'route:tradeYemen': 'Trade with Yemen',
    'route:tradeIraq': 'Trade with Iraq',
  },
  challenge: {
    mecca: 'Find Mecca, the holy city where the Holy Ka’ba is.',
    yemen: 'Find Yemen. The Jurhumites came from here and settled in Mecca.',
    palestine: 'Find Palestine. Abraham (pbuh) returned here after his mission in Mecca.',
    iraq: 'Find Iraq. Meccan merchants traveled here to trade.',
    ethiopia: 'Find Ethiopia, another place where Meccan merchants traded.',
  },
};
