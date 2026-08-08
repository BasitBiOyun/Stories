import type { Exercise, StudentGuideMetadata, StudentGuideSection, TeacherGuideMetadata } from '../../../types';
import { applyB2GoldPages, type B2GoldPageConfig } from '../../b2GoldFactory';
import { buildB2EvidenceGuides } from '../../b2GoldGuides';
import { meccaB2Pages } from './en/pages';

const config: B2GoldPageConfig = {
  storyIds: Array.from({ length: 17 }, (_, index) => index + 1),
  knowledgeCheckPageId: 18,
  reviewPageId: 19,
  glossaryPageIds: [20, 21],
  finalChallengePageId: 22,
};

const mc = (id: number, title: string, question: string, options: [string, string, string], explanation: string, retry: string): Exercise => ({
  id: `mecca-b2-gold-qc-${id}`,
  type: 'multiple-choice',
  title,
  instructions: 'Choose the best answer. Use evidence from the chapter.',
  question,
  options,
  correctAnswer: 0,
  explanation,
  feedback: { correct: `Correct. ${explanation}`, incorrect: retry },
});

const quickChallengeOverrides: Record<number, Exercise> = {
  1: mc(1, 'Regional Background', 'Why does the chapter introduce both the Byzantine–Sassanid rivalry and the tribal organization of Arabia?', [
    'To establish two parts of the setting: exhausted rival empires around Arabia and the absence of one political authority inside the peninsula.',
    'To prove that either empire directly governed every Arabian tribe from Mecca.',
    'To argue that Arabia had already become a unified empire before Islam.',
  ], 'The chapter uses the imperial rivalry and Arabia’s tribal fragmentation as background for the city and age in which Islam arose; it does not itself claim a simple “power vacuum caused expansion” formula.', 'Reread the two paragraphs before the chapter turns specifically to Mecca and the Age of Ignorance.'),
  2: mc(2, 'Meaning of Jahiliyyah', 'What distinction is central to the chapter’s explanation of the word “ignorance”?', [
    'It refers mainly to religious, moral, and social disorder rather than simply to absence of science or factual knowledge.',
    'It means that pre-Islamic Arabs had no language, trade, poetry, or practical knowledge.',
    'It is used only as a geographical name for the western Arabian Peninsula.',
  ], 'The opening explicitly says “ignorance” does not mean lack of science or knowledge and then connects the term with injustice, disorder, violence, and moral decline.', 'Compare the sentence rejecting a scientific meaning with the moral and social features listed immediately afterward.'),
  3: mc(3, 'Sacred Center and Settlement', 'How does the chapter connect the Ka’ba with the development of Mecca?', [
    'It presents the Ka’ba as the main factor in Mecca becoming a settlement and connects the city’s sacred role with later population and worship.',
    'It says Mecca first became a farming center and only much later acquired the Ka’ba.',
    'It argues that the Qiblah was located in Constantinople during the Prophet’s life in Mecca.',
  ], 'The chapter calls the Ka’ba the main factor in the establishment of Mecca as a settlement and describes the city as Islam’s sacred center.', 'Use the paragraph beginning with the Qur’anic description of Mecca as a valley where no crops grow.'),
  4: mc(4, 'Environment, Pilgrimage and Trade', 'What chain of development does the chapter describe after settlement around Zamzam?', [
    'Settlement and pilgrimage grow around the Ka’ba; later Quraysh rule and limited agriculture make trade increasingly important to Mecca.',
    'Agriculture becomes Mecca’s dominant industry and makes long-distance trade unnecessary.',
    'The Quraysh remove the Ka’ba from religious life in order to focus only on farming.',
  ], 'The chapter moves from Jurhum settlement and the Ka’ba as a pilgrimage site to later Quraysh administration and the need to earn a living through trade because the surroundings were unsuitable for agriculture.', 'Trace the chapter chronologically from Zamzam and Jurhum to Quraysh rule and the sentence about agriculture.'),
  5: mc(5, 'Networks and Commercial Growth', 'How does the chapter explain Mecca’s development into a major trade center?', [
    'Quraysh leaders negotiated agreements that enabled safer access to several regions, while large seasonal and year-round caravans expanded commerce.',
    'Meccan merchants stopped travelling outside Arabia and depended only on local agriculture.',
    'Trade developed because Byzantine and Sassanid authorities banned Quraysh merchants from their territories.',
  ], 'The chapter emphasizes Hashim and Quraysh trade agreements, access to Byzantium, Yemen, Iraq and Abyssinia, and the scale and frequency of caravan commerce.', 'Find the sentences about agreements, permissions to travel, and the large summer/winter caravans.'),
  6: mc(6, 'Security, Pilgrimage and Commerce', 'What relationship does the chapter build between regional conflict, the sacred months, pilgrimage, and trade?', [
    'War made one major route less usable, while safer Arabian routes and the sacred months supported pilgrimage, fairs, and commercial activity.',
    'The sacred months ended pilgrimage because all travel and trade were prohibited.',
    'The Byzantine–Sassanid wars made every route through Arabia impossible to use.',
  ], 'The chapter links disruption of the Silk Road with the greater importance of Red Sea/Arabian routes, then links the security of sacred months with Hajj and trade festivals.', 'Connect the first paragraph about routes with the later paragraphs about sacred months, Hajj, and fairs.'),
  7: mc(7, 'Credit and Social Structure', 'How does the chapter connect usury with social-class division in Mecca?', [
    'High-cost lending increases the wealth of lenders while pushing borrowers deeper into debt, helping concentrate money and power in a wealthy class.',
    'Usury distributes wealth evenly because every borrower receives the same profit.',
    'The chapter says money lending had no relationship to social status or poverty.',
  ], 'The chapter repeatedly connects lending at usury with enrichment of lenders, worsening debt, and an extreme gap between wealthy and poor groups.', 'Use the sentences about lenders/capitalists, borrowing rates, and the contrast between rich and poor households.'),
  8: mc(8, 'Justice Beyond Tribal Power', 'Why is Hilfü’l-Fudûl significant in the social system described in this chapter?', [
    'It creates a collective response to cases in which weak, foreign, or unprotected people could otherwise be exploited by powerful individuals.',
    'It is created to prevent outside merchants from receiving payment in Mecca.',
    'It replaces all Quraysh tribes with one permanent centralized government.',
  ], 'The chapter introduces the alliance after examples of weak and unprotected people being treated unfairly and says its purpose was to defend the oppressed and maintain justice.', 'Look at the problems listed immediately before the agreement and the example of the unpaid merchant.'),
  9: mc(9, 'Virtue and Motive', 'Why does the chapter refuse to describe every pre-Islamic Arab custom as simply negative?', [
    'It recognizes admired qualities such as generosity and hospitality, while also evaluating how pride, gambling, fame, and tribal competition could distort those qualities.',
    'It says generosity and hospitality did not exist before Islam.',
    'It argues that every act performed for tribal fame automatically produced universal justice.',
  ], 'The chapter explicitly says the era should not be called entirely negative, then uses generosity to distinguish an admirable action from motives of arrogance and competitive tribal honor.', 'Compare the sentence rejecting an entirely negative picture with the paragraphs about generosity, betting, fame, and arrogance.'),
  10: mc(10, 'Status and Unequal Experience', 'What caution is necessary when summarizing the position of women in this chapter?', [
    'The chapter says women’s experience varied by social status and tribe: some wealthy women had agency, while many lower-status women faced severe disadvantage and exclusion.',
    'The chapter says every woman in pre-Islamic Arabia had exactly the same social power and legal position.',
    'The chapter says women’s position depended only on the number of trade caravans owned by their tribe.',
  ], 'The chapter explicitly warns that women’s position “was not always the same” and contrasts examples of high-status women with the situation of many lower-status women and girls.', 'Use the sentence stating that position changed according to social status and tribe, then compare the examples that follow.'),
  11: mc(11, 'Institutions and Public Voice', 'What two social functions does the chapter examine through slavery and poetry?', [
    'Slavery is described as an economic/social institution of exploitation, while poets preserve tribal memory and influence public attitudes like a form of media.',
    'Slaves are presented as the political rulers of Mecca, while poets are described as having no social influence.',
    'Both slavery and poetry are described only as private religious rituals.',
  ], 'The chapter treats slavery structurally as part of the economy and treats poets as important transmitters of history, praise, criticism, and political attitudes.', 'Separate the paragraph about the social/economic role of slavery from the later discussion of poets and media.'),
  12: mc(12, 'A Complex Religious Picture', 'Which summary best reflects the religious system described in the chapter?', [
    'Idolatry dominated, many people still acknowledged Allah as Creator, idols were treated as mediators, and beliefs about resurrection and superstition differed from Islamic teaching.',
    'Pre-Islamic Mecca was described as uniformly Hanif with no idols in or around the Ka’ba.',
    'The chapter says people rejected both Allah and every form of pilgrimage or supernatural belief.',
  ], 'The chapter presents a layered system: dominant idolatry, some Hanifs, acknowledgement of Allah as Creator, idols as mediators, pilgrimage, and widespread superstition.', 'Reread all four paragraphs and build the summary from more than one religious feature.'),
  13: mc(13, 'Interconnected Sources of Opposition', 'Why does the chapter discuss politics, economics, and religion together when explaining opposition to Islam?', [
    'Because Quraysh authority, trade-based prestige, pilgrimage status, and religious leadership reinforced one another, so the new message challenged more than one dimension of power.',
    'Because the chapter says religious beliefs never affect social or political life.',
    'Because Islam’s first followers were all Byzantine political officials.',
  ], 'The chapter explicitly calls politics, economics, and religion interconnected and then explains why leaders saw the new community as a threat to status and authority.', 'Connect the opening statement about interconnected areas with the paragraph on aristocracy, trade, prestige, and pilgrimage.'),
  14: mc(14, 'Why Reform Threatened the Existing Order', 'What does the chapter suggest by placing many poor and enslaved early believers beside elite resistance to changes in usury, charity, and leadership?', [
    'The new message challenged an existing hierarchy in which wealth, accepted economic practices, and leadership status were closely connected.',
    'The early community was composed almost entirely of Mecca’s super-rich leaders.',
    'Quraysh leaders supported the new rules because they strengthened usury and reduced charity.',
  ], 'The chapter contrasts the social position of many early believers with the upper class’s dependence on the existing order and resistance to economic and moral changes.', 'Compare the opening statistics/social groups with the later paragraphs on usury, charity, superiority, and leadership.'),
  15: mc(15, 'Escalation and Vulnerability', 'What pattern of opposition does the chapter show as the new faith grows stronger?', [
    'Opposition moves from ridicule to stronger social pressure and boycott, with people lacking wealth or powerful protection especially vulnerable.',
    'Opposition immediately becomes a peaceful debate in which vulnerable believers receive extra tribal protection.',
    'The chapter says economic and social pressure was never used against the early Muslims.',
  ], 'The chapter describes an escalation from mockery to fierce opposition and then a social/economic boycott, while identifying the poor and unprotected as especially exposed.', 'Track the stages of opposition without repeating the chapter’s graphic suffering details in your answer.'),
  16: mc(16, 'Belief, Economy and Tribal Protection', 'Why were both idols and tribal fanaticism major barriers to the new faith in the chapter’s analysis?', [
    'Idols supported existing religious, economic, and political influence, while leaving tribal views could also cost a person the protection needed to survive socially.',
    'Idols had no economic or political meaning, and tribal membership placed no pressure on personal choices.',
    'The chapter says Quraysh leaders wanted to abandon their status and remove all tribal protection immediately.',
  ], 'The chapter links idols with trade and authority, then explains how stepping outside tribal views could mean loss of protection and a defenseless position.', 'Use both the paragraph about idol-based influence and the paragraph about tribal fanaticism and protection.'),
  17: mc(17, 'The Chapter’s Closing Contrast', 'According to the chapter, what contrast defines its closing interpretation of Jahiliyyah and Islam?', [
    'Jahiliyyah is framed as a pattern of arrogance, injustice, and disorder, while Islam is presented as calling toward human dignity, justice, morality, and peace.',
    'Jahiliyyah is presented only as a neutral calendar term with no moral or social meaning.',
    'Islam is presented as strengthening distinctions of race, slavery, wealth, and tribal superiority.',
  ], 'The final chapter explicitly frames the contrast in terms of human honor, justice, morality, arrogance, and a fairer and more peaceful social order.', 'Because this is the chapter’s interpretation, answer with “according to the chapter” rather than turning the wording into an unrelated universal historical claim.'),
};

