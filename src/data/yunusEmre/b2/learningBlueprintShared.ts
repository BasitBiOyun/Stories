import type {
  BlueprintAssessmentItem,
  BlueprintCognitiveFocus,
  BlueprintStage,
  BlueprintVocabularyTarget,
  LocalizedText,
} from '../../learningBlueprint';
import { L } from '../../b2BlueprintAuthoring';
import { yunusEmreB2HighlightTargets } from './source';

export type PointDraft = {
  key: string;
  focus: BlueprintCognitiveFocus;
  stage: BlueprintStage;
  claim: LocalizedText;
  evidence: LocalizedText;
  exercise: BlueprintAssessmentItem['exercise'];
};

export type ChapterDraft = {
  chapterId: number;
  theme: LocalizedText;
  primaryQuestion: LocalizedText;
  analysisQuestion: LocalizedText;
  points: PointDraft[];
};

const V = (chapterId: number, index = 0): LocalizedText => {
  const target = yunusEmreB2HighlightTargets[chapterId]?.[index];
  if (!target) throw new Error(`Yunus Emre B2 Blueprint: missing canonical Word Note ${index + 1} for Chapter ${chapterId}.`);
  return L(target.en.word, target.ar.word);
};

export const P = (
  chapterId: number,
  key: string,
  focus: BlueprintCognitiveFocus,
  stage: BlueprintStage,
  evidence: number | LocalizedText,
  claim: LocalizedText,
  exercise: BlueprintAssessmentItem['exercise'],
): PointDraft => ({
  key,
  focus,
  stage,
  claim,
  evidence: typeof evidence === 'number' ? V(chapterId, evidence) : evidence,
  exercise,
});

export const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (yunusEmreB2HighlightTargets[chapterId] ?? []).map((target, index) => ({
    id: `yunus-b2-c${chapterId}-v${index + 1}`,
    en: { ...target.en },
    ar: { ...target.ar },
  }));
