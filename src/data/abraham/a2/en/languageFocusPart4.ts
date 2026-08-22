import type { Exercise } from '../../../../types';

/**
 * Continuation of manually authored Abraham A2 Language Focus work.
 * Chapter 7 is grounded in its own story language and kept separate from comprehension retrieval.
 */
export const abrahamA2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  7: [
    {
      id: 'abraham-a2-language-7-reaction-and-reason',
      type: 'matching',
      title: 'Reaction and Reason',
      instructions: 'Match each Chapter 7 expression with what it does in the story.',
      question: 'How does the chapter connect people’s reactions with reasons?',
      matchingPairs: [
        { left: 'They were shocked, because all their stone gods were in pieces', right: 'gives a reaction and explains its reason' },
        { left: 'The people were displeased with his answer', right: 'describes how people felt about an answer' },
        { left: 'They wondered and asked', right: 'shows a reaction that leads to a question' },
        { left: 'The next day', right: 'moves the story to the next time point' },
      ],
      correctAnswer: {
        'They were shocked, because all their stone gods were in pieces': 'gives a reaction and explains its reason',
        'The people were displeased with his answer': 'describes how people felt about an answer',
        'They wondered and asked': 'shows a reaction that leads to a question',
        'The next day': 'moves the story to the next time point',
      },
      explanation: 'Chapter 7 uses feeling words such as “shocked” and “displeased”, “because” to give a reason, and “The next day” to move a past story forward.',
      feedback: {
        correct: 'Good. You separated time, reaction and reason.',
        incorrect: 'Look for the time expression, the feeling words, and the word that introduces a reason.',
      },
    },
    {
      id: 'abraham-a2-language-7-past-questions',
      type: 'matching',
      title: 'Ask About a Past Event',
      instructions: 'Match each question pattern with its use.',
      question: 'How does Chapter 7 ask who did something and whether a past action happened?',
      matchingPairs: [
        { left: 'Who did this?', right: 'asks for the person responsible for a past action' },
        { left: 'Did you harm our gods?', right: 'asks whether a past action happened' },
        { left: 'did + subject + base verb', right: 'forms many past simple questions' },
        { left: 'Who + did + this?', right: 'uses “who” to ask for a person' },
      ],
      correctAnswer: {
        'Who did this?': 'asks for the person responsible for a past action',
        'Did you harm our gods?': 'asks whether a past action happened',
        'did + subject + base verb': 'forms many past simple questions',
        'Who + did + this?': 'uses “who” to ask for a person',
      },
      explanation: '“Did you harm ...?” uses did + subject + base verb. “Who did this?” asks for the person connected with the past action.',
      feedback: {
        correct: 'Correct. You identified two useful ways to question a past event.',
        incorrect: 'Separate the yes/no question beginning with “Did” from the question asking for a person with “Who”.',
      },
    },
    {
      id: 'abraham-a2-language-7-knowledge-question-and-ability',
      type: 'matching',
      title: 'Knowledge, Questions and Ability',
      instructions: 'Match each expression with its language function.',
      question: 'How does the chapter report knowledge, ask indirectly and talk about ability?',
      matchingPairs: [
        { left: 'You know that these objects don’t speak', right: 'states something the listener already knows' },
        { left: 'Ask it if it can speak', right: 'uses “if” to introduce a yes/no question after “ask”' },
        { left: 'they can’t speak or see', right: 'says that they do not have these abilities' },
        { left: 'they can’t even protect themselves', right: 'adds another inability and refers back to the same subject' },
      ],
      correctAnswer: {
        'You know that these objects don’t speak': 'states something the listener already knows',
        'Ask it if it can speak': 'uses “if” to introduce a yes/no question after “ask”',
        'they can’t speak or see': 'says that they do not have these abilities',
        'they can’t even protect themselves': 'adds another inability and refers back to the same subject',
      },
      explanation: '“Know that ...” introduces known information. After “ask”, “if” can introduce a yes/no question. “Can/can’t + base verb” expresses ability or inability, and “themselves” refers back to a plural subject.',
      feedback: {
        correct: 'Good. You distinguished known information, an indirect yes/no question and ability language.',
        incorrect: 'Find the expression about knowing, then the “ask ... if ...” pattern, then the two uses of “can’t”.',
      },
    },
    {
      id: 'abraham-a2-language-7-questioning-production',
      type: 'reflection',
      title: 'Say It: Ask and Explain',
      instructions: 'Write or say four or five short A2 lines about a simple past situation. Use at least four Chapter 7 language patterns. Do not retell the answer to the Quick Challenge.',
      question: 'Can you ask about a past event, report what you know and explain a reason?',
      correctAnswer: null,
      explanation: 'A strong response can use “The next day ...”, “Who did ...?”, “Did you ...?”, “I know that ...”, “Ask ... if ...”, “can/can’t ...”, and “because ...”.',
      feedback: {
        correct: 'Keep the questions natural and use each pattern for its real function.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Time — Begin with “The next day ...” or another past-time expression.', mode: 'Individual' },
        { question: 'Past question — Ask “Who did ...?” or “Did you ...?”', mode: 'Individual' },
        { question: 'Knowledge — Add “I know that ...”', mode: 'Individual' },
        { question: 'Ability — Use “can” or “can’t” with a base verb.', mode: 'Individual' },
        { question: 'Reason — Finish one idea with “because ...”.', mode: 'Pair' },
      ],
    },
  ],
};
