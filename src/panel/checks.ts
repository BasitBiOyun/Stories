import type { Exercise, Level, PageData } from '../types';
import { checkEnglishText, checkExercise } from '../content/rules';
import { checkExerciseStructure } from '../content/exerciseStructure';
import { normalize, plain } from './util';

/**
 * What the panel says about a text while someone edits it. "blocker" findings are the ones the
 * build also checks: a basket that has one cannot be published, so the panel says so at once.
 * "warning" findings are advice; people decide.
 */
export interface Finding {
  level: 'blocker' | 'warning';
  text: string;
}

const RULE_NAMES: Record<string, string> = {
  'shared term': 'Ortak yazım',
  'American spelling': 'Amerikan yazımı',
  'instruction length': 'Yönerge çok uzun',
  'name the person': 'Kişinin adını yazın',
};

const turkishDetail = (detail: string) =>
  detail
    .replace(/^write (.+) with the curly apostrophe$/, '$1 yazımında kıvrık kesme işareti (’) kullanın')
    .replace(/^"(.+)" — write "(.+)"$/, '"$1" yerine "$2" yazın')
    .replace(/^write (.+)$/, '$1 yazın')
    .replace(/^(\d+) words, (\w\d) allows (\d+)$/, '$1 kelime; $2 için en çok $3')
    .replace(/^"(.+)" starts with a pronoun$/, '"$1" bir zamirle başlıyor; kişinin adını yazın');

export const englishTextFindings = (text: string): Finding[] =>
  checkEnglishText(text, '').map(finding => ({ level: 'blocker', text: `${RULE_NAMES[finding.rule] ?? finding.rule}: ${turkishDetail(finding.detail)}` }));

const TURKISH_LETTERS = /[ğĞşŞıİ]/;
const ARABIC = /[؀-ۿ]/;
// Markers the app reads ([blank], [POEM]…) and the shared English abbreviations are allowed.
const ALLOWED_LATIN = /\[[^\]]*\]|\((?:pbuh|as)\)|\b(?:BC|CE|AH)\b/g;

/**
 * Arabic texts: a Latin or Turkish word inside an Arabic sentence is usually a slip. Texts with
 * no Arabic at all (settings, English helper lines on the Arabic pages) are not judged here.
 */
export const arabicTextFindings = (text: string): Finding[] => {
  if (!ARABIC.test(text)) return [];
  const findings: Finding[] = [];
  const rest = text.replace(ALLOWED_LATIN, ' ');
  if (TURKISH_LETTERS.test(rest)) findings.push({ level: 'warning', text: 'Arapça metinde Türkçe harf var.' });
  else if (/[A-Za-z]{3,}/.test(rest)) findings.push({ level: 'warning', text: `Arapça metinde Latin harfleriyle bir kelime var: ${/[A-Za-z]{3,}/.exec(rest)?.[0]}.` });
  const open = (text.match(/﴿/g) ?? []).length;
  const close = (text.match(/﴾/g) ?? []).length;
  if (open !== close) findings.push({ level: 'warning', text: 'Kur’an alıntısının ayraçları (﴿ ﴾) eşleşmiyor.' });
  return findings;
};

export const textFindings = (text: string, language: 'en' | 'ar'): Finding[] => {
  if (!text.trim()) return [];
  return language === 'en' ? englishTextFindings(text) : arabicTextFindings(text);
};

/**
 * The names, places and noted words of a chapter. An exercise that mentions none of them may have
 * become generic ("What did you learn?"), which the project never wants: every activity comes
 * from its own chapter. This only warns; people decide.
 */
export const chapterAnchors = (page: PageData): Set<string> => {
  const anchors = new Set<string>();
  const content = plain(page.content ?? '');
  for (const match of content.matchAll(/(?<![.!?]\s|^)\b([A-Z][a-z’']{2,}(?:\s+[A-Z][a-z’']{2,})*)/g)) anchors.add(match[1].toLowerCase());
  for (const item of page.vocabulary ?? []) if (item.word) anchors.add(item.word.toLowerCase());
  for (const match of content.matchAll(/\b(1\d{3}|[2-9]\d{2}|\d{1,3}(?=\s?(?:BC|CE)))\b/g)) anchors.add(match[1]);
  // Arabic: the noted words are the anchors.
  if (/[؀-ۿ]/.test(content)) {
    for (const item of page.vocabulary ?? []) if (item.word) anchors.add(normalize(item.word));
  }
  return anchors;
};

