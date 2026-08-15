import type { Exercise, Level, PageData, QuizQuestion, TeacherGuideSection } from '../types';
import { highlightPhraseMatches, highlightPhraseOccurs, normalizeHighlightText } from '../lib/highlightTextMatch';
import { buildLearningGuides } from './learningGuideSystem';

export type LearningLanguage = 'en' | 'ar';
export interface LearningSystemConfig {
  level: Level;
  storyIds: number[];
  knowledgeCheckPageId: number;
  vocabularyPageId?: number;
  reviewPageId: number;
  glossaryPageIds: [number, number];
  finalChallengePageId: number;
  knowledgeCount?: number;
  vocabularyCount?: number;
  reviewCount?: number;
  finalCount?: number;
}
export interface LearningSystemResult {
  englishPages: PageData[];
  arabicPages: PageData[];
  englishTeacherGuide: TeacherGuideSection[];
  arabicTeacherGuide: TeacherGuideSection[];
  englishSelfStudyGuide: TeacherGuideSection[];
  arabicSelfStudyGuide: TeacherGuideSection[];
}

type Kind = 'h' | 'v' | 's';
type Variant = 'multiple-choice' | 'true-false' | 'matching' | 'fill-blanks' | 'tap-reveal';
type Fact = { prompt: string; answer: string };
type Anchor = {
  key: string;
  kind: Kind;
  chapterId: number;
  sourceIndex: number;
  english: Exercise;
  arabic: Exercise;
  englishFact: Fact;
  arabicFact: Fact;
};

const QUICK: Variant[] = ['tap-reveal', 'fill-blanks', 'matching', 'multiple-choice', 'true-false'];
const counts = (c: LearningSystemConfig) => ({
  knowledge: c.knowledgeCount ?? 8,
  vocabulary: c.vocabularyCount ?? (c.level === 'A2' ? 6 : 10),
  review: c.reviewCount ?? 8,
  final: c.finalCount ?? 10,
});
const chapterLabel = (id: number, lang: LearningLanguage) => lang === 'ar' ? `الفصل ${id}` : `Chapter ${id}`;
const story = (pages: PageData[], id: number) => pages.find((p) => p.type === 'story' && p.id === id);
const requirePage = (pages: PageData[], id: number, lang: string) => {
  const page = pages.find((p) => p.id === id);
  if (!page) throw new Error(`[Learning System] ${lang} page ${id} is missing.`);
  return page;
};
const rotate = <T,>(a: T[], n: number) => a.length ? [...a.slice(((n % a.length) + a.length) % a.length), ...a.slice(0, ((n % a.length) + a.length) % a.length)] : [];
const unique = (values: string[]) => {
  const seen = new Set<string>();
  return values.filter((v) => { const k = v.trim(); if (!k || seen.has(k)) return false; seen.add(k); return true; });
};
const insertAt = <T,>(items: T[], item: T, index: number) => { const out = [...items]; out.splice(index, 0, item); return out; };
const pickEvenly = <T,>(items: T[], count: number): T[] => {
  if (items.length <= count) return items.slice();
  if (count <= 1) return count ? [items[0]] : [];
  const out: T[] = []; const used = new Set<number>();
  for (let i = 0; i < count; i += 1) {
    let j = Math.round(i * (items.length - 1) / (count - 1));
    while (used.has(j) && j + 1 < items.length) j += 1;
    used.add(j); out.push(items[j]);
  }
  return out;
};

const chapterSentences = (text: string) => text
  .replace(/\[POEM\][\s\S]*?\[\/POEM\]/g, ' ')
  .split(/(?<=[.!?؟])\s+|\n+/u)
  .map((s) => s.trim())
  .filter((s) => s.length >= 24 && !/^KEY WORDS:/i.test(s));

const sentencePairs = (en: PageData, ar: PageData, max = 4): Array<[string, string]> => {
  const a = chapterSentences(en.content || ''); const b = chapterSentences(ar.content || '');
  const n = Math.min(max, a.length, b.length); if (!n) return [];
  if (n === 1) return [[a[0], b[0]]];
  return Array.from({ length: n }, (_, i) => [
    a[Math.round(i * (a.length - 1) / (n - 1))],
    b[Math.round(i * (b.length - 1) / (n - 1))],
  ]);
};

