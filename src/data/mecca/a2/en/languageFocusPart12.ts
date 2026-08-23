import type { Exercise } from '../../../../types';

/**
 * Additional chapter-specific English Language Focus for Mecca A2.
 * Authored manually from the Chapter 13 story text; Quick Challenge remains comprehension-focused.
 */
export const meccaA2LanguageFocusExercisesPart12: Record<number, Exercise[]> = {
  13: [
    {
      id: 'mecca-a2-language-13-comparison-reason',
      type: 'matching',
      title: 'Comparison and Reason',
      instructions: 'Match each Chapter 13 expression with the language job it does.',
      question: 'How does the chapter reject unfair comparisons and give reasons?',
      matchingPairs: [
        { left: 'No person is better than another', right: 'no + noun + is better than rejects superiority' },
        { left: 'Arabs are not better than non-Arabs', right: 'not better than makes a negative comparison' },
        { left: 'because of skin color', right: 'because of + noun gives a reason' },
        { left: 'The only way to be better is to be good', right: 'the only way to ... is to ... explains one necessary path' },
      ],
      correctAnswer: {
        'No person is better than another': 'no + noun + is better than rejects superiority',
        'Arabs are not better than non-Arabs': 'not better than makes a negative comparison',
        'because of skin color': 'because of + noun gives a reason',
        'The only way to be better is to be good': 'the only way to ... is to ... explains one necessary path',
      },
      explanation: 'Chapter 13 uses negative comparison, reason language and “the only way ... is to ...” to express a principle clearly.',
      feedback: {
        correct: 'Correct. You identified comparison, reason and a necessary path.',
        incorrect: 'Look again at “better than”, “because of”, and “the only way ... is to ...”.',
      },
    },
    {
      id: 'mecca-a2-language-13-feeling-result',
      type: 'matching',
      title: 'Feeling and Result',
      instructions: 'Match the Chapter 13 pattern with its function.',
      question: 'How does the chapter connect strong feelings with actions and results?',
      matchingPairs: [
        { left: 'Bilal was too sad to call the prayer', right: 'too + adjective + to + verb shows that a feeling or condition prevents an action' },
        { left: 'He started crying', right: 'start + -ing shows the beginning of an action' },
        { left: 'when he said the Prophet’s name', right: 'when introduces the time or situation of another action' },
        { left: 'He could not stay in Medina', right: 'could not + verb expresses past inability' },
      ],
      correctAnswer: {
        'Bilal was too sad to call the prayer': 'too + adjective + to + verb shows that a feeling or condition prevents an action',
        'He started crying': 'start + -ing shows the beginning of an action',
        'when he said the Prophet’s name': 'when introduces the time or situation of another action',
        'He could not stay in Medina': 'could not + verb expresses past inability',
      },
      explanation: 'These patterns show a strong feeling, the start of an action, its time, and an inability in the past.',
      feedback: {
        correct: 'Good. You separated feeling, beginning, time and inability.',
        incorrect: 'Ask what “too sad to”, “started”, “when”, and “could not” each communicate.',
      },
    },
    {
      id: 'mecca-a2-language-13-permission-evaluation',
      type: 'matching',
      title: 'Permission and Evaluation',
      instructions: 'Match each expression with what it communicates.',
      question: 'How does Chapter 13 ask for permission and evaluate behavior?',
      matchingPairs: [
        { left: 'he asked Abu Bakr to let him leave', right: 'ask + person + to + verb makes a request to another person' },
        { left: 'Abu Bakr allowed him to leave', right: 'allow + person + to + verb gives permission' },
        { left: 'it is unfair to behave badly to people', right: 'it is + adjective + to + verb evaluates an action' },
        { left: 'What matters is ...', right: 'what matters is introduces the thing considered important' },
      ],
      correctAnswer: {
        'he asked Abu Bakr to let him leave': 'ask + person + to + verb makes a request to another person',
        'Abu Bakr allowed him to leave': 'allow + person + to + verb gives permission',
        'it is unfair to behave badly to people': 'it is + adjective + to + verb evaluates an action',
        'What matters is ...': 'what matters is introduces the thing considered important',
      },
      explanation: 'The chapter uses request and permission patterns, then evaluates behavior and identifies what is important.',
      feedback: {
        correct: 'Correct. You identified request, permission, evaluation and importance.',
        incorrect: 'Focus on “asked ... to”, “allowed ... to”, “it is unfair to”, and “what matters is”.',
      },
    },
    {
      id: 'mecca-a2-language-13-production',
      type: 'reflection',
      title: 'Use It: A Fair Decision',
      instructions: 'Create a new A2 situation at school, in a club, in a family or on a team. Say or write four short sentences: reject one unfair comparison with “not better than”, give a reason with “because of”, make a request or give permission with “ask ... to” or “allow ... to”, and evaluate an action with “it is unfair/fair to ...”. Do not retell Chapter 13.',
      question: 'Can you use Chapter 13 language to explain a fair decision in a new situation?',
      correctAnswer: null,
      explanation: 'A strong response transfers the chapter’s language of comparison, reason, request or permission, and evaluation to a new everyday context.',
      feedback: {
        correct: 'Use all four functions in one clear new situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Comparison — Use “not better than”.', mode: 'Individual' },
        { question: 'Reason — Use “because of”.', mode: 'Individual' },
        { question: 'Request or permission — Use “ask ... to” or “allow ... to”.', mode: 'Individual' },
        { question: 'Evaluation — Use “it is fair/unfair to ...”.', mode: 'Pair' },
      ],
    },
  ],
};
