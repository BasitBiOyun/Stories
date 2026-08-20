import type { Exercise } from '../../../../types';

const feedback = {
  correct: 'Correct. The answer is supported by the story evidence.',
  incorrect: 'Not yet. Return to the relevant chapter, find the evidence, and try again.',
};

const mc = (id: string, question: string, options: string[], correctAnswer: number, explanation: string, title = 'Quick Challenge'): Exercise => ({
  id, type: 'multiple-choice', title, instructions: 'Choose the best evidence-based answer.', question, options, correctAnswer, explanation, feedback,
});
const tf = (id: string, question: string, correctAnswer: boolean, explanation: string, title = 'Quick Challenge'): Exercise => ({
  id, type: 'true-false', title, instructions: 'Decide whether the claim is supported by the chapter.', question, correctAnswer, explanation, feedback,
});
const fill = (id: string, question: string, fillBlanksText: string, correctAnswer: string, explanation: string, title = 'Quick Challenge'): Exercise => ({
  id, type: 'fill-blanks', title, instructions: 'Complete the claim with key story language.', question, fillBlanksText, correctAnswer, explanation, feedback,
});
const matching = (id: string, question: string, pairs: { left: string; right: string }[], explanation: string, title = 'Quick Challenge'): Exercise => ({
  id, type: 'matching', title, instructions: 'Match each idea with the evidence or meaning that best fits it.', question, matchingPairs: pairs, correctAnswer: Object.fromEntries(pairs.map(pair => [pair.left, pair.right])), explanation, feedback,
});

export const yunusB2QuickChallenges: Record<number, Exercise> = {
  1: mc('yu-b2-q1', 'Which interpretation best captures the chapter’s two-part introduction to Yunus Emre?', [
    'His Sûfî ethics and his contribution to Old Anatolian Turkish are presented as connected parts of his importance.',
    'His literary importance is presented as unrelated to his spiritual identity.',
    'The chapter presents him mainly as a political administrator.',
  ], 0, 'The chapter introduces both his Sûfî identity and his role in developing Turkish as a literary language.'),
  2: tf('yu-b2-q2', 'The chapter presents every detail of Yunus Emre’s education and dates as equally certain.', false, 'Phrases such as “According to historical accounts,” “widely accepted view,” and “Some sources note” qualify the claims.'),
  3: matching('yu-b2-q3', 'Match each historical element with the relationship stated in the chapter.', [
    { left: 'Tekkes', right: 'Institutions of Sûfî training and fine arts' },
    { left: 'Kösedağ defeat', right: 'A development that facilitated Mongol invasion' },
    { left: 'Taptuk Emre', right: 'The sheikh under whom Yunus was trained' },
  ], 'The chapter combines cultural institutions, biography and a causal historical sequence.'),
  4: mc('yu-b2-q4', 'Which explanation best accounts for the worsening instability before the Babai uprising?', [
    'Poor governance interacted with Mongol-driven migration, nomadic displacement and social unrest.',
    'A single religious disagreement alone explains the crisis.',
    'Anatolia had become more stable because migration had ended.',
  ], 0, 'The chapter presents several interacting political, social and migration pressures rather than one isolated cause.'),
  5: tf('yu-b2-q5', 'The chapter treats Kösedağ only as a military defeat, without describing consequences for civilians.', false, 'The chapter gives extensive attention to destruction, captivity, fear, misery and loss of life after the defeat.'),
  6: mc('yu-b2-q6', 'What does the chapter show about political dependency and economic pressure?', [
    'Mongol dependency and rising payments weakened both the Seljuk state and ordinary people.',
    'Mongol control reduced taxes and strengthened Seljuk autonomy.',
    'The small principalities quickly ended political conflict.',
  ], 0, 'The text connects dependency, increasing tax demands, poverty and eventual direct Ilkhanate control.'),
  7: { id: 'yu-b2-q7', type: 'tap-reveal', title: 'Quick Challenge', instructions: 'Reveal the evidence check.', question: 'Why is Yunus’s use of poetry especially significant in this chapter?', correctAnswer: true, explanation: 'The chapter places his poetic activity inside a society trying to make sense of severe disruption; poetry becomes his medium of response as a wise dervish.', feedback, tapRevealItems: [{ question: 'Evidence to notice', answer: 'He travelled around Anatolia and responded to people’s efforts to make sense of hard days through his Sûfî identity, using poetry as his medium.' }] },
  8: mc('yu-b2-q8', 'Which wording best keeps the chapter’s theological claim inside its source frame?', [
    'The chapter presents vahdet-i vücut as part of Yunus Emre’s Sûfî thought about Allah as true reality and creation as manifestation.',
    'The chapter proves that every Muslim thinker defines reality in exactly the same way.',
    'The chapter treats creation as independent from Allah.',
  ], 0, 'A B2 answer should attribute the concept to the chapter’s presentation of Yunus Emre rather than universalize it.'),
  9: mc('yu-b2-q9', 'How are religious practice and love related in the chapter?', [
    'The text places obedience to Allah’s commands and love of Creator and creation within the same movement toward unity.',
    'Love is presented as replacing prayer and religious requirements.',
    'Prayer is presented only as a historical custom with no relation to Yunus’s thought.',
  ], 0, 'The quoted verse emphasizes prayer while the prose explains love as central to the relationship with the Creator and creation.'),
  10: matching('yu-b2-q10', 'Match each concept with its role in the chapter.', [
    { left: 'Heart', right: 'Center of love and understanding' },
    { left: 'Purity of heart', right: 'Presented as necessary for proper worship' },
    { left: 'Intellect', right: 'Described as a light from Allah' },
  ], 'The chapter links inward condition, worship, understanding and intellect rather than treating them separately.'),
  11: mc('yu-b2-q11', 'What is the strongest connection between the chapter’s two main ideas?', [
    'Heart and reason must support one another, while awareness of death can orient a person toward a meaningful righteous life.',
    'Reason makes the heart unnecessary, and death has no ethical role.',
    'The chapter argues that only practical reason matters for salvation.',
  ], 0, 'The text explicitly joins heart and reason in salvation and presents death as an advisor.'),
  12: fill('yu-b2-q12', 'Complete the contrast at the center of the chapter.', 'Yunus praises virtues such as patience and humility while warning against harmful [blank] such as arrogance, greed and slander.', 'traits', 'The chapter contrasts positive moral qualities with negative traits and habits.'),
  13: tf('yu-b2-q13', 'The final chapter presents Yunus Emre’s legacy as literary only.', false, 'It explicitly says his writings are valuable both as literary works and as a moral guide for future generations.'),
};

