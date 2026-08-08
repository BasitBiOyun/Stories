import type { Exercise, StudentGuideMetadata, StudentGuideSection, TeacherGuideMetadata } from '../../../types';
import { applyB2GoldPages, type B2GoldPageConfig } from '../../b2GoldFactory';
import { buildB2EvidenceGuides } from '../../b2GoldGuides';
import { abrahamB2Pages } from './en/pages';

const config: B2GoldPageConfig = {
  storyIds: Array.from({ length: 35 }, (_, index) => index + 1),
  // Abraham has no dedicated Knowledge Check page. Page 36 is canonical References and stays untouched.
  knowledgeCheckPageId: 0,
  reviewPageId: 37,
  glossaryPageIds: [38, 39],
  finalChallengePageId: 40,
};

const mc = (id: number, title: string, question: string, options: [string, string, string], correctAnswer: 0 | 1 | 2, explanation: string, retry: string): Exercise => ({
  id: `abraham-b2-gold-qc-${id}`,
  type: 'multiple-choice',
  title,
  instructions: 'Choose the best answer. Use evidence from the chapter.',
  question,
  options,
  correctAnswer,
  explanation,
  feedback: { correct: `Correct. ${explanation}`, incorrect: retry },
});

const quickChallengeOverrides: Record<number, Exercise> = {
  1: mc(1, 'What the Chapter Actually Establishes', 'Which statement is directly supported by Chapter 1 about the title halîlullah?', [
    'The chapter states that Abraham was given the title “Allah’s friend” and cites Surah Nisa 125, but it does not explain the title through a list of later sacrifices in this chapter.',
    'The chapter says Abraham received the title because he was the wealthiest prophet of his era.',
    'The chapter says the title was inherited automatically from his father.',
  ], 0, 'Chapter 1 states the title and its Qur’anic reference. The legacy question previously supplied a reason that this chapter itself did not establish.', 'Return to the sentences containing “Allah’s friend” and distinguish the stated fact from explanations found elsewhere in the story.'),
  4: mc(4, 'Historical Caution', 'How should the chapter’s statements about Abraham’s birthplace and dates be read?', [
    'As a mixture of Qur’anic information and historical/source-based possibilities: the chapter explicitly says there are different ideas and that some sources suggest particular places and dates.',
    'As one fully certain historical chronology proved by the Qur’an in every detail.',
    'As information the chapter rejects entirely and refuses to discuss.',
  ], 0, 'The chapter uses phrases such as “there are different ideas,” “some sources say,” “most generally speaking,” and “some sources suggest,” so derived material must preserve that caution.', 'Underline the phrases that signal different views, source attribution, or approximation.'),
  5: mc(5, 'Narration and Source Framing', 'Which description best preserves how the chapter presents the report about Nimrod and Abraham’s birth?', [
    'It presents predictions by fortune-tellers/astrologers and then explicitly introduces another version with “According to another narration,” so the details should remain attributed reports.',
    'It presents every detail of the birth prediction as an uncontested Qur’anic statement.',
    'It says no report connects Nimrod with fear of a child challenging his rule.',
  ], 0, 'The chapter itself marks these details as reported narratives rather than flattening them into one unqualified historical fact.', 'Look for the transition that introduces another narration and note how the prediction material is framed.'),
  8: mc(8, 'Observation and Reasoning', 'What reasoning pattern does the chapter begin through Abraham’s observation of a planet?', [
    'A created object that appears and sets cannot serve as the eternal Lord, so observation becomes part of the argument for the Creator.',
    'The planet is accepted permanently as Abraham’s Lord because it is visible at night.',
    'The chapter treats the planet as more powerful than the Creator because it is bright.',
  ], 0, 'The quoted passage shows Abraham observing the planet and rejecting it when it sets; the wider sequence develops the contrast between changing created bodies and the Creator.', 'Use the quoted words about the planet setting and Abraham’s response.'),
  19: mc(19, 'Argument Through the Idol', 'Why does Abraham tell the people to ask the largest idol?', [
    'He uses their own admission that the idol cannot speak or act to expose the contradiction in worshipping powerless objects.',
    'He genuinely claims the statue independently destroyed all the other idols and expects it to confess.',
    'He wants to replace the smaller idols with the largest one as the only object of worship.',
  ], 0, 'The chapter shows the people admitting that the idol cannot speak; Abraham then uses that admission against the logic of their worship.', 'Follow the dialogue from “Ask them” to the people’s admission and Abraham’s reply.'),
  23: mc(23, 'Different Meanings of Power', 'What flaw does Abraham expose in Nimrod’s claim that he can “give life and cause death”?', [
    'Nimrod substitutes political power to spare or execute subjects for the divine power over life and death, so Abraham shifts the debate to the sun to expose the difference.',
    'Nimrod demonstrates that royal execution is identical to creating life.',
    'Abraham accepts Nimrod’s example as proof that the king is divine.',
  ], 0, 'The chapter contrasts Nimrod’s manipulation of two condemned men with Abraham’s argument about a natural order the king cannot command.', 'Compare what Nimrod actually does to the two men with the claim he says this action proves.'),
  24: mc(24, 'From Debate to Migration', 'What development follows Abraham’s public challenge to Nimrod in this chapter?', [
    'His fame spreads and he continues calling people, but despite his efforts only Sarah and Lot are described as sharing his belief at this stage.',
    'The entire kingdom immediately accepts his message and Nimrod becomes his follower.',
    'Abraham stops calling people and remains permanently at Nimrod’s court.',
  ], 0, 'The chapter says his fame spread and his call continued, yet most people left him alone; Sarah and Lot are identified as believers.', 'Use the final paragraph and identify both the wider public reaction and the two named believers.'),
  27: mc(27, 'Trust and Command', 'Why does Hajar become more reassured after asking Abraham whether Allah commanded him to leave them in the valley?', [
    'She understands that Abraham is acting on Allah’s command rather than abandoning them by personal choice, so she expresses trust that they will not be lost.',
    'She learns that a large settlement with food and water is already waiting nearby.',
    'She is told that Abraham will return within a few minutes with an army.',
  ], 0, 'The chapter directly links her change in emotional response to learning that the action was commanded by Allah.', 'Compare Hajar’s anxiety before the question with her words after Abraham answers yes.'),
  31: mc(31, 'Dream and Submission', 'What is the central new test introduced in this chapter after Ishmael grows up?', [
    'Abraham sees in a dream that he must sacrifice his son and asks Ishmael what he thinks, while Ishmael responds with willingness and patience.',
    'The Jurham tribe asks Abraham to become its king and abandon his mission.',
    'Ishmael is ordered to leave Mecca permanently before speaking with his father.',
  ], 0, 'Although the legacy exercise on this page asked about the Jurham settlement, the canonical Chapter 31 content centers on Abraham’s dream and Ishmael’s response to the command.', 'Reread the second half of Chapter 31 beginning with Abraham’s dream.'),
  32: mc(32, 'Test Rather Than Death', 'How does the chapter itself interpret the attempted sacrifice?', [
    'As a clear test of obedience that is stopped once Abraham fulfills the vision, with a ram or goat serving as the substitute.',
    'As a command whose purpose is explicitly to end Ishmael’s life.',
    'As an event Abraham refuses before taking any action.',
  ], 0, 'The quoted verses call it a clear test and the chapter ends by stating that it was only a test and that the proxy was a ram or goat.', 'Use both the quoted call to Abraham and the final sentence of the chapter.'),
  33: mc(33, 'How the Chapter Frames Sacrifice', 'Which statement best keeps the chapter’s own framing of animal and human sacrifice?', [
    'The chapter contrasts animal sacrifice in Abraham’s monotheistic tradition with human-sacrifice practices it says existed in the surrounding era; a derived answer should report that framing rather than generalize beyond it.',
    'The chapter teaches that Islam requires human sacrifice in exceptional cases.',
    'The chapter says animal sacrifice began for the first time only after Abraham built the Ka‘ba.',
  ], 0, 'The chapter makes historical and religious claims about practices in the era; Gold material should describe those claims as the chapter presents them without intensifying them.', 'Reread the sentences beginning with the practice of sacrificing firstborn children and the contrast with animal sacrifice.'),
  34: mc(34, 'Building on the Foundations', 'What does Chapter 34 emphasize about Abraham and Ishmael’s work on the Ka‘ba?', [
    'They find the foundations of the earlier structure, build together, and pray that Allah accept their service.',
    'They build a private palace for Abraham to live in permanently.',
    'They begin by declaring the structure a military fortress for Mecca.',
  ], 0, 'The chapter describes father and son building on the foundations and repeating the prayer from Surah Baqarah 127 for acceptance.', 'Return to the sentences about the foundations, Al-Maqam, passing stones, and their prayer.'),
  35: mc(35, 'Whole-Life Legacy', 'What synthesis does the final chapter make from the rebuilding of the Ka‘ba, pilgrimage, and Abraham’s family legacy?', [
    'It presents his mission as a continuing monotheistic legacy linked with worship open to people beyond race or colour and carried through his family and the Hijaz.',
    'It reduces Abraham’s legacy to personal wealth and political control of Palestine.',
    'It says the Ka‘ba and pilgrimage have no relationship to the chapter’s discussion of Hanifism.',
  ], 0, 'The chapter connects the Ka‘ba, pilgrimage, Hanifism, universal worship, and the continuation of Abraham’s faith through his family.', 'Identify the repeated ideas of Ka‘ba, pilgrimage, all people, Hanifism, Ishmael, and the Hijaz.'),
};

