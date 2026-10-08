/**
 * Writes src/content/entityCards.json: the words of every Places & People card (title, kind,
 * period, summary, the extra line, the names the story uses, the Turkish name), so the panel can
 * change them without code. The maps, pictures and chapter lists stay in
 * src/features/historical-entities/books/.
 *
 * Run once when a new book's cards are added in code: `npx tsx scripts/content/exportEntityCards.ts`.
 * A card already in the file keeps its words; only new cards are added.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { BOOK_SETS } from '../../src/features/historical-entities/books';
import type { HistoricalEntityCopy } from '../../src/features/historical-entities/types';

const out = new URL('../../src/content/entityCards.json', import.meta.url);
const existing = existsSync(out) ? (JSON.parse(readFileSync(out, 'utf8')) as { cards: Record<string, unknown> }).cards : {};

const words = (copy?: HistoricalEntityCopy) =>
  copy ? { title: copy.title, kindLabel: copy.kindLabel, periodLabel: copy.periodLabel, summary: copy.summary, ...(copy.more ? { more: copy.more } : {}) } : undefined;

const cards: Record<string, unknown> = {};
let added = 0;
for (const set of BOOK_SETS) {
  for (const entity of set.entities) {
    if (cards[entity.id]) continue;
    if (existing[entity.id]) {
      cards[entity.id] = existing[entity.id];
      continue;
    }
    added += 1;
    cards[entity.id] = {
      en: words(entity.copy.en),
      ...(entity.copy.ar ? { ar: words(entity.copy.ar) } : {}),
      aliases: { en: entity.aliases.en ?? [], ar: entity.aliases.ar ?? [] },
      ...(entity.learnerNames?.tr ? { tr: entity.learnerNames.tr } : {}),
    };
  }
}

writeFileSync(out, `${JSON.stringify({ schema: 1, cards }, null, 1)}\n`);
console.log(`[entity cards] ${Object.keys(cards).length} cards in src/content/entityCards.json (${added} new)`);