export const meccaB2PagesGoldEn = applyB2GoldPages({ canonicalPages: meccaB2Pages, config, language: 'en', quickChallengeOverrides });
const guides = buildB2EvidenceGuides({ effectivePages: meccaB2PagesGoldEn, storyIds: config.storyIds, language: 'en' });
export const meccaB2TeacherGuideGoldEn = guides.teacherGuide;
export const meccaB2SelfStudyGuideGoldEn = guides.selfStudyGuide;

export const meccaB2StudentGuideSectionsGoldEn: StudentGuideSection[] = [
  { title: '1. Read Systems, Not Just Facts', icon: 'Network', text: 'Across 17 chapters, connect geography, trade, wealth, tribal protection, religious practice, social inequality, and the response to Islam.', points: ['17 chapters', 'Cause and consequence', 'Compare connected systems'] },
  { title: '2. Handle Sensitive History Carefully', icon: 'Shield', text: 'When chapters discuss slavery, discrimination, oppression, or boycott, focus on structures, dignity, justice, and consequences. Do not turn suffering into sensational detail.', points: ['No graphic amplification', 'Focus on dignity', 'Use chapter evidence'] },
  { title: '3. Use the Assessments as Rereading Maps', icon: 'Target', text: 'Knowledge 8, Review 8, and Final 10 identify gaps. A wrong answer should send you back to the relevant chapter.', points: ['Knowledge: 8', 'Review: 8', 'Final: 10'] },
];

