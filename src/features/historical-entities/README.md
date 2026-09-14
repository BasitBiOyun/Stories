# Historical Entities

Self-contained historical context cards for story text.

## Current pilot

Abraham A2 only. Active entities:

- Babylon
- Mesopotamia
- Syria / al-Sham
- Palestine
- Mecca

English and Arabic use separate aliases and copy. Map artwork is language-neutral; text is rendered by the UI so a second image is not required for Arabic.

## Visual behavior

- Historical entities use a teal highlight, separate from normal vocabulary highlighting.
- Desktop: hover opens the card; click pins/unpins it.
- Touch devices: tap opens/closes the card.
- Cards contain a title, entity type, regional period label, short explanation and a stylized map.
- Ancient/region boundaries are intentionally shown as approximate focus areas rather than false hard borders.

## Map policy

The base map is language-neutral and uses geographic context only. Historical regions are overlaid at runtime as points or soft approximate areas. This avoids implying modern political boundaries for ancient entities.

Reference checks used for this pilot include Britannica, UNESCO (Babylon), and The Metropolitan Museum of Art (Mesopotamia).

## Removal

To remove the feature completely:

1. Delete `src/features/historical-entities/`.
2. Remove the historical-entity import and delegation from `src/components/ui/VocabularyWord.tsx`.
3. Remove `applyHistoricalEntitiesToPage` from `src/data/abraham/a2/index.ts` and use each source page directly again.

No story prose, exercise file, teacher guide, storage object, or global `PageData` type is changed by this feature.