export const yunusB2KnowledgeCheckExercises: Exercise[] = [
  mc('yu-b2-k1', 'Why is Yunus Emre’s style important to his public influence?', ['It combines literary value with accessibility.', 'It avoids moral and spiritual ideas.', 'It depends on highly technical language only.'], 0, 'The story connects his popularity with a style that was neither too simple nor too complex.', 'Knowledge Check'),
  mc('yu-b2-k2', 'Which sequence best explains the historical weakening of Anatolia in the book?', ['Babai unrest → Kösedağ defeat → Mongol invasion and dependency', 'Mongol withdrawal → stronger Seljuk taxation → peace', 'Ottoman expansion → end of all principalities → Babai uprising'], 0, 'The middle chapters build a connected chain from internal crisis to defeat, invasion and dependency.', 'Knowledge Check'),
  mc('yu-b2-k3', 'What wider social role did tekkes have in the story?', ['They supported Sûfî education, solidarity and fine arts.', 'They functioned only as military bases.', 'They replaced all madrasas and government institutions.'], 0, 'The book presents tekkes as religious, social and artistic institutions.', 'Knowledge Check'),
  mc('yu-b2-k4', 'Why does Yunus’s emergence as a wise dervish matter in the historical argument?', ['His poetry is presented as a response to people seeking meaning during social chaos.', 'His poetry is presented as unrelated to his age.', 'He is shown ending Mongol rule politically.'], 0, 'The chapter deliberately links social disruption with his Sûfî and poetic response.', 'Knowledge Check'),
  mc('yu-b2-k5', 'Which statement best represents the book’s account of tawhid?', ['It is the absolute Oneness of Allah and a foundation for Yunus’s view of reality.', 'It means political unity among principalities.', 'It means literary simplicity.'], 0, 'Chapter 8 defines tawhid explicitly and connects it with Yunus’s Sûfî thought.', 'Knowledge Check'),
  mc('yu-b2-k6', 'How does the book connect love with moral life?', ['Love of the Creator and the created supports unity and harmony.', 'Love is presented as unrelated to human behavior.', 'Love is treated as a substitute for all acts of worship.'], 0, 'The story presents love as a foundation for relationship, unity and moral behavior.', 'Knowledge Check'),
  mc('yu-b2-k7', 'What relationship does the text establish between heart and intellect?', ['They should support one another on the path to salvation.', 'The heart must eliminate reason.', 'Only practical reason has spiritual value.'], 0, 'Chapters 10–11 explicitly join heart and reason.', 'Knowledge Check'),
  mc('yu-b2-k8', 'What makes Yunus Emre a moral guide in the final chapters?', ['He praises virtues and warns against destructive habits through poetry.', 'He offers military strategy for future rulers.', 'He argues that morality depends on wealth and status.'], 0, 'The final chapters directly contrast virtues such as patience and humility with greed, anger and arrogance.', 'Knowledge Check'),
];