const validateSources = (enPages: PageData[], arPages: PageData[], config: LearningSystemConfig) => {
  for (const id of config.storyIds) {
    const en = story(enPages, id); const ar = story(arPages, id);
    if (!en || !ar) throw new Error(`[Learning System] Chapter ${id} is missing in one language.`);
    const eh = en.hotspots || []; const ah = ar.hotspots || [];
    if (eh.length !== ah.length) throw new Error(`[Learning System] Chapter ${id} hotspot counts differ: EN=${eh.length}, AR=${ah.length}.`);
    eh.forEach((h, i) => { if (h.id !== ah[i]?.id) throw new Error(`[Learning System] Chapter ${id} hotspot ${i + 1} source IDs differ.`); });
    if ((en.vocabulary?.length || 0) !== (ar.vocabulary?.length || 0)) throw new Error(`[Learning System] Chapter ${id} Word Notes counts differ.`);
    if (!eh.length && !(en.vocabulary?.length) && !sentencePairs(en, ar).length) throw new Error(`[Learning System] Chapter ${id} has no usable paired source.`);
  }
  [config.knowledgeCheckPageId, config.vocabularyPageId, config.reviewPageId, ...config.glossaryPageIds, config.finalChallengePageId]
    .filter((x): x is number => typeof x === 'number')
    .forEach((id) => { requirePage(enPages, id, 'English'); requirePage(arPages, id, 'Arabic'); });
};

const distractors = (correct: string, values: string[]) => unique(values).filter((v) => v !== correct).slice(0, 2);
const baseExercise = (page: PageData, fact: Fact, wrong: string[], index: number, lang: LearningLanguage, kind: Kind): Exercise | null => {
  const ds = distractors(fact.answer, wrong); if (ds.length < 2) return null;
  const correct = (page.id + index + (kind === 'v' ? 1 : kind === 's' ? 2 : 0)) % 3;
  const q = kind === 'v'
    ? (lang === 'ar' ? `ما معنى «${fact.prompt}» في ${chapterLabel(page.id, lang)}؟` : `What does “${fact.prompt}” mean in ${chapterLabel(page.id, lang)}?`)
    : kind === 'h'
      ? (lang === 'ar' ? `أي معلومة ترتبط بـ «${fact.prompt}» في ${chapterLabel(page.id, lang)}؟` : `Which detail matches “${fact.prompt}” in ${chapterLabel(page.id, lang)}?`)
      : (lang === 'ar' ? `أي جملة وردت في ${chapterLabel(page.id, lang)}؟` : `Which sentence appears in ${chapterLabel(page.id, lang)}?`);
  return {
    id: `learning-${kind}-${page.id}-${index}`, type: 'multiple-choice',
    title: lang === 'ar' ? 'دليل من الفصل' : 'Chapter Evidence',
    instructions: lang === 'ar' ? 'اختر الإجابة المدعومة بنص الفصل.' : 'Choose the answer supported by the chapter.',
    question: q, options: insertAt(ds, fact.answer, correct), correctAnswer: correct, explanation: fact.answer,
    feedback: {
      correct: lang === 'ar' ? 'صحيح. الإجابة مدعومة بالفصل.' : 'Correct. The answer is supported by the chapter.',
      incorrect: lang === 'ar' ? `ارجع إلى ${chapterLabel(page.id, lang)} وابحث عن الدليل.` : `Return to ${chapterLabel(page.id, lang)} and find the evidence.`,
    },
  };
};

