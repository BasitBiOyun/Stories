import { bookRegistry } from '../../src/core/content/bookRegistry';
import {
  getActiveBilingualCounterpart,
  setActiveBilingualBookPair,
} from '../../src/data/bilingualHighlightCards';

const errors: string[] = [];
let checkedBooks = 0;
let checkedPairs = 0;

for (const definition of bookRegistry) {
  const pair = await definition.load();
  checkedBooks += 1;
  setActiveBilingualBookPair(pair);

  const arStories = new Map(
    pair.ar.pages
      .filter((page) => page.type === 'story')
      .map((page) => [page.id, page] as const),
  );

  for (const enPage of pair.en.pages) {
    if (enPage.type !== 'story') continue;
    const arPage = arStories.get(enPage.id);
    const label = `${definition.storyId}:${definition.level}:ch${enPage.id}`;
    if (!arPage) {
      errors.push(`${label} is missing its Arabic story page.`);
      continue;
    }

    const enVocabulary = enPage.vocabulary ?? [];
    const arVocabulary = arPage.vocabulary ?? [];
    if (enVocabulary.length !== arVocabulary.length) {
      errors.push(
        `${label} has divergent highlight counts (EN ${enVocabulary.length}, AR ${arVocabulary.length}).`,
      );
      continue;
    }

    enVocabulary.forEach((enEntry, index) => {
      const arEntry = arVocabulary[index];
      const pairLabel = `${label}:target${index + 1}`;
      if (!enEntry.word.trim() || !enEntry.definition?.trim()) {
        errors.push(`${pairLabel} has an empty English word or definition.`);
        return;
      }
      if (!arEntry?.word.trim() || !arEntry.definition?.trim()) {
        errors.push(`${pairLabel} has an empty Arabic word or definition.`);
        return;
      }

      const fromEnglish = getActiveBilingualCounterpart('en', enEntry.word, enEntry.definition);
      if (
        !fromEnglish
        || fromEnglish.language !== 'ar'
        || fromEnglish.word !== arEntry.word
        || fromEnglish.definition !== arEntry.definition
      ) {
        errors.push(`${pairLabel} cannot resolve the exact EN → AR card counterpart.`);
      }

      const fromArabic = getActiveBilingualCounterpart('ar', arEntry.word, arEntry.definition);
      if (
        !fromArabic
        || fromArabic.language !== 'en'
        || fromArabic.word !== enEntry.word
        || fromArabic.definition !== enEntry.definition
      ) {
        errors.push(`${pairLabel} cannot resolve the exact AR → EN card counterpart.`);
      }

      checkedPairs += 1;
    });
  }
}

setActiveBilingualBookPair(null);

if (errors.length) {
  throw new Error(
    `[Bilingual highlight card contract] ${errors.length} error(s):\n- ${errors.join('\n- ')}`,
  );
}

console.log(
  `[Bilingual highlight cards] PASS: ${checkedBooks}/${bookRegistry.length} books, ${checkedPairs} EN↔AR highlight pairs.`,
);
