/**
 * Checks Word Notes, hotspots, Master Glossary and Vocabulary Challenge of one book (both languages)
 * as the UI loads them.
 * Word Notes (page.vocabulary on story pages)
 * - every word is found in its own chapter the way StoryPage highlights it (normalizeHighlightText tokens)
 * - no word is noted twice in the book, no definition just repeats the word
 * Hotspots
 * - titles are unique in the book and do not repeat the chapter title
 * - a description that names the Prophet carries (pbuh) / ﷺ
 * Master Glossary
 * - holds every Word Note once, with the same definition, the right chapter and chapter title
 * - storyExample (when given) is a sentence of that chapter and contains the word
 * Vocabulary Challenge
 * - A2 6 pairs, B1/B2 10; words and meanings unique; a meaning contains neither its own word nor another challenge word
 * - every pair has context + chapter: context is a sentence of that chapter and contains the word,
 *   so the "In the Story" stage shows a real story sentence instead of repeating the meaning
 * - every pair has partOfSpeech and each part of speech occurs at least twice, so the story-sentence
 *   options are not given away by grammar
 * - every word is a Word Note of the book (the challenge reviews glossary words)
 * A2 Arabic: definitions, hotspots and meanings carry full tashkeel (the A2 Arabic story is fully vocalised)
 * Usage: npx tsx docs/vocabulary/tools/checkVocabulary.mts <story> <A2|B1|B2> [--dump]
 * story ids: adam, ibrahim (Abraham), musa (Moses), mecca, yunusEmre
 */
import { getBookDefinition } from '../../../src/core/content/bookRegistry';
import { highlightPhraseOccurs, normalizeHighlightText } from '../../../src/lib/highlightTextMatch';
import type { PageData, VocabularyItem } from '../../../src/types';

const [story, level, flag] = process.argv.slice(2);
const pair = await getBookDefinition(story, level as never)!.load();
const expectedPairs = level === 'A2' ? 6 : 10;
const TASHKEEL = /[\u064B-\u0652\u0670]/g;
const ARABIC_LETTER = /[\u0621-\u064A]/g;
// Share of Arabic letters followed by a haraka/sukun/tanween/shadda. Fully vocalised A2 text sits well above 0.55 (long-vowel letters and the article alif carry no mark).
const vocalised = (s: string) => {
  const letters = (s.match(ARABIC_LETTER) ?? []).length;
  return letters === 0 ? 1 : (s.match(TASHKEEL) ?? []).length / letters;
};
const sentences = (text: string) => text.split(/(?<=[.!?؟»”])\s+|\n+/).map(s => s.trim()).filter(Boolean);
const flat = (s: string) => s.normalize('NFD').replace(/\s+/g, ' ').trim();

