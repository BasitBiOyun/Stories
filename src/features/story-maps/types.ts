/** Small glyphs drawn inside map markers and card chips. */
export type StoryMapIcon = 'quill' | 'dome' | 'swords' | 'route';

/** Historical overlays drawn as soft, approximate shapes over the base map. */
export type StoryMapOverlay = 'seljuk-1243' | 'mongol-1243';

export type StoryMapLegendKey = StoryMapOverlay | 'seljuk-pressure';

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
  /** Shown to teachers only. */
  teacherNote?: string;
  /** A question for the class, shown to teachers only. */
  question?: string;
}

export interface StoryMapNamedPoint {
  id: string;
  lon: number;
  lat: number;
  name: string;
  labelSide?: 'right' | 'bottom';
}

/** Where the camera goes for one dated event: a centre in degrees and a zoom (1 = whole map). */
export interface StoryMapCamera {
  lon: number;
  lat: number;
  zoom: number;
}

export interface StoryMapTimelineEvent {
  year: number;
  placeId: string;
  camera: StoryMapCamera;
}

export interface StoryMapTimelineItem extends StoryMapTimelineEvent {
  label: string;
}

/** Which interactive tools a map offers. Each level switches on what suits its learners. */
export interface StoryMapFeatures {
  timeSlider: boolean;
  tour: boolean;
  challenge: boolean;
  classroom: boolean;
}

/** The place a learner has to find in the "tap the map" challenge. The accepted answer is a circle. */
export interface StoryMapChallengeTarget {
  id: string;
  lon: number;
  lat: number;
  radiusKm: number;
}

export interface StoryMapChallengeQuestion extends StoryMapChallengeTarget {
  prompt: string;
}

export interface StoryMapLayout {
  baseMap: 'anatolia';
  /** The part of the base map the reader sees first, in degrees. */
  home: { west: number; east: number; south: number; north: number };
  overlays: StoryMapOverlay[];
  features: StoryMapFeatures;
  /** The slider runs from `start` to the end of `lastYear`. `birth` is used for the age line. */
  time: { start: number; lastYear: number; birth: number };
  places: StoryMapPlaceLayout[];
  towns: Array<{ id: string; lon: number; lat: number; labelSide?: 'right' | 'bottom' }>;
  seas: Array<{ id: string; lon: number; lat: number }>;
  timeline: StoryMapTimelineEvent[];
  challenge?: StoryMapChallengeTarget[];
}

/** The age line shown with the year. `value` is the number in the reader's digits, `age` the plain number. */
export interface StoryMapAgeCopy {
  born: string;
  alive: (value: string, age: number) => string;
  died: (value: string, age: number) => string;
}

export interface StoryMapCopy {
  places: Record<string, StoryMapPlaceCopy>;
  towns: Record<string, string>;
  seas: Record<string, string>;
  timeline: Record<number, string>;
  legend: Partial<Record<StoryMapLegendKey, string>>;
  age: StoryMapAgeCopy;
  /** One prompt per challenge target id. */
  challenge?: Record<string, string>;
}

export interface StoryMapPlace extends StoryMapPlaceLayout, StoryMapPlaceCopy {}

/** A complete map for one page in one language. */
export interface StoryMap {
  baseMap: 'anatolia';
  home: StoryMapLayout['home'];
  overlays: StoryMapOverlay[];
  features: StoryMapFeatures;
  time: StoryMapLayout['time'];
  legend: StoryMapCopy['legend'];
  age: StoryMapAgeCopy;
  places: StoryMapPlace[];
  towns: StoryMapNamedPoint[];
  seas: StoryMapNamedPoint[];
  timeline: StoryMapTimelineItem[];
  challenge: StoryMapChallengeQuestion[];
}
