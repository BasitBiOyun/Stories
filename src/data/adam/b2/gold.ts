import type {
  Exercise,
  StudentGuideMetadata,
  StudentGuideSection,
  TeacherGuideMetadata,
} from '../../../types';
import { applyB2GoldPages, type B2GoldPageConfig } from '../../b2GoldFactory';
import { buildB2EvidenceGuides } from '../../b2GoldGuides';
import { adamB2Pages } from './en/pages';

const config: B2GoldPageConfig = {
  storyIds: Array.from({ length: 17 }, (_, index) => index + 1),
  knowledgeCheckPageId: 18,
  reviewPageId: 19,
  glossaryPageIds: [20, 21],
  finalChallengePageId: 22,
};

const mc = (
  chapterId: number,
  title: string,
  question: string,
  options: [string, string, string],
  correctAnswer: 0 | 1 | 2,
  explanation: string,
  retry: string,
): Exercise => ({
  id: `adam-b2-gold-qc-${chapterId}`,
  type: 'multiple-choice',
  title,
  instructions: 'Choose the best answer. Use evidence from the chapter.',
  question,
  options,
  correctAnswer,
  explanation,
  feedback: {
    correct: `Correct. ${explanation}`,
    incorrect: retry,
  },
});

const quickChallengeOverrides: Record<number, Exercise> = {
  1: mc(
    1,
    'How the Story Frames Human Life',
    'How does the introduction frame Satan’s role in the wider human story?',
    [
      'As a rebel against Allah who is presented especially as a rival and enemy of Adam and humanity.',
      'As an equal power competing with Allah for control of creation.',
      'As a neutral observer who has no relationship with human choices.',
    ],
    0,
    'The introduction calls Satan a rebel against Allah but emphasizes his position as a rival and enemy of Adam rather than a rival to Allah.',
    'Return to the final sentences of the first paragraph and identify whom the chapter presents as Satan’s rival and enemy.',
  ),
  2: mc(
    2,
    'Origin and Human Equality',
    'How does the chapter use the hadith about dust from different lands to support its argument about human equality?',
    [
      'Human beings may differ in appearance and character, yet they share the same earthly origin, so colour does not create superiority.',
      'Different colours prove that some groups were created from a more valuable material than others.',
      'The hadith is used mainly to explain why people must live in different geographical regions.',
    ],
    0,
    'The chapter connects variation in the soil with human diversity and then explicitly states that people share the same soil and have no superiority because of colour.',
    'Reread the paragraph containing the hadith and the sentence immediately after it.',
  ),
  3: mc(
    3,
    'Knowledge and Human Capacity',
    'What larger human capacity does the chapter connect with the statement that Adam was taught “all the names”?',
    [
      'The capacity to learn, use language and intelligence, form judgments, and develop science, technology, and culture.',
      'A guarantee that every human would automatically know every future event.',
      'A purely physical advantage that made language and learning unnecessary.',
    ],
    0,
    'The chapter interprets the names as pointing to learning, language, intelligence, logical judgment, and the foundations of civilization and culture.',
    'Focus on the final paragraph and list the abilities the chapter connects with “the names.”',
  ),
  4: mc(
    4,
    'Two Forms of Knowledge',
    'Why does the chapter say worldly knowledge and revelation should not be treated as alternatives?',
    [
      'Because one supports worldly life while revelation helps humanity understand its role, duty, and the order established by Allah.',
      'Because revelation replaces every form of learning needed for worldly life.',
      'Because worldly knowledge alone explains every moral and religious duty described in the chapter.',
    ],
    0,
    'The chapter says the two forms of knowledge complete one another: worldly knowledge is needed for earthly life, while revelation explains role, duty, and divine order.',
    'Find the sentence that uses the words “not alternatives” and “complete one another.”',
  ),
  5: mc(
    5,
    'Respect, Obedience, and False Superiority',
    'What contrast does the chapter create between the angels’ prostration and Iblis’s refusal?',
    [
      'The angels obey Allah and recognize Adam’s God-given knowledge, while Iblis judges worth by material origin and becomes arrogant.',
      'Both the angels and Iblis judge Adam only by the material from which he was created.',
      'The angels worship Adam while Iblis refuses because he believes worship belongs only to Allah.',
    ],
    0,
    'The chapter explicitly says the prostration is obedience to Allah and respect for Adam, while Iblis’s refusal comes from claiming superiority because of his origin.',
    'Compare the paragraph explaining the meaning of prostration with the paragraph explaining Iblis’s arrogance.',
  ),
  6: mc(
    6,
    'The Warning and Satan’s Strategy',
    'What strategy does Satan announce after Adam and Eve are warned about the tree?',
    [
      'He will wait on the straight path and approach human beings from different directions in order to mislead them and make them ungrateful.',
      'He will leave Adam and his descendants completely alone after being expelled.',
      'He will force Adam to disobey without using temptation or deception.',
    ],
    0,
    'The quoted verses describe Satan waiting on the straight path and approaching from several directions, while saying that many will not be grateful.',
    'Return to the quoted verses from Surah A’raf and identify the repeated directions and the intended result.',
  ),
  7: mc(
    7,
    'How Deception Works',
    'How does Satan make the forbidden tree appear attractive in this chapter?',
    [
      'He reframes the prohibition as something keeping Adam and Eve from becoming angels or immortals and presents himself as a sincere adviser.',
      'He openly admits that the tree will cause shame and asks them to eat anyway.',
      'He threatens them with immediate punishment if they refuse the fruit.',
    ],
    0,
    'The chapter shows Satan promising angelic status or immortality and swearing that he is a sincere adviser, gradually changing how they view the tree.',
    'Identify both the promise attached to the tree and the identity Satan claims for himself.',
  ),
  8: mc(
    8,
    'Textual Detail and Interpretation',
    'Which statement best respects the chapter’s own limits when discussing the forbidden tree?',
    [
      'The Qur’an does not identify the kind of tree; the chapter only states that Satan deceived Adam and Eve and separately reports an interpretation about when the event occurred.',
      'The chapter identifies the exact species of the tree and treats that identification as a central Qur’anic fact.',
      'The chapter says Adam and Eve were never warned about any tree in Paradise.',
    ],
    0,
    'The chapter explicitly says the tree is not described in the Qur’an and distinguishes that fact from the later scholarly interpretation it reports.',
    'Reread the final paragraph and separate what the chapter says the Qur’an states from what it attributes to Islamic scholars.',
  ),
  9: mc(
    9,
    'Repentance as a Moral Response',
    'What does the chapter present as the key response that allows Adam to remain an honoured human after making a mistake?',
    [
      'Recognizing the mistake, looking for the fault within himself, and immediately turning to Allah in repentance.',
      'Denying responsibility and blaming the command itself.',
      'Treating the mistake as proof that guidance is no longer necessary.',
    ],
    0,
    'The chapter closes by saying humans may sin or rebel, but must recognize mistakes, seek the fault within themselves, and immediately turn to Allah.',
    'Use the final sentences of the chapter rather than only recalling the event of descent.',
  ),
  10: mc(
    10,
    'Descent and Vicegerency',
    'Why does the chapter reject the idea that Adam’s descent to Earth necessarily meant humiliation?',
    [
      'It presents earthly settlement as part of vicegerency and as a setting in which humanity learns about its enemy and follows the Creator’s guidance.',
      'It says earthly life required no responsibility, work, or moral struggle.',
      'It argues that the location reports themselves prove that life on Earth was a punishment.',
    ],
    0,
    'The chapter calls the settlement honourable and connects the earlier experience with the knowledge needed for vicegerency and the struggle against Satan.',
    'Reread the first two paragraphs and connect the words experience, cornerstone, vicegerency, and honourable settlement.',
  ),
  11: mc(
    11,
    'Meaning in Earthly Responsibility',
    'How does the chapter connect Adam’s grief on Earth with a continuing sense of purpose?',
    [
      'Although earthly life brings struggle, Adam has responsibility to cultivate, construct, populate, and raise future generations while resisting evil.',
      'His grief ends because the chapter says Earth contains no conflict or hard work.',
      'His only responsibility is to wait passively until he can return to Paradise.',
    ],
    0,
    'The chapter describes continuous struggle but also gives Adam constructive responsibilities on Earth, including cultivation, building, population, and raising children.',
    'Compare the paragraphs about conflict and grief with the final sentences describing Adam’s work on Earth.',
  ),
  12: mc(
    12,
    'Wisdom Rather Than Unnecessary Detail',
    'Why does the chapter draw attention to the Qur’an not naming the two sons or giving all the details found in other accounts?',
    [
      'It argues that the essential focus is the wisdom of the story rather than every narrative detail.',
      'It claims the conflict between the two sons never happened.',
      'It says the names are the only information that matters for understanding the episode.',
    ],
    0,
    'The chapter explicitly says the Qur’anic narration is simple and that the necessary point is the wisdom of the story, not all additional details.',
    'Find the paragraph that comments on how the Qur’an narrates the story and what needs to be known.',
  ),
  13: mc(
    13,
    'Self-Control and Human Potential',
    'What does Habil’s response to Qabil’s threat illustrate in the chapter’s discussion of human nature?',
    [
      'Human beings have potential for good and evil, and goodness requires controlling harmful desires rather than answering aggression with aggression.',
      'Human beings are naturally incapable of jealousy, selfishness, or harmful choices.',
      'The chapter presents aggression as the only effective response to a threat.',
    ],
    0,
    'The chapter contrasts Habil’s non-aggressive response with Qabil’s harmful desires and states that the path to goodness requires controlling evil thoughts and actions.',
    'Reread the paragraph beginning with the idea that humans have the potential for both good and evil.',
  ),
  14: mc(
    14,
    'The Raven and Human Dignity',
    'What function does the raven episode serve after Qabil kills his brother?',
    [
      'It teaches Qabil how to bury the body and is presented as preserving the dignity of a human being even after death.',
      'It teaches Qabil how to escape punishment by hiding permanently in the wilderness.',
      'It proves that Qabil already knew burial practices before the murder.',
    ],
    0,
    'The chapter says Qabil did not know what to do with the corpse and presents the ravens as teaching burial while preserving human highness after death.',
    'Look at the final part of the chapter and identify both the practical lesson and the reason given for it.',
  ),
  15: mc(
    15,
    'From Jealousy to Consequence',
    'How does the chapter explain the moral chain that leads from jealousy to Qabil’s regret?',
    [
      'Jealousy defeats love and compassion, choosing evil brings destructive consequences, and only afterward does Qabil experience shame and guilt.',
      'Jealousy strengthens brotherhood and leads Qabil to correct his behaviour before any harm occurs.',
      'The chapter says Qabil feels no regret after learning how to bury Habil.',
    ],
    0,
    'The chapter explicitly connects jealousy with the defeat of brotherly love and compassion, describes the consequences of choosing evil, and then records Qabil’s shame and regret.',
    'Trace the words jealousy, consequences, shame, guilt, and regret through the chapter.',
  ),
  16: mc(
    16,
    'The Legacy of Guidance',
    'What common element does the chapter say unites the prophets despite different names and miracles?',
    [
      'They call people to follow Allah’s straight path.',
      'They all have exactly the same personal history and miracles.',
      'They remove the need for later generations to make moral choices.',
    ],
    0,
    'The chapter states that prophets would have different names and miracles but would be united in calling people to Allah’s straight path.',
    'Return to the paragraph describing Adam’s final advice to his children and identify what remains common across the prophets.',
  ),
  17: mc(
    17,
    'Human Weakness and Satan’s Limits',
    'According to the chapter, why can Satan appear powerful even though he has no authority over sincere servants?',
    [
      'Human weakness, lack of morals, and lack of carefulness can make his temptation appear stronger than it is.',
      'The chapter says Satan has complete authority over every human being without exception.',
      'His power comes from being an equal rival to Allah.',
    ],
    0,
    'The chapter says Satan has no authority over sincere servants and adds that human weakness, lack of morals, and lack of carefulness make him look strong.',
    'Compare the quoted verses about Satan’s authority with the paragraph explaining why he may look strong.',
  ),
};

