import type { Exercise, PageData } from '../../../types';
import { fallbackDefinitions } from '../../fallbackVocab';
import { mosesB2Pages } from './en/pages';

type VocabularyEntry = NonNullable<PageData['vocabulary']>[number];

type QuestionSpec = {
  chapterId: number;
  title: string;
  question: string;
  options: [string, string, string];
  correctAnswer: 0 | 1 | 2;
  explanation: string;
  retry: string;
};

export const mosesB2GoldContract = {
  storyIds: Array.from({ length: 24 }, (_, index) => index + 1),
  knowledgeCheckPageId: 25,
  vocabularyPageId: 26,
  glossaryPageIds: [27, 28] as const,
  reviewPageId: 29,
  finalChallengePageId: 30,
  knowledgeQuestions: 8,
  reviewQuestions: 8,
  finalQuestions: 10,
} as const;

const normalize = (value: string): string => value
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();

const rotateObjectiveOptions = (exercise: Exercise): Exercise => {
  if (
    exercise.type !== 'multiple-choice'
    || !exercise.options
    || exercise.options.length < 2
    || typeof exercise.correctAnswer !== 'number'
  ) return exercise;

  const shift = [...exercise.id].reduce((sum, char) => sum + char.charCodeAt(0), 0) % exercise.options.length;
  if (!shift) return exercise;

  return {
    ...exercise,
    options: [...exercise.options.slice(-shift), ...exercise.options.slice(0, -shift)],
    correctAnswer: (exercise.correctAnswer + shift) % exercise.options.length,
  };
};

const buildQuestion = (spec: QuestionSpec, id: string): Exercise => rotateObjectiveOptions({
  id,
  type: 'multiple-choice',
  title: spec.title,
  instructions: 'Choose the best answer. Use evidence from the chapter.',
  question: spec.question,
  options: [...spec.options],
  correctAnswer: spec.correctAnswer,
  explanation: spec.explanation,
  feedback: {
    correct: `Correct. ${spec.explanation}`,
    incorrect: spec.retry,
  },
});

