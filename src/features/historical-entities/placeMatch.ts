import { highlightPhraseMatches, normalizeHighlightText } from '../../lib/highlightTextMatch';

const trimPunctuation = (text: string) => text
  .replace(/^[^\p{L}\p{N}]+/u, '')
  .replace(/[^\p{L}\p{N}ؐ-ًؚ-ٰٟۖ-ۭ]+$/u, '');

/**
 * A place name exactly as the text writes it, or null. Arabic uses the reader's
 * matching (vowels and attached letters such as بِ or وَ are allowed). English is
 * strict, so "India" does not match "Indian" and "Egypt" does not match
 * "Egyptians"; only a possessive ’s is allowed.
 */
export const findPlaceName = (content: string, name: string, locale: 'en' | 'ar'): string | null => {
  const wanted = normalizeHighlightText(name, locale);
  const size = wanted ? name.trim().split(/\s+/u).length : 0;
  if (!size) return null;
  const spans = [...content.matchAll(/[^\s—–]+/gu)].map(match => ({ start: match.index ?? 0, end: (match.index ?? 0) + match[0].length }));
  for (let start = 0; start + size <= spans.length; start += 1) {
    const raw = trimPunctuation(content.slice(spans[start].start, spans[start + size - 1].end));
    if (!raw) continue;
    if (locale === 'ar') {
      if (highlightPhraseMatches(raw, name, 'ar')) return raw;
      continue;
    }
    const plain = raw.replace(/[’']s$/u, '');
    if (normalizeHighlightText(plain, 'en') === wanted) return plain;
  }
  return null;
};