export const adamB2PagesGoldEn = applyB2GoldPages({
  canonicalPages: adamB2Pages,
  config,
  language: 'en',
  quickChallengeOverrides,
});

const guides = buildB2EvidenceGuides({
  effectivePages: adamB2PagesGoldEn,
  storyIds: config.storyIds,
  language: 'en',
});

export const adamB2TeacherGuideGoldEn = guides.teacherGuide;
export const adamB2SelfStudyGuideGoldEn = guides.selfStudyGuide;

export const adamB2StudentGuideSectionsGoldEn: StudentGuideSection[] = [
  {
    title: '1. Study the Canonical Story',
    icon: 'BookOpen',
    text: 'Study all 17 story chapters in order. Treat the chapter prose as the source of truth for exercises and analysis.',
    points: ['17 canonical chapters', 'Use chapter evidence', 'Do not rely on outside facts'],
  },
  {
    title: '2. Read in Three Passes',
    icon: 'Search',
    text: 'Read first for gist, second for evidence and vocabulary, and third for inference, comparison, or evaluation.',
    points: ['Gist', 'Evidence and Word Notes', 'B2 analysis'],
  },
  {
    title: '3. Use Quick Challenge as Practice',
    icon: 'Target',
    text: 'After each chapter, answer the visible Quick Challenge. If the answer is wrong or uncertain, return to the relevant paragraph before retrying.',
    points: ['Answer with evidence', 'Use feedback', 'Reread and retry'],
  },
  {
    title: '4. Separate Evidence and Reflection',
    icon: 'Layers',
    text: 'First state what the chapter supports. Add personal or values-based reflection only after clearly separating it from textual evidence.',
    points: ['Text first', 'Inference second', 'Reflection clearly labelled'],
  },
  {
    title: '5. Whole-Book Review',
    icon: 'Award',
    text: 'Use the 8-question Knowledge Check, the 8-question Review Challenge, two Master Glossary sections, and the 10-question Final Challenge to locate gaps and revisit chapters.',
    points: ['Knowledge: 8', 'Review: 8', 'Final: 10'],
  },
];

