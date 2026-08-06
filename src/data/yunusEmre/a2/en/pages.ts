import { PageData } from '../../../../types';
import { yunusA2FinalReviewExercises } from './exercises';

export const yunusA2Pages: PageData[] = [
  {
    id: 1,
    type: 'story',
    title: 'Yunus Emre',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Fimages%2Fyunus_a2_ch1.png?alt=media&token=cc6efeb4-1c3e-4005-8b92-427d230fe1b7',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Faudio%2F00_Chapter_1.mp3?alt=media&token=2c220cf9-a3d3-4563-bbab-c15c66f575f3',
    content: `Yunus Emre was one of the first great Anatolian Turkish poets. He was born in 1240 in Anatolia. People could easily understand his poems because he wrote and said them in simple Turkish. He helped improve the Turkish language. His poems have important moral lessons. These lessons are still very important for Turkish culture today. He also spoke of the greatness and oneness of Allah, love for Allah and Prophet Muhammad (pbuh).

At that time, schools had the name of madrasa. After he completed his madrasa education, he followed the way of the dervishes and became a dervish. Dervishes practised to be a good person with moral values under the guidance of a teacher at dervish houses.

Yunus Emre became a dervish pupil of Taptuk Emre. He traveled to many cities in Anatolia, as well as Syria and Azerbaijan. He lived in the same period as Mevlana. Mevlana died in 1273 and later Yunus passed away in 1320. Yunus was 33 or 34 years old when Mevlana died.`,
    vocabulary: [
      { word: 'poet', definition: 'A person who writes poems.' },
      { word: 'moral', definition: 'Related to good behavior and right actions.' },
      { word: 'madrasa', definition: 'A traditional school where students study religion and knowledge.' },
      { word: 'dervish', definition: 'A person who tries to become closer to Allah through a simple and moral life.' },
      { word: 'pupil', definition: 'A student.' }
    ],
    hotspots: [
      { id: 'h1-1', x: 36, y: 42, title: 'Yunus Emre', description: 'Yunus Emre wrote and said his poems in simple Turkish so people could easily understand them.' },
      { id: 'h1-2', x: 68, y: 50, title: 'Taptuk Emre', description: 'Taptuk Emre was Yunus Emre’s teacher. Yunus became his dervish pupil.' }
    ],
    animatedWords: ['poems', 'improve', 'moral', 'completed', 'dervishes', 'dervish', 'practised', 'moral values', 'pupil', 'passed away'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex1-1',
        type: 'true-false',
        title: 'Yunus Emre',
        instructions: 'Decide if the statement is true or false.',
        question: 'Yunus Emre wrote poems in simple Turkish.',
        correctAnswer: true,
        explanation: 'People could easily understand his poems because he wrote them in simple Turkish.',
        feedback: {
          correct: 'Correct! Yunus Emre used simple Turkish in his poems.',
          incorrect: 'Not quite. The text says people understood his poems because he wrote in simple Turkish.'
        }
      }
    ]
  },
  {
    id: 2,
    type: 'story',
    title: 'Our Dervish Yunus',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Fimages%2Fyunus_a2_ch2.png?alt=media&token=147589b1-2572-4f9a-8212-54b6edff9089',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Faudio%2F01_Chapter_2_Our_Dervish_Yunus.mp3?alt=media&token=0f6fcff6-eb0f-48e2-a2bb-74080c44f3e7',
    content: `Dervishes tried to find Allah everywhere not only with their eyes but also with their hearts. They witnessed Allah in the whole universe. They shared these experiences about Allah with other people. Dervishes were fully aware that they were in need of Allah in every way. That is why, even if they were rich, they always called themselves poor. If they were wealthy, their wealth was not in their hearts, but in their hands to give to charity. They shared what they had with the needy; they could call themselves poor, but their hearts were very rich. Dervishes were generous-hearted and open-handed.

Because of the Creator, they forgave and tolerated the others. They were kind and cheerful; they were not cold or sulky. They tried to understand everyone and found a solution to their problems. They always tried to leave bad habits like jealousy, arrogance, stinginess, greediness, selfishness, or gossiping.`,
    vocabulary: [
      { word: 'witnessed', definition: 'Saw or felt something clearly.' },
      { word: 'universe', definition: 'Everything that exists: the world, sky, stars, and all creation.' },
      { word: 'charity', definition: 'Help, money, or things given to people in need.' },
      { word: 'generous-hearted', definition: 'Very willing to give and help.' },
      { word: 'sulky', definition: 'Unhappy and silent in an unfriendly way.' }
    ],
    hotspots: [
      { id: 'h2-1', x: 32, y: 46, title: 'Heart and Eyes', description: 'Dervishes tried to find Allah everywhere not only with their eyes but also with their hearts.' },
      { id: 'h2-2', x: 70, y: 52, title: 'Generosity', description: 'Dervishes were generous-hearted and open-handed. They shared what they had with the needy.' }
    ],
    animatedWords: ['witnessed', 'give to charity', 'the needy', 'forgave', 'tolerated', 'sulky'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex2-1',
        type: 'multiple-choice',
        title: 'Dervish Values',
        instructions: 'Choose the correct answer.',
        question: 'What did dervishes do with their wealth?',
        options: [
          'They kept it only for themselves',
          'They shared it with the needy',
          'They hid it in the mountains'
        ],
        correctAnswer: 1,
        explanation: 'The text says dervishes shared what they had with the needy.',
        feedback: {
          correct: 'Correct! Dervishes were generous and shared with people in need.',
          incorrect: 'Try again. Look at the part about charity and the needy.'
        }
      }
    ]
  },
  {
    id: 3,
    type: 'story',
    title: 'The Difficult Path',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Fimages%2Fyunus_a2_ch3.png?alt=media&token=c8a27af3-41ec-457c-867f-5d228a76025f',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Faudio%2F02_Chapter_3_The_Difficult_Path.mp3?alt=media&token=37f699e8-d728-448f-b90c-d482050415d6',
    content: `They followed honesty, patience, humility, generosity, respect and trust in Allah.

In fact, the path of dervishhood was a very difficult one. Yunus Emre beautifully says this point in his poem that begins with the words, “You cannot be a dervish.”

A dervish needs a wounded heart and eyes full of tears.

He needs to be as easy going as a sheep.

You can’t be a dervish.

He must be without hands when someone hits him.

He must be tongueless when people make fun of him.

A dervish needs to be without any desires (selfless).

You can’t be a dervish.

Dervishes had a way of life of their own. They ate less, spoke less, slept less, and spent their time on useful activities. Dervishes lived a moderate and disciplined life according to Islam.

Yunus Emre was one of these dervishes. He received his dervish training at the school of his master, Taptuk Emre.`,
    vocabulary: [
      { word: 'honesty', definition: 'The quality of telling the truth and doing the right thing.' },
      { word: 'patience', definition: 'The ability to wait calmly and stay strong.' },
      { word: 'humility', definition: 'Not thinking you are better than other people.' },
      { word: 'moderate', definition: 'Not too much and not too little.' },
      { word: 'disciplined', definition: 'Careful, controlled, and organized.' }
    ],
    hotspots: [
      { id: 'h3-1', x: 35, y: 45, title: 'The Difficult Path', description: 'The path of dervishhood was a very difficult one. It required honesty, patience, and humility.' },
      { id: 'h3-2', x: 66, y: 54, title: 'Simple Life', description: 'Dervishes ate less, spoke less, slept less, and spent their time on useful activities.' }
    ],
    animatedWords: ['path', 'moderate', 'received', 'training'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex3-1',
        type: 'true-false',
        title: 'The Difficult Path',
        instructions: 'Decide if the statement is true or false.',
        question: 'Dervishhood was described as an easy path with no difficulty.',
        correctAnswer: false,
        explanation: 'The text says the path of dervishhood was very difficult.',
        feedback: {
          correct: 'Correct! The path was difficult and required strong values.',
          incorrect: 'Not quite. The text clearly says dervishhood was a difficult path.'
        }
      }
    ]
  },
  {
    id: 4,
    type: 'story',
    title: 'The Woodcutter Yunus',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Fimages%2Fyunus_a2_ch4.png?alt=media&token=3cc7b1d3-af93-4d4b-b520-600900bcfa16',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Faudio%2F03_Chapter_4_The_Woodcutter_Yunus.mp3?alt=media&token=d115951e-0f8a-4181-b380-6a9bb3ce24b6',
    content: `He became a student of Taptuk Emre at a young age. In Taptuk Emre’s dervish house, the first condition to be a student is to be humble and willing to serve the others and the creation.

This was also the case for Yunus. He told his master, “I will do whatever service you ask of me.” Taptuk then assigned Yunus to the wood-cutting duties at the dervish house. Some works look ordinary at first glance. The primary goal is to break the ego and give up bad behaviours.

There was a mountain behind Taptuk’s dervish house. Taptuk asked Yunus to collect wood from the mountain. Every day, Yunus carried wood on his back from the mountain. But he never cut or brought green or crooked wood. He always said: “Crooked wood cannot go into the dervish house”.`,
    vocabulary: [
      { word: 'condition', definition: 'Something necessary before another thing can happen.' },
      { word: 'humble', definition: 'Not proud; respectful and modest.' },
      { word: 'serve', definition: 'To help or work for others.' },
      { word: 'ordinary', definition: 'Normal or simple.' },
      { word: 'crooked', definition: 'Not straight; bent.' }
    ],
    hotspots: [
      { id: 'h4-1', x: 35, y: 48, title: 'Wood-Cutting Duty', description: 'Taptuk assigned Yunus to the wood-cutting duties at the dervish house to break his ego.' },
      { id: 'h4-2', x: 70, y: 44, title: 'Crooked Wood', description: 'Yunus never cut or brought green or crooked wood because crooked wood cannot go into the dervish house.' }
    ],
    animatedWords: ['humble', 'willing', 'assigned', 'at first glance', 'primary', 'ego', 'give up', 'crooked', 'go into'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex4-1',
        type: 'multiple-choice',
        title: 'Wood-Cutting Duty',
        instructions: 'Choose the correct answer.',
        question: 'What duty did Taptuk Emre give to Yunus?',
        options: [
          'Writing poems in the city',
          'Collecting wood from the mountain',
          'Selling things in the bazaar'
        ],
        correctAnswer: 1,
        explanation: 'Taptuk Emre asked Yunus to collect wood from the mountain.',
        feedback: {
          correct: 'Correct! Yunus collected wood from the mountain.',
          incorrect: 'Try again. Think about the mountain behind the dervish house.'
        }
      }
    ]
  },
  {
    id: 5,
    type: 'story',
    title: 'Straight Wood and the Ego',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Fimages%2Fyunus_a2_ch5.png?alt=media&token=a0861f75-eee2-4e22-a522-d9835cb6c07d',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Faudio%2F04_Chapter_5_Straight_Wood_and_the_Ego.mp3?alt=media&token=2877e2b5-610b-43d2-aafc-82eebdc7d0ef',
    content: `Just imagine! Carrying firewood every day hurts your back and leaves bad cuts. He chose the straightest pieces of wood with the greatest care. So why was he doing that?

The wood is Yunus’s ego and it looks like it needs to be corrected. It looks like Yunus is working with wood to fix crooked pieces. But in fact, he is training and fixing his own heart and ego. Every time he uses the axe, he fixes a bad part of himself. This service taught him how to have a good heart and do the right thing.

Yunus served his teacher Taptuk Emre in this way for exactly forty years. Taptuk Emre noticed that Yunus never carried crooked wood to the house. One day he asked the following question to Yunus:

"My Yunus, is there no crooked wood in the mountains? Why do you always bring straight pieces?"`,
    vocabulary: [
      { word: 'wound', definition: 'An injury or painful mark on the body.' },
      { word: 'straightest', definition: 'The most straight.' },
      { word: 'ego', definition: 'The self; the part of a person that can become proud or selfish.' },
      { word: 'corrected', definition: 'Made right or better.' },
      { word: 'axe', definition: 'A tool used to cut wood.' }
    ],
    hotspots: [
      { id: 'h5-1', x: 34, y: 50, title: 'Straight Wood', description: 'Yunus chose the straightest pieces of wood with the greatest care.' },
      { id: 'h5-2', x: 68, y: 46, title: 'Training the Ego', description: 'Yunus is working with wood to train and fix his own heart and ego.' }
    ],
    animatedWords: ['pain', 'wounds', 'ego', 'it looks like', 'fixing', 'fixes', 'noticed'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex5-1',
        type: 'tap-reveal',
        title: 'The Meaning of Wood',
        instructions: 'Tap to reveal the answer.',
        question: 'What does the wood symbolize in this chapter?',
        correctAnswer: 'It symbolizes Yunus’s ego and the training of his heart.',
        explanation: 'The text says the wood is like Yunus’s ego, and the work helps him fix his heart.',
        feedback: {
          correct: 'Correct! The wood has a deeper meaning.',
          incorrect: 'Think about the part about ego and heart.'
        },
        tapRevealItems: [
          { question: 'Straight Wood', answer: 'It points to a straight, honest, and corrected heart.' },
          { question: 'Crooked Wood', answer: 'It reminds us of bad habits that need to be corrected.' }
        ]
      }
    ]
  },
  {
    id: 6,
    type: 'story',
    title: 'The Door of Honesty',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Fimages%2Fyunus_a2_ch6.png?alt=media&token=cdb88efc-a560-43b4-8bda-4367dc69abe3',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Faudio%2F05_Chapter_6_The_Door_of_Honesty.mp3?alt=media&token=ae9043fe-3949-413b-8258-3821a1d649e0',
    content: `Yunus replied, "My teacher, this place is a door of honesty and goodness. Not even a crooked piece of wood can enter here. And a crooked person cannot enter this place, either."

Nature and living alone helped the dervish think deeply about himself. During this time, Yunus made his heart purer. He learned the special language of all creatures. He looked at nature and found a lesson from everything in it, like reading the Quran. Also, the lessons and talks at the dervish house helped him with this learning. For Yunus, woodcutting in nature helped him become a better person.

He first learned to be alone with Allah in the mountains. The mountains are quiet and far from people. There are trees, animals, and rivers. If you look closely, you find a deeper meaning in everything in nature. Everything tells a story.`,
    vocabulary: [
      { word: 'honesty', definition: 'Truthfulness and doing what is right.' },
      { word: 'goodness', definition: 'The quality of being good and kind.' },
      { word: 'purer', definition: 'Cleaner in heart or character.' },
      { word: 'creatures', definition: 'Living things created by Allah.' },
      { word: 'deeper meaning', definition: 'A lesson or idea that is not seen at first.' }
    ],
    hotspots: [
      { id: 'h6-1', x: 35, y: 45, title: 'Door of Honesty', description: 'The dervish house is a door of honesty and goodness, so crooked wood or a crooked person cannot enter here.' },
      { id: 'h6-2', x: 68, y: 54, title: 'Nature as a Lesson', description: 'Yunus looked at nature and found a lesson from everything in it, like trees, animals, and rivers.' }
    ],
    animatedWords: ['honesty and goodness', 'either', 'deeply', 'talks', 'deeper'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex6-1',
        type: 'true-false',
        title: 'The Door of Honesty',
        instructions: 'Decide if the statement is true or false.',
        question: 'Yunus believed that a crooked person could enter the door of honesty easily.',
        correctAnswer: false,
        explanation: 'Yunus said that not even crooked wood, and not a crooked person, could enter this place.',
        feedback: {
          correct: 'Correct! Yunus connected straight wood with honesty and goodness.',
          incorrect: 'Not quite. Yunus said a crooked person cannot enter the door of honesty.'
        }
      }
    ]
  },
  {
    id: 7,
    type: 'story',
    title: 'A Single Daisy',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Fimages%2Fyunus_a2_ch7.png?alt=media&token=ac7247fd-d44a-4995-bda7-d42105e6fe50',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Faudio%2F06_Chapter_7_A_Single_Daisy.mp3?alt=media&token=db885702-c119-40e8-ae16-a635de955363',
    content: `One day, Taptuk Emre said to his students, “Today, all of you go up the mountain and bring me flowers. I will give a gift to whoever prepares the most beautiful bunch of flowers. All the dervishes went out into the fields. They picked flowers and ran back to their teacher. Yunus was the last to return.

In the late afternoon, he returned with a single daisy. Some dervishes were making fun of Yunus. They whispered in each other’s ears, “Just look at him! All he could find was a single daisy!” Taptuk asked Yunus about the meaning and the reason for this single daisy. Yunus replied, “My teacher” “I walked around the fields, and wherever I saw a flower, I heard that it was saying the name of Allah. I could not cut any of them. When it started to get dark, a daisy called out to me:`,
    vocabulary: [
      { word: 'bunch', definition: 'A group of flowers held together.' },
      { word: 'field', definition: 'An open area of land.' },
      { word: 'single', definition: 'Only one.' },
      { word: 'daisy', definition: 'A small flower, often with white petals and a yellow center.' },
      { word: 'whispered', definition: 'Spoke very quietly.' }
    ],
    hotspots: [
      { id: 'h7-1', x: 36, y: 46, title: 'A Single Daisy', description: 'In the late afternoon, Yunus returned with only a single daisy.' },
      { id: 'h7-2', x: 68, y: 50, title: 'Remembering Allah', description: 'Yunus heard every flower saying the name of Allah, so he could not cut any of them.' }
    ],
    animatedWords: ['fields', 'picked', 'whispered', 'walked around', 'approached'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex7-1',
        type: 'multiple-choice',
        title: 'A Single Daisy',
        instructions: 'Choose the correct answer.',
        question: 'Why did Yunus not pick many flowers?',
        options: [
          'He was too lazy to look for flowers',
          'He could not find any flowers in the field',
          'He heard the flowers saying the name of Allah'
        ],
        correctAnswer: 2,
        explanation: 'Yunus said he heard the flowers saying the name of Allah, so he could not cut them.',
        feedback: {
          correct: 'Correct! Yunus saw a spiritual meaning in the flowers.',
          incorrect: 'Try again. Think about what Yunus heard from the flowers.'
        }
      }
    ]
  },
  {
    id: 8,
    type: 'story',
    title: 'A Meaningful Life',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Fimages%2Fyunus_a2_ch8.png?alt=media&token=8880aed0-315d-405c-9cd0-1a9c28e7897e',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fa2%2Faudio%2F07_Chapter_8_A_Meaningful_Life.mp3?alt=media&token=0b25f43f-f374-4a92-a505-68e8aa74a66c',
    content: `‘Come, dervish Yunus. My time is up now; I’m dried up and dying. At least pick me and let my life end in the hands of a dervish.”

In these two stories, Yunus tells us to always remember Allah in our hearts and to do every job well. He says that we must always do our best when we work. Every job is important, so we should do it well and correctly for the love of Allah. Our hearts must be full of love for Him during our daily lives. This helps us live a meaningful and fruitful life.`,
    vocabulary: [
      { word: 'approached', definition: 'Came near in time or place.' },
      { word: 'dried up', definition: 'No longer fresh; without water or life.' },
      { word: 'meaningful', definition: 'Having an important purpose or value.' },
      { word: 'fruitful', definition: 'Useful and successful.' },
      { word: 'daily lives', definition: 'The normal things we do every day.' }
    ],
    hotspots: [
      { id: 'h8-1', x: 34, y: 45, title: 'The Daisy’s Time', description: 'The daisy called out to Yunus because it was dried up and dying, and ready to be picked.' },
      { id: 'h8-2', x: 68, y: 52, title: 'A Meaningful Life', description: 'We should always remember Allah in our hearts and do every job well to live a meaningful life.' }
    ],
    animatedWords: ['meaningful', 'fruitful'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex8-1',
        type: 'tap-reveal',
        title: 'The Main Lesson',
        instructions: 'Tap to reveal the answer.',
        question: 'What does Yunus teach us in these stories?',
        correctAnswer: 'We should remember Allah and do every job well.',
        explanation: 'The text says we should remember Allah in our hearts and do every job well for His love.',
        feedback: {
          correct: 'Correct! This is the main lesson of the story.',
          incorrect: 'Think about the final paragraph and the lesson of daily life.'
        },
        tapRevealItems: [
          { question: 'Remember Allah', answer: 'Keep love for Allah in your heart during daily life.' },
          { question: 'Do Every Job Well', answer: 'Every job is important when it is done correctly for Allah’s love.' }
        ]
      }
    ]
  },
  {
    id: 9,
    type: 'quiz',
    title: 'Knowledge Check: Yunus Emre - A2',
    image: 'https://picsum.photos/seed/quiz-yunus-a2/1200/800',
    audioUrl: '',
    content: 'Test your understanding of the A2 story of Yunus Emre with these True/False questions.',
    exercises: [
      {
        id: 'q1',
        type: 'true-false',
        title: 'Anatolian Poet',
        instructions: 'Decide if the statement is true or false.',
        question: 'Yunus Emre was a great Anatolian Turkish poet.',
        correctAnswer: true,
        explanation: 'The story begins by saying that Yunus Emre was one of the first great Anatolian Turkish poets.',
        feedback: {
          correct: 'Correct!',
          incorrect: 'Yunus Emre was indeed a great Anatolian Turkish poet.'
        }
      },
      {
        id: 'q2',
        type: 'true-false',
        title: 'Simple Turkish Language',
        instructions: 'Decide if the statement is true or false.',
        question: 'People could easily understand Yunus Emre’s poems because they were written in simple Turkish.',
        correctAnswer: true,
        explanation: 'People could understand his poems because he wrote them in simple Turkish.',
        feedback: {
          correct: 'Correct!',
          incorrect: 'His simple language was key to reaching the people.'
        }
      },
      {
        id: 'q3',
        type: 'true-false',
        title: 'Yunus’s Teacher',
        instructions: 'Decide if the statement is true or false.',
        question: 'Taptuk Emre was Yunus Emre’s teacher.',
        correctAnswer: true,
        explanation: 'Yunus Emre became a dervish pupil of Taptuk Emre.',
        feedback: {
          correct: 'Correct!',
          incorrect: 'Taptuk Emre was indeed his spiritual guide.'
        }
      },
      {
        id: 'q4',
        type: 'true-false',
        title: 'Crooked Wood Lesson',
        instructions: 'Decide if the statement is true or false.',
        question: 'Yunus always brought crooked wood to the dervish house.',
        correctAnswer: false,
        explanation: 'Yunus never brought crooked wood to the dervish house; only straight wood could enter there.',
        feedback: {
          correct: 'Correct!',
          incorrect: 'He believed crookedness had no place in the teacher’s house.'
        }
      },
      {
        id: 'q5',
        type: 'true-false',
        title: 'The Flower Story',
        instructions: 'Decide if the statement is true or false.',
        question: 'Yunus returned from the mountain with many colorful flowers instead of a single daisy.',
        correctAnswer: false,
        explanation: 'Yunus returned with a single, wilted daisy because he heard it remembering Allah.',
        feedback: {
          correct: 'Correct!',
          incorrect: 'He returned with only a single daisy.'
        }
      },
      {
        id: 'q6',
        type: 'true-false',
        title: 'Meaningful Life',
        instructions: 'Decide if the statement is true or false.',
        question: 'Doing our job well and correctly is a way to show love for Allah.',
        correctAnswer: true,
        explanation: 'Every job is important, so we should do it well and correctly for the love of Allah.',
        feedback: {
          correct: 'Correct!',
          incorrect: 'Actually, doing our job correctly and well is how we express our love for Allah.'
        }
      }
    ]
  },
  {
    id: 10,
    type: 'vocabulary-match',
    title: 'Vocabulary Challenge',
    image: 'https://picsum.photos/seed/vocab-match-yunus-a2/1200/800',
    audioUrl: '',
    content: 'Match the words from the story with their correct meanings.',
    vocabularyPairs: [
      { word: 'poet', meaning: 'A person who writes poems' },
      { word: 'dervish', meaning: 'A person who tries to live a simple and moral life' },
      { word: 'charity', meaning: 'Help or money given to people in need' },
      { word: 'humble', meaning: 'Not proud; respectful and modest' },
      { word: 'crooked', meaning: 'Not straight; bent' },
      { word: 'honesty', meaning: 'The quality of telling the truth and doing right' }
    ]
  },
  {
    id: 11,
    type: 'glossary',
    title: 'Master Glossary - Part 1',
    content: 'A complete list of vocabulary from the first half of the story.',
    image: 'https://picsum.photos/seed/glossary1-yunus-a2/1200/800',
    vocabulary: [
      { word: 'poet', definition: 'A person who writes poems.' },
      { word: 'moral', definition: 'Related to good behavior and right actions.' },
      { word: 'madrasa', definition: 'A traditional school where students study religion and knowledge.' },
      { word: 'dervish', definition: 'A person who tries to become closer to Allah through a simple and moral life.' },
      { word: 'pupil', definition: 'A student.' },
      { word: 'witnessed', definition: 'Saw or felt something clearly.' },
      { word: 'universe', definition: 'Everything that exists: the world, sky, stars, and all creation.' },
      { word: 'charity', definition: 'Help, money, or things given to people in need.' },
      { word: 'generous-hearted', definition: 'Very willing to give and help.' },
      { word: 'sulky', definition: 'Unhappy and silent in an unfriendly way.' },
      { word: 'honesty', definition: 'Truthfulness and doing what is right.' },
      { word: 'patience', definition: 'The quality of being able to wait calmly or stay strong in difficult times.' }
    ]
  },
  {
    id: 12,
    type: 'glossary',
    title: 'Master Glossary - Part 2',
    content: 'A complete list of vocabulary from the second half of the story.',
    image: 'https://picsum.photos/seed/glossary2-yunus-a2/1200/800',
    vocabulary: [
      { word: 'humility', definition: 'Not thinking you are better than other people.' },
      { word: 'moderate', definition: 'Not too much and not too little; balanced.' },
      { word: 'disciplined', definition: 'Careful, controlled, and organized.' },
      { word: 'condition', definition: 'Something necessary before another thing can happen.' },
      { word: 'humble', definition: 'Not proud; respectful and modest.' },
      { word: 'serve', definition: 'To help or work for others.' },
      { word: 'ordinary', definition: 'Normal or simple.' },
      { word: 'crooked', definition: 'Not straight; bent.' },
      { word: 'wound', definition: 'An injury or painful mark on the body.' },
      { word: 'straightest', definition: 'The most straight or honest.' },
      { word: 'ego', definition: 'The self; the part of a person that can become proud or selfish.' },
      { word: 'deeper meaning', definition: 'A lesson or idea that is not seen at first.' }
    ]
  },
  {
    id: 13,
    type: 'exercises',
    title: 'Final Review & Reflection',
    image: 'https://picsum.photos/seed/exercises-yunus-a2/1200/800',
    content: 'Review what you have learned through sequencing, drag-and-drop, dervish reflection, and the final challenge.',
    exercises: yunusA2FinalReviewExercises
  },
  {
    id: 14,
    type: 'final-challenge',
    title: 'Final Challenge: Yunus Emre A2',
    image: 'https://picsum.photos/seed/challenge-yunus-a2/1200/800',
    content: 'Test yourself with the final challenge. Answer 10 randomized questions from the entire story.'
  }
];
