import type { Exercise, PageData, TeacherGuideMetadata } from '../../../../types';
import { meccaB2QuickChallenges, meccaB2VocabularyChallengePairs, meccaB2FinalChallengeExercises } from './exercises';
import { meccaB2LanguageFocusExercises } from './languageFocus';
import { meccaB2LanguageFocusExercisesPart2 } from './languageFocus2';
import { meccaB2LanguageFocusExercisesPart3, meccaB2LanguageFocusExercisesPart4, meccaB2LanguageReviewExercises } from './languageFocus3';
import { meccaB2TeacherGuideMetadata } from './teacherGuide';

const sourceMeccaB2Pages: PageData[] = [
  {
    id: 1,
    type: 'story',
    title: 'A City and an Age',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch1-clean.png?alt=media&token=e4c627c6-6f73-4990-85a0-67a7327ac3dc',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F00_Chapter_1.mp3?alt=media&token=ac745550-639e-4e1f-84fb-31fda7bcfd0c',
    content: `One of the most important developments of the Middle Ages (Middle Ages span between the fall of the Roman Empire in 476 CE and the conquest of Constantinople in 1453 by the Ottoman Turks) was the rise of Islam. Islam was born in the city of Mecca in the 7th century.

Two superpowers of the time were the Christian Romano-Byzantine Empire (395 CE–1453 CE) with its capital city Constantinople (which we now call Istanbul) and the Persians ruled by the Zoroastrian Sassanids (223 CE–651 CE). At that time, the Arabs were neighbors on the southeastern boundaries of the Byzantine Empire. They were also the neighbors of the Sassanids in the east.

The rivalry between these two superpowers exhausted both sides. On the other side, because the Arabs lived in tribes, there was no political unity on the Arabian Peninsula.

After describing the broad background of the time, take a closer look at the city and the era in which Prophet Muhammad (pbuh) lived and Islam rose.

The city we are talking about is Mecca, and the time period is called the Age of Ignorance.

The Age of Ignorance is the pre-Islamic era in the Arabian Peninsula that covers the period from the 5th century to the beginning of the revelation (vahiy) in 610.`,
    vocabulary: [
      { word: 'Middle Ages', definition: 'The historical period between the fall of the Roman Empire and the conquest of Constantinople.' },
      { word: 'superpower', definition: 'A very powerful state or empire.' },
      { word: 'rivalry', definition: 'Competition or conflict between two sides.' },
      { word: 'political unity', definition: 'A situation in which people or groups are organized under one political authority.' },
      { word: 'revelation', definition: 'A message sent by Allah to a prophet.' },
      { word: 'span', definition: 'To extend across a period of time.' },
      { word: 'conquest', definition: 'The act of taking control of a place by force.' },
    ],
    hotspots: [
      { id: 'h1-1', x: 34, y: 44, title: 'Middle Ages', description: 'One of the most important developments of the Middle Ages (Middle Ages span between the fall of the Roman Empire in 476 CE and the conquest of Constantinople in 1453 by the Ottoman Turks) was the rise of Islam.' },
      { id: 'h1-2', x: 68, y: 50, title: 'Mecca', description: 'Islam was born in the city of Mecca in the 7th century.' },
    ],
  },
  {
    id: 2,
    type: 'story',
    title: 'Jahiliyyah and Mecca',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch2-clean.png?alt=media&token=ddc0d6e6-8369-46af-9b59-cfd241d6c19c',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F01_Chapter_2_Jahiliyyah_and_Mecca.mp3?alt=media&token=31b63252-8882-46a8-b789-d810b5945494',
    content: `The term is used to describe the beliefs and behaviors of the Arabs before the Islamic era. The meaning of "ignorance" is not the lack of science or the lack of knowledge. This period is called the Age of Ignorance because people did not truly know Allah and widely did not have justice, order, and peace both in their personal and social lives. They always sided with the powerful and the upper class. The oppressed, the weak and the poor were living a life of misery.

The Quran points to the ignorance and barbarism of the pre-Islamic era, as well as the violence, hatred, bloodshed, and other moral decline that dominated the lives of the pagan community.

The Jahiliyyah is the “age of barbarism.” In fact, the Prophet described Islam as the opposite of barbarism. An ignorant person is wild, a slave to their desires, follows their animalistic feelings, brutal and aggressive; in other words, a “barbarian.” The opposite of this is a civilized person. Although the word “jahiliyyah” essentially describes the pre-Islamic period of the Arabs, the Prophet (as) did not view it as a period of the past. On the contrary, he believed it could arise again at any moment and warned people against it.

To understand Jahiliyyah, it is necessary to describe Mecca. Mecca is in the western part of the Arabian Peninsula. This piece of land is called a peninsula because water surrounds it on three sides: the south, west, and east. (The Arabian/Persian Gulf (Basra Körfezi) is in the east, the Indian Ocean is in the south, and the Red Sea is in the west.)`,
    vocabulary: [
      { word: 'Jahiliyyah', definition: 'The Age of Ignorance before Islam.' },
      { word: 'barbarism', definition: 'Cruel, uncivilized, and violent behavior.' },
      { word: 'oppressed', definition: 'Treated cruelly and unfairly.' },
      { word: 'moral decline', definition: 'A fall in good behavior and moral values.' },
      { word: 'peninsula', definition: 'A piece of land surrounded by water on three sides.' },
      { word: 'truly', definition: 'In a truthful, accurate, or sincere way.' },
      { word: 'era', definition: 'A long and distinct period of history.' },
      { word: 'sided with', definition: 'Supported one person or group against another.' },
      { word: 'upper class', definition: 'The social group that has the highest status or wealth.' },
      { word: 'civilized', definition: 'Having an advanced, polite, and well-organized society.' },
    ],
    hotspots: [
      { id: 'h2-1', x: 34, y: 44, title: 'Jahiliyyah', description: 'This period is called the Age of Ignorance because people did not truly know Allah and widely did not have justice, order, and peace both in their personal and social lives.' },
      { id: 'h2-2', x: 68, y: 50, title: 'Peninsula', description: 'This piece of land is called a peninsula because water surrounds it on three sides: the south, west, and east.' },
    ],
  },
  {
    id: 3,
    type: 'story',
    title: 'The Holy City',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch3-clean.png?alt=media&token=2e0ead7d-354d-414b-855f-68ebe0325821',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F02_Chapter_3_The_Holy_City.mp3?alt=media&token=c4c83d65-5191-426b-9cb3-f81504080779',
    content: `Mecca is the holy city of Islam. Allah chose this city to be the location of His House, the Holy Ka’ba. (See Âl-i Imran, 96.) It was also in this city that the last Prophet, Muhammad (pbuh), was born and spent 52 years of his life; 40 years of his life in this city before his prophethood and almost 13 years after it. And here he began to spread the message of Islam.

The Qiblah is also located in the city, which is the direction towards which Muslims face while they are performing their daily prayers, salah.

Prophet Muhammad (pbuh) loved this city so much that while leaving Mecca during his migration to Medina, He (pbuh) said: "I love you more than any other city. Had my people not forced me to leave, I would never have left you." (Sunan al-Tirmidhi, 3925).

Mecca is described in the Holy Quran as “a valley where no crops grow” (Surah Ibrahim: 37). The Ka’ba is the main factor in the establishment of Mecca as a settlement. It can be said that city life began here only with the building of the Ka’ba.

When Prophet Abraham (as) brought his son Ishmael and his wife Hagar to the city and left them there, the Zamzam water had not yet been discovered, so there was no population living there. This date is approximately between 2200 and 2000 B.C.`,
    vocabulary: [
      { word: 'holy', definition: 'Sacred and connected with worship.' },
      { word: 'Ka’ba', definition: 'The Holy House of Allah in Mecca.' },
      { word: 'Qiblah', definition: 'The direction Muslims face during prayer.' },
      { word: 'migration', definition: 'Moving from one place to another.' },
      { word: 'settlement', definition: 'A place where people begin to live.' },
    ],
    hotspots: [
      { id: 'h3-1', x: 34, y: 44, title: 'Ka’ba', description: 'The Ka’ba is the main factor in the establishment of Mecca as a settlement. It can be said that city life began here only with the building of the Ka’ba.' },
      { id: 'h3-2', x: 68, y: 50, title: 'Qiblah', description: 'The Qiblah is also located in the city, which is the direction towards which Muslims face while they are performing their daily prayers, salah.' },
    ],
  },
  {
    id: 4,
    type: 'story',
    title: 'The Ka’ba and the Quraysh',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch4-clean.png?alt=media&token=4a2bb961-4045-4f8c-9f81-97d5ad10d425',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F03_Chapter_4_The_Ka%E2%80%99ba_and_the_Quraysh.mp3?alt=media&token=ff1aec97-a9a9-4832-955f-2bce598ee1cf',
    content: `After the discovery of the Zamzam water, the Jurhumites (Cürhümlüler) from Yemen settled in Mecca. Ishmael, who was the first offspring of Abraham (as) to speak Arabic, learned the language from the Jurhumites. Later, when Ishmael grew up, Abraham (as) came to the city to reconstruct the Holy Ka’ba with his son. For the Arabs who accepted the religion taught by Abraham (as) and Ishmael (as), the Ka’ba became a pilgrimage site; this helped the city grow rapidly. After Abraham (as) invited people for pilgrimage (hajj) and completed his mission, he returned to Palestine.

Then a new tribe, the Khuza’a (Huzâa), came to Mecca, defeated the Jurhumites, and established their rule over the city. During the rule of this tribe, people forgot the religion of Abraham (as) (monotheism) and spread idolatry throughout the city. In the 5th century, the administration of Mecca and the Ka’ba passed to the Quraysh tribe. Pre-Islamic Mecca was administered by a council of mostly wealthy merchants.

Since the surroundings of the city were not suitable for agriculture, people tried to make a living with trade.

In the period when Islam came, the Byzantine and Sassanid empires, which were the two most powerful states in the region, had trade with Arabia in both the northern and southern regions.
India also played a very important role in Arabia's trade. There were many products made in India, Indonesia, and China.`,
    vocabulary: [
      { word: 'offspring', definition: 'A child or descendant.' },
      { word: 'reconstruct', definition: 'To build again.' },
      { word: 'pilgrimage', definition: 'A religious journey to a sacred place.' },
      { word: 'monotheism', definition: 'Belief in one God only.' },
      { word: 'idolatry', definition: 'Worshipping idols.' },
      { word: 'tribe', definition: 'A group of people with the same language and ancestors.' },
    ],
    hotspots: [
      { id: 'h4-1', x: 34, y: 44, title: 'Pilgrimage', description: 'For the Arabs who accepted the religion taught by Abraham (as) and Ishmael (as), the Ka’ba became a pilgrimage site; this helped the city grow rapidly.' },
      { id: 'h4-2', x: 68, y: 50, title: 'Quraysh', description: 'In the 5th century, the administration of Mecca and the Ka’ba passed to the Quraysh tribe.' },
    ],
  },
  {
    id: 5,
    type: 'story',
    title: 'Mecca as a Trade Center',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch5-clean.png?alt=media&token=be2f5347-2e03-4503-b8dc-04444062e85a',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F04_Chapter_5_Mecca_as_a_Trade_Center.mp3?alt=media&token=5daf39d9-8b4f-42ca-bce6-523e06230d54',
    content: `Tribes from Yemen brought these products to the coast of Yemen and they organized caravans to transport them to Iraq, Syria, Palestine, and Egypt.

Mecca began to develop into a trade center from the early 6th century CE (Common Era: Milattan Sonra). Hashim ibn Abd Manaf, the great-grandfather of Muhammad (as), played a key role in boosting the economy of Mecca. He, along with the leaders of the Quraysh tribe, made trade deals with some tribes and nations, and they were given permission to travel freely. These agreements also allowed Quraysh merchants to enter Byzantium, Yemen, Iraq, and Abyssinia (Ethiopia). The summer and winter journeys described in the Holy Quran were organized once a year with large caravans (see, Surah Quraysh: 1-4). These caravans numbered up to 2,500 camels.

This meant approximately 2–3 shiploads of cargo. At that time, the typical Roman trade ship had a carrying capacity of around 100–150 tons. This number shows us how large the trade was.

In addition to these, many caravans left Mecca at almost every time of the year. For example, one of the places where the Quraysh caravans traveled for trade was Egypt, the Byzantine Empire’s wealthiest region. Abyssinia was also a place with which the Quraysh had trade relations by sea. Suhayl b. Amr and Uthman Ibn Affan were shipowners from the Quraysh tribe. So, beginning with the settlement of the Quraysh tribe in Mecca in the mid-5th century A.D., the city of Mecca gradually developed into a center of trade.`,
    vocabulary: [
      { word: 'caravan', definition: 'A group of people, animals, or vehicles traveling together.' },
      { word: 'trade center', definition: 'A place where buying and selling are very important.' },
      { word: 'boost', definition: 'To increase or improve something.' },
      { word: 'merchant', definition: 'A person who buys and sells goods.' },
      { word: 'cargo', definition: 'Goods carried by ship, camel, or vehicle.' },
      { word: 'Hashim ibn Abd Manaf', definition: "The great-grandfather of Prophet Muhammad (as) who played a key role in boosting Mecca's economy." },
    ],
    hotspots: [
      { id: 'h5-1', x: 34, y: 44, title: 'Caravans', description: 'The summer and winter journeys described in the Holy Quran were organized once a year with large caravans (see, Surah Quraysh: 1-4). These caravans numbered up to 2,500 camels.' },
      { id: 'h5-2', x: 68, y: 50, title: 'Trade Center', description: 'Beginning with the settlement of the Quraysh tribe in Mecca in the mid-5th century A.D., the city of Mecca gradually developed into a center of trade.' },
    ],
  },
  {
    id: 6,
    type: 'story',
    title: 'Sacred Months and Trade',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch6-clean.png?alt=media&token=910919c7-b2e6-4c4b-a6e7-0511c73eeaaa',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F05_Chapter_6_Sacred_Months_and_Trade.mp3?alt=media&token=242dadf2-33f1-446e-aa11-8aee2dc422ce',
    content: `During this period, the Silk Road—the most important of the eastern trade routes that connected the Indian Ocean to the Mediterranean—became unusable in the 6th century CE due to the wars between the Byzantine and Sassanid empires. This made the Red Sea route and the overland route through Arabia highly important.

The safe environment created by the sacred months (These are the four sacred lunar months during which fighting is prohibited. During this period, which consists of Zilkade, Zilhicce, Muharram, and Rajab, people focus on worship, show respect, and refrain from sinning, with the aim of creating an atmosphere of peace.) made it possible for more people to perform the Hajj. (During the pre-Islamic Jahiliyyah period, the Arabs continued to visit the Ka’ba and the sacred sites in its neighborhood. Pagan people would walk around the Ka’ba, perform the sa'y between Safa and Marwah, and stand in Arafat.)

Hajj also meant more lively trade. In addition, major trade festivals such as Ukaz (Ukâz), Majannah (Mecenne), and Dhul-Majaz (Zülmecâz) were also held during the sacred months. They were particularly held during the Hajj season, and after people attended these fairs, they went to Arafat.

Because of its extensive trade activities, Mecca was described as the "Republic of Traders."

So, at the beginning of the 7th century, the Quraysh gained control of the most important trade route and wealth in Arabia.`,
    vocabulary: [
      { word: 'Silk Road', definition: 'An important trade route connecting East and West.' },
      { word: 'sacred months', definition: 'Four lunar months during which fighting was prohibited.' },
      { word: 'prohibited', definition: 'Not allowed.' },
      { word: 'trade festival', definition: 'A large gathering where people buy and sell goods.' },
      { word: 'extensive', definition: 'Very large or wide in range.' },
      { word: 'overland route', definition: 'A trade or travel route across land rather than sea.' },
      { word: 'pagan', definition: 'A person who worships many gods or idols.' },
      { word: 'Marwah', definition: 'A sacred hill near the Ka’ba in Mecca.' },
    ],
    hotspots: [
      { id: 'h6-1', x: 34, y: 44, title: 'Sacred Months', description: 'The safe environment created by the sacred months (These are the four sacred lunar months during which fighting is prohibited...) made it possible for more people to perform the Hajj.' },
      { id: 'h6-2', x: 68, y: 50, title: 'Trade Festivals', description: 'Major trade festivals such as Ukaz (Ukâz), Majannah (Mecenne), and Dhul-Majaz (Zülmecâz) were also held during the sacred months.' },
    ],
  },
  {
    id: 7,
    type: 'story',
    title: 'Social Classes in Mecca',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch7-clean.png?alt=media&token=6fb13f37-a434-4468-bf64-d956bb7ecda2',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F06_Chapter_7_Social_Classes_in_Mecca.mp3?alt=media&token=15d61607-1493-435a-b106-c39713f3026f',
    content: `The Quraysh used coins, as well as gold and silver, in their trade. Paying a fee to borrow money—which is usury (faiz)—played a very significant role in the economic activities of the time. This practice also affected the social structure. Usury, which means additional money on the original amount of money, is “ribâ” in Arabic. The Quraysh added to their wealth through lending at usury. It was the easiest and most profitable way to increase one’s wealth. As a result of the money trade, there was a wealthy aristocracy in the city. In such an environment where trade and money were so important, all human relationships were based on making more money. Money lenders and capitalists were the city’s most powerful class. They imposed enormous borrowing rates on debts. This system was designed to make the rich richer and the poor poorer. Vices of drinking and gambling were also so common that this was also one reason why people were constantly falling into debt.

Due to the big money ownership in the hands of certain individuals, social class division was at an extremely high level. In fact, there were rich people who ate from gold plates and drank from silver cups and crystal glasses, but there were also poor people who could barely survive.

There was a huge gap between the rich and the poor even in the most basic human relationships. Among the upper class of the Quraysh, money, wealth, children, and family were a source of pride and competition.`,
    vocabulary: [
      { word: 'usury', definition: 'Lending money and taking unfair extra payment back.' },
      { word: 'ribâ', definition: 'The Arabic term for usury.' },
      { word: 'aristocracy', definition: 'A powerful upper class in society.' },
      { word: 'capitalist', definition: 'A person who owns wealth and uses it for profit.' },
      { word: 'social class', definition: 'A group of people with a similar economic or social position.' },
      { word: 'survive', definition: 'To continue to live or exist, especially in spite of danger or hardship.' },
      { word: 'imposed', definition: 'Forced something on others by authority or power.' },
    ],
    hotspots: [
      { id: 'h7-1', x: 34, y: 44, title: 'Usury', description: 'The Quraysh added to their wealth through lending at usury. ... This system was designed to make the rich richer and the poor poorer.' },
      { id: 'h7-2', x: 68, y: 50, title: 'Social Classes', description: 'Due to the big money ownership in the hands of certain individuals, social class division was at an extremely high level.' },
    ],
  },
  {
    id: 8,
    type: 'story',
    title: 'Injustice and Hilfü’l-Fudûl',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch8-clean.png?alt=media&token=230f0572-6df9-4e28-afe9-ea5da6376344',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F07_Chapter_8_Injustice_and_Hilf%C3%BC%E2%80%99l-Fud%C3%BBl.mp3?alt=media&token=99765b8e-c692-41bc-bbbc-bdb8c267dcb1',
    content: `Even when Prophet Muhammad (as) began calling people to Islam, these people said, “With men like us around, is it really up to Muhammad to become the leader of the Quraysh?” (see Surah Zuhruf: 31)

In such a society, orphans were oppressed, the weak were looked down on, and the poor were shown no mercy. For instance, the camels of the weak used to be taken without payment, and the goods and property of small sellers were unjustly seized by force. Furthermore, the weak and defenseless people who came to the city from outside for pilgrimage and trade were unfairly treated and oppressed. To prevent such incidents, an agreement was made by some Quraysh tribes to help people who had been oppressed in Mecca. Prophet Muhammad (as), who was twenty years old at the time, also attended this meeting. This formation was named Hilfü’l-fudûl, which means The Community of the Righteous. Young Muhammad became an enthusiastic member of the organization.

During the pre-Islamic era, those who oppressed and treated people unfairly were generally wealthy and powerful individuals. Due to its fight against injustice, Hilfu’l-Fudûl received support from the community.

This organization played a very important role in maintaining justice and order in Mecca and tried to protect the rights of the oppressed. For example, a merchant had sold goods to Ubayy b. Halef, one of Mecca’s leading figures, but had not received payment. The merchant helplessly applied to Hilfü’l-fudûl. The members of the organization told him to go to Ubayy and demand his money again, and to inform him that if he did not pay, they would collect it themselves.`,
    vocabulary: [
      { word: 'orphan', definition: 'A child whose parents have died.' },
      { word: 'defenseless', definition: 'Unable to protect oneself.' },
      { word: 'agreement', definition: 'A decision or promise made by people together.' },
      { word: 'Hilfü’l-Fudûl', definition: 'The Community of the Righteous formed to defend the oppressed.' },
      { word: 'oppressed', definition: 'People treated cruelly or unfairly.' },
      { word: 'looked down on', definition: 'Treated with contempt or as inferior.' },
      { word: 'goods', definition: 'Things that are produced to be sold.' },
      { word: 'property', definition: 'Things or belongings that someone owns.' },
      { word: 'righteous', definition: 'Morally good, virtuous, or fair.' },
      { word: 'received support', definition: 'Was helped, encouraged, or approved by others.' },
    ],
    hotspots: [
      { id: 'h8-1', x: 34, y: 44, title: 'Hilfü’l-Fudûl', description: 'To prevent such incidents, an agreement was made by some Quraysh tribes to help people who had been oppressed in Mecca. This formation was named Hilfü’l-fudûl...' },
      { id: 'h8-2', x: 68, y: 50, title: 'Justice', description: 'This organization played a very important role in maintaining justice and order in Mecca and tried to protect the rights of the oppressed.' },
    ],
  },
  {
    id: 9,
    type: 'story',
    title: 'Generosity and Tribal Life',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch9-clean.png?alt=media&token=9742cd4f-0908-4885-adb1-bf9970869372',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F08_Chapter_9_Generosity_and_Tribal_Life.mp3?alt=media&token=625e064a-2550-4e65-8f31-f5f636bfc185',
    content: `On this, Ubayy paid the money immediately. This formation also made Mecca a safer city for trade.

All sources note that the Prophet (as) spoke highly of this formation even after his prophethood and believed that Islam had further strengthened it. He used to say: “I have no desire to abandon my oath even against a herd of red-haired camels.” It is recorded that he said he would respond immediately without hesitation if he were called again (Musnad, I, 190, 317).

As the example of the Hilfu’l-Fudûl shows, it certainly doesn’t make sense to call the pre-Islamic era as entirely negative. In addition to this, for instance, the Arabs before Islam were known for their extraordinary generosity and hospitality. They used to bet on who could slay and offer the most camels for their guests. The bet was a type of gambling as well. Until one side gave up, camels used to continue to be killed, and at the end, the victor became well-known for his generosity. All of this was done for the fame of the individual and the tribe.

The admirable qualities of the Arabs before Islam, like generosity, were driven mostly by arrogance rather than real goodness. In the end, such behaviors turned into a tribal honor contest, and this led to greater problems.

Tribes were the basis of Arab society.`,
    vocabulary: [
      { word: 'formation', definition: 'An organized group created for a purpose.' },
      { word: 'oath', definition: 'A serious promise.' },
      { word: 'generosity', definition: 'The quality of giving freely.' },
      { word: 'hospitality', definition: 'Kindness and welcome shown to guests.' },
      { word: 'arrogance', definition: 'Pride that makes someone feel superior to others.' },
      { word: 'spoke highly', definition: 'Expressed great approval or praise for someone.' },
      { word: 'abandon', definition: 'To give up or leave completely.' },
      { word: 'hesitation', definition: 'A pause or delay due to uncertainty.' },
      { word: 'bet on', definition: 'To wager or gamble on an outcome.' },
    ],
    hotspots: [
      { id: 'h9-1', x: 34, y: 44, title: 'Generosity', description: 'The Arabs before Islam were known for their extraordinary generosity and hospitality. They used to bet on who could slay and offer the most camels for their guests.' },
      { id: 'h9-2', x: 68, y: 50, title: 'Tribal Honor', description: 'The admirable qualities of the Arabs before Islam, like generosity, were driven mostly by arrogance rather than real goodness.' },
    ],
  },
  {
    id: 10,
    type: 'story',
    title: 'Women in Jahiliyyah',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch10-clean.png?alt=media&token=6b0d4166-dcf1-46cd-9f21-206ef00030ae',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F09_Chapter_10_Women_in_Jahiliyyah.mp3?alt=media&token=3d573926-d702-44a4-959f-9db29234f454',
    content: `In the hard desert environment, physical strength was crucial. So men were seen as the tribes' most valuable fighting members. The Arabs' main aim was to have a large number of male children because this was the only way they could be respected by other tribes. Without tribal protection, people could not protect their lives and property.

Pre-Islamic Arabs valued ancestors greatly and knew their names by heart. It was important to work for the tribe and to honor and defend it in every circumstance, no matter what the tribe did.

The position of Arab women before Islam was not always the same. It changed according to their social status and tribes. Despite limitations from society, some women managed to reach a level of some freedom. For example, Khadija, the wealthy wife of the Prophet (as), was free to run a business under her own name. Or a woman from a higher social class, like Hind bint Utbah, who was the wife of Abu Sufyan and the mother of Mu'awiya, had some power in society.

However, many women from lower social and economic groups were mistreated and disadvantaged. Those women and girls had no status and no human or legal rights in their family lives and in society. They had no say and were not allowed to give their opinions.

When news of the birth of a daughter was given to them, people in the Age of Ignorance lamented and their faces were darkened with grief and fury. They themselves were ashamed of having daughters and longed for sons to increase their power and dignity. The Holy Qur’an describes this scene in Surah Nahl, verses 58-59;`,
    vocabulary: [
      { word: 'crucial', definition: 'Extremely important.' },
      { word: 'ancestor', definition: 'A family member who lived long ago.' },
      { word: 'social status', definition: 'A person’s position in society.' },
      { word: 'disadvantaged', definition: 'Having fewer rights, chances, or resources.' },
      { word: 'dignity', definition: 'Honor and human worth.' },
      { word: 'by heart', definition: 'From memory; completely.' },
      { word: 'mistreated', definition: 'Treated badly or cruelly.' },
      { word: 'lamented', definition: 'Expressed deep grief or sorrow.' },
      { word: 'longed for', definition: 'Wanted or desired something very much.' },
      { word: 'ashamed', definition: 'Feeling shame, guilt, or embarrassment.' },
    ],
    hotspots: [
      { id: 'h10-1', x: 34, y: 44, title: 'Tribal Protection', description: 'Without tribal protection, people could not protect their lives and property.' },
      { id: 'h10-2', x: 68, y: 50, title: 'Women', description: 'The position of Arab women before Islam was not always the same. It changed according to their social status and tribes.' },
    ],
  },
  {
    id: 11,
    type: 'story',
    title: 'Slavery, Poets and Media',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch11-clean.png?alt=media&token=463b4569-1c7e-401c-95ce-8c82fdad0be8',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F10_Chapter_11_Slavery%2C_Poets_and_Media.mp3?alt=media&token=05ecbabc-1d76-4ba2-9605-8e61e949263c',
    content: `“And when one of them is given news of a female baby, his face darkens, and he can’t breathe with grief. He hides from the people because of the bad news given to him. Shall he keep it in humiliation, or bury it in the dust? Evil is the decision they make.”

Slavery was an economic institution in Mecca. Slaves, both male and female, were the most miserable class in society. They were bought and sold like animals. They were employed in various tasks as well as for people’s personal service. They were a show of wealth. They also acted as a weapon to protect their owner in times of war. White slaves brought from the regions of Damascus and Iraq were more expensive than black slaves brought from Africa because they served better and were skilled workers.

During this era, poets were an important part of social life and poetry was the most important part of the culture. Poetry was used to keep the tribe’s history alive. It told stories about brave ancestors and hard times. It also praised the tribe’s family and criticized enemies. Tribes were honored in poems, and poets praised conflict rather than peace and war instead of peace. There were very few poets who invited the tribes to peace and urged them to stay away from fighting. In a sense, they were serving as a media outlet. Tribes often formed a political alliance to defend each other, yet extreme tribalism made universal justice impossible when people supported their tribe even when it was wrong.`,
    vocabulary: [
      { word: 'humiliation', definition: 'A feeling or condition of shame and loss of dignity.' },
      { word: 'slavery', definition: 'A system in which people are owned and forced to work.' },
      { word: 'institution', definition: 'An established social or economic system.' },
      { word: 'poet', definition: 'A person who writes poems.' },
      { word: 'media outlet', definition: 'A source that spreads information and ideas to people.' },
      { word: 'alliance', definition: 'A formal agreement or union between tribes or states for a common purpose.' },
      { word: 'tribalism', definition: "Extreme loyalty to one's tribe, placing tribal survival above universal justice." },
    ],
    hotspots: [
      { id: 'h11-1', x: 34, y: 44, title: 'Slavery', description: 'Slavery was an economic institution in Mecca. Slaves, both male and female, were the most miserable class in society. They were bought and sold like animals.' },
      { id: 'h11-2', x: 68, y: 50, title: 'Poets', description: 'Poets were an important part of social life and poetry was the most important part of the culture. ... In a sense, they were serving as a media outlet.' },
    ],
  },
  {
    id: 12,
    type: 'story',
    title: 'Religious Life in Mecca',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch12-clean.png?alt=media&token=ba29bc1e-dec7-4f2d-a62f-9941f38dd29d',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F11_Chapter_12_Religious_Life_in_Mecca.mp3?alt=media&token=88b84a1c-0099-4a15-9dcc-60651386c419',
    content: `Arabia was idolatrous; only a few individuals had adopted religions like Christianity. In Mecca there were some Hanifs who believed in the religion of Abraham (as), but idolatry was dominant. The number of idols in and around the Ka’ba reached 360, including Lat, Manat, and Uzza. These idols were respected by all tribes. There were idols in many houses too.

Actually, the Arabs of the Age of Ignorance accepted the presence of a higher God known as "Allah." Although they mainly worshipped idols, they believed “Allah” to be the creator. Idols were seen as go-betweens (mediators). Oddly enough they did not believe in the Resurrection and Afterlife. Before Islam, stones were placed in front of the Ka’ba and people worshipped in groups.

No doubt, pilgrimage to the Ka’ba was the most popular and common form of worship. Every tribe walked around the Ka’ba during the pilgrimage season, when fighting was forbidden and disputes between the tribes ended. They stopped in front of their own gods, offered a prayer, and bowed respectfully. Walking around the Ka’ba was generally performed naked to symbolize purification from sins.

Superstitious beliefs also dominated Arab life. Pre-Islamic Arabs thought the gods talked through kahins (soothsayers) and poets who had godly guidance and could predict the future. Before doing anything, people sought omens.`,
    vocabulary: [
      { word: 'idolatrous', definition: 'Connected with worshipping idols.' },
      { word: 'Hanif', definition: 'A person who followed the religion of Abraham before Islam.' },
      { word: 'mediator', definition: 'A go-between.' },
      { word: 'Resurrection', definition: 'Being raised again after death.' },
      { word: 'omen', definition: 'A sign believed to show what will happen in the future.' },
    ],
    hotspots: [
      { id: 'h12-1', x: 34, y: 44, title: 'Idolatry', description: 'In Mecca there were some Hanifs who believed in the religion of Abraham (as), but idolatry was dominant.' },
      { id: 'h12-2', x: 68, y: 50, title: 'Hanifs', description: "Actually, the Arabs of the Age of Ignorance accepted the presence of a higher God known as 'Allah.' Although they mainly worshipped idols, they believed 'Allah' to be the creator." },
    ],
  },
  {
    id: 13,
    type: 'story',
    title: 'Islam and a New Society',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch13-clean.png?alt=media&token=19751d63-7e73-4f88-a3a8-f910cd30fbaf',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F12_Chapter_13_Islam_and_a_New_Society.mp3?alt=media&token=b9c326a7-d4f9-4f61-ba21-2b1471f84319',
    content: `Politics, economics, and religion are three interconnected areas. Religion and beliefs determine every aspect of life. So, it is understandable that Islam faced opposition from both politically and economically powerful groups in Mecca. From the start, Islam showed that this was a new group. Islam made this new Muslim community different from, and better than, the people around them.

The aristocracy provoked the public against the new religion. The leaders of the Quraysh viewed Islam as a threat to their authority. The wealth they got through trade, as well as the respect they had from other tribes, made the Quraysh the leaders of their region. They were serving as the prestigious caretakers of the pilgrimage in the Arabian Peninsula. Protecting this status and unity was very important to them.

The first people who heard the Prophet's call, which began in 610, were the Quraysh tribe of Mecca. Some of the Quraysh responded positively to his call and became Muslims. When they heard the Prophet Muhammad (as) read the Quran, they were sure it was from Allah. This message totally changed them. It touched their hearts and minds, making them cry and feel deep respect, even causing their hair to stand on end. However, a large group led by the tribal leaders denied his prophethood and opposed him fiercely.`,
    vocabulary: [
      { word: 'interconnected', definition: 'Connected with each other.' },
      { word: 'opposition', definition: 'Resistance against something.' },
      { word: 'authority', definition: 'Power or right to control.' },
      { word: 'prestigious', definition: 'Respected and admired.' },
      { word: 'prophethood', definition: 'The mission and status of being a prophet.' },
    ],
    hotspots: [
      { id: 'h13-1', x: 34, y: 44, title: 'Opposition', description: 'It is understandable that Islam faced opposition from both politically and economically powerful groups in Mecca.' },
      { id: 'h13-2', x: 68, y: 50, title: 'New Community', description: 'From the start, Islam showed that this was a new group. Islam made this new Muslim community different from, and better than, the people around them.' },
    ],
  },
  {
    id: 14,
    type: 'story',
    title: 'Quraysh and Power',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch14-clean.png?alt=media&token=b1c0b32e-d535-4f94-81c1-90d5eca7d63b',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F13_Chapter_14_Quraysh_and_Power.mp3?alt=media&token=e8232cda-fcbb-4cf3-82f6-5222960f9009',
    content: `The population of Mecca, where the Prophet (as) taught Islam for 13 years, was between 5,000 and 10,000. In the first few years of the call to Islam, there was almost no one from Mecca’s super-rich among the 46 people who became Muslims. Many of the first Muslims were the poor and the slaves. Prophet Muhammad (as) mentioned Allah’s infinite Mercy, Wisdom, Goodness and Power. This filled their hearts with joy and hope.

The upper class of the city, whose survival depended on the existing order, refused to accept the rise of a new formation and opposed it violently.

Indeed, almost none of the tribal leaders had accepted Islam. Although the leading figures of the Quraysh were not always extremely wealthy, they were prominent figures within the Quraysh, like Abu Talib.

The new belief system was introducing radical changes in every area. For instance, the Quraysh considered usury to be lawful and said, “Trade is like usury.” The Quran, however, distinguishes between usury and trade; it emphasizes that trade is halal (lawful) while usury is haram (unlawful). These people, who saw themselves as superior to others because of their wealth, ignored the Quran’s commands to be fair to the poor, to pay zakat, and to give alms as ways to purify their wealth.

Maintaining their leadership position was of vital importance to the leaders of the Quraysh. The Quraysh were saying, “Muhammad is trying to gain the upper hand over us; he wants us to obey him and become the ultimate authority over us. Never obey him.”`,
    vocabulary: [
      { word: 'super-rich', definition: 'Extremely wealthy people.' },
      { word: 'formation', definition: 'A newly formed group or structure.' },
      { word: 'radical', definition: 'Major and fundamental.' },
      { word: 'lawful', definition: 'Allowed by law or religion.' },
      { word: 'leadership position', definition: 'A position of authority and control.' },
    ],
    hotspots: [
      { id: 'h14-1', x: 34, y: 44, title: 'First Muslims', description: 'In the first few years of the call to Islam, there was almost no one from Mecca’s super-rich among the 46 people who became Muslims. Many of the first Muslims were the poor and the slaves.' },
      { id: 'h14-2', x: 68, y: 50, title: 'Power', description: 'Maintaining their leadership position was of vital importance to the leaders of the Quraysh.' },
    ],
  },
  {
    id: 15,
    type: 'story',
    title: 'Opposition to the New Faith',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch15-clean.png?alt=media&token=8cf5995d-ea53-41d0-991b-b5c4d4e7099f',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F14_Chapter_15_Opposition_to_the_New_Faith.mp3?alt=media&token=bcc84aa4-8c72-43b3-8f3c-7ea4bef502f6',
    content: `Because they knew that the Prophet’s call to monotheism—which rejected oppression, injustice, exploitation, and usury—would eventually bring them face to face with people who carried out these practices.

Pagan Meccan leaders tried various methods to prevent the new faith from growing stronger. At first, they mocked just the new religion. When the Prophet (as) passed by the places where the disbelievers were sitting, they would point and laugh at him and say, “The son of the family of Abdulmuttalib is bringing news from heaven!”

However, when the Quran began to speak ill of their idols, mock them, and announce that they and their idols would be fuel for Hell, they began to oppose him fiercely. Poor people or those without powerful protectors suffered the most. One of them was Bilal, an Abyssinian slave. He became one of the first believers in Islam. His master, Umayya b. Halef, often took him out in the hot midday sun. He put a heavy rock on Bilal's chest and ordered him to give up his religion.

The Meccan elites went further and imposed a social and economic boycott on the Muslims and those who protected the Prophet (as) between 617 and 620. During this period the Prophet (as), his wife Khadija, and Abu Talib spent all their wealth to support the Muslims. Some people died of starvation; there were even those who ate tree leaves. The cries of children dying of hunger began to be heard.`,
    vocabulary: [
      { word: 'monotheism', definition: 'Belief in one God only.' },
      { word: 'exploitation', definition: 'Using people unfairly for benefit.' },
      { word: 'mock', definition: 'To laugh at someone or something cruelly.' },
      { word: 'boycott', definition: 'Refusing social or economic contact as a form of pressure.' },
      { word: 'starvation', definition: 'Extreme suffering or death from lack of food.' },
    ],
    hotspots: [
      { id: 'h15-1', x: 34, y: 44, title: 'Bilal', description: 'Poor people or those without powerful protectors suffered the most. One of them was Bilal, an Abyssinian slave. He became one of the first believers in Islam.' },
      { id: 'h15-2', x: 68, y: 50, title: 'Boycott', description: 'The Meccan elites went further and imposed a social and economic boycott on the Muslims and those who protected the Prophet (as) between 617 and 620.' },
    ],
  },
  {
    id: 16,
    type: 'story',
    title: 'Hostility and Tribal Fanaticism',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch16-clean.png?alt=media&token=b1e6af30-1c11-4af9-9feb-24c72b475a82',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F15_Chapter_16_Hostility_and_Tribal_Fanaticism.mp3?alt=media&token=c6663b4a-f94a-4314-82a0-adaba9132a23',
    content: `One of the main reasons for the Quraysh's hostility toward the Prophet Muhammad (as) was the Quran’s demand that they abandon their old false religions about which they boasted at every opportunity. The other was the Quran’s call for them to worship a single Allah.

The rejection of idols meant, for the Quraysh, the end of the trade on which they depended for their wealth. Leaders who built their authority on idols would lose both their political and economic influence if they lost their idols.

They also refused to believe that they would face punishment in the afterlife for their sins. It was too much for them to think that they would be judged for oppressing people, gaining money through unjust means, as well as for drinking alcohol and every kind of evil.

As mentioned above, one of the characteristics of Arab society was tribal fanaticism. This was also one of the greatest barriers for the new religion. A tribal member could not show the courage to step outside the views of his tribe. Otherwise, he would be left unprotected by his tribe—which, in today’s terms, means being stateless and falling into a defenseless situation. The leaders in Mecca tried everything to stop the new Muslims. Because of this, the "freedom of choice" that Islam talked about could not work at that time.`,
    vocabulary: [
      { word: 'hostility', definition: 'Strong opposition or hatred.' },
      { word: 'abandon', definition: 'To leave or give up something.' },
      { word: 'afterlife', definition: 'Life after death.' },
      { word: 'tribal fanaticism', definition: 'Extreme loyalty to one’s tribe even when it is wrong.' },
      { word: 'stateless', definition: 'Without the protection of a state or political group.' },
    ],
    hotspots: [
      { id: 'h16-1', x: 34, y: 44, title: 'Idols', description: 'The rejection of idols meant, for the Quraysh, the end of the trade on which they depended for their wealth. Leaders who built their authority on idols would lose both their political and economic influence if they lost their idols.' },
      { id: 'h16-2', x: 68, y: 50, title: 'Tribal Fanaticism', description: 'One of the characteristics of Arab society was tribal fanaticism. This was also one of the greatest barriers for the new religion.' },
    ],
  },
  {
    id: 17,
    type: 'story',
    title: 'Islam Against Ignorance',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch17-clean.png?alt=media&token=9f4bf51b-6a79-4142-9b0b-4e459a1bd924',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F16_Chapter_17_Islam_Against_Ignorance.mp3?alt=media&token=e8e480f8-ffa4-4552-a463-7077542898a4',
    content: `For example, Abu Jahl, one of the leading figures of opposition to Islam, strongly rejected Islam and led his tribe in the same direction. The Quraysh were saying that Islam broke up families and because of this, the Quraysh lost power. When the Quraysh leaders blamed the Prophet, they said, “You have destroyed our unity.”

In Mecca, which was a place of oppression, injustice, and immorality before Islam, the Prophet (as) called upon people to follow justice and morality. At the heart of Islam is human honor and dignity. Islam respects humans as humans. All other differences are not important to Islam. Whether they are slaves, women, poor, or the weak, they all deserve respect.

The Age of Ignorance was the opposite of Islam. The term both refers to pre-Islamic Arabia and also describes any culture, society or way of thinking that comes from human arrogance. On the other hand, Islam is all about making the world a more fair and peaceful place.

The dreadful situation in the twenty-first century reminds us of the dark period of ignorance in seventh-century Mecca. So, the Age of Ignorance is not only a past time but also a culture that is still valid. Islam has always stood against it and will continue to do so.`,
    vocabulary: [
      { word: 'opposition', definition: 'Resistance against something.' },
      { word: 'oppression', definition: 'Cruel and unfair treatment.' },
      { word: 'immorality', definition: 'Behavior that is morally wrong.' },
      { word: 'human honor', definition: 'The dignity and value of every human being.' },
      { word: 'arrogance', definition: 'Pride that makes someone feel superior to others.' },
    ],
    hotspots: [
      { id: 'h17-1', x: 34, y: 44, title: 'Human Honor', description: 'At the heart of Islam is the human being and his honor. Islam respects humans as humans. All other differences are not important to Islam.' },
      { id: 'h17-2', x: 68, y: 50, title: 'Against Ignorance', description: 'The Age of Ignorance was the opposite of Islam. ... On the other hand, Islam is all about making the world a more fair and peaceful place.' },
    ],
  },
  {
    id: 18,
    type: 'quiz',
    title: 'Knowledge Check: Mecca and the Transregional Context - B2',
    image: '',
    audioUrl: '',
    content: 'Test your understanding of the B2 content on Mecca, global geopolitics, socioeconomic systems, and spiritual currents through these advanced true-false exercises.',
  },
  {
    id: 19,
    type: 'exercises',
    title: 'Final Review & Reflection',
    image: '',
    content: 'Complete these analytical exercises to synthesize the historical, socio-political, and religious dynamics of pre-Islamic Mecca.',
  },
  {
    id: 20,
    type: 'glossary',
    title: 'B2 Master Glossary - Part 1',
    content: 'Advanced academic vocabulary and socio-political terminology from the first half of the text.',
    image: '',
    vocabulary: [
      { word: 'Jahiliyyah', definition: 'The state of spiritual, moral, and social ignorance and disorder preceding the rise of Islam.' },
      { word: 'hegemony', definition: 'The political, economic, or military predominance or leadership of one state or group over others.' },
      { word: 'Byzantine', definition: 'The Eastern Roman Empire, which acted as a major superpower surrounding northern Arabia.' },
      { word: 'Sassanid', definition: 'The neo-Persian Empire, the main rival of Byzantium, bordering eastern Arabia.' },
      { word: 'sedentary', definition: 'A settled way of life, characteristic of city-dwellers, contrasted with nomadic pastoralists.' },
      { word: 'nomadic', definition: 'A roaming lifestyle moving from pasture to pasture without permanent settlement.' },
      { word: 'monotheism', definition: 'The belief in and worship of a single, omnipotent, transcendent Creator.' },
      { word: 'oligarchy', definition: 'A small group of wealthy, powerful elites running the political and social affairs of a city.' },
      { word: 'lucrative', definition: 'Highly profitable trade, business, or commercial activities.' },
      { word: 'customary', definition: 'According to the traditional practices, common law, and deep-seated tribal habits of a society.' },
      { word: 'metropolis', definition: 'A large, densely populated, and economically active urban hub or city.' },
      { word: 'pilgrimage', definition: 'A religious journey to a sacred sanctuary or temple; a key source of prestige for Mecca.' },
    ],
  },
  {
    id: 21,
    type: 'glossary',
    title: 'B2 Master Glossary - Part 2',
    content: 'Advanced academic vocabulary and theological concepts from the second half of the text.',
    image: '',
    vocabulary: [
      { word: 'usury', definition: 'The exploitative practice of lending money at exorbitant, compounding interest rates.' },
      { word: 'alliance', definition: 'A formal agreement between tribes, clauses, or states to defend one another.' },
      { word: 'boycott', definition: 'A punitive ban on social, commercial, and political relations with a targeted group.' },
      { word: 'sanctuary', definition: 'A sacred area where acts of violence, warfare, and tribal retribution are strictly forbidden.' },
      { word: 'venerated', definition: 'Highly respected, honored, and worshipped as sacred.' },
      { word: 'stewardship', definition: 'The responsible custody and care of a sacred place, resource, or society.' },
      { word: 'jurisdiction', definition: 'The official power to make legal decisions and enforce social rules.' },
      { word: 'lineage', definition: 'Direct ancestry and ancestral pedigree; the primary determinant of status in tribal society.' },
      { word: 'prestige', definition: 'High reputation, influence, or status earned through wealth, leadership, or lineage.' },
      { word: 'equality', definition: 'The prophetic principle that all humans have equal value, regardless of race, class, or origin.' },
      { word: 'tribalism', definition: 'Extreme loyalty to one’s tribe, placing tribal survival and pride above universal justice.' },
      { word: 'revelation', definition: 'The sending down of divine wisdom, commands, and guidance from Allah to His prophets (vahiy).' },
    ],
  },
  {
    id: 22,
    type: 'final-challenge',
    title: 'B2 Final Challenge',
    content: 'Demonstrate your deep mastership of the pre-Islamic Mecca historical and social systems at the B2 level.',
    image: '',
  },
];