const buildAnchors = (enPages: PageData[], arPages: PageData[], ids: number[]): Anchor[] => {
  const allEnHotspots = enPages.flatMap((p) => (p.hotspots || []).map((h) => h.description));
  const allArHotspots = arPages.flatMap((p) => (p.hotspots || []).map((h) => h.description));
  const allEnDefs = enPages.flatMap((p) => (p.vocabulary || []).map((v) => v.definition));
  const allArDefs = arPages.flatMap((p) => (p.vocabulary || []).map((v) => v.definition));
  const allEnSentences = enPages.flatMap((p) => chapterSentences(p.content || '').slice(0, 2));
  const allArSentences = arPages.flatMap((p) => chapterSentences(p.content || '').slice(0, 2));
  const byChapter = new Map<number, Anchor[]>();

  for (const id of ids) {
    const en = story(enPages, id)!; const ar = story(arPages, id)!; const a: Anchor[] = [];
    (en.hotspots || []).forEach((h, i) => {
      const ah = ar.hotspots?.[i]; if (!ah) return;
      const ef = { prompt: h.title, answer: h.description }; const af = { prompt: ah.title, answer: ah.description };
      const ee = baseExercise(en, ef, allEnHotspots, i, 'en', 'h'); const ae = baseExercise(ar, af, allArHotspots, i, 'ar', 'h');
      if (ee && ae) a.push({ key: `h:${id}:${i}`, kind: 'h', chapterId: id, sourceIndex: i, english: ee, arabic: ae, englishFact: ef, arabicFact: af });
    });
    (en.vocabulary || []).forEach((v, i) => {
      const av = ar.vocabulary?.[i]; if (!av) return;
      const ef = { prompt: v.word, answer: v.definition }; const af = { prompt: av.word, answer: av.definition };
      const ee = baseExercise(en, ef, allEnDefs, i, 'en', 'v'); const ae = baseExercise(ar, af, allArDefs, i, 'ar', 'v');
      if (ee && ae) a.push({ key: `v:${id}:${i}`, kind: 'v', chapterId: id, sourceIndex: i, english: ee, arabic: ae, englishFact: ef, arabicFact: af });
    });
    sentencePairs(en, ar).forEach(([es, as], i) => {
      const ef = { prompt: en.title, answer: es }; const af = { prompt: ar.title, answer: as };
      const ee = baseExercise(en, ef, allEnSentences, i, 'en', 's'); const ae = baseExercise(ar, af, allArSentences, i, 'ar', 's');
      if (ee && ae) a.push({ key: `s:${id}:${i}`, kind: 's', chapterId: id, sourceIndex: i, english: ee, arabic: ae, englishFact: ef, arabicFact: af });
    });
    if (!a.length) throw new Error(`[Learning System] No paired learning source for Chapter ${id}.`);
    byChapter.set(id, a);
  }
  const out: Anchor[] = []; const max = Math.max(...ids.map((id) => byChapter.get(id)?.length || 0));
  for (let slot = 0; slot < max; slot += 1) ids.forEach((id) => { const x = byChapter.get(id)?.[slot]; if (x) out.push(x); });
  return out;
};

const sentenceWith = (text: string, phrase: string, lang: LearningLanguage) => chapterSentences(text).find((s) => highlightPhraseOccurs(s, phrase, lang));
const blank = (sentence: string, phrase: string, lang: LearningLanguage): string | null => {
  if (sentence.includes(phrase)) return sentence.replace(phrase, '[blank]');
  const n = normalizeHighlightText(phrase, lang).split(' ').filter(Boolean).length; if (!n) return null;
  const tokens = sentence.split(/\s+/);
  for (let i = 0; i <= tokens.length - n; i += 1) {
    const candidate = tokens.slice(i, i + n).join(' '); if (!highlightPhraseMatches(candidate, phrase, lang)) continue;
    const lead = tokens[i].match(/^[^\p{L}\p{N}]*/u)?.[0] || ''; const tail = tokens[i + n - 1].match(/[^\p{L}\p{N}]*$/u)?.[0] || '';
    tokens.splice(i, n, `${lead}[blank]${tail}`); return tokens.join(' ');
  }
  return null;
};
const factFor = (a: Anchor, lang: LearningLanguage) => lang === 'ar' ? a.arabicFact : a.englishFact;
const pageFor = (pages: PageData[], a: Anchor) => story(pages, a.chapterId)!;

