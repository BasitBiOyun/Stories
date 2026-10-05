import type { Exercise, VocabularyChallengePair } from '../../../../types';

export const gevherNesibeA2QuickChallenges: Record<number, Exercise> = {
  1: { id: 'gevhernesibe-a2-quick-1', type: 'multiple-choice', title: 'First in the World', instructions: 'Read the question. Choose the answer from Chapter 1.', question: 'What makes the Gevher Nesibe Hospital and Medical School the first in the world?', options: ['It was the biggest hospital in Europe.', 'It had a hospital and a medical school together.', 'It was the first school for girls.'], correctAnswer: 1, explanation: 'Chapter 1 says: “It is also the first place in the world with a hospital and a medical school together.”', feedback: { correct: 'Yes! Students learned and helped patients in one place.', incorrect: 'Read the first paragraph of Chapter 1 again. Find the words “the first place in the world”.' } },
  2: { id: 'gevhernesibe-a2-quick-2', type: 'sequencing', title: 'A Sad Story', instructions: 'Put the events from Chapter 2 in the right order.', question: 'What happened first, next and last?', sequencingItems: [{ id: '1', text: 'Gevher Nesibe loved a young commander.' }, { id: '2', text: 'The Sultan sent the commander away to war.' }, { id: '3', text: 'The commander died in battle.' }, { id: '4', text: 'Gevher Nesibe got a bad illness.' }], correctAnswer: ['1', '2', '3', '4'], explanation: 'Chapter 2: “When she was a young girl, she loved a young commander.” Then “the Sultan sent the young commander away to war.” “Some time later, the commander died in battle. Gevher Nesibe became very sad and got a bad illness.”', feedback: { correct: 'Well done! First love, then war, then the commander’s death, and then her illness.', incorrect: 'Read Chapter 2 again from the beginning. Look for the words “To separate them” and “Some time later”.' } },
  3: { id: 'gevhernesibe-a2-quick-3', type: 'true-false', title: 'Who Can Come?', instructions: 'Is the sentence true or false? Use Chapter 3.', question: 'In her last wish, Gevher Nesibe said that only rich people could use the hospital.', correctAnswer: false, explanation: 'Chapter 3 says: “Nobody should pay any money. This place must be free for everyone.”', feedback: { correct: 'Correct! She wanted the hospital to be free for everyone.', incorrect: 'Read the end of her words in Chapter 3. Find the word “everyone”.' } },
  4: { id: 'gevhernesibe-a2-quick-4', type: 'multiple-choice', title: 'Two Buildings', instructions: 'Read the question. Choose the answer from Chapter 4.', question: 'Why do people call the two buildings the ‘Twin Madrasas’?', options: ['They are next to each other.', 'Two brothers built them.', 'They opened on the same day.'], correctAnswer: 0, explanation: 'Chapter 4 says: “Because the two buildings are next to each other, people call them the ‘Twin Madrasas.’”', feedback: { correct: 'Yes! The school and the hospital stand side by side, like twins.', incorrect: 'Read the second paragraph of Chapter 4 again. Find the word “Because”.' } },
  5: { id: 'gevhernesibe-a2-quick-5', type: 'matching', matchingHeadings: { left: 'Place', right: 'What students did there' }, title: 'Where Did They Learn?', instructions: 'Match each place with what Chapter 5 says about it.', question: 'What did students do in each place?', matchingPairs: [{ left: 'the Gıyâsiye', right: 'They learned lessons.' }, { left: 'the Şifâiye', right: 'They worked with real patients.' }, { left: 'the open gardens', right: 'They had lessons in the summer.' }], correctAnswer: { 'the Gıyâsiye': 'They learned lessons.', 'the Şifâiye': 'They worked with real patients.', 'the open gardens': 'They had lessons in the summer.' }, explanation: 'Chapter 5 says: “They learned lessons at the Gıyâsiye and worked with real patients at the Şifâiye.” It also says: “In the summer, lessons were in the large open gardens.”', feedback: { correct: 'Well done! Students learned in class, at the patients’ side and in the gardens.', incorrect: 'Read Chapter 5 again. Find the names Gıyâsiye and Şifâiye, then the word “summer”.' } },
  6: { id: 'gevhernesibe-a2-quick-6', type: 'multiple-choice', title: 'Important Books', instructions: 'Read the question. Choose the answer from Chapter 6.', question: 'Whose books did the students especially read?', options: ['the books of Mevlânâ', 'the books of İbn Sînâ', 'the books of Sultan Mahmud II'], correctAnswer: 1, explanation: 'Chapter 6 says: “Students read the most important medical books of that time, especially the books of İbn Sînâ.”', feedback: { correct: 'Yes! İbn Sînâ wrote the most important medical books of that time.', incorrect: 'Read Chapter 6 again. Find the word “especially”.' } },
  7: { id: 'gevhernesibe-a2-quick-7', type: 'multiple-choice', title: 'From One Building to the Other', instructions: 'Read the question. Choose the answer from Chapter 7.', question: 'What connects the two buildings?', options: ['a small garden', 'a long hall', 'a covered bridge'], correctAnswer: 1, explanation: 'Chapter 7 says: “A long hall connects the two buildings.”', feedback: { correct: 'Right! People walked through a long hall from one building to the other.', incorrect: 'Read the first sentence of Chapter 7 again.' } },
  8: { id: 'gevhernesibe-a2-quick-8', type: 'multiple-choice', title: 'Help for the Mind', instructions: 'Read the question. Choose the answer from Chapter 8.', question: 'How did doctors help patients with mental illnesses?', options: ['They used music.', 'They sent them home.', 'They gave them a diploma.'], correctAnswer: 0, explanation: 'Chapter 8 says: “The center also had a special part for people with mental illnesses, with 18 rooms. Doctors used music to help these patients.”', feedback: { correct: 'Yes! Music helped these patients.', incorrect: 'Read the first paragraph of Chapter 8 again. Find the words “to help these patients”.' } },
  9: { id: 'gevhernesibe-a2-quick-9', type: 'multiple-choice', title: 'A Diploma', instructions: 'Read the question. Choose the answer from Chapter 9.', question: 'What did the students’ diploma show?', options: ['the names of their teachers and older scientists', 'the names of their mothers and fathers', 'the price of the school'], correctAnswer: 0, explanation: 'Chapter 9 says: “When they finished school, they got a diploma. This document showed the names of their teachers and older scientists.”', feedback: { correct: 'Right! The diploma showed who taught them.', incorrect: 'Read the first paragraph of Chapter 9 again. Find the word “diploma”.' } },
  10: { id: 'gevhernesibe-a2-quick-10', type: 'matching', matchingHeadings: { left: 'Scientist', right: 'What he said or showed' }, title: 'Three Scientists and Music', instructions: 'Match each scientist with his idea in Chapter 10.', question: 'What did each scientist say or show?', matchingPairs: [{ left: 'İbn Sînâ', right: 'Good words and music could help sick people.' }, { left: 'Er-Râzî', right: 'Doctors should help sad and stressed patients with music.' }, { left: 'Fârâbî', right: 'Music changed human feelings.' }], correctAnswer: { 'İbn Sînâ': 'Good words and music could help sick people.', 'Er-Râzî': 'Doctors should help sad and stressed patients with music.', 'Fârâbî': 'Music changed human feelings.' }, explanation: 'Chapter 10: İbn Sînâ “believed that good words from loved ones and music could help sick people.” Er-Râzî “said that doctors should help sad and stressed patients with music.” Fârâbî “studied how music changed human feelings.”', feedback: { correct: 'Well done! Three great scientists believed music could help people.', incorrect: 'Read Chapter 10 again. Find each name and read the words after it.' } },
  11: { id: 'gevhernesibe-a2-quick-11', type: 'true-false', title: 'Her Own Story', instructions: 'Is the sentence true or false? Use Chapter 11.', question: 'In the end, Gevher Nesibe married the love of her life.', correctAnswer: false, explanation: 'Chapter 11 says: “Gevher Nesibe Sultan never married the love of her life. But people loved her very much, and everyone remembers her today.”', feedback: { correct: 'Correct! She never married him, but people remember her today.', incorrect: 'Read the last paragraph of Chapter 11 again. Find the word “never”.' } },
};