export const yunusB2VocabularyChallengePairs = [
  { word: 'solidarity', meaning: 'Unity and mutual support among people in a community.' },
  { word: 'nomadic', meaning: 'Moving from place to place rather than living permanently in one settlement.' },
  { word: 'dependent state', meaning: 'A state whose political freedom is constrained by another power.' },
  { word: 'medium', meaning: 'A means or method used to communicate an idea.' },
  { word: 'tawhid', meaning: 'The absolute Oneness of Allah, as explicitly defined in the chapter.' },
  { word: 'manifestation', meaning: 'A form in which something is shown or made evident.' },
  { word: 'harmony', meaning: 'A condition of peaceful agreement or fitting together.' },
  { word: 'intellect', meaning: 'The faculty of reason and understanding; in the chapter, described as a light from Allah.' },
  { word: 'piety', meaning: 'Devout moral and spiritual conduct directed toward Allah.' },
  { word: 'legacy', meaning: 'A lasting influence passed on to later generations.' },
];

export const yunusB2FinalReviewExercises: Exercise[] = [
  {
    id: 'yu-b2-r1', type: 'sequencing', title: 'Retrieval Review 1 — Historical and Intellectual Development', instructions: 'Put the major developments in narrative order.', question: 'How does the book move from Yunus Emre’s setting to his mature moral message?',
    sequencingItems: [
      { id: 'a', text: 'Yunus is introduced as a Sûfî poet who contributes to Old Anatolian Turkish.' },
      { id: 'b', text: 'His education and the social role of tekkes are explained.' },
      { id: 'c', text: 'Anatolia enters severe political and social crisis, followed by Kösedağ and Mongol domination.' },
      { id: 'd', text: 'Yunus appears as a wise dervish using poetry to respond to people in hard times.' },
      { id: 'e', text: 'The book develops his ideas about tawhid, love, heart and intellect.' },
      { id: 'f', text: 'The final chapters connect death-awareness, virtues, harmful habits and legacy.' },
    ],
    correctAnswer: ['a', 'b', 'c', 'd', 'e', 'f'], explanation: 'The sequence reconnects biography, context, response, thought and moral legacy.', feedback,
  },
  matching('yu-b2-r2', 'Match each analytical claim with the strongest supporting evidence.', [
    { left: 'The book qualifies some biographical claims', right: 'It uses phrases such as “Some sources note” and “widely accepted view”' },
    { left: 'Political domination became economic pressure', right: 'Increasing payments to the Mongols made the state and people poorer' },
    { left: 'Yunus’s response was cultural and spiritual rather than political rule', right: 'He travelled and used poetry as his medium in hard times' },
    { left: 'Moral behavior grows from an inward framework', right: 'Love, purity of heart, intellect and virtues are linked with action' },
  ], 'These pairs require claim-evidence reasoning across different parts of the book.', 'Retrieval Review 2 — Claim and Evidence'),
  {
    id: 'yu-b2-r3', type: 'reflection', title: 'Retrieval Review 3 — Reflection', instructions: 'Use precise story evidence and distinguish evidence from interpretation.', question: 'How does the book connect historical crisis with the importance of Yunus Emre’s poetic and moral voice?', correctAnswer: null,
    explanation: 'A strong response can connect migration, Kösedağ, Mongol dependency and social hardship with Yunus’s role as a travelling wise dervish who used poetry to address meaning, love and moral conduct.', feedback,
    discussionPrompts: [
      { question: 'Which chapter gives the strongest evidence for crisis affecting ordinary people?', mode: 'Individual' },
      { question: 'Where does the text move from historical explanation to spiritual interpretation?', mode: 'Pair' },
      { question: 'Which moral teaching is most clearly connected to a concrete action?', mode: 'Class' },
    ],
  },
  {
    id: 'yu-b2-r4', type: 'quiz-game', title: 'Retrieval Review 4 — Quiz Game', instructions: 'Answer eight new questions.', question: 'Can you retrieve relationships, qualifications and turning points?', correctAnswer: null, explanation: 'This quiz uses a separate evidence set from the Knowledge Check and Final Challenge.', feedback,
    quizQuestions: [
      { question: 'What does the contrast between madrasa and tekke add to Yunus’s educational portrait?', options: [{ text: 'It combines formal learning with spiritual and moral formation.', isCorrect: true }, { text: 'It proves he rejected formal learning.', isCorrect: false }, { text: 'It shows tekkes were military schools.', isCorrect: false }], hint: 'Compare the two educational settings.' },
      { question: 'Why is Alaeddin I included at the end of Chapter 3?', options: [{ text: 'His strong reign creates a contrast with the later decline and crisis.', isCorrect: true }, { text: 'He was Yunus’s sheikh.', isCorrect: false }, { text: 'He founded the Ilkhanate.', isCorrect: false }], hint: 'Think about contrast in historical conditions.' },
      { question: 'What made the Babai crisis more than a simple rebellion in the book?', options: [{ text: 'It is linked with governance, migration, nomadic unrest and religious expectation.', isCorrect: true }, { text: 'It is described only as a tax dispute.', isCorrect: false }, { text: 'It had no relation to wider instability.', isCorrect: false }], hint: 'Look for interacting causes.' },
      { question: 'Why is Celaleddin Karatay mentioned?', options: [{ text: 'As an example of a statesman trying to reduce pressure despite structural dependency.', isCorrect: true }, { text: 'As the commander who defeated the Mongols.', isCorrect: false }, { text: 'As Yunus’s poetry teacher.', isCorrect: false }], hint: 'He appears in the chapter on dependency.' },
      { question: 'What does the Creator-created relationship explain in Chapter 9?', options: [{ text: 'Why love extends from Allah to created beings and supports unity.', isCorrect: true }, { text: 'Why love should be limited to private feeling.', isCorrect: false }, { text: 'Why prayer is rejected.', isCorrect: false }], hint: 'Connect love with unity.' },
      { question: 'Why is breaking a heart morally serious in Chapter 10?', options: [{ text: 'The heart is described as the throne of the Lord and center of love.', isCorrect: true }, { text: 'The heart is a symbol of political rule.', isCorrect: false }, { text: 'The chapter says emotions replace worship.', isCorrect: false }], hint: 'Use the chapter’s metaphor.' },
      { question: 'What does the “guest in this world” image accomplish?', options: [{ text: 'It frames earthly life as temporary and supports moral preparation.', isCorrect: true }, { text: 'It encourages withdrawal from all responsibility.', isCorrect: false }, { text: 'It explains migration after Kösedağ.', isCorrect: false }], hint: 'Connect death-awareness with righteous living.' },
      { question: 'Why can the final poems be read as values-as-action rather than abstract praise?', options: [{ text: 'They call for patience and giving up anger and arrogance.', isCorrect: true }, { text: 'They avoid any behavioral implication.', isCorrect: false }, { text: 'They focus only on literary fame.', isCorrect: false }], hint: 'Identify the actions the verses demand.' },
    ],
  },
];