const tap = (a: Anchor, p: PageData, lang: LearningLanguage): Exercise => {
  const f = factFor(a, lang);
  return { id: `learning-tap-${p.id}-${a.sourceIndex}`, type: 'tap-reveal', title: lang === 'ar' ? 'فكّر ثم اكشف' : 'Think, Then Reveal',
    instructions: lang === 'ar' ? 'فكّر أولاً ثم اكشف الإجابة وقارنها بالفصل.' : 'Think first, then reveal the answer and compare it with the chapter.',
    question: lang === 'ar' ? `ماذا يقول ${chapterLabel(p.id, lang)} عن «${f.prompt}»؟` : `What does ${chapterLabel(p.id, lang)} say about “${f.prompt}”?`,
    correctAnswer: f.answer, explanation: f.answer, tapRevealItems: [{ question: f.prompt, answer: f.answer }],
    feedback: { correct: lang === 'ar' ? 'جيد. قارن إجابتك بالنص.' : 'Good. Compare your answer with the text.', incorrect: lang === 'ar' ? 'ارجع إلى الفصل ثم حاول مرة أخرى.' : 'Return to the chapter and try again.' } };
};
const fill = (a: Anchor, p: PageData, lang: LearningLanguage): Exercise | null => {
  if (a.kind !== 'v') return null; const v = p.vocabulary?.[a.sourceIndex]; if (!v) return null;
  const s = sentenceWith(p.content || '', v.word, lang); if (!s) return null; const text = blank(s, v.word, lang); if (!text) return null;
  return { id: `learning-fill-${p.id}-${a.sourceIndex}`, type: 'fill-blanks', title: lang === 'ar' ? 'أكمل من الفصل' : 'Complete from the Chapter',
    instructions: lang === 'ar' ? 'استخدم كلمة من ملاحظات المفردات.' : 'Use a Word Notes word.', question: lang === 'ar' ? 'ما الكلمة الناقصة؟' : 'Which word is missing?',
    fillBlanksText: text, correctAnswer: v.word, explanation: `${v.word}: ${v.definition}`,
    feedback: { correct: lang === 'ar' ? 'صحيح.' : 'Correct.', incorrect: lang === 'ar' ? 'راجع الفصل وملاحظات المفردات.' : 'Check the chapter and Word Notes.' } };
};
const match = (a: Anchor, p: PageData, lang: LearningLanguage): Exercise | null => {
  if (a.kind === 's') return null;
  const hp = (p.hotspots || []).map((h) => ({ left: h.title, right: h.description })); const vp = (p.vocabulary || []).map((v) => ({ left: v.word, right: v.definition }));
  const ordered = a.kind === 'h' ? [...rotate(hp, a.sourceIndex), ...vp] : [...rotate(vp, a.sourceIndex), ...hp];
  const seen = new Set<string>(); const pairs = ordered.filter((x) => { if (!x.left.trim() || seen.has(x.left)) return false; seen.add(x.left); return true; }).slice(0, 3); if (pairs.length < 3) return null;
  return { id: `learning-match-${p.id}-${a.sourceIndex}`, type: 'matching', title: lang === 'ar' ? 'صل المعلومات' : 'Match the Information',
    instructions: lang === 'ar' ? 'صل كل كلمة أو فكرة بالمعلومة أو المعنى الصحيح.' : 'Match each key word or idea with its correct detail or meaning.', question: lang === 'ar' ? 'صل كل عنصر بالإجابة الصحيحة.' : 'Match each item with the correct answer.',
    matchingPairs: pairs, correctAnswer: Object.fromEntries(pairs.map((x) => [x.left, x.right])), explanation: lang === 'ar' ? 'جميع الأزواج من هذا الفصل.' : 'All pairs come from this chapter.',
    feedback: { correct: lang === 'ar' ? 'صحيح.' : 'Correct.', incorrect: lang === 'ar' ? 'راجع الفصل ثم حاول مرة أخرى.' : 'Check the chapter and try again.' } };
};
const tf = (a: Anchor, p: PageData, lang: LearningLanguage): Exercise => {
  const f = factFor(a, lang); const positive = (p.id + a.sourceIndex) % 2 === 0;
  return { id: `learning-tf-${p.id}-${a.sourceIndex}`, type: 'true-false', title: lang === 'ar' ? 'صحيح أم خطأ' : 'True or False',
    instructions: lang === 'ar' ? 'قارن العبارة بالفصل.' : 'Compare the statement with the chapter.',
    question: lang === 'ar' ? `${positive ? 'يذكر' : 'لا يذكر'} ${chapterLabel(p.id, lang)} هذه المعلومة: ${f.answer}` : `${chapterLabel(p.id, lang)} ${positive ? 'gives' : 'does not give'} this detail: ${f.answer}`,
    correctAnswer: positive, explanation: f.answer, feedback: { correct: lang === 'ar' ? 'صحيح.' : 'Correct.', incorrect: lang === 'ar' ? 'ارجع إلى الفصل.' : 'Return to the chapter.' } };
};
const variant = (a: Anchor, pages: PageData[], lang: LearningLanguage, type: Variant): Exercise | null => {
  const p = pageFor(pages, a); if (type === 'multiple-choice') return lang === 'ar' ? a.arabic : a.english; if (type === 'tap-reveal') return tap(a, p, lang); if (type === 'fill-blanks') return fill(a, p, lang); if (type === 'matching') return match(a, p, lang); return tf(a, p, lang);
};
const pairVariant = (a: Anchor, enPages: PageData[], arPages: PageData[], type: Variant): Anchor => {
  const en = variant(a, enPages, 'en', type); const ar = variant(a, arPages, 'ar', type); return en && ar && en.type === ar.type ? { ...a, english: en, arabic: ar } : a;
};
const select = (anchors: Anchor[], n: number, used: Set<string>, offset: number) => {
  const pool = rotate(anchors, offset).filter((a) => !used.has(a.key)); if (pool.length < n) throw new Error(`[Learning System] Needs ${n} unused anchors but only ${pool.length} remain.`);
  const out = pickEvenly(pool, n); out.forEach((a) => used.add(a.key)); return out;
};
const stagePairs = (anchors: Anchor[], en: PageData[], ar: PageData[], offset: number) => {
  let v = 0; let h = 0; let s = 0; const vt: Variant[] = ['fill-blanks', 'matching', 'tap-reveal', 'multiple-choice', 'true-false']; const ht: Variant[] = ['tap-reveal', 'matching', 'true-false', 'multiple-choice']; const st: Variant[] = ['multiple-choice', 'true-false', 'tap-reveal'];
  return anchors.map((a) => pairVariant(a, en, ar, a.kind === 'v' ? vt[(v++ + offset) % vt.length] : a.kind === 'h' ? ht[(h++ + offset) % ht.length] : st[(s++ + offset) % st.length]));
};

