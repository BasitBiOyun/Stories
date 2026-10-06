import { preloadable } from '../../lib/preloadable';

// The reader pages (story, activities, glossary) are not needed on the entry and home screens,
// so they come as their own download: fetched together with a book's content, when a book card
// is hovered or touched, and in the background once the home page has settled.
const storyPage = preloadable(() => import('./StoryPage').then(module => module.StoryPage));
const storyFlow = preloadable(() => import('./StoryFlow').then(module => module.StoryFlow));
const exercisePage = preloadable(() => import('./ExercisePage').then(module => module.ExercisePage));
const masterGlossary = preloadable(() => import('./MasterGlossary').then(module => module.MasterGlossary));

export const StoryPage = storyPage.Component;
export const StoryFlow = storyFlow.Component;
export const ExercisePage = exercisePage.Component;
export const MasterGlossary = masterGlossary.Component;

export const loadReaderChunks = () =>
  Promise.all([storyPage.preload(), storyFlow.preload(), exercisePage.preload(), masterGlossary.preload()]);