export const abrahamB2PagesGoldEn = applyB2GoldPages({ canonicalPages: abrahamB2Pages, config, language: 'en', quickChallengeOverrides });

const guides = buildB2EvidenceGuides({ effectivePages: abrahamB2PagesGoldEn, storyIds: config.storyIds, language: 'en' });
export const abrahamB2TeacherGuideGoldEn = guides.teacherGuide;
export const abrahamB2SelfStudyGuideGoldEn = guides.selfStudyGuide;

export const abrahamB2StudentGuideSectionsGoldEn: StudentGuideSection[] = [
  { title: '1. Canonical Sequence', icon: 'BookOpen', text: 'Study the 35 narrative chapters in order. The References page remains a source page, not a new learning chapter.', points: ['35 story chapters', 'References preserved', 'No page reordering'] },
  { title: '2. Evidence and Source Framing', icon: 'Search', text: 'At B2, notice phrases such as some sources, according to another narration, believed to have, and Qur’anic quotation. Preserve the same degree of certainty in your answer.', points: ['Evidence first', 'Notice attribution', 'Do not overstate historical reconstruction'] },
  { title: '3. Quick Challenge', icon: 'Target', text: 'Use the chapter challenge as reinforcement and analysis. If wrong or uncertain, return to the relevant paragraph before retrying.', points: ['Find evidence', 'Read feedback', 'Retry after rereading'] },
  { title: '4. Review and Final', icon: 'Award', text: 'Abraham has no separate canonical Knowledge Check page. Use the 8-question Review Challenge and 10-question Final Challenge without inventing a new page.', points: ['Review: 8', 'Final: 10', 'Canonical page structure preserved'] },
];

