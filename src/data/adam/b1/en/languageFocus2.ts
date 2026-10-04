import type { Exercise } from '../../../../types';

export const adamB1LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  3: [
    {
      id: 'adam-b1-language-3-reporting-beliefs',
      type: 'drag-drop',
      title: 'Whose View Is It?',
      instructions: 'Is it a character’s view or the narrator’s words? Put each part in the right group.',
      question: 'Who says it: a character, or the narrator?',
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
      question: 'Which words compare, and which word starts a different view?',
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
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sentences about Iblis and Adam?',
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
      id: 'adam-b1-language-3-build-a-balanced-judgment', type: 'reflection', title: 'Build a Balanced Judgment', instructions: 'Write or say four sentences about two people with different opinions.', question: 'What does each person think, and what do you decide?', correctAnswer: null,
      explanation: 'A strong response can use “thought that” or “believed”, add a reason with “because”, make a comparison with “better/more ... than”, and introduce a contrasting conclusion with “but” or “however”.', feedback: { correct: 'Keep each sentence connected to the same situation and make the contrast clear.', incorrect: '' },
      discussionPrompts: [{ question: 'Sentence 1 — Give one person’s view: “… thought that …”', mode: 'Individual' }, { question: 'Sentence 2 — Give the reason: “because …”', mode: 'Individual' }, { question: 'Sentence 3 — Give another view and compare: “… is better than …”', mode: 'Individual' }, { question: 'Sentence 4 — Say what you decide: “However, …” or “But …”', mode: 'Pair' }],
    },
  ],
};

export const adamB1LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  4: [
    {
      id: 'adam-b1-language-4-continuing-and-reaction',
      type: 'multiple-choice',
      title: 'Which Happened First?',
      instructions: 'Read the first paragraph of Chapter 4. Then choose the best answer.',
      question: 'Allah said to Iblis, “Go away! …” Later in the paragraph we read: “He thought that … Allah had put him far from His help.” Why “had put” and not “put”?',
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
      question: 'Which words fit after “continued” and “want”, and which gives a reason?',
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
      instructions: 'Tap the pieces to make the sentence from Chapter 4.',
      question: 'What was Iblis waiting for?',
      sentenceChunks: ['He waited', 'for a chance', 'to keep', 'Adam (pbuh)', 'away from', 'Allah’s kindness,', 'just as he himself was.'],
      correctAnswer: null,
      explanation: '“Wait for a chance to + verb” says what someone is waiting to be able to do. “Keep + person + away from + something” means stop that person from being close to it; the person comes between “keep” and “away from”. “Just as he himself was” compares Adam’s possible future with Iblis’s own situation.',
      feedback: {
        correct: 'Well done. You placed the person between “keep” and “away from”.',
        incorrect: 'Start with the person and the verb. Then: what was he waiting for? Put the person after “keep”, and finish with the comparison. Check the second paragraph of Chapter 4.',
      },
    },
    { id: 'adam-b1-language-4-build-warning-situation', type: 'reflection', title: 'Build a Warning Situation', instructions: 'Write or say four sentences about a bad habit and a warning.', question: 'What does the person keep doing, and who warns them?', correctAnswer: null, explanation: 'A strong response may use “continued + -ing”, “because of + noun”, “waited for a chance to ...”, “keep + object + away from ...”, and “warned + person + to be careful of ...”.', feedback: { correct: 'Keep the four sentences connected and make the reason and warning clear.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Say what someone kept doing: “… continued + -ing …”', mode: 'Individual' }, { question: 'Sentence 2 — Give a reason: “Because of + thing, …”', mode: 'Individual' }, { question: 'Sentence 3 — Say what they waited for: “… waited for a chance to …”', mode: 'Individual' }, { question: 'Sentence 4 — Give the warning: “… warned him to be careful of …”', mode: 'Pair' }] },
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
      question: 'Which words come after “started”, “began” and “asked them”?',
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
      instructions: 'Write Iblis’s own words. Keep the same meaning.',
      question: 'What did Iblis say to them?',
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
    { id: 'adam-b1-language-5-build-advice-situation', type: 'reflection', title: 'Build a New Advice Situation', instructions: 'Write or say four sentences about someone who starts something new.', question: 'What starts, what is not allowed, and what could happen?', correctAnswer: null, explanation: 'A strong response may use “started to ...”, “began + -ing”, “more ... than ...”, “asked + person + not to ...”, “when ...”, and an “if ... would ...” relationship.', feedback: { correct: 'Keep the sentences connected and make the restriction and result easy to follow.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Say what started: “… started to …” or “… began + -ing”', mode: 'Individual' }, { question: 'Sentence 2 — Compare: “… was more … than …”', mode: 'Individual' }, { question: 'Sentence 3 — Say what someone asked: “… asked her not to …”', mode: 'Individual' }, { question: 'Sentence 4 — Say what would happen: “If …, … would …”', mode: 'Pair' }] },
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
      instructions: 'Put the parts of Chapter 6 in the right order.',
      question: 'What happened after Iblis tricked them?',
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
      fillBlanksText: 'Adam (pbuh) discovered that he and his wife were uncovered, [blank] they both started cutting tree leaves in Paradise [blank] cover themselves. They hurried to hide their private parts [blank] a sense of shame (haya) is part of inborn human nature …',
      wordBank: ['so', 'to', 'because', 'because of', 'for', 'although'],
      correctAnswer: ['so', 'to', 'because'],
      explanation: '“So” introduces a result: they discovered they were uncovered, so they started cutting leaves. “To + verb” gives the purpose of the action (to cover themselves), not “for cover”. “Because” introduces a reason with a full clause; “because of” needs a noun.',
      feedback: {
        correct: 'Correct. You linked the result, the purpose and the reason.',
        incorrect: 'Read the last paragraph of Chapter 6. Ask: what happened as a result? Why did they cut leaves? Why did they hurry?',
      },
    },
    { id: 'adam-b1-language-6-build-consequence-chain', type: 'reflection', title: 'Build a Consequence Chain', instructions: 'Write or say four sentences about someone who forgets good advice.', question: 'What advice was forgotten, and what happened?', correctAnswer: null, explanation: 'A strong response may use “managed to ...”, “convinced + person + to ...”, “had + past participle”, “when ...”, “became ...”, “so ...”, “to + verb” for purpose, and “because ...”.', feedback: { correct: 'Keep the sequence easy to follow and make the purpose and cause explicit.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Give the earlier advice: “… had told them to …”', mode: 'Individual' }, { question: 'Sentence 2 — Say who got him to do it: “… convinced him to …”', mode: 'Individual' }, { question: 'Sentence 3 — Show a change: “Soon he became …, so …”', mode: 'Individual' }, { question: 'Sentence 4 — Say what he did and why: “He … to … because …”', mode: 'Pair' }] },
  ],
};

