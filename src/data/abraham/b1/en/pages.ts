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

// Story prose is locked. This file contains story/media/Word Notes/hotspots/page shells only.
// All learning activities live in exercises.ts and are attached in ../index.ts.
const abrahamB1RawPages: PageData[] = [
  story(1, 'Abraham in Babylon',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch1%20(2).png?alt=media&token=96d6f05e-acbe-4e9e-b610-53a5f43ddce6',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F00_Chapter_1.mp3?alt=media&token=57bc6da5-9305-4888-96d3-08482db1fee2',
    `A very long time ago, about 4,000 years ago, in the kingdom of Babylon in Mesopotamia, there was a boy named Abraham. In his homeland, people worshipped the stars, the moon, the sun, and statues made from wood and stone. Abraham was a wise boy, as Allah made his heart and mind clear of idols. (See Surah Enbiyâ: 51.)

Abraham discovered Allah when he was at a very young age. Since his childhood, his heart was full of hatred for idols. He could not understand how an intelligent person could make a statue and then see it as a god which could help or harm him. He saw that these idols did not eat, drink, or talk. They could not even move from one place to another on their own.

In the kingdom of Babylon, people had a large house of worship full of idols with a space in the middle for their biggest gods. Abraham was surprised to see that when people entered the building, they bowed to the statues and started crying and begging. They talked to the gods, asked for help, and made a wish. But these prayers and wishes could not be heard or understood by the statues!`,
    [], []
  ),
  story(2, 'Abraham and His Father’s Idols',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch2.png?alt=media&token=21d9d18e-b7ad-4d13-8a7c-2b671dd39e60',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F01_Chapter_2_Abraham_and_His_Father%E2%80%99s_Idols.mp3?alt=media&token=50f86864-c358-471a-82f2-3218be892a35',
    `Abraham’s father was an idol maker, named Azer. (See Surah En’âm: 74.) When Abraham was a young boy, he often used to watch his father while he was making idols. One day, Abraham asked his father, “Why do you put these toys in the house of worship?” Azer replied, “They are not toys, but our gods. We worship them; we show love and respect to them. We ask favors from them and give them presents.” But Abraham used to play with these idols as toys; he rode on their backs and sometimes kicked them.

One day, his father saw Abraham riding the statue of Mardukh (the Chief God of Babylon), and he got angry with him. He told his son not to play with it again.

Abraham asked, “What is this statue, father? It has big ears, bigger than ours.” His father answered, “It is Mardukh, the god of gods, son! These big ears show his deep knowledge.” This made Abraham laugh; he was only seven years old at that time.`,
    [], []
  ),
  story(3, 'Searching for the True Creator',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch3.png?alt=media&token=d4dda77d-5fbe-438f-ae20-00d215f53796',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F02_Chapter_3_Searching_for_the_True_Creator.mp3?alt=media&token=28cd4203-ad7f-4883-9a5b-b145567721e5',
    `Years passed, and Abraham grew into a young man. Although he always wondered about Allah, he also knew that Allah could not be a statue. It made him sad to see the people of the kingdom; they were still showing love and respect to idols. On the other hand, Abraham was in search of one true Creator.

One night, Abraham left his home to take a walk in the countryside. On a nearby mountain, he found a cave, sat there, and started thinking about Allah. Then he stood up and looked up at the beautiful sky. He saw a bright star and wondered, “Could this be my Allah?” But when it disappeared, he said, “I will not show respect to it or worship it, because it sets and disappears.” He then saw the shining moon and said, “Could this be Allah?” But when the moon faded, he understood that it could not be Allah.`,
    [], []
  ),
  story(4, 'Abraham Receives Guidance',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b2_ch4.png?alt=media&token=22749671-396f-422b-ae63-07b5600ba29d',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F03_Chapter_4_Abraham_Receives_Guidance.mp3?alt=media&token=5a474dc4-f8f5-4825-994a-999eda876bc3',
    `Abraham stayed until sunrise, and when he saw the bright sun, he wondered, “Could this be Allah? It is bigger.”

But when it set, he understood that Allah could not be one of the creations. Allah is the Creator of everything. Abraham prostrated himself and asked Allah for help. He said, “If Allah doesn’t show me the right way, I will be on the wrong path.” (See Surah En’âm: 77.)

He recognized that he should guide his people because Allah chose him to be His Messenger.

Prophet Abraham (pbuh) went home and told his father, “O my father, follow me: I will guide you on the right way. Stop worshipping idols.” His father grew angry and said, “Do you reject my gods? If you do not stop speaking like this, I will stone you. Leave here now.”`,
    [], []
  ),
  story(5, 'Abraham Calls His People',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b2_ch5.png?alt=media&token=5586429e-02db-4e3a-be26-bef94c4fb5c8',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F04_Chapter_5_Abraham_Calls_His_People.mp3?alt=media&token=ad50e9bb-e402-4ab7-864d-d79a91724b6f',
    `Abraham (pbuh) was very sad for his father. Then, he went to the people of the kingdom and tried to show them the right way: “O people! I have turned my face towards Allah. I do not worship your idols because Allah is the one and only true God!” People got furious when they heard him. Abraham (pbuh) said to them, “Why do you worship these statues? They have no power to help or harm you.” People replied, “We saw our fathers worship them; because of this, we do the same.” Abraham (pbuh) did not give up and told them, “My Allah gives me food and drink when I need them, and heals me when I am sick. Your statues have no power to do these.” He wanted them to reconsider their beliefs. They ignored him, though.`,
    [], []
  ),
  story(6, 'Abraham Enters the Temple',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b2_ch6.png?alt=media&token=85c7636d-1681-41f2-938d-a67a357e8ffa',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F05_Chapter_6_Abraham_Enters_the_Temple.mp3?alt=media&token=3dc1c09b-1e7e-4e3e-b105-d4c621020d2d',
    `Prophet Abraham (pbuh) decided to show them the foolishness of their beliefs. He made a plan to destroy all their idols, but he did not tell anyone what he was going to do. There was a big celebration soon. All the people usually went outside of town, so he got an axe and waited until the whole town was empty. He went into the big temple and saw all the statues standing there. There were plates of food in front of them, and Abraham (pbuh) jokingly asked them, “Why don’t you eat the food? It is getting cold.” Offering food to these statues was so ridiculous.

Abraham (pbuh) began to break the idols, one after another, until they were all broken. He left the largest statue in the temple untouched, hung the axe around its neck, and then hurried back home.`,
    [], []
  ),
  story(7, 'The Broken Idols',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b2_ch7.png?alt=media&token=3e535d5b-1e3c-4cd3-88e3-33b95447f33f',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F06_Chapter_7_The_Broken_Idols.mp3?alt=media&token=83d27022-9e27-4678-8ce7-38e04622dc4f',
    `The next day, when people went to the temple to pray to their idols, they were shocked to see all the statues were broken into many pieces. They all gathered around the smashed idols. They wondered and tried to find out who did this. “We heard a young man speaking against our gods,” they remembered. “His name was Abraham.” They found Abraham (pbuh) and brought him into the temple. They asked him, “Did you harm our gods in this way?” Abraham (pbuh) calmly replied, “It was this statue there, the biggest of them all; ask that statue, if it can speak!”

The people were displeased with what they heard and said, “You are well aware that these idols don’t speak!” Abraham (pbuh) replied, “Then why do you worship things that can’t speak or see or even protect themselves? Have you gone mad?”

They looked at each other in shame because their thoughts and feelings told them that Abraham (pbuh) was right. But they were so arrogant that they couldn’t accept the truth and admit they were wrong. If they accepted that Abraham (pbuh) was right, then it meant their forefathers were wrong, as well. They started shouting, “Burn him! Burn him! In the name of our gods, punish him!” (See Surah Enbiyâ: 68; Surah Ankebût: 24.)`,
    [], []
  ),
  story(8, 'Preparing the Great Fire',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch8.png?alt=media&token=b51ca5fb-f294-4c69-935d-7cb8904ffc32',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F07_Chapter_8_Preparing_the_Great_Fire.mp3?alt=media&token=d012d642-1cf1-4d30-acf1-40830c943ebb',
    `Firewood was collected for the fire for days.

The fire was so big that people couldn’t approach it. However, Abraham (pbuh) stayed calm because he trusted Allah. He knew that Allah would never leave him alone, and that whatever happens, it will be for his own good.

News about the fire travelled very fast and far. People from many different towns came to see what would happen. The fire was finally ready. The heat was so strong that even birds couldn’t fly over the rising flames.

Prophet Abraham’s (pbuh) hands and feet were tied, and he was placed on a catapult. Catapult was a kind of machine which was used to throw Abraham (pbuh) into the fire.

Abraham (pbuh) was thrown straight into huge flames. At that moment, Angel Gabriel came to him and asked, “Is there anything you wish for?” Abraham (pbuh) only said, “Nothing from you!”

Allah commanded the fire to be cool for Prophet Abraham (pbuh), and it turned out to be safe for him. (See Surah Enbiyâ: 69.) It only burnt the ropes on his hands and feet. He sat in the middle of the fire safely. The fire turned into a garden. Prophet Abraham (pbuh) emerged in good condition when the flames cooled.`,
    [], []
  ),
  story(9, 'The Miracle and Nimrod',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch9.png?alt=media&token=aa006370-2be7-4c91-8eb1-2af70e0d6f56',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F08_Chapter_9_The_Miracle_and_Nimrod.mp3?alt=media&token=6d96716a-f0e3-449d-8f90-b009fd363bad',
    `People were shocked to see that Abraham (pbuh) was not harmed at all. People felt embarrassed by the miracle, yet their anger and arrogance remained unchanged.

Prophet Abraham (pbuh) tried every way to show them their error; however, their rage didn’t calm down.

Nimrod was the king of Babylon. He also heard about the miracle. He realized that Abraham was not an ordinary person, so he decided to meet him. He called Abraham (pbuh) and asked him, “Who is your God?”

He (pbuh) said, “He is Allah, the One. He gives life and brings death.”

“I can give life and death,” said Nimrod. He ordered his guards to bring two slaves and told them to be put to death. The guards killed one of the slaves, then Nimrod said, “I let the second slave live; let him go.” The slave was free.

“See! I can also give life and death!” he said to Abraham (pbuh). In response, Prophet Abraham (pbuh) said, “Allah makes the sun rise in the east. Can you make the sun rise from the west?” Naturally, Nimrod was unable to do this; only Allah has the power to do that. This made Nimrod even more angry.`,
    [], []
  ),
  story(10, 'Leaving Babylon',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch10.png?alt=media&token=e6da226d-8ee6-4643-8a61-e8c937d2aba5',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F09_Chapter_10_Leaving_Babylon.mp3?alt=media&token=22a5976b-1627-4652-b54b-03bea9174f4b',
    `Only one woman and one man of his people shared his faith in Allah. The woman’s name was Sarah (Sâre), and the man’s name was Lot (Lût). Lot later became a prophet.

Abraham (pbuh) realized that nobody was going to listen to his message. Therefore, he decided to leave Babylon and travel to other lands to spread Allah’s message. He traveled from Babylon to Syria and Palestine on camelback. It was a long, hot, and tiring journey. During his journey, Abraham (pbuh) married Hagar and asked for a child from Allah so that his child could teach people about Allah. Hagar soon gave birth to Abraham’s (pbuh) first son, named Ishmael.

One day, Allah commanded Abraham (pbuh) to travel with his wife and little child Ishmael. They all travelled for a long time. Finally, they reached a lonely valley near two small hills, Safa and Marwa. Prophet Abraham (pbuh) told his wife to stay near one of the hills with Ishmael.`,
    [], []
  ),
  story(11, 'Hagar and Ishmael in the Valley',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch11.png?alt=media&token=4ca0f748-06a6-4656-882d-6d70caa65773',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F10_Chapter_11_Hagar_and_Ishmael_in_the_Valley.mp3?alt=media&token=c15b8c94-5a2b-485b-bfd2-ac9b536bc95e',
    `Abraham (pbuh) left them there and prayed to Allah to protect them. He said, “O our Lord! I have left my family to stay in a valley with no farming, near Your Holy House (the Ka'ba in Mecca); O Allah! Give them blessings so that they may give thanks.” (See Surah Ibrâhim: 37.) Hagar knew that Abraham (pbuh) was doing what Allah told him.

She fearlessly said to Abraham (pbuh) when he left them in this desert valley, “Allah will never let us die; He will surely protect us.”

The valley had no trees, no fruit, no food, and no water. This was part of Allah’s plan to build the Holy House, the Ka’ba, and the city of Mecca in the time to come. But soon their food and water ran out. Hagar needed to feed her child. She helplessly started running from one hill to another looking for water and food. She ran between these two hills seven times. This effort by Hagar is known as “sa’y” in Hajj and Umrah rituals. Even today, Muslims must complete the ritual “sa’y” after performing the tawaf during Hajj or Umrah. This ritual involves walking back and forth between the hills of Safa and Marwa. Safa is about 130 meters from the Ka’ba, while Marwa is approximately 300 meters away.`,
    [], []
  ),
  story(12, 'Zamzam and the City of Mecca',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch12.png?alt=media&token=ffb800a3-5824-4d72-9c16-ec3d81a766ae',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F11_Chapter_12_Zamzam_and_the_City_of_Mecca.mp3?alt=media&token=bb0f1c23-afa2-450f-b7f4-016f43261b19',
    `But there was no water and nobody nearby to help her. While the little child Ishmael was crying with thirst and Hagar was running between the two hills, suddenly water started flowing from the ground under the feet of Ishmael. When Hagar saw this from a distance, she shouted, “Zamzam!” meaning “Flow slowly, stop!”

She was so happy. She drank the water, collected it, and fed her child. Later on, this water gained a lot of fame. This historic Zamzam spring still exists, providing water for thousands of years. The water is special because it was a gift from Allah in the middle of the desert. Ishmael and his mother began to live in the valley. More people came to settle there because of this sacred spring.

They started building up a city called Mecca. Meanwhile, Abraham (pbuh) visited Mecca several times to see his family.`,
    [], []
  ),
  story(13, 'Building the Ka’ba',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch13.png?alt=media&token=a00aeda9-5b8a-4797-a824-9682c1c63bcd',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F12_Chapter_13_Building_the_Ka%E2%80%99ba.mp3?alt=media&token=eefcf743-03ee-4539-b82c-4ee0f4dfc068',
    `One day, Allah commanded Abraham (pbuh) to build the House of Allah, the Ka’ba. Abraham (pbuh) said to Ishmael, “O Ishmael, Allah told me to do an important task, and you will help me in this task.” Ishmael replied, “I will help you for sure.”

The Ka’ba was an ancient building originally built as the first sacred place on Earth (see Âl-i İmrân: 96), but it disappeared over time. Father and son found the foundations of the old building and began to construct the new building on it.

After he built the Holy Ka’ba, Abraham’s (pbuh) mission was over. He built a place of worship for all people of different races and colors. Hajj reminds Muslims about many events of Allah’s beloved “friend,” Abraham (pbuh), and his family.

Over the years, Ishmael’s children had children; one of them was Muhammad, the Prophet of Islam (pbuh). They spread all over the Arabian Peninsula to carry their grandfather Abraham’s (pbuh) message of the Oneness of Allah. The message is “There is no god but Allah. He has no partner, rival, or helper. Allah is unique in every way.”`,
    [], []
  ),
  { id: 14, type: 'quiz', title: 'B1 Knowledge Check: Prophet Abraham (pbuh)', image: '', audioUrl: '', content: 'Check your whole-story understanding with eight evidence-based questions.' },
  { id: 15, type: 'exercises', title: 'B1 Retrieval Review & Reflection', image: '', content: 'Retrieve the story through sequencing, matching, reflection, and an independent eight-question quiz.' },
  { id: 16, type: 'vocabulary-match', title: 'B1 Vocabulary Challenge', image: '', content: 'Match ten reviewed B1 words with their meanings.' },
  { id: 17, type: 'glossary', title: 'B1 Master Glossary', image: '', content: 'Review useful story words before the final challenge.' },
  { id: 18, type: 'final-challenge', title: 'B1 Final Challenge', image: '', content: 'Demonstrate B1-level understanding across the complete story.' },
];

