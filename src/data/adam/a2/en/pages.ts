import { PageData } from '../../../../types';

// Canonical story source: prose, Word Notes, media, exactly two hotspots per chapter, and page shells.
// Learning activities are attached from exercises.ts / languageFocus*.ts by ../index.ts.
export const adamA2Pages: PageData[] = [
  {
    id: 1, type: 'story', title: 'Opening & The Creation',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_ch1.png?alt=media&token=ca08c6ed-5540-4dc8-b880-7de3d943ce9c',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2FAdam%20A2%20Chapter%201%20(1).mp3?alt=media&token=09559d75-7a75-414f-a910-3933daa696f9',
    content: "Adam (pbuh) is the first messenger of Allah and the father of all humans. Allah created him from soil and cared about him very much because he was the first human. We are the grandchildren of Adam (pbuh), so we can learn many lessons from this fantastic story. \n\nAllah created the sky and the earth. After that, he told the angels that he was going to create a human. He said, “The human is going to become the ruler on earth. The ruler is going to live on earth for many years.” Angels got surprised. They began waiting with curiosity. \n\nThen Allah's angels collected soil from different parts of the earth, and Allah shaped Adam. Because of this, humans have different skin colors. \n\nProphet Muhammad (pbuh) said that Allah created Adam (pbuh) from a handful of dust from different lands. So the children of Adam (pbuh) are white, red, black, and yellow in color.",
    vocabulary: [{ word: 'Messenger', definition: 'A person who carries a message from Allah.' }, { word: 'soil', definition: 'Earth in which plants can grow.' }, { word: 'curiosity', definition: 'Wanting to know or learn something.' }],
    hotspots: [
      { id: 'h1', x: 30, y: 40, title: 'Soil', description: 'Allah created him from soil and cared about him very much because he was the first human.' },
      { id: 'h2', x: 70, y: 20, title: 'Earth', description: 'Allah created the sky and the earth.' },
    ],
    animatedWords: ['soil', 'sky', 'earth', 'dust'], syncPoints: [0, 18, 38, 60],
    timedChunks: [
      { start: 0.176, end: 3.5, text: 'Adam (pbuh) is the first messenger of' }, { start: 4.0, end: 6.663, text: 'Allah and the father of all humans.' },
      { start: 8.044, end: 10.828, text: 'Allah created him from soil and cared' }, { start: 10.868, end: 11.881, text: 'about him very' }, { start: 11.914, end: 14.852, text: 'much because he was the first human.' },
      { start: 16.088, end: 18.786, text: 'We are the grandchildren of Adam (pbuh),' }, { start: 20.118, end: 22.611, text: 'so we can learn many lessons' }, { start: 22.651, end: 23.651, text: 'from this fantastic' },
      { start: 24.151, end: 27.938, text: 'story. Allah created the sky and' }, { start: 27.970, end: 31.310, text: 'the earth. After that, he told the' }, { start: 31.326, end: 34.120, text: 'angels that he was going to create a human.' },
      { start: 35.420, end: 38.953, text: 'He said, the human is going to become the' }, { start: 39.033, end: 42.806, text: 'ruler on earth. The ruler is going to live' }, { start: 43.306, end: 45.583, text: 'on earth for many years.' },
      { start: 45.623, end: 47.575, text: 'Angels got surprised.' }, { start: 48.442, end: 51.931, text: 'They began waiting with' }, { start: 51.971, end: 53.162, text: "curiosity. Then Allah's" },
      { start: 53.243, end: 56.518, text: 'angels collected soil from different parts of the earth,' }, { start: 57.336, end: 61.173, text: 'and Allah shaped Adam. Because of this,' }, { start: 61.607, end: 63.661, text: 'humans have different skin colors.' },
      { start: 64.962, end: 68.831, text: 'Prophet Muhammad (pbuh) said that Allah' }, { start: 69.331, end: 72.456, text: 'created Adam (pbuh) from a handful of' }, { start: 72.496, end: 73.550, text: 'dust from different' },
      { start: 74.050, end: 78.125, text: 'lands. So the children of Adam (pbuh) are' }, { start: 78.142, end: 81.657, text: 'white, red, black, and' }, { start: 81.834, end: 82.834, text: 'yellow in color.' },
    ],
  },
  {
    id: 2, type: 'story', title: 'Knowledge and Respect',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter2.png?alt=media&token=649ddbc9-ea42-4fe9-9a58-09ce1d27191a',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fadam_a2_english_chapter2.mp3?alt=media&token=1e1580e8-16b3-4957-8f44-0f06bed5ec21',
    content: 'Allah told His angels, “After I have created Adam and given him life, show respect to him.” Adam could learn and understand. He was wiser than the angels, because Allah gave Adam knowledge and taught him to think. He learned more than the angels knew. \n\nAll the angels thought that Adam was amazing. They all admired him and respected him. But Iblis didn’t think so. Iblis thought Adam was an unimportant creature created from clay.',
    vocabulary: [{ word: 'respect', definition: 'Treating someone as important and worthy of care.' }, { word: 'wiser', definition: 'Knowing more and making better decisions.' }, { word: 'clay', definition: 'Soft earth that can be shaped.' }],
    hotspots: [
      { id: 'h2-1', x: 40, y: 30, title: 'Knowledge', description: 'He was wiser than the angels, because Allah gave Adam knowledge and taught him to think.' },
      { id: 'h2-2', x: 60, y: 50, title: 'Angels', description: 'They all admired him and respected him.' },
    ], animatedWords: ['knowledge', 'think', 'amazing', 'understand'],
  },
  {
    id: 3, type: 'story', title: "Iblis's Arrogance",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter3.png?alt=media&token=47e43312-d51a-45a8-9349-7f2f097d37a2',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2FAdam%20A2%20Chapter%203%20(1).mp3?alt=media&token=cd9880b6-62a1-4810-9ded-7054952d9039',
    content: 'Then Allah asked Iblis, “Why didn’t you respect Adam?” Iblis said, “I am better than Adam. You created me from fire, and You created Adam from soil.” \n\nIblis was arrogant. He thought he was more important and more valuable than Adam. He came from the fire and believed his origin was better. He thought little and was wrong about Adam. Iblis couldn’t see that Adam had perfect knowledge and it was for the good of every creature of Allah. This knowledge made Adam more valuable. \n\nFor Allah, the clay or the fire did not make anybody valuable. But useful knowledge makes people great, because with this knowledge, humans can do good and stop bad. \n\nBut Iblis continued saying he was right and the Creator was wrong. Allah said to Iblis, “Go away! You are far from My love and care.” \n\nAdam was now in Paradise.',
    vocabulary: [{ word: 'arrogant', definition: 'Thinking you are better or more important than others.' }, { word: 'valuable', definition: 'Very useful or important.' }, { word: 'creature', definition: 'A living being created by Allah.' }],
    hotspots: [
      { id: 'h3-1', x: 25, y: 45, title: 'Fire', description: 'You created me from fire, and You created Adam from soil.' },
      { id: 'h3-2', x: 75, y: 35, title: 'Arrogant', description: 'Iblis was arrogant.' },
    ], animatedWords: ['fire', 'clay', 'arrogant'],
  },
  {
    id: 4, type: 'story', title: 'Paradise and the Warning',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter4.png?alt=media&token=1d8c7a12-f7d4-4b4b-8435-43e353ae29ff',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fadam_a2_english_chapter4.mp3?alt=media&token=f914c90b-6fe7-4cbc-881d-a92f77495bc3',
    content: "Iblis got angry with Adam and hated him. He didn’t want Allah to be nice to Adam. Iblis thought Allah put him far from His love because of Adam. He waited for a chance. He wanted Adam to lose Allah's love, just like himself. Allah told Adam to be careful about Iblis. \n\nThen, Adam started to feel lonely in Paradise. So, Allah gave him a wife. Her name was Eve (Hawwa). They started to live together in Paradise. It was more wonderful than we can imagine. All the gifts in Paradise were for them. But Allah had only one warning. He told Adam and Eve not to go near one tree.",
    vocabulary: [{ word: 'lonely', definition: 'Sad because you are alone.' }, { word: 'wonderful', definition: 'Very good and enjoyable.' }, { word: 'warning', definition: 'A message about danger or something to avoid.' }],
    hotspots: [{ id: 'h4-1', x: 35, y: 40, title: 'Eve (Hawwa)', description: 'Allah gave him a wife. Her name was Eve (Hawwa).' }, { id: 'h4-2', x: 65, y: 25, title: 'Tree', description: 'He told Adam and Eve not to go near one tree.' }],
  },
  {
    id: 5, type: 'story', title: "Satan's Lie and Regret",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter5.png?alt=media&token=76cd56fb-6403-4eed-9d22-2125689e9ab1',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2FAdam%20A2%20Chapter%205%20(1).mp3?alt=media&token=99c3f2f1-6939-4348-bdbf-ef1fd9611730',
    content: 'When Adam and Eve were happy in Paradise, Iblis came near them and told them he was their friend. It was a big lie. He softly spoke to them: “If you eat from that one tree, you will never die.” \n\nAfter a while, Iblis finally made them believe his lie. They forgot Allah’s warning. Unfortunately, people are sometimes forgetful. \n\nAdam and Eve ate fruit from that banned tree. They made a mistake, but it wasn’t on purpose. They were very sad about their wrong action. They said sorry to Allah. They learned from their mistake and decided never to repeat it. They wanted Allah to excuse them. \n\nHowever, Iblis took an opposite direction. He never thought he was wrong, because he was arrogant. He believed that he was superior, smarter and more important than the human. Iblis’ character makes it hard to do the right thing and see the difference between good and bad.',
    vocabulary: [{ word: 'lie', definition: 'Something that is not true.' }, { word: 'mistake', definition: 'Something you do that is wrong.' }, { word: 'superior', definition: 'Better or higher than someone or something.' }],
    hotspots: [{ id: 'h5-1', x: 45, y: 35, title: 'Lie', description: 'Iblis told them he was their friend. It was a big lie.' }, { id: 'h5-2', x: 55, y: 60, title: 'Mistake', description: 'They made a mistake, but it wasn’t on purpose.' }], animatedWords: ['on purpose'],
  },
  {
    id: 6, type: 'story', title: 'Life on Earth',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter6.png?alt=media&token=98ad5740-e8d4-4413-8b73-b4b53e959d2d',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2FAdam%20A2%20Chapter%206%20(1).mp3?alt=media&token=4b5d3fa6-dc2d-41d3-89cf-5a361e34aeba',
    content: 'Allah excused Adam and Eve and put them on earth to live there. Allah taught them and gave them everything to rule on earth. They were the rulers of the planet earth. They were going to direct and make everything better on the planet. They were using land to grow crops and keep animals. They were going to build buildings for housing, protect nature and help the weak. \n\nBut Iblis also followed Adam and Eve on earth. He was still around. He wanted people not to remember Allah in their daily lives.',
    vocabulary: [{ word: 'crops', definition: 'Plants grown for food.' }, { word: 'rule', definition: 'To lead or manage a place.' }, { word: 'planet', definition: 'A large round object in space, such as Earth.' }],
    hotspots: [{ id: 'h6-1', x: 30, y: 50, title: 'Earth', description: 'Allah excused Adam and Eve and put them on earth to live there.' }, { id: 'h6-2', x: 70, y: 40, title: 'Land', description: 'They were using land to grow crops and keep animals.' }], animatedWords: ['excused'],
  },
  {
    id: 7, type: 'story', title: 'The First Messenger',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter7.png?alt=media&token=2cca3dac-2759-4016-824a-106d09ff0781',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fadam_a2_english_chapter7.mp3?alt=media&token=38ea267e-8e50-4369-bad9-a2b925c4247a',
    content: 'Adam and Eve lived on earth for many years. They had good and hard days. Some days brought them peace, some days were difficult. They also had lots of children. We are all their children. Then, Allah made Adam His first Messenger. He was the first Messenger of Islam. He started teaching people to be honest, do good, stop bad and always remember Allah. \n\nAdam (pbuh) and Eve taught their children to behave well for the love of Allah and to thank Him for His help and good things in life. They also warned their children against Iblis, because Iblis was their enemy, not their friend. \n\nAfter the death of Adam (pbuh), Allah sent many other messengers. They taught the people right and wrong and the ways to stay away from Iblis. All the prophets took the same way. They wanted to make people remember Allah.',
    vocabulary: [{ word: 'honest', definition: 'Telling the truth and not cheating.' }, { word: 'behave', definition: 'To act in a particular way.' }, { word: 'enemy', definition: 'A person who wants to harm or oppose someone.' }],
    hotspots: [{ id: 'h7-1', x: 40, y: 45, title: 'Messenger', description: 'Then, Allah made Adam His first Messenger.' }, { id: 'h7-2', x: 60, y: 30, title: 'Children', description: 'Adam (pbuh) and Eve taught their children to behave well for the love of Allah and to thank Him for His help and good things in life.' }],
  },
  {
    id: 8, type: 'story', title: 'Story of Habil and Qabil',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter8.png?alt=media&token=4a3d55b6-fba5-4d1b-ac6d-368ea81562f6',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2FAdam%20A2%20Chapter%208%20(1).mp3?alt=media&token=ef8be57b-54c9-4332-a754-d525086a80d9',
    content: 'Adam (pbuh) and Eve had two sons, Habil and Qabil. They were very different. Habil was kind, gentle and loved taking care of animals. Qabil was mostly jealous. When they grew up, Habil became a shepherd. He kept cows, sheep and other animals. Qabil was a farmer. He worked on the farm and grew crops. \n\nOne day, they were in a serious disagreement. To solve the problem, they had to offer an offering to Allah. Habil brought his best and healthiest sheep as a gift for Allah, but Qabil brought just a handful of his crops. It wasn’t very valuable. Qabil didn’t care to please Allah and his father Adam (pbuh). Real goodness is giving the best and the most loved.',
    vocabulary: [{ word: 'shepherd', definition: 'A person who looks after sheep.' }, { word: 'farmer', definition: 'A person who grows crops or keeps animals on a farm.' }, { word: 'offering', definition: 'Something given to Allah.' }],
    hotspots: [{ id: 'h8-1', x: 35, y: 55, title: 'Sheep', description: 'Habil brought his best and healthiest sheep as a gift for Allah, but Qabil brought just a handful of his crops.' }, { id: 'h8-2', x: 65, y: 45, title: 'Crops', description: 'He worked on the farm and grew crops.' }],
  },
  {
    id: 9, type: 'story', title: 'The First Crime',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter9.png?alt=media&token=12a5e3e0-c1be-47c1-9a1d-0b64288ddf56',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fadam_a2_english_chapter9.mp3?alt=media&token=25446a2e-d966-4fdc-9def-e7b43c8cf34c',
    content: 'Allah was pleased with Habil’s offering, because he gave from his heart. Qabil became very angry and said, “I will kill you.” When Habil heard this, he said, “I won’t fight back or harm you. You are my brother, and I fear Allah.” Qabil started fighting with his brother and hit him with a stone. Habil died there. \n\nSoon, Qabil’s anger cooled and he felt so sad. But he also started to panic. He said, “I killed my brother. I did the worst thing in life. Now I don’t know what I should do with his dead body.” Then, Allah sent a crow. It landed on the ground near Qabil and started digging the ground. The crow showed Qabil the way to put his brother\'s dead body in the hole. Qabil cried and said, “I am worse than this crow. I cannot hide my brother’s dead body.”',
    vocabulary: [{ word: 'crow', definition: 'A large black bird.' }, { word: 'panic', definition: 'A sudden strong feeling of fear.' }, { word: 'digging', definition: 'Making a hole by moving earth.' }],
    hotspots: [{ id: 'h9-1', x: 50, y: 20, title: 'Crow', description: "The crow showed Qabil the way to put his brother's dead body in the hole." }, { id: 'h9-2', x: 40, y: 60, title: 'Panic', description: 'Soon, Qabil’s anger cooled and he felt so sad. But he also started to panic.' }],
  },
  {
    id: 10, type: 'story', title: 'The Story of Adam (pbuh)',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter10.png?alt=media&token=97c7a607-186e-439b-9f2d-8d4c9b11bd7f',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fadam_a2_english_chapter10.mp3?alt=media&token=13905754-598c-4330-935f-9c845af1072f',
    content: 'He left far away. Adam (pbuh) became very sad. He lost both of his sons on the same day. The story tells us that good people should stay away from jealousy and control their anger. \n\nAdam was a Messenger of Allah and the father of his other children. He had to continue his life. He got old over the years. His children and grandchildren spread his message worldwide. This message still advises people to love and respect Allah. It tells them to be well-behaved and kind to others. \n\nAllah never leaves people alone. The stories of His messengers help us to live an honest life.',
    vocabulary: [{ word: 'jealousy', definition: 'Feeling unhappy because someone has something you want.' }, { word: 'story', definition: 'A description of events.' }, { word: 'worldwide', definition: 'In many places around the world.' }],
    hotspots: [{ id: 'h10-1', x: 45, y: 40, title: 'Old', description: 'He got old over the years.' }, { id: 'h10-2', x: 55, y: 30, title: 'Message', description: 'His children and grandchildren spread his message worldwide.' }],
  },
  {
    id: 11, type: 'quiz', title: 'Knowledge Check: Adam (pbuh)',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter10.png?alt=media&token=1547f902-5af2-4d83-94a6-7d0b70ca0723', content: 'Check your understanding of eight key ideas from the story.',
  },
  {
    id: 12, type: 'vocabulary-match', title: 'Vocabulary Challenge',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter10.png?alt=media&token=1547f902-5af2-4d83-94a6-7d0b70ca0723', content: 'Match six key words from the story with their meanings.',
  },
  {
    id: 13, type: 'exercises', title: 'Language Review',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter10.png?alt=media&token=1547f902-5af2-4d83-94a6-7d0b70ca0723', content: 'Review and use the grammar patterns and language functions from all ten chapters.',
  },
  {
    id: 14, type: 'glossary', title: 'Master Glossary - Part 1', content: 'A complete list of the Word Notes from Chapters 1–5.',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter10.png?alt=media&token=1547f902-5af2-4d83-94a6-7d0b70ca0723',
    vocabulary: [{ word: 'Messenger', definition: 'A person who carries a message from Allah.' }, { word: 'soil', definition: 'Earth in which plants can grow.' }, { word: 'curiosity', definition: 'Wanting to know or learn something.' }, { word: 'respect', definition: 'Treating someone as important and worthy of care.' }, { word: 'wiser', definition: 'Knowing more and making better decisions.' }, { word: 'clay', definition: 'Soft earth that can be shaped.' }, { word: 'arrogant', definition: 'Thinking you are better or more important than others.' }, { word: 'valuable', definition: 'Very useful or important.' }, { word: 'creature', definition: 'A living being created by Allah.' }, { word: 'lonely', definition: 'Sad because you are alone.' }, { word: 'wonderful', definition: 'Very good and enjoyable.' }, { word: 'warning', definition: 'A message about danger or something to avoid.' }, { word: 'lie', definition: 'Something that is not true.' }, { word: 'mistake', definition: 'Something you do that is wrong.' }, { word: 'superior', definition: 'Better or higher than someone or something.' }],
  },
  {
    id: 15, type: 'glossary', title: 'Master Glossary - Part 2', content: 'A complete list of the Word Notes from Chapters 6–10.',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter10.png?alt=media&token=1547f902-5af2-4d83-94a6-7d0b70ca0723',
    vocabulary: [{ word: 'crops', definition: 'Plants grown for food.' }, { word: 'rule', definition: 'To lead or manage a place.' }, { word: 'planet', definition: 'A large round object in space, such as Earth.' }, { word: 'honest', definition: 'Telling the truth and not cheating.' }, { word: 'behave', definition: 'To act in a particular way.' }, { word: 'enemy', definition: 'A person who wants to harm or oppose someone.' }, { word: 'shepherd', definition: 'A person who looks after sheep.' }, { word: 'farmer', definition: 'A person who grows crops or keeps animals on a farm.' }, { word: 'offering', definition: 'Something given to Allah.' }, { word: 'crow', definition: 'A large black bird.' }, { word: 'panic', definition: 'A sudden strong feeling of fear.' }, { word: 'digging', definition: 'Making a hole by moving earth.' }, { word: 'jealousy', definition: 'Feeling unhappy because someone has something you want.' }, { word: 'story', definition: 'A description of events.' }, { word: 'worldwide', definition: 'In many places around the world.' }],
  },
  {
    id: 16, type: 'final-challenge', title: 'Final Challenge', content: 'Show what you learned across the whole story with ten different scored activities.',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter10.png?alt=media&token=1547f902-5af2-4d83-94a6-7d0b70ca0723',
  },
];
