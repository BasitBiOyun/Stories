import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  3: [
    {
      id: 'mecca-a2-language-3-change-comparison', type: 'matching', title: 'What Does It Mean?',
      instructions: 'Match each phrase from Chapter 3 with its meaning.',
      question: 'How does the chapter describe Mecca and its people?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'the poor were getting poorer', right: 'they had less and less' },
        { left: 'Slave markets were very common in Arabia.', right: 'You could find them in many places.' },
        { left: 'the most powerful people in the city', right: 'stronger than all other people in Mecca' },
        { left: 'Umayya wanted this message to stop.', right: 'He hoped the teaching would end.' },
      ],
      correctAnswer: {
        'the poor were getting poorer': 'they had less and less',
        'Slave markets were very common in Arabia.': 'You could find them in many places.',
        'the most powerful people in the city': 'stronger than all other people in Mecca',
        'Umayya wanted this message to stop.': 'He hoped the teaching would end.',
      },
      explanation: '“Were getting + poorer/richer” shows a change that continued in the past. “The most + adjective” compares one group with all the others. “Wanted + thing + to + verb” shows what someone wished for.',
      feedback: {
        correct: 'Correct. You understood the change, the comparison and the wish.',
        incorrect: 'Read each phrase in Chapter 3 again. Ask: is it about a change, about places, about power or about a wish?',
      },
    },
    {
      id: 'mecca-a2-language-3-place', type: 'choose-form', title: 'Place, Origin and Time',
      instructions: 'Choose the correct word for each sentence from Chapter 3.',
      question: 'Which forms describe a place, where people came from and when something happened?',
      formChoices: [
        { sentence: 'Mecca was a center for [choice] and selling slaves.', options: ['buy', 'buying', 'to buy'], answer: 1 },
        { sentence: 'Many slaves [choice] different lands, especially from Abyssinia, lived in the homes of Meccan people.', options: ['from', 'in', 'at'], answer: 0 },
        { sentence: 'When Prophet Muhammad (pbuh) [choice] teaching Islam, …', options: ['start', 'starts', 'started'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: '“A center for + -ing” says what a place was important for. “From + place” shows where people came from. After “When” in a past story, use the past form: “When … started …”.',
      feedback: {
        correct: 'Correct. You chose the right form each time.',
        incorrect: 'Look at the second and third paragraphs of Chapter 3. After “for”, use the -ing form.',
      },
    },
    {
      id: 'mecca-a2-language-3-time', type: 'sentence-building', title: 'One of the Richest',
      instructions: 'Put the parts in order to make the sentence from Chapter 3.',
      question: 'How does the chapter put Umayya in a top group?',
      sentenceChunks: ['Umayya was', 'one of', 'the richest and most powerful', 'leaders', 'in Mecca.'],
      correctAnswer: null,
      explanation: '“One of the + superlative + plural noun” puts one person inside a top group: Umayya was one of the richest leaders. The noun after it is plural: “leaders”.',
      feedback: {
        correct: 'Correct. You built the superlative sentence.',
        incorrect: 'Start with the person, then “one of”, then the superlative and a plural noun. Check the third paragraph.',
      },
    },
    {
      id: 'mecca-a2-language-3-production', type: 'reflection', title: 'Describe a Changing City',
      instructions: 'Write or say four short A2 sentences about an imaginary city.', question: 'Can you describe place, change, comparison and intention?', correctAnswer: null,
      explanation: 'Use at least three Chapter 3 patterns.', feedback: { correct: 'Keep the four sentences connected.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use “was a center for ...”.', mode: 'Individual' },
        { question: 'Add “were getting ...”.', mode: 'Individual' },
        { question: 'Use one superlative.', mode: 'Individual' },
        { question: 'Add “When ..., someone wanted ... to ...”.', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  4: [
    {
      id: 'mecca-a2-language-4-frequency', type: 'drag-drop', title: 'How Often, or What Job?',
      instructions: 'Read each part of Chapter 4. Does it tell us how often or how long, or does it tell us Bilal’s job and duty? Put it in the right group.',
      question: 'How does the chapter describe Bilal’s hard days?',
      dragDropGroups: [
        { group: 'How often or how long', items: ['Umayya was always very unkind to Bilal.', 'His master was often angry and harsh.', '… worked under the hot sun in the desert of Mecca all day.'] },
        { group: 'Bilal’s job or duty', items: ['He looked after his master’s camels …', '… his job was to bring food and wine to his master.', 'Bilal had to be patient …'] },
      ],
      correctAnswer: {
        'How often or how long': ['Umayya was always very unkind to Bilal.', 'His master was often angry and harsh.', '… worked under the hot sun in the desert of Mecca all day.'],
        'Bilal’s job or duty': ['He looked after his master’s camels …', '… his job was to bring food and wine to his master.', 'Bilal had to be patient …'],
      },
      explanation: '“Always”, “often” and “all day” tell us how often or how long. “His job was to + verb” and “had to + verb” tell us what Bilal must do. “Had to” shows a past duty: there was no other choice.',
      feedback: {
        correct: 'Correct. You separated time words from job and duty words.',
        incorrect: 'Look for “always”, “often” and “all day”. Then look for “his job was to” and “had to”.',
      },
    },
    {
      id: 'mecca-a2-language-4-purpose', type: 'error-correction', title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong word or words, then choose the correction.',
      question: 'Can you fix a purpose phrase and a negative past sentence?',
      errorItems: [
        { sentence: 'They called Bilal “the son of the black woman” for hurt his feelings.', error: 'for hurt', options: ['to hurt', 'for hurting to', 'hurted'], answer: 0 },
        { sentence: 'They did not respected him as a person.', error: 'respected', options: ['respecting', 'respect', 'respects'], answer: 1 },
      ],
      correctAnswer: null,
      explanation: 'Use “to + base verb” to say why someone did something: “to hurt his feelings”. After “did not”, use the base verb: “did not respect”.',
      feedback: {
        correct: 'Well done. You fixed both sentences.',
        incorrect: 'Compare with Chapter 4: the first paragraph (“did not …”) and the start of the second paragraph (why they called him names).',
      },
    },
    {
      id: 'mecca-a2-language-4-obligation', type: 'multiple-choice', title: 'Every Member',
      instructions: 'Read the sentence from Chapter 4. Then choose the best meaning.',
      question: '“Every member of the family was rude to him.” What does this mean?',
      options: [
        'Only one person in the family was rude to Bilal.',
        'The family was rude to Bilal only on some days.',
        'All the people in the family were rude to Bilal.',
      ],
      correctAnswer: 2,
      explanation: '“Every + singular noun” means all of them, one by one. The noun is singular (“member”) and the verb is singular (“was”), but the meaning is “all”.',
      feedback: {
        correct: 'Correct. “Every member” means all the people in the family.',
        incorrect: 'Read the first paragraph again. “Every” does not mean “one” or “sometimes”.',
      },
    },
    {
      id: 'mecca-a2-language-4-production', type: 'reflection', title: 'Describe a Difficult Routine',
      instructions: 'Write or say four short A2 sentences about a difficult daily routine.', question: 'Can you use frequency, duty, purpose and obligation?', correctAnswer: null,
      explanation: 'Use at least three Chapter 4 patterns.', feedback: { correct: 'Keep it short and clear.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use always or often.', mode: 'Individual' },
        { question: 'Add “His/Her job was to ...”.', mode: 'Individual' },
        { question: 'Add one purpose with “to + verb”.', mode: 'Individual' },
        { question: 'Finish with “had to ...”.', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  5: [
    {
      id: 'mecca-a2-language-5-reason-duty', type: 'true-false', title: 'What Did Bilal Think?',
      instructions: 'Read the sentence from Chapter 5. Is the statement true or false?',
      question: '“Bilal thought he would be a slave forever.” This means Bilal believed he would soon be free.',
      correctAnswer: false,
      explanation: '“Thought he would …” tells us what Bilal expected about his future. He expected to be a slave forever. He had no hope of freedom at that time.',
      feedback: {
        correct: 'Correct. Bilal did not expect to be free.',
        incorrect: 'Read the second paragraph again. What does “forever” tell you about his hope?',
      },
    },
    {
      id: 'mecca-a2-language-5-reporting', type: 'matching', title: 'Bilal’s Situation',
      instructions: 'Match each phrase from Chapter 5 with its meaning.',
      question: 'How does the chapter explain Bilal’s situation?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'because he was an obedient and hardworking servant', right: 'the reason Umayya liked him' },
        { left: 'had to work very hard', right: 'there was no other choice for him' },
        { left: 'did not have any money', right: 'he was without a single coin' },
        { left: 'had no power to protect himself', right: 'he was not able to keep himself safe' },
      ],
      correctAnswer: {
        'because he was an obedient and hardworking servant': 'the reason Umayya liked him',
        'had to work very hard': 'there was no other choice for him',
        'did not have any money': 'he was without a single coin',
        'had no power to protect himself': 'he was not able to keep himself safe',
      },
      explanation: '“Because + sentence” gives a reason. “Had to + verb” shows a past duty. “Did not have any + noun” and “had no power to + verb” show what Bilal did not have and could not do.',
      feedback: {
        correct: 'Correct. You understood the reason, the duty and what Bilal was missing.',
        incorrect: 'Read the first two paragraphs of Chapter 5 again. Which phrase is about money? Which is about safety?',
      },
    },
    {
      id: 'mecca-a2-language-5-command', type: 'word-bank', title: 'The Prophet’s Message',
      instructions: 'Complete the lines from Chapter 5 with words from the bank. Two words are not needed.',
      question: 'Which words report the Prophet’s teaching and instruction?',
      fillBlanksText: 'He taught that people [blank] be fair and equal. He told the people of Mecca [blank] stop [blank] idols.',
      wordBank: ['must', 'to', 'worshipping', 'worship', 'for'],
      correctAnswer: ['must', 'to', 'worshipping'],
      explanation: '“Taught that + sentence” reports a teaching; “must” shows it is necessary. “Told + person + to + verb” reports an instruction. After “stop”, use the -ing form: “stop worshipping”.',
      feedback: {
        correct: 'Correct. You completed the teaching and the instruction.',
        incorrect: 'Read the last paragraph of Chapter 5. After “told the people of Mecca” comes “to”, and after “stop” comes an -ing word.',
      },
    },
    {
      id: 'mecca-a2-language-5-production', type: 'reflection', title: 'Explain a New Message',
      instructions: 'Write or say four short A2 sentences about a new rule or idea.', question: 'Can you give a reason, report a message and state an instruction?', correctAnswer: null,
      explanation: 'Use at least three Chapter 5 patterns.', feedback: { correct: 'Keep the message clear and simple.', incorrect: '' },
      discussionPrompts: [
        { question: 'Give a reason with because.', mode: 'Individual' },
        { question: 'Use “had to ...” once.', mode: 'Individual' },
        { question: 'Report an idea with “taught that ...”.', mode: 'Individual' },
        { question: 'Report an instruction with “told ... to ...”.', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart5: Record<number, Exercise[]> = {
  6: [
    {
      id: 'mecca-a2-language-6-thinking', type: 'multiple-choice', title: 'A Secret Visit',
      instructions: 'Read the sentence from Chapter 6. Then choose the best meaning.',
      question: '“He did not want anyone to see him.” What did Bilal want?',
      options: [
        'He did not want to see any person on the way.',
        'He wanted no person to see him on the way.',
        'He wanted to see Abu Bakr, but not at night.',
      ],
      correctAnswer: 1,
      explanation: 'In “did not want + person + to + verb”, the person after “want” does the action. Here “anyone” is the one who might see. Bilal wanted to stay secret.',
      feedback: {
        correct: 'Correct. Bilal wanted to stay secret, so no one should see him.',
        incorrect: 'Look at the second paragraph. Who does the action “see” in this sentence: Bilal, or other people?',
      },
    },
    {
      id: 'mecca-a2-language-6-sequence', type: 'choose-form', title: 'Thinking and Deciding',
      instructions: 'Choose the correct word or words for each sentence from Chapter 6.',
      question: 'Which forms show thinking, a decision and a time?',
      formChoices: [
        { sentence: 'Bilal thought [choice] the message of Islam for many days.', options: ['at', 'about', 'to'], answer: 1 },
        { sentence: 'Bilal decided [choice] Abu Bakr, the close friend of Prophet Muhammad (pbuh).', options: ['to visit', 'visiting', 'visit'], answer: 0 },
        { sentence: '[choice] he arrived at Abu Bakr’s house, he knocked on the door …', options: ['During', 'Then', 'When'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: 'We say “think about + topic”. After “decided”, use “to + verb”. “When + past sentence” tells us the time of another past action.',
      feedback: {
        correct: 'Correct. You chose the right form each time.',
        incorrect: 'Check each sentence in Chapter 6: the first paragraph (thinking), the second (the decision) and the third (arriving).',
      },
    },
    {
      id: 'mecca-a2-language-6-time', type: 'sentence-building', title: 'Starting to Ask',
      instructions: 'Put the parts in order to make the sentence from Chapter 6.',
      question: 'What did Bilal do inside Abu Bakr’s house?',
      sentenceChunks: ['He', 'started', 'to ask', 'many questions', 'about the new religion.'],
      correctAnswer: null,
      explanation: '“Started to + verb” shows the beginning of an action. Bilal began to ask questions and wanted to learn more.',
      feedback: {
        correct: 'Correct. You built the sentence about the beginning of an action.',
        incorrect: 'Start with the person, then “started to …”. Check the third paragraph of Chapter 6.',
      },
    },
    {
      id: 'mecca-a2-language-6-production', type: 'reflection', title: 'Tell a Short Visit Story',
      instructions: 'Write or say four short A2 sentences about a safe secret or surprise visit.', question: 'Can you use decision, sequence and time language?', correctAnswer: null,
      explanation: 'Use at least three Chapter 6 patterns.', feedback: { correct: 'Keep the story in order.', incorrect: '' },
      discussionPrompts: [
        { question: 'Begin with “I decided to ...”.', mode: 'Individual' },
        { question: 'Add one action done secretly.', mode: 'Individual' },
        { question: 'Use “When I arrived ...”.', mode: 'Individual' },
        { question: 'Finish with “I started to ...”.', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart6: Record<number, Exercise[]> = {
  7: [
    {
      id: 'mecca-a2-language-7-belief-choice', type: 'sequencing', title: 'Bilal’s Big Decision',
      instructions: 'Put the sentences from Chapter 7 in the order of the story. Use the time words to help you.',
      question: 'How does the chapter move from new information to a final decision?',
      sequencingItems: [
        { id: '1', text: 'Abu Bakr told Bilal about the new religion.' },
        { id: '2', text: 'Bilal told Abu Bakr that he wanted to be a Muslim, too.' },
        { id: '3', text: 'After Bilal met Abu Bakr, he went back home.' },
        { id: '4', text: 'He stayed awake and thought about his life.' },
        { id: '5', text: 'In the end, he accepted Islam.' },
      ],
      correctAnswer: ['1', '2', '3', '4', '5'],
      explanation: '“After + past sentence” puts one event later than another. “In the end” introduces the final result after a long time of thinking.',
      feedback: {
        correct: 'Correct. The story moves from information to a final decision.',
        incorrect: 'Look for “After …” and “In the end”. Which sentence is the final result?',
      },
    },
    {
      id: 'mecca-a2-language-7-difficulty', type: 'choose-form', title: 'A Long Night',
      instructions: 'Choose the correct word for each sentence from Chapter 7.',
      question: 'Which forms show what Bilal expected and what he could not do?',
      formChoices: [
        { sentence: 'He knew that life [choice] be difficult after becoming a Muslim.', options: ['was being', 'would', 'was'], answer: 1 },
        { sentence: 'He could not [choice] during the night.', options: ['slept', 'sleeping', 'sleep'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: 'After “knew that” in a past story, use “would + verb” for a future idea: “life would be difficult”. After “could not”, use the base verb: “could not sleep”.',
      feedback: {
        correct: 'Correct. You chose the right form for the future idea and for “could not”.',
        incorrect: 'Read the third paragraph of Chapter 7. The story is in the past, so the future idea uses “would”.',
      },
    },
    {
      id: 'mecca-a2-language-7-result', type: 'matching', title: 'What Does It Mean?',
      instructions: 'Match each phrase from Chapter 7 with its meaning.',
      question: 'How does the chapter describe feelings and choices?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'supported Bilal', right: 'helped him and stood by him' },
        { left: 'was very happy to hear this', right: 'felt glad about the news' },
        { left: 'the right thing to do', right: 'a good and correct choice' },
        { left: 'stayed awake', right: 'did not go to sleep' },
      ],
      correctAnswer: {
        'supported Bilal': 'helped him and stood by him',
        'was very happy to hear this': 'felt glad about the news',
        'the right thing to do': 'a good and correct choice',
        'stayed awake': 'did not go to sleep',
      },
      explanation: 'These phrases describe how people felt and acted. “Was happy to + verb” gives the reason for a feeling. “Stayed + adjective” shows that a state continued.',
      feedback: {
        correct: 'Correct. You understood each phrase.',
        incorrect: 'Find each phrase in Chapter 7 and read the sentence around it.',
      },
    },
    {
      id: 'mecca-a2-language-7-production', type: 'reflection', title: 'Describe a Difficult Choice',
      instructions: 'Write or say four short A2 sentences about a difficult but safe choice.', question: 'Can you express belief, expected difficulty and a final decision?', correctAnswer: null,
      explanation: 'Use at least three Chapter 7 patterns.', feedback: { correct: 'Keep the sequence clear.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use “I wanted to ...”.', mode: 'Individual' },
        { question: 'Add “I knew that ...”.', mode: 'Individual' },
        { question: 'Use “would be ...”.', mode: 'Individual' },
        { question: 'Finish with “In the end ...”.', mode: 'Pair' },
      ],
    },
  ],
};
