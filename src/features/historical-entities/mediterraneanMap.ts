import type { HistoricalMapFocus } from './types';

/**
 * Language-neutral context map from the Atlantic coast of Spain to the Gulf,
 * generated once from Natural Earth (public domain). Equirectangular,
 * 10°W–50°E and 10°N–48°N on an 800 × 600 canvas.
 */
export const mediterraneanContextMap = new URL('./assets/maps/mediterranean-context-map.svg', import.meta.url).href;

const WEST = -10;
const EAST = 50;
const SOUTH = 10;
const NORTH = 48;
const WIDTH = 800;
const HEIGHT = 600;

const round = (value: number) => Math.round(value * 10) / 10;
const xPercent = (lon: number) => ((lon - WEST) / (EAST - WEST)) * 100;
const yPercent = (lat: number) => ((NORTH - lat) / (NORTH - SOUTH)) * 100;

/** A place marker. Coordinates are latitude, longitude in degrees. */
export const medPoint = (lat: number, lon: number, zoom = 1): HistoricalMapFocus => ({
  mode: 'point',
  x: round(xPercent(lon)),
  y: round(yPercent(lat)),
  zoom,
});

/** A soft oval over a land or sea, from its rough bounding box in degrees. */
export const medArea = (
  box: { west: number; east: number; south: number; north: number },
  options: { rotate?: number; zoom?: number } = {},
): HistoricalMapFocus => ({
  mode: 'area',
  x: round(xPercent((box.west + box.east) / 2)),
  y: round(yPercent((box.south + box.north) / 2)),
  width: round(((box.east - box.west) / (EAST - WEST)) * 100),
  height: round(((box.north - box.south) / (NORTH - SOUTH)) * 100),
  rotate: options.rotate,
  zoom: options.zoom ?? 1,
});

/** A long, thin oval from one point to another, for a river or a narrow sea. */
export const medStrip = (
  from: [number, number],
  to: [number, number],
  thicknessPx: number,
  zoom = 1,
): HistoricalMapFocus => {
  const x1 = xPercent(from[1]);
  const y1 = yPercent(from[0]);
  const x2 = xPercent(to[1]);
  const y2 = yPercent(to[0]);
  const dx = ((x2 - x1) / 100) * WIDTH;
  const dy = ((y2 - y1) / 100) * HEIGHT;
  const length = Math.hypot(dx, dy) + thicknessPx;
  return {
    mode: 'area',
    x: round((x1 + x2) / 2),
    y: round((y1 + y2) / 2),
    width: round((length / WIDTH) * 100),
    height: round((thicknessPx / HEIGHT) * 100),
    rotate: Math.round((Math.atan2(dy, dx) * 180) / Math.PI),
    zoom,
  };
};
