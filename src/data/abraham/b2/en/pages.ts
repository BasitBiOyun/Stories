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
  {
    "id": 25,
    "type": "story",
    "title": "Sarah and Hajar",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-25/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F24_Chapter_25_Sarah_and_Hajar.mp3?alt=media&token=0e2106bf-baee-4089-957e-bf08c73f8146",
    "content": "When Abraham (pbuh) realized that no one else was going to believe in his call, he decided to emigrate. He left his people and traveled with his wife Sarah and Lot to Egypt. Allah told us: “So Lût believed in him (Abraham's message of Islamic Monotheism). He (Abraham) said: 'I will emigrate for the sake of my Lord. Verily, He is the All Mighty, the All Wise”(Surah Ankebût: 26). After Egypt, Abraham (pbuh) traveled to Palestine and settled there. He called people to believe in Allah wherever he traveled, judged fairly between people, and guided them to truth and righteousness. Abraham (pbuh)'s wife Sarah was sterile. She had been given an Egyptian woman, Hajar, as a servant when they were in Egypt. Abraham (pbuh) had aged and his hair was gray after many years spent in calling people to Allah. Sarah thought she could not have a child. Therefore, she suggested Abraham (pbuh) get married to Hajar. Hajar gave birth to her first son, Ishmael, when Abraham (pbuh) was an old man.",
    "vocabulary": [
      {
        "word": "sterile",
        "definition": "Incapable of producing offspring or children."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "sterile"
    ],
    "exercises": [
      {
        "question": "Why did Sarah suggest that Abraham marry Hajar?",
        "options": [
          "Because Sarah thought she could not have a child and wanted Abraham to have an heir",
          "Because Hajar demanded to be married",
          "Because Nimrod commanded them to marry"
        ],
        "correctAnswer": 0,
        "explanation": "Sarah offered Hajar to Abraham so that he might have a child.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-25",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! Sarah offered Hajar to Abraham so that he might have a child.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 26,
    "type": "story",
    "title": "Hajar’s Trust in the Desert",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-26/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F25_Chapter_26_Hajar%E2%80%99s_Trust_in_the_Desert.mp3?alt=media&token=fb5f22dc-235c-4535-ac20-2dd9ab13218f",
    "content": "Some time later, Allah gave Abraham (pbuh) another son from his first wife, Sarah. The name of this second son was Isaac (İshak). Allah told Abraham (pbuh) that these two sons’ offspring would be the prophets of Judaism, Christianity, and Islam. From Ishmael's descendants came Prophet Muhammad (pbuh), while from Isaac's came Moses (pbuh) and Jesus (pbuh). One day, Allah told Abraham (pbuh) that he should take Hajar and Ishmael to the Sacred City, Mecca. This was another test for Abraham (pbuh) while Ishmael was still a little child. It was part of Allah’s master plan. He informed Abraham (pbuh) that He would construct the sacred city with Ishmael's hands and make its water run for Ishmael. In a few days, Abraham (pbuh) set out with his wife Hajar and their son Ishmael. Hajar was still nursing Ishmael and the child was still breastfeeding. Abraham (pbuh) walked through cultivated land, desert, and mountains until he reached the desert of the Arabian Peninsula and came to an uncultivated valley near two small hills called Safa and Marwa.",
    "vocabulary": [
      {
        "word": "set out",
        "definition": "To begin a journey or course of action."
      },
      {
        "word": "cultivated",
        "definition": "Prepared and used for growing crops."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "set out",
      "cultivated"
    ],
    "exercises": [
      {
        "question": "Allah eventually gave Abraham another son, named Isaac, from his first wife Sarah.",
        "correctAnswer": true,
        "explanation": "Despite her old age, Sarah was blessed with a son named Isaac.",
        "type": "true-false",
        "id": "b2-ch-ex-26",
        "title": "Comprehension Check",
        "instructions": "Decide if the statement is true or false.",
        "feedback": {
          "correct": "Correct! Despite her old age, Sarah was blessed with a son named Isaac.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 27,
    "type": "story",
    "title": "Hajar and Ishmael Search for Water",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-27/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F26_Chapter_27_Hajar_and_Ishmael_Search_for_Water.mp3?alt=media&token=d14daae7-e2e0-455c-bda1-66ab2239854c",
    "content": "The valley had no fruit, no trees, no food, no water, and no sign of life. Abraham (pbuh) left them with a skin of water and a leather bag full of dates (hurma). As Abraham (pbuh) began walking away, leaving them behind, Hajar became anxious as to what was happening. Abraham (pbuh) continued walking. Hajar asked him: \"Has Allah commanded you to leave us here? \" He replied: \"Yes. I am leaving you to Allah’s care. \" Feeling a degree of comfort in this answer, this great woman said: \"I am satisfied to be with Allah! We are not going to be lost, since Allah is with us. \" Hajar came to understand that Abraham (pbuh) was not acting on his own decision; Allah had commanded him to leave them. Abraham (pbuh) advanced as far as the upper parts of Mecca. He stopped in a place where they could not see him.\n\nHe turned his face towards the direction where the Ka‘ba stands today and raised his hands, praying as follows: \"O Our Lord!",
    "vocabulary": [
      {
        "word": "advanced",
        "definition": "Moved forward or ahead in a purposeful way."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "advanced"
    ],
    "exercises": [
      {
        "question": "How did Hajar demonstrate her profound trust in Allah in the barren valley?",
        "options": [
          "She panicked and tried to run back to Egypt",
          "She asked Abraham to stay with them no matter what",
          "She surrendered to Allah's will when she learned it was His command"
        ],
        "correctAnswer": 2,
        "explanation": "Hajar showed advanced Tawakkul (trust) by accepting Allah's command completely.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-27",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! Hajar showed advanced Tawakkul (trust) by accepting Allah's command completely.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 28,
    "type": "story",
    "title": "Zamzam Appears",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-28/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F27_Chapter_28_Zamzam_Appears.mp3?alt=media&token=baf68a2a-1d4c-4428-972b-f49b47c307b2",
    "content": "I have made some of my offspring to dwell in a valley with no cultivation, by Your Sacred House (the Ka‘ba at Mecca); in order, O our Lord, that they may offer prayers perfectly (Iqamat as salat); so fill some hearts among men with love towards them, and O Allah provide them with fruits so that they may give thanks\" (Surah Ibrâhim: 37). Abraham (pbuh) had to take Hajar and Ishmael away from Palestine to a new place. This was about the rebuilding of the temple, that is, the Ka‘ba. According to Allah’s intention, Hajar and Ishmael had to leave Palestine and settle in the barren valley of Mecca, near the place of the old temple, to reconstruct the Holy Ka‘ba which was lost after Noah’s Flood, making this place the renewed center of monotheism: Islam. Over the years, Ishmael’s children had children; one of them was Muhammad, the Prophet of Islam (pbuh).\n\nThey spread all over the Arabian Peninsula to carry their grandfather Abraham (pbuh)’s message of monotheism.",
    "vocabulary": [
      {
        "word": "intention",
        "definition": "An aim, purpose, or plan."
      },
      {
        "word": "barren",
        "definition": "Too poor or dry to produce much or any vegetation; bleak and empty."
      },
      {
        "word": "Peninsula",
        "definition": "A piece of land almost surrounded by water or projecting out into a body of water."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "intention",
      "barren",
      "Peninsula"
    ],
    "exercises": [
      {
        "question": "What happened to the Holy Ka'ba over time before Abraham was sent to reconstruct it?",
        "options": [
          "It had been completely preserved by the local people",
          "It had been relocated to a different country",
          "It had been lost in the distant past"
        ],
        "correctAnswer": 2,
        "explanation": "The Ka'ba was lost in the distant past and needed to be reconstructed as the center of monotheism.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-28",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! The Ka'ba was lost in the distant past and needed to be reconstructed as the center of monotheism.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 29,
    "type": "story",
    "title": "Mecca Is Settled",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-29/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F28_Chapter_29_Mecca_Is_Settled.mp3?alt=media&token=780ddf21-7c82-4189-9eb7-08eb04c16bbb",
    "content": "Ibn Abbas, a companion of Prophet Muhammad (pbuh) who narrated many hadiths, said “ Ishmael's mother went on suckling Ishmael and drinking from the water. When the water in the water skin was used up, she became thirsty and her child also became thirsty. She started looking at Ishmael in grief. Hajar began searching for water. Leaving Ishmael under a tree, she began climbing the rocky slope of a nearby hill, Safa. ‘Maybe there is a caravan passing by,’ she thought to herself. Then, she moved across to the opposite hill, Marwa, but still saw nothing. She ran between the two hills of Safa and Marwa seven times looking for signs of water or help. Hagar’s patient search for water is directly comparable to the running (sa’y) between Safa and Marwah.” Her effort was later symbolized by all Muslims in Hajj. Actually, there is almost no difference between the pilgrimage called by Abraham (pbuh) and the pilgrimage of Islam.\n\nExhausted and sad, she heard a voice but could not find where it came from.",
    "vocabulary": [
      {
        "word": "narrated",
        "definition": "Told a story or related an event or account."
      },
      {
        "word": "slope",
        "definition": "An inclined surface or side of a hill."
      }
    ],
    "hotspots": [],
// c08b

// c09a
    "animatedWords": [
      "narrated",
      "slope"
    ],
    "exercises": [
      {
        "question": "What is the lasting significance of Hajar running between the two hills?",
        "options": [
          "It became a core ritual (Sa'y) for millions of pilgrims during Hajj and Umrah",
          "It showed the local tribes how to find water in the desert",
          "It was forgotten over time"
        ],
        "correctAnswer": 0,
        "explanation": "Her desperate search for water became an eternal act of worship in Islam.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-29",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! Her desperate search for water became an eternal act of worship in Islam.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 30,
    "type": "story",
    "title": "Abraham and Ishmael",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-30/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F29_Chapter_30_Abraham_and_Ishmael.mp3?alt=media&token=be356476-581b-4c87-8f05-e0354e668b60",
    "content": "Looking down into the valley, Hagar saw the angel Gabriel standing next to her son, Ishmael. The angel hit the ground with his heel, and water immediately flowed out. It was a miracle! Hajar quickly made a small basin around the water to stop it from spreading, and she filled her water skin. The angel said, \"Do not be afraid. This is the place for the House of Allah, which this boy and his father will build. Allah never abandons his people.” This well, called Zamzam, is flowing to this day in the city of Mecca in the Arabian Peninsula. This name was given to the water because the word Zemzem means “abundant and flowing, the voice of Gabriel, the sound water makes as it flows, the sound of thunder, a sound whose origin is unknown. Not long after that, the tribe of Jurham (Cürhüm) that was moving from southern Arabia, Yemen, stopped by the valley of Mecca. They had seen the unusual sight of a bird flying in its direction, which could only mean the presence of water.",
    "vocabulary": [],
    "hotspots": [],
    "animatedWords": [],
    "exercises": [
      {
        "question": "How was the Zamzam water discovered in the barren valley?",
        "options": [
          "Abraham dug a deep well before leaving",
          "Heavy rain filled the valley with water",
          "The angel Gabriel struck the earth, causing the water to well up"
        ],
        "correctAnswer": 2,
        "explanation": "The angel Gabriel struck the ground beside baby Ishmael, revealing the Zamzam well.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-30",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! The angel Gabriel struck the ground beside baby Ishmael, revealing the Zamzam well.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 31,
    "type": "story",
    "title": "The Dream of Sacrifice",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-31/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F30_Chapter_31_The_Dream_of_Sacrifice.mp3?alt=media&token=8dfa0f15-bcf1-4cdf-88ab-ce6ab2c10930",
    "content": "They eventually settled in Mecca and Ishmael grew up among them. Ishmael learned Arabic from them and they all loved and admired Ishmael because of his gentle character. Growing up among the Jurham tribe, Ishmael married the daughter of one of their leaders. Abraham (pbuh) had a dream that he sacrificed his son, which was to be the ultimate test of his faith. In a dream, Abraham (pbuh) learnt that he must sacrifice his son. Joseph (pbuh) and Muhammad (pbuh), two of Abraham (pbuh)'s offspring, also had important dreams. “So We gave him the glad tidings of a forbearing boy. And when he (his son) was old enough to walk with him, he said: 'O my son! I have seen in a dream that I am slaughtering you (offer you in sacrifice to Allah), so look what do you think!' 'O my father! Do that which you are commanded InshAllah (if Allah wills), you shall find me of the patient” (Surah Sâffât: 101–102). Ishmael knew the task of his father.",
    "vocabulary": [
      {
        "word": "eventually",
        "definition": "In the end, especially after a long time or a series of events."
      },
      {
        "word": "gentle",
        "definition": "Mild, kind, or tender in temperament or character."
      },
      {
        "word": "glad tidings",
        "definition": "Good news or joyful announcements."
      },
      {
        "word": "slaughtering",
        "definition": "Offering or killing an animal as a sacrifice."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "eventually",
      "gentle",
      "glad tidings",
      "slaughtering"
    ],
    "exercises": [
      {
        "question": "Why did the Jurham tribe decide to settle in the valley of Mecca?",
        "options": [
          "They wanted to build a large city for trading",
          "They were attracted by the presence of birds indicating the Zamzam water",
          "They were running away from an enemy"
        ],
        "correctAnswer": 1,
        "explanation": "They saw birds circling, which meant water was present, and asked Hajar for permission to settle.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-31",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! They saw birds circling, which meant water was present, and asked Hajar for permission to settle.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 32,
    "type": "story",
    "title": "Submission and Mercy",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-32/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F31_Chapter_32_Submission_and_Mercy.mp3?alt=media&token=0926084c-7ad8-4d28-9048-780687b18d8d",
    "content": "The Allah-fearing son of a faithful father promised to obey Allah. Abraham (pbuh) took his son to the place where he was to be sacrificed and laid him. “And when they both obeyed Allah's command, and he (Abraham (pbuh)) laid him (Ishmael) face down upon his forehead (in order to be sacrificed)” (Surah Sâffât: 103). A voice stopped Abraham (pbuh) just as his knife was about to near Ishmael: “We called to him: O Abraham: You have indeed fulfilled the vision. Thus do We reward the good. That verily was a clear test” (Surah Sâffât: 104–106). Here, Abraham (pbuh) showed his willingness to sacrifice all his belongings for Allah. Because of this, Allah made him the leader of humanity and brought Messengers from his children. “And when Allah tested Abraham with various commands, and he proved true to each one. He (Allah) said, indeed I have made you a leader of humanity.\n\nHe (Abraham) said (asking of Allah), ‘and from my children” (Surah Baqarah: 124). It was only a test; the proxy was a ram or goat.",
    "vocabulary": [
      {
        "word": "proxy",
        "definition": "A person or thing authorized to act or serve as a substitute for another."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "proxy"
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was the great reward from Allah for Abraham and Ishmael's supreme obedience?",
        "options": [
          "He gave them endless wealth.",
          "He replaced Ishmael with a ram and called out to Abraham that he had fulfilled the vision.",
          "He sent them to another land.",
          "He made them rulers over all of Arabia."
        ],
        "correctAnswer": 1,
        "explanation": "He rewarded them for their ultimate submission and spared Ishmael.",
        "id": "b2-ch-ex-32",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! He rewarded them for their ultimate submission and spared Ishmael.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 33,
    "type": "story",
    "title": "Building the Ka‘ba",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-33/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F32_Chapter_33_Building_the_Ka%E2%80%98ba.mp3?alt=media&token=64ffd38a-fbaf-4181-b4d2-c9685a826820",
    "content": "Every year, hundreds of millions of Muslims perform this act of trust in Allah during the days of Hajj. This day is called \"The Day of Sacrifice\" or \"The Celebration of Sacrifice. \" At Abraham (pbuh)’s time, the practice of sacrificing the firstborn children was quite widespread in Arabia, Palestine, and Egypt. Actually, sacrificing animals was part of Abraham's religion of monotheism. In Abraham (pbuh)’s religion, animal sacrifice was equivalent to human life, and for the people of that era, it meant safety, especially for children. In fact, animal sacrifice is not a form of worship that began with Abraham (pbuh). Prophets before him also sacrificed animals, while idolaters sacrificed humans. Abraham (pbuh) returned to Palestine. After a separation of several years, the father and son came together again. At that time, Ishmael was about thirty years old. Father and son embraced each other again with longing. Both were crying with joy. This time, they were going to build the honored House of Allah, which is the center of worship, the direction people turn their face while praying, and make this place the site of Islamic pilgrimage, Hajj.",
    "vocabulary": [
      {
        "word": "equivalent to",
        "definition": "Equal in value, amount, function, or meaning."
      }
    ],
    "hotspots": [],
    "animatedWords": [
      "equivalent to"
    ],
    "exercises": [
      {
        "question": "What does the replacement of Ishmael with an animal symbolize?",
        "options": [
          "That Allah desires human sacrifice in certain rare situations",
          "That Allah did not actually want Ishmael's death, but tested their obedience",
          "That animals are more valuable than humans"
        ],
        "correctAnswer": 1,
        "explanation": "It symbolizes that Allah rewards complete faith and submission, and does not desire human sacrifice.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-33",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
// c09b

// c10a
          "correct": "Correct! It symbolizes that Allah rewards complete faith and submission, and does not desire human sacrifice.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 34,
    "type": "story",
    "title": "The First Call to Pilgrimage",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-34/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F33_Chapter_34_The_First_Call_to_Pilgrimage.mp3?alt=media&token=0e5a8118-0498-4e50-a826-e6aaca1b8cc4",
    "content": "Prophet Muhammad (pbuh) said: “Indeed this place has been made sacred by Allah since the day He created the heavens and the earth, and it will remain so until the Day of Judgment” (Sunan an-Nasa'i, 2874). Abraham (pbuh) said to Ishmael: “O Ishmael, Allah has commanded me to do an important task, and you will help me in this task.” Ishmael replied, “I will help you for sure.” Abraham (pbuh) said, “The Almighty Allah commanded me to build a house for Himself.” Father and son found the foundations of the old structure and began to build the Ka‘ba on it. When the building became high and the old man Abraham (pbuh) could no longer lift the stones to such a high position, he stood over the stone of Al-Maqam and Ishmael carried on handing him the stones, and both of them were saying: “O our Lord! Accept this service from us; verily You are the All Hearer, the All Knower” (Surah Baqarah: 127).\n\nAbraham (pbuh) traveled to Mecca in response to Allah’s command to establish the sacred Kaba.",
    "vocabulary": [],
    "hotspots": [],
    "animatedWords": [],
    "exercises": [
      {
        "question": "What is the theological significance of reconstructing the Ka'ba?",
        "options": [
          "It served as the first center of monotheism for humanity to come together and worship Allah",
          "It was built mainly so Abraham could live there",
          "It was designed as an impregnable fortress"
        ],
        "correctAnswer": 0,
        "explanation": "The Ka'ba was established as a universal center to declare the Oneness of Allah.",
        "type": "multiple-choice",
        "id": "b2-ch-ex-34",
        "title": "Comprehension Check",
        "instructions": "Answer the following question based on the chapter.",
        "feedback": {
          "correct": "Correct! The Ka'ba was established as a universal center to declare the Oneness of Allah.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 35,
    "type": "story",
    "title": "The Legacy of Abraham",
    "image": "https://picsum.photos/seed/abraham-b2-chapter-35/1200/800",
    "audioUrl": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F34_Chapter_35_The_Legacy_of_Abraham.mp3?alt=media&token=a7065900-a5e2-4469-aa93-a4a284b627f5",
    "content": "He was but the restorer of the structure that was originally built long before. No other place of worship is older than the Ka‘ba of Mecca. Reconstruction of the Ka‘ba and the call to pilgrimage (see Surah Hajj: 27) are clear evidence that Prophet Abraham (pbuh) established the religion and invited those living in that region at that time to embrace it. This belief is known as Hanifism. Reconstructing the Holy Kaba was the completion of Abraham (pbuh)’s mission. He built a place of worship for all people, not just people of a chosen race or color. This actually reminds us of the oneness of Allah. During Hajj Muslims are reminded of many events of Allah’s beloved “friend” Abraham (pbuh) and his family. Before his death, Abraham (pbuh) left Palestine to Isaac and Mecca to Ishmael, and sent his other children eastward. His son Ishmael taught his father Abraham (pbuh)'s faith in the Hijaz region, and in this region, his Hanif faith coexisted with idolatry.\n\nThe ‘Beloved servant of Allah’ about whom Allah said, “I will make you a leader to the nations,” returned to Palestine and died there. When people have lost their way and are looking for salvation, Abraham (pbuh) has always been there to show them the right path. This is especially true in societies where morals have worsened and the real path that Allah showed them has been corrupted.",
    "vocabulary": [],
    "hotspots": [],
    "animatedWords": [],
    "exercises": [
      {
        "type": "true-false",
        "question": "Did Abraham trust in Allah?",
        "correctAnswer": true,
        "explanation": "Abraham always relied on Allah.",
        "id": "b2-ch-ex-35",
        "title": "Comprehension Check",
        "instructions": "Decide if the statement is true or false.",
        "feedback": {
          "correct": "Correct! Abraham always relied on Allah.",
          "incorrect": "Incorrect. Please review the chapter."
        }
      }
    ]
  },
  {
    "id": 36,
    "type": "story",
    "title": "References",
    "image": "",
    "content": "Aslan, Ahmet. \"Hz. İbrâhim’in (a.s.) Urfa’da Doğduğuna Dair Rivayetlerin Değerlendirilmesi,\" Uluslararası Hz. İbrahim (a.s.) ve Nübüvvet Sempozyumu, Tebliğler Kitabı, İstanbul, 2019.\n\nBüyükaşçı, Mustafa Sabri. \"Zemzem,\" TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/zemzem.\n\nFazlur Rahman. Major Themes of the Qur'ān, University of Chicago Press, 2009.\n\nHamidullah, Muhammad. Introduction to Islam, Ankara, 2011.\n\nHarman, Ömer Faruk. \"İbrâhim,\" TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/ibrahim--peygamber.\n\nIbn Kathir. Stories of the Prophets, https://docs.google.com/file.\n\nKöksal, Mustafa Asım. Peygamberler Tarihi, Ankara, 2007.\n\nKuzgun, Şaban. \"Hanîf,\" TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/hanif.\n\nKuzgun, Şaban. İslam Kaynaklarına Göre Hz. İbrahim ve Haniflik, Ankara, 1985.\n\nÖnkal, Ahmet. \"Cürhüm (Benî Cürhüm),\" TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/curhum-beni-curhum.\n\nT.C. Diyanet İşleri Başkanlığı. Kur’an-ı Kerim Meali, https://kuran.diyanet.gov.tr.",
    "vocabulary": [],
    "hotspots": [],
    "animatedWords": []
  },
  {
    id: 37,
    type: "exercises",
    title: "B2 Final Review & Reflection",
    image: "https://picsum.photos/seed/review-abraham-b2/1200/800",
    content: "Synthesize your understanding of the Prophet Abraham (pbuh) narrative through these advanced exercises.",
    exercises: abrahamB2FinalReviewExercises
  },
  {
    "type": "glossary",
    "title": "B2 Master Glossary - Part 1",
    "content": "Academic and narrative vocabulary from the first half of the B2 story.",
    "image": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fimages%2FAbr_B1_Chapter2.1.webp?alt=media&token=85579899-74d3-46bd-9def-4c3eac374825",
    "vocabulary": [
      {
        "word": "Idolatry",
        "definition": "The worship of false gods."
      },
      {
        "word": "Idolater",
        "definition": "A person who worships idols or false gods."
      },
      {
        "word": "Messenger",
        "definition": "A person who carries a message from Allah."
      },
      {
        "word": "Challenged",
        "definition": "Defied or confronted by demanding proof or explanation."
      },
      {
        "word": "Worship",
        "definition": "To show high respect, honor, and devotion to a deity."
      },
      {
        "word": "Judaism",
        "definition": "The monotheistic religion of the Jewish people, tracing its origin to Abraham."
      },
      {
        "word": "Christianity",
        "definition": "The monotheistic religion based on the life and teachings of Jesus Christ."
      },
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
      },
      {
        "word": "Abraham",
        "definition": "Prophet Abraham (pbuh), a key patriarch of faith, monotheism, and father of prophets."
      },
      {
        "word": "Family",
        "definition": "A group of individuals related by blood, marriage, or strong spiritual ties."
      },
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
      },
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
        "word": "Shocking",
        "definition": "Causing intense surprise, disbelief, or emotional disturbance."
      },
      {
        "word": "People",
        "definition": "A group of human beings sharing a common language, culture, or faith."
      },
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
      },
      {
// c10b

// c11a
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
        "word": "Prophet",
        "definition": "A person chosen by Allah as a messenger to guide people to the truth."
      },
      {
        "word": "Before",
        "definition": "In previous time; earlier than a specified point of time."
      },
      {
        "word": "Punish",
        "definition": "To inflict a penalty or pain on someone for an offense or wrongdoing."
      },
      {
        "word": "Guidance",
        "definition": "Advice or information aimed at resolving a problem."
      },
      {
        "word": "Resurrection",
        "definition": "The concept of coming back to life after death."
      },
      {
        "word": "Universe",
        "definition": "All existing matter and space considered as a whole."
      }
    ],
    "id": 38
  },
  {
    "type": "glossary",
    "title": "B2 Master Glossary - Part 2",
    "content": "Academic and narrative vocabulary from the second half of the B2 story.",
    "image": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fimages%2FAbr_B1_Chapter1.1.webp?alt=media&token=38a8e1cb-d926-4444-baa1-4eaecd47cf5c",
    "vocabulary": [
      {
        "word": "However",
        "definition": "But, nevertheless, or in spite of that."
      },
      {
        "word": "Idolaters",
        "definition": "People who worship physical statues, icons, or false deities."
      },
      {
        "word": "Foolishness",
        "definition": "Lack of good sense or judgment."
      },
      {
        "word": "Called",
        "definition": "Named, designated, or summoned by a specific title or voice."
      },
      {
        "word": "Arrogance",
        "definition": "The quality of being overly proud."
      },
      {
        "word": "Flames",
        "definition": "The hot, glowing, burning masses of gas of an active fire."
      },
      {
        "word": "Reaching",
        "definition": "Stretching out or arriving at a certain point or destination."
      },
      {
        "word": "Miracle",
        "definition": "A surprising and welcome event explicable only by divine intervention."
      },
      {
        "word": "Despotic",
        "definition": "Of or typical of a despot; tyrannical."
      },
      {
        "word": "Tested",
        "definition": "Examined or put under hardship to prove strength of faith or character."
      },
      {
        "word": "Declared",
        "definition": "Announced, proclaimed, or stated clearly and officially."
      },
      {
        "word": "Totally",
        "definition": "Completely, entirely, or without reservation."
      },
      {
        "word": "Foolish",
        "definition": "Lacking good sense, wisdom, or judgment."
      },
      {
        "word": "Emigrate",
        "definition": "Leave one's own country to settle permanently elsewhere."
      },
      {
        "word": "Righteousness",
        "definition": "The quality of being morally right or justifiable."
      },
      {
        "word": "Offspring",
        "definition": "A person's child or children."
      },
      {
        "word": "Cultivated",
        "definition": "Prepared and used for raising crops."
      },
      {
        "word": "Valley",
        "definition": "A low area of land between hills or mountains, often with a river."
      },
      {
        "word": "Leather",
        "definition": "Animal skin specially treated to preserve it and make it flexible."
      },
      {
        "word": "Cultivation",
        "definition": "The preparation and act of tilling or growing crops on land."
      },
      {
        "word": "Pilgrimage",
        "definition": "A journey to a sacred place."
      },
      {
        "word": "Exhausted",
        "definition": "Drained of physical or mental resources; very tired."
      },
      {
        "word": "Companion",
        "definition": "A close associate, friend, or partner who shares experiences."
      },
      {
        "word": "Abundant",
        "definition": "Existing or available in large quantities; plentiful."
      },
      {
        "word": "Looking",
        "definition": "Directing one's sight or attention to find or observe someone or something."
      },
      {
        "word": "Sacrifice",
        "definition": "An act of surrendering a possession as an offering to God."
      },
      {
        "word": "Forbearing",
        "definition": "Patient and restrained."
      },
      {
        "word": "Fearing",
        "definition": "Feeling anxiety, awe, or reverence, or being afraid of something."
      },
      {
        "word": "Faithful",
        "definition": "Loyal, trustworthy, and firm in religious belief or devotion."
      },
      {
        "word": "Equivalent",
        "definition": "Equal in value, amount, or meaning."
      },
      {
        "word": "Muhammad",
        "definition": "Prophet Muhammad (pbuh), the final messenger of Allah, a descendant of Abraham."
      }
    ],
    "id": 39
  },
  {
    "id": 40,
    "type": "final-challenge",
    "title": "Final Challenge",
    "image": "https://picsum.photos/seed/final-abraham-b2/1200/800",
    "content": "It is time to test your comprehensive understanding of the B2 Prophet Abraham story.",
    "vocabulary": [],
    "hotspots": [],
    "animatedWords": [],
    "exercises": []
  }
// c11b
];

export type AbrahamB2VocabSeed = readonly [en: string, ar: string, enDefinition: string, arDefinition: string];
const v = (en: string, ar: string, enDefinition: string, arDefinition: string): AbrahamB2VocabSeed => [en, ar, enDefinition, arDefinition];
export const abrahamB2CanonicalVocabulary: Record<number, readonly AbrahamB2VocabSeed[]> = {
// k01a
  1: [
    v('monotheistic belief', 'العقيدة التوحيدية', 'Belief that Allah is One and has no partner.', 'الإيمان بأن الله واحد لا شريك له.'),
    v('fundamental figure', 'الشخصية الأساسية', 'A person of central importance in a religious or historical tradition.', 'شخصية ذات أهمية محورية في تقليد ديني أو تاريخي.'),
    v('direct forefather', 'الجد المباشر', 'A direct ancestor in a family line.', 'جد يقع مباشرة في سلسلة النسب.'),
    v('Allah’s friend', 'خليل الله', 'A unique title of closeness and devotion given to Abraham.', 'لقب فريد يدل على القرب والمحبة والطاعة لله.'),
    v('idol-worshipping nation', 'يعبدون الأصنام', 'A society in which the worship of idols is widespread.', 'قوم تنتشر بينهم عبادة الأصنام.'),
  ],
  2: [
    v('life mission', 'مهمة حياته', 'The central purpose guiding a person’s life and actions.', 'الغاية الأساسية التي توجه حياة الإنسان وأعماله.'),
    v('morally upright', 'مستقيم في الأخلاق', 'Behaving according to sound moral principles.', 'ملتزم بالسلوك القويم والمبادئ الأخلاقية.'),
    v('through reasoning', 'عن طريق العقل والتفكير', 'By using logical thought to reach a conclusion.', 'باستخدام التفكير العقلي والمنطقي للوصول إلى نتيجة.'),
    v('human capacity', 'قدرات الإنسان', 'The ability of human beings to think, act, or develop.', 'قدرة الإنسان على التفكير والعمل والتطور.'),
    v('acts of worship', 'العبادات', 'Religious actions performed as devotion to Allah.', 'أعمال دينية يؤديها المؤمن تقربًا إلى الله.'),
  ],
  3: [
    v('became mixed with idolatry', 'اختلط هذا الاعتقاد بالشرك', 'Lost its original purity by becoming combined with idol worship.', 'فقد صفاءه الأصلي حين اختلط بالشرك وعبادة غير الله.'),
    v('corrupted', 'التحريف', 'Changed from an original form in a damaging or misleading way.', 'تغيير الشيء عن أصله بصورة تفسد معناه أو حقيقته.'),
    v('first revelation', 'الوحي الأول', 'The first divine message received by a prophet.', 'أول رسالة أو وحي إلهي يتلقاه النبي.'),
    v('prophethood', 'بنبوة', 'The status and mission of being a prophet.', 'مقام النبي ومهمته في تبليغ رسالة الله.'),
    v('burning sun', 'الشمس الحارقة', 'Extremely hot sunlight capable of causing suffering.', 'شمس شديدة الحرارة تسبب المشقة والألم.'),
  ],
  4: [
    v('Islamic sources', 'المصادر الإسلامية', 'Texts and reports used within the Islamic scholarly tradition.', 'نصوص وروايات يعتمد عليها التراث العلمي الإسلامي.'),
    v('migrated from there', 'هاجر من هناك', 'Moved from one region to settle in another.', 'انتقل من منطقة إلى أخرى للإقامة فيها.'),
    v('prosperous', 'مزدهرة', 'Economically or materially successful and flourishing.', 'ناجحة ومتقدمة من الناحية المادية والاقتصادية.'),
    v('agriculture and industry', 'الزراعة والصناعة', 'Two major areas of economic production.', 'مجالان أساسيان من مجالات الإنتاج الاقتصادي.'),
    v('kings and rulers', 'ملوكهم وحكامهم', 'People holding political authority over a society.', 'أشخاص يملكون السلطة السياسية على المجتمع.'),
  ],
  5: [
    v('whole system', 'النظام كله', 'The complete social or political structure, not one isolated part.', 'البنية الاجتماعية أو السياسية كاملة لا جزءًا منفردًا منها.'),
    v('fortunetellers', 'العرافين', 'People claiming to predict events through supernatural knowledge.', 'أشخاص يزعمون معرفة المستقبل بوسائل غيبية.'),
    v('astrologers', 'المنجمين', 'People who interpret stars as signs of human events.', 'أشخاص يربطون حركة النجوم بأحداث البشر.'),
    v('reign', 'حكم نمرود', 'The period or authority of a ruler’s government.', 'مدة حكم الملك أو سلطته على البلاد.'),
    v('throne', 'يهدد عرشه', 'A symbol of royal power and political rule.', 'رمز للسلطة الملكية والحكم السياسي.'),
  ],
  6: [
    v('sound judgement', 'رشده', 'The ability to make wise and reasonable decisions.', 'القدرة على اتخاذ قرارات حكيمة وصائبة.'),
    v('wisdom', 'الحكمة', 'Deep understanding used to make good judgments.', 'فهم عميق يساعد على حسن الحكم والتصرف.'),
    v('sculptures', 'تماثيل وأصناما', 'Figures shaped from material such as stone or wood.', 'أشكال مصنوعة من الحجر أو الخشب ونحوهما.'),
    v('spontaneously', 'تلقائيا', 'Naturally and without being planned in advance.', 'بصورة طبيعية ومن غير تخطيط مسبق.'),
    v('Chief God', 'الإله الأكبر', 'The deity regarded as highest within a polytheistic system.', 'الإله الذي يعد الأعلى في نظام متعدد الآلهة.'),
  ],
  7: [
    v('reasonable person', 'شخص عاقل', 'A person capable of logical and sensible judgment.', 'شخص قادر على التفكير المنطقي والحكم السليم.'),
    v('lifeless', 'بلا حياة', 'Having no life or living power.', 'خالي من الحياة ولا يملك قدرة الكائن الحي.'),
    v('entirely helpless', 'عاجزة تماما', 'Completely unable to act or defend oneself.', 'غير قادر إطلاقًا على الفعل أو الدفاع عن النفس.'),
    v('niche', 'محراب', 'A recessed or designated sacred space in a place of worship.', 'موضع مخصص أو مجوف داخل مكان العبادة.'),
    v('capable of hearing', 'قادرة على سماع دعائهم', 'Able to receive and respond to sound or prayer.', 'قادر على سماع الصوت أو الدعاء والاستجابة له.'),
  ],
  8: [
    v('priest', 'كاهنا', 'A religious official serving in a place of worship.', 'شخص يتولى وظيفة دينية في مكان للعبادة.'),
    v('displaying his hatred', 'إظهار كراهيته', 'Openly showing strong rejection or dislike.', 'إظهار الرفض أو الكراهية الشديدة بصورة واضحة.'),
    v('cave', 'كهفا', 'A natural hollow space inside a mountain or rock.', 'تجويف طبيعي داخل جبل أو صخر.'),
    v('certainty', 'الموقنين', 'A state of firm conviction without serious doubt.', 'حالة من اليقين الراسخ من غير شك مؤثر.'),
    v('those that set', 'الآفلين', 'Celestial objects that disappear below the horizon.', 'الأجرام التي تغيب وتختفي عن الأفق.'),
  ],
  9: [
    v('erring people', 'القوم الضالين', 'People who have moved away from the correct path.', 'قوم ابتعدوا عن الطريق أو الاعتقاد الصحيح.'),
    v('innocent', 'بريء', 'Free from responsibility for or association with something wrong.', 'منزّه عن المشاركة في أمر باطل أو المسؤولية عنه.'),
    v('heavenly bodies', 'الأجرام السماوية', 'Natural objects in space such as stars, planets, the sun, and the moon.', 'أجسام طبيعية في السماء كالنجوم والكواكب والشمس والقمر.'),
    v('astronomical objects', 'النجوم والكويكبات', 'Objects studied as part of the physical universe beyond Earth.', 'أجرام يدرسها علم الفلك خارج الأرض.'),
    v('Creator’s command', 'بأمر الخالق', 'The authority by which created things follow an ordered system.', 'الأمر الذي تخضع له المخلوقات في نظامها.'),
  ],
  10: [
    v('evidently created', 'مخلوقة بوضوح', 'Clearly showing the characteristics of something created rather than eternal.', 'تظهر بوضوح صفات المخلوق لا صفات الأزلي.'),
    v('everlasting', 'أزلي لا يزول', 'Continuing forever without ending or disappearing.', 'دائم لا ينتهي ولا يزول.'),
    v('unworthy of worship', 'غير مستحقة للعبادة', 'Not deserving religious devotion or worship.', 'لا تستحق أن تصرف لها العبادة.'),
    v('rational thinking', 'تفكير إبراهيم العقلي', 'Reasoning based on logic and evidence.', 'تفكير يعتمد على العقل والمنطق والدليل.'),
    v('uncover the truth', 'كشف الحقيقة', 'To reveal what is actually true after examination.', 'إظهار الحقيقة بعد البحث والنظر.'),
  ],
// k01b
// k02a
  11: [
    v('present evidence', 'تقديم الأدلة', 'To offer reasons or proof in support of a claim.', 'عرض حجج أو براهين لتأييد ادعاء.'),
    v('correctness of their beliefs', 'صحة معتقداتهم', 'The claimed truth or validity of what a group believes.', 'مدى صحة أو صدق ما يعتقده قوم.'),
    v('ridiculousness', 'سخافة ادعاءاتهم', 'The quality of being unreasonable or impossible to take seriously.', 'كون الادعاء غير معقول ولا يستند إلى حجة قوية.'),
    v('threatened him', 'هددوه', 'Warned someone of intended harm or punishment.', 'أنذروه بإيقاع الأذى أو العقوبة.'),
    v('punishment of their gods', 'عقاب آلهتهم', 'Harm they believed their deities could inflict.', 'الأذى الذي اعتقدوا أن آلهتهم تستطيع إيقاعه.'),
  ],
  12: [
    v('paid no heed', 'لم يلتفت', 'Ignored a warning or refused to give it attention.', 'لم يهتم بالتهديد ولم يجعله يغير موقفه.'),
    v('benefit and harm', 'النفع والضر', 'Positive and negative effects that may reach a person.', 'ما يصل إلى الإنسان من خير أو أذى.'),
    v('mindful', 'لتذكير قومه', 'Consciously aware of an important truth or duty.', 'واعٍ بحقيقة أو واجب مهم ومتذكر له.'),
    v('evident error', 'ضلال مبين', 'A mistake or false belief that is clearly visible.', 'خطأ أو اعتقاد باطل ظاهر بوضوح.'),
    v('bitter struggle', 'معركة حادة', 'A severe and continuing conflict between opposing sides.', 'صراع شديد ومستمر بين طرفين متعارضين.'),
  ],
  13: [
    v('duty', 'من واجبه', 'A moral responsibility a person believes must be fulfilled.', 'مسؤولية أخلاقية يرى الإنسان وجوب القيام بها.'),
    v('embarrassed', 'بالإحراج', 'Made to feel ashamed or socially uncomfortable.', 'شعر بالخجل أو الضيق أمام الآخرين.'),
    v('fatherly love', 'الحب الأبوي', 'Affection associated with the relationship between a father and child.', 'المحبة المرتبطة بعلاقة الأب بابنه.'),
    v('straight way', 'صراطا سويا', 'A correct and morally sound path.', 'طريق مستقيم صحيح من الناحية الدينية والأخلاقية.'),
    v('disobedient', 'عصيا', 'Refusing to obey rightful authority or command.', 'رافض للطاعة ومخالف للأمر.'),
  ],
  14: [
    v('harsh behavior', 'سلوك والده القاسي', 'Severe or unkind conduct toward another person.', 'تصرف شديد أو غير لين تجاه شخص آخر.'),
    v('negative consequences', 'عواقب سلبية', 'Harmful results that may follow an action.', 'نتائج ضارة قد تترتب على فعل ما.'),
    v('cause of an illness', 'سبب المرض', 'The underlying factor responsible for a disease or problem.', 'العامل الأساسي الذي يؤدي إلى مرض أو مشكلة.'),
    v('clever judge', 'القاضي الذكي', 'A judge who reasons carefully to uncover facts.', 'قاض يستخدم التفكير الدقيق لكشف الحقيقة.'),
    v('suspect', 'المشتبه به', 'A person believed possibly to be responsible for an act.', 'شخص يظن أنه قد يكون مسؤولًا عن فعل.'),
  ],
  15: [
    v('defend their beliefs', 'الدفاع عن معتقداتهم', 'To give arguments in support of what they believe.', 'تقديم حجج لتأييد ما يؤمنون به.'),
    v('confirmed their belief', 'يؤكد إيمانهم', 'Made an existing belief seem more certain to them.', 'جعل اعتقادهم القائم يبدو أكثر ثبوتًا لديهم.'),
    v('worthy of worship', 'يستحق العبادة', 'Deserving religious devotion and worship.', 'جدير بأن تصرف له العبادة.'),
    v('regulates all affairs', 'مدبر شؤون الحياة', 'Controls and orders the different matters of existence.', 'يدبر وينظم شؤون الحياة المختلفة.'),
    v('persuade', 'ولإقناعهم', 'To lead someone to accept an idea through reasons or evidence.', 'جعل شخص يقبل فكرة عن طريق الحجة والدليل.'),
  ],
  16: [
    v('beauty of Allah\'s creation', 'جمال خلق الله', 'The order and excellence seen in what Allah has created.', 'ما يظهر في خلق الله من نظام وحسن.'),
    v('His power', 'قدرته', 'The ability and authority to bring about what He wills.', 'القدرة والسلطان على إيجاد ما يشاء.'),
    v('His wisdom', 'حكمته', 'Perfect knowledge expressed in right and purposeful action.', 'العلم التام الذي يظهر في الفعل الصحيح ذي الغاية.'),
    v('offers guidance', 'هدى عباده', 'Directs people toward the right path.', 'يرشد الناس إلى الطريق الصحيح.'),
    v('heals the sick', 'يشفي المرضى', 'Restores health to people who are ill.', 'يعيد العافية إلى من أصابه المرض.'),
  ],
  17: [
    v('held on tightly', 'تمسكوا بشدة', 'Refused to give up a belief or practice.', 'رفضوا ترك اعتقاد أو ممارسة وتمسكوا بها.'),
    v('great celebration', 'احتفالا كبيرا', 'A major public festival or communal event.', 'مناسبة عامة كبيرة يشارك فيها المجتمع.'),
    v('priests', 'الكهنة', 'Religious officials responsible for ritual duties.', 'أشخاص يتولون وظائف وشعائر دينية.'),
    v('offerings', 'قرابين', 'Objects or food presented as acts of religious devotion.', 'أشياء أو طعام يقدم تعبّدًا وتقربًا.'),
    v('silent and rigid', 'صامتا جامدا', 'Unable to speak, move, or show life.', 'لا ينطق ولا يتحرك ولا تظهر فيه حياة.'),
  ],
  18: [
    v('mocking them', 'يسخر منها', 'Treating something as foolish through ridicule.', 'يتعامل معها باستهزاء لأنها تبدو له باطلة.'),
    v('false gods', 'الآلهة الباطلة', 'Beings or objects wrongly treated as divine.', 'معبودات تعامل على أنها آلهة وهي باطلة.'),
    v('practical proof', 'دليل عملي', 'Evidence demonstrated through an observable action.', 'برهان يظهر من خلال فعل يمكن ملاحظته.'),
    v('smashed into pieces', 'مكسرة إلى قطع', 'Broken violently into many separate parts.', 'محطمة إلى أجزاء كثيرة منفصلة.'),
    v('wrongdoers', 'الظالمين', 'People who act unjustly or commit serious wrongdoing.', 'أشخاص يرتكبون الظلم أو الخطأ الجسيم.'),
  ],
  19: [
    v('may witness', 'يشهدون', 'May observe an event directly and testify about it.', 'يرون الحدث مباشرة ويشهدون عليه.'),
    v('reverted', 'فرجعوا', 'Returned to an earlier state, position, or belief.', 'عادوا إلى موقف أو حال سابق.'),
    v('arrested and judged', 'باعتقال إبراهيم ومحاكمته', 'Taken into custody and subjected to a formal judgment.', 'القبض على شخص وإخضاعه للمحاكمة.'),
    v('demonstrate in public', 'ليظهر لهم أمام الناس', 'To prove or show something openly before others.', 'إظهار أمر وإثباته علنًا أمام الناس.'),
    v('undamaged', 'لا يزال سليما', 'Remaining whole and not physically harmed.', 'باق على حاله من غير كسر أو ضرر.'),
  ],
  20: [
    v('culprit', 'الجاني', 'The person or thing responsible for a wrongdoing.', 'الشخص أو الشيء المسؤول عن فعل خاطئ.'),
    v('arrogance', 'كبرياءهم', 'Excessive pride that prevents acceptance of truth.', 'غرور شديد يمنع صاحبه من قبول الحق.'),
    v('authority as tyrants', 'سلطتهم كطغاة', 'Power exercised through oppressive and unjust rule.', 'سلطة تمارس بالقهر والظلم.'),
    v('chains', 'بالسلاسل', 'Metal restraints used to prevent a person from moving freely.', 'قيود معدنية تمنع الإنسان من الحركة بحرية.'),
    v('catapult', 'منجنيقا', 'A device used to launch a heavy object over a distance.', 'آلة تستخدم لقذف جسم ثقيل إلى مسافة.'),
  ],
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