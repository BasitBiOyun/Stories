import type { StoryMapLayout } from '../../../features/story-maps/types';

/** Shared, language-neutral layout of the map shown between chapters 6 and 7. Card text lives in en/ and ar/. */
export const meccaB2StoryMapLayout: StoryMapLayout = {
  baseMap: 'nearEast',
  home: { west: 26, east: 51, south: 11, north: 38.5 },
  overlays: [],
  features: { timeSlider: true, tour: true, challenge: true, classroom: true },
  // Chapters 1–6 mix very different times (c. 20th century BC, the 5th–7th centuries, 1453), so the steps follow the chapters.
  time: { start: 1, lastYear: 7, birth: 1, mode: 'stages' },
  routes: [
    // Chapter 3: the migration to Medina. No year is given in B2.
    { id: 'hijra', points: [[39.83, 21.42], [39.45, 22.5], [39.3, 23.5], [39.61, 24.47]], start: 2.6, end: 3, tone: 'journey' },
    // Chapter 4: the Jurhumites from Yemen settle in Mecca. The book gives no route; the line is only a guide.
    { id: 'jurhum', points: [[44.2, 15.3], [43.1, 16.6], [42.3, 17.9], [41.2, 19.4], [40.3, 20.7], [39.83, 21.42]], start: 3.6, end: 4, tone: 'journey' },
    // Chapters 5–6: caravans from Yemen to Syria and Palestine along the overland route through Arabia,
    // and Quraysh caravans to Egypt and Iraq. Stops are not named in the book.
    { id: 'caravanNorth', points: [[44.2, 15.3], [44.1, 17.4], [42.4, 19.0], [40.8, 20.6], [39.83, 21.42], [39.0, 24.3], [37.8, 27.0], [36.6, 29.4], [36.0, 31.4], [36.3, 33.5]], start: 4.6, end: 5, tone: 'journey' },
    { id: 'caravanEgypt', points: [[39.83, 21.42], [39.0, 24.3], [37.8, 27.0], [36.4, 28.9], [35.0, 29.6], [33.6, 30.2], [32.2, 29.9], [31.2, 29.0]], start: 4.6, end: 5, tone: 'journey' },
    { id: 'caravanIraq', points: [[39.83, 21.42], [41.6, 24.2], [43.0, 27.4], [43.9, 30.0], [44.4, 32.3]], start: 4.6, end: 5, tone: 'journey' },
    // Chapter 5: trade with Abyssinia by sea, across the Red Sea. No port is named; the line is only a guide.
    { id: 'seaAbyssinia', points: [[39.83, 21.42], [39.05, 21.5], [38.7, 19.0], [39.7, 16.0], [39.45, 15.6], [38.9, 13.3]], start: 5.6, end: 6, tone: 'journey' },
  ],
  places: [
    { id: 'mecca', entityId: 'mecca-mecca-7th-century', lon: 39.83, lat: 21.42, icon: 'kaaba', tone: 'place', labelSide: 'right' },
    { id: 'medina', entityId: 'mecca-medina-7th-century', lon: 39.61, lat: 24.47, icon: 'palm', tone: 'place', labelSide: 'right' },
    { id: 'yemen', entityId: 'mecca-yemen-6th-century', lon: 44.2, lat: 15.3, icon: 'route', tone: 'place', areaRadiusKm: 230, showArea: true, labelSide: 'right' },
    { id: 'abyssinia', entityId: 'mecca-abyssinia', lon: 38.9, lat: 13.3, icon: 'route', tone: 'place', areaRadiusKm: 270, showArea: true, labelSide: 'right' },
    { id: 'egypt', entityId: 'mecca-egypt-byzantine', lon: 31.2, lat: 29.0, icon: 'route', tone: 'place', areaRadiusKm: 230, showArea: true, labelSide: 'left' },
    { id: 'iraq', entityId: 'mecca-iraq-6th-century', lon: 44.4, lat: 32.3, icon: 'route', tone: 'place', areaRadiusKm: 230, showArea: true, labelSide: 'right' },
    // The capital of the Byzantine Empire, at the north edge of the base map.
    { id: 'constantinople', entityId: 'mecca-constantinople-byzantine', lon: 28.98, lat: 41.01, icon: 'palace', tone: 'place', labelSide: 'right' },
  ],
  // Caravan destinations named in chapter 5, shown only as reference dots.
  towns: [
    { id: 'syria', lon: 36.3, lat: 33.5 },
    { id: 'palestine', lon: 35.2, lat: 31.75, labelSide: 'bottom' },
  ],
  seas: [
    { id: 'redSea', lon: 38.8, lat: 19.5 },
    { id: 'mediterranean', lon: 29.6, lat: 33.4 },
    { id: 'gulf', lon: 49.2, lat: 28.7 },
    { id: 'indianOcean', lon: 48.0, lat: 12.7 },
  ],
  timeline: [
    { year: 1, chapter: 1, placeId: 'constantinople', camera: { lon: 33.5, lat: 36.4, zoom: 1.3 }, scene: { kind: 'radiate', placeId: 'constantinople', reach: [] } },
    { year: 2, chapter: 2, placeId: 'mecca', camera: { lon: 43, lat: 22, zoom: 1.35 }, scene: { kind: 'dawn', placeId: 'mecca' } },
    { year: 3, chapter: 3, placeId: 'mecca', camera: { lon: 39.7, lat: 23, zoom: 2.1 }, scene: { kind: 'radiate', placeId: 'mecca', reach: ['medina'] } },
    { year: 4, chapter: 4, placeId: 'yemen', camera: { lon: 41.9, lat: 18.4, zoom: 1.8 }, scene: { kind: 'dawn', placeId: 'mecca' } },
    { year: 5, chapter: 5, placeId: 'egypt', camera: { lon: 38, lat: 25.5, zoom: 1.15 }, scene: { kind: 'radiate', placeId: 'mecca', reach: ['yemen', 'iraq', 'egypt', 'syria', 'palestine'] } },
    // The sea route to Abyssinia is the action of this step.
    { year: 6, chapter: 5, placeId: 'abyssinia', camera: { lon: 39.4, lat: 17.4, zoom: 1.6 }, scene: { kind: 'radiate', placeId: 'abyssinia', reach: [] } },
    // Chapter 6: at the beginning of the 7th century the Quraysh controlled the most important trade route.
    { year: 7, chapter: 6, placeId: 'mecca', camera: { lon: 39, lat: 24, zoom: 1.05 }, scene: { kind: 'journey', fromId: 'mecca', toIds: ['yemen', 'iraq', 'egypt', 'abyssinia'] } },
  ],
  challenge: [
    { id: 'medina', lon: 39.61, lat: 24.47, radiusKm: 100 },
    { id: 'constantinople', lon: 28.98, lat: 41.01, radiusKm: 130 },
    { id: 'egypt', lon: 31.2, lat: 29.0, radiusKm: 260 },
    { id: 'yemen', lon: 44.2, lat: 15.3, radiusKm: 260 },
    { id: 'abyssinia', lon: 38.9, lat: 13.3, radiusKm: 300 },
  ],
};
