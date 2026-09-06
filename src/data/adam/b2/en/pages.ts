import { PageData } from '../../../../types';
import { adamB2FinalReviewExercises } from './exercises';

export const adamB2Pages: PageData[] = [
  {
    id: 1,
    type: 'story',
    title: 'Introduction',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_1.png?alt=media&token=f2ae6289-f8fa-4606-a89a-d1d8537a4394',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch1.mp3?alt=media&token=0b8932e8-d415-4e1b-846d-5b43c5e6c8a5',
    content: "Adam (pbuh) was the first human being to be created, and the first prophet who served as a guide and example for mankind. We learn his story from the Holy Qur'an. Based on the Holy Qur'an, the creation of Adam (pbuh) is not like the creation of other humans. He was created from clay without parents, as a miraculous sign of Allah's unlimited power. The story of Adam (pbuh) is told in several chapters (surahs) of the Holy Qur'an. These are Surah Baqarah, Surah Al-Imran, Surah A’raf, Surah Hijr, Surah Isra, Surah Kahf, Surah Taha, and Surah Sâd. In these surahs, Satan is portrayed as a rebel against Allah’s command but also as a rival and enemy of Adam (pbuh) rather than Allah.\n\nAdam (pbuh)’s tale (kıssa) is not symbolic or imaginary, but it is an original factual tale with historical correctness and reality from which many lessons and morals we can take. It also includes the Unseen (gaybî), and this makes the story fabulous. The tale provides us a uniquely key and deeply philosophical understanding of life. It clearly appears that human beings' earthly life is the scene of a division and contrast between good and evil as opposed to each other.",
    vocabulary: [
      { word: 'miraculous', definition: 'Occurring through divine or supernatural intervention.' },
      { word: 'fabulous', definition: 'Extraordinary, legendary, or related to a fable/tale.' },
      { word: 'philosophical', definition: 'Relating to the fundamental nature of knowledge, reality, and existence.' }
    ],
    hotspots: [
      { id: 'h1a', x: 30, y: 40, title: 'The First Prophet', description: 'Adam (pbuh) served as the initial guide for all of humanity.' },
      { id: 'h1b', x: 70, y: 60, title: 'Miraculous Creation', description: 'Adam (pbuh) was created from clay as a sign of Allah\'s power.' }
    ],
    animatedWords: ['miraculous', 'fabulous', 'philosophical'],
    exercises: [
      {
        id: 'qc-1',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'How was Adam (pbuh) created?',
        options: ['From light', 'From clay without parents', 'From fire'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 2,
    type: 'story',
    title: 'The Creation of Adam',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_2.png?alt=media&token=0859c3b7-a4b5-420c-a48d-8577e494ad6e',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch2.mp3?alt=media&token=a7ec7e2d-f33f-41c3-b6c8-5816abceea1a',
    content: "The material from which Adam (pbuh) was created is expressed in various verses (âyet) using different terms: earth (türâb), water (mâ’), clay (tîn), etc. These different expressions are used to describe both the composition and the various stages of mud, which is a mixture of water and soil. As an example, Surah Sâd, verse 71, informs that Allah created Adam (pbuh) out of clay, which is a humble material: “Your Lord said to the angels, ‘I am creating a human being from clay.’”\n\nProphet Muhammad (pbuh) also said: \"Allah created Adam (pbuh) from a handful of dust taken from different lands, so the children of Adam (pbuh) have been created according to the composition of the land. Therefore, from mankind we have white, red, black, and yellow ones; we have good and evil, ease and sorrow, and what comes in between them.\" (see Ebu Davud, Sünnet 16; Tirmizi, Tefsir 2/1) So, in essence, people are from the same soil and they have no superiority over one another due to the difference in their colors.\n\nIt is clear that Adam (pbuh) was not evolved from any other living being, but was created from the earth and was the first ancestor of a completely separate species of human being. He was given the necessary spiritual, moral, mental, and psychological abilities.",
    vocabulary: [
      { word: 'composition', definition: 'The nature of something\'s ingredients or constituents.' },
      { word: 'ancestor', definition: 'A person from whom one is descended.' },
      { word: 'species', definition: 'A group of living organisms capable of exchanging genes.' }
    ],
    hotspots: [
      { id: 'h2a', x: 50, y: 50, title: 'Humble Origin', description: 'The use of clay emphasizes the common origin of all humans.' },
      { id: 'h2b', x: 70, y: 30, title: 'Human Diversity', description: 'The hadith explains the diversity in human appearance and nature.' }
    ],
    animatedWords: ['composition', 'ancestor', 'species'],
    exercises: [
      {
        id: 'qc-2',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'What does the variety of soil used in creation represent?',
        options: ['The strength of humans', 'the diversity of human skin colors and human nature', 'The age of humanity'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 3,
    type: 'story',
    title: 'The Vicegerent & The Gift of Knowledge',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_3.png?alt=media&token=f05d3557-72b0-4a64-8f84-a94d7e18a2a8',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch3.mp3?alt=media&token=0dcc80e8-706d-4b22-85bd-2c269180bd8b',
    content: "To be a representative, Adam (pbuh) needed some extraordinary qualities. Allah breathed His own spirit into Adam (pbuh) (see Sâd: 72). Also, he had to be taught by Allah. Breathing Allah’s spirit into Adam (pbuh) shows the value that Allah gave him. It also means giving Adam (pbuh) life and the beginning of human existence. Allah’s spirit into Adam (pbuh) distinguishes him from the rest of the creatures, too. Then, He (Allah) taught him all the names.\n\n“And He taught Adam the names, all of them; then He presented them to the angels and said, ‘Tell Me the names of these, if you are sincere.’ They said, ‘Glory be to You! We have no knowledge except what You have taught us. It is You who are the Knowledgeable, the Wise.’ He said, ‘O Adam, tell them their names.’ And when he (Adam) told them their names, He said, ‘Did I not tell you that I know the secrets of the heavens and the earth, and that I know what you reveal and what you conceal?’ (Baqarah: 31-33)\n\nThe statement “Allah taught Adam (pbuh) all the names” points to the broadness of Adam (pbuh)’s knowledge. The names taught to Adam (pbuh) could be the fundamental knowledge of being human, thinking, forming logical judgments, and producing civilization and culture. The knowledge that was given to Adam (pbuh) means the beginning of the skill for learning and speaking language and using intelligence. The names refer to the fact that knowledge is the basis of science, technology, and culture.",
    vocabulary: [
      { word: 'vicegerent', definition: 'A steward or representative (Khalifa) appointed to exercise authority on behalf of a sovereign.' },
      { word: 'astonishment', definition: 'Great surprise or amazement.' },
      { word: 'extraordinary', definition: 'Very unusual or remarkable; beyond what is ordinary.' },
      { word: 'fundamental', definition: 'Forming a necessary base or core; of central importance.' }
    ],
    hotspots: [
      { id: 'h3a', x: 40, y: 30, title: 'The Vicegerency', description: 'Humanity\'s role as stewards of the Earth and its resources.' },
      { id: 'h3b', x: 60, y: 50, title: 'The Power of Knowledge', description: 'Intellectual capacity is the primary factor that elevates humanity.' }
    ],
    animatedWords: ['vicegerent', 'astonishment', 'extraordinary', 'fundamental'],
    exercises: [
      {
        id: 'qc-3',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'What does the role of a vicegerent (halîfe) primarily involve?',
        options: ['Ruling without any rules', 'Authority and responsibility to manage the Earth', 'Being equal to the angels'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 4,
    type: 'story',
    title: 'Angels\' Prostration & Iblis\'s Arrogance',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_5.png?alt=media&token=d8bcf1b1-a4ff-4768-971f-4893e40bb909',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch4.mp3?alt=media&token=c077f30d-5f0e-4030-a373-069abf985246',
    content: "The reason why Adam (pbuh) and his offspring are considered higher and more valuable than other beings (see Isra: 70) is because of the power of knowledge that Allah gave them.\n\nHowever, in the Qur’an, Allah mentions another type of knowledge, which is the revelation (vahiy) (see Nisâ: 163-165). He delivers it to mankind through the prophets. It is clear that human beings need both types of knowledge. These two types of knowledge are not alternatives to each other, but rather they complete one another. One is necessary for mankind to maintain his worldly life, and revelation is essential to understand his role, duty, and the order established by Allah. Having such honour and privilege of knowledge required even the angels to prostrate themselves before Adam (pbuh). Here, the tale reaches its rising action: ‘And We said to the angels, “Bow down to (prostrate) Adam.” They bowed down, except for Satan. He refused, was arrogant, and was one of the disbelievers.’ (Baqarah: 34) ‘Except for Satan. He was too proud, and one of the faithless.’ (Sâd: 74) He said, ‘O Satan, what prevented you from prostrating before what I created with My own hands? Are you too proud, or were you one of the exalted?’ (Sâd: 75) He (Satan) said, ‘I am better than he (Adam); You created me from fire, and You created him from clay.’” (Sâd: 76)",
    vocabulary: [
      { word: 'offspring', definition: 'A person\'s children or descendants.' },
      { word: 'alternatives', definition: 'One of two or more available possibilities.' },
      { word: 'revelation', definition: 'The divine disclosure to humans of something relating to human existence.' }
    ],
    hotspots: [
      { id: 'h5a', x: 30, y: 40, title: 'Angelic Respect', description: 'The angels recognized Adam\'s superior knowledge and capacity.' },
      { id: 'h5b', x: 70, y: 60, title: 'Equality of Origin', description: 'The text rejects superiority based on material origin or race.' }
    ],
    animatedWords: ['offspring', 'alternatives', 'revelation'],
    exercises: [
      {
        id: 'qc-4',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'Which two types of knowledge are essential for humanity according to the text?',
        options: ['Only worldly knowledge', 'Worldly knowledge and revelation (vahiy)', 'Only historical knowledge'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 5,
    type: 'story',
    title: 'Angels\' Prostration & Iblis\'s Arrogance',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_5.png?alt=media&token=d8bcf1b1-a4ff-4768-971f-4893e40bb909',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch5.mp3?alt=media&token=88331cdd-99ae-459f-a260-5b3f2351635f',
    content: "Angels admitted their inability and realized that Adam (pbuh) was the creature who knew what they did not know and that his capacity to learn was his most honourable quality. Adam (pbuh)’s knowledge included knowledge of the Creator, which is faith or Islam, as well as the knowledge he would need to inhabit and master the earth. All kinds of worldly knowledge are included in this. The prostration of angels to Adam (pbuh) is not a prostration of worship, because such prostration is solely to and for Allah. Angels’ prostration means obedience to Allah to show respect and admiration to Adam (pbuh), because the unique knowledge given to Adam (pbuh) is different from the knowledge of the angels that never changes.\n\nOn the other hand, Iblis’ arrogance came from his belief that his origin was superior to Adam (pbuh)’s. Satan’s—in other words, Iblis’—unapparent arrogance came to the surface when Adam (pbuh) appeared on the scene. He underlines his superiority because of the material from which he was created, yet Adam (pbuh)’s humble origin shows that Allah does not focus on origins, that is race, colour, or ethnicity, since all humans ultimately originate from dried mud.",
    vocabulary: [
      { word: 'inability', definition: 'The state of being unable to do something.' },
      { word: 'obedience', definition: 'Compliance with an order, request, or law.' },
      { word: 'unapparent', definition: 'Not clearly visible or obvious.' }
    ],
    hotspots: [
      { id: 'h5a', x: 30, y: 40, title: 'Angelic Respect', description: 'The angels recognized Adam\'s superior knowledge and capacity.' },
      { id: 'h5b', x: 70, y: 60, title: 'Equality of Origin', description: 'The text rejects superiority based on material origin or race.' }
    ],
    animatedWords: ['inability', 'obedience', 'unapparent'],
    exercises: [
      {
        id: 'qc-5',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'What did the prostration of angels to Adam (pbuh) signify?',
        options: ['Worship of Adam', 'Obedience to Allah and respect for Adam', 'Fear of Adam'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 6,
    type: 'story',
    title: 'The Command to Paradise',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter6.png?alt=media&token=2c7f06f0-1c7b-4f72-bbdc-220aebe0f3eb',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch6.mp3?alt=media&token=6abb93df-41c0-4d46-81a4-bf52e53ff672',
    content: "Allah said:\n“O Mankind! Be respectful to your Lord, Who created you from a single person (Adam) and from Him (Adam) He created his wife (Eve), and from them both He created many men and women.” (Nisâ: 1)\n\nAdam (pbuh) was now in Paradise and not alone; he had his wife with him.\n\nAllah spoke to Adam (pbuh) in A’raf, verse 19: “And you, Adam, inhabit the Garden, you and your wife, and eat whatever you wish; but do not approach this tree, for fear that you become wrongdoers.”\n\nThe tale went on. While Satan reached the point of no return by challenging his Creator, Adam (pbuh) took a path completely different from him. Surah A’raf, verses 16-17: “Satan said, ‘Because You have put me in error, I will surely sit in wait for them (Adam’s children) on Your Straight Path. Then I will come to them from before them, and from behind them, and from their right, and from their left; and you will not find most of them grateful to You.’”\n\nThe tale is unfolding through the verses 77-82 in Surah Sâd:\nAllah said, “Then get out of here! You (Satan) are an outcast! And My curse will be upon you until the Day of Judgment.”\nHe said, “Lord, allow me until the Day they are raised up.”\nHe said, “You are one of those allowed, until the Day of the Time Appointed.”\nHe said, “By Your majesty, I will deceive them all.”",
    vocabulary: [
      { word: 'respectful', definition: 'Feeling or showing deference and respect.' },
      { word: 'inhabit', definition: 'To live in or occupy a place.' },
      { word: 'outcast', definition: 'A person who has been rejected or ostracized by society.' },
      { word: 'deceive', definition: 'To make someone believe something that is not true.' }
    ],
    hotspots: [
      { id: 'h6a', x: 30, y: 50, title: 'Companion in Paradise', description: 'Allah gave Adam (pbuh) a wife to be his companion in the Garden.' },
      { id: 'h6b', x: 70, y: 40, title: 'Satan\'s Vow', description: 'Satan vowed to lead humanity astray until the Day of Judgment.' }
    ],
    animatedWords: ['respectful', 'inhabit', 'outcast', 'deceive'],
    exercises: [
      {
        id: 'qc-6',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'What did Allah command Adam (pbuh) and Eve in Paradise?',
        options: ['To leave Paradise', 'To inhabit the Garden and not approach the tree', 'To build a house'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 7,
    type: 'story',
    title: 'The Whisper of Deception',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter7.png?alt=media&token=888f74ef-8ab1-4399-b94f-499f280488d9',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch7.mp3?alt=media&token=802716e0-1e3e-4f5f-99a4-a481ac28491c',
    content: "Adam (pbuh) and Eve understood that they were forbidden to eat the fruit of that tree. Adam (pbuh) was, however, a human being, and man tends to forget. His heart changes, and his determination weakens. On the other hand, Satan would seek a way to remove Adam (pbuh) from mercy, because he thought of Adam (pbuh) as the cause of his expulsion from Allah's mercy. He took advantage of Adam (pbuh)’s humanity to manipulate him. He started to whisper to them day after day, trying to persuade both:\n\n“But Satan whispered to them (Adam and Eve), to expose what was hidden of their nakedness. He said, ‘Your Lord has only forbidden you this tree, lest you become angels, or become immortals.’” (A’raf: 20) And he swore to them, “I am a sincere advisor to you.” (A’raf: 21) Upon Satan’s promise that he was their true friend, Adam (pbuh) started to ask himself: “What will happen if I eat from this tree? It might truly be the Tree of Immortality.” His dream was to live forever in the pure innocence of Paradise. Years went by, and Adam (pbuh) and Eve were preoccupied with thoughts of that tree. Then one day, they decided to eat of its fruit. They forgot that Allah had warned them not to approach it and that Iblis was their bitter enemy. Adam (pbuh) stretched out his hand, picked one of the fruits, and offered it to Eve. They both ate of the forbidden tree. As soon as Adam (pbuh) had finished eating, he felt his heart tighten and filled with pain, sadness, and shame. The surrounding atmosphere changed, and the internal harmony ceased.",
    vocabulary: [
      { word: 'immortals', definition: 'Beings that live forever; never dying.' },
      { word: 'whispered', definition: 'Spoke very softly; in this context, the subtle suggestions of Satan.' },
      { word: 'sincere', definition: 'Free from pretense or deceit; proceeding from genuine feelings.' },
      { word: 'preoccupied', definition: 'Engrossed in thought; distracted.' }
    ],
    hotspots: [
      { id: 'h7a', x: 30, y: 50, title: 'Satan\'s Whisper', description: 'Satan uses manipulation to lead Adam (pbuh) and Eve astray.' },
      { id: 'h7b', x: 70, y: 40, title: 'The Forbidden Fruit', description: 'Adam (pbuh) and Eve give in to temptation and eat from the tree.' }
    ],
    animatedWords: ['immortals', 'whispered', 'sincere', 'preoccupied'],
    exercises: [
      {
        id: 'qc-7',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'Why did Adam (pbuh) and Eve eat from the forbidden tree?',
        options: ['They were hungry', 'They were manipulated by Satan\'s whispers and promises', 'They wanted to leave Paradise'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 8,
    type: 'story',
    title: 'The Realization & Repentance',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter8.png?alt=media&token=b1edc4c5-1feb-41b7-8c59-3919406cd8a4',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch8.mp3?alt=media&token=7350d4c8-c0f2-4474-8c38-4bd374a21d40',
    content: "“So he (Satan) made them (Adam (pbuh) and Eve) fall through deception. And when they tasted the tree, their nakedness became evident to them, and they began covering themselves with the leaves of the Garden. And their Lord called out to them, ‘Did I not forbid you from this tree, and say to you that Satan is a clear enemy to you?’” (A’raf: 22)\n\nWhen they tasted the fruit, their private parts became visible to them. Adam (pbuh) discovered that he and his wife were unclad, so they both started cutting tree leaves in Paradise with which to cover themselves. They were in haste to hide their private parts, because the sense of shame (hayâ) is inborn human nature and nakedness is against creation.\n\nAdam (pbuh) bowed down, crying, “Forgiveness! Forgiveness!” so Allah asked, “Are you running away from Me?” Adam (pbuh) replied, “No, my Lord, but I am shy of You.”\n\nAfter Adam (pbuh) and Eve were placed in Paradise, they enjoyed Allah's blessings as they pleased. Allah warned them not to approach the forbidden tree. This tree is not described in the Holy Qur'an. It is only mentioned that Satan deceived Adam (pbuh) and Eve. According to Islamic scholars, this incident happened while Adam (pbuh) was in Paradise—that is, before he became a prophet.",
    vocabulary: [
      { word: 'deception', definition: 'The act of deceiving someone.' },
      { word: 'evident', definition: 'Plain or obvious; clearly seen or understood.' },
      { word: 'hayâ', definition: 'Sense of shame or modesty.' },
      { word: 'forgiveness', definition: 'The action or process of forgiving or being forgiven.' },
      { word: 'unclad', definition: 'Not clothed or covered.' }
    ],
    hotspots: [
      { id: 'h8a', x: 30, y: 50, title: 'The Realization', description: 'Adam (pbuh) and Eve realize they were unclad after eating the fruit.' },
      { id: 'h8b', x: 70, y: 40, title: 'Repentance', description: 'Adam (pbuh) and Eve seek forgiveness from Allah.' }
    ],
    animatedWords: ['deception', 'evident', 'hayâ', 'forgiveness'],
    exercises: [
      {
        id: 'qc-8',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'What did Adam (pbuh) and Eve do when they realized they were unclad?',
        options: ['They hid in a cave', 'They covered themselves with leaves from the Garden', 'They ignored it'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 9,
    type: 'story',
    title: 'Repentance & Descent to Earth',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter9.png?alt=media&token=02398d91-13a7-4809-b9a5-7e7d10e9b6c0',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch9.mp3?alt=media&token=81c54390-7d2e-4d99-9d10-6935c85a3bbe',
    content: "Adam (pbuh) severely regretted what he had done. He immediately turned towards Allah. His regret itself was the reason for Allah’s mercy upon him. “They said, ‘Our Lord, we have done wrong to ourselves. Unless You forgive us, and have mercy on us, we will be among the losers.’” (A’raf: 23) Then Adam (pbuh) received words from his Lord (to learn how to ask for forgiveness), so His Lord pardoned him (accepted his repentance). Verily, He is the One Who forgives (accepts repentance), the Most Merciful. (Baqarah: 37) We said, “Go down from it (the Paradise), all of you. Yet whenever guidance comes to you from Me, then whoever follows My guidance—they have nothing to fear, nor shall they grieve.” (Baqarah: 38)\n\nAllah taught Adam (pbuh) how to ask for forgiveness. This unintentional mistake committed by Adam (pbuh) was forgiven by Allah upon his repentance. This means that Allah did not abandon Adam (pbuh); He immediately turned towards Adam (pbuh), too. Adam (pbuh) and Eve left Paradise and descended upon Earth. At that time, there was neither a community nor a congregation. After a period of time following their descent to Earth, when a community emerged, Adam (pbuh) was given prophethood, thus becoming the first human, the first father, and the first prophet. We understand from the verses that humans are open to sinning and sometimes rebelling against their Lord. However, in order to remain an honoured human, they must recognize their mistakes, seek the fault within themselves, and immediately turn towards Allah.",
    vocabulary: [
      { word: 'regretted', definition: 'Felt sad, repentant, or disappointed over something.' },
      { word: 'mercy', definition: 'Compassion or forgiveness shown toward someone.' },
      { word: 'repentance', definition: 'The action of repenting; sincere regret or remorse.' },
      { word: 'prophethood', definition: 'The office or position of a prophet.' }
    ],
    hotspots: [
      { id: 'h9a', x: 30, y: 50, title: 'Seeking Forgiveness', description: 'Adam (pbuh) and Eve repent for their mistake.' },
      { id: 'h9b', x: 70, y: 40, title: 'Descent to Earth', description: 'Adam (pbuh) and Eve descend to Earth to begin human life.' }
    ],
    animatedWords: ['regretted', 'mercy', 'repentance', 'prophethood'],
    exercises: [
      {
        id: 'qc-9',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'What was the reason for Allah\'s mercy upon Adam (pbuh)?',
        options: ['His regret', 'His strength', 'His wealth'],
        correctAnswer: 0,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 10,
    type: 'story',
    title: 'The Settlement on Earth',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter10.png?alt=media&token=ccb788e1-98ea-43fc-9397-aecc67ff8d34',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch10.mp3?alt=media&token=be3bea4e-5ae6-488c-9a07-46e885b5d89c',
    content: "Allah knew that Adam (pbuh) and Eve would eat of the tree and descend to Earth. He knew that Satan would violate their innocence. That experience was essential for their life on Earth; it was a cornerstone of their vicegerency. It was meant to teach Adam (pbuh), Eve, and their offspring the knowledge that Satan is their enemy and that the right path is to act in accordance with what they have heard from the Creator. The Creator is Knower, Powerful, Just, and Merciful.\n\nAdam (pbuh)’s descending to Earth, then, did not imply dishonour or humiliation, but rather it was an honorable and respected settlement on Earth. And thus began the story of humankind and his struggle against Satan on Earth. There are many hadiths about the place of Adam (pbuh)’s descending upon Earth. Ibn Abbas, who narrated many hadiths, said: “Adam (pbuh) descended on land ‘Dihna’ between Mecca and Taif.”\n\nIt is also reported that Adam (pbuh) descended with the Black Stone (a large black stone set into the wall of the Ka’ba in Mecca. It is said to have come from Paradise).\n\nIbn Umar said that Adam (pbuh) descended on As-Safa and Eve on Al-Marwa (names of two mountains in the neighborhood of the Sacred House (Ka’ba) in Mecca. Part of the rites of pilgrimage (hajj) includes walking and running between these two hills in remembrance of Hajar's search for water).",
    vocabulary: [
      { word: 'vicegerency', definition: 'The office or authority of a vicegerent; acting on behalf of another.' },
      { word: 'humiliation', definition: 'The action of humiliating someone or the state of being humiliated.' },
      { word: 'descended', definition: 'Moved or fell downward.' },
      { word: 'pilgrimage', definition: 'A pilgrim\'s journey.' }
    ],
    hotspots: [
      { id: 'h10a', x: 30, y: 50, title: 'The Settlement', description: 'Adam (pbuh) and Eve settle on Earth, beginning the human struggle.' },
      { id: 'h10b', x: 70, y: 40, title: 'Places of Descent', description: 'Hadiths suggest various locations for their descent.' }
    ],
    animatedWords: ['vicegerency', 'humiliation', 'descended', 'pilgrimage'],
    exercises: [
      {
        id: 'qc-10',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'What was the purpose of Adam (pbuh) and Eve\'s experience on Earth?',
        options: ['To punish them', 'To teach them that Satan is their enemy and their testing as vicegerent', 'To make them forget Allah'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 11,
    type: 'story',
    title: 'Adam (pbuh)\'s Life on Earth',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter11.png?alt=media&token=c520bb71-bf37-4f3e-a7fd-752ee62d8125',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch11.mp3?alt=media&token=2d3f4f6a-09fd-4706-bfab-b2f4b2287cd9',
    content: "Ebu Hureyre reported that the Prophet Muhammad (pbuh) said: “The best of days on which the sun has risen is Friday. On this day Adam (pbuh) was created, and on this day he was descended to Earth.” (see, Müslim, Cum`a 17, 18. Also see, Tirmizî, Cum`a 1, 2; Nesâî, Cum`a 4, 45)\n\nAdam (pbuh) knew he said goodbye to peace, and he left Paradise. On Earth, he had to face conflict and struggle. No sooner had one ended than another began. He also had to work hard to keep himself alive. He had to protect himself with clothes and weapons and protect himself from the wild.\n\nAbove all, he had to struggle with the spirit of evil. Satan, the cause of his displacement from Paradise, continues to deceive him and his children. Satan wants human beings not to remember Allah, yet the removal of Allah from the human mind means the removal of meaning and purpose from human life.\n\nThe battle between good and evil is continuous, but those who follow Allah's guidance should fear nothing, while those who disobey Allah and follow Iblis will be away from the mercy of Allah along with him. Adam (pbuh) understood all this, and with the knowledge of this suffering, he started his life on Earth.\n\nThe only thing that eased his grief was that he was master of the Earth and had to make it ruled by him. He had to maintain, cultivate, construct, and populate the Earth. He also had to reproduce and raise children who would change and improve the world.",
    vocabulary: [
      { word: 'conflict', definition: 'A serious disagreement or argument.' },
      { word: 'displacement', definition: 'The action of moving something from its place or position.' },
      { word: 'continuous', definition: 'Forming an unbroken whole; without interruption.' },
      { word: 'cultivate', definition: 'Prepare and use (land) for crops or gardening.' }
    ],
    hotspots: [
      { id: 'h11a', x: 30, y: 50, title: 'Life on Earth', description: 'Adam (pbuh) faces the struggles and challenges of life on Earth.' },
      { id: 'h11b', x: 70, y: 40, title: 'Battle of Good and Evil', description: 'The ongoing struggle against Satan\'s deception.' }
    ],
    animatedWords: ['conflict', 'displacement', 'continuous', 'cultivate'],
    exercises: [
      {
        id: 'qc-11',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'What eased Adam (pbuh)\'s grief on Earth?',
        options: ['He was master of the Earth', 'He had infinite food', 'He was back in Paradise'],
        correctAnswer: 0,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 12,
    type: 'story',
    title: 'The Conflict of Habil and Qabil',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter12.png?alt=media&token=ea7397e9-5206-4dec-80ae-4f5fae82309d',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch12.mp3?alt=media&token=ecfdfa30-32b7-485c-bdf4-957a49eae96a',
    content: "One of the earthly blisses was reached when Adam (pbuh) and Eve witnessed the birth of their first children. The children grew up to be strong and healthy young adults. Qabil cultivated the land while Habil raised cattle. In time, there arose a conflict between the two sons. Adam (pbuh) was in a difficult situation. He wanted peace and harmony in his family, so he prayed to Allah for help. Allah commanded that each son offer a sacrifice, and he whose offering was accepted would have the right on his side. Habil offered his best cattle while Qabil offered his worst grain. Qabil’s sacrifice was not accepted by Allah because of his insincerity in his offering. This angered Qabil even further. “I will kill you! I refuse to see you happy while I remain unhappy!”\n\nThe story of Habil and Qabil is narrated in the Holy Qur’an without mentioning names as follows:\n\n“Tell them in all truth the story of the two sons of Adam. When they made an offering and it was accepted from one of them and was not accepted from the other, the latter said: ‘I will surely kill you.’ Thereupon the former said: ‘Allah accepts offerings only from the God-fearing.’” (Maide: 27)\n\nThe Qur’an narrates this story in a simple manner. It does not openly mention anything from the details found in the Torah, as, according to the Qur’an, the only thing that needs to be known is the wisdom of the story. Habil and Qabil are referred to as Adam (pbuh)’s two sons without their names being given. Although we don’t know the whole story, Adam (pbuh)’s children, Habil and Qabil, were involved in a conflict that resulted in Qabil killing Habil. Habil’s response displayed his pious character, saying:",
    vocabulary: [
      { word: 'bliss', definition: 'Perfect happiness; great joy.' },
      { word: 'sacrifice', definition: 'An act of giving up something valued for the sake of something else.' },
      { word: 'insincerity', definition: 'The quality of not expressing genuine feelings.' },
      { word: 'pious', definition: 'Devoutly religious.' }
    ],
    hotspots: [
      { id: 'h12a', x: 30, y: 50, title: 'The Sacrifice', description: 'Habil and Qabil offer sacrifices to Allah.' },
      { id: 'h12b', x: 70, y: 40, title: 'The Conflict', description: 'Jealousy leads to a tragic conflict between the brothers.' }
    ],
    animatedWords: ['bliss', 'sacrifice', 'insincerity', 'pious'],
    exercises: [
      {
        id: 'qc-12',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'Why was Qabil\'s sacrifice not accepted?',
        options: ['He offered his best', 'He was insincere', 'He was too young'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 13,
    type: 'story',
    title: 'The First Murder & Burial',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter13.png?alt=media&token=ed61f9d6-f850-4a84-9f2f-acb6a00fc6a3',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch13.mp3?alt=media&token=faef98f2-8ab5-4d08-85be-e2e9f1ae33a3',
    content: "“Even if you raise your hand against me to kill, I will not raise my hand to kill you. Surely, I fear Allah, the Lord of the entire universe.” (Maide: 28) It is understood from the above verses that although Qabil had the intention to kill, Habil did not adopt an aggressive attitude. Thus, he emphasizes that he does not take notice of the desires of his own self in the face of truth. At first glance, Qabil’s rebellious attitude may seem unacceptable. However, it is important to remember that humans have the potential for both good and evil. People can be jealous, selfish, greedy, and even damaging and harmful. The path to goodness is in controlling evil thoughts and actions and being moderate in desires. Thus, Allah tests us through our twofold divided nature. Habil was intelligent, respectful, and always ready to obey the will of Allah. This contrasted sharply with his brother who was arrogant, selfish, and disobedient to his Lord. Habil did not fear his brother's threats, but also he did not want his brother to be hurt. Allah gave Habil purity and compassion. Hoping to lessen the hatred in his brother, Habil said, “My brother, you are turning away from the right path and are sinful in your decisions. It is better that you repent to Allah and forget about your foolish threat. But if you do not, then I will leave the matter in the hands of Allah. You alone will bear the consequence of your sin.”",
      vocabulary: [
      { word: 'criminal', definition: 'Relating to crime; unlawful.' },
      { word: 'corpse', definition: 'A dead body.' },
      { word: 'stench', definition: 'A strong and very unpleasant smell.' },
      { word: 'preserved', definition: 'Maintained in its original or existing state.' },
      { word: 'rebellious', definition: 'Showing a desire to resist authority.' },
      { word: 'compassion', definition: 'Sympathetic pity and concern for the sufferings or misfortunes of others.' }
    ],
    hotspots: [
      { id: 'h13a', x: 47, y: 50, title: 'Habil\'s Response', description: 'Habil chooses peace over aggression.' },
      { id: 'h13b', x: 78, y: 40, title: 'The First Burial', description: 'Allah teaches Qabil how to bury his brother through a raven.' }
    ],
    animatedWords: ['criminal', 'corpse', 'stench', 'preserved', 'rebellious', 'compassion'],
    exercises: [
      {
        id: 'qc-13',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'How did Habil respond to Qabil\'s threat?',
        options: ['He fought back', 'He chose peace advised his brother to do a good deed and left the matter to Allah', 'He ran away'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ],
  },
  {
    id: 14,
    type: 'story',
    title: 'The First Murder & Burial',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter14.png?alt=media&token=4399b928-a16f-4bdd-a697-b274b27d32c2',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch14.mp3?alt=media&token=f976eee6-6b6d-4aa5-9b81-79a43cb62a61',
    content: "This brotherly request did nothing to lessen the hatred in Qabil's heart, nor did he show fear of Allah's punishment. Even familial considerations were given up. Qabil hit his brother with a stone, killing him instantly. This was the first death and the first criminal act committed by man on Earth.\n\nSurah Maide concludes the story with Qabil’s tragic end:\n\n“At last his evil soul drove him (Qabil) to the murder of his brother, and he killed him, by which he himself became one of the losers.” (Maide: 30)\n\nWhen Habil had not appeared for some time, Adam (pbuh) began to search for him but found no trace of his beloved son. He asked Qabil about Habil's location. Qabil arrogantly replied that he was not his brother's keeper nor his protector. From these words, his father understood that Habil was dead, and Adam (pbuh) was filled with grief. Meanwhile, Qabil did not know what to do with his brother's corpse. He carried it on his back, wandering from place to place trying to hide it. His anger had now lessened, and his heart was burdened with guilt. He was getting tired under the burden of the corpse. It also started to have a stench. As a mercy, and to show that the highness of a human had to be preserved even after death, Allah sent two ravens that began fighting. At the end of the battling, one of the ravens died. The victorious bird used its beak and claws to dig a hole in the ground, rolled its victim into it, and covered it with sand.",
    vocabulary: [
      { word: 'familial', definition: 'Relating to or occurring in a family or its members.' },
      { word: 'burdened', definition: 'Loaded heavily with something.' },
      { word: 'victorious', definition: 'Having won a victory; triumphant.' }
    ],
    hotspots: [
      { id: 'h13a', x: 30, y: 50, title: 'The Crime', description: 'Qabil commits the first murder in human history.' },
      { id: 'h13b', x: 70, y: 40, title: 'The First Burial', description: 'Allah teaches Qabil how to bury his brother through a raven.' }
    ],
    animatedWords: ['familial', 'burdened', 'victorious'],
    exercises: [
      {
        id: 'qc-14',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'How did Qabil learn to bury his brother?',
        options: ['From his father', 'By watching two ravens', 'He figured it out himself'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 15,
    type: 'story',
    title: 'Qabil\'s Regret & Adam (pbuh)\'s Advice',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter15.png?alt=media&token=b599808a-3de8-4dc1-a9e0-ad6067e1903b',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch15.mp3?alt=media&token=8488bff3-a880-47ab-ba15-98e03a50b37d',
    content: "Qabil was in an extremely sorry state, as told in the Holy Qur’an: “Thereupon Allah sent a raven who began to dig at the earth to show him how he might cover the corpse of his brother. So seeing he cried: ‘Woe unto me! Was I unable even to be like this raven and find a way to cover the corpse of my brother?’ Then he became full of regret at his doing.” (Maide: 31)\n\nWitnessing this, Qabil was overcome with shame and guilt. “Woe unto me!” he exclaimed. “I was unable to do what this raven has done, that is to hide my brother's corpse.” Qabil then buried his brother. This was also the first burial of man.\n\nWhat is essentially being described here are the consequences of choosing evil. It arises from jealousy, which defeats the feelings of love and compassion of brotherhood. This story provides an example illustrating that with the guidance of revelation (vâhiy), choosing the truth over falsehood and goodness over evil will purify human nature from evils. In this example, Qabil represents the type of person dominated by evil, while Habil represents the righteous person who has love for goodness and kindness. Adam (pbuh) was fully in pain by the loss of his two sons. One was dead, the other was won over by Satan. Adam (pbuh) prayed for his son and turned to worldly matters, because he had to work hard for his daily bread.",
    vocabulary: [
      { word: 'regret', definition: 'A feeling of sadness, repentance, or disappointment.' },
      { word: 'guilt', definition: 'The fact or state of having committed an offense.' },
      { word: 'consequences', definition: 'A result or effect of an action or condition.' },
      { word: 'prophet', definition: 'A person regarded as an inspired teacher or proclaimer of the will of God.' }
    ],
    hotspots: [
      { id: 'h14a', x: 30, y: 50, title: 'Qabil\'s Regret', description: 'Qabil feels deep regret after burying his brother.' },
      { id: 'h14b', x: 70, y: 40, title: 'Adam (pbuh)\'s Advice', description: 'Adam (pbuh) prays for his son and turns to worldly matters.' }
    ],
    animatedWords: ['regret', 'guilt', 'consequences', 'prophet'],
    exercises: [
      {
        id: 'qc-15',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'What did Adam (pbuh) do after the loss of his sons?',
        options: ['He gave up', 'He prayed for his son and turned to worldly matters', 'He left Earth'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 16,
    type: 'story',
    title: 'Adam (pbuh)\'s Successor & Death',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter16.png?alt=media&token=7a5a94a7-cbb8-458b-b865-f7281e454742',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch16.mp3?alt=media&token=f6e0a555-131a-43b3-84fc-3ef6af30ba97',
    content: "At the same time, he was a prophet advising his children and grandchildren, telling them about Allah and calling them to believe in Him. He told them about Iblis and warned them by telling his own experience with Satan and of how Satan had tempted Qabil to kill his brother. Years and years passed, Adam (pbuh) grew old and his children spread all over the Earth. It was narrated that when Adam (pbuh)’s death drew near, he appointed his son Seth to be his successor and taught him the hours of the day and night with their appropriate acts of worship. Prophet Muhammad (pbuh) said: “Allah sent down 104 scrolls, of which 50 were sent down to Seth.” Before his death, Adam (pbuh) encouraged his children that Allah would not leave man alone on Earth, but would send His prophets to guide them. The prophets would have different names and miracles, but they would be united in one thing: the call to follow Allah’s straight path. This was Adam (pbuh)’s legacy to his children. Adam (pbuh) finished speaking and closed his eyes. Then the angels entered his room and surrounded him. When he recognized the Angel of Death among them, his heart filled with peace.",
    vocabulary: [
      { word: 'successor', definition: 'A person or thing that succeeds another.' },
      { word: 'scrolls', definition: 'A roll of parchment or paper for writing.' },
      { word: 'legacy', definition: 'An amount of money or property left to someone in a will.' },
      { word: 'miracles', definition: 'An extraordinary and welcome event.' }
    ],
    hotspots: [
      { id: 'h15a', x: 30, y: 50, title: 'Seth\'s Successorship', description: 'Adam appoints Seth as his successor.' },
      { id: 'h15b', x: 70, y: 40, title: 'Adam\'s Legacy', description: 'Adam advises his children before his death.' }
    ],
    animatedWords: ['successor', 'scrolls', 'legacy', 'miracles'],
    exercises: [
      {
        id: 'qc-16',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'Who did Adam (pbuh) appoint as his successor?',
        options: ['Qabil', 'Habil', 'Seth'],
        correctAnswer: 2,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 17,
    type: 'story',
    title: 'The Challenge of Satan & Human Value',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter17.png?alt=media&token=fb1cf4bc-7a18-4dab-8cde-2eab06c1ff0a',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch17.mp3?alt=media&token=260216c5-5979-433c-8ac7-a42db758c207',
    content: "In Surah Hijr 39-42 Allah declares that for those who act in accordance with the Qur’an, Satan’s challenge has no meaning. Satan, too acknowledges this fact.\n\n“ He (Satan) said, “My Lord, beacuse You have put me in error, I will surely make (disobedience) attractive to them on earth, and I will mislead them all.\n “Except for Your sincere servants among them.”\n“ HE (Allah) said, “This is a right way with Me.”\n “Over My servants you have no authority, except for the sinners who follow you.”\n\nLearning about Adam (pbuh) ’s tale is to know the origin of humanity. Besides, to recognize Adam (pbuh) is to know the source of knowledge and the setting in which humanity came into being. The Holy Qur’an not so much constantly talks about Satan’s anti-God position (although he is unquestionably a rebel against Allah and surely personifies this disobedient character ) but rather underlies his anti-human attitude which, constantly attempts to tempt man to turn from his natural- established “ straight” course. Satan alone is not strong; it is only man's weakness and lack of morals and carefulness that make Satan look so strong.\nIn fact, all the events that Adam (pbuh) and Eve experienced are like a summary of the adventures of their descendants in worldly life.\nEach caharacter in this Qur’anic story leave behind a deterrent tale for humanity raising a key direct question : Where should man truly find his sense of value?”",
    vocabulary: [
      { word: 'mislead', definition: 'Cause (someone) to have a wrong idea or impression.' },
      { word: 'unquestionably', definition: 'Not able to be disputed or doubted.' },
      { word: 'deterrent', definition: 'A thing that discourages or is intended to discourage someone from doing something.' },
      { word: 'descendants', definition: 'A person, plant, or animal that is descended from a particular ancestor.' }
    ],
    hotspots: [
      { id: 'h18a', x: 30, y: 50, title: 'Satan\'s Challenge', description: 'Satan acknowledges he has no authority over sincere servants.' },
      { id: 'h18b', x: 70, y: 40, title: 'Human Value', description: 'Reflecting on where man should find his true sense of value.' }
    ],
    animatedWords: ['mislead', 'unquestionably', 'deterrent', 'descendants'],
    exercises: [
      {
        id: 'qc-17',
        type: 'multiple-choice',
        title: 'Quick Challenge',
        instructions: 'Choose the correct answer.',
        question: 'Who does Satan have no authority over?',
        options: ['The sinners', 'His sincere servants', 'Everyone'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      }
    ]
  },
  {
    id: 18,
    type: 'quiz',
    title: 'B2 Analytical Review: Prophet Adam (pbuh)',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_4.png?alt=media&token=0e4c2656-7b50-402f-9c79-303fa7ee7849',
    content: 'Engage in a deep analytical review of the narrative themes and moral lessons.',
    exercises: [
      {
        id: 'tf-1',
        type: 'true-false',
        question: 'Iblis refused to prostrate because he believed his material origin (fire) was superior to Adam\'s (clay).',
        correctAnswer: true,
        feedback: { correct: 'Correct! Arrogance based on origin was Iblis\'s downfall.', incorrect: 'Incorrect. This was the primary reason for his refusal.' },
        explanation: 'Iblis argued that fire is superior to clay, which led to his arrogance and refusal to obey Allah.'
      },
      {
        id: 'tf-2',
        type: 'true-false',
        question: 'Adam (pbuh) and Eve were expelled from Paradise without any hope of forgiveness.',
        correctAnswer: false,
        feedback: { correct: 'Correct! They were pardoned after sincere repentance.', incorrect: 'Incorrect. Allah is the Most Merciful and accepted their repentance.' },
        explanation: 'Allah accepted their sincere repentance, showing that forgiveness is always possible for those who truly repent.'
      },
      {
        id: 'tf-3',
        type: 'true-false',
        question: 'The first murder in human history was committed by Habil against Qabil.',
        correctAnswer: false,
        feedback: { correct: 'Correct! It was Qabil who killed Habil out of jealousy.', incorrect: 'Incorrect. Qabil was the one who committed the murder.' },
        explanation: 'Qabil killed Habil due to jealousy, making it the first murder in human history.'
      },
      {
        id: 'tf-4',
        type: 'true-false',
        question: 'Adam (pbuh) was the first human being created by Allah.',
        correctAnswer: true,
        feedback: { correct: 'Correct! Adam (pbuh) is known as the father of humanity.', incorrect: 'Incorrect. Adam (pbuh) was indeed the first human.' },
        explanation: 'Adam (pbuh) was created by Allah as the first human being and the father of all humanity.'
      },
      {
        id: 'tf-5',
        type: 'true-false',
        question: 'Qabil immediately knew how to bury his brother after the murder.',
        correctAnswer: false,
        feedback: { correct: 'Correct! He learned it after watching a raven.', incorrect: 'Incorrect. He was confused until Allah sent a raven.' },
        explanation: 'Qabil did not know how to bury his brother until Allah sent a raven to teach him.'
      },
      {
        id: 'tf-6',
        type: 'true-false',
        question: 'Seth (Şit) (pbuh) was appointed as Adam (pbuh)\'s successor.',
        correctAnswer: true,
        feedback: { correct: 'Correct! Seth (pbuh) continued the mission of guidance.', incorrect: 'Incorrect. Seth (pbuh) was indeed the successor.' },
        explanation: 'Before his death, Adam (pbuh) appointed his son Seth (pbuh) as his successor to guide his children.'
      }
    ]
  },
   {
    id: 19,
    type: 'exercises',
    title: 'B2 Final Review & Reflection',
    image: 'https://picsum.photos/seed/review-b1/1200/800',
    content: 'Synthesize your understanding of the Prophet Adam (pbuh) narrative through these advanced exercises.',
    exercises: adamB2FinalReviewExercises
  },
  {
    id: 20,
    type: 'glossary',
    title: 'Master Glossary (Part 1)',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_3.png?alt=media&token=f05d3557-72b0-4a64-8f84-a94d7e18a2a8',
    content: 'Review the first part of the key vocabulary from the B2 level story.',
    vocabulary: [
      { word: 'Miraculous', definition: 'Occurring through divine or supernatural intervention.' },
      { word: 'Philosophical', definition: 'Relating to the study of the fundamental nature of knowledge and existence.' },
      { word: 'Composition', definition: 'The nature of something\'s ingredients or constituents.' },
      { word: 'Ancestor', definition: 'A person from whom one is descended.' },
      { word: 'Vicegerent', definition: 'A representative or steward given authority on Earth.' },
      { word: 'Prostrate', definition: 'To bow down in submission or worship.' },
      { word: 'Intellect', definition: 'The faculty of reasoning and understanding objectively.' },
      { word: 'Superiority', definition: 'The state of being higher in status or quality.' },
      { word: 'Ethnicity', definition: 'Belonging to a social group with a common national or cultural tradition.' },
      { word: 'Unapparent', definition: 'Not clearly visible or obvious.' },
      { word: 'Inhabit', definition: 'To live in or occupy a place.' },
      { word: 'Wrongdoers', definition: 'People who behave immorally or illegally.' }
    ]
  },
  {
    id: 21,
    type: 'glossary',
    title: 'Master Glossary (Part 2)',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_3.png?alt=media&token=f05d3557-72b0-4a64-8f84-a94d7e18a2a8',
    content: 'Review the second part of the key vocabulary from the B2 level story.',
    vocabulary: [
      { word: 'Expulsion', definition: 'The action of forcing someone to leave a place.' },
      { word: 'Outcast', definition: 'A person who has been rejected by society.' },
      { word: 'Deceive', definition: 'To make someone believe something that is not true.' },
      { word: 'Immortals', definition: 'Beings that live forever.' },
      { word: 'Sincere', definition: 'Free from pretense or deceit; genuine.' },
      { word: 'Preoccupied', definition: 'Engrossed in thought; distracted.' },
      { word: 'Repentance', definition: 'Sincere regret or remorse for one\'s actions.' },
      { word: 'Cornerstone', definition: 'An important quality or feature on which something is based.' },
      { word: 'Sacred', definition: 'Dedicated to a religious purpose and deserving veneration.' },
      { word: 'Pilgrimage', definition: 'A journey to a place of religious importance.' },
      { word: 'Redemption', definition: 'The action of being saved from sin or error.' },
      { word: 'Legacy', definition: 'The long-lasting impact of a person\'s life or actions.' }
    ]
  },
  {
    id: 22,
    type: 'final-challenge',
    title: 'B2 Final Challenge',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b1%2Fimages%2Fadam_b1_chapter_1.png?alt=media&token=f2ae6289-f8fa-4606-a89a-d1d8537a4394',
    content: 'Complete this 10-question challenge to demonstrate your mastery of the B2 level story of Prophet Adam (pbuh).',
    exercises: [
      {
        id: 'fc-1',
        type: 'multiple-choice',
        title: 'Final Challenge - Question 1',
        instructions: 'Choose the correct answer.',
        question: 'What was the primary reason for the angels\' initial concern about human creation?',
        options: ['Humans would be too weak', 'Humans would spread corruption and shed blood', 'Humans would be too intelligent'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      },
      {
        id: 'fc-2',
        type: 'multiple-choice',
        title: 'Final Challenge - Question 2',
        instructions: 'Choose the correct answer.',
        question: 'What distinguished Adam (pbuh) from the angels in terms of knowledge?',
        options: ['He knew how to fly', 'He was taught the names of all things', 'He knew the future'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      },
      {
        id: 'fc-3',
        type: 'multiple-choice',
        title: 'Final Challenge - Question 3',
        instructions: 'Choose the correct answer.',
        question: 'Why did Iblis refuse to prostrate to Adam (pbuh)?',
        options: ['He was busy', 'He believed his origin from fire was superior to clay', 'He did not hear the command'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      },
      {
        id: 'fc-4',
        type: 'multiple-choice',
        title: 'Final Challenge - Question 4',
        instructions: 'Choose the correct answer.',
        question: 'What was the symbolic significance of the variety of soil used to create Adam?',
        options: ['The strength of the human body', 'The diversity of human skin colors and temperaments', 'The age of the earth'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      },
      {
        id: 'fc-5',
        type: 'multiple-choice',
        title: 'Final Challenge - Question 5',
        instructions: 'Choose the correct answer.',
        question: 'How did Satan tempt Adam and Eve in Paradise?',
        options: ['By offering them gold', 'By promising them immortality or becoming angels', 'By threatening them'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      },
      {
        id: 'fc-6',
        type: 'multiple-choice',
        title: 'Final Challenge - Question 6',
        instructions: 'Choose the correct answer.',
        question: 'What was the immediate consequence of eating the forbidden fruit?',
        options: ['They became more powerful', 'They felt a sense of shame and their nakedness became evident', 'They were immediately sent to Earth'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      },
      {
        id: 'fc-7',
        type: 'multiple-choice',
        title: 'Final Challenge - Question 7',
        instructions: 'Choose the correct answer.',
        question: 'What is the "cornerstone" of human vicegerency according to the text?',
        options: ['The ability to build cities', 'The experience of the fall and the knowledge of Satan as an enemy', 'The possession of wealth'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      },
      {
        id: 'fc-8',
        type: 'multiple-choice',
        title: 'Final Challenge - Question 8',
        instructions: 'Choose the correct answer.',
        question: 'Why was Habil\'s sacrifice accepted while Qabil\'s was rejected?',
        options: ['Habil was older', 'Habil offered the best of his flock with sincerity', 'Qabil was a farmer'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      },
      {
        id: 'fc-9',
        type: 'multiple-choice',
        title: 'Final Challenge - Question 9',
        instructions: 'Choose the correct answer.',
        question: 'What lesson did Qabil learn from the raven?',
        options: ['How to fly', 'How to bury the dead', 'How to find water'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      },
      {
        id: 'fc-10',
        type: 'multiple-choice',
        title: 'Final Challenge - Question 10',
        instructions: 'Choose the correct answer.',
        question: 'What does the story of Adam (pbuh) primarily teach about human nature?',
        options: ['That humans are perfect', 'The capacity for knowledge, temptation, and redemption through repentance', 'That humans are doomed'],
        correctAnswer: 1,
        feedback: { correct: 'Correct!', incorrect: 'Try again.' }
      },
    ]
  }
];
