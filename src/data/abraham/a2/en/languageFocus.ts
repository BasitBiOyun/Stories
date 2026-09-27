import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific A2 Language Focus work for Abraham.
 * Each chapter follows Look → Practise → Use: learners first look at what a
 * form means in a real chapter sentence, then practise it in context with
 * strong support, then use it in a short reflection. Every quoted sentence
 * comes from the English chapter text.
 */
export const abrahamA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'abraham-a2-language-1-past-story',
      type: 'multiple-choice',
      title: 'What Does “Looked Like” Mean?',
      instructions: 'Read the sentence from Chapter 1. Choose the best meaning.',
      question: '“These objects looked like people or animals.” What does this sentence mean?',
      options: [
        'The objects were real people or animals.',
        'The objects had the shape of people or animals.',
        'The objects liked people and animals.',
      ],
      correctAnswer: 1,
      explanation: '“Look like + noun” tells us about shape or appearance. The objects had the shape of people or animals, but they were only stone. The next sentence tells us something different: “People believed these objects were their gods.”',
      feedback: {
        correct: 'Correct. “Looked like” is about the shape of the objects. They were not real people or animals.',
        incorrect: 'Read the end of the first paragraph again. Were the objects real people, or were they stone objects with that shape?',
      },
    },
    {
      id: 'abraham-a2-language-1-negative-past-ability',
      type: 'matching',
      title: 'Past Forms in the Story',
      instructions: 'Match each verb with its past form. You can find all the past forms in Chapter 1.',
      question: 'Which past forms does Chapter 1 use to tell Abraham’s story?',
      matchingHeadings: { left: 'Base verb', right: 'Past form in Chapter 1' },
      matchingPairs: [
        { left: 'grow', right: 'grew' },
        { left: 'make', right: 'made' },
        { left: 'think', right: 'thought' },
        { left: 'see', right: 'saw' },
        { left: 'come', right: 'came' },
      ],
      correctAnswer: {
        grow: 'grew',
        make: 'made',
        think: 'thought',
        see: 'saw',
        come: 'came',
      },
      explanation: 'The story happened “a very long time ago”, so the chapter uses past forms. These five verbs are irregular: they do not end in -ed. “When he grew up, Allah made him His great Messenger.” “Abraham thought that was silly.” “He saw that the stone objects did not eat, drink, or talk.” “They came to the house …”',
      feedback: {
        correct: 'Well done. These past forms do not end in -ed, so it is good to learn them.',
        incorrect: 'Find each verb in Chapter 1: “grew up”, “made him”, “thought that”, “saw that”, “came to the house”.',
      },
    },
    {
      id: 'abraham-a2-language-1-look-like',
      type: 'choose-form',
      title: 'Did Not and Could Not',
      instructions: 'Choose the correct word to complete each sentence from Chapter 1.',
      question: 'Which verb form comes after “did not” and “could not”?',
      formChoices: [
        { sentence: 'They did not [choice] Him.', options: ['worshipped', 'worship', 'worshipping'], answer: 1 },
        { sentence: 'He saw that the stone objects did not [choice], drink, or talk.', options: ['eat', 'ate', 'eating'], answer: 0 },
        { sentence: 'They could not [choice] from one place to another …', options: ['moved', 'to move', 'move'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: 'After “did not” and “could not”, use the base verb: did not worship, did not eat, could not move. “Did not” tells a fact about the past. “Could not” tells us that someone or something was not able to do it.',
      feedback: {
        correct: 'Correct. After “did not” and “could not”, the verb has no -ed and no -ing.',
        incorrect: 'Look at the end of each paragraph in Chapter 1. After “did not” and “could not”, use the base verb.',
      },
    },
    {
      id: 'abraham-a2-language-1-explain-contrast',
      type: 'reflection',
      title: 'Say It: Belief and Observation',
      instructions: 'Write or say three or four short A2 sentences. Use at least two patterns from this Language Focus.',
      question: 'Can you contrast what the people believed with what Abraham observed?',
      correctAnswer: null,
      explanation: 'A strong response can use past-story verbs, “did not”, “could not” and “looked like” to contrast the people’s belief with Abraham’s observation.',
      feedback: {
        correct: 'Use accurate Chapter 1 language to make the contrast clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Begin with the people: “People believed ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Add a negative past fact: “They did not ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Describe the objects: “They looked like ...”', mode: 'Individual' },
        { question: 'Sentence 4 — Explain the lack of ability: “But they could not ...”', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'abraham-a2-language-2-past-habits',
      type: 'drag-drop',
      title: 'Again and Again, or One Time?',
      instructions: 'Read each part of Chapter 2. Did it happen again and again, or only one time? Put it in the right group.',
      question: 'Which actions were Abraham’s childhood habits, and which happened on one day?',
      dragDropGroups: [
        { group: 'Again and again', items: ['But Abraham played with these idols as toys', 'He rode on their backs', 'and sometimes kicked them'] },
        { group: 'Only one time', items: ['One day, Abraham asked his father', 'One day, his father saw Abraham', 'He got angry'] },
      ],
      correctAnswer: {
        'Again and again': ['But Abraham played with these idols as toys', 'He rode on their backs', 'and sometimes kicked them'],
        'Only one time': ['One day, Abraham asked his father', 'One day, his father saw Abraham', 'He got angry'],
      },
      explanation: 'The chapter first tells us about Abraham’s habits as a young boy: he played with the idols, rode on their backs and “sometimes” kicked them. “Sometimes” shows that it happened more than once. “One day” takes us to one special time in the story.',
      feedback: {
        correct: 'Correct. You separated the habits from the one-time events.',
        incorrect: 'Look for “sometimes” and “One day” in Chapter 2. What did Abraham do many times? What happened on one day?',
      },
    },
    {
      id: 'abraham-a2-language-2-questions-and-reasons',
      type: 'choose-form',
      title: 'Used To, Bigger Than, Because',
      instructions: 'Choose the correct word to complete each sentence from Chapter 2.',
      question: 'Can you complete a past habit, a comparison and a reason?',
      formChoices: [
        { sentence: 'As a young boy, Abraham used to [choice] his father making idols from stone.', options: ['watching', 'watch', 'watched'], answer: 1 },
        { sentence: 'Its ears are [choice] than ours.', options: ['bigger', 'more big', 'big'], answer: 0 },
        { sentence: 'He has big ears [choice] he is very smart.', options: ['so', 'but', 'because'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: '“Used to + base verb” (used to watch) tells us about a habit in the past. Short adjectives add -er to compare: big → bigger than. “Because” gives a reason: the father says the idol has big ears because it is very smart.',
      feedback: {
        correct: 'Well done. You completed a habit, a comparison and a reason.',
        incorrect: 'Read Chapter 2 again. After “used to”, use the base verb. To compare, say “bigger than”. Which word gives a reason?',
      },
    },
    {
      id: 'abraham-a2-language-2-tell-not-to',
      type: 'sentence-building',
      title: 'Telling Someone Not to Do Something',
      instructions: 'Tap the pieces to build the sentence from Chapter 2.',
      question: 'How does the chapter tell us what the father said to Abraham?',
      sentenceChunks: ['He got angry', 'and told', 'his son', 'not to play', 'with it again.'],
      correctAnswer: null,
      explanation: 'The pattern is “tell + person + not to + base verb”: “He got angry and told his son not to play with it again.” The word “not” comes before “to play”.',
      feedback: {
        correct: 'Correct. You built the sentence: told + person + not to + verb.',
        incorrect: 'Start with the father’s feeling. Then say who he told, and then “not to play”.',
      },
    },
    {
      id: 'abraham-a2-language-2-compare-and-explain',
      type: 'reflection',
      title: 'Say It: Ask, Compare and Explain',
      instructions: 'Write or say three or four short A2 sentences using Chapter 2 language. Use a question, a comparison and a reason.',
      question: 'Can you build a short exchange about the statue without repeating the Quick Challenge answer?',
      correctAnswer: null,
      explanation: 'A strong response can ask “What is ...?” or “Why ...?”, use “bigger than” to compare the ears, and use “because” to give a reason. It may also report the father’s instruction with “told ... not to ...”.',
      feedback: {
        correct: 'Use the chapter patterns accurately and keep the exchange short and clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Question — Ask about the object: “What is this ...?”', mode: 'Individual' },
        { question: 'Comparison — Use “bigger than”: “Its ears are bigger than ...”', mode: 'Individual' },
        { question: 'Reason — Give a reason with “because ...”', mode: 'Individual' },
        { question: 'Optional — Report the instruction: “His father told him not to ...”', mode: 'Pair' },
      ],
    },
  ],
  3: [
    {
      id: 'abraham-a2-language-3-thinking-searching',
      type: 'multiple-choice',
      title: 'A Question to Himself',
      instructions: 'Read the question from Chapter 3. Choose what Abraham is doing.',
      question: 'Abraham saw a bright star and thought, “Could this be my Allah?” What is Abraham doing?',
      options: [
        'He is sure that the star is Allah.',
        'He is telling the star what to do.',
        'He is asking himself if it is possible.',
      ],
      correctAnswer: 2,
      explanation: '“Could this be …?” asks if something is possible. Abraham is not sure yet. He watches the star, and then he decides.',
      feedback: {
        correct: 'Correct. “Could this be …?” is a question about what is possible.',
        incorrect: 'Look at the question mark and read what happens next in Chapter 3. Was Abraham sure at that moment?',
      },
    },
    {
      id: 'abraham-a2-language-3-question-reason-conclusion',
      type: 'matching',
      title: 'Thinking and Searching',
      instructions: 'Match each Chapter 3 expression with its meaning.',
      question: 'What do these words tell us about Abraham’s thinking?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'always thought about', right: 'often had in his mind' },
        { left: 'wanted to know', right: 'hoped to find out' },
        { left: 'was in search of', right: 'was looking for' },
        { left: 'disappeared', right: 'went out of sight' },
      ],
      correctAnswer: {
        'always thought about': 'often had in his mind',
        'wanted to know': 'hoped to find out',
        'was in search of': 'was looking for',
        disappeared: 'went out of sight',
      },
      explanation: 'Chapter 3 shows Abraham’s mind at work: “He always thought about Allah. He wanted to know who created the world. … Abraham was in search of one true Creator.” Then the star “disappeared”: he could not see it any more.',
      feedback: {
        correct: 'Well done. You understood the words about Abraham’s thinking and searching.',
        incorrect: 'Read the first paragraph of Chapter 3 again. Which words show a thought, a wish to learn, and a search?',
      },
    },
    {
      id: 'abraham-a2-language-3-story-sequence',
      type: 'word-bank',
      title: 'Then, Because, Could Not',
      instructions: 'Complete the lines from Chapter 3 with words from the bank. Two words are not needed.',
      question: 'Which words move the night scene forward, give a reason and show Abraham’s conclusion?',
      fillBlanksText: '[blank], he stood up and looked at the beautiful sky. … But when it disappeared, he said, “I will not show respect to it, [blank] it sets and disappears.” … He understood that it [blank] be Allah.',
      wordBank: ['Then', 'because', 'could not', 'can', 'did not'],
      correctAnswer: ['Then', 'because', 'could not'],
      explanation: '“Then” moves the story to the next action. “Because” gives the reason for Abraham’s words. “Could not be” shows his conclusion: it was not possible for the star or the moon to be Allah.',
      feedback: {
        correct: 'Correct. You used a sequence word, a reason word and a conclusion.',
        incorrect: 'Read the second paragraph of Chapter 3 again. Which word gives the next action? Which word gives a reason? What did Abraham understand at the end?',
      },
    },
    {
      id: 'abraham-a2-language-3-evidence-conclusion-production',
      type: 'reflection',
      title: 'Say It: Ask, Observe and Conclude',
      instructions: 'Write or say three or four short A2 sentences. Use a possibility question, an event or observation, and a reason or conclusion.',
      question: 'Can you use Chapter 3 language to think through a new simple example without retelling the Quick Challenge?',
      correctAnswer: null,
      explanation: 'A strong response can use “Could this be ...?”, “When ...”, “because ...” and “It could/could not be ...” to move from a question to evidence and a conclusion.',
      feedback: {
        correct: 'Keep the reasoning simple and make the link between the observation and conclusion clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Question — Ask about a possibility: “Could this be ...?”', mode: 'Individual' },
        { question: 'Observation — Add what you notice: “When it ... , ...”', mode: 'Individual' },
        { question: 'Reason — Explain with “because ...”', mode: 'Individual' },
        { question: 'Conclusion — Finish with “It could/could not be ...”', mode: 'Pair' },
      ],
    },
  ],
};
