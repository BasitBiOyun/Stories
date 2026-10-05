import type { Exercise, VocabularyChallengePair } from '../../../../types';

export const yunusA2QuickChallenges: Record<number, Exercise> = {
  1: { id: 'yunus-a2-quick-1', type: 'matching', matchingHeadings: { left: 'Year', right: 'What happened' }, title: 'Three Years', instructions: 'Match each year with what happened in Chapter 1.', question: 'What happened in each year?', matchingPairs: [{ left: '1240', right: 'Yunus Emre was born in Anatolia.' }, { left: '1273', right: 'Mevlana died.' }, { left: '1320', right: 'Yunus Emre passed away.' }], correctAnswer: { '1240': 'Yunus Emre was born in Anatolia.', '1273': 'Mevlana died.', '1320': 'Yunus Emre passed away.' }, explanation: 'Chapter 1 says Yunus Emre “was born in 1240 in Anatolia.” The last paragraph says: “Mevlana died in 1273 and later Yunus passed away in 1320.”', feedback: { correct: 'Well done! Yunus was born in 1240. Mevlana died in 1273, and Yunus died later, in 1320.', incorrect: 'Look for the years in Chapter 1: one is in the first paragraph and two are in the last paragraph. Who was born? Who died first?' } },
  2: { id: 'yunus-a2-quick-2', type: 'true-false', title: 'Wealth in the Hand', instructions: 'Is the sentence true or false? Use Chapter 2.', question: 'When the dervishes were rich, they kept their money for themselves.', correctAnswer: false, explanation: 'Chapter 2 says their wealth was “not in their hearts, but in their hands to give to charity.” It also says, “They shared what they had with the needy.”', feedback: { correct: 'Correct! The dervishes did not keep their wealth. They shared it with people in need.', incorrect: 'Read the end of the first paragraph again. What did the dervishes do with what they had?' } },
  3: { id: 'yunus-a2-quick-3', type: 'multiple-choice', title: 'A Way of Life', instructions: 'Read the question. Choose the answer from Chapter 3.', question: 'The dervishes had a way of life of their own. How did they live?', options: ['They spent all their days at the madrasa.', 'They ate less, spoke less and slept less.', 'They ate more and slept more than other people.'], correctAnswer: 1, explanation: 'Chapter 3 says: “They ate less, spoke less, slept less, and spent their time on useful activities.” It calls this “a moderate and disciplined life according to Islam.”', feedback: { correct: 'Yes! They ate, spoke and slept less, and they used their time well. This was a disciplined life.', incorrect: 'Read the paragraph after the poem again. Find the sentence after “a way of life of their own”.' } },
  4: { id: 'yunus-a2-quick-4', type: 'sequencing', title: 'Yunus the Woodcutter', instructions: 'Put the events from Chapter 4 in the right order.', question: 'What happened first, next and last?', sequencingItems: [{ id: '1', text: 'Yunus became a student of Taptuk Emre at a young age.' }, { id: '2', text: 'Yunus said, “I will do whatever service you ask of me.”' }, { id: '3', text: 'Taptuk gave Yunus the wood-cutting duties.' }, { id: '4', text: 'Every day, Yunus carried wood on his back from the mountain.' }], correctAnswer: ['1', '2', '3', '4'], explanation: 'First Yunus became Taptuk Emre’s student. Then he told his master, “I will do whatever service you ask of me.” After that, Taptuk “assigned Yunus to the wood-cutting duties”, and every day Yunus carried wood from the mountain.', feedback: { correct: 'Great! Yunus was humble: He promised to serve, and then he did his work every day.', incorrect: 'Read Chapter 4 from the beginning to the end. Find what Yunus said, what Taptuk asked and what Yunus did every day.' } },
  5: { id: 'yunus-a2-quick-5', type: 'multiple-choice', title: 'Straight Wood', instructions: 'Read the question. Choose the answer from Chapter 5.', question: 'Why did Yunus choose only the straightest pieces of wood?', options: ['Straight wood was easier to carry down the mountain.', 'He was training his own heart and ego.', 'Taptuk Emre promised him a gift for it.'], correctAnswer: 1, explanation: 'Chapter 5 asks, “So why was he doing that?” Then it says: “It looked like Yunus was working with wood to fix crooked pieces. But in fact, he was training his own heart and ego.”', feedback: { correct: 'Right! The wood is like Yunus’s ego. Every time he used the axe, he made a bad part of himself better.', incorrect: 'Read the second paragraph of Chapter 5 again. Find the words “But in fact …”.' } },
  6: { id: 'yunus-a2-quick-6', type: 'multiple-choice', title: 'Who Can Enter?', instructions: 'Read the question. Choose the answer from Chapter 6.', question: 'Yunus says that a crooked piece of wood cannot enter the dervish house. Who else cannot enter?', options: ['a poor person', 'a dishonest and insincere person', 'a person who lives alone'], correctAnswer: 1, explanation: 'Yunus answers Taptuk: “this place is a door of honesty and goodness. Not even a crooked piece of wood can enter here. And a dishonest and insincere person cannot enter this place, either.”', feedback: { correct: 'Yes! Crooked wood and a dishonest person cannot enter. The dervish house is a place of honesty and goodness.', incorrect: 'Read Yunus’s answer at the beginning of Chapter 6 again. Find the word “either”.' } },
  7: { id: 'yunus-a2-quick-7', type: 'multiple-choice', title: 'A Single Daisy', instructions: 'Read the question. Choose the answer from Chapter 7.', question: 'Why did Yunus not bring a big bunch of flowers?', options: ['The other dervishes picked all the flowers first.', 'Every flower he saw was saying the name of Allah.', 'Taptuk Emre asked each student for only one flower.'], correctAnswer: 1, explanation: 'Yunus tells Taptuk: “wherever I saw a flower, I heard that it was saying the name of Allah. I could not cut any of them.”', feedback: { correct: 'Right! Yunus heard the flowers remembering Allah, so he could not cut them.', incorrect: 'Read Yunus’s answer to Taptuk at the end of Chapter 7. Find the words “wherever I saw a flower …”.' } },
  8: { id: 'yunus-a2-quick-8', type: 'true-false', title: 'Daily Work', instructions: 'Is the sentence true or false? Use Chapter 8.', question: 'Yunus says that only big and important jobs need to be done well.', correctAnswer: false, explanation: 'Chapter 8 says: “Every job is important, so we should do it well and correctly for the love of Allah.”', feedback: { correct: 'Correct! For Yunus, every job is important, even a simple one like carrying wood.', incorrect: 'Read the last paragraph of Chapter 8 again. Which jobs does Yunus say are important?' } },
};