export const gevherNesibeA2KnowledgeCheckExercises: Exercise[] = [
  { id: 'gevhernesibe-a2-kc-1-builder', type: 'multiple-choice', title: 'Who Built It?', instructions: 'Read the question. Choose the answer.', question: 'Who built the medical center in Kayseri?', options: ['Sultan Mahmud II', 'Gıyâseddin Keyhusrev I', 'Kılıçarslan II'], correctAnswer: 1, explanation: 'Chapter 1: “The Anatolian Seljuk ruler, Gıyâseddin Keyhusrev I, built this medical center for his sister, Gevher Nesibe Sultan.”', feedback: { correct: 'Yes! The Seljuk ruler built it for his sister.', incorrect: 'Not this one. Read the last paragraph of Chapter 1 again. Find the word “built”.' } },
  { id: 'gevhernesibe-a2-kc-2-museum', type: 'true-false', title: 'The Building Today', instructions: 'Read the sentence. Is it true or false?', question: 'Today, the old building is a museum.', correctAnswer: true, explanation: 'Chapter 1: “Today, this old building is the Museum of the Seljuk Civilization.”', feedback: { correct: 'Right, it is true. People can visit it as a museum today.', incorrect: 'Read the last sentence of Chapter 1 again. Find the word “Today”.' } },
  { id: 'gevhernesibe-a2-kc-3-young', type: 'multiple-choice', title: 'A Young Death', instructions: 'Read the question. Choose the answer.', question: 'Why did Gevher Nesibe die at a young age?', options: ['She was ill, and Kayseri did not have a good hospital.', 'She went to war with the commander.', 'She did not want to marry anyone.'], correctAnswer: 0, explanation: 'Chapter 2: “Gevher Nesibe became very sad and got a bad illness. At that time, Kayseri did not have a good hospital, so she died at a young age.”', feedback: { correct: 'Yes. There was no good hospital to help her. That is why her wish was so important.', incorrect: 'Not this one. Read the second paragraph of Chapter 2 again. Find the word “so”.' } },
  { id: 'gevhernesibe-a2-kc-4-money', type: 'multiple-choice', title: 'Her Money', instructions: 'Read the question. Choose the answer.', question: 'What did Gevher Nesibe ask her brother to do with all her money?', options: ['to give it to the commander’s family', 'to build a hospital', 'to build a new palace'], correctAnswer: 1, explanation: 'Chapter 3: “Please use all my money to build a hospital for me.”', feedback: { correct: 'Yes! She wanted a hospital for sick people.', incorrect: 'Not this one. Read her words in Chapter 3 again. Find the words “all my money”.' } },
  { id: 'gevhernesibe-a2-kc-5-two-years', type: 'true-false', title: 'Building the Hospital', instructions: 'Read the sentence. Is it true or false?', question: 'It took ten years to build the hospital.', correctAnswer: false, explanation: 'Chapter 4: “It took two years to build the hospital.”', feedback: { correct: 'Right, it is false. It took two years.', incorrect: 'Read the first paragraph of Chapter 4 again. Find the words “It took”.' } },
  { id: 'gevhernesibe-a2-kc-6-heating', type: 'multiple-choice', title: 'A Warm School', instructions: 'Read the question. Choose the answer.', question: 'How did the heating system under the floor work?', options: ['It used fire from the kitchen.', 'It used hot steam from a bathhouse.', 'It used warm water from the garden pool.'], correctAnswer: 1, explanation: 'Chapter 5: “History books show that the buildings had a heating system under the floor. It used hot steam from a bathhouse near the school.”', feedback: { correct: 'Yes! Hot steam from a bathhouse warmed the floors.', incorrect: 'Not this one. Read the first paragraph of Chapter 5 again. Find the word “steam”.' } },
  { id: 'gevhernesibe-a2-kc-7-second-part', type: 'multiple-choice', title: 'Two Parts of Education', instructions: 'Read the question. Choose the answer.', question: 'What did students learn in the second part of their education?', options: ['mathematics and physics', 'Islamic sciences', 'music and art'], correctAnswer: 1, explanation: 'Chapter 9: “In the first part, students took classes in mathematics, physics, languages, philosophy, and medicine. … In the second part, students learned Islamic sciences.”', feedback: { correct: 'Yes! Mathematics and physics were in the first part.', incorrect: 'Not this one. Read the second paragraph of Chapter 9 again. Find the words “In the second part”.' } },
  { id: 'gevhernesibe-a2-kc-8-advanced', type: 'true-false', title: 'Ahead of Europe', instructions: 'Read the sentence. Is it true or false?', question: 'The Gevher Nesibe Hospital was more advanced than the first famous medical universities in Europe.', correctAnswer: true, explanation: 'Chapter 11: “It was more advanced than the first famous medical universities in Europe.”', feedback: { correct: 'Right, it is true. It used the knowledge of many centuries.', incorrect: 'Read the first paragraph of Chapter 11 again. Find the words “more advanced”.' } },
];

