import type { Exercise } from '../../../../types';

export const adamB1LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  3: [
    {
      id: 'adam-b1-language-3-reporting-beliefs',
      type: 'drag-drop',
      title: 'Whose View Is It?',
      instructions: 'Read each part of Chapter 3. Is it a character’s view, or is it the narrator telling us what happened or what was true? Put it in the right group.',
      question: 'How does the narrator keep the characters’ opinions separate from the narrator’s own statements?',
      dragDropGroups: [
        {
          group: 'A character’s view (thought / believed / said)',
          items: [
            'All the angels thought that Adam (pbuh) was amazing.',
            'he believed his origin was superior',
            'Iblis said, “I am better than Adam (pbuh).”',
          ],
        },
        {
          group: 'The narrator’s own statement',
          items: [
            'They all admired him and showed respect to him',
            'Iblis was arrogant.',
            'Iblis did not think carefully and was wrong about Adam (pbuh).',
          ],
        },
      ],
      correctAnswer: {
        'A character’s view (thought / believed / said)': [
          'All the angels thought that Adam (pbuh) was amazing.',
          'he believed his origin was superior',
          'Iblis said, “I am better than Adam (pbuh).”',
        ],
        'The narrator’s own statement': [
          'They all admired him and showed respect to him',
          'Iblis was arrogant.',
          'Iblis did not think carefully and was wrong about Adam (pbuh).',
        ],
      },
      explanation: 'Verbs such as “thought that”, “believed” and “said” tell us that an idea belongs to a character. The narrator does not have to agree with it: Iblis believed his origin was superior, but the narrator tells us plainly that “Iblis was arrogant” and “was wrong about Adam”.',
      feedback: {
        correct: 'Correct. You separated the characters’ views from the narrator’s own statements.',
        incorrect: 'Look for a reporting verb (thought, believed, said). If there is one, the idea belongs to a character. If the sentence simply tells us what happened or what was true, it is the narrator.',
      },
    },
    {
      id: 'adam-b1-language-3-contrast-and-comparison',
      type: 'choose-form',
      title: 'Comparing and Contrasting',
      instructions: 'Choose the correct form to complete each sentence from Chapter 3.',
      question: 'Which forms compare value and introduce a contrasting view?',
      formChoices: [
        {
          sentence: 'He thought he was [choice] and more valuable than Adam (pbuh) …',
          options: ['importanter', 'more important', 'the most important'],
          answer: 1,
        },
        {
          sentence: 'According to Satan, fire was superior [choice] clay.',
          options: ['than', 'from', 'to'],
          answer: 2,
        },
        {
          sentence: '[choice], in the sight of Allah, superiority or greatness did not come from race, color, or being a member of a certain group.',
          options: ['However', 'Because', 'So'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'Long adjectives such as “important” and “valuable” make the comparative with “more … than”, not with -er. “Superior” already has a comparing meaning, so it takes “to”, not “than”. “However” introduces a view that contrasts with the one before: Satan’s view against the view “in the sight of Allah”.',
      feedback: {
        correct: 'Correct. You chose the right comparative forms and the contrast marker.',
        incorrect: 'Check the second paragraph of Chapter 3. Notice “superior to” and ask whether the last sentence agrees with Satan’s view or contrasts with it.',
      },
    },
    {
      id: 'adam-b1-language-3-reason-and-result',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong words, then choose the correction.',
      question: 'Can you correct a reported belief, a contrast and a clause that adds a result?',
      errorItems: [
        {
          sentence: 'Iblis thought that Adam is an unimportant being created from clay.',
          error: 'Adam is',
          options: ['Adam was', 'Adam be', 'Adam were'],
          answer: 0,
        },
        {
          sentence: 'They all admired him and showed respect to him, and Iblis didn’t think so.',
          error: 'and Iblis',
          options: ['so Iblis', 'but Iblis', 'because Iblis'],
          answer: 1,
        },
        {
          sentence: 'He couldn’t see and accept that Adam (pbuh) had perfect knowledge for the good of every creature of Allah, what made him more valuable.',
          error: 'what made',
          options: ['that made', 'who made', 'which made'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: 'After “thought that” in a past story, the reported belief stays in the past: “Iblis thought that Adam was …”. The narrator does not share this belief, so the present “is” is wrong. “But” shows that Iblis’s reaction was the opposite of everyone else’s. After a comma, “which” adds a comment about the whole idea before it (Adam’s perfect knowledge made him more valuable); “that” cannot follow a comma in this way, and “who” is for people.',
      feedback: {
        correct: 'Well done. You fixed the reported belief, the contrast and the added result.',
        incorrect: 'Compare each sentence with Chapter 3: Iblis’s belief in the first paragraph, the angels’ reaction, and the sentence that begins “He couldn’t see and accept …”.',
      },
    },
    {
      id: 'adam-b1-language-3-build-a-balanced-judgment', type: 'reflection', title: 'Build a Balanced Judgment', instructions: 'Write or say four connected B1 sentences about a new situation involving two different opinions. Use at least three Chapter 3 language patterns.', question: 'Can you report two viewpoints, give a reason, compare them, and then signal your contrasting conclusion without retelling Chapter 3?', correctAnswer: null,
      explanation: 'A strong response can use “thought that” or “believed”, add a reason with “because”, make a comparison with “better/more ... than”, and introduce a contrasting conclusion with “but” or “however”.', feedback: { correct: 'Keep each sentence connected to the same situation and make the contrast clear.', incorrect: '' },
      discussionPrompts: [{ question: 'Sentence 1 — Report one person’s view with “thought that” or “believed ...”.', mode: 'Individual' }, { question: 'Sentence 2 — Give the reason using “because ...”.', mode: 'Individual' }, { question: 'Sentence 3 — Add a comparison with “better than” or “more ... than”.', mode: 'Individual' }, { question: 'Sentence 4 — Introduce a different conclusion with “but” or “however”.', mode: 'Pair' }],
    },
  ],
};

export const adamB1LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  4: [
    {
      id: 'adam-b1-language-4-continuing-and-reaction',
      type: 'multiple-choice',
      title: 'Which Happened First?',
      instructions: 'Read the first paragraph of Chapter 4 again. Then choose the best answer.',
      question: 'Allah said to Iblis, “Go away! …” Later in the paragraph we read: “He thought that … Allah had put him far from His help.” Why does the writer use “had put” and not “put”?',
      options: [
        'Iblis was sent away at the same moment as he was thinking this.',
        'Allah had already sent Iblis away before Iblis had this thought.',
        'It shows something that was going to happen later.',
        'It shows something that Iblis did again and again.',
      ],
      correctAnswer: 1,
      explanation: 'The past perfect (had + past participle) shows that one past event happened before another past event. First Allah sent Iblis away (“Go away!”); after that, Iblis thought about it and blamed Adam. “Had put” makes this order clear.',
      feedback: {
        correct: 'Correct. “Had put” shows the earlier of two past events.',
        incorrect: 'Find “Go away!” in the first paragraph. Did that happen before or after Iblis’s thought about Adam?',
      },
    },
    {
      id: 'adam-b1-language-4-reason-and-desire',
      type: 'choose-form',
      title: 'Verb Patterns and Reasons',
      instructions: 'Choose the correct form to complete each sentence from Chapter 4.',
      question: 'Which forms follow “continue” and “want”, and which reason word comes before a noun?',
      formChoices: [
        {
          sentence: 'But Iblis continued [choice] he was right and the Creator was wrong.',
          options: ['say', 'saying', 'said'],
          answer: 1,
        },
        {
          sentence: 'He didn’t want Allah [choice] kind to Adam (pbuh).',
          options: ['to be', 'be', 'that He is'],
          answer: 0,
        },
        {
          sentence: 'He thought that [choice] Adam (pbuh), Allah had put him far from His help.',
          options: ['because', 'so', 'because of'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“Continue + -ing” (or continue + to + verb) shows that an action or claim goes on: Iblis did not stop saying he was right. “Want + person + to + verb” says what someone wants another person to do; English does not use “want that …”. “Because of” is followed by a noun (because of Adam); “because” is followed by a full clause with a subject and a verb.',
      feedback: {
        correct: 'Correct. You chose continue + -ing, want + person + to, and because of + noun.',
        incorrect: 'Check the first paragraph of Chapter 4. Remember: after “because of” comes a noun, and after “want Allah” comes “to + verb”.',
      },
    },
    {
      id: 'adam-b1-language-4-purpose-warning',
      type: 'sentence-building',
      title: 'Build Iblis’s Plan',
      instructions: 'Put the chunks in order to rebuild the sentence from Chapter 4.',
      question: 'How do “a chance to …” and “keep someone away from …” work together in one sentence?',
      sentenceChunks: ['He waited', 'for a chance', 'to keep', 'Adam (pbuh)', 'away from', 'Allah’s kindness,', 'just as he himself was.'],
      correctAnswer: null,
      explanation: '“Wait for a chance to + verb” says what someone is waiting to be able to do. “Keep + person + away from + something” means stop that person from being close to it; the person comes between “keep” and “away from”. “Just as he himself was” compares Adam’s possible future with Iblis’s own situation.',
      feedback: {
        correct: 'Well done. You placed the person between “keep” and “away from”.',
        incorrect: 'Start with the person and the verb. Then: what was he waiting for? Put the person after “keep”, and finish with the comparison. Check the second paragraph of Chapter 4.',
      },
    },
    { id: 'adam-b1-language-4-build-warning-situation', type: 'reflection', title: 'Build a Warning Situation', instructions: 'Write or say four connected B1 sentences about a new situation in which someone continues a harmful plan and another person gives a warning. Use at least three Chapter 4 patterns.', question: 'Can you connect continuation, reason, purpose, and warning in a short new situation without retelling Chapter 4?', correctAnswer: null, explanation: 'A strong response may use “continued + -ing”, “because of + noun”, “waited for a chance to ...”, “keep + object + away from ...”, and “warned + person + to be careful of ...”.', feedback: { correct: 'Keep the four sentences connected and make the reason and warning clear.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Show an action that continues with “continued + -ing”.', mode: 'Individual' }, { question: 'Sentence 2 — Give a reason with “because of + noun”.', mode: 'Individual' }, { question: 'Sentence 3 — Express purpose with “waited for a chance to ...” or a similar pattern.', mode: 'Individual' }, { question: 'Sentence 4 — Report a warning with “warned + person + to be careful of ...”.', mode: 'Pair' }] },
  ],
};

export const adamB1LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  5: [
    {
      id: 'adam-b1-language-5-beginning-state-role',
      type: 'matching',
      title: 'What Do These Phrases Mean?',
      instructions: 'Match each phrase from Chapter 5 with its meaning.',
      question: 'What do these phrases tell us about life in Paradise and about Iblis?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'a wife called Eve (Hawwa)', right: 'a partner who had this name' },
        { left: 'to be his companion', right: 'so that he had someone to share his life with' },
        { left: 'more wonderful than we can imagine', right: 'better than anything people can picture' },
        { left: 'pretending to be their friend', right: 'acting as if he cared about them, but not really' },
        { left: 'whispered', right: 'said very quietly and secretly' },
      ],
      correctAnswer: {
        'a wife called Eve (Hawwa)': 'a partner who had this name',
        'to be his companion': 'so that he had someone to share his life with',
        'more wonderful than we can imagine': 'better than anything people can picture',
        'pretending to be their friend': 'acting as if he cared about them, but not really',
        'whispered': 'said very quietly and secretly',
      },
      explanation: '“Called + name” gives a person’s name. “To be + role” gives the purpose of a gift or action. “More … than we can imagine” compares Paradise with the limit of human imagination. “Pretend to be” means to act as if something is true when it is not; the chapter adds, “It was a big lie.”',
      feedback: {
        correct: 'Correct. You understood how each phrase adds meaning to the chapter.',
        incorrect: 'Read Chapter 5 again and look at the words around each phrase, for example “It was a big lie” after “pretending to be their friend”.',
      },
    },
    {
      id: 'adam-b1-language-5-comparison-and-restriction',
      type: 'choose-form',
      title: 'Beginnings and a Restriction',
      instructions: 'Choose the correct form to complete each sentence from Chapter 5.',
      question: 'Which forms follow “start”, “begin” and “ask … not …”?',
      formChoices: [
        {
          sentence: 'Adam was in Paradise, but he started [choice] lonely.',
          options: ['feel', 'to feel', 'felt'],
          answer: 1,
        },
        {
          sentence: 'They began [choice] in Paradise.',
          options: ['living', 'live', 'lived'],
          answer: 0,
        },
        {
          sentence: 'Allah only asked them [choice] near one tree.',
          options: ['not go', 'don’t go', 'not to go'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“Start” and “begin” are followed by “to + verb” or “-ing” (started to feel, began living). Only the first verb shows the past; the second verb does not change. To report a negative request, use ask + person + not to + verb: “asked them not to go”.',
      feedback: {
        correct: 'Correct. You chose the right verb patterns for a beginning and a reported restriction.',
        incorrect: 'Check Chapter 5: after “started” and “began”, the verb does not take the past form. For a request not to do something, “not” comes before “to”.',
      },
    },
    {
      id: 'adam-b1-language-5-time-manner-condition',
      type: 'transformation',
      title: 'From Reported Words to Direct Words',
      instructions: 'The chapter reports what Iblis whispered. Complete Iblis’s words as he might have said them directly.',
      question: 'How does a reported “if … would …” sentence change when we give the speaker’s direct words?',
      transformItems: [
        {
          source: 'He whispered to them that if they ate from that one tree, they would never die.',
          frame: 'He whispered to them, “If you eat from that one tree, you [blank] die.”',
          answers: ['will never', 'will not ever', 'won’t ever', 'shall never'],
        },
      ],
      correctAnswer: null,
      explanation: 'In direct words about the future, Iblis would use “If + present, … will + verb”: “If you eat …, you will never die.” When the narrator reports it in a past story, the verbs move back: eat → ate, will → would. The chapter makes clear that this claim was false: “It was a big lie.”',
      feedback: {
        correct: 'Well done. You changed the reported claim back into direct words.',
        incorrect: 'In direct speech the verbs move forward again: “ate” becomes “eat”, and “would” becomes “will”. Keep the word “never”.',
      },
    },
    { id: 'adam-b1-language-5-build-advice-situation', type: 'reflection', title: 'Build a New Advice Situation', instructions: 'Write or say four connected B1 sentences about a new situation with a beginning, one clear restriction, and a conditional result. Use at least three Chapter 5 patterns.', question: 'Can you reuse the chapter’s language relationships in a new situation without retelling Chapter 5?', correctAnswer: null, explanation: 'A strong response may use “started to ...”, “began + -ing”, “more ... than ...”, “asked + person + not to ...”, “when ...”, and an “if ... would ...” relationship.', feedback: { correct: 'Keep the sentences connected and make the restriction and result easy to follow.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Show the beginning of a feeling or activity with “started to ...” or “began + -ing”.', mode: 'Individual' }, { question: 'Sentence 2 — Add a comparison with “more ... than ...” if it fits your situation.', mode: 'Individual' }, { question: 'Sentence 3 — Report one negative instruction with “asked + person + not to ...”.', mode: 'Individual' }, { question: 'Sentence 4 — Add a condition and result with “if ... would ...” or another natural conditional pattern.', mode: 'Pair' }] },
  ],
};

export const adamB1LanguageFocusExercisesPart5: Record<number, Exercise[]> = {
  6: [
    {
      id: 'adam-b1-language-6-success-causation-earlier-past',
      type: 'multiple-choice',
      title: 'What Does “Managed to” Tell Us?',
      instructions: 'Read the first sentence of Chapter 6. Then choose the best meaning.',
      question: '“Eventually, Iblis managed to trick them.” What do “eventually” and “managed to” tell us together?',
      options: [
        'Iblis tricked them easily, the first time he tried.',
        'Iblis tried to trick them, but he did not succeed.',
        'Iblis had tried for some time, and in the end he succeeded.',
        'Iblis was ordered to trick them.',
      ],
      correctAnswer: 2,
      explanation: '“Manage to + verb” means to succeed in doing something difficult. “Eventually” means “in the end, after some time”. Together they show that Iblis’s success came only after effort. In the same paragraph, the past perfect “the warning Allah had given them” shows that the warning came before they forgot it.',
      feedback: {
        correct: 'Correct. “Managed to” shows success after difficulty, and “eventually” shows it came in the end.',
        incorrect: 'Look at the first word of Chapter 6, “Eventually”. Does it mean “at once” or “in the end”? Then ask what “managed to” adds.',
      },
    },
    {
      id: 'adam-b1-language-6-sequence-change-discovery',
      type: 'sequencing',
      title: 'Put the Events in Order',
      instructions: 'Put the parts of Chapter 6 in the order in which they happened.',
      question: 'How do the verbs and time clauses show the order of events?',
      sequencingItems: [
        { id: 'a', text: 'He convinced them to believe his lies, …' },
        { id: 'b', text: 'Adam stretched out his hand, picked one of the fruits and offered it to Eve.' },
        { id: 'c', text: 'They both ate of the forbidden tree.' },
        { id: 'd', text: 'When Adam finished eating, he felt that his heart was filled with pain, sadness and shame.' },
        { id: 'e', text: 'They hurried to hide their private parts …' },
      ],
      correctAnswer: ['a', 'b', 'c', 'd', 'e'],
      explanation: 'The chapter tells the events in time order. A list of past simple verbs (stretched out, picked, offered) gives actions one after another. The time clause “When Adam finished eating” marks the point after which the feeling came, and the final actions show the reaction to what they discovered.',
      feedback: {
        correct: 'Correct. You followed the actions, the time clause and the reaction in order.',
        incorrect: 'Read Chapter 6 again. What had to happen before Adam picked the fruit? What does “When Adam finished eating” tell you about the order?',
      },
    },
    {
      id: 'adam-b1-language-6-result-purpose-cause',
      type: 'word-bank',
      title: 'Result, Purpose and Reason',
      instructions: 'Complete the lines from Chapter 6 with words from the bank. Three words are not needed.',
      question: 'Which words show a result, a purpose and a reason?',
      fillBlanksText: 'Adam (pbuh) discovered that he and his wife were uncovered, [blank] they both started cutting tree leaves in Paradise [blank] cover themselves. They hurried to hide their private parts [blank] a sense of shame (hayâ) is part of inborn human nature …',
      wordBank: ['so', 'to', 'because', 'because of', 'for', 'although'],
      correctAnswer: ['so', 'to', 'because'],
      explanation: '“So” introduces a result: they discovered they were uncovered, so they started cutting leaves. “To + verb” gives the purpose of the action (to cover themselves), not “for cover”. “Because” introduces a reason with a full clause; “because of” needs a noun.',
      feedback: {
        correct: 'Correct. You linked the result, the purpose and the reason.',
        incorrect: 'Read the last paragraph of Chapter 6. Ask: what happened as a result? Why did they cut leaves? Why did they hurry?',
      },
    },
    { id: 'adam-b1-language-6-build-consequence-chain', type: 'reflection', title: 'Build a Consequence Chain', instructions: 'Write or say four connected B1 sentences about a new situation in which an earlier warning is forgotten, an action creates a change, and someone reacts for a clear purpose. Use at least three Chapter 6 patterns.', question: 'Can you use the chapter’s language to build a new action → change → reaction sequence without retelling Chapter 6?', correctAnswer: null, explanation: 'A strong response may use “managed to ...”, “convinced + person + to ...”, “had + past participle”, “when ...”, “became ...”, “so ...”, “to + verb” for purpose, and “because ...”.', feedback: { correct: 'Keep the sequence easy to follow and make the purpose and cause explicit.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Mention an earlier warning or instruction using a past-perfect form such as “had given” or “had told”.', mode: 'Individual' }, { question: 'Sentence 2 — Show a successful action or influence with “managed to ...” or “convinced + person + to ...”.', mode: 'Individual' }, { question: 'Sentence 3 — Describe a change and its result using “became ...” and/or “so ...”.', mode: 'Individual' }, { question: 'Sentence 4 — Explain the reaction with a purpose phrase “to ...” and a reason with “because ...”.', mode: 'Pair' }] },
  ],
};

export const adamB1LanguageFocusExercisesPart6: Record<number, Exercise[]> = {
  7: [
    {
      id: 'adam-b1-language-7-intention-response-decision',
      type: 'matching',
      title: 'Words for Responsibility',
      instructions: 'Match each phrase from Chapter 7 with its meaning.',
      question: 'What do these phrases tell us about the two different responses to a wrong action?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'it wasn’t on purpose', right: 'they did not do it deliberately' },
        { left: 'learned from their mistake', right: 'understood a lesson because of what went wrong' },
        { left: 'pardon', right: 'forgive' },
        { left: 'chose an opposite path', right: 'took a completely different direction' },
        { left: 'the biggest barrier', right: 'the thing that stops people most' },
      ],
      correctAnswer: {
        'it wasn’t on purpose': 'they did not do it deliberately',
        'learned from their mistake': 'understood a lesson because of what went wrong',
        'pardon': 'forgive',
        'chose an opposite path': 'took a completely different direction',
        'the biggest barrier': 'the thing that stops people most',
      },
      explanation: '“On purpose” means deliberately, so “it wasn’t on purpose” separates the mistake from a planned wrong. “Learn from + mistake” means to take a lesson from it. “Pardon” is a formal word for “forgive”. “An opposite path” and “the biggest barrier” help the chapter contrast Adam and Eve’s response with Iblis’s arrogance.',
      feedback: {
        correct: 'Correct. These phrases show how the chapter talks about responsibility.',
        incorrect: 'Read the second and third paragraphs of Chapter 7 again and use the words around each phrase to find its meaning.',
      },
    },
    {
      id: 'adam-b1-language-7-speech-request-cause-contrast',
      type: 'word-bank',
      title: 'Linking Two Responses',
      instructions: 'Complete the lines from Chapter 7 with words from the bank. Three words are not needed.',
      question: 'Which linking words show contrast inside a sentence, contrast between two paths, and a reason?',
      fillBlanksText: 'They made a mistake, [blank] it wasn’t on purpose. … [blank], Iblis chose an opposite path. He never admitted he was wrong [blank] he was arrogant.',
      wordBank: ['but', 'On the other hand', 'because', 'so', 'In addition', 'because of'],
      correctAnswer: ['but', 'On the other hand', 'because'],
      explanation: '“But” limits the first idea inside one sentence: there was a mistake, but it was not intentional. “On the other hand” starts a new part of the text and moves to a contrasting person or path. “Because” gives the reason with a full clause (he was arrogant); “because of” would need a noun.',
      feedback: {
        correct: 'Correct. You chose the right links for contrast and reason.',
        incorrect: 'Ask for each gap: does it limit the first idea, move to a different person’s path, or give a reason? Then check Chapter 7.',
      },
    },
    {
      id: 'adam-b1-language-7-purpose-responsibility-future',
      type: 'choose-form',
      title: 'Decision, Wish and Purpose',
      instructions: 'Choose the correct form to complete each sentence from Chapter 7.',
      question: 'Which verb forms follow “decide never”, “want someone” and a purpose?',
      formChoices: [
        {
          sentence: 'They said sorry to Allah, learned from their mistake and decided never [choice] it.',
          options: ['repeating', 'to repeat', 'repeat'],
          answer: 1,
        },
        {
          sentence: 'They wanted Allah [choice] them.',
          options: ['to pardon', 'pardon', 'that He pardons'],
          answer: 0,
        },
        {
          sentence: 'Allah pardoned both Adam (pbuh) and Eve and put them on earth [choice] there.',
          options: ['for living', 'for live', 'to live'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“Decide (never) to + verb” expresses a decision about the future. “Want + person + to + verb” says what someone wants another person to do. “To + verb” after an action gives its purpose: they were put on earth to live there, not “for live”.',
      feedback: {
        correct: 'Correct. Each of these patterns uses “to + base verb”.',
        incorrect: 'Look at the second and fourth paragraphs of Chapter 7. After “decided never”, “wanted Allah” and “on earth”, which form do you find?',
      },
    },
    { id: 'adam-b1-language-7-build-repair-plan', type: 'reflection', title: 'Build a Repair-and-Responsibility Plan', instructions: 'Write or say four connected B1 sentences about a new situation where someone makes an unintentional mistake, responds responsibly, and then takes on a useful next step. Use at least four Chapter 7 patterns.', question: 'Can you use the chapter’s language to explain intention, response, reason, decision, and future responsibility in a new context?', correctAnswer: null, explanation: 'A strong response may include “not on purpose”, “was/were sad about ...”, “learned from ...”, “decided never to ...”, “wanted + person + to ...”, “because ...”, “on the other hand ...”, “to + verb” for purpose, or “would ...” for an expected later action.', feedback: { correct: 'Keep the four sentences connected so the intention, response, reason, and next responsibility are easy to follow.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Explain that a mistake happened but was not on purpose.', mode: 'Individual' }, { question: 'Sentence 2 — Describe the person’s response and what they learned from the mistake.', mode: 'Individual' }, { question: 'Sentence 3 — Give a reason and a decision using “because ...” and “decided never to ...”.', mode: 'Individual' }, { question: 'Sentence 4 — State a useful next purpose or expected responsibility using “to + verb” and/or “would ...”.', mode: 'Pair' }] },
  ],
};