const quizQuestion = (e: Exercise, id: number, lang: LearningLanguage): QuizQuestion => {
  if (e.type === 'true-false' && typeof e.correctAnswer === 'boolean') return { question: e.question || '', options: lang === 'ar' ? [{ text: 'صحيح', isCorrect: e.correctAnswer }, { text: 'خطأ', isCorrect: !e.correctAnswer }] : [{ text: 'True', isCorrect: e.correctAnswer }, { text: 'False', isCorrect: !e.correctAnswer }], hint: lang === 'ar' ? `ارجع إلى ${chapterLabel(id, lang)}.` : `Return to ${chapterLabel(id, lang)}.` };
  const correct = typeof e.correctAnswer === 'number' ? e.correctAnswer : 0; return { question: e.question || '', options: (e.options || []).map((text, i) => ({ text, isCorrect: i === correct })), hint: lang === 'ar' ? `ارجع إلى ${chapterLabel(id, lang)}.` : `Return to ${chapterLabel(id, lang)}.` };
};
const review = (anchors: Anchor[], lang: LearningLanguage, level: Level): Exercise => ({
  id: `learning-${level.toLowerCase()}-review`, type: 'quiz-game', title: lang === 'ar' ? 'تحدي المراجعة' : 'Review Challenge', instructions: lang === 'ar' ? 'أجب ثم ارجع إلى الفصل عند الخطأ.' : 'Answer and return to the chapter after a mistake.',
  question: lang === 'ar' ? 'هل تستطيع ربط كل إجابة بدليل؟' : 'Can you connect each answer with evidence?', correctAnswer: null, explanation: lang === 'ar' ? 'كل سؤال مبني على الفصول.' : 'Every question is chapter-based.',
  feedback: { correct: lang === 'ar' ? 'جيد.' : 'Good.', incorrect: lang === 'ar' ? 'ارجع إلى الفصل.' : 'Return to the chapter.' }, quizQuestions: anchors.map((a) => quizQuestion(lang === 'ar' ? a.arabic : a.english, a.chapterId, lang)),
});
const vocabPairs = (en: PageData[], ar: PageData[], ids: number[], n: number) => {
  const pairs: Array<{ english: { word: string; meaning: string }; arabic: { word: string; meaning: string } }> = [];
  ids.forEach((id) => { const ep = story(en, id)!; const ap = story(ar, id)!; (ep.vocabulary || []).forEach((x, i) => { const y = ap.vocabulary?.[i]; if (y) pairs.push({ english: { word: x.word, meaning: x.definition }, arabic: { word: y.word, meaning: y.definition } }); }); });
  if (pairs.length < n) throw new Error(`[Learning System] Vocabulary Challenge needs ${n} paired Word Notes but only ${pairs.length} exist.`); const selected = pickEvenly(pairs, n); return { english: selected.map((x) => x.english), arabic: selected.map((x) => x.arabic) };
};

