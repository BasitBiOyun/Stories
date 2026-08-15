import type { PageData } from '../../src/types';
import { adamB2PagesBeforeHotspotSourceLockEn, adamB2PagesBeforeHotspotSourceLockAr } from '../../src/data/adam/b2';
import { abrahamB2PagesBeforeHotspotSourceLockEn, abrahamB2PagesBeforeHotspotSourceLockAr } from '../../src/data/abraham/b2';
import { mosesB2PagesBeforeHotspotSourceLockEn, mosesB2PagesBeforeHotspotSourceLockAr } from '../../src/data/moses/b2';
import { meccaB2PagesBeforeHotspotSourceLockEn, meccaB2PagesBeforeHotspotSourceLockAr } from '../../src/data/mecca/b2';
import { yunusB2PagesBeforeHotspotSourceLockEn, yunusB2PagesBeforeHotspotSourceLockAr } from '../../src/data/yunusEmre/b2';

type Case = {
  label: string;
  en: PageData[];
  ar: PageData[];
  storyIds: number[];
};

const cases: Case[] = [
  { label: 'Adam B2', en: adamB2PagesBeforeHotspotSourceLockEn, ar: adamB2PagesBeforeHotspotSourceLockAr, storyIds: Array.from({ length: 17 }, (_, i) => i + 1) },
  { label: 'Abraham B2', en: abrahamB2PagesBeforeHotspotSourceLockEn, ar: abrahamB2PagesBeforeHotspotSourceLockAr, storyIds: Array.from({ length: 35 }, (_, i) => i + 1) },
  { label: 'Moses B2', en: mosesB2PagesBeforeHotspotSourceLockEn, ar: mosesB2PagesBeforeHotspotSourceLockAr, storyIds: Array.from({ length: 24 }, (_, i) => i + 1) },
  { label: 'Mecca B2', en: meccaB2PagesBeforeHotspotSourceLockEn, ar: meccaB2PagesBeforeHotspotSourceLockAr, storyIds: Array.from({ length: 17 }, (_, i) => i + 1) },
  { label: 'Yunus Emre B2', en: yunusB2PagesBeforeHotspotSourceLockEn, ar: yunusB2PagesBeforeHotspotSourceLockAr, storyIds: Array.from({ length: 13 }, (_, i) => i + 1) },
];

const words = (page: PageData | undefined): string[] => (page?.vocabulary ?? []).map((entry) => entry.word);

let driftCount = 0;
console.log('[B2 highlight diagnostic] vocabulary-only canonical pairing audit');
for (const item of cases) {
  const drifts: string[] = [];
  for (const id of item.storyIds) {
    const enWords = words(item.en.find((page) => page.type === 'story' && page.id === id));
    const arWords = words(item.ar.find((page) => page.type === 'story' && page.id === id));
    if (enWords.length !== arWords.length) {
      driftCount += 1;
      drifts.push(`Ch${id} EN=${enWords.length}[${enWords.join(' | ')}] AR=${arWords.length}[${arWords.join(' | ')}]`);
    }
  }
  console.log(`[B2 pairing diagnostic] ${item.label}: ${drifts.length ? drifts.join(' || ') : 'no count drift'}`);
}

if (driftCount) {
  throw new Error(`[B2 highlight diagnostic] ${driftCount} chapter(s) need reviewed explicit EN/AR target mappings before migration.`);
}
console.log('[B2 highlight diagnostic] no count drift found.');
