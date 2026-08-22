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
      id: 'abraham-a2-language-7-question-functions',
      type: 'matching',
      title: 'Different Questions, Different Jobs',
      instructions: 'Match each Chapter 7 question with what the speaker wants to know or show.',
      question: 'What job does each question do in the conversation?',
      matchingPairs: [
        { left: 'Who did this?', right: 'asks which person was responsible' },
        { left: 'Did you harm our gods?', right: 'asks whether a past action happened' },
        { left: 'Then, why do you worship these objects?', right: 'asks for a reason in the present' },
        { left: 'Don’t you see that they can’t speak or see?', right: 'pushes the listener to notice an obvious point' },
      ],
      correctAnswer: {
        'Who did this?': 'asks which person was responsible',
        'Did you harm our gods?': 'asks whether a past action happened',
        'Then, why do you worship these objects?': 'asks for a reason in the present',
        'Don’t you see that they can’t speak or see?': 'pushes the listener to notice an obvious point',
      },
      explanation: 'Chapter 7 uses several question types for different purposes: “Who ...?” asks for a person, “Did ...?” checks a past action, “Why ...?” asks for a reason, and a negative question such as “Don’t you see ...?” can challenge the listener to notice something.',
      feedback: {
        correct: 'Correct. You identified the purpose of each question instead of treating every question as the same form.',
        incorrect: 'Ask what information each speaker wants: a person, yes/no about the past, a reason, or recognition of an obvious point.',
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
      explanation: 'A strong response can use “The next day ...”, “Who ...?”, “Did you ...?”, “I know that ...”, “Ask ... if ...”, “can/can’t ...”, and “because ...”.',
      feedback: {
        correct: 'Keep the questions natural and use each pattern for its real function.',
        incorrect: '',
      },
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
