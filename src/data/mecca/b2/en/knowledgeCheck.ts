import type { Exercise } from '../../../../types';

const feedback = {
  correct: 'Correct. Your answer is supported by the story evidence.',
  incorrect: 'Not yet. Return to the relevant chapter, find the evidence, and try again.',
};

const mc = (
  id: string,
  question: string,
  options: string[],
  correctAnswer: number,
  explanation: string,
): Exercise => ({
  id,
  type: 'multiple-choice',
  title: 'Knowledge Check',
  instructions: 'Choose the best answer supported by the story.',
  question,
  options,
  correctAnswer,
  explanation,
  feedback,
});

export const meccaB2ManualKnowledgeCheckExercises: Exercise[] = [
  mc(
    'me-b2-mk1',
    'What detail does the book use to show the scale of Quraysh long-distance trade?',
    ['The annual summer and winter caravans could include up to 2,500 camels', 'Every caravan consisted of exactly ten camels', 'Trade was limited to goods carried by individual travelers'],
    0,
    'Chapter 5 says the annual summer and winter journeys could use caravans numbering up to 2,500 camels, illustrating the scale of organized trade.'
  ),
  mc(
    'me-b2-mk2',
    'Which pair correctly reflects two destinations or connections in Quraysh trade?',
    ['Egypt was an important caravan destination, while Abyssinia was connected by sea', 'Constantinople was the only destination and sea trade did not exist', 'All trade remained inside the Arabian Peninsula'],
    0,
    'Chapter 5 identifies Egypt as an important destination and describes maritime trade relations with Abyssinia.'
  ),
  mc(
    'me-b2-mk3',
    'Besides high lending rates, what behaviors does the social-class chapter say also pushed people into debt?',
    ['Drinking and gambling', 'Pilgrimage and prayer', 'Poetry and genealogy'],
    0,
    'Chapter 7 adds that widespread drinking and gambling were among the reasons people repeatedly fell into debt.'
  ),
  mc(
    'me-b2-mk4',
    'How old was Prophet Muhammad (as) when he attended the meeting connected with Hilfü’l-Fudûl?',
    ['Twenty years old', 'Forty years old', 'Fifty-two years old'],
    0,
    'Chapter 8 states that Prophet Muhammad (as) was twenty years old when he attended the meeting that formed Hilfü’l-Fudûl.'
  ),
  mc(
    'me-b2-mk5',
    'Why did the chapter say many tribes placed special value on having male children?',
    ['Physical fighting strength and the resulting tribal protection and prestige were highly valued', 'Only sons were allowed to participate in trade fairs', 'Male children were required for pilgrimage'],
    0,
    'Chapter 10 connects the value placed on sons with physical strength, fighting capacity, tribal protection and respect among tribes.'
  ),
  mc(
    'me-b2-mk6',
    'Which statement is directly supported by the chapter on slavery?',
    ['Slaves were treated as economic property and could also serve as displays of wealth or protection in war', 'Slavery had no economic role in Mecca', 'Slaves were described as the city’s most politically powerful class'],
    0,
    'Chapter 11 describes slavery as an economic institution and says enslaved people were used for labor, personal service, displays of wealth and protection in war.'
  ),
  mc(
    'me-b2-mk7',
    'Which practice does the religious-life chapter describe alongside pilgrimage and idol worship?',
    ['People sought omens before taking action', 'People rejected every form of pilgrimage', 'Soothsayers were forbidden from making predictions'],
    0,
    'Chapter 12 says superstitious beliefs were widespread and that people sought omens before doing things.'
  ),
  mc(
    'me-b2-mk8',
    'What economic distinction does the Quraysh-and-power chapter say the Quran introduced?',
    ['Trade is lawful while usury is unlawful', 'Both trade and usury are unlawful', 'Usury is lawful while trade is unlawful'],
    0,
    'Chapter 14 contrasts the Quraysh view of usury with the Quranic distinction that trade is lawful and usury is unlawful.'
  ),
];