let problems = 0;
for (const lang of ['en', 'ar'] as const) {
  const book = pair[lang];
  const hl = lang === 'ar' ? 'ar' : 'en';
  // The reader highlights a Word Note with the same matcher (tokens, Arabic clitics, English inflections).
  const has = (text: string, word: string) => highlightPhraseOccurs(text, word, hl);
  // VocabularyMatch masks the word in the context sentence by plain substring after removing tashkeel.
  const bare = (s: string) => s.replace(/[\u064B-\u0652\u0670]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').toLocaleLowerCase();
  const maskable = (context: string, word: string) => bare(context).includes(bare(word));
  const issue = (s: string) => { problems++; console.log('   ! ' + s); };
  const stories = book.pages.filter(p => p.type === 'story') as PageData[];
  const chapterOf = new Map(stories.map((p, i) => [p.id, i + 1]));
  const byChapter = new Map(stories.map((p, i) => [i + 1, p]));
  const inChapter = (chapter: number | undefined, sentence: string | undefined) => {
    const page = chapter ? byChapter.get(chapter) : undefined;
    return Boolean(page && sentence && flat(String(page.content)).includes(flat(sentence)));
  };
  const checkTashkeel = (label: string, s: string) => {
    if (lang === 'ar' && level === 'A2' && vocalised(s) < 0.55) issue(`${label}: missing tashkeel «${s}»`);
  };
  console.log(`\n## ${story} ${level} ${lang.toUpperCase()}`);

  // Word Notes + hotspots
  const notes = new Map<string, { item: VocabularyItem; chapter: number; title: string }>();
  const hotspotTitles = new Set<string>();
  for (const page of stories) {
    const chapter = chapterOf.get(page.id)!;
    for (const item of page.vocabulary ?? []) {
      const key = normalizeHighlightText(item.word, hl);
      if (!has(String(page.content), item.word)) issue(`ch${chapter} Word Note "${item.word}" is not in the chapter text`);
      if (notes.has(key)) issue(`ch${chapter} Word Note "${item.word}" repeats ch${notes.get(key)!.chapter}`);
      else notes.set(key, { item, chapter, title: page.title });
      if (has(item.definition, item.word)) issue(`ch${chapter} Word Note "${item.word}": definition repeats the word`);
      checkTashkeel(`ch${chapter} Word Note "${item.word}"`, item.definition);
      if (flag === '--dump') console.log(`   ch${chapter} WN ${item.word} = ${item.definition}`);
    }
    for (const h of page.hotspots ?? []) {
      const key = normalizeHighlightText(h.title, hl);
      if (hotspotTitles.has(key)) issue(`ch${chapter} hotspot title "${h.title}" is used twice`);
      hotspotTitles.add(key);
      if (key === normalizeHighlightText(page.title, hl)) issue(`ch${chapter} hotspot title "${h.title}" repeats the chapter title`);
      if (lang === 'en' && /\bProphet\b/.test(h.description) && !/\((pbuh|as)\)/.test(h.description)) issue(`ch${chapter} hotspot "${h.title}": Prophet without (pbuh)`);
      if (lang === 'ar' && /النبي|الرسول/.test(h.description.replace(TASHKEEL, '')) && !/ﷺ|صلى الله عليه وسلم/.test(h.description.replace(TASHKEEL, ''))) issue(`ch${chapter} hotspot "${h.title}": الرسول/النبي without ﷺ`);
      checkTashkeel(`ch${chapter} hotspot "${h.title}"`, h.title + ' ' + h.description);
      if (flag === '--dump') console.log(`   ch${chapter} HS ${h.title} = ${h.description}`);
    }
  }
  console.log(`   ${notes.size} Word Notes, ${hotspotTitles.size} hotspots`);

  // Master Glossary
  const glossary = book.pages.find(p => p.type === 'glossary')?.vocabulary ?? [];
  const seen = new Set<string>();
  for (const g of glossary) {
    const key = normalizeHighlightText(g.word, hl);
    const note = notes.get(key);
    if (seen.has(key)) issue(`glossary "${g.word}" listed twice`);
    seen.add(key);
    if (!note) { issue(`glossary "${g.word}" is not a Word Note of any chapter`); continue; }
    if (g.definition !== note.item.definition) issue(`glossary "${g.word}": definition differs from the ch${note.chapter} Word Note`);
    if (g.chapter !== note.chapter) issue(`glossary "${g.word}": chapter ${g.chapter}, Word Note is in ch${note.chapter}`);
    if (g.chapterTitle !== note.title) issue(`glossary "${g.word}": chapterTitle "${g.chapterTitle}" ≠ "${note.title}"`);
    if (!g.storyExample) issue(`glossary "${g.word}": no storyExample`);
    else {
      if (!inChapter(note.chapter, g.storyExample)) issue(`glossary "${g.word}": storyExample is not in ch${note.chapter}`);
      if (!has(g.storyExample, g.word)) issue(`glossary "${g.word}": storyExample does not contain the word`);
    }
  }
  for (const [key, note] of notes) if (!seen.has(key)) issue(`Word Note "${note.item.word}" (ch${note.chapter}) is missing from the glossary`);
  console.log(`   glossary ${glossary.length} entries`);

  // Vocabulary Challenge
  const pairs = book.pages.find(p => p.type === 'vocabulary-match')?.vocabularyPairs ?? [];
  if (pairs.length !== expectedPairs) issue(`Vocabulary Challenge has ${pairs.length} pairs, expected ${expectedPairs}`);
  if (new Set(pairs.map(p => normalizeHighlightText(p.word, hl))).size !== pairs.length) issue('Vocabulary Challenge: duplicate word');
  if (new Set(pairs.map(p => normalizeHighlightText(p.meaning, hl))).size !== pairs.length) issue('Vocabulary Challenge: duplicate meaning');
  const pos = new Map<string, number>();
  for (const p of pairs) {
    const label = `VC "${p.word}"`;
    if (flag === '--dump') console.log(`   VC ch${p.chapter} [${p.partOfSpeech}] ${p.word} = ${p.meaning} | ${p.context}`);
    if (has(p.meaning, p.word)) issue(`${label}: meaning contains the word`);
    for (const other of pairs) if (other !== p && has(p.meaning, other.word)) issue(`${label}: meaning contains the challenge word "${other.word}"`);
    if (!notes.has(normalizeHighlightText(p.word, hl))) issue(`${label}: not a Word Note of the book`);
    if (!p.context || !p.chapter) issue(`${label}: no context/chapter, the "In the Story" stage falls back to the meaning`);
    else {
      if (!inChapter(p.chapter, p.context)) issue(`${label}: context is not a sentence of ch${p.chapter}`);
      if (!maskable(p.context, p.word)) issue(`${label}: context does not contain the word`);
      else if (bare(p.context).split(bare(p.word)).length > 2) issue(`${label}: the word occurs twice in the context, the blank gives it away`);
    }
    if (p.chapterTitle && p.chapterTitle !== byChapter.get(p.chapter ?? 0)?.title) issue(`${label}: chapterTitle does not match ch${p.chapter}`);
    if (!p.partOfSpeech) issue(`${label}: no partOfSpeech`);
    else pos.set(p.partOfSpeech, (pos.get(p.partOfSpeech) ?? 0) + 1);
    checkTashkeel(label, p.word + ' ' + p.meaning);
  }
  for (const [part, count] of pos) if (count < 2) issue(`VC: only one ${part}, its story-sentence options are given away by grammar`);
  const chapters = new Set(pairs.map(p => p.chapter));
  console.log(`   VC ${pairs.length} pairs from chapters ${[...chapters].sort((a, b) => (a ?? 0) - (b ?? 0)).join(', ')}; parts of speech ${[...pos].map(([k, v]) => `${k}×${v}`).join(', ')}`);
}
console.log(problems ? `\n${problems} problem(s)` : '\nOK');
process.exit(problems ? 1 : 0);