const chapterList = meccaB2PagesGoldEn.filter((page) => page.type === 'story').map((page) => `${page.id}. ${page.title}`).join('\n');
export const meccaB2StudentGuideTextGoldEn = `# Mecca B2 Self-Study Guide\n\nStudy these 17 canonical chapters:\n\n${chapterList}\n\nRead first for gist, then reread to connect evidence across geography, economy, social structure, religion, and power. Use Word Notes in context. Complete each Quick Challenge, and after a wrong or uncertain answer return to the relevant paragraph before retrying. In sensitive chapters, describe oppression and inequality at the level needed to understand the text; do not repeat graphic details when a structural explanation is enough. After the story, complete Knowledge 8, Review 8, both glossary sections, and Final 10.`;

export const meccaB2TeacherGuideMetadataGoldEn: TeacherGuideMetadata = {
  title: 'Mecca B2 Teacher Guide — Gold Standard', level: 'B2', estimatedDuration: '17 chapter lessons plus review and final assessment',
  targetLearners: 'CEFR B2 learners studying the historical and social setting of Mecca.',
  assessmentEvidence: 'Evidence selection, systems reasoning, cause-effect, comparison, nuanced vocabulary, source-grounded interpretation, and sensitive discussion.',
  readingFramework: {
    before: 'Preview setting and a few key terms without pre-teaching conclusions.',
    during: 'Map relationships among geography, trade, hierarchy, belief, and power; use Quick Challenge with reread/retry.',
    after: 'Write a supported explanation or comparison, then label reflection separately.'
  },
  vocabularyApproach: 'Study social, historical, economic, and religious terms in their chapter context and recycle them in evidence-based explanation.',
  grammarApproach: 'Use cause-effect, comparison, concession, and hedging to express relationships accurately.',
  speakingApproach: 'Require evidence and avoid sensationalizing suffering in discussion.',
  writingApproach: 'Use claim → evidence → explanation, especially when analyzing social systems and power.',
  differentiationNotes: 'Provide relationship maps and sentence frames for support; assign cross-chapter synthesis to fast finishers.',
  sensitiveNotes: { title: 'Sensitive-content handling', notes: ['Do not amplify graphic details of oppression, slavery, starvation, or physical abuse in derived activities.', 'Keep attention on dignity, justice, vulnerability, social structures, and the chapter’s stated message.', 'Do not use suffering as game-like entertainment or as a distractor designed for shock value.'] },
  implementationPlans: {
    optionA: { title: 'Five Thematic Units', steps: [
      { time: 'Unit 1', activity: 'Chapters 1–4: regional, sacred, and settlement context.' },
      { time: 'Unit 2', activity: 'Chapters 5–8: trade, finance, social classes, and justice.' },
      { time: 'Unit 3', activity: 'Chapters 9–12: tribal culture, women, slavery/poetry, and religious life.' },
      { time: 'Unit 4', activity: 'Chapters 13–15: new community, elite power, and escalating opposition.' },
      { time: 'Unit 5', activity: 'Chapters 16–17 plus whole-book synthesis.' },
    ] },
    optionB: { title: 'Standard Split', lessons: Array.from({ length: 6 }, (_, index) => ({ title: `Unit ${index + 1}`, description: 'A consecutive chapter group with evidence-based B2 systems analysis.' })) },
    optionC: { title: 'Extended Project — 17 Lessons', steps: config.storyIds.map((id) => ({ time: `Lesson ${id}`, activity: `Chapter ${id}: evidence, systems analysis, vocabulary, Quick Challenge, and synthesis.` })) },
  },
};

export const meccaB2StudentGuideMetadataGoldEn: StudentGuideMetadata = {
  title: 'Mecca B2 Self-Study Guide — Gold Standard', level: 'B2', language: 'English', estimatedStudyTime: '17 chapter sessions plus whole-book review',
  whoIsThisFor: 'CEFR B2 learners studying Mecca’s historical and social context independently.',
  learningGoals: ['Connect systems across chapters.', 'Use evidence rather than outside assumptions.', 'Use nuanced B2 historical/social vocabulary.', 'Discuss sensitive history without sensationalism.'],
  recommendedUse: ['One chapter per focused session.', 'Reread after weak or incorrect answers.', 'Complete Knowledge 8, Review 8, and Final 10 after the story.'],
};

export const meccaB2GoldContract = config;
