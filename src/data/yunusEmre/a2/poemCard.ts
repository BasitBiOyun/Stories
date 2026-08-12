import type { PageData } from '../../../types';

const dervishVerseEnglish = `A dervish needs a wounded heart and eyes full of tears.

He needs to be as easy going as a sheep.

You can’t be a dervish.

He must be without hands when someone hits him.

He must be tongueless when people make fun of him.

A dervish needs to be without any desires (selfless).

You can’t be a dervish.`;

const dervishVerseCard = `[POEM]
English:
“A dervish needs a wounded heart and eyes full of tears.
He needs to be as easy going as a sheep.
You can’t be a dervish.
He must be without hands when someone hits him.
He must be tongueless when people make fun of him.
A dervish needs to be without any desires (selfless).
You can’t be a dervish.”
Turkish:
Derviş bağrı baş gerek
Gözü dolu yaş gerek
Koyundan yavaş gerek
Sen derviş olamazsın
Döğene elsiz gerek
Söğene dilsiz gerek
Derviş gönülsüz gerek
Sen derviş olamazsın
[/POEM]`;

/**
 * Presentation-only A2 poem treatment. The locked story source remains intact;
 * the existing English verse is wrapped as the same bilingual poem card used
 * elsewhere in Yunus Emre, with the attested Turkish verse on the reverse.
 */
export const applyYunusA2PoemCard = (pages: PageData[]): PageData[] => pages.map((page) => {
  if (page.type !== 'story' || page.id !== 3 || !page.content?.includes(dervishVerseEnglish)) {
    return page;
  }

  return {
    ...page,
    content: page.content.replace(dervishVerseEnglish, dervishVerseCard),
  };
});
