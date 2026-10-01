import type { StoryMapLayout } from '../../../features/story-maps/types';

/**
 * Shared, language-neutral layout of the map shown between chapters 1 and 2. Card text lives in en/ and ar/.
 * The B1 text gives no calendar years ("about 4,000 years ago" only), so the slider follows the chapters.
 */
export const abrahamB1StoryMapLayout: StoryMapLayout = {
  baseMap: 'nearEast',
  home: { west: 32.5, east: 50, south: 16, north: 37.5 },
  overlays: [],
  features: { timeSlider: true, tour: true, challenge: true, classroom: true },
  time: { start: 1, lastYear: 6, birth: 1, mode: 'stages' },
  places: [
    { id: 'babylon', lon: 44.42, lat: 32.54, icon: 'city', tone: 'place', labelSide: 'left' },
    { id: 'mesopotamia', lon: 44.0, lat: 34.0, icon: 'waves', tone: 'place', areaRadiusKm: 350, showArea: true, labelSide: 'top' },
    // The text does not say where the fire was; the pin sits beside Babylon so the event has its own card.
    { id: 'fire', lon: 45.3, lat: 33.0, icon: 'palace', tone: 'event', labelSide: 'right' },
    { id: 'syria', lon: 37.3, lat: 34.6, icon: 'route', tone: 'place', areaRadiusKm: 220, labelSide: 'right' },
    { id: 'palestine', lon: 35.2, lat: 31.6, icon: 'route', tone: 'place', areaRadiusKm: 110, labelSide: 'left' },
    { id: 'mecca', lon: 39.83, lat: 21.42, icon: 'kaaba', tone: 'place', labelSide: 'left' },
    // Chapter 13: Ishmael's descendants "spread all over the Arabian Peninsula". Shown when selected.
    { id: 'arabia', lon: 45.0, lat: 23.8, icon: 'palm', tone: 'place', areaRadiusKm: 700, labelSide: 'right' },
  ],
  towns: [],
  seas: [
    { id: 'mediterranean', lon: 33.6, lat: 33.4 },
    { id: 'redSea', lon: 37.0, lat: 23.5 },
  ],
  routes: [
    // Chapter 10: "He traveled from Babylon to Syria and Palestine on camelback."
    {
      id: 'toSyriaPalestine',
      points: [[44.42, 32.54], [43.0, 33.9], [41.3, 34.6], [39.4, 35.2], [37.3, 34.6], [36.3, 33.2], [35.2, 31.6]],
      start: 2.6,
      end: 3,
      tone: 'journey',
    },
    // Chapter 10: the family reaches the valley near Safa and Marwa. The starting point is not named;
    // the line starts in the Palestine area (see the teacher note on Palestine).
    {
      id: 'toValley',
      points: [[35.2, 31.6], [35.6, 30.0], [36.6, 28.0], [37.9, 25.6], [39.3, 23.6], [39.83, 21.42]],
      start: 3.6,
      end: 4,
      tone: 'journey',
    },
  ],
  timeline: [
    { year: 1, chapter: 1, placeId: 'babylon', camera: { lon: 44.2, lat: 33.2, zoom: 2.0 }, scene: { kind: 'dawn', placeId: 'babylon' } },
    // "News about the fire traveled very fast and far."
    { year: 2, chapter: 8, placeId: 'fire', camera: { lon: 44.8, lat: 33.0, zoom: 2.3 }, scene: { kind: 'radiate', placeId: 'fire', reach: [] } },
    { year: 3, chapter: 10, placeId: 'syria', camera: { lon: 39.8, lat: 33.4, zoom: 1.4 } },
    { year: 4, chapter: 12, placeId: 'mecca', camera: { lon: 38.6, lat: 24.8, zoom: 1.5 }, scene: { kind: 'dawn', placeId: 'mecca' } },
    { year: 5, chapter: 13, placeId: 'mecca', camera: { lon: 39.83, lat: 22.2, zoom: 2.0 }, scene: { kind: 'radiate', placeId: 'mecca', reach: [] } },
    { year: 6, chapter: 13, placeId: 'arabia', camera: { lon: 43.0, lat: 23.5, zoom: 1.15 }, scene: { kind: 'radiate', placeId: 'mecca', reach: ['arabia'] } },
  ],
  challenge: [
    { id: 'babylon', lon: 44.42, lat: 32.54, radiusKm: 120 },
    { id: 'syria', lon: 37.3, lat: 34.6, radiusKm: 230 },
    { id: 'palestine', lon: 35.2, lat: 31.6, radiusKm: 160 },
    { id: 'mecca', lon: 39.83, lat: 21.42, radiusKm: 120 },
    { id: 'arabia', lon: 45.0, lat: 23.8, radiusKm: 550 },
  ],
};
