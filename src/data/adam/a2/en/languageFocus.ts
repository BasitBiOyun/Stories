import type { Exercise } from '../../../../types';

/**
 * Canonical Adam A2 English Language Focus, Chapters 1–4.
 * Each chapter follows Look → Practise → Use: learners first look at what a
 * form does in a real chapter sentence, then practise it in context, then use
 * it in their own short sentences. Every quoted line comes from the English chapter.
 */
export const adamA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'adam-a2-language-1-story-past-actions',
      type: 'matching',
      title: 'Past Forms in the Story',
      instructions: 'Find these verbs in Chapter 1. Match each verb with its past form.',
      question: 'Chapter 1 tells a story about the past. Which past form goes with each verb?',
      matchingHeadings: { left: 'Verb', right: 'Past form in Chapter 1' },
      matchingPairs: [
        { left: 'say', right: 'said' },
        { left: 'begin', right: 'began' },
        { left: 'get', right: 'got' },
        { left: 'create', right: 'created' },
      ],
      correctAnswer: {
        say: 'said',
        begin: 'began',
        get: 'got',
        create: 'created',
      },
      explanation: 'The story happened a long time ago, so the chapter uses past forms. Some verbs add -ed: create → created. Many common verbs change: say → said, begin → began, get → got.',
      feedback: {
        correct: 'Good. You found the past forms that tell the creation story.',
        incorrect: 'Look at Chapter 1 again: “He said …”, “They began waiting …”, “Angels got surprised”, “Allah created …”.',
      },
    },
    {
      id: 'adam-a2-language-1-going-to-future',
      type: 'choose-form',
      title: 'Past Event or Plan?',
      instructions: 'Choose the correct form for each sentence from Chapter 1.',
      question: 'Is it something that happened, or a plan for later?',
      formChoices: [
        {
          sentence: '… Allah’s angels [choice] soil from different parts of the earth …',
          options: ['collect', 'collected', 'are going to collect'],
          answer: 1,
        },
        {
          sentence: '… he told the angels that he [choice] create a human.',
          options: ['going to', 'were going to', 'was going to'],
          answer: 2,
        },
        {
          sentence: '… and Allah [choice] Adam.',
          options: ['shaped', 'shapes', 'is going to shape'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'Finished events in the story use the past: collected, shaped. “Was going to + verb” tells us about a plan for later, seen from the past: Allah told the angels about His plan before He created Adam. “He” needs “was”, not “were”.',
      feedback: {
        correct: 'Well done. You chose the past for events and “was going to” for the plan.',
        incorrect: 'Read the second and third paragraphs of Chapter 1. Did it happen, or was it a plan for later?',
      },
    },
    {
      id: 'adam-a2-language-1-story-links',
      type: 'word-bank',
      title: 'Linking Words',
      instructions: 'Complete the lines from Chapter 1 with words from the box. One word is not needed.',
      question: 'Which word gives a reason, which tells what came next, and which gives a result?',
      fillBlanksText: '… cared about him very much [blank] he was the first human. … the sky and the earth. [blank], he told the angels … soil from different parts of the earth … [blank], humans have different skin colors.',
      wordBank: ['After that', 'because', 'But', 'Because of this'],
      correctAnswer: ['because', 'After that', 'Because of this'],
      explanation: '“Because” gives a reason (why Allah cared about Adam). “After that” tells us what happened next. “Because of this” gives a result: soil from different places → different skin colors.',
      feedback: {
        correct: 'Correct. You used a reason word, an order word and a result word.',
        incorrect: 'Ask: Why? (reason) — What next? (order) — What happened as a result? Then check Chapter 1.',
      },
    },
    {
      id: 'adam-a2-language-1-retell-creation',
      type: 'reflection',
      title: 'Say It: Retell the Creation Sequence',
      instructions: 'Retell the main sequence in three or four short A2 sentences. Use complete sentences and at least two language patterns from this Language Focus.',
      question: 'Can you explain what happened and what Allah announced would happen next?',
      correctAnswer: null,
      explanation: 'A strong A2 response uses past verbs for finished events, a “going to” chunk for the announced future, and simple linkers such as “After that” or “Then”.',
      feedback: { correct: 'Use accurate Chapter 1 language to organise the story clearly.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Start with a finished event: “Allah created ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Move the story forward: “After that, He told the angels ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Use the future announcement: “The human is going to ...”', mode: 'Individual' },
        { question: 'Sentence 4 — Add the next event with “Then ...” if you can.', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'adam-a2-language-2-ability-and-learning',
      type: 'true-false',
      title: 'What Does “Could” Mean?',
      instructions: 'Read the sentence from Chapter 2. Is the statement true or false?',
      question: '“Adam could learn and understand.” This means Adam was able to learn and understand.',
      correctAnswer: true,
      explanation: '“Could + verb” tells us what someone was able to do in the past. Adam was able to learn and understand, because Allah gave him knowledge.',
      feedback: {
        correct: 'Correct. “Could” shows Adam’s ability.',
        incorrect: 'Read the first paragraph of Chapter 2 again. “Could learn” = was able to learn.',
      },
    },
    {
      id: 'adam-a2-language-2-comparing-knowledge',
      type: 'word-bank',
      title: 'Wiser and More',
      instructions: 'Complete the lines from Chapter 2 with words from the box. Two words are not needed.',
      question: 'Which words compare Adam with the angels, and which word comes after “taught him”?',
      fillBlanksText: 'He was [blank] than the angels, because Allah gave Adam knowledge and taught him [blank] think. He learned [blank] than the angels knew.',
      wordBank: ['wisest', 'wiser', 'to', 'most', 'more'],
      correctAnswer: ['wiser', 'to', 'more'],
      explanation: 'We compare two things with “-er + than” (wiser than) or “more + than” (learned more than). “Wisest” and “most” compare one thing with all the others, so they do not go with “than”. After “taught + person”, we use “to + verb”: taught him to think.',
      feedback: {
        correct: 'Well done. You used “wiser than”, “more than” and “taught him to”.',
        incorrect: 'Look at the first paragraph of Chapter 2. Which word goes with “than”?',
      },
    },
    {
      id: 'adam-a2-language-2-reason-and-contrast',
      type: 'sentence-building',
      title: 'What Did Iblis Think?',
      instructions: 'Put the parts in order to make the sentence from Chapter 2.',
      question: 'How does the chapter tell us Iblis’s opinion?',
      sentenceChunks: ['Iblis', 'thought', 'Adam was', 'an unimportant creature', 'created from clay.'],
      correctAnswer: null,
      explanation: '“Thought + sentence” tells us someone’s opinion. The angels thought Adam was amazing. “But Iblis didn’t think so.” His opinion was different: he thought Adam was unimportant.',
      feedback: {
        correct: 'Correct. “Iblis thought …” shows that this is only his opinion.',
        incorrect: 'Start with the person, then “thought”, then what he thought. Check the last line of Chapter 2.',
      },
    },
    {
      id: 'adam-a2-language-2-explain-two-views',
      type: 'reflection',
      title: 'Say It: Explain the Two Views',
      instructions: 'Give three or four short A2 sentences using Chapter 2 language. Do not simply copy the paragraph.',
      question: 'Can you explain Adam’s ability and the different views of the angels and Iblis?',
      correctAnswer: null,
      explanation: 'A strong response combines ability, comparison, reason and contrast: what Adam could do, why he was wiser, what the angels thought, and what Iblis thought instead.',
      feedback: { correct: 'Use accurate Chapter 2 language to connect ability, reason and contrasting opinions.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe ability: “Adam could ... and ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Compare: “He was wiser than ... because ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Report one opinion: “The angels thought that ...”', mode: 'Individual' },
        { question: 'Sentence 4 — Contrast it: “But Iblis thought ...”', mode: 'Pair' },
      ],
    },
  ],
  3: [
    {
      id: 'adam-a2-language-3-comparing-value',
      type: 'drag-drop',
      title: 'Iblis’s Idea or the Truth?',
      instructions: 'Read the parts of Chapter 3. Put each one in the right group.',
      question: 'Which parts tell us only what Iblis thought, and which parts tell us what is true in the chapter?',
      dragDropGroups: [
        {
          group: 'What Iblis thought',
          items: [
            'He … believed his origin was better.',
            'He thought he was more important …',
            'Iblis continued saying he was right and the Creator was wrong.',
          ],
        },
        {
          group: 'What the chapter says is true',
          items: [
            'Adam had perfect knowledge and it was for the good of every creature of Allah.',
            'For Allah, the clay or the fire did not make anybody valuable.',
          ],
        },
      ],
      correctAnswer: {
        'What Iblis thought': [
          'He … believed his origin was better.',
          'He thought he was more important …',
          'Iblis continued saying he was right and the Creator was wrong.',
        ],
        'What the chapter says is true': [
          'Adam had perfect knowledge and it was for the good of every creature of Allah.',
          'For Allah, the clay or the fire did not make anybody valuable.',
        ],
      },
      explanation: 'Words like “thought”, “believed” and “saying” tell us that this is Iblis’s idea, not a fact. The chapter shows that his idea was wrong: “He thought little and was wrong about Adam.”',
      feedback: {
        correct: 'Good. You saw that “thought”, “believed” and “saying” show Iblis’s own idea.',
        incorrect: 'Look for “thought”, “believed” or “saying”. They show what Iblis thought. Then read the second and third paragraphs of Chapter 3.',
      },
    },
    {
      id: 'adam-a2-language-3-reporting-beliefs',
      type: 'choose-form',
      title: 'Better, More Valuable, Couldn’t',
      instructions: 'Choose the correct form for each sentence from Chapter 3.',
      question: 'Which form compares, and which form says what Iblis was not able to do?',
      formChoices: [
        {
          sentence: 'Iblis said, “I am [choice] than Adam.”',
          options: ['gooder', 'better', 'more good'],
          answer: 1,
        },
        {
          sentence: 'This knowledge made Adam [choice].',
          options: ['more valuable', 'valuabler', 'most valuable'],
          answer: 0,
        },
        {
          sentence: 'Iblis [choice] see that Adam had perfect knowledge …',
          options: ['can’t', 'didn’t could', 'couldn’t'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“Good” has a special comparative: better. Long words like “valuable” use “more”: more valuable. “Couldn’t + verb” says what someone was not able to do in the past.',
      feedback: {
        correct: 'Well done. You chose the correct comparisons and “couldn’t”.',
        incorrect: 'Read the first two paragraphs of Chapter 3 again and look for “than” and “couldn’t”.',
      },
    },
    {
      id: 'adam-a2-language-3-cause-result',
      type: 'word-bank',
      title: 'But and Because',
      instructions: 'Complete the lines from Chapter 3 with words from the box. Two words are not needed.',
      question: 'Which word shows a different idea, and which word gives a reason?',
      fillBlanksText: '… did not make anybody valuable. [blank] useful knowledge makes people great, [blank] with this knowledge, humans can do good and stop bad.',
      wordBank: ['If', 'But', 'After', 'because'],
      correctAnswer: ['But', 'because'],
      explanation: '“But” shows a different idea: clay or fire does not make anybody valuable, but useful knowledge makes people great. “Because” gives the reason: with this knowledge, humans can do good and stop bad.',
      feedback: {
        correct: 'Correct. “But” shows the different idea, and “because” gives the reason.',
        incorrect: 'Read the third paragraph of Chapter 3. Which word shows a different idea? Which word answers “Why?”',
      },
    },
    {
      id: 'adam-a2-language-3-explain-the-mistake',
      type: 'reflection',
      title: 'Say It: Explain the Wrong Judgement',
      instructions: 'Give three or four short A2 sentences using Chapter 3 language. Explain the judgement, the mistake and the value of useful knowledge.',
      question: 'Can you explain what Iblis believed and why the chapter says useful knowledge is more important?',
      correctAnswer: null,
      explanation: 'A strong A2 response reports Iblis’s belief, uses one comparison, contrasts it with the chapter’s message, and gives a reason or result connected to useful knowledge.',
      feedback: { correct: 'Use Chapter 3 language to report a belief, compare ideas, and explain a reason or result.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Report a belief: “Iblis thought/believed that ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Add his comparison: “He thought he was ... than Adam.”', mode: 'Individual' },
        { question: 'Sentence 3 — Contrast the message: “But useful knowledge ...”', mode: 'Individual' },
        { question: 'Sentence 4 — Give a reason or result with “because”, “can”, or “made”.', mode: 'Pair' },
      ],
    },
  ],
  4: [
    {
      id: 'adam-a2-language-4-wants-plans',
      type: 'multiple-choice',
      title: 'Who Did Iblis Want to Lose Allah’s Love?',
      instructions: 'Read the sentence from Chapter 4. Choose the correct answer.',
      question: '“He wanted Adam to lose Allah\'s love, just as he had.” Who did Iblis want to lose Allah’s love?',
      options: ['Iblis himself', 'Adam', 'Eve'],
      correctAnswer: 1,
      explanation: '“Want + person + to + verb” tells us what someone wants another person to do or to have happen. Iblis wanted Adam to lose Allah’s love. “Just as he had” means: Iblis had already lost it himself.',
      feedback: {
        correct: 'Correct. The person after “wanted” is the one who should lose Allah’s love: Adam.',
        incorrect: 'Look at the word right after “wanted”. That person should “lose Allah’s love”. Check the first paragraph of Chapter 4.',
      },
    },
    {
      id: 'adam-a2-language-4-telling-warning',
      type: 'choose-form',
      title: 'Want, Tell … To, Not To',
      instructions: 'Choose the correct form for each sentence from Chapter 4.',
      question: 'What comes after “want/tell + person”?',
      formChoices: [
        {
          sentence: 'He didn’t want Allah [choice] nice to Adam.',
          options: ['be', 'to be', 'being'],
          answer: 1,
        },
        {
          sentence: 'Allah told Adam [choice] careful about Iblis.',
          options: ['to be', 'that be', 'be'],
          answer: 0,
        },
        {
          sentence: 'He told Adam and Eve [choice] go near one tree.',
          options: ['to not', 'don’t', 'not to'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: 'After “want + person” and “tell + person”, we use “to + verb”: wanted Adam to lose, told Adam to be careful. For a “do not” message, we put “not” before “to”: told them not to go.',
      feedback: {
        correct: 'Well done. You used “to + verb” and “not to + verb” correctly.',
        incorrect: 'Remember: tell + person + to + verb, and tell + person + not to + verb. Check Chapter 4 again.',
      },
    },
    {
      id: 'adam-a2-language-4-beginnings-comparison',
      type: 'sentence-building',
      title: 'Something New Begins',
      instructions: 'Put the parts in order to make the sentence from Chapter 4.',
      question: 'How does the chapter show that a new feeling began?',
      sentenceChunks: ['Then,', 'Adam', 'started', 'to feel', 'lonely', 'in Paradise.'],
      correctAnswer: null,
      explanation: '“Started to + verb” shows that something new begins: Adam started to feel lonely. Later, the chapter uses it again: “They started to live together in Paradise.”',
      feedback: {
        correct: 'Correct. “Started to feel” shows a new feeling.',
        incorrect: 'Begin with “Then,” and the person. Then use “started to + verb”. Check the second paragraph of Chapter 4.',
      },
    },
    {
      id: 'adam-a2-language-4-give-a-warning',
      type: 'reflection',
      title: 'Say It: Give a Clear Warning',
      instructions: 'Write or say three or four short A2 sentences using Chapter 4 language. Describe a situation, a change and a warning.',
      question: 'Can you use the chapter’s language to explain what someone wants and then give clear advice or a warning?',
      correctAnswer: null,
      explanation: 'A strong A2 response uses one “want + person + to” idea, one “started to” sentence, and a positive or negative instruction with “tell + person + (not) to”.',
      feedback: { correct: 'Use the sentence starters to connect desire, change and warning clearly.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Desire: “He wanted ... to ...” or “He didn’t want ... to ...”', mode: 'Individual' },
        { question: 'Sentence 2 — New situation: “... started to ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Advice: “... told ... to ...”', mode: 'Pair' },
        { question: 'Sentence 4 — Warning: “... told ... not to ...”', mode: 'Pair' },
      ],
    },
  ],
};
