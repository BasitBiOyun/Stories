import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  3: [
    {
      id: 'mecca-a2-language-3-change-comparison', type: 'matching', title: 'Change and Comparison',
      instructions: 'Match each Chapter 3 pattern with its job.', question: 'How does the chapter compare people and show change?',
      matchingPairs: [
        { left: 'were getting + comparative', right: 'shows continuing change in the past' },
        { left: 'the most + adjective', right: 'compares one group with all others' },
        { left: 'one of the + superlative + plural noun', right: 'places one person inside a top group' },
        { left: 'from + place', right: 'shows origin' },
      ],
      correctAnswer: {
        'were getting + comparative': 'shows continuing change in the past',
        'the most + adjective': 'compares one group with all others',
        'one of the + superlative + plural noun': 'places one person inside a top group',
        'from + place': 'shows origin',
      },
      explanation: 'Chapter 3 uses comparison, change and origin language to describe Mecca and its social structure.',
      feedback: { correct: 'Correct.', incorrect: 'Separate change, comparison and origin.' },
    },
    {
      id: 'mecca-a2-language-3-place', type: 'multiple-choice', title: 'Describing a Place',
      instructions: 'Choose the sentence with the chapter pattern for a place and its function.', question: 'Which sentence is correct?',
      options: ['Mecca was a center for buying and selling slaves.', 'Mecca was a center buy and sell slaves.', 'Mecca were a center for buying slaves.'], correctAnswer: 0,
      explanation: '“Was a center for + -ing” says what a place was important for.',
      feedback: { correct: 'Correct.', incorrect: 'Use was a center for + -ing.' },
    },
    {
      id: 'mecca-a2-language-3-time', type: 'fill-blanks', title: 'Time and Intention',
      instructions: 'Complete the sentence with the time connector.', question: 'Which word introduces the event that changed Umayya’s response?',
      fillBlanksText: '[blank] Prophet Muhammad (pbuh) started teaching Islam, Umayya wanted the message to stop.', correctAnswer: 'When',
      explanation: '“When + past clause” gives the time or background for another past event.',
      feedback: { correct: 'Correct.', incorrect: 'Use the chapter connector that introduces a past event.' },
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
      id: 'mecca-a2-language-4-frequency', type: 'matching', title: 'Frequency and Duty',
      instructions: 'Match each Chapter 4 pattern with its job.', question: 'How does the chapter describe repeated treatment and duty?',
      matchingPairs: [
        { left: 'always / often', right: 'shows frequency' },
        { left: 'every + singular noun', right: 'includes all members one by one' },
        { left: 'job was to + verb', right: 'describes a regular task' },
        { left: 'had to + verb', right: 'shows past necessity' },
      ],
      correctAnswer: { 'always / often': 'shows frequency', 'every + singular noun': 'includes all members one by one', 'job was to + verb': 'describes a regular task', 'had to + verb': 'shows past necessity' },
      explanation: 'Chapter 4 combines frequency, routine and obligation.', feedback: { correct: 'Correct.', incorrect: 'Separate frequency, routine and necessity.' },
    },
    {
      id: 'mecca-a2-language-4-purpose', type: 'multiple-choice', title: 'Purpose',
      instructions: 'Choose the sentence that correctly uses to + verb for purpose.', question: 'Which sentence explains why an action was done?',
      options: ['They called him names to hurt his feelings.', 'They called him names for hurt his feelings.', 'They called him names hurting to his feelings.'], correctAnswer: 0,
      explanation: '“To + base verb” can explain purpose.', feedback: { correct: 'Correct.', incorrect: 'Use to + base verb.' },
    },
    {
      id: 'mecca-a2-language-4-obligation', type: 'fill-blanks', title: 'Past Obligation',
      instructions: 'Complete the sentence with one word.', question: 'Which word completes the chapter pattern?',
      fillBlanksText: 'Bilal [blank] to be patient and work hard every day.', correctAnswer: 'had',
      explanation: '“Had to + verb” expresses a past necessity.', feedback: { correct: 'Correct.', incorrect: 'Use the past necessity pattern.' },
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
      id: 'mecca-a2-language-5-reason-duty', type: 'matching', title: 'Reason, Duty and Ability',
      instructions: 'Match each Chapter 5 pattern with its job.', question: 'How does the chapter explain Bilal’s situation?',
      matchingPairs: [
        { left: 'because + clause', right: 'gives a reason' },
        { left: 'had to + verb', right: 'shows past necessity' },
        { left: 'did not have any + noun', right: 'shows lack in the past' },
        { left: 'had no power to + verb', right: 'shows lack of ability or control' },
      ],
      correctAnswer: { 'because + clause': 'gives a reason', 'had to + verb': 'shows past necessity', 'did not have any + noun': 'shows lack in the past', 'had no power to + verb': 'shows lack of ability or control' },
      explanation: 'Chapter 5 combines reason, necessity and lack.', feedback: { correct: 'Correct.', incorrect: 'Separate reason, necessity and lack.' },
    },
    {
      id: 'mecca-a2-language-5-reporting', type: 'multiple-choice', title: 'Reporting a Message',
      instructions: 'Choose the sentence that correctly reports what the Prophet taught.', question: 'Which sentence is correct?',
      options: ['He taught that people must be fair and equal.', 'He taught people must fair and equal.', 'He taught that people be fair equal.'], correctAnswer: 0,
      explanation: '“Taught that + clause” reports a teaching or message.', feedback: { correct: 'Correct.', incorrect: 'Use taught that followed by a complete clause.' },
    },
    {
      id: 'mecca-a2-language-5-command', type: 'fill-blanks', title: 'Reported Instruction',
      instructions: 'Complete the sentence with one word.', question: 'Which word completes the reported instruction?',
      fillBlanksText: 'He told the people of Mecca [blank] stop worshipping idols.', correctAnswer: 'to',
      explanation: '“Told + person + to + verb” reports an instruction.', feedback: { correct: 'Correct.', incorrect: 'Use the infinitive marker before stop.' },
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
      id: 'mecca-a2-language-6-thinking', type: 'matching', title: 'Thinking and Deciding',
      instructions: 'Match each Chapter 6 pattern with its job.', question: 'How does the chapter describe Bilal’s thinking and secret visit?',
      matchingPairs: [
        { left: 'thought about + noun', right: 'describes a topic in someone’s mind' },
        { left: 'decided to + verb', right: 'shows a decision' },
        { left: 'did not want anyone to + verb', right: 'expresses a negative wish about another person’s action' },
        { left: 'started to + verb', right: 'shows the beginning of an action' },
      ],
      correctAnswer: { 'thought about + noun': 'describes a topic in someone’s mind', 'decided to + verb': 'shows a decision', 'did not want anyone to + verb': 'expresses a negative wish about another person’s action', 'started to + verb': 'shows the beginning of an action' },
      explanation: 'Chapter 6 uses thinking, decision and intention language.', feedback: { correct: 'Correct.', incorrect: 'Separate thinking, decision, wish and beginning.' },
    },
    {
      id: 'mecca-a2-language-6-sequence', type: 'sequencing', title: 'A Secret Visit',
      instructions: 'Put the language moves in a natural story order.', question: 'How can a short past narrative move from decision to arrival?',
      sequencingItems: [
        { id: '1', text: 'He decided to visit someone.' },
        { id: '2', text: 'He left secretly.' },
        { id: '3', text: 'He walked on a hidden path.' },
        { id: '4', text: 'When he arrived, he knocked on the door.' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: 'Sequence language helps organise a short narrative.', feedback: { correct: 'Correct.', incorrect: 'Start with the decision and finish with arrival.' },
    },
    {
      id: 'mecca-a2-language-6-time', type: 'fill-blanks', title: 'Arrival',
      instructions: 'Complete the time clause.', question: 'Which connector introduces the arrival event?',
      fillBlanksText: '[blank] he arrived at Abu Bakr’s house, he knocked on the door.', correctAnswer: 'When',
      explanation: '“When + past clause” connects two past events.', feedback: { correct: 'Correct.', incorrect: 'Use the chapter time connector.' },
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
      id: 'mecca-a2-language-7-belief-choice', type: 'matching', title: 'Belief and Choice',
      instructions: 'Match each Chapter 7 pattern with its job.', question: 'How does the chapter describe belief, support and decision?',
      matchingPairs: [
        { left: 'there is no ... but ...', right: 'states an exclusive belief' },
        { left: 'wanted to be + noun/adjective', right: 'expresses a wish or choice' },
        { left: 'knew that + clause', right: 'states something understood as true' },
        { left: 'in the end', right: 'introduces the final result' },
      ],
      correctAnswer: { 'there is no ... but ...': 'states an exclusive belief', 'wanted to be + noun/adjective': 'expresses a wish or choice', 'knew that + clause': 'states something understood as true', 'in the end': 'introduces the final result' },
      explanation: 'Chapter 7 combines belief, knowledge and final decision language.', feedback: { correct: 'Correct.', incorrect: 'Separate belief, wish, knowledge and result.' },
    },
    {
      id: 'mecca-a2-language-7-difficulty', type: 'multiple-choice', title: 'Future From the Past',
      instructions: 'Choose the sentence that correctly reports a future situation from a past point of view.', question: 'Which sentence is correct?',
      options: ['He knew that life would be difficult.', 'He knew that life will difficult.', 'He know life would difficult.'], correctAnswer: 0,
      explanation: '“Would + base verb/be” can report a future expectation from a past point of view.', feedback: { correct: 'Correct.', incorrect: 'Use knew that + would be.' },
    },
    {
      id: 'mecca-a2-language-7-result', type: 'fill-blanks', title: 'Final Result',
      instructions: 'Complete the phrase.', question: 'Which word completes the chapter result marker?',
      fillBlanksText: 'In the [blank], he accepted Islam.', correctAnswer: 'end',
      explanation: '“In the end” introduces the final result after thinking or difficulty.', feedback: { correct: 'Correct.', incorrect: 'Use the final-result phrase from the chapter.' },
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
