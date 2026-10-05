import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart7: Record<number, Exercise[]> = {
  8: [
    {
      id: 'mecca-a2-language-8-dialogue', type: 'true-false', title: 'Forced, but Refused',
      instructions: 'Read the sentence from Chapter 8. Is the statement true or false?',
      question: '“He forced him to look at idols and worship them, but Bilal refused.” This means Bilal did what Umayya wanted.',
      correctAnswer: false,
      explanation: '“Forced + person + to + verb” means someone tried to make another person do something with pressure. “Refused” means said no. “But” shows that Bilal did not do what Umayya wanted.',
      feedback: {
        correct: 'Correct. Umayya used pressure, but Bilal said no.',
        incorrect: 'Read the second paragraph again. What does Bilal do after “but”?',
      },
    },
    {
      id: 'mecca-a2-language-8-refusal', type: 'error-correction', title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix Umayya’s words to Bilal?',
      errorItems: [
        { sentence: 'Umayya asked Bilal angrily, “Is it true? Did you left our religion and believe in this magic man Muhammad?”', error: 'left', options: ['leaving', 'leave', 'leaves'], answer: 1 },
        { sentence: 'He told him, “If you speak well of our idols, you would be free.”', error: 'would', options: ['will', 'were', 'did'], answer: 0 },
      ],
      correctAnswer: null,
      explanation: 'In a past question, use “Did + person + base verb”: “Did you leave …?” With “If + present”, use “will + verb” for the future result: “If you speak …, you will be free.”',
      feedback: {
        correct: 'Well done. You fixed the question and the if-sentence.',
        incorrect: 'Compare with Chapter 8: Umayya’s question in the first paragraph and his words in the last paragraph.',
      },
    },
    {
      id: 'mecca-a2-language-8-condition', type: 'choose-form', title: 'Bilal’s Answer',
      instructions: 'Choose the correct word or words for each sentence from Chapter 8.',
      question: 'What did Bilal answer, and what did Umayya do?',
      formChoices: [
        { sentence: 'Yes, Allah helped me [choice] the right way.', options: ['to find', 'finding', 'found'], answer: 0 },
        { sentence: 'Now I [choice] in the true religion.', options: ['believed', 'believe', 'believing'], answer: 1 },
        { sentence: 'When Umayya [choice] this, he went mad with anger.', options: ['hears', 'hearing', 'heard'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: '“Helped + person + to + verb” shows help with an action. “Now + present verb” shows the situation at this moment. “When + past verb” tells us the time of another past action.',
      feedback: {
        correct: 'Correct. You chose the right form each time.',
        incorrect: 'Read Bilal’s answer in the first paragraph and the start of the second paragraph of Chapter 8.',
      },
    },
    {
      id: 'mecca-a2-language-8-production', type: 'reflection', title: 'Saying No',
      instructions: 'Write or say four sentences about saying no to an unfair request.', question: 'What did someone ask, and why did you say no?', correctAnswer: null,
      explanation: 'Transfer the language without recreating the violent scene.', feedback: { correct: 'Use at least three Chapter 8 patterns.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Ask about the past: “Did you …?”', mode: 'Individual' },
        { question: 'Sentence 2 — Say no: “… refused” or “I refused to …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say what someone tried to make you do: “… tried to force me to …”', mode: 'Individual' },
        { question: 'Sentence 4 — Give a result with “if”: “If you …, you will …”', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart8: Record<number, Exercise[]> = {
  9: [
    {
      id: 'mecca-a2-language-9-response', type: 'matching', title: 'What Does It Mean?',
      instructions: 'Match each phrase from Chapter 9 with its meaning.',
      question: 'What do these phrases tell us about Abu Bakr and Umayya?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'Abu Bakr heard that Umayya was hurting Bilal', right: 'news of the pain reached Abu Bakr' },
        { left: 'right away', right: 'at once, without waiting' },
        { left: 'Umayya did not want to set Bilal free.', right: 'He was not ready to let Bilal go.' },
        { left: 'for a high price', right: 'for a lot of money' },
      ],
      correctAnswer: {
        'Abu Bakr heard that Umayya was hurting Bilal': 'news of the pain reached Abu Bakr',
        'right away': 'at once, without waiting',
        'Umayya did not want to set Bilal free.': 'He was not ready to let Bilal go.',
        'for a high price': 'for a lot of money',
      },
      explanation: '“Heard that + sentence” reports news someone received. “Right away” shows a very quick action. “Did not want to + verb” shows that someone was not willing to do something.',
      feedback: {
        correct: 'Correct. You understood the news, the quick action and Umayya’s answer.',
        incorrect: 'Read the second paragraph of Chapter 9 again. Which phrase is about time? Which is about money?',
      },
    },
    {
      id: 'mecca-a2-language-9-question', type: 'sentence-building', title: 'Asking for Something',
      instructions: 'Put the parts in order to make the sentence from Chapter 9.',
      question: 'What did Abu Bakr ask Umayya to do?',
      sentenceChunks: ['Abu Bakr', 'asked Umayya', 'to sell Bilal', 'to him.'],
      correctAnswer: null,
      explanation: '“Asked + person + to + verb” reports a request. The person who must act (Umayya) comes after “asked”.',
      feedback: {
        correct: 'Correct. You built the request.',
        incorrect: 'Start with the person who asks. Then put the person who must act, then “to + verb”.',
      },
    },
    {
      id: 'mecca-a2-language-9-request', type: 'multiple-choice', title: 'Asking About a Past Action',
      instructions: 'Choose the correct question. Abu Bakr asks this question in Chapter 9.',
      question: 'Which question uses “did” correctly?',
      options: ['What did he did wrong?', 'What he did do wrong?', 'What did he do wrong?'],
      correctAnswer: 2,
      explanation: 'Past questions use question word + did + person + base verb: “What did he do …?” After “did”, the verb does not change.',
      feedback: {
        correct: 'Correct. After “did”, use the base verb.',
        incorrect: 'Find Abu Bakr’s question in the last paragraph of Chapter 9. Look at the verb after “did he”.',
      },
    },
    {
      id: 'mecca-a2-language-9-production', type: 'reflection', title: 'Respond to a Problem',
      instructions: 'Write or say four sentences about hearing of a problem and helping.', question: 'What did you hear, and how did you help?', correctAnswer: null,
      explanation: 'Use at least three Chapter 9 patterns.', feedback: { correct: 'Keep the response practical and safe.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Say what you heard: “I heard that …”', mode: 'Individual' },
        { question: 'Sentence 2 — Say what you did quickly: “… right away.”', mode: 'Individual' },
        { question: 'Sentence 3 — Ask a question: “Did you …?”', mode: 'Individual' },
        { question: 'Sentence 4 — Ask someone for help: “I asked … to …”', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart9: Record<number, Exercise[]> = {
  10: [
    {
      id: 'mecca-a2-language-10-condition-price', type: 'drag-drop', title: 'Real or Imagined?',
      instructions: 'Real or only imagined? Put each part in the right group.',
      question: 'Did it really happen, or did someone only imagine it?',
      dragDropGroups: [
        { group: 'Really happened', items: ['Umayya agreed … for five pieces of gold.', 'Abu Bakr moved the heavy rock from Bilal’s chest.', 'Bilal stood up with difficulty.'] },
        { group: 'Only imagined', items: ['If you offered me only one piece of gold, I would still sell him to you.', 'If you asked me for one hundred pieces of gold, I would still pay that price for him.'] },
      ],
      correctAnswer: {
        'Really happened': ['Umayya agreed … for five pieces of gold.', 'Abu Bakr moved the heavy rock from Bilal’s chest.', 'Bilal stood up with difficulty.'],
        'Only imagined': ['If you offered me only one piece of gold, I would still sell him to you.', 'If you asked me for one hundred pieces of gold, I would still pay that price for him.'],
      },
      explanation: '“If + past verb …, I would + verb” talks about an imagined situation, not a real one. The real price was five pieces of gold. Nobody offered one piece or asked for one hundred.',
      feedback: {
        correct: 'Correct. You separated real events from imagined ones.',
        incorrect: 'Look for “If … would …”. These sentences imagine a different price. What was the real price?',
      },
    },
    {
      id: 'mecca-a2-language-10-condition', type: 'choose-form', title: 'Agreement and Freedom',
      instructions: 'Choose the correct word or words for each sentence from Chapter 10.',
      question: 'How did Bilal become free, and what could he do?',
      formChoices: [
        { sentence: 'Finally, Umayya agreed [choice] Bilal for five pieces of gold.', options: ['selling', 'to sell', 'sell'], answer: 1 },
        { sentence: 'Abu Bakr told Bilal that he was now a free man and no [choice] a slave.', options: ['more', 'again', 'longer'], answer: 2 },
        { sentence: 'He [choice] worship Allah freely.', options: ['could', 'can', 'was'], answer: 0 },
      ],
      correctAnswer: null,
      explanation: 'After “agreed”, use “to + verb”. “No longer” shows that an old state has ended: Bilal was not a slave any more. “Could + verb” shows a past ability: now he was able to worship freely.',
      feedback: {
        correct: 'Correct. You chose the right form each time.',
        incorrect: 'Read the first and last paragraphs of Chapter 10. The story is in the past, so use the past form of “can”.',
      },
    },
    {
      id: 'mecca-a2-language-10-status', type: 'multiple-choice', title: 'Could, but Did Not',
      instructions: 'Read the sentences from Chapter 10. Then choose the best meaning.',
      question: '“Abu Bakr could keep Bilal as a slave, but he did not. He freed him.” What does this tell us?',
      options: [
        'Abu Bakr was not able to keep Bilal.',
        'Abu Bakr wanted to keep Bilal, but Umayya stopped him.',
        'Keeping Bilal was possible, but Abu Bakr chose to free him.',
      ],
      correctAnswer: 2,
      explanation: '“Could + verb, but did not” shows that something was possible, but the person chose not to do it. It shows Abu Bakr’s good choice.',
      feedback: {
        correct: 'Correct. It was possible, but Abu Bakr made a better choice.',
        incorrect: 'Read the last three sentences of Chapter 10. “Could” means it was possible. What did Abu Bakr choose?',
      },
    },
    {
      id: 'mecca-a2-language-10-production', type: 'reflection', title: 'Describe a Change',
      instructions: 'Write or say four sentences about a good change in someone’s life.', question: 'What changed, and how is life different now?', correctAnswer: null,
      explanation: 'Use at least three Chapter 10 patterns.', feedback: { correct: 'Keep the example realistic and simple.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Say what someone agreed to: “… agreed to …”', mode: 'Individual' },
        { question: 'Sentence 2 — Imagine something: “If I …, I would …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say what stopped: “… no longer …”', mode: 'Individual' },
        { question: 'Sentence 4 — Say what you could or couldn’t do: “Before, I couldn’t …”', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart10: Record<number, Exercise[]> = {
  11: [
    {
      id: 'mecca-a2-language-11-change-choice', type: 'multiple-choice', title: 'Even When',
      instructions: 'Read the sentence from Chapter 11. Then choose the best meaning.',
      question: '“Even when people hurt him, he shouted fearlessly, “There is no god but Allah.”” What does “Even when” show?',
      options: [
        'He shouted only at times when people did not hurt him.',
        'He was brave in hard times; the pain did not stop him.',
        'He shouted because people asked him to shout.',
      ],
      correctAnswer: 1,
      explanation: '“Even when + sentence” shows that something stayed true in a difficult situation. People hurt Bilal, but he still said his belief without fear.',
      feedback: {
        correct: 'Correct. The difficulty did not stop Bilal.',
        incorrect: 'Read the third paragraph of Chapter 11. What kind of man was Bilal, and what did he do when people hurt him?',
      },
    },
    {
      id: 'mecca-a2-language-11-purpose', type: 'matching', title: 'What Does It Mean?',
      instructions: 'Match each phrase from Chapter 11 with its meaning.',
      question: 'What do these phrases tell us about Bilal and the Prophet?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'he often allowed only Bilal to stay with him', right: 'Bilal was the one friend he let be near him' },
        { left: 'After the Hijrah', right: 'once the move to Medina was over' },
        { left: 'He chose Bilal.', right: 'He picked Bilal from all the Muslims.' },
        { left: 'certainly worthy of Bilal', right: 'a job Bilal truly deserved' },
      ],
      correctAnswer: {
        'he often allowed only Bilal to stay with him': 'Bilal was the one friend he let be near him',
        'After the Hijrah': 'once the move to Medina was over',
        'He chose Bilal.': 'He picked Bilal from all the Muslims.',
        'certainly worthy of Bilal': 'a job Bilal truly deserved',
      },
      explanation: '“Allowed + person + to + verb” means “let someone do something”. “After + event” puts one event later than another. “Chose + person” shows a selection.',
      feedback: {
        correct: 'Correct. You understood each phrase.',
        incorrect: 'Find each phrase in Chapter 11 and read the sentence around it.',
      },
    },
    {
      id: 'mecca-a2-language-11-time', type: 'error-correction', title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sentences about Bilal and the Prophet?',
      errorItems: [
        { sentence: 'After the Hijrah, the Prophet (pbuh) wanted someone call people to prayer.', error: 'call', options: ['calling', 'to call', 'called'], answer: 1 },
        { sentence: 'After many years of hardship in Mecca, the Prophet (pbuh) told the Muslims move to Medina.', error: 'move', options: ['to move', 'moving', 'moved'], answer: 0 },
        { sentence: 'After Bilal became free, he became one of the Prophet’s most beloved and respected friend.', error: 'friend', options: ['friendship', 'a friend', 'friends'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: '“Wanted + person + to + verb” and “told + person + to + verb” need “to” before the action. After “one of the …”, use a plural noun: “one of the … friends”.',
      feedback: {
        correct: 'Well done. You fixed all three sentences.',
        incorrect: 'Compare with the first two paragraphs of Chapter 11. Look for the missing “to” and the plural noun.',
      },
    },
    {
      id: 'mecca-a2-language-11-production', type: 'reflection', title: 'Choose Someone for a Task',
      instructions: 'Write or say four sentences about choosing someone for a group job.', question: 'Who was chosen for the job, and why?', correctAnswer: null,
      explanation: 'Use at least three Chapter 11 patterns.', feedback: { correct: 'Keep the example positive and clear.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Say when: “After …, …”', mode: 'Individual' },
        { question: 'Sentence 2 — Say what someone wanted: “… wanted someone to …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say who was chosen: “We chose … because …”', mode: 'Individual' },
        { question: 'Sentence 4 — Show they did not stop: “… even when …”', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart11: Record<number, Exercise[]> = {
  12: [
    {
      id: 'mecca-a2-language-12-habit-message', type: 'true-false', title: 'A Morning Habit',
      instructions: 'Read the sentence from Chapter 12. Is the statement true or false?',
      question: '“Bilal used to start the morning call to prayer very early.” This means Bilal did this many times, not only once.',
      correctAnswer: true,
      explanation: '“Used to + verb” describes a habit in the past: something that happened again and again. Bilal started the morning call early on many days.',
      feedback: {
        correct: 'Correct. “Used to” shows a repeated past habit.',
        incorrect: 'Look at “used to”. Does it talk about one day, or about many days?',
      },
    },
    {
      id: 'mecca-a2-language-12-habit', type: 'word-bank', title: 'Meaning and Equality',
      instructions: 'Complete the lines with the word bank. Three words are extra.',
      question: 'What did Bilal add, and what did the Prophet teach?',
      fillBlanksText: 'He added the words “as-salatu khayrun minan-nawm,” [blank] “Prayer is better than sleep.” … Prophet Muhammad (pbuh) taught that [blank] people are equal. No skin color is [blank] than another.',
      wordBank: ['which means', 'all', 'better', 'who means', 'every', 'good'],
      correctAnswer: ['which means', 'all', 'better'],
      explanation: '“Which means” explains the meaning of words. “All + plural noun + are” makes a statement about everyone: “all people are equal”. “Every” needs a singular noun (“every person is”). “Better than” compares two things.',
      feedback: {
        correct: 'Correct. You explained a meaning, made a statement about everyone and used a comparison.',
        incorrect: 'Read the first two paragraphs of Chapter 12. Check the noun after the second blank: “people” is plural. Check the word “than” after the third blank.',
      },
    },
    {
      id: 'mecca-a2-language-12-instruction', type: 'sentence-building', title: 'It Is Wrong',
      instructions: 'Put the parts in order to make the sentence from Chapter 12.',
      question: 'What did the Prophet say in his last speech?',
      sentenceChunks: ['In this speech, he said', 'it is wrong', 'to dislike or disrespect people', 'because of', 'the color of their skin.'],
      correctAnswer: null,
      explanation: '“It is wrong to + verb” says that an action is not right. “Because of + noun” gives the reason: here, the reason is skin color, and the Prophet said this reason is wrong.',
      feedback: {
        correct: 'Correct. You built the sentence from the Farewell Sermon part of the chapter.',
        incorrect: 'Start with “In this speech, he said”. Then say what is wrong, and finish with the reason. Check the last paragraph.',
      },
    },
    {
      id: 'mecca-a2-language-12-production', type: 'reflection', title: 'Explain a Routine and a Principle',
      instructions: 'Write or say four sentences about a habit and one fair rule.', question: 'What was the old habit, and what is the fair rule?', correctAnswer: null,
      explanation: 'Use at least three Chapter 12 patterns.', feedback: { correct: 'Keep the language simple and respectful.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Give an old habit: “… used to …”', mode: 'Individual' },
        { question: 'Sentence 2 — Explain a word: “…, which means …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say what someone told you: “… told us to …”', mode: 'Individual' },
        { question: 'Sentence 4 — Say something about everyone: “All … are …”', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart12: Record<number, Exercise[]> = {
  13: [
    {
      id: 'mecca-a2-language-13-comparison', type: 'multiple-choice', title: 'Too Sad',
      instructions: 'Read the sentence from Chapter 13. Then choose the best meaning.',
      question: '“When the Prophet (pbuh) died, Bilal was too sad to give the Adhan.” What does this mean?',
      options: [
        'Bilal gave the Adhan with a sad voice.',
        'Bilal was so sad that he could not give the Adhan.',
        'Bilal was a little sad, but he gave the Adhan.',
      ],
      correctAnswer: 1,
      explanation: '“Too + adjective + to + verb” means the feeling was so strong that the action was not possible. Bilal’s sadness stopped him from giving the Adhan.',
      feedback: {
        correct: 'Correct. His sadness stopped him.',
        incorrect: 'Read the second paragraph of Chapter 13. What happened when Bilal said the Prophet’s name?',
      },
    },
    {
      id: 'mecca-a2-language-13-degree', type: 'choose-form', title: 'Comparing and Asking',
      instructions: 'Choose the correct word or words for each sentence from Chapter 13.',
      question: 'What really matters, and what did Bilal ask Abu Bakr?',
      formChoices: [
        { sentence: 'Arabs are not better [choice] non-Arabs, …', options: ['then', 'than', 'as'], answer: 1 },
        { sentence: 'He could not stay in Medina, so he asked Abu Bakr [choice] him leave.', options: ['to let', 'let', 'letting'], answer: 0 },
        { sentence: 'What [choice] is the heart and good actions.', options: ['matter', 'mattering', 'matters'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: '“Better than” compares two groups; “than” is different from “then” (a time word). “Asked + person + to + verb” reports a request. “What matters is …” says what is important.',
      feedback: {
        correct: 'Correct. You chose the right form each time.',
        incorrect: 'Check the first paragraph (comparison), the second paragraph (Bilal’s request) and the last sentence of Chapter 13.',
      },
    },
    {
      id: 'mecca-a2-language-13-importance', type: 'error-correction', title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sentences about Bilal’s life?',
      errorItems: [
        { sentence: 'His life teaches us that it is unfair to behave badly to people because their skin color or nationality.', error: 'because their', options: ['because of their', 'because they', 'for because their'], answer: 0 },
        { sentence: 'He started crying when he say the Prophet’s name.', error: 'say', options: ['saying', 'said', 'says'], answer: 1 },
      ],
      correctAnswer: null,
      explanation: 'Use “because of + noun” (“because of their skin color”) and “because + sentence” (“because they …”). In a past story, “when” needs a past verb: “when he said …”.',
      feedback: {
        correct: 'Well done. You fixed both sentences.',
        incorrect: 'Compare with Chapter 13: the second paragraph (Bilal’s sadness) and the last paragraph (the lesson of his life).',
      },
    },
    {
      id: 'mecca-a2-language-13-production', type: 'reflection', title: 'State a Fair Principle',
      instructions: 'Write or say four sentences about being fair to all people.', question: 'What makes a person truly good?', correctAnswer: null,
      explanation: 'Use at least three Chapter 13 patterns without adding claims outside the chapter’s theme.', feedback: { correct: 'Keep the message respectful and clear.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Say who is not better: “… is not better than …”', mode: 'Individual' },
        { question: 'Sentence 2 — Give a reason: “… because of …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say what was too hard: “… was too … to …”', mode: 'Individual' },
        { question: 'Sentence 4 — Say what is important: “What matters is …”', mode: 'Pair' },
      ],
    },
  ],
};
