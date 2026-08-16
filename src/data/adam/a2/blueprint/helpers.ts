import type { BlueprintVocabularyTarget } from '../../../learningBlueprint';
import { adamA2HighlightTargets } from '../highlights';

export { L, fill, guideBundle, matching, mc, tap, tf } from '../../../a2BlueprintAuthoring';

export const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (adamA2HighlightTargets[chapterId] ?? []).map(target => ({
    id: `adam-a2-ch${chapterId}-${target.id}`,
    en: { ...target.en },
    ar: { ...target.ar },
  }));
