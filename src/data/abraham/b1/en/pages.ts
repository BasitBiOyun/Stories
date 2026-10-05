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
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_chapter1.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F00_Chapter_1.mp3?alt=media&token=57bc6da5-9305-4888-96d3-08482db1fee2',
    `A very long time ago, about 4,000 years ago, in the kingdom of Babylon in Mesopotamia, there was a boy named Abraham. In his homeland, people worshipped the stars, the moon, the sun, and statues made from wood and stone. Abraham was a wise boy, as Allah made his heart and mind clear of idols. (See Surah Al-Anbiya: 51.)

Abraham discovered Allah when he was at a very young age. From childhood, his heart was full of hatred for idols. He could not understand how an intelligent person could make a statue and then see it as a god which could help or harm him. He saw that these idols did not eat, drink, or talk. They could not even move from one place to another on their own.

In the kingdom of Babylon, people had a large house of worship full of idols with a space in the middle for their biggest gods. Abraham was surprised to see that when people entered the building, they bowed to the statues and started crying and begging. They talked to the gods, asked for help, and made a wish. But these prayers and wishes could not be heard or understood by the statues!`,
    [
      { word: 'homeland', definition: 'The country or place where a person comes from.' },
      { word: 'intelligent', definition: 'Able to learn, understand, and think well.' },
      { word: 'begging', definition: 'Asking strongly for help or something needed.' },
      { word: 'bowed', definition: 'Bent the head or body forward to show respect or worship.' },
    ],
    [
      { id: 'abraham-b1-en-1-1', x: 31, y: 39, title: 'The Kingdom of Babylon', description: 'Abraham (pbuh) grew up in Babylon, where people worshipped the stars, the moon, the sun and statues.' },
      { id: 'abraham-b1-en-1-2', x: 70, y: 61, title: 'A House Full of Idols', description: 'In a large house of worship, people bowed to the statues and begged them for help.' },
    ],
  ),
  story(2, 'Abraham and His Father’s Idols',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_chapter2.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F01_Chapter_2_Abraham_and_His_Father%E2%80%99s_Idols.mp3?alt=media&token=50f86864-c358-471a-82f2-3218be892a35',
    `Abraham’s father was an idol maker, named Azer. (See Surah Al-An’am: 74.) When Abraham was a young boy, he often used to watch his father while he was making idols. One day, Abraham asked his father, “Why do you put these toys in the house of worship?” Azer replied, “They are not toys, but our gods. We worship them; we show love and respect to them. We ask favors from them and give them presents.” But Abraham used to play with these idols as toys; he rode on their backs and sometimes kicked them.

One day, his father saw Abraham riding the statue of Mardukh (the Chief God of Babylon), and he got angry with him. He told his son not to play with it again.

Abraham asked, “What is this statue, father? It has big ears, bigger than ours.” His father answered, “It is Mardukh, the god of gods, son! These big ears show his deep knowledge.” This made Abraham laugh; he was only seven years old at that time.`,
    [
      { word: 'idol maker', definition: 'A person whose job is to carve statues that people worship.' },
      { word: 'favors', definition: 'Helpful acts or good things given to someone.' },
      { word: 'respect', definition: 'A feeling that someone or something is important and deserves honor.' },
      { word: 'kicked', definition: 'Hit something with the foot.' },
    ],
    [
      { id: 'abraham-b1-en-2-1', x: 37, y: 64, title: 'Azer’s Workshop', description: 'Abraham (pbuh) often watched his father, Azer, make idols with his own hands.' },
      { id: 'abraham-b1-en-2-2', x: 66, y: 34, title: 'The Statue of Mardukh', description: 'Azer said that Mardukh’s big ears showed deep knowledge, and young Abraham (pbuh) laughed.' },
    ],
  ),
  story(3, 'Searching for the True Creator',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_chapter3.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F02_Chapter_3_Searching_for_the_True_Creator.mp3?alt=media&token=28cd4203-ad7f-4883-9a5b-b145567721e5',
    `Years passed, and Abraham grew into a young man. Although he always wondered about Allah, he also knew that Allah could not be a statue. It made him sad to see the people of the kingdom; they were still showing love and respect to idols. On the other hand, Abraham was in search of one true Creator.

One night, Abraham left his home to take a walk in the countryside. On a nearby mountain, he found a cave, sat there, and started thinking about Allah. Then he stood up and looked up at the beautiful sky. He saw a bright star and wondered, “Could this be my Lord?” But when it disappeared, he said, “I will not show respect to it or worship it, because it sets and disappears.” He then saw the shining moon and said, “Could this be my Lord?” But when the moon faded, he understood that it could not be his Lord.`,
    [
      { word: 'Creator', definition: 'The One who brought everything into existence and controls it.' },
      { word: 'countryside', definition: 'Land outside towns and cities.' },
      { word: 'cave', definition: 'A natural hollow place in a mountain or rock.' },
      { word: 'faded', definition: 'Gradually became less visible or disappeared.' },
    ],
    [
      { id: 'abraham-b1-en-3-1', x: 27, y: 54, title: 'The Cave', description: 'Abraham (pbuh) sat in a cave on a nearby mountain and started thinking about Allah.' },
      { id: 'abraham-b1-en-3-2', x: 73, y: 35, title: 'The Star and the Moon', description: 'The star disappeared and the moon faded, so Abraham (pbuh) understood that neither could be his Lord.' },
    ],
  ),
  story(4, 'Abraham Receives Guidance',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_chapter4.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F03_Chapter_4_Abraham_Receives_Guidance.mp3?alt=media&token=5a474dc4-f8f5-4825-994a-999eda876bc3',
    `Abraham stayed until sunrise, and when he saw the bright sun, he wondered, “Could this be my Lord? It is bigger.”

But when it set, he understood that Allah could not be one of the creations. Allah is the Creator of everything. Abraham prostrated himself and asked Allah for help. He said, “If Allah doesn’t show me the right way, I will be on the wrong path.” (See Surah Al-An’am: 77.)

He recognized that he should guide his people because Allah chose him to be His Messenger.

Prophet Abraham (pbuh) went home and told his father, “O my father, follow me: I will guide you on the right way. Stop worshipping idols.” His father grew angry and said, “Do you reject my gods? If you do not stop speaking like this, I will stone you. Leave here now.”`,
    [
      { word: 'sunrise', definition: 'The time when the sun first appears in the morning.' },
      { word: 'creations', definition: 'Everything Allah has made, such as the sun, the moon and the stars.' },
      { word: 'prostrated', definition: 'Put the forehead to the ground in worship.' },
      { word: 'stone', definition: 'To throw rocks at someone to hurt or kill them.' },
    ],
    [
      { id: 'abraham-b1-en-4-1', x: 34, y: 31, title: 'The Setting Sun', description: 'Even the big, bright sun set, so Abraham (pbuh) understood that Allah is the Creator of everything.' },
      { id: 'abraham-b1-en-4-2', x: 69, y: 66, title: 'The Right Way', description: 'Abraham (pbuh) prostrated himself, asked Allah to guide him, and then called his father to the right way.' },
    ],
  ),
  story(5, 'Abraham Calls His People',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_chapter5.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F04_Chapter_5_Abraham_Calls_His_People.mp3?alt=media&token=ad50e9bb-e402-4ab7-864d-d79a91724b6f',
    `Abraham (pbuh) was very sad for his father. Then, he went to the people of the kingdom and tried to show them the right way: “O people! I have turned my face towards Allah. I do not worship your idols because Allah is the one and only true God!” People got furious when they heard him. Abraham (pbuh) said to them, “Why do you worship these statues? They have no power to help or harm you.” People replied, “We saw our fathers worship them; because of this, we do the same.” Abraham (pbuh) did not give up and told them, “My Lord gives me food and drink when I need them, and heals me when I am sick. Your statues have no power to do these.” He wanted them to reconsider their beliefs. They ignored him, though.`,
    [
      { word: 'give up', definition: 'To stop trying to do something.' },
      { word: 'harm', definition: 'To hurt or damage someone or something.' },
      { word: 'heals', definition: 'Makes a sick or injured person well again.' },
      { word: 'reconsider', definition: 'To think again about an idea or belief.' },
    ],
    [
      { id: 'abraham-b1-en-5-1', x: 24, y: 44, title: 'Public Call', description: 'Abraham (pbuh) openly told his people that he did not worship their idols, because Allah is the one true God.' },
      { id: 'abraham-b1-en-5-2', x: 76, y: 58, title: 'Following Their Fathers', description: 'The people had only one reason for worshipping the statues: their fathers had worshipped them too.' },
    ],
  ),
  story(6, 'Abraham Enters the Temple',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_chapter6.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F05_Chapter_6_Abraham_Enters_the_Temple.mp3?alt=media&token=3dc1c09b-1e7e-4e3e-b105-d4c621020d2d',
    `Prophet Abraham (pbuh) decided to show them the foolishness of their beliefs. He made a plan to destroy all their idols, but he did not tell anyone what he was going to do. There was a big celebration soon. All the people usually went outside of town, so he got an axe and waited until the whole town was empty. He went into the big temple and saw all the statues standing there. There were plates of food in front of them, and Abraham (pbuh) jokingly asked them, “Why don’t you eat the food? It is getting cold.” Offering food to these statues was so ridiculous.

Abraham (pbuh) began to break the idols, one after another, until they were all broken. He left the largest statue in the temple untouched, hung the axe around its neck, and then hurried back home.`,
    [
      { word: 'foolishness', definition: 'Lack of good sense or wise thinking.' },
      { word: 'celebration', definition: 'A special event when people gather for a happy occasion.' },
      { word: 'axe', definition: 'A tool with a sharp metal head used for cutting.' },
      { word: 'ridiculous', definition: 'Very silly or unreasonable.' },
    ],
    [
      { id: 'abraham-b1-en-6-1', x: 39, y: 67, title: 'Empty Town', description: 'Everyone went outside the town for a big celebration, so Abraham (pbuh) entered the temple alone.' },
      { id: 'abraham-b1-en-6-2', x: 65, y: 32, title: 'Food for the Idols', description: 'The statues could not eat the food in front of them, which showed how helpless they were.' },
    ],
  ),
  story(7, 'The Broken Idols',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_chapter7.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F06_Chapter_7_The_Broken_Idols.mp3?alt=media&token=83d27022-9e27-4678-8ce7-38e04622dc4f',
    `The next day, when people went to the temple to pray to their idols, they were shocked to see all the statues were broken into many pieces. They all gathered around the smashed idols. They wondered and tried to find out who did this. “We heard a young man speaking against our gods,” they remembered. “His name was Abraham.” They found Abraham (pbuh) and brought him into the temple. They asked him, “Did you harm our gods in this way?” Abraham (pbuh) calmly replied, “It was this statue there, the biggest of them all; ask that statue if it can speak!”

The people were displeased with what they heard and said, “You are well aware that these idols don’t speak!” Abraham (pbuh) replied, “Then why do you worship things that can’t speak or see or even protect themselves? Have you gone mad?”

They looked at each other in shame because their thoughts and feelings told them that Abraham (pbuh) was right. But they were so arrogant that they couldn’t accept the truth and admit they were wrong. If they accepted that Abraham (pbuh) was right, then it meant their forefathers were wrong, as well. They started shouting, “Burn him! Burn him! In the name of our gods, punish him!” (See Surah Al-Anbiya: 68; Surah Al-Ankabut: 24.)`,
    [
      { word: 'smashed', definition: 'Broken violently into many pieces.' },
      { word: 'displeased', definition: 'Unhappy or annoyed about something.' },
      { word: 'shame', definition: 'A painful feeling caused by knowing something is wrong.' },
      { word: 'arrogant', definition: 'Too proud to accept the truth or a mistake.' },
    ],
    [
      { id: 'abraham-b1-en-7-1', x: 28, y: 36, title: 'Smashed Statues', description: 'The people found their idols smashed and saw that they had not been able to protect themselves.' },
      { id: 'abraham-b1-en-7-2', x: 72, y: 63, title: 'Public Questioning', description: 'Abraham (pbuh) used the people’s own words to show that their idols could not speak or protect themselves.' },
    ],
  ),
  story(8, 'Preparing the Great Fire',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_chapter8.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F07_Chapter_8_Preparing_the_Great_Fire.mp3?alt=media&token=d012d642-1cf1-4d30-acf1-40830c943ebb',
    `Firewood was collected for the fire for days.

The fire was so big that people couldn’t approach it. However, Abraham (pbuh) stayed calm because he trusted Allah. He knew that Allah would never leave him alone, and that whatever happened, it would be for his own good.

News about the fire traveled very fast and far. People from many different towns came to see what would happen. The fire was finally ready. The heat was so strong that even birds couldn’t fly over the rising flames.

Prophet Abraham’s (pbuh) hands and feet were tied, and he was placed on a catapult. A catapult was a kind of machine which was used to throw Abraham (pbuh) into the fire.

Abraham (pbuh) was thrown straight into huge flames. At that moment, Angel Gabriel came to him and asked, “Is there anything you wish for?” Abraham (pbuh) only said, “Nothing from you!”

Allah commanded the fire to be cool for Prophet Abraham (pbuh), and it turned out to be safe for him. (See Surah Al-Anbiya: 69.) It only burnt the ropes on his hands and feet. He sat in the middle of the fire safely. The fire turned into a garden. Prophet Abraham (pbuh) emerged in good condition when the flames cooled.`,
    [
      { word: 'firewood', definition: 'Wood that is cut and used to make a fire.' },
      { word: 'approach', definition: 'To come near something or someone.' },
      { word: 'flames', definition: 'The bright, burning parts of a fire.' },
      { word: 'catapult', definition: 'An old machine used to throw heavy objects.' },
    ],
    [
      { id: 'abraham-b1-en-8-1', x: 35, y: 58, title: 'A Huge Fire', description: 'The fire was so big that no one could approach it, but Abraham (pbuh) stayed calm and trusted Allah.' },
      { id: 'abraham-b1-en-8-2', x: 67, y: 29, title: 'Cool and Safe', description: 'Allah commanded the fire to be cool and safe for Abraham (pbuh), and he came out unharmed.' },
    ],
  ),
  story(9, 'The Miracle and Nimrod',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_chapter9.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F08_Chapter_9_The_Miracle_and_Nimrod.mp3?alt=media&token=6d96716a-f0e3-449d-8f90-b009fd363bad',
    `People were shocked to see that Abraham (pbuh) was not harmed at all. People felt embarrassed by the miracle, yet their anger and arrogance remained unchanged.

Prophet Abraham (pbuh) tried every way to show them their error; however, their rage didn’t calm down.

Nimrod was the king of Babylon. He also heard about the miracle. He realized that Abraham was not an ordinary person, so he decided to meet him. He called Abraham (pbuh) and asked him, “Who is your God?”

He (pbuh) said, “He is Allah, the One. He gives life and brings death.”

“I can give life and death,” said Nimrod. He ordered his guards to bring two slaves and to put them to death. The guards killed one of the slaves, then Nimrod said, “I let the second slave live; let him go.” The slave was free.

“See! I can also give life and death!” he said to Abraham (pbuh). In response, Prophet Abraham (pbuh) said, “Allah makes the sun rise in the east. Can you make the sun rise from the west?” Naturally, Nimrod was unable to do this; only Allah has the power to do that. This made Nimrod even more angry.`,
    [
      { word: 'miracle', definition: 'An amazing event that shows Allah’s power and that no human can do.' },
      { word: 'rage', definition: 'Very strong anger.' },
      { word: 'guards', definition: 'People whose job is to protect a person or place.' },
      { word: 'ordinary', definition: 'Normal and not unusual or special.' },
    ],
    [
      { id: 'abraham-b1-en-9-1', x: 23, y: 65, title: 'Nimrod’s Claim', description: 'Nimrod claimed that he could give life and death because he let one of the slaves live.' },
      { id: 'abraham-b1-en-9-2', x: 77, y: 39, title: 'The Sun from the West', description: 'Abraham (pbuh) asked Nimrod to make the sun rise from the west, and Nimrod could not do it.' },
    ],
  ),
  story(10, 'Leaving Babylon',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_chapter10.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F09_Chapter_10_Leaving_Babylon.mp3?alt=media&token=22a5976b-1627-4652-b54b-03bea9174f4b',
    `Only one woman and one man of his people shared his faith in Allah. The woman’s name was Sarah, and the man’s name was Lot. Lot later became a prophet.

Abraham (pbuh) realized that nobody was going to listen to his message. Therefore, he decided to leave Babylon and travel to other lands to spread Allah’s message. He traveled from Babylon to Syria and Palestine on camelback. It was a long, hot, and tiring journey. During his journey, Abraham (pbuh) married Hagar and asked for a child from Allah so that his child could teach people about Allah. Hagar soon gave birth to Abraham’s (pbuh) first son, named Ishmael.

One day, Allah commanded Abraham (pbuh) to travel with his wife and little child Ishmael. They all traveled for a long time. Finally, they reached a lonely valley near two small hills, Safa and Marwa. Prophet Abraham (pbuh) told his wife to stay near one of the hills with Ishmael.`,
    [
      { word: 'faith', definition: 'Strong belief and trust in Allah.' },
      { word: 'spread', definition: 'To make an idea or message reach more people.' },
      { word: 'camelback', definition: 'Riding on the back of the large desert animal with a hump.' },
      { word: 'tiring', definition: 'Making someone feel that they need rest.' },
    ],
    [
      { id: 'abraham-b1-en-10-1', x: 32, y: 30, title: 'Toward New Lands', description: 'Abraham (pbuh) left Babylon and traveled to other lands to spread Allah’s message.' },
      { id: 'abraham-b1-en-10-2', x: 69, y: 68, title: 'Lonely Valley', description: 'Abraham (pbuh), Hagar and Ishmael (pbuh) reached a lonely valley near the hills of Safa and Marwa.' },
    ],
  ),
  story(11, 'Hagar and Ishmael in the Valley',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_chapter11.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F10_Chapter_11_Hagar_and_Ishmael_in_the_Valley.mp3?alt=media&token=c15b8c94-5a2b-485b-bfd2-ac9b536bc95e',
    `Abraham (pbuh) left them there and prayed to Allah to protect them. He said, “O our Lord! I have left my family to stay in a valley with no farming, near Your Holy House (the Ka’ba in Mecca); O Allah! Give them blessings so that they may give thanks.” (See Surah Ibrahim: 37.) Hagar knew that Abraham (pbuh) was doing what Allah told him.

She fearlessly said to Abraham (pbuh) when he left them in this desert valley, “Allah will never let us die; He will surely protect us.”

The valley had no trees, no fruit, no food, and no water. This was part of Allah’s plan to build the Holy House, the Ka’ba, and the city of Mecca in the time to come. But soon their food and water ran out. Hagar needed to feed her child. She helplessly started running from one hill to another looking for water and food. She ran between these two hills seven times. This effort by Hagar is known as “sa’y” in Hajj and Umrah rituals. Even today, Muslims must complete the ritual “sa’y” after performing the tawaf during Hajj or Umrah. This ritual involves walking back and forth between the hills of Safa and Marwa. Safa is about 130 meters from the Ka’ba, while Marwa is approximately 300 meters away.`,
    [
      { word: 'fearlessly', definition: 'Bravely, without being afraid.' },
      { word: 'ran out', definition: 'Was completely used up so none remained.' },
      { word: 'ritual', definition: 'A religious action performed in a special way.' },
      { word: 'approximately', definition: 'About a number or amount, but not exactly.' },
    ],
    [
      { id: 'abraham-b1-en-11-1', x: 26, y: 48, title: 'Hagar’s Trust', description: 'Hagar trusted that Allah would protect them in the desert valley.' },
      { id: 'abraham-b1-en-11-2', x: 75, y: 70, title: 'Safa and Marwa', description: 'Hagar ran between the two hills seven times, and Muslims still perform this ritual, sa’y, in Hajj and Umrah.' },
    ],
  ),
  story(12, 'Zamzam and the City of Mecca',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_chapter12.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F11_Chapter_12_Zamzam_and_the_City_of_Mecca.mp3?alt=media&token=bb0f1c23-afa2-450f-b7f4-016f43261b19',
    `But there was no water and nobody nearby to help her. While the little child Ishmael was crying with thirst and Hagar was running between the two hills, suddenly water started flowing from the ground under the feet of Ishmael. When Hagar saw this from a distance, she shouted, “Zamzam!” meaning “Flow slowly, stop!”

She was so happy. She drank the water, collected it, and fed her child. Later on, this water gained a lot of fame. This historic Zamzam spring still exists, providing water for thousands of years. The water is special because it was a gift from Allah in the middle of the desert. Ishmael and his mother began to live in the valley. More people came to settle there because of this sacred spring.

They started building up a city called Mecca. Meanwhile, Abraham (pbuh) visited Mecca several times to see his family.`,
    [
      { word: 'thirst', definition: 'A strong need to drink water.' },
      { word: 'flowing', definition: 'Moving steadily and continuously, like a river.' },
      { word: 'spring', definition: 'A place where water naturally comes from the ground.' },
      { word: 'settle', definition: 'To begin living permanently in a place.' },
    ],
    [
      { id: 'abraham-b1-en-12-1', x: 40, y: 64, title: 'Zamzam Water', description: 'Water suddenly flowed from the ground under the feet of Ishmael (pbuh), a gift from Allah in the desert.' },
      { id: 'abraham-b1-en-12-2', x: 62, y: 36, title: 'A Growing City', description: 'More people came to settle near the sacred spring, and they started building Mecca.' },
    ],
  ),
  story(13, 'Building the Ka’ba',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_chapter13.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F12_Chapter_13_Building_the_Ka%E2%80%99ba.mp3?alt=media&token=eefcf743-03ee-4539-b82c-4ee0f4dfc068',
    `One day, Allah commanded Abraham (pbuh) to build the House of Allah, the Ka’ba. Abraham (pbuh) said to Ishmael, “O Ishmael, Allah told me to do an important task, and you will help me in this task.” Ishmael replied, “I will help you for sure.”

The Ka’ba was an ancient building originally built as the first sacred place on Earth (see Surah Al Imran: 96), but it disappeared over time. Father and son found the foundations of the old building and began to construct the new building on it.

After he built the Holy Ka’ba, Abraham’s (pbuh) mission was over. He built a place of worship for all people of different races and colors. Hajj reminds Muslims about many events of Allah’s beloved “friend,” Abraham (pbuh), and his family.

Over the centuries, Ishmael’s descendants grew in number; among them was Muhammad, the Prophet of Islam (pbuh). They spread all over the Arabian Peninsula to carry their grandfather Abraham’s (pbuh) message of the Oneness of Allah. The message is “There is no god but Allah. He has no partner, rival, or helper. Allah is unique in every way.”`,
    [
      { word: 'foundations', definition: 'The strong base under a building.' },
      { word: 'construct', definition: 'To build something.' },
      { word: 'races', definition: 'Groups of people with different backgrounds or physical traits.' },
      { word: 'Oneness', definition: 'The belief that Allah is unique and has no partner.' },
    ],
    [
      { id: 'abraham-b1-en-13-1', x: 33, y: 42, title: 'The Old Foundations', description: 'Abraham (pbuh) and Ishmael (pbuh) found the old foundations and built the Ka’ba on them.' },
      { id: 'abraham-b1-en-13-2', x: 71, y: 66, title: 'The Message of Oneness', description: 'The descendants of Ishmael (pbuh) carried Abraham’s (pbuh) message of the Oneness of Allah, and Prophet Muhammad (pbuh) was one of them.' },
    ],
  ),
  { id: 14, type: 'quiz', title: 'Knowledge Check', image: '', audioUrl: '', content: 'Check your whole-story understanding with eight evidence-based questions.' },
  { id: 15, type: 'exercises', title: 'Language Review', image: '', content: 'Review and use grammar patterns, meaning relationships and communicative functions from across the book.' },
  { id: 16, type: 'vocabulary-match', title: 'B1 Vocabulary Challenge', image: '', content: 'Match ten reviewed B1 words with their meanings.' },
  { id: 17, type: 'glossary', title: 'Master Glossary', image: '', content: 'Review all key vocabulary from the story in one place.' },
  { id: 18, type: 'final-challenge', title: 'Final Challenge', image: '', content: 'Demonstrate B1-level understanding across the complete story.' },
];

