import { PageData } from '../../../../types';
import { mosesB1FinalReviewExercises } from './exercises';

export const mosesB1Pages: PageData[] = [
  {
    id: 1,
    type: 'story',
    title: 'The Pharaoh’s Fear',
    image: 'https://picsum.photos/seed/moses-b1-chapter1/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F00_Chapter_1.mp3?alt=media&token=88f2d120-a892-42d0-a91d-ffcb586f8b76',
    content: "Moses (pbuh) was a great prophet of Allah. He was born in the land of Egypt. He lived there in the 13th century BC, over 3000 years ago. At that time, the Pharaoh (Firavun) ruled Egypt. He was a dictatorial king of Egypt. He did not believe in Allah and saw himself as the god. The Children of Israel or the Israelites were a large group in Egypt and they were the grandchildren of Jacob (pbuh) (Yakub) and Joseph (pbuh) (Yûsuf). They believed in only one Allah, just like their ancestor, Prophet Abraham (pbuh). So, they did not believe that the Pharaoh was a god. The Pharaoh feared that this group, which was larger than the Egyptians, would take control of his kingdom. That’s why he was rude and harsh to the Children of Israel. He used every method to upset them. He made the Children of Israel work under heavy risks for little or no money. Years passed and the despotic kings continued to rule Egypt. One day the Pharaoh had a dream. In his vision, he saw an Israelite take him down from his throne.",
    vocabulary: [
      { word: 'dictatorial', definition: 'Using power in a strict and unfair way.' },
      { word: 'ancestor', definition: 'A family member who lived long ago.' },
      { word: 'harsh', definition: 'Cruel, strict, or unkind.' },
      { word: 'despotic', definition: 'Ruling with complete and cruel power.' }
    ],
    hotspots: [
      { id: 'h1-1', x: 32, y: 42, title: 'Pharaoh', description: 'Pharaoh ruled Egypt as a dictatorial king and saw himself as the god.' },
      { id: 'h1-2', x: 68, y: 48, title: 'Children of Israel', description: 'They were a large group in Egypt who believed in only one Allah.' }
    ],
    animatedWords: ['prophet', 'Pharaoh', 'dictatorial', 'ancestor', 'despotic'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex1-1',
        type: 'true-false',
        title: 'The Pharaoh’s Fear',
        instructions: 'Decide if the statement is true or false.',
        question: 'The Children of Israel believed that Pharaoh was a god.',
        correctAnswer: false,
        explanation: 'They believed in only one Allah and did not believe that Pharaoh was a god.',
        feedback: {
          correct: 'Correct! They believed in only one Allah.',
          incorrect: 'Not quite. The Children of Israel did not believe Pharaoh was a god.'
        }
      }
    ]
  },
  {
    id: 2,
    type: 'story',
    title: 'The Pharaoh’s Dream',
    image: 'https://picsum.photos/seed/moses-b1-chapter2/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F01_Chapter_2_The_Pharaoh%E2%80%99s_Dream.mp3?alt=media&token=6dd1d806-12dd-4af2-bc5f-16efa6e46277',
    content: "Ibn Abbas told: “The Pharaoh saw a fire in his dream. The fire came from Jerusalem and burnt the houses of the Egyptians, but did not do any harm to the Children of Israel.” When he woke up, he called all his advisors and magicians and asked about the dream. They said: “A boy will be born of the Children of Israel and the Egyptian people will die at this boy’s hands.” Then, the Pharaoh told his soldiers: “Kill all the newborn boys of the Children of Israel.” His soldiers broke into houses, searched the rooms. When they found baby boys, they killed them. All mothers, fathers and sisters cried, but the soldiers who were heartless showed no pity. Moses was born in that year. His mother was so frightened that she was unable to sleep at night. She was scared that when Moses cried, the soldiers could hear his voice. She did not know what to do. She prayed to Allah for help. Allah heard her prayers and advised her: “Take a basket.”",
    vocabulary: [
      { word: 'advisor', definition: 'A person who gives advice to a ruler.' },
      { word: 'newborn', definition: 'A baby who has just been born.' },
      { word: 'heartless', definition: 'Showing no kindness or pity.' },
      { word: 'frightened', definition: 'Very afraid.' },
      { word: 'broke into', definition: 'Entered a building or house by force.' },
      { word: 'showed no pity', definition: 'Did not feel or show any mercy or sympathy for others.' }
    ],
    hotspots: [
      { id: 'h2-1', x: 35, y: 38, title: 'The Dream', description: 'Pharaoh saw a fire in his dream that burnt the houses of the Egyptians but did not do any harm to the Children of Israel.' },
      { id: 'h2-2', x: 66, y: 52, title: 'Moses’s Mother', description: 'Moses’s mother was so frightened that she was unable to sleep at night and prayed to Allah for help.' }
    ],
    animatedWords: ['dream', 'advisors', 'newborn', 'heartless', 'frightened'],
    exercises: [
      {
        id: 'ex2-1',
        type: 'multiple-choice',
        title: 'The Dream',
        instructions: 'Choose the correct answer.',
        question: 'What did the advisors say about Pharaoh’s dream?',
        options: [
          'A boy would be born from the Children of Israel',
          'The Pharaoh would become stronger',
          'The Egyptians would leave Egypt'
        ],
        correctAnswer: 0,
        explanation: 'They said a boy would be born from the Children of Israel.',
        feedback: {
          correct: 'Correct! The dream was connected to a boy from the Children of Israel.',
          incorrect: 'Try again. Think about what the advisors told Pharaoh.'
        }
      }
    ]
  },
  {
    id: 3,
    type: 'story',
    title: 'A Baby in the River',
    image: 'https://picsum.photos/seed/moses-b1-chapter3/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F02_Chapter_3_A_Baby_in_the_River.mp3?alt=media&token=ba89a274-3967-4e6c-a87e-373e3fc5aeb1',
    content: "“Put your baby in the basket. Take the basket to the River Nile. Waters will carry it to the shelter.” Moses’s mother put the baby Moses in a basket and took it to the river. There she put the basket in the water. The basket was carried away by the waters. Moses’s mother was very worried and told her daughter to follow the basket. She was so sad, but she knew that Allah was kinder to the baby Moses than her. Allah was their Lord and also the Lord of the Nile. Allah told the waves to be kind while carrying the baby. Soon, the waves brought the basket ashore near the Pharaoh’s palace. The palace servants saw the basket and took it to the Pharaoh and the queen, Asiye. When Queen Asiye saw the baby, she felt a strong love for him in her heart. The queen, who was different from her husband, was good, kind-hearted, and believed in Allah. While she was looking at the baby, she told her husband: “I will take him to the palace and look after him.”",
    vocabulary: [
      { word: 'shelter', definition: 'A safe place that protects someone.' },
      { word: 'ashore', definition: 'To or onto the land from water.' },
      { word: 'servants', definition: 'People who work in a house or palace.' },
      { word: 'kind-hearted', definition: 'Kind, gentle, and caring.' }
    ],
    hotspots: [
      { id: 'h3-1', x: 42, y: 48, title: 'The Basket', description: 'Moses’s mother put the baby in a basket and placed it in the river where it was carried away by the waters.' },
      { id: 'h3-2', x: 70, y: 40, title: 'Queen Asiye', description: 'When Queen Asiye saw the baby, she felt a strong love for him in her heart.' }
    ],
    animatedWords: ['basket', 'River Nile', 'shelter', 'ashore', 'kind-hearted'],
    exercises: [
      {
        id: 'ex3-1',
        type: 'tap-reveal',
        title: 'Allah Protects Moses',
        instructions: 'Tap to reveal the answer.',
        question: 'Where did the waves bring the basket?',
        correctAnswer: 'Near the Pharaoh’s palace.',
        explanation: 'The waves brought the basket ashore near Pharaoh’s palace.',
        feedback: {
          correct: 'Correct! The basket came near the palace.',
          incorrect: 'Think about where Queen Asiye first saw the baby.'
        },
        tapRevealItems: [
          { question: 'The Basket', answer: 'It came ashore near Pharaoh’s palace.' }
        ]
      }
    ]
  },
  {
    id: 4,
    type: 'story',
    title: 'Back to His Mother',
    image: 'https://picsum.photos/seed/moses-b1-chapter4/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F03_Chapter_4_Back_to_His_Mother.mp3?alt=media&token=12daf6fb-6ead-47ef-bf22-f6d440431ece',
    content: "The Pharaoh accepted her decision. She said to her servants: “Find a nurse for the baby.” Moses’ sister saw everything, and immediately ran to the Queen and said: “I know a good woman. She lives nearby. She will be a good nurse for the baby.” And she brought her mother to be Moses’s nurse in the palace. Allah sent Moses back to his mother, and baby Moses was in her mother’s arms again. Moses’ mother looked after her own baby. Allah is the Best Protector. Queen Asiye also took care of Moses and raised him in the palace with love. People always remember her because of her goodness and courage. Moses grew up safely in the palace of the Pharaoh. He always loved Allah and prayed to Him. He knew that the Pharaoh was not a god. Years passed and Moses became a strong young man. He was always willing to help the weak people. Young Moses felt close to the Children of Israel because he was originally not from a family of the palace and his mother was one of the Children of Israel.",
    vocabulary: [
      { word: 'nurse', definition: 'A woman who feeds and cares for a baby.' },
      { word: 'Protector', definition: 'Someone who keeps another person safe.' },
      { word: 'courage', definition: 'Bravery in a difficult or dangerous situation.' },
      { word: 'originally', definition: 'At the beginning; by origin.' },
      { word: 'looked after', definition: 'Kept someone safe and took care of them.' },
      { word: 'raised', definition: 'Brought up and cared for a child.' },
      { word: 'felt close', definition: 'Felt a strong connection or bond with someone.' }
    ],
    hotspots: [
      { id: 'h4-1', x: 34, y: 48, title: 'Moses’s Mother', description: 'Allah sent Moses back to his mother, and baby Moses was in her mother’s arms again.' },
      { id: 'h4-2', x: 68, y: 42, title: 'Queen Asiye’s Courage', description: 'Queen Asiye took care of Moses and raised him in the palace with love, remembered for her goodness and courage.' }
    ],
    animatedWords: ['nurse', 'Protector', 'courage', 'weak people', 'originally'],
    exercises: [
      {
        id: 'ex4-1',
        type: 'true-false',
        title: 'Back to His Mother',
        instructions: 'Decide if the statement is true or false.',
        question: 'Allah sent Moses back to his mother.',
        correctAnswer: true,
        explanation: 'Moses’s mother became his nurse in the palace.',
        feedback: {
          correct: 'Correct! Allah is the Best Protector.',
          incorrect: 'Actually, Moses returned to his mother through Allah’s plan.'
        }
      }
    ]
  },
  {
    id: 5,
    type: 'story',
    title: 'A Mistake in the Bazaar',
    image: 'https://picsum.photos/seed/moses-b1-chapter5/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F04_Chapter_5_A_Mistake_in_the_Bazaar.mp3?alt=media&token=11a36743-f419-4b9d-b47d-d37505d638b8',
    content: "One day, while Moses was walking in the bazaar, he saw two men fighting. One of them was an Egyptian, while the other was from the Children of Israel. Suddenly, a poor and weak man from the Children of Israel called out: “Help me!” Moses ran to help him. He hit the Egyptian and accidentally caused someone's death. Moses was very upset. He prayed to Allah : “ Forgive me! I didn’t do it on purpose. I have wronged myself. This is of Satan’s doing” ( Surah Kasas: 15,16) Allah pardoned him, because He is Forgiving and Merciful. The next day, Moses was again in the bazaar where he saw two men fighting. One of them was the same man from the Children of Israel who Moses helped the day before. The man once more called out to Moses: “Help me!” Moses understood that the Israelite was a quarrelsome man, not a peaceable man. Moses approached those who were fighting. The man from the Children of Israel made fun of Moses: “You accidentally caused someone's death yesterday. Are you going to kill me too?”",
    vocabulary: [
      { word: 'accidentally', definition: 'By chance; not on purpose.' },
      { word: 'on purpose', definition: 'Intentionally; with a clear aim.' },
      { word: 'pardoned', definition: 'Forgave someone for a wrong action.' },
      { word: 'quarrelsome', definition: 'Often arguing or fighting.' },
      { word: 'peaceable', definition: 'Calm and not wanting to fight.' }
    ],
    hotspots: [
      { id: 'h5-1', x: 42, y: 45, title: 'The Mistake', description: 'Moses hit an Egyptian while helping a poor man and accidentally caused his death, then prayed for forgiveness.' },
      { id: 'h5-2', x: 68, y: 52, title: 'The Bazaar', description: 'Moses was walking in the bazaar where he saw two men fighting, and saw another fight there the next day.' }
    ],
    animatedWords: ['accident', 'purpose', 'pardoned', 'quarrelsome', 'peaceable'],
    exercises: [
      {
        id: 'ex5-1',
        type: 'multiple-choice',
        title: 'Mistake and Forgiveness',
        instructions: 'Choose the correct answer.',
        question: 'What did Moses do after the accident?',
        options: [
          'He prayed to Allah for forgiveness',
          'He became proud',
          'He returned to Pharaoh'
        ],
        correctAnswer: 0,
        explanation: 'Moses asked Allah to forgive him.',
        feedback: {
          correct: 'Correct! Moses regretted his mistake and prayed to Allah.',
          incorrect: 'Try again. Moses was upset and made dua.'
        }
      }
    ]
  },
  {
    id: 6,
    type: 'story',
    title: 'Escape from Egypt',
    image: 'https://picsum.photos/seed/moses-b1-chapter6/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F05_Chapter_6_Escape_from_Egypt.mp3?alt=media&token=e933fc91-c0fa-4c87-a477-bc2b0b758623',
    content: "His sadness increased even more. At this moment a friend of Moses came and said to him: “The Pharaoh’s soldiers are looking for you. You killed an Egyptian yesterday. Now they are going to catch you. Run away from the city.” Moses knew that the punishment for killing an Egyptian was death. Moses escaped from the soldiers. He left Egypt and travelled for a long time. He was not alone as Allah guided him. After many days, he reached the land of Midian (Medyen), which was the closest place between Egypt and Syria. The Pharaoh was not the ruler in this land. Moses was tired and thirsty, he was looking for water. Soon, he found a well where many men gathered. These were shepherds who were watering their sheep and cattle. Far from the spring two girls were sitting. They also had sheep with them. But they did not go near it. Moses asked the girls: “Why are you sitting far away from the spring? Why aren’t you taking your sheep to drink water?”",
    vocabulary: [
      { word: 'punishment', definition: 'A penalty for doing something wrong.' },
      { word: 'escaped', definition: 'Got away from danger.' },
      { word: 'guided', definition: 'Shown the right way.' },
      { word: 'spring', definition: 'A natural place where water comes from the ground.' },
      { word: 'cattle', definition: 'Large farm animals such as cows or bulls.' },
      { word: 'looking for', definition: 'Searching or trying to find someone or something.' },
      { word: 'run away', definition: 'To escape or leave quickly.' }
    ],
    hotspots: [
      { id: 'h6-1', x: 33, y: 44, title: 'Escape', description: 'A friend warned Moses to run away from the city because Pharaoh’s soldiers were looking for him.' },
      { id: 'h6-2', x: 67, y: 53, title: 'The Spring', description: 'Moses found a well with shepherds watering their sheep, and two girls sitting far from the spring.' }
    ],
    animatedWords: ['punishment', 'escaped', 'guided', 'Midian', 'spring'],
    exercises: [
      {
        id: 'ex6-1',
        type: 'true-false',
        title: 'Escape from Egypt',
        instructions: 'Decide if the statement is true or false.',
        question: 'Moses reached Midian after leaving Egypt.',
        correctAnswer: true,
        explanation: 'Allah guided Moses until he reached the land of Midian.',
        feedback: {
          correct: 'Correct! Moses escaped and reached Midian.',
          incorrect: 'Actually, Moses travelled from Egypt to Midian.'
        }
      }
    ]
  },
  {
    id: 7,
    type: 'story',
    title: 'The Two Sisters',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Fimages%2Fmoses_b1_ch7.png?alt=media&token=9a62b3f8-645e-4db7-bd11-decf69e64f2c',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F06_Chapter_7_The_Two_Sisters.mp3?alt=media&token=3f0bee72-088c-43c7-9f53-b7cf3da5ccf8',
    content: "The girls said: “Our father is very old. He cannot come with us. There are no young men in our house to help us with the animals. So, we have to take the sheep to the water ourselves. We have to wait our turn. We have to be patient until the other sheepmen go away.” Moses understood that the two sisters needed help. He took their sheep to the spring and made them drink water. The girls were very happy. They took their sheep and went home. When the sisters came home early, their father asked: “What happened? You came home very early!” The sisters said: “A young man helped us to water our sheep. We did not have to wait until the other shepherds went away.” The father of these girls was Şuayb (pbuh). Şuayb (pbuh) was a messenger of Allah to the eastern part of the Gulf of Aqaba (Akabe Körfezi), Midian. Prophet Şuayb (pbuh) was very old, that’s why he had to send the girls alone.",
    vocabulary: [
      { word: 'patient', definition: 'Able to wait calmly.' },
      { word: 'sheepmen', definition: 'Men who look after sheep.' },
      { word: 'messenger', definition: 'A person chosen to deliver Allah’s message.' },
      { word: 'Gulf', definition: 'A large area of sea partly surrounded by land.' }
    ],
    hotspots: [
      { id: 'h7-1', x: 36, y: 50, title: 'The Two Sisters', description: 'The two sisters had to wait their turn patiently because their father was old and they had no young men to help them.' },
      { id: 'h7-2', x: 66, y: 44, title: 'Helping Others', description: 'Moses understood that the two sisters needed help, so he took their sheep to the spring and made them drink water.' }
    ],
    animatedWords: ['patient', 'sheepmen', 'Şuayb', 'messenger', 'Gulf of Aqaba'],
    exercises: [
      {
        id: 'ex7-1',
        type: 'multiple-choice',
        title: 'Helping the Sisters',
        instructions: 'Choose the correct answer.',
        question: 'Why were the two sisters waiting?',
        options: [
          'They had to wait until the other sheepmen went away',
          'They were lost in the desert',
          'They did not have any sheep'
        ],
        correctAnswer: 0,
        explanation: 'They waited because the other sheepmen were using the water.',
        feedback: {
          correct: 'Correct! They had to wait their turn.',
          incorrect: 'Try again. Think about the spring and the sheepmen.'
        }
      }
    ]
  },
  {
    id: 8,
    type: 'story',
    title: 'A Simple Life in Midian',
    image: 'https://picsum.photos/seed/moses-b1-chapter8/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F07_Chapter_8_A_Simple_Life_in_Midian.mp3?alt=media&token=c081e538-c8bc-48cc-871b-bbcb6daaa664',
    content: "Şuayb (pbuh) said: “Go and call the young man, I would like to thank him for the work he did.” Moses came to the house, where he ate food with the girls’ father. Şuayb (pbuh) offered Moses a job. He accepted the offer, because he was a stranger in Midian and he urgently needed a job and a house. Moses helped the family with their work while he was staying with them. Later, he married one of the sisters. They lived a simple life with patience. After living in Midian for about ten years, with the guidance of Allah, Moses decided to go back to Egypt. He took his family and started to travel towards Egypt. They travelled a long time. It was winter. They met nobody on the way. It was getting dark and cold. They were crossing a valley between mountains. Suddenly, Moses saw a fire on the hillside. He said to his family: “Wait here. Let me go and take some burning sticks from the fire to get warm.”",
    vocabulary: [
      { word: 'offered', definition: 'Gave someone a chance to accept something.' },
      { word: 'urgently', definition: 'Very quickly because something is important.' },
      { word: 'guidance', definition: 'Help and direction.' },
      { word: 'valley', definition: 'Low land between hills or mountains.' },
      { word: 'hillside', definition: 'The side of a hill.' }
    ],
    hotspots: [
      { id: 'h8-1', x: 35, y: 45, title: 'A New Home', description: 'Moses accepted a job with Şuayb’s family, married one of the sisters, and lived a simple life.' },
      { id: 'h8-2', x: 68, y: 38, title: 'The Fire', description: 'While travelling to Egypt, Moses saw a fire on the hillside and went to get some warm sticks.' }
    ],
    animatedWords: ['offered', 'urgently', 'guidance', 'valley', 'hillside'],
    exercises: [
      {
        id: 'ex8-1',
        type: 'true-false',
        title: 'A Simple Life',
        instructions: 'Decide if the statement is true or false.',
        question: 'Moses lived in Midian for about ten years.',
        correctAnswer: true,
        explanation: 'The text says Moses lived in Midian for about ten years.',
        feedback: {
          correct: 'Correct! Moses lived there for about ten years.',
          incorrect: 'Actually, he lived in Midian for about ten years.'
        }
      }
    ]
  },
  {
    id: 9,
    type: 'story',
    title: 'The Voice on the Mountain',
    image: 'https://picsum.photos/seed/moses-b1-chapter9/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F08_Chapter_9_The_Voice_on_the_Mountain.mp3?alt=media&token=a9af03f4-1f7c-4510-a7da-3bacff8c1507',
    content: "Moses climbed the mountain. It was already dark and everywhere was very quiet. In the silence he heard a thundering voice: “Moses, I am your Lord. I chose you. Listen to me. I am Allah. There is no god but Allah. Remember Me and pray to Me.” Then Allah told Moses: “Put down your walking stick!” Moses put down his staff on the ground. It turned into a big snake! Once more Allah spoke to Moses: “Put your hand into your chest. Now take it out. See, your hand is now shining like silver. But it is not harmed.” Allah said: “These are signs of My power. Show these signs to the Pharaoh. And tell him of the power of Allah.” Allah told Moses to go to Egypt and show the Pharaoh the signs and warn him to get guidance from Allah. After this message from Allah, Moses became a Messenger of Allah, a prophet. (see Surah Tâhâ: 9-24) Upon this, Moses (pbuh) headed to Egypt.",
    vocabulary: [
      { word: 'thundering', definition: 'Very loud and powerful.' },
      { word: 'staff', definition: 'A long stick used for walking or support.' },
      { word: 'signs', definition: 'Miracles or proofs from Allah.' },
      { word: 'guidance', definition: 'Help to follow the right path.' },
      { word: 'headed to', definition: 'Went towards a place.' }
    ],
    hotspots: [
      { id: 'h9-1', x: 35, y: 35, title: 'The Voice', description: 'In the silence, Moses heard a thundering voice saying: “Moses, I am your Lord... I am Allah.”' },
      { id: 'h9-2', x: 68, y: 52, title: 'The Signs', description: 'His staff turned into a big snake and his hand shone like silver as signs of Allah’s power.' }
    ],
    animatedWords: ['thundering', 'staff', 'signs', 'guidance', 'prophet'],
    exercises: [
      {
        id: 'ex9-1',
        type: 'multiple-choice',
        title: 'The Signs',
        instructions: 'Choose the correct answer.',
        question: 'What happened to Moses’s staff?',
        options: [
          'It turned into a big snake',
          'It turned into silver',
          'It disappeared'
        ],
        correctAnswer: 0,
        explanation: 'Moses put down his staff and it turned into a big snake.',
        feedback: {
          correct: 'Correct! This was one of the signs of Allah.',
          incorrect: 'Try again. Think about what happened on the mountain.'
        }
      }
    ]
  },
  {
    id: 10,
    type: 'story',
    title: 'The King’s Magicians',
    image: 'https://picsum.photos/seed/moses-b1-chapter10/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F09_Chapter_10_The_King%E2%80%99s_Magicians.mp3?alt=media&token=0ee1f735-751a-475f-90b3-f7c61f7feffb',
    content: "Allah chose Moses (pbuh) to be His prophet. Moses (pbuh) took his brother Harun with him as his companion and went to the palace. The king was sitting on his throne, and his advisors and soldiers were standing around him. Moses (pbuh) told him about Allah. He explained to him that he was the Messenger from the Lord of the universe. The king listened to Moses (pbuh) and he thought Moses lost his mind. After making every effort to convince him, Moses (pbuh) realized that logical discussions would not work. The Pharaoh kept refusing to believe in Allah. Moses (pbuh) had no choice but to display the miracles. Moses (pbuh) got his staff and threw it on the ground. The staff turned into a big snake! Then he put his arm in his armpit. When he got out his arm, it was shining white! These were miracles of Allah. Allah gave them to Moses (pbuh) in order to help him against the Pharaoh. The king and his advisors laughed at him.",
    vocabulary: [
      { word: 'companion', definition: 'Someone who goes with or supports another person.' },
      { word: 'throne', definition: 'A special chair for a king or ruler.' },
      { word: 'convince', definition: 'To make someone believe or agree.' },
      { word: 'logical', definition: 'Based on reason and clear thinking.' },
      { word: 'display', definition: 'To show something clearly.' }
    ],
    hotspots: [
      { id: 'h10-1', x: 35, y: 46, title: 'Harun', description: 'Moses took his brother Harun with him as his companion and went to the palace.' },
      { id: 'h10-2', x: 68, y: 45, title: 'The Palace', description: 'In the palace, Moses threw his staff and it turned into a big snake, showing miracles to Pharaoh.' }
    ],
    animatedWords: ['companion', 'throne', 'convince', 'logical', 'miracles'],
    exercises: [
      {
        id: 'ex10-1',
        type: 'true-false',
        title: 'Before Pharaoh',
        instructions: 'Decide if the statement is true or false.',
        question: 'Pharaoh immediately believed in Allah after listening to Moses.',
        correctAnswer: false,
        explanation: 'Pharaoh kept refusing to believe in Allah.',
        feedback: {
          correct: 'Correct! Pharaoh refused to believe.',
          incorrect: 'Not quite. Pharaoh did not believe; he refused.'
        }
      }
    ]
  },
  {
    id: 11,
    type: 'story',
    title: 'The Miracle of the Staff',
    image: 'https://picsum.photos/seed/moses-b1-chapter11/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F10_Chapter_11_The_Miracle_of_the_Staff.mp3?alt=media&token=dd7499b4-4031-4904-a038-ad43505e4ae0',
    content: "They made fun of Moses (pbuh) and Allah. The king said to Moses (pbuh): “This is only magic. All of my magicians can do this.” He invited his magicians to the palace. The magicians came with sticks in their hands. Some were holding ropes. They put down the sticks and ropes. Once the sticks and ropes fell to the ground, they looked just like snakes! When Moses (pbuh) saw them, he got frightened. But Allah spoke to Moses (pbuh): “Throw down your staff!” Moses (pbuh) threw down his staff and it turned into a huge snake. In a second, his staff ate up all the snakes of the magicians. The magicians who witnessed this miracle bowed down in front of Moses (pbuh). They shouted: “We believe in the Lord of Moses and Harun!” The king still refused to believe in Allah, because he was arrogant. The Pharaoh did not want to let those who worshipped Allah live. He continued to trouble Moses (pbuh) and his people day and night. He told his advisors and soldiers: “Be rude to them!”",
    vocabulary: [
      { word: 'made fun of', definition: 'Laughed at someone in an unkind way.' },
      { word: 'frightened', definition: 'Afraid.' },
      { word: 'witnessed', definition: 'Saw something happen.' },
      { word: 'arrogant', definition: 'Thinking one is better or greater than others.' },
      { word: 'trouble', definition: 'To cause problems or suffering.' },
      { word: 'throw down', definition: 'To throw something onto the ground.' }
    ],
    hotspots: [
      { id: 'h11-1', x: 36, y: 43, title: 'The Magicians', description: 'The magicians witnessed this miracle, bowed down, and shouted: “We believe in the Lord of Moses and Harun!”' },
      { id: 'h11-2', x: 70, y: 50, title: 'The Staff', description: 'Moses threw down his staff and it turned into a huge snake that ate up all the snakes of the magicians.' }
    ],
    animatedWords: ['magic', 'frightened', 'witnessed', 'arrogant', 'believe'],
    exercises: [
      {
        id: 'ex11-1',
        type: 'multiple-choice',
        title: 'The Magicians Believe',
        instructions: 'Choose the correct answer.',
        question: 'What did the magicians say after witnessing the miracle?',
        options: [
          'We believe in the Lord of Moses and Harun',
          'Pharaoh is our lord',
          'This is only magic'
        ],
        correctAnswer: 0,
        explanation: 'The magicians bowed down and believed in the Lord of Moses and Harun.',
        feedback: {
          correct: 'Correct! They recognized the truth.',
          incorrect: 'Try again. The magicians changed after seeing the miracle.'
        }
      }
    ]
  },
  {
    id: 12,
    type: 'story',
    title: 'The Red Sea',
    image: 'https://picsum.photos/seed/moses-b1-chapter12/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F11_Chapter_12_The_Red_Sea.mp3?alt=media&token=a8bda307-b5a4-48bf-ae63-602dc7c99a06',
    content: "Life became harder for them day by day. Moses (pbuh) asked Allah for help. And Allah guided him and told him: “Travel by night with My servants...” Moses (pbuh) called his people and said: “Get ready for the journey. We are going away from Egypt. But you must keep it secret. Nobody should see us. We will leave at night.” They left Egypt at night. They were a large group and among them there were many old people and children. The children and the old could not walk fast and got tired very quickly. That’s why the caravan moved slowly. When the Pharaoh noticed they left the land, he prepared his huge army and easily managed to catch up with them. When the sun rose, the caravan reached the Red Sea. Moses (pbuh) and his people saw the king and his soldiers following them. His people panicked. But Moses (pbuh) said: “Calm down! Allah is with us and will show us the way to safety.” Soon, they were seized by the Pharaoh and his army!",
    vocabulary: [
      { word: 'servants', definition: 'People who serve and obey Allah.' },
      { word: 'caravan', definition: 'A group of people travelling together.' },
      { word: 'catch up with', definition: 'To reach someone after following them.' },
      { word: 'panicked', definition: 'Felt sudden strong fear.' },
      { word: 'seized', definition: 'Caught or trapped by force.' },
      { word: 'keep secret', definition: 'To hide information or plans from others.' }
    ],
    hotspots: [
      { id: 'h12-1', x: 35, y: 45, title: 'The Night Journey', description: 'They got ready secretly and left Egypt at night as a large group.' },
      { id: 'h12-2', x: 68, y: 54, title: 'The Red Sea', description: 'When the sun rose, the caravan reached the Red Sea with Pharaoh’s huge army chasing them.' }
    ],
    animatedWords: ['journey', 'caravan', 'Red Sea', 'panicked', 'seized'],
    exercises: [
      {
        id: 'ex12-1',
        type: 'true-false',
        title: 'The Red Sea',
        instructions: 'Decide if the statement is true or false.',
        question: 'Moses told his people that Allah was with them.',
        correctAnswer: true,
        explanation: 'Moses said: “Calm down! Allah is with us and will show us the way to safety.”',
        feedback: {
          correct: 'Correct! Moses trusted Allah.',
          incorrect: 'Actually, Moses told them Allah was with them.'
        }
      }
    ]
  },
  {
    id: 13,
    type: 'story',
    title: 'The Cruel King Drowns',
    image: 'https://picsum.photos/seed/moses-b1-chapter13/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F12_Chapter_13_The_Cruel_King_Drowns.mp3?alt=media&token=5186f26c-0d2d-4f78-bdee-487451dc8d30',
    content: "They were trapped with the Red Sea in front and the king’s army behind them. But Allah was with them. He told Moses (pbuh): “Hit the sea with your stick!” When the stick touched the waters of the sea, a miracle happened! The sea parted! The waves rose high like walls and did not fall down! They could see the sandy ground! Allah made a path for them across the sea! Moses (pbuh) and his people safely walked between the walls of water. The Pharaoh and his soldiers were right behind them. They also saw the road in the middle of the sea. But the Pharaoh turned to his soldiers and said: “Look! The sea opened at my order.” They entered the parted waters and when they were midway, Allah ordered the sea to close, the sea closed over them and they drowned. The story of Moses (pbuh) has many lessons to learn. It again reminds us that no one can enslave another human being. It also shows that the only power over human beings is Allah. Allah sent prophets to show people a better life. They came to teach about Allah and show people right and wrong. Allah is not visible to physical eyes, but He is with us and when we pray to Him, He always guides us on the right path.",
    vocabulary: [
      { word: 'trapped', definition: 'Unable to escape from a dangerous place.' },
      { word: 'parted', definition: 'Separated or opened into two sides.' },
      { word: 'midway', definition: 'In the middle of a path or journey.' },
      { word: 'enslave', definition: 'To force someone to become a slave.' },
      { word: 'visible', definition: 'Able to be seen.' }
    ],
    hotspots: [
      { id: 'h13-1', x: 36, y: 48, title: 'The Path Through the Sea', description: 'The sea parted and the waves rose high like walls, making a safe road for Moses and his people.' },
      { id: 'h13-2', x: 70, y: 52, title: 'The Final Lesson', description: 'The final lesson reminds us that the only power over human beings is Allah.' }
    ],
    animatedWords: ['trapped', 'parted', 'midway', 'enslave', 'visible'],
    exercises: [
      {
        id: 'ex13-1',
        type: 'tap-reveal',
        title: 'The Final Lesson',
        instructions: 'Tap to reveal the answer.',
        question: 'What does the story remind us about power?',
        correctAnswer: 'The only power over human beings is Allah.',
        explanation: 'The story teaches that no one can enslave another human being and that true power belongs to Allah.',
        feedback: {
          correct: 'Correct! This is one of the main lessons of the story.',
          incorrect: 'Think about the final message of the chapter.'
        },
        tapRevealItems: [
          { question: 'True Power', answer: 'Only Allah has power over human beings.' }
        ]
      }
    ]
  },
  {
    id: 14,
    type: 'quiz',
    title: 'Knowledge Check: Moses (pbuh) - B1',
    image: 'https://picsum.photos/seed/quiz-moses-b1/1200/800',
    audioUrl: '',
    content: 'Test your understanding of the B1 story of Prophet Moses (pbuh).',
    exercises: [
      {
        id: 'q1',
        type: 'true-false',
        question: 'Pharaoh ruled Egypt and saw himself as a god.',
        correctAnswer: true,
        feedback: {
          correct: 'Correct! Pharaoh was a dictatorial king and saw himself as the god.',
          incorrect: 'Actually, Pharaoh ruled Egypt and saw himself as the god.'
        },
        explanation: 'The story says Pharaoh did not believe in Allah and saw himself as the god.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'Moses’s mother placed him in a basket and put it in the River Nile.',
        correctAnswer: true,
        feedback: {
          correct: 'Correct! She trusted Allah and placed Moses in the basket.',
          incorrect: 'Actually, Moses’s mother put him in a basket in the River Nile.'
        },
        explanation: 'Allah advised her to put baby Moses in a basket and take it to the River Nile.'
      },
      {
        id: 'q3',
        type: 'true-false',
        question: 'Queen Asiye was cruel and heartless like Pharaoh.',
        correctAnswer: false,
        feedback: {
          correct: 'Correct! Queen Asiye was good, kind-hearted, and believed in Allah.',
          incorrect: 'Actually, Queen Asiye was different from Pharaoh.'
        },
        explanation: 'Queen Asiye was good, kind-hearted, and believed in Allah.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'Moses helped the two sisters at the spring in Midian.',
        correctAnswer: true,
        feedback: {
          correct: 'Correct! Moses helped them water their sheep.',
          incorrect: 'Actually, Moses helped the two sisters at the spring.'
        },
        explanation: 'Moses took their sheep to the spring and made them drink water.'
      },
      {
        id: 'q5',
        type: 'true-false',
        question: 'The magicians believed after witnessing the miracle of Moses’s staff.',
        correctAnswer: true,
        feedback: {
          correct: 'Correct! They said they believed in the Lord of Moses and Harun.',
          incorrect: 'Actually, the magicians believed after seeing the miracle.'
        },
        explanation: 'The staff ate up the snakes of the magicians, and they believed.'
      },
      {
        id: 'q6',
        type: 'true-false',
        question: 'Pharaoh opened the sea by his own power.',
        correctAnswer: false,
        feedback: {
          correct: 'Correct! Allah opened the sea, not Pharaoh.',
          incorrect: 'Actually, Allah opened the sea for Moses and his people.'
        },
        explanation: 'Pharaoh arrogantly claimed it opened at his order, but Allah opened the sea.'
      }
    ]
  },
  {
    id: 15,
    type: 'vocabulary-match',
    title: 'Vocabulary Challenge',
    image: 'https://picsum.photos/seed/vocab-moses-b1/1200/800',
    audioUrl: '',
    content: 'Match the B1 story words with their meanings.',
    vocabularyPairs: [
      { word: 'dictatorial', meaning: 'Using power in a strict and unfair way' },
      { word: 'ancestor', meaning: 'A family member who lived long ago' },
      { word: 'heartless', meaning: 'Showing no kindness or pity' },
      { word: 'ashore', meaning: 'Onto the land from water' },
      { word: 'accidentally', meaning: 'By chance; not on purpose' },
      { word: 'quarrelsome', meaning: 'Often arguing or fighting' }
    ]
  },
  {
    id: 16,
    type: 'glossary',
    title: 'Master Glossary - Part 1',
    content: 'A complete list of important vocabulary from the first half of the B1 story.',
    image: 'https://picsum.photos/seed/moses-b1-glossary1/1200/800',
    vocabulary: [
      { word: 'dictatorial', definition: 'Using power in a strict and unfair way.' },
      { word: 'ancestor', definition: 'A family member who lived long ago.' },
      { word: 'harsh', definition: 'Cruel, strict, or unkind.' },
      { word: 'despotic', definition: 'Ruling with complete and cruel power.' },
      { word: 'advisor', definition: 'A person who gives advice to a ruler.' },
      { word: 'newborn', definition: 'A baby who has just been born.' },
      { word: 'heartless', definition: 'Showing no kindness or pity.' },
      { word: 'frightened', definition: 'Very afraid.' },
      { word: 'shelter', definition: 'A safe place that protects someone.' },
      { word: 'ashore', definition: 'To or onto the land from water.' },
      { word: 'servants', definition: 'People who work in a house or palace.' },
      { word: 'kind-hearted', definition: 'Kind, gentle, and caring.' }
    ]
  },
  {
    id: 17,
    type: 'glossary',
    title: 'Master Glossary - Part 2',
    content: 'A complete list of important vocabulary from the second half and final part of the B1 story.',
    image: 'https://picsum.photos/seed/moses-b1-glossary2/1200/800',
    vocabulary: [
      { word: 'accidentally', definition: 'By chance; not on purpose.' },
      { word: 'escaped', definition: 'Got away from danger.' },
      { word: 'guided', definition: 'Shown the right way.' },
      { word: 'spring', definition: 'A natural place where water comes from the ground.' },
      { word: 'staff', definition: 'A long stick used for walking or support.' },
      { word: 'companion', definition: 'Someone who goes with or supports another person.' },
      { word: 'thundering', definition: 'Very loud and powerful.' },
      { word: 'throne', definition: 'A special chair for a king or ruler.' },
      { word: 'arrogant', definition: 'Thinking one is better or greater than others.' },
      { word: 'seized', definition: 'Caught or trapped by force.' },
      { word: 'enslave', definition: 'To force someone to become a slave.' },
      { word: 'visible', definition: 'Able to be seen.' }
    ]
  },
  {
    id: 18,
    type: 'exercises',
    title: 'Final Review & Reflection',
    image: 'https://picsum.photos/seed/moses-b1-final-review/1200/800',
    content: 'Complete these final exercises to master the B1 story and lessons of Prophet Moses (pbuh).',
    exercises: mosesB1FinalReviewExercises
  },
  {
    id: 19,
    type: 'final-challenge',
    title: 'Final Challenge',
    content: 'Test your knowledge of the entire B1 story of Prophet Moses (pbuh).',
    image: 'https://picsum.photos/seed/moses-b1-final-challenge/1200/800'
  }
];