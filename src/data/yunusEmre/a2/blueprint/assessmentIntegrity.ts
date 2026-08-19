import type { BlueprintAssessmentItem, BlueprintAuthoredExercise, LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, matching } from '../../a2BlueprintAuthoring';

const chapter3Quick = (): BlueprintAssessmentItem['exercise'] => {
  const exercise = matching(
    L('Match the disciplined habits with how Chapter 3 describes them.', 'صل العادات المنضبطة بالطريقة التي يصفها بها الفصل الثالث.'),
    {
      en: [
        ['Eating, speaking, and sleeping', 'less'],
        ['Their time', 'spent on useful activities'],
      ],
      ar: [
        ['الأكل والكلام والنوم', 'قليلًا'],
        ['وقتهم', 'قضوه في أعمال مفيدة'],
      ],
    },
    L(
      'The chapter says dervishes ate less, spoke less, slept less, and spent their time on useful activities.',
      'يقول الفصل إن الدراويش كانوا يأكلون ويتكلمون وينامون قليلًا ويقضون وقتهم في أعمال مفيدة.',
    ),
  );

  return {
    en: {
      ...exercise.en,
      feedback: {
        correct: 'Correct. The chapter connects eating, speaking, and sleeping with “less” and their time with useful activities.',
        incorrect: 'Compare the two parts of the final paragraph: what they did less, and how they spent their time.',
      },
    },
    ar: {
      ...exercise.ar,
      feedback: {
        correct: 'صحيح. يربط الفصل الأكل والكلام والنوم بالقلة، ويربط وقتهم بالأعمال المفيدة.',
        incorrect: 'قارن بين جزأي الفقرة الأخيرة: ما الذي فعلوه أقل، وكيف قضوا وقتهم.',
      },
    },
  };
};

const normalized = (value: string) => value.trim().toLocaleLowerCase().replace(/\s+/g, ' ');

const assertMatchingIntegrity = (
  exercise: BlueprintAuthoredExercise,
  label: string,
) => {
  if (exercise.type !== 'matching') return;
  const pairs = exercise.matchingPairs ?? [];
  if (pairs.length < 2) throw new Error(`[Yunus A2 Gold] ${label} matching requires at least two pairs.`);

  const left = pairs.map(pair => normalized(pair.left));
  const right = pairs.map(pair => normalized(pair.right));
  if (new Set(left).size !== left.length) {
    throw new Error(`[Yunus A2 Gold] ${label} has duplicate matching concepts.`);
  }
  if (new Set(right).size !== right.length) {
    throw new Error(`[Yunus A2 Gold] ${label} has duplicate matching answers.`);
  }
};

export const enforceYunusA2AssessmentIntegrity = (
  chapter: LearningBlueprintChapter,
): LearningBlueprintChapter => {
  const assessmentItems = chapter.assessmentItems.map(item => item.id === 'yunus-a2-c3-quick'
    ? { ...item, exercise: chapter3Quick() }
    : item);

  assessmentItems.forEach((item) => {
    assertMatchingIntegrity(item.exercise.en, `${item.id} EN`);
    assertMatchingIntegrity(item.exercise.ar, `${item.id} AR`);
  });

  return { ...chapter, assessmentItems };
};