export const yunusA2KnowledgeCheckExercises: Exercise[] = [
  { id: 'yunus-a2-kc-1-simple-turkish', type: 'multiple-choice', title: 'Easy to Understand', instructions: 'Read the question. Choose the answer.', question: 'Why could people easily understand Yunus Emre’s poems?', options: ['He wrote and said them in simple Turkish.', 'He wrote them only for madrasa students.', 'He wrote them in Syria and Azerbaijan.'], correctAnswer: 0, explanation: 'Chapter 1: “People could easily understand his poems because he wrote and said them in simple Turkish.”', feedback: { correct: 'Yes! He used simple Turkish, so everyone could understand his poems. This also helped the Turkish language.', incorrect: 'Not this one. Read the first paragraph of Chapter 1 again. Find the word “because”.' } },
  { id: 'yunus-a2-kc-2-bad-habits', type: 'true-false', title: 'Bad Habits', instructions: 'Read the sentence. Is it true or false?', question: 'Dervishes tried to keep habits like jealousy and gossiping.', correctAnswer: false, explanation: 'Chapter 2: “They always tried to leave bad habits like jealousy, arrogance, stinginess, greediness, selfishness, or gossiping.”', feedback: { correct: 'Right, it is false. Jealousy and gossiping are bad habits, and dervishes always tried to leave them.', incorrect: 'Read the last sentence of Chapter 2 again. What did dervishes try to do with bad habits?' } },
  { id: 'yunus-a2-kc-3-tongueless', type: 'multiple-choice', title: 'A Dervish Without a Tongue', instructions: 'Read the question. Choose the answer.', question: 'The poem says a dervish must be “tongueless” when people make fun of him. What does this mean?', options: ['He makes fun of them, too.', 'He does not answer them back.', 'He cries with eyes full of tears.'], correctAnswer: 1, explanation: 'Chapter 3: “He must be tongueless when people make fun of him.”', feedback: { correct: 'Yes. He has a tongue, but he stays quiet. He does not answer bad words with bad words.', incorrect: 'Not this one. Read the second part of the poem in Chapter 3. What does a person do with his tongue?' } },
  { id: 'yunus-a2-kc-4-goal-of-service', type: 'multiple-choice', title: 'Why Cut Wood?', instructions: 'Read the question. Choose the answer.', question: 'Taptuk gave Yunus ordinary work like cutting wood. What was the main goal of this work?', options: ['to collect the most wood on the mountain', 'to make him strong for his travels', 'to break his ego and give up bad habits'], correctAnswer: 2, explanation: 'Chapter 4: “Some jobs look ordinary at first glance. The primary goal is to break the ego and give up bad habits.”', feedback: { correct: 'Yes! The work looked ordinary, but its real goal was to make Yunus a better person inside.', incorrect: 'Not this one. Read the second paragraph of Chapter 4 again. Find the words “The primary goal”.' } },
  { id: 'yunus-a2-kc-5-taptuk-noticed', type: 'true-false', title: 'Taptuk Watches Yunus', instructions: 'Read the sentence. Is it true or false?', question: 'Taptuk Emre never noticed what kind of wood Yunus brought.', correctAnswer: false, explanation: 'Chapter 5: “Taptuk Emre noticed that Yunus never carried crooked wood to the house.”', feedback: { correct: 'Right, it is false. Taptuk noticed that Yunus never brought crooked wood, so he asked him why.', incorrect: 'Read the last paragraph of Chapter 5 again. What did Taptuk Emre notice?' } },
  { id: 'yunus-a2-kc-6-lessons-in-nature', type: 'multiple-choice', title: 'Learning from Nature', instructions: 'Read the question. Choose the answer.', question: 'What did Yunus do when he looked at nature?', options: ['He found a lesson in everything in it.', 'He picked every flower that he saw.', 'He looked only for straight wood.'], correctAnswer: 0, explanation: 'Chapter 6: “He looked at nature and found a lesson from everything in it, like reading the Qur’an.”', feedback: { correct: 'Yes! For Yunus, nature was like a book. Everything in it taught him something.', incorrect: 'Not this one. Read the second paragraph of Chapter 6 again. What did Yunus find in nature?' } },
  { id: 'yunus-a2-kc-7-gift-for-flowers', type: 'multiple-choice', title: 'The Flower Task', instructions: 'Read the question. Choose the answer.', question: 'What did Taptuk Emre promise to the student with the most beautiful bunch of flowers?', options: ['He would take that student to Syria.', 'He would give that student a gift.', 'He would give him the wood-cutting duties.'], correctAnswer: 1, explanation: 'Chapter 7: “I will give a gift to whoever prepares the most beautiful bunch of flowers.”', feedback: { correct: 'Yes. Taptuk promised a gift, so all the dervishes ran to the fields to pick flowers.', incorrect: 'Not this one. Read Taptuk’s words at the start of Chapter 7 again.' } },
  { id: 'yunus-a2-kc-8-daisy-wish', type: 'true-false', title: 'The Daisy’s Wish', instructions: 'Read the sentence. Is it true or false?', question: 'The daisy wanted its life to end in the hands of a dervish.', correctAnswer: true, explanation: 'Chapter 8: “At least pick me and let my life end in the hands of a dervish.”', feedback: { correct: 'Right, it is true. The daisy was dying, so it asked Yunus to pick it. It wanted to end its life with a dervish.', incorrect: 'Read the daisy’s words at the start of Chapter 8 again. What did the daisy ask Yunus to do?' } },
];

