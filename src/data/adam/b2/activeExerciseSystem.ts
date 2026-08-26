import {
  adamB2FinalChallengeExercises,
  adamB2QuickChallenges,
} from './en/exercises';
import {
  adamB2FinalChallengeExercisesAr,
  adamB2QuickChallengesAr,
} from './ar/exercises';
import {
  adamB2FinalChallengeExercisesPolished,
  adamB2QuickChallengesPolished,
} from './en/exerciseSystem';
import {
  adamB2FinalChallengeExercisesPolishedAr,
  adamB2QuickChallengesPolishedAr,
} from './ar/exerciseSystem';

/**
 * Book-local compatibility activation for the polished Adam B2 exercise system.
 * The existing index imports the legacy exercise collections directly, so this
 * module updates those mutable collections before page assembly without touching
 * shared/global code or canonical story prose.
 */
Object.assign(adamB2QuickChallenges, adamB2QuickChallengesPolished);
Object.assign(adamB2QuickChallengesAr, adamB2QuickChallengesPolishedAr);

adamB2FinalChallengeExercises.splice(
  0,
  adamB2FinalChallengeExercises.length,
  ...adamB2FinalChallengeExercisesPolished,
);
adamB2FinalChallengeExercisesAr.splice(
  0,
  adamB2FinalChallengeExercisesAr.length,
  ...adamB2FinalChallengeExercisesPolishedAr,
);
