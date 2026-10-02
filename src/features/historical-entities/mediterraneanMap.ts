import type { HistoricalMapFocus } from './types';
import type { MediterraneanFeatureId } from './mediterraneanFeatures';

/**
 * Language-neutral context map from the Atlantic coast of Spain to the Gulf,
 * generated once from Natural Earth (public domain). Equirectangular,
 * 10°W–50°E and 14°N–48°N on an 800 × 537 canvas.
 */
export const mediterraneanContextMap = new URL('./assets/maps/mediterranean-context-map.svg', import.meta.url).href;

const WEST = -10;
const EAST = 50;
const SOUTH = 14;
const NORTH = 48;
const WIDTH = 800;
const PX_PER_DEGREE_LAT = 600 / 38;

export const MEDITERRANEAN_MAP_ASPECT = `${WIDTH} / ${Math.round((NORTH - SOUTH) * PX_PER_DEGREE_LAT)}`;

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

/** A round, approximate area around a centre; the radius is in degrees of latitude. */
export const medCircle = (lat: number, lon: number, radiusDegrees: number, zoom = 1): HistoricalMapFocus => ({
  mode: 'circle',
  x: round(xPercent(lon)),
  y: round(yPercent(lat)),
  radius: round(((radiusDegrees * PX_PER_DEGREE_LAT) / WIDTH) * 100),
  zoom,
});

/** A sea, river or island lit up in its own shape; the label sits at lat, lon. */
export const medFeature = (feature: MediterraneanFeatureId, lat: number, lon: number, zoom = 1): HistoricalMapFocus => ({
  mode: 'feature',
  feature,
  x: round(xPercent(lon)),
  y: round(yPercent(lat)),
  zoom,
});

type LatLon = [lat: number, lon: number];

/**
 * A people or a ruling family: round lands (radius in degrees), pins for their
 * cities and arrows for where they came from. The title label sits at `label`.
 */
export const medGroup = ({
  label,
  zoom = 1,
  areas = [],
  pins = [],
  arrows = [],
}: {
  label: LatLon;
  zoom?: number;
  areas?: { at: LatLon; radius: number; faint?: boolean }[];
  pins?: { at: LatLon; label: string }[];
  arrows?: { from: LatLon; to: LatLon }[];
}): HistoricalMapFocus => ({
  mode: 'group',
  x: round(xPercent(label[1])),
  y: round(yPercent(label[0])),
  zoom,
  areas: areas.map(area => ({
    x: round(xPercent(area.at[1])),
    y: round(yPercent(area.at[0])),
    radius: round(((area.radius * PX_PER_DEGREE_LAT) / WIDTH) * 100),
    ...(area.faint ? { faint: true } : {}),
  })),
  pins: pins.map(pin => ({ x: round(xPercent(pin.at[1])), y: round(yPercent(pin.at[0])), label: pin.label })),
  arrows: arrows.map(arrow => ({
    fromX: round(xPercent(arrow.from[1])),
    fromY: round(yPercent(arrow.from[0])),
    toX: round(xPercent(arrow.to[1])),
    toY: round(yPercent(arrow.to[0])),
  })),
});
