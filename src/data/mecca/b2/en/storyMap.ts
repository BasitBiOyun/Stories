import type { StoryMapCopy } from '../../../../features/story-maps/types';

// Manually authored B2 map text. Teacher notes and questions are shown only in the Teacher role.
export const meccaB2StoryMapCopyEn: StoryMapCopy = {
  places: {
    mecca: {
      name: 'Mecca',
      kind: 'Holy city',
      text: 'Mecca is in the western part of the Arabian Peninsula. Allah chose it to be the location of His House, the Holy Ka’ba, and the Qur’an describes it as “a valley where no crops grow”. Prophet Muhammad (pbuh) was born here and spent 52 years of his life here. In the Hajj season, pagan Arabs also stood in Arafat, and major trade festivals such as Ukaz, Majannah and Dhul-Majaz were held during the sacred months.',
      teacherNote: 'Arafat and the fair sites are not drawn because the book does not give their locations; chapter 6 only says people attended the fairs and then went to Arafat. Chapter 3 dates Abraham (pbuh) leaving Hagar and Ishmael here to about 2200–2000 BC.',
      question: 'Why can we say that city life in Mecca began with the building of the Ka’ba?',
    },
    medina: {
      name: 'Medina',
      kind: 'City',
      text: 'Prophet Muhammad (pbuh) loved Mecca very much. While leaving Mecca during his migration to Medina, he said: “I love you more than any other city. Had my people not forced me to leave, I would never have left you.”',
      teacherNote: 'B2 mentions Medina only once (chapter 3) and gives no year for the migration. The line from Mecca is only a guide.',
      question: 'What do these words tell us about the Prophet’s (pbuh) feelings for Mecca?',
    },
    yemen: {
      name: 'Yemen',
      kind: 'Region',
      text: 'After the discovery of Zamzam water, the Jurhumites from Yemen settled in Mecca, and Ishmael (pbuh) learned Arabic from them. Tribes from Yemen also brought products made in India, Indonesia and China to the coast of Yemen. From there, they organized caravans to Iraq, Syria, Palestine and Egypt.',
      teacherNote: 'The book does not say which way the Jurhumites traveled or which stops the caravans used, so all lines are only a guide. Chapter 4 says the Khuza’a later defeated the Jurhumites, but it does not say where they came from.',
      question: 'Why was the coast of Yemen important for trade?',
    },
    abyssinia: {
      name: 'Abyssinia',
      kind: 'Region',
      text: 'Abyssinia (Ethiopia) was one of the lands that trade agreements allowed Quraysh merchants to enter. The Quraysh had trade relations with Abyssinia by sea, and Suhayl b. Amr and Uthman Ibn Affan were shipowners from the Quraysh tribe.',
      teacherNote: 'The book names no port, so the line across the Red Sea is only a guide. In chapter 15 the book calls Bilal “an Abyssinian slave”.',
      question: 'Why did the Quraysh need ships for their trade with Abyssinia?',
    },
    egypt: {
      name: 'Egypt',
      kind: 'Region',
      text: 'Egypt was the Byzantine Empire’s wealthiest region. It was one of the places where Quraysh caravans traveled for trade, and caravans from Yemen carried goods there too. Many caravans left Mecca at almost every time of the year.',
      teacherNote: 'The soft area is approximate. Chapter 6 adds that the Silk Road, which connected the Indian Ocean to the Mediterranean, became unusable in the 6th century because of the wars between the Byzantine and Sassanid empires.',
      question: 'Why was Egypt an attractive place for Quraysh merchants?',
    },
    iraq: {
      name: 'Iraq',
      kind: 'Region',
      text: 'Caravans from Yemen carried goods to Iraq, and trade agreements allowed Quraysh merchants to enter Iraq too. Hashim ibn Abd Manaf, the great-grandfather of Prophet Muhammad (pbuh), played a key role in these agreements and in boosting the economy of Mecca.',
      teacherNote: 'Chapter 1 also says the Arabs were neighbors of the Sassanids in the east; the Sassanid lands are not drawn. The route line is only a guide.',
      question: 'How did the trade agreements of Hashim ibn Abd Manaf change life in Mecca?',
    },
    constantinople: {
      name: 'Constantinople',
      kind: 'Capital city',
      text: 'Constantinople, which we now call Istanbul, was the capital of the Christian Romano-Byzantine Empire (395–1453). The Byzantines and the Zoroastrian Sassanids were the two superpowers of the time, and their rivalry exhausted both sides. The Arabs were neighbors on the southeastern boundaries of the Byzantine Empire.',
      teacherNote: 'Chapter 1 also says that the Middle Ages ended with the conquest of Constantinople in 1453 by the Ottoman Turks. The Sassanid Empire (223–651) is not drawn; the book only says it was the Arabs’ neighbor in the east.',
      question: 'Why does chapter 1 describe the two superpowers before it talks about Mecca?',
    },
  },
  towns: { syria: 'Syria', palestine: 'Palestine' },
  seas: { redSea: 'Red Sea', mediterranean: 'Mediterranean', gulf: 'The Gulf', indianOcean: 'Indian Ocean' },
  timeline: {
    1: 'Two superpowers',
    2: 'Mecca in western Arabia',
    3: 'The holy city',
    4: 'The Jurhumites arrive',
    5: '6th century: a trade center',
    6: 'Trade by sea',
    7: '7th century: the trade route',
  },
  legend: {
    'route:hijra': 'The migration to Medina',
    'route:jurhum': 'The Jurhumites from Yemen',
    'route:caravanNorth': 'Caravans from Yemen to Syria and Palestine',
    'route:caravanEgypt': 'Quraysh caravans to Egypt',
    'route:caravanIraq': 'Trade with Iraq',
    'route:seaAbyssinia': 'Sea trade with Abyssinia',
  },
  challenge: {
    medina: 'Find Medina, where Prophet Muhammad (pbuh) migrated when he left Mecca.',
    constantinople: 'Find Constantinople, the Byzantine capital that we now call Istanbul.',
    egypt: 'Find Egypt, the Byzantine Empire’s wealthiest region and a goal of Quraysh caravans.',
    yemen: 'Find Yemen. The Jurhumites came from here, and goods from India, Indonesia and China reached its coast.',
    abyssinia: 'Find Abyssinia. The Quraysh traded with it by sea.',
  },
};
