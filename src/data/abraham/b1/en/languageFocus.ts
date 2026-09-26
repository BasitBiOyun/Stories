import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific B1 Language Focus work for Abraham.
 * Each chapter follows Notice → Build → Use: learners first discover what a
 * form does in a real chapter sentence, then practise it in context, then use
 * it in a new situation. Every quoted sentence comes from the English chapter.
 */
export const abrahamB1LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'abraham-b1-language-1-time-frame',
      type: 'multiple-choice',
      title: 'What Does “Could” Mean Here?',
      instructions: 'Read the sentence from Chapter 1. Then choose the best meaning of “could”.',
      question: '“He could not understand how an intelligent person could make a statue and then see it as a god which could help or harm him.” In “a god which could help or harm him”, what does “could” show?',
      options: [
        'a power that people believed the statue had',
        'a power that the statue really showed in the chapter',
        'something people were allowed to do in the past',
        'a polite request',
      ],
      correctAnswer: 0,
      explanation: '“Could” changes its meaning with the context. In “a god which could help or harm him”, it describes a power people believed the statue had. The chapter shows the opposite: “They could not even move from one place to another on their own.” In “He could not understand how …”, “could not” shows that Abraham was unable to accept the idea.',
      feedback: {
        correct: 'Correct. “Could” here describes a power that people imagined, not a power the statue really had.',
        incorrect: 'Read the end of the second paragraph: the statues “could not even move … on their own”. So who believed they could help or harm?',
      },
    },
    {
      id: 'abraham-b1-language-1-ability-and-possibility',
      type: 'transformation',
      title: 'Short Phrase, Full Clause',
      instructions: 'The chapter adds detail to a noun with a short phrase. Complete each sentence with a full relative clause (who / which / that + verb) that keeps the same meaning.',
      question: 'How does a short phrase like “named …” or “made from …” carry the same information as a full clause?',
      transformItems: [
        {
          source: '… there was a boy named Abraham.',
          frame: '… there was a boy [blank] Abraham.',
          answers: ['who was named', 'that was named', 'who was called', 'that was called', 'whose name was'],
        },
        {
          source: 'In his homeland, people worshipped the stars, the moon, the sun, and statues made from wood and stone.',
          frame: '… and statues [blank] from wood and stone.',
          answers: ['which were made', 'that were made'],
        },
      ],
      correctAnswer: null,
      explanation: 'A past participle phrase after a noun (“a boy named Abraham”, “statues made from wood and stone”) is a short form of a relative clause: “a boy who was named Abraham”, “statues which were made from wood and stone”. The short form makes description compact, so the chapter can give a lot of detail in one sentence.',
      feedback: {
        correct: 'Well done. You turned the compact phrases into full relative clauses.',
        incorrect: 'Use who for a person and which or that for things, then add was/were before the participle: “who was named …”, “which were made …”.',
      },
    },
    {
      id: 'abraham-b1-language-1-describing-and-linking',
      type: 'word-bank',
      title: 'Placing Events in Time',
      instructions: 'Complete the lines from Chapter 1 with words from the bank. One word is not needed.',
      question: 'Which time words place Abraham’s story in the distant past and in his early life?',
      fillBlanksText: 'A very long time ago, about 4,000 years [blank], in the kingdom of Babylon in Mesopotamia, there was a boy named Abraham. … Abraham discovered Allah [blank] he was at a very young age. [blank] childhood, his heart was full of hatred for idols.',
      wordBank: ['ago', 'when', 'From', 'Since', 'before'],
      correctAnswer: ['ago', 'when', 'From'],
      explanation: '“Ago” comes after a period of time and counts back from now (about 4,000 years ago). “When” links an event to a stage of life (when he was at a very young age). “From childhood” gives the starting point of a past state. “Since childhood” would need the present perfect or past perfect (“had been full of …”), so it does not fit with “was”.',
      feedback: {
        correct: 'Correct. Ago, when and from each place the story in time in a different way.',
        incorrect: 'Check the first two paragraphs of Chapter 1. Notice that the sentence with “childhood” uses the past simple “was”.',
      },
    },
    {
      id: 'abraham-b1-language-1-connected-observation',
      type: 'reflection',
      title: 'Build a Connected Observation',
      instructions: 'Write or say four connected B1 sentences about a person noticing something surprising in a new place. Use at least three Chapter 1 language patterns without retelling the story.',
      question: 'Can you combine time framing, an indirect “how” idea, ability/possibility, and added description in one short coherent response?',
      correctAnswer: null,
      explanation: 'A strong response can open with a past-time expression, describe a person or object with added detail, use “could/could not” in context, and include a sentence such as “She could not understand how ...”.',
      feedback: {
        correct: 'Keep all four sentences focused on the same situation and make the language relationships clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Set the time with “a long time ago”, “when ...”, or another suitable past-time frame.', mode: 'Individual' },
        { question: 'Sentence 2 — Describe a person, place, or object with an added phrase such as “named ...”, “made from ...”, or “full of ...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Use “could” or “could not” to express ability, possibility, or difficulty understanding.', mode: 'Individual' },
        { question: 'Sentence 4 — Add an indirect idea with “could not understand how ...” and connect it to the same situation.', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'abraham-b1-language-2-past-habit-background',
      type: 'drag-drop',
      title: 'Again and Again, or One Time?',
      instructions: 'Read each part of Chapter 2. Did it happen again and again in Abraham’s childhood, or only one time? Put it in the right group.',
      question: 'How does the chapter show the difference between childhood habits and one particular event?',
      dragDropGroups: [
        {
          group: 'Again and again (a habit)',
          items: [
            'he often used to watch his father',
            'Abraham used to play with these idols as toys',
            'he rode on their backs and sometimes kicked them',
          ],
        },
        {
          group: 'Only one time (a single event)',
          items: [
            'One day, Abraham asked his father',
            'His father answered, “It is Mardukh, the god of gods, son!”',
            'This made Abraham laugh',
          ],
        },
      ],
      correctAnswer: {
        'Again and again (a habit)': [
          'he often used to watch his father',
          'Abraham used to play with these idols as toys',
          'he rode on their backs and sometimes kicked them',
        ],
        'Only one time (a single event)': [
          'One day, Abraham asked his father',
          'His father answered, “It is Mardukh, the god of gods, son!”',
          'This made Abraham laugh',
        ],
      },
      explanation: '“Used to + verb” describes a habit in an earlier period of life. Once “used to” sets up the habit, the past simple can continue it: “he rode on their backs and sometimes kicked them” describes the same repeated play. “One day” moves the story to one particular event, told in the past simple.',
      feedback: {
        correct: 'Correct. You separated repeated childhood behaviour from single events.',
        incorrect: 'Look for “used to”, “often” and “sometimes” for habits, and “One day” for a single event. “He rode on their backs” follows “used to play”, so it is part of the same habit.',
      },
    },
    {
      id: 'abraham-b1-language-2-correcting-contrast',
      type: 'choose-form',
      title: 'Habit, Background, Event',
      instructions: 'Choose the correct form to complete each sentence from Chapter 2.',
      question: 'Which form shows a past habit, an action in progress, and a single event?',
      formChoices: [
        {
          sentence: 'When Abraham was a young boy, he often [choice] watch his father …',
          options: ['used to', 'was used to', 'use to'],
          answer: 0,
        },
        {
          sentence: '… while he [choice] idols.',
          options: ['was making', 'was make', 'used to making'],
          answer: 0,
        },
        {
          sentence: 'One day, his father [choice] Abraham riding the statue of Mardukh (the Chief God of Babylon), and he got angry with him.',
          options: ['saw', 'used to see', 'was seeing'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'Used to + base verb = a past habit (“used to watch”). “Was used to” means “was familiar with”, and “use to” is only correct after did/didn’t. While + was/were + -ing = an action in progress in the background (“while he was making idols”). One day + past simple = one finished event (“his father saw Abraham”).',
      feedback: {
        correct: 'Correct. You chose the right form for a habit, a background action and one event.',
        incorrect: 'Ask: was it repeated, was it in progress at that time, or did it happen once? Then check the first two paragraphs of Chapter 2.',
      },
    },
    {
      id: 'abraham-b1-language-2-reported-prohibition',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct a contrast, a comparison and a reported instruction?',
      errorItems: [
        {
          sentence: 'Azer replied, “They are not toys, and our gods.”',
          error: 'and',
          options: ['but', 'so', 'or'],
          answer: 0,
        },
        {
          sentence: 'Abraham asked, “What is this statue, father? It has big ears, more bigger than ours.”',
          error: 'more bigger',
          options: ['bigger', 'more big', 'the biggest'],
          answer: 0,
        },
        {
          sentence: 'He told his son don’t play with it again.',
          error: 'don’t play',
          options: ['not to play', 'not play', 'to not playing'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Not … but …” rejects one idea and replaces it with another: “not toys, but our gods”. Short adjectives form the comparative with -er, never with “more … -er”: “bigger than ours”. To report a negative instruction, use tell + person + not to + verb: “He told his son not to play with it again.”',
      feedback: {
        correct: 'Well done. You corrected the contrast, the comparative and the reported instruction.',
        incorrect: 'Compare each sentence with Chapter 2: Azer’s reply, Abraham’s question about the ears, and the end of the second paragraph.',
      },
    },
    {
      id: 'abraham-b1-language-2-connected-memory',
      type: 'reflection',
      title: 'Describe a Past Routine and a Turning Point',
      instructions: 'Write or say four connected B1 sentences about a childhood routine that leads to one memorable event. Use at least three Chapter 2 language patterns without retelling the story.',
      question: 'Can you combine a past habit, a background action, one specific event, and either a reported instruction or a comparison?',
      correctAnswer: null,
      explanation: 'A strong response can begin with “I used to ...”, add “while ... was/were -ing”, shift with “One day ...”, and finish with a reported instruction such as “My teacher told me not to ...” or a comparison such as “It was bigger than ...”.',
      feedback: {
        correct: 'Keep the four sentences in one clear time sequence and make the turning point easy to follow.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a repeated past habit with “used to”.', mode: 'Individual' },
        { question: 'Sentence 2 — Add a simultaneous background action with “while ... was/were -ing”.', mode: 'Individual' },
        { question: 'Sentence 3 — Move to one specific event with “One day ...”.', mode: 'Individual' },
        { question: 'Sentence 4 — Add a reported instruction with “told ... (not) to ...” or a comparison with “... than ...”.', mode: 'Pair' },
      ],
    },
  ],
};
