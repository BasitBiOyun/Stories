import type { Exercise, PageData } from '../../../../types';
import {
  abrahamB2FinalChallengeExercises,
  abrahamB2KnowledgeCheckExercises,
  abrahamB2QuickChallenges,
  abrahamB2VocabularyChallengePairs,
} from './exercises';
import { abrahamB2LanguageFocusPart1 } from './languageFocus';
import { abrahamB2LanguageFocusPart2 } from './languageFocus2';
import { abrahamB2LanguageFocusPart3 } from './languageFocus3';

const rawAbrahamB2Pages: PageData[] = [
// c01a
  {
    "id": 1,
    "type": "story",
    "title": "Prophet Abraham and Tawheed",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-1/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F00_Chapter_1.mp3?alt=media&token=dd864d33-97bb-47a7-a10e-8c0a68d0ffb7",
    "content": "KEY WORDS: Hanifism (Haniflik, Path of Prophet Abraham (pbuh)); monotheism (Oneness and Unity of Allah); Tawheed (La ilaha illa Allah: There is no god but Allah); idol worship, idolatry (paganism, putperestlik); idolater (pagan, putperest).\n\nIn the Holy Qur’an, Prophet Abraham (pbuh) is presented as the messenger and representative of the monotheistic belief. Monotheistic belief means that I bear witness that there is no god but Allah. He has no partner, rival, or helper. Allah is unique in every way. He is also the fundamental figure of the three great monotheistic religions (Judaism, Christianity, and Islam). The fourteenth surah of the Qur’an is named Surah Ibrahim. Abraham (pbuh) is the father of two prophets: Prophet Ishmael (İsmâil) (pbuh) and Prophet Isaac (İshak) (pbuh). Prophet Ishmael (pbuh) is the direct forefather of Prophet Muhammad (pbuh). Prophet Isaac (pbuh) is the father of Prophet Jacob (Yakûb) (pbuh). Prophet Jacob is the father of Joseph (Yûsuf) (pbuh), and forefathers of Moses (Mûsâ) (pbuh), Aaron (Hârûn) (pbuh), Jonah (Yûnus) (pbuh), and Jesus (İsâ) (pbuh). Abraham (pbuh) was also given the unique name of “Allah’s friend” (halîlullah; see Surah Nisa: 125). This title was not given to any other prophet before. The Qur’an presents in detail his discovery of the oneness of Allah (Tawheed) in the middle of an idol-worshipping nation.",
    "vocabulary": [
      { "word": "Idolatry", "definition": "The worship of false gods." },
      { "word": "Idolater", "definition": "A person who worships idols or false gods." },
      { "word": "Messenger", "definition": "A person who carries a message from Allah." },
      { "word": "fundamental figure", "definition": "A central or highly important person in history, a system, or belief." }
    ],
    "hotspots": [
      { "id": "b2-hs-1-1", "x": 30, "y": 40, "title": "Monotheistic Belief", "description": "Abraham (pbuh) was the messenger and representative of this belief." },
      { "id": "b2-hs-1-2", "x": 65, "y": 35, "title": "Fundamental Figure", "description": "He is the core ancestor for Judaism, Christianity, and Islam." }
    ],
    "animatedWords": ["Idolatry", "Idolater", "fundamental figure"],
    "exercises": [{
      "id": "b2-ch-ex-1", "type": "multiple-choice", "title": "Comprehension Check", "instructions": "Answer the following question based on the chapter.",
      "question": "Why was Abraham given the title 'Allah's friend' (halîlullah)?",
      "options": ["Because he was the wealthiest prophet", "Because he never questioned the beliefs of his ancestors", "Because of his profound dedication, sacrifices, and ultimate trust in Allah"],
      "correctAnswer": 2, "explanation": "His unwavering trust and sacrifices earned him this unique title.",
      "feedback": { "correct": "Correct! His unwavering trust and sacrifices earned him this unique title.", "incorrect": "Incorrect. Please review the chapter." }
    }]
  },
  {
    "id": 2,
    "type": "story",
    "title": "Abraham as Allah’s Friend",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-2/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F01_Chapter_2_Abraham_as_Allah%E2%80%99s_Friend.mp3?alt=media&token=0303777a-0c94-4898-ad1c-ce260e331d8e",
    "content": "He challenged the idol worship of his time and taught people to believe in Allah alone. His life mission was to spread the message of Tawheed—the belief that Allah is One and He has no partners. During his struggle, he had very difficult tests and he passed the tests with his full trust in Allah.\n\nIn the Holy Qur’an, Abraham (pbuh) is often described as a hanîf; a hanîf is a monotheist who is not a Jew, a Christian, or an idolater (see Surah Âl-i İmrân: 67) and is also morally upright. Hanifism is the belief in the oneness of Allah taught by Prophet Abraham (pbuh). We may say that it is the former version of Islam. Human beings are capable of discovering Hanifism; that is, the existence of Allah can be found through reasoning. Actually, all prophets taught this religion. Due to the development or worsening of human capacity and capabilities, some changes in details were necessary. So, the difference between the monotheism taught by Abraham (pbuh) and the Islam taught by Muhammad is only in the acts of worship.",
    "vocabulary": [
      { "word": "Idolater", "definition": "A person who worships idols or false gods." },
      { "word": "Challenged", "definition": "Defied or confronted by demanding proof or explanation." },
      { "word": "Worship", "definition": "To show high respect, honor, and devotion to a deity." },
      { "word": "existence", "definition": "The state or fact of living or being real." }
    ],
    "hotspots": [
      { "id": "b2-hs-2-1", "x": 30, "y": 40, "title": "Tawheed", "description": "The core belief that Allah is One and has no partners." },
      { "id": "b2-hs-2-2", "x": 65, "y": 35, "title": "Hanîf", "description": "A monotheist who is not an idolater, and is morally upright." }
    ],
    "animatedWords": ["Idolater", "Challenged", "existence"],
    "exercises": [{
      "id": "b2-ch-ex-2", "type": "multiple-choice", "title": "Comprehension Check", "instructions": "Answer the following question based on the chapter.",
      "question": "According to the narrative, how can human beings discover Hanifism?",
      "options": ["Through critical reasoning and interpreting the signs of creation", "By blindly following ancient traditions", "Only through magical signs"],
      "correctAnswer": 0, "explanation": "The story emphasizes that pure reasoning leads to the discovery of Tawheed.",
      "feedback": { "correct": "Correct! The story emphasizes that pure reasoning leads to the discovery of Tawheed.", "incorrect": "Incorrect. Please review the chapter." }
    }]
  },
  {
    "id": 3,
    "type": "story",
    "title": "Hanifism and the One True Faith",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-3/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F02_Chapter_3_Hanifism_and_the_One_True_Faith.mp3?alt=media&token=171a95ce-498c-4cc6-a993-ac54abe5964e",
    "content": "In fact, Judaism, Christianity, and Islam are all based on the religion of Abraham (pbuh). At the beginning of Prophet Muhammad's mission, there was a group in the Hijaz who called themselves hanîfs. They stayed away from idolatry and its practices. However, later on, this belief became mixed with idolatry and, like Judaism and Christianity, it was corrupted. We can mention the following name as one of the last hanîfs: Varaka b. Nevfel, the cousin of Muhammad's wife Khadija, went to Damascus in search of Hanifism and accepted Christianity, which was the least corrupted religion at that time. When the first revelation (vahiy) came to Muhammad (pbuh), Varaka b. Nevfel welcomed his prophethood. One day, while he was in the desert, Varaka saw Bilal al-Habashi lying under the burning sun, punished by his master. At that moment, Bilal was saying, “Ahad, Ahad,” meaning “One, One.” Hearing his words, Varaka replied, “I swear, O Bilal, One, One.”\n\nAs the last faith, Islam includes not only what Allah told Abraham (pbuh), but also what Allah told Noah (pbuh), Moses (pbuh), Jesus (pbuh), and all the other prophets (see Surah Baqarah: 285)",
    "vocabulary": [
      { "word": "Idolatry", "definition": "The worship of false gods." },
      { "word": "Judaism", "definition": "The monotheistic religion of the Jewish people, tracing its origin to Abraham." },
      { "word": "Christianity", "definition": "The monotheistic religion based on the life and teachings of Jesus Christ." }
    ],
    "hotspots": [
      { "id": "b2-hs-3-1", "x": 30, "y": 40, "title": "Corrupted", "description": "Over time, pure beliefs became mixed with idolatry." },
      { "id": "b2-hs-3-2", "x": 65, "y": 35, "title": "Ahad", "description": "Meaning 'One, One' - declaring the oneness of Allah." }
    ],
    "animatedWords": ["Idolatry", "Judaism"],
    "exercises": [
      {
        "id": "b2-ch-ex-3",
        "type": "true-false",
        "title": "Comprehension Check",
// c01b

// c02a
        "instructions": "Decide if the statement is true or false.",
        "question": "At the beginning of Prophet Muhammad's mission, the hanîfs in Hijaz stayed away from idolatry.",
        "correctAnswer": true,
        "explanation": "They strictly avoided idolatry and remained faithful to Abraham's monotheistic legacy.",
        "feedback": {
          "correct": "Correct! They strictly avoided idolatry and remained faithful to Abraham's monotheistic legacy.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 4,
    "type": "story",
    "title": "Hanifism Before Islam",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-4/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F03_Chapter_4_Hanifism_Before_Islam.mp3?alt=media&token=d08f7bf4-23c7-4b83-a80d-221e96f8676c",
    "content": "In the Holy Qur’an, the name of Abraham (pbuh)’s father is Azer. He is described as an idol worshipper (see Surah En'âm: 74). Azer is presented in Islamic sources as Nimrod's idol maker. There are different ideas about the birthplace of Abraham (pbuh). Some sources say that he was born in the land of Sumer, Mesopotamia, and migrated from there to Harran. Most generally speaking, we can say that Abraham was born in the city of Ur or Babylon, the country of King Nimrod. Historically, Abraham (pbuh) is believed to have lived in the 20th century BC. Some sources suggest that he lived between 2200–2000 BC. During the time of Abraham (pbuh), the Sumerian/Mesopotamian country was prosperous in many aspects, such as agriculture and industry. Abraham (pbuh)'s message of monotheism was a belief that had existed in these lands before, but it had been forgotten over time. In the time of Abraham (pbuh), Allah was believed to be in the heavens.\n\nPeople worshipped the planets, stars, sun, and moon; some people worshipped idols of stone and wood; still others worshipped their kings and rulers.",
    "vocabulary": [
      {
        "word": "Prosperous",
        "definition": "Successful in material terms; flourishing."
      },
      {
        "word": "Agriculture",
        "definition": "The science or practice of farming."
      },
      {
        "word": "Worshipped",
        "definition": "Showed reverence and adoration for a deity."
      }
    ],
    "hotspots": [
      {
        "id": "b2-hs-4-1",
        "x": 30,
        "y": 40,
        "title": "Idol Worshipper",
        "description": "Azer is described as Nimrod's idol maker."
      },
      {
        "id": "b2-hs-4-2",
        "x": 65,
        "y": 35,
        "title": "Prosperous",
        "description": "The Sumerian country was wealthy in agriculture and industry."
      }
    ],
    "animatedWords": [
      "Prosperous",
      "Agriculture"
    ],
    "exercises": [
      {
        "id": "b2-ch-ex-4",
        "type": "true-false",
        "title": "Comprehension Check",
        "instructions": "Decide if the statement is true or false.",
        "question": "Historically, Prophet Abraham (pbuh) is believed to have lived in Mesopotamia around the 20th century BC under King Nimrod.",
        "correctAnswer": true,
        "explanation": "Mesopotamian history and Islamic sources locate Abraham's life and challenges in this region around 2200–2000 BC.",
        "feedback": {
          "correct": "Correct! Mesopotamian history and Islamic sources locate Abraham's life and challenges in this region around 2200–2000 BC.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 5,
    "type": "story",
    "title": "The Birthplace and Mission of Abraham",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-5/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F04_Chapter_5_The_Birthplace_and_Mission_of_Abraham.mp3?alt=media&token=a463971a-d367-49c9-9e95-78868795cc1a",
    "content": "The head of Abraham (pbuh)’s family was an idolater who totally rejected Allah and made idols with his own hands. Abraham (pbuh) was born into that atmosphere and family. Very soon, he was going to fight against his family and the whole system in his society. As a prophet who lived before Jacob (pbuh), Joseph (pbuh), Moses (pbuh), and Jesus (pbuh), Abraham (pbuh) tried to spread the belief in monotheism in the land of Mesopotamia and the lands where he migrated. Nimrod, the king of Babylon, had many fortunetellers and astrologers. One year, around the 20th century BC, they predicted that a child named Abraham (pbuh) would be born in the region, would change the religion of the people, and would end the reign of Nimrod. According to another narration, Nimrod had a dream that a child in the region would challenge his throne. So, he gathered pregnant women in one place and ordered that all male children be killed.\n\nUpon this, Azer took his wife, who was pregnant with Abraham (pbuh), to a safe place and hid her in a cave, where Abraham (pbuh) was born.",
    "vocabulary": [
      {
        "word": "Idolater",
        "definition": "A person who worships idols or false gods."
      },
      {
        "word": "Abraham",
        "definition": "Prophet Abraham (pbuh), a key patriarch of faith, monotheism, and father of prophets."
      },
      {
        "word": "Family",
        "definition": "A group of individuals related by blood, marriage, or strong spiritual ties."
      }
    ],
    "hotspots": [
      {
        "id": "b2-hs-5-1",
        "x": 30,
        "y": 40,
        "title": "Astrologers",
        "description": "They predicted a child would end the reign of King Nimrod."
      },
      {
        "id": "b2-hs-5-2",
        "x": 65,
        "y": 35,
        "title": "Safe Place",
        "description": "Where Azer hid his pregnant wife."
      }
    ],
    "animatedWords": [
      "Idolater",
      "Abraham"
    ],
    "exercises": [
      {
        "id": "b2-ch-ex-5",
        "type": "multiple-choice",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "question": "Where is Abraham generally believed to have been born and started his mission?",
        "options": [
          "Palestine",
          "Ur or Babylon in Mesopotamia",
          "Egypt"
        ],
        "correctAnswer": 1,
        "explanation": "Historical sources and the narrative place his origins in Mesopotamia under King Nimrod.",
        "feedback": {
          "correct": "Correct! Historical sources and the narrative place his origins in Mesopotamia under King Nimrod.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 6,
    "type": "story",
    "title": "Abraham’s Childhood",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-6/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F05_Chapter_6_Abraham%E2%80%99s_Childhood.mp3?alt=media&token=b13894c9-8af9-4fe2-84f4-223980c405ad",
    "content": "Abraham (pbuh) came to know Allah when he was young in age. Allah cleared up Abraham (pbuh)’s heart and mind and gave him wisdom from childhood. Allah said: “And We had certainly given Abraham his sound judgement before, and We were of him well-Knowing\" (as to his belief in the Oneness of Allah etc.) (Surah Enbiyâ: 51). During his early childhood, Abraham (pbuh) realized that his father made strange statues, sculptures. One day, he asked his father about what he made. His father replied that he made statues of gods. Abraham (pbuh) was astonished and he spontaneously rejected the idea. Being a child, he played with the statues, sitting on their backs as people sit on the backs of donkeys. One day, his father saw him riding the statue of Mardukh (the Chief God of Babylon) and he became furious. He ordered his son not to play with it again. Abraham (pbuh) asked: \"What is this statue, father?\n\nIt has big ears, bigger than ours. \" His father answered: \"It is Mardukh, the god of gods, son!",
    "vocabulary": [
      {
        "word": "Astonished",
        "definition": "Greatly surprised or impressed; amazed."
      },
      {
        "word": "Spontaneously",
        "definition": "As a result of a sudden impulse."
      },
      {
        "word": "Furious",
        "definition": "Extremely angry."
      }
    ],
    "hotspots": [
      {
        "id": "b2-hs-6-1",
        "x": 30,
        "y": 40,
        "title": "Sound Judgement",
        "description": "Allah gave Abraham wisdom from his early childhood."
      },
      {
        "id": "b2-hs-6-2",
        "x": 65,
        "y": 35,
        "title": "Statue of Mardukh",
        "description": "The Chief God of Babylon, which Abraham rode and mocked."
      }
    ],
    "animatedWords": [
      "Astonished",
      "Spontaneously"
    ],
    "exercises": [
      {
        "id": "b2-ch-ex-6",
        "type": "multiple-choice",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "question": "How did young Abraham react when he learned his father made statues of gods?",
        "options": [
          "He was astonished and spontaneously rejected the absurd idea",
// c02b

// c03a
          "He immediately asked to learn the craft",
          "He accepted them as true gods without question"
        ],
        "correctAnswer": 0,
        "explanation": "Even as a child, his innate logic rejected the idea of created idols.",
        "feedback": {
          "correct": "Correct! Even as a child, his innate logic rejected the idea of created idols.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 7,
    "type": "story",
    "title": "Hatred for Idols",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-7/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F06_Chapter_7_Hatred_for_Idols.mp3?alt=media&token=2dd8d1c4-5723-4c0e-a60a-9da4ce735f8b",
    "content": "These big ears show his deep knowledge. \" This made Abraham (pbuh) laugh; he was only seven years old at that time.\n\nYears passed and Abraham (pbuh) grew. Since his childhood, his heart was full of hatred for these idols. He could not understand how a reasonable person could make a statue and then worship what he had made. He realized these statues were lifeless, silent, and entirely helpless; when they fell, they could not get back up. It was impossible to understand how people could believe that such statues could harm or benefit them! Abraham (pbuh)'s people had a big temple full of idols, in the middle of which was a niche housing the biggest gods. Abraham (pbuh), who used to go to the temple with his father when he was a child, greatly disliked all that wood and stone. It shocked him to see people bowing, crying, and begging the idols for help, as if those lifeless idols were capable of hearing their prayers! At first, Abraham thought the sight was funny, but later his feelings turned into anger.",
    "vocabulary": [
      {
        "word": "Lifeless",
        "definition": "Devoid of life; dead or apparently dead."
      },
      {
        "word": "Helpless",
        "definition": "Unable to defend oneself or to act without help."
      },
      {
        "word": "Knowledge",
        "definition": "Information, understanding, and skills acquired through experience or education."
      },
      {
        "word": "niche",
        "definition": "A shallow recess, especially in a wall to display a statue or other ornament."
      }
    ],
    "hotspots": [
      {
        "id": "b2-hs-7-1",
        "x": 30,
        "y": 40,
        "title": "Lifeless, Silent",
        "description": "Abraham realized the statues could not hear or help anyone."
      },
      {
        "id": "b2-hs-7-2",
        "x": 65,
        "y": 35,
        "title": "Temple",
        "description": "The place full of idols where people were begging them for help."
      }
    ],
    "animatedWords": [
      "Lifeless",
      "Helpless",
      "niche"
    ],
    "exercises": [
      {
        "id": "b2-ch-ex-7",
        "type": "true-false",
        "title": "Comprehension Check",
        "instructions": "Decide if the statement is true or false.",
        "question": "Abraham observed that the statues were lifeless, silent, and helpless, yet people still begged them for help.",
        "correctAnswer": true,
        "explanation": "He recognized the absolute helplessness of objects made of stone and wood.",
        "feedback": {
          "correct": "Correct! He recognized the absolute helplessness of objects made of stone and wood.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 8,
    "type": "story",
    "title": "Discovering Allah",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-8/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F07_Chapter_8_Discovering_Allah.mp3?alt=media&token=3a40bb58-9e67-4fd4-ae4a-15611b46319d",
    "content": "Wasn't it shocking that all of those people could be fooled? His father wanted him to become a priest when he grew up, which made things even worse. He only wanted his son to show respect to those statues, yet Abraham (pbuh) never stopped displaying his hatred.\n\nOne night, Abraham (pbuh) left his house to go to a mountain. He walked by himself through the darkness until he found a cave in the mountain, where he sat down to rest. He looked at the sky and saw the planets and stars which were worshipped by some people on earth. The Holy Qur’an told this incident in Surah En’âm, verses (âyet) 75–79: “Thus, We showed Abraham the empire of the heavens and the earth, that he might be one of those with certainty. When the night fell over him, he saw a planet. He said, “This is my lord.” But when it set, he said, “I do not love those that set.” Abraham (pbuh) saw that the stars couldn't show up when they wanted to because they could only do so at night.",
    "vocabulary": [
      {
        "word": "Worshipped",
        "definition": "Showed reverence and adoration for a deity."
      },
      {
        "word": "Shocking",
        "definition": "Causing intense surprise, disbelief, or emotional disturbance."
      },
      {
        "word": "People",
        "definition": "A group of human beings sharing a common language, culture, or faith."
      },
      {
        "word": "displaying",
        "definition": "Showing, revealing, or making something visible."
      }
    ],
    "hotspots": [
      {
        "id": "b2-hs-8-1",
        "x": 30,
        "y": 40,
        "title": "Cave in the Mountain",
        "description": "Where Abraham rested and looked up at the sky."
      },
      {
        "id": "b2-hs-8-2",
        "x": 65,
        "y": 35,
        "title": "Empire of the Heavens",
        "description": "Allah showed Abraham the universe so he would have certainty."
      }
    ],
    "animatedWords": [
      "Worshipped",
      "Shocking",
      "displaying"
    ],
    "exercises": [
      {
        "id": "b2-ch-ex-8",
        "type": "multiple-choice",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "question": "What did Abraham realize by observing the setting of the planet, moon, and sun?",
        "options": [
          "That the night sky is more powerful than the day",
          "That things that set and disappear cannot be the eternal Creator",
          "That he needed to build a temple for the stars"
        ],
        "correctAnswer": 1,
        "explanation": "He logically deduced that temporary creations are governed by a higher power.",
        "feedback": {
          "correct": "Correct! He logically deduced that temporary creations are governed by a higher power.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 9,
    "type": "story",
    "title": "The Signs in the Sky",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-9/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F08_Chapter_9_The_Signs_in_the_Sky.mp3?alt=media&token=7aca1432-760b-40f9-81eb-fedbfb7b813c",
    "content": "“Then, when he saw the moon rising, he said, “This is my lord.” But when it set, he said, “If my Lord does not guide me, I will be one of the erring people.” Then, when he saw the sun rising, he said, “This is my lord, this is bigger.” But when it set, he said, “O my people, I am innocent of your idolatry. I have directed my attention towards Him Who created the heavens and the earth—a monotheist—and I am not of the idolaters.” His young heart was filled with severe pain. He considered what was beyond the moon, the stars, and the planets (i.e., Allah). He was astonished that these heavenly bodies were worshipped by people, while in fact all those stars, asteroids, the Sun, the Moon, etc., had been created; they appeared and disappeared at the Creator’s command.\n\nPeople who worshipped astronomical objects got into arguments with Abraham (pbuh). In that debate, Abraham (pbuh) demonstrated to the people that these heavenly bodies cannot be worshipped as partners with Allah.",
    "vocabulary": [
      {
        "word": "Idolatry",
        "definition": "The worship of false gods."
      },
      {
        "word": "Astonished",
        "definition": "Greatly surprised or impressed; amazed."
      },
      {
        "word": "Worshipped",
        "definition": "Showed reverence and adoration for a deity."
      },
      {
        "word": "erring",
        "definition": "Being in error; straying from the correct path or belief."
      }
    ],
    "hotspots": [
      {
        "id": "b2-hs-9-1",
        "x": 30,
        "y": 40,
        "title": "Moon Rising",
        "description": "When he saw it set, he knew it could not be his Lord."
      },
      {
        "id": "b2-hs-9-2",
        "x": 65,
        "y": 35,
        "title": "Creator’s Command",
        "description": "The heavenly bodies obey the Creator."
// c03b

// c04a
      }
    ],
    "animatedWords": [
      "Idolatry",
      "Astonished",
      "erring"
    ],
    "exercises": [
      {
        "id": "b2-ch-ex-9",
        "type": "multiple-choice",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "question": "What did Abraham conclude after observing the celestial cycle?",
        "options": [
          "The sun is the absolute ruler of the universe",
          "He should worship whatever is currently visible in the sky",
          "Celestial bodies are mere creations that appear and disappear upon command"
        ],
        "correctAnswer": 2,
        "explanation": "He shifted his focus from the created entities to the Creator.",
        "feedback": {
          "correct": "Correct! He shifted his focus from the created entities to the Creator.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 10,
    "type": "story",
    "title": "Challenging Star Worshippers",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-10/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F09_Chapter_10_Challenging_Star_Worshippers.mp3?alt=media&token=65391322-9f37-4c72-921a-f311d1aa59b1",
    "content": "Indeed, these bodies are evidently created, controlled, managed, and made to serve a purpose. They come and go, sometimes fading from the world. However, Allah sees and knows everything; nothing can be hidden from Him. Allah is without end, everlasting without disappearance. There is no other god but Allah. Abraham (pbuh) clarified the situation for them, firstly, that the heavenly bodies are unworthy of worship and, secondly, that they are the signs of Allah. The Qur’an emphasizes this with simple logic: “And of His signs are the night and the day, and the sun and the moon. Do not bow down to the sun, nor to the moon, but bow down to Allah, Who created them both, if you really worship Him” (Surah Fussilat: 37). Abraham (pbuh)'s rational thinking helped to uncover the truth, and then the conflict between him and the worshippers of the stars and planets started. They did not remain silent.\n\nThey began arguing and threatening Abraham (pbuh). He replied: “And his people argued with him.",
    "vocabulary": [
      {
        "word": "Indeed",
        "definition": "In truth, in fact, or without a doubt."
      },
      {
        "word": "Bodies",
        "definition": "The physical structures of living human beings or animals."
      },
      {
        "word": "Evidently",
        "definition": "Plainly, clearly, or obviously based on the available evidence."
      }
    ],
    "hotspots": [
      {
        "id": "b2-hs-10-1",
        "x": 30,
        "y": 40,
        "title": "Serve a Purpose",
        "description": "The stars and the moon are created and controlled by Allah."
      },
      {
        "id": "b2-hs-10-2",
        "x": 65,
        "y": 35,
        "title": "Rational Thinking",
        "description": "Using logic to uncover the truth about creation."
      }
    ],
    "animatedWords": [
      "Indeed",
      "Bodies"
    ],
    "exercises": [
      {
        "id": "b2-ch-ex-10",
        "type": "true-false",
        "title": "Comprehension Check",
        "instructions": "Decide if the statement is true or false.",
        "question": "Abraham attempted to convince his people by showing them larger statues on earth.",
        "correctAnswer": false,
        "explanation": "He used critical debate and reasoning to show the dependency of their gods.",
        "feedback": {
          "correct": "Correct! He used critical debate and reasoning to show the dependency of their gods.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 11,
    "type": "story",
    "title": "Arguing for Tawheed",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-11/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F10_Chapter_11_Arguing_for_Tawheed.mp3?alt=media&token=b9953447-ffeb-49fb-9009-c991b3e4ffb7",
    "content": "He said, “Do you argue with me about Allah, when He has guided me? I do not fear partners you assign to Him, unless my Lord wills it. My Lord comprehends all things in knowledge. Will you not reconsider? And why should I fear the partners you give to Him, and you do not fear worshipping others alongside Allah for which He sent down to you no authority? So which of the two parties has more right to security, if you are aware?” They who believe, and do not mix their belief with injustice—those will have security, and they are (rightly) guided. That was Our argument which We gave to Abraham against his people.” (Surah En'âm: 80–83). His people attempted to argue with him and present evidence to prove the correctness of their beliefs. That these arguments are not told in the verses shows the ridiculousness of their claims. It is understood from Abraham (pbuh)'s statement, “I do not fear partners you worship alongside Allah,” that his people threatened him with the punishment of their gods.",
    "vocabulary": [
      {
        "word": "Guided",
        "definition": "Directed, led, or shown the correct spiritual or physical path."
      },
      {
        "word": "Partners",
        "definition": "Associates or sharers in responsibility or devotion (in theology, associates with Allah)."
      },
      {
        "word": "Assign",
        "definition": "To attribute, allocate, or designate a role or status."
      },
      {
        "word": "claims",
        "definition": "Statements or assertions that something is true, often without proof."
      }
    ],
    "hotspots": [
      {
        "id": "b2-hs-11-1",
        "x": 30,
        "y": 40,
        "title": "Reconsider",
        "description": "Abraham asked his people to think again about their false beliefs."
      },
      {
        "id": "b2-hs-11-2",
        "x": 65,
        "y": 35,
        "title": "Right to Security",
        "description": "Those who do not mix belief with injustice are guided."
      }
    ],
    "animatedWords": [
      "Guided",
      "Partners",
      "claims"
    ],
    "exercises": [
      {
        "id": "b2-ch-ex-11",
        "type": "multiple-choice",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "question": "What was a main argument Abraham used against his people's traditions?",
        "options": [
          "That their ancestors were prophets",
          "That following the ancestors blindly without reasoning is an evident error",
          "That they should incorporate star-worship into their traditions"
        ],
        "correctAnswer": 1,
        "explanation": "He pointed out the fallacy of following traditions that contradict reason.",
        "feedback": {
          "correct": "Correct! He pointed out the fallacy of following traditions that contradict reason.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 12,
    "type": "story",
    "title": "Speaking to His Father",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-12/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F11_Chapter_12_Speaking_to_His_Father.mp3?alt=media&token=d0f15e47-a55b-4e88-a837-3a0770997c18",
    "content": "Prophet Abraham (pbuh) paid no heed to this threat. As a true believer, he expressed his fear of Allah. In doing so, he declared his belief that both benefit and harm come from Allah. Abraham (pbuh) did his best to make his people mindful of the belief in the oneness of Allah and to the worship of Him alone. He told them to firmly reject the worship of idols. He said to his father and his people in Surah Enbiyâ, verses 52–56: “When he said to his father and his people, ‘What are these statues to which you are faithful?’ They said, ‘We found our parents worshiping them.’ He said, ‘You and your parents are in evident error.’ They said, ‘Are you telling us the truth, or are you just playing?’ He said, ‘Your Lord is the Lord of the heavens and the earth, the One who created them, and I bear witness to that.’”\n\nA bitter struggle began between Abraham (pbuh) and his people. The most amazed and furious was his father, for he not only worshipped idols but shaped and sold them as well.",
    "vocabulary": [
      {
        "word": "Furious",
        "definition": "Extremely angry."
      },
      {
        "word": "Worshipped",
        "definition": "Showed reverence and adoration for a deity."
      },
      {
        "word": "Prophet",
        "definition": "A person chosen by Allah as a messenger to guide people to the truth."
      },
      {
        "word": "paid no heed",
        "definition": "Ignored or gave no attention to a warning or threat."
      }
    ],
    "hotspots": [
      {
        "id": "b2-hs-12-1",
// c04b

// c05a
        "x": 30,
        "y": 40,
        "title": "Evident Error",
        "description": "Abraham told his father they were wrong to worship statues."
      },
      {
        "id": "b2-hs-12-2",
        "x": 65,
        "y": 35,
        "title": "Bitter Struggle",
        "description": "The conflict began between Abraham and the idol worshippers."
      }
    ],
    "animatedWords": [
      "Furious",
      "Worshipped",
      "paid no heed"
    ],
    "exercises": [
      {
        "id": "b2-ch-ex-12",
        "type": "multiple-choice",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "question": "How did Abraham's father react when Abraham advised him against idolatry?",
        "options": [
          "He listened carefully and abandoned his beliefs",
          "He was amazed and furious, threatening to stone him",
          "He agreed to keep Abraham's beliefs a secret"
        ],
        "correctAnswer": 1,
        "explanation": "Azer responded with anger and threats of severe punishment.",
        "feedback": {
          "correct": "Correct! Azer responded with anger and threats of severe punishment.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 13,
    "type": "story",
    "title": "Debating the Idolaters",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-13/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F12_Chapter_13_Debating_the_Idolaters.mp3?alt=media&token=49e3bd81-8558-4803-a119-d779ee1504d7",
    "content": "Abraham (pbuh) felt that it was his duty as a good son to advise his father against this evil so that his father could be saved from Allah's punishment. He was a wise son, so he did not make his father feel embarrassed, or make fun of his job. He told him that he loved him; in that way, he hoped to increase fatherly love. Then he kindly asked him why he worshipped lifeless statues who could not hear, see, or protect him. Before his father got angry, he quickly added an explanation, as recorded in Surah Maryam, verses 42–48: “He (Abraham) said to his father, ‘O my father, why do you worship what can neither hear, nor see, nor benefit you in any way? O my father, there has come to me knowledge that never came to you. So follow me, and I will guide you along a straight way.\n\nO my father, do not worship Satan. Satan is disobedient to the Most Beneficent (Allah). O my father, I fear that a punishment from the Most Beneficent (Allah) will afflict you, and you become a friend of Satan.’ He (his father) said, ‘Are you rejecting my gods, O Abraham?",
    "vocabulary": [
      {
        "word": "afflict",
        "definition": "To cause pain, distress, or suffering to someone."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "afflict"
    ],
    "exercises": [
      {
        "question": "Abraham stopped carrying the message of truth after his father threatened to stone him.",
        "correctAnswer": false,
        "explanation": "His father's harsh behavior did not stop him; he went to the town to debate with the people instead.",
        "type": "true-false",
        "id": "b2-ch-ex-13",
        "title": "Comprehension Check",
        "instructions": "Decide if the statement is true or false.",
        "feedback": {
          "correct": "Correct! His father's harsh behavior did not stop him; he went to the town to debate with the people instead.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 14,
    "type": "story",
    "title": "Calling People to Reconsider",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-14/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F13_Chapter_14_Calling_People_to_Reconsider.mp3?alt=media&token=ca625f7c-f2ba-44c4-ac96-28790a4fdacf",
    "content": "If you do not stop this, I will stone you. So leave me alone for a while before I punish you.’ Abraham said, ‘Peace be upon you. I will ask my Lord to forgive you; He has been Kind to me. And I will turn away from you, and from what you pray to instead of Allah. And I will pray to my Lord, and I hope I will not be disappointed in my prayer to my Lord.’” Abraham (pbuh) kindly spoke to his father with clear logic and sense. His father's harsh behavior towards Abraham (pbuh) did not stop him from carrying the message of truth. He was angry and sad to see people bow down before idols; he was determined to put an end to these practices and went to the town to debate with the people. In fact, he knew well that he might face negative consequences. Just as a wise doctor looks for the cause of an illness to find the right cure, or a clever judge questions a suspect to uncover the truth, Abraham (pbuh) questioned them to reveal the reality of their situation.",
    "vocabulary": [
      {
        "word": "determined",
        "definition": "Having made a firm decision and being resolved not to change it."
      },
      {
        "word": "consequences",
        "definition": "The results or effects of an action or condition."
      },
      {
        "word": "uncover",
        "definition": "To find or reveal something that was hidden or secret."
      },
      {
        "word": "reveal",
        "definition": "To make previously hidden information known to others."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "determined",
      "consequences",
      "uncover",
      "reveal"
    ],
    "exercises": [
      {
        "question": "How did Abraham advise his father against idolatry?",
        "options": [
          "He used kind words and appealed to fatherly love",
          "He shouted at him in front of the people",
          "He destroyed his father's workshop immediately"
        ],
        "correctAnswer": 0,
        "explanation": "He advised his father with wisdom and kindness to avoid making him angry or embarrassed.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-14",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! He advised his father with wisdom and kindness to avoid making him angry or embarrassed.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 15,
    "type": "story",
    "title": "Breaking the Idols",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-15/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F14_Chapter_15_Breaking_the_Idols.mp3?alt=media&token=be5a070b-45e9-4408-bddd-1929f6023e6e",
    "content": "\"Do the idols see you when you bow down before them? Do they benefit you in any way? \" They quickly tried to defend their beliefs. They argued that they knew the idols were lifeless but that their forefathers had worshipped them; to them, this confirmed their belief. Abraham (pbuh) explained that their forefathers had been wrong. This angered them and they responded: \"Are you criticizing our gods and our forefathers? Or are you just joking? \" Abraham (pbuh) showed no fear as he replied: \"I am serious. I come to you with a true religion. I have been sent with guidance from our Lord Who alone is worthy of worship, Who is the Creator of the heavens and the earth, and Who regulates all affairs of life, unlike the dumb idols which are just stone and wood. \" To persuade them that the idols could not harm him, he challenged: \"I have already criticized them; see if they have any power to harm me by now!\n\n\" Abraham (pbuh) did not give up arguing with the idolaters.",
    "vocabulary": [
      {
        "word": "dumb",
        "definition": "Unable to speak (often used historically to describe silent statues)."
      },
      {
        "word": "persuade",
        "definition": "To convince someone to do or believe something through reasoning or argument."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "dumb",
      "persuade"
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "id": "b2-ch-ex-15",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "question": "How did the idolaters initially justify their belief in the lifeless idols?",
        "options": [
          "By claiming the idols spoke to them directly",
          "By pointing out that their forefathers had worshipped them, which they took as confirmation",
          "By demonstrating that the idols could protect themselves"
        ],
        "correctAnswer": 1,
        "explanation": "The idolaters relied on the blind following of their forefathers as their justification.",
        "feedback": {
          "correct": "Correct! The idolaters relied on the blind following of their forefathers as their justification.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 16,
    "type": "story",
    "title": "The Broken Temple",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-16/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F15_Chapter_16_The_Broken_Temple.mp3?alt=media&token=3ebcb16d-df42-4d8b-88ca-ef8c847804d4",
    "content": "Allah said in Surah Şuarâ, verses 69–82: “And describe to them the story of Abraham. When he said to his father and his people, “What do you worship?” They said, “We worship idols, and we remain faithful to them.” He said, “Do they hear you when you pray? Or do they benefit you, or harm you?” They said, “But we found our ancestors doing so.” He said, “Have you considered what you worship— You and your ancient ancestors? They are enemies to me, but not so the Lord of the Worlds. He who created me, and guides me. He who feeds me, and waters me. And when I get sick, He heals me. He who makes me die, and then revives me. He who, I hope, will forgive my sins on the Day of Resurrection?” He explained to them the beauty of Allah's creation, His power, and His wisdom. Idol worship is hated by Allah, as Allah is the Lord of the universe Who created mankind, offers guidance, provides human beings with food and drink and heals the sick.",
    "vocabulary": [],
    "hotspots": [],
    "animatedWords": [],
    "exercises": [
      {
// c05b

// c06a
        "question": "Which of the following attributes of Allah did Abraham emphasize to contrast with the idols?",
        "options": [
          "He creates, guides, feeds, and heals",
          "He commands them to build grand temples",
          "He is visible every night in the sky"
        ],
        "correctAnswer": 0,
        "explanation": "He emphasized that Allah actively provides life, sustenance, and healing.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-16",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! He emphasized that Allah actively provides life, sustenance, and healing.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 17,
    "type": "story",
    "title": "Questioned Before the People",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-17/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F16_Chapter_17_Questioned_Before_the_People.mp3?alt=media&token=bfbc27f2-54a1-4bcd-b331-f81774155d0a",
    "content": "Allah also will cause them to die and bring them back to life again. However, idolaters would not give up but held on tightly to their idols. Abraham (pbuh) left his father's house and quit any further interest in his people and what they worshipped. Actually, he decided to do something shocking to show their error. He knew that there was going to be a great celebration outside the town. All the people would attend it. Abraham (pbuh) waited until the city was empty, then cautiously made his way to the temple. The streets leading to it and the temple itself were empty. The priests had also gone to the festival outside the city. Abraham (pbuh) went there with a sharp axe. He looked at the stone and wood statues of the gods and at the food put in front of them as offerings. He approached one of the statues and asked: \"The food in front of you is getting cold.\n\nWhy don't you eat? \" The statue kept silent and rigid.",
    "vocabulary": [
      {
        "word": "tightly",
        "definition": "In a firm, secure, or closely held manner."
      },
      {
        "word": "quit",
        "definition": "Stopped or gave up an action or interest."
      },
      {
        "word": "cautiously",
        "definition": "In a careful and attentive manner to avoid danger or mistakes."
      },
      {
        "word": "rigid",
        "definition": "Stiff and unyielding; unable to bend or move."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "tightly",
      "quit",
      "cautiously",
      "rigid"
    ],
    "exercises": [
      {
        "question": "The idolaters were willing to give up their beliefs after hearing Abraham's logical arguments.",
        "correctAnswer": false,
        "explanation": "They would not give up their idol worship despite Abraham's clear logic.",
        "type": "true-false",
        "id": "b2-ch-ex-17",
        "title": "Comprehension Check",
        "instructions": "Decide if the statement is true or false.",
        "feedback": {
          "correct": "Correct! They would not give up their idol worship despite Abraham's clear logic.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 18,
    "type": "story",
    "title": "The Decision to Burn Abraham",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-18/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F17_Chapter_18_The_Decision_to_Burn_Abraham.mp3?alt=media&token=0ae53990-9b95-450d-a818-ad940a9f4d58",
    "content": "Abraham (pbuh) asked all the other statues around him: \"Will you not eat of the offering before you? \" (Surah Sâffât: 91). He was mocking them, for he knew they would not eat. He once again asked them: \"What is the matter with you that you do not speak? \" (Surah Sâffât: 92). He then raised his axe and started smashing the false gods worshipped by the people. He destroyed them all except one. On its neck, he hung the axe. He left the temple. He had fulfilled his duty to show his people a practical proof of their foolishness in worshipping something other than Allah. When the people returned, they were shocked to see their gods smashed into pieces, spread all over the temple. They tried to find out who had done that to their idols and Abraham (pbuh)'s name came to their minds. Allah said in Surah Enbiyâ, verses 59–67: “They said, “Who did this to our gods? He is certainly one of the wrongdoers.” They said, “We heard a youth mentioning them.",
    "vocabulary": [
      {
        "word": "smashing",
        "definition": "Violently breaking something into pieces."
      },
      {
        "word": "except",
        "definition": "Not including; other than."
      },
      {
        "word": "fulfilled",
        "definition": "Carried out, completed, or realized a duty or promise."
      },
      {
        "word": "proof",
        "definition": "Evidence or argument establishing a fact or the truth of a statement."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "smashing",
      "except",
      "fulfilled",
      "proof"
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What made the people suspect Abraham (pbuh) of breaking the idols?",
        "options": [
          "He was seen carrying an axe near the temple.",
          "They remembered him criticizing and promising to plot against their idols.",
          "The biggest idol told them what had happened.",
          "Abraham confessed to the king immediately."
        ],
        "correctAnswer": 1,
        "explanation": "They remembered his previous words against their false gods.",
        "id": "b2-ch-ex-18",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! They remembered his previous words against their false gods.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 19,
    "type": "story",
    "title": "Thrown into the Fire",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-19/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F18_Chapter_19_Thrown_into_the_Fire.mp3?alt=media&token=d5a3e204-3a26-4084-a741-ede788f383a3",
    "content": "He is called Abraham.” They said, “Bring him before the eyes of the people, so that they may witness.” They said, “Are you the one who did this to our gods, O Abraham?” He said, “But it was this biggest of them that did it. Ask them, if they can speak.” Then they turned to one another and said, “You yourselves are the wrongdoers.” But they reverted to their old ideas: “You certainly know that these do not speak.” He said, “Do you worship, instead of Allah, what can neither benefit you in anything, nor harm you? Shame on you, and on what you worship instead of Allah. Do you not understand?” They furiously demanded that Abraham (pbuh) be arrested and judged. Abraham (pbuh) did not resist. This was exactly what he was aiming for, so that he could demonstrate to them in public that their beliefs were foolish. At the trial, they asked him if he was responsible for breaking the idols.\n\nSmiling, he told them to ask the biggest idol which was still undamaged.",
    "vocabulary": [
      {
        "word": "reverted",
        "definition": "Returned to a previous state, practice, or belief."
      },
      {
        "word": "demanded",
        "definition": "Asked for something forcefully or assertively."
      },
      {
        "word": "demonstrate",
        "definition": "To clearly show the existence or truth of something by giving proof or evidence."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "reverted",
      "demanded",
      "demonstrate"
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "id": "b2-ch-ex-19",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "question": "Why did Abraham tell the people to ask the biggest idol who broke the statues?",
        "options": [
          "To mock their belief that lifeless statues could have any power or act",
          "To escape punishment by blaming the statue",
          "To praise the power of the large statue"
        ],
        "correctAnswer": 0,
        "explanation": "He used this question to expose the absurdity of worshipping silent and powerless idols.",
        "feedback": {
          "correct": "Correct! He used this question to expose the absurdity of worshipping silent and powerless idols.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 20,
    "type": "story",
    "title": "The Faith of the Believers",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-20/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F19_Chapter_20_The_Faith_of_the_Believers.mp3?alt=media&token=1dc71341-e358-4deb-962e-ca26d2c893b2",
    "content": "He told them that it must be the culprit! They replied that he knew well that the idol could not speak or move. These words gave Abraham (pbuh) the chance to show the foolishness of worshipping these lifeless objects. They had no answer for Abraham (pbuh). In fact, they realized the stupidity of their beliefs; however, their arrogance would not allow them to admit their foolishness. All they could do was use their authority as tyrants to punish Abraham (pbuh). They kept him in chains and planned their revenge. Anger was burning in their hearts. They agreed that Abraham (pbuh) should be burned alive. They decided to throw Abraham (pbuh) into the biggest fire they could build. All the citizens were ordered to gather wood as a service to their gods. For several days they collected fuel. They dug a deep pit, filled it with firewood, and set it on fire. They brought a catapult with which to throw Abraham (pbuh) into the fire. Abraham (pbuh) was put on the catapult; his hands and feet were tied.",
    "vocabulary": [
      {
        "word": "culprit",
        "definition": "A person or thing responsible for a crime or misdeed."
// c06b

// c07a
      },
      {
        "word": "admit",
        "definition": "To confess or acknowledge that something is true, often reluctantly."
      },
      {
        "word": "revenge",
        "definition": "Action taken in return for an injury or offense; retaliation."
      },
      {
        "word": "pit",
        "definition": "A large, deep hole in the ground."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "culprit",
      "admit",
      "revenge",
      "pit"
    ],
    "exercises": [
      {
        "question": "When asked if he broke the gods, how did Abraham corner the idolaters?",
        "options": [
          "He told them to ask the largest idol, forcing them to admit it couldn't speak",
          "He confessed immediately and begged for mercy",
          "He blamed it on an earthquake"
        ],
        "correctAnswer": 0,
        "explanation": "He used their own logic against them by pointing to the largest idol.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-20",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! He used their own logic against them by pointing to the largest idol.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 21,
    "type": "story",
    "title": "The Coolness of the Fire",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-21/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F20_Chapter_21_The_Coolness_of_the_Fire.mp3?alt=media&token=bb50c974-9733-4730-9c56-e8f48f24d850",
    "content": "The fire was ready, with its flames reaching the sky. The people stood away from the pit because of the great heat. Then, the chief priest gave his order to throw Abraham (pbuh) into the fire. The angel Gabriel came near Abraham (pbuh) and asked him: \"O Abraham, do you wish for anything? \" Abraham (pbuh) replied: \"Nothing from you. \" The catapult was shot and Abraham (pbuh) was thrown into the fire. But his fall into the fire was like going down into a cool garden. The rising flames were still there, but they did not burn him, for Allah commanded: \"O fire! Be coolness and safety for Abraham\" (Surah Enbiyâ: 69). The fire obeyed the order of Allah. It became cool and safe for Abraham (pbuh). It only burned his ropes, and he sat in the middle of the fire as if he were sitting in a garden. He thanked Allah, with a heart full of His love and trust in Him.\n\nThere was no fear or worry. The air became more pleasant as the fire was turned into coolness.",
    "vocabulary": [],
    "hotspots": [],
    "animatedWords": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "id": "b2-ch-ex-21",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "question": "What did Allah command the fire when Abraham was thrown into it?",
        "options": [
          "To burn everything in the pit except the crowd",
          "To be coolness and safety for Abraham",
          "To rise up and consume the disbelievers' city"
        ],
        "correctAnswer": 1,
        "explanation": "Allah commanded: 'O fire! Be coolness and safety for Abraham' (Surah Enbiyâ: 69).",
        "feedback": {
          "correct": "Correct! Allah commanded: 'O fire! Be coolness and safety for Abraham' (Surah Enbiyâ: 69).",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 22,
    "type": "story",
    "title": "Stepping Out Unharmed",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-22/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F21_Chapter_22_Stepping_Out_Unharmed.mp3?alt=media&token=6bbfc84a-e819-49ad-b929-fcad95254024",
    "content": "His trust in the true Allah was tested here. His last words before entering the flames were, “Allah is sufficient for me.” The large crowd, the leaders, and the priests were watching the fire from a distance. It was burning their faces and nearly made them breathless. The fire kept burning for such a long time that the disbelievers thought it would never be extinguished. Once the fire burnt out, they were shocked to see that Abraham (pbuh) stepped out of the pit completely unharmed. The smoke blackened their faces, yet his face was bright. The burning fire had become cool for Abraham (pbuh) and had only blackened the ropes which held him. He walked out of the fire as if he were walking out of a garden. Cries of astonishment were heard from the unbelievers. \"They wanted to harm him, but We made them the worst losers” (Surah Enbiyâ: 70). This miracle shamed the despotic rulers, but the fire of their rage remained uncooled. Consequently, many people started following Abraham (pbuh), but some kept their faith secret out of fear of rulers.",
    "vocabulary": [
      {
        "word": "sufficient",
        "definition": "Enough; adequate to meet a need."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "sufficient"
    ],
    "exercises": [
      {
        "question": "What was the miraculous outcome of Abraham being thrown into the fire?",
        "options": [
          "The fire was extinguished by a sudden rainstorm",
          "Allah commanded the fire to become cool and safe for him",
          "He escaped the fire by flying away"
        ],
        "correctAnswer": 1,
        "explanation": "His unshakeable faith in Allah was rewarded when the fire was made cool and safe.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-22",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! His unshakeable faith in Allah was rewarded when the fire was made cool and safe.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 23,
    "type": "story",
    "title": "Debating King Nimrod",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-23/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F22_Chapter_23_Debating_King_Nimrod.mp3?alt=media&token=996f2e97-b2fa-4d6a-b5d6-cb474a3dee8a",
    "content": "Abraham (pbuh) challenged those who declared themselves as gods, like King Nimrod. When King Nimrod heard that Abraham (pbuh) had emerged from the fire unharmed, he was filled with rage. He thought that his claim to be god could not be questioned by an ordinary person. He wanted to know him personally and held a dialogue with him. Still a young man, Abraham (pbuh) was put on trial and stood by himself before a king. Even his father was not on his side; he was on the king’s side. Allah told about this scene in Surah Baqarah, verse 258: “Have you not thought about him who disputed with Abraham about his Lord (Allah) because Allah had given him the kingdom?” Abraham (pbuh)’s logic was undeniable; he said to him: \"My Lord (Allah) is He Who gives life and causes death. \" He said: \"I give life and cause death.\n\n\" The king called up two men sentenced to death. He freed one and the other was put to death.",
    "vocabulary": [],
    "hotspots": [],
    "animatedWords": [],
    "exercises": [
      {
        "question": "What argument did King Nimrod use to claim he was a god?",
        "options": [
          "He claimed he could make it rain",
          "He claimed he had the power to give life and cause death",
          "He claimed he created the stars"
        ],
        "correctAnswer": 1,
        "explanation": "Nimrod foolishly argued he controlled life and death by sparing or killing his subjects.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-23",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! Nimrod foolishly argued he controlled life and death by sparing or killing his subjects.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 24,
    "type": "story",
    "title": "Sarah, Hajar, and a New Trial",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-24/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F23_Chapter_24_Sarah%2C_Hajar%2C_and_a_New_Trial.mp3?alt=media&token=49060ebe-4cbd-437c-865e-3a9336a128cf",
    "content": "This reply of the king was totally foolish, so Abraham (pbuh) put forth another challenge which would unquestionably and easily quiet him. Abraham (pbuh) said: \"Verily, Allah causes the sun to rise from the east; then cause it to rise from the west. \" He was utterly defeated. Allah does not guide the people who are Zalimeen (wrongdoers) (Surah Baqarah: 258). Abraham (pbuh)'s fame spread throughout the entire kingdom of Babylonia. People talked about how he was saved from the fire and how he debated with the king and left him unable to speak. In the meantime, Abraham (pbuh) continued calling people to believe in Allah and made a great effort to guide his people to the right path. He tried every means to persuade them. However, in spite of his love and care for his people, they left him alone. Only one woman and one man of his people shared his belief in Allah.\n\nThe woman's name was Sarah (Sâre) and she became his wife. The man's name was Lot (Lût) and he later became a prophet.",
    "vocabulary": [
      {
        "word": "put forth",
        "definition": "To present, propose, or state an idea or challenge."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "put forth"
    ],
    "exercises": [
      {
        "question": "Why couldn't Nimrod answer Abraham's final challenge?",
        "options": [
          "Because Abraham asked a question in a language he didn't know",
          "Because he had no control over the sun rising from the East",
          "Because he was too angry to speak"
        ],
        "correctAnswer": 1,
        "explanation": "Abraham challenged him to change the sun's course, which only Allah can do.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-24",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! Abraham challenged him to change the sun's course, which only Allah can do.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
// c07b

// c08a
//__C08__
// c08b

// c09a
//__C09__
// c09b

// c10a
//__C10__
// c10b

// c11a
//__C11__
// c11b
];

export type AbrahamB2VocabSeed = readonly [en: string, ar: string, enDefinition: string, arDefinition: string];
const v = (en: string, ar: string, enDefinition: string, arDefinition: string): AbrahamB2VocabSeed => [en, ar, enDefinition, arDefinition];
export const abrahamB2CanonicalVocabulary: Record<number, readonly AbrahamB2VocabSeed[]> = {
// k01a
//__K01__
// k01b
// k02a
//__K02__
// k02b
// k03a
//__K03__
// k03b
// k04a
//__K04__
// k04b
};

// t01a
//__T01__
// t01b
// t02a
//__T02__
// t02b