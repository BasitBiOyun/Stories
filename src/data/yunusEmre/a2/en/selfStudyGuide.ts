import type { TeacherGuideSection, StudentGuideMetadata, StudentGuideSection } from '../../../../types';

// Learner-facing A2 study path, written by hand for each chapter of the Yunus Emre A2 story.
// "Language Focus" and "Quick Challenge" refer to the activities as they exist on each chapter page.
type SelfPlan = {
  chapter: string;
  hotspots: [string, string];
  goals: string[];
  notice: string[];
  read: string[];
  find: string[];
  words: string[];
  languageFocus: string;
  sayIt: string;
  quick: string;
  wrong: string[];
  check: string[];
  use: string;
  reflect: string;
};

const selfPlans: SelfPlan[] = [
  {
    chapter: 'Chapter 1: Yunus Emre',
    hotspots: ['Simple Turkish', 'Taptuk Emre'],
    goals: ['I can say three facts about Yunus Emre’s life.', 'I can say why people understood his poems.', 'I can use because, After and when.'],
    notice: ['The chapter is a short life story. It has three years in it: 1240, 1273 and 1320.', 'Look at “People could easily understand his poems because he wrote and said them in simple Turkish.” Because gives the reason.'],
    read: ['Look at the title and the picture. Who was Yunus Emre?', 'Listen to the chapter once. Follow the text with your eyes.', 'Read paragraph 3 again. Find two names and two years.'],
    find: ['Paragraph 1: find the year Yunus was born and the language of his poems.', 'Paragraph 2: find what Yunus did after the madrasa.', 'Paragraph 3: find the name of his teacher and the places he traveled to.'],
    words: ['Word Notes: moral, dervish, guidance, pupil.', '“a dervish pupil of Taptuk Emre”: who was the teacher? Who was the pupil?', 'Write one sentence with guidance: I learn well with the guidance of ….'],
    languageFocus: 'Match four verbs with their past forms: become → became, write → wrote, say → said, speak → spoke. Then complete three story sentences with because, After and when. Because gives a reason, After shows the order and when gives a time.',
    sayIt: 'Say the stress: a-na-TO-li-a, DER-vish, GUI-dance, PU-pil. Say the years clearly: twelve forty, twelve seventy-three, thirteen twenty.',
    quick: 'You will match three years with three events. One year is in paragraph 1, and two years are in paragraph 3.',
    wrong: ['Go back to paragraph 1 and find the first year.', 'Then read the sentence with “Mevlana died in 1273” in paragraph 3.', 'Ask yourself: Who died first? Try again.'],
    check: ['Can I say when and where Yunus was born?', 'Can I say why people understood his poems?', 'Can I say one sentence with because and one with After?'],
    use: 'Language Focus, last activity (Say It): give a short three-sentence biography of Yunus Emre. Say one birth fact, one fact about his life after the madrasa and one more past event, like his travels.',
    reflect: 'Yunus used simple words, so many people understood him. How can you explain something so that a friend understands it easily?',
  },
  {
    chapter: 'Chapter 2: Our Dervish Yunus',
    hotspots: ['Hearts and Eyes', 'The Needy'],
    goals: ['I can say why the dervishes called themselves poor.', 'I can say what they did with their wealth.', 'I can use not … but, because of and were not.'],
    notice: ['Some dervishes were rich, but they called themselves poor. Here poor is not about money.', 'Look at “not in their hearts, but in their hands to give to charity.” Not … but takes away one idea and gives the right one.'],
    read: ['Look at the title and the picture. What do you know about dervishes?', 'Listen to the chapter once. Follow the text with your eyes.', 'Read paragraph 2 again. Find three good things and three bad habits.'],
    find: ['Paragraph 1: find the sentence that starts with “That is why”.', 'Paragraph 1: find what the dervishes shared, and with whom.', 'Paragraph 2: find the list of bad habits.'],
    words: ['Word Notes: witnessed, universe, charity, sulky.', '“They were kind and cheerful; they were not cold or sulky.” Is a sulky person happy and friendly?', 'Write one sentence: People give charity when ….'],
    languageFocus: 'Read two story sentences and choose why the dervishes called themselves poor. Then choose but, Because of and were not. Because of comes before a noun (because of the Creator). With an adjective we say were not: They were not cold.',
    sayIt: 'Say the stress: U-ni-verse, CHAR-i-ty, SUL-ky, GEN-er-ous. Make the two parts clear: Not in their hearts / but in their hands.',
    quick: 'The sentence is about rich dervishes and their money. Read the end of paragraph 1 before you answer true or false.',
    wrong: ['Go back to the end of paragraph 1.', 'Find “They shared what they had with the needy” and read it again.', 'Ask yourself: Did they keep it or give it? Try again.'],
    check: ['Can I say why the dervishes called themselves poor?', 'Can I name two good things the dervishes did?', 'Can I name two bad habits they tried to leave?'],
    use: 'Language Focus, last activity (Say It): describe the dervishes in three short sentences. Say one thing about their character, one thing they did again and again, and one sentence with but or because.',
    reflect: 'The dervishes shared what they had with the needy. What is one small thing you can share this week?',
  },
  {
    chapter: 'Chapter 3: The Difficult Path',
    hotspots: ['Path of Dervishhood', 'Useful Activities'],
    goals: ['I can name three good values of the dervishes.', 'I can say what one line of Yunus’s poem means.', 'I can use the past forms ate, slept and spent.'],
    notice: ['Yunus wrote a poem about the dervish path. Each verse ends with “You can’t be a dervish.”', 'The poem uses pictures. “without hands” does not mean he has no hands. It means he does not hit back.'],
    read: ['Look at the title. Why is a path difficult?', 'Listen to the chapter once. Follow the text with your eyes.', 'Read the poem slowly. Read the English lines, then look at the Turkish lines.'],
    find: ['Paragraph 1: find six good values of the dervishes.', 'The poem: Find two things a dervish needs.', 'Paragraph 3, after the poem: Find three things the dervishes did less.'],
    words: ['Word Notes: patience, generosity, moderate, disciplined.', '“a moderate and disciplined life”: too much food, or not too much and not too little?', 'Write one sentence: I need patience when ….'],
    languageFocus: 'Match four poem lines with their meanings. For example, without hands means he does not fight back. Then choose the past forms ate, slept and spent. We never say eated, sleeped or spended.',
    sayIt: 'Say the stress: PA-tience, gen-er-OS-i-ty, MOD-er-ate, DIS-ci-plined. Read one verse of the poem slowly, with a short stop at the end of each line.',
    quick: 'The question asks how the dervishes lived. Read paragraph 3, the paragraph after the poem, before you choose.',
    wrong: ['Go back to the paragraph after the poem.', 'Find “a way of life of their own” and read the next sentence again.', 'Try again.'],
    check: ['Can I say three values of the dervishes?', 'Can I say what one poem line means?', 'Can I say “They ate less, spoke less, slept less” correctly?'],
    use: 'Language Focus, last activity (Say It): explain the dervish path in three short sentences. Say one thing a dervish needs, one thing he must do and one habit of a disciplined life.',
    reflect: 'The poem says a dervish does not answer rude words. What can you do when someone is rude to you?',
  },
  {
    chapter: 'Chapter 4: The Woodcutter Yunus',
    hotspots: ['Wood-Cutting Duties', 'Crooked Wood'],
    goals: ['I can say what Yunus promised his teacher.', 'I can say what Yunus did every day.', 'I can use will, asked … to, every day, always and never.'],
    notice: ['The first condition for a student was to be humble. Yunus was ready to do any job.', 'Look at “But he never cut or brought green or crooked wood.” never means not one time.'],
    read: ['Look at the picture. What is Yunus carrying?', 'Listen to the chapter once. Follow the text with your eyes.', 'Read paragraph 3 again. Find every day, never and always.'],
    find: ['Paragraph 1: find the first condition to be a student.', 'Paragraph 2: find Yunus’s promise to his master.', 'Paragraph 3: find what Yunus always said.'],
    words: ['Word Notes: humble, service, ordinary, crooked.', '“Some jobs look ordinary at first glance.” Is carrying wood a special job or a normal job?', 'Write one sentence: A humble person ….'],
    languageFocus: 'Decide if a sentence about never is true or false. Then complete lines with will, to, Every and always. We say I will do, not I am do, and asked Yunus to collect, not asked him for collect.',
    sayIt: 'Say the stress: HUM-ble, SER-vice, OR-di-na-ry, CROOK-ed. Say Yunus’s promise slowly: “I will do whatever service you ask of me.”',
    quick: 'You will put four events in order. The events go in the same order as the three paragraphs.',
    wrong: ['Read the chapter again from the start.', 'Stop after each paragraph and say what happened.', 'Put the events in that order. Try again.'],
    check: ['Can I say Yunus’s promise?', 'Can I say what Taptuk asked Yunus to do?', 'Can I use every day and never in two sentences?'],
    use: 'Language Focus, last activity (Say It): describe Yunus in three short sentences. Say that he was ready to serve, say his promise with will, and say one thing he did every day.',
    reflect: 'Yunus was humble and did an ordinary job with care. What is one ordinary job at home you can do well this week?',
  },
  {
    chapter: 'Chapter 5: Straight Wood and the Ego',
    hotspots: ['Straightest Pieces', 'Heart and Ego'],
    goals: ['I can say why Yunus chose straight wood.', 'I can say what Yunus was really training.', 'I can ask a question with Why do you always …?'],
    notice: ['The chapter shows two things: What we see and what is really happening.', 'Look at “It looked like Yunus was working with wood to fix crooked pieces. But in fact, he was training his own heart and ego.”'],
    read: ['Look at the title. How can wood be like the ego?', 'Listen to the chapter once. Follow the text with your eyes.', 'Read paragraph 2 again. Find It looked like and But in fact.'],
    find: ['Paragraph 1: find the question the chapter asks.', 'Paragraph 2: find what happened every time Yunus used the axe.', 'Paragraph 3: find how many years Yunus served his teacher.'],
    words: ['Word Notes: care, ego, corrected, axe.', '“He chose the straightest pieces of wood with the greatest care.” Did he work fast or carefully?', 'Write one sentence: I do my homework with care when ….'],
    languageFocus: 'Put four sentences in order: It looked like …, But in fact …, Every time … and the result. Then build Taptuk’s question: Why do you always bring straight pieces? Always comes before the main verb.',
    sayIt: 'Say the stress: cor-REC-ted, E-go, STRAIGHT-est. Let your voice go down at the end of the question: “Why do you always bring straight pieces?”',
    quick: 'The question asks why Yunus chose only straight wood. Read paragraph 2 before you choose.',
    wrong: ['Go back to paragraph 2.', 'Find “But in fact” and read that sentence again.', 'Try again.'],
    check: ['Can I say what the wood is like?', 'Can I say what Yunus was training?', 'Can I ask a question with Why do you always …?'],
    use: 'Language Focus, last activity (Say It): explain Yunus’s work in four short sentences. Start with It looked like …, then say But in fact …, then Every time …, and last, what the work taught him.',
    reflect: 'Yunus made a bad part of himself better every day. What is one small habit you want to make better?',
  },
  {
    chapter: 'Chapter 6: The Door of Honesty',
    hotspots: ['Honesty and Goodness', 'Lessons from Nature'],
    goals: ['I can say Yunus’s answer to Taptuk.', 'I can say how nature helped Yunus.', 'I can use helped … think, made … purer and If you look closely.'],
    notice: ['Yunus puts crooked wood and a dishonest person together. Both cannot enter the dervish house.', 'Look at “If you look closely, you find a deeper meaning in everything in nature.” First you do something, then something happens.'],
    read: ['Look at the picture. What can you see in nature?', 'Listen to the chapter once. Follow the text with your eyes.', 'Read paragraph 3 again. Find three things in the mountains.'],
    find: ['Paragraph 1: find what Yunus calls the dervish house.', 'Paragraph 2: find what Yunus made purer.', 'Paragraph 3: find what Yunus first learned in the mountains.'],
    words: ['Word Notes: honesty, goodness, creatures, purer.', '“He learned the special language of all creatures.” Name two creatures from paragraph 3.', 'Write one sentence: Honesty is important because ….'],
    languageFocus: 'Match beginnings and endings from paragraph 3, like There are … and Everything tells a story. Then choose think, purer and to be: Helped the dervish think, made his heart purer, learned to be alone.',
    sayIt: 'Say the stress: HON-es-ty, GOOD-ness, CREA-tures, PUR-er. Say “Everything tells a story.” with a clear s in tells.',
    quick: 'The question asks who else cannot enter the dervish house. Read paragraph 1 before you choose.',
    wrong: ['Go back to paragraph 1.', 'Find the word either and read that sentence again.', 'Try again.'],
    check: ['Can I say what Yunus calls the dervish house?', 'Can I say two ways nature helped Yunus?', 'Can I make a sentence with If you look closely, …?'],
    use: 'Language Focus, last activity (Say It): explain how the mountains helped Yunus learn. Describe the place, say how it helped him, and use one sentence with If you look closely, ….',
    reflect: 'Yunus found a lesson in everything in nature. Look at one tree, bird or flower near you. What lesson can it teach you?',
  },
  {
    chapter: 'Chapter 7: A Single Daisy',
    hotspots: ['Only One Flower', 'The Name of Allah'],
    goals: ['I can tell the flower story in order.', 'I can say why Yunus brought only one daisy.', 'I can use some, any and a single.'],
    notice: ['The other dervishes brought many flowers. Yunus brought only one, and some dervishes laughed.', 'Look at “I could not cut any of them.” After not, we use any.'],
    read: ['Look at the title and the picture. How many flowers can you see?', 'Listen to the chapter once. Follow the text with your eyes.', 'Read Yunus’s answer at the end of paragraph 2 again.'],
    find: ['Paragraph 1: find what Taptuk asked his students to do.', 'Paragraph 1: find who was the last to return.', 'Paragraph 2: find what the dervishes whispered.'],
    words: ['Word Notes: bunch, daisy, making fun of, whispered.', '“They whispered in each other’s ears”: did they speak loudly or quietly?', 'Write one sentence: It is unkind to make fun of ….'],
    languageFocus: 'Put five sentences in the order the events happen. Then choose Some, a single and any. We say I could not cut any of them, not I could not cut none.',
    sayIt: 'Say the stress: DAI-sy, WHIS-pered, af-ter-NOON. Say the dervishes’ words very quietly, then say Yunus’s answer in a calm voice.',
    quick: 'The question asks why Yunus did not bring a big bunch of flowers. Read Yunus’s answer at the end of paragraph 2 before you choose.',
    wrong: ['Go back to the end of paragraph 2.', 'Find “wherever I saw a flower” and read that sentence again.', 'Try again.'],
    check: ['Can I tell the story with One day, then and at the end?', 'Can I say why Yunus brought only one daisy?', 'Can I say “I could not cut any of them” correctly?'],
    use: 'Language Focus, last activity (Say It): retell the daisy story in four short sentences. Use all, some, a single, could not and when.',
    reflect: 'Some dervishes made fun of Yunus before they knew his reason. Why is it good to ask before we laugh at someone?',
  },
  {
    chapter: 'Chapter 8: A Meaningful Life',
    hotspots: ['The Daisy’s Words', 'A Fruitful Life'],
    goals: ['I can say what the daisy said to Yunus.', 'I can say Yunus’s lesson about work.', 'I can use must, should, tells us to and helps us.'],
    notice: ['The chapter ends the daisy story. Then it gives the lesson of the two stories.', 'Look at “Every job is important, so we should do it well and correctly for the love of Allah.” so shows the result.'],
    read: ['Look at the title. What makes a life meaningful?', 'Listen to the chapter once. Follow the text with your eyes.', 'Read paragraph 2 again. Find must two times.'],
    find: ['Paragraph 1: find what the daisy asked Yunus to do.', 'Paragraph 2: find two things Yunus tells us to do.', 'Paragraph 2: find what helps us live a meaningful life.'],
    words: ['Word Notes: dried up, dying, meaningful, fruitful.', '“I’m dried up and dying.” Is the daisy fresh?', 'Write one sentence: My day is meaningful when ….'],
    languageFocus: 'Choose which word gives the stronger rule: must or should. Then match beginnings and endings: Yunus tells us …, This helps us … and At least pick me …. After tells us, we use to + verb.',
    sayIt: 'Say the stress: MEAN-ing-ful, FRUIT-ful, cor-RECT-ly. Say must with a strong voice and should with a softer voice.',
    quick: 'The sentence is about which jobs we must do well. Read paragraph 2 before you answer true or false.',
    wrong: ['Go back to paragraph 2.', 'Find “Every job is important” and read that sentence again.', 'Try again.'],
    check: ['Can I say what the daisy wanted?', 'Can I say Yunus’s lesson in one sentence?', 'Can I say one sentence with must and one with should?'],
    use: 'Language Focus, last activity (Say It): give four short pieces of advice for daily life. Use Yunus tells us to …, We must …, We should … and This helps us ….',
    reflect: 'Yunus says every job is important. Choose one small job for tomorrow and do it well, with love.',
  },
];

