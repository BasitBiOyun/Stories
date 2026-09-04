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
        { left: 'They were shocked because all their stone gods were in pieces', right: 'gives a reaction and explains its reason' },
        { left: 'The people were displeased with his answer', right: 'describes how people felt about an answer' },
        { left: 'They wondered and asked', right: 'shows a reaction that leads to a question' },
        { left: 'The next day', right: 'moves the story to the next time point' },
      ],
      correctAnswer: {
        'They were shocked because all their stone gods were in pieces': 'gives a reaction and explains its reason',
        'The people were displeased with his answer': 'describes how people felt about an answer',
        'They wondered and asked': 'shows a reaction that leads to a question',
        'The next day': 'moves the story to the next time point',
      },
      explanation: 'Chapter 7 uses feeling words such as “shocked” and “displeased”, “because” to give a reason, and “The next day” to move a past story forward.',
      feedback: { correct: 'Good. You separated time, reaction and reason.', incorrect: 'Look for the time expression, the feeling words, and the word that introduces a reason.' },
    },
    {
      id: 'abraham-a2-language-7-question-functions',
      type: 'drag-drop',
      title: 'Different Questions, Different Jobs',
      instructions: 'Sort each Chapter 7 question by what the speaker wants to know or show.',
      question: 'What job does each question do in the conversation?',
      dragDropGroups: [
        { group: 'Person responsible', items: ['Who did this?'] },
        { group: 'Past yes/no question', items: ['Did you harm our gods?'] },
        { group: 'Reason', items: ['Then, why do you worship these objects?'] },
        { group: 'Challenge to notice', items: ['Don’t you see that they can’t speak or see?'] },
      ],
      correctAnswer: {
        'Person responsible': ['Who did this?'],
        'Past yes/no question': ['Did you harm our gods?'],
        Reason: ['Then, why do you worship these objects?'],
        'Challenge to notice': ['Don’t you see that they can’t speak or see?'],
      },
      explanation: '“Who ...?” asks for a person, “Did ...?” checks a past action, “Why ...?” asks for a reason, and “Don’t you see ...?” pushes the listener to notice a point.',
      feedback: { correct: 'Correct. You sorted the questions by their communicative jobs.', incorrect: 'Focus on the question word or form at the beginning of each sentence.' },
    },
    {
      id: 'abraham-a2-language-7-knowledge-question-and-ability',
      type: 'multiple-choice',
      title: 'Ask If Someone Can',
      instructions: 'Choose the expression that uses “if” to introduce a yes/no question after “ask”.',
      question: 'Which Chapter 7 expression has the “ask ... if ...” pattern?',
      options: ['Ask it if it can speak.', 'You know that these objects don’t speak.', 'They can’t even protect themselves.'],
      correctAnswer: 0,
      explanation: 'After “ask”, “if” can introduce a yes/no question. The chapter also uses “know that ...” for known information and “can’t + verb” for inability.',
      feedback: { correct: 'Correct. “Ask it if it can speak” contains the indirect yes/no question.', incorrect: 'Look for the expression containing both “ask” and “if”.' },
    },
    {
      id: 'abraham-a2-language-7-questioning-production',
      type: 'reflection',
      title: 'Say It: Ask and Explain',
      instructions: 'Write or say four or five short A2 lines about a simple past situation. Use at least four Chapter 7 language patterns. Do not retell the answer to the Quick Challenge.',
      question: 'Can you ask about a past event, report what you know and explain a reason?',
      correctAnswer: null,
      explanation: 'A strong response can use “The next day ...”, “Who ...?”, “Did you ...?”, “I know that ...”, “Ask ... if ...”, “can/can’t ...”, and “because ...”.',
      feedback: { correct: 'Keep the questions natural and use each pattern for its real function.', incorrect: '' },
      discussionPrompts: [
        { question: 'Time — Begin with “The next day ...” or another past-time expression.', mode: 'Individual' },
        { question: 'Past event — Ask “Who ...?” or “Did you ...?”', mode: 'Individual' },
        { question: 'Knowledge — Add “I know that ...”', mode: 'Individual' },
        { question: 'Ability — Use “can” or “can’t” with a base verb.', mode: 'Individual' },
        { question: 'Reason — Finish one idea with “because ...”.', mode: 'Pair' },
      ],
    },
  ],
};