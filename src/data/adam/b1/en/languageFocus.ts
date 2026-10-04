import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific B1 Language Focus work for Adam.
 * Each chapter follows Notice → Build → Use: learners first discover what a
 * form does in a real chapter sentence, then practise it in context, then use
 * it in a new situation. Every quoted sentence comes from the English chapter;
 * quoted words of Allah are only read and asked about, never changed.
 */
export const adamB1LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'adam-b1-language-1-source-and-story-time',
      type: 'drag-drop',
      title: 'True Now or Happened Then?',
      instructions: 'Put each part of Chapter 1 in the right group.',
      question: 'Is it true now, or did it happen in the story?',
      dragDropGroups: [
        {
          group: 'True now (present forms)',
          items: [
            'Adam (pbuh) is the first Messenger and the father of all humans.',
            'The Holy Qur’an tells his tale in different surahs.',
            'we can learn many lessons from this fabulous but true story',
          ],
        },
        {
          group: 'Happened in the story (past forms)',
          items: [
            'Allah created him from soil',
            '… gave him full value as the first human.',
            'The angels were surprised',
          ],
        },
      ],
      correctAnswer: {
        'True now (present forms)': [
          'Adam (pbuh) is the first Messenger and the father of all humans.',
          'The Holy Qur’an tells his tale in different surahs.',
          'we can learn many lessons from this fabulous but true story',
        ],
        'Happened in the story (past forms)': [
          'Allah created him from soil',
          '… gave him full value as the first human.',
          'The angels were surprised',
        ],
      },
      explanation: 'The present simple (is, tells) and “can” describe things that are true today: Adam’s place as the first Messenger, what the Qur’an does, and what we can learn now. The past simple (created, gave, were) tells finished events inside the story. Even in the first paragraph, “Allah created him from soil” is past, because it is an event, not a present fact.',
      feedback: {
        correct: 'Correct. You separated present facts about Adam, the Qur’an and us from past story events.',
        incorrect: 'Look at the verb in each part: is, tells, can learn, or created, gave, were? Then ask: is this still true today, or did it happen once in the story?',
      },
    },
    {
      id: 'adam-b1-language-1-future-from-the-past',
      type: 'word-bank',
      title: 'Order, Report, Look Forward',
      instructions: 'Complete the lines from Chapter 1 with words from the bank. Three words are not needed.',
      question: 'Which word orders the events, which reports words, and which looks ahead?',
      fillBlanksText: '[blank] Allah created the sky and the earth, He [blank] the angels that He was going to create a human. … This ruler [blank] live there for many years.',
      wordBank: ['After', 'told', 'would', 'While', 'said', 'will'],
      correctAnswer: ['After', 'told', 'would'],
      explanation: '“After + past simple” puts one finished event before the next: first the sky and the earth, then the announcement. We “tell someone” something, but we “say something” (not “said the angels”). “Would” and “was going to” look forward from a past moment: when the angels were told, the ruler’s long life on earth was still in the future. “Will” looks forward from now, so it does not fit a story told in the past.',
      feedback: {
        correct: 'Correct. You ordered the events, reported the announcement, and looked forward from the past.',
        incorrect: 'Check the second paragraph of Chapter 1. Which came first? Who was told? Is the ruler’s future seen from now or from that past moment?',
      },
    },
    {
      id: 'adam-b1-language-1-sequence-and-reporting',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sentences about Allah’s plan and the angels?',
      errorItems: [
        {
          sentence: 'He said He has decided to place a ruler (khalifah) on earth.',
          error: 'has decided',
          options: ['had decided', 'have decided', 'was deciding'],
          answer: 0,
        },
        {
          sentence: 'The angels were surprised and began wait with curiosity.',
          error: 'began wait',
          options: ['began to wait', 'began to waiting', 'begin waiting'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'When we report a decision after a past verb (He said …), a decision made before that moment moves back to the past perfect: “He said He had decided …”. After “began”, use “to + base verb” (or -ing): “began to wait”. “Began” is already past, so the verb after it does not change.',
      feedback: {
        correct: 'Well done. You fixed the past perfect and the pattern after “began”.',
        incorrect: 'Read the end of Chapter 1 again: “He said He … to place a ruler” and “The angels were surprised and began …”.',
      },
    },
    {
      id: 'adam-b1-language-1-build-a-connected-account',
      type: 'reflection',
      title: 'Build a Connected Account',
      instructions: 'Write or say four sentences about how the story of Adam (pbuh) begins.',
      question: 'Can you tell how the story begins?',
      correctAnswer: null,
      explanation: 'A strong response can begin with a present source statement, shift into past narration, order events with “after”, and use “was going to” or “would” for future-from-the-past meaning.',
      feedback: {
        correct: 'Keep the time perspective consistent and connect the ideas rather than writing four unrelated sentences.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Name the source: “The Qur’an tells …”', mode: 'Individual' },
        { question: 'Sentence 2 — Start the story: “After …, Allah …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say what He told the angels: “He told the angels that …”', mode: 'Individual' },
        { question: 'Sentence 4 — Say what would happen later: “… was going to …” or “… would …”', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'adam-b1-language-2-cause-and-result',
      type: 'multiple-choice',
      title: 'What Must Happen First?',
      instructions: 'Read Allah’s words in Chapter 2. Then choose the best answer.',
      question: 'Allah told His angels, “After I have created Adam (pbuh) and given him life and knowledge, show respect to him.” When were the angels to show respect to Adam?',
      options: [
        'when his creation was complete and he had life and knowledge',
        'while he was still being shaped from soil',
        'before Allah created him',
        'only after Adam had lived on earth for many years',
      ],
      correctAnswer: 0,
      explanation: '“After + have/has + past participle” (After I have created … and given …) shows an action that must be complete before the next action can happen. The instruction “show respect to him” comes second: first the creation and the gift of life and knowledge, then the respect.',
      feedback: {
        correct: 'Correct. “After I have created … and given …” means the creation must be complete first.',
        incorrect: 'Look at the verbs after “After”: “have created” and “given”. Are these actions finished or still going on when the angels show respect?',
      },
    },
    {
      id: 'adam-b1-language-2-report-and-command',
      type: 'word-bank',
      title: 'Purpose, Sequence and Comparison',
      instructions: 'Complete the lines from Chapter 2 with words from the bank. Three words are not needed.',
      question: 'Which word says why, which says what came next, and which compares?',
      fillBlanksText: 'Allah gave Adam (pbuh) life and intellect [blank] learn and understand. [blank], He taught Adam (pbuh) everything he needed to do good on earth. He gave Adam (pbuh) more knowledge [blank] the angels.',
      wordBank: ['to', 'Later', 'than', 'for', 'While', 'as'],
      correctAnswer: ['to', 'Later', 'than'],
      explanation: '“To + base verb” gives the purpose of a gift: life and intellect were given so that Adam could learn and understand (not “for learn”). “Later” moves the account to the next stage. “More … than” compares two things; “more … as” is a common mistake.',
      feedback: {
        correct: 'Correct. You showed purpose, the next stage and a comparison.',
        incorrect: 'Read the second paragraph of Chapter 2. Ask: why was intellect given? When did the teaching happen? What is Adam’s knowledge compared with?',
      },
    },
    {
      id: 'adam-b1-language-2-purpose-sequence-comparison',
      type: 'transformation',
      title: 'Reason First or Result First?',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we say why humans have different skin colors?',
      transformItems: [
        {
          source: 'Then, Allah’s angels collected soil from different parts of the earth and Allah shaped Adam (pbuh). That’s why humans have different skin colors.',
          frame: 'Humans have different skin colors [blank] Allah’s angels collected soil from different parts of the earth.',
          answers: ['because', 'since', 'as'],
        },
        {
          source: 'Then, Allah’s angels collected soil from different parts of the earth and Allah shaped Adam (pbuh). That’s why humans have different skin colors.',
          frame: 'Allah’s angels collected soil from different parts of the earth, [blank] humans have different skin colors.',
          answers: ['so', 'and so', 'and that’s why', 'and that is why', 'which is why'],
        },
      ],
      correctAnswer: null,
      explanation: '“That’s why” starts a new sentence and points back to the reason in the sentence before. “Because” (or since / as) comes before the reason, so the result can come first. “So” (or which is why) joins the reason and the result in one sentence, with the reason first.',
      feedback: {
        correct: 'Well done. You kept the cause-result meaning while changing the order.',
        incorrect: 'Item 1: the result comes first, so you need a word that introduces a reason. Item 2: the reason comes first, so you need a word that introduces a result.',
      },
    },
    {
      id: 'adam-b1-language-2-connected-explanation',
      type: 'reflection',
      title: 'Build a Connected Explanation',
      instructions: 'Write or say four sentences about learning something new.',
      question: 'What did you learn, and how?',
      correctAnswer: null,
      explanation: 'For example, you can introduce what a teacher said, explain why a learner received a tool, use “so” or “that’s why” for the result, and finish with a “more ... than” comparison.',
      feedback: {
        correct: 'Keep the ideas connected so each sentence develops the same situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Say what someone told you: “Our teacher told us that …”', mode: 'Individual' },
        { question: 'Sentence 2 — Give a reason and a result: “…, so …” or “That’s why …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say what for: “… to + verb”', mode: 'Individual' },
        { question: 'Sentence 4 — Compare: “… was more … than …”', mode: 'Pair' },
      ],
    },
  ],
};
