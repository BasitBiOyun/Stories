import type { StoryMapLayout } from '../../../features/story-maps/types';

/** Shared, language-neutral layout of the map shown between chapters 3 and 4. Card text lives in en/ and ar/. */
export const meccaA2StoryMapLayout: StoryMapLayout = {
  baseMap: 'nearEast',
  home: { west: 31, east: 50, south: 10.5, north: 35 },
  overlays: [],
  // A2 learners get the full set of tools; each is simple to use on its own.
  features: { timeSlider: true, tour: true, challenge: true, classroom: true },
  // The A2 text gives only one year (632), so the steps follow the chapters.
  time: { start: 1, lastYear: 6, birth: 1, mode: 'stages' },
  routes: [
    // Chapter 11: the move to Medina. The book gives no year and no route; the line is only a guide.
    { id: 'hijra', points: [[39.83, 21.42], [39.45, 22.5], [39.3, 23.5], [39.61, 24.47]], start: 4.6, end: 5, tone: 'journey' },
    // Chapter 13: Bilal leaves Medina and goes to Damascus. No route is given.
    { id: 'toDamascus', points: [[39.61, 24.47], [38.6, 26.5], [36.9, 28.4], [36.2, 30.3], [36.0, 32.0], [36.29, 33.51]], start: 5.6, end: 6, tone: 'journey' },
  ],
  places: [
    { id: 'mecca', lon: 39.83, lat: 21.42, icon: 'city', tone: 'place', labelSide: 'right' },
    // A soft circle over the peninsula; the book gives no borders.
    { id: 'arabia', lon: 44.5, lat: 23.6, icon: 'tent', tone: 'place', areaRadiusKm: 600, showArea: true, labelSide: 'top' },
    // Bilal's mother was Ethiopian and many slaves came from Abyssinia; Bilal himself was born in Mecca, so no journey is drawn from here.
    { id: 'abyssinia', lon: 38.9, lat: 13.3, icon: 'route', tone: 'place', areaRadiusKm: 270, showArea: true, labelSide: 'right' },
    { id: 'medina', lon: 39.61, lat: 24.47, icon: 'palm', tone: 'place', labelSide: 'right' },
    { id: 'damascus', lon: 36.29, lat: 33.51, icon: 'city', tone: 'place', labelSide: 'right' },
  ],
  towns: [],
  seas: [
    { id: 'redSea', lon: 38.8, lat: 19.5 },
    { id: 'mediterranean', lon: 32.6, lat: 33.3 },
  ],
  timeline: [
    { year: 1, chapter: 1, placeId: 'mecca', camera: { lon: 39.9, lat: 21.8, zoom: 2 }, scene: { kind: 'dawn', placeId: 'mecca' } },
    { year: 2, chapter: 3, placeId: 'abyssinia', camera: { lon: 39.6, lat: 17.6, zoom: 1.4 }, scene: { kind: 'radiate', placeId: 'mecca', reach: ['abyssinia', 'arabia'] } },
    { year: 3, chapter: 5, placeId: 'mecca', camera: { lon: 39.9, lat: 21.8, zoom: 2.2 }, scene: { kind: 'radiate', placeId: 'mecca', reach: [] } },
    { year: 4, chapter: 10, placeId: 'mecca', camera: { lon: 39.9, lat: 21.8, zoom: 1.9 }, scene: { kind: 'dawn', placeId: 'mecca' } },
    { year: 5, chapter: 11, placeId: 'medina', camera: { lon: 39.7, lat: 23, zoom: 2 }, scene: { kind: 'radiate', placeId: 'medina', reach: [] } },
    // The end of the story: Bilal's life from Mecca to Medina and Damascus.
    { year: 6, chapter: 13, placeId: 'damascus', camera: { lon: 38.3, lat: 27.6, zoom: 1.3 }, scene: { kind: 'journey', fromId: 'mecca', toIds: ['medina', 'damascus'] } },
  ],
  // The accepted answer is a circle, wide enough for a child's finger and for places that are regions.
  challenge: [
    { id: 'mecca', lon: 39.83, lat: 21.42, radiusKm: 110 },
    { id: 'medina', lon: 39.61, lat: 24.47, radiusKm: 100 },
    { id: 'damascus', lon: 36.29, lat: 33.51, radiusKm: 130 },
    { id: 'abyssinia', lon: 38.9, lat: 13.3, radiusKm: 300 },
    { id: 'arabia', lon: 44.5, lat: 23.6, radiusKm: 350 },
  ],
};