export const gevherNesibeA2VocabularyChallengePairs: VocabularyChallengePair[] = [
  { word: 'commander', meaning: 'A person who leads a group of soldiers.', partOfSpeech: 'noun', chapter: 2, context: 'When she was a young girl, she loved a young commander.' },
  { word: 'free', meaning: 'Costing no money.', partOfSpeech: 'adjective', chapter: 3, context: 'This place must be free for everyone.”' },
  { word: 'come true', meaning: 'Happen in real life, just like a wish or a dream.', partOfSpeech: 'verb', chapter: 4, context: 'To make his sister’s wish come true, Gıyâseddin Keyhusrev built a medical school (Gıyâsiye Medresesi) and a hospital (Şifâiye).' },
  { word: 'ancient', meaning: 'Very old; from a time long, long ago.', partOfSpeech: 'adjective', chapter: 6, context: 'They also read books by ancient Greek doctors like Hippocrates.' },
  { word: 'served', meaning: 'Worked for people and helped them for a long time.', partOfSpeech: 'verb', chapter: 9, context: 'The hospital served patients until the early 1900s.' },
  { word: 'joy', meaning: 'A feeling of great happiness.', partOfSpeech: 'noun', chapter: 10, context: 'He showed that music gave people joy, fear, or comfort.' },
];

