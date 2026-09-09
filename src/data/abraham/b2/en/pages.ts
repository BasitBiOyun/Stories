import type { Exercise, PageData } from '../../../../types';
import {
  abrahamB2FinalChallengeExercises,
  abrahamB2KnowledgeCheckExercises,
  abrahamB2QuickChallenges,
  abrahamB2VocabularyChallengePairs,
} from './exercises';
import { abrahamB2LanguageFocusPart1 } from './languageFocus';
import { abrahamB2LanguageFocusPart2 } from './languageFocus2';
import { abrahamB2LanguageFocusPart3 } from './languageFocus3';

const rawAbrahamB2Pages: PageData[] = [
// c01a
//__C01__
// c01b
// c02a
//__C02__
// c02b
// c03a
//__C03__
// c03b
// c04a
//__C04__
// c04b
// c05a
//__C05__
// c05b
// c06a
//__C06__
// c06b
// c07a
//__C07__
// c07b
// c08a
//__C08__
// c08b
// c09a
//__C09__
// c09b
// c10a
//__C10__
// c10b
// c11a
//__C11__
// c11b
];

export type AbrahamB2VocabSeed = readonly [en: string, ar: string, enDefinition: string, arDefinition: string];
const v = (en: string, ar: string, enDefinition: string, arDefinition: string): AbrahamB2VocabSeed => [en, ar, enDefinition, arDefinition];
export const abrahamB2CanonicalVocabulary: Record<number, readonly AbrahamB2VocabSeed[]> = {
// k01a
//__K01__
// k01b
// k02a
//__K02__
// k02b
// k03a
//__K03__
// k03b
// k04a
//__K04__
// k04b
};

// t01a
//__T01__
// t01b
// t02a
const STORY_IDS = new Set(Array.from({ length: 35 }, (_, index) => index + 1));
const englishLanguageFocus: Record<number, Exercise[]> = {
  ...abrahamB2LanguageFocusPart1,
  ...abrahamB2LanguageFocusPart2,
  ...abrahamB2LanguageFocusPart3,
};

const imageTokens = [
  '43d9ebc7-48bf-4186-b63b-67bc0e802ccb','76b855a8-e11a-4cb0-b253-66dd9fbdaa49','f4afdb01-ccbe-4c95-9d16-69c26e703deb','7ba07b75-fcfb-4638-aba5-6f39c7926a48','57f04b55-8f74-40a7-be8c-3cb930c389a5','1bd63548-b8cf-4771-bce4-e6257f83edb7','2747cb7b-e6dd-4f64-a0f7-e229fb1f4998','b0ebd110-9850-4988-a3cb-eb3a9974269a','fca90286-8c0e-4b54-873d-e690f315f907','813a7fab-1e6f-4972-b23e-9e26fd9dec92','31c4c791-2a72-46a1-b54c-a10fe39472db','66045d4f-213c-4096-8776-df44861d0ea5','66892559-503c-4a8f-a4ab-2192bbe5851c','a806d7bc-e4ff-41b0-bc59-5192dce9440f','adb653da-0511-40dc-9db5-02c362fb3b20','e290f82a-46e4-4fd5-ad84-aa98df6f87cf','f3799f77-fe5d-4f3d-8f93-e90c9b1ef428','014cbefa-f28e-4915-a830-0256099d9a24','8a010ead-3641-4729-b9ee-aefcbed2be7b','46806189-2bf4-4bf7-b1c7-a8d934b2c191','bddaf258-5e76-44c4-a78a-36db4249d291','5b890972-155f-4ceb-a5ad-0027cc3524d4','3e850ea7-1b41-4439-bfb9-8c7fa2b4ed25','e809ade7-76af-453c-b299-cd151511e886','9cc99be9-686a-4898-bfec-1b3dd6ecf95b','13a18e7a-ab1f-4ce3-8d62-38b0a724aead','68966648-2077-4abf-80dd-d62eee99796e','35ed5958-0500-41a6-a170-e549c4a069f5','9d7364c7-1103-4862-af19-814cdf3a8384','1f01566b-ffc3-4fc0-be30-a13c92a9365e','258e6e7d-cfec-4f9a-af48-0a3ec52237f3','8e36da5a-2c1c-4086-9649-e34ed6586a30','e2eb0e82-eb65-45a2-b9fb-98c88bf7450e','48f70835-c4b4-4c22-ba7d-b7326278970e','580c305e-c318-42f7-aae9-ec2f6b8d306b',
] as const;