export const yunusA2VocabularyChallengePairs: VocabularyChallengePair[] = [
  { word: 'guidance', meaning: 'Help and advice about what to do.', partOfSpeech: 'noun', chapter: 1, context: 'Dervishes trained to be good people with moral values under the guidance of a teacher at dervish houses.' },
  { word: 'witnessed', meaning: 'Saw or felt something clearly.', partOfSpeech: 'verb', chapter: 2, context: 'They witnessed the signs of Allah in the whole universe.' },
  { word: 'ordinary', meaning: 'Normal; not special.', partOfSpeech: 'adjective', chapter: 4, context: 'Some jobs look ordinary at first glance.' },
  { word: 'axe', meaning: 'A tool used to cut wood.', partOfSpeech: 'noun', chapter: 5, context: 'Every time he used the axe, he made a bad part of himself better.' },
  { word: 'purer', meaning: 'Cleaner and freer from anything bad.', partOfSpeech: 'adjective', chapter: 6, context: 'During this time, Yunus made his heart purer.' },
  { word: 'whispered', meaning: 'Spoke very quietly.', partOfSpeech: 'verb', chapter: 7, context: 'They whispered in each other’s ears, “Just look at him! All he could find was a single daisy!”' },
];

export const yunusA2LanguageReviewExercises: Exercise[] = [
  // LOOK — notice what the book's language does, across chapters.
  {
    id: 'yunus-a2-language-review-1-past-biography', type: 'drag-drop', title: 'Look: Two Kinds of Past',
    instructions: 'Look at the past verb. Put each sentence in the right group.',
    question: 'How does each verb show the past?',
    dragDropGroups: [
      { group: 'The verb adds -ed', items: ['He traveled to many cities in Anatolia …', 'Yunus served his teacher Taptuk Emre …', 'They whispered in each other’s ears …'] },
      { group: 'The verb changes (no -ed)', items: ['He told his master …', '… found a lesson from everything in it.', 'All the dervishes went out into the fields.'] },
    ],
    correctAnswer: {
      'The verb adds -ed': ['He traveled to many cities in Anatolia …', 'Yunus served his teacher Taptuk Emre …', 'They whispered in each other’s ears …'],
      'The verb changes (no -ed)': ['He told his master …', '… found a lesson from everything in it.', 'All the dervishes went out into the fields.'],
    },
    explanation: 'The book tells Yunus’s story in the past. Many verbs add -ed: travel → traveled, serve → served, whisper → whispered. Some verbs change and do not take -ed: tell → told, find → found, go → went. Learn these past forms one by one.',
    feedback: { correct: 'Well done. You found the -ed verbs and the verbs that change.', incorrect: 'Say the verb today (travel, tell, go …). Does the past form only add -ed, or does it change?' },
  },
  {
    id: 'yunus-a2-language-review-2-how-often-how-many', type: 'matching', title: 'Look: How Often? How Many?',
    matchingHeadings: { left: 'From the book', right: 'Meaning' },
    instructions: 'Match each phrase from the book with its meaning.',
    question: 'What do always, never, a single and some mean?',
    matchingPairs: [
      { left: 'they always called themselves poor', right: 'at all times' },
      { left: 'he never cut or brought green or crooked wood', right: 'not one time' },
      { left: 'he returned with a single daisy', right: 'only one' },
      { left: 'Some dervishes were making fun of Yunus.', right: 'part of a group, not all of them' },
    ],
    correctAnswer: {
      'they always called themselves poor': 'at all times',
      'he never cut or brought green or crooked wood': 'not one time',
      'he returned with a single daisy': 'only one',
      'Some dervishes were making fun of Yunus.': 'part of a group, not all of them',
    },
    explanation: '“Always” and “never” tell us how often: always = at all times, never = not one time. “A single” and “some” tell us how many: A single = only one, some = a part of the group. These small words make a story exact.',
    feedback: { correct: 'Correct. Always and never tell us how often. A single and some tell us how many.', incorrect: 'Look at the small word in each sentence: always, never, a single, some. Is it about time or about number?' },
  },
  {
    id: 'yunus-a2-language-review-3-appearance-reality', type: 'multiple-choice', title: 'Look: It Looks Like …',
    instructions: 'Read the sentences. Then choose the best answer.',
    question: 'Chapter 4: “Some jobs look ordinary at first glance.” Chapter 5: “It looked like Yunus was working with wood to fix crooked pieces. But in fact, he was training his own heart and ego.” What do “look” and “It looked like” tell us?',
    options: ['what is really true', 'what we see at first', 'what will happen later'],
    correctAnswer: 1,
    explanation: '“Look” and “It looked like …” tell us what we see at first. “But in fact …” then tells us what is really true: The work looks like wood-cutting, but it trains Yunus’s heart.',
    feedback: { correct: 'Correct. “It looked like” is the first picture. “But in fact” gives the real meaning.', incorrect: 'Read Chapter 5 again. Which words come first: what we see, or what is true?' },
  },
  // PRACTISE — use the forms in the book's own sentences.
  {
    id: 'yunus-a2-language-review-4-linking-ideas', type: 'word-bank', title: 'Practise: Reason, Result, Different Idea',
    instructions: 'Fill the gaps from the word bank. Two words are not needed.',
    question: 'Which word fits each gap?',
    fillBlanksText: 'People could easily understand his poems [blank] he wrote and said them in simple Turkish. … Dervishes were fully aware that they were in need of Allah in every way. [blank], even if they were rich, they always called themselves poor. … they could call themselves poor, [blank] their hearts were very rich. … Every job is important, [blank] we should do it well and correctly …',
    wordBank: ['because', 'That is why', 'but', 'so', 'when', 'Because of'],
    correctAnswer: ['because', 'That is why', 'but', 'so'],
    explanation: '“Because” + a sentence gives a reason. “That is why” and “so” give a result: First the reason, then what happens. “But” gives a different idea: Poor, but rich hearts. “Because of” needs a noun after it (“because of the Creator”), not a sentence.',
    feedback: { correct: 'Well done. You linked reasons, results and different ideas.', incorrect: 'For each gap, ask: Does the next part give a reason, a result, or a different idea? Check Chapter 1, Chapter 2 and the end of Chapter 8.' },
  },
  {
    id: 'yunus-a2-language-review-5-verb-patterns', type: 'choose-form', title: 'Practise: What Comes After the Verb?',
    instructions: 'Choose the correct form for each sentence from the book.',
    question: 'What comes after “taught him how”, “helped him” and “let my life”?',
    formChoices: [
      { sentence: 'This service taught him how [choice] a good heart and do the right thing.', options: ['have', 'to have', 'having'], answer: 1 },
      { sentence: 'For Yunus, woodcutting in nature helped him [choice] a better person.', options: ['becoming', 'became', 'become'], answer: 2 },
      { sentence: 'At least pick me and let my life [choice] in the hands of a dervish.', options: ['end', 'to end', 'ending'], answer: 0 },
    ],
    correctAnswer: null,
    explanation: 'After “how”, use “to + verb”: “taught him how to have”. After “help + person” and “let + person/thing”, use the base verb: “helped him become”, “let my life end”.',
    feedback: { correct: 'Correct. How + to + verb; help and let + base verb.', incorrect: 'Look at the verb before the gap: taught … how, helped …, let …. Check Chapters 5, 6 and 8.' },
  },
  {
    id: 'yunus-a2-language-review-6-fix-the-mistake', type: 'error-correction', title: 'Practise: Fix One Mistake',
    instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
    question: 'Can you fix the verb in each sentence?',
    errorItems: [
      { sentence: 'He choosed the straightest pieces of wood with the greatest care.', error: 'choosed', options: ['chose', 'choosing', 'chooses'], answer: 0 },
      { sentence: 'They picked flowers and runned back to their teacher.', error: 'runned', options: ['run', 'ran', 'running'], answer: 1 },
      { sentence: 'He says that we must to always do our best when we work.', error: 'must to', options: ['musts', 'must be', 'must'], answer: 2 },
    ],
    correctAnswer: null,
    explanation: '“Choose” and “run” change in the past: chose, ran (not choosed, runned). After “must”, use the base verb without “to”: “we must always do our best”.',
    feedback: { correct: 'Well done. You fixed all three sentences.', incorrect: 'Compare with the book: Chapter 5 (the straightest pieces), Chapter 7 (the flowers) and Chapter 8 (do our best).' },
  },
  {
    id: 'yunus-a2-language-review-7-every-time', type: 'sentence-building', title: 'Practise: Every Time …',
    instructions: 'Put the words in order to make the sentence from Chapter 5.',
    question: 'What changed each time Yunus worked?',
    sentenceChunks: ['Every time', 'he used the axe,', 'he made', 'a bad part of himself', 'better.'],
    correctAnswer: null,
    explanation: '“Every time + action” means: again and again, each time this happens. “Make + something + adjective” shows a change: A bad part becomes better. Chapter 6 uses the same pattern: “Yunus made his heart purer.”',
    feedback: { correct: 'Well done. Every time … shows a repeated action, and made … better shows the change.', incorrect: 'Start with the time words “Every time”. Then say what he did, and what he made better.' },
  },
  // USE — take the language into a new, everyday context.
  {
    id: 'yunus-a2-language-review-8-new-context', type: 'word-bank', title: 'Use: A Helper at School',
    instructions: 'Fill the gaps in this new text. Two words are not needed.',
    question: 'Can you use the book’s words in a school story?',
    fillBlanksText: 'Mrs Ayşe works in our school kitchen. [blank] day, she cooks lunch for many students. She [blank] comes late. It looks like an easy job, [blank] in fact it is hard work. [blank], we always say “thank you” to her.',
    wordBank: ['Every', 'never', 'but', 'That is why', 'some', 'because'],
    correctAnswer: ['Every', 'never', 'but', 'That is why'],
    explanation: '“Every day” shows a daily habit. “Never” means not one time. “It looks like …, but in fact …” gives the first picture and then the truth. “That is why” gives the result. Like Yunus’s story, the text says that ordinary work is important.',
    feedback: { correct: 'Well done. You used the book’s language in a new place.', incorrect: 'Ask for each gap: How often? what we see or what is true? a reason or a result?' },
  },
  {
    id: 'yunus-a2-language-review-9-transfer', type: 'reflection', title: 'Use: An Everyday Hero',
    instructions: 'Write 4–5 sentences about a helper. Tell a partner first.',
    question: 'Who helps others every day in your life?',
    correctAnswer: null,
    explanation: 'Example: “Mr Ali is our school caretaker. Every day, he opens the doors at seven. It looks like an easy job, but in fact he works very hard. Last winter, he fixed the heater in our classroom. His job is important, so we should keep our school clean. This helps us study well.”',
    feedback: { correct: 'Check your sentences: past verbs, how often, It looks like … but in fact …, so, should, helps us.', incorrect: '' },
    discussionPrompts: [
      { question: 'Sentence 1 — Say how often: “Every day, he/she …” or “He/She never …”', mode: 'Individual' },
      { question: 'Sentence 2 — Give one past event: “Last week, he/she …”', mode: 'Individual' },
      { question: 'Sentence 3 — Say how it looks and what is true: “It looks like …, but in fact …”', mode: 'Pair' },
      { question: 'Sentence 4 — Give the result: “His/Her job is important, so we should … . This helps us …”', mode: 'Pair' },
    ],
  },
];

