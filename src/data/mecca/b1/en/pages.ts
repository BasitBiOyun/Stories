import type { PageData } from '../../../../types';

const story = (
  id: number,
  title: string,
  image: string,
  audioUrl: string,
  content: string,
  vocabulary: { word: string; definition: string }[],
  hotspots: { id: string; x: number; y: number; title: string; description: string }[],
): PageData => ({ id, type: 'story', title, image, audioUrl, content, vocabulary, hotspots });

// Canonical Mecca B1 story prose + real media + bilingual Word Notes + hotspots.
// Learning activities are attached in ../index.ts.
export const meccaB1Pages: PageData[] = [
  story(1, 'The City and the Age',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch1-clean.png?alt=media&token=e13d2444-ea46-44d8-8170-383aef833b68',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F00_Chapter_1.mp3?alt=media&token=32fccb2c-133f-404e-9e6e-dab63c05bd13',
    `Islam started in the 7th century in the city of Mecca. The period before Islam was called the Age of Ignorance, or Jahiliyyah, because religious and social disorder was common in society. Life was hard and chaotic. There was no central government in Arabia, and tribes were the basis of society.

Before Islam, Mecca was led by a council of rich merchants. For this reason, the city was known as the Republic of Merchants. Powerful people controlled many parts of life, while poor and weak people lived in misery.

Society was not fair, and people from poor backgrounds were often treated badly. The Quran describes this period as a time of ignorance and cruelty. Violence, hatred, and fighting were common in the social life of the time.`,
    [
      { word: 'Jahiliyyah', definition: 'The period before Islam described in the story as the Age of Ignorance.' },
      { word: 'chaotic', definition: 'Very disordered and difficult to control.' },
      { word: 'central government', definition: 'One main authority that governs a country or region.' },
      { word: 'misery', definition: 'Great suffering or unhappiness.' },
      { word: 'cruelty', definition: 'Behavior that causes pain or suffering without kindness.' },
    ],
    [
      { id: 'mecca-b1-en-1-1', x: 31, y: 39, title: 'Mecca', description: 'Islam started in the 7th century in the city of Mecca.' },
      { id: 'mecca-b1-en-1-2', x: 70, y: 61, title: 'Republic of Merchants', description: 'Mecca was led by a council of rich merchants and was known as the Republic of Merchants.' },
    ]
  ),
  story(2, 'The Age of Ignorance',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch2-clean.png?alt=media&token=30b4e38f-3e89-4444-a124-90d27e776d87',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F01_Chapter_2_The_Age_of_Ignorance.mp3?alt=media&token=294fb1a4-f413-4f58-b941-8e85e7e710c5',
    `The Jahiliyyah was an age of barbarism. People did not truly know Allah, and many people did not have justice, order, and peace in their personal and social lives. Prophet Muhammad (as) described Islam as the opposite of barbarism. This era ended when the first revelation of the Quran began in 610 CE.

To understand the Jahiliyyah period, we must first talk about Mecca. Mecca is the holy city of Islam. Allah chose this city to be the location of His House, the Holy Ka’ba.

Prophet Muhammad (as) was also born in Mecca. He spent 52 years of his life in this city and began to teach the message of Islam here. The Qiblah, the direction Muslims face during salah, is also located in Mecca.`,
    [
      { word: 'barbarism', definition: 'Cruel and uncivilized behavior.' },
      { word: 'revelation', definition: 'A message revealed by Allah to a prophet.' },
      { word: 'holy city', definition: 'A city with special religious importance.' },
      { word: 'Ka’ba', definition: 'The sacred House of Allah in Mecca.' },
      { word: 'Qiblah', definition: 'The direction Muslims face during salah.' },
    ],
    [
      { id: 'mecca-b1-en-2-1', x: 37, y: 64, title: 'Revelation', description: 'The Jahiliyyah era ended when the first revelation of the Quran began in 610 CE.' },
      { id: 'mecca-b1-en-2-2', x: 66, y: 34, title: 'The Holy Ka’ba', description: 'Allah chose Mecca to be the location of His House, the Holy Ka’ba.' },
    ]
  ),
  story(3, 'The Beginning of Mecca',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch3-clean.png?alt=media&token=07bbbc1c-3b99-40a0-bb88-ab033468083b',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F02_Chapter_3_The_Beginning_of_Mecca.mp3?alt=media&token=cb81d6a2-ea78-4ac0-8ec4-dcce50223e2e',
    `The Quran describes Mecca as a valley where no crops grow. City life began there with the building of the Ka’ba. When Prophet Abraham (as) brought his son Ishmael (as) and his wife Hagar to the city, Zamzam water had not been discovered yet. There was no population in the land.

After the discovery of Zamzam water, the Jurhumites from Yemen settled in Mecca. Ishmael (as) learned Arabic from them. Later, when Ishmael (as) grew up, Abraham (as) came to the city to reconstruct the Holy Ka’ba with his son.

Arabs accepted the religion of Abraham (as) and Ishmael (as), so the Ka’ba became a pilgrimage site. This helped the city grow rapidly.`,
    [
      { word: 'valley', definition: 'Low land between hills or mountains.' },
      { word: 'crops', definition: 'Plants grown for food or other use.' },
      { word: 'population', definition: 'The people living in a place.' },
      { word: 'settled', definition: 'Started living permanently in a place.' },
      { word: 'pilgrimage', definition: 'A religious journey to a sacred place.' },
    ],
    [
      { id: 'mecca-b1-en-3-1', x: 27, y: 54, title: 'Zamzam', description: 'After the discovery of Zamzam water, the Jurhumites from Yemen settled in Mecca.' },
      { id: 'mecca-b1-en-3-2', x: 73, y: 35, title: 'Abraham and Ishmael', description: 'Abraham came to Mecca to reconstruct the Holy Ka’ba with his son Ishmael.' },
    ]
  ),
  story(4, 'The Ka’ba and Trade',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch4-clean.png?alt=media&token=0400d1bb-ab36-40c2-9ef7-cffe6a12887f',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F03_Chapter_4_The_Ka%E2%80%99ba_and_Trade.mp3?alt=media&token=9a4a3cd1-c263-4fa2-beb2-d96f6e78b22f',
    `After Abraham (as) completed his mission and invited people for pilgrimage, he returned to Palestine. Later, the Khuza’a tribe came to Mecca, defeated the Jurhum tribe, and took control of the city.

Under Khuza’a rule, people forgot the religion of Abraham (as) and started worshipping many idols. Later, in the 5th century, the Quraysh tribe took over the city and the Ka’ba.

Because people could not farm in this dry land, they made money through trade. When Islam began, the Byzantine and Sassanid empires were powerful states. They traded with both the north and south of Arabia. India, Indonesia, and China were also important for trade because they produced many different goods.`,
    [
      { word: 'mission', definition: 'An important task or duty.' },
      { word: 'defeated', definition: 'Won against another group in a conflict.' },
      { word: 'dry land', definition: 'Land with very little water.' },
      { word: 'farm', definition: 'To grow crops or produce food from land.' },
      { word: 'goods', definition: 'Products that are bought and sold.' },
    ],
    [
      { id: 'mecca-b1-en-4-1', x: 34, y: 31, title: 'Khuza’a Rule', description: 'The Khuza’a tribe defeated the Jurhum tribe and took control of Mecca.' },
      { id: 'mecca-b1-en-4-2', x: 69, y: 66, title: 'Trade Economy', description: 'Because people could not farm in the dry land, they made money through trade.' },
    ]
  ),
  story(5, 'The Trade Routes',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch5-clean.png?alt=media&token=18da4b35-0ee7-4077-bdb5-37bde9ae581b',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F04_Chapter_5_The_Trade_Routes.mp3?alt=media&token=236486a7-c3f0-415c-aabe-1584a1da8bb8',
    `Because Mecca was in the middle of important trade routes, it became a busy and wealthy city. From the early 6th century, Mecca became a major trading center.

Hashim ibn Abd Manaf, Prophet Muhammad’s (as) great-grandfather, helped grow Mecca’s economy. He and the Quraysh leaders made special trade agreements with other tribes and nations. These agreements allowed merchants to travel safely and trade in places like Byzantium, Yemen, Iraq, and Ethiopia.

The sacred months, Zilkade, Zilhicce, Muharram, and Rajab, made the region safer. In these months, people focused on worship, showed respect, and stayed away from fighting. Because of this safe atmosphere, more people could visit the city to make Hajj.`,
    [
      { word: 'trade routes', definition: 'Paths used to move and exchange goods between places.' },
      { word: 'wealthy', definition: 'Rich and having a lot of money or valuable things.' },
      { word: 'trade agreements', definition: 'Deals between groups that make trade possible or safer.' },
      { word: 'merchants', definition: 'People who buy and sell goods.' },
      { word: 'sacred months', definition: 'Special months in which fighting was avoided and worship was emphasized.' },
    ],
    [
      { id: 'mecca-b1-en-5-1', x: 24, y: 44, title: 'Trade Routes', description: 'Mecca became busy and wealthy because it stood in the middle of important trade routes.' },
      { id: 'mecca-b1-en-5-2', x: 76, y: 58, title: 'Sacred Months', description: 'The sacred months made the region safer for worship, travel, and Hajj.' },
    ]
  ),
  story(6, 'Fairs and Wealth',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch6-clean.png?alt=media&token=574cd4f3-a81a-4074-961c-10d20a950988',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F05_Chapter_6_Fairs_and_Wealth.mp3?alt=media&token=ae9ea402-14c7-42ce-b815-42754b5c0893',
    `Before Islam, idol worshippers continued to visit and walk around the Ka’ba. They also ran between Safa and Marwa and stood in Arafat. These practices kept Mecca active during the pilgrimage season.

This religious activity also helped business grow quickly. Big trade fairs such as Ukaz, Majannah, and Dhul-Majaz took place during this time. People attended these fairs first and then went to Arafat.

At the beginning of the 7th century, the Quraysh tribe controlled the most important trade routes and wealth in Arabia. The Quraysh traded with gold and silver coins. In the city, lending money with usury was widespread. This made the rich richer and the poor poorer.`,
    [
      { word: 'trade fairs', definition: 'Large events where people meet to buy and sell goods.' },
      { word: 'Arafat', definition: 'The place mentioned in the story as part of pilgrimage practices.' },
      { word: 'controlled', definition: 'Had power over something.' },
      { word: 'usury', definition: 'Unfair extra money charged on a loan.' },
      { word: 'widespread', definition: 'Existing among many people or in many places.' },
    ],
    [
      { id: 'mecca-b1-en-6-1', x: 39, y: 67, title: 'Trade Fairs', description: 'Large fairs such as Ukaz, Majannah, and Dhul-Majaz supported Mecca’s trade.' },
      { id: 'mecca-b1-en-6-2', x: 65, y: 32, title: 'Usury', description: 'Lending money with usury was widespread and increased the gap between rich and poor.' },
    ]
  ),
  story(7, 'Rich and Poor',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch7-clean.png?alt=media&token=a9a3fcc7-94da-405f-9142-0ca4cb17bef9',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F06_Chapter_7_Rich_and_Poor.mp3?alt=media&token=1d347a5d-ee28-40d4-8672-f9a7f85796fb',
    `Usury caused a big gap between social classes. Powerful people were usually merchants who lent money with usury. Many people were in debt and could not pay back their debts because of high interest. Drinking and gambling were also common, and these habits often pushed people deeper into debt.

While the rich lived in luxury with gold plates and silver cups, the poor struggled to survive. For the wealthy Quraysh, money and tribe were the most important values.

When Prophet Muhammad (as) started calling people to Islam, some rich leaders asked why Muhammad should be the leader while they were rich and important. Orphans and weak people were treated badly, and powerful people often took their property by force.`,
    [
      { word: 'social classes', definition: 'Groups in society divided by wealth, status, or power.' },
      { word: 'debt', definition: 'Money that a person owes and must pay back.' },
      { word: 'luxury', definition: 'A comfortable and expensive way of living.' },
      { word: 'Orphans', definition: 'Children whose parents have died.' },
      { word: 'property', definition: 'Things or possessions that belong to someone.' },
    ],
    [
      { id: 'mecca-b1-en-7-1', x: 28, y: 36, title: 'Class Gap', description: 'The rich lived in luxury while the poor struggled to survive.' },
      { id: 'mecca-b1-en-7-2', x: 72, y: 63, title: 'Weak People', description: 'Orphans and weak people were treated badly and their property could be taken by force.' },
    ]
  ),
  story(8, 'Tribal Life',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch8-clean.png?alt=media&token=9d090466-b999-4e74-8c4f-6dad15b9187a',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F07_Chapter_8_Tribal_Life.mp3?alt=media&token=ea43606e-904c-4b74-a5db-8dccccf39141',
    `Tribes were the center of Arab society. Life in the desert was very hard, so physical strength was extremely important. Men were often seen as valuable because they were fighters in wars.

To earn respect from other tribes, families wanted to have many sons. Without a tribe, people could not easily protect their lives or property. A person outside tribal protection was in great danger.

Early Arabs were highly proud of their ancestors and remembered their names carefully. The most important rule was to work for the tribe and follow it. They had to protect and honor their tribe in every situation, even when the tribe did something wrong.`,
    [
      { word: 'Tribes', definition: 'Large family or social groups with a shared identity.' },
      { word: 'physical strength', definition: 'Power of the body.' },
      { word: 'sons', definition: 'Male children.' },
      { word: 'tribal protection', definition: 'Safety provided by belonging to a tribe.' },
      { word: 'ancestors', definition: 'Family members who lived in earlier generations.' },
    ],
    [
      { id: 'mecca-b1-en-8-1', x: 35, y: 58, title: 'Tribal Protection', description: 'Without tribal protection, a person could be in great danger.' },
      { id: 'mecca-b1-en-8-2', x: 67, y: 29, title: 'Tribal Loyalty', description: 'People were expected to protect and follow their tribe even when it did something wrong.' },
    ]
  ),
  story(9, 'Women, Slavery and Poetry',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch9-clean.png?alt=media&token=e8e2cc9d-f78b-4ca5-a8d6-a4e96edd022c',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F08_Chapter_9_Women%2C_Slavery_and_Poetry.mp3?alt=media&token=82eee9ff-3413-4199-9e68-3656564216cf',
    `Before Islam, the life of Arab women was very different depending on their wealth and family. Rich women, like Khadija, could run their own businesses. However, many poor women had no rights and faced unfair treatment. Some fathers were ashamed to have daughters because they wanted sons to increase their power in society.

In old Mecca, slavery was an ordinary part of the economy. Slaves faced brutal conditions and were bought and sold like animals. They did the most difficult work, and owning many slaves was a sign of wealth.

Poets were also very important in social life. Poetry kept tribal history alive, praised tribes, and criticized enemies. In those days, poets were like the media of the people.`,
    [
      { word: 'rights', definition: 'Basic freedoms and fair treatment that people should have.' },
      { word: 'unfair treatment', definition: 'Behavior that is not just or equal.' },
      { word: 'slavery', definition: 'A system in which people are owned and forced to work.' },
      { word: 'Poets', definition: 'People who write or perform poetry.' },
      { word: 'media', definition: 'Ways of sharing news, ideas, and messages with people.' },
    ],
    [
      { id: 'mecca-b1-en-9-1', x: 23, y: 65, title: 'Status of Women', description: 'Women’s lives differed greatly according to wealth and family, and many poor women faced unfair treatment.' },
      { id: 'mecca-b1-en-9-2', x: 77, y: 39, title: 'Poets as Media', description: 'Poetry preserved tribal history and poets acted like the media of their society.' },
    ]
  ),
  story(10, 'Religious Life in Mecca',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch10-clean.png?alt=media&token=37e1354e-77f9-48ab-ae90-2903c4a46bd9',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F09_Chapter_10_Religious_Life_in_Mecca.mp3?alt=media&token=0dbde837-40f1-447b-a0b2-483c175750ef',
    `Before Islam, most people in Arabia worshipped idols. Only a few people followed religions like Christianity. In Mecca, most people also worshipped idols. There were 360 idols, including Lat, Manat, and Uzza. They were kept in and around the Ka’ba and in homes.

Some people, called Hanifs, followed the old religion of Abraham (as). Arab people in that period actually believed in one main God, Allah, as the Creator. However, they also worshipped many idols. They thought these idols helped them talk to Allah.

Pilgrimage to the Ka’ba was the most important religious activity in early Arabia. Life in the Age of Ignorance was also full of superstitions. People believed in kahins, or soothsayers, and checked omens before making decisions.`,
    [
      { word: 'idols', definition: 'Objects wrongly worshipped as gods.' },
      { word: 'Hanifs', definition: 'People who followed the old religion of Abraham.' },
      { word: 'Creator', definition: 'Allah, the One who created everything.' },
      { word: 'superstitions', definition: 'Beliefs based on fear or tradition rather than sound evidence or true religion.' },
      { word: 'omens', definition: 'Signs people believed could predict what would happen.' },
    ],
    [
      { id: 'mecca-b1-en-10-1', x: 32, y: 30, title: '360 Idols', description: 'The story says that 360 idols were kept in and around the Ka’ba and in homes.' },
      { id: 'mecca-b1-en-10-2', x: 69, y: 68, title: 'Hanifs', description: 'Hanifs followed the old religion of Abraham rather than idol worship.' },
    ]
  ),
  story(11, 'What Islam Meant',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch11-clean.png?alt=media&token=01548bf8-fb37-480a-b3ee-2b30faa1d5db',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F10_Chapter_11_What_Islam_Meant.mp3?alt=media&token=e836e9f4-a7f0-4bb7-81f3-44ef2202bf43',
    `Politics, economics, and religion are connected. Beliefs shape how people live. That is why powerful groups in Mecca did not like Islam. From the beginning, Islam showed that Muslims were a new community. They were going to be different from the people around them.

In 610, Prophet Muhammad (as) started teaching Islam in Mecca. The Quraysh tribe heard his message first. Some people became Muslims. When they heard Prophet Muhammad (as) read the Quran, they were sure it was from Allah.

This message changed them deeply. It touched their hearts and minds and made them feel great respect. However, many leaders ignored the Quran and stood against the Prophet (as). Prophet Muhammad (as) taught in Mecca for 13 years, in a city with about 5,000 to 10,000 people.`,
    [
      { word: 'Politics', definition: 'Activities connected with power and governing society.' },
      { word: 'economics', definition: 'Activities connected with money, work, trade, and resources.' },
      { word: 'community', definition: 'A group of people who share a common life or identity.' },
      { word: 'ignored', definition: 'Refused to pay attention to something.' },
      { word: 'leaders', definition: 'People who guide or have authority over a group.' },
    ],
    [
      { id: 'mecca-b1-en-11-1', x: 26, y: 48, title: 'A New Community', description: 'Islam formed a new community with beliefs that differed from the society around it.' },
      { id: 'mecca-b1-en-11-2', x: 75, y: 70, title: 'The Quran', description: 'The message of the Quran deeply affected those who accepted it, while many leaders opposed it.' },
    ]
  ),
  story(12, 'The Leaders of Quraysh',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch12-clean.png?alt=media&token=e0c57ed7-e6eb-43d2-bb7d-c3ac8a1ceb99',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F11_Chapter_12_The_Leaders_of_Quraysh.mp3?alt=media&token=33ce125f-6658-4542-ac6e-1a05e1b5a0d1',
    `In the first few years of the call to Islam, almost none of Mecca’s super-rich people became Muslims. The leaders of Quraysh felt that Islam was a danger to their power and did not accept it.

They were very rich, and other tribes respected them because of trade and the idols in the Ka’ba. They had high prestige, making them the prestigious caretakers of pilgrimage in the Arabian region. Keeping their power and unity was very important for them. Rich leaders turned the people against the new religion.

Islam brought serious changes. For example, Quraysh used unfair money systems like usury, but the Quran forbade this and allowed only honest trade. Islam also commanded zakat and sadaqah to help the poor. Meccan leaders tried to stop Islam from growing.`,
    [
      { word: 'super-rich', definition: 'Extremely wealthy.' },
      { word: 'prestigious', definition: 'Highly respected and admired.' },
      { word: 'caretakers', definition: 'People responsible for looking after a place or activity.' },
      { word: 'forbade', definition: 'Did not allow something.' },
      { word: 'zakat', definition: 'Obligatory charity that Muslims give under Islamic rules.' },
    ],
    [
      { id: 'mecca-b1-en-12-1', x: 40, y: 64, title: 'Quraysh Leaders', description: 'The leaders of Quraysh saw Islam as a danger to their power and status.' },
      { id: 'mecca-b1-en-12-2', x: 62, y: 36, title: 'Honest Trade', description: 'The Quran forbade usury and allowed honest trade, while Islam commanded support for the poor.' },
    ]
  ),
  story(13, 'Opposition to Islam',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch13-clean.png?alt=media&token=85709003-6a84-4c91-815c-77275b994297',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F12_Chapter_13_Opposition_to_Islam.mp3?alt=media&token=6c2ea379-8f68-4384-b707-49052ae36526',
    `At first, the leaders of Mecca only mocked Islam. Whenever Prophet Muhammad (as) walked by, they laughed and said that he was talking about messages from heaven. But when the Quran criticized the idols and warned against false worship, their opposition became violent.

Poor Muslims and those without powerful friends suffered the most. One of them was Bilal, an Abyssinian slave and one of the first believers in Islam. His master, Umayya, often took him out in the hot midday sun. He put a heavy rock on Bilal’s chest and ordered him to give up his religion.

The leaders of Mecca went further. Between 617 and 620, they began a social and economic boycott against Muslims and those who helped them. During this hard time, the Prophet (as), Khadija, and Abu Talib spent their money to support the Muslims.`,
    [
      { word: 'mocked', definition: 'Made fun of someone or something in an unkind way.' },
      { word: 'criticized the idols', definition: 'Said that idol worship was wrong.' },
      { word: 'violent', definition: 'Using physical force or cruelty.' },
      { word: 'Abyssinian', definition: 'From Abyssinia, the historical region associated with Ethiopia.' },
      { word: 'boycott', definition: 'An organized refusal to trade or deal with a group as pressure.' },
    ],
    [
      { id: 'mecca-b1-en-13-1', x: 33, y: 42, title: 'Bilal', description: 'Bilal, an Abyssinian slave and early Muslim, suffered severe pressure because of his faith.' },
      { id: 'mecca-b1-en-13-2', x: 71, y: 66, title: 'Boycott', description: 'Between 617 and 620, a social and economic boycott was used against Muslims and their supporters.' },
    ]
  ),
  story(14, 'Boycott and Pressure',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch14-clean.png?alt=media&token=fa516cba-c5c9-4e55-996b-0d62c68ab24b',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F13_Chapter_14_Boycott_and_Pressure.mp3?alt=media&token=68541084-fb07-4b4b-91d0-3ef54b281a76',
    `During the boycott, people had no food. Some died of hunger, and others even ate tree leaves to survive. The cries of hungry children could be heard everywhere.

Prophet Muhammad (as) continued to ask people to stop worshipping idols and follow one Allah. However, the leaders were proud of their old beliefs and did not want to change. The idols brought them money, trade, and power. Losing the idols meant losing wealth and influence, so they became hostile to Islam.

They also did not want to accept that people would be judged after death. They did not want to think about punishment for hurting people, making money unfairly, drinking alcohol, or doing other evil things. Tribal loyalty was another challenge because people feared losing their tribe’s protection.`,
    [
      { word: 'survive', definition: 'To stay alive in a difficult or dangerous situation.' },
      { word: 'wealth', definition: 'A large amount of money or valuable possessions.' },
      { word: 'hostile', definition: 'Unfriendly and strongly opposed to someone or something.' },
      { word: 'punishment', definition: 'A penalty or consequence for wrongdoing.' },
      { word: 'Tribal loyalty', definition: 'Strong support for one’s tribe.' },
    ],
    [
      { id: 'mecca-b1-en-14-1', x: 25, y: 56, title: 'Hunger', description: 'During the boycott, hunger became so severe that some people ate tree leaves to survive.' },
      { id: 'mecca-b1-en-14-2', x: 74, y: 33, title: 'Fear of Change', description: 'Leaders feared losing wealth, influence, and tribal protection if the old order changed.' },
    ]
  ),
  story(15, 'Islam and Justice',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch15-clean.png?alt=media&token=0074b30e-a371-4e11-8883-aaed8756a264',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F14_Chapter_15_Islam_and_Justice.mp3?alt=media&token=9918c557-3749-4527-87e1-ef01cbeabc92',
    `In old Arab society, tribal loyalty was so strong that freedom of choice was difficult. If someone left the tribe’s way, that person could lose protection. It was almost like being stateless today. The leaders of Mecca tried to prevent members of their tribes from becoming Muslim.

The Quraysh leaders said Islam was breaking up families and destroying unity. In reality, Islam was calling people to a better form of unity based on justice, mercy, and belief in one Allah.

Before Islam, Mecca was a difficult place with much unfairness. Prophet Muhammad (as) told people to be fair, respectful, and merciful. In Islam, every person is important. Background, wealth, gender, and social power do not make one person more valuable than another. Jahiliyyah means a society without justice and mercy; Islam is the opposite because it brings peace and fairness.`,
    [
      { word: 'stateless', definition: 'Without the protection or recognized belonging of a state or community.' },
      { word: 'freedom of choice', definition: 'The ability to make a choice without being forced.' },
      { word: 'prevent', definition: 'To stop something from happening.' },
      { word: 'mercy', definition: 'Kindness and compassion shown to others.' },
      { word: 'fairness', definition: 'Justice and equal treatment.' },
    ],
    [
      { id: 'mecca-b1-en-15-1', x: 30, y: 35, title: 'Freedom of Choice', description: 'Strong tribal loyalty made freedom of choice difficult for people who wanted to change their beliefs.' },
      { id: 'mecca-b1-en-15-2', x: 68, y: 64, title: 'Islam and Justice', description: 'Islam called people to unity based on justice, mercy, and belief in one Allah.' },
    ]
  ),
  { id: 16, type: 'quiz', title: 'Knowledge Check: Mecca Before Islam - B1', image: '', content: 'Check your understanding of the whole story through eight evidence-based questions.' },
  { id: 17, type: 'exercises', title: 'Retrieval Review', image: '', content: 'Reconnect chronology, systems, consequences and evidence across the story.' },
  { id: 18, type: 'vocabulary-match', title: 'B1 Vocabulary Challenge', image: '', content: 'Match ten important words and concepts with their meanings.' },
  {
    id: 19,
    type: 'glossary',
    title: 'B1 Reference Glossary',
    image: '',
    content: 'Reference vocabulary from all fifteen chapters.',
    vocabulary: [
      { word: 'Jahiliyyah', definition: 'The period before Islam described in the story as the Age of Ignorance.' }, { word: 'chaotic', definition: 'Very disordered and difficult to control.' }, { word: 'central government', definition: 'One main authority that governs a country or region.' }, { word: 'misery', definition: 'Great suffering or unhappiness.' }, { word: 'cruelty', definition: 'Behavior that causes pain or suffering without kindness.' },
      { word: 'barbarism', definition: 'Cruel and uncivilized behavior.' }, { word: 'revelation', definition: 'A message revealed by Allah to a prophet.' }, { word: 'holy city', definition: 'A city with special religious importance.' }, { word: 'Ka’ba', definition: 'The sacred House of Allah in Mecca.' }, { word: 'Qiblah', definition: 'The direction Muslims face during salah.' },
      { word: 'valley', definition: 'Low land between hills or mountains.' }, { word: 'crops', definition: 'Plants grown for food or other use.' }, { word: 'population', definition: 'The people living in a place.' }, { word: 'settled', definition: 'Started living permanently in a place.' }, { word: 'pilgrimage', definition: 'A religious journey to a sacred place.' },
      { word: 'mission', definition: 'An important task or duty.' }, { word: 'defeated', definition: 'Won against another group in a conflict.' }, { word: 'dry land', definition: 'Land with very little water.' }, { word: 'farm', definition: 'To grow crops or produce food from land.' }, { word: 'goods', definition: 'Products that are bought and sold.' },
      { word: 'trade routes', definition: 'Paths used to move and exchange goods between places.' }, { word: 'wealthy', definition: 'Rich and having a lot of money or valuable things.' }, { word: 'trade agreements', definition: 'Deals between groups that make trade possible or safer.' }, { word: 'merchants', definition: 'People who buy and sell goods.' }, { word: 'sacred months', definition: 'Special months in which fighting was avoided and worship was emphasized.' },
      { word: 'trade fairs', definition: 'Large events where people meet to buy and sell goods.' }, { word: 'Arafat', definition: 'The place mentioned in the story as part of pilgrimage practices.' }, { word: 'controlled', definition: 'Had power over something.' }, { word: 'usury', definition: 'Unfair extra money charged on a loan.' }, { word: 'widespread', definition: 'Existing among many people or in many places.' },
      { word: 'social classes', definition: 'Groups in society divided by wealth, status, or power.' }, { word: 'debt', definition: 'Money that a person owes and must pay back.' }, { word: 'luxury', definition: 'A comfortable and expensive way of living.' }, { word: 'Orphans', definition: 'Children whose parents have died.' }, { word: 'property', definition: 'Things or possessions that belong to someone.' },
      { word: 'Tribes', definition: 'Large family or social groups with a shared identity.' }, { word: 'physical strength', definition: 'Power of the body.' }, { word: 'sons', definition: 'Male children.' }, { word: 'tribal protection', definition: 'Safety provided by belonging to a tribe.' }, { word: 'ancestors', definition: 'Family members who lived in earlier generations.' },
      { word: 'rights', definition: 'Basic freedoms and fair treatment that people should have.' }, { word: 'unfair treatment', definition: 'Behavior that is not just or equal.' }, { word: 'slavery', definition: 'A system in which people are owned and forced to work.' }, { word: 'Poets', definition: 'People who write or perform poetry.' }, { word: 'media', definition: 'Ways of sharing news, ideas, and messages with people.' },
      { word: 'idols', definition: 'Objects wrongly worshipped as gods.' }, { word: 'Hanifs', definition: 'People who followed the old religion of Abraham.' }, { word: 'Creator', definition: 'Allah, the One who created everything.' }, { word: 'superstitions', definition: 'Beliefs based on fear or tradition rather than sound evidence or true religion.' }, { word: 'omens', definition: 'Signs people believed could predict what would happen.' },
      { word: 'Politics', definition: 'Activities connected with power and governing society.' }, { word: 'economics', definition: 'Activities connected with money, work, trade, and resources.' }, { word: 'community', definition: 'A group of people who share a common life or identity.' }, { word: 'ignored', definition: 'Refused to pay attention to something.' }, { word: 'leaders', definition: 'People who guide or have authority over a group.' },
      { word: 'super-rich', definition: 'Extremely wealthy.' }, { word: 'prestigious', definition: 'Highly respected and admired.' }, { word: 'caretakers', definition: 'People responsible for looking after a place or activity.' }, { word: 'forbade', definition: 'Did not allow something.' }, { word: 'zakat', definition: 'Obligatory charity that Muslims give under Islamic rules.' },
      { word: 'mocked', definition: 'Made fun of someone or something in an unkind way.' }, { word: 'criticized the idols', definition: 'Said that idol worship was wrong.' }, { word: 'violent', definition: 'Using physical force or cruelty.' }, { word: 'Abyssinian', definition: 'From Abyssinia, the historical region associated with Ethiopia.' }, { word: 'boycott', definition: 'An organized refusal to trade or deal with a group as pressure.' },
      { word: 'survive', definition: 'To stay alive in a difficult or dangerous situation.' }, { word: 'wealth', definition: 'A large amount of money or valuable possessions.' }, { word: 'hostile', definition: 'Unfriendly and strongly opposed to someone or something.' }, { word: 'punishment', definition: 'A penalty or consequence for wrongdoing.' }, { word: 'Tribal loyalty', definition: 'Strong support for one’s tribe.' },
      { word: 'stateless', definition: 'Without the protection or recognized belonging of a state or community.' }, { word: 'freedom of choice', definition: 'The ability to make a choice without being forced.' }, { word: 'prevent', definition: 'To stop something from happening.' }, { word: 'mercy', definition: 'Kindness and compassion shown to others.' }, { word: 'fairness', definition: 'Justice and equal treatment.' },
    ],
  },
  { id: 20, type: 'final-challenge', title: 'B1 Final Challenge', image: '', content: 'Demonstrate whole-book B1 understanding through ten varied tasks.' },
];