export const abrahamB2ImageUrl = (chapter: number) => `https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Fimages%2Fabraham_b2_ch${chapter}-clean.png?alt=media&token=${imageTokens[chapter - 1]}`;

const findEnglishSurface = (content: string, needle: string): string | null => {
  const index = content.toLocaleLowerCase('en').indexOf(needle.toLocaleLowerCase('en'));
  return index < 0 ? null : content.slice(index, index + needle.length);
};

export const abrahamB2HotspotCoords = (chapter: number) => {
  const leftX = 21 + ((chapter * 7) % 22);
  const rightX = 59 + ((chapter * 11) % 21);
  const firstY = 28 + ((chapter * 13) % 37);
  let secondY = 31 + ((chapter * 17) % 38);
  if (Math.abs(firstY - secondY) < 9) secondY = secondY < 52 ? secondY + 14 : secondY - 14;
  return [{ x: leftX, y: firstY }, { x: rightX, y: secondY }] as const;
};

const englishCanonicalGlossary = Object.values(abrahamB2CanonicalVocabulary).flatMap(items =>
  items.map(([word, _arWord, definition]) => ({ word, definition }))
);

const cleanEnglishPage = (page: PageData): PageData => {
  const { exercises: _exercises, sequencingItems: _sequencingItems, vocabularyPairs: _vocabularyPairs, ...base } = page;
  if (page.id === 36) return { ...base, type: 'quiz', title: 'B2 Knowledge Check', content: 'Check your understanding of the complete Prophet Abraham B2 story.', image: '', audioUrl: '', vocabulary: undefined, hotspots: undefined, animatedWords: undefined, syncPoints: undefined, timedChunks: undefined };
  if (page.id === 37) return { ...base, type: 'exercises', title: 'B2 Retrieval Review', content: 'Retrieve, reconnect, and use evidence from across the complete story.', image: '' };
  if (page.id === 38) return { ...base, type: 'vocabulary-match', title: 'B2 Vocabulary Challenge', content: 'Match ten meaning-bearing story terms with their precise meanings.', image: '', vocabulary: undefined, animatedWords: undefined };
  if (page.id === 39) return { ...base, type: 'glossary', title: 'B2 Story Glossary', image: '', animatedWords: undefined, syncPoints: undefined, timedChunks: undefined };
  if (page.id === 40) return { ...base, type: 'final-challenge', title: 'Final Challenge', content: 'Demonstrate whole-book B2 mastery through analysis, evidence, comparison, and synthesis.', image: '' };
  return base;
};

const standardizeEnglishStory = (page: PageData): PageData => {
  if (!STORY_IDS.has(page.id)) return page;
  const resolved = (abrahamB2CanonicalVocabulary[page.id] ?? []).map(([enNeedle, _arNeedle, enDefinition]) => {
    const word = findEnglishSurface(page.content ?? '', enNeedle);
    return word ? { word, definition: enDefinition } : null;
  }).filter((item): item is { word: string; definition: string } => item !== null).slice(0, 5);
  if (resolved.length !== 5) console.warn(`[Abraham B2 EN] Chapter ${page.id} resolved ${resolved.length}/5 canonical vocabulary items.`);
  const coordinates = abrahamB2HotspotCoords(page.id);
  const hotspots = resolved.slice(0, 2).map((item, index) => ({ id: `ab-b2-runtime-hs-${page.id}-${index + 1}`, ...coordinates[index], title: item.word, description: item.definition }));
  return { ...page, image: abrahamB2ImageUrl(page.id), vocabulary: resolved, hotspots, animatedWords: undefined, syncPoints: undefined, timedChunks: undefined };
};

export const abrahamB2Pages: PageData[] = rawAbrahamB2Pages.map(cleanEnglishPage).map(standardizeEnglishStory).map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = englishLanguageFocus[page.id];
    return { ...page, exercises: [abrahamB2QuickChallenges[page.id]], ...(languageFocusExercises ? { languageFocusExercises } : {}) };
  }
  if (page.id === 36) return { ...page, exercises: abrahamB2KnowledgeCheckExercises };
  if (page.id === 37) return { ...page, title: 'B2 Language Review', content: 'Review and use the source, stance, time, cohesion and discourse patterns developed across all thirty-five chapters.', exercises: abrahamB2LanguageReviewExercises };
  if (page.id === 38) return { ...page, vocabularyPairs: abrahamB2VocabularyChallengePairs };
  if (page.id === 39) return { ...page, vocabulary: englishCanonicalGlossary };
  if (page.id === 40) return { ...page, exercises: englishFinalChallenge };
  return page;
});

export const pages: PageData[] = abrahamB2Pages;
// t02b