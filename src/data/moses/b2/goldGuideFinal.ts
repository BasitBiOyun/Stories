import type { PageData, TeacherGuideSection } from '../../../types';
import { mosesB2Pages } from './en/pages';
import { mosesB2QuestionSpecs } from './goldLearning';
import {
  mosesB2TeacherGuideMetadataGoldEn,
  mosesB2StudentGuideMetadataGoldEn,
  mosesB2StudentGuideSectionsGoldEn,
  mosesB2StudentGuideTextGoldEn,
} from './goldGuides';

const storyPages = mosesB2Pages.filter((page) => page.type === 'story');
const specByChapter = new Map(mosesB2QuestionSpecs.map((spec) => [spec.chapterId, spec]));

const chapterLabel = (page: PageData): string => `Chapter ${page.id}: ${page.title}`;

const vocabularyWords = (page: PageData): string[] =>
  (page.vocabulary ?? []).slice(0, 5).map((entry) => entry.word);

const teacherSection = (page: PageData): TeacherGuideSection => {
  const spec = specByChapter.get(page.id);
  if (!spec) throw new Error(`Moses B2 Gold: guide evidence spec for chapter ${page.id} is missing.`);
  const words = vocabularyWords(page);
  const vocabularyText = words.length ? words.join(', ') : 'the chapter Word Notes';

  return {
    chapter: chapterLabel(page),
    timing: '55 minutes',
    objectives: [
      `Answer and justify the chapter's central B2 question: ${spec.question}`,
      'Support an interpretation with at least two details from the canonical chapter.',
      `Use selected B2 vocabulary accurately in context: ${vocabularyText}.`,
      'Write a short evidence-based explanation that separates textual evidence from reflection.',
    ],
    pedagogy: `Use evidence-first close reading centred on ${spec.title}. Keep factual claims inside this canonical chapter, require learners to point to supporting language, and label open reflection separately from text-based interpretation.`,
    grammarFocus: 'Evidence and relationship language: because, therefore, however, whereas, according to the chapter, this suggests, and this is supported by.',
    pronunciationFocus: words.length
      ? `Review word stress and clear pronunciation for: ${vocabularyText}.`
      : 'Review stress and pronunciation of the chapter Word Notes.',
    lessonPlan: `0–7 min: Preview the title, image, hotspots, and Word Notes. 7–20 min: First reading/listening for gist. 20–33 min: Second reading; mark two pieces of evidence related to “${spec.title}”. 33–42 min: Compare the three Quick Challenge options and explain why two are weaker. 42–48 min: Complete the Quick Challenge; after a wrong answer, reread the relevant paragraph before retrying. 48–55 min: Write a short claim-evidence-explanation response and complete the exit ticket.`,
    discussionPoints: [
      spec.question,
      'Which two details from this chapter best support your answer, and why?',
      'Which alternative interpretation is least supported by this chapter, and what evidence rules it out?',
    ],
    differentiation: {
      fastFinishers: `Write a 120–150 word analytical paragraph on “${spec.title}” using two pieces of chapter evidence and at least two B2 linking expressions.`,
      strugglingLearners: 'Use a three-column frame: Claim → Evidence from the chapter → What the evidence shows. Complete one row before answering the Quick Challenge again.',
    },
    interactiveTips: [
      'Use hotspots as evidence prompts, not as replacements for the canonical paragraph.',
      'Ask learners to infer Word Note meanings from context before checking the definition.',
      'Use the visible Quick Challenge as reinforcement: after an incorrect answer, return to the relevant paragraph and retry.',
    ],
    assessmentTools: {
      rubric: ['Evidence selection', 'B2 inference/analysis', 'Vocabulary in context', 'Explanation clarity'],
      exitTicket: ['One supported claim from the chapter', 'The sentence or detail that best supports it'],
    },
    extraResources: undefined,
  };
};

const selfStudySection = (page: PageData): TeacherGuideSection => {
  const spec = specByChapter.get(page.id);
  if (!spec) throw new Error(`Moses B2 Gold: self-study evidence spec for chapter ${page.id} is missing.`);
  const words = vocabularyWords(page);
  const vocabularyText = words.length ? words.join(', ') : 'the chapter Word Notes';

  return {
    chapter: chapterLabel(page),
    timing: '40 minutes',
    objectives: [
      `Understand and answer the chapter's central question: ${spec.question}`,
      'Find and mark evidence before deciding between plausible interpretations.',
      `Use B2 vocabulary from the chapter in context: ${vocabularyText}.`,
      'Produce a short claim-evidence-explanation response after rereading.',
    ],
    pedagogy: `Study independently in three passes: gist, evidence/vocabulary, then analysis. The focus is ${spec.title}; do not add outside facts when explaining the chapter.`,
    lessonPlan: `Preview the title, image, hotspots, and Word Notes. Read once for the main idea. Read again and underline two details that help answer: “${spec.question}” Infer the Word Notes from context, then check their definitions. Complete the Quick Challenge. If the answer is wrong or uncertain, use the retry hint, locate the evidence, reread the paragraph, and try again. Finish with a 5–7 sentence claim-evidence-explanation summary.`,
    discussionPoints: [
      `Ask yourself: ${spec.question}`,
      'What exact sentence or event is your strongest evidence?',
      'What is one reflection you can make after you have separated it from the chapter’s factual claims?',
    ],
    differentiation: {
      fastFinishers: `Write a 120–150 word response on “${spec.title}” and explain why the two distractors are less well supported.`,
      strugglingLearners: 'Copy one relevant sentence, underline the key words, and complete: “This evidence shows that ____.” Then retry the Quick Challenge.',
    },
    interactiveTips: [
      'Try to infer each highlighted word from its sentence before opening Word Notes.',
      'Use hotspots to locate relevant ideas, then verify them in the story prose.',
      'After the Quick Challenge, write one sentence explaining why the correct answer has stronger textual evidence.',
    ],
    extraResources: undefined,
  };
};

export const mosesB2TeacherGuideFinalEn: TeacherGuideSection[] = storyPages.map(teacherSection);
export const mosesB2SelfStudyGuideFinalEn: TeacherGuideSection[] = storyPages.map(selfStudySection);

export const mosesB2StudentGuideSectionsFinalEn = mosesB2StudentGuideSectionsGoldEn.map((section) => ({
  ...section,
  text: section.text.replace(/\b20 chapters\b/g, '24 chapters'),
  points: section.points.map((point) => point.replace(/\b20 chapters\b/g, '24 chapters')),
}));

export const mosesB2TeacherGuideMetadataFinalEn = mosesB2TeacherGuideMetadataGoldEn;
export const mosesB2StudentGuideMetadataFinalEn = mosesB2StudentGuideMetadataGoldEn;
export const mosesB2StudentGuideTextFinalEn = mosesB2StudentGuideTextGoldEn;
