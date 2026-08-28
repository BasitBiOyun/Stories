import type { Exercise } from '../../../../types';

/** Manually authored Yunus Emre B1 Language Focus, derived from the actual English story text. */
export const yunusB1LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'yunus-b1-language-1-definition-method',
      type: 'matching',
      title: 'Defining a Person and Explaining a Path',
      instructions: 'Match each chapter expression with the job it does.',
      question: 'How does Chapter 1 define a Sûfî and explain the way this person seeks spiritual closeness?',
      matchingPairs: [
        { left: 'Sûfî is a person who aims to get closer to Allah...', right: 'defines a person by describing a characteristic aim' },
        { left: '...by following Islamic mysticism', right: 'explains the method or way used to pursue that aim' },
        { left: 'Sûfis lead a way of life...', right: 'moves from a definition to a description of regular practice' },
      ],
      correctAnswer: {
        'Sûfî is a person who aims to get closer to Allah...': 'defines a person by describing a characteristic aim',
        '...by following Islamic mysticism': 'explains the method or way used to pursue that aim',
        'Sûfis lead a way of life...': 'moves from a definition to a description of regular practice',
      },
      explanation: 'The chapter first defines who a Sûfî is, then explains a method with “by + -ing”, and finally describes a continuing way of life.',
      feedback: {
        correct: 'Good. You identified definition, method, and regular practice.',
        incorrect: 'Ask whether the expression tells us who the person is, how an aim is pursued, or what the person regularly does.',
      },
    },
    {
      id: 'yunus-b1-language-1-parallel-actions',
      type: 'matching',
      title: 'Building a Parallel List of Principles',
      instructions: 'Match each language pattern with the meaning it adds to the list.',
      question: 'How does the chapter present several moral principles as one connected set of practices?',
      matchingPairs: [
        { left: 'seeking to improve and become better people', right: 'presents self-improvement as an ongoing aim' },
        { left: 'being patient in times of need', right: 'names a way of behaving in difficult circumstances' },
        { left: 'giving generously without expecting anything in return', right: 'describes an action together with an important limitation on motive' },
        { left: 'responding to evil with kindness', right: 'connects a negative situation with a chosen positive response' },
        { left: 'not attaching importance to worldly matters...', right: 'adds a negative form to show what should be avoided' },
      ],
      correctAnswer: {
        'seeking to improve and become better people': 'presents self-improvement as an ongoing aim',
        'being patient in times of need': 'names a way of behaving in difficult circumstances',
        'giving generously without expecting anything in return': 'describes an action together with an important limitation on motive',
        'responding to evil with kindness': 'connects a negative situation with a chosen positive response',
        'not attaching importance to worldly matters...': 'adds a negative form to show what should be avoided',
      },
      explanation: 'The chapter uses a parallel series of -ing forms so several principles sound like parts of one coherent moral code. “Without + -ing” and “not + -ing” add useful negative meanings.',
      feedback: {
        correct: 'Correct. You noticed how the list stays grammatically parallel while the meanings change.',
        incorrect: 'Look at the repeated -ing forms, then notice what “without” and “not” add.',
      },
    },
    {
      id: 'yunus-b1-language-1-addition-description-result',
      type: 'matching',
      title: 'Adding a Second Identity and Its Result',
      instructions: 'Match each expression with its communicative function.',
      question: 'How does the final paragraph connect Yunus Emre’s Sûfî identity with his role in Turkish literature?',
      matchingPairs: [
        { left: 'In addition to being a Sûfî...', right: 'adds another important identity or role' },
        { left: '...one of the first to write and say poems in simple Turkish', right: 'places a person among an early group who performed an action' },
        { left: 'The words and phrases which he used...', right: 'adds information that identifies which words and phrases are meant' },
        { left: '...helped develop a better literary Turkish', right: 'states the result or contribution of those language choices' },
        { left: 'Yunus Emre is known as one of the founders...', right: 'summarizes how the person is recognized or remembered' },
      ],
      correctAnswer: {
        'In addition to being a Sûfî...': 'adds another important identity or role',
        '...one of the first to write and say poems in simple Turkish': 'places a person among an early group who performed an action',
        'The words and phrases which he used...': 'adds information that identifies which words and phrases are meant',
        '...helped develop a better literary Turkish': 'states the result or contribution of those language choices',
        'Yunus Emre is known as one of the founders...': 'summarizes how the person is recognized or remembered',
      },
      explanation: 'The paragraph adds a second role, identifies relevant language choices with a relative clause, gives their contribution, and closes with a statement of reputation.',
      feedback: {
        correct: 'Good. You followed how the paragraph builds from identity to contribution and reputation.',
        incorrect: 'Ask whether the expression adds a role, identifies information, gives a result, or summarizes reputation.',
      },
    },
    {
      id: 'yunus-b1-language-1-production',
      type: 'reflection',
      title: 'Describe a Person, Practice, and Contribution',
      instructions: 'Write or say five to six connected B1 sentences about a real or imagined teacher, thinker, artist, or community figure. Do not retell Chapter 1.',
      question: 'Can you define the person, explain one aim and how it is pursued, list two or three principles in parallel form, and add a contribution or reputation?',
      correctAnswer: null,
      explanation: 'A strong answer should form one short connected paragraph. Useful patterns include “a person who...”, “aims to... by -ing...”, parallel -ing forms, “without -ing...”, “in addition to...”, “which...”, “helped...”, and “is known as...”.',
      feedback: {
        correct: 'Keep the ideas connected so the paragraph develops one clear description.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Define the person with “a person who...”.', mode: 'Individual' },
        { question: 'Sentence 2 — State one aim and explain the method with “by + -ing”.', mode: 'Individual' },
        { question: 'Sentence 3–4 — Give two or three principles using parallel forms; use “without” or a negative form where natural.', mode: 'Pair' },
        { question: 'Sentence 5–6 — Add another role, contribution, or reputation using “in addition to...”, “which...”, “helped...”, or “is known as...”.', mode: 'Pair' },
      ],
    },
  ],
};
