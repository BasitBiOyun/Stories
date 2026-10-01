import type { StoryMapLayout } from '../../../features/story-maps/types';

/**
 * Shared, language-neutral layout of the map shown between chapters 3 and 4. Card text lives in en/ and ar/.
 * Every place is a soft region: the book gives no exact site for the palace, the well, Mount Tur, Tuwa or the crossing.
 */
export const mosesB2StoryMapLayout: StoryMapLayout = {
  baseMap: 'nearEast',
  home: { west: 28.5, east: 38.2, south: 25.8, north: 33 },
  overlays: [],
  features: { timeSlider: true, tour: true, challenge: true, classroom: true },
  // B2 gives only approximate reign dates and says the exact date of the Exodus is unknown, so the steps follow the chapters.
  time: { start: 1, lastYear: 9, birth: 1, mode: 'stages' },
  places: [
    // Egypt with the Nile Delta. The palace and the capital of Ramses are not located by the text.
    { id: 'egypt', lon: 30.7, lat: 30.2, icon: 'palace', tone: 'place', areaRadiusKm: 170, showArea: true, labelSide: 'left' },
    // The Nile: the engine draws only circles, so a soft circle sits on the river in Middle Egypt.
    { id: 'nile', lon: 31.15, lat: 27.2, icon: 'waves', tone: 'place', areaRadiusKm: 190, showArea: true, labelSide: 'left' },
    // Midian: "the eastern part of the Gulf of Aqaba" (ch. 13).
    { id: 'midian', lon: 35.4, lat: 28.3, icon: 'well', tone: 'place', areaRadiusKm: 130, showArea: true, labelSide: 'right' },
    // Sinai: one soft area for Mount Sinai / Mount Tur and the sacred valley Tuwa; no exact peak or valley is claimed.
    { id: 'sinai', lon: 33.85, lat: 28.85, icon: 'mountain', tone: 'place', areaRadiusKm: 120, showArea: true, labelSide: 'bottom' },
    // The Red Sea. The crossing place is not known; a soft area at the Gulf of Suez.
    { id: 'redSea', lon: 32.6, lat: 29.6, icon: 'waves', tone: 'event', areaRadiusKm: 90, showArea: true, labelSide: 'left' },
    // The land of Canaan, the land of Palestine (ch. 23): the direction of the journey after the crossing.
    { id: 'canaan', lon: 35.1, lat: 31.65, icon: 'route', tone: 'place', areaRadiusKm: 110, showArea: true, labelSide: 'right' },
  ],
  towns: [],
  seas: [
    { id: 'mediterranean', lon: 31.3, lat: 32.45 },
    { id: 'gulfOfAqaba', lon: 34.6, lat: 27.75 },
  ],
  // Broad journeys only: the text gives no roads.
  routes: [
    { id: 'flight', points: [[30.7, 30.2], [32.3, 30.15], [33.5, 30.0], [34.6, 29.65], [35.05, 29.2], [35.4, 28.3]], start: 2.6, end: 3, tone: 'journey' },
    { id: 'return', points: [[35.4, 28.3], [35.05, 29.15], [34.8, 29.5], [34.4, 29.3], [33.85, 28.85]], start: 4.6, end: 5, tone: 'journey' },
    { id: 'toEgypt', points: [[33.85, 28.85], [33.35, 29.45], [32.75, 30.0], [32.0, 30.15], [30.7, 30.2]], start: 5.6, end: 6, tone: 'journey' },
    { id: 'exodus', points: [[30.7, 30.2], [31.9, 29.95], [32.6, 29.6]], start: 6.6, end: 7, tone: 'journey' },
    // "Toward the land of Canaan": the line stops short of Canaan, because the text does not say they arrived.
    { id: 'toCanaan', points: [[32.6, 29.6], [33.3, 30.3], [33.9, 30.75], [35.1, 31.65]], start: 7.6, end: 8, tone: 'journey' },
  ],
  timeline: [
    // Ch. 1–3: the Israelites in Egypt; the Nile and the Nile Delta.
    { year: 1, chapter: 1, placeId: 'egypt', camera: { lon: 31.3, lat: 29.4, zoom: 1.6 } },
    // Ch. 6: the baby in the basket on the waters of the Nile.
    { year: 2, chapter: 6, placeId: 'nile', camera: { lon: 31.2, lat: 28.2, zoom: 1.7 }, scene: { kind: 'dawn', placeId: 'nile' } },
    // Ch. 11: the escape across the hot desert to Midian (drawn by the "flight" route).
    { year: 3, chapter: 11, placeId: 'midian', camera: { lon: 33.2, lat: 29.2, zoom: 1.35 } },
    // Ch. 14: ten years as a shepherd in Midian.
    { year: 4, chapter: 14, placeId: 'midian', camera: { lon: 35.2, lat: 28.5, zoom: 1.9 }, scene: { kind: 'dawn', placeId: 'midian' } },
    // Ch. 15: the voice at Mount Sinai; Moses is sent to Pharaoh.
    { year: 5, chapter: 15, placeId: 'sinai', camera: { lon: 34.5, lat: 29.0, zoom: 1.6 }, scene: { kind: 'radiate', placeId: 'sinai', reach: ['egypt'] } },
    // Ch. 18: Moses and Aaron deliver the message to the Pharaoh.
    { year: 6, chapter: 18, placeId: 'egypt', camera: { lon: 32.3, lat: 29.5, zoom: 1.4 }, scene: { kind: 'radiate', placeId: 'egypt', reach: [] } },
    // Ch. 22: the Exodus by night and the parting of the Red Sea.
    { year: 7, chapter: 22, placeId: 'redSea', camera: { lon: 32.0, lat: 29.8, zoom: 1.8 }, scene: { kind: 'journey', fromId: 'egypt', toIds: ['redSea'] } },
    // Ch. 23: Pharaoh drowns; Moses leads the Children of Israel toward Canaan (drawn by the "toCanaan" route).
    { year: 8, chapter: 23, placeId: 'canaan', camera: { lon: 33.8, lat: 30.6, zoom: 1.5 } },
    // Ch. 24: forty days on Mount Tur; the end of the story is drawn as a summary of Moses' journeys.
    { year: 9, chapter: 24, placeId: 'sinai', camera: { lon: 33.3, lat: 29.3, zoom: 1.0 }, scene: { kind: 'journey', fromId: 'egypt', toIds: ['midian', 'sinai', 'redSea', 'canaan'] } },
  ],
  // Regions, so the accepted circles are generous.
  challenge: [
    { id: 'egypt', lon: 30.9, lat: 30.0, radiusKm: 250 },
    { id: 'midian', lon: 35.4, lat: 28.3, radiusKm: 180 },
    { id: 'sinai', lon: 33.85, lat: 29.0, radiusKm: 200 },
    { id: 'redSea', lon: 32.6, lat: 29.6, radiusKm: 150 },
    { id: 'canaan', lon: 35.1, lat: 31.65, radiusKm: 170 },
  ],
};
