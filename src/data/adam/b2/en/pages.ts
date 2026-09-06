import { PageData } from '../../../../types';
import { adamB2Pages as adamB2PagesBase } from './pagesBase';
import { adamB2EnStoryReplacementsPart1, adamB2EnStoryTitlesPart1 } from './storyCorrectionsPart1';
import { adamB2EnStoryReplacementsPart2, adamB2EnStoryTitlesPart2 } from './storyCorrectionsPart2';

const replacements: Record<number, [string, string][]> = {
  ...adamB2EnStoryReplacementsPart1,
  ...adamB2EnStoryReplacementsPart2
};

const titles: Record<number, string> = {
  ...adamB2EnStoryTitlesPart1,
  ...adamB2EnStoryTitlesPart2
};

const applyReplacements = (text: string, items: [string, string][] = []) =>
  items.reduce((current, [from, to]) => current.replace(from, to), text);

export const adamB2Pages: PageData[] = adamB2PagesBase.map((page) => {
  if (page.type !== 'story') return page;

  const content = applyReplacements(page.content || '', replacements[page.id]);
  const title = titles[page.id] || page.title;

  return { ...page, title, content };
});
