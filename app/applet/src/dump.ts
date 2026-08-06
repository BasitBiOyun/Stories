import { abrahamB2Pages } from './data/abraham/b2/en/pages.js';

abrahamB2Pages.slice(11, 36).forEach(ch => {
  console.log('--- CHAPTER ' + ch.id);
  console.log('EXERCISE:', ch.exercises?.[0]?.question);
});
