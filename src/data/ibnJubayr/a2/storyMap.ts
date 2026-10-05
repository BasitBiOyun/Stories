import type { StoryMapLayout } from '../../../features/story-maps/types';

/**
 * Language-neutral layout of the map shown after the last chapter. Card text lives in en/.
 * This book is English only, so there is no Arabic copy. The book gives places and dates but no
 * roads, so every line is only a guide drawn through the places it names.
 */
export const ibnJubayrA2StoryMapLayout: StoryMapLayout = {
  baseMap: 'mediterranean',
  home: { west: -9, east: 47, south: 19.5, north: 45 },
  overlays: [],
  features: { timeSlider: true, tour: true, challenge: true, classroom: true },
  // The journey has dates, but they crowd into two years of a 72-year life, so the steps follow the chapters.
  time: { start: 1, lastYear: 9, birth: 1, mode: 'stages' },
  routes: [
    // Ch. 4: Granada to Ceuta, then a Genoese ship past Sardinia and Sicily, toward Crete, then south to Alexandria.
    { id: 'toAlexandria', points: [[-3.6, 37.18], [-4.6, 36.6], [-5.32, 35.89], [-3, 36.05], [1, 37.0], [5, 37.9], [8.6, 38.35], [10.8, 38.3], [11.7, 37.3], [14, 36.3], [18, 35.6], [22, 35.0], [24.9, 34.6], [27.5, 32.9], [29.92, 31.2]], start: 1.3, end: 2, tone: 'journey' },
    // Ch. 4–5: eight days in Alexandria, then three days to Cairo.
    { id: 'toCairo', points: [[29.92, 31.2], [30.5, 30.8], [31.24, 30.04]], start: 2.6, end: 3, tone: 'journey' },
    // Ch. 6–7: a camel caravan to the Red Sea, then Mecca. The book names no stops.
    { id: 'toMecca', points: [[31.24, 30.04], [31.3, 29.0], [30.8, 28.0], [31.2, 27.0], [32.4, 26.1], [34.0, 24.5], [35.6, 23.0], [36.4, 22.3], [37.6, 21.8], [39.17, 21.5], [39.83, 21.42]], start: 3.4, end: 4, tone: 'journey' },
    // Ch. 8: Medina, then northeast through the desert, near the Euphrates, to Baghdad.
    { id: 'toBaghdad', points: [[39.83, 21.42], [39.45, 22.6], [39.3, 23.5], [39.61, 24.47], [41.5, 27.5], [43.4, 30.4], [44.3, 32.0], [44.36, 33.31]], start: 4.4, end: 5, tone: 'journey' },
    // Ch. 8–9: north to Mosul and northern Syria, through Aleppo to Damascus.
    { id: 'toDamascus', points: [[44.36, 33.31], [43.6, 34.6], [43.13, 36.34], [40.5, 36.7], [38.5, 36.5], [37.16, 36.2], [36.75, 35.15], [36.7, 34.6], [36.29, 33.51]], start: 5.4, end: 6, tone: 'journey' },
    // Ch. 10: to Palestine and the port of Acre.
    { id: 'toAcre', points: [[36.29, 33.51], [35.9, 33.1], [35.07, 32.93]], start: 6.6, end: 7, tone: 'journey' },
    // Ch. 11: west by ship; the ship hits the ground near the coast of Sicily.
    { id: 'toSicily', points: [[35.07, 32.93], [33.5, 33.3], [30, 34.0], [26, 34.6], [22, 35.4], [18.5, 37.0], [15.9, 37.9], [15.55, 38.2]], start: 7.15, end: 7.6, tone: 'journey' },
    // Ch. 11: another ship from Sicily, past Sardinia, to the coast of Spain and home.
    { id: 'toSpain', points: [[15.55, 38.2], [14, 38.4], [12.5, 38.15], [10.5, 38.4], [8.7, 38.6], [5, 38.0], [1, 37.4], [-0.98, 37.6], [-2.5, 37.4], [-3.6, 37.18]], start: 7.65, end: 8, tone: 'journey' },
  ],
  places: [
    { id: 'valencia', entityId: 'ibnjubayr-valencia', lon: -0.38, lat: 39.47, icon: 'city', tone: 'place', labelSide: 'right' },
    { id: 'granada', entityId: 'ibnjubayr-granada', lon: -3.6, lat: 37.18, icon: 'palace', tone: 'place', labelSide: 'right' },
    { id: 'ceuta', entityId: 'ibnjubayr-ceuta', lon: -5.32, lat: 35.89, icon: 'waves', tone: 'place', labelSide: 'bottom' },
    // The book does not say where on the coast the ship hit the ground, so the place is the island.
    { id: 'sicily', entityId: 'ibnjubayr-sicily', lon: 14.1, lat: 37.55, icon: 'waves', tone: 'event', areaRadiusKm: 150, labelSide: 'top' },
    { id: 'alexandria', entityId: 'ibnjubayr-alexandria', lon: 29.92, lat: 31.2, icon: 'city', tone: 'place', labelSide: 'left' },
    { id: 'cairo', entityId: 'ibnjubayr-cairo', lon: 31.24, lat: 30.04, icon: 'palace', tone: 'place', labelSide: 'left' },
    { id: 'mecca', entityId: 'ibnjubayr-mecca', lon: 39.83, lat: 21.42, icon: 'kaaba', tone: 'place', labelSide: 'right' },
    { id: 'medina', entityId: 'ibnjubayr-medina', lon: 39.61, lat: 24.47, icon: 'palm', tone: 'place', labelSide: 'left' },
    { id: 'baghdad', entityId: 'ibnjubayr-baghdad', lon: 44.36, lat: 33.31, icon: 'dome', tone: 'place', labelSide: 'right' },
    { id: 'aleppo', entityId: 'ibnjubayr-aleppo', lon: 37.16, lat: 36.2, icon: 'city', tone: 'place', labelSide: 'top' },
    { id: 'damascus', entityId: 'ibnjubayr-damascus', lon: 36.29, lat: 33.51, icon: 'dome', tone: 'place', labelSide: 'right' },
    { id: 'acre', entityId: 'ibnjubayr-acre', lon: 35.07, lat: 32.93, icon: 'waves', tone: 'place', labelSide: 'left' },
    { id: 'jerusalem', entityId: 'ibnjubayr-jerusalem', lon: 35.23, lat: 31.78, icon: 'city', tone: 'place', labelSide: 'bottom' },
  ],
  towns: [
    { id: 'mosul', lon: 43.13, lat: 36.34 },
    { id: 'kerak', lon: 35.7, lat: 31.18 },
  ],
  seas: [
    { id: 'mediterranean', lon: 18.5, lat: 34.0 },
    { id: 'redSea', lon: 38.0, lat: 19.9 },
    { id: 'nile', lon: 31.9, lat: 27.0 },
    { id: 'euphrates', lon: 41.2, lat: 35.0 },
  ],
  timeline: [
    // Ch. 1–2: born in Valencia in 1145; later a secretary for the governor of Granada.
    { year: 1, chapter: 1, placeId: 'valencia', camera: { lon: -2.4, lat: 38.4, zoom: 3.2 }, scene: { kind: 'dawn', placeId: 'valencia' } },
    // Ch. 4: February 3 – March 26, 1183, across the Mediterranean (drawn by the "toAlexandria" route).
    { year: 2, chapter: 4, placeId: 'alexandria', camera: { lon: 13, lat: 35.5, zoom: 1.25 } },
    // Ch. 5: Cairo under Saladin.
    { year: 3, chapter: 5, placeId: 'cairo', camera: { lon: 30.8, lat: 30.4, zoom: 3.4 }, scene: { kind: 'radiate', placeId: 'cairo', reach: [] } },
    // Ch. 6–7: the caravan to the Red Sea; Mecca in August 1183, more than eight months.
    { year: 4, chapter: 7, placeId: 'mecca', camera: { lon: 35.6, lat: 25.6, zoom: 2.0 }, scene: { kind: 'dawn', placeId: 'mecca' } },
    // Ch. 8: Medina (April 16, 1184), then Baghdad.
    { year: 5, chapter: 8, placeId: 'baghdad', camera: { lon: 41.8, lat: 27.6, zoom: 1.9 } },
    // Ch. 9: through Aleppo to Damascus.
    { year: 6, chapter: 9, placeId: 'damascus', camera: { lon: 39.8, lat: 34.8, zoom: 2.4 }, scene: { kind: 'radiate', placeId: 'damascus', reach: [] } },
    // Ch. 10: about a month in the Kingdom of Jerusalem, nearly two weeks waiting in Acre.
    { year: 7, chapter: 10, placeId: 'acre', camera: { lon: 35.6, lat: 32.6, zoom: 4.2 }, scene: { kind: 'radiate', placeId: 'acre', reach: [] } },
    // Ch. 11: the ship hits the ground near Sicily, then home to Spain in 1185 (the "toSicily" and "toSpain" routes).
    { year: 8, chapter: 11, placeId: 'sicily', camera: { lon: 16, lat: 36.2, zoom: 1.25 } },
    // Ch. 13: back in Granada; a third trip to Mecca; he dies in Alexandria in 1217.
    { year: 9, chapter: 13, placeId: 'alexandria', camera: { lon: 18.5, lat: 31, zoom: 1.0 }, scene: { kind: 'journey', fromId: 'granada', toIds: ['mecca', 'alexandria'] } },
  ],
  // The accepted answer is a circle, wide enough for a child's finger on a wide map.
  challenge: [
    { id: 'granada', lon: -3.6, lat: 37.18, radiusKm: 160 },
    { id: 'alexandria', lon: 29.92, lat: 31.2, radiusKm: 140 },
    { id: 'cairo', lon: 31.24, lat: 30.04, radiusKm: 130 },
    { id: 'mecca', lon: 39.83, lat: 21.42, radiusKm: 160 },
    { id: 'baghdad', lon: 44.36, lat: 33.31, radiusKm: 170 },
    { id: 'damascus', lon: 36.29, lat: 33.51, radiusKm: 140 },
    { id: 'sicily', lon: 14.1, lat: 37.55, radiusKm: 200 },
  ],
};