export const gevherNesibeA2LanguageReviewExercises: Exercise[] = [
  // LOOK — notice what the book's language does, across chapters.
  {
    id: 'gevhernesibe-a2-language-review-1-there-was-were', type: 'drag-drop', title: 'Look: There Was, There Were',
    instructions: 'Look at the noun after was or were. Put each sentence in the right group.',
    question: 'Is it one thing, or more than one?',
    dragDropGroups: [
      { group: 'There was + one thing', items: ['There was no kitchen space inside the center.', 'There was also a bathhouse inside the building.', 'There was also a famous eye doctor.'] },
      { group: 'There were + more than one', items: ['Inside, there were four round windows in the old Seljuk style.', 'In history, there were many hospitals and medical schools.'] },
    ],
    correctAnswer: {
      'There was + one thing': ['There was no kitchen space inside the center.', 'There was also a bathhouse inside the building.', 'There was also a famous eye doctor.'],
      'There were + more than one': ['Inside, there were four round windows in the old Seljuk style.', 'In history, there were many hospitals and medical schools.'],
    },
    explanation: 'The book describes a building in the past, so it uses “there was” and “there were”. Use “there was” with one thing (a bathhouse, a famous eye doctor, no kitchen space). Use “there were” with more than one (four round windows, many hospitals).',
    feedback: { correct: 'Well done. One thing → there was; more than one → there were.', incorrect: 'Look at the noun after the verb. Is it one bathhouse, or four windows?' },
  },
  {
    id: 'gevhernesibe-a2-language-review-2-must-should', type: 'multiple-choice', title: 'Look: Must and Should',
    instructions: 'Read the sentences. Then choose the best answer.',
    question: 'Chapter 3: “Nobody should pay any money. This place must be free for everyone.” Chapter 10: “… doctors must make patients’ minds and hearts stronger.” What do “should” and “must” do here?',
    options: ['They tell us what happened in the past.', 'They say what is right or necessary.', 'They ask a question.'],
    correctAnswer: 1,
    explanation: '“Must” and “should” say what is necessary or right. “Must” is very strong: The hospital must be free. “Should” gives a rule or good advice: Nobody should pay. After must and should, use the base verb: must be, should pay, must make.',
    feedback: { correct: 'Correct. Must and should + base verb say what is necessary or right.', incorrect: 'Is Gevher Nesibe telling a story here, or saying what is right for the hospital?' },
  },
  {
    id: 'gevhernesibe-a2-language-review-3-comparing', type: 'matching', title: 'Look: Old, Older, the Oldest',
    matchingHeadings: { left: 'From the book', right: 'It tells us …' },
    instructions: 'Match each phrase from the book with its meaning.',
    question: 'What does each phrase tell us?',
    matchingPairs: [
      { left: 'the oldest Seljuk hospital in Anatolia', right: 'It is older than all the others.' },
      { left: 'more advanced than the first famous medical universities', right: 'It compares two things.' },
      { left: 'very similar to the team at the Keykâvus Hospital', right: 'It is almost the same.' },
    ],
    correctAnswer: {
      'the oldest Seljuk hospital in Anatolia': 'It is older than all the others.',
      'more advanced than the first famous medical universities': 'It compares two things.',
      'very similar to the team at the Keykâvus Hospital': 'It is almost the same.',
    },
    explanation: '“The oldest” puts one thing at the top of a group (Chapter 1). “More advanced than” compares two things; long adjectives use more … than (Chapter 11). “Similar to” says two things are almost the same (Chapter 5).',
    feedback: { correct: 'Correct. The -est / the most for the top, more … than for two things, similar to for almost the same.', incorrect: 'Look for “the”, “than” and “to” in each phrase.' },
  },
  // PRACTISE — use the forms in the book's own sentences.
  {
    id: 'gevhernesibe-a2-language-review-4-linking', type: 'word-bank', title: 'Practise: Result, Reason, Different Idea',
    instructions: 'Fill each gap from the word bank. Two words are not needed.',
    question: 'Which word gives a result, a reason or a different idea?',
    fillBlanksText: 'At that time, Kayseri did not have a good hospital, [blank] she died at a young age. … [blank] the two buildings are next to each other, people call them the ‘Twin Madrasas.’ … Gevher Nesibe Sultan never married the love of her life. [blank] people loved her very much, and everyone remembers her today.',
    wordBank: ['so', 'Because', 'But', 'When', 'because of'],
    correctAnswer: ['so', 'Because', 'But'],
    explanation: '“So” gives a result: No good hospital, so she died young. “Because” gives a reason, and it can start the sentence: Because the two buildings are next to each other, … “But” gives a different idea: She never married, but people loved her.',
    feedback: { correct: 'Well done. You linked a result, a reason and a different idea.', incorrect: 'For each gap, ask: Does the next part give a result, a reason or a different idea? Check Chapters 2, 4 and 11.' },
  },
  {
    id: 'gevhernesibe-a2-language-review-5-past-forms', type: 'choose-form', title: 'Practise: Read, Taught, Got',
    instructions: 'Choose the correct past form for each sentence from the book.',
    question: 'Which past form is correct?',
    formChoices: [
      { sentence: 'Students [choice] the most important medical books of that time.', options: ['readed', 'read', 'reading'], answer: 1 },
      { sentence: 'Many famous scientists and doctors [choice] at this school.', options: ['taught', 'teached', 'teach'], answer: 0 },
      { sentence: 'Gevher Nesibe became very sad and [choice] a bad illness.', options: ['getted', 'gets', 'got'], answer: 2 },
    ],
    correctAnswer: null,
    explanation: 'These verbs do not take -ed in the past: read → read (say /red/), teach → taught, get → got. The book tells history, so it uses many past forms like these.',
    feedback: { correct: 'Correct. You know three irregular past forms from the book.', incorrect: 'Say the verb today: read, teach, get. Then find the sentence in Chapters 2 and 6.' },
  },
  {
    id: 'gevhernesibe-a2-language-review-6-fix-the-mistake', type: 'error-correction', title: 'Practise: Fix One Mistake',
    instructions: 'Each sentence has one mistake. Tap it, then choose the correct word.',
    question: 'Can you fix the sentences?',
    errorItems: [
      { sentence: 'It take two years to build the hospital.', error: 'take', options: ['took', 'taking', 'takes'], answer: 0 },
      { sentence: 'Inside, there was four round windows in the old Seljuk style.', error: 'was', options: ['is', 'were', 'be'], answer: 1 },
      { sentence: 'Students learned by watch doctors at the patients’ beds.', error: 'watch', options: ['watched', 'watches', 'watching'], answer: 2 },
    ],
    correctAnswer: null,
    explanation: 'The building happened in the past: it took two years. With a plural noun (four round windows), use “there were”. After “by”, use verb + -ing: by watching.',
    feedback: { correct: 'Well done. You fixed all three sentences.', incorrect: 'Compare with the book: Chapter 4 (two years), Chapter 8 (round windows) and Chapter 9 (watching doctors).' },
  },
  {
    id: 'gevhernesibe-a2-language-review-7-used-to-help', type: 'sentence-building', title: 'Practise: Used Music to Help',
    instructions: 'Put the words in order to make the sentence from Chapter 8.',
    question: 'How do we say why someone used something?',
    sentenceChunks: ['Doctors', 'used', 'music', 'to help', 'these patients.'],
    correctAnswer: null,
    explanation: '“Used + thing + to + verb” tells us why people used something: doctors used music to help these patients. In Chapter 9, doctors also “used the knowledge of famous scientists … to help sick people”.',
    feedback: { correct: 'Well done. Used + thing + to + verb gives the reason.', incorrect: 'Start with who (Doctors). Then the action and the thing. End with the reason: to help …' },
  },
  // USE — take the language into a new, everyday context.
  {
    id: 'gevhernesibe-a2-language-review-8-new-context', type: 'word-bank', title: 'Use: A Hospital in My Town',
    instructions: 'Complete this new text from the word bank. Two words are extra.',
    question: 'Can you use the book’s language about a new place?',
    fillBlanksText: 'There [blank] a big hospital in my town. It opened in 1998, so it is [blank] than my school. Inside, there [blank] many rooms for patients. Doctors [blank] be kind to everyone.',
    wordBank: ['is', 'older', 'are', 'should', 'oldest', 'was'],
    correctAnswer: ['is', 'older', 'are', 'should'],
    explanation: 'This text is about now, so it uses “there is” for one hospital and “there are” for many rooms. “Older than” compares two things. “Should + base verb” says what is right.',
    feedback: { correct: 'Well done. You used the book’s language in a new place.', incorrect: 'Ask for each gap: One thing or many? Two things compared? What is right?' },
  },
  {
    id: 'gevhernesibe-a2-language-review-9-transfer', type: 'reflection', title: 'Use: An Old Building I Know',
    instructions: 'Write 4–5 sentences about an old building. Tell a partner first.',
    question: 'Can you describe an old building in your town?',
    correctAnswer: null,
    explanation: 'Example: “The old mosque in my town was built a long time ago. There is a big garden next to it, and there are two tall minarets. It is older than all the other buildings in my town. People should visit it because it is beautiful.”',
    feedback: { correct: 'Check your sentences: there is / there are, a comparison, should, because or so.', incorrect: '' },
    discussionPrompts: [
      { question: 'Sentence 1 — Name the building: “The old … in my town …”', mode: 'Individual' },
      { question: 'Sentence 2 — Describe it: “There is … / There are …”', mode: 'Individual' },
      { question: 'Sentence 3 — Compare: “It is older / bigger than …”', mode: 'Pair' },
      { question: 'Sentence 4 — Give advice: “People should …, because …”', mode: 'Pair' },
    ],
  },
];