export const mosesB2QuestionSpecs: QuestionSpec[] = [
  {
    chapterId: 1,
    title: 'Historical Cause and Effect',
    question: 'Why did Egyptian rulers begin to see the growing Israelite community as a political threat?',
    options: [
      'Their population was increasing rapidly, and rulers feared they might become a ruling class.',
      'They had stopped living in Egypt and moved permanently to Canaan.',
      'They controlled the Nile and refused to let Egyptians use it.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter connects rapid population growth with the rulers’ fear that the Israelites could become a ruling class.',
    retry: 'Return to the final sentences of Chapter 1 and identify the rulers’ stated fear about population growth and political control.',
  },
  {
    chapterId: 2,
    title: 'Historical Caution',
    question: 'Which statement best reflects the chapter’s level of certainty about the Exodus and the Pharaoh who drowned?',
    options: [
      'The exact date is unknown; the chapter says many sources place the Exodus in the early thirteenth century BC and presents Ramses II as probable.',
      'The chapter proves the Exodus happened on one exact date and identifies Ramses II with complete certainty.',
      'The chapter says no historical source connects the Exodus with the thirteenth century BC.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter explicitly says the exact date is unknown and uses cautious wording such as “most sources” and “probably” for Ramses II.',
    retry: 'Look for the phrases “most of the sources,” “probably,” and “exact date ... unknown.”',
  },
  {
    chapterId: 3,
    title: 'Power and Resources',
    question: 'How does the chapter connect control of the Nile with Pharaoh’s political authority?',
    options: [
      'Large Nile projects required administration and forced manpower, linking control of resources with centralized power.',
      'The Nile made political authority unnecessary because farming required no organization.',
      'Pharaoh’s authority depended only on religious ceremonies and had no connection with labor or agriculture.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter links irrigation and transport projects, large labor demands, and strong administration with Pharaoh’s god-king authority.',
    retry: 'Reread the final third of Chapter 3 and connect the words manpower, administration, and authority.',
  },
  {
    chapterId: 4,
    title: 'A Repeated Water Motif',
    question: 'Why is water presented as an important connecting image in this chapter?',
    options: [
      'Moses survives through the Nile as a baby, and the chapter foreshadows the later salvation of his people at the Red Sea.',
      'Moses becomes a sailor and spends most of his life travelling by river.',
      'The chapter argues that the Nile and Red Sea were the same body of water.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter explicitly links baby Moses’s journey through the Nile with the later salvation of Moses and his people through the Red Sea.',
    retry: 'Compare the final two sentences of Chapter 4 with the description of baby Moses in the Nile.',
  },
  {
    chapterId: 5,
    title: 'Fear and Oppression',
    question: 'What cause-and-effect relationship is central to Pharaoh’s command in this chapter?',
    options: [
      'Fear of losing his throne led Pharaoh to use increasingly cruel measures against the Children of Israel.',
      'Economic prosperity made Pharaoh less interested in controlling the Israelites.',
      'Queen Asiye’s request caused Pharaoh to free the Children of Israel immediately.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter connects Pharaoh’s fear of an Israelite boy threatening his throne with his oppressive command.',
    retry: 'Identify what Pharaoh feared after the vision and what action followed that fear.',
  },
  {
    chapterId: 6,
    title: 'Policy and Manpower',
    question: 'Why did Pharaoh change from killing male Israelite babies every year to an alternating-year policy?',
    options: [
      'The killings were reducing the manpower needed for Egypt’s heavy work, so his economic advisers proposed a new policy.',
      'He had decided that forced labor was no longer useful to the Egyptian economy.',
      'He wanted the Israelite population to become politically stronger than the Egyptians.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter says Pharaoh began to lose manpower because the Israelites performed much of the heavy work, so advisers proposed alternating years.',
    retry: 'Find the paragraph that links the killing policy with manpower and the advice of economic experts.',
  },
  {
    chapterId: 7,
    title: 'Character Contrast',
    question: 'What contrast does Queen Asiye’s response to baby Moses create inside Pharaoh’s palace?',
    options: [
      'Her compassion and secret belief contrast with Pharaoh’s coercive and fearful use of power.',
      'Her response shows that she and Pharaoh had exactly the same values and priorities.',
      'Her main concern is proving that the baby can become a military commander.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter presents Asiye as kind-hearted and a secret believer, creating a moral contrast with her husband’s oppressive rule.',
    retry: 'Compare how the chapter describes Queen Asiye with how earlier chapters describe Pharaoh.',
  },
  {
    chapterId: 8,
    title: 'Identity and Moral Conflict',
    question: 'Why does Moses experience an inner conflict as he grows up in the palace?',
    options: [
      'He benefits from palace life but feels connected to the oppressed Israelites and is drawn toward justice.',
      'He cannot decide whether to become an Egyptian magician or a Nile sailor.',
      'He wants to leave the palace only because he dislikes royal food.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter places Moses between palace privilege and his connection to the Children of Israel, who look to him for protection and justice.',
    retry: 'Reread the sentences about palace life, oppression, Moses’s mother, and the weak people seeking his protection.',
  },
  {
    chapterId: 9,
    title: 'Mistake and Response',
    question: 'What does Moses’s immediate reaction after the accidental killing reveal about his character?',
    options: [
      'He recognizes the wrong, feels fear and sadness, and turns to Allah for forgiveness rather than celebrating the act.',
      'He treats the death as a victory and looks for another fight.',
      'He refuses to accept any responsibility because the victim was Egyptian.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter stresses that the killing was unintentional and that Moses immediately turned to Allah in fear, sadness, and repentance.',
    retry: 'Focus on the sentences immediately after the Egyptian dies and compare Moses’s reaction with the other options.',
  },
  {
    chapterId: 10,
    title: 'Learning from Repeated Conflict',
    question: 'What does the second conflict involving the same Israelite help Moses recognize?',
    options: [
      'The man repeatedly becomes involved in disputes, so Moses calls him a troublemaker and becomes more cautious about the situation.',
      'The first conflict had never happened and Moses had imagined it.',
      'The Israelite had become an official adviser to Pharaoh.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter shows the same man asking for help again; Moses identifies him as a troublemaker while the earlier killing becomes publicly known.',
    retry: 'Compare the second-day request for help with Moses’s words to the Israelite.',
  },
  {
    chapterId: 11,
    title: 'Decision Under Threat',
    question: 'Why does the warning from the man at the far end of the city become a turning point for Moses?',
    options: [
      'It gives concrete evidence that the chiefs are planning to kill him, so Moses leaves Egypt for safety.',
      'It tells him that Pharaoh has decided to make him the next ruler.',
      'It proves that the route to Midian is controlled by Pharaoh’s army.',
    ],
    correctAnswer: 0,
    explanation: 'The warning changes Moses’s situation from general fear to an immediate threat: the chiefs are taking counsel to kill him.',
    retry: 'Find what the running man says the chiefs are planning and what Moses does next.',
  },
  {
    chapterId: 12,
    title: 'Character Through Action',
    question: 'What can be inferred from Moses noticing the two women’s hardship while he is exhausted and hungry himself?',
    options: [
      'He remains attentive to other people’s needs even while facing serious hardship of his own.',
      'He helps only because he expects the women to pay him immediately.',
      'His exhaustion makes him unable to notice anything happening around the well.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter says Moses urgently needs rest, food, drink, and sandals, yet he notices the women’s difficulty and approaches to offer help.',
    retry: 'Compare Moses’s own physical condition with what he notices and offers to do for the women.',
  },
  {
    chapterId: 13,
    title: 'From Isolation to Safety',
    question: 'Why is the invitation to the girls’ home important in Moses’s journey?',
    options: [
      'It moves him from hunger and isolation toward a safe, harmonious household where his story can be heard.',
      'It sends him directly back to Pharaoh’s palace in Egypt.',
      'It ends his contact with the family immediately after the meal.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter contrasts Moses’s exhausted isolation with a comfortable and harmonious home that welcomes him and hears why he fled Egypt.',
    retry: 'Look at Moses’s condition before the invitation and the description of the household after he arrives.',
  },
  {
    chapterId: 14,
    title: 'Preparation Before Mission',
    question: 'How does the chapter interpret Moses’s ten years of shepherd life in Midian?',
    options: [
      'As a period of work, stability, and spiritual preparation before his prophetic mission.',
      'As a period in which he permanently abandons all responsibility toward his people.',
      'As military training organized by Pharaoh’s officials.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter explicitly describes the ten years in Midian as an important period of spiritual preparation for prophethood.',
    retry: 'Find the sentence that explains why the ten-year period was important in Moses’s life.',
  },
  {
    chapterId: 15,
    title: 'Attention Before the Sign',
    question: 'According to the chapter, why is Moses asked about the ordinary staff before it changes?',
    options: [
      'The question focuses his attention on the familiar object before the miraculous transformation.',
      'The staff is being inspected because Moses is not allowed to carry wood on the mountain.',
      'Moses has forgotten what the object in his hand is called.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter explicitly says the question about the staff makes Moses focus on it in preparation for the miracle that follows.',
    retry: 'Reread the sentence immediately before the staff is thrown down.',
  },
  {
    chapterId: 16,
    title: 'Signs and Responsibility',
    question: 'How do the two signs connect with Moses’s new mission in this chapter?',
    options: [
      'They are given as signs from his Lord before he is commanded to go to Pharaoh and his chiefs.',
      'They are given so Moses can avoid speaking to Pharaoh entirely.',
      'They are mainly tools for making his shepherd work easier in Midian.',
    ],
    correctAnswer: 0,
    explanation: 'The staff and shining hand are presented as two signs, followed directly by the command to confront Pharaoh and his chiefs.',
    retry: 'Connect the description of the two miracles with the command that follows them.',
  },
  {
    chapterId: 17,
    title: 'Continuity of the Message',
    question: 'What continuity does the chapter emphasize when it connects Moses with Jacob and Abraham?',
    options: [
      'It presents Moses’s mission as part of the same monotheistic prophetic tradition described for his forefathers.',
      'It claims Moses introduced a completely unrelated system of worship.',
      'It says family ancestry alone was more important than worship and guidance.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter explicitly links Moses to Jacob and Abraham and describes his religion as the same monotheistic tradition.',
    retry: 'Reread the final sentences about Jacob, Abraham, descendants, and monotheism.',
  },
  {
    chapterId: 18,
    title: 'Pharaoh’s Rhetorical Strategy',
    question: 'Why does Pharaoh remind Moses that he was raised in the palace and received its food and wealth?',
    options: [
      'He uses Moses’s past dependence on the palace to undermine his present demand and assert power over him.',
      'He is preparing to apologize for the oppression of the Children of Israel.',
      'He wants Moses to become a palace historian and stop discussing freedom.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter presents Pharaoh using Moses’s palace upbringing and dependence as a mocking challenge to his authority and request.',
    retry: 'Notice the sequence of Pharaoh’s questions about Moses’s name, childhood, palace upbringing, food, and wealth.',
  },
  {
    chapterId: 19,
    title: 'From Argument to Evidence',
    question: 'Why does Moses move from extended dialogue to displaying the signs?',
    options: [
      'Pharaoh rejects the discussion and openly threatens imprisonment, so Moses offers something convincing and true.',
      'Moses has forgotten the message and wants to entertain the court.',
      'Pharaoh has already accepted monotheism and asks only for a celebration.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter says intellectual discussion does not work, Pharaoh threatens Moses, and Moses then offers to bring a convincing sign.',
    retry: 'Follow the sequence from Pharaoh’s accusation and threat to Moses’s question about bringing something convincing.',
  },
  {
    chapterId: 20,
    title: 'Political Use of the Contest',
    question: 'Why do Pharaoh’s advisers recommend calling the cleverest magicians?',
    options: [
      'They hope imitation will reduce the public impact of Moses’s signs and protect Pharaoh’s authority.',
      'They want the magicians to become students of Moses before the crowd arrives.',
      'They believe no public audience should see the contest.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter says the advisers want magicians to imitate the signs so the impact of Moses’s miracles on the population will be reduced.',
    retry: 'Look for the sentence explaining what the advisers hoped the magicians would achieve in public.',
  },
  {
    chapterId: 21,
    title: 'Recognition by Experts',
    question: 'Why does the magicians’ belief create such a serious defeat for Pharaoh?',
    options: [
      'The chapter presents them as elite experts in illusion, so their recognition of Moses’s sign undermines Pharaoh’s attempt to dismiss it as magic.',
      'They are the only people in Egypt who know how to read and write.',
      'Their belief gives Pharaoh a larger army and stronger political control.',
    ],
    correctAnswer: 0,
    explanation: 'Because the magicians are presented as elite experts, their acceptance of the sign as genuine destroys the intended propaganda value of the contest.',
    retry: 'Connect the description of the magicians as elite intellectual experts with Pharaoh’s purpose for organizing the contest.',
  },
  {
    chapterId: 22,
    title: 'Panic and Trust',
    question: 'What contrast is central when the Children of Israel reach the Red Sea and Pharaoh’s army catches up?',
    options: [
      'The people panic because they appear trapped, while Moses expresses trust that Allah will guide them to safety.',
      'The people remain calm while Moses decides to surrender to Pharaoh.',
      'Both groups believe Pharaoh has opened the sea before Moses acts.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter contrasts the Israelites’ panic with Moses’s statement that Allah is with them and will show them the way to safety.',
    retry: 'Compare the people’s reaction when they see Pharaoh’s army with Moses’s response immediately afterward.',
  },
  {
    chapterId: 23,
    title: 'Arrogance After Evidence',
    question: 'What does Pharaoh’s claim that the sea opened at his command reveal about his response to the miracle?',
    options: [
      'He interprets even contrary evidence through his own arrogance and claim to power.',
      'He accepts Moses’s message and tells his army to stop following the Israelites.',
      'He admits that he has no authority and asks Moses for guidance before entering the sea.',
    ],
    correctAnswer: 0,
    explanation: 'Even after witnessing the opened sea, Pharaoh claims it demonstrates his own power, showing that his arrogance shapes how he interprets the event.',
    retry: 'Reread Pharaoh’s words after he sees the opened sea and compare them with what actually caused the sea to part.',
  },
  {
    chapterId: 24,
    title: 'Freedom and Responsibility',
    question: 'Why is the calf episode important after the Children of Israel have escaped Pharaoh?',
    options: [
      'It shows that liberation from oppression does not automatically remove the need for faith, gratitude, guidance, and moral discipline.',
      'It shows that leaving Egypt immediately solved every spiritual and social problem the people faced.',
      'It proves Moses’s mission ended before he received the Torah.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter places the people’s attraction to idol worship and the calf after their rescue, showing that freedom must be followed by continued guidance and responsibility.',
    retry: 'Compare what happened after salvation with the people’s request for an idol and the later calf episode.',
  },
];

const specByChapter = new Map(mosesB2QuestionSpecs.map((spec) => [spec.chapterId, spec]));

const uniqueVocabulary = (entries: VocabularyEntry[]): VocabularyEntry[] => {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    const key = normalize(entry.word);
    if (!key || seen.has(key) || !entry.definition?.trim()) return false;
    seen.add(key);
    return true;
  });
};

const bookDefinitionMap = new Map<string, string>();
for (const page of mosesB2Pages) {
  for (const entry of page.vocabulary || []) {
    const key = normalize(entry.word);
    if (key && !bookDefinitionMap.has(key) && entry.definition?.trim()) {
      bookDefinitionMap.set(key, entry.definition.trim());
    }
  }
}
for (const [word, definition] of Object.entries(fallbackDefinitions)) {
  const key = normalize(word);
  if (key && !bookDefinitionMap.has(key) && definition.trim()) bookDefinitionMap.set(key, definition.trim());
}

const normalizeChapterVocabulary = (page: PageData): VocabularyEntry[] => {
  const current = uniqueVocabulary([...(page.vocabulary || [])]);
  const additions: VocabularyEntry[] = [];

  for (const word of page.animatedWords || []) {
    const key = normalize(word);
    if (!key || current.some((entry) => normalize(entry.word) === key)) continue;
    const definition = bookDefinitionMap.get(key);
    if (definition) additions.push({ word, definition });
  }

  if (current.length + additions.length < 5) {
    const content = ` ${normalize(page.content)} `;
    const candidates = [...bookDefinitionMap.entries()]
      .filter(([key]) => key.length >= 5 && content.includes(` ${key} `))
      .sort((a, b) => b[0].length - a[0].length);
    for (const [key, definition] of candidates) {
      if ([...current, ...additions].some((entry) => normalize(entry.word) === key)) continue;
      additions.push({ word: key, definition });
      if (current.length + additions.length >= 5) break;
    }
  }

  return uniqueVocabulary([...current, ...additions]).slice(0, 7);
};

const storyPages = mosesB2GoldContract.storyIds.map((id) => {
  const page = mosesB2Pages.find((candidate) => candidate.id === id && candidate.type === 'story');
  if (!page) throw new Error(`Moses B2 Gold: canonical story page ${id} is missing.`);
  const spec = specByChapter.get(id);
  if (!spec) throw new Error(`Moses B2 Gold: Quick Challenge spec for chapter ${id} is missing.`);
  return {
    ...page,
    vocabulary: normalizeChapterVocabulary(page),
    exercises: [buildQuestion(spec, `moses-b2-gold-qc-${id}`)],
  };
});

const storyById = new Map(storyPages.map((page) => [page.id, page]));

const pickSpecs = (chapterIds: number[], prefix: string): Exercise[] => chapterIds.map((chapterId, index) => {
  const spec = specByChapter.get(chapterId);
  if (!spec) throw new Error(`Moses B2 Gold: assessment source chapter ${chapterId} is missing.`);
  return buildQuestion(spec, `${prefix}-${index + 1}`);
});

const knowledge = pickSpecs([1, 4, 7, 10, 13, 16, 19, 22], 'moses-b2-gold-k');
const review = pickSpecs([3, 6, 9, 12, 15, 18, 21, 24], 'moses-b2-gold-r');
const finalChallenge = pickSpecs([2, 5, 8, 11, 14, 16, 18, 20, 22, 23], 'moses-b2-gold-f');

const allVocabulary = uniqueVocabulary(storyPages.flatMap((page) => page.vocabulary || []));
const vocabularyPairs = allVocabulary.slice(0, 10).map((entry) => ({ word: entry.word, meaning: entry.definition }));

const midpoint = Math.ceil(storyPages.length / 2);
const glossary1 = uniqueVocabulary([
  ...storyPages.slice(0, midpoint).flatMap((page) => page.vocabulary || []),
  ...allVocabulary,
]).slice(0, 18);
const glossary2 = uniqueVocabulary([
  ...storyPages.slice(midpoint).flatMap((page) => page.vocabulary || []),
  ...allVocabulary,
]).slice(0, 18);

export const mosesB2PagesGoldEn: PageData[] = mosesB2Pages.map((page) => {
  const story = storyById.get(page.id);
  if (story) return story;

  if (page.id === mosesB2GoldContract.knowledgeCheckPageId) {
    return {
      ...page,
      content: 'Review evidence, causes, contrasts, and turning points across the B2 story of Prophet Moses (pbuh).',
      exercises: knowledge,
    };
  }

  if (page.id === mosesB2GoldContract.vocabularyPageId) {
    return {
      ...page,
      content: 'Match ten useful B2 words or phrases from the story with their meanings.',
      vocabularyPairs,
    };
  }

  if (page.id === mosesB2GoldContract.glossaryPageIds[0]) {
    return {
      ...page,
      content: 'Selected B2 vocabulary from the first half of the canonical story.',
      vocabulary: glossary1,
    };
  }

  if (page.id === mosesB2GoldContract.glossaryPageIds[1]) {
    return {
      ...page,
      content: 'Selected B2 vocabulary from the second half of the canonical story.',
      vocabulary: glossary2,
    };
  }

  if (page.id === mosesB2GoldContract.reviewPageId) {
    return {
      ...page,
      title: 'B2 Review Challenge',
      content: 'Connect evidence, causes, character choices, contrasts, and consequences before the Final Challenge.',
      exercises: review,
    };
  }

  if (page.id === mosesB2GoldContract.finalChallengePageId) {
    return {
      ...page,
      title: 'B2 Final Challenge',
      content: 'Complete ten objective questions covering the whole canonical story. Support each answer with evidence from the text.',
      exercises: finalChallenge,
    };
  }

  return page;
});