const masterGlossary: NonNullable<PageData['vocabulary']> = [
  {
    "word": "homeland",
    "definition": "The country or place where a person comes from.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ˈhoʊmlænd/",
    "wordFamily": [
      "home",
      "homeland"
    ],
    "collocations": [
      "leave one’s homeland",
      "return to one’s homeland"
    ],
    "synonyms": [
      "native land"
    ],
    "chapter": 1,
    "chapterTitle": "Abraham in Babylon",
    "storyExample": "In his homeland, people worshipped the stars, the moon, the sun, and statues made from wood and stone.",
    "category": "Places & Identity"
  },
  {
    "word": "intelligent",
    "definition": "Able to learn, understand, and think well.",
    "partOfSpeech": "adjective",
    "level": "B1",
    "pronunciation": "/ɪnˈtelɪdʒənt/",
    "wordFamily": [
      "intelligence",
      "intelligent",
      "intelligently"
    ],
    "collocations": [
      "intelligent person",
      "highly intelligent"
    ],
    "synonyms": [
      "clever"
    ],
    "antonyms": [
      "unintelligent"
    ],
    "chapter": 1,
    "chapterTitle": "Abraham in Babylon",
    "storyExample": "He could not understand how an intelligent person could make a statue and then see it as a god which could help or harm him.",
    "category": "Learning & Thinking"
  },
  {
    "word": "begging",
    "definition": "Asking strongly for help or something needed.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/ˈbeɡɪŋ/",
    "wordFamily": [
      "beg",
      "begged",
      "begging"
    ],
    "collocations": [
      "beg for help",
      "crying and begging"
    ],
    "synonyms": [
      "pleading"
    ],
    "chapter": 1,
    "chapterTitle": "Abraham in Babylon",
    "storyExample": "Abraham was surprised to see that when people entered the building, they bowed to the statues and started crying and begging.",
    "category": "Communication & Actions"
  },
  {
    "word": "bowed",
    "definition": "Bent the head or body forward to show respect or worship.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/baʊd/",
    "wordFamily": [
      "bow",
      "bowed",
      "bowing"
    ],
    "collocations": [
      "bow to someone",
      "bow your head"
    ],
    "synonyms": [
      "bent down"
    ],
    "chapter": 1,
    "chapterTitle": "Abraham in Babylon",
    "storyExample": "Abraham was surprised to see that when people entered the building, they bowed to the statues and started crying and begging.",
    "category": "Spiritual Life"
  },
  {
    "word": "idol maker",
    "definition": "A person whose job is to carve statues that people worship.",
    "partOfSpeech": "noun phrase",
    "level": "B1",
    "pronunciation": "/ˈaɪdəl ˌmeɪkər/",
    "wordFamily": [
      "idol",
      "maker"
    ],
    "collocations": [
      "idol maker",
      "make idols"
    ],
    "chapter": 2,
    "chapterTitle": "Abraham and His Father’s Idols",
    "storyExample": "Abraham’s father was an idol maker, named Azer.",
    "category": "People & Roles"
  },
  {
    "word": "favors",
    "definition": "Helpful acts or good things given to someone.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ˈfeɪvərz/",
    "wordFamily": [
      "favor",
      "favors"
    ],
    "collocations": [
      "ask favors",
      "do someone a favor"
    ],
    "synonyms": [
      "help",
      "kind acts"
    ],
    "chapter": 2,
    "chapterTitle": "Abraham and His Father’s Idols",
    "storyExample": "We ask favors from them and give them presents.",
    "category": "Helping & Giving"
  },
  {
    "word": "respect",
    "definition": "A feeling that someone or something is important and deserves honor.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/rɪˈspekt/",
    "wordFamily": [
      "respect",
      "respectful",
      "respected"
    ],
    "collocations": [
      "show respect",
      "love and respect"
    ],
    "synonyms": [
      "honor"
    ],
    "antonyms": [
      "disrespect"
    ],
    "chapter": 2,
    "chapterTitle": "Abraham and His Father’s Idols",
    "storyExample": "We worship them; we show love and respect to them.",
    "category": "Values & Belief"
  },
  {
    "word": "kicked",
    "definition": "Hit something with the foot.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/kɪkt/",
    "wordFamily": [
      "kick",
      "kicked",
      "kicking"
    ],
    "collocations": [
      "kick something",
      "kick with the foot"
    ],
    "synonyms": [
      "struck"
    ],
    "chapter": 2,
    "chapterTitle": "Abraham and His Father’s Idols",
    "storyExample": "But Abraham used to play with these idols as toys; he rode on their backs and sometimes kicked them.",
    "category": "Actions"
  },
  {
    "word": "Creator",
    "definition": "The One who brought everything into existence and controls it.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/kriˈeɪtər/",
    "wordFamily": [
      "create",
      "creation",
      "Creator"
    ],
    "collocations": [
      "true Creator",
      "Creator of everything"
    ],
    "chapter": 3,
    "chapterTitle": "Searching for the True Creator",
    "storyExample": "On the other hand, Abraham was in search of one true Creator.",
    "category": "Belief & Faith"
  },
  {
    "word": "countryside",
    "definition": "Land outside towns and cities.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ˈkʌntrisaɪd/",
    "collocations": [
      "walk in the countryside",
      "open countryside"
    ],
    "chapter": 3,
    "chapterTitle": "Searching for the True Creator",
    "storyExample": "One night, Abraham left his home to take a walk in the countryside.",
    "category": "Places & Nature"
  },
  {
    "word": "cave",
    "definition": "A natural hollow place in a mountain or rock.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/keɪv/",
    "wordFamily": [
      "cave",
      "caves"
    ],
    "collocations": [
      "mountain cave",
      "find a cave"
    ],
    "chapter": 3,
    "chapterTitle": "Searching for the True Creator",
    "storyExample": "On a nearby mountain, he found a cave, sat there, and started thinking about Allah.",
    "category": "Places & Nature"
  },
  {
    "word": "faded",
    "definition": "Gradually became less visible or disappeared.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/ˈfeɪdɪd/",
    "wordFamily": [
      "fade",
      "faded",
      "fading"
    ],
    "collocations": [
      "gradually fade",
      "moon faded"
    ],
    "synonyms": [
      "dimmed"
    ],
    "chapter": 3,
    "chapterTitle": "Searching for the True Creator",
    "storyExample": "But when the moon faded, he understood that it could not be his Lord.",
    "category": "Change & Description"
  },
  {
    "word": "sunrise",
    "definition": "The time when the sun first appears in the morning.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ˈsʌnraɪz/",
    "collocations": [
      "at sunrise",
      "before sunrise"
    ],
    "antonyms": [
      "sunset"
    ],
    "chapter": 4,
    "chapterTitle": "Abraham Receives Guidance",
    "storyExample": "Abraham stayed until sunrise, and when he saw the bright sun, he wondered, “Could this be my Lord? It is bigger.”",
    "category": "Time & Nature"
  },
  {
    "word": "creations",
    "definition": "Everything Allah has made, such as the sun, the moon and the stars.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/kriˈeɪʃənz/",
    "wordFamily": [
      "create",
      "creation",
      "Creator"
    ],
    "collocations": [
      "Allah’s creations",
      "created things"
    ],
    "chapter": 4,
    "chapterTitle": "Abraham Receives Guidance",
    "storyExample": "But when it set, he understood that Allah could not be one of the creations.",
    "category": "Belief & Nature"
  },
  {
    "word": "prostrated",
    "definition": "Put the forehead to the ground in worship.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/ˈprɑːstreɪtɪd/",
    "wordFamily": [
      "prostrate",
      "prostrated",
      "prostration"
    ],
    "collocations": [
      "prostrate oneself",
      "prostrate in worship"
    ],
    "chapter": 4,
    "chapterTitle": "Abraham Receives Guidance",
    "storyExample": "Abraham prostrated himself and asked Allah for help.",
    "category": "Spiritual Life"
  },
  {
    "word": "stone",
    "definition": "To throw rocks at someone to hurt or kill them.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/stoʊn/",
    "wordFamily": [
      "stone",
      "stoned",
      "stoning"
    ],
    "collocations": [
      "stone someone",
      "threaten to stone"
    ],
    "chapter": 4,
    "chapterTitle": "Abraham Receives Guidance",
    "storyExample": "If you do not stop speaking like this, I will stone you.",
    "category": "Actions & Conflict"
  },
  {
    "word": "give up",
    "definition": "To stop trying to do something.",
    "partOfSpeech": "phrasal verb",
    "level": "B1",
    "pronunciation": "/ɡɪv ʌp/",
    "wordFamily": [
      "give up",
      "gave up",
      "given up"
    ],
    "collocations": [
      "never give up",
      "not give up easily"
    ],
    "synonyms": [
      "quit",
      "stop trying"
    ],
    "antonyms": [
      "keep trying"
    ],
    "chapter": 5,
    "chapterTitle": "Abraham Calls His People",
    "storyExample": "Abraham (pbuh) did not give up and told them, “My Lord gives me food and drink when I need them, and heals me when I am sick.",
    "category": "Character & Values"
  },
  {
    "word": "harm",
    "definition": "To hurt or damage someone or something.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/hɑːrm/",
    "wordFamily": [
      "harm",
      "harmful",
      "harmless"
    ],
    "collocations": [
      "harm someone",
      "cause harm"
    ],
    "synonyms": [
      "hurt",
      "damage"
    ],
    "antonyms": [
      "protect"
    ],
    "chapter": 5,
    "chapterTitle": "Abraham Calls His People",
    "storyExample": "They have no power to help or harm you.",
    "category": "Actions & Safety"
  },
  {
    "word": "heals",
    "definition": "Makes a sick or injured person well again.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/hiːlz/",
    "wordFamily": [
      "heal",
      "heals",
      "healing"
    ],
    "collocations": [
      "heal the sick",
      "heals me"
    ],
    "synonyms": [
      "cures"
    ],
    "chapter": 5,
    "chapterTitle": "Abraham Calls His People",
    "storyExample": "My Lord gives me food and drink when I need them, and heals me when I am sick.",
    "category": "Health & Care"
  },
  {
    "word": "reconsider",
    "definition": "To think again about an idea or belief.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/ˌriːkənˈsɪdər/",
    "wordFamily": [
      "consider",
      "reconsider",
      "reconsideration"
    ],
    "collocations": [
      "reconsider a decision",
      "reconsider a belief"
    ],
    "synonyms": [
      "think again"
    ],
    "chapter": 5,
    "chapterTitle": "Abraham Calls His People",
    "storyExample": "He wanted them to reconsider their beliefs.",
    "category": "Learning & Thinking"
  },
  {
    "word": "foolishness",
    "definition": "Lack of good sense or wise thinking.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ˈfuːlɪʃnəs/",
    "wordFamily": [
      "fool",
      "foolish",
      "foolishly",
      "foolishness"
    ],
    "collocations": [
      "show foolishness",
      "foolishness of a belief"
    ],
    "antonyms": [
      "wisdom"
    ],
    "chapter": 6,
    "chapterTitle": "Abraham Enters the Temple",
    "storyExample": "Prophet Abraham (pbuh) decided to show them the foolishness of their beliefs.",
    "category": "Thinking & Judgment"
  },
  {
    "word": "celebration",
    "definition": "A special event when people gather for a happy occasion.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ˌseləˈbreɪʃən/",
    "wordFamily": [
      "celebrate",
      "celebration"
    ],
    "collocations": [
      "big celebration",
      "hold a celebration"
    ],
    "chapter": 6,
    "chapterTitle": "Abraham Enters the Temple",
    "storyExample": "There was a big celebration soon.",
    "category": "Culture & Events"
  },
  {
    "word": "axe",
    "definition": "A tool with a sharp metal head used for cutting.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/æks/",
    "wordFamily": [
      "axe",
      "axes"
    ],
    "collocations": [
      "use an axe",
      "hang an axe"
    ],
    "chapter": 6,
    "chapterTitle": "Abraham Enters the Temple",
    "storyExample": "All the people usually went outside of town, so he got an axe and waited until the whole town was empty.",
    "category": "Objects & Tools"
  },
  {
    "word": "ridiculous",
    "definition": "Very silly or unreasonable.",
    "partOfSpeech": "adjective",
    "level": "B1",
    "pronunciation": "/rɪˈdɪkjələs/",
    "wordFamily": [
      "ridiculous",
      "ridiculously"
    ],
    "collocations": [
      "look ridiculous",
      "sound ridiculous"
    ],
    "synonyms": [
      "absurd",
      "silly"
    ],
    "chapter": 6,
    "chapterTitle": "Abraham Enters the Temple",
    "storyExample": "Offering food to these statues was so ridiculous.",
    "category": "Description & Judgment"
  },
  {
    "word": "smashed",
    "definition": "Broken violently into many pieces.",
    "partOfSpeech": "adjective",
    "level": "B1",
    "pronunciation": "/smæʃt/",
    "wordFamily": [
      "smash",
      "smashed",
      "smashing"
    ],
    "collocations": [
      "smashed idols",
      "smashed into pieces"
    ],
    "synonyms": [
      "broken"
    ],
    "chapter": 7,
    "chapterTitle": "The Broken Idols",
    "storyExample": "They all gathered around the smashed idols.",
    "category": "Description & Change"
  },
  {
    "word": "displeased",
    "definition": "Unhappy or annoyed about something.",
    "partOfSpeech": "adjective",
    "level": "B1",
    "pronunciation": "/dɪsˈpliːzd/",
    "wordFamily": [
      "please",
      "pleased",
      "displeased"
    ],
    "collocations": [
      "feel displeased",
      "displeased with something"
    ],
    "synonyms": [
      "annoyed"
    ],
    "antonyms": [
      "pleased"
    ],
    "chapter": 7,
    "chapterTitle": "The Broken Idols",
    "storyExample": "The people were displeased with what they heard and said, “You are well aware that these idols don’t speak!”",
    "category": "Feelings"
  },
  {
    "word": "shame",
    "definition": "A painful feeling caused by knowing something is wrong.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ʃeɪm/",
    "wordFamily": [
      "shame",
      "ashamed",
      "shameful"
    ],
    "collocations": [
      "feel shame",
      "look in shame"
    ],
    "synonyms": [
      "embarrassment"
    ],
    "chapter": 7,
    "chapterTitle": "The Broken Idols",
    "storyExample": "They looked at each other in shame because their thoughts and feelings told them that Abraham (pbuh) was right.",
    "category": "Feelings & Values"
  },
  {
    "word": "arrogant",
    "definition": "Too proud to accept the truth or a mistake.",
    "partOfSpeech": "adjective",
    "level": "B1",
    "pronunciation": "/ˈærəɡənt/",
    "wordFamily": [
      "arrogant",
      "arrogance",
      "arrogantly"
    ],
    "collocations": [
      "arrogant attitude",
      "be arrogant"
    ],
    "synonyms": [
      "proud"
    ],
    "antonyms": [
      "humble"
    ],
    "chapter": 7,
    "chapterTitle": "The Broken Idols",
    "storyExample": "But they were so arrogant that they couldn’t accept the truth and admit they were wrong.",
    "category": "Character & Values"
  },
  {
    "word": "firewood",
    "definition": "Wood that is cut and used to make a fire.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ˈfaɪərwʊd/",
    "wordFamily": [
      "fire",
      "firewood"
    ],
    "collocations": [
      "collect firewood",
      "a pile of firewood"
    ],
    "synonyms": [
      "wood for burning"
    ],
    "chapter": 8,
    "chapterTitle": "Preparing the Great Fire",
    "storyExample": "Firewood was collected for the fire for days.",
    "category": "World & Nature"
  },
  {
    "word": "approach",
    "definition": "To come near something or someone.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/əˈproʊtʃ/",
    "wordFamily": [
      "approach",
      "approached",
      "approaching"
    ],
    "collocations": [
      "approach a place",
      "approach carefully"
    ],
    "synonyms": [
      "come near"
    ],
    "chapter": 8,
    "chapterTitle": "Preparing the Great Fire",
    "storyExample": "The fire was so big that people couldn’t approach it.",
    "category": "Actions & Movement"
  },
  {
    "word": "flames",
    "definition": "The bright, burning parts of a fire.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/fleɪmz/",
    "wordFamily": [
      "flame",
      "flames"
    ],
    "collocations": [
      "rising flames",
      "huge flames"
    ],
    "chapter": 8,
    "chapterTitle": "Preparing the Great Fire",
    "storyExample": "The heat was so strong that even birds couldn’t fly over the rising flames.",
    "category": "World & Nature"
  },
  {
    "word": "catapult",
    "definition": "An old machine used to throw heavy objects.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ˈkætəpʌlt/",
    "wordFamily": [
      "catapult",
      "catapults"
    ],
    "collocations": [
      "use a catapult",
      "placed on a catapult"
    ],
    "chapter": 8,
    "chapterTitle": "Preparing the Great Fire",
    "storyExample": "Prophet Abraham’s (pbuh) hands and feet were tied, and he was placed on a catapult.",
    "category": "Objects & Technology"
  },
  {
    "word": "miracle",
    "definition": "An amazing event that shows Allah’s power and that no human can do.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ˈmɪrəkəl/",
    "wordFamily": [
      "miracle",
      "miraculous"
    ],
    "collocations": [
      "a miracle from Allah",
      "witness a miracle"
    ],
    "chapter": 9,
    "chapterTitle": "The Miracle and Nimrod",
    "storyExample": "People felt embarrassed by the miracle, yet their anger and arrogance remained unchanged.",
    "category": "Belief & Faith"
  },
  {
    "word": "rage",
    "definition": "Very strong anger.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/reɪdʒ/",
    "wordFamily": [
      "rage",
      "raging"
    ],
    "collocations": [
      "in a rage",
      "rage did not calm down"
    ],
    "synonyms": [
      "fury"
    ],
    "antonyms": [
      "calm"
    ],
    "chapter": 9,
    "chapterTitle": "The Miracle and Nimrod",
    "storyExample": "Prophet Abraham (pbuh) tried every way to show them their error; however, their rage didn’t calm down.",
    "category": "Feelings"
  },
  {
    "word": "guards",
    "definition": "People whose job is to protect a person or place.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ɡɑːrdz/",
    "wordFamily": [
      "guard",
      "guards",
      "guarded"
    ],
    "collocations": [
      "palace guards",
      "order the guards"
    ],
    "synonyms": [
      "protectors"
    ],
    "chapter": 9,
    "chapterTitle": "The Miracle and Nimrod",
    "storyExample": "He ordered his guards to bring two slaves and to put them to death.",
    "category": "People & Roles"
  },
  {
    "word": "ordinary",
    "definition": "Normal and not unusual or special.",
    "partOfSpeech": "adjective",
    "level": "B1",
    "pronunciation": "/ˈɔːrdəneri/",
    "wordFamily": [
      "ordinary",
      "ordinarily"
    ],
    "collocations": [
      "ordinary person",
      "ordinary life"
    ],
    "synonyms": [
      "normal"
    ],
    "antonyms": [
      "extraordinary"
    ],
    "chapter": 9,
    "chapterTitle": "The Miracle and Nimrod",
    "storyExample": "He realized that Abraham was not an ordinary person, so he decided to meet him.",
    "category": "Description"
  },
  {
    "word": "faith",
    "definition": "Strong belief and trust in Allah.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/feɪθ/",
    "wordFamily": [
      "faith",
      "faithful",
      "faithfully"
    ],
    "collocations": [
      "faith in Allah",
      "strong faith"
    ],
    "synonyms": [
      "belief",
      "trust"
    ],
    "chapter": 10,
    "chapterTitle": "Leaving Babylon",
    "storyExample": "Only one woman and one man of his people shared his faith in Allah.",
    "category": "Belief & Faith"
  },
  {
    "word": "spread",
    "definition": "To make an idea or message reach more people.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/spred/",
    "wordFamily": [
      "spread",
      "spreading"
    ],
    "collocations": [
      "spread a message",
      "spread information"
    ],
    "synonyms": [
      "disseminate"
    ],
    "chapter": 10,
    "chapterTitle": "Leaving Babylon",
    "storyExample": "Therefore, he decided to leave Babylon and travel to other lands to spread Allah’s message.",
    "category": "Communication"
  },
  {
    "word": "camelback",
    "definition": "Riding on the back of the large desert animal with a hump.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ˈkæməlbæk/",
    "collocations": [
      "travel on camelback",
      "journey on camelback"
    ],
    "chapter": 10,
    "chapterTitle": "Leaving Babylon",
    "storyExample": "He traveled from Babylon to Syria and Palestine on camelback.",
    "category": "Travel"
  },
  {
    "word": "tiring",
    "definition": "Making someone feel that they need rest.",
    "partOfSpeech": "adjective",
    "level": "B1",
    "pronunciation": "/ˈtaɪərɪŋ/",
    "wordFamily": [
      "tire",
      "tired",
      "tiring"
    ],
    "collocations": [
      "tiring journey",
      "physically tiring"
    ],
    "synonyms": [
      "exhausting"
    ],
    "antonyms": [
      "restful"
    ],
    "chapter": 10,
    "chapterTitle": "Leaving Babylon",
    "storyExample": "It was a long, hot, and tiring journey.",
    "category": "Travel & Feelings"
  },
  {
    "word": "fearlessly",
    "definition": "Bravely, without being afraid.",
    "partOfSpeech": "adverb",
    "level": "B1",
    "pronunciation": "/ˈfɪrləsli/",
    "wordFamily": [
      "fear",
      "fearless",
      "fearlessly"
    ],
    "collocations": [
      "act fearlessly",
      "speak fearlessly"
    ],
    "synonyms": [
      "bravely"
    ],
    "antonyms": [
      "fearfully"
    ],
    "chapter": 11,
    "chapterTitle": "Hagar and Ishmael in the Valley",
    "storyExample": "She fearlessly said to Abraham (pbuh) when he left them in this desert valley, “Allah will never let us die; He will surely protect us.”",
    "category": "Character & Values"
  },
  {
    "word": "ran out",
    "definition": "Was completely used up so none remained.",
    "partOfSpeech": "phrasal verb",
    "level": "B1",
    "pronunciation": "/ræn aʊt/",
    "wordFamily": [
      "run",
      "ran",
      "running"
    ],
    "collocations": [
      "run out of food",
      "water ran out"
    ],
    "synonyms": [
      "was used up"
    ],
    "chapter": 11,
    "chapterTitle": "Hagar and Ishmael in the Valley",
    "storyExample": "But soon their food and water ran out.",
    "category": "Daily Life & Resources"
  },
  {
    "word": "ritual",
    "definition": "A religious action performed in a special way.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ˈrɪtʃuəl/",
    "wordFamily": [
      "ritual",
      "rituals"
    ],
    "collocations": [
      "religious ritual",
      "perform a ritual"
    ],
    "chapter": 11,
    "chapterTitle": "Hagar and Ishmael in the Valley",
    "storyExample": "Even today, Muslims must complete the ritual “sa’y” after performing the tawaf during Hajj or Umrah.",
    "category": "Spiritual Life"
  },
  {
    "word": "approximately",
    "definition": "About a number or amount, but not exactly.",
    "partOfSpeech": "adverb",
    "level": "B1",
    "pronunciation": "/əˈprɑːksɪmətli/",
    "wordFamily": [
      "approximate",
      "approximately"
    ],
    "collocations": [
      "approximately 300 meters",
      "approximately equal"
    ],
    "synonyms": [
      "about",
      "roughly"
    ],
    "chapter": 11,
    "chapterTitle": "Hagar and Ishmael in the Valley",
    "storyExample": "Safa is about 130 meters from the Ka’ba, while Marwa is approximately 300 meters away.",
    "category": "Quantity & Measurement"
  },
  {
    "word": "thirst",
    "definition": "A strong need to drink water.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/θɜːrst/",
    "wordFamily": [
      "thirst",
      "thirsty"
    ],
    "collocations": [
      "cry with thirst",
      "suffer from thirst"
    ],
    "chapter": 12,
    "chapterTitle": "Zamzam and the City of Mecca",
    "storyExample": "While the little child Ishmael was crying with thirst and Hagar was running between the two hills, suddenly water started flowing from the ground under the feet of Ishmael.",
    "category": "Needs & Health"
  },
  {
    "word": "flowing",
    "definition": "Moving steadily and continuously, like a river.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/ˈfloʊɪŋ/",
    "wordFamily": [
      "flow",
      "flowing"
    ],
    "collocations": [
      "water flowing",
      "flowing from the ground"
    ],
    "synonyms": [
      "running"
    ],
    "chapter": 12,
    "chapterTitle": "Zamzam and the City of Mecca",
    "storyExample": "While the little child Ishmael was crying with thirst and Hagar was running between the two hills, suddenly water started flowing from the ground under the feet of Ishmael.",
    "category": "World & Nature"
  },
  {
    "word": "spring",
    "definition": "A place where water naturally comes from the ground.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/sprɪŋ/",
    "wordFamily": [
      "spring",
      "springs"
    ],
    "collocations": [
      "natural spring",
      "sacred spring"
    ],
    "chapter": 12,
    "chapterTitle": "Zamzam and the City of Mecca",
    "storyExample": "This historic Zamzam spring still exists, providing water for thousands of years.",
    "category": "World & Nature"
  },
  {
    "word": "settle",
    "definition": "To begin living permanently in a place.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/ˈsetəl/",
    "wordFamily": [
      "settle",
      "settled",
      "settlement"
    ],
    "collocations": [
      "settle in a place",
      "people settle there"
    ],
    "synonyms": [
      "establish a home"
    ],
    "chapter": 12,
    "chapterTitle": "Zamzam and the City of Mecca",
    "storyExample": "More people came to settle there because of this sacred spring.",
    "category": "People & Places"
  },
  {
    "word": "foundations",
    "definition": "The strong base under a building.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/faʊnˈdeɪʃənz/",
    "wordFamily": [
      "foundation",
      "foundations"
    ],
    "collocations": [
      "building foundations",
      "old foundations"
    ],
    "chapter": 13,
    "chapterTitle": "Building the Ka’ba",
    "storyExample": "Father and son found the foundations of the old building and began to construct the new building on it.",
    "category": "Buildings & Construction"
  },
  {
    "word": "construct",
    "definition": "To build something.",
    "partOfSpeech": "verb",
    "level": "B1",
    "pronunciation": "/kənˈstrʌkt/",
    "wordFamily": [
      "construct",
      "construction",
      "constructive"
    ],
    "collocations": [
      "construct a building",
      "begin to construct"
    ],
    "synonyms": [
      "build"
    ],
    "chapter": 13,
    "chapterTitle": "Building the Ka’ba",
    "storyExample": "Father and son found the foundations of the old building and began to construct the new building on it.",
    "category": "Buildings & Construction"
  },
  {
    "word": "races",
    "definition": "Groups of people with different backgrounds or physical traits.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ˈreɪsɪz/",
    "wordFamily": [
      "race",
      "racial"
    ],
    "collocations": [
      "different races",
      "people of all races"
    ],
    "chapter": 13,
    "chapterTitle": "Building the Ka’ba",
    "storyExample": "He built a place of worship for all people of different races and colors.",
    "category": "People & Society"
  },
  {
    "word": "Oneness",
    "definition": "The belief that Allah is unique and has no partner.",
    "partOfSpeech": "noun",
    "level": "B1",
    "pronunciation": "/ˈwʌnnəs/",
    "wordFamily": [
      "one",
      "Oneness"
    ],
    "collocations": [
      "Oneness of Allah",
      "message of Oneness"
    ],
    "chapter": 13,
    "chapterTitle": "Building the Ka’ba",
    "storyExample": "They spread all over the Arabian Peninsula to carry their grandfather Abraham’s (pbuh) message of the Oneness of Allah.",
    "category": "Belief & Faith"
  }
];

export const abrahamB1Pages: PageData[] = abrahamB1RawPages.map(page => {
  if (page.type !== 'story') {
    return page.id === 17 ? { ...page, image: '', vocabulary: masterGlossary, animatedWords: undefined } : { ...page, image: '', animatedWords: undefined };
  }
  return { ...page, animatedWords: undefined };
});
