import { EXERCISE_TYPES, PAGE_TYPES, fieldLabel } from './labels';
import { getIn, paragraphs, type Path } from './util';

/** One changed text or value, with where it sits in words. */
export interface Change {
  path: Path;
  where: string[];
  before: unknown;
  after: unknown;
}

const isObject = (value: unknown): value is Record<string, unknown> => Boolean(value) && typeof value === 'object' && !Array.isArray(value);

/** Every leaf that differs between two versions of a file. Long story texts are compared paragraph by paragraph. */
export const diffValues = (before: unknown, after: unknown, path: Path = [], out: Change[] = [], root?: { before: unknown; after: unknown }): Change[] => {
  const top = root ?? { before, after };
  if (JSON.stringify(before) === JSON.stringify(after)) return out;
  if (path[path.length - 1] === 'content' && typeof before === 'string' && typeof after === 'string') {
    const a = paragraphs(before);
    const b = paragraphs(after);
    const length = Math.max(a.length, b.length);
    for (let index = 0; index < length; index += 1) {
      if (a[index] !== b[index]) out.push({ path: [...path, `#${index}`], where: [], before: a[index], after: b[index] });
    }
    return out;
  }
  if (Array.isArray(before) && Array.isArray(after)) {
    // Same items in a new order, or one item added or removed: say so instead of listing every shifted item.
    if (before.length !== after.length) {
      const added = after.length > before.length;
      const [longer, shorter] = added ? [after, before] : [before, after];
      const keys = new Set(shorter.map(item => JSON.stringify(item)));
      const odd = longer.map((item, index) => [index, item] as const).filter(([, item]) => !keys.has(JSON.stringify(item)));
      if (odd.length === longer.length - shorter.length) {
        for (const [index, item] of odd) out.push({ path: [...path, index], where: [], before: added ? undefined : item, after: added ? item : undefined });
        return out;
      }
    }
    const length = Math.max(before.length, after.length);
    for (let index = 0; index < length; index += 1) diffValues(before[index], after[index], [...path, index], out, top);
    return out;
  }
  if (isObject(before) && isObject(after)) {
    for (const key of new Set([...Object.keys(before), ...Object.keys(after)])) diffValues(before[key], after[key], [...path, key], out, top);
    return out;
  }
  out.push({ path, where: [], before, after });
  return out;
};

const itemName = (value: unknown, index: number): string => {
  if (isObject(value)) {
    const name = value.title ?? value.word ?? value.question ?? value.left ?? value.group ?? value.sentence ?? value.chapter ?? value.text ?? value.name;
    if (typeof name === 'string' && name.trim()) return `${index + 1}. ${name.length > 48 ? `${name.slice(0, 46)}…` : name}`;
  }
  if (typeof value === 'string') return `${index + 1}. ${value.length > 48 ? `${value.slice(0, 46)}…` : value}`;
  return `${index + 1}.`;
};

/** Where a path sits in a book, guide or list file, as the panel says it: ["Bölüm 2: Our Dervish Yunus", "Quick", "1. Three Years", "Soru"]. */
export const describePath = (file: unknown, path: Path): string[] => {
  const words: string[] = [];
  let current: unknown = file;
  let storyChapter = 0;
  for (let index = 0; index < path.length; index += 1) {
    const key = path[index];
    const parent = current;
    current = typeof key === 'string' && key.startsWith('#') ? undefined : getIn(parent, [key]);
    if (key === 'book') continue;
    if (key === 'pages') continue;
    if (typeof key === 'string' && key.startsWith('#')) {
      words.push(`${Number(key.slice(1)) + 1}. paragraf`);
      continue;
    }
    const previous = path[index - 1];
    if (previous === 'pages' && typeof key === 'number' && isObject(current)) {
      const pages = (parent as unknown[]) ?? [];
      if (current.type === 'story') {
        storyChapter = pages.slice(0, key + 1).filter(page => isObject(page) && page.type === 'story').length;
        words.push(`Bölüm ${storyChapter}: ${String(current.title ?? '')}`);
      } else words.push(PAGE_TYPES[String(current.type)] ?? String(current.title ?? 'Sayfa'));
      continue;
    }
    if (typeof key === 'number') {
      if (previous === 'exercises' || previous === 'languageFocusExercises') {
        const type = isObject(current) ? EXERCISE_TYPES[String(current.type)]?.name : undefined;
        words.push(`${itemName(current, key)}${type ? ` (${type})` : ''}`);
      } else if (previous === 'content' && Array.isArray(parent)) words.push(itemName(current, key));
      else words.push(itemName(current, key));
      continue;
    }
    if (key === 'stories' || key === 'requests') continue;
    if (key === 'content' && Array.isArray(current)) {
      words.push('Bölümler');
      continue;
    }
    if (key === 'en' || key === 'ar') {
      words.push(key === 'en' ? 'İngilizce' : 'Arapça');
      continue;
    }
    if (key === 'exercises') {
      const page = parent as Record<string, unknown>;
      words.push(page?.type === 'story' ? 'Quick' : 'Etkinlikler');
      continue;
    }
    if (key === 'languageFocusExercises') {
      words.push('Focus');
      continue;
    }
    words.push(fieldLabel(String(key)).label);
  }
  return words;
};

/** A short line for a commit: "Bölüm 1 · 2. paragraf; Bölüm 3 · Quick". */
export const summarize = (changes: Change[], limit = 3): string => {
  const parts = [...new Set(changes.map(change => change.where.slice(0, 2).join(' · ')))].filter(Boolean);
  const shown = parts.slice(0, limit).join('; ');
  return parts.length > limit ? `${shown} ve ${parts.length - limit} yer daha` : shown;
};

export const describeChanges = (before: unknown, after: unknown): Change[] =>
  diffValues(before, after).map(change => ({ ...change, where: describePath(change.before !== undefined ? before : after, change.path) }));

// --- word by word -----------------------------------------------------------------------------

export type DiffPart = { kind: 'same' | 'added' | 'removed'; text: string };

/** Word-level difference of two texts (longest common subsequence over words and spaces). */
export const wordDiff = (before: string, after: string): DiffPart[] => {
  const a = before.match(/\s+|[^\s]+/g) ?? [];
  const b = after.match(/\s+|[^\s]+/g) ?? [];
  // Very long texts: compare without the LCS table, line by line, to stay fast.
  if (a.length * b.length > 4_000_000) {
    return [
      { kind: 'removed', text: before },
      { kind: 'added', text: after },
    ];
  }
  const table: number[][] = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i -= 1) {
    for (let j = b.length - 1; j >= 0; j -= 1) {
      table[i][j] = a[i] === b[j] ? table[i + 1][j + 1] + 1 : Math.max(table[i + 1][j], table[i][j + 1]);
    }
  }
  const parts: DiffPart[] = [];
  const push = (kind: DiffPart['kind'], text: string) => {
    const last = parts[parts.length - 1];
    if (last && last.kind === kind) last.text += text;
    else parts.push({ kind, text });
  };
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      push('same', a[i]);
      i += 1;
      j += 1;
    } else if (table[i + 1][j] >= table[i][j + 1]) {
      push('removed', a[i]);
      i += 1;
    } else {
      push('added', b[j]);
      j += 1;
    }
  }
  while (i < a.length) push('removed', a[i++]);
  while (j < b.length) push('added', b[j++]);
  return parts;
};