type VocabularyEntry = { word: string; definition: string };

const vocabularyByChapter: Record<number, VocabularyEntry[]> = {
  1: [
    { word: 'homeland', definition: 'The country or place where a person comes from.' },
    { word: 'intelligent', definition: 'Able to learn, understand, and think well.' },
    { word: 'begging', definition: 'Asking strongly for help or something needed.' },
    { word: 'surprised', definition: 'Feeling that something is unexpected.' },
  ],
  2: [
    { word: 'idol maker', definition: 'A person who makes idols or statues.' },
    { word: 'favors', definition: 'Helpful acts or good things given to someone.' },
    { word: 'Mardukh', definition: 'The chief god of Babylon in the people’s false belief.' },
    { word: 'kicked', definition: 'Hit something with the foot.' },
  ],
  3: [
    { word: 'Creator', definition: 'The One who creates and controls everything.' },
    { word: 'countryside', definition: 'Land outside towns and cities.' },
    { word: 'cave', definition: 'A natural hollow place in a mountain or rock.' },
    { word: 'faded', definition: 'Gradually became less visible or disappeared.' },
  ],
  4: [
    { word: 'sunrise', definition: 'The time when the sun first appears in the morning.' },
    { word: 'creations', definition: 'Things that have been created.' },
    { word: 'prostrated', definition: 'Put the forehead to the ground in worship.' },
    { word: 'stone', definition: 'To attack someone by throwing stones.' },
  ],
  5: [
    { word: 'furious', definition: 'Extremely angry.' },
    { word: 'harm', definition: 'To hurt or damage someone or something.' },
    { word: 'heals', definition: 'Makes a sick or injured person well again.' },
    { word: 'reconsider', definition: 'To think again about an idea or belief.' },
  ],
  6: [
    { word: 'foolishness', definition: 'Lack of good sense or wise thinking.' },
    { word: 'celebration', definition: 'A special event when people gather for a happy occasion.' },
    { word: 'axe', definition: 'A tool with a sharp metal head used for cutting.' },
    { word: 'ridiculous', definition: 'Very silly or unreasonable.' },
  ],
  7: [
    { word: 'smashed', definition: 'Broken violently into many pieces.' },
    { word: 'displeased', definition: 'Unhappy or annoyed about something.' },
    { word: 'shame', definition: 'A painful feeling caused by knowing something is wrong.' },
    { word: 'arrogant', definition: 'Too proud to accept the truth or a mistake.' },
  ],
  8: [
    { word: 'approach', definition: 'To come near something or someone.' },
    { word: 'flames', definition: 'The bright, burning parts of a fire.' },
    { word: 'catapult', definition: 'An old machine used to throw heavy objects.' },
    { word: 'emerged', definition: 'Came out from a place or situation.' },
  ],
  9: [
    { word: 'miracle', definition: 'A sign from Allah beyond ordinary human power.' },
    { word: 'rage', definition: 'Very strong anger.' },
    { word: 'guards', definition: 'People whose job is to protect a person or place.' },
    { word: 'ordinary', definition: 'Normal and not unusual or special.' },
  ],
  10: [
    { word: 'faith', definition: 'Strong belief and trust in Allah.' },
    { word: 'spread', definition: 'To make an idea or message reach more people.' },
    { word: 'camelback', definition: 'Travelling while riding a camel.' },
    { word: 'tiring', definition: 'Making someone feel tired.' },
  ],
  11: [
    { word: 'fearlessly', definition: 'Without being controlled by fear.' },
    { word: 'ran out', definition: 'Was completely used up so none remained.' },
    { word: 'ritual', definition: 'A religious action performed in a special way.' },
    { word: 'approximately', definition: 'About a number or amount, but not exactly.' },
  ],
  12: [
    { word: 'thirst', definition: 'A strong need to drink water.' },
    { word: 'flowing', definition: 'Moving continuously like water.' },
    { word: 'spring', definition: 'A place where water naturally comes from the ground.' },
    { word: 'settle', definition: 'To begin living permanently in a place.' },
  ],
  13: [
    { word: 'foundations', definition: 'The strong base under a building.' },
    { word: 'construct', definition: 'To build something.' },
    { word: 'races', definition: 'Groups of people with different backgrounds or physical traits.' },
    { word: 'Oneness', definition: 'The belief that Allah is One and has no partner.' },
  ],
};

