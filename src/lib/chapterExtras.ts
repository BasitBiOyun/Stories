import type { BeforeYouRead, Exercise, PageData } from '../types';

/** Before you read, I can and example answers for one book edition, keyed by chapter id. */
export interface ChapterExtras {
  beforeYouRead: Record<number, BeforeYouRead>;
  iCan: Record<number, string[]>;
  /** Example answers for each chapter's Language Focus prompts, in prompt order. */
  examples: Record<number, string[]>;
  /** Example answers for the Language Review prompts, in prompt order. */
  reviewExamples?: string[];
}

const withExamples = (exercises: Exercise[] | undefined, examples: string[] | undefined): Exercise[] | undefined => {
  if (!exercises || !examples?.length) return exercises;
  let next = 0;
  return exercises.map(exercise => exercise.discussionPrompts
    ? { ...exercise, discussionPrompts: exercise.discussionPrompts.map(prompt => ({ ...prompt, example: examples[next++] ?? prompt.example })) }
    : exercise);
};

/** Adds the extras to a built page list. Story pages get Before you read and I can; prompts get example answers. */
export const applyChapterExtras = (pages: PageData[], extras: ChapterExtras): PageData[] => pages.map(page => {
  if (page.type === 'story') {
    return {
      ...page,
      beforeYouRead: extras.beforeYouRead[page.id] ?? page.beforeYouRead,
      iCan: extras.iCan[page.id] ?? page.iCan,
      languageFocusExercises: withExamples(page.languageFocusExercises, extras.examples[page.id]),
    };
  }
  if (page.type === 'exercises' && extras.reviewExamples) {
    return { ...page, exercises: withExamples(page.exercises, extras.reviewExamples) };
  }
  return page;
});