export const adamB1LanguageFocusExercisesPart6: Record<number, Exercise[]> = {
  7: [
    {
      id: 'adam-b1-language-7-intention-response-decision',
      type: 'matching',
      title: 'Words for Responsibility',
      instructions: 'Match each phrase from Chapter 7 with its meaning.',
      question: 'What do these phrases tell us about Adam, Eve and Iblis?',
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
      question: 'Which words show a difference, and which gives a reason?',
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
      question: 'Which words fit after “decided never” and “wanted Allah”, and which says what for?',
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
    { id: 'adam-b1-language-7-build-repair-plan', type: 'reflection', title: 'Build a Repair-and-Responsibility Plan', instructions: 'Write or say four sentences about someone who puts a mistake right.', question: 'What went wrong, and how did the person fix it?', correctAnswer: null, explanation: 'A strong response may include “not on purpose”, “was/were sad about ...”, “learned from ...”, “decided never to ...”, “wanted + person + to ...”, “because ...”, “on the other hand ...”, “to + verb” for purpose, or “would ...” for an expected later action.', feedback: { correct: 'Keep the four sentences connected so the intention, response, reason, and next responsibility are easy to follow.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Say what went wrong: “…, but it wasn’t on purpose.”', mode: 'Individual' }, { question: 'Sentence 2 — Say what the person did and learned: “She said sorry and learned to …”', mode: 'Individual' }, { question: 'Sentence 3 — Give a reason and a decision: “Because …, she decided never to …”', mode: 'Individual' }, { question: 'Sentence 4 — Say the next step: “She … to …” or “She would …”', mode: 'Pair' }] },
  ],
};