const hotspotCoordinates: Record<number, [[number, number], [number, number]]> = {
  1: [[31, 39], [70, 61]], 2: [[37, 64], [66, 34]], 3: [[27, 54], [73, 35]],
  4: [[34, 31], [69, 66]], 5: [[24, 44], [76, 58]], 6: [[39, 67], [65, 32]],
  7: [[28, 36], [72, 63]], 8: [[35, 58], [67, 29]], 9: [[23, 65], [77, 39]],
  10: [[32, 30], [69, 68]], 11: [[26, 48], [75, 70]], 12: [[40, 64], [62, 36]],
  13: [[33, 42], [71, 66]],
};

const hotspotText: Record<number, [{ title: string; description: string }, { title: string; description: string }]> = {
  1: [{ title: 'Babylon', description: 'The ancient kingdom where Abraham grew up among people who worshipped created things.' }, { title: 'House of Worship', description: 'A place filled with statues where people asked lifeless idols for help.' }],
  2: [{ title: 'Azer’s Workshop', description: 'Abraham saw how idols were made by human hands.' }, { title: 'Mardukh Statue', description: 'A lifeless statue was described as having deep knowledge.' }],
  3: [{ title: 'The Cave', description: 'A quiet place where Abraham thought deeply about Allah and creation.' }, { title: 'The Sky', description: 'The star and moon helped Abraham explain that created things cannot be the Creator.' }],
  4: [{ title: 'Sunrise', description: 'The sun completes Abraham’s observations about created things that appear and disappear.' }, { title: 'Guidance', description: 'Abraham asks Allah to show him the right way and then begins his mission.' }],
  5: [{ title: 'Public Call', description: 'Abraham openly invited his people to worship Allah alone.' }, { title: 'People’s Response', description: 'The people became angry because Abraham challenged their old traditional beliefs.' }],
  6: [{ title: 'Empty Town', description: 'The celebration left the town empty, giving Abraham the chance to act.' }, { title: 'Food Before Idols', description: 'The untouched food showed that the idols could not even eat.' }],
  7: [{ title: 'Broken Idols', description: 'The smashed statues showed that the idols could not protect themselves.' }, { title: 'Public Questioning', description: 'Abraham used the people’s own words to make clear the weakness of their belief.' }],
  8: [{ title: 'The Great Fire', description: 'The fire was prepared as a punishment, but Abraham stayed calm with trust in Allah.' }, { title: 'Cool and Safe', description: 'Allah commanded the fire to become cool and safe for Abraham.' }],
  9: [{ title: 'Nimrod’s Claim', description: 'Nimrod tried to claim power over life and death.' }, { title: 'Sunrise Argument', description: 'Abraham’s challenge about the sun showed Nimrod’s weakness.' }],
  10: [{ title: 'Leaving Babylon', description: 'Abraham left his homeland to spread Allah’s message in other lands.' }, { title: 'Lonely Valley', description: 'The journey led Hagar and Ishmael to a quiet valley near Safa and Marwa.' }],
  11: [{ title: 'Hagar’s Trust', description: 'Hagar trusted that Allah would protect them in the desert valley.' }, { title: 'Safa and Marwa', description: 'Her search for water became a ritual remembered in Hajj and Umrah.' }],
  12: [{ title: 'Zamzam Water', description: 'Zamzam appeared as a gift from Allah in the middle of the desert.' }, { title: 'The Growth of Mecca', description: 'People settled in the valley because of the sacred spring.' }],
  13: [{ title: 'The Ka’ba', description: 'Abraham and Ishmael rebuilt the House of Allah on its old foundations.' }, { title: 'Message of Tawheed', description: 'The final message emphasizes the Oneness of Allah.' }],
};

const masterGlossary = Array.from({ length: 13 }, (_, index) => index + 1)
  .reduce<VocabularyEntry[]>((all, chapter) => all.concat(vocabularyByChapter[chapter]), []);

export const abrahamB1Pages: PageData[] = abrahamB1RawPages.map(page => {
  if (page.type !== 'story') {
    return page.id === 17 ? { ...page, image: '', vocabulary: masterGlossary, animatedWords: undefined } : { ...page, image: '', animatedWords: undefined };
  }
  const coords = hotspotCoordinates[page.id];
  const text = hotspotText[page.id];
  return {
    ...page,
    vocabulary: vocabularyByChapter[page.id],
    hotspots: [
      { id: `abraham-b1-en-${page.id}-1`, x: coords[0][0], y: coords[0][1], ...text[0] },
      { id: `abraham-b1-en-${page.id}-2`, x: coords[1][0], y: coords[1][1], ...text[1] },
    ],
    animatedWords: undefined,
  };
});
