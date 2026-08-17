import type { Level, PageData } from '../../types';
import type { BookPair, StoryId } from './contracts';

interface ApprovedStoryCorrection {
  storyId: StoryId;
  level: Level;
  pageId: number;
  from: string;
  to: string;
}

const APPROVED_ENGLISH_STORY_CORRECTIONS: readonly ApprovedStoryCorrection[] = [
  // Adam A2
  { storyId: 'adam', level: 'A2', pageId: 3, from: 'because with this knowledge human can do good and stop bad.', to: 'because with this knowledge humans can do good and stop bad.' },
  { storyId: 'adam', level: 'A2', pageId: 8, from: 'healtiest', to: 'healthiest' },

  // Adam B1
  { storyId: 'adam', level: 'B1', pageId: 3, from: 'fire was superior than clay.', to: 'fire was superior to clay.' },
  { storyId: 'adam', level: 'B1', pageId: 6, from: 'because sense of shame (hayâ) is', to: 'because a sense of shame (hayâ) is' },
  { storyId: 'adam', level: 'B1', pageId: 7, from: 'the biggest barrier to act the right way', to: 'the biggest barrier to acting the right way' },
  { storyId: 'adam', level: 'B1', pageId: 9, from: 'Allah never stopped sending messengers and sacred texts to remind Himself.', to: 'Allah never stopped sending messengers and sacred texts to remind people of Him.' },
  { storyId: 'adam', level: 'B1', pageId: 10, from: 'healtiest', to: 'healthiest' },
  { storyId: 'adam', level: 'B1', pageId: 11, from: 'his brother dead body', to: "his brother's dead body" },
  { storyId: 'adam', level: 'B1', pageId: 11, from: 'I don’t know what I should do with his dead body.', to: 'I don’t know what I should do with his dead body.”' },

  // Adam B2
  { storyId: 'adam', level: 'B2', pageId: 1, from: 'provides us a uniquely key', to: 'provides us with a uniquely key' },
  { storyId: 'adam', level: 'B2', pageId: 7, from: 'he felt his heart tighten and was filled with pain', to: 'he felt his heart tighten and become filled with pain' },
  { storyId: 'adam', level: 'B2', pageId: 17, from: 'Satan, too acknowledges', to: 'Satan, too, acknowledges' },
  { storyId: 'adam', level: 'B2', pageId: 17, from: 'beacuse', to: 'because' },

  // Abraham A2
  { storyId: 'ibrahim', level: 'A2', pageId: 7, from: 'It was this god there, the biggest one broke all the stones.', to: 'It was this god there—the biggest one—that broke all the stones.' },
  { storyId: 'ibrahim', level: 'A2', pageId: 8, from: 'He placed him on a catapult.', to: 'They placed him on a catapult.' },
  { storyId: 'ibrahim', level: 'A2', pageId: 9, from: 'they did not change their mind.', to: 'they did not change their minds.' },

  // Moses A2
  { storyId: 'musa', level: 'A2', pageId: 2, from: 'it did not harm any Children of Israel.', to: 'it did not harm any of the Children of Israel.' },
  { storyId: 'musa', level: 'A2', pageId: 5, from: 'the king was not god.', to: 'the king was not a god.' },
  { storyId: 'musa', level: 'A2', pageId: 12, from: 'He got out his arm.', to: 'He pulled his arm out.' },

  // Moses B1
  { storyId: 'musa', level: 'B1', pageId: 4, from: 'baby Moses was in her mother’s arms again.', to: 'baby Moses was in his mother’s arms again.' },
  { storyId: 'musa', level: 'B1', pageId: 10, from: 'When he got out his arm, it was shining white!', to: 'When he pulled his arm out, it was shining white!' },

  // Moses B2
  { storyId: 'musa', level: 'B2', pageId: 5, from: 'He oppressed the Children of Israel (known as the offspring of Prophet Jacob (Ya’kub (pbuh)).', to: 'He oppressed the Children of Israel, known as the offspring of Prophet Jacob (Ya’kub) (pbuh).' },
  { storyId: 'musa', level: 'B2', pageId: 8, from: 'Allah gave Moses with perfect health, strength, wisdom, and knowledge.', to: 'Allah gave Moses perfect health, strength, wisdom, and knowledge.' },
  { storyId: 'musa', level: 'B2', pageId: 18, from: 'Are you not that Moses who we took from the Nile', to: 'Are you not that Moses whom we took from the Nile' },
  { storyId: 'musa', level: 'B2', pageId: 18, from: 'upon who our charity and wealth were showered?', to: 'upon whom our charity and wealth were showered?' },

  // Yunus Emre A2
  { storyId: 'yunusEmre', level: 'A2', pageId: 7, from: 'the most beautiful bunch of flowers. All the dervishes', to: 'the most beautiful bunch of flowers.” All the dervishes' },
  { storyId: 'yunusEmre', level: 'A2', pageId: 7, from: 'Yunus replied, “My teacher” “I walked around the fields', to: 'Yunus replied, “My teacher, I walked around the fields' },
  { storyId: 'yunusEmre', level: 'A2', pageId: 8, from: '‘Come, dervish Yunus.', to: '“Come, dervish Yunus.' },

  // Yunus Emre B1
  { storyId: 'yunusEmre', level: 'B1', pageId: 8, from: 'Creator is the true and only reality.', to: 'The Creator is the true and only reality.' },

  // Yunus Emre B2
  { storyId: 'yunusEmre', level: 'B2', pageId: 2, from: 'tekkes were not just an institution that offers Sûfî training but they were also important civil society organizations', to: 'tekkes were not just institutions that offered Sûfî training; they were also important civil society organizations' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 4, from: 'lives of people in Anatolia were totally turned upside down.', to: 'the lives of people in Anatolia were totally turned upside down.' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 8, from: 'Creator is the true and only reality.', to: 'The Creator is the true and only reality.' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 10, from: 'destroying Allah’s house, Yunus says:', to: 'destroying Allah’s house. Yunus says:' },
] as const;