const chapterList = abrahamB2PagesGoldEn.filter((page) => page.type === 'story' && page.id <= 35).map((page) => `${page.id}. ${page.title}`).join('\n');
export const abrahamB2StudentGuideTextGoldEn = `# Abraham B2 Self-Study Guide\n\nStudy these 35 canonical narrative chapters in order:\n\n${chapterList}\n\nRead first for gist, reread for evidence and source framing, then complete the Quick Challenge. If the chapter uses historical qualification or attribution, keep that qualification in your own answer. After the narrative, keep the canonical References page as reference material, complete the 8-question Review Challenge, review both glossary sections, and finish with the 10-question Final Challenge. There is no dedicated Knowledge Check page in this canonical book, so no new page is invented.`;

export const abrahamB2TeacherGuideMetadataGoldEn: TeacherGuideMetadata = {
  title: 'Prophet Abraham B2 Teacher Guide — Gold Standard',
  level: 'B2',
  estimatedDuration: '35 chapter lessons plus review and final assessment',
  targetLearners: 'CEFR B2 learners working with the canonical Abraham narrative.',
  assessmentEvidence: 'Evidence selection, source-framing accuracy, inference, cause-effect, argument analysis, comparison, vocabulary in context, and analytical writing.',
  readingFramework: {
    before: 'Preview title, image, and essential vocabulary without importing outside facts.',
    during: 'Read for gist, then evidence, argument, cause, and attribution. Use Quick Challenge with reread/retry.',
    after: 'Write claim → evidence → explanation, then clearly label any open reflection.'
  },
  vocabularyApproach: 'Infer vocabulary from context, verify with Word Notes, and recycle it in evidence-based explanation.',
  grammarApproach: 'Use hedging, reporting verbs, cause-effect, comparison, concession, and evidence language as meaning tools.',
  speakingApproach: 'Require textual support for interpretation and preserve the chapter’s degree of historical certainty.',
  writingApproach: 'Use claim → evidence → explanation, adding source/attribution language where the chapter does.',
  differentiationNotes: 'Provide evidence frames for support and multiple-evidence/source-evaluation tasks for fast finishers.',
  implementationPlans: {
    optionA: { title: 'Seven 5-Chapter Units', steps: Array.from({ length: 7 }, (_, index) => ({ time: `Unit ${index + 1}`, activity: `Chapters ${index * 5 + 1}–${index * 5 + 5}: reading, evidence, vocabulary, Quick Challenge, and synthesis.` })) },
    optionB: { title: 'Standard Split', lessons: Array.from({ length: 7 }, (_, index) => ({ title: `Unit ${index + 1}`, description: `Five consecutive canonical chapters with evidence-based B2 analysis.` })) },
    optionC: { title: 'Extended Project — 35 Lessons', steps: config.storyIds.map((id) => ({ time: `Lesson ${id}`, activity: `Chapter ${id}: evidence, vocabulary, inference/evaluation, Quick Challenge, and short synthesis.` })) },
  },
};

export const abrahamB2StudentGuideMetadataGoldEn: StudentGuideMetadata = {
  title: 'Prophet Abraham B2 Self-Study Guide — Gold Standard', level: 'B2', language: 'English',
  estimatedStudyTime: '35 chapter sessions plus review and final assessment',
  whoIsThisFor: 'CEFR B2 learners studying the Abraham narrative independently.',
  learningGoals: ['Use evidence accurately.', 'Preserve source attribution and uncertainty.', 'Analyze arguments, motives, causes, and consequences.', 'Write short supported interpretations.'],
  recommendedUse: ['One chapter per session.', 'Reread after weak/incorrect answers.', 'Complete Review 8 and Final 10 after the 35 narrative chapters.'],
};

export const abrahamB2GoldContract = config;