const chapterList = adamB2PagesGoldEn
  .filter((page) => page.type === 'story')
  .map((page) => `${page.id}. ${page.title}`)
  .join('\n');

export const adamB2StudentGuideTextGoldEn = `# Adam B2 Self-Study Guide

Study these 17 canonical chapters in order:\n\n${chapterList}\n\nFor every chapter, preview the title and Word Notes, read once for gist, reread for evidence, complete the Quick Challenge, and write a short claim-evidence-explanation response. If an answer is wrong or uncertain, return to the relevant paragraph before retrying. Keep textual evidence, interpretation, and personal reflection clearly separated.

After the story chapters, complete the 8-question Knowledge Check, the 8-question Review Challenge, review both Master Glossary sections, and finish with the 10-question Final Challenge. Use mistakes as signals for targeted rereading rather than guessing from general religious or historical knowledge.`;

export const adamB2TeacherGuideMetadataGoldEn: TeacherGuideMetadata = {
  title: 'Prophet Adam B2 Teacher Guide — Gold Standard',
  level: 'B2',
  estimatedDuration: '17 chapter lessons plus review and final assessment',
  targetLearners: 'Upper-intermediate secondary or adult English learners working around CEFR B2.',
  assessmentEvidence: 'Evidence selection, cause-effect explanation, comparison, inference, vocabulary in context, and short analytical writing.',
  readingFramework: {
    before: 'Use titles, visuals, and a small amount of vocabulary preparation for orientation and prediction.',
    during: 'Read for gist, then reread for evidence. Use the Quick Challenge as reinforcement and require a return to the chapter after weak or incorrect answers.',
    after: 'Move from text-supported explanation to short analytical writing and clearly labelled reflection.',
  },
  vocabularyApproach: 'Infer meaning from context, verify with Word Notes, and recycle useful B2 vocabulary in evidence-based speaking and writing.',
  grammarApproach: 'Use cause-effect, comparison, concession, relative clauses, and evidence language as tools for meaning.',
  speakingApproach: 'Require learners to support interpretations with a sentence or event from the chapter.',
  writingApproach: 'Use claim → evidence → explanation as the default paragraph frame.',
  differentiationNotes: 'Use sentence frames and evidence tables for support; require multiple pieces of evidence and 120–150 word analysis for fast finishers.',
  implementationPlans: {
    optionA: {
      title: 'Five-Unit Intensive Plan',
      steps: [
        { time: 'Unit 1', activity: 'Chapters 1–4: creation, knowledge, and the response to Adam.' },
        { time: 'Unit 2', activity: 'Chapters 5–8: arrogance, Paradise, temptation, and realization.' },
        { time: 'Unit 3', activity: 'Chapters 9–11: repentance, descent, and earthly responsibility.' },
        { time: 'Unit 4', activity: 'Chapters 12–15: Habil and Qabil, violence, burial, and consequence.' },
        { time: 'Unit 5', activity: 'Chapters 16–17 plus whole-book review and synthesis.' },
      ],
    },
    optionB: {
      title: 'Standard Split',
      lessons: Array.from({ length: 6 }, (_, index) => ({
        title: `Unit ${index + 1}`,
        description: `Study and review a consecutive group of Adam B2 canonical chapters with evidence-based reading and writing.`,
      })),
    },
    optionC: {
      title: 'Extended Project — 17 Lessons',
      steps: config.storyIds.map((id) => ({
        time: `Lesson ${id}`,
        activity: `Chapter ${id}: evidence, vocabulary, inference/comparison, Quick Challenge, and short written synthesis.`,
      })),
    },
  },
};

export const adamB2StudentGuideMetadataGoldEn: StudentGuideMetadata = {
  title: 'Prophet Adam B2 Self-Study Guide — Gold Standard',
  level: 'B2',
  language: 'English',
  estimatedStudyTime: '17 chapter study sessions plus whole-book review',
  whoIsThisFor: 'CEFR B2 learners studying the canonical Adam story independently.',
  learningGoals: [
    'Support interpretations with textual evidence.',
    'Analyze cause, contrast, motivation, and consequence.',
    'Use B2 vocabulary in context.',
    'Separate factual recall, inference, and reflection.',
  ],
  recommendedUse: [
    'One chapter per focused study session.',
    'Reread after weak or incorrect answers.',
    'Complete Knowledge 8, Review 8, and Final 10 after the 17 chapters.',
  ],
};

export const adamB2GoldContract = config;