const cleanArabic = (s: string) => s.replace(/وفقًا لـالفصل/g, 'وفقًا لما ورد في الفصل').replace(/Word Notes/g, 'ملاحظات المفردات').replace(/Quick Challenge/g, 'التحدي السريع');
const cleanExercise = (e: Exercise): Exercise => ({ ...e, title: e.title ? cleanArabic(e.title) : e.title, instructions: e.instructions ? cleanArabic(e.instructions) : e.instructions, question: e.question ? cleanArabic(e.question) : e.question, explanation: e.explanation ? cleanArabic(e.explanation) : e.explanation,
  feedback: { correct: cleanArabic(e.feedback.correct || ''), incorrect: cleanArabic(e.feedback.incorrect || '') }, matchingPairs: e.matchingPairs?.map((x) => ({ left: cleanArabic(x.left), right: cleanArabic(x.right) })), tapRevealItems: e.tapRevealItems?.map((x) => ({ question: cleanArabic(x.question), answer: cleanArabic(x.answer) })), quizQuestions: e.quizQuestions?.map((q) => ({ ...q, question: cleanArabic(q.question), hint: cleanArabic(q.hint), options: q.options.map((o) => ({ ...o, text: cleanArabic(o.text) })) })) });
const stripDemoSync = (p: PageData): PageData => {
  if (p.type !== 'story' || !p.timedChunks?.length) return p; const demo = p.timedChunks.length === 1 && p.timedChunks[0].start === 0 && p.timedChunks[0].end <= 5 && /(placeholder|تجريبي)/i.test(p.timedChunks[0].text || ''); if (!demo) return p; const { timedChunks: _t, syncPoints: _s, ...rest } = p; return rest;
};
const sanitizeMedia = (pages: PageData[]) => { const fallback = pages.find((p) => p.type === 'story' && p.image && !p.image.startsWith('https://picsum.photos/'))?.image || ''; return pages.map((p) => { const image = p.image?.startsWith('https://picsum.photos/') ? fallback : p.image; const audioUrl = p.audioUrl?.includes('soundhelix.com/examples/mp3/') ? '' : p.audioUrl; return image === p.image && audioUrl === p.audioUrl ? p : { ...p, image, audioUrl }; }); };
const clone = (e: Exercise, id: string, title: string): Exercise => ({ ...e, id, title });

const applyPages = (pages: PageData[], config: LearningSystemConfig, quick: Map<number, Anchor>, knowledge: Anchor[], reviewAnchors: Anchor[], final: Anchor[], vocabulary: NonNullable<PageData['vocabularyPairs']>, lang: LearningLanguage) => {
  const c = counts(config); const out = pages.map((raw) => { const p = stripDemoSync(raw);
    if (config.storyIds.includes(p.id)) { const a = quick.get(p.id); if (!a) return p; return { ...p, exercises: [clone(lang === 'ar' ? a.arabic : a.english, `learning-${config.level.toLowerCase()}-quick-${p.id}`, lang === 'ar' ? 'تحدي سريع' : 'Quick Challenge')] }; }
    if (p.id === config.knowledgeCheckPageId) return { ...p, content: lang === 'ar' ? `راجع ${c.knowledge} أنشطة مبنية على الفصول.` : `Review ${c.knowledge} chapter-based activities.`, exercises: knowledge.map((a, i) => clone(lang === 'ar' ? a.arabic : a.english, `learning-${config.level.toLowerCase()}-knowledge-${i + 1}`, lang === 'ar' ? `تحقق من الفهم ${i + 1}` : `${config.level} Knowledge Check ${i + 1}`)) };
    if (config.vocabularyPageId && p.id === config.vocabularyPageId) return { ...p, content: lang === 'ar' ? `صل ${c.vocabulary} كلمات بمعانيها.` : `Match ${c.vocabulary} chapter words with their meanings.`, vocabularyPairs: vocabulary };
    if (p.id === config.reviewPageId) return { ...p, title: lang === 'ar' ? 'تحدي المراجعة' : `${config.level} Review Challenge`, content: lang === 'ar' ? `مراجعة من ${c.review} أسئلة.` : `${c.review}-question chapter review.`, exercises: [review(reviewAnchors, lang, config.level)] };
    if (p.id === config.finalChallengePageId) return { ...p, title: lang === 'ar' ? 'التحدي النهائي' : `${config.level} Final Challenge`, content: lang === 'ar' ? `${c.final} أنشطة نهائية مبنية على الفصول.` : `${c.final} final chapter-based activities.`, exercises: final.map((a, i) => clone(lang === 'ar' ? a.arabic : a.english, `learning-${config.level.toLowerCase()}-final-${i + 1}`, lang === 'ar' ? `التحدي النهائي ${i + 1}` : `${config.level} Final Challenge ${i + 1}`)) };
    return p;
  });
  const cleaned = lang === 'ar' ? out.map((p) => ({ ...p, content: p.type === 'story' ? p.content : cleanArabic(p.content || ''), exercises: p.exercises?.map(cleanExercise) })) : out; return sanitizeMedia(cleaned);
};

