import { normalize, paragraphs, type Path } from './util';

/**
 * Finds which part of a book file a text in the app comes from, so a click on the app opens the
 * right form. The app's page is matched first (its texts, its paragraphs one by one), then the
 * whole book, then the guides. Texts that belong to the app itself ("Next", "Quick Challenge")
 * are in no file and are reported as such.
 */

interface Leaf {
  path: Path;
  text: string;
  norm: string;
}

const SKIP = new Set(['id', 'type', 'image', 'audioUrl', 'syncPoints', 'timedChunks', 'map', 'entityBookKey', 'correctAnswer']);

export const leaves = (value: unknown, path: Path, out: Leaf[] = []): Leaf[] => {
  if (typeof value === 'string') {
    if (path[path.length - 1] === 'content' && value.includes('\n')) {
      paragraphs(value).forEach((paragraph, index) => {
        if (paragraph.trim()) out.push({ path: [...path, `#${index}`], text: paragraph, norm: normalize(paragraph) });
      });
      out.push({ path, text: value, norm: normalize(value) });
    } else if (value.trim() && !value.startsWith('__historical_entity__') && !value.startsWith('http')) {
      out.push({ path, text: value, norm: normalize(value) });
    }
  } else if (Array.isArray(value)) value.forEach((item, index) => leaves(item, [...path, index], out));
  else if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) if (!SKIP.has(key)) leaves(item, [...path, key], out);
  }
  return out;
};

const words = (text: string) => new Set(text.split(/[^\p{L}\p{N}']+/u).filter(word => word.length > 2));

const score = (clicked: string, leaf: Leaf): number => {
  if (!clicked || !leaf.norm) return 0;
  if (leaf.norm === clicked) return 100;
  if (clicked.length >= 3 && leaf.norm.includes(clicked)) return 80 - Math.min(30, (leaf.norm.length - clicked.length) / 40);
  if (leaf.norm.length >= 8 && clicked.includes(leaf.norm)) return 60 + Math.min(19, leaf.norm.length / 20);
  // Texts the app shows with gaps (fill in the blanks) or reordered: share most of the words.
  const a = words(clicked);
  if (a.size < 3) return 0;
  const b = words(leaf.norm);
  let common = 0;
  for (const word of a) if (b.has(word)) common += 1;
  const ratio = common / Math.max(a.size, 1);
  return ratio >= 0.6 ? 40 * ratio : 0;
};

/** The best place for `text`, preferring short, exact texts over a whole chapter. */
export const findText = (sources: { root: Path; value: unknown }[], text: string): Path | null => {
  const clicked = normalize(text);
  if (!clicked || clicked.length > 1500) return null;
  for (const source of sources) {
    let best: { path: Path; score: number; length: number } | null = null;
    for (const leaf of leaves(source.value, source.root)) {
      const value = score(clicked, leaf);
      if (value <= 0) continue;
      if (!best || value > best.score || (value === best.score && leaf.norm.length < best.length)) best = { path: leaf.path, score: value, length: leaf.norm.length };
    }
    if (best) return best.path;
  }
  return null;
};

/** The unit a clicked path belongs to: one paragraph, one exercise, one word note, the picture… */
export const unitOf = (path: Path): Path => {
  const pageAt = path.indexOf('pages');
  if (pageAt < 0) {
    // Guides: one chapter section, or the book's general information.
    const content = path.indexOf('content');
    if (content >= 0 && typeof path[content + 1] === 'number') return path.slice(0, content + 2);
    return path.slice(0, Math.min(path.length, 3));
  }
  const page = path.slice(0, pageAt + 2);
  const rest = path.slice(pageAt + 2);
  const [key, index] = rest;
  if (key === undefined) return page;
  if (key === 'content') return rest[1] !== undefined ? [...page, 'content', rest[1]] : [...page, 'content'];
  if (key === 'exercises' || key === 'languageFocusExercises' || key === 'vocabulary' || key === 'vocabularyPairs') {
    return typeof index === 'number' ? [...page, key, index] : [...page, key];
  }
  if (key === 'hotspots' || key === 'image') return [...page, 'hotspots'];
  if (key === 'title' || key === 'subtitle') return [...page, 'title'];
  return [...page, key];
};
