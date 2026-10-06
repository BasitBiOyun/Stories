import type { Exercise } from '../types';

// "I can" lines always come in the same order per chapter: the story, the language point, then
// using it (speaking or writing). The closing step for each line is found in the chapter itself:
// the paragraph that tells it, the Language Focus activity that practises it, the "Say it" task.

const EN_STOP = new Set('i can say tell how what who why when where which the a an and or to of in on at for with my me about is was were be did do does some this that these it its his her their them they he she explain describe talk write short sentence sentences four three two one someone something person people use ask give make partner group about own words now then very'.split(' '));
const AR_STOP = new Set('أستطيع استطيع أن ان أقول اقول أحكي احكي أصف اصف أشرح اشرح أكتب اكتب أتحدث اتحدث كيف ماذا من لماذا متى أين اين في على عن إلى الى ما الذي التي هذا هذه ذلك تلك و أو او مع لـ كان كانت شخص شخصا جمل جملة قصيرة لزميلي زميلي'.split(' '));

const normalize = (word: string, ar: boolean) => {
  let w = word.toLowerCase().normalize('NFKC').replace(/[ؐ-ًؚ-ٰٟ]/g, '').replace(/[^\p{L}\p{N}]/gu, '');
  if (ar) w = w.replace(/^[وفبكل](?=ال)/, '').replace(/^ال/, '').replace(/[أإآ]/g, 'ا').replace(/ة$/, 'ه');
  return w;
};

const keyWords = (text: string, ar: boolean) => {
  const stop = ar ? AR_STOP : EN_STOP;
  const stem = ar ? 4 : 5;
  return [...new Set(text.split(/\s+/).filter(w => !stop.has(w.toLowerCase().replace(/[^\p{L}]/gu, ''))).map(w => normalize(w, ar)).filter(w => w.length >= 3).map(w => w.slice(0, stem)))];
};

const score = (keys: string[], text: string, ar: boolean) => {
  const words = new Set(text.split(/\s+/).map(w => normalize(w, ar).slice(0, ar ? 4 : 5)));
  return keys.filter(k => words.has(k)).length;
};

/** Index of the paragraph that best matches the line, or -1 when nothing matches. */
export const bestParagraph = (item: string, paragraphs: string[], ar: boolean) => {
  const keys = keyWords(item, ar);
  let best = -1;
  let bestScore = 0;
  paragraphs.forEach((paragraph, index) => {
    const s = score(keys, paragraph, ar);
    if (s > bestScore) { best = index; bestScore = s; }
  });
  return best;
};

/** The story's paragraphs as the reader shows them (poems left out). */
export const storyParagraphs = (content: string) => content
  .replace(/\[POEM_GRID\][\s\S]*?\[\/POEM_GRID\]|\[POEM(?:\s+compact)?\][\s\S]*?\[\/POEM\]/g, '')
  .split(/\n\s*\n/)
  .map(p => p.trim())
  .filter(Boolean);

export const bestLanguageActivity = (item: string, exercises: Exercise[], ar: boolean) => {
  const practice = exercises.filter(e => e.type !== 'reflection');
  if (!practice.length) return undefined;
  const keys = keyWords(item, ar);
  let best = practice[0];
  let bestScore = 0;
  practice.forEach(e => {
    const s = score(keys, [e.title, e.instructions, e.question, e.explanation].filter(Boolean).join(' '), ar);
    if (s > bestScore) { best = e; bestScore = s; }
  });
  return best;
};

export const sayItActivity = (exercises: Exercise[]) => {
  const reflection = [...exercises].reverse().find(e => e.type === 'reflection');
  const example = reflection?.discussionPrompts?.find(p => p.example)?.example;
  return reflection ? { exercise: reflection, example } : undefined;
};