export const yunusA2ManualFinalChallengeExercises: Exercise[] = [
{ id: 'yunus-a2-final-1', type: 'fill-blanks', title: 'Schools in Yunus’s Time', instructions: 'Complete the sentence from Chapter 1 with one word: madrasas, mosques or markets.', question: 'What were schools called at that time?', fillBlanksText: 'At that time, schools were called [blank].', correctAnswer: ['madrasas'], explanation: 'Chapter 1 says: “At that time, schools were called madrasas. After he completed his madrasa education, he followed the way of the dervishes and became a dervish.”', feedback: { correct: 'Yes. Yunus first studied at a madrasa and then chose the way of the dervishes.', incorrect: 'Read the start of the second paragraph of Chapter 1.' } },
{ id: 'yunus-a2-final-2', type: 'multiple-choice', title: 'Poems for Today', instructions: 'Choose the best answer.', question: 'Why are Yunus Emre’s poems still important for Turkish culture today?', options: ['They are written in a very old and difficult language.', 'They have important moral lessons.', 'They tell the history of the Anatolian cities.'], correctAnswer: 1, explanation: 'Chapter 1 says: “His poems have important moral lessons. These lessons are still very important for Turkish culture today.”', feedback: { correct: 'Yes. The lessons in his poems are still alive today.', incorrect: 'Read the first paragraph of Chapter 1. What do his poems have?' } },
{ id: 'yunus-a2-final-3', type: 'true-false', title: 'How the Dervishes Behaved', instructions: 'Is the sentence true or false?', question: 'The dervishes were often cold and sulky with other people.', correctAnswer: false, explanation: 'Chapter 2 says: “They were kind and cheerful; they were not cold or sulky. They tried to understand everyone and found a solution to their problems.”', feedback: { correct: 'Right. The dervishes were kind and cheerful, and they tried to understand everyone.', incorrect: 'Read the last paragraph of Chapter 2. How did the dervishes treat people?' } },
{ id: 'yunus-a2-final-4', type: 'multiple-choice', title: 'A Poem About a Hard Path', instructions: 'Choose the best answer.', question: 'Yunus Emre wrote a poem that begins with “You cannot be a dervish.” What does this poem show?', options: ['The path of dervishhood was very difficult.', 'Every person can become a dervish in one day.', 'Dervishes did not like to write poems.'], correctAnswer: 0, explanation: 'Chapter 3 says: “In fact, the path of dervishhood was a very difficult one.” Yunus says this in his poem that begins with the words “You cannot be a dervish.”', feedback: { correct: 'Yes. The poem lists hard things a dervish must do, so the path was not easy.', incorrect: 'Read the sentences just before the poem in Chapter 3.' } },
{ id: 'yunus-a2-final-5', type: 'multiple-choice', title: 'The First Condition', instructions: 'Choose the best answer.', question: 'What was the first condition to be a student in Taptuk Emre’s dervish house?', options: ['to know many long poems by heart', 'to come from a rich and famous family', 'to be humble and ready to serve others'], correctAnswer: 2, explanation: 'Chapter 4 says: “In Taptuk Emre’s dervish house, the first condition to be a student was to be humble and willing to serve people and all creatures.”', feedback: { correct: 'Yes. A student had to be humble and ready to serve people and all living things.', incorrect: 'Read the first paragraph of Chapter 4.' } },
{ id: 'yunus-a2-final-6', type: 'matching', title: 'Word Meanings', instructions: 'Match each word with its meaning in the story.', question: 'What does each word mean?', matchingPairs: [{ left: 'generous-hearted', right: 'happy to give to others' }, { left: 'moderate', right: 'not too much and not too little' }, { left: 'crooked', right: 'not straight' }, { left: 'fruitful', right: 'bringing good results' }], correctAnswer: { 'generous-hearted': 'happy to give to others', moderate: 'not too much and not too little', crooked: 'not straight', fruitful: 'bringing good results' }, explanation: 'Chapter 2: “Dervishes were generous-hearted and open-handed.” Chapter 3: “Dervishes lived a moderate and disciplined life according to Islam.” Chapter 5: “Taptuk Emre noticed that Yunus never carried crooked wood to the house.” Chapter 8: “This helps us live a meaningful and fruitful life.”', feedback: { correct: 'Yes. You found the meaning of each word from its sentence.', incorrect: 'Read each word in its sentence in Chapters 2, 3, 5 and 8.' } },
{ id: 'yunus-a2-final-7', type: 'true-false', title: 'Alone with Allah', instructions: 'Is the sentence true or false?', question: 'Yunus first learned to be alone with Allah in the mountains.', correctAnswer: true, explanation: 'Chapter 6 says: “He first learned to be alone with Allah in the mountains. The mountains are quiet and far from people.”', feedback: { correct: 'True. The quiet mountains helped Yunus think about Allah.', incorrect: 'Read the last paragraph of Chapter 6. Where did Yunus first learn this?' } },
{ id: 'yunus-a2-final-8', type: 'matching', title: 'Who Said It?', instructions: 'Match each speaker with their words.', question: 'Who said these words?', matchingPairs: [{ left: 'Yunus', right: '“Crooked wood cannot go into the dervish house.”' }, { left: 'Taptuk Emre', right: '“Today, all of you go up the mountain and bring me flowers.”' }, { left: 'Some dervishes', right: '“Just look at him! All he could find was a single daisy!”' }, { left: 'The daisy', right: '“My time is up now; I’m dried up and dying.”' }], correctAnswer: { Yunus: '“Crooked wood cannot go into the dervish house.”', 'Taptuk Emre': '“Today, all of you go up the mountain and bring me flowers.”', 'Some dervishes': '“Just look at him! All he could find was a single daisy!”', 'The daisy': '“My time is up now; I’m dried up and dying.”' }, explanation: 'Chapter 4: Yunus always said: “Crooked wood cannot go into the dervish house.” Chapter 7: Taptuk Emre said to his students, “Today, all of you go up the mountain and bring me flowers.” The dervishes whispered, “Just look at him! All he could find was a single daisy!” Chapter 8: the daisy says, “My time is up now; I’m dried up and dying.”', feedback: { correct: 'Yes. You remembered who said each sentence.', incorrect: 'Look again at Chapters 4, 7 and 8.' } },
{ id: 'yunus-a2-final-9', type: 'fill-blanks', title: 'Back from the Fields', instructions: 'Complete the sentence from Chapter 7 with one word: last, first or second.', question: 'When did Yunus come back from the fields?', fillBlanksText: 'Yunus was the [blank] to return.', correctAnswer: ['last'], explanation: 'Chapter 7 says: “They picked flowers and ran back to their teacher. Yunus was the last to return. In the late afternoon, he returned with a single daisy.”', feedback: { correct: 'Yes. The others ran back quickly, but Yunus came back late with one daisy.', incorrect: 'Read the end of the first paragraph of Chapter 7.' } },
{ id: 'yunus-a2-final-10', type: 'sequencing', title: 'Yunus’s Path', instructions: 'Put these events in the order of the story.', question: 'What happened first, next and last?', sequencingItems: [{ id: '3', text: 'Taptuk asks why Yunus always brings straight wood.' }, { id: '1', text: 'Yunus completes his madrasa education.' }, { id: '5', text: 'Yunus returns with a single daisy.' }, { id: '2', text: 'Yunus serves his teacher for forty years.' }, { id: '4', text: 'Taptuk sends his students to bring flowers.' }], correctAnswer: ['1', '2', '3', '4', '5'], explanation: 'The madrasa (Chapter 1), forty years of service (Chapter 5), Taptuk’s question (Chapter 5), the flower task (Chapter 7) and the single daisy (Chapter 7).', feedback: { correct: 'Yes. Yunus studied, served for many years, and then learned through the wood and the flowers.', incorrect: 'Remember that Taptuk asked about the wood after Yunus had served for forty years.' } },
];
