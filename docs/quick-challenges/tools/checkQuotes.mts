/**
 * Checks that every quoted passage (“…” or «…») in each chapter's Quick Challenge explanation and
 * question occurs in that chapter's own text. Catches wrong-chapter or wrong-book content.
 * Usage: npx tsx docs/quick-challenges/tools/checkQuotes.mts <story> <LEVEL> <en|ar>
 */
import { getBookDefinition } from '../../../src/core/content/bookRegistry';

const [story, level, lang] = process.argv.slice(2);
const book = (await getBookDefinition(story, level as never)!.load())[lang as 'en' | 'ar'];
const norm = (s: string) => s.normalize('NFKC').replace(/[\u200B-\u200F\u202A-\u202E\u2066-\u2069]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه').replace(/[ؤئ]/g, 'ء').replace(/[ً-ْٰـ]/g, '').replace(/[’‘`]/g, "'").replace(/[“”"«»]/g, '').replace(/[.,!?;:،؛؟()\-–—]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
let bad = 0, total = 0;
for (const p of book.pages) {
  if (!p.languageFocusExercises) continue;
  const e = p.exercises?.[0];
  if (!e) continue;
  const text = norm(`${p.title} ${String(p.content)}`);
  const src = `${e.question ?? ''} ${e.explanation ?? ''}`;
  for (const m of src.matchAll(/[“«]([^”»]{12,})[”»]/g)) {
    const parts = m[1].split(/…|\.\.\./).map(norm).filter(x => x.split(' ').length >= 3);
    for (const part of parts) {
      total++;
      if (!text.includes(part)) { bad++; console.log(`! ch${p.id}: “${part.slice(0, 90)}” not in chapter text`); }
    }
  }
}
console.log(`${story} ${level} ${lang}: ${total} quoted segments, ${bad} not found`);
