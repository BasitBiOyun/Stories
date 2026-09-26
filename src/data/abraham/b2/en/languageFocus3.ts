import type { Exercise } from '../../../../types';

/*
 * Abraham B2 (English) Language Focus. Each chapter follows Notice → Build → Use:
 * learners first discover what a form does in real chapter sentences, then practise
 * it in context, then use it in the chapter's reflection task. Every quoted sentence
 * comes from the English chapter text; Qur'anic verses are only read, sorted,
 * matched to meanings or asked about, never altered.
 */

/** Chapter 19 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter19: Record<number, Exercise[]> = {
  19: [
    {
      id: 'abraham-b2-language-19-voice-condition',
      type: 'true-false',
      title: 'A Lasting Change?',
      instructions: 'Read the lines from Surah Enbiyâ quoted in Chapter 19. Is the statement true or false?',
      question: 'The words “You yourselves are the wrongdoers.” show that the people changed their minds for good.',
      correctAnswer: false,
      explanation: 'The people’s words to one another show a moment of self-correction. The very next sentence reverses it: “But they reverted to their old ideas”. “But” and the verb “reverted” (went back) mark the return to their earlier position, which is why Abraham answers with more questions.',
      feedback: {
        correct: 'Correct. The self-correction was only a moment; they soon reverted.',
        incorrect: 'Read the sentence after “You yourselves are the wrongdoers.” Which linking word and which verb show what happened next?',
      },
    },
    {
      id: 'abraham-b2-language-19-reversal-purpose',
      type: 'error-correction',
      title: 'Reporting the Trial',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct a reported question, a reported instruction and a formal demand?',
      errorItems: [
        {
          options: ['he was', 'he is', 'was him'],
          sentence: 'At the trial, they asked him if was he responsible for breaking the idols.',
          error: 'was he',
          answer: 0,
        },
        {
          options: ['to ask', 'asking', 'asked'],
          sentence: 'Smiling, he told them ask the biggest idol which was still undamaged.',
          error: 'ask',
          answer: 0,
        },
        {
          options: ['arrested', 'arresting', 'to arrest'],
          sentence: 'They furiously demanded that Abraham (pbuh) be arrest and judged.',
          error: 'arrest',
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'A reported yes/no question uses if/whether + statement order: “asked him if he was …”. A reported instruction uses tell + person + to + verb: “told them to ask”. After “demand that”, formal English uses be + past participle for a passive: “that Abraham be arrested and judged”.',
      feedback: {
        correct: 'Well done. You corrected the question, the instruction and the demand.',
        incorrect: 'Check the word order after “if”, the form after “told them”, and the passive after “be”. Then read the end of Chapter 19.',
      },
    },
    {
      id: 'abraham-b2-language-19-discourse-sequence',
      type: 'transformation',
      title: 'Purpose Behind the Calm',
      instructions: 'Rewrite each sentence from Chapter 19 with the words given. Keep the meaning.',
      question: 'How can Abraham’s calm reaction and its purpose be expressed in another way?',
      transformItems: [
        {
          source: 'This was exactly what he was aiming for, so that he could demonstrate to them in public that their beliefs were foolish.',
          frame: 'This was exactly what he was aiming for: he wanted [blank] to them in public that their beliefs were foolish.',
          answers: ['to demonstrate', 'to show', 'to prove'],
        },
        {
          source: 'Abraham (pbuh) did not resist.',
          frame: 'Abraham (pbuh) [blank] no resistance.',
          answers: ['offered', 'showed', 'put up', 'made'],
        },
      ],
      correctAnswer: null,
      explanation: '“So that + could” gives the purpose of accepting the arrest; “he wanted to demonstrate …” states the same aim directly. The verb “resist” can become the noun “resistance” in a fixed phrase: offer/put up/show no resistance. The narrator shows that Abraham’s calm was part of a plan: a public trial gave him a public audience.',
      feedback: {
        correct: 'Well done. You kept the purpose and found a natural verb for “resistance”.',
        incorrect: 'Item 1: use want + to + verb. Item 2: which verb goes with “no resistance”? Check the last paragraph of Chapter 19.',
      },
    },
    {
      id: 'abraham-b2-language-19-production',
      type: 'reflection',
      title: 'Build a Public Contradiction Test',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation where a public claim is tested. Begin with a direct accusation or challenge, use a corrective contrast such as “but”, introduce a conditional test with “if”, show a brief moment of self-correction, then reverse that movement with a contrast marker. Include a purpose clause with “so that” and end with a rhetorical question that exposes the contradiction. Do not retell the Abraham story.',
      question: 'Can you use dialogue, condition, reversal and purpose to build a coherent B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should make the language do argumentative work: the condition tests the claim, the reversal shows a change in stance, the purpose clause explains the speaker’s strategy, and the final rhetorical question crystallizes the contradiction.',
      feedback: {
        correct: 'Check that every connector changes the relationship between ideas and that the final question is rhetorical, not a request for unknown information.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Challenge — What direct question opens the confrontation?', mode: 'Individual' },
        { question: 'Condition — What “if” test forces the claim to face its own logic?', mode: 'Pair' },
        {
          question: 'Reversal — Where does the audience briefly reconsider, and what contrast marker shows that they reverse course?',
          mode: 'Pair',
        },
        {
          question: 'Purpose — Why does the speaker continue the public exchange, and how will “so that” express that?',
          mode: 'Individual',
        },
      ],
    },
  ],
};

/** Chapter 20 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter20: Record<number, Exercise[]> = {
  20: [
    {
      id: 'abraham-b2-language-20-inference-contrast',
      type: 'multiple-choice',
      title: 'What Does “Must” Mean Here?',
      instructions: 'Read the sentence from the start of Chapter 20. Then choose the best explanation.',
      question: '“He told them that it must be the culprit!” What does “must” express?',
      options: [
        'A conclusion presented as the only logical one — said ironically, because Abraham knew the idol could not act.',
        'An obligation: the idol had to accept the blame.',
        'Uncertainty: Abraham was not sure who had broken the idols.',
        'A fact that the idol itself had admitted.',
      ],
      correctAnswer: 0,
      explanation: '“Must be” is used for a strong conclusion (deduction), not only for obligation. Abraham uses it ironically: if the idols were gods, the biggest idol must be the one who did it. The people’s answer — the idol “could not speak or move” — shows that their own logic has failed.',
      feedback: {
        correct: 'Correct. “Must” marks a strong, ironic deduction.',
        incorrect: 'Is Abraham giving an order, or drawing a conclusion? Read the people’s reply in the next sentence.',
      },
    },
    {
      id: 'abraham-b2-language-20-limitation-authority',
      type: 'word-bank',
      title: 'From Argument to Force',
      instructions: 'Complete the lines from Chapter 20 with words from the bank. Three options are not needed.',
      question: 'Which forms show a narrowed choice, a decision and the preparation of the fire?',
      fillBlanksText: 'All they [blank] do was use their authority as tyrants to punish Abraham (pbuh). … They decided [blank] Abraham (pbuh) into the biggest fire they could build. … They [blank] a deep pit, filled it with firewood, and set it on fire.',
      wordBank: ['could', 'to throw', 'dug', 'can', 'throwing', 'digged'],
      correctAnswer: ['could', 'to throw', 'dug'],
      explanation: '“All they could do was …” narrows their options to one: they had no argument left, only force. “Should” would give advice, not ability. “Decide” is followed by to + verb (“decided to throw”). “Dig” is irregular: dig – dug – dug.',
      feedback: {
        correct: 'Correct. You showed the narrowed choice, the decision and the preparation.',
        incorrect: 'Ask: is the first gap about ability or advice? Which form follows “decided”? What is the past of “dig”? Check Chapter 20.',
      },
    },
    {
      id: 'abraham-b2-language-20-preparation-purpose',
      type: 'transformation',
      title: 'Recognition, Refusal and Orders',
      instructions: 'Rewrite each sentence from Chapter 20 with the words given. Keep the meaning.',
      question: 'How can a contrast, an order and a collective decision be expressed in another way?',
      transformItems: [
        {
          source: 'In fact, they realized the stupidity of their beliefs; however, their arrogance would not allow them to admit their foolishness.',
          frame: '[blank] they realized the stupidity of their beliefs, their arrogance would not allow them to admit their foolishness.',
          answers: ['Although', 'Even though', 'Though', 'While'],
        },
        {
          source: 'All the citizens were ordered to gather wood as a service to their gods.',
          frame: 'They [blank] to gather wood as a service to their gods.',
          answers: ['ordered all the citizens', 'ordered all citizens', 'ordered the citizens'],
        },
        {
          source: 'They agreed that Abraham (pbuh) should be burned alive.',
          frame: 'They agreed [blank] alive.',
          answers: [
            'to burn Abraham',
            'to burn Abraham (pbuh)',
            'to burn him',
            'that they should burn Abraham',
            'that they would burn Abraham',
            'that they should burn him',
          ],
        },
      ],
      correctAnswer: null,
      explanation: '“…; however, …” sets two facts side by side; “Although …, …” puts the recognition in a concession clause and makes the refusal the main point. The passive “were ordered” hides who gave the order and stresses the command; the active version needs an object (ordered all the citizens to …). “Agree that … should be …” can become “agree to + verb”.',
      feedback: {
        correct: 'Well done. You kept the contrast, the order and the decision.',
        incorrect: 'Item 1: use a concession word and drop “however”. Item 2: add the object after “ordered”. Item 3: use agree + to + verb. Check Chapter 20.',
      },
    },
    {
      id: 'abraham-b2-language-20-production',
      type: 'reflection',
      title: 'Write Recognition Without Admission',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation where a group recognizes that an argument is weak but refuses to admit it. Use “must” for a strong inference, “in fact” to state recognition, “however” to mark resistance, and a narrowing structure such as “all they could do was...”. Then report a collective decision with “agreed that” or “decided to”, include one passive command, and finish with a purpose phrase such as “to...” or “for...”. Do not retell the Abraham story.',
      question: 'Can you build a coherent B2 paragraph in which inference, concession, authority and purpose each perform a different discourse function?',
      correctAnswer: null,
      explanation: 'A strong response should clearly separate what the group recognizes from what it is willing to admit, then show how the language shifts from reasoning to authority and organized action.',
      feedback: {
        correct: 'Check that “must” signals inference, “however” creates a genuine reversal, the passive hides or backgrounds the commander, and the final purpose expression explains the action.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Inference — What conclusion “must” follow from the evidence?', mode: 'Individual' },
        {
          question: 'Concession — What does the group recognize, and what does “however” show it refuses to admit?',
          mode: 'Pair',
        },
        {
          question: 'Authority — What is the only response left, and how will you report the decision?',
          mode: 'Pair',
        },
        { question: 'Purpose — What action is ordered, and for what intended purpose?', mode: 'Individual' },
      ],
    },
  ],
};

/** Chapter 21 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter21: Record<number, Exercise[]> = {
  21: [
    {
      id: 'abraham-b2-language-21-contrast-cause',
      type: 'multiple-choice',
      title: 'Sitting in a Garden?',
      instructions: 'Read the sentence from Chapter 21. Then choose the best explanation.',
      question: '“… he sat in the middle of the fire as if he were sitting in a garden.” What does “as if he were” show?',
      options: [
        'It compares his real situation with an unreal one: he was in the fire, but it felt like a garden.',
        'It shows that the fire had changed into a real garden.',
        'It shows that the narrator is not sure where Abraham was sitting.',
        'It shows that Abraham imagined a garden to forget the fire.',
      ],
      correctAnswer: 0,
      explanation: '“As if” + past subjunctive (“were”) compares a real situation with an unreal one. Abraham was really in the middle of the fire; the comparison with a garden shows how safe and peaceful it was for him. The same comparison appears in “his fall into the fire was like going down into a cool garden”.',
      feedback: {
        correct: 'Correct. “As if he were” marks an unreal comparison.',
        incorrect: 'Where was Abraham really? Read the whole sentence again: “he sat in the middle of the fire …”.',
      },
    },
    {
      id: 'abraham-b2-language-21-passive-change',
      type: 'transformation',
      title: 'Who Did It?',
      instructions: 'Rewrite each passive or noun phrase from Chapter 21 with the words given. Keep the meaning.',
      question: 'Why does the chapter use the passive at the turning point of the story?',
      transformItems: [
        {
          source: 'The catapult was fired, and Abraham (pbuh) was thrown into the fire.',
          frame: 'They fired the catapult, and they [blank] into the fire.',
          answers: ['threw Abraham', 'threw Abraham (pbuh)', 'threw him'],
        },
        {
          source: 'Then, the chief priest gave his order to throw Abraham (pbuh) into the fire.',
          frame: 'Then, the chief priest ordered that Abraham (pbuh) [blank] into the fire.',
          answers: ['be thrown', 'should be thrown'],
        },
        {
          source: 'The air became more pleasant as the fire was turned into coolness.',
          frame: 'The air became more pleasant as Allah [blank] into coolness.',
          answers: ['turned the fire', 'had turned the fire'],
        },
      ],
      correctAnswer: null,
      explanation: 'The passive (“was fired”, “was thrown”, “was turned”) keeps the focus on the catapult, on Abraham and on the fire, not on the people who acted. In the active, the agent must be named. “Order that + be + past participle” is a formal way to report a command. The last item names the real cause of the change: Allah’s command.',
      feedback: {
        correct: 'Well done. You named the agents and kept the meaning.',
        incorrect: 'In the active, the subject does the action and the object follows the verb. After “ordered that”, use be + past participle. Check Chapter 21.',
      },
    },
    {
      id: 'abraham-b2-language-21-comparison',
      type: 'word-bank',
      title: 'Appearance and Effect',
      instructions: 'Complete the lines from Chapter 21 with words from the bank. Three options are not needed.',
      question: 'Which words show a surprising contrast, its cause and its limit?',
      fillBlanksText: 'The rising flames were still there, [blank] they did not burn him, [blank] Allah commanded: “O fire! Be coolness and safety for Abraham” (Surah Enbiyâ: 69). The fire obeyed the order of Allah. It became cool and safe for Abraham (pbuh). It [blank] burned his ropes …',
      wordBank: ['but', 'for', 'only', 'so', 'because of', 'also'],
      correctAnswer: ['but', 'for', 'only'],
      explanation: '“But” contrasts what stayed the same (the flames were still there) with what changed (they did not burn him). “For” + clause gives the reason; “because of” needs a noun, not a clause, and “so” would give a result. “Only” limits the fire’s effect to one thing, his ropes; “also” would wrongly suggest that it burned something else too.',
      feedback: {
        correct: 'Correct. You showed the contrast, the reason and the limit.',
        incorrect: 'Ask: what contrasts with the flames still being there? What introduces the reason (a full clause follows)? What did the fire burn and what did it not burn?',
      },
    },
    {
      id: 'abraham-b2-language-21-production',
      type: 'reflection',
      title: 'Write Appearance Versus Effect',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which something still looks dangerous, difficult, or negative but its actual effect changes. Use “but” for a genuine reversal, one passive sentence to foreground an event, “for” or “because” to explain a cause, “only” to restrict an effect, one “as if” comparison, and one change-of-state form such as “became” or “was turned into”. Do not retell the Abraham story.',
      question: 'Can you build a coherent B2 paragraph that separates appearance, cause, limited effect, comparison and resulting state?',
      correctAnswer: null,
      explanation: 'A strong response should make the contrast meaningful: the visible situation may remain similar while its consequence changes, and each connector or structure should perform a distinct discourse function.',
      feedback: {
        correct: 'Check that “but” reverses an expectation, the passive foregrounds the event, “only” narrows the result, and “as if” remains a comparison rather than a literal claim.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Appearance — What still looks unchanged?', mode: 'Individual' },
        { question: 'Reversal — What actual effect is different?', mode: 'Pair' },
        { question: 'Cause — What explains the change?', mode: 'Pair' },
        {
          question: 'Comparison — What “as if” image can describe the new experience without becoming a literal claim?',
          mode: 'Individual',
        },
      ],
    },
  ],
};

/** Chapter 22 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter22: Record<number, Exercise[]> = {
  22: [
    {
      id: 'abraham-b2-language-22-time-result',
      type: 'multiple-choice',
      title: 'Result or Reason?',
      instructions: 'Read the last sentence of Chapter 22. Then choose the best explanation.',
      question: '“Consequently, many people started following Abraham (pbuh), but some kept their faith secret out of fear of rulers.” What do “Consequently” and “out of fear of” introduce?',
      options: [
        '“Consequently” introduces a result of the miracle; “out of fear of rulers” gives the reason why some hid their faith.',
        'Both introduce results of the miracle.',
        'Both give reasons for the miracle.',
        '“Consequently” gives a reason; “out of fear of rulers” gives a result.',
      ],
      correctAnswer: 0,
      explanation: '“Consequently” (= as a result) links the sentence to the miracle before it: many people followed Abraham. “Out of + noun” (out of fear, out of love) gives the motive for an action: some kept their faith secret because they were afraid. One sentence shows two different reactions to the same event.',
      feedback: {
        correct: 'Correct. One phrase gives a result, the other a motive.',
        incorrect: 'Replace “Consequently” with “As a result” and “out of fear of” with “because they feared”. Which one is a result and which a reason?',
      },
    },
    {
      id: 'abraham-b2-language-22-reversal-focus',
      type: 'sentence-building',
      title: 'Duration and Result',
      instructions: 'Tap the pieces to rebuild this sentence from Chapter 22.',
      question: 'How does one sentence link how long something lasted to what people thought as a result?',
      sentenceChunks: [
        'The fire kept burning',
        'for such',
        'a long time',
        'that the disbelievers thought',
        'it would never be extinguished.',
      ],
      correctAnswer: null,
      explanation: '“Such + a/an + (adjective) + noun + that …” links a degree to its result: the time was so long that the disbelievers thought the fire would never go out. “Kept + -ing” shows continuing action, and “would never be extinguished” is their expectation, seen from the past.',
      feedback: {
        correct: 'Well done. The duration comes first, then its result with “that”.',
        incorrect: 'Start with the fire, then say how long it burned (for such a long time), then the result with “that …”.',
      },
    },
    {
      id: 'abraham-b2-language-22-motive-vs-result',
      type: 'word-bank',
      title: 'Turning Point and Contrast',
      instructions: 'Complete the lines from Chapter 22 with words from the bank. Three options are not needed.',
      question: 'Which words mark the turning point, the contrast and the earlier change?',
      fillBlanksText: '[blank] the fire burnt out, they were shocked to see that Abraham (pbuh) stepped out of the pit completely unharmed. The smoke blackened their faces, [blank] his face was bright. The burning fire [blank] cool for Abraham (pbuh) and had only blackened the ropes which held him.',
      wordBank: ['Once', 'yet', 'had become', 'Unless', 'so', 'has become'],
      correctAnswer: ['Once', 'yet', 'had become'],
      explanation: '“Once” means “as soon as / after”: it marks the moment the fire ended and the next stage began. “Yet” sets two opposite results side by side: their faces were black, his was bright. The past perfect “had become” shows that the fire had changed for Abraham before he walked out; it matches “had only blackened”.',
      feedback: {
        correct: 'Correct. You marked the turning point, the contrast and the earlier change.',
        incorrect: 'Ask: which word means “after/as soon as”? Are the two faces similar or opposite? Look at “had only blackened” in the same sentence.',
      },
    },
    {
      id: 'abraham-b2-language-22-production',
      type: 'reflection',
      title: 'Build a Turning-Point Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation where a long-running difficulty reaches a turning point and produces mixed reactions. Use one duration-to-result structure such as “for such a long time that”, one “once” clause, one past-perfect sentence for an earlier completed result, “yet” or “but” for a genuine reversal, one passive sentence to foreground a reaction or event, “consequently” for a later result, and a separate motive phrase such as “out of fear of...”, “because of...”, or “to avoid...”. Do not retell the Abraham story.',
      question: 'Can you organize duration, turning point, reversal, consequence and motive into one coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should make the timeline clear and keep discourse relations distinct: duration leads toward a turning point, contrast reverses an expectation, consequence follows from an event, and motive explains a person’s choice.',
      feedback: {
        correct: 'Check that your timeline is coherent and that consequence and motive are not treated as the same relationship.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Duration — What continued for a long time?', mode: 'Individual' },
        { question: 'Turning point — What completed event changed the situation?', mode: 'Pair' },
        { question: 'Reversal — What happened differently from what people expected?', mode: 'Pair' },
        {
          question: 'Result and motive — What followed, and why did one person or group react differently?',
          mode: 'Individual',
        },
      ],
    },
  ],
};

/** Chapter 23 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter23: Record<number, Exercise[]> = {
  23: [
    {
      id: 'abraham-b2-language-23-stance-focus',
      type: 'drag-drop',
      title: 'Statement or Reported Claim?',
      instructions: 'Sort the parts of Chapter 23. Does the narrator state it, or report someone’s claim or belief?',
      question: 'How does the narrator keep a distance from Nimrod’s claims?',
      dragDropGroups: [
        {
          group: 'The narrator states it',
          items: [
            'Still a young man, Abraham (pbuh) was put on trial and stood by himself before a king.',
            'Even his father was not on his side; he was on the king’s side.',
            'Abraham (pbuh)’s logic was undeniable',
          ],
        },
        {
          group: 'A claim or belief is reported',
          items: [
            'those who declared themselves as gods',
            'He thought that his claim to be a god could not be questioned by an ordinary person.',
            'He said: “I give life and cause death.”',
          ],
        },
      ],
      correctAnswer: {
        'The narrator states it': [
          'Still a young man, Abraham (pbuh) was put on trial and stood by himself before a king.',
          'Even his father was not on his side; he was on the king’s side.',
          'Abraham (pbuh)’s logic was undeniable',
        ],
        'A claim or belief is reported': [
          'those who declared themselves as gods',
          'He thought that his claim to be a god could not be questioned by an ordinary person.',
          'He said: “I give life and cause death.”',
        ],
      },
      explanation: 'Reporting verbs keep claims at a distance: “declared themselves as gods”, “He thought that …”, “He said …”. The narrator does not accept these claims; he only reports them. The narrator’s own statements have no such frame. “Still a young man” compresses background, and “Even” stresses how alone Abraham was.',
      feedback: {
        correct: 'Correct. You separated the narrator’s statements from the claims he reports.',
        incorrect: 'Look for reporting words: declared, thought that, said. Sentences without them are the narrator’s own view.',
      },
    },
    {
      id: 'abraham-b2-language-23-time-cause',
      type: 'error-correction',
      title: 'Cause and the Other One',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct an earlier past and a word that points to the second of two?',
      errorItems: [
        {
          options: ['had emerged', 'was emerging', 'emerges'],
          sentence: 'When King Nimrod heard that Abraham (pbuh) has emerged from the fire unharmed, he was filled with rage.',
          error: 'has emerged',
          answer: 0,
        },
        {
          options: ['the other', 'other', 'others'],
          sentence: 'The king called up two men sentenced to death. He freed one and another was put to death.',
          error: 'another',
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'Nimrod heard the news after Abraham came out of the fire, so the earlier event takes the past perfect: “had emerged”. With two people, “one … the other” is used: “the other” is the second, known member of the pair; “another” means one more from a larger group.',
      feedback: {
        correct: 'Well done. You corrected the earlier past and the pair “one … the other”.',
        incorrect: 'Which came first: Abraham leaving the fire or Nimrod hearing about it? How many men were there? Check Chapter 23.',
      },
    },
    {
      id: 'abraham-b2-language-23-parallel-claims',
      type: 'multiple-choice',
      title: 'The Same Words, a Different Claim',
      instructions: 'Read the exchange at the end of Chapter 23. Then choose the best explanation.',
      question: 'Abraham says, “My Lord (Allah) is He Who gives life and causes death.” Nimrod answers, “I give life and cause death.” What does Nimrod’s use of almost the same words show?',
      options: [
        'He copies the wording but gives it a much narrower meaning, which he shows by freeing one prisoner and executing the other.',
        'He agrees with what Abraham says about his Lord.',
        'He admits that he cannot really give life.',
        'He uses completely different words to make a different claim.',
      ],
      correctAnswer: 0,
      explanation: 'Parallel wording can hide a change of meaning. Nimrod repeats Abraham’s words but uses them for something much smaller: deciding which prisoner lives or dies. The narrator shows this with the example of the two men. A careful reader compares not only the words but what each speaker means by them.',
      feedback: {
        correct: 'Correct. Same words, different and much narrower meaning.',
        incorrect: 'What does Nimrod do after his answer? Compare that action with “gives life and causes death” in Abraham’s sense.',
      },
    },
    {
      id: 'abraham-b2-language-23-production',
      type: 'reflection',
      title: 'Write a Claim-and-Counterclaim Exchange',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story disagreement in which one person presents an important claim and another person responds using closely parallel wording. Include one reported-attitude clause such as “she thought that...”, one passive modal such as “could not be questioned”, one past-perfect clause inside a “when” sentence, one explicit reason with “because”, one contrast with “even”, “still”, or a semicolon, and one pair of deliberately parallel claims. Make clear that similar wording does not automatically mean identical scope or meaning.',
      question: 'Can you use stance, chronology, cause, contrast and parallel wording to build a coherent B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should show who holds each viewpoint, order the events clearly, explain why the disagreement occurs, and use parallel wording as an argumentative device rather than as empty repetition.',
      feedback: {
        correct: 'Check that your parallel claims are genuinely comparable but not automatically equivalent in meaning.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Stance — Whose belief or assumption is being reported?', mode: 'Individual' },
        { question: 'Chronology — What earlier event needs a past-perfect form?', mode: 'Pair' },
        { question: 'Cause — What explicit reason drives the disagreement?', mode: 'Pair' },
        {
          question: 'Parallel wording — How can two speakers use similar words for different claims?',
          mode: 'Individual',
        },
      ],
    },
  ],
};

/** Chapter 24 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter24: Record<number, Exercise[]> = {
  24: [
    {
      id: 'abraham-b2-language-24-argument-result',
      type: 'matching',
      title: 'Words for Winning and Trying',
      instructions: 'Match each expression from Chapter 24 with its meaning.',
      question: 'Which expressions describe the debate and Abraham’s later efforts?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'put forth another challenge', right: 'offered a new test' },
        { left: 'utterly defeated', right: 'beaten completely' },
        { left: 'left him unable to speak', right: 'made him fall silent' },
        { left: 'In the meantime', right: 'during the same period' },
        { left: 'tried every means', right: 'used every possible way' },
      ],
      correctAnswer: {
        'put forth another challenge': 'offered a new test',
        'utterly defeated': 'beaten completely',
        'left him unable to speak': 'made him fall silent',
        'In the meantime': 'during the same period',
        'tried every means': 'used every possible way',
      },
      explanation: '“Put forth” is a formal phrasal verb meaning “present, offer”. “Utterly” is an intensifier (= completely). “Leave + person + adjective” describes the state someone is left in. “In the meantime” links two things happening in the same period: people talked about Abraham while he continued his call. “Means” (always with -s) here means “way, method”.',
      feedback: {
        correct: 'Correct. You matched each expression with its meaning.',
        incorrect: 'Find each expression in Chapter 24 and read what happens around it: the debate with the king, its result, and Abraham’s efforts afterwards.',
      },
    },
    {
      id: 'abraham-b2-language-24-simultaneous-contrast',
      type: 'transformation',
      title: 'Effort Against Result',
      instructions: 'Rewrite each sentence from Chapter 24 with the words given. Keep the meaning.',
      question: 'How can a concession and a limited result be expressed in another way?',
      transformItems: [
        {
          source: 'However, in spite of his love and care for his people, they left him alone.',
          frame: 'However, although he [blank] his people, they left him alone.',
          answers: ['loved and cared for', 'loved and cared about'],
        },
        {
          source: 'Only one woman and one man of his people shared his belief in Allah.',
          frame: '[blank] one woman and one man of his people shared his belief in Allah.',
          answers: [
            'No one except',
            'No one but',
            'Nobody except',
            'Nobody but',
            'No one apart from',
            'Nobody apart from',
            'None except',
            'None but',
          ],
        },
      ],
      correctAnswer: null,
      explanation: '“In spite of” is followed by a noun phrase (his love and care); “although” is followed by a clause with a verb (he loved and cared for …). Both set Abraham’s effort against the negative result. “Only X” can also be expressed with a negative + exception: “No one except X …”. Both stress how small the support was.',
      feedback: {
        correct: 'Well done. You kept the concession and the limited result.',
        incorrect: 'Item 1: turn the nouns love and care into verbs. Item 2: start with a negative word and add an exception. Check the end of Chapter 24.',
      },
    },
    {
      id: 'abraham-b2-language-24-reference-cohesion',
      type: 'multiple-choice',
      title: 'The Expected Effect',
      instructions: 'Read the sentence from Chapter 24. Then choose the best explanation.',
      question: '“This reply of the king was totally foolish, so Abraham (pbuh) put forth another challenge which would unquestionably and easily quiet him.” What does “would” express here?',
      options: [
        'The effect the challenge was certain to have, seen from the moment Abraham put it forth.',
        'A habit that Abraham had in the past.',
        'A polite request to the king.',
        'An imaginary situation that did not happen.',
      ],
      correctAnswer: 0,
      explanation: '“Would” is the future seen from the past: at the moment Abraham gives his challenge, the narrator looks ahead to its effect. “Unquestionably and easily” show how sure the narrator is. The next sentences confirm it: “He was utterly defeated.”',
      feedback: {
        correct: 'Correct. “Would” looks ahead from that moment to the challenge’s certain effect.',
        incorrect: 'Read the sentences after the challenge. Does the effect happen? Is “would” about habit, politeness, or a future seen from the past?',
      },
    },
    {
      id: 'abraham-b2-language-24-production',
      type: 'reflection',
      title: 'Write Effort, Resistance and Limited Outcome',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone makes a strong effort but receives only limited support. Include one consequence connector such as “so”, one phrase showing expected effect with “would”, one simultaneity marker such as “in the meantime”, one concession pattern with “however” plus “in spite of” or “although”, one limiting expression with “only”, and a final pair of parallel sentences that identify two specific supporters or outcomes. Keep the paragraph coherent rather than treating the forms as separate examples.',
      question: 'Can you organize a B2 paragraph around escalation, simultaneous development, concession and a sharply limited result?',
      correctAnswer: null,
      explanation: 'A strong response should show how an earlier event motivates a stronger action, how another development continues at the same time, why the eventual result is unexpected, and how a general reference can be developed into specific details.',
      feedback: {
        correct: 'Check that your connectors build a real discourse progression and that “only” genuinely limits the outcome.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Escalation — What earlier problem motivates a stronger response?', mode: 'Individual' },
        { question: 'Simultaneity — What two developments are happening at the same time?', mode: 'Pair' },
        { question: 'Concession — Why is the final result surprising despite the effort?', mode: 'Pair' },
        {
          question: 'Reference — How will you move from a general group to specific people or outcomes?',
          mode: 'Individual',
        },
      ],
    },
  ],
};

/** Chapter 25 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter25: Record<number, Exercise[]> = {
  25: [
    {
      id: 'abraham-b2-language-25-decision-chain',
      type: 'drag-drop',
      title: 'Background or Main Event?',
      instructions: 'Sort the sentences from Chapter 25. Do they give earlier background, or move the story forward?',
      question: 'How does the past perfect fill in background without stopping the story?',
      dragDropGroups: [
        {
          group: 'Earlier background (past perfect)',
          items: [
            'She had been given an Egyptian woman, Hajar, as a servant when they were in Egypt.',
            'Abraham (pbuh) had aged and his hair was gray after many years spent in calling people to Allah.',
          ],
        },
        {
          group: 'Main events (past simple)',
          items: [
            'He left his people and traveled with his wife Sarah and Lot to Egypt.',
            'After Egypt, Abraham (pbuh) traveled to Palestine and settled there.',
            'Hajar gave birth to her first son, Ishmael, when Abraham (pbuh) was an old man.',
          ],
        },
      ],
      correctAnswer: {
        'Earlier background (past perfect)': [
          'She had been given an Egyptian woman, Hajar, as a servant when they were in Egypt.',
          'Abraham (pbuh) had aged and his hair was gray after many years spent in calling people to Allah.',
        ],
        'Main events (past simple)': [
          'He left his people and traveled with his wife Sarah and Lot to Egypt.',
          'After Egypt, Abraham (pbuh) traveled to Palestine and settled there.',
          'Hajar gave birth to her first son, Ishmael, when Abraham (pbuh) was an old man.',
        ],
      },
      explanation: 'The past simple moves the story forward: left, traveled, settled, gave birth. The past perfect steps back to explain the situation at that point: Hajar had been given to Sarah earlier in Egypt, and Abraham had aged over many years. This background explains why Sarah suggested the marriage.',
      feedback: {
        correct: 'Correct. You separated earlier background from the main events.',
        incorrect: 'Look for had + past participle: it steps back to an earlier time. Past simple verbs carry the story forward.',
      },
    },
    {
      id: 'abraham-b2-language-25-distributed-action',
      type: 'transformation',
      title: 'Realisation and Recurring Action',
      instructions: 'Rewrite each part of Chapter 25 with the words given. Keep the meaning.',
      question: 'How can a future seen from the past and a repeated action be expressed in another way?',
      transformItems: [
        {
          source: 'When Abraham (pbuh) realized that no one else was going to believe in his call, he decided to emigrate.',
          frame: 'Abraham (pbuh) realized: “No one else [blank] in my call.”',
          answers: ['is going to believe', 'will believe', '\'s going to believe'],
        },
        {
          source: 'He called people to believe in Allah wherever he traveled …',
          frame: 'He called people to believe in Allah [blank] he traveled …',
          answers: ['everywhere', 'anywhere', 'in every place', 'no matter where'],
        },
      ],
      correctAnswer: null,
      explanation: '“Was going to” is the future seen from the past; in Abraham’s own thought at that moment it is “is going to”. His realisation leads directly to a decision (“he decided to emigrate”). “Wherever” means “in every place where”: it turns one action into a pattern repeated on the whole journey.',
      feedback: {
        correct: 'Well done. You moved the future back to Abraham’s viewpoint and kept the repeated action.',
        incorrect: 'Item 1: change “was going to” to the present. Item 2: find another way to say “in every place where”.',
      },
    },
    {
      id: 'abraham-b2-language-25-background-time',
      type: 'error-correction',
      title: 'Sarah’s Thought and Suggestion',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct a reported thought and the verb after “suggest”?',
      errorItems: [
        {
          options: ['could not', 'will not', 'must not'],
          sentence: 'Sarah thought she cannot have a child.',
          error: 'cannot',
          answer: 0,
        },
        {
          options: ['get', 'getting', 'got'],
          sentence: 'Therefore, she suggested Abraham (pbuh) to get married to Hajar.',
          error: 'to get',
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'A thought reported in the past moves back in time: “She thought she could not have a child.” “Suggest” is never followed by person + to-infinitive. Use suggest (that) + person + base verb: “she suggested Abraham get married to Hajar”.',
      feedback: {
        correct: 'Well done. You corrected the reported thought and the pattern after “suggest”.',
        incorrect: 'Ask: does the reported thought need a past form? Which form follows “suggested + person”? Check the end of Chapter 25.',
      },
    },
    {
      id: 'abraham-b2-language-25-production',
      type: 'reflection',
      title: 'Write a Coherent Change-of-Plan Narrative',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about someone who changes plans after realizing an expected outcome will not happen. Use one past-viewpoint future form such as “was going to” or “would”, one explicit decision phrase, at least two coordinated action verbs, one “wherever/whenever” clause to widen scope, one past-perfect sentence for earlier background, and one consequence connector such as “therefore” or “so”. Keep the paragraph coherent rather than listing grammar examples.',
      question: 'Can you control viewpoint, background and consequence in one connected B2 narrative?',
      correctAnswer: null,
      explanation: 'A strong response should distinguish what had happened earlier, what the person realized at a later moment, what decision followed, and how the new actions developed across time or place.',
      feedback: {
        correct: 'Check that your tense choices show clear time relationships and that each connector advances the discourse.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Background — What had already happened before the person changed plans?', mode: 'Individual' },
        { question: 'Viewpoint — What outcome did the person realize was not going to happen?', mode: 'Pair' },
        { question: 'Decision — What explicit choice followed that realization?', mode: 'Pair' },
        { question: 'Scope — Which action continued wherever or whenever the person moved?', mode: 'Individual' },
      ],
    },
  ],
};

/** Chapter 26 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter26: Record<number, Exercise[]> = {
  26: [
    {
      id: 'abraham-b2-language-26-lineage-contrast',
      type: 'multiple-choice',
      title: 'An Instruction and a Plan',
      instructions: 'Read the two sentences from Chapter 26. Then choose the best explanation.',
      question: '“One day, Allah told Abraham (pbuh) that he should take Hajar and Ishmael to the Sacred City, Mecca.” / “He informed Abraham (pbuh) that the sacred city would be built through Ishmael and that water would flow for him.” How are the two sentences different?',
      options: [
        'The first reports an instruction (should); the second reports a future plan (would).',
        'Both report instructions to Abraham.',
        'The first reports a plan; the second reports an instruction.',
        'Both report things that had already happened.',
      ],
      correctAnswer: 0,
      explanation: '“Tell someone that he should …” reports an instruction: what Abraham had to do. “Inform someone that … would …” reports a plan for the future, seen from that past moment: the city and the water. The instruction is Abraham’s test; the plan explains its purpose.',
      feedback: {
        correct: 'Correct. “Should” reports what to do; “would” reports what was going to happen.',
        incorrect: 'Compare “should” and “would”. Which one tells Abraham what to do, and which one tells what will happen later?',
      },
    },
    {
      id: 'abraham-b2-language-26-reported-plan',
      type: 'word-bank',
      title: 'Branches, Background and the End of the Journey',
      instructions: 'Complete the lines from Chapter 26 with words from the bank. Three options are not needed.',
      question: 'Which words set two family lines side by side, show a continuing state and mark the end of a journey?',
      fillBlanksText: 'From Ishmael\'s descendants came Prophet Muhammad (pbuh), [blank] from Isaac\'s came Moses (pbuh) and Jesus (pbuh). … Hajar was [blank] nursing Ishmael … Abraham (pbuh) walked through cultivated land, desert, and mountains [blank] he reached the desert of the Arabian Peninsula …',
      wordBank: ['while', 'still', 'until', 'since', 'during', 'unless'],
      correctAnswer: ['while', 'still', 'until'],
      explanation: '“While” can set two parallel facts side by side (= whereas): one family line led to Prophet Muhammad, the other to Moses and Jesus. “Since” would wrongly give a reason. “Still” shows that a state continues: Ishmael was a baby who was still breastfeeding. “Until” marks the end point of the long walk.',
      feedback: {
        correct: 'Correct. You placed the contrast, the continuing state and the end point.',
        incorrect: 'Ask: are the two family lines compared, or is one the reason for the other? Which word shows that a state continues? Which word marks where the walk ended?',
      },
    },
    {
      id: 'abraham-b2-language-26-journey-progression',
      type: 'transformation',
      title: 'Time and Focus',
      instructions: 'Rewrite each sentence from Chapter 26 with the words given. Keep the meaning.',
      question: 'How can the time of an event or the focus of a sentence be expressed in another way?',
      transformItems: [
        {
          source: 'Some time later, Allah gave Abraham (pbuh) another son from his first wife, Sarah.',
          frame: 'Some time later, Abraham (pbuh) [blank] another son from his first wife, Sarah.',
          answers: ['was given'],
        },
        {
          source: 'In a few days, Abraham (pbuh) set out with his wife Hajar and their son Ishmael.',
          frame: '[blank], Abraham (pbuh) set out with his wife Hajar and their son Ishmael.',
          answers: ['A few days later', 'After a few days', 'Within a few days'],
        },
      ],
      correctAnswer: null,
      explanation: 'With “give”, the passive can start with the person who receives: “Abraham was given another son”. This keeps Abraham, the main character, as the subject. “In a few days” in a past narrative means “a few days later”: the time phrase shows how soon Abraham obeyed.',
      feedback: {
        correct: 'Well done. You changed the focus and kept the time.',
        incorrect: 'Item 1: make Abraham the subject of a passive verb. Item 2: say “in a few days” in another way. Check Chapter 26.',
      },
    },
    {
      id: 'abraham-b2-language-26-production',
      type: 'reflection',
      title: 'Write a Planned Journey with Layered Viewpoint',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a family or team receiving an instruction to move somewhere for a future purpose. Use one reported instruction with “told ... that ... should”, one future-in-the-past form with “would”, one parallel contrast with “while”, one continuing-background form with “was/were still ...”, and one “until” clause that marks the endpoint of a journey. Keep the paragraph coherent and make the future plan clearly different from the actions already completed.',
      question: 'Can you combine reported instruction, future plan, contrast, background and movement in one connected B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should distinguish the instruction from the later intended result, keep the narrative viewpoint consistently in the past, and use the movement sequence to reach a clearly marked destination.',
      feedback: {
        correct: 'Check that “would” is anchored to a past viewpoint and that “while” connects genuinely parallel information.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Instruction — What was the group told that it should do?', mode: 'Individual' },
        { question: 'Plan — What was said would happen later?', mode: 'Pair' },
        { question: 'Contrast — What two parallel outcomes or groups can you connect with “while”?', mode: 'Pair' },
        {
          question: 'Journey — What continued in the background until the group reached its destination?',
          mode: 'Individual',
        },
      ],
    },
  ],
};

/** Chapter 27 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter27: Record<number, Exercise[]> = {
  27: [
    {
      id: 'abraham-b2-language-27-absence-accumulation',
      type: 'multiple-choice',
      title: 'What Does “Since” Mean Here?',
      instructions: 'Read Hajar’s words in Chapter 27. Then choose the best explanation.',
      question: '“I am satisfied to be with Allah! We are not going to be lost, since Allah is with us.” What does “since” introduce?',
      options: [
        'The reason for her confidence.',
        'The time when her confidence began.',
        'A condition for her confidence.',
        'A contrast with her confidence.',
      ],
      correctAnswer: 0,
      explanation: '“Since” has two meanings: time (since 2020, since he left) and reason (= because). Here it is followed by a present fact, “Allah is with us”, which explains why she is sure they will not be lost. Her answer turns her anxiety into reassurance.',
      feedback: {
        correct: 'Correct. “Since” here means “because”.',
        incorrect: 'Replace “since” with “because” and with “from the time when”. Which keeps the meaning of Hajar’s words?',
      },
    },
    {
      id: 'abraham-b2-language-27-dialogue-reasoning',
      type: 'error-correction',
      title: 'Absence, Movement and Place',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct a list of things that were missing, a participle and a relative word for a place?',
      errorItems: [
        {
          options: ['no water', 'any water', 'none water'],
          sentence: 'The valley had no fruit, no trees, no food, not water, and no sign of life.',
          error: 'not water',
          answer: 0,
        },
        {
          options: ['leaving', 'leave', 'had left'],
          sentence: 'As Abraham (pbuh) began walking away, left them behind, Hajar became anxious as to what was happening.',
          error: 'left',
          answer: 0,
        },
        {
          options: ['where', 'that', 'when'],
          sentence: 'He stopped in a place which they could not see him.',
          error: 'which',
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“No + noun” means “not any”: repeating “no … no … no …” piles up what was missing and makes the valley feel empty. “Not” cannot come directly before a noun here. “Leaving them behind” is a participle phrase that adds a second action at the same time. “Where” (= from which) links a place to what happens there.',
      feedback: {
        correct: 'Well done. You corrected the list, the participle and the place link.',
        incorrect: 'Check the pattern of the list, the form that adds a second action, and the word that links to a place. Then read Chapter 27 again.',
      },
    },
    {
      id: 'abraham-b2-language-27-correction-endpoint',
      type: 'transformation',
      title: 'Correction and Report',
      instructions: 'Rewrite each part of Chapter 27 with the words given. Keep the meaning.',
      question: 'How can a correction and a question be expressed in another way?',
      transformItems: [
        {
          source: 'Abraham (pbuh) was not acting on his own decision; Allah had commanded him to leave them.',
          frame: 'Abraham (pbuh) was acting not on his own decision [blank].',
          answers: [
            'but on Allah\'s command',
            'but on Allah’s command',
            'but on the command of Allah',
            'but on Allah\'s order',
            'but on Allah’s order',
          ],
        },
        {
          source: 'Hajar asked him: “Has Allah commanded you to leave us here?”',
          frame: 'Hajar asked him [blank] to leave them there.',
          answers: ['whether Allah had commanded him', 'if Allah had commanded him'],
        },
      ],
      correctAnswer: null,
      explanation: '“Not X but Y” rejects one explanation and puts the correct one in its place: not his own decision, but Allah’s command. A reported yes/no question uses if/whether, statement word order, and moves back in time: “has commanded” → “had commanded”; “you … us here” → “him … them there”.',
      feedback: {
        correct: 'Well done. You made the correction clear and reported the question.',
        incorrect: 'Item 1: complete “not … but …”. Item 2: use if/whether and move the tense back. Check the middle of Chapter 27.',
      },
    },
    {
      id: 'abraham-b2-language-27-production',
      type: 'reflection',
      title: 'Write from Uncertainty to Reassurance',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a difficult relocation, separation or responsibility. Begin with an accumulated description using at least three coordinated negatives or limitations. Add a background-to-reaction structure such as “As/While ... , ...”, include one direct or reported question that clarifies the reason for an action, one reason clause with “since” or “because”, one corrective contrast using “not ...; rather/but ...”, and one endpoint/location clause with “as far as”, “until”, or “where”. Keep the paragraph coherent and show a clear change from uncertainty to a more informed response.',
      question: 'Can you use setting, dialogue, causal reasoning and movement to build one connected B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should use the language forms to move the reader through stages: difficult setting → uncertainty → clarification → reasoned response → spatial or narrative endpoint.',
      feedback: {
        correct: 'Check that each connector changes the relationship between ideas, rather than merely decorating separate sentences.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Setting — Which repeated limitations make the situation difficult?', mode: 'Individual' },
        { question: 'Clarification — What question reveals the real reason for the action?', mode: 'Pair' },
        {
          question: 'Correction — Which first interpretation must be replaced by a more accurate one?',
          mode: 'Pair',
        },
        { question: 'Endpoint — How will you mark the final place or stage of the movement?', mode: 'Individual' },
      ],
    },
  ],
};

/** Chapter 28 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter28: Record<number, Exercise[]> = {
  28: [
    {
      id: 'abraham-b2-language-28-purpose-chain',
      type: 'matching',
      title: 'Reading Abraham’s Prayer',
      instructions: 'Match each part of Abraham’s prayer (Surah Ibrâhim: 37) with its meaning.',
      question: 'What does Abraham ask for, and why?',
      matchingHeadings: { left: 'From the prayer', right: 'Meaning' },
      matchingPairs: [
        { left: 'in a valley with no cultivation', right: 'in a place where no crops are grown' },
        { left: 'that they may offer prayers perfectly', right: 'so that they would worship in the right way' },
        { left: 'fill some hearts among men with love towards them', right: 'make people feel affection for them' },
        { left: 'so that they may give thanks', right: 'so that they would be grateful' },
      ],
      correctAnswer: {
        'in a valley with no cultivation': 'in a place where no crops are grown',
        'that they may offer prayers perfectly': 'so that they would worship in the right way',
        'fill some hearts among men with love towards them': 'make people feel affection for them',
        'so that they may give thanks': 'so that they would be grateful',
      },
      explanation: 'The prayer is built on purpose: “in order … that they may …” and “so that they may …” give the reasons behind each request. First Abraham explains why his family is in a barren valley (to pray), then he asks for love from people and for fruits, with a final purpose: gratitude.',
      feedback: {
        correct: 'Correct. You followed the requests and their purposes.',
        incorrect: 'Read the prayer at the start of Chapter 28. Which part describes the place, which gives a purpose, and which asks for something?',
      },
    },
    {
      id: 'abraham-b2-language-28-obligation-reformulation',
      type: 'multiple-choice',
      title: 'Why “Had To”?',
      instructions: 'Read the sentences from Chapter 28. Then choose the best explanation.',
      question: '“Abraham (pbuh) had to take Hajar and Ishmael away from Palestine to a new place. This was about the rebuilding of the temple, that is, the Ka‘ba.” What does “had to” show?',
      options: [
        'The move was necessary as part of Allah’s intention, not Abraham’s personal choice.',
        'Abraham wanted to move because he preferred the new place.',
        'Abraham was used to moving from place to place.',
        'Abraham was not sure whether he would move.',
      ],
      correctAnswer: 0,
      explanation: '“Had to” is the past of “must/have to”: it expresses necessity. The chapter explains where the necessity came from: “According to Allah’s intention, Hajar and Ishmael had to leave Palestine …”. “That is” then clarifies the word “temple” by naming it: the Ka‘ba.',
      feedback: {
        correct: 'Correct. “Had to” shows necessity coming from Allah’s intention.',
        incorrect: 'Read the next sentences: “According to Allah’s intention …”. Is the move a wish, a habit, a doubt, or a necessity?',
      },
    },
    {
      id: 'abraham-b2-language-28-time-reference',
      type: 'word-bank',
      title: 'Linking Across Generations',
      instructions: 'Complete the lines from Chapter 28 with words from the bank. Three options are not needed.',
      question: 'Which words refer back and give a purpose across a long stretch of time?',
      fillBlanksText: '… to reconstruct the Holy Ka‘ba [blank] was lost after Noah’s Flood … Over the years, Ishmael’s children had children; one of [blank] was Muhammad, the Prophet of Islam (pbuh). [blank] spread all over the Arabian Peninsula [blank] their grandfather Abraham (pbuh)’s message of monotheism.',
      wordBank: ['which', 'them', 'They', 'to carry', 'who', 'it', 'for carrying'],
      correctAnswer: ['which', 'them', 'They', 'to carry'],
      explanation: '“Which” adds background about a thing (the Ka‘ba). “One of them” picks one person from the group just mentioned (Ishmael’s descendants), and “They” keeps the same group as the subject of the next sentence. “To + verb” gives the purpose of spreading: to carry the message. “For carrying” is not used for the purpose of a person’s action.',
      feedback: {
        correct: 'Correct. You kept the reference clear and gave the purpose.',
        incorrect: 'Ask: is the Ka‘ba a person or a thing? Who is “one of …” chosen from? Which form shows purpose after a verb? Check the end of Chapter 28.',
      },
    },
    {
      id: 'abraham-b2-language-28-production',
      type: 'reflection',
      title: 'Write a Purpose-to-Legacy Paragraph',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a community project, institution or long-term plan. Include one obligation structure with “had to” or “needed to”, one clarification with “that is” or “in other words”, at least two purpose/result links using “in order to”, “so that”, “to”, or an -ing result phrase, one relative clause that adds earlier background, one explicit long-term time shift such as “over the years”, and clear pronoun/reference links across at least three sentences. Do not write isolated examples; make the paragraph move from an immediate necessity to a wider long-term effect.',
      question: 'Can you connect necessity, clarification, purpose, background and long-term consequence in one coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should show a clear discourse progression: necessity → clarification → immediate purpose → wider result → earlier/later background → long-term consequence.',
      feedback: {
        correct: 'Check that every connector and reference choice helps the paragraph progress rather than merely adding another sentence.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Necessity — What action had to happen first, and why?', mode: 'Individual' },
        { question: 'Clarification — Which term or idea needs to be reformulated for the reader?', mode: 'Pair' },
        { question: 'Purpose — Which two outcomes should be linked rather than simply listed?', mode: 'Pair' },
        {
          question: 'Legacy — How will you move from the immediate project to its effect years later?',
          mode: 'Individual',
        },
      ],
    },
  ],
};

/** Chapter 29 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter29: Record<number, Exercise[]> = {
  29: [
    {
      id: 'abraham-b2-language-29-source-voice',
      type: 'drag-drop',
      title: 'Whose Voice?',
      instructions: 'Sort the sentences from Chapter 29. Are they inside Ibn Abbas’s report, or told by the narrator outside it?',
      question: 'How does the chapter show where the source ends and the narrator begins?',
      dragDropGroups: [
        {
          group: 'Inside Ibn Abbas’s report',
          items: [
            'When the water in the water skin was used up, she became thirsty and her child also became thirsty.',
            '‘Maybe there is a caravan passing by,’ she thought to herself.',
            'She ran between the two hills of Safa and Marwa seven times looking for signs of water or help.',
          ],
        },
        {
          group: 'Told by the narrator',
          items: [
            'Her effort was later commemorated by Muslims during Hajj.',
            'Actually, there is almost no difference between the pilgrimage called by Abraham (pbuh) and the pilgrimage of Islam.',
            'Exhausted and sad, she heard a voice but could not find where it came from.',
          ],
        },
      ],
      correctAnswer: {
        'Inside Ibn Abbas’s report': [
          'When the water in the water skin was used up, she became thirsty and her child also became thirsty.',
          '‘Maybe there is a caravan passing by,’ she thought to herself.',
          'She ran between the two hills of Safa and Marwa seven times looking for signs of water or help.',
        ],
        'Told by the narrator': [
          'Her effort was later commemorated by Muslims during Hajj.',
          'Actually, there is almost no difference between the pilgrimage called by Abraham (pbuh) and the pilgrimage of Islam.',
          'Exhausted and sad, she heard a voice but could not find where it came from.',
        ],
      },
      explanation: '“Ibn Abbas … said, “…”” frames a report from a named source, and the quotation marks show where it begins and ends. Inside it, “Maybe … she thought” is Hajar’s own possibility, not a fact. After the report, the narrator adds a later link (“was later commemorated”), a comment (“Actually, …”) and continues the story.',
      feedback: {
        correct: 'Correct. You found where the report ends and the narrator continues.',
        incorrect: 'Find the closing quotation mark of Ibn Abbas’s report. Sentences after it belong to the narrator. Look for “later” and “Actually”.',
      },
    },
    {
      id: 'abraham-b2-language-29-sequence-background',
      type: 'transformation',
      title: 'Naming the Source',
      instructions: 'Rewrite each sentence from Chapter 29 with the words given. Keep the meaning.',
      question: 'How can the narrator’s sentences about the source and the later practice be expressed in another way?',
      transformItems: [
        {
          source: 'Ibn Abbas, a companion of Prophet Muhammad (pbuh) who narrated many hadiths, said, …',
          frame: 'Ibn Abbas, [blank] a companion of Prophet Muhammad (pbuh) and narrated many hadiths, said, …',
          answers: ['who was'],
        },
        {
          source: 'Her effort was later commemorated by Muslims during Hajj.',
          frame: 'Later, Muslims [blank] her effort during Hajj.',
          answers: ['commemorated', 'remembered', 'honored', 'honoured'],
        },
      ],
      correctAnswer: null,
      explanation: 'A noun phrase after a name (“Ibn Abbas, a companion of …”) is an appositive: a short relative clause without “who was”. Adding “who was” lets it join another verb (“and narrated …”). Naming the source this way makes the report reliable. The passive “was commemorated by Muslims” keeps her effort in focus; the active makes Muslims the subject.',
      feedback: {
        correct: 'Well done. You expanded the appositive and changed the focus.',
        incorrect: 'Item 1: add the relative pronoun and verb that are understood. Item 2: make Muslims the subject of an active verb. Check Chapter 29.',
      },
    },
    {
      id: 'abraham-b2-language-29-reformulate-comparison',
      type: 'multiple-choice',
      title: 'A Summary That Keeps the Certainty Levels',
      instructions: 'Choose the summary that keeps what Chapter 29 presents as fact, possibility and comparison.',
      question: 'Which summary of Chapter 29 is faithful to the text?',
      options: [
        'Hajar hoped a caravan might be passing, but she saw nothing; her search is later remembered during Hajj, and the two pilgrimages are almost the same.',
        'Hajar knew a caravan was passing by, so she ran to Safa to meet it.',
        'Ibn Abbas says that the Hajj began on the day of Hajar’s search.',
        'The narrator says that the pilgrimage of Abraham and the pilgrimage of Islam are exactly the same.',
      ],
      correctAnswer: 0,
      explanation: '“Maybe there is a caravan …” is a possibility in Hajar’s mind, not a fact, and she “still saw nothing”. The later link to Hajj is the narrator’s, not Ibn Abbas’s. “Almost no difference” is a careful claim; “exactly the same” would overstate it.',
      feedback: {
        correct: 'Correct. This summary keeps the possibility, the later link and the careful comparison.',
        incorrect: 'Check three things: was the caravan a fact or a possibility? Who links the search to Hajj? Does the narrator say “almost no difference” or “no difference”?',
      },
    },
    {
      id: 'abraham-b2-language-29-production',
      type: 'reflection',
      title: 'Write from Report to Later Interpretation',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a documented journey, experiment, rescue, discovery or repeated attempt. Begin with an attributed source frame such as “According to...” or “X reported that...”. Include one internal possibility with “might/maybe”, one trigger clause with “when/after”, one reduced -ing background phrase, at least two sequence markers, one contrastive failed or unexpected result with “but/yet/still”, and finish by clearly marking a later comparison, interpretation or symbolic meaning. Keep report, possibility and interpretation distinct.',
      question: 'Can you move from attributed evidence through a coherent action sequence to a later interpretation without blurring certainty?',
      correctAnswer: null,
      explanation: 'A strong B2 response should show a controlled discourse progression: attributed source → trigger → repeated or developing action → tentative possibility → contrastive result → later comparison/interpretation.',
      feedback: {
        correct: 'Check that the paragraph makes clear what was reported, what was only possible, what happened, and what was interpreted later.',
        incorrect: '',
      },
      discussionPrompts: [
        {
          question: 'Source — Who reports the initial event, and how will you mark that attribution?',
          mode: 'Individual',
        },
        {
          question: 'Possibility — What did the person think might happen without knowing it for certain?',
          mode: 'Pair',
        },
        {
          question: 'Sequence — Which actions need explicit ordering, and which can be compressed into an -ing phrase?',
          mode: 'Pair',
        },
        {
          question: 'Interpretation — What later comparison or meaning can you add without presenting it as part of the original event?',
          mode: 'Individual',
        },
      ],
    },
  ],
};

/** Chapter 30 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter30: Record<number, Exercise[]> = {
  30: [
    {
      id: 'abraham-b2-language-30-event-result',
      type: 'true-false',
      title: 'Seeing the Sign',
      instructions: 'Read the last sentence of Chapter 30. Is the statement true or false?',
      question: 'In “They had seen the unusual sight of a bird flying in its direction, which could only mean the presence of water”, the tribe had already seen the water itself before they stopped.',
      correctAnswer: false,
      explanation: 'The tribe saw a bird, not the water. “Which could only mean …” marks a strong inference from that sign: the only possible explanation was water. The past perfect “had seen” shows that this sign came before their stop in the valley and explains it.',
      feedback: {
        correct: 'Correct. They saw a sign and inferred the water from it.',
        incorrect: 'What exactly did the tribe see? Read the sentence again: “the unusual sight of a bird …”.',
      },
    },
    {
      id: 'abraham-b2-language-30-reference-time',
      type: 'word-bank',
      title: 'Event, Response and What Came Next',
      instructions: 'Complete the lines from Chapter 30 with words from the bank. Three options are not needed.',
      question: 'Which words show an immediate result, a purpose and a short gap in time?',
      fillBlanksText: 'The angel hit the ground with his heel, and water [blank] flowed out. It was a miracle! Hajar quickly made a small basin around the water [blank] it from spreading, and she filled her water skin. … [blank], the tribe of Jurham (Cürhüm) that was moving from southern Arabia, Yemen, stopped by the valley of Mecca.',
      wordBank: [
        'immediately',
        'to stop',
        'Not long after that',
        'lately',
        'for stopping',
        'Long before that',
      ],
      correctAnswer: ['immediately', 'to stop', 'Not long after that'],
      explanation: '“Immediately” shows that the result followed the action at once; “lately” means “recently” and does not describe how fast something happened. “To + verb” gives the purpose of Hajar’s action: she made the basin to stop the water spreading. “Not long after that” moves the story forward by a short time; “Long before that” would move it back.',
      feedback: {
        correct: 'Correct. You showed the immediate result, the purpose and the short time gap.',
        incorrect: 'Ask: how quickly did the water appear? Why did Hajar make the basin? Did the tribe arrive soon after or long before? Check Chapter 30.',
      },
    },
    {
      id: 'abraham-b2-language-30-inference',
      type: 'transformation',
      title: 'Names and Conclusions',
      instructions: 'Rewrite each part of Chapter 30 with the words given. Keep the meaning.',
      question: 'How can a name and a conclusion be expressed in another way?',
      transformItems: [
        {
          source: 'This well, called Zamzam, is flowing to this day in the city of Mecca …',
          frame: 'This well, [blank] Zamzam, is flowing to this day in the city of Mecca …',
          answers: ['which is called', 'which is named', 'known as', 'which is known as', 'named'],
        },
        {
          source: 'This name was given to the water because the word Zemzem means …',
          frame: 'People [blank] to the water because the word Zemzem means …',
          answers: ['gave this name', 'gave the name'],
        },
        {
          source: 'They had seen the unusual sight of a bird flying in its direction, which could only mean the presence of water.',
          frame: 'They had seen a bird flying in its direction, so there [blank] water there.',
          answers: ['must be', 'must have been', 'had to be'],
        },
      ],
      correctAnswer: null,
      explanation: '“Called Zamzam” is a short form of “which is called Zamzam”. The passive “This name was given to the water” does not name who gave it; the active needs a subject such as “People”. “Could only mean …” marks a strong inference; “must be” says the same thing with a modal of deduction.',
      feedback: {
        correct: 'Well done. You expanded the name, named the agent and kept the inference.',
        incorrect: 'Item 1: add the relative pronoun and verb. Item 2: use an active verb. Item 3: use a modal that shows a strong conclusion.',
      },
    },
    {
      id: 'abraham-b2-language-30-production',
      type: 'reflection',
      title: 'Write from Sign to Settlement',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a discovery that changes what people do next. Include one action with an immediate result, one purpose phrase with “to...”, one future-in-view statement with “will”, one continuing-present expression such as “still/to this day”, one later-time marker such as “not long after/later”, one past-perfect background sentence, and one clearly marked inference from observable evidence using “could mean / suggested / indicated”. Do not present the inference as if it were the original observation.',
      question: 'Can you connect action, purpose, time shifts, evidence and inference in one coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should move coherently from an initiating event through purpose and time shifts to an evidence-based inference that motivates a later action.',
      feedback: {
        correct: 'Check that your paragraph separates what happened, what was intended, what continues, what had happened earlier, and what was inferred.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Trigger — What event creates an immediate visible change?', mode: 'Individual' },
        { question: 'Purpose — What does someone do in response, and why?', mode: 'Pair' },
        { question: 'Evidence — What can later observers actually see?', mode: 'Pair' },
        {
          question: 'Inference — What conclusion do they draw, and which phrase makes it clear that this is an inference?',
          mode: 'Individual',
        },
      ],
    },
  ],
};

/** Chapter 31 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter31: Record<number, Exercise[]> = {
  31: [
    {
      id: 'abraham-b2-language-31-time-development',
      type: 'matching',
      title: 'Reading the Verses',
      instructions: 'Match each part of the verses in Chapter 31 (Surah Sâffât: 101–102) with its meaning.',
      question: 'How do the verses move from good news to a dream, a question and an answer?',
      matchingHeadings: { left: 'From the verses', right: 'Meaning' },
      matchingPairs: [
        { left: 'the glad tidings of a forbearing boy', right: 'good news of a gentle, calm son' },
        {
          left: 'when he (his son) was old enough to walk with him',
          right: 'when the boy had grown up enough to go about with his father',
        },
        { left: 'so look what do you think', right: 'Abraham asks for his son’s opinion' },
        { left: 'Do that which you are commanded', right: 'Ishmael tells his father to obey the order' },
        { left: 'you shall find me of the patient', right: 'Ishmael promises to endure it' },
      ],
      correctAnswer: {
        'the glad tidings of a forbearing boy': 'good news of a gentle, calm son',
        'when he (his son) was old enough to walk with him': 'when the boy had grown up enough to go about with his father',
        'so look what do you think': 'Abraham asks for his son’s opinion',
        'Do that which you are commanded': 'Ishmael tells his father to obey the order',
        'you shall find me of the patient': 'Ishmael promises to endure it',
      },
      explanation: '“Glad tidings” means good news, and “forbearing” means patient and gentle. “Old enough to …” marks a stage of growth. In the dialogue, Abraham first tells his dream and then asks for his son’s view; Ishmael answers with an instruction to obey and a promise of patience, which he qualifies with “if Allah wills”.',
      feedback: {
        correct: 'Correct. You followed the verses from good news to consultation and commitment.',
        incorrect: 'Read the verses at the end of Chapter 31. Who speaks each line, and is it news, a time, a question, an instruction or a promise?',
      },
    },
    {
      id: 'abraham-b2-language-31-command-framing',
      type: 'transformation',
      title: 'Growing Up and Obligation',
      instructions: 'Rewrite each sentence from Chapter 31 with the words given. Keep the meaning.',
      question: 'How can background growth and a reported obligation be expressed in another way?',
      transformItems: [
        {
          source: 'Growing up among the Jurham tribe, Ishmael married the daughter of one of their leaders.',
          frame: '[blank] among the Jurham tribe, Ishmael married the daughter of one of their leaders.',
          answers: [
            'As he grew up',
            'While he was growing up',
            'While growing up',
            'Having grown up',
            'After he grew up',
            'After growing up',
            'As he was growing up',
            'After he had grown up',
          ],
        },
        {
          source: 'In a dream, Abraham (pbuh) learnt that he must sacrifice his son.',
          frame: 'In a dream, Abraham (pbuh) learnt that he [blank] sacrifice his son.',
          answers: ['had to'],
        },
      ],
      correctAnswer: null,
      explanation: 'The participle clause “Growing up among the Jurham tribe” gives background: it can be expanded into a time clause with “as”, “while” or “after”. In reported speech, “must” for obligation often becomes “had to” in the past; the chapter keeps “must” to stress how strong the command was.',
      feedback: {
        correct: 'Well done. You expanded the background and reported the obligation.',
        incorrect: 'Item 1: turn “Growing up” into a clause with a subject and a verb. Item 2: give the past form of “must” for obligation.',
      },
    },
    {
      id: 'abraham-b2-language-31-speech-functions',
      type: 'multiple-choice',
      title: 'Looking Ahead from the Dream',
      instructions: 'Read the sentence from Chapter 31. Then choose the best explanation.',
      question: '“Abraham (pbuh) had a dream that he sacrificed his son, which was to be the ultimate test of his faith.” What does “was to be” express?',
      options: [
        'What the dream would turn out to be, seen from the time of the dream.',
        'An obligation that Abraham felt towards his son.',
        'Something that was planned but did not happen.',
        'A habit that Abraham had in the past.',
      ],
      correctAnswer: 0,
      explanation: '“Was/were to be” is a formal way to look ahead from a past moment to what was destined to happen. The narrator tells us, at the moment of the dream, that it would become the greatest test of Abraham’s faith. The relative clause “which …” adds this comment to the whole event.',
      feedback: {
        correct: 'Correct. “Was to be” looks ahead to what the dream would become.',
        incorrect: 'Is the narrator describing a feeling, a habit, or what the dream would later prove to be? Read the chapter to its end.',
      },
    },
    {
      id: 'abraham-b2-language-31-production',
      type: 'reflection',
      title: 'Build a Consultation under Pressure',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a difficult responsibility discussed between two people. Include one background-growth expression, one turning-point sentence, one report of an obligation or instruction, one direct question inviting the other person’s view, one response that accepts or challenges the obligation with a reason, and one future-oriented commitment qualified by uncertainty or dependence such as “if possible”, “if all goes well”, or “God willing”. Keep obligation, consultation and personal choice clearly distinct.',
      question: 'Can you build a coherent B2 exchange in which responsibility is reported, discussed and responded to rather than simply announced?',
      correctAnswer: null,
      explanation: 'A strong response should move from background to a turning point, distinguish obligation from preference, and use consultation language to develop the interaction.',
      feedback: {
        correct: 'Check that your paragraph separates background, obligation, consultation, response and future commitment.',
        incorrect: '',
      },
      discussionPrompts: [
        {
          question: 'Background — What had developed before the difficult responsibility appeared?',
          mode: 'Individual',
        },
        {
          question: 'Obligation — How will you show that a responsibility comes from a rule, role or instruction rather than preference?',
          mode: 'Pair',
        },
        { question: 'Consultation — What direct question genuinely invites another viewpoint?', mode: 'Pair' },
        {
          question: 'Commitment — How can the response show willingness without pretending complete control over the future?',
          mode: 'Individual',
        },
      ],
    },
  ],
};

/** Chapter 32 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter32: Record<number, Exercise[]> = {
  32: [
    {
      id: 'abraham-b2-language-32-time-pressure',
      type: 'multiple-choice',
      title: 'The Last Moment',
      instructions: 'Read the sentence from Chapter 32. Then choose the best explanation.',
      question: '“A voice stopped Abraham (pbuh) just as his knife was about to near Ishmael …” What does “was about to” show?',
      options: [
        'The action was going to happen in the next moment, but it had not happened yet.',
        'The knife had already touched Ishmael.',
        'The action was planned for a later day.',
        'The knife stayed near Ishmael for a long time.',
      ],
      correctAnswer: 0,
      explanation: '“Be about to + verb” describes something that is going to happen very soon. With “just as”, it marks the exact moment of the interruption: the voice came before the knife reached Ishmael. This timing creates the tension of the chapter.',
      feedback: {
        correct: 'Correct. “Was about to” marks the moment just before the action.',
        incorrect: 'Did the knife reach Ishmael? What stopped Abraham, and when? Read the sentence again with “just as”.',
      },
    },
    {
      id: 'abraham-b2-language-32-test-fulfilment',
      type: 'word-bank',
      title: 'Promise, Consequence and Limit',
      instructions: 'Complete the lines from Chapter 32 with words from the bank. Three options are not needed.',
      question: 'Which words show a promise, a consequence and the real nature of the event?',
      fillBlanksText: 'The Allah-fearing son of a faithful father promised [blank] Allah. … [blank] this, Allah made him the leader of humanity and brought Messengers from his children. … It was [blank] a test; the substitute was a ram or goat.',
      wordBank: ['to obey', 'Because of', 'only', 'obeying', 'Because', 'even'],
      correctAnswer: ['to obey', 'Because of', 'only'],
      explanation: '“Promise” is followed by to + verb (“promised to obey”). “Because of” is followed by a noun or pronoun (this); “because” needs a full clause. “Only” limits the event: it was a test, not a real sacrifice, as the substitute animal shows. “Even” would suggest something surprising, not a limit.',
      feedback: {
        correct: 'Correct. You showed the promise, the consequence and the limit.',
        incorrect: 'Ask: which form follows “promised”? Is “this” a noun or a clause? Which word limits the event to a test? Check Chapter 32.',
      },
    },
    {
      id: 'abraham-b2-language-32-reformulation',
      type: 'sentence-building',
      title: 'Build the Evaluation',
      instructions: 'Tap the pieces to rebuild this sentence from Chapter 32.',
      question: 'How does the narrator evaluate what Abraham showed?',
      sentenceChunks: [
        'Here,',
        'Abraham (pbuh) showed',
        'his willingness',
        'to sacrifice',
        'all his belongings',
        'for Allah.',
      ],
      correctAnswer: null,
      explanation: 'The noun “willingness” is followed by to + verb (willingness to sacrifice), just like the adjective “willing to”. “Here” points back to the scene just told. The sentence turns the event into an evaluation, which the next sentence links to its consequence with “Because of this”.',
      feedback: {
        correct: 'Well done. The noun “willingness” is followed by what he was willing to do.',
        incorrect: 'Start with “Here,” and the subject. Then say what he showed, and follow “willingness” with to + verb.',
      },
    },
    {
      id: 'abraham-b2-language-32-production',
      type: 'reflection',
      title: 'Write a Turning-Point Evaluation',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a difficult test, inspection, trial, or responsibility that reaches a critical point and is then reassessed. Include one “when” clause to frame a decisive moment, one “was about to” expression for an imminent action, one interruption or reversal, one sentence that explicitly evaluates what the event proved, one cause/result connector such as “because of this” or “therefore”, and one final sentence that limits or corrects a possible misunderstanding with “only”, “rather than”, or “not... but...”.',
      question: 'Can you move from event sequence to B2-level interpretation without confusing what happened with what the event demonstrated?',
      correctAnswer: null,
      explanation: 'A strong response should separate event timing, interruption, evaluation and consequence, then use a final limiting expression to prevent overstatement.',
      feedback: {
        correct: 'Check that your paragraph distinguishes the event itself from what it proves or leads to.',
        incorrect: '',
      },
      discussionPrompts: [
        {
          question: 'Timing — Which event was already happening, and what was just about to happen?',
          mode: 'Individual',
        },
        { question: 'Reversal — What interrupted the expected result?', mode: 'Pair' },
        { question: 'Evaluation — What did the event demonstrate, rather than merely what happened?', mode: 'Pair' },
        { question: 'Boundary — Which final sentence prevents an exaggerated interpretation?', mode: 'Individual' },
      ],
    },
  ],
};

/** Chapter 33 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter33: Record<number, Exercise[]> = {
  33: [
    {
      id: 'abraham-b2-language-33-contrast-history',
      type: 'drag-drop',
      title: 'Then or Now?',
      instructions: 'Sort the parts of Chapter 33. Is the claim limited to Abraham’s time and people, or is it about today?',
      question: 'How does the chapter limit its claims to a time and a group?',
      dragDropGroups: [
        {
          group: 'Limited to Abraham’s time',
          items: [
            'At Abraham (pbuh)’s time, the practice of sacrificing the firstborn children was quite widespread in Arabia, Palestine, and Egypt.',
            'In Abraham (pbuh)’s religion, animal sacrifice was equivalent to human life …',
            '… for the people of that era, it meant safety, especially for children.',
          ],
        },
        {
          group: 'About today',
          items: [
            'Every year, hundreds of millions of Muslims perform this act of trust in Allah during the days of Hajj.',
            'This day is called "The Day of Sacrifice" …',
          ],
        },
      ],
      correctAnswer: {
        'Limited to Abraham’s time': [
          'At Abraham (pbuh)’s time, the practice of sacrificing the firstborn children was quite widespread in Arabia, Palestine, and Egypt.',
          'In Abraham (pbuh)’s religion, animal sacrifice was equivalent to human life …',
          '… for the people of that era, it meant safety, especially for children.',
        ],
        'About today': [
          'Every year, hundreds of millions of Muslims perform this act of trust in Allah during the days of Hajj.',
          'This day is called "The Day of Sacrifice" …',
        ],
      },
      explanation: 'Time frames limit a claim: “At Abraham’s time”, “In Abraham’s religion”, “for the people of that era”. With these phrases and the past tense, the chapter does not claim that these ideas are true for all times. The present simple with “Every year” describes a practice that continues today.',
      feedback: {
        correct: 'Correct. You separated the claims limited to that era from the present-day practice.',
        incorrect: 'Look for time frames (At Abraham’s time, that era) and the tense of the verb. Present simple with “Every year” describes today.',
      },
    },
    {
      id: 'abraham-b2-language-33-equivalence-reframing',
      type: 'transformation',
      title: 'Contrast and Plan',
      instructions: 'Rewrite each sentence from Chapter 33 with the words given. Keep the meaning.',
      question: 'How can a contrast and a plan seen from the past be expressed in another way?',
      transformItems: [
        {
          source: 'Prophets before him also sacrificed animals, while idolaters sacrificed humans.',
          frame: '[blank] prophets before him also sacrificed animals, idolaters sacrificed humans.',
          answers: ['Whereas', 'While'],
        },
        {
          source: 'This time, they were going to build the honored House of Allah …',
          frame: 'This time, their plan was [blank] the honored House of Allah …',
          answers: ['to build'],
        },
      ],
      correctAnswer: null,
      explanation: '“While” and “whereas” set two different practices side by side, and the contrast clause can come first or second. “Were going to” is the future seen from the past: at the moment of the reunion, building the House of Allah was the plan ahead of them.',
      feedback: {
        correct: 'Well done. You moved the contrast word and kept the plan.',
        incorrect: 'Item 1: use a contrast word at the start. Item 2: “were going to build” describes a plan; complete “their plan was …”.',
      },
    },
    {
      id: 'abraham-b2-language-33-time-reunion-purpose',
      type: 'matching',
      title: 'Words of Practice and Reunion',
      instructions: 'Match each expression from Chapter 33 with its meaning.',
      question: 'Which expressions describe the old practices and the reunion?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'quite widespread', right: 'fairly common in many places' },
        { left: 'equivalent to', right: 'of the same value as' },
        { left: 'embraced each other', right: 'held one another in their arms' },
        { left: 'with longing', right: 'with a strong wish to be together again' },
      ],
      correctAnswer: {
        'quite widespread': 'fairly common in many places',
        'equivalent to': 'of the same value as',
        'embraced each other': 'held one another in their arms',
        'with longing': 'with a strong wish to be together again',
      },
      explanation: '“Quite” before an adjective often means “fairly”. “Equivalent to” compares value, and in the chapter it is limited to Abraham’s religion and era. “Each other” shows a two-way action: father and son embraced each other. “Longing” is a strong wish for someone you have missed.',
      feedback: {
        correct: 'Correct. You matched each expression with its meaning.',
        incorrect: 'Find each expression in Chapter 33: two are about old practices, and two are about the reunion of father and son.',
      },
    },
    {
      id: 'abraham-b2-language-33-production',
      type: 'reflection',
      title: 'Write a Historically Framed Contrast',
      instructions: 'Write or say an 8–10 sentence non-story paragraph comparing two practices, policies, or traditions across time. Use one explicit historical time frame, one “in fact” or similar clarification, one “while” contrast, one sentence that limits a claim to people or conditions of that period, one past-background expression such as “after several years”, and one future-in-the-past form such as “was/were going to” to show a later plan from that past viewpoint.',
      question: 'Can you compare historical practices and later developments without turning time-bound claims into universal statements?',
      correctAnswer: null,
      explanation: 'A strong B2 response should distinguish historical context, contrast, clarification and later intention while keeping claims within their proper scope.',
      feedback: { correct: 'Check that each claim is tied to its time, group or context where necessary.', incorrect: '' },
      discussionPrompts: [
        { question: 'Scope — Which claim is limited to a specific period or group?', mode: 'Individual' },
        {
          question: 'Contrast — Which two practices are compared with “while” or an equivalent linker?',
          mode: 'Pair',
        },
        {
          question: 'Clarification — What possible misunderstanding does your “in fact” sentence correct?',
          mode: 'Pair',
        },
        { question: 'Viewpoint — What later plan do you describe from the earlier past moment?', mode: 'Individual' },
      ],
    },
  ],
};

/** Chapter 34 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter34: Record<number, Exercise[]> = {
  34: [
    {
      id: 'abraham-b2-language-34-command-commitment',
      type: 'multiple-choice',
      title: 'A Request, Not an Order',
      instructions: 'Read the prayer at the end of Chapter 34 (Surah Baqarah: 127). Then choose the best explanation.',
      question: '“O our Lord! Accept this service from us; verily You are the All Hearer, the All Knower.” What does the imperative “Accept” do here?',
      options: [
        'It is a humble request made in prayer.',
        'It is an order given to an equal.',
        'It states that the service has already been accepted.',
        'It is an instruction from Abraham to Ishmael.',
      ],
      correctAnswer: 0,
      explanation: 'The imperative form is not always an order. Addressed to Allah (“O our Lord!”), it is a humble request, a prayer. “From us” shows that father and son pray together, and “verily You are the All Hearer, the All Knower” gives the reason for their hope: Allah hears and knows.',
      feedback: {
        correct: 'Correct. In a prayer, the imperative is a humble request.',
        incorrect: 'Who is being addressed with “O our Lord!”? Can the speakers give orders to Him?',
      },
    },
    {
      id: 'abraham-b2-language-34-height-change',
      type: 'transformation',
      title: 'Reporting the Dialogue',
      instructions: 'Report what Abraham and Ishmael said in Chapter 34. Complete each sentence.',
      question: 'How do the tenses change when the dialogue is reported?',
      transformItems: [
        {
          source: 'Abraham (pbuh) said to Ishmael: “O Ishmael, Allah has commanded me to do an important task, and you will help me in this task.”',
          frame: 'Abraham told Ishmael that Allah [blank] him to do an important task.',
          answers: ['had commanded'],
        },
        {
          source: 'Ishmael replied, “I will help you for sure.”',
          frame: 'Ishmael replied that he [blank] him for sure.',
          answers: ['would help'],
        },
      ],
      correctAnswer: null,
      explanation: 'In direct speech, the present perfect “has commanded” shows that the command is still relevant when Abraham speaks, and “will” shows commitment. In reported speech after a past verb, the tenses move back: has commanded → had commanded, will help → would help.',
      feedback: {
        correct: 'Well done. You moved the tenses back correctly.',
        incorrect: 'Move each tense one step back: present perfect → past perfect, will → would. Check the dialogue in Chapter 34.',
      },
    },
    {
      id: 'abraham-b2-language-34-coordination-prayer',
      type: 'choose-form',
      title: 'Building Together',
      instructions: 'Choose the correct form to complete each sentence from Chapter 34.',
      question: 'Which forms show where they built, what changed and what continued?',
      formChoices: [
        {
          options: ['on', 'in', 'at'],
          sentence: 'Father and son found the foundations of the old structure and began to build the Ka‘ba [choice] it.',
          answer: 0,
        },
        {
          options: ['no longer', 'not longer', 'any longer'],
          sentence: 'When the building became high and the old man Abraham (pbuh) could [choice] lift the stones to such a high position, he stood over the stone of Al-Maqam …',
          answer: 0,
        },
        {
          options: ['handing', 'hand', 'handed'],
          sentence: '… and Ishmael carried on [choice] him the stones …',
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'A building goes “on” its foundations. “No longer” shows that an earlier ability has stopped (“any longer” needs a negative verb: could not … any longer). “Carry on + -ing” means continue an activity: Ishmael kept handing him the stones while Abraham built.',
      feedback: {
        correct: 'Correct. You chose the right preposition, the change and the continuing action.',
        incorrect: 'Ask: where does a building stand? Which phrase means “not any more” with a positive verb? Which form follows “carry on”?',
      },
    },
    {
      id: 'abraham-b2-language-34-production',
      type: 'reflection',
      title: 'Write a Shared-Task Sequence',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about two people completing a demanding shared task. Include one present-relevance form such as “has asked/has required”, one future commitment with “will”, one reported instruction, one change expressed through “no longer”, one continuing parallel action, one cause→adaptation link, and one final respectful request or appeal.',
      question: 'Can you show how a task moves from instruction to commitment, difficulty, adaptation and coordinated completion?',
      correctAnswer: null,
      explanation: 'A strong B2 response should organize time, stance and coordinated action across a coherent paragraph rather than as isolated grammar examples.',
      feedback: {
        correct: 'Check that your forms create a clear progression from instruction to shared action and adaptation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Commitment — Which sentence changes a plan into a personal promise?', mode: 'Individual' },
        { question: 'Change — Where does “no longer” mark a new limitation or situation?', mode: 'Pair' },
        { question: 'Coordination — Which two actions continue at the same time?', mode: 'Pair' },
        {
          question: 'Function — Is your final imperative a command, request, invitation or appeal?',
          mode: 'Individual',
        },
      ],
    },
  ],
};

/** Chapter 35 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter35: Record<number, Exercise[]> = {
  35: [
    {
      id: 'abraham-b2-language-35-restoration-scope',
      type: 'matching',
      title: 'Careful Claims About a Legacy',
      instructions: 'Match each expression from Chapter 35 with its meaning.',
      question: 'How does the chapter describe Abraham’s legacy without overstating it?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'was but the restorer of the structure', right: 'only rebuilt something that already existed' },
        { left: 'the completion of Abraham (pbuh)’s mission', right: 'the final stage of what he was sent to do' },
        { left: 'not just people of a chosen race or color', right: 'nobody excluded because of their origin' },
        { left: 'coexisted with idolatry', right: 'lived side by side with the worship of idols' },
      ],
      correctAnswer: {
        'was but the restorer of the structure': 'only rebuilt something that already existed',
        'the completion of Abraham (pbuh)’s mission': 'the final stage of what he was sent to do',
        'not just people of a chosen race or color': 'nobody excluded because of their origin',
        'coexisted with idolatry': 'lived side by side with the worship of idols',
      },
      explanation: '“But” can mean “only” (was but the restorer = was only the restorer): it limits the claim, because the Ka‘ba “was originally built long before”. “Not just X” widens the scope to everyone. The prefix co- in “coexisted” means “together”: the two beliefs were present in the same region at the same time.',
      feedback: {
        correct: 'Correct. You read the limiting, widening and coexistence expressions.',
        incorrect: 'Find each expression in Chapter 35. Which one limits Abraham’s role, which widens who the Ka‘ba is for, and which shows two things existing together?',
      },
    },
    {
      id: 'abraham-b2-language-35-evidence-interpretation',
      type: 'multiple-choice',
      title: 'How Far Does the Evidence Go?',
      instructions: 'Read the sentence from Chapter 35. Then choose the statement that keeps its scope.',
      question: '“Reconstruction of the Ka‘ba and the call to pilgrimage (see Surah Hajj: 27) are clear evidence that Prophet Abraham (pbuh) established the religion and invited those living in that region at that time to embrace it.” Which statement keeps the scope of this claim?',
      options: [
        'The reconstruction and the call to pilgrimage are presented as evidence of Abraham’s mission in that region at that time.',
        'They prove that everyone in the region accepted Abraham’s religion.',
        'They prove that Abraham built the first Ka‘ba.',
        'The chapter says there is no evidence for Abraham’s mission.',
      ],
      correctAnswer: 0,
      explanation: 'The claim is limited in place and time: “those living in that region at that time”. It says Abraham invited people, not that everyone accepted. The chapter also calls Abraham “the restorer” of an older structure, so the evidence does not show he built the first Ka‘ba.',
      feedback: {
        correct: 'Correct. This statement keeps the limits of place, time and invitation.',
        incorrect: 'Check the limits in the sentence: which region, which time, and did people accept or were they invited? Also compare the first sentence of the chapter.',
      },
    },
    {
      id: 'abraham-b2-language-35-coexistence-continuity',
      type: 'error-correction',
      title: 'A Lasting Guide',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct the tense that links the past to now and the relative word for a situation?',
      errorItems: [
        {
          options: ['has always been', 'always is', 'had always been'],
          sentence: 'When people have lost their way and are looking for salvation, Abraham (pbuh) always was there to show them the right path.',
          error: 'always was',
          answer: 0,
        },
        {
          options: ['where', 'that', 'what'],
          sentence: 'This is especially true in societies which morals have worsened and the real path that Allah showed them has been corrupted.',
          error: 'which',
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'The present perfect “has always been” connects the past with the present: Abraham’s example has guided people in every period up to now. The past simple would end the connection in the past. “Where” (= in which) links the claim to societies as situations; “especially” narrows the general claim to these cases.',
      feedback: {
        correct: 'Well done. You corrected the time link and the relative word.',
        incorrect: 'Does the guidance stop in the past or continue until now? Which relative word means “in which”? Check the last paragraph of Chapter 35.',
      },
    },
    {
      id: 'abraham-b2-language-35-production',
      type: 'reflection',
      title: 'Write a Qualified Legacy Paragraph',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about the legacy of a historical institution, idea, or reform. Include one phrase that limits an overstrong claim, one evidence → interpretation link, one “not just ...” scope contrast, one coexistence statement, one recurring condition with “when/whenever”, and one form showing continuing relevance such as “has remained / has continued / has served”.',
      question: 'Can you explain a legacy without turning interpretation into certainty or reducing it to a list of past events?',
      correctAnswer: null,
      explanation: 'A strong B2 response should distinguish event, evidence, interpretation, scope, coexistence and continuing relevance across a coherent paragraph.',
      feedback: {
        correct: 'Check that your paragraph moves from evidence to a qualified interpretation and then explains why the legacy still matters.',
        incorrect: '',
      },
      discussionPrompts: [
        {
          question: 'Qualification — Which sentence prevents your historical claim from becoming too strong?',
          mode: 'Individual',
        },
        { question: 'Evidence — What observation or event supports your interpretation?', mode: 'Pair' },
        { question: 'Scope — Where do you widen or narrow who, where, or when the claim applies to?', mode: 'Pair' },
        { question: 'Continuity — Which form connects the past with continuing relevance?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusPart3: Record<number, Exercise[]> = {
  ...abrahamB2LanguageFocusChapter19,
  ...abrahamB2LanguageFocusChapter20,
  ...abrahamB2LanguageFocusChapter21,
  ...abrahamB2LanguageFocusChapter22,
  ...abrahamB2LanguageFocusChapter23,
  ...abrahamB2LanguageFocusChapter24,
  ...abrahamB2LanguageFocusChapter25,
  ...abrahamB2LanguageFocusChapter26,
  ...abrahamB2LanguageFocusChapter27,
  ...abrahamB2LanguageFocusChapter28,
  ...abrahamB2LanguageFocusChapter29,
  ...abrahamB2LanguageFocusChapter30,
  ...abrahamB2LanguageFocusChapter31,
  ...abrahamB2LanguageFocusChapter32,
  ...abrahamB2LanguageFocusChapter33,
  ...abrahamB2LanguageFocusChapter34,
  ...abrahamB2LanguageFocusChapter35,
};
