import type { StoryMapLayout } from '../../../features/story-maps/types';

/** Shared, language-neutral layout of the map shown between chapters 6 and 7. Card text lives in en/ and ar/. */
export const meccaB1StoryMapLayout: StoryMapLayout = {
  baseMap: 'nearEast',
  home: { west: 28.5, east: 50, south: 10.5, north: 39.5 },
  overlays: [],
  features: { timeSlider: true, tour: true, challenge: true, classroom: true },
  // The B1 text gives centuries and a few years only, so the steps follow chapters 1–6.
  time: { start: 1, lastYear: 7, birth: 1, mode: 'stages' },
  routes: [
    // Chapter 3: the Jurhum tribe from Yemen settles in Mecca. The book gives no route; the line is only a guide.
    { id: 'jurhum', points: [[44.2, 15.3], [43.1, 16.6], [42.3, 17.9], [41.2, 19.4], [40.3, 20.7], [39.83, 21.42]], start: 2.6, end: 3, tone: 'journey' },
    // Chapter 4: Abraham (as) returns to Palestine.
    { id: 'abraham', points: [[39.83, 21.42], [39.3, 24.2], [38.0, 27.3], [36.6, 29.5], [35.6, 30.9], [35.2, 31.7]], start: 3.6, end: 4, tone: 'journey' },
    // Chapter 5: merchants travel to Byzantium, Yemen and Iraq. The book does not say how they reached Ethiopia,
    // so Ethiopia is joined only by a thread in the chapter 5 scene.
    { id: 'tradeByzantium', points: [[39.83, 21.42], [39.0, 24.6], [37.7, 27.6], [36.9, 30.0], [36.6, 32.6], [36.4, 35.0], [34.5, 36.8]], start: 5.6, end: 6, tone: 'journey' },
    { id: 'tradeYemen', points: [[39.83, 21.42], [41.2, 19.8], [42.9, 18.4], [44.1, 17.4], [44.2, 15.3]], start: 5.6, end: 6, tone: 'journey' },
    { id: 'tradeIraq', points: [[39.83, 21.42], [41.6, 24.2], [43.0, 27.4], [43.9, 30.0], [44.2, 32.0]], start: 5.6, end: 6, tone: 'journey' },
  ],
  places: [
    { id: 'mecca', lon: 39.83, lat: 21.42, icon: 'kaaba', tone: 'place', labelSide: 'right' },
    { id: 'yemen', lon: 44.2, lat: 15.3, icon: 'route', tone: 'place', areaRadiusKm: 230, showArea: true, labelSide: 'right' },
    { id: 'palestine', lon: 35.2, lat: 31.7, icon: 'route', tone: 'place', areaRadiusKm: 110, showArea: true, labelSide: 'left' },
    { id: 'iraq', lon: 44.2, lat: 32.0, icon: 'route', tone: 'place', areaRadiusKm: 220, showArea: true, labelSide: 'left' },
    { id: 'ethiopia', lon: 38.9, lat: 13.3, icon: 'route', tone: 'place', areaRadiusKm: 270, showArea: true, labelSide: 'right' },
    // B1 only says these two empires were powerful and traded with Arabia; their areas are soft and approximate.
    { id: 'byzantium', lon: 34.5, lat: 36.8, icon: 'palace', tone: 'place', areaRadiusKm: 260, showArea: true, labelSide: 'right' },
    { id: 'sassanids', lon: 48.3, lat: 34.2, icon: 'palace', tone: 'place', areaRadiusKm: 200, showArea: true, labelSide: 'left' },
  ],
  towns: [],
  seas: [
    { id: 'redSea', lon: 38.8, lat: 19.5 },
    { id: 'mediterranean', lon: 31.6, lat: 33.5 },
  ],
  timeline: [
    { year: 1, chapter: 1, placeId: 'mecca', camera: { lon: 40, lat: 22, zoom: 1.6 }, scene: { kind: 'dawn', placeId: 'mecca' } },
    { year: 2, chapter: 2, placeId: 'mecca', camera: { lon: 39.9, lat: 21.7, zoom: 2.2 }, scene: { kind: 'radiate', placeId: 'mecca', reach: [] } },
    { year: 3, chapter: 3, placeId: 'yemen', camera: { lon: 41.9, lat: 18.4, zoom: 1.8 }, scene: { kind: 'dawn', placeId: 'mecca' } },
    // The route back to Palestine is the action of this step.
    { year: 4, chapter: 4, placeId: 'palestine', camera: { lon: 37.6, lat: 26.6, zoom: 1.4 } },
    { year: 5, chapter: 4, placeId: 'byzantium', camera: { lon: 40.5, lat: 30.5, zoom: 1.15 }, scene: { kind: 'radiate', placeId: 'byzantium', reach: [] } },
    { year: 6, chapter: 5, placeId: 'mecca', camera: { lon: 40.5, lat: 25.4, zoom: 0.9 }, scene: { kind: 'radiate', placeId: 'mecca', reach: ['byzantium', 'yemen', 'iraq', 'ethiopia'] } },
    // Chapter 6: at the beginning of the 7th century the Quraysh controlled the most important trade routes.
    { year: 7, chapter: 6, placeId: 'mecca', camera: { lon: 40.5, lat: 25.4, zoom: 0.9 }, scene: { kind: 'journey', fromId: 'mecca', toIds: ['yemen', 'iraq', 'byzantium', 'ethiopia'] } },
  ],
  challenge: [
    { id: 'mecca', lon: 39.83, lat: 21.42, radiusKm: 110 },
    { id: 'yemen', lon: 44.2, lat: 15.3, radiusKm: 260 },
    { id: 'palestine', lon: 35.2, lat: 31.7, radiusKm: 170 },
    { id: 'iraq', lon: 44.2, lat: 32.0, radiusKm: 260 },
    { id: 'ethiopia', lon: 38.9, lat: 13.3, radiusKm: 300 },
  ],
};
