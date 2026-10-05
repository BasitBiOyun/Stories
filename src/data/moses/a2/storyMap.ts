import type { StoryMapLayout } from '../../../features/story-maps/types';

/**
 * Shared, language-neutral layout of the map shown between chapters 1 and 2. Card text lives in en/ and ar/.
 * Every place is a soft region: the book gives no exact site for the palace, the well, the mountain or the crossing.
 */
export const mosesA2StoryMapLayout: StoryMapLayout = {
  baseMap: 'nearEast',
  home: { west: 28.5, east: 38, south: 25.8, north: 32.2 },
  overlays: [],
  features: { timeSlider: true, tour: true, challenge: true, classroom: true },
  // The A2 text has no usable years ("more than 3000 years ago"), so the steps follow the chapters.
  time: { start: 1, lastYear: 8, birth: 1, mode: 'stages' },
  places: [
    // Egypt: the land of the palace and the city. The text names neither, so it is a region around the delta.
    { id: 'egypt', entityId: 'moses-egypt-ancient', lon: 30.7, lat: 30.2, icon: 'palace', tone: 'place', areaRadiusKm: 170, showArea: true, labelSide: 'left' },
    // The Nile: the engine draws only circles, so a soft circle sits on the river in Middle Egypt.
    { id: 'nile', entityId: 'moses-nile', lon: 31.15, lat: 27.2, icon: 'waves', tone: 'place', areaRadiusKm: 190, showArea: true, labelSide: 'left' },
    // Midian: east of the Gulf of Aqaba (named in B1/B2 only; A2 says "near Egypt").
    { id: 'midian', entityId: 'moses-midian', lon: 35.4, lat: 28.3, icon: 'well', tone: 'place', areaRadiusKm: 130, showArea: true, labelSide: 'right' },
    // "The mountain": unnamed in A2. A soft area in southern Sinai (B2 names it Mount Sinai / Mount Tur).
    { id: 'mountain', entityId: 'moses-mount-sinai', lon: 33.95, lat: 28.55, icon: 'mountain', tone: 'place', areaRadiusKm: 80, showArea: true, labelSide: 'bottom' },
    // "The sea": unnamed in A2. The crossing place is not known; a soft area at the Gulf of Suez.
    { id: 'sea', entityId: 'moses-red-sea', lon: 32.6, lat: 29.6, icon: 'waves', tone: 'event', areaRadiusKm: 90, showArea: true, labelSide: 'right' },
  ],
  towns: [],
  seas: [
    { id: 'mediterranean', lon: 29.8, lat: 31.85 },
  ],
  // Broad journeys only: the text gives no roads.
  routes: [
    { id: 'flight', points: [[30.7, 30.2], [32.3, 30.15], [33.5, 30.0], [34.6, 29.65], [35.05, 29.2], [35.4, 28.3]], start: 2.6, end: 3, tone: 'journey' },
    { id: 'return', points: [[35.4, 28.3], [35.05, 29.15], [34.8, 29.5], [34.4, 29.2], [33.95, 28.55]], start: 4.6, end: 5, tone: 'journey' },
    { id: 'toEgypt', points: [[33.95, 28.55], [33.4, 29.3], [32.75, 30.0], [32.0, 30.15], [30.7, 30.2]], start: 5.6, end: 6, tone: 'journey' },
    { id: 'exodus', points: [[30.7, 30.2], [31.9, 29.95], [32.6, 29.6]], start: 6.6, end: 7, tone: 'journey' },
  ],
  timeline: [
    // Ch. 1: Moses lived in Egypt; Pharaoh was the king.
    { year: 1, chapter: 1, placeId: 'egypt', camera: { lon: 31.3, lat: 29.4, zoom: 1.6 } },
    // Ch. 3: the baby in the basket on the River Nile.
    { year: 2, chapter: 3, placeId: 'nile', camera: { lon: 31.2, lat: 28.2, zoom: 1.7 }, scene: { kind: 'dawn', placeId: 'nile' } },
    // Ch. 7: the escape from Egypt to Midian (drawn by the "flight" route).
    { year: 3, chapter: 7, placeId: 'midian', camera: { lon: 33.2, lat: 29.2, zoom: 1.35 } },
    // Ch. 9: a new life in Midian, ten years.
    { year: 4, chapter: 9, placeId: 'midian', camera: { lon: 35.2, lat: 28.5, zoom: 1.9 }, scene: { kind: 'dawn', placeId: 'midian' } },
    // Ch. 10: the voice on the mountain; Moses is sent to Egypt.
    { year: 5, chapter: 10, placeId: 'mountain', camera: { lon: 34.5, lat: 28.9, zoom: 1.7 }, scene: { kind: 'radiate', placeId: 'mountain', reach: ['egypt'] } },
    // Ch. 11: Moses goes to Egypt and to the palace with the message of Allah.
    { year: 6, chapter: 11, placeId: 'egypt', camera: { lon: 32.3, lat: 29.5, zoom: 1.4 }, scene: { kind: 'radiate', placeId: 'egypt', reach: [] } },
    // Ch. 14: the night journey from Egypt to the sea (drawn by the "exodus" route).
    { year: 7, chapter: 14, placeId: 'sea', camera: { lon: 31.9, lat: 29.7, zoom: 1.9 } },
    // Ch. 15: the sea opens; the end of the story is drawn as a summary of Moses' journeys.
    { year: 8, chapter: 15, placeId: 'sea', camera: { lon: 33.0, lat: 28.6, zoom: 1.0 }, scene: { kind: 'journey', fromId: 'egypt', toIds: ['midian', 'mountain', 'sea'] } },
  ],
  // Regions, so the accepted circles are generous.
  challenge: [
    { id: 'egypt', lon: 30.9, lat: 30.0, radiusKm: 250 },
    { id: 'nile', lon: 31.15, lat: 27.2, radiusKm: 220 },
    { id: 'midian', lon: 35.4, lat: 28.3, radiusKm: 180 },
    { id: 'mountain', lon: 33.95, lat: 28.55, radiusKm: 150 },
    { id: 'sea', lon: 32.6, lat: 29.6, radiusKm: 150 },
  ],
};
