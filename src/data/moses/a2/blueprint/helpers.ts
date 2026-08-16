import type { BlueprintVocabularyTarget } from '../../../learningBlueprint';
import { mosesA2HighlightTargets } from '../goldFinal';

export { L, fill, guideBundle, matching, mc, tap, tf } from '../../../a2BlueprintAuthoring';

export const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (mosesA2HighlightTargets[chapterId] ?? []).map(target => ({
    id: `moses-a2-ch${chapterId}-${target.id}`,
    en: { ...target.en },
    ar: { ...target.ar },
  }));
