import type { PageData } from '../../../../types';

// Canonical story prose + media/Word Notes/hotspots/page shells only.
// All learning activities are authored in exercises.ts and attached in ../index.ts.
export const adamB1Pages: PageData[] = [
  {
    id: 1, type: 'story', title: 'Introduction & The Creation',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_1.png?alt=media&token=f2ae6289-f8fa-4606-a89a-d1d8537a4394',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch1.mp3?alt=media&token=1b85ccfb-4eaa-4154-b3d9-3eef74cd6e50',
    content: "Adam (pbuh) is the first Messenger and the father of all humans. Allah created him from soil and showed him great respect and gave him full value as the first human. The Holy Qur’an tells his tale in different surahs. Surahs A’raf, Baqarah, Hijr, Isra, Sad and Taha describe Adam (pbuh)’s tale clearly. As the grandchildren of Adam (pbuh), we can learn many lessons from this fabulous but true story. In this story, there are numerous important messages about humans’ role in life.\n\nAfter Allah created the sky and the earth, He told the angels that He was going to create a human. He said He had decided to place a ruler (khalifah) on earth. This ruler would live there for many years. The angels were surprised and began to wait with curiosity.",
    vocabulary: [
      { word: 'messenger', definition: 'A person chosen by Allah to deliver His message.' },
      { word: 'fabulous', definition: 'Very impressive or wonderful.' },
      { word: 'ruler', definition: 'A person given responsibility to lead or manage.' },
      { word: 'curiosity', definition: 'A strong wish to know more.' },
    ],
    hotspots: [
      { id: 'adam-b1-en-h1a', x: 31, y: 39, title: 'Created from Soil', description: 'Allah created Adam (pbuh) from soil and honored him as the first human.' },
      { id: 'adam-b1-en-h1b', x: 70, y: 61, title: 'Responsibility on Earth', description: 'Allah told the angels that He would place a ruler, or khalifa, on earth.' },
    ],
  },
  {
    id: 2, type: 'story', title: 'The Shaping of Adam',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_2.png?alt=media&token=0859c3b7-a4b5-420c-a48d-8577e494ad6e',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch2.mp3?alt=media&token=50c2834f-df94-46fd-acc3-05427df307e3',
    content: "Then, Allah’s angels collected soil from different parts of the earth and Allah shaped Adam (pbuh). That’s why humans have different skin colors. Prophet Muhammad (pbuh) said that Allah created Adam (pbuh) from a handful of dust from different lands, so the children of Adam (pbuh) are white, red, black and yellow in color. \n\nAllah told His angels, “After I have created Adam (pbuh) and given him life and knowledge, show respect to him.” Allah gave Adam (pbuh) life and intellect to learn and understand. Later, He taught Adam (pbuh) everything he needed to do good on earth. He gave Adam (pbuh) more knowledge than the angels.",
    vocabulary: [
      { word: 'handful', definition: 'An amount that can be held in one hand.' },
      { word: 'intellect', definition: 'The ability to reason, learn, and understand.' },
      { word: 'knowledge', definition: 'Information and understanding that someone has.' },
      { word: 'shaped', definition: 'Gave something a particular form.' },
    ],
    hotspots: [
      { id: 'adam-b1-en-h2a', x: 37, y: 64, title: 'Soil from Many Lands', description: 'The angels collected soil from different parts of the earth, so humans have different skin colors.' },
      { id: 'adam-b1-en-h2b', x: 66, y: 34, title: 'A Gift of Knowledge', description: 'Allah gave Adam (pbuh) life, intellect and more knowledge than the angels.' },
    ],
  },
  {
    id: 3, type: 'story', title: "Iblis's Arrogance",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_3.png?alt=media&token=f05d3557-72b0-4a64-8f84-a94d7e18a2a8',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch3.mp3?alt=media&token=225ce20b-1949-447c-88f4-0bbf7b273ae2',
    content: "All the angels thought that Adam (pbuh) was amazing. They all admired him and showed respect to him, but Iblis didn’t think so. Iblis thought that Adam was an unimportant being created from clay. Then Allah asked Iblis, “Why didn’t you respect Adam (pbuh)?” Iblis said, “I am better than Adam (pbuh). You created me from fire, and You created Adam (pbuh) from soil.” \n\nIblis was arrogant. He thought he was more important and more valuable than Adam (pbuh) because he believed his origin was superior. Iblis did not think carefully and was wrong about Adam (pbuh). He couldn’t see and accept that Adam (pbuh) had perfect knowledge for the good of every creature of Allah, which made him more valuable. According to Satan, fire was superior to clay. However, in the sight of Allah, superiority or greatness did not come from race, color, or being a member of a certain group.",
    vocabulary: [
      { word: 'admired', definition: 'Felt respect and approval for someone.' },
      { word: 'arrogant', definition: 'Too proud and sure of one’s own importance.' },
      { word: 'origin', definition: 'The point or material from which something begins.' },
      { word: 'superiority', definition: 'The state of being considered better or higher.' },
    ],
    hotspots: [
      { id: 'adam-b1-en-h3a', x: 27, y: 54, title: 'Fire and Soil', description: 'Iblis compared the fire he was created from with the soil of Adam (pbuh).' },
      { id: 'adam-b1-en-h3b', x: 73, y: 35, title: 'Equal in Allah’s Sight', description: 'In the sight of Allah, superiority does not come from origin, race, color or group.' },
    ],
  },
  {
    id: 4, type: 'story', title: 'The Expulsion of Iblis',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter4.png?alt=media&token=0e4c2656-7b50-402f-9c79-303fa7ee7849',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch4.mp3?alt=media&token=87cead03-57bf-41ee-bd1a-f66b18a5eb3d',
    content: "But Iblis continued saying he was right and the Creator was wrong. Allah said to Iblis, “Go away! You are far from My love and care.” Iblis got angry with Adam (pbuh) and hated him. He didn’t want Allah to be kind to Adam (pbuh). He thought that because of Adam (pbuh), Allah had put him far from His help. \n\nHe waited for a chance to keep Adam (pbuh) away from Allah’s kindness, just as he himself was. Allah told Adam (pbuh) that Iblis was his enemy and warned him to be careful of Iblis.",
    vocabulary: [
      { word: 'Creator', definition: 'The One who brought all things into existence.' },
      { word: 'warned', definition: 'Told someone about a possible danger so they could avoid it.' },
      { word: 'enemy', definition: 'Someone who is hostile or wishes harm.' },
      { word: 'careful', definition: 'Paying attention to avoid danger or harm.' },
    ],
    hotspots: [
      { id: 'adam-b1-en-h4a', x: 34, y: 31, title: 'Distance from Mercy', description: 'Iblis was sent away from Allah’s love and care after he refused to respect Adam (pbuh).' },
      { id: 'adam-b1-en-h4b', x: 69, y: 66, title: 'The Warning', description: 'Allah warned Adam (pbuh) that Iblis was his enemy and told him to be careful.' },
    ],
  },
  {
    id: 5, type: 'story', title: 'Life in Paradise and the Warning',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_5.png?alt=media&token=d8bcf1b1-a4ff-4768-971f-4893e40bb909',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch5.mp3?alt=media&token=dfc9f198-277a-4098-b31d-650ee037e3a2',
    content: "Adam was in Paradise, but he started to feel lonely. Allah gave him a wife called Eve (Hawwa) to be his companion. They began living in Paradise. It was more wonderful than we can imagine. All the blessings in Paradise were for them. \n\nAllah only asked them not to go near one tree. When Adam (pbuh) and Eve were happy in Paradise, Iblis came near them pretending to be their friend. It was a big lie. He whispered to them that if they ate from that one tree, they would never die.",
    vocabulary: [
      { word: 'lonely', definition: 'Unhappy because one is without companionship.' },
      { word: 'companion', definition: 'Someone who spends time with another person and shares their life.' },
      { word: 'blessings', definition: 'Good things or gifts for which people are thankful.' },
      { word: 'pretending', definition: 'Acting as if something is true when it is not.' },
    ],
    hotspots: [
      { id: 'adam-b1-en-h5a', x: 24, y: 44, title: 'A Companion for Adam', description: 'Allah gave Adam (pbuh) a wife, Eve, and they lived together among the blessings of Paradise.' },
      { id: 'adam-b1-en-h5b', x: 76, y: 58, title: 'The One Tree', description: 'Iblis came to them pretending to be their friend and whispered a lie about the tree.' },
    ],
  },
  {
    id: 6, type: 'story', title: 'Satan’s lies and Adam’s Departure from Paradise',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_6.png?alt=media&token=a98133d4-6d45-4468-b7b7-c14a72cd267d',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch6.mp3?alt=media&token=6e7590c3-4f65-40ef-9439-146a77befcdc',
    content: "Eventually, Iblis managed to trick them. He convinced them to believe his lies, and they forgot the warning Allah had given them. Adam stretched out his hand, picked one of the fruits and offered it to Eve. They both ate of the forbidden tree. \n\nWhen Adam finished eating, he felt that his heart was filled with pain, sadness and shame. The surrounding atmosphere changed and the internal harmony ceased. \n\nWhen they tasted the fruit, their private parts became visible. Adam (pbuh) discovered that he and his wife were uncovered, so they both started cutting tree leaves in Paradise to cover themselves. They hurried to hide their private parts because a sense of shame (haya) is part of inborn human nature and nakedness is against creation.",
    vocabulary: [
      { word: 'forbidden', definition: 'Not allowed by a rule or command.' },
      { word: 'shame', definition: 'A painful feeling connected with awareness of wrong behavior.' },
      { word: 'visible', definition: 'Able to be seen.' },
      { word: 'inborn', definition: 'Present naturally from birth.' },
    ],
    hotspots: [
      { id: 'adam-b1-en-h6a', x: 39, y: 67, title: 'The Forbidden Tree', description: 'Adam (pbuh) and Eve ate from the tree after they believed Iblis’s lies.' },
      { id: 'adam-b1-en-h6b', x: 65, y: 32, title: 'Modesty', description: 'Adam (pbuh) and Eve quickly covered themselves with leaves, because a sense of shame is part of human nature.' },
    ],
  },
  {
    id: 7, type: 'story', title: 'Forgiveness and Repentance',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_7.png?alt=media&token=d41b07c8-2c96-466d-9bb5-4ed05ff558da',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch7.mp3?alt=media&token=26e2d23b-e788-46ce-a430-55ba78c495aa',
    content: "Adam (pbuh) bowed down and cried, “Forgiveness! Forgiveness!” Allah asked, “Are you running away from Me?” Adam (pbuh) replied, “No, my Lord, but I am shy of You.” \n\nThey made a mistake, but it wasn’t on purpose. They were very sad about their wrong action. They said sorry to Allah, learned from their mistake and decided never to repeat it. They wanted Allah to pardon them. \n\nOn the other hand, Iblis chose an opposite path. He never admitted he was wrong because he was arrogant. Arrogance is the biggest barrier to acting the right way and distinguishing between right and wrong, good and bad. \n\nAllah pardoned both Adam (pbuh) and Eve and put them on earth to live there. Allah taught them and gave them everything they needed to rule on earth. They were the rulers of planet Earth. They would direct, control and make everything better on the planet.",
    vocabulary: [
      { word: 'opposite', definition: 'Completely different, or going in the other direction.' },
      { word: 'pardon', definition: 'To forgive someone for a wrong action.' },
      { word: 'barrier', definition: 'Something that prevents progress or clear understanding.' },
      { word: 'distinguishing', definition: 'Recognizing the difference between things.' },
    ],
    hotspots: [
      { id: 'adam-b1-en-h7a', x: 28, y: 36, title: 'Mistake and Pardon', description: 'Adam (pbuh) and Eve admitted their mistake, learned from it and asked Allah to forgive them.' },
      { id: 'adam-b1-en-h7b', x: 72, y: 63, title: 'Arrogance as a Barrier', description: 'Iblis never admitted he was wrong, because his arrogance stopped him.' },
    ],
  },
  {
    id: 8, type: 'story', title: 'Struggle and Survival on Earth',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_8.png?alt=media&token=28d8bdb2-33fb-4cd5-bca8-360a04d4ceb7',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch8.mp3?alt=media&token=5ba53690-67c7-42fd-a4f1-f7cf0c2c3796',
    content: "They would use land to grow crops and keep animals. They would build buildings for shelter, protect nature and help the weak. \n\nAdam (pbuh) and Eve left Paradise and arrived on earth. On earth, they had to struggle to survive and work hard to keep themselves alive. In addition, they had to protect themselves with clothes and weapons and protect themselves from dangers in the wild. \n\nIblis followed Adam (pbuh), Eve and their children to earth. He was still there because he wanted people not to remember Allah. Adam (pbuh) and Eve lived on earth for many years. They had both good and difficult times and they had many children. We are all descendants of their children.",
    vocabulary: [
      { word: 'shelter', definition: 'A place that gives protection from danger or weather.' },
      { word: 'struggle', definition: 'To make a strong effort during difficulty.' },
      { word: 'survive', definition: 'To continue to live despite difficulty or danger.' },
      { word: 'weapons', definition: 'Objects used for protection or fighting.' },
    ],
    hotspots: [
      { id: 'adam-b1-en-h8a', x: 35, y: 58, title: 'Work on Earth', description: 'On earth, Adam (pbuh) and Eve would grow crops, keep animals, build shelters, protect nature and help the weak.' },
      { id: 'adam-b1-en-h8b', x: 67, y: 29, title: 'Protection from Danger', description: 'Adam (pbuh) and Eve had to work hard and protect themselves with clothes and weapons.' },
    ],
  },
  {
    id: 9, type: 'story', title: 'The First Messenger and the Path of Guidance',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_9.png?alt=media&token=7b15ff4c-4e5a-4a78-b847-fe299318fe9a',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch9.mp3?alt=media&token=f3d75a5d-ac5e-437f-85c5-19787390f9f1',
    content: "At that time, there was no community. After a period of time, when a community formed, Adam (pbuh) became the first Messenger of Allah. Thus, he became the first human, the first father, and the first messenger of Islam. He started teaching people to live righteously and act honestly. He showed the way to do good, avoid evil and always keep Allah in their hearts and minds. \n\nAllah never stopped sending messengers and sacred texts to remind people of Him. Adam (pbuh) and Eve taught their children to pray only to Allah and be aware of Iblis and his tricks because Iblis was their enemy, not their friend. \n\nYears later, after the death of Adam (pbuh), Allah sent many other messengers to show people the right path and the ways to stay away from Iblis. All the messengers followed the same path. They wanted people to keep Allah in their minds because if people forget Allah, they lose the meaning and purpose of life.",
    vocabulary: [
      { word: 'community', definition: 'A group of people living or acting together.' },
      { word: 'righteously', definition: 'In a morally right way.' },
      { word: 'sacred', definition: 'Connected with religion and deserving special respect.' },
      { word: 'purpose', definition: 'The reason why something exists or is done.' },
    ],
    hotspots: [
      { id: 'adam-b1-en-h9a', x: 23, y: 65, title: 'The First Community', description: 'When a community formed, Adam (pbuh) became the first Messenger and taught people to live righteously.' },
      { id: 'adam-b1-en-h9b', x: 77, y: 39, title: 'Messengers and Sacred Texts', description: 'Allah kept sending messengers and sacred texts to remind people of Him and the right path.' },
    ],
  },
  {
    id: 10, type: 'story', title: 'The Two Sons: Habil and Qabil',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_10.png?alt=media&token=cd6d8f8d-01de-4555-9094-56c1b1894b34',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch10.mp3?alt=media&token=bb2e41c7-5415-448f-a196-cd0c4a2a7f49',
    content: "Adam (pbuh) and Eve had two sons, Habil and Qabil. The children grew up to be strong and healthy young adults. They were very different. Habil was kind, gentle and loved taking care of animals. Qabil was mostly jealous. When they grew up, Habil became a shepherd. He kept cows, sheep and other animals. Qabil was a farmer. He worked on the farm and grew crops. \n\nOne day, they were in a serious disagreement. To solve the problem, they had to make an offering to Allah. Habil brought his best and healthiest sheep as a gift for Allah, but Qabil brought just a handful of his crops that were not very valuable. Qabil didn’t care about pleasing Allah and his father Adam (pbuh). However, real goodness is giving out the best and the most loved.",
    vocabulary: [
      { word: 'jealous', definition: 'Unhappy because someone else has something one wants.' },
      { word: 'shepherd', definition: 'A person who takes care of sheep or other animals.' },
      { word: 'disagreement', definition: 'A serious difference of opinion.' },
      { word: 'offering', definition: 'A gift or sacrifice made to show devotion.' },
    ],
    hotspots: [
      { id: 'adam-b1-en-h10a', x: 32, y: 30, title: 'Two Different Brothers', description: 'Habil and Qabil grew up with different characters: Habil became a shepherd and Qabil a farmer.' },
      { id: 'adam-b1-en-h10b', x: 69, y: 68, title: 'The Two Offerings', description: 'To solve their disagreement, Habil offered his best sheep, but Qabil brought only a handful of poor crops.' },
    ],
  },
  {
    id: 11, type: 'story', title: 'The First Conflict and the Raven',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_11.png?alt=media&token=6acff667-ff2a-4d60-92fc-d91415ec8e83',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch11.mp3?alt=media&token=6e0897da-737d-4f67-baf4-7385c811b4ee',
    content: "Allah accepted Habil’s offering because he gave from his heart. Qabil’s face became very dark with anger, and he said, “I will kill you.” When Habil heard this, he said, “I won’t fight back and harm you. You are my brother, and I fear Allah.” Qabil started fighting with his brother and killed him. Soon, Qabil’s anger cooled, and he felt very sad. He also started to panic. He said, “I killed my brother. I did the worst thing in life. Now I don’t know what I should do with his dead body.” Then Allah sent a raven that landed near Qabil and started digging the ground. It showed Qabil the way to put his brother’s dead body in the pit. Qabil cried and said, “I am worse than this raven. I cannot hide my brother’s dead body.”",
    vocabulary: [
      { word: 'harm', definition: 'To hurt or damage someone or something.' },
      { word: 'panic', definition: 'To suddenly feel so afraid that you cannot think calmly.' },
      { word: 'raven', definition: 'A large black bird.' },
      { word: 'digging', definition: 'Making a hole in the ground.' },
    ],
    hotspots: [
      { id: 'adam-b1-en-h11a', x: 26, y: 48, title: 'Brother Against Brother', description: 'Qabil attacked and killed Habil, even though Habil refused to fight back.' },
      { id: 'adam-b1-en-h11b', x: 75, y: 70, title: 'A Lesson from a Bird', description: 'Allah sent a raven that dug the ground and showed Qabil how to put his brother’s body in a pit.' },
    ],
  },
  {
    id: 12, type: 'story', title: 'The Legacy of Adam',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_12.png?alt=media&token=d9fd351f-62ce-4264-8cf7-001a60bf13ce',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch12.mp3?alt=media&token=6ee60473-9971-4392-862c-67ffc0928d19',
    content: "He went far away. Prophet Adam (pbuh) became very sad. He lost both of his sons on the same day. The story suggests that true believers should stay away from jealousy and control their anger. But as a prophet and the father of his other children, Adam (pbuh) had to continue his life. He got old over the years. His children and grandchildren moved to different parts of the world and spread his message worldwide. The message still calls upon people to turn away from Satan’s tricks and jealousy, to do good, and to avoid evil. It also teaches people the importance of admitting mistakes and turning back to Allah. Allah never left people alone. He sent His prophets, and their stories still guide us.",
    vocabulary: [
      { word: 'spread', definition: 'Carried or passed something to many people or places.' },
      { word: 'admitting', definition: 'Accepting or saying that something is true.' },
      { word: 'message', definition: 'An important idea or teaching passed to others.' },
      { word: 'guide', definition: 'To show the right direction or way to act.' },
    ],
    hotspots: [
      { id: 'adam-b1-en-h12a', x: 40, y: 64, title: 'A Family Across the World', description: 'Adam (pbuh) continued his life, and his children and grandchildren spread across the world.' },
      { id: 'adam-b1-en-h12b', x: 62, y: 36, title: 'A Lasting Message', description: 'The message of Adam (pbuh) still teaches people to avoid jealousy, admit their mistakes and turn back to Allah.' },
    ],
  },
  { id: 13, type: 'quiz', title: 'Knowledge Check', content: 'Check your whole-book understanding with eight independent questions.' },
  { id: 14, type: 'exercises', title: 'Language Review', content: 'Consolidate grammar, discourse relationships, and communicative functions from across the chapters, then use them in new connected contexts.' },
  { id: 15, type: 'vocabulary-match', title: 'B1 Vocabulary Challenge', content: 'Match ten meaning-bearing Word Notes from across the story with their correct meanings.' },
  {
    id: 16,
    type: 'glossary',
    title: 'Master Glossary',
    content: 'Review all key vocabulary from the story in one place.',
    vocabulary: [
      {
            "word": "messenger",
            "definition": "A person chosen by Allah to deliver His message.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈmesɪndʒər/",
            "wordFamily": [
                  "message",
                  "messenger"
            ],
            "collocations": [
                  "Messenger of Allah",
                  "deliver a message"
            ],
            "chapter": 1,
            "chapterTitle": "Introduction & The Creation",
            "storyExample": "Adam (pbuh) is the first Messenger and the father of all humans.",
            "category": "Spiritual Life"
      },
      {
            "word": "fabulous",
            "definition": "Very impressive or wonderful.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˈfæbjələs/",
            "wordFamily": [
                  "fabulous",
                  "fabulously"
            ],
            "collocations": [
                  "fabulous story",
                  "absolutely fabulous"
            ],
            "synonyms": [
                  "wonderful",
                  "impressive"
            ],
            "chapter": 1,
            "chapterTitle": "Introduction & The Creation",
            "storyExample": "As the grandchildren of Adam (pbuh), we can learn many lessons from this fabulous but true story.",
            "category": "Description"
      },
      {
            "word": "ruler",
            "definition": "A person given responsibility to lead or manage.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈruːlər/",
            "wordFamily": [
                  "rule",
                  "ruler",
                  "ruling"
            ],
            "collocations": [
                  "place a ruler",
                  "responsible ruler"
            ],
            "synonyms": [
                  "leader"
            ],
            "chapter": 1,
            "chapterTitle": "Introduction & The Creation",
            "storyExample": "He said He had decided to place a ruler (khalifah) on earth.",
            "category": "Leadership & Responsibility"
      },
      {
            "word": "curiosity",
            "definition": "A strong wish to know more.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˌkjʊriˈɑːsəti/",
            "wordFamily": [
                  "curious",
                  "curiosity",
                  "curiously"
            ],
            "collocations": [
                  "with curiosity",
                  "natural curiosity"
            ],
            "synonyms": [
                  "interest"
            ],
            "chapter": 1,
            "chapterTitle": "Introduction & The Creation",
            "storyExample": "The angels were surprised and began to wait with curiosity.",
            "category": "Learning & Thinking"
      },
      {
            "word": "handful",
            "definition": "An amount that can be held in one hand.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈhændfʊl/",
            "wordFamily": [
                  "hand",
                  "handful"
            ],
            "collocations": [
                  "a handful of dust",
                  "a handful of people"
            ],
            "chapter": 2,
            "chapterTitle": "The Shaping of Adam",
            "storyExample": "Prophet Muhammad (pbuh) said that Allah created Adam (pbuh) from a handful of dust from different lands, so the children of Adam (pbuh) are white, red, black and yellow in color.",
            "category": "Quantity & Description"
      },
      {
            "word": "intellect",
            "definition": "The ability to reason, learn, and understand.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈɪntəlekt/",
            "wordFamily": [
                  "intellect",
                  "intellectual"
            ],
            "collocations": [
                  "human intellect",
                  "use the intellect"
            ],
            "synonyms": [
                  "reason",
                  "understanding"
            ],
            "chapter": 2,
            "chapterTitle": "The Shaping of Adam",
            "storyExample": "Allah gave Adam (pbuh) life and intellect to learn and understand.",
            "category": "Learning & Thinking"
      },
      {
            "word": "knowledge",
            "definition": "Information and understanding that someone has.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈnɑːlɪdʒ/",
            "wordFamily": [
                  "know",
                  "knowledge",
                  "knowledgeable"
            ],
            "collocations": [
                  "gain knowledge",
                  "perfect knowledge"
            ],
            "synonyms": [
                  "understanding"
            ],
            "antonyms": [
                  "ignorance"
            ],
            "chapter": 2,
            "chapterTitle": "The Shaping of Adam",
            "storyExample": "He gave Adam (pbuh) more knowledge than the angels.",
            "category": "Learning & Thinking"
      },
      {
            "word": "shaped",
            "definition": "Gave something a particular form.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ʃeɪpt/",
            "wordFamily": [
                  "shape",
                  "shaped",
                  "shapeless"
            ],
            "collocations": [
                  "shape clay",
                  "shape a person"
            ],
            "synonyms": [
                  "formed"
            ],
            "chapter": 2,
            "chapterTitle": "The Shaping of Adam",
            "storyExample": "Then, Allah’s angels collected soil from different parts of the earth and Allah shaped Adam (pbuh).",
            "category": "Creation"
      },
      {
            "word": "admired",
            "definition": "Felt respect and approval for someone.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ədˈmaɪərd/",
            "wordFamily": [
                  "admire",
                  "admired",
                  "admiration"
            ],
            "collocations": [
                  "admire someone",
                  "widely admired"
            ],
            "synonyms": [
                  "respected"
            ],
            "chapter": 3,
            "chapterTitle": "Iblis's Arrogance",
            "storyExample": "They all admired him and showed respect to him, but Iblis didn’t think so.",
            "category": "Feelings & Attitudes"
      },
      {
            "word": "arrogant",
            "definition": "Too proud and sure of one’s own importance.",
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
            "chapter": 3,
            "chapterTitle": "Iblis's Arrogance",
            "storyExample": "Iblis was arrogant.",
            "category": "Character & Values"
      },
      {
            "word": "origin",
            "definition": "The point or material from which something begins.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈɔːrɪdʒɪn/",
            "wordFamily": [
                  "origin",
                  "original",
                  "originate"
            ],
            "collocations": [
                  "origin of something",
                  "social origin"
            ],
            "synonyms": [
                  "source",
                  "beginning"
            ],
            "chapter": 3,
            "chapterTitle": "Iblis's Arrogance",
            "storyExample": "He thought he was more important and more valuable than Adam (pbuh) because he believed his origin was superior.",
            "category": "Ideas & Identity"
      },
      {
            "word": "superiority",
            "definition": "The state of being considered better or higher.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/suːˌpɪriˈɔːrəti/",
            "wordFamily": [
                  "superior",
                  "superiority"
            ],
            "collocations": [
                  "sense of superiority",
                  "claim superiority"
            ],
            "antonyms": [
                  "inferiority"
            ],
            "chapter": 3,
            "chapterTitle": "Iblis's Arrogance",
            "storyExample": "However, in the sight of Allah, superiority or greatness did not come from race, color, or being a member of a certain group.",
            "category": "Values & Equality"
      },
      {
            "word": "Creator",
            "definition": "The One who brought all things into existence.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/kriˈeɪtər/",
            "wordFamily": [
                  "create",
                  "creation",
                  "Creator"
            ],
            "collocations": [
                  "the Creator",
                  "Creator of everything"
            ],
            "chapter": 4,
            "chapterTitle": "The Expulsion of Iblis",
            "storyExample": "But Iblis continued saying he was right and the Creator was wrong.",
            "category": "Belief & Faith"
      },
      {
            "word": "warned",
            "definition": "Told someone about a possible danger so they could avoid it.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/wɔːrnd/",
            "wordFamily": [
                  "warn",
                  "warned",
                  "warning"
            ],
            "collocations": [
                  "warn someone about",
                  "warn someone to be careful"
            ],
            "chapter": 4,
            "chapterTitle": "The Expulsion of Iblis",
            "storyExample": "Allah told Adam (pbuh) that Iblis was his enemy and warned him to be careful of Iblis.",
            "category": "Guidance & Faith"
      },
      {
            "word": "enemy",
            "definition": "Someone who is hostile or wishes harm.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈenəmi/",
            "wordFamily": [
                  "enemy",
                  "enemies"
            ],
            "collocations": [
                  "be an enemy",
                  "enemy of someone"
            ],
            "synonyms": [
                  "opponent"
            ],
            "antonyms": [
                  "friend"
            ],
            "chapter": 4,
            "chapterTitle": "The Expulsion of Iblis",
            "storyExample": "Allah told Adam (pbuh) that Iblis was his enemy and warned him to be careful of Iblis.",
            "category": "Relationships"
      },
      {
            "word": "careful",
            "definition": "Paying attention to avoid danger or harm.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˈkerfəl/",
            "wordFamily": [
                  "care",
                  "careful",
                  "carefully"
            ],
            "collocations": [
                  "be careful",
                  "careful of danger"
            ],
            "synonyms": [
                  "cautious"
            ],
            "antonyms": [
                  "careless"
            ],
            "chapter": 4,
            "chapterTitle": "The Expulsion of Iblis",
            "storyExample": "Allah told Adam (pbuh) that Iblis was his enemy and warned him to be careful of Iblis.",
            "category": "Safety & Awareness"
      },
      {
            "word": "lonely",
            "definition": "Unhappy because one is without companionship.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˈloʊnli/",
            "wordFamily": [
                  "lonely",
                  "loneliness"
            ],
            "collocations": [
                  "feel lonely",
                  "be lonely"
            ],
            "synonyms": [
                  "isolated"
            ],
            "chapter": 5,
            "chapterTitle": "Life in Paradise and the Warning",
            "storyExample": "Adam was in Paradise, but he started to feel lonely.",
            "category": "Feelings"
      },
      {
            "word": "companion",
            "definition": "Someone who spends time with another person and shares their life.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/kəmˈpænjən/",
            "wordFamily": [
                  "companion",
                  "companionship"
            ],
            "collocations": [
                  "a close companion",
                  "be someone’s companion"
            ],
            "synonyms": [
                  "partner"
            ],
            "chapter": 5,
            "chapterTitle": "Life in Paradise and the Warning",
            "storyExample": "Allah gave him a wife called Eve (Hawwa) to be his companion.",
            "category": "Family & Relationships"
      },
      {
            "word": "blessings",
            "definition": "Good things or gifts for which people are thankful.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈblesɪŋz/",
            "wordFamily": [
                  "bless",
                  "blessing",
                  "blessings"
            ],
            "collocations": [
                  "receive blessings",
                  "blessings of Paradise"
            ],
            "synonyms": [
                  "gifts"
            ],
            "chapter": 5,
            "chapterTitle": "Life in Paradise and the Warning",
            "storyExample": "All the blessings in Paradise were for them.",
            "category": "Spiritual Life"
      },
      {
            "word": "pretending",
            "definition": "Acting as if something is true when it is not.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/prɪˈtendɪŋ/",
            "wordFamily": [
                  "pretend",
                  "pretending",
                  "pretence"
            ],
            "collocations": [
                  "pretend to be",
                  "pretend to be a friend"
            ],
            "synonyms": [
                  "faking"
            ],
            "chapter": 5,
            "chapterTitle": "Life in Paradise and the Warning",
            "storyExample": "When Adam (pbuh) and Eve were happy in Paradise, Iblis came near them pretending to be their friend.",
            "category": "Honesty & Deception"
      },
      {
            "word": "forbidden",
            "definition": "Not allowed by a rule or command.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/fərˈbɪdən/",
            "wordFamily": [
                  "forbid",
                  "forbidden"
            ],
            "collocations": [
                  "forbidden tree",
                  "strictly forbidden"
            ],
            "synonyms": [
                  "prohibited"
            ],
            "antonyms": [
                  "allowed"
            ],
            "chapter": 6,
            "chapterTitle": "Satan’s lies and Adam’s Departure from Paradise",
            "storyExample": "They both ate of the forbidden tree.",
            "category": "Rules & Choices"
      },
      {
            "word": "shame",
            "definition": "A painful feeling connected with awareness of wrong behavior.",
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
                  "sense of shame"
            ],
            "synonyms": [
                  "embarrassment"
            ],
            "chapter": 6,
            "chapterTitle": "Satan’s lies and Adam’s Departure from Paradise",
            "storyExample": "When Adam finished eating, he felt that his heart was filled with pain, sadness and shame.",
            "category": "Feelings & Values"
      },
      {
            "word": "visible",
            "definition": "Able to be seen.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˈvɪzəbəl/",
            "wordFamily": [
                  "visible",
                  "visibility",
                  "invisible"
            ],
            "collocations": [
                  "become visible",
                  "clearly visible"
            ],
            "antonyms": [
                  "invisible"
            ],
            "chapter": 6,
            "chapterTitle": "Satan’s lies and Adam’s Departure from Paradise",
            "storyExample": "When they tasted the fruit, their private parts became visible.",
            "category": "Description"
      },
      {
            "word": "inborn",
            "definition": "Present naturally from birth.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˌɪnˈbɔːrn/",
            "collocations": [
                  "inborn nature",
                  "inborn quality"
            ],
            "synonyms": [
                  "innate"
            ],
            "antonyms": [
                  "learned"
            ],
            "chapter": 6,
            "chapterTitle": "Satan’s lies and Adam’s Departure from Paradise",
            "storyExample": "They hurried to hide their private parts because a sense of shame (haya) is part of inborn human nature and nakedness is against creation.",
            "category": "Human Nature"
      },
      {
            "word": "opposite",
            "definition": "Completely different, or going in the other direction.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˈɑːpəzɪt/",
            "wordFamily": [
                  "oppose",
                  "opposite",
                  "opposition"
            ],
            "collocations": [
                  "the opposite direction",
                  "an opposite path"
            ],
            "synonyms": [
                  "contrary"
            ],
            "chapter": 7,
            "chapterTitle": "Forgiveness and Repentance",
            "storyExample": "On the other hand, Iblis chose an opposite path.",
            "category": "Learning & Choices"
      },
      {
            "word": "pardon",
            "definition": "To forgive someone for a wrong action.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ˈpɑːrdən/",
            "wordFamily": [
                  "pardon",
                  "pardoned"
            ],
            "collocations": [
                  "pardon someone",
                  "ask for pardon"
            ],
            "synonyms": [
                  "forgive"
            ],
            "chapter": 7,
            "chapterTitle": "Forgiveness and Repentance",
            "storyExample": "They wanted Allah to pardon them.",
            "category": "Forgiveness & Values"
      },
      {
            "word": "barrier",
            "definition": "Something that prevents progress or clear understanding.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈbæriər/",
            "wordFamily": [
                  "barrier",
                  "barriers"
            ],
            "collocations": [
                  "major barrier",
                  "barrier to progress"
            ],
            "synonyms": [
                  "obstacle"
            ],
            "chapter": 7,
            "chapterTitle": "Forgiveness and Repentance",
            "storyExample": "Arrogance is the biggest barrier to acting the right way and distinguishing between right and wrong, good and bad.",
            "category": "Ideas & Obstacles"
      },
      {
            "word": "distinguishing",
            "definition": "Recognizing the difference between things.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/dɪˈstɪŋɡwɪʃɪŋ/",
            "wordFamily": [
                  "distinguish",
                  "distinguishing",
                  "distinction"
            ],
            "collocations": [
                  "distinguish between",
                  "distinguishing right from wrong"
            ],
            "synonyms": [
                  "differentiating"
            ],
            "chapter": 7,
            "chapterTitle": "Forgiveness and Repentance",
            "storyExample": "Arrogance is the biggest barrier to acting the right way and distinguishing between right and wrong, good and bad.",
            "category": "Learning & Thinking"
      },
      {
            "word": "shelter",
            "definition": "A place that gives protection from danger or weather.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈʃeltər/",
            "wordFamily": [
                  "shelter",
                  "sheltered"
            ],
            "collocations": [
                  "build shelter",
                  "seek shelter"
            ],
            "synonyms": [
                  "refuge"
            ],
            "chapter": 8,
            "chapterTitle": "Struggle and Survival on Earth",
            "storyExample": "They would build buildings for shelter, protect nature and help the weak.",
            "category": "Survival & Daily Life"
      },
      {
            "word": "struggle",
            "definition": "To make a strong effort during difficulty.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ˈstrʌɡəl/",
            "wordFamily": [
                  "struggle",
                  "struggled",
                  "struggling"
            ],
            "collocations": [
                  "struggle to survive",
                  "struggle with difficulty"
            ],
            "synonyms": [
                  "strive"
            ],
            "chapter": 8,
            "chapterTitle": "Struggle and Survival on Earth",
            "storyExample": "On earth, they had to struggle to survive and work hard to keep themselves alive.",
            "category": "Challenges & Effort"
      },
      {
            "word": "survive",
            "definition": "To continue to live despite difficulty or danger.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/sərˈvaɪv/",
            "wordFamily": [
                  "survive",
                  "survival",
                  "survivor"
            ],
            "collocations": [
                  "survive danger",
                  "struggle to survive"
            ],
            "synonyms": [
                  "remain alive"
            ],
            "chapter": 8,
            "chapterTitle": "Struggle and Survival on Earth",
            "storyExample": "On earth, they had to struggle to survive and work hard to keep themselves alive.",
            "category": "Survival & Life"
      },
      {
            "word": "weapons",
            "definition": "Objects used for protection or fighting.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈwepənz/",
            "wordFamily": [
                  "weapon",
                  "weapons"
            ],
            "collocations": [
                  "use weapons",
                  "clothes and weapons"
            ],
            "chapter": 8,
            "chapterTitle": "Struggle and Survival on Earth",
            "storyExample": "In addition, they had to protect themselves with clothes and weapons and protect themselves from dangers in the wild.",
            "category": "Objects & Safety"
      },
      {
            "word": "community",
            "definition": "A group of people living or acting together.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/kəˈmjuːnəti/",
            "wordFamily": [
                  "community",
                  "communal"
            ],
            "collocations": [
                  "form a community",
                  "local community"
            ],
            "chapter": 9,
            "chapterTitle": "The First Messenger and the Path of Guidance",
            "storyExample": "After a period of time, when a community formed, Adam (pbuh) became the first Messenger of Allah.",
            "category": "Society"
      },
      {
            "word": "righteously",
            "definition": "In a morally right way.",
            "partOfSpeech": "adverb",
            "level": "B1",
            "pronunciation": "/ˈraɪtʃəsli/",
            "wordFamily": [
                  "right",
                  "righteous",
                  "righteously",
                  "righteousness"
            ],
            "collocations": [
                  "live righteously",
                  "act righteously"
            ],
            "synonyms": [
                  "morally"
            ],
            "chapter": 9,
            "chapterTitle": "The First Messenger and the Path of Guidance",
            "storyExample": "He started teaching people to live righteously and act honestly.",
            "category": "Values & Conduct"
      },
      {
            "word": "sacred",
            "definition": "Connected with religion and deserving special respect.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˈseɪkrɪd/",
            "wordFamily": [
                  "sacred",
                  "sacredness"
            ],
            "collocations": [
                  "sacred text",
                  "sacred place"
            ],
            "synonyms": [
                  "holy"
            ],
            "chapter": 9,
            "chapterTitle": "The First Messenger and the Path of Guidance",
            "storyExample": "Allah never stopped sending messengers and sacred texts to remind people of Him.",
            "category": "Spiritual Life"
      },
      {
            "word": "purpose",
            "definition": "The reason why something exists or is done.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈpɜːrpəs/",
            "wordFamily": [
                  "purpose",
                  "purposeful",
                  "purposely"
            ],
            "collocations": [
                  "purpose of life",
                  "clear purpose"
            ],
            "synonyms": [
                  "aim",
                  "reason"
            ],
            "chapter": 9,
            "chapterTitle": "The First Messenger and the Path of Guidance",
            "storyExample": "They wanted people to keep Allah in their minds because if people forget Allah, they lose the meaning and purpose of life.",
            "category": "Ideas & Meaning"
      },
      {
            "word": "jealous",
            "definition": "Unhappy because someone else has something one wants.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˈdʒeləs/",
            "wordFamily": [
                  "jealous",
                  "jealousy"
            ],
            "collocations": [
                  "feel jealous",
                  "jealous of someone"
            ],
            "synonyms": [
                  "envious"
            ],
            "chapter": 10,
            "chapterTitle": "The Two Sons: Habil and Qabil",
            "storyExample": "Qabil was mostly jealous.",
            "category": "Feelings"
      },
      {
            "word": "shepherd",
            "definition": "A person who takes care of sheep or other animals.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈʃepərd/",
            "wordFamily": [
                  "shepherd",
                  "shepherds"
            ],
            "collocations": [
                  "become a shepherd",
                  "work as a shepherd"
            ],
            "chapter": 10,
            "chapterTitle": "The Two Sons: Habil and Qabil",
            "storyExample": "When they grew up, Habil became a shepherd.",
            "category": "People & Roles"
      },
      {
            "word": "disagreement",
            "definition": "A serious difference of opinion.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˌdɪsəˈɡriːmənt/",
            "wordFamily": [
                  "agree",
                  "disagree",
                  "disagreement"
            ],
            "collocations": [
                  "serious disagreement",
                  "disagreement between people"
            ],
            "synonyms": [
                  "conflict"
            ],
            "antonyms": [
                  "agreement"
            ],
            "chapter": 10,
            "chapterTitle": "The Two Sons: Habil and Qabil",
            "storyExample": "One day, they were in a serious disagreement.",
            "category": "Relationships & Conflict"
      },
      {
            "word": "offering",
            "definition": "A gift or sacrifice made to show devotion.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈɔːfərɪŋ/",
            "wordFamily": [
                  "offer",
                  "offered",
                  "offering"
            ],
            "collocations": [
                  "make an offering",
                  "accept an offering"
            ],
            "synonyms": [
                  "gift"
            ],
            "chapter": 10,
            "chapterTitle": "The Two Sons: Habil and Qabil",
            "storyExample": "To solve the problem, they had to make an offering to Allah.",
            "category": "Spiritual Life"
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
            "chapter": 11,
            "chapterTitle": "The First Conflict and the Raven",
            "storyExample": "When Habil heard this, he said, “I won’t fight back and harm you. You are my brother, and I fear Allah.”",
            "category": "Actions & Safety"
      },
      {
            "word": "panic",
            "definition": "To suddenly feel so afraid that you cannot think calmly.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ˈpænɪk/",
            "wordFamily": [
                  "panic",
                  "panicked",
                  "panicking"
            ],
            "collocations": [
                  "start to panic",
                  "panic suddenly"
            ],
            "synonyms": [
                  "alarm"
            ],
            "antonyms": [
                  "calm"
            ],
            "chapter": 11,
            "chapterTitle": "The First Conflict and the Raven",
            "storyExample": "He also started to panic.",
            "category": "Feelings"
      },
      {
            "word": "raven",
            "definition": "A large black bird.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈreɪvən/",
            "wordFamily": [
                  "raven",
                  "ravens"
            ],
            "collocations": [
                  "black raven",
                  "send a raven"
            ],
            "chapter": 11,
            "chapterTitle": "The First Conflict and the Raven",
            "storyExample": "Then Allah sent a raven that landed near Qabil and started digging the ground.",
            "category": "Animals & Nature"
      },
      {
            "word": "digging",
            "definition": "Making a hole in the ground.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ˈdɪɡɪŋ/",
            "wordFamily": [
                  "dig",
                  "dug",
                  "digging"
            ],
            "collocations": [
                  "digging the ground",
                  "start digging"
            ],
            "chapter": 11,
            "chapterTitle": "The First Conflict and the Raven",
            "storyExample": "Then Allah sent a raven that landed near Qabil and started digging the ground.",
            "category": "Actions"
      },
      {
            "word": "spread",
            "definition": "Carried or passed something to many people or places.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/spred/",
            "wordFamily": [
                  "spread",
                  "widespread"
            ],
            "collocations": [
                  "spread a message",
                  "spread across the world"
            ],
            "chapter": 12,
            "chapterTitle": "The Legacy of Adam",
            "storyExample": "His children and grandchildren moved to different parts of the world and spread his message worldwide.",
            "category": "Guidance & Faith"
      },
      {
            "word": "admitting",
            "definition": "Accepting or saying that something is true.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ədˈmɪtɪŋ/",
            "wordFamily": [
                  "admit",
                  "admitted",
                  "admitting",
                  "admission"
            ],
            "collocations": [
                  "admit a mistake",
                  "admitting mistakes"
            ],
            "synonyms": [
                  "acknowledging"
            ],
            "chapter": 12,
            "chapterTitle": "The Legacy of Adam",
            "storyExample": "It also teaches people the importance of admitting mistakes and turning back to Allah.",
            "category": "Learning & Values"
      },
      {
            "word": "message",
            "definition": "An important idea or teaching passed to others.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈmesɪdʒ/",
            "wordFamily": [
                  "message",
                  "messenger"
            ],
            "collocations": [
                  "spread a message",
                  "important message"
            ],
            "chapter": 12,
            "chapterTitle": "The Legacy of Adam",
            "storyExample": "His children and grandchildren moved to different parts of the world and spread his message worldwide.",
            "category": "Communication & Faith"
      },
      {
            "word": "guide",
            "definition": "To show the right direction or way to act.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ɡaɪd/",
            "wordFamily": [
                  "guide",
                  "guidance",
                  "guided"
            ],
            "collocations": [
                  "guide someone",
                  "guide us"
            ],
            "synonyms": [
                  "lead",
                  "direct"
            ],
            "chapter": 12,
            "chapterTitle": "The Legacy of Adam",
            "storyExample": "He sent His prophets, and their stories still guide us.",
            "category": "Guidance & Faith"
      }
]
  },
  { id: 18, type: 'final-challenge', title: 'Final Challenge', content: 'Demonstrate whole-book mastery through ten independent B1 activities.' },
];