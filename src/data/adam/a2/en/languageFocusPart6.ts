import type { Exercise } from '../../../../types';

/**
 * Manually authored Adam A2 Language Focus continuation.
 * Chapter 7 is read in full before authoring; activities stay grounded in the
 * chapter and avoid repeating the comprehension job of Quick Challenge.
 */
export const adamA2LanguageFocusExercisesPart6: Record<number, Exercise[]> = {
  7: [
    {
      id: 'adam-a2-language-7-teaching-patterns',
      type: 'matching',
      title: 'Teaching People What to Do',
      instructions: 'Match each Chapter 7 expression with the language job it does.',
      question: 'How does the chapter talk about teaching, guiding and influencing other people?',
      matchingPairs: [
        { left: 'He started teaching people to be honest', right: 'introduces actions and qualities that a teacher encourages' },
        { left: 'Adam and Eve taught their children to behave well', right: 'uses teach + person + to + verb' },
        { left: 'They warned their children against Iblis', right: 'uses warn + person + against something dangerous' },
        { left: 'They wanted to make people remember Allah', right: 'expresses a goal to influence people positively' },
      ],
      correctAnswer: {
        'He started teaching people to be honest': 'introduces actions and qualities that a teacher encourages',
        'Adam and Eve taught their children to behave well': 'uses teach + person + to + verb',
        'They warned their children against Iblis': 'uses warn + person + against something dangerous',
        'They wanted to make people remember Allah': 'expresses a goal to influence people positively',
      },
      explanation: 'Chapter 7 repeatedly uses language for guidance: teach someone to do something, warn someone against danger, and want to influence people toward a good action.',
      feedback: {
        correct: 'Correct. You identified the different ways the chapter expresses guidance and influence.',
        incorrect: 'Look at who gives the guidance, who receives it, and whether the sentence teaches, warns or expresses a goal.',
      },
    },
    {
      id: 'adam-a2-language-7-reason-contrast',
      type: 'matching',
      title: 'Reason and Contrast',
      instructions: 'Match each Chapter 7 expression with what it communicates.',
      question: 'How does the chapter explain a reason and correct a wrong idea?',
      matchingPairs: [
        { left: 'because Iblis was their enemy', right: 'gives the reason for the warning' },
        { left: 'not their friend', right: 'rejects the wrong description' },
        { left: 'their enemy', right: 'gives the contrasting correct description' },
        { left: 'not X, but Y', right: 'corrects one idea by replacing it with another' },
      ],
      correctAnswer: {
        'because Iblis was their enemy': 'gives the reason for the warning',
        'not their friend': 'rejects the wrong description',
        'their enemy': 'gives the contrasting correct description',
        'not X, but Y': 'corrects one idea by replacing it with another',
      },
      explanation: '“Because” introduces a reason. The pattern “not X, but Y” creates a clear contrast and replaces an incorrect idea with the correct one.',
      feedback: {
        correct: 'Good. You separated reason from contrast.',
        incorrect: 'Ask whether the expression explains why something happened or contrasts two descriptions.',
      },
    },
    {
      id: 'adam-a2-language-7-story-time',
      type: 'sequencing',
      title: 'From Adam to Later Messengers',
      instructions: 'Put the chapter stages in order using its time language.',
      question: 'How does Chapter 7 move from Adam and Eve’s life on Earth to the later messengers?',
      sequencingItems: [
        { id: '1', text: 'Adam and Eve lived on Earth for many years and had many children.' },
        { id: '2', text: 'Then Allah made Adam His first Messenger.' },
        { id: '3', text: 'Adam and Eve taught and warned their children.' },
        { id: '4', text: 'After Adam’s death, Allah sent many other messengers.' },
        { id: '5', text: 'Those messengers continued teaching people right and wrong.' },
      ],
      correctAnswer: ['1', '2', '3', '4', '5'],
      explanation: 'The chapter uses simple time expressions such as “many years”, “then” and “after” to move from one stage of the story to the next.',
      feedback: {
        correct: 'Correct. You used the chapter’s time signals to rebuild the sequence.',
        incorrect: 'Use “Then” for the next stage and “After Adam’s death” for the later stage.',
      },
    },
    {
      id: 'adam-a2-language-7-give-guidance',
      type: 'reflection',
      title: 'Say It: Give Good Guidance',
      instructions: 'Write or say four short A2 sentences that teach, warn and explain a reason.',
      question: 'Can you use Chapter 7 language to give simple positive guidance in daily life?',
      correctAnswer: null,
      explanation: 'A strong A2 response transfers the chapter’s language of teaching, warning, reason and positive influence to a familiar context.',
      feedback: {
        correct: 'Use the sentence starters to give clear and useful guidance.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Teach: “I teach/help my friend to ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Warn: “I warn people against ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Give a reason: “... because ...”', mode: 'Pair' },
        { question: 'Sentence 4 — Positive goal: “I want people to ...”', mode: 'Pair' },
      ],
    },
  ],
};
