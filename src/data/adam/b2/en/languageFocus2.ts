import type { Exercise } from '../../../../types';

/** Adam B2 English Language Focus — Chapters 7–12. */

export const adamB2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  7: [
    {
      id: 'adam-b2-language-7-general-tendency',
      type: 'drag-drop',
      title: 'People in General or This Story?',
      instructions: 'Read the parts of Chapter 7 below. Is each one true of people in general, or is it one event in this story? Sort them.',
      question: 'How does the chapter move between a general truth about people and the events of Adam’s story?',
      dragDropGroups: [
        {
          group: 'True of people in general',
          items: [
            'man tends to forget',
            'His heart changes',
            'his determination weakens',
          ],
        },
        {
          group: 'One event in this story',
          items: [
            'He took advantage of Adam (pbuh)’s humanity to manipulate him.',
            'Then one day, they decided to eat of its fruit.',
            'They both ate of the forbidden tree.',
          ],
        },
      ],
      correctAnswer: {
        'True of people in general': [
          'man tends to forget',
          'His heart changes',
          'his determination weakens',
        ],
        'One event in this story': [
          'He took advantage of Adam (pbuh)’s humanity to manipulate him.',
          'Then one day, they decided to eat of its fruit.',
          'They both ate of the forbidden tree.',
        ],
      },
      explanation: 'In a past-tense story, a sudden present simple (“man tends to forget”, “His heart changes”, “his determination weakens”) signals a general truth: what is true of human beings at any time. The past simple returns to particular events. The writer uses the general truth to explain why the particular events could happen.',
      feedback: {
        correct: 'Correct. The present simple gives the general truth; the past simple tells the events.',
        incorrect: 'Look at the verb tense in each part. In a story told in the past, which verbs suddenly move into the present, and why? Check the first paragraph of Chapter 7.',
      },
    },
    {
      id: 'adam-b2-language-7-cause-purpose-chain',
      type: 'transformation',
      title: 'Participle and Inversion',
      instructions: 'Complete each new sentence so that it keeps the meaning of the Chapter 7 sentence. Write only the missing words.',
      question: 'Can you expand a participle clause and turn “as soon as” into “no sooner … than”?',
      transformItems: [
        {
          source: 'He started to whisper to them day after day, trying to persuade both …',
          frame: 'He started to whisper to them day after day, and he [blank] persuade both.',
          answers: ['was trying to', 'tried to', 'kept trying to'],
        },
        {
          source: 'As soon as Adam (pbuh) had finished eating, he felt his heart tighten and fill with pain, sadness, and shame.',
          frame: 'No sooner [blank] eating than he felt his heart tighten and fill with pain, sadness, and shame.',
          answers: ['had Adam (pbuh) finished', 'had Adam finished', 'had he finished'],
        },
      ],
      correctAnswer: null,
      explanation: 'A participle clause (“…, trying to persuade both”) adds an action that goes on at the same time as the main one; in full, it is “and he was trying to persuade both”. “As soon as + past perfect” and “No sooner + had + subject + past participle … than …” both show that one event follows another immediately. After “No sooner” at the start, the subject and auxiliary change places.',
      feedback: {
        correct: 'Well done. You expanded the participle and used inversion correctly.',
        incorrect: 'Item 1: show an action in progress. Item 2: after “No sooner”, put had before the subject, then the past participle.',
      },
    },
    {
      id: 'adam-b2-language-7-possibility-condition-time',
      type: 'choose-form',
      title: 'Condition, Possibility, Earlier Past',
      instructions: 'Choose the correct form to complete each sentence from Chapter 7.',
      question: 'Which forms show an imagined condition, an uncertain possibility and an earlier past event?',
      formChoices: [
        {
          sentence: 'Adam (pbuh) started to ask himself: “What will happen if I [choice] from this tree?',
          options: ['will eat', 'eat', 'ate'],
          answer: 1,
        },
        {
          sentence: 'It [choice] truly be the Tree of Immortality.”',
          options: ['must', 'has to', 'might'],
          answer: 2,
        },
        {
          sentence: 'They forgot that Allah [choice] them not to approach it and that Iblis was their bitter enemy.',
          options: ['had warned', 'has warned', 'was warning'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'In a real (first) conditional, the if-clause uses the present simple, not “will”: “What will happen if I eat …?”. “Might” shows that Adam is not sure; “must” and “has to” would show certainty, which does not fit a man asking himself questions. The past perfect “had warned” places the warning before the moment they forgot it.',
      feedback: {
        correct: 'Correct. You chose the forms for condition, uncertainty and the earlier past.',
        incorrect: 'Ask: is it an if-clause, is Adam sure or unsure, and which event happened first? Then check the second paragraph of Chapter 7.',
      },
    },
    {
      id: 'adam-b2-language-7-production',
      type: 'reflection',
      title: 'Write a Vulnerability–Decision–Consequence Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a person who is gradually persuaded into a poor decision. Do not retell Adam and Eve eating from the tree. Begin with one general human tendency in the present simple, explain a motive with “because”, add a purpose phrase with “to + verb”, include one imagined condition with “if” and one uncertain possibility with “might”, then use past perfect and “as soon as” to make the final consequence sequence clear.',
      question: 'Can you organise vulnerability, persuasion, uncertainty, decision and consequence through grammar rather than a list of events?',
      correctAnswer: null,
      explanation: 'A strong response moves from a general tendency to a specific situation, makes motive and purpose explicit, preserves uncertainty before the decision and then clarifies sequence.',
      feedback: { correct: 'Keep the structure visible: tendency → motive/purpose → possibility → decision → consequence.', incorrect: '' },
      discussionPrompts: [
        { question: 'Generality — Open with a present-simple statement about a recurring human tendency.', mode: 'Individual' },
        { question: 'Motive and purpose — Explain why someone acts and what they hope to achieve.', mode: 'Individual' },
        { question: 'Uncertainty — Use “if” and “might” before the decision.', mode: 'Individual' },
        { question: 'Narrative time — Use past perfect plus “as soon as” to make the final sequence precise.', mode: 'Pair' },
      ],
    },
  ],
  8: [
    {
      id: 'adam-b2-language-8-sequence-result',
      type: 'matching',
      title: 'What Is Each Line Doing?',
      instructions: 'Match each line of dialogue in Chapter 8 with what it does. The questions are not asking for new information.',
      question: 'What do the questions and replies do in this dialogue?',
      matchingHeadings: { left: 'From the chapter', right: 'What it does' },
      matchingPairs: [
        { left: 'Did I not forbid you from this tree, and say to you that Satan is a clear enemy to you?', right: 'reminds them of a warning they already knew' },
        { left: 'Are you running away from Me?', right: 'asks what Adam’s reaction means' },
        { left: 'No, my Lord, but I am shy of You.', right: 'rejects one explanation and gives the real one' },
        { left: 'Forgiveness! Forgiveness!', right: 'a short, urgent cry for mercy' },
      ],
      correctAnswer: {
        'Did I not forbid you from this tree, and say to you that Satan is a clear enemy to you?': 'reminds them of a warning they already knew',
        'Are you running away from Me?': 'asks what Adam’s reaction means',
        'No, my Lord, but I am shy of You.': 'rejects one explanation and gives the real one',
        'Forgiveness! Forgiveness!': 'a short, urgent cry for mercy',
      },
      explanation: 'A negative question such as “Did I not …?” expects the answer “yes” and reminds the listener of something already known. “Are you running away …?” tests what an action means. The reply “No, …, but …” rejects one interpretation and replaces it. Repeating one word turns it into an urgent plea.',
      feedback: {
        correct: 'Correct. You read each line for what it does, not only for what it says.',
        incorrect: 'Ask whether the speaker already knows the answer. Then look at the “No … but …” pattern in Adam’s reply in Chapter 8.',
      },
    },
    {
      id: 'adam-b2-language-8-dialogue-function',
      type: 'word-bank',
      title: 'Time, Result and Reason',
      instructions: 'Complete the narrator’s lines from Chapter 8 with words from the bank. Three words are not needed.',
      question: 'Which linkers connect the moment of discovery, the response and the reason for it?',
      fillBlanksText: '[blank] they tasted the fruit, their private parts became visible to them. Adam (pbuh) discovered that he and his wife were unclad, [blank] they both started cutting tree leaves in Paradise with which to cover themselves. They were in haste to hide their private parts, [blank] the sense of shame (hayâ) is inborn human nature and nakedness is contrary to human nature.',
      wordBank: ['When', 'so', 'because', 'Although', 'unless', 'but'],
      correctAnswer: ['When', 'so', 'because'],
      explanation: '“When” sets the time point that starts the chain. “So” introduces the result of the discovery: they began to cover themselves. “Because” gives the reason for their haste: shame is part of human nature. The chain moves time → result → reason.',
      feedback: {
        correct: 'Correct. The paragraph now moves from time to result to reason.',
        incorrect: 'Ask what each gap introduces: the moment something happened, what they did as a result, or why they hurried. Check the second paragraph of Chapter 8.',
      },
    },
    {
      id: 'adam-b2-language-8-source-boundaries',
      type: 'drag-drop',
      title: 'Text or Interpretation?',
      instructions: 'Read the parts of Chapter 8 below. Sort them: does each part report what the Qur’an says (or does not say), or does it give an interpretation added by others?',
      question: 'How does the last paragraph keep the Qur’anic text separate from later explanation?',
      dragDropGroups: [
        {
          group: 'What the Qur’an says or does not say',
          items: [
            '“So he (Satan) made them (Adam (pbuh) and Eve) fall through deception.',
            'This tree is not described in the Holy Qur\'an.',
            'It is only mentioned that Satan deceived Adam (pbuh) and Eve.',
          ],
        },
        {
          group: 'An interpretation added by others',
          items: [
            'According to Islamic scholars, this incident happened while Adam (pbuh) was in Paradise',
            'that is, before he became a prophet',
          ],
        },
      ],
      correctAnswer: {
        'What the Qur’an says or does not say': [
          '“So he (Satan) made them (Adam (pbuh) and Eve) fall through deception.',
          'This tree is not described in the Holy Qur\'an.',
          'It is only mentioned that Satan deceived Adam (pbuh) and Eve.',
        ],
        'An interpretation added by others': [
          'According to Islamic scholars, this incident happened while Adam (pbuh) was in Paradise',
          'that is, before he became a prophet',
        ],
      },
      explanation: 'The writer marks the source of each claim. The quoted verse and the sentences “is not described …” and “It is only mentioned that …” report what the Qur’an contains and what it leaves out. “According to Islamic scholars” attributes the timing to scholars, and “that is, …” explains that same interpretation. A careful reader does not present the scholars’ view as words of the Qur’an.',
      feedback: {
        correct: 'Correct. You kept the text separate from the interpretation.',
        incorrect: 'Look for source markers: a quotation, “not described in”, “only mentioned”, “According to …”. Which ones point to scholars? Check the last paragraph of Chapter 8.',
      },
    },
    {
      id: 'adam-b2-language-8-production',
      type: 'reflection',
      title: 'Write a Source-Aware Explanatory Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a historical, scientific or cultural claim you know from a source. Do not retell Chapter 8. State one detail the source explicitly gives, one detail it does not specify, and one interpretation attributed to a scholar/researcher using “according to...”. Add a clarification with “that is” or “in other words”. Include one question used to remind or challenge rather than simply request new information, then answer it with a correction pattern such as “No, ... but ...”.',
      question: 'Can you keep evidence, omission, attributed interpretation and clarification separate while still writing a coherent paragraph?',
      correctAnswer: null,
      explanation: 'A strong B2 response makes source responsibility visible, avoids turning interpretation into fact, and uses dialogue or rhetorical questioning for a clear discourse purpose.',
      feedback: {
        correct: 'Keep the evidence hierarchy clear: explicit source → unspecified detail → attributed interpretation → clarification.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Evidence — State exactly what the source says.', mode: 'Individual' },
        { question: 'Boundary — State one relevant detail the source does not specify.', mode: 'Individual' },
        { question: 'Attribution — Introduce an interpretation with “according to...”.', mode: 'Individual' },
        { question: 'Clarification — Use “that is” or “in other words” without changing the certainty of the original claim.', mode: 'Pair' },
      ],
    },
  ],
  9: [
    {
      id: 'adam-b2-language-9-cause-response',
      type: 'multiple-choice',
      title: 'What Does “Unless” Mean Here?',
      instructions: 'Read the prayer quoted in Chapter 9. Then choose the sentence that gives the meaning of its second part.',
      question: '“They said, ‘Our Lord, we have done wrong to ourselves. Unless You forgive us, and have mercy on us, we will be among the losers.’” (A’raf: 23) What does the second part mean?',
      options: [
        'Even if You forgive us and have mercy on us, we will be among the losers.',
        'Because You forgive us and have mercy on us, we will be among the losers.',
        'If You forgive us and have mercy on us, we will be among the losers.',
        'If You do not forgive us and have mercy on us, we will be among the losers.',
      ],
      correctAnswer: 3,
      explanation: '“Unless” means “if … not”. It names the only thing that can prevent the result: without forgiveness and mercy, they will be among the losers. The prayer first admits the wrong (“we have done wrong to ourselves”) and then shows complete dependence on Allah’s forgiveness.',
      feedback: {
        correct: 'Correct. “Unless” = “if … not”.',
        incorrect: 'Replace “unless” with “if … not” and read the prayer in Chapter 9 again. Which option has the same meaning?',
      },
    },
    {
      id: 'adam-b2-language-9-condition-consequence',
      type: 'transformation',
      title: 'Cause as a Noun, Agent as Subject',
      instructions: 'Complete each new sentence so that it keeps the meaning of the Chapter 9 sentence. Write only the missing words.',
      question: 'Can you express a cause with a preposition and turn a passive into an active sentence?',
      transformItems: [
        {
          source: 'His regret itself was the reason for Allah’s mercy upon him.',
          frame: 'Allah had mercy upon him [blank] his regret.',
          answers: ['because of', 'due to', 'owing to', 'on account of', 'as a result of', 'thanks to'],
        },
        {
          source: 'This unintentional mistake committed by Adam (pbuh) was forgiven by Allah upon his repentance.',
          frame: 'Allah forgave [blank] upon his repentance.',
          answers: [
            'this unintentional mistake committed by Adam (pbuh)',
            'this unintentional mistake committed by Adam',
            'this unintentional mistake that Adam (pbuh) committed',
            'this unintentional mistake that Adam committed',
            'this unintentional mistake which Adam (pbuh) committed',
            'this unintentional mistake which Adam committed',
            'this unintentional mistake Adam (pbuh) committed',
            'this unintentional mistake Adam committed',
          ],
        },
      ],
      correctAnswer: null,
      explanation: '“X was the reason for Y” makes the cause the subject; “Y because of / due to X” puts the result first and the cause after a preposition. The passive “was forgiven by Allah” keeps the mistake as the topic; the active makes Allah the subject and the mistake the object. Both versions are correct; the chapter’s choices keep attention on Adam’s regret and on his mistake.',
      feedback: {
        correct: 'Well done. You kept the cause and the agent clear.',
        incorrect: 'Item 1: use a preposition of cause before a noun. Item 2: the whole noun phrase “this unintentional mistake …” becomes the object of “forgave”.',
      },
    },
    {
      id: 'adam-b2-language-9-obligation-process',
      type: 'error-correction',
      title: 'Earlier Past, Double Negative, Modal',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct the past perfect, “neither … nor …” and the verb after “must”?',
      errorItems: [
        {
          sentence: 'Adam (pbuh) severely regretted what he has done.',
          error: 'has done',
          options: ['have done', 'was doing', 'had done'],
          answer: 2,
        },
        {
          sentence: 'At that time, there was neither a community or a congregation.',
          error: 'or',
          options: ['nor', 'and', 'either'],
          answer: 0,
        },
        {
          sentence: 'However, in order to remain an honoured human, they must to recognize their mistakes, seek the fault within themselves, and immediately turn towards Allah.',
          error: 'must to recognize',
          options: ['must recognizing', 'must recognize', 'must be recognize'],
          answer: 1,
        },
      ],
      correctAnswer: null,
      explanation: 'The mistake came before the regret, so it needs the past perfect: “what he had done”. “Neither” is always paired with “nor”. A modal such as “must” is followed by the base verb without “to”; here one “must” controls three verbs: recognize, seek and turn.',
      feedback: {
        correct: 'Well done. You corrected the time, the negative pair and the modal verb.',
        incorrect: 'Check the tense for an earlier past action, the partner of “neither”, and the form of the verb after “must”. Then read Chapter 9 again.',
      },
    },
    {
      id: 'adam-b2-language-9-production',
      type: 'reflection',
      title: 'Write a Responsibility-and-Recovery Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story situation in which a person or group makes a mistake and responds responsibly. State the mistake without hiding responsibility, use a conditional consequence, add one cause-result expression, move from what people are capable of doing to what they must do, and end with a concrete change of direction rather than only regret.',
      question: 'Can you distinguish recognition, consequence, cause, obligation and corrective action in one coherent paragraph?',
      correctAnswer: null,
      explanation: 'A strong B2 response uses grammar to organise responsibility: acknowledgment → condition/consequence → cause/result → obligation → changed action.',
      feedback: { correct: 'Make the final corrective action more concrete than simply saying someone felt sorry.', incorrect: '' },
      discussionPrompts: [
        { question: 'Acknowledgment — State what went wrong without shifting blame.', mode: 'Individual' },
        { question: 'Condition — Use “unless...” or an equivalent conditional.', mode: 'Individual' },
        { question: 'Cause/result — Explain why the response changes what happens next.', mode: 'Individual' },
        { question: 'Obligation — Move from what people can do to what they must do.', mode: 'Pair' },
      ],
    },
  ],
  10: [
    {
      id: 'adam-b2-language-10-future-viewpoint',
      type: 'drag-drop',
      title: 'Who Is the Source?',
      instructions: 'Read the reports in Chapter 10 about where Adam descended. Sort them: is a named person given as the source, or is the report given without a named source?',
      question: 'How does the chapter show where each detail comes from?',
      dragDropGroups: [
        {
          group: 'A named person is the source',
          items: [
            'Ibn Abbas, who narrated many hadiths, said: “Adam (pbuh) descended on land ‘Dihna’ between Mecca and Taif.”',
            'Ibn Umar said that Adam (pbuh) descended on As-Safa and Eve on Al-Marwa',
          ],
        },
        {
          group: 'No source is named',
          items: [
            'There are many hadiths about the place of Adam (pbuh)’s descending upon Earth.',
            'It is also reported that Adam (pbuh) descended with the Black Stone',
            'It is said to have come from Paradise.',
          ],
        },
      ],
      correctAnswer: {
        'A named person is the source': [
          'Ibn Abbas, who narrated many hadiths, said: “Adam (pbuh) descended on land ‘Dihna’ between Mecca and Taif.”',
          'Ibn Umar said that Adam (pbuh) descended on As-Safa and Eve on Al-Marwa',
        ],
        'No source is named': [
          'There are many hadiths about the place of Adam (pbuh)’s descending upon Earth.',
          'It is also reported that Adam (pbuh) descended with the Black Stone',
          'It is said to have come from Paradise.',
        ],
      },
      explanation: '“X said: …” and “X said that …” attribute a claim to a named narrator, in direct or reported speech. “It is reported that …” and “It is said to …” are impersonal passives: they pass on a report without naming who made it, and they keep some distance between the writer and the claim. When you summarise such a text, keep these frames; do not turn a reported detail into a plain fact.',
      feedback: {
        correct: 'Correct. You separated named sources from impersonal reports.',
        incorrect: 'Look for a person’s name before “said”. If there is no name, look for “It is reported” or “It is said”. Check the last three paragraphs of Chapter 10.',
      },
    },
    {
      id: 'adam-b2-language-10-corrective-framing',
      type: 'multiple-choice',
      title: 'The Future Seen from the Past',
      instructions: 'Read the first sentence of Chapter 10. Then choose the best answer.',
      question: '“Allah knew that Adam (pbuh) and Eve would eat of the tree and descend to Earth.” What does “would” show here?',
      options: [
        'something Adam and Eve used to do many times',
        'an event that was still in the future at the time Allah knew it',
        'an imagined situation that did not really happen',
        'a polite request',
      ],
      correctAnswer: 1,
      explanation: '“Would” is the past form of “will”. After a past verb such as “knew”, it looks forward from that past moment: at the time of Allah’s knowledge, eating from the tree and descending to Earth were still to come. This is called the future in the past.',
      feedback: {
        correct: 'Correct. “Would” looks forward from a moment in the past.',
        incorrect: 'Ask: at the moment described by “knew”, had Adam and Eve already eaten from the tree? Then read the first paragraph of Chapter 10.',
      },
    },
    {
      id: 'adam-b2-language-10-source-certainty',
      type: 'error-correction',
      title: 'Viewpoint, Purpose and Correction',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct the future in the past, “be meant to” and “did not + verb”?',
      errorItems: [
        {
          sentence: 'He knew that Satan will violate their innocence.',
          error: 'will violate',
          options: ['violates', 'would violate', 'has violated'],
          answer: 1,
        },
        {
          sentence: 'It was meant to teaching Adam (pbuh), Eve, and their offspring the knowledge that Satan is their enemy …',
          error: 'to teaching',
          options: ['to teach', 'for teach', 'to taught'],
          answer: 0,
        },
        {
          sentence: 'Adam (pbuh)’s descending to Earth, then, did not implied dishonour or humiliation, but rather it was an honorable and respected settlement on Earth.',
          error: 'did not implied',
          options: ['was not imply', 'did not implying', 'did not imply'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: 'After a past reporting verb (“knew”), a later event takes “would”, not “will”. “Be meant to + base verb” states the purpose something was intended to serve. After “did not”, use the base verb; the past is already shown by “did”. The last sentence uses “not X, but rather Y” to reject one interpretation and replace it with another.',
      feedback: {
        correct: 'Well done. You corrected the viewpoint, the purpose pattern and the negative.',
        incorrect: 'Check the verb after “knew”, the verb form after “meant to”, and the verb after “did not”. Then read Chapter 10 again.',
      },
    },
    {
      id: 'adam-b2-language-10-production',
      type: 'reflection',
      title: 'Write with Viewpoint, Reframing and Source Distance',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story historical or community event for which people give more than one account. Do not retell Chapter 10. Begin from a past viewpoint and use “would” at least once to refer to something that was still later at that point. Use “was meant to...” or an equivalent purpose expression. Correct one possible interpretation with “not... but rather...”. Then introduce at least two claims with different source frames such as “X said...”, “it is reported that...”, or “it is said to...”. Do not turn a reported claim into a certain fact.',
      question: 'Can you control time viewpoint, corrective contrast and source certainty across one coherent paragraph?',
      correctAnswer: null,
      explanation: 'A strong B2 response uses grammar and reporting language to manage chronology, interpretation and evidential distance rather than merely listing information.',
      feedback: {
        correct: 'Keep the chronology clear and preserve the difference between what a named source says and what you can state directly.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Viewpoint — From one past moment, what would happen later?', mode: 'Individual' },
        { question: 'Purpose — What was the event or action meant to achieve?', mode: 'Individual' },
        { question: 'Reframing — Reject one interpretation and replace it with a more precise one.', mode: 'Pair' },
        { question: 'Source distance — Attribute two claims without presenting both as certain facts.', mode: 'Pair' },
      ],
    },
  ],
  11: [
    {
      id: 'adam-b2-language-11-time-pressure',
      type: 'multiple-choice',
      title: 'Reading “No Sooner … Than …”',
      instructions: 'Read the sentence from Chapter 11. Then choose the best meaning.',
      question: '“On Earth, he had to face conflict and struggle. No sooner had one ended than another began.” What does the second sentence mean?',
      options: [
        'He faced one struggle at a time, with long periods of rest between them.',
        'Each struggle was followed immediately by a new one.',
        'A new struggle always began before the old one had ended.',
        'He was able to end every struggle before it began.',
      ],
      correctAnswer: 1,
      explanation: '“No sooner … than …” shows that the second event follows the first immediately. The inversion (“had one ended”) and the fronted negative make the sentence emphatic, so Adam’s life on Earth feels like a series of struggles without rest.',
      feedback: {
        correct: 'Correct. The next struggle began as soon as one had ended.',
        incorrect: 'Did the first struggle end before the next one began? And was there time between them? Read the second paragraph of Chapter 11 again.',
      },
    },
    {
      id: 'adam-b2-language-11-obligation-purpose',
      type: 'word-bank',
      title: 'Priority, Consequence and Contrast',
      instructions: 'Complete the lines from Chapter 11 with words from the bank. Three words are not needed.',
      question: 'Which expressions rank a responsibility, state a wider consequence and contrast two groups?',
      fillBlanksText: '[blank], he had to struggle with the spirit of evil. … the removal of Allah from the human mind [blank] the removal of meaning and purpose from human life. The battle between good and evil is continuous, but those who follow Allah\'s guidance should fear nothing, [blank] those who disobey Allah and follow Iblis will be away from the mercy of Allah along with him.',
      wordBank: ['Above all', 'means', 'while', 'After all', 'so that', 'unless'],
      correctAnswer: ['Above all', 'means', 'while'],
      explanation: '“Above all” ranks the struggle against evil as the most important of Adam’s tasks; “after all” would instead give a reason. “X means Y” presents a wider consequence: removing Allah from the mind carries with it the loss of meaning. “While” sets the second group and its outcome against the first.',
      feedback: {
        correct: 'Correct. The paragraph now ranks, explains a consequence and contrasts two groups.',
        incorrect: 'Ask what each gap does: put one task above the others, link a cause to its wider result, or contrast two groups. Check the third and fourth paragraphs of Chapter 11.',
      },
    },
    {
      id: 'adam-b2-language-11-contrast-consequence',
      type: 'transformation',
      title: 'Necessity, Negation and Time',
      instructions: 'Complete each new sentence so that it keeps the meaning of the Chapter 11 sentence. Write only the missing words.',
      question: 'Can you express necessity, a negative wish and an immediate sequence in another way?',
      transformItems: [
        {
          source: 'He also had to work hard to keep himself alive.',
          frame: 'It was also necessary [blank] to keep himself alive.',
          answers: ['for him to work hard'],
        },
        {
          source: 'Satan wants human beings not to remember Allah …',
          frame: 'Satan does not want human beings [blank] Allah.',
          answers: ['to remember'],
        },
        {
          source: 'No sooner had one ended than another began.',
          frame: 'As soon as one [blank], another began.',
          answers: ['ended', 'had ended'],
        },
      ],
      correctAnswer: null,
      explanation: '“Had to + verb” and “It was necessary for + person + to + verb” both express necessity. “Want someone not to do” and “not want someone to do” have the same meaning; the negative simply moves. “No sooner … than …” is the emphatic version of “As soon as …”, without inversion.',
      feedback: {
        correct: 'Well done. You kept the meaning while changing the structure.',
        incorrect: 'Item 1: use for + person + to-infinitive. Item 2: the negative has moved to “does not want”. Item 3: “as soon as” uses normal word order.',
      },
    },
    {
      id: 'adam-b2-language-11-production',
      type: 'reflection',
      title: 'Build a Responsibility Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story situation in which a person or group enters a demanding new environment. Do not retell Chapter 11. Use “no sooner... than...” or an equivalent compressed-time structure once. Use “had to” or another necessity form at least twice for different kinds of responsibility. Rank one responsibility with “above all” or an equivalent expression. Contrast two possible paths with “while” or “yet”, and explain one wider consequence with “means” or an equivalent cause-result frame.',
      question: 'Can you organise time, necessity, priority, contrast and consequence across one coherent paragraph?',
      correctAnswer: null,
      explanation: 'A strong B2 response uses grammar to organise a whole argument: pressure develops over time, responsibilities accumulate, priorities are ranked, and consequences are contrasted.',
      feedback: {
        correct: 'Keep the paragraph coherent: each structure should advance the same situation rather than appear as an isolated grammar example.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Time pressure — Which two events happen with almost no gap?', mode: 'Individual' },
        { question: 'Necessity — Which practical and non-practical responsibilities must be handled?', mode: 'Individual' },
        { question: 'Priority — Which responsibility matters most, and how will you signal that?', mode: 'Pair' },
        { question: 'Contrast and consequence — What two paths can you contrast, and what one choice lead to?', mode: 'Pair' },
      ],
    },
  ],
  12: [
    {
      id: 'adam-b2-language-12-contrast',
      type: 'multiple-choice',
      title: 'Why the Passive Here?',
      instructions: 'Read the sentence from Chapter 12. Then choose the best explanation of the writer’s choice.',
      question: '“Qabil’s sacrifice was not accepted by Allah because of his insincerity in his offering.” Why does the writer begin with “Qabil’s sacrifice” and use the passive?',
      options: [
        'because the writer does not know who did not accept the sacrifice',
        'to keep attention on Qabil’s sacrifice and what happened to it, and then explain why',
        'to show that this happened many times',
        'to show that the writer doubts the report',
      ],
      correctAnswer: 1,
      explanation: 'The passive puts the sacrifice, the topic of the paragraph, at the front, and “because of his insincerity” follows as the explanation. The agent is not hidden: “by Allah” is stated. So the passive here is about focus, not about an unknown doer or doubt.',
      feedback: {
        correct: 'Correct. The passive keeps the focus on the sacrifice and its outcome.',
        incorrect: 'Notice that “by Allah” is in the sentence, so the doer is known. What, then, does the passive put first? Check the first paragraph of Chapter 12.',
      },
    },
    {
      id: 'adam-b2-language-12-passive-relative-cause',
      type: 'transformation',
      title: 'Contrast and Omission in Other Words',
      instructions: 'Complete each new sentence so that it keeps the meaning of the Chapter 12 sentence. Write only the missing words.',
      question: 'Can you express the same contrast with a linking adverb, and the same omission with an active -ing form?',
      transformItems: [
        {
          source: 'Habil offered his best cattle while Qabil offered his worst grain.',
          frame: 'Habil offered his best cattle. Qabil, [blank], offered his worst grain.',
          answers: ['on the other hand', 'by contrast', 'in contrast', 'however'],
        },
        {
          source: 'Habil and Qabil are referred to as Adam (pbuh)’s two sons without their names being given.',
          frame: 'The Qur’an refers to Habil and Qabil as Adam (pbuh)’s two sons without [blank].',
          answers: ['giving their names', 'naming them', 'mentioning their names', 'giving names', 'stating their names'],
        },
      ],
      correctAnswer: null,
      explanation: '“While” joins two contrasting actions in one sentence; in two sentences, the contrast moves to an adverb such as “on the other hand” or “by contrast”. “Without their names being given” is a passive -ing form after a preposition; the active version, “without giving their names”, needs a subject for “refers”, so the Qur’an becomes the subject.',
      feedback: {
        correct: 'Well done. You kept the contrast and the omission.',
        incorrect: 'Item 1: the blank sits inside the second sentence, so use a contrast adverb, not “while”. Item 2: after “without”, use an -ing form.',
      },
    },
    {
      id: 'adam-b2-language-12-source-limits',
      type: 'matching',
      title: 'Where Does the Account Stop?',
      instructions: 'Match each expression from the end of Chapter 12 with what it signals about the source.',
      question: 'How does the chapter show what the account tells us, what it leaves out and what we do not know?',
      matchingHeadings: { left: 'From the chapter', right: 'What it signals' },
      matchingPairs: [
        { left: 'without mentioning names', right: 'shows that a detail is left out' },
        { left: 'It does not openly mention any of the details found in the Torah', right: 'compares this account with another scripture' },
        { left: 'according to the Qur’an, the only thing that needs to be known is the wisdom of the story', right: 'says whose view is given about what really matters' },
        { left: 'Although we don’t know the whole story', right: 'admits a gap before stating what is known' },
      ],
      correctAnswer: {
        'without mentioning names': 'shows that a detail is left out',
        'It does not openly mention any of the details found in the Torah': 'compares this account with another scripture',
        'according to the Qur’an, the only thing that needs to be known is the wisdom of the story': 'says whose view is given about what really matters',
        'Although we don’t know the whole story': 'admits a gap before stating what is known',
      },
      explanation: 'Careful writers limit their claims. “Without mentioning names” and “does not openly mention” mark what the account leaves out; “according to …” attributes a view to a source; “Although we don’t know …” concedes incomplete knowledge before the writer states only what can be said.',
      feedback: {
        correct: 'Correct. You identified omission, comparison, attribution and admitted uncertainty.',
        incorrect: 'Read the last paragraph of Chapter 12 again. Which expression names another scripture, which one names a source for a view, and which one admits a gap?',
      },
    },
    {
      id: 'adam-b2-language-12-production',
      type: 'reflection',
      title: 'Write a Source-Aware Contrast Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story dispute, report or historical case. Do not retell Chapter 12. Contrast two people or positions with “while” or an equivalent structure. Use one passive to foreground an outcome rather than the actor. Explain one cause with “because of”, “because”, or an equivalent expression. Include one source-limiting phrase such as “according to...”, “the source does not state...”, or “although we do not know...”. End with a conclusion that stays inside the evidence you introduced.',
      question: 'Can you combine contrast, information focus, cause and source qualification in one coherent paragraph?',
      correctAnswer: null,
      explanation: 'A strong B2 response does not simply insert target forms. It uses them to compare positions, foreground outcomes, explain causes and keep conclusions proportionate to the available evidence.',
      feedback: {
        correct: 'Keep each claim tied to the evidence or source boundary you introduced.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Contrast — Which two roles, actions or positions will you place side by side?', mode: 'Individual' },
        { question: 'Focus — Which outcome matters more than naming the actor?', mode: 'Individual' },
        { question: 'Cause — What directly explains one important result?', mode: 'Pair' },
        { question: 'Source limits — What can your source support, and what should you avoid claiming?', mode: 'Pair' },
      ],
    },
  ]
};