if (APPROVED_ENGLISH_STORY_CORRECTIONS.length !== 33) {
  throw new Error(`[Approved Story Corrections] Expected 33 corrections, found ${APPROVED_ENGLISH_STORY_CORRECTIONS.length}.`);
}

const rulesFor = (storyId: StoryId, level: Level, pageId: number) =>
  APPROVED_ENGLISH_STORY_CORRECTIONS.filter(rule => rule.storyId === storyId && rule.level === level && rule.pageId === pageId);

const applyRules = (
  content: string,
  rules: readonly ApprovedStoryCorrection[],
  storyId: StoryId,
  level: Level,
  pageId: number,
): string => rules.reduce((current, rule) => {
  if (current.includes(rule.from)) return current.replace(rule.from, rule.to);
  if (current.includes(rule.to)) return current;
  throw new Error(`[Approved Story Corrections] ${storyId}:${level}:chapter-${pageId} source phrase not found: ${rule.from}`);
}, content);

const restoreRules = (content: string, rules: readonly ApprovedStoryCorrection[]): string =>
  [...rules].reverse().reduce((current, rule) => current.replace(rule.to, rule.from), content);

const correctEnglishPage = (storyId: StoryId, level: Level, page: PageData): PageData => {
  if (page.type !== 'story') return page;
  const rules = rulesFor(storyId, level, page.id);
  if (!rules.length) return page;
  const content = applyRules(page.content, rules, storyId, level, page.id);
  return content === page.content ? page : { ...page, content };
};

/** Applies only the 33 user-approved English prose corrections from the August 2026 audit. */
export const applyApprovedEnglishStoryCorrections = (
  storyId: StoryId,
  level: Level,
  pair: BookPair,
): BookPair => ({
  ...pair,
  en: {
    ...pair.en,
    pages: pair.en.pages.map(page => correctEnglishPage(storyId, level, page)),
  },
});

/** Restores corrected prose to the pre-audit form only for canonical-baseline comparison. */
export const restoreApprovedEnglishStoryCorrectionsForBaseline = (
  storyId: StoryId,
  level: Level,
  pageId: number,
  content: string,
): string => restoreRules(content, rulesFor(storyId, level, pageId));