const exerciseText = (exercise: Exercise): string => {
  const parts: string[] = [];
  const walk = (value: unknown) => {
    if (typeof value === 'string') parts.push(value);
    else if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => key !== 'id' && key !== 'type' && walk(item));
  };
  walk(exercise);
  return parts.join(' ');
};

export const genericFinding = (exercise: Exercise, page: PageData): Finding | null => {
  // Speaking tasks about the learner's own life are meant to leave the chapter. Arabic editions
  // follow their English twin, where the check runs.
  if (page.type !== 'story' || exercise.type === 'reflection' || ARABIC.test(page.content ?? '')) return null;
  const anchors = chapterAnchors(page);
  if (anchors.size === 0) return null;
  const text = normalize(exerciseText(exercise));
  for (const anchor of anchors) if (text.includes(normalize(anchor))) return null;
  return { level: 'warning', text: 'Bu etkinlik bölümden hiçbir ad, yer veya kelime anmıyor; genel (bölüme özgü olmayan) bir soru olabilir.' };
};

export const exerciseFindings = (exercise: Exercise, page: PageData, level: Level, language: 'en' | 'ar'): Finding[] => {
  const findings: Finding[] = checkExerciseStructure(exercise, '').map(problem => ({ level: 'blocker', text: problem.tr }));
  if (language === 'en') {
    findings.push(
      ...checkExercise(exercise, level, '').map(finding => ({ level: 'blocker' as const, text: `${RULE_NAMES[finding.rule] ?? finding.rule}: ${turkishDetail(finding.detail)}` })),
    );
  }
  const generic = genericFinding(exercise, page);
  if (generic) findings.push(generic);
  return dedupe(findings);
};

const dedupe = (findings: Finding[]) => {
  const seen = new Set<string>();
  return findings.filter(finding => (seen.has(finding.text) ? false : (seen.add(finding.text), true)));
};

/** Everything the panel would say about one page: texts, exercises, I can. */
export const pageFindings = (page: PageData, level: Level, language: 'en' | 'ar'): { where: string; finding: Finding }[] => {
  const out: { where: string; finding: Finding }[] = [];
  const walk = (value: unknown, where: string) => {
    if (typeof value === 'string') {
      for (const finding of textFindings(value, language)) out.push({ where, finding });
    } else if (Array.isArray(value)) value.forEach((item, index) => walk(item, `${where} ${index + 1}`));
    else if (value && typeof value === 'object') {
      for (const [key, item] of Object.entries(value)) {
        if (['id', 'type', 'image', 'audioUrl', 'map', 'exercises', 'languageFocusExercises', 'entityBookKey'].includes(key)) continue;
        walk(item, where);
      }
    }
  };
  walk({ ...page, vocabulary: (page.vocabulary ?? []).filter(item => !String(item.definition).startsWith('__historical_entity__')) }, page.title);
  for (const [list, name] of [
    [page.exercises ?? [], page.type === 'story' ? 'Quick' : 'Etkinlik'],
    [page.languageFocusExercises ?? [], 'Focus'],
  ] as const) {
    list.forEach((exercise, index) => {
      for (const finding of exerciseFindings(exercise, page, level, language)) out.push({ where: `${name} ${index + 1}${exercise.title ? `: ${exercise.title}` : ''}`, finding });
      if (language === 'en') for (const finding of englishTextFindings(exerciseText(exercise))) out.push({ where: `${name} ${index + 1}`, finding });
    });
  }
  if (page.type === 'story' && page.exercises?.length) {
    if ((page.iCan ?? []).length !== 3) out.push({ where: 'I can', finding: { level: 'warning', text: `Genelde üç I can maddesi olur; burada ${(page.iCan ?? []).length} tane var.` } });
  }
  const seen = new Set<string>();
  return out.filter(item => {
    const key = `${item.where}|${item.finding.text}`;
    return seen.has(key) ? false : (seen.add(key), true);
  });
};