const answerIndex = (q: QuizQuestion) => q.options.findIndex((o) => o.isCorrect);
const validatePair = (en: Exercise, ar: Exercise, where: string) => {
  if (en.type !== ar.type) throw new Error(`[Learning System] ${where} types differ.`); if ((en.options?.length || 0) !== (ar.options?.length || 0)) throw new Error(`[Learning System] ${where} option counts differ.`);
  if (typeof en.correctAnswer !== typeof ar.correctAnswer) throw new Error(`[Learning System] ${where} answer shapes differ.`); if ((typeof en.correctAnswer === 'number' || typeof en.correctAnswer === 'boolean') && en.correctAnswer !== ar.correctAnswer) throw new Error(`[Learning System] ${where} correct answers differ.`);
  if (en.type === 'matching' && ((en.matchingPairs?.length || 0) < 3 || en.matchingPairs?.length !== ar.matchingPairs?.length)) throw new Error(`[Learning System] ${where} matching differs.`);
  if (en.type === 'fill-blanks' && (!en.fillBlanksText?.includes('[blank]') || !ar.fillBlanksText?.includes('[blank]'))) throw new Error(`[Learning System] ${where} fill-blank differs.`);
  if (en.type === 'tap-reveal' && (!(en.tapRevealItems?.length) || en.tapRevealItems.length !== ar.tapRevealItems?.length)) throw new Error(`[Learning System] ${where} tap-reveal differs.`);
};
const normTokens = (s: string, lang: LearningLanguage) => new Set(normalizeHighlightText(s, lang).split(' ').filter((x) => x.length > 2));
const near = (a: string, b: string, lang: LearningLanguage) => { const x = normalizeHighlightText(a, lang); const y = normalizeHighlightText(b, lang); if (!x || !y) return false; if (x === y || (x.length >= 16 && y.length >= 16 && (x.includes(y) || y.includes(x)))) return true; const A = normTokens(a, lang); const B = normTokens(b, lang); if (A.size < 3 || B.size < 3) return false; const inter = [...A].filter((t) => B.has(t)).length; return inter / new Set([...A, ...B]).size >= 0.9; };
const validateDistractors = (pages: PageData[], lang: LearningLanguage) => pages.forEach((p) => p.exercises?.forEach((e, ei) => { if (!e.id?.startsWith('learning-')) return; const check = (opts: Array<{ text: string; isCorrect: boolean }>, where: string) => { const c = opts.filter((o) => o.isCorrect); if (c.length !== 1) throw new Error(`[Learning System] ${where} must have one correct option.`); opts.filter((o) => !o.isCorrect).forEach((o) => { if (near(o.text, c[0].text, lang)) throw new Error(`[Learning System] ${where} has a distractor too close to the answer.`); }); }; if (e.type === 'multiple-choice' && e.options && typeof e.correctAnswer === 'number') check(e.options.map((text, i) => ({ text, isCorrect: i === e.correctAnswer })), `Page ${p.id} activity ${ei + 1}`); e.quizQuestions?.forEach((q, qi) => check(q.options, `Page ${p.id} review ${qi + 1}`)); }));
const validateOutput = (enPages: PageData[], arPages: PageData[], config: LearningSystemConfig) => {
  const c = counts(config); const types = new Set<string>();
  config.storyIds.forEach((id) => { const en = requirePage(enPages, id, 'English').exercises?.[0]; const ar = requirePage(arPages, id, 'Arabic').exercises?.[0]; if (!en || !ar) throw new Error(`[Learning System] Chapter ${id} Quick Challenge missing.`); validatePair(en, ar, `Chapter ${id} Quick Challenge`); types.add(en.type); });
  if (config.storyIds.length >= 5) ['matching', 'fill-blanks', 'tap-reveal'].forEach((t) => { if (!types.has(t)) throw new Error(`[Learning System] Quick Challenges do not include ${t}.`); });
  const ek = requirePage(enPages, config.knowledgeCheckPageId, 'English').exercises || []; const ak = requirePage(arPages, config.knowledgeCheckPageId, 'Arabic').exercises || []; if (ek.length !== c.knowledge || ak.length !== c.knowledge) throw new Error(`[Learning System] Knowledge Check must contain ${c.knowledge} activities.`); ek.forEach((e, i) => validatePair(e, ak[i], `Knowledge ${i + 1}`));
  if (config.vocabularyPageId) { const ev = requirePage(enPages, config.vocabularyPageId, 'English').vocabularyPairs || []; const av = requirePage(arPages, config.vocabularyPageId, 'Arabic').vocabularyPairs || []; if (ev.length !== c.vocabulary || av.length !== c.vocabulary) throw new Error(`[Learning System] Vocabulary Challenge must contain ${c.vocabulary} pairs.`); }
  const er = requirePage(enPages, config.reviewPageId, 'English').exercises?.[0]; const ar = requirePage(arPages, config.reviewPageId, 'Arabic').exercises?.[0]; if (er?.type !== 'quiz-game' || ar?.type !== 'quiz-game' || er.quizQuestions?.length !== c.review || ar.quizQuestions?.length !== c.review) throw new Error(`[Learning System] Review must contain ${c.review} questions.`); er.quizQuestions.forEach((q, i) => { const aq = ar.quizQuestions?.[i]; if (!aq || q.options.length !== aq.options.length || answerIndex(q) !== answerIndex(aq)) throw new Error(`[Learning System] Review ${i + 1} logic differs.`); });
  const ef = requirePage(enPages, config.finalChallengePageId, 'English').exercises || []; const af = requirePage(arPages, config.finalChallengePageId, 'Arabic').exercises || []; if (ef.length !== c.final || af.length !== c.final) throw new Error(`[Learning System] Final must contain ${c.final} activities.`); ef.forEach((e, i) => validatePair(e, af[i], `Final ${i + 1}`)); validateDistractors(enPages, 'en'); validateDistractors(arPages, 'ar');
};