export const yunusB2FinalChallengeExercises: Exercise[] = [
  mc('yu-b2-f1', 'Which synthesis best explains why Yunus Emre’s literary importance cannot be separated from his Sûfî identity in this book?', ['His accessible Turkish carries a moral-spiritual tradition to a wider public.', 'His language matters only because it records military history.', 'His Sûfî identity is described as unrelated to his poetry.'], 0, 'The opening chapters connect language, literary tradition, values and Sûfî identity.', 'Final Challenge'),
  mc('yu-b2-f2', 'Which interpretation best explains the long historical section before the chapters on tawhid and love?', ['It establishes the crisis in which a wise dervish’s moral and spiritual message became socially meaningful.', 'It proves Yunus personally caused the Seljuk decline.', 'It replaces the need to study Yunus’s thought.'], 0, 'The text explicitly asks readers to understand the historical atmosphere in which Yunus lived and recited.', 'Final Challenge'),
  mc('yu-b2-f3', 'Which claim best synthesizes the chapters on heart, intellect and death?', ['Inner sensitivity, reason and awareness of mortality are presented as mutually reinforcing guides toward righteous life.', 'Reason is presented as the enemy of the heart.', 'Death-awareness is presented as unrelated to morality.'], 0, 'Chapters 10–11 connect heart, intellect, salvation and death’s advisory role.', 'Final Challenge'),
  tf('yu-b2-f4', 'The book presents Mongol domination as affecting politics but not the economy or ordinary people.', false, 'It describes tribute, poverty, destruction, captivity and widespread social suffering.', 'Final Challenge'),
  tf('yu-b2-f5', 'In the book, love is connected with both the Creator and the created and is associated with unity and harmony.', true, 'Chapter 9 explicitly makes these connections.', 'Final Challenge'),
  matching('yu-b2-f6', 'Match the historical condition with its consequence.', [
    { left: 'Kösedağ defeat', right: 'Mongol victory opens the way to devastation and stronger domination' },
    { left: 'Increasing Mongol payments', right: 'The Seljuk state and population become poorer' },
    { left: 'Mongol pressure across eastern regions', right: 'Shaykhs and dervishes move toward Anatolia' },
  ], 'The book repeatedly builds cause-and-consequence chains across the historical chapters.', 'Final Challenge'),
  matching('yu-b2-f7', 'Match the moral concept with the action or implication supported by the story.', [
    { left: 'Patience', right: 'Endure difficulty without surrendering moral discipline' },
    { left: 'Generosity', right: 'Give without expecting a return' },
    { left: 'Respect for the heart', right: 'Avoid actions that wound another person inwardly' },
  ], 'These concepts are presented as observable moral conduct, not labels alone.', 'Final Challenge'),
  fill('yu-b2-f8', 'Complete the source-aware sentence.', 'Some biographical claims are presented through historical [blank] rather than as unqualified certainty.', 'accounts', 'Chapter 2 uses explicit source-qualification language.', 'Final Challenge'),
  fill('yu-b2-f9', 'Complete the whole-book moral contrast.', 'Yunus praises humility and patience while warning against arrogance, anger and [blank].', 'greed', 'The final moral chapters repeatedly contrast virtues with destructive habits.', 'Final Challenge'),
  {
    id: 'yu-b2-f10', type: 'sequencing', title: 'Final Challenge', instructions: 'Put the reasoning chain in order.', question: 'Order the book’s broad argument from historical crisis to lasting legacy.',
    sequencingItems: [
      { id: '1', text: 'Anatolia experiences political, economic and social disruption.' },
      { id: '2', text: 'Yunus appears as a wise dervish and uses poetry as his medium.' },
      { id: '3', text: 'His poetry develops themes of tawhid, love, heart and intellect.' },
      { id: '4', text: 'These themes are connected with virtues and warnings against destructive habits.' },
      { id: '5', text: 'His writings remain both a literary and moral guide for later generations.' },
    ],
    correctAnswer: ['1', '2', '3', '4', '5'], explanation: 'The final sequence synthesizes context, response, thought, moral action and legacy.', feedback,
  },
];
