import { defineLearningBlueprint, type BlueprintVocabularyTarget } from '../../learningBlueprint';
import { adamB1LearningBlueprint as authoredBlueprint } from './authoredBlueprint';
import { adamB1HighlightTargets } from './source';

const canonicalVocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (adamB1HighlightTargets[chapterId] ?? []).map((target, index) => ({
    id: `adam-b1-c${chapterId}-v${index + 1}`,
    en: { ...target.en },
    ar: { ...target.ar },
  }));

/**
 * Adam B1's authored pedagogy predates the final source-surface lock. Keep the
 * reviewed objectives/evidence/assessments intact while binding Word Notes to
 * the canonical surfaced bilingual targets produced by source.ts.
 */
export const adamB1LearningBlueprint = defineLearningBlueprint({
  ...authoredBlueprint,
  chapters: authoredBlueprint.chapters.map(chapter => ({
    ...chapter,
    vocabularyTargets: canonicalVocabularyTargetsFor(chapter.chapterId),
  })),
});
