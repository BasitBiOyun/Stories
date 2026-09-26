import type { Exercise } from '../../../../types';

/**
 * Manually authored Mecca B1 Language Focus (Chapters 1–2), derived from the
 * actual English story text. Each chapter follows Notice → Build → Use:
 * learners first discover what a form does in a real chapter sentence, then
 * practise it in context, then use it in a new situation.
 */
export const meccaB1LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'mecca-b1-language-1-historical-frame',
      type: 'multiple-choice',
      title: 'What Does “This Reason” Point To?',
      instructions: 'Read the two sentences from Chapter 1. Then choose the best answer.',
      question: '“Before Islam, Mecca was led by a council of rich merchants. For this reason, the city was known as the Republic of Merchants.” What is “this reason”?',
      options: [
        'Islam started in the 7th century in Mecca.',
        'A council of rich merchants led Mecca.',
        'Poor and weak people lived in misery.',
        'There was no central government in Arabia.',
      ],
      correctAnswer: 1,
      explanation: '“For this reason” points back to the sentence just before it and introduces a result. Mecca was led by rich merchants, so people called it the Republic of Merchants. Writers use “this reason”, “this period” or “this city” to connect a new sentence to an idea they have already given.',
      feedback: {
        correct: 'Correct. The name “Republic of Merchants” is a result of who led the city.',
        incorrect: 'Read the sentence directly before “For this reason” in the second paragraph. Which fact explains the name “Republic of Merchants”?',
      },
    },
    {
      id: 'mecca-b1-language-1-cause-contrast',
      type: 'word-bank',
      title: 'Reason or Contrast?',
      instructions: 'Complete the lines from Chapter 1 with words from the bank. Two words are not needed.',
      question: 'Which word gives a reason, and which word puts two different situations side by side?',
      fillBlanksText: 'The period before Islam was called the Age of Ignorance, or Jahiliyyah, [blank] religious and social disorder was common in society. … Powerful people controlled many parts of life, [blank] poor and weak people lived in misery.',
      wordBank: ['because', 'while', 'because of', 'during'],
      correctAnswer: ['because', 'while'],
      explanation: '“Because” + subject + verb gives the reason for the name: disorder was common. “While” can put two situations that existed at the same time side by side to show a contrast: the powerful controlled life, but the poor and weak suffered. “Because of” and “during” need a noun, not a full clause (subject + verb).',
      feedback: {
        correct: 'Correct. “Because” explains the name, and “while” contrasts the two groups.',
        incorrect: 'Ask: does the second part explain why, or does it show a different group at the same time? Then check the first two paragraphs of Chapter 1.',
      },
    },
    {
      id: 'mecca-b1-language-1-focus-and-reporting',
      type: 'transformation',
      title: 'Who Did It, and Who Says So?',
      instructions: 'Rewrite each sentence so that it keeps the same meaning. Use the start that is given.',
      question: 'How does the chapter keep the focus on the people affected, and how does it show the source of a description?',
      transformItems: [
        {
          source: 'Society was not fair, and people from poor backgrounds were often treated badly.',
          frame: 'Society was not fair, and others often [blank] badly.',
          answers: ['treated people from poor backgrounds', 'treated poor people', 'treated those from poor backgrounds', 'treated people from a poor background'],
        },
        {
          source: 'The Quran describes this period as a time of ignorance and cruelty.',
          frame: 'In the Quran, this period [blank] a time of ignorance and cruelty.',
          answers: ['is described as', 'was described as'],
        },
      ],
      correctAnswer: null,
      explanation: 'The chapter uses the passive (“were often treated badly”) because the people who suffered are the focus, and the doers are general or unknown. Your active version needs a vague subject such as “others”, which shows why the passive sounds better here. “X describes Y as Z” names the source of a description; the passive “Y is described as Z in X” keeps the same source but puts the period first.',
      feedback: {
        correct: 'Well done. You moved between active and passive and kept the source of the description clear.',
        incorrect: 'Item 1: put the affected people after the active verb “treated”. Item 2: use is/was + “described as”. Check the last paragraph of Chapter 1.',
      },
    },
    {
      id: 'mecca-b1-language-1-production',
      type: 'reflection',
      title: 'Write a Connected Historical Snapshot',
      instructions: 'Write or say five to six connected B1 sentences about a different historical city or society. Do not retell Chapter 1.',
      question: 'Can you set the time, describe the social or political situation, explain one reason or result, add a contrast, and report a source or general description?',
      correctAnswer: null,
      explanation: 'A strong answer should read like one short historical paragraph rather than separate grammar examples. Useful patterns include “In the ... century...”, “was called... because...”, “for this reason...”, “while...”, “was led by...”, and “X describes... as...”.',
      feedback: {
        correct: 'Keep the ideas connected so the paragraph develops one historical situation clearly.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Set a historical time and place.', mode: 'Individual' },
        { question: 'Sentence 2 — Describe an important political or social condition.', mode: 'Individual' },
        { question: 'Sentence 3 — Add a reason with “because” or a result with “for this reason”.', mode: 'Individual' },
        { question: 'Sentence 4 — Contrast two groups or conditions with “while”.', mode: 'Pair' },
        { question: 'Sentence 5–6 — Use one passive form or attribute a description to a source.', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'mecca-b1-language-2-definition-contrast',
      type: 'sequencing',
      title: 'Follow the Explanation',
      instructions: 'Put these sentences from Chapter 2 in the most natural order. Words like “the Jahiliyyah period”, “first” and “this city” will help you.',
      question: 'How does the writer move from the Jahiliyyah to a short profile of Mecca?',
      sequencingItems: [
        { id: 'a', text: 'Allah chose this city to be the location of His House, the Holy Ka’ba.' },
        { id: 'b', text: 'Mecca is the holy city of Islam.' },
        { id: 'c', text: 'The Jahiliyyah was an age of barbarism.' },
        { id: 'd', text: 'To understand the Jahiliyyah period, we must first talk about Mecca.' },
      ],
      correctAnswer: ['c', 'd', 'b', 'a'],
      explanation: 'The writer first defines the period (“The Jahiliyyah was an age of barbarism”). “To understand the Jahiliyyah period, we must first …” refers back to that period and states the purpose and the first step of the next explanation. Then the new topic, Mecca, is introduced with a short definition. “This city” refers back to Mecca, so it must come after Mecca has been named.',
      feedback: {
        correct: 'Correct. Definition of the period, purpose and first step, the new topic, then a sentence that refers back to it.',
        incorrect: 'Start with the sentence that defines the period. Then ask: which sentence says what we must do first, which names Mecca, and which refers back to “this city”?',
      },
    },
    {
      id: 'mecca-b1-language-2-ordering-explanation',
      type: 'sentence-building',
      title: 'Describing One Idea as Another',
      instructions: 'Tap the pieces to rebuild this sentence from Chapter 2.',
      question: 'Where does “as” go when we describe one idea in terms of another?',
      sentenceChunks: [
        'Prophet Muhammad (as)',
        'described',
        'Islam',
        'as the opposite',
        'of barbarism.',
      ],
      correctAnswer: null,
      explanation: 'The pattern is describe + thing + as + description: “described Islam as the opposite of barbarism”. The same pattern appears in Chapter 1: “The Quran describes this period as a time of ignorance and cruelty.” Here the pattern builds a contrast, because the chapter has just called the Jahiliyyah “an age of barbarism”.',
      feedback: {
        correct: 'Well done. The thing being described comes straight after “described”, and “as” introduces the description.',
        incorrect: 'Start with the person, then “described”, then what he described, then “as …”. Check the first paragraph of Chapter 2.',
      },
    },
    {
      id: 'mecca-b1-language-2-addition-definition',
      type: 'transformation',
      title: 'Time Clauses and Inserted Definitions',
      instructions: 'Rewrite each sentence so that it keeps the same meaning. Use the start that is given.',
      question: 'Can you move a “when” clause to the front and unpack a definition that sits inside a sentence?',
      transformItems: [
        {
          source: 'This era ended when the first revelation of the Quran began in 610 CE.',
          frame: 'When the first revelation of the Quran began in 610 CE, [blank].',
          answers: ['this era ended', 'the era ended', 'the Jahiliyyah ended', 'the Jahiliyyah era ended', 'the Jahiliyyah period ended'],
        },
        {
          source: 'The Qiblah, the direction Muslims face during salah, is also located in Mecca.',
          frame: 'The Qiblah is also located in Mecca. It is [blank] during salah.',
          answers: ['the direction Muslims face', 'the direction that Muslims face', 'the direction which Muslims face'],
        },
      ],
      correctAnswer: null,
      explanation: 'A “when” clause can come after or before the main clause. When it comes first, we put a comma after it. A noun phrase between commas (“the Qiblah, the direction Muslims face during salah, …”) defines the word just before it. The writer puts the definition inside the sentence so the reader understands the term and gets a new fact at the same time.',
      feedback: {
        correct: 'Well done. You moved the time clause and turned the inserted definition into its own sentence.',
        incorrect: 'Item 1: after the comma, add the main clause about the era. Item 2: use the words between the commas in the last sentence of Chapter 2.',
      },
    },
    {
      id: 'mecca-b1-language-2-production',
      type: 'reflection',
      title: 'Build a Short Explanatory Profile',
      instructions: 'Write or say five to six connected B1 sentences about a different important city, place or institution. Do not retell Chapter 2.',
      question: 'Can you define the topic, explain why it matters, organise the explanation with a clear first step, add two related facts, and define one key term inside a sentence?',
      correctAnswer: null,
      explanation: 'A strong response should use connected explanatory language such as “To understand..., we must first...”, “is...”, “also”, “and”, and a short inserted definition like “X, the..., ...”.',
      feedback: {
        correct: 'Keep the paragraph focused on one topic and make each added detail support the explanation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Define or characterize the place/institution.', mode: 'Individual' },
        { question: 'Sentence 2 — Explain why the reader needs to understand it.', mode: 'Individual' },
        { question: 'Sentence 3 — Use “must first” or another clear ordering expression.', mode: 'Individual' },
        { question: 'Sentence 4 — Add a related fact with “also”.', mode: 'Pair' },
        { question: 'Sentence 5–6 — Join related information and define one key term inside a sentence.', mode: 'Pair' },
      ],
    },
  ],
};
