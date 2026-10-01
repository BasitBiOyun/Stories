/** Small glyphs drawn inside map markers and card chips. */
export type StoryMapIcon = 'quill' | 'dome' | 'swords' | 'route';

/** Historical overlays drawn as soft, approximate shapes over the base map. */
export type StoryMapOverlay = 'seljuk-1243' | 'mongol-1243';

export type StoryMapLabelSide = 'right' | 'left' | 'top' | 'bottom';

/** Language-neutral position and look of one place. Shared by the EN and AR editions. */
export interface StoryMapPlaceLayout {
  id: string;
  lon: number;
  lat: number;
  icon: StoryMapIcon;
  /** `event` is drawn in the battle colour; `place` in the book's accent. */
  tone: 'place' | 'event';
  /** A region rather than a point: a soft circle of this radius appears when it is selected. */
  areaRadiusKm?: number;
  labelSide?: StoryMapLabelSide;
}

/** Manually authored card text for one place, in one language. */
export interface StoryMapPlaceCopy {
  name: string;
  kind: string;
  text: string;
  teacherNote?: string;
}

export interface StoryMapNamedPoint {
  id: string;
  lon: number;
  lat: number;
  name: string;
  labelSide?: 'right' | 'bottom';
}

export interface StoryMapTimelineItem {
  year: number;
  placeId: string;
  label: string;
}

export interface StoryMapLayout {
  baseMap: 'anatolia';
  /** The part of the base map the reader sees first, in degrees. */
  home: { west: number; east: number; south: number; north: number };
  overlays: StoryMapOverlay[];
  places: StoryMapPlaceLayout[];
  towns: Array<{ id: string; lon: number; lat: number; labelSide?: 'right' | 'bottom' }>;
  seas: Array<{ id: string; lon: number; lat: number }>;
  timeline: Array<{ year: number; placeId: string }>;
}

export interface StoryMapCopy {
  places: Record<string, StoryMapPlaceCopy>;
  towns: Record<string, string>;
  seas: Record<string, string>;
  timeline: Record<number, string>;
  legend: Partial<Record<StoryMapOverlay, string>>;
}

export interface StoryMapPlace extends StoryMapPlaceLayout, StoryMapPlaceCopy {}

/** A complete map for one page in one language. */
export interface StoryMap {
  baseMap: 'anatolia';
  home: StoryMapLayout['home'];
  overlays: StoryMapOverlay[];
  legend: StoryMapCopy['legend'];
  places: StoryMapPlace[];
  towns: StoryMapNamedPoint[];
  seas: StoryMapNamedPoint[];
  timeline: StoryMapTimelineItem[];
}
