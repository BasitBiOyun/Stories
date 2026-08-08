import type { Exercise, PageData } from '../../../types';
import {
  mosesB1GoldContract,
  mosesB1PagesGoldEn,
  mosesB1TeacherGuideGoldEn,
} from './gold';

const rotateObjectiveOptions = (exercise: Exercise): Exercise => {
  if (
    exercise.type !== 'multiple-choice'
    || !exercise.options
    || exercise.options.length < 2
    || typeof exercise.correctAnswer !== 'number'
  ) {
    return exercise;
  }

  const shift = [...exercise.id].reduce((total, char) => total + char.charCodeAt(0), 0) % exercise.options.length;
  if (shift === 0) return exercise;

  const options = [
    ...exercise.options.slice(-shift),
    ...exercise.options.slice(0, -shift),
  ];

  return {
    ...exercise,
    options,
    correctAnswer: (exercise.correctAnswer + shift) % exercise.options.length,
  };
};

export const mosesB1PagesFinalEn: PageData[] = mosesB1PagesGoldEn.map(page => ({
  ...page,
  exercises: page.exercises?.map(rotateObjectiveOptions),
}));

export const mosesB1TeacherGuideFinalEn = mosesB1TeacherGuideGoldEn;
export { mosesB1GoldContract };
