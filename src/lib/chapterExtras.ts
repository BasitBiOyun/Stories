import type { BeforeYouRead, Exercise, GroupTask, PageData } from '../types';

/** Before you read, I can and example answers for one book edition, keyed by chapter id. */
export interface ChapterExtras {
  beforeYouRead: Record<number, BeforeYouRead>;
  iCan: Record<number, string[]>;
  /** Example answers for each chapter's Language Focus prompts, in prompt order. */
  examples: Record<number, string[]>;
  /** Example answers for the Language Review prompts, in prompt order. */
  reviewExamples?: string[];
  /** A group task shown at the end of some chapters. */
  groupTasks?: Record<number, GroupTask>;
}

/** Time for a find or skim task: one second per ten words, rounded to 15, 20, 25 or 30 seconds. */
export const beforeYouReadSeconds = (text: string): number => {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.min(30, Math.max(15, Math.round(words / 10 / 5) * 5));
};

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
      groupTask: extras.groupTasks?.[page.id] ?? page.groupTask,
    };
  }
  if (page.type === 'exercises' && extras.reviewExamples) {
    return { ...page, exercises: withExamples(page.exercises, extras.reviewExamples) };
  }
  return page;
});
