/**
 * Every Word Note card shows its meaning in the book's language and, under it, the counterpart
 * from the other language (EN book → Arabic, AR book → English). The reader finds that counterpart
 * by chapter and index (src/data/bilingualHighlightCards.ts, place/people cards left out), so a chapter
 * whose EN and AR Word Note lists differ in length, or an entry without a definition, shows only one language.
 * This lists every Word Note that would open without its counterpart, in all books.
 * Usage: npx tsx docs/vocabulary/tools/checkWordNotePairs.mts [story] [level] [--dump]
 */
import '../../../scripts/lib/nodeContent';
import { getBookDefinition } from '../../../src/core/content/bookRegistry';
import { getActiveBilingualCounterpart, setActiveBilingualBookPair } from '../../../src/data/bilingualHighlightCards';
import { getHistoricalEntityIdFromDefinition } from '../../../src/features/historical-entities';
import type { PageData } from '../../../src/types';

const dump = process.argv.includes('--dump');
const [onlyStory, onlyLevel] = process.argv.slice(2).filter(a => a !== '--dump');
const stories = onlyStory ? [onlyStory] : ['mecca', 'adam', 'ibrahim', 'musa', 'yunusEmre'];
const levels = onlyLevel ? [onlyLevel] : ['A2', 'B1', 'B2'];
let missing = 0;
for (const story of stories) {
  for (const level of levels) {
    const definition = getBookDefinition(story, level as never);
    if (!definition) continue;
    const pair = await definition.load();
    setActiveBilingualBookPair(pair);
    const arPages = new Map(pair.ar.pages.filter(p => p.type === 'story').map(p => [p.id, p as PageData]));
    pair.en.pages.filter(p => p.type === 'story').forEach((enPage, i) => {
      const arPage = arPages.get(enPage.id);
      // Place and people cards open their own card; only Word Notes are paired.
      const notes = (page?: PageData) => (page?.vocabulary ?? []).filter(v => !getHistoricalEntityIdFromDefinition(v.definition ?? ''));
      const en = notes(enPage as PageData);
      const ar = notes(arPage);
      if (dump) en.forEach((v, k) => console.log(`${story} ${level} ch${i + 1}  ${v.word} = ${ar[k]?.word ?? '?'}`));
      const out: string[] = [];
      if (en.length !== ar.length) out.push(`EN ${en.length} / AR ${ar.length} notes`);
      for (const [lang, list] of [['en', en], ['ar', ar]] as const) {
        for (const v of list) {
          if (!getActiveBilingualCounterpart(lang, v.word, v.definition ?? '')) out.push(`${lang} «${v.word}» has no ${lang === 'en' ? 'Arabic' : 'English'}`);
        }
      }
      if (out.length) {
        missing += out.length;
        console.log(`${story} ${level} ch${i + 1}:\n   ${out.join('\n   ')}`);
      }
    });
  }
}
setActiveBilingualBookPair(null);
console.log(missing ? `${missing} problem(s)` : 'OK: every Word Note has both languages');
process.exit(missing ? 1 : 0);
