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
//__C05__
// c05b

// c06a
//__C06__
// c06b

// c07a
//__C07__
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