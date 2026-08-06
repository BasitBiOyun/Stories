import { PageData } from '../../../../types';
import { mosesB2FinalReviewExercises } from './exercises';

export const mosesB2Pages: PageData[] = [
  {
    id: 1,
    type: 'story',
    title: "Historical Background",
    image: 'https://picsum.photos/seed/moses-b2-chapter1/1200/800',
    audioUrl: '',
    content: `KEY WORDS: Pharaoh , Children of Israel (Benî İsrâil), Exodus , the miracle of the parting of the Red Sea

Moses (pbuh) is one of the great prophets according to Judaism, Christianity, and Islam, who saved the Children of Israel from Pharaoh’s despotism. (Pharaohs were the kings of ancient Egypt.) The Children of Israel or the Israelites (Benî İsrâil - İsrâiloğulları), originated from Prophet Jacob (Ya’kub (pbuh)) and were Jews by birth. Almost the entire Torah (Tevrat) consists of the history of Moses (pbuh) and the Israelites under his leadership. Prophet Moses (pbuh) is mentioned 136 times in thirty-four surahs of the Holy Quran and is the prophet most frequently mentioned among the prophets in the Quran. The Quran describes his birth, his arrival at Pharaoh’s palace, his journey to Midian (Medyen), his mission as a prophet and his task to rescue the Children of Israel, his struggle against Pharaoh, and his leading the Children of Israel out of Egypt and guiding them. During the time of Prophet Joseph (Yûsuf (pbuh)), around 1700 BC (BC: Before Christ (Milâttan Önce), the Israelites settled in Egypt. They lived comfortably, rapidly increased in number, and became a large community. However, because they grew so quickly compared to the local population, the Copts (Copts (Kıpti): ancient Egyptian people), the Egyptian rulers began to see them as a danger. To prevent them from becoming a ruling class, local rulers tried to stop the population growth by making life difficult for the Children of Israel.`,
    vocabulary: [
      { word: "despotism", definition: "Cruel and absolute power or authority." },
      { word: "frequently", definition: "Often; many times." },
      { word: "settle", definition: "To establish a permanent home or place to live." },
      { word: "ruling class", definition: "The group of people of high social status who control a country." },
      { word: "Copts", definition: "The ancient Egyptian people or their descendants." }
    ],
    hotspots: [
      { id: 'h1-1', x: 30, y: 45, title: "Despotism", description: "The Children of Israel were saved by Prophet Moses (pbuh) from Pharaoh's despotism and absolute rule." },
      { id: 'h1-2', x: 70, y: 55, title: "Ruling Class", description: "The local rulers tried to stop the population growth of the Children of Israel to prevent them from becoming a ruling class." }
    ],
    animatedWords: ["despotism", "frequently", "settle", "ruling class", "Copts"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex1-1',
        type: 'multiple-choice',
        title: "Historical Background",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Who was the ancestor that the Children of Israel originated from?",
        options: ["Prophet Jacob (Ya’kub (pbuh))", "Prophet Joseph (Yûsuf (pbuh))", "Pharaoh of ancient Egypt"],
        correctAnswer: 0,
        explanation: "The Children of Israel originated from Prophet Jacob (pbuh) and were Jews by birth.",
        feedback: {
          correct: 'Correct! The Israelites originated from Prophet Jacob (pbuh).',
          incorrect: 'Incorrect. Please read the chapter text again.'
        }
      }
    ]
  },
  {
    id: 2,
    type: 'story',
    title: "Egypt and the Nile",
    image: 'https://picsum.photos/seed/moses-b2-chapter2/1200/800',
    audioUrl: '',
    content: `As Prophet Isaac (pbuh), Prophet Jacob (pbuh), and Prophet Joseph (pbuh) were their forefathers, the Israelites also believed in their superiority. That is why the pharaohs wanted to keep them as a weak society. According to the sources, Seti I (I. Seti, approximately 1290-1279 BC) was the pharaoh who oppressed the Israelites. Seti I was the father of Ramses II. The Israelites were made to work to build the huge Seti temple during the reign of Seti I and the new capital city of Ramses during the reign of Ramses II. Sources also say that because of the heavy work going on during this time, slaves, including the Israelites, were under a lot of pressure, and this pressure led to trouble and even some protests. As a result of these disorders, the Israelites escaped from Egypt during the rule of Ramses II (approximately 1279-1213 BC). Most of the sources state that the Exodus (Exodus: the departure of the Israelites from Egypt) from Egypt must have taken place in the early thirteenth century BC. So the pharaoh who drowned at sea was probably Ramses II. However, the exact date of the Exodus from Egypt is unknown.`,
    vocabulary: [
      { word: "forefather", definition: "An ancestor of a family, tribe, or nation." },
      { word: "superiority", definition: "The state of being better, stronger, or higher in status than others." },
      { word: "oppress", definition: "To treat people cruely and unfairly by keeping them down." },
      { word: "reign", definition: "The period of time during which a king or queen rules." },
      { word: "Exodus", definition: "The departure of a large group of people, specifically the Israelites from Egypt." }
    ],
    hotspots: [
      { id: 'h2-1', x: 34, y: 44, title: "Forefather", description: "The Israelites believed in their superiority because Prophet Isaac, Prophet Jacob, and Prophet Joseph were their forefathers." },
      { id: 'h2-2', x: 68, y: 50, title: "Oppress", description: "According to historical sources, Seti I was the pharaoh who oppressed the Israelites and forced them to work under heavy pressure." }
    ],
    animatedWords: ["forefather", "superiority", "oppress", "reign", "Exodus"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex2-1',
        type: 'multiple-choice',
        title: "Egypt and the Nile",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Which pharaoh is believed to have oppressed the Israelites by forcing them to build the huge temple?",
        options: ["Seti I", "Ramses II", "Joseph"],
        correctAnswer: 0,
        explanation: "According to historical sources, Seti I was the pharaoh who oppressed the Israelites and forced them to build his temple.",
        feedback: {
          correct: 'Correct! Seti I was the pharaoh who oppressed the Israelites.',
          incorrect: 'Incorrect. Look closely at the names mentioned in Chapter 2.'
        }
      }
    ]
  },
  {
    id: 3,
    type: 'story',
    title: "The Pharaoh’s Authority",
    image: 'https://picsum.photos/seed/moses-b2-chapter3/1200/800',
    audioUrl: '',
    content: `The lands of ancient Egypt have come to life with the fertile waters of the Nile River since the earliest times. The Nile is the source of life for Egypt. Herodotus, the famous historian, points to the importance of this great river with the words, “Egypt is the gift of the Nile.” Control of the Nile River was vital. For this reason, the geographical structure of the land was reshaped by human power. During the reigns of Seti I and Ramses II, canal projects were carried out in the Nile Delta and around it for agricultural watering, transportation, and commercial purposes. Pharaoh Ramses II, in particular, constructed extensive watering systems (canals) to make agriculture in the delta productive. Thus, Pharaohs undertook huge projects on the river. These projects demanded a vast amount of manpower. Apparently, Pharaohs’ god-king authority was based not only on the richness of the river, but also on the manpower of the slaves, who were forced to work in all kinds of jobs. Just like today’s petrol, control of the power of the Nile also needed a strong administration, a god-king authority.`,
    vocabulary: [
      { word: "fertile", definition: "Land or soil capable of producing abundant crops." },
      { word: "vital", definition: "Absolutely necessary or important; essential." },
      { word: "manpower", definition: "The number of people available or needed for work." },
      { word: "authority", definition: "The power or right to give orders and make decisions." },
      { word: "administration", definition: "The process or activity of running an organization or state." }
    ],
    hotspots: [
      { id: 'h3-1', x: 34, y: 44, title: "Fertile", description: "The Nile River provided fertile waters since the earliest times, serving as the source of life for Egypt." },
      { id: 'h3-2', x: 68, y: 50, title: "Vital", description: "Control of the Nile River was vital, and the geographical structure of the land was reshaped by human power." }
    ],
    animatedWords: ["fertile", "vital", "manpower", "authority", "administration"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex3-1',
        type: 'multiple-choice',
        title: "The Pharaoh’s Authority",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Who famously described Egypt as 'the gift of the Nile'?",
        options: ["Herodotus, the famous historian", "Pharaoh Seti I", "Pharaoh Ramses II"],
        correctAnswer: 0,
        explanation: "The famous ancient historian Herodotus pointed out that Egypt is the gift of the Nile.",
        feedback: {
          correct: 'Correct! Herodotus wrote these famous words.',
          incorrect: 'Incorrect. Check the beginning of Chapter 3.'
        }
      }
    ]
  },
  {
    id: 4,
    type: 'story',
    title: "The Baby in the Water",
    image: 'https://picsum.photos/seed/moses-b2-chapter4/1200/800',
    audioUrl: '',
    content: `However, Pharaohs had worries about keeping this authority in their hands for a long time. In Moses’s (pbuh) time, the Pharaoh wanted to control the growing population of the Children of Israel in Egypt, while, on the other hand, he regularly ordered the killing of male children born to the Israelites. He heard that the prophet would come from among them. Moses (pbuh) was born into this environment. He was placed in a basket and the basket was set free on the waters of the Nile. It was found at the foot of a tree near the Pharaoh’s palace on the banks of the Nile and he was miraculously survived. The child at the foot of the tree in the waters of the Nile was given the name “Mûsâ” in the Pharaoh’s palace. It was a combination of the words “mu” meaning water, and “sa” meaning tree in the Coptic language (Coptic Language (Kıptîce): The language spoken by the ancient people of Egypt) The journey of baby Moses began in the waters of the Nile. The river carried him to the Pharaoh’s palace. The salvation of Prophet Moses (pbuh) and his people from the Pharaoh also took place in waters, in the Red Sea.`,
    vocabulary: [
      { word: "survive", definition: "To continue to live or exist, especially in spite of danger." },
      { word: "Coptic", definition: "The language spoken by the ancient people of Egypt." },
      { word: "salvation", definition: "Deliverance from ruin, harm, or loss." },
      { word: "worries", definition: "Thoughts or concerns about undesirable things." },
      { word: "miraculously", definition: "In a way that resembles or suggests a miracle." }
    ],
    hotspots: [
      { id: 'h4-1', x: 34, y: 44, title: "Survive", description: "Placed in a basket, baby Moses was miraculously found at the foot of a tree near the palace and survived." },
      { id: 'h4-2', x: 68, y: 50, title: "Salvation", description: "The salvation of Prophet Moses (pbuh) and his people from the Pharaoh also took place in the waters of the Red Sea." }
    ],
    animatedWords: ["survive", "Coptic", "salvation", "worries", "miraculously"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex4-1',
        type: 'multiple-choice',
        title: "The Baby in the Water",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What does the name 'Mûsâ' mean in the Coptic language?",
        options: ["A combination of 'water' (mu) and 'tree' (sa)", "The gift of Nile", "Prince of Egypt"],
        correctAnswer: 0,
        explanation: "According to the story, in the Coptic language, 'mu' means water and 'sa' means tree.",
        feedback: {
          correct: 'Correct! Mûsâ is a combination of water and tree.',
          incorrect: 'Incorrect. Re-read the middle part of Chapter 4.'
        }
      }
    ]
  },
  {
    id: 5,
    type: 'story',
    title: "The Pharaoh’s Command",
    image: 'https://picsum.photos/seed/moses-b2-chapter5/1200/800',
    audioUrl: '',
    content: `As a tyrant, the Pharaoh ruled Egypt with absolute power over the people. He oppressed the Children of Israel (known as the offspring of Prophet Jacob (Ya’kub (pbuh)). He used every method to dishonor them. The Pharaoh made Benî Israel work under extremely heavy conditions for small pay or no money. Under these circumstances, people obeyed the Pharaoh. He saw himself as a god. It is possible that some people of that period did not practise or believe in paganism. But they kept it secret and outwardly followed social norms without opposing the Pharaoh or telling who they were, because they were weak. Years passed, and the despotic kings continued to rule Egypt. One day, the Pharaoh had a vision that one of the Israelite sons would take him down from his throne. Ibn Abbas said: “The Pharaoh saw a fire in his vision. The fire came from Jerusalem and burned the houses of the Egyptians, but did not do any harm to the Children of Israel.” When he woke up, he called all his priests and magicians and asked about the dream. They said: “A boy will be born among the Children of Israel, and the Egyptian people will die at this boy’s hands.”`,
    vocabulary: [
      { word: "tyrant", definition: "A cruel ruler who uses power unfairly." },
      { word: "absolute power", definition: "Complete control over people or a country." },
      { word: "oppress", definition: "To treat people cruely and unfairly." },
      { word: "despotic", definition: "Ruling with complete and cruel power." },
      { word: "vision", definition: "A dream or mental image with meaning." }
    ],
    hotspots: [
      { id: 'h5-1', x: 34, y: 44, title: "Tyrant", description: "The Pharaoh ruled Egypt as a tyrant with absolute power and oppressed the Children of Israel under extremely heavy conditions." },
      { id: 'h5-2', x: 68, y: 50, title: "Absolute Power", description: "The Pharaoh ruled Egypt with absolute power, forcing people to obey him as he saw himself as a god." }
    ],
    animatedWords: ["tyrant", "absolute power", "oppress", "despotic", "vision"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex5-1',
        type: 'multiple-choice',
        title: "The Pharaoh’s Command",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What caused Pharaoh to command that male Israelite children should be killed?",
        options: ["His fear that an Israelite boy would take him down from his throne", "His wish to make the Israelites richer", "Queen Asiye’s request to adopt a child"],
        correctAnswer: 0,
        explanation: "Pharaoh dreamt of a fire that would destroy Egypt and was told an Israelite boy would cause his downfall.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the dream interpretation.'
        }
      }
    ]
  },
  {
    id: 6,
    type: 'story',
    title: "A Baby in the Nile",
    image: 'https://picsum.photos/seed/moses-b2-chapter6/1200/800',
    audioUrl: '',
    content: `Then the Pharaoh commanded that all the male children of Israel should be killed. His men carried out the order. But the Pharaoh began to lose his manpower because the Children of Israel did most of the heavy jobs in the country. His economic experts warned him and offered a solution. According to the new policy, his men would kill male children in one year, but let them live in the next year. The Pharaoh thought the solution was economically realistic, so he accepted it. Moses was born in a year in which boys were to be killed. His mother was very frightened by his birth, so she nursed him in secret for fear that he would be killed. Allah said: “…We inspired the mother of Moses, saying: ‘Suckle him (Moses), but when you fear for him, then put him into the river and fear not, nor grieve. Verily! We shall bring him back to you, and shall make him one of (Our) Messengers.’” (Surah Kasas: 7) Moses’ mother had to put the baby into a basket and throw it into the waters of the Nile. She was so sad, but she knew that Allah was much kinder to baby Moses than she was.`,
    vocabulary: [
      { word: "manpower", definition: "The workers needed to do jobs." },
      { word: "policy", definition: "A plan or rule accepted by a leader or government." },
      { word: "suckle", definition: "To feed a baby with milk from the breast." },
      { word: "grieve", definition: "To feel deep sadness." }
    ],
    hotspots: [
      { id: 'h6-1', x: 34, y: 44, title: "Manpower", description: "The Pharaoh began to lose his manpower because the Children of Israel did most of the heavy jobs in the country." },
      { id: 'h6-2', x: 68, y: 50, title: "Policy", description: "His economic experts offered a new policy to kill male children in one year and let them live in the next." }
    ],
    animatedWords: ["manpower", "policy", "suckle", "grieve"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex6-1',
        type: 'multiple-choice',
        title: "A Baby in the Nile",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Why did Moses’s mother put him into the Nile?",
        options: ["Because she wanted him to become a sailor", "Because Allah inspired her to do so when she feared for him", "Because Pharaoh ordered her to send him away"],
        correctAnswer: 1,
        explanation: "Moses’ mother put him into a basket on the river under divine guidance because she feared he would be killed.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 7,
    type: 'story',
    title: "Queen Asiye’s Love",
    image: 'https://picsum.photos/seed/moses-b2-chapter7/1200/800',
    audioUrl: '',
    content: `Allah was their Lord and also the Lord of the Nile. Allah commanded the waves to be calm and gentle while carrying the baby. The basket came to the shore near the Pharaoh’s palace. The palace servants noticed the basket and took it to the Pharaoh and the queen Asiye. When Queen Asiye saw the baby, she felt a strong love for him in her heart. The queen was a good and kind-hearted woman who, unlike her husband, held a belief in Allah. She was a secret believer and persuaded her husband with her words that this baby would be a ray of light for both of them! (see, Surah Kasas: 9) She was always sad because she was sterile. She said to her husband, “Let me keep the baby and let him be our son.” The Pharaoh accepted it. Then, she said to her servants, “Find a nurse for the baby.” Moses’s mother heard the news, too. While the queen was trying to choose a wet nurse to feed the baby, Moses’ mother was also waiting with a heavy heart.`,
    vocabulary: [
      { word: "persuade", definition: "To make someone agree by giving reasons." },
      { word: "ray of light", definition: "A symbol of hope and happiness." },
      { word: "sterile", definition: "Unable to have children." }
    ],
    hotspots: [
      { id: 'h7-1', x: 34, y: 44, title: "Persuade", description: "Queen Asiye persuaded her husband to adopt the baby, hoping he would be a ray of light for them." },
      { id: 'h7-2', x: 68, y: 50, title: "Ray of Light", description: "The Queen saw baby Moses as a ray of light and a source of hope, as she was sterile and wished for a son." }
    ],
    animatedWords: ["persuade", "ray of light", "sterile"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex7-1',
        type: 'multiple-choice',
        title: "Queen Asiye’s Love",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Why did Queen Asiye want to keep baby Moses?",
        options: ["She felt strong love for him and saw him as a ray of light", "She wanted to send him back to the Nile", "She knew he would become Pharaoh’s soldier"],
        correctAnswer: 0,
        explanation: "Queen Asiye fell in love with baby Moses, persuaded Pharaoh to adopt him, and saw him as a source of hope.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 8,
    type: 'story',
    title: "Moses Grows Up",
    image: 'https://picsum.photos/seed/moses-b2-chapter8/1200/800',
    audioUrl: '',
    content: `When the baby took her breast, he immediately started suckling. The Pharaoh was astonished and asked, “Who are you? This child refused the milk of all other women but yours.” Allah gave her inner strength, and she answered: “I have sweet milk and sweet scent, so no baby refuses me.” This answer pleased the Pharaoh. She continued to feed him for a long time. Thus, baby Moses would grow up in his mother’s arms. Moses was raised as a prince in the palace. Moses became a young man. He had not yet been given the prophetic mission. He couldn’t decide whether he should be thankful to the Pharaoh or oppose the oppression against the Children of Israel. Allah gave Moses with perfect health, strength, wisdom, and knowledge. Because of these gifts, the weak and oppressed always looked to him for protection and justice. One day in the main town, he noticed two men fighting. One of them was an Israelite and the other was an Egyptian. Young Moses felt close to the Israelites because he had come from the water, not from a noble family, and his mother was one of the Children of Israel.`,
    vocabulary: [
      { word: "astonished", definition: "Very surprised." },
      { word: "inner strength", definition: "Courage and spiritual power inside a person." },
      { word: "prophetic mission", definition: "The religious task given to a prophet." },
      { word: "oppose", definition: "To stand or fight against something." }
    ],
    hotspots: [
      { id: 'h8-1', x: 34, y: 44, title: "Astonished", description: "The Pharaoh was astonished when baby Moses took his mother's breast after refusing the milk of all other women." },
      { id: 'h8-2', x: 68, y: 50, title: "Prophetic Mission", description: "Moses was raised as a prince in the palace before he was given his prophetic mission to oppose oppression." }
    ],
    animatedWords: ["astonished", "inner strength", "prophetic mission", "oppose"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex8-1',
        type: 'multiple-choice',
        title: "Moses Grows Up",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Why did young Moses feel close to the Israelites when he saw two men fighting?",
        options: ["Because his mother was one of the Children of Israel and he had come from the water", "Because he wanted to lead Pharaoh's army against them", "Because the Egyptian offered him gold"],
        correctAnswer: 0,
        explanation: "The text states Moses felt close to the Israelites because his mother was from them and he had come from the water.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 9,
    type: 'story',
    title: "The Warning",
    image: 'https://picsum.photos/seed/moses-b2-chapter9/1200/800',
    audioUrl: '',
    content: `Upon seeing Moses, the man from the Children of Israel begged him for help. Thus, Moses got involved in the dispute and angrily hit the Egyptian who instantly died. He unintentionally killed the Copt (Kıpti) with a single punch. Moses was filled with fear and sadness. He immediately turned to Allah to ask for forgiveness. The very next day, Moses saw the same Israelite involved in another dispute. Moses understood that the Israelite was a quarrelsome man. Moses approached him. Fearing Moses might harm him, the man reacted with a shout, "Will you kill me just as you killed that Egyptian yesterday!” The news thus spread among the Egyptians. Moses was aware that killing an Egyptian would result in the death penalty. So Moses’ fear was not unreasonable. A man of faith who came from the palace warned him, “Run away, or the Pharaoh will kill you for this crime.” Moses was forced to leave Egypt. Allah related: “And he entered the city at a time of unawareness of its people, and he found there two men fighting, one of his party (his religion, from the Children of Israel), and the other of his enemy.`,
    vocabulary: [
      { word: "dispute", definition: "A serious disagreement or argument." },
      { word: "instantly", definition: "At once; immediately." },
      { word: "quarrelsome", definition: "Often arguing with other people." },
      { word: "death penalty", definition: "The punishment of being killed by law." },
      { word: "unreasonable", definition: "Not guided by or based on good sense or fairness." }
    ],
    hotspots: [
      { id: 'h9-1', x: 34, y: 44, title: "Dispute", description: "Moses got involved in a dispute in the bazaar and hit an Egyptian who instantly died." },
      { id: 'h9-2', x: 68, y: 50, title: "Death Penalty", description: "Moses was aware that killing an Egyptian would result in the death penalty, making his fear reasonable." }
    ],
    animatedWords: ["dispute", "instantly", "quarrelsome", "death penalty", "unreasonable"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex9-1',
        type: 'multiple-choice',
        title: "The Warning",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What did Moses do after unintentionally killing the Egyptian?",
        options: ["He celebrated his strength", "He turned to Allah and asked for forgiveness", "He asked Pharaoh for a reward"],
        correctAnswer: 1,
        explanation: "Moses instantly turned to Allah to ask for forgiveness because he was filled with fear and regret.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 10,
    type: 'story',
    title: "Escape to Midian",
    image: 'https://picsum.photos/seed/moses-b2-chapter10/1200/800',
    audioUrl: '',
    content: `The man of his own party asked him for help against his enemy, so Moses struck him with his fist and killed him. He said, ‘This is of Satan’s doing, verily, he is a plain misleading enemy.’” He said: “My Lord! Verily, I have wronged myself, so forgive me.” Then He forgave him. Verily, He is the Forgiving, the Most Merciful. He said: “My Lord! For that with which You have favored me, I will never more be a helper for the Mujrimeen (criminals, disobedient to Allah, polytheists, sinners, etc.)!” So, he became afraid, looking about in the city, waiting as to what would be the result of his crime of killing, when behold, the man who had sought his help the day before called for his help again. Moses said to him: “Verily, you are a plain troublemaker!” Then, when he decided to seize the man who was an enemy to both of them, the man said: “O Moses! Is it your intention to kill me as you killed a man yesterday? Your aim is nothing but to become a tyrant in the land, and not to be one of those who do right.”`,
    vocabulary: [
      { word: "wrongdoer", definition: "A person who acts unjustly or sinfully." },
      { word: "troublemaker", definition: "A person who causes problems." },
      { word: "polytheists", definition: "People who worship more than one god." },
      { word: "sinners", definition: "People who commit sins or violate moral codes." },
      { word: "tyrant", definition: "A cruel ruler who uses power unfairly." }
    ],
    hotspots: [
      { id: 'h10-1', x: 34, y: 44, title: "Troublemaker", description: "The same Israelite who sought help before called again, leading Moses to say, 'Verily, you are a plain troublemaker!'" },
      { id: 'h10-2', x: 68, y: 50, title: "Tyrant", description: "The quarreling Israelite accused Moses, saying, 'Your aim is nothing but to become a tyrant in the land!'" }
    ],
    animatedWords: ["wrongdoer", "troublemaker", "polytheists", "sinners", "tyrant"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex10-1',
        type: 'multiple-choice',
        title: "Escape to Midian",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What did the Israelite shout when Moses approached to intervene on the second day?",
        options: ["'Is it your intention to kill me as you killed a man yesterday?'", "'Help me defeat this other opponent!'", "'Let us flee Egypt together!'"],
        correctAnswer: 0,
        explanation: "Fearing Moses, the quarrelsome Israelite shouted: 'O Moses! Is it your intention to kill me as you killed a man yesterday?'",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 11,
    type: 'story',
    title: "The Women Shepherds",
    image: 'https://picsum.photos/seed/moses-b2-chapter11/1200/800',
    audioUrl: '',
    content: `And there came a man running from the farthest end of the city (from the palace). He said: “O Moses! Verily, the chiefs are taking counsel together about you to kill you, so escape. Truly, I am to you one of those who give sincere advice.” So he escaped from there, looking about in a state of fear. He said: “My Lord! Save me from the people who are Zalimeen (polytheists and wrongdoers)!” (Surah Kasas: 15-21) Moses (pbuh) hurried out of Egypt without changing his clothes or getting prepared for traveling. He headed for the land of Midian, which was the closest inhabited area between Egypt and Syria. It was a region not ruled by the Pharaoh. His only companion in this hot desert was Allah and his trust in Him. The hot sand burned his soles. However, fearing pursuit by the Pharaoh’s men, he forced himself to continue on. He traveled by night, hiding during the day. After his desert journey, he reached a watering hole outside Midian. He found shepherds there with their flocks.`,
    vocabulary: [
      { word: "take counsel", definition: "To discuss and decide what to do." },
      { word: "Zalimeen", definition: "Polytheists, wrongdoers, or oppressors." },
      { word: "inhabited", definition: "Having people living there." },
      { word: "companion", definition: "Someone who travels or stays with another person." },
      { word: "pursuit", definition: "The act of chasing someone." }
    ],
    hotspots: [
      { id: 'h11-1', x: 34, y: 44, title: "Inhabited", description: "Moses escaped from Egypt and headed for the land of Midian, the closest inhabited area not ruled by the Pharaoh." },
      { id: 'h11-2', x: 68, y: 50, title: "Companion", description: "His only companion in this hot desert was Allah and his trust in Him as he traveled by night." }
    ],
    animatedWords: ["take counsel", "Zalimeen", "inhabited", "companion", "pursuit"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex11-1',
        type: 'multiple-choice',
        title: "The Women Shepherds",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Why did Moses have to escape from Egypt?",
        options: ["Because a man of faith warned him that the chiefs planned to kill him", "Because he wanted to find a shepherd's job in Midian", "Because Pharaoh wanted to send him on a mission"],
        correctAnswer: 0,
        explanation: "A man running from the palace warned Moses that the chiefs were taking counsel to kill him.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 12,
    type: 'story',
    title: "Shu’ayb’s Home",
    image: 'https://picsum.photos/seed/moses-b2-chapter12/1200/800',
    audioUrl: '',
    content: `He immediately began to seek rest under a tree, exhausted and hungry. The bottoms of his feet were raw. They were worn out from hard walking on sand and rocks and from the dust. He urgently needed a new pair of sandals, food and drink. While at a well in Midian, Moses saw a group of shepherds and noticed two young women who were trying to get water for their flocks. Due to the crowd at the water source, the young women could only water their animals after the male shepherds had taken their flocks away. Moses noticed their hardship and sensed that the women were in need of help. Forgetting his thirst, Moses approached nearer to them and asked if he could help them in any way. The older sister said: “We are waiting until the shepherds finish watering their sheep, then we will water ours.” Moses was surprised that women were shepherding. It was hard and tiresome work. He asked: “Why are you shepherding?” The younger sister said: “Our father is an old man; his health is too poor and he cannot go out to shepherd the flock.”`,
    vocabulary: [
      { word: "watering hole", definition: "A place where people or animals drink water." },
      { word: "flock", definition: "A group of sheep or goats." },
      { word: "raw", definition: "Painful and damaged, especially skin." },
      { word: "hardship", definition: "A difficult or painful situation." },
      { word: "shepherd", definition: "A person who looks after sheep." }
    ],
    hotspots: [
      { id: 'h12-1', x: 34, y: 44, title: "Watering Hole", description: "While at a well, which was a watering hole outside Midian, Moses saw a group of shepherds and two young women." },
      { id: 'h12-2', x: 68, y: 50, title: "Hardship", description: "Moses noticed the young women's hardship as they waited for male shepherds to finish before watering their flock." }
    ],
    animatedWords: ["watering hole", "flock", "raw", "hardship", "shepherd"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex12-1',
        type: 'multiple-choice',
        title: "Shu’ayb’s Home",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What did Moses do for the two young women?",
        options: ["He watered their sheep for them", "He took their flock away", "He asked them to return to Egypt"],
        correctAnswer: 0,
        explanation: "Our text narrates that Moses kindly helped them by watering their sheep.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 13,
    type: 'story',
    title: "A Shepherd’s Life",
    image: 'https://picsum.photos/seed/moses-b2-chapter13/1200/800',
    audioUrl: '',
    content: `Moses said: “I will water the sheep for you.” He watered their sheep. He went back to sit in the shade of the tree. He suddenly realized he hadn't drunk any water. He was also so hungry that his stomach was sinking. The father of these girls was Prophet Shu’ayb (pbuh). Prophet Shu’ayb (pbuh) was sent as a messenger of Allah to the eastern part of the Gulf of Aqaba, that is, Midian. Being very old, Prophet Shu’ayb (pbuh) had to send the girls alone with animals. The young ladies returned home unexpectedly early, which surprised their father. Due to Moses's help at the spring, they came back early and told him about it. Their father sent one of his daughters to invite the stranger to his home. She went up to Moses and said that her father was grateful for his help. She said: “Our father invites you to our home so that he may thank you in person.” Moses welcomed this invitation and followed the maiden back to her father. It was clear to Moses that they enjoyed a comfortable and harmonious home life. After introducing himself, he told the unfortunate events in Egypt that forced him to escape.`,
    vocabulary: [
      { word: "harmonious", definition: "Peaceful and friendly." },
      { word: "in person", definition: "By meeting someone directly." },
      { word: "unfortunate", definition: "Unlucky or sad." },
      { word: "harmony", definition: "A state of peaceful agreement and friendly relations." }
    ],
    hotspots: [
      { id: 'h13-1', x: 34, y: 44, title: "Harmonious", description: "Moses followed the maiden to her father and saw that they enjoyed a comfortable and harmonious home life." },
      { id: 'h13-2', x: 68, y: 50, title: "In Person", description: "Prophet Shu’ayb invited Moses to his home so that he might thank him in person for helping his daughters." }
    ],
    animatedWords: ["harmonious", "in person", "unfortunate", "harmony"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex13-1',
        type: 'multiple-choice',
        title: "A Shepherd’s Life",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What did Shu’ayb say to comfort Moses?",
        options: ["“Return to Pharaoh immediately.”", "“Do not fear, you have escaped from the wrongdoers.”", "“You must become a magician.”"],
        correctAnswer: 1,
        explanation: "Shu'ayb welcomed Moses warmly and comforted him after Moses related his unfortunate story of escaping Egypt.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 14,
    type: 'story',
    title: "The Voice at Mount Sinai",
    image: 'https://picsum.photos/seed/moses-b2-chapter14/1200/800',
    audioUrl: '',
    content: `The old man comforted him: “Do not fear, you have escaped from the wrongdoers.” Father and his daughters observed Moses’s gentleness. Shu’ayb (pbuh) invited him to stay with them. Moses felt at home with this family, for they were friendly and believed in Allah. Because they needed someone reliable and strong, one of the daughters advised her father to employ Moses. They offered Moses work with them. This offer suited Moses well, because he was a stranger in this country and urgently needed shelter and work. Moses became a shepherd for the family, married one of the daughters of the old man, and looked after the old man’s animals for ten long years. Time passed, and he lived with deep thoughts in the middle of the desert, far from his people. This period of ten years was important in his life. It was a period of spiritual preparation for prophethood. After a period of ten years, Moses returned to his fatherland, Egypt, during the early days of Ramses II’s rule (approximately 1279-1213 BC). Moses left Midian with his family and was returning to Egypt across the Sinai.`,
    vocabulary: [
      { word: "comfort", definition: "To make someone feel less afraid or sad." },
      { word: "gentleness", definition: "Kind and calm behavior." },
      { word: "employ", definition: "To give someone a job." },
      { word: "shelter", definition: "A safe place to stay." },
      { word: "spiritual preparation", definition: "Inner preparation for a religious mission." }
    ],
    hotspots: [
      { id: 'h14-1', x: 34, y: 44, title: "Comfort", description: "The old man comforted Moses, telling him not to fear since he had escaped from the wrongdoers." },
      { id: 'h14-2', x: 68, y: 50, title: "Shelter", description: "Moses accepted the offer to stay because he was a stranger and urgently needed shelter and work." }
    ],
    animatedWords: ["comfort", "gentleness", "employ", "shelter", "spiritual preparation"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex14-1',
        type: 'multiple-choice',
        title: "The Voice at Mount Sinai",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Why were the ten years in Midian important?",
        options: ["They were a period of spiritual preparation for prophethood", "They made Moses forget his people", "They ended Moses’s mission completely"],
        correctAnswer: 0,
        explanation: "This ten-year period as a shepherd allowed Moses to prepare spiritually for his prophethood.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 15,
    type: 'story',
    title: "The Two Signs",
    image: 'https://picsum.photos/seed/moses-b2-chapter15/1200/800',
    audioUrl: '',
    content: `They traveled through the desert until they reached Mount Sinai. It was winter. There, Moses discovered that he had lost his way. He sought Allah’s direction, and Allah showed him the right course. At nightfall, they reached Mount Sinai, also known as Mount Tûr. Moses noticed a fire in the distance and approached it, hoping to bring his family some fire to warm themselves and find a guide by the fire. As he neared the fire, he heard a thundering voice calling him: “O Moses, I am Allah, the Lord of the Universe.” Moses was shocked and looked around. He again heard the strange voice: “And what is in your right hand, O Moses?” Moses trembled and responded: “This is my staff on which I lean, and I use it to cut branches for my sheep.”Allah asked about the staff in Moses’ hand to make him focus on it. In this way Allah was preparing him for the miracle that was about to happen. This was the beginning of Moses’s mission as a prophet. The same voice told him: “Throw down your staff!” He did so, and at once the staff became a twisting snake. Moses began to run, but the voice again said to him: “Do not fear and hold it; We will make it a staff.”`,
    vocabulary: [
      { word: "course", definition: "The path or direction taken." },
      { word: "thundering", definition: "Very loud and powerful." },
      { word: "tremble", definition: "To shake because of fear or emotion." },
      { word: "staff", definition: "A long stick used for support." },
      { word: "twisting", definition: "Moving in a turning shape." }
    ],
    hotspots: [
      { id: 'h15-1', x: 34, y: 44, title: "Thundering", description: "As he neared the fire, Moses heard a thundering voice calling him, 'O Moses, I am Allah, the Lord of the Universe.'" },
      { id: 'h15-2', x: 68, y: 50, title: "Tremble", description: "Moses trembled and responded to the strange voice, explaining that the stick was his staff on which he leaned." }
    ],
    animatedWords: ["course", "thundering", "tremble", "staff", "twisting"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex15-1',
        type: 'multiple-choice',
        title: "The Two Signs",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What happened when Moses threw down his staff?",
        options: ["It disappeared forever", "It became a twisting snake", "It turned into a book"],
        correctAnswer: 1,
        explanation: "As Moses threw down his staff, it miraculously became a twisting snake.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 16,
    type: 'story',
    title: "The Mission Begins",
    image: 'https://picsum.photos/seed/moses-b2-chapter16/1200/800',
    audioUrl: '',
    content: `The snake changed back into his staff. Moses’s fear calmed, and he felt peace, because he realized that he was witnessing the Truth. Then, Allah commanded him to put his hand into his chest at the underarm. When he pulled it out, the hand was exceptionally shiny! This miracle of staff, together with the miracle of the white hand given to Prophet Moses, were two great miracles. Allah then commanded Moses: “You have two signs from your Lord; go to Pharaoh and his chiefs, for they are an evil group and have violated all limits.” Allah narrated this event: “And has there come to you the story of Moses? When he saw a fire, he said to his family: ‘Wait! Verily, I have seen a fire; perhaps I can bring you some burning brand therefrom, or find some guidance at the fire.’ And when he came to the fire, he was called by name: ‘O Moses! Verily! I am your Lord! So take off your shoes; you are in the sacred valley, Tuwa. And I have chosen you. So listen to that which is inspired to you. Verily! I am Allah! La ilaha illa Ana (none has the right to be worshipped but I), so worship Me, and offer prayers perfectly for My remembrance.`,
    vocabulary: [
      { word: "witness", definition: "To see an important event happen." },
      { word: "exceptionally", definition: "In a very unusual or special way." },
      { word: "chiefs", definition: "Important leaders or officials." },
      { word: "sacred", definition: "Holy and connected with worship." },
      { word: "remembrance", definition: "Keeping Allah in the heart and mind." }
    ],
    hotspots: [
      { id: 'h16-1', x: 34, y: 44, title: "Exceptionally", description: "When Moses pulled his hand out of his chest, it was exceptionally shiny, serving as a miracle from his Lord." },
      { id: 'h16-2', x: 68, y: 50, title: "Chiefs", description: "Allah commanded Moses to take the two signs to the Pharaoh and his chiefs, who had gone beyond all limits." }
    ],
    animatedWords: ["witness", "exceptionally", "chiefs", "sacred", "remembrance"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex16-1',
        type: 'multiple-choice',
        title: "The Mission Begins",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What were the two signs given to Moses?",
        options: ["The Nile and the palace", "The staff and the shining white hand", "The calf and the mountain"],
        correctAnswer: 1,
        explanation: "The two great signs of Prophet Moses were the staff and the white hand.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 17,
    type: 'story',
    title: "Moses and Aaron",
    image: 'https://picsum.photos/seed/moses-b2-chapter17/1200/800',
    audioUrl: '',
    content: `Verily, the Hour is coming - and My Will is to keep it hidden - that every person may be rewarded for that which he makes an effort. Therefore, do not let him who denies it (the Day of Resurrection, Paradise, and Hell, etc.) and follows his own desires turn you away from it, lest you fall. And what is that in your right hand, O Moses?” He said: “This is my stick, I lean on it, and with it I beat down branches for my sheep and I find other uses in it.” Allah said: “Cast it down, O Moses!” He cast it down, and behold! It was a snake, moving quickly. Allah said: “Hold it, and fear not. We shall return it to its former state, and press your right hand to your left side; it will appear white and shining, and without any disease, as another sign, that We may show you some of Our greater signs. Go to Pharaoh! Verily! He has gone beyond all limits (all bounds in disbelief and disobedience, and has behaved as an arrogant tyrant) ” (Surah Tâhâ: 9-24) The religion of Moses (pbuh) was the same as that of Jacob (pbuh), which was Islamic monotheism. His forefather was Jacob (pbuh), the grandson of Abraham (pbuh). Moses (pbuh), therefore, was one of the descendants of Abraham (pbuh), and every prophet who came after Abraham (pbuh) was one of Abraham’s successors.`,
    vocabulary: [
      { word: "monotheism", definition: "The belief in one God only." },
      { word: "descendant", definition: "A person related to someone from the past." },
      { word: "successor", definition: "A person who comes after another and takes their place." },
      { word: "arrogant", definition: "Behaving in a proud and unpleasant way." },
      { word: "tyrant", definition: "A cruel and oppressive ruler." }
    ],
    hotspots: [
      { id: 'h17-1', x: 34, y: 44, title: "Monotheism", description: "The religion of Moses was Islamic monotheism, the same as his forefather Jacob, who was the grandson of Abraham." },
      { id: 'h17-2', x: 68, y: 50, title: "Descendant", description: "Moses was a descendant of Abraham, and every prophet who came after Abraham was his successor." }
    ],
    animatedWords: ["monotheism", "descendant", "successor", "arrogant", "tyrant"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex17-1',
        type: 'multiple-choice',
        title: "Moses and Aaron",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What was the religion of Moses connected to?",
        options: ["Islamic monotheism, the same as Jacob’s religion", "Pharaoh’s worship system", "The worship of idols and calves"],
        correctAnswer: 0,
        explanation: "Indeed, the text notes the religion of Moses was the same as Jacob's, Islamic monotheism.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 18,
    type: 'story',
    title: "Pharaoh’s Threat",
    image: 'https://picsum.photos/seed/moses-b2-chapter18/1200/800',
    audioUrl: '',
    content: `Moses (pbuh) was not alone in this very hard task. Aaron (Harun), who was the brother of Moses and the prophet sent to the Children of Israel, helped Moses (pbuh). They went together to the Pharaoh and delivered the message. Moses (pbuh) told him about Allah, the duties of monotheism and worship of Allah, as well as His mercy and His Paradise. The Pharaoh listened to Moses’ speech, and he thought that Moses lost his mind. He asked, “What do you want?” Moses (pbuh) answered, “I want you to send the Children of Israel with me.” Moses (pbuh) asked the Pharaoh for permission to take the Israelites into the desert to sacrifice according to the religion of his ancestors. The Pharaoh asked: “Why should I send them, as they are my slaves?” Moses (pbuh) replied, “Their Lord is Allah.” The Pharaoh asked Moses (pbuh) where he had found the courage to worship Allah. Didn’t he know that the Pharaoh was a god? Then the Pharaoh mockingly asked whether his name was Moses. Moses (pbuh) said: “Yes.” “Are you not that Moses who we took from the Nile as a defenseless baby?” asked the Pharaoh. “Aren’t you that Moses who we raised in our palace, who ate our food, upon who our charity and wealth were showered?`,
    vocabulary: [
      { word: "deliver a message", definition: "To give an important message to someone." },
      { word: "mercy", definition: "Kindness and forgiveness." },
      { word: "permission", definition: "Allowing someone to do something." },
      { word: "defenseless", definition: "Unable to protect oneself." },
      { word: "arrogantly", definition: "In a proud and disrespectful way." }
    ],
    hotspots: [
      { id: 'h18-1', x: 34, y: 44, title: "Deliver A Message", description: "Moses and Aaron delivered the message of monotheism and worship of Allah directly to the Pharaoh." },
      { id: 'h18-2', x: 68, y: 50, title: "Mercy", description: "Moses told the Pharaoh about Allah's duties of monotheism, worship, and His mercy and Paradise." }
    ],
    animatedWords: ["deliver a message", "mercy", "permission", "defenseless", "arrogantly"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex18-1',
        type: 'multiple-choice',
        title: "Pharaoh’s Threat",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What did Moses ask Pharaoh to do?",
        options: ["To send the Children of Israel with him", "To make him a prince again", "To give him the palace"],
        correctAnswer: 0,
        explanation: "Moses and Aaron asked Pharaoh to let the Children of Israel go with them.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 19,
    type: 'story',
    title: "The Contest Begins",
    image: 'https://picsum.photos/seed/moses-b2-chapter19/1200/800',
    audioUrl: '',
    content: `Are you not that Moses who was the murderer of an Egyptian man? Killing is an act of unbelief. So, when you killed, you were not a believer. You are on the run from the law, and now you are here to talk to me!” Moses (pbuh) knew that Pharaoh’s talk about his past, his upbringing, and the Pharaoh’s charity was his way of threatening him. Ignoring his irony, Moses (pbuh) explained that he was not a disbeliever when he killed the Egyptian; rather, he had committed the act only by accident. He explained to the Pharaoh that, despite the fact that the killing was an accident, he had left Egypt out of fear of revenge. He told him that Allah had forgiven him and made him one of His Messengers. In the Pharaoh’s land, it was not permitted to worship anyone other than the Pharaoh Himself. After long dialogues, Moses (pbuh) understood that the intellectual discussions did not work. The Pharaoh finally started openly threatening Moses (pbuh). He said, “If you accept any god other than me, I will imprison you!” Moses (pbuh) said, “What if I bring you something convincing and true?” He had no choice but to display the miracles. The Pharaoh said, “Bring it, if you are honest!” So, when Moses (pbuh) threw his staff, it clearly turned into a snake.`,
    vocabulary: [
      { word: "upbringing", definition: "The way a child is raised." },
      { word: "irony", definition: "Using words in a way that shows the opposite or a hidden meaning." },
      { word: "imprison", definition: "To put someone in prison." },
      { word: "dazzle", definition: "To impress or blind someone with brightness." },
      { word: "demonstrate", definition: "To show clearly." }
    ],
    hotspots: [
      { id: 'h19-1', x: 34, y: 44, title: "Upbringing", description: "Pharaoh tried to threaten Moses by reminding him of his upbringing in the palace and his charity as a defenseless baby." },
      { id: 'h19-2', x: 68, y: 50, title: "Dazzle", description: "Moses had to show his miracles; he threw his staff and it became a snake, and his hand shone to dazzle the Pharaoh." }
    ],
    animatedWords: ["upbringing", "irony", "imprison", "dazzle", "demonstrate"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex19-1',
        type: 'multiple-choice',
        title: "The Contest Begins",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "How did Pharaoh use Moses’s past?",
        options: ["As a way of threatening and accusing him", "As proof that he believed in Allah", "As a reason to free the Israelites"],
        correctAnswer: 0,
        explanation: "Pharaoh mentioned Moses’s upbringing and the Egyptian’s death to threaten him.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 20,
    type: 'story',
    title: "The Magicians Believe",
    image: 'https://picsum.photos/seed/moses-b2-chapter20/1200/800',
    audioUrl: '',
    content: `And when he pulled out his hand, everyone could see that it was white (Surah Şuarâ: 30-33). It was a hand that shed light! Pharaoh’s eyes were dazzled by the brightness of the hand. These two miracles by Prophet Moses (pbuh) actually demonstrated his prophethood. The Pharaoh spoke to his advisors out of fear that his rule was in danger. His advisors recommended that the Pharaoh detain Moses (pbuh) and call upon the cleverest magicians. They might demonstrate their magic abilities and transform sticks into snakes. In this way, they aimed to lessen the impact of Moses’ miracles on the population. It was decided that a contest would be held between the magicians of Egypt and Moses (pbuh). The aim was to defeat Moses (pbuh) and make him fail in his claim. But things did not go as the Pharaoh had expected. Then the crowd gathered. Everyone couldn’t wait to watch this fantastic competition. The magicians wanted to prove that Moses (pbuh) was a liar and a cheat. Moses (pbuh) requested a performance by the magicians first. They threw their magical objects on the floor, and their staffs and ropes took the shapes of moving snakes. However, this was only an illusion.`,
    vocabulary: [
      { word: "detain", definition: "To keep someone under control or in custody." },
      { word: "impact", definition: "A strong effect." },
      { word: "illusion", definition: "Something that appears real but is not." },
      { word: "elite", definition: "The most powerful or educated group." },
      { word: "horrified", definition: "Extremely shocked or frightened." }
    ],
    hotspots: [
      { id: 'h20-1', x: 34, y: 44, title: "Detain", description: "Pharaoh's advisors recommended that he detain Moses and call upon the cleverest magicians to match his signs." },
      { id: 'h20-2', x: 68, y: 50, title: "Illusion", description: "The magicians threw their staffs and ropes, making them look like moving snakes, though it was only an illusion." }
    ],
    animatedWords: ["detain", "impact", "illusion", "elite", "horrified"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex20-1',
        type: 'multiple-choice',
        title: "The Magicians Believe",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Why did Pharaoh’s advisors suggest calling magicians?",
        options: ["To reduce the impact of Moses’s miracles on the population", "To help Moses teach monotheism", "To guide the Children of Israel safely"],
        correctAnswer: 0,
        explanation: "They wanted magicians to imitate the signs and weaken the effect of Moses’s miracles.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
    id: 21,
    type: 'story',
    title: "The Exodus",
    image: 'https://picsum.photos/seed/moses-b2-chapter21/1200/800',
    audioUrl: '',
    content: `But this illusion, performed with great skill, even filled Moses’s heart with fear for a moment, and the Pharaoh and his soldiers gave a loud cheer. Moses (pbuh) then threw his staff. His stick started to twist and grew into a huge snake. Moses’ snake ate all the magicians’ fake snakes, and the Pharaoh and his men watched in silence. When Moses (pbuh) reached down to take it, it transformed into a staff again. After seeing Moses' power, the magicians bowed down to Allah and said, "We believe in the Lord of Moses and Harun.” At that time, magicians were not merely performers, but the elite intellectual scholars of ancient Egypt. So it was a major defeat and disappointment for the Pharaoh. When he faced the miracles, the Pharaoh was utterly horrified. He then called for all his ministers and men in positions of responsibility. The prime minister asked, “Will we leave Moses and his people to corrupt and manipulate the rest of the people on earth so that they leave your worship?” Upon this, the Pharaoh announced commands, and his men began to kill the sons and imprison others. Moses (pbuh) couldn’t do anything but advise his people to be patient. Moses (pbuh) made the same request that Pharaoh free the Children of Israel from slavery. The Pharaoh replied by ordering all his subjects, including the Children of Israel, to a large assembly and reminding them that he was their master and met all of their needs. They lacked vision since they had been under oppression for a long time. They believed that their king was wealthy and could meet all of their material needs. They ignored Moses’ (pbuh) call and unquestioningly obeyed the Pharaoh.`,
    vocabulary: [
      { word: "illusion", definition: "Something that appears real but is not." },
      { word: "elite", definition: "The most powerful or educated group." },
      { word: "horrified", definition: "Extremely shocked or frightened." },
      { word: "manipulate", definition: "To control or influence state matters or individuals cleverly." },
      { word: "subject", definition: "A person under the authority of a ruler." }
    ],
    hotspots: [
      { id: 'h21-1', x: 34, y: 44, title: "Elite", description: "The magicians were not mere performers but the elite intellectual scholars of ancient Egypt, making their belief a major defeat for Pharaoh." },
      { id: 'h21-2', x: 68, y: 50, title: "Subject", description: "Pharaoh called all his subjects to a large assembly and reminded them that he was their wealthy master who met their material needs." }
    ],
    animatedWords: ["illusion", "elite", "horrified", "manipulate", "subject"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex21-1',
        type: 'multiple-choice',
        title: "The Exodus",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Why did the magicians believe?",
        options: ["They recognized that Moses’s sign was not ordinary illusion", "Pharaoh ordered them to believe", "They wanted to become shepherds"],
        correctAnswer: 0,
        explanation: "As experts, the magicians understood that Moses’s miracle was a genuine divine sign, not a mere optical illusion.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the key event.'
        }
      }
    ]
  },
  {
  id: 22,
  type: 'story',
  title: "The Red Sea Opens",
  image: 'https://picsum.photos/seed/moses-b2-chapter22/1200/800',
  audioUrl: '',
  content: `The Pharaoh became ruder and more arrogant. He declared to his people: “Pharaoh is the only god.” It seemed that the Pharaoh would never accept Moses’ (pbuh) teachings or put an end to the hard days of the Children of Israel. 
Upon this, the Pharaoh began to take even harsher steps. Allah commanded Moses (pbuh) to leave. This later became known as the Exodus. To escape Pharaoh’s genocide, Moses (pbuh) and the Children of Israel, finding no other way, set out at night. In the darkness of the night and under Moses (pbuh) ‘s guidance the Children of Israel journeyed toward the Red Sea.
When the sun rose, they reached the beach. The Pharaoh realized their departure, so he mobilized his huge army, started following them. Soon, they easily managed to catch up with them. The Israelites panicked. They were trapped with the Red Sea in front and the king's army behind them. However, Moses (pbuh) said that Allah was with them and would show them the way to safety (see, Surah Şuarâ: 61-62). Allah told Moses (pbuh), “Hit the sea with your staff!” Moses did it. Then a strong wind blew, the sun shone brightly, and immediately the sea parted; the waves stood like mountains on each side. The Children of Israel passed through this dry land and were saved. Allah narrated: “And We inspired Moses, saying: ‘Take away My servants by night; verily, you will be pursued.’ 
Then Pharaoh sent callers to all the cities, saying: ‘Truly! These indeed are but a small band. And verily, they are angering us; but we are an alert crowd.’ So We removed them from gardens and springs, treasures, and every kind of honorable place. Thus, We turned Pharaoh’s people out, and We caused the Children of Israel to inherit them. So they pursued them at sunrise. And when the two groups saw each other, the people of Moses said: ‘We are sure to be caught up with. ‘Moses said: ‘Truly!`,
  vocabulary: [
    { word: "arrogant", definition: "Thinking that one is more important or powerful than others." },
    { word: "Exodus", definition: "A large departure of people from one place, especially the Children of Israel leaving Egypt." },
    { word: "mobilized", definition: "Organized people, soldiers, or resources for action." },
    { word: "trapped", definition: "Unable to escape from a dangerous or difficult situation." },
    { word: "parted", definition: "Separated into two sides, leaving a space in the middle." },
    { word: "pursued", definition: "Followed someone in order to catch them." },
    { word: "inherit", definition: "To receive or take over something left behind by others." }
  ],
  hotspots: [
    {
      id: 'h22-1',
      x: 30,
      y: 42,
      title: "The Exodus",
      description: "Allah commanded Moses (pbuh) to leave Egypt with the Children of Israel. This journey later became known as the Exodus."
    },
    {
      id: 'h22-2',
      x: 66,
      y: 48,
      title: "The Red Sea Miracle",
      description: "Allah told Moses (pbuh) to hit the sea with his staff. The sea parted, and the Children of Israel passed through dry land."
    }
  ],
  animatedWords: ["arrogant", "Exodus", "mobilized", "trapped", "parted", "pursued", "inherit", "genocide"],
  syncPoints: [0, 25, 50, 75],
  exercises: [
    {
      id: 'ex22-1',
      type: 'multiple-choice',
      title: "The Red Sea Opens",
      instructions: 'Choose the correct answer according to the chapter.',
      question: "What happened when Moses (pbuh) hit the sea with his staff?",
      options: [
        "The sea parted and the Children of Israel passed through dry land",
        "Pharaoh immediately accepted Moses’ teachings",
        "The Children of Israel returned to Egypt"
      ],
      correctAnswer: 0,
      explanation: "According to the chapter, Allah told Moses (pbuh) to hit the sea with his staff. Then the sea parted, and the Children of Israel passed through dry land and were saved.",
      feedback: {
        correct: 'Correct. You answered according to the chapter text.',
        incorrect: 'Not quite. Reread the chapter and focus on the miracle at the Red Sea.'
      }
    }
  ]
},
  {
  id: 23,
  type: 'story',
  title: "Pharaoh Drowns",
  image: 'https://picsum.photos/seed/moses-b2-chapter23/1200/800',
  audioUrl: '',
  content: `With me is my Lord; He will guide me.’ Then We inspired Moses, saying: ‘Strike the sea with your stick.’ And it parted, and each separate part of that sea water became like the huge, firm mass of a mountain. Then We brought near the others (Pharaoh’s party) to that place. And We saved Moses and all those with him. Then We drowned the others. Verily! In this is indeed a sign (or a proof), yet most of them are not believers. And verily, your Lord! He is truly the All-Mighty, the Most Merciful.’” (Surah Şuarâ: 52-68) The Pharaoh and his army saw the miracle. But the Pharaoh turned to his men and said: “Look! The sea has opened at my command.” He and his soldiers saw this extraordinary event as a sign of Pharaoh’s godlike power. They entered the parted waters, and when they were midway, Allah commanded the sea to return to its former state. The sea closed over them, and they drowned. Moses (pbuh) led the Children of Israel toward the land of Canaan . (the land of Canaan: The land of Palestine. It is the historical homeland where Jacob's (pbuh) offspring settled.) On the way, they saw a group of people that worshipped idols and calves.`,
  vocabulary: [
    { word: "guide", definition: "To show someone the right way or direction." },
    { word: "inspired", definition: "Gave divine guidance or a message." },
    { word: "parted", definition: "Separated into two sides." },
    { word: "drowned", definition: "Died under water because of being unable to breathe." },
    { word: "miracle", definition: "An extraordinary event caused by Allah’s power." },
    { word: "midway", definition: "In the middle of a distance or process." },
    { word: "idols", definition: "Objects or images that some people wrongly worship." }
  ],
  hotspots: [
    {
      id: 'h23-1',
      x: 34,
      y: 45,
      title: "Divine Guidance",
      description: "Moses (pbuh) trusted Allah and said that his Lord would guide him. This shows complete faith at a moment of danger."
    },
    {
      id: 'h23-2',
      x: 68,
      y: 50,
      title: "Pharaoh’s Arrogance",
      description: "Even after seeing the miracle, Pharaoh claimed that the sea opened by his own command."
    },
    {
      id: 'h23-3',
      x: 52,
      y: 64,
      title: "The Sea Returns",
      description: "When Pharaoh and his army entered the parted waters, Allah commanded the sea to return to its former state."
    }
  ],
  animatedWords: ["guide", "inspired", "parted", "drowned", "miracle", "midway", "idols"],
  syncPoints: [0, 25, 50, 75],
  exercises: [
    {
      id: 'ex23-1',
      type: 'multiple-choice',
      title: "Pharaoh Drowns",
      instructions: 'Choose the correct answer according to the chapter.',
      question: "What did Pharaoh claim when he saw the sea opened?",
      options: [
        "He claimed that the sea had opened at his command",
        "He immediately believed in Moses’ message",
        "He ordered his army to return to Egypt"
      ],
      correctAnswer: 0,
      explanation: "According to the chapter, Pharaoh saw the miracle but arrogantly told his men that the sea had opened at his command.",
      feedback: {
        correct: 'Correct. You answered according to the chapter text.',
        incorrect: 'Not quite. Reread the chapter and focus on Pharaoh’s reaction to the miracle.'
      }
    }
  ]
},
  {
  id: 24,
  type: 'story',
  title: "The Calf and the Torah",
  image: 'https://picsum.photos/seed/moses-b2-chapter24/1200/800',
  audioUrl: '',
  content: `Some of them said: “O Moses! Make something like that for us so we can worship it!” Moses (pbuh) patiently advised them: “Allah saved you from the Pharaoh’s oppression. The Egyptians were killing your sons and using your daughters as servants. Despite this, will you rebel against Allah and fall into idol worship?!” When Moses (pbuh) led the Children of Israel out of Egypt, he told his people that he would bring them a Book from Allah. Allah told Moses (pbuh) to go up Mount Tur. Moses (pbuh) left his brother Harun (pbuh) in charge and went up Mount Tur himself. He stayed on Mount Tur for forty days and worshipped Allah (see, Surah A’râf: 142) He heard the words of Allah directly. During this time, the Torah (Tevrat) was given to him by Allah. Moses (pbuh) returned to his people with Torah, but unfortunately saw his people singing and dancing around the calf statue. He was deeply disappointed. His story would not end here. He would face many difficult tests to guide the Children of Israel to the truth, but they continued disobeying. Moses's (pbuh) efforts to guide them to the right path are the reason he is known as the Prophet of Great Determination.`,
  vocabulary: [
    { word: "oppression", definition: "Cruel and unfair treatment or control." },
    { word: "rebel", definition: "To rise against authority or refuse to obey." },
    { word: "worship", definition: "To show love, respect, and devotion to Allah; or wrongly to idols." },
    { word: "Torah", definition: "The holy Book given to Moses (pbuh) by Allah." },
    { word: "calf", definition: "A young cow; here it refers to the calf statue worshipped by some of the Israelites." },
    { word: "disobeying", definition: "Refusing to follow commands or guidance." },
    { word: "determination", definition: "The quality of continuing firmly despite difficulty." }
  ],
  hotspots: [
    {
      id: 'h24-1',
      x: 34,
      y: 42,
      title: "Mount Tur",
      description: "Allah told Moses (pbuh) to go up Mount Tur, where he stayed for forty days and received the Torah."
    },
    {
      id: 'h24-2',
      x: 68,
      y: 48,
      title: "The Calf Statue",
      description: "When Moses (pbuh) returned, he saw his people singing and dancing around the calf statue in idol worship."
    },
    {
      id: 'h24-3',
      x: 50,
      y: 66,
      title: "Great Determination",
      description: "Moses (pbuh) kept guiding his people despite many difficulties, which is why he is known as the Prophet of Great Determination."
    }
  ],
  animatedWords: ["oppression", "rebel", "worship", "Torah", "calf", "disobeying", "determination"],
  syncPoints: [0, 25, 50, 75],
  exercises: [
    {
      id: 'ex24-1',
      type: 'multiple-choice',
      title: "The Calf and the Torah",
      instructions: 'Choose the correct answer according to the chapter.',
      question: "What did Moses (pbuh) see when he returned to his people with the Torah?",
      options: [
        "He saw them singing and dancing around the calf statue",
        "He saw Pharaoh asking for forgiveness",
        "He saw the people building a new palace on Mount Tur"
      ],
      correctAnswer: 0,
      explanation: "According to the chapter, Moses (pbuh) returned with the Torah and sadly found his people singing and dancing around the calf statue.",
      feedback: {
        correct: 'Correct. You answered according to the chapter text.',
        incorrect: 'Not quite. Reread the chapter and focus on what Moses (pbuh) saw when he returned.'
      }
    }
  ]
},
  {
    id: 25,
    type: 'quiz',
    title: 'Knowledge Check: Moses (pbuh) - B2',
    image: 'https://picsum.photos/seed/quiz-moses-b2/1200/800',
    content: 'Review the narrative themes, miracles, and historical lessons of Moses (pbuh).',
    exercises: [
      {
        id: 'quiz-1',
        type: 'true-false',
        question: "Pharaoh was told in a dream that a boy born to the Children of Israel would destroy his kingdom.",
        correctAnswer: true,
        feedback: {
          correct: 'Correct! Pharaoh was told by his advisors that an Israelite boy would threaten his throne.',
          incorrect: 'Incorrect. The dream and its interpretation of fire from Jerusalem was the reason for his fear.'
        },
        explanation: 'Pharaoh was told in a dream that a boy born to the Children of Israel would destroy his kingdom.'
      },
      {
        id: 'quiz-2',
        type: 'true-false',
        question: "Queen Asiye rejected baby Moses when he was found in the River Nile.",
        correctAnswer: false,
        feedback: {
          correct: 'Correct! Queen Asiye felt strong maternal compassion and loved baby Moses as a ray of light.',
          incorrect: 'Incorrect. Queen Asiye loved the baby and convinced Pharaoh to spare him.'
        },
        explanation: 'Queen Asiye loved the baby and persuaded Pharaoh to keep him.'
      },
      {
        id: 'quiz-3',
        type: 'true-false',
        question: "Moses escaped from Egypt because he voluntarily wanted to reside in Midian for trade.",
        correctAnswer: false,
        feedback: {
          correct: 'Correct! Moses fled because a man of faith warned him that the political chiefs were planning to sentence him to death.',
          incorrect: 'Incorrect. He fled to Midian due to the death penalty threat.'
        },
        explanation: 'A sincere man from the farthest end of the city warned Moses to escape.'
      },
      {
        id: 'quiz-4',
        type: 'true-false',
        question: "Moses was granted two primary miracles at the sacred valley of Tuwa: the walking staff and a shining white hand.",
        correctAnswer: true,
        feedback: {
          correct: 'Correct! Divine signs of the walking staff and white hand were given at Mount Sinai.',
          incorrect: 'Incorrect. The two great signs were the miracle of the staff and the white hand.'
        },
         explanation: 'The two great signs were the miracle of the staff and the white hand.'
      },
      {
        id: 'quiz-5',
        type: 'true-false',
        question: "Pharaoh’s elite magicians chose safety and wealth over their newly found faith in the Lord of Moses.",
        correctAnswer: false,
        feedback: {
          correct: 'Correct! The magicians stood incredibly firm, refusing to yield despite Pharaoh’s brutal threats of mutilation and death.',
          incorrect: 'Incorrect. Sincere faith entered their hearts, and physical threats didn’t shake them.'
        },
        explanation: 'They stood firm, stating they would not choose safety over the clear Truth that had reached them.'
      },
      {
        id: 'quiz-6',
        type: 'true-false',
        question: "The Red Sea parted to save the Children of Israel while Pharaoh and his army were drowned.",
        correctAnswer: true,
        feedback: {
          correct: 'Correct! Allah parted the sea for the Israelites and engulfed the tyrant’s entire force.',
          incorrect: 'Incorrect. This was the final physical judgment saving the oppressed and destroying the tyrant.'
        },
        explanation: 'The sea parted, the waves stood like mountains, and the Children of Israel passed through dry land.'
      }
    ]
  },
  {
    id: 26,
    type: 'vocabulary-match',
    title: 'Vocabulary Challenge - Moses B2',
    image: 'https://picsum.photos/seed/vocab-moses-b2/1200/800',
    content: 'Match key vocabulary concepts from the story of Moses (pbuh).',
    vocabularyPairs: [
      { word: "tyrant", meaning: "A cruel ruler who uses power unfairly." },
      { word: "manpower", meaning: "The workers needed to do jobs." },
      { word: "persuade", meaning: "To make someone agree by giving reasons." },
      { word: "prophetic mission", meaning: "The task given to a prophet by Allah." },
      { word: "death penalty", meaning: "The punishment of being killed by law." },
      { word: "inhabited", meaning: "Having people living there." }
    ]
  },
  {
    id: 27,
    type: 'glossary',
    title: 'Master Glossary - Part 1',
    image: 'https://picsum.photos/seed/glossary-moses-b2-1/1200/800',
    content: 'Review academic and narrative vocabulary definitions from the first half of the Moses (pbuh) B2 story.',
    vocabulary: [
      { word: "tyrant", definition: "A cruel ruler who uses power unfairly." },
      { word: "absolute power", definition: "Complete control over people or a country." },
      { word: "oppress", definition: "To treat people cruely and unfairly." },
      { word: "despotic", definition: "Ruling with complete and cruel power." },
      { word: "vision", definition: "A dream or mental image with meaning." },
      { word: "manpower", definition: "The workers needed to do jobs." },
      { word: "persuade", definition: "To make someone agree by giving reasons." },
      { word: "sterile", definition: "Unable to have children." },
      { word: "prophetic mission", definition: "The task given to a prophet by Allah." },
      { word: "death penalty", definition: "The punishment of being killed by law." },
      { word: "wrongdoer", definition: "A person who acts unjustly or sinfully." },
      { word: "inhabited", definition: "Having people living there." }
    ]
  },
  {
    id: 28,
    type: 'glossary',
    title: 'Master Glossary - Part 2',
    image: 'https://picsum.photos/seed/glossary-moses-b2-2/1200/800',
    content: 'Review academic and narrative vocabulary definitions from the second half of the Moses (pbuh) B2 story.',
    vocabulary: [
      { word: "watering hole", definition: "A place where people or animals drink water." },
      { word: "comfort", definition: "To make someone feel less afraid or sad." },
      { word: "employ", definition: "To give someone a job." },
      { word: "thundering", definition: "Very loud and powerful." },
      { word: "staff", definition: "A long stick used for support." },
      { word: "monotheism", definition: "The belief in one God only." },
      { word: "deliver a message", definition: "To give an important message to someone." },
      { word: "arrogantly", definition: "In a proud and disrespectful way." },
      { word: "dazzle", definition: "To impress or blind someone with brightness." },
      { word: "illusion", definition: "Something that appears real but is not." },
      { word: "Exodus", definition: "The departure of Moses and the Children of Israel from Egypt." },
      { word: "Torah", definition: "The holy book given to Prophet Moses (pbuh)." }
    ]
  },
  {
    id: 29,
    type: 'exercises',
    title: 'Final Review & Reflection',
    image: 'https://picsum.photos/seed/exercises-moses-b2/1200/800',
    content: 'Synthesize your understanding of Prophet Moses (pbuh) through advanced interactive exercises.',
    exercises: mosesB2FinalReviewExercises
  },
  {
    id: 30,
    type: 'final-challenge',
    title: 'Final Challenge',
    content: 'Test your knowledge of the entire B2 story of Prophet Moses (pbuh).',
    image: 'https://picsum.photos/seed/moses-b2-final-challenge/1200/800'
  }
];
