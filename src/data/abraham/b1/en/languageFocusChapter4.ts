import type { Exercise } from '../../../../types';

export const abrahamB1LanguageFocusChapter4: Record<number, Exercise[]> = {
  4: [
    {
      id: 'abraham-b1-language-4-time-result',
      type: 'matching',
      title: 'From Observation to Result',
      instructions: 'Match each Chapter 4 expression with the relationship it creates.',
      question: 'How does the chapter connect time, new evidence, and a resulting conclusion?',
      matchingPairs: [
        { left: 'stayed until sunrise', right: 'marks the endpoint of a continuing action' },
        { left: 'when he saw the bright sun', right: 'introduces the event that triggers the next thought' },
        { left: 'when it set, he understood ...', right: 'links new evidence to a changed conclusion' },
        { left: 'Allah is the Creator of everything.', right: 'states the conclusion reached after the observation' },
      ],
      correctAnswer: {
        'stayed until sunrise': 'marks the endpoint of a continuing action',
        'when he saw the bright sun': 'introduces the event that triggers the next thought',
        'when it set, he understood ...': 'links new evidence to a changed conclusion',
        'Allah is the Creator of everything.': 'states the conclusion reached after the observation',
      },
      explanation: 'The chapter uses time expressions to organise observation first and conclusion second.',
      feedback: {
        correct: 'Correct. You traced how the time clauses organise evidence and result.',
        incorrect: 'Separate the endpoint, the triggering event, the evidence-to-conclusion link, and the final statement.',
      },
    },
    {
      id: 'abraham-b1-language-4-condition-consequence',
      type: 'matching',
      title: 'Conditions and Consequences',
      instructions: 'Match each conditional expression with the kind of consequence it presents.',
      question: 'How do the two “if” clauses create different kinds of pressure in the chapter?',
      matchingPairs: [
        { left: 'If Allah doesn’t show me the right way, I will be on the wrong path.', right: 'presents a possible condition and its future consequence' },
        { left: 'If you do not stop speaking like this, I will stone you.', right: 'uses a condition to express a threat' },
        { left: 'doesn’t show me', right: 'negative present form inside the condition' },
        { left: 'will be / will stone', right: 'future result that follows if the condition is met' },
      ],
      correctAnswer: {
        'If Allah doesn’t show me the right way, I will be on the wrong path.': 'presents a possible condition and its future consequence',
        'If you do not stop speaking like this, I will stone you.': 'uses a condition to express a threat',
        'doesn’t show me': 'negative present form inside the condition',
        'will be / will stone': 'future result that follows if the condition is met',
      },
      explanation: 'The same condition-result pattern can express very different meanings depending on the speaker and situation.',
      feedback: {
        correct: 'Correct. You identified both the form and the different communicative purposes.',
        incorrect: 'Look at what comes after “if” and what future result the speaker predicts or threatens.',
      },
    },
    {
      id: 'abraham-b1-language-4-duty-purpose-command',
      type: 'matching',
      title: 'Duty, Purpose, and Direct Action',
      instructions: 'Match each expression with its communicative function.',
      question: 'How does Chapter 4 move from inner responsibility to direct speech?',
      matchingPairs: [
        { left: 'he should guide his people', right: 'expresses a responsibility or duty' },
        { left: 'because Allah chose him', right: 'gives the reason for that responsibility' },
        { left: 'chose him to be His Messenger', right: 'uses “to be” to express the role or purpose connected with the choice' },
        { left: 'Follow me. / Stop worshipping idols. / Leave here now.', right: 'uses direct imperatives for advice, command, or dismissal' },
      ],
      correctAnswer: {
        'he should guide his people': 'expresses a responsibility or duty',
        'because Allah chose him': 'gives the reason for that responsibility',
        'chose him to be His Messenger': 'uses “to be” to express the role or purpose connected with the choice',
        'Follow me. / Stop worshipping idols. / Leave here now.': 'uses direct imperatives for advice, command, or dismissal',
      },
      explanation: 'The chapter links responsibility to reason and role, then shifts into direct imperatives when the conversation begins.',
      feedback: {
        correct: 'Correct. You distinguished responsibility, reason, role, and direct command.',
        incorrect: 'Ask whether the expression shows duty, explains why, names a role, or directly tells someone what to do.',
      },
    },
    {
      id: 'abraham-b1-language-4-connected-response',
      type: 'reflection',
      title: 'Build a Responsibility-and-Response Scene',
      instructions: 'Write or say four connected B1 sentences about a person who realises a responsibility, explains why it matters, gives one direct instruction, and faces a conditional response. Do not retell Chapter 4.',
      question: 'Can you connect time or realisation, responsibility + reason, an imperative, and an if-clause in one short coherent scene?',
      correctAnswer: null,
      explanation: 'A strong response can combine “when ...”, “should ... because ...”, a direct imperative, and “If ... , I will ...” while keeping one clear situation.',
      feedback: {
        correct: 'Keep the four sentences connected and make the conditional response logically follow from the situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Introduce the moment of realisation with “when ...” or an endpoint with “until ...”.', mode: 'Individual' },
        { question: 'Sentence 2 — State a responsibility with “should ... because ...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Give one clear imperative such as “Follow ...”, “Stop ...”, or “Leave ...”.', mode: 'Individual' },
        { question: 'Sentence 4 — Add a realistic consequence or response with “If ... , I will ...”.', mode: 'Pair' },
      ],
    },
  ],
};
