import { PageData } from '../../../../types';
import { adamB2PagesAr as adamB2PagesArBase } from './pagesBase';
import { adamB2ArStoryReplacements, adamB2ArStoryTitles } from './storyCorrections';

const applyReplacements = (text: string, items: [string, string][] = []) =>
  items.reduce((current, [from, to]) => current.replace(from, to), text);

export const adamB2PagesAr: PageData[] = adamB2PagesArBase.map((page) => {
  if (page.type !== 'story') return page;

  const content = applyReplacements(page.content || '', adamB2ArStoryReplacements[page.id]);
  const title = adamB2ArStoryTitles[page.id] || page.title;

  return { ...page, title, content };
});
