# Historical Entities

Self-contained historical context cards for story text.

## Books

- Ibn Jubayr A2 (pilot, 2026-10-02): 39 cards for cities, lands, seas, rivers, islands, buildings, and people and ruling families, in `books/ibnJubayrA2.ts`. Each card has a short A2 summary, a pin or soft oval on `assets/maps/mediterranean-context-map.svg` (Natural Earth, 10°W–50°E), and the Turkish name in `learnerNames.tr`. The book also has a `places` page ("Places & People") that lists every card with its chapters.
- Abraham A2. Active entities:

- Babylon
- Mesopotamia
- Syria / al-Sham
- Palestine
- Mecca

English and Arabic use separate aliases and copy. Map artwork is language-neutral; text is rendered by the UI so a second image is not required for Arabic.

Cards are tappable in every chapter that lists them (`BOOK_CHAPTER_ENTITIES` in `registry.ts`), not only on their first page.

## Turkish names

The story text does not need Turkish in brackets. A card shows "Türkçesi: …" from `learnerNames.tr`. Another learner language only adds a key there and changes `LEARNER_LANGUAGE` in `LearnerNameLine.tsx`.

## Visual behavior

- Historical entities use a teal highlight, separate from normal vocabulary highlighting.
- Desktop: hover opens the card; click pins/unpins it.
- Touch devices: tap opens/closes the card.
- Cards contain a title, entity type, regional period label, short explanation and a stylized map.
- Ancient/region boundaries are intentionally shown as approximate focus areas rather than false hard borders.

## Map policy

The base map is language-neutral and uses geographic context only. Historical regions are overlaid at runtime as points or soft approximate areas. This avoids implying modern political boundaries for ancient entities.

Reference checks used for this pilot include Britannica, UNESCO (Babylon), and The Metropolitan Museum of Art (Mesopotamia).

## Pictures and the wide map

Card pictures live in `assets/pictures/<folder>/<name>.webp` (480px squares made from the uploads in Storage `places-people/<Story>/`); an entity names its file with `picture`, and a card without a file shows a placeholder in its group colour.

`wide-context-map.svg` carries the Mediterranean map east to 127°E in the same projection. It sits under the context map, so a focus with a `view` can slide the map out (the Mongols card).

## Removal

To remove the feature completely:

1. Delete `src/features/historical-entities/`.
2. Remove the historical-entity import and delegation from `src/components/ui/VocabularyWord.tsx`.
3. Remove `applyHistoricalEntitiesToPage` from `src/data/abraham/a2/index.ts` and use each source page directly again.

No story prose, exercise file, teacher guide, storage object, or global `PageData` type is changed by this feature.