export const yunusA2SelfStudyGuide: TeacherGuideSection[] = selfPlans.map(p => ({
  chapter: p.chapter,
  timing: 'About 20 minutes',
  objectives: p.goals,
  pedagogy: 'Look, listen and read first. Then find the answer sentences, do the Quick Challenge, and use the chapter’s Language Focus.',
  grammarFocus: p.languageFocus,
  pronunciationFocus: p.sayIt,
  lessonPlan: p.read.join(' '),
  discussionPoints: [p.reflect],
  interactiveTips: [`Tap the picture hotspots “${p.hotspots[0]}” and “${p.hotspots[1]}”.`],
  differentiation: { strugglingLearners: p.wrong.join(' '), fastFinishers: p.use },
  whatToNotice: p.notice,
  readListen: [...p.read, `Tap the picture hotspots “${p.hotspots[0]}” and “${p.hotspots[1]}”.`],
  findAnswerInStory: p.find,
  vocabularyInContext: p.words,
  quickChallengeGuide: p.quick,
  wrongAnswerSupport: p.wrong,
  selfCheck: p.check,
  useWhatYouLearned: p.use,
  reflectionPrompt: p.reflect,
}));

export const yunusA2StudentGuideSections: StudentGuideSection[] = [
  { title: '1. One Chapter at a Time', icon: 'Target', text: 'Study one chapter in one sitting. It takes about 20 minutes. Open “Study Path” to see the steps for your chapter.', points: ['Look at the title and the picture.', 'Listen and follow the text.', 'Read one paragraph at a time.', 'Do the Quick Challenge.', 'Do the Language Focus.'] },
  { title: '2. Listen and Read', icon: 'Ear', text: 'Every chapter has audio. Listen first, then read.', points: ['First time: Listen for the main idea.', 'Second time: Follow the words with your eyes.', 'Stop the audio and say one short sentence again.'] },
  { title: '3. Word Notes and Hotspots', icon: 'BookOpen', text: 'Each chapter has four underlined words. Tap a word to see its Word Note. Tap the two hotspots on the picture for short notes.', points: ['Read the word in its sentence first.', 'Guess the meaning, then check the Word Note.', 'Write the word and one sentence in your notebook.'] },
  { title: '4. Quick Challenge', icon: 'CheckCircle', text: 'Each chapter has one Quick Challenge. Answer first, then read the feedback.', points: ['Wrong answer? Find the answer sentence.', 'Read it again.', 'Try again.'] },
  { title: '5. Language Focus', icon: 'Compass', text: 'Each chapter has three Language Focus activities. Do them after you understand the chapter. They use sentences from the story.', points: ['Activity 1: look at a story sentence and its meaning.', 'Activity 2: practise the words and forms.', 'Activity 3 (Say It): say three or four sentences of your own.'] },
  { title: '6. When It Is Hard', icon: 'HelpCircle', text: 'It is fine to find a chapter hard. Change how you study, not your goal.', points: ['Listen to one paragraph only.', 'Read two or three lines at a time.', 'Look at the picture and the hotspots again.', 'Learn only two words today.'] },
  { title: '7. Values in the Story', icon: 'Heart', text: 'Yunus Emre’s story is about love for Allah, humility, sharing and honesty. Turn each value into one small action.', points: ['Clear words: explain things simply so people understand (Chapter 1).', 'Sharing: Give what you have to people in need (Chapter 2).', 'Humility and service: Do an ordinary job with care (Chapters 4 and 5).', 'Honesty: Be straight, like the straight wood (Chapter 6).', 'Kindness: Do not make fun of people (Chapter 7).', 'Love for Allah: Do every job well (Chapter 8).'] },
  { title: '8. At the End of the Book', icon: 'Stars', text: 'After Chapter 8, do the review pages in this order. Go back to a chapter when an answer is not clear.', points: ['Knowledge Check', 'Vocabulary Challenge', 'Master Glossary', 'Language Review', 'Final Challenge'] },
];

export const yunusA2StudentGuideMetadata: StudentGuideMetadata = {
  title: 'Yunus Emre A2 — Self-Study Guide',
  subtitle: 'Look • Listen • Read • Check • Use',
  level: 'A2',
  language: 'English',
  estimatedStudyTime: 'About 20 minutes per chapter, plus the review pages at the end',
  whoIsThisFor: 'A2 learners who study the story of the poet Yunus Emre at home or on their own.',
  learningGoals: ['Understand the 8 chapters of Yunus Emre’s story.', 'Find the answer sentence in the story.', 'Learn the Word Notes of each chapter.', 'Use each chapter’s Language Focus in your own sentences.', 'Turn humility, sharing and honesty into small actions.'],
  recommendedUse: ['Study one chapter at a time.', 'Listen first, then read.', 'Answer the Quick Challenge before you read the feedback.', 'Do the Language Focus after you understand the chapter.', 'Do the review pages after Chapter 8.'],
};
