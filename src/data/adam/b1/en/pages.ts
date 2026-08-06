import { PageData } from '../../../../types';
import { adamB1FinalReviewExercises } from './exercises';

export const adamB1Pages: PageData[] = [
  {
    id: 1,
    type: 'story',
    title: 'Introduction & The Creation',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_1.png?alt=media&token=f2ae6289-f8fa-4606-a89a-d1d8537a4394',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch1.mp3?alt=media&token=1b85ccfb-4eaa-4154-b3d9-3eef74cd6e50',
    content: "Adam (pbuh) is the first Messenger and the father of all humans. Allah created him from soil and showed him great respect and gave full value as the first human. Holy Qur’an tells his tale in different surahs. Surahs A’raf, Baqarah, Hicr, Isra, Sâd and Taha describe Adam (pbuh)’s tale clearly. As the grandchildren of Adam (pbuh) we can learn many lessons from this fabulous but true story. In this story, there are numerous important messages about humans’ role in life.\n\nAfter Allah created the sky and the earth, HE told the angels that HE was going to create a human. HE said He decided to place a ruler (halîfe) on earth. This ruler would live there for many years. Angels got surprised and began to wait with curiosity.",
    vocabulary: [
      { word: 'Messenger', definition: 'A divinely appointed individual tasked with conveying a message from Allah to humanity.' },
      { word: 'ruler', definition: 'A person who exercises ultimate power or authority; in this context, a steward or vicegerent (Khalifa).' },
      { word: 'curiosity', definition: 'An intense desire to investigate, learn, or understand something new.' }
    ],
    hotspots: [
      { id: 'h1', x: 30, y: 40, title: 'The Soil', description: 'Symbolizes the humble and diverse origins of humanity, derived from the earth itself.' },
      { id: 'h2', x: 70, y: 20, title: 'The Light', description: 'Represents the divine intellect and knowledge bestowed upon Adam.' }
    ],
    animatedWords: ['soil', 'sky', 'earth', 'curiosity'],
    exercises: [
      {
        id: 'ex1-1',
        type: 'true-false',
        title: 'The Origin of Humanity',
        instructions: 'Evaluate the statement based on the narrative.',
        question: 'Adam was created from fire, which granted him superiority over other creatures.',
        correctAnswer: false,
        explanation: 'Adam (pbuh) was created from soil (clay), emphasizing humility, while Iblis was created from fire, leading to his arrogance.',
        feedback: {
          correct: 'Correct! The story emphasizes that Adam was shaped from the earth.',
          incorrect: 'Incorrect. Remember that the choice of material (soil vs fire) is a key part of the conflict.'
        }
      }
    ]
  },
  {
    id: 2,
    type: 'story',
    title: 'The Shaping of Adam',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_2.png?alt=media&token=0859c3b7-a4b5-420c-a48d-8577e494ad6e',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch2.mp3?alt=media&token=50c2834f-df94-46fd-acc3-05427df307e3',
    content: "Then, Allah’s angels collected soil from different parts of the earth and Allah shaped Adam (pbuh). That’s why humans have different skin colors. Prophet Muhammad (peace be upon him, ʿalayhi s-salām) said that Allah created Adam (pbuh) from a handful of dust from different lands, so the children of Adam (pbuh) are white, red, black and yellow in color. \n\nAllah told His angels “After I have created Adam (pbuh) and given him life and knowledge, show respect to him.” Allah gave Adam (pbuh) life and intellect to learn and understand. Later, HE taught him full knowledge for the goodness on earth. He gave Adam (pbuh) more knowledge than angels.",
    vocabulary: [
      { word: 'intellect', definition: 'The capacity for rational thought, understanding, and objective reasoning.' },
      { word: 'knowledge', definition: 'The theoretical or practical understanding of a subject, granted by Allah to Adam.' },
      { word: 'diversity', definition: 'The state of being diverse; variety, as seen in the different skin colors of humanity.' }
    ],
    hotspots: [
      { id: 'h2-1', x: 40, y: 30, title: "Divine Intellect", description: "The unique capacity for reasoning and learning that distinguishes humans from other beings." },
      { id: 'h2-2', x: 60, y: 50, title: "Angelic Respect", description: "The angels acknowledged Adam's superior knowledge as a gift from the Creator." }
    ],
    animatedWords: ['knowledge', 'intellect', 'respect'],
    exercises: [
      {
        id: 'ex2-1',
        type: 'multiple-choice',
        title: 'The Source of Superiority',
        instructions: 'Identify the reason for the angels\' respect.',
        question: 'Why did the angels show respect to Adam (pbuh)?',
        options: ['Because he was made of light', 'Because of his superior knowledge and intellect', 'Because he was stronger than them'],
        correctAnswer: 1,
        explanation: 'Adam was granted knowledge that even the angels did not possess, which established his high status.',
        feedback: {
          correct: 'Correct! It was his intellect and knowledge that earned him respect.',
          incorrect: 'Consider what Allah taught Adam that the angels did not know.'
        }
      }
    ]
  },
  {
    id: 3,
    type: 'story',
    title: "Iblis's Arrogance",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_3.png?alt=media&token=f05d3557-72b0-4a64-8f84-a94d7e18a2a8',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch3.mp3?alt=media&token=225ce20b-1949-447c-88f4-0bbf7b273ae2',
    content: "All the angels thought that Adam (pbuh) was amazing. They all admired him and showed respect to him, but Iblis didn’t think so. Iblis thought that Adam was an unimportant being created from clay. Then Allah asked Iblis, “Why didn’t you respect Adam (pbuh)?” Iblis said, “I am better than Adam (pbuh). You created me from fire, and You created Adam (pbuh) from soil.” \n\nIblis was arrogant, he thought he was more important and more valuable than Adam (pbuh), because he believed his origin was superior. Iblis thought little and was wrong about Adam (pbuh). He couldn’t see and accept that Adam (pbuh) had perfect knowledge for the good of every creature of Allah, which made him more valuable. According to Satan, fire was superior than clay. However, in the sight of Allah, superiority or greatness did not come from race, color, or being a member of a certain group.",
    vocabulary: [
      { word: 'arrogant', definition: 'Having an exaggerated sense of one\'s own importance, often leading to disobedience.' },
      { word: 'superior', definition: 'Higher in rank, status, or quality; Iblis mistakenly believed fire was superior to clay.' },
      { word: 'origin', definition: 'The point or place where something begins, arises, or is derived.' }
    ],
    hotspots: [
      { id: 'h3-1', x: 25, y: 45, title: "The Fallacy of Origin", description: "Iblis focused on the material (fire) rather than the spiritual and intellectual value." },
      { id: 'h3-2', x: 75, y: 35, title: "The Danger of Pride", description: "Arrogance blinded Iblis to the truth of Adam's status." }
    ],
    animatedWords: ['fire', 'clay', 'arrogant', 'superior'],
    exercises: [
      {
        id: 'ex3-1',
        type: 'multiple-choice',
        title: 'The Nature of Arrogance',
        instructions: 'Analyze Iblis\'s reasoning.',
        question: 'What was the root cause of Iblis\'s refusal to respect Adam?',
        options: ['He didn\'t understand the command', 'He believed his origin (fire) made him superior', 'He was afraid of Adam'],
        correctAnswer: 1,
        explanation: 'Iblis suffered from arrogance, believing that being made of fire made him inherently better than someone made of soil.',
        feedback: {
          correct: 'Correct! He was blinded by his own pride regarding his origin.',
          incorrect: 'Look at Iblis\'s direct quote about fire and soil.'
        }
      }
    ]
  },
  {
    id: 4,
    type: 'story',
    title: 'The Expulsion of Iblis',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter4.png?alt=media&token=0e4c2656-7b50-402f-9c79-303fa7ee7849',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch4.mp3?alt=media&token=87cead03-57bf-41ee-bd1a-f66b18a5eb3d',
    content: "But Iblis continued saying he was right and the Creator was wrong. Allah said to Iblis, “Go away! You are far from My love and care.” Iblis got angry with Adam (pbuh) and hated him. He didn’t want Allah to be nice with Adam (pbuh). He thought because of Adam (pbuh), Allah put him far from His help. \n\nHe waited for a chance to keep Adam (pbuh) away from Allah’s kindness just like himself. Allah said to Adam (pbuh), Iblis was his enemy and told him to be careful about Iblis.",
    vocabulary: [
      { word: 'expulsion', definition: 'The action of depriving someone of membership or forcing them to leave a place.' },
      { word: 'enmity', definition: 'The state or feeling of being actively opposed or hostile to someone or something.' },
      { word: 'defiance', definition: 'Open resistance; bold disobedience.' }
    ],
    exercises: [
      {
        id: 'ex4-1',
        type: 'true-false',
        title: 'The Reaction of Iblis',
        instructions: 'Evaluate the statement based on the text.',
        question: 'Iblis admitted he was wrong and asked for forgiveness after being expelled.',
        correctAnswer: false,
        explanation: 'Iblis remained arrogant and blamed Adam for his expulsion, choosing defiance over repentance.',
        feedback: {
          correct: 'Correct! He chose the path of arrogance.',
          incorrect: 'Incorrect. Iblis continued to say he was right and the Creator was wrong.'
        }
      }
    ]
  },
  {
    id: 5,
    type: 'story',
    title: 'Life in Paradise and the Warning',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_5.png?alt=media&token=d8bcf1b1-a4ff-4768-971f-4893e40bb909',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch5.mp3?alt=media&token=dfc9f198-277a-4098-b31d-650ee037e3a2',
    content: "Adam was in Paradise, but he started to feel lonely. Allah gave him a wife called Eve (Hawwa) to be his companion. They began living in Paradise. It was more wonderful than we can imagine. All the blessings in Paradise were for them. \n\nAllah only asked them not to go near one tree. When Adam (pbuh) and Eve were happy in Paradise, Iblis came near them pretending to be their friend. It was a big lie. He whispered to them if they ate from that one tree, they would never die.",
    vocabulary: [
      { word: 'companionship', definition: 'A feeling of fellowship or friendship; provided by Eve for Adam.' },
      { word: 'blessings', definition: 'Divine favors or gifts that bring happiness and well-being.' },
      { word: 'deception', definition: 'The act of tricking someone into believing something that is not true.' },
      { word: 'pretending', definition: 'To give a false appearance of being, possessing, or performing' }
    ],
    hotspots: [
      { id: 'h5-1', x: 35, y: 40, title: "Hawwa (Eve)", description: "Created as a companion for Adam to share the joys of Paradise." },
      { id: 'h5-2', x: 65, y: 25, title: "The Forbidden Tree", description: "A single restriction placed as a test of obedience and trust." }
    ],
    exercises: [
      {
        id: 'ex5-1',
        type: 'multiple-choice',
        title: 'The Nature of the Test',
        instructions: 'Analyze the restriction in Paradise.',
        question: 'What was the primary purpose of the forbidden tree?',
        options: ['The fruit was poisonous', 'It was a test of obedience to Allah', 'Allah wanted the fruit for Himself'],
        correctAnswer: 1,
        explanation: 'The tree served as a test to see if Adam and Eve would remain faithful to Allah\'s command despite temptation.',
        feedback: {
          correct: 'Correct! It was a test of their faith and obedience.',
          incorrect: 'Think about the spiritual purpose of having a single rule in a perfect place.'
        }
      }
    ]
  },
  {
    id: 6,
    type: 'story',
    title: 'Satan’s lies and Adam’s Departure from Paradise',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_6.png?alt=media&token=a98133d4-6d45-4468-b7b7-c14a72cd267d',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch6.mp3?alt=media&token=6e7590c3-4f65-40ef-9439-146a77befcdc',
    content: "Eventually, Iblis managed to trick them. He convinced them to believe his lies, and they forgot the warning Allah had given them. Adam stretched out his hand, picked one of the fruits and offered it to Eve. They both ate of the forbidden tree. \n\nWhen Adam finished eating, he felt his heart filled with pain, sadness and shame. The surrounding atmosphere changed and the internal harmony ceased. \n\nWhen they tasted the fruit, their private parts became visible. Adam (pbuh) discovered that he and his wife were uncovered, so they both started cutting tree leaves in Paradise to cover themselves. They hurried to hide their private parts, because sense of shame (hayâ) is inborn human nature and nakedness is against creation.",
    vocabulary: [
      { word: 'forbidden', definition: 'Strictly prohibited by a command or law.' },
      { word: 'shame', definition: 'A painful feeling of humiliation or distress caused by the consciousness of wrong behavior.' },
      { word: 'inborn', definition: 'Existing from birth; natural.' },
      { word: 'eventually', definition: 'At some later time, in the end, or ultimately.' }
    ],
    hotspots: [
      { id: 'h6-1', x: 45, y: 35, title: "The Whispering", description: "Iblis used subtle persuasion to make them forget the divine warning." },
      { id: 'h6-2', x: 55, y: 60, title: "Innate Modesty", description: "The immediate desire to cover themselves shows that modesty is a natural human trait." }
    ],
    exercises: [
      {
        id: 'ex6-1',
        type: 'true-false',
        title: 'The Concept of Fitra',
        instructions: 'Evaluate the statement about human nature.',
        question: 'The text states that the sense of shame (haya) is an inborn human nature.',
        correctAnswer: true,
        explanation: 'The narrative explains that Adam and Eve hurried to cover themselves because modesty is innate to humanity.',
        feedback: {
          correct: 'Correct! Modesty is considered part of our natural creation (fitra).',
          incorrect: 'Incorrect. Look at the last sentence of the chapter.'
        }
      }
    ]
  },
  {
    id: 7,
    type: 'story',
    title: 'Forgiveness and Repentance',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_7.png?alt=media&token=d41b07c8-2c96-466d-9bb5-4ed05ff558da',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch7.mp3?alt=media&token=26e2d23b-e788-46ce-a430-55ba78c495aa',
    content: "Adam (pbuh) bowed down and cried; \"Forgiveness! Forgiveness!\" so Allah asked: \"Are you running away from Me?\" Adam (pbuh) replied, \"No, my Lord, but I am shy of You.\" \n\nThey made a mistake, but it wasn’t on purpose. They were very sad about their wrong action. They said sorry to Allah, learned from their mistake and decided never to repeat it. They wanted Allah to pardon them. \n\nOn the other hand, Iblis chose an opposite path. He never admitted he was wrong, because he was arrogant. Arrogance is the biggest barrier to act the right way and see between right and wrong, good and bad. \n\nAllah pardoned Adam (pbuh) and Eve both and put them on earth to live there. Allah taught and gave them everything to rule on earth. They were the rulers of the planet earth. They would direct, control and make everything better on the planet.",
    vocabulary: [
      { word: 'repentance', definition: 'The action of repenting; sincere regret or remorse for one\'s actions.' },
      { word: 'pardon', definition: 'The formal act of forgiving an offense or error.' },
      { word: 'barrier', definition: 'An obstacle that prevents progress or the ability to see the truth.' }
    ],
    hotspots: [
      { id: 'h7-1', x: 30, y: 50, title: "Sincere Repentance", description: "Unlike Iblis, Adam and Eve took full responsibility for their mistake." },
      { id: 'h7-2', x: 70, y: 40, title: "Stewardship", description: "Humans were sent to Earth NOT AS GUILTY BEINGS, but as responsible caretakers." }
    ],
    exercises: [
      {
        id: 'p7-ex1',
        type: 'multiple-choice',
        title: 'Contrasting Reactions',
        instructions: 'Compare the reactions of Adam and Iblis.',
        question: 'What was the main difference between Adam\'s reaction and Iblis\'s reaction to their mistakes?',
        options: ['Adam asked for forgiveness while Iblis remained arrogant', 'Iblis asked for forgiveness while Adam ran away', 'Both of them refused to admit they were wrong'],
        correctAnswer: 0,
        explanation: 'Adam and Eve showed humility and repented, whereas Iblis remained proud and blamed others.',
        feedback: {
          correct: 'Correct! Humility and repentance are the keys to Allah\'s mercy.',
          incorrect: 'Review the text about Iblis\'s "opposite direction".'
        }
      }
    ]
  },
  {
    id: 8,
    type: 'story',
    title: 'Struggle and Survival on Earth',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_8.png?alt=media&token=28d8bdb2-33fb-4cd5-bca8-360a04d4ceb7',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch8.mp3?alt=media&token=5ba53690-67c7-42fd-a4f1-f7cf0c2c3796',
    content: "They would use land to grow crops and keep animals. They would build buildings for shelter, protect the nature and help the weak. \n\nAdam (pbuh) and Eve left Paradise and arrived on earth. On earth, they had to struggle to survive and work hard to keep themselves alive. In addition, they had to protect themselves with clothes and weapons and protect from the wild. \n\nIblis followed Adam (pbuh), Eve and their children to earth. He was still there because he wanted people not to remember Allah. Adam (pbuh) and Eve lived on earth for many years. They had both good and difficult times and they had many children. We are all descendants of their children.",
    vocabulary: [
      { word: 'struggle', definition: 'To make a great effort to overcome challenges or difficulties.' },
      { word: 'survive', definition: 'To continue to live or exist, especially in spite of danger or hardship.' },
      { word: 'shelter', definition: 'A place giving temporary protection from bad weather or danger.' },
      { word: 'descendants', definition: 'People who is related to you and who live after you.' }
    ],
    hotspots: [
      { id: 'h8-1', x: 30, y: 50, title: "The Challenge of Earth", description: "Life on Earth required physical effort and constant alertness." },
      { id: 'h8-2', x: 70, y: 40, title: "The Persistent Enemy", description: "Iblis continued his mission to distract humanity on Earth." }
    ],
    exercises: [
      {
        id: 'ex8-1',
        type: 'true-false',
        title: 'Life on Earth',
        instructions: 'Compare the two environments.',
        question: 'Life on Earth was described as more peaceful and easy than life in Paradise.',
        correctAnswer: false,
        explanation: 'On Earth, Adam (pbuh) had to struggle to survive and they had to work hard to keep themselves alive.',
        feedback: {
          correct: 'Correct! Earth brought new challenges and the need for hard work.',
          incorrect: 'Incorrect. The text says they had to struggle to survive and work hard.'
        }
      }
    ]
  },
  {
    id: 9,
    type: 'story',
    title: 'The First Messenger and the Path of Guidance',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_9.png?alt=media&token=7b15ff4c-4e5a-4a78-b847-fe299318fe9a',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch9.mp3?alt=media&token=f3d75a5d-ac5e-437f-85c5-19787390f9f1',
    content: "At that time, there was no community. After a period of time, when a community came out, Adam (pbuh) became the first Messenger of Allah. Thus, he became the first human, the first father, and the first messenger of Islam. He started teaching people to live righteously and act honestly. He showed the way to do good, avoid evil and always keep Allah in hearts and minds. \n\nAllah never stopped sending messengers and sacred texts to remind Himself. Adam (pbuh) and Eve taught their children to pray only to Allah and be aware of Iblis and his tricks, because Iblis was their enemy, not their friend. \n\nYears later, after the death of Adam (pbuh), Allah sent many other messengers to show people the right path and the ways to stay away from Iblis. All the messengers took the same way. They wanted to make people keep Allah in their minds, because if people forget Allah, they lose the meaning and purpose of life.",
    vocabulary: [
      { word: 'righteously', definition: 'In a manner that is morally right or justifiable.' },
      { word: 'sacred', definition: 'Considered holy and deserving of great respect.' },
      { word: 'purpose', definition: 'The reason for which something is done or created or for which something exists.' }
    ],
    hotspots: [
      { id: 'h9-1', x: 40, y: 45, title: "Prophetic Mission", description: "The core mission is to remind humanity of their Creator and their purpose." },
      { id: 'h9-2', x: 60, y: 30, title: "The Right Path", description: "A consistent message shared by all messengers throughout history." }
    ],
    exercises: [
      {
        id: 'p9-ex1',
        type: 'multiple-choice',
        title: 'The Role of Messengers',
        instructions: 'Identify the primary goal of Allah\'s messengers.',
        question: 'According to the text, why does Allah send messengers and sacred texts?',
        options: ['To tell interesting stories', 'To remind people of Allah and the meaning of life', 'To teach people how to build cities'],
        correctAnswer: 1,
        explanation: 'Messengers are sent to guide people back to the remembrance of Allah and their true purpose.',
        feedback: {
          correct: 'Correct! Guidance and remembrance are the central themes.',
          incorrect: 'Think about what happens if people "forget Allah" according to the text.'
        }
      }
    ]
  },
  {
    id: 10,
    type: 'story',
    title: 'The Two Sons: Habil and Qabil',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_10.png?alt=media&token=cd6d8f8d-01de-4555-9094-56c1b1894b34',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch10.mp3?alt=media&token=bb2e41c7-5415-448f-a196-cd0c4a2a7f49',
    content: "Adam (pbuh) and Eve had two sons, Habil and Qabil. The children grew up to be strong and healthy young adults. They were very different. Habil was kind, gentle and loved taking care of animals. Qabil was mostly jealous. When they grew up, Habil became a shepherd. He kept cows, sheep and other animals. Qabil was a farmer, he worked on the farm and grew crops. \n\nOne day they were in a serious disagreement. To solve the problem they had to offer an offering to Allah. Habil brought his best and healtiest sheep as a gift for Allah, but Qabil brought just a handful of his crops that wasn’t very valuable. Qabil didn’t care to please Allah and his father Adam (pbuh). However, real goodness is giving out the best and the most loved.",
    vocabulary: [
      { word: 'disagreement', definition: 'A lack of consensus or a conflict of opinions.' },
      { word: 'offering', definition: 'A contribution or sacrifice made to show devotion to Allah.' },
      { word: 'sincerity', definition: 'The quality of being free from pretense, deceit, or hypocrisy.' }
    ],
    hotspots: [
      { id: 'h10-1', x: 35, y: 55, title: "Habil's Sincerity", description: "He offered the best of his flock, reflecting his love for Allah." },
      { id: 'h10-2', x: 65, y: 45, title: "Qabil's Negligence", description: "He offered a small portion, showing a lack of care and devotion." }
    ],
    exercises: [
      {
        id: 'ex10-1',
        type: 'drag-drop',
        title: 'Character Traits Categorization',
        instructions: 'Categorize the following traits into the correct brother based on the story.',
        question: 'Sort the character traits for Habil and Qabil.',
        correctAnswer: {
          'Habil': ['Kind', 'Gentle', 'Sincere', 'Loves animals'],
          'Qabil': ['Jealous', 'Negligent', 'Disrespectful']
        },
        explanation: 'Habil was defined by his kindness and sincerity, while Qabil was defined by his jealousy and lack of care.',
        feedback: {
          correct: 'Well done! You correctly categorized their character traits.',
          incorrect: 'Review the descriptions of Habil and Qabil in the first paragraph.'
        },
        dragDropGroups: [
          { group: 'Habil', items: ['Kind', 'Gentle', 'Sincere', 'Loves animals'] },
          { group: 'Qabil', items: ['Jealous', 'Negligent', 'Disrespectful'] }
        ]
      },
      {
        id: 'ex10-2',
        type: 'true-false',
        title: 'The Quality of Offerings',
        instructions: 'Evaluate the brothers\' intentions.',
        question: 'Qabil brought his best and most valuable crops to please Allah.',
        correctAnswer: false,
        explanation: 'Qabil brought just a handful of crops and didn\'t care to please Allah, unlike Habil who brought his best sheep.',
        feedback: {
          correct: 'Correct! Qabil lacked sincerity in his offering.',
          incorrect: 'Incorrect. The text says he brought "just a handful" and "didn\'t care".'
        }
      }
    ]
  },
  {
    id: 11,
    type: 'story',
    title: 'The First Conflict and the Raven',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_11.png?alt=media&token=6acff667-ff2a-4d60-92fc-d91415ec8e83',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch11.mp3?alt=media&token=6e0897da-737d-4f67-baf4-7385c811b4ee',
    content: "Allah accepted Habil’s offering, because he gave from his heart. Qabil’s face became very dark with anger and said, “I will kill you.” When Habil heard this, he said, “I won’t fight back and harm you, you are my brother and I fear Allah.” Qabil started fighting with his brother and killed him. Soon, Qabil’s anger cooled and he felt so sad but also started to panic. He said, “I killed my brother, I did the worst thing in life, now I don’t know what I should do with his dead body. Then, Allah sent a raven which landed near Qabil and started digging the ground. It showed Qabil the way to put his brother dead body in the pit. Qabil cried and said, “I am worse than this raven. I cannot hide my brother’s dead body.”",
    vocabulary: [
      { word: 'panic', definition: 'Sudden uncontrollable fear or anxiety, often causing wildly unthinking behavior.' },
      { word: 'raven', definition: 'A large black bird sent as a divine sign to teach Qabil how to bury the dead.' },
      { word: 'regret', definition: 'A feeling of sadness or repentance for an action performed.' }
    ],
    hotspots: [
      { id: 'h11-1', x: 50, y: 20, title: "The Raven's Lesson", description: "A bird was sent by Allah to teach a human a basic necessity." },
      { id: 'h11-2', x: 35, y: 55, title: "Anger and Regret", description: "Qabil's anger led him to a terrible action, and later he felt deep regret." }
    ],
    exercises: [
      {
        id: 'ex11-1',
        type: 'multiple-choice',
        title: 'The Lesson of the Raven',
        instructions: 'Analyze the role of the raven in the story.',
        question: 'What did the raven teach Qabil?',
        options: ['How to find food', 'How to bury the dead', 'How to fly'],
        correctAnswer: 1,
        explanation: 'Allah sent the raven to show Qabil how to bury his brother\'s body, highlighting his shame.',
        feedback: {
          correct: 'Correct! The raven provided a practical and moral lesson.',
          incorrect: 'Think about Qabil\'s panic regarding his brother\'s body.'
        }
      },
      {
        id: 'ex11-2',
        type: 'true-false',
        title: 'Habil\'s Response',
        instructions: 'Evaluate Habil\'s character.',
        question: 'Habil refused to fight back against his brother because he feared Allah.',
        correctAnswer: true,
        explanation: 'Habil explicitly stated that he would not harm his brother because of his fear of Allah.',
        feedback: {
          correct: 'Correct! His piety prevented him from committing violence.',
          incorrect: 'Incorrect. Look at Habil\'s direct response to Qabil\'s threat.'
        }
      }
    ]
  },
  {
    id: 12,
    type: 'story',
    title: 'The Legacy of Adam',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_12.png?alt=media&token=d9fd351f-62ce-4264-8cf7-001a60bf13ce',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Faudio%2Fadam_b1_ch12.mp3?alt=media&token=6ee60473-9971-4392-862c-67ffc0928d19',
    content: "He left far away. Prophet Adam (pbuh) became very sad. He lost both of his sons on the same day. The story suggests that true believers should stay away from jealousy and control their anger. But as a prophet and a father of his another children, Adam (pbuh) had to continue his life. He got old over the years. His children and grandchildren moved to different parts of the world and spread his message worldwide. The message still calls upon people to turn away from Satan’s tricks, jealousy, to do good and avoid evil. It also teaches people the importance of admitting mistakes and turning back to Allah. Allah never left people alone. He sent His prophets and their stories still guide us.",
    vocabulary: [
      { word: 'worldwide', definition: 'Extending or reaching throughout the entire world.' },
      { word: 'admitting', definition: 'Confessing to be true or to be the case.' },
      { word: 'legacy', definition: 'Something handed down from an ancestor or a predecessor.' }
    ],
    hotspots: [
      { id: 'h12-1', x: 40, y: 60, title: "Eternal Message", description: "The lessons of Adam's life continue to guide humanity today." },
      { id: 'h12-2', x: 65, y: 45, title: "Turning Back to Allah", description: "Adam's story teaches that people should admit their mistakes and return to Allah with sincerity." }
    ]
  },
  {
    id: 13,
    type: 'quiz',
    title: 'B1 Analytical Review: Prophet Adam (pbuh)',
    image: 'https://picsum.photos/seed/quiz-adam-b1/1200/800',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    content: 'Engage in a deep analytical review of the narrative themes and moral lessons.',
    exercises: [
      {
        id: 'q1',
        type: 'true-false',
        question: 'The material of Adam\'s creation (soil from different lands) symbolizes the diversity of the human race.',
        correctAnswer: true,
        feedback: {
          correct: 'Correct! The different colors and types of soil represent the diversity of mankind.',
          incorrect: 'Incorrect. The narrative explicitly links the variety of soil to the variety of people.'
        },
        explanation: 'Soil from different parts of the earth was used to show that humans would be diverse in color and character.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'The angels immediately accepted Adam\'s superiority without any initial questioning or skepticism.',
        correctAnswer: false,
        feedback: {
          correct: 'Correct! The angels initially questioned if humans would cause mischief on Earth.',
          incorrect: 'Incorrect. Recall that the angels asked Allah why He was creating a being that might cause conflict.'
        },
        explanation: 'The angels were initially concerned about human nature until Adam demonstrated the knowledge taught by Allah.'
      },
      {
        id: 'q3',
        type: 'true-false',
        question: 'Iblis believed that his origin from fire made him naturally superior to Adam, who was created from clay.',
        correctAnswer: true,
        feedback: {
          correct: 'Correct! This material comparison was the root of Iblis\'s arrogance.',
          incorrect: 'Incorrect. Iblis explicitly said, "I am better than him; You created me from fire and him from clay."'
        },
        explanation: 'Iblis\'s pride was based on a physical comparison of their elements of creation.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'The sense of shame (haya) felt by Adam and Eve after eating the fruit was a learned behavior taught by the environment.',
        correctAnswer: false,
        feedback: {
          correct: 'Correct! The narrative suggests this modesty is an inborn (fitra) quality.',
          incorrect: 'Incorrect. They immediately tried to cover themselves, showing it was a natural reaction.'
        },
        explanation: 'Modesty is presented as an innate human characteristic that recognizes moral boundaries.'
      },
      {
        id: 'q5',
        type: 'true-false',
        question: 'The primary difference between Adam and Iblis is that Adam repented for his mistake, while Iblis remained arrogant.',
        correctAnswer: true,
        feedback: {
          correct: 'Correct! Humility and repentance allowed Adam to receive mercy, unlike Iblis.',
          incorrect: 'Incorrect. Both made a mistake/defiance, but their reactions (repentance vs. pride) were opposite.'
        },
        explanation: 'The story emphasizes that sincere repentance is the path to divine forgiveness.'
      },
      {
        id: 'q6',
        type: 'true-false',
        question: 'The raven was sent to Qabil to punish him for his anger and the crime he committed.',
        correctAnswer: false,
        feedback: {
          correct: 'Correct! The raven was a teacher sent to show him how to bury the dead and face his shame.',
          incorrect: 'Incorrect. The raven served as a divine sign to provide a practical and moral lesson.'
        },
        explanation: 'The raven taught Qabil a basic necessity he didn\'t know, making him realize his own weakness.'
      }
    ]
  },
  {
    id: 14,
    type: 'exercises',
    title: 'B1 Final Review & Reflection',
    image: 'https://picsum.photos/seed/review-b1/1200/800',
    content: 'Synthesize your understanding of the Prophet Adam (pbuh) narrative through these advanced exercises.',
    exercises: adamB1FinalReviewExercises
  },
  {
    id: 15,
    type: 'glossary',
    title: 'B1 Master Glossary - Part 1',
    content: 'Academic and narrative vocabulary from the first half of the story.',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter10.png?alt=media&token=1547f902-5af2-4d83-94a6-7d0b70ca0723',
    vocabulary: [
      { word: 'Messenger', definition: 'A chosen individual tasked with delivering divine guidance.' },
      { word: 'ruler', definition: 'A vicegerent or steward (Khalifa) appointed to manage the Earth.' },
      { word: 'curiosity', definition: 'An inquisitive nature or desire to acquire knowledge.' },
      { word: 'intellect', definition: 'The faculty of reasoning and understanding objectively.' },
      { word: 'knowledge', definition: 'Here in this context means information or abilities present from birth rather than that is acquired through experience, and education.' },
      { word: 'diversity', definition: 'The state of being diverse; variety in human origins and characteristics.' },
      { word: 'arrogant', definition: 'Having an exaggerated sense of one\'s own importance or abilities.' },
      { word: 'superior', definition: 'Higher in rank, status, or quality; often misused by Iblis.' },
      { word: 'origin', definition: 'The material, point or place something begins, arises, or is derived.' },
      { word: 'expulsion', definition: 'The action of depriving someone of membership in an organization or place.' },
      { word: 'enmity', definition: 'The state or feeling of being actively opposed or hostile to someone.' },
      { word: 'defiance', definition: 'Open resistance; bold disobedience.' }
    ]
  },
  {
    id: 16,
    type: 'glossary',
    title: 'B1 Master Glossary - Part 2',
    content: 'Academic and narrative vocabulary from the second half of the story.',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter10.png?alt=media&token=1547f902-5af2-4d83-94a6-7d0b70ca0723',
    vocabulary: [
      { word: 'companionship', definition: 'A feeling of fellowship or friendship.' },
      { word: 'blessings', definition: 'Allah\'s favor and protection.' },
      { word: 'deception', definition: 'The act of hiding the truth or promoting a false belief.' },
      { word: 'forbidden', definition: 'Not allowed; banned.' },
      { word: 'shame', definition: 'A painful feeling of humiliation or distress caused by the consciousness of wrong behavior.' },
      { word: 'inborn', definition: 'Natural to a person or animal; innate (fitra).' },
      { word: 'repentance', definition: 'The action of repenting; sincere regret or remorse.' },
      { word: 'pardon', definition: 'The action of forgiving or being forgiven for an error or offense.' },
      { word: 'barrier', definition: 'A circumstance or obstacle that keeps people or things apart.' },
      { word: 'struggle', definition: 'Make forceful or violent efforts to get free of restraint or constriction.' },
      { word: 'survive', definition: 'Continue to live or exist, especially in spite of danger or hardship.' },
      { word: 'shelter', definition: 'A place giving temporary protection from bad weather or danger.' }
    ]
  },
  {
    id: 17,
    type: 'final-challenge',
    title: 'B1 Final Challenge',
    content: 'Demonstrate your comprehensive mastery of the Story of Prophet Adam (pbuh) at the B1 level.',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter10.png?alt=media&token=1547f902-5af2-4d83-94a6-7d0b70ca0723',
    exercises: [
      {
        id: 'fc1',
        type: 'multiple-choice',
        question: 'What does the term "Khalifa" (ruler) imply about the human role on Earth?',
        options: ['Stewardship and responsibility over creation', 'Absolute power to do anything', 'Living without any rules'],
        correctAnswer: 0,
        feedback: { correct: 'Correct!', incorrect: 'Incorrect.' }
      },
      {
        id: 'fc2',
        type: 'multiple-choice',
        question: 'Why did Iblis believe he was superior to Adam?',
        options: ['Because he had more knowledge', 'Because he was created from fire', 'Because he lived in Paradise longer'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Incorrect.' }
      },
      {
        id: 'fc3',
        type: 'multiple-choice',
        question: 'What was the primary test for Adam and Eve in Paradise?',
        options: ['To avoid a specific tree', 'To build a house', 'To find hidden treasure'],
        correctAnswer: 0,
        feedback: { correct: 'Correct!', incorrect: 'Incorrect.' }
      },
      {
        id: 'fc4',
        type: 'multiple-choice',
        question: 'How did Iblis trick Adam and Eve?',
        options: ['By using force', 'By offering them gold', 'By lying and whispering false promises'],
        correctAnswer: 2,
        feedback: { correct: 'Correct!', incorrect: 'Incorrect.' }
      },
      {
        id: 'fc5',
        type: 'multiple-choice',
        question: 'What was the immediate result of eating the forbidden fruit?',
        options: ['They became angels', 'They gained eternal life', 'They felt shame and their private parts became visible'],
        correctAnswer: 2,
        feedback: { correct: 'Correct!', incorrect: 'Incorrect.' }
      },
      {
        id: 'fc6',
        type: 'multiple-choice',
        question: 'What distinguishes Adam\'s mistake from Iblis\'s sin?',
        options: ['Adam\'s mistake was bigger', 'Adam repented while Iblis remained arrogant', 'Iblis was forced to sin'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Incorrect.' }
      },
      {
        id: 'fc7',
        type: 'multiple-choice',
        question: 'What was the purpose of sending Adam and Eve to Earth?',
        options: ['To serve as stewards and fulfill their destiny', 'As a permanent punishment without hope', 'To find a way back to Paradise immediately'],
        correctAnswer: 0,
        feedback: { correct: 'Correct!', incorrect: 'Incorrect.' }
      },
      {
        id: 'fc8',
        type: 'multiple-choice',
        question: 'Why was Habil\'s offering accepted while Qabil\'s was not?',
        options: ['Habil gave more money', 'Habil was older', 'Habil gave his best with sincerity'],
        correctAnswer: 2,
        feedback: { correct: 'Correct!', incorrect: 'Incorrect.' }
      },
      {
        id: 'fc9',
        type: 'multiple-choice',
        question: 'What lesson did the raven provide to Qabil?',
        options: ['How to fly away from his problems', 'How to bury his brother and face his shame', 'How to find food in the wild'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Incorrect.' }
      },
      {
        id: 'fc10',
        type: 'multiple-choice',
        question: 'What is the eternal message of the Story of Adam?',
        options: ['Admitting mistakes and turning back to Allah', 'That humans are perfect', 'That jealousy is a good motivation'],
        correctAnswer: 0,
        feedback: { correct: 'Correct!', incorrect: 'Incorrect.' }
      }
    ]
  }
];