export const gevherNesibeA2FinalChallengeExercises: Exercise[] = [
  { id: 'gevhernesibe-a2-final-1', type: 'multiple-choice', title: 'Music at the Right Time', instructions: 'Choose the best answer.', question: 'Fârâbî studied music. What else did he show?', options: ['the best time of the day for each type of music', 'how to build a hospital', 'how to write a diploma'], correctAnswer: 0, explanation: 'Chapter 10 says: “He also showed the best time of the day for each type of music.”', feedback: { correct: 'Yes. Different music was good at different times of the day.', incorrect: 'Read the end of Chapter 10. Find the words “the best time of the day”.' } },
  { id: 'gevhernesibe-a2-final-2', type: 'multiple-choice', title: 'What Did They Teach?', instructions: 'Choose the best answer.', question: 'What did the scientists teach at the school?', options: ['only medicine', 'philosophy, religion, languages and how the human body works', 'music, art and sports'], correctAnswer: 1, explanation: 'Chapter 6 says: “At the school, these scientists taught philosophy, religion, languages, and how the human body works.”', feedback: { correct: 'Yes. Students learned many subjects, not only medicine.', incorrect: 'Read the middle of Chapter 6. Find the word “taught”.' } },
  { id: 'gevhernesibe-a2-final-3', type: 'multiple-choice', title: 'Where Was the Food?', instructions: 'Choose the best answer.', question: 'Why do we think that people brought food from an outdoor kitchen?', options: ['There was no kitchen space inside the center.', 'The patients did not eat.', 'The kitchen was in the garden pool.'], correctAnswer: 0, explanation: 'Chapter 7 says: “There was no kitchen space inside the center. This shows that people brought food from an outdoor kitchen.”', feedback: { correct: 'Yes. There was no kitchen inside, so the food came from outside.', incorrect: 'Read the end of the first paragraph of Chapter 7. Find the word “kitchen”.' } },
  { id: 'gevhernesibe-a2-final-4', type: 'true-false', title: 'The Hospital Team', instructions: 'Is the sentence true or false?', question: 'The hospital had two general doctors, two surgeons and a pharmacist.', correctAnswer: true, explanation: 'Chapter 5 says: “The hospital also had two general doctors, two surgeons, and a pharmacist.”', feedback: { correct: 'Right, it is true. This team was very similar to the team in Sivas.', incorrect: 'Read the second paragraph of Chapter 5 again. Find the word “team”.' } },
  { id: 'gevhernesibe-a2-final-5', type: 'true-false', title: 'The Brother’s Plan', instructions: 'Is the sentence true or false?', question: 'Gevher Nesibe’s brother wanted her to marry the young commander.', correctAnswer: false, explanation: 'Chapter 2 says: “But her brother, Sultan Gıyâseddin Keyhusrev I, did not want this marriage. He wanted his sister to marry a palace official.”', feedback: { correct: 'Right, it is false. He wanted her to marry a palace official.', incorrect: 'Read the first paragraph of Chapter 2 again. Who did her brother want her to marry?' } },
  { id: 'gevhernesibe-a2-final-6', type: 'matching', title: 'Word Meanings', instructions: 'Match each word with its meaning in the story.', question: 'What does each word mean?', matchingPairs: [{ left: 'diseases', right: 'illnesses of the body' }, { left: 'healing', right: 'making a sick or hurt person well again' }, { left: 'grave', right: 'the place in the ground where a dead person lies' }, { left: 'operations', right: 'medical work when a doctor cuts into the body' }], correctAnswer: { diseases: 'illnesses of the body', healing: 'making a sick or hurt person well again', grave: 'the place in the ground where a dead person lies', operations: 'medical work when a doctor cuts into the body' }, explanation: 'Chapter 3: “… find cures for bad diseases.” Chapter 4: “… the Dârüşşifâ, ‘the house of healing.’” and “The grave of Gevher Nesibe Sultan is inside the Gıyâsiye Medresesi.” Chapter 7: “Doctors probably did eye operations here.”', feedback: { correct: 'Yes. You found the meaning of each word from its sentence.', incorrect: 'Read each word in its sentence in Chapters 3, 4 and 7.' } },
  { id: 'gevhernesibe-a2-final-7', type: 'matching', title: 'Three Cities', instructions: 'Match each city with what the story says about it.', question: 'What does the story say about each city?', matchingPairs: [{ left: 'Konya', right: 'the capital city of the Anatolian Seljuk State' }, { left: 'Kayseri', right: 'the second capital and the center of scientists' }, { left: 'Sivas', right: 'the city of the Keykâvus Hospital' }], correctAnswer: { Konya: 'the capital city of the Anatolian Seljuk State', Kayseri: 'the second capital and the center of scientists', Sivas: 'the city of the Keykâvus Hospital' }, explanation: 'Chapter 1: “Konya was the capital city of the Anatolian Seljuk State. At that time, people accepted Kayseri as the second capital. They also knew the city as the center of scientists.” Chapter 5: “… the team at the Keykâvus Hospital in Sivas.”', feedback: { correct: 'Yes. You remembered three Seljuk cities.', incorrect: 'Look again at the last paragraph of Chapter 1 and the end of Chapter 5.' } },
  { id: 'gevhernesibe-a2-final-8', type: 'fill-blanks', title: 'In One Building', instructions: 'Complete the sentence from Chapter 11 with one word: together, apart, again or later.', question: 'What was new about the Gevher Nesibe Hospital?', fillBlanksText: 'The Gevher Nesibe Hospital was the first school and hospital [blank].', correctAnswer: ['together'], explanation: 'Chapter 11 says: “In history, there were many hospitals and medical schools. But they were not in the same building. The Gevher Nesibe Hospital was the first school and hospital together.”', feedback: { correct: 'Yes. The school and the hospital worked together.', incorrect: 'Read the first paragraph of Chapter 11. Were other schools and hospitals in the same building?' } },
  { id: 'gevhernesibe-a2-final-9', type: 'fill-blanks', title: 'Who Should Teach?', instructions: 'Complete her words from Chapter 3 with one word: surgeons, soldiers, sultans or students.', question: 'Who did Gevher Nesibe want to teach at the hospital?', fillBlanksText: 'Let famous doctors and [blank] teach here.', correctAnswer: ['surgeons'], explanation: 'Chapter 3 says: “Let famous doctors and surgeons teach here.”', feedback: { correct: 'Yes. She wanted famous doctors and surgeons to teach there.', incorrect: 'Read her last wish in Chapter 3 again. Find the words “famous doctors and”.' } },
  { id: 'gevhernesibe-a2-final-10', type: 'sequencing', title: 'From a Wish to a Hospital', instructions: 'Put these events in the order of the story.', question: 'Can you put the main events in order?', sequencingItems: [{ id: '3', text: 'Students finish school and get a diploma.' }, { id: '1', text: 'Gevher Nesibe gets a bad illness.' }, { id: '4', text: 'The hospital serves patients until the early 1900s.' }, { id: '2', text: 'Her brother builds a medical school and a hospital.' }], correctAnswer: ['1', '2', '3', '4'], explanation: 'Gevher Nesibe got a bad illness (Chapter 2). To make her wish come true, her brother built a medical school and a hospital (Chapter 4). Students studied there and got a diploma (Chapter 9). The hospital served patients until the early 1900s (Chapter 9).', feedback: { correct: 'Yes. You followed the story from a wish to a hospital that helped people for centuries.', incorrect: 'Start with Gevher Nesibe’s illness. What did her brother do after her death?' } },
];
