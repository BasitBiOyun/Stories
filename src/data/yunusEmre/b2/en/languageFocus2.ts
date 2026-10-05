import type { Exercise } from '../../../../types';

/**
 * B2 Language Focus for Yunus Emre, Chapters 5–8.
 * Each chapter follows Notice → Build → Use. Every quoted sentence comes from
 * the English chapter text; quoted verses are only read, sorted or matched.
 */
const reflectionFeedback = { correct: 'Well done. Check that each target pattern carries a clear relationship in your paragraph.', incorrect: 'Return to the chapter sentences that use these patterns and model your own sentences on them.' };
const refl = (id: string, title: string, instructions: string, q: string, p: string[], e: string): Exercise => ({ id, type: 'reflection', title, instructions, question: q, correctAnswer: null, explanation: e, feedback: reflectionFeedback, discussionPrompts: p.map(question => ({ question, mode: 'Individual' })) });

export const yunusB2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  5: [
    {
      id: 'yu-b2-lf5-1',
      type: 'sequencing',
      title: 'Following the Connectors',
      instructions: 'Put the sentences from Chapter 5 in order. The first words can help.',
      question: 'What happened between the rebellion and the destruction of the cities?',
      sequencingItems: [
        { id: 'a', text: 'In the end, the Seljuk forces suppressed the rebellion with great difficulty …' },
        { id: 'b', text: 'However, this situation gave the Mongols in Azerbaijan the courage to attack the Seljuk Empire.' },
        { id: 'c', text: 'In late 1242, the Mongols captured Erzurum and killed its people with swords.' },
        { id: 'd', text: 'Finally, in 1243, the Seljuk army and the Mongols clashed at Kösedağ, 80 km northeast of Sivas.' },
        { id: 'e', text: 'Following their easy victory at Kösedağ, the Mongols destroyed and plundered Sivas, Kayseri, and Erzincan …' },
      ],
      correctAnswer: ['a', 'b', 'c', 'd', 'e'],
      explanation: '“In the end” closes the rebellion. “However” turns to an unexpected result: The Seljuk victory made them look weak, and this encouraged the Mongols. A date (“In late 1242”) moves the story on, “Finally” marks the decisive battle at the end of a long process, and “Following their easy victory” links the battle to what happened after it.',
      feedback: {
        correct: 'Correct. The connectors lead from the rebellion, through a turning point, to the battle and its aftermath.',
        incorrect: 'Ask what each connector needs before it: “However” needs a situation to turn from, “Finally” comes near the end, and “Following their victory” needs the battle first. Then check Chapter 5.',
      },
    },
    {
      id: 'yu-b2-lf5-2',
      type: 'matching',
      title: 'The Language of Destruction',
      instructions: 'Match each expression from Chapter 5 with its meaning.',
      question: 'How does the writer show how terrible the destruction was?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'wiped out the Seljuk forces', right: 'defeated the army so completely that it no longer existed' },
        { left: 'leaving not a single stone standing', right: 'so that no building remained' },
        { left: 'swept across Anatolia like a roller', right: 'moved over the land, crushing everything in its path' },
        { left: 'hardly anyone remained there', right: 'almost nobody was left alive' },
      ],
      correctAnswer: {
        'wiped out the Seljuk forces': 'defeated the army so completely that it no longer existed',
        'leaving not a single stone standing': 'so that no building remained',
        'swept across Anatolia like a roller': 'moved over the land, crushing everything in its path',
        'hardly anyone remained there': 'almost nobody was left alive',
      },
      explanation: 'The chapter uses strong verbs (“wiped out”), a simile (“like a roller”) and extreme negatives (“not a single stone”, “hardly anyone”) to show the scale of the disaster. Notice that the most extreme description is introduced with “Sources say:”. The writer attributes it to historical sources rather than presenting it as his own measurement.',
      feedback: {
        correct: 'Correct. Each expression intensifies the picture of destruction.',
        incorrect: 'Read the last paragraph of Chapter 5 again and look at what each expression describes: an army, buildings, a whole region or the people of the cities.',
      },
    },
    refl('yu-b2-lf5-3', 'Why Kösedağ Matters', 'Write a short paragraph about the battle of Kösedağ.', 'Why is Kösedağ more than a battle?', ['Use a time phrase (“Following …”), “As a result” and “Sources say”.'], 'The response should connect battle, domination and civilian suffering.'),
  ],
  6: [
    {
      id: 'yu-b2-lf6-1',
      type: 'multiple-choice',
      title: 'Almost Like Officials',
      instructions: 'Read the sentence from Chapter 6. Then choose what it means.',
      question: '“The Seljuk sultans began to act almost as if they were Mongols’ civil officials.” What does the writer mean?',
      options: [
        'The sultans officially became Mongol civil servants and gave up their titles.',
        'The sultans still had their titles, but they had so little freedom that they behaved like officials serving the Mongols.',
        'The sultans made the Mongols work as civil officials in the Seljuk state.',
        'The sultans pretended to obey the Mongols but secretly kept full control.',
      ],
      correctAnswer: 1,
      explanation: '“As if” introduces a comparison with something that is not literally true, and the past form “were” marks it as unreal. “Almost” weakens it further. The sultans were still sultans, but their behaviour resembled that of subordinate officials, which shows how dependent the state had become.',
      feedback: {
        correct: 'Correct. “Almost as if” compares their behaviour to that of officials without saying they really became officials.',
        incorrect: 'Look at the sentence before it: The Seljuks “became a dependent state of the Mongols”. Does “as if” state a fact or make a comparison?',
      },
    },
    {
      id: 'yu-b2-lf6-2',
      type: 'word-bank',
      title: 'Stages of Dependency',
      instructions: 'Complete the lines from Chapter 6 with words from the bank. Three words are not needed.',
      question: 'Which words show the steps, and that the efforts were not enough?',
      fillBlanksText: 'In the end, an agreement was reached with the Mongols, but [blank] the Seljuks became a dependent state of the Mongols. … Statesmen like Celaleddin Karatay, [blank] on the one hand trying to manage the Mongols, were also making efforts to provide some relief to the state and the people. [blank], these efforts were not enough. [blank], in 1308, the lands of Anatolia were directly attached to the Ilkhanate Empire …',
      wordBank: ['in time', 'while', 'Nevertheless', 'Finally', 'Therefore', 'during', 'At first'],
      correctAnswer: ['in time', 'while', 'Nevertheless', 'Finally'],
      explanation: '“In time” shows a slow change after the agreement. “While” (+ -ing) shows two things the statesmen did at the same moment; “during” would need a noun. “Nevertheless” accepts the effort but says it failed; “Therefore” would wrongly make the failure a result of the effort. “Finally” marks the last stage of the process, not the beginning.',
      feedback: {
        correct: 'Correct. The words show a gradual process, parallel efforts, their limit and the final stage.',
        incorrect: 'Check the second and third paragraphs of Chapter 6. Which blank needs a contrast with a positive effort, and which one marks the last stage?',
      },
    },
    {
      id: 'yu-b2-lf6-3',
      type: 'transformation',
      title: 'Same Result, New Words',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we say the cause and the result?',
      transformItems: [
        {
          source: 'The weakening of the Seljuk Sultanate of Konya led to the rapid emergence of small principalities in Anatolia.',
          frame: 'As the Seljuk Sultanate of Konya weakened, small principalities [blank] rapidly in Anatolia.',
          answers: ['emerged', 'appeared', 'arose', 'sprang up', 'developed', 'began to emerge', 'started to emerge'],
        },
        {
          source: 'However, this tax increased constantly and this made both the state and the people poorer.',
          frame: 'Because this tax increased constantly, both the state and the people [blank] poorer.',
          answers: ['became', 'grew', 'got', 'became even', 'became much'],
        },
      ],
      correctAnswer: null,
      explanation: 'Academic writing often packs events into noun phrases: “the weakening of …” and “the rapid emergence of …”, joined by “led to”. In a clause, the same events become verbs: the sultanate weakened, principalities emerged. In the second item, “this made them poorer” becomes a result clause after “Because …”.',
      feedback: {
        correct: 'Well done. You kept the cause and the consequence but changed the structure.',
        incorrect: 'Turn the noun into a verb in the past simple (emergence → emerged) or ask what happened to the state and the people. Then check the first and second paragraphs of Chapter 6.',
      },
    },
    refl('yu-b2-lf6-4', 'From Agreement to Annexation', 'Write a short paragraph about how the Seljuks lost their freedom.', 'How did the Seljuks lose their freedom, step by step?', ['Use “led to”, “in time”, “nevertheless” and “finally”.'], 'The task requires process writing rather than isolated dates.'),
  ],
  7: [
    {
      id: 'yu-b2-lf7-1',
      type: 'matching',
      title: 'Circumstance, Perspective and Means',
      instructions: 'Match each phrase from Chapter 7 with its meaning in the chapter.',
      question: 'What do these phrases tell us about the times and about Yunus?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'under Mongol pressure', right: 'because they were being forced by an invading power' },
        { left: 'During the same period', right: 'at the time when this chaos was happening' },
        { left: 'were dominant among nomads', right: 'had the strongest influence on groups who moved from place to place' },
        { left: 'through the lens of his Sûfî identity', right: 'seeing life from his mystical point of view' },
        { left: 'using poetry as his medium', right: 'with verse as the way of sharing his message' },
      ],
      correctAnswer: {
        'under Mongol pressure': 'because they were being forced by an invading power',
        'During the same period': 'at the time when this chaos was happening',
        'were dominant among nomads': 'had the strongest influence on groups who moved from place to place',
        'through the lens of his Sûfî identity': 'seeing life from his mystical point of view',
        'using poetry as his medium': 'with verse as the way of sharing his message',
      },
      explanation: '“Under … pressure” gives the circumstance that caused the shaykhs to move. “During the same period” links two events in time. “Through the lens of” is a metaphor: A lens is something you look through, so it means “from the point of view of”. The participle phrase “using poetry as his medium” adds the means by which he responded.',
      feedback: {
        correct: 'Correct. The chapter links a historical circumstance, a point of view and a means of communication.',
        incorrect: 'Read the first two paragraphs of Chapter 7 again. Which phrase gives a cause, which a time, which a point of view and which a tool?',
      },
    },
    {
      id: 'yu-b2-lf7-2',
      type: 'transformation',
      title: 'Packing Ideas Into One Sentence',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we join these ideas in one sentence?',
      transformItems: [
        {
          source: 'He tried to respond to people’s efforts to make sense of life in hard days through the lens of his Sûfî identity, using poetry as his medium.',
          frame: 'He tried to respond to people’s efforts to make sense of life in hard days through the lens of his Sûfî identity, and he [blank] poetry as his medium.',
          answers: ['used', 'chose', 'employed'],
        },
        {
          source: 'These shaykhs raised dervishes on their teachings; these dervishes were dominant among nomads.',
          frame: 'These shaykhs raised dervishes on their teachings, [blank] were dominant among nomads.',
          answers: ['who', 'and they', 'and these dervishes', 'and the dervishes'],
        },
        {
          source: 'During the same period, the shaykhs from the regions of Turkestan, Transoxiana, Khorasan, Khwarezm and Iran came to Anatolia under Mongol pressure.',
          frame: 'During the same period, the shaykhs … came to Anatolia because the Mongols [blank] them.',
          answers: ['pressured', 'were pressuring', 'put pressure on', 'were putting pressure on', 'forced', 'were forcing', 'drove', 'pushed'],
        },
      ],
      correctAnswer: null,
      explanation: 'A participle phrase (“using poetry as his medium”) is a compact way of saying “and he used …”. A relative pronoun (“who”) joins two clauses about the same people without repeating the noun. “Under Mongol pressure” is a short prepositional phrase for a whole cause clause: “because the Mongols pressured them”.',
      feedback: {
        correct: 'Well done. You unpacked the compact phrases into full clauses.',
        incorrect: 'Ask what each short phrase means as a full clause: who used what, who were the dervishes, and who put pressure on the shaykhs? Then check Chapter 7.',
      },
    },
    refl('yu-b2-lf7-3', 'From Crisis to Poetry', 'Write 5–7 sentences about the crisis and Yunus’s answer to it.', 'How did Yunus answer people in hard times?', ['Use “under … pressure”, “through” and “using”.'], 'A strong paragraph makes the grammatical relationships carry the historical interpretation.'),
  ],
  8: [
    {
      id: 'yu-b2-lf8-1',
      type: 'multiple-choice',
      title: 'Whose View Is It?',
      instructions: 'Read the two sentence openings from Chapter 8. Then choose the best answer.',
      question: '“According to Yunus Emre, the Creator, Allah is the source of all things …” / “According to the theory of the Unity of Existence, Allah, the absolute reality, desired to be known …” Why does the writer begin with “According to …”?',
      options: [
        'To show that the writer disagrees with these ideas.',
        'To show whose view or which theory the ideas belong to.',
        'To show that these are the exact words of a poem.',
        'To show that the ideas were accepted by every scholar.',
      ],
      correctAnswer: 1,
      explanation: '“According to X” attributes an idea to a person or a school of thought. It does not show disagreement, and it does not claim that everybody accepts the idea. When the chapter quotes Yunus’s actual words, it uses a different frame: “Yunus says:” followed by the verse.',
      feedback: {
        correct: 'Correct. “According to” tells the reader whose view is being presented.',
        incorrect: 'Compare “According to …” with “Yunus says:” in Chapter 8. Which one introduces a quotation, and which one reports a view?',
      },
    },
    {
      id: 'yu-b2-lf8-2',
      type: 'choose-form',
      title: 'Linking the Argument',
      instructions: 'Choose the words that complete each sentence from Chapter 8.',
      question: 'Which words link the ideas step by step?',
      formChoices: [
        {
          sentence: 'The Creator is the true and only reality. [choice], Yunus Emre held the idea of the Unity of Existence.',
          options: ['In contrast', 'From this perspective', 'For example'],
          answer: 1,
        },
        {
          sentence: '… Allah, the absolute reality, desired to be known and to reveal Himself, and [choice], He created the worlds through His attributes.',
          options: ['in spite of this', 'instead', 'for this reason'],
          answer: 2,
        },
        {
          sentence: 'As a result of creation, the initial unity disintegrated and multiple existence emerged. [choice], this multiple existence is nothing but manifestations of the names of Allah.',
          options: ['Nonetheless', 'Similarly', 'For instance'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“From this perspective” shows that an idea follows from the viewpoint just described. “For this reason” links a cause (the wish to be known) to its result (creation). “Nonetheless” introduces something true in spite of what was just said: Unity broke into many things, but these many things still reflect Allah’s names.',
      feedback: {
        correct: 'Correct. Each expression shows how one idea follows from, or stands against, the previous one.',
        incorrect: 'Ask how the two ideas in each item are related: a viewpoint, a cause and its result, or a surprising contrast. Then read Chapter 8 again.',
      },
    },
    refl('yu-b2-lf8-3', 'Tawhid and Creation', 'Write a short paragraph about tawhid and creation.', 'How are tawhid, true reality and creation connected?', ['Use “according to”, “therefore” and “from this perspective”. Say only what the chapter says.'], 'The task combines conceptual coherence with careful attribution.'),
  ],
};
