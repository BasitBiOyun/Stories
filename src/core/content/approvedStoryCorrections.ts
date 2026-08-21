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
  { storyId: 'adam', level: 'B1', pageId: 1, from: 'HE told the angels that HE was going to create a human.', to: 'He told the angels that He was going to create a human.' },
  { storyId: 'adam', level: 'B1', pageId: 2, from: 'Later, HE taught him full knowledge for the goodness on earth.', to: 'Later, He taught him full knowledge for the goodness on earth.' },
  { storyId: 'adam', level: 'B1', pageId: 3, from: 'Iblis was arrogant, he thought he was more important and more valuable than Adam (pbuh), because he believed his origin was superior.', to: 'Iblis was arrogant. He thought he was more important and more valuable than Adam (pbuh) because he believed his origin was superior.' },
  { storyId: 'adam', level: 'B1', pageId: 3, from: 'fire was superior than clay.', to: 'fire was superior to clay.' },
  { storyId: 'adam', level: 'B1', pageId: 4, from: 'He didn’t want Allah to be nice with Adam (pbuh).', to: 'He didn’t want Allah to be nice to Adam (pbuh).' },
  { storyId: 'adam', level: 'B1', pageId: 4, from: 'He thought because of Adam (pbuh), Allah put him far from His help.', to: 'He thought Allah put him far from His help because of Adam (pbuh).' },
  { storyId: 'adam', level: 'B1', pageId: 4, from: 'Allah said to Adam (pbuh), Iblis was his enemy and told him to be careful about Iblis.', to: 'Allah told Adam (pbuh) that Iblis was his enemy and told him to be careful about Iblis.' },
  { storyId: 'adam', level: 'B1', pageId: 5, from: 'He whispered to them if they ate from that one tree, they would never die.', to: 'He whispered to them that if they ate from that one tree, they would never die.' },
  { storyId: 'adam', level: 'B1', pageId: 6, from: 'because sense of shame (hayâ) is', to: 'because a sense of shame (hayâ) is' },
  { storyId: 'adam', level: 'B1', pageId: 7, from: 'the biggest barrier to act the right way', to: 'the biggest barrier to acting the right way' },
  { storyId: 'adam', level: 'B1', pageId: 7, from: 'see between right and wrong, good and bad.', to: 'distinguish between right and wrong, good and bad.' },
  { storyId: 'adam', level: 'B1', pageId: 8, from: 'protect the nature', to: 'protect nature' },
  { storyId: 'adam', level: 'B1', pageId: 8, from: 'and protect from the wild.', to: 'and protect themselves from the wild.' },
  { storyId: 'adam', level: 'B1', pageId: 9, from: 'Allah never stopped sending messengers and sacred texts to remind Himself.', to: 'Allah never stopped sending messengers and sacred texts to remind people of Him.' },
  { storyId: 'adam', level: 'B1', pageId: 10, from: 'Qabil was a farmer, he worked on the farm and grew crops.', to: 'Qabil was a farmer. He worked on the farm and grew crops.' },
  { storyId: 'adam', level: 'B1', pageId: 10, from: 'healtiest', to: 'healthiest' },
  { storyId: 'adam', level: 'B1', pageId: 11, from: 'Qabil’s face became very dark with anger and said, “I will kill you.”', to: 'Qabil became very angry and said, “I will kill you.”' },
  { storyId: 'adam', level: 'B1', pageId: 11, from: 'I won’t fight back and harm you, you are my brother and I fear Allah.', to: 'I won’t fight back or harm you. You are my brother, and I fear Allah.' },
  { storyId: 'adam', level: 'B1', pageId: 11, from: 'his brother dead body', to: "his brother's dead body" },
  { storyId: 'adam', level: 'B1', pageId: 11, from: 'I don’t know what I should do with his dead body.', to: 'I don’t know what I should do with his dead body.”' },
  { storyId: 'adam', level: 'B1', pageId: 12, from: 'a father of his another children', to: 'the father of his other children' },
  { storyId: 'adam', level: 'B1', pageId: 12, from: 'turn away from Satan’s tricks, jealousy, to do good and avoid evil.', to: 'turn away from Satan’s tricks and jealousy, do good, and avoid evil.' },

  // Adam B2
  { storyId: 'adam', level: 'B2', pageId: 1, from: 'reality from which many lessons and morals we can take.', to: 'reality from which we can take many lessons and morals.' },
  { storyId: 'adam', level: 'B2', pageId: 1, from: 'The tale provides us a uniquely key and deeply philosophical understanding of life.', to: 'The tale provides us with a unique and deeply philosophical understanding of life.' },
  { storyId: 'adam', level: 'B2', pageId: 3, from: 'Allah’s spirit into Adam (pbuh) distinguishes him from the rest of the creatures, too.', to: 'Breathing Allah’s spirit into Adam (pbuh) distinguishes him from the rest of the creatures, too.' },
  { storyId: 'adam', level: 'B2', pageId: 4, from: 'mankind to maintain his worldly life', to: 'mankind to maintain its worldly life' },
  { storyId: 'adam', level: 'B2', pageId: 7, from: 'he felt his heart tighten and filled with pain', to: 'he felt his heart tighten and become filled with pain' },
  { storyId: 'adam', level: 'B2', pageId: 10, from: 'the story of humankind and his struggle against Satan on Earth.', to: 'the story of humankind and its struggle against Satan on Earth.' },
  { storyId: 'adam', level: 'B2', pageId: 13, from: 'but also he did not want his brother to be hurt.', to: 'but he also did not want his brother to be hurt.' },
  { storyId: 'adam', level: 'B2', pageId: 15, from: 'What is essentially being described here are the consequences of choosing evil. It arises from jealousy,', to: 'What is essentially being described here are the consequences of choosing evil. They arise from jealousy,' },
  { storyId: 'adam', level: 'B2', pageId: 15, from: 'Adam (pbuh) was fully in pain by the loss of his two sons.', to: 'Adam (pbuh) was deeply pained by the loss of his two sons.' },
  { storyId: 'adam', level: 'B2', pageId: 16, from: 'warned them by telling his own experience with Satan and of how Satan had tempted Qabil', to: 'warned them by telling them about his own experience with Satan and how Satan had tempted Qabil' },
  { storyId: 'adam', level: 'B2', pageId: 16, from: 'Adam (pbuh) encouraged his children that Allah would not leave man alone on Earth,', to: 'Adam (pbuh) told his children that Allah would not leave man alone on Earth,' },
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

  // Abraham B1
  { storyId: 'ibrahim', level: 'B1', pageId: 3, from: 'In a nearby mountain, he found a cave, sat there, and started thinking about Allah.', to: 'On a nearby mountain, he found a cave, sat there, and started thinking about Allah.' },
  { storyId: 'ibrahim', level: 'B1', pageId: 7, from: 'ask that statue, if it can speak!', to: 'ask that statue if it can speak!' },

  // Moses A2
  { storyId: 'musa', level: 'A2', pageId: 1, from: 'The king feared that this crowd took control of his kingdom.', to: 'The king feared that this crowd would take control of his kingdom.' },
  { storyId: 'musa', level: 'A2', pageId: 2, from: 'it did not harm any Children of Israel.', to: 'it did not harm any of the Children of Israel.' },
  { storyId: 'musa', level: 'A2', pageId: 5, from: 'the king was not god.', to: 'the king was not a god.' },
  { storyId: 'musa', level: 'A2', pageId: 12, from: 'He got out his arm.', to: 'He pulled his arm out.' },
  { storyId: 'musa', level: 'A2', pageId: 16, from: 'The story of Moses (pbuh) has many lessons to learn.', to: 'The story of Moses (pbuh) has many lessons for us to learn.' },

  // Moses B1
  { storyId: 'musa', level: 'B1', pageId: 1, from: 'He did not believe in Allah and saw himself as the god.', to: 'He did not believe in Allah and saw himself as a god.' },
  { storyId: 'musa', level: 'B1', pageId: 4, from: 'baby Moses was in her mother’s arms again.', to: 'baby Moses was in his mother’s arms again.' },
  { storyId: 'musa', level: 'B1', pageId: 5, from: 'He prayed to Allah : “ Forgive me!', to: 'He prayed to Allah: “Forgive me!' },
  { storyId: 'musa', level: 'B1', pageId: 5, from: 'This is of Satan’s doing” ( Surah Kasas: 15,16) Allah pardoned him', to: 'This is of Satan’s doing.” (Surah Kasas: 15–16) Allah pardoned him' },
  { storyId: 'musa', level: 'B1', pageId: 6, from: 'Moses was tired and thirsty, he was looking for water.', to: 'Moses was tired and thirsty. He was looking for water.' },
  { storyId: 'musa', level: 'B1', pageId: 10, from: 'When he got out his arm, it was shining white!', to: 'When he pulled his arm out, it was shining white!' },
  { storyId: 'musa', level: 'B1', pageId: 12, from: 'When the Pharaoh noticed they left the land,', to: 'When the Pharaoh noticed that they had left the land,' },
  { storyId: 'musa', level: 'B1', pageId: 13, from: 'when they were midway, Allah ordered the sea to close, the sea closed over them and they drowned.', to: 'when they were midway, Allah ordered the sea to close. The sea closed over them, and they drowned.' },
  { storyId: 'musa', level: 'B1', pageId: 13, from: 'The story of Moses (pbuh) has many lessons to learn.', to: 'The story of Moses (pbuh) has many lessons for us to learn.' },

  // Moses B2
  { storyId: 'musa', level: 'B2', pageId: 1, from: 'Prophet Jacob (Ya’kub (pbuh))', to: 'Prophet Jacob (Ya’kub) (pbuh)' },
  { storyId: 'musa', level: 'B2', pageId: 1, from: 'around 1700 BC (BC: Before Christ (Milâttan Önce), the Israelites settled', to: 'around 1700 BC (BC: Before Christ [Milâttan Önce]), the Israelites settled' },
  { storyId: 'musa', level: 'B2', pageId: 1, from: 'the Copts (Copts (Kıpti): ancient Egyptian people),', to: 'the Copts (Kıpti: ancient Egyptian people),' },
  { storyId: 'musa', level: 'B2', pageId: 4, from: 'Coptic Language (Kıptîce): The language spoken by the ancient people of Egypt) The journey', to: 'Coptic Language (Kıptîce): The language spoken by the ancient people of Egypt). The journey' },
  { storyId: 'musa', level: 'B2', pageId: 5, from: 'He oppressed the Children of Israel (known as the offspring of Prophet Jacob (Ya’kub (pbuh)).', to: 'He oppressed the Children of Israel, known as the offspring of Prophet Jacob (Ya’kub) (pbuh).' },
  { storyId: 'musa', level: 'B2', pageId: 8, from: 'Allah gave Moses with perfect health, strength, wisdom, and knowledge.', to: 'Allah gave Moses perfect health, strength, wisdom, and knowledge.' },
  { storyId: 'musa', level: 'B2', pageId: 15, from: 'for my sheep.”Allah asked', to: 'for my sheep.” Allah asked' },
  { storyId: 'musa', level: 'B2', pageId: 16, from: 'This miracle of staff, together with the miracle of the white hand given to Prophet Moses, were two great miracles.', to: 'The staff and the white hand were two great miracles given to Prophet Moses.' },
  { storyId: 'musa', level: 'B2', pageId: 18, from: 'Are you not that Moses who we took from the Nile', to: 'Are you not that Moses whom we took from the Nile' },
  { storyId: 'musa', level: 'B2', pageId: 18, from: 'upon who our charity and wealth were showered?', to: 'upon whom our charity and wealth were showered?”' },

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
  { storyId: 'yunusEmre', level: 'B1', pageId: 1, from: 'Sûfî is a person who aims to get closer to Allah by following Islamic mysticism.', to: 'A Sûfî is a person who aims to get closer to Allah by following Islamic mysticism.' },
  { storyId: 'yunusEmre', level: 'B1', pageId: 2, from: 'It is not too simple, but also not too complex either.', to: 'It is neither too simple nor too complex.' },
  { storyId: 'yunusEmre', level: 'B1', pageId: 7, from: 'These shaykhs trained dervishes on their teachings.', to: 'These shaykhs trained dervishes in their teachings.' },
  { storyId: 'yunusEmre', level: 'B1', pageId: 8, from: 'Creator is the true and only reality.', to: 'The Creator is the true and only reality.' },
  { storyId: 'yunusEmre', level: 'B1', pageId: 12, from: 'bad habits like being arrogant, stingy, greedy, gossiper, selfish, or jealous.', to: 'bad habits like being arrogant, stingy, greedy, selfish, or jealous, and gossiping.' },
  { storyId: 'yunusEmre', level: 'B1', pageId: 13, from: 'In another verse he talks about “patience”, he says:', to: 'In another verse, he talks about “patience” and says:' },

  // Yunus Emre B2
  { storyId: 'yunusEmre', level: 'B2', pageId: 1, from: 'Sûfî is a person who seeks closeness to Allah by adopting Islamic mysticism.', to: 'A Sûfî is a person who seeks closeness to Allah by adopting Islamic mysticism.' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 2, from: 'For, his style is neither so simple nor so complex.', to: 'His style is neither so simple nor so complex.' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 2, from: 'Thus, his works have both literary value and are easy to understand.', to: 'Thus, his works both have literary value and are easy to understand.' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 2, from: 'However, his education was not limited to madrasas, he also studied both divine love and morals at the tekke,', to: 'However, his education was not limited to madrasas; he also studied both divine love and morals at the tekke,' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 2, from: 'under the guidance of a sheikh, spiritual tutor.', to: 'under the guidance of a sheikh, a spiritual tutor.' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 2, from: 'tekkes were not just an institution that offers Sûfî training but they were also important civil society organizations', to: 'tekkes were not just institutions that offered Sûfî training; they were also important civil society organizations' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 4, from: 'lives of people in Anatolia were totally turned upside down.', to: 'the lives of people in Anatolia were totally turned upside down.' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 6, from: 'the Seljuks became a dependent state of the Mongols.', to: 'the Seljuk state became dependent on the Mongols.' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 6, from: 'as if they were Mongols’ civil officials.', to: 'as if they were civil officials of the Mongols.' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 7, from: 'These shaykhs raised dervishes on their teachings;', to: 'These shaykhs trained dervishes in their teachings;' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 8, from: 'Creator is the true and only reality.', to: 'The Creator is the true and only reality.' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 9, from: 'The ultimate purpose of humanity is to reach the unity, Allah.', to: 'The ultimate purpose of humanity is to reach unity with Allah.' },
  { storyId: 'yunusEmre', level: 'B2', pageId: 10, from: 'destroying Allah’s house, Yunus says:', to: 'destroying Allah’s house. Yunus says:' },
] as const;

if (APPROVED_ENGLISH_STORY_CORRECTIONS.length !== 112) {
  throw new Error(`[Approved Story Corrections] Expected 112 corrections, found ${APPROVED_ENGLISH_STORY_CORRECTIONS.length}.`);
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