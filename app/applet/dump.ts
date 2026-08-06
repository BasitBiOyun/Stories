import { abrahamB2Pages } from './src/data/abraham/b2/en/pages';
import fs from 'fs';

abrahamB2Pages.slice(11, 36).forEach(ch => {
  console.log('--- CHAPTER ' + ch.id);
  console.log('CONTENT:', ch.content);
  console.log('HOTSPOTS:', ch.hotspots?.map(h => h.title + ': ' + h.description).join(' | '));
  console.log('EXERCISE:', ch.exercises?.[0]?.question);
});
