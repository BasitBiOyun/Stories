import { normalizeHighlightText } from '../lib/highlightTextMatch';
import type { PageData } from '../types';
import {
  syncA2GlossariesFromStoryHighlights,
  type A2HighlightStandardConfig,
  type A2HighlightStandardResult,
} from './a2HighlightStandard';

export type A2ArabicDefinitionOverrides = Record<number, Record<string, string>>;

const ARABIC_DIACRITIC = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/;

const findDefinition = (
  chapterDefinitions: Record<string, string> | undefined,
  englishWord: string,
): string | undefined => {
  if (!chapterDefinitions) return undefined;
  const normalized = normalizeHighlightText(englishWord, 'en');
  const match = Object.entries(chapterDefinitions).find(([candidate]) => (
    normalizeHighlightText(candidate, 'en') === normalized
  ));
  return match?.[1];
};

const fail = (storyKey: string, message: string): never => {
  throw new Error(`[${storyKey} A2 Arabic definition contract] ${message}`);
};

/**
 * Locks Arabic tooltip definitions to the same canonical English learning target.
 * A reviewed vocalized override is used when supplied. Existing Arabic definitions
 * may be retained only when they already contain Arabic diacritics (Mecca A2 is the
 * main legacy source that already satisfies this rule).
 */
export const applyA2ArabicDefinitionStandard = (
  result: A2HighlightStandardResult,
  definitions: A2ArabicDefinitionOverrides,
  config: A2HighlightStandardConfig,
): A2HighlightStandardResult => {
  const targets: A2HighlightStandardResult['targets'] = Object.fromEntries(config.storyIds.map((chapterId) => {
    const chapterDefinitions = definitions[chapterId];
    const chapterTargets = (result.targets[chapterId] ?? []).map((target) => {
      const reviewed = findDefinition(chapterDefinitions, target.en.word);
      const definition = reviewed ?? target.ar.definition;
      if (!definition?.trim()) {
        fail(config.storyKey, `Chapter ${chapterId} target “${target.en.word}” has no Arabic definition.`);
      }
      if (!ARABIC_DIACRITIC.test(definition)) {
        fail(config.storyKey, `Chapter ${chapterId} target “${target.en.word}” has an unvocalized Arabic definition.`);
      }
      return {
        ...target,
        ar: { ...target.ar, definition },
      };
    });
    return [chapterId, chapterTargets] as const;
  }));

  const arabicPagesWithDefinitions: PageData[] = result.arabicPages.map((page) => {
    if (page.type !== 'story' || !config.storyIds.includes(page.id)) return page;
    const chapterTargets = targets[page.id] ?? [];
    return {
      ...page,
      vocabulary: chapterTargets.map((target) => ({ ...target.ar })),
      animatedWords: undefined,
    };
  });

  return {
    targets,
    englishPages: result.englishPages,
    arabicPages: syncA2GlossariesFromStoryHighlights(arabicPagesWithDefinitions, config, 'ar'),
  };
};