const STORY_IDS = new Set(Array.from({ length: 17 }, (_, index) => index + 1));
export const meccaB2VocabIndexes: Record<number, number[]> = {
  1:[0,1,2,3,4,6], 2:[0,1,2,3,4,9], 3:[0,1,2,3,4], 4:[0,1,2,4,5],
  5:[0,1,2,3,4,5], 6:[0,1,2,3,4,5], 7:[0,1,2,3,4,6], 8:[0,1,2,3,8,9],
  9:[1,2,3,5,7,8], 10:[0,1,2,3,4,6], 11:[0,1,2,4,5,6], 12:[0,1,2,3,4],
  13:[0,1,2,3,4], 14:[0,1,2,3,4], 15:[0,1,2,3,4], 16:[0,1,2,3,4], 17:[0,1,2,3,4],
};
const EN_WORD_OVERRIDES: Record<number, Record<string, string>> = {
  1:{ superpower:'superpowers' },
  5:{ caravan:'caravans', boost:'boosting', merchant:'merchants' },
  6:{ 'trade festival':'trade festivals' },
  7:{ capitalist:'capitalists' },
  8:{ orphan:'orphans' },
  10:{ ancestor:'ancestors' },
  12:{ Hanif:'Hanifs', mediator:'mediators', omen:'omens' },
};
export const meccaB2HotspotCoords: Record<number, [number, number, number, number]> = {
  1:[24,38,73,62], 2:[29,65,74,34], 3:[23,58,69,31], 4:[31,36,76,64], 5:[22,67,67,39],
  6:[27,32,72,68], 7:[25,55,78,35], 8:[32,70,70,42], 9:[21,43,75,66], 10:[30,29,69,61],
  11:[26,64,77,37], 12:[23,35,71,70], 13:[33,57,76,30], 14:[20,69,68,41], 15:[28,40,74,65],
  16:[24,61,79,33], 17:[31,34,70,68],
};
const EN_DEFINITION_OVERRIDES: Record<string, string> = {
  superpower:'A state with enough political, military, and economic influence to shape events far beyond its own borders.',
  rivalry:'Sustained competition between powers seeking greater influence, advantage, or control.',
  'political unity':'The condition in which separate groups operate under a shared political authority or governing structure.',
  revelation:'Divine guidance communicated by Allah to a prophet.',
  conquest:'The acquisition of control over a territory through military force.',
  barbarism:'A condition characterized by severe violence, cruelty, and the breakdown of civilized restraint.',
  oppressed:'Subjected to persistent unjust treatment or control by a more powerful person or group.',
  'moral decline':'A deterioration in the ethical standards and conduct expected within a society.',
  civilized:'Organized according to developed social institutions, norms, and forms of public order.',
  reconstruct:'To build or form something again after it has been damaged, lost, or altered.',
  pilgrimage:'A journey made to a sacred place for religious purposes.',
  idolatry:'The religious practice of worshipping idols or treating them as objects of devotion.',
  extensive:'Large in scale, range, or degree.',
  usury:'The practice of lending money on exploitative or religiously prohibited interest terms.',
  aristocracy:'A socially dominant upper class whose status is based on wealth, lineage, or inherited influence.',
  capitalist:'A person who owns or controls capital and uses it to generate profit.',
  defenseless:'Lacking sufficient means, power, or protection to resist harm or exploitation.',
  righteous:'Morally upright and committed to justice or correct conduct.',
  humiliation:'A state of being made to feel degraded or stripped of dignity.',
  institution:'An established social, economic, religious, or political structure with an organized role in society.',
  tribalism:'Strong loyalty to one’s tribe that can override broader principles of fairness or universal justice.',
  mediator:'A person or intermediary positioned between two parties to facilitate contact or influence.',
  interconnected:'Linked so that changes in one area affect or depend on developments in another.',
  authority:'The recognized power or right to command, decide, or govern.',
  prestigious:'Associated with high social respect, influence, or status.',
  prophethood:'The divinely appointed mission and status of a prophet.',
  radical:'Producing or involving fundamental change to an existing system or structure.',
  exploitation:'The unfair use of people, labor, or resources for another party’s advantage.',
  boycott:'An organized refusal of social or economic relations used to exert pressure on a person or group.',
  starvation:'Severe deprivation caused by an extreme or prolonged lack of food.',
  hostility:'Strong and active opposition, often involving resentment or aggression.',
  'tribal fanaticism':'Extreme loyalty to tribal identity that suppresses independent judgment and can justify injustice.',
  stateless:'Lacking the recognized protection and legal belonging normally provided by a political community or state.',
  oppression:'Systematic cruel or unjust treatment imposed by those with greater power.',
  immorality:'Conduct that violates accepted moral principles or ethical standards.',
  'human honor':'The inherent dignity and moral worth that belongs to every human being.',
  arrogance:'An exaggerated sense of superiority that leads a person to undervalue others.',
};
const EN_FIXES: Record<number, [string, string][]> = {
  2:[["widely did not have justice, order, and peace", "did not widely have justice, order, and peace"]],
  3:[["Medina, He (pbuh) said", "Medina, he (pbuh) said"]],
  7:[["Due to the big money ownership in the hands of certain individuals", "Due to the concentration of money in the hands of certain individuals"]],
  11:[["poets praised conflict rather than peace and war instead of peace", "poets praised conflict and war rather than peace"]],
  15:[["Because they knew that the Prophet’s call to monotheism", "They knew that the Prophet’s call to monotheism"]],
  17:[["a more fair and peaceful place", "a fairer and more peaceful place"],["not only a past time", "not only a past era"]],
};
const fixText=(text:string,fixes?:[string,string][]) => (fixes??[]).reduce((value,[from,to])=>value.replace(from,to),text);
const standardizeEnglishPage=(page:PageData):PageData=>{
  if(!STORY_IDS.has(page.id)) return page;
  const vocabulary=(meccaB2VocabIndexes[page.id]??[]).map(index=>page.vocabulary?.[index]).filter((item):item is NonNullable<PageData['vocabulary']>[number]=>Boolean(item)).map(item=>({
    ...item,
    word:EN_WORD_OVERRIDES[page.id]?.[item.word]??item.word,
    definition:EN_DEFINITION_OVERRIDES[item.word]??item.definition,
  }));
  const c=meccaB2HotspotCoords[page.id];
  const hotspots=(page.hotspots??[]).slice(0,2).map((hotspot,index)=>({...hotspot,id:`h${page.id}-${index+1}`,x:c[index*2],y:c[index*2+1]}));
  return {...page,content:fixText(page.content??'',EN_FIXES[page.id]),vocabulary,hotspots};
};
const standardizedMeccaB2Pages=sourceMeccaB2Pages.map(standardizeEnglishPage);
const englishLanguageFocus:Record<number,Exercise[]>={...meccaB2LanguageFocusExercises,...meccaB2LanguageFocusExercisesPart2,...meccaB2LanguageFocusExercisesPart3,...meccaB2LanguageFocusExercisesPart4};

