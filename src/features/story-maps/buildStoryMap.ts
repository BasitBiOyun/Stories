import type { StoryMap, StoryMapCopy, StoryMapLayout } from './types';

/** Joins the shared layout with one language's manually authored copy. Missing copy fails loudly. */
export const buildStoryMap = (layout: StoryMapLayout, copy: StoryMapCopy, label: string): StoryMap => {
  const need = <T,>(value: T | undefined, what: string): T => {
    if (value === undefined) throw new Error(`[Story Map] ${label}: Missing ${what}.`);
    return value;
  };

  return {
    baseMap: layout.baseMap,
    home: layout.home,
    overlays: layout.overlays,
    features: layout.features,
    time: layout.time,
    legend: copy.legend,
    age: copy.age,
    routes: layout.routes ?? [],
    places: layout.places.map(place => ({ ...place, ...need(copy.places[place.id], `place "${place.id}"`) })),
    towns: layout.towns.map(town => ({ ...town, name: need(copy.towns[town.id], `town "${town.id}"`) })),
    seas: layout.seas.map(sea => ({ ...sea, name: need(copy.seas[sea.id], `sea "${sea.id}"`) })),
    timeline: layout.timeline.map(item => ({ ...item, label: need(copy.timeline[item.year], `timeline ${item.year}`) })),
    challenge: (layout.challenge ?? []).map(target => ({
      ...target,
      prompt: need(copy.challenge?.[target.id], `challenge prompt "${target.id}"`),
    })),
  };
};