export const runLearningSystem = ({ englishPages, arabicPages, config }: { englishPages: PageData[]; arabicPages: PageData[]; config: LearningSystemConfig }): LearningSystemResult => {
  validateSources(englishPages, arabicPages, config); const enStories = config.storyIds.map((id) => story(englishPages, id)!).filter(Boolean); const arStories = config.storyIds.map((id) => story(arabicPages, id)!).filter(Boolean); const anchors = buildAnchors(enStories, arStories, config.storyIds); const c = counts(config); const quick = new Map<number, Anchor>(); const used = new Set<string>();
  config.storyIds.forEach((id, i) => { const list = anchors.filter((a) => a.chapterId === id); const type = QUICK[i % QUICK.length]; const preferred = type === 'fill-blanks' ? list.find((a) => a.kind === 'v') : type === 'matching' ? list.find((a) => a.kind !== 's') : type === 'tap-reveal' || type === 'true-false' ? list.find((a) => a.kind === 'h') || list[0] : list[i % list.length]; const a = preferred || list[0]; if (!a) throw new Error(`[Learning System] Chapter ${id} has no anchor.`); used.add(a.key); quick.set(id, pairVariant(a, enStories, arStories, type)); });
  const knowledgeAnchors = select(anchors, c.knowledge, used, 0); const reviewAnchors = select(anchors, c.review, used, Math.floor(anchors.length / 3)); const finalAnchors = select(anchors, c.final, used, Math.floor(anchors.length * 2 / 3)); const knowledge = stagePairs(knowledgeAnchors, enStories, arStories, 0); const final = stagePairs(finalAnchors, enStories, arStories, 2); const vocabulary = config.vocabularyPageId ? vocabPairs(enStories, arStories, config.storyIds, c.vocabulary) : { english: [], arabic: [] };
  const enOut = applyPages(englishPages, config, quick, knowledge, reviewAnchors, final, vocabulary.english, 'en'); const arOut = applyPages(arabicPages, config, quick, knowledge, reviewAnchors, final, vocabulary.arabic, 'ar'); validateOutput(enOut, arOut, config);
  const enGuides = buildLearningGuides({ pages: enOut, storyIds: config.storyIds, level: config.level, language: 'en' }); const arGuides = buildLearningGuides({ pages: arOut, storyIds: config.storyIds, level: config.level, language: 'ar' });
  return { englishPages: enOut, arabicPages: arOut, englishTeacherGuide: enGuides.teacherGuide, arabicTeacherGuide: arGuides.teacherGuide, englishSelfStudyGuide: enGuides.selfStudyGuide, arabicSelfStudyGuide: arGuides.selfStudyGuide };
};
