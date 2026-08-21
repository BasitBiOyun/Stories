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
  { storyId: 'adam', level: 'A2', pageId: 4, from: 'He didn’t want Allah to be nice with Adam.', to: 'He didn’t want Allah to be nice to Adam.' },
  { storyId: 'adam', level: 'A2', pageId: 4, from: 'Iblis thought because of Adam, Allah put him far from His love.', to: 'Iblis thought Allah put him far from His love because of Adam.' },
  { storyId: 'adam', level: 'A2', pageId: 4, from: 'HE told Adam and Eve not to go near one tree.', to: 'He told Adam and Eve not to go near one tree.' },
  { storyId: 'adam', level: 'A2', pageId: 6, from: 'protect the nature', to: 'protect nature' },
  { storyId: 'adam', level: 'A2', pageId: 7, from: 'Adam and Eve lived on earth many years.', to: 'Adam and Eve lived on earth for many years.' },
  { storyId: 'adam', level: 'A2', pageId: 7, from: 'We are all one of their children.', to: 'We are all their children.' },
  { storyId: 'adam', level: 'A2', pageId: 8, from: 'Qabil was a farmer, he worked on the farm and grew crops.', to: 'Qabil was a farmer. He worked on the farm and grew crops.' },
  { storyId: 'adam', level: 'A2', pageId: 8, from: 'healtiest', to: 'healthiest' },
  { storyId: 'adam', level: 'A2', pageId: 9, from: 'Qabil’s face became very dark with anger and said “I will kill you”.', to: 'Qabil became very angry and said, “I will kill you.”' },
  { storyId: 'adam', level: 'A2', pageId: 9, from: 'When Habil heard this, he said “I won’t fight back and harm you, you are my brother and I fear Allah.”', to: 'When Habil heard this, he said, “I won’t fight back or harm you. You are my brother, and I fear Allah.”' },
  { storyId: 'adam', level: 'A2', pageId: 9, from: 'But also he started to panic.', to: 'But he also started to panic.' },
  { storyId: 'adam', level: 'A2', pageId: 9, from: 'He said “I killed my brother, I did the worst thing in life, now I don’t know what I should do with his dead body.”', to: 'He said, “I killed my brother. I did the worst thing in life. Now I don’t know what I should do with his dead body.”' },
  { storyId: 'adam', level: 'A2', pageId: 9, from: 'Then, Allah sent a crow, it landed on the ground near Qabil and started digging it.', to: 'Then, Allah sent a crow. It landed on the ground near Qabil and started digging the ground.' },
  { storyId: 'adam', level: 'A2', pageId: 9, from: 'Qabil cried and said “I am worse than this crow. I cannot hide my brother’s dead body.”', to: 'Qabil cried and said, “I am worse than this crow. I cannot hide my brother’s dead body.”' },
  { storyId: 'adam', level: 'A2', pageId: 10, from: 'a father of his another children', to: 'the father of his other children' },

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
  { storyId: 'adam', level: 'B2', pageId: 7, from: 'he felt his heart tighten and filled with pain', to: 'he felt his heart tighten and become filled with pain' },
  { storyId: 'adam', level: 'B2', pageId: 17, from: 'Satan, too acknowledges', to: 'Satan, too, acknowledges' },
  { storyId: 'adam', level: 'B2', pageId: 17, from: 'beacuse', to: 'because' },

  // Abraham A2
  { storyId: 'ibrahim', level: 'A2', pageId: 2, from: 'It has big ears. His ears are bigger than ours.', to: 'It has big ears. Its ears are bigger than ours.' },
  { storyId: 'ibrahim', level: 'A2', pageId: 3, from: 'In a nearby mountain, he found a cave.', to: 'On a nearby mountain, he found a cave.' },
  { storyId: 'ibrahim', level: 'A2', pageId: 4, from: 'It is bigger and bright.', to: 'It is bigger and brighter.' },
  { storyId: 'ibrahim', level: 'A2', pageId: 7, from: 'It was this god there, the biggest one broke all the stones.', to: 'The biggest god over there broke all the stones.' },
  { storyId: 'ibrahim', level: 'A2', pageId: 7, from: 'Ask it, if it can speak!', to: 'Ask it if it can speak!' },
  { storyId: 'ibrahim', level: 'A2', pageId: 8, from: 'He placed him on a catapult.', to: 'They placed him on a catapult.' },
  { storyId: 'ibrahim', level: 'A2', pageId: 9, from: 'they did not change their mind.', to: 'they did not change their minds.' },
  { storyId: 'ibrahim', level: 'A2', pageId: 12, from: 'But it was useless, there was no water', to: 'But it was useless. There was no water' },

  // Moses A2
  { storyId: 'musa', level: 'A2', pageId: 1, from: 'The king feared that this crowd took control of his kingdom.', to: 'The king feared that this crowd would take control of his kingdom.' },
  { storyId: 'musa', level: 'A2', pageId: 2, from: 'it did not harm any Children of Israel.', to: 'it did not harm any of the Children of Israel.' },
  { storyId: 'musa', level: 'A2', pageId: 5, from: 'the king was not god.', to: 'the king was not a god.' },
  { storyId: 'musa', level: 'A2', pageId: 12, from: 'He got out his arm.', to: 'He pulled his arm out.' },
  { storyId: 'musa', level: 'A2', pageId: 16, from: 'The story of Moses (pbuh) has many lessons to learn.', to: 'The story of Moses (pbuh) has many lessons for us to learn.' },

  // Moses B1
  { storyId: 'musa', level: 'B1', pageId: 4, from: 'baby Moses was in her mother’s arms again.', to: 'baby Moses was in his mother’s arms again.' },
  { storyId: 'musa', level: 'B1', pageId: 10, from: 'When he got out his arm, it was shining white!', to: 'When he pulled his arm out, it was shining white!' },

  // Moses B2
  { storyId: 'musa', level: 'B2', pageId: 5, from: 'He oppressed the Children of Israel (known as the offspring of Prophet Jacob (Ya’kub (pbuh)).', to: 'He oppressed the Children of Israel, known as the offspring of Prophet Jacob (Ya’kub) (pbuh).' },
  { storyId: 'musa', level: 'B2', pageId: 8, from: 'Allah gave Moses with perfect health, strength, wisdom, and knowledge.', to: 'Allah gave Moses perfect health, strength, wisdom, and knowledge.' },
  { storyId: 'musa', level: 'B2', pageId: 18, from: 'Are you not that Moses who we took from the Nile', to: 'Are you not that Moses whom we took from the Nile' },
  { storyId: 'musa', level: 'B2', pageId: 18, from: 'upon who our charity and wealth were showered?', to: 'upon whom our charity and wealth were showered?' },

  // Mecca A2
  { storyId: 'mecca', level: 'A2', pageId: 1, from: 'Bilal ibn Rabah was one of the first seven people that openly said he was a Muslim in Mecca.', to: 'Bilal ibn Rabah was one of the first seven people to say openly that he was a Muslim in Mecca.' },

  // Yunus Emre A2
  { storyId: 'yunusEmre', level: 'A2', pageId: 1, from: 'Dervishes practised to be a good person with moral values under the guidance of a teacher at dervish houses.', to: 'Dervishes practised being good people with moral values under the guidance of a teacher at dervish houses.' },
  { storyId: 'yunusEmre', level: 'A2', pageId: 2, from: 'they forgave and tolerated the others.', to: 'they forgave and tolerated others.' },
  { storyId: 'yunusEmre', level: 'A2', pageId: 4, from: 'willing to serve the others and the creation.', to: 'willing to serve others and all creation.' },
  { storyId: 'yunusEmre', level: 'A2', pageId: 5, from: 'One day he asked the following question to Yunus:', to: 'One day he asked Yunus the following question:' },
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

if (APPROVED_ENGLISH_STORY_CORRECTIONS.length !== 59) {
  throw new Error(`[Approved Story Corrections] Expected 59 corrections, found ${APPROVED_ENGLISH_STORY_CORRECTIONS.length}.`);
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

/** Applies only the user-approved English prose corrections from the August 2026 audit. */
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