const knowledgeFeedbackEn={correct:'Correct. Your answer is supported by the story evidence.',incorrect:'Not yet. Return to the relevant chapter, find the evidence, and try again.'};
const knowledgeMcEn=(id:string,question:string,options:string[],correctAnswer:number,explanation:string):Exercise=>({id,type:'multiple-choice',title:'Knowledge Check',instructions:'Choose the best answer supported by the story.',question,options,correctAnswer,explanation,feedback:knowledgeFeedbackEn});
const meccaB2ManualKnowledgeCheckExercises:Exercise[]=[
  knowledgeMcEn('me-b2-mk1','What detail does the book use to show the scale of Quraysh long-distance trade?',['The annual summer and winter caravans could include up to 2,500 camels','Every caravan consisted of exactly ten camels','Trade was limited to goods carried by individual travelers'],0,'Chapter 5 says the annual summer and winter journeys could use caravans numbering up to 2,500 camels, illustrating the scale of organized trade.'),
  knowledgeMcEn('me-b2-mk2','Which pair correctly reflects two destinations or connections in Quraysh trade?',['Egypt was an important caravan destination, while Abyssinia was connected by sea','Constantinople was the only destination and sea trade did not exist','All trade remained inside the Arabian Peninsula'],0,'Chapter 5 identifies Egypt as an important destination and describes maritime trade relations with Abyssinia.'),
  knowledgeMcEn('me-b2-mk3','Besides high lending rates, what behaviors does the social-class chapter say also pushed people into debt?',['Drinking and gambling','Pilgrimage and prayer','Poetry and genealogy'],0,'Chapter 7 adds that widespread drinking and gambling were among the reasons people repeatedly fell into debt.'),
  knowledgeMcEn('me-b2-mk4','How old was Prophet Muhammad (as) when he attended the meeting connected with Hilfü’l-Fudûl?',['Twenty years old','Forty years old','Fifty-two years old'],0,'Chapter 8 states that Prophet Muhammad (as) was twenty years old when he attended the meeting that formed Hilfü’l-Fudûl.'),
  knowledgeMcEn('me-b2-mk5','Why did the chapter say many tribes placed special value on having male children?',['Physical fighting strength and the resulting tribal protection and prestige were highly valued','Only sons were allowed to participate in trade fairs','Male children were required for pilgrimage'],0,'Chapter 10 connects the value placed on sons with physical strength, fighting capacity, tribal protection and respect among tribes.'),
  knowledgeMcEn('me-b2-mk6','Which statement is directly supported by the chapter on slavery?',['Slaves were treated as economic property and could also serve as displays of wealth or protection in war','Slavery had no economic role in Mecca','Slaves were described as the city’s most politically powerful class'],0,'Chapter 11 describes slavery as an economic institution and says enslaved people were used for labor, personal service, displays of wealth and protection in war.'),
  knowledgeMcEn('me-b2-mk7','Which practice does the religious-life chapter describe alongside pilgrimage and idol worship?',['People sought omens before taking action','People rejected every form of pilgrimage','Soothsayers were forbidden from making predictions'],0,'Chapter 12 says superstitious beliefs were widespread and that people sought omens before doing things.'),
  knowledgeMcEn('me-b2-mk8','What economic distinction does the Quraysh-and-power chapter say the Quran introduced?',['Trade is lawful while usury is unlawful','Both trade and usury are unlawful','Usury is lawful while trade is unlawful'],0,'Chapter 14 contrasts the Quraysh view of usury with the Quranic distinction that trade is lawful and usury is unlawful.'),
];
const finalFeedbackEn={correct:'Correct. Your answer synthesizes evidence from across the book.',incorrect:'Not yet. Reconnect the relevant chapters and distinguish the relationship being tested.'};
const finalReplacementEn:Record<string,Exercise>={
  'me-b2-f6':{id:'me-b2-f6',type:'matching',title:'Final Challenge',instructions:'Match each institution with the broader role it plays in the book.',question:'How do different institutions create, protect, or challenge power?',matchingPairs:[{left:'Sacred months',right:'Create safer movement that supports pilgrimage and fairs'},{left:'Tribal protection',right:'Provides security but can pressure individual conformity'},{left:'Hilfü’l-Fudûl',right:'Organizes practical resistance to injustice against vulnerable people'},{left:'Poetry as tribal media',right:'Shapes public memory, praise, blame and group identity'}],correctAnswer:{'Sacred months':'Create safer movement that supports pilgrimage and fairs','Tribal protection':'Provides security but can pressure individual conformity','Hilfü’l-Fudûl':'Organizes practical resistance to injustice against vulnerable people','Poetry as tribal media':'Shapes public memory, praise, blame and group identity'},explanation:'The book compares institutions that create security, social pressure, justice and cultural influence rather than treating power as only political office.',feedback:finalFeedbackEn},
  'me-b2-f7':{id:'me-b2-f7',type:'matching',title:'Final Challenge',instructions:'Match each group with the evidence that most carefully qualifies a broad claim.',question:'Which evidence prevents one-dimensional descriptions of Meccan society?',matchingPairs:[{left:'Women before Islam',right:'Experiences varied by tribe and social status, although many lower-status women were severely disadvantaged'},{left:'Pre-Islamic Arabs',right:'Hospitality and Hilfü’l-Fudûl existed alongside serious injustice and tribal competition'},{left:'Quraysh leaders',right:'Prominence depended on status and the existing order, not simply identical levels of wealth'},{left:'Early Muslims',right:'Many vulnerable people joined despite strong pressure from established elites'}],correctAnswer:{'Women before Islam':'Experiences varied by tribe and social status, although many lower-status women were severely disadvantaged','Pre-Islamic Arabs':'Hospitality and Hilfü’l-Fudûl existed alongside serious injustice and tribal competition','Quraysh leaders':'Prominence depended on status and the existing order, not simply identical levels of wealth','Early Muslims':'Many vulnerable people joined despite strong pressure from established elites'},explanation:'B2 mastery requires qualified claims that preserve variation, contradiction and social position.',feedback:finalFeedbackEn},
  'me-b2-f8':{id:'me-b2-f8',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the whole-book synthesis with the key concept.',question:'Complete the systems relationship.',fillBlanksText:'Across the book, sacred prestige, trade wealth, tribal protection and political [blank] repeatedly reinforce one another.',correctAnswer:'authority',explanation:'The later chapters make authority a central link between economic prestige, religious status and political leadership.',feedback:finalFeedbackEn},
  'me-b2-f9':{id:'me-b2-f9',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the concluding synthesis with the chapter’s own ethical language.',question:'Complete the broader meaning of Jahiliyyah.',fillBlanksText:'The conclusion treats Jahiliyyah not only as a past era but as a recurring culture shaped by human [blank], oppression and unequal worth.',correctAnswer:'arrogance',explanation:'The final chapter explicitly extends Jahiliyyah beyond one period and connects it with human arrogance, oppression and moral disorder.',feedback:finalFeedbackEn}
};
const meccaB2FinalChallengeExercisesPolished=meccaB2FinalChallengeExercises.map(exercise=>finalReplacementEn[exercise.id]??exercise);

const attachEnglishLearning=(pages:PageData[]):PageData[]=>pages.map(page=>{
  if(STORY_IDS.has(page.id)){
    const languageFocusExercises=englishLanguageFocus[page.id];
    return {...page,type:'story',exercises:meccaB2QuickChallenges[page.id]?[meccaB2QuickChallenges[page.id]]:[],...(languageFocusExercises?{languageFocusExercises}:{})};
  }
  if(page.id===18) return {...page,type:'quiz',exercises:meccaB2ManualKnowledgeCheckExercises};
  if(page.id===19) return {...page,type:'exercises',title:'B2 Language Review',content:'Review and use the qualification, cause-result, contrast, condition, information-focus and discourse patterns developed across all seventeen chapters.',exercises:meccaB2LanguageReviewExercises};
  if(page.id===20) return {...page,type:'vocabulary-match',vocabularyPairs:meccaB2VocabularyChallengePairs};
  if(page.id===22) return {...page,type:'final-challenge',exercises:meccaB2FinalChallengeExercisesPolished};
  return page;
});
export const meccaB2Pages:PageData[]=attachEnglishLearning(standardizedMeccaB2Pages);
export const meccaB2TeacherGuideMetadataPolished:TeacherGuideMetadata={
  ...meccaB2TeacherGuideMetadata,
  targetLearners:'B2 learners ready to analyse historical relationships, qualify claims, and defend interpretations with evidence.',
  approachDesc:'Read and listen for evidence first; analyse causes, systems and qualifications second; produce claim-evidence-explanation responses third.',
  readingFramework:{
    before:'Predict one relationship from the title and image, but mark it as unproven until the chapter supplies evidence.',
    during:'Track direct facts, cause-effect links, contrasts and qualification words. Use the supplied audio to verify wording rather than inventing context.',
    after:'Complete the Quick Challenge, identify the exact supporting evidence, then produce a short analytical or transfer response.'
  },
  globalCitizenship:{
    title:'Justice, dignity and responsible belonging',
    description:'Use the Mecca chapters to examine fair economic conduct, protection of vulnerable people, accurate representation of beliefs, and group loyalty that does not excuse injustice.',
    themes:[
      {title:'Economic fairness',description:'Evaluate financial systems by their effects on people with less power.'},
      {title:'Human dignity',description:'Connect the story’s treatment of weak, poor, enslaved and socially disadvantaged people with equal human worth.'},
      {title:'Responsible belonging',description:'Distinguish supportive community ties from tribal pressure that suppresses moral choice.'}
    ],
    actions:[
      'Challenge an unfair transaction with evidence and respectful procedure rather than humiliation.',
      'Use qualified language when describing another group’s beliefs or social conditions.',
      'Support a person facing exclusion without turning the response into status competition.'
    ]
  },
  valuesEducation:{
    title:'Values as action',
    description:'Values are demonstrated through observable choices linked to chapter evidence.',
    items:[
      {label:'Justice',value:'Move from recognizing unfairness to a fair, nonviolent response, as the Hilfü’l-Fudûl chapter illustrates.'},
      {label:'Dignity',value:'Refuse to rank human worth by wealth, gender, freedom status or tribal protection.'},
      {label:'Integrity',value:'Keep interpretations inside the limits of the source instead of exaggerating for effect.'}
    ],
    questions:['What action would make this value visible?','Which chapter evidence supports that action?'],
    actions:['Name the unfair mechanism.','Identify who is most vulnerable.','Choose a proportionate, respectful corrective action.']
  },
  homeConnection:{
    title:'Evidence conversation at home',
    items:['Choose one chapter claim and explain its evidence in two minutes.','Ask a family member for an alternative interpretation, then check whether the story supports it.']
  }
};
