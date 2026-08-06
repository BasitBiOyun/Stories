import type { Level } from '../../types';
import type { StoryId } from '../content/contracts';
import type { BookAssetManifest } from './contracts';

const manifestKey = (storyId: StoryId, level: Level) => `${storyId}:${level}` as const;

/**
 * Compatibility manifest for the folders already published in Firebase Storage.
 * No files are renamed, moved, regenerated, or edited in this phase.
 */
export const storageManifests: Record<string, BookAssetManifest> = {
  [manifestKey('adam', 'A2')]: {
    arabicAudio: { kind: 'audio', paths: ['Adam_A2/Adam_a2_arabic_audio'] },
  },
  [manifestKey('adam', 'B1')]: {
    arabicAudio: { kind: 'audio', paths: ['adam_b1/audio/arabic_audio'] },
  },
  [manifestKey('adam', 'B2')]: {
    arabicAudio: { kind: 'audio', paths: ['adam_b2/audio/arabic_audio'] },
  },

  [manifestKey('ibrahim', 'A2')]: {
    arabicAudio: { kind: 'audio', paths: ['Abraham/abraham_a2/audio/arabic_audio', 'abraham/abraham_a2/audio/arabic_audio'] },
  },
  [manifestKey('ibrahim', 'B1')]: {
    arabicAudio: { kind: 'audio', paths: ['Abraham/abraham_b1/audio/arabic_audio', 'abraham/abraham_b1/audio/arabic_audio'] },
  },
  [manifestKey('ibrahim', 'B2')]: {
    sharedImages: { kind: 'image', paths: ['Abraham/abraham_b2/images'] },
    arabicAudio: { kind: 'audio', paths: ['Abraham/abraham_b2/audio/arabic_audio', 'abraham/abraham_b2/audio/arabic_audio'] },
  },

  [manifestKey('musa', 'A2')]: {
    sharedImages: { kind: 'image', paths: ['Moses/a2/images', 'Moses/moses_a2/images'] },
    arabicAudio: { kind: 'audio', paths: ['Moses/a2/audio/arabic_audio', 'moses/a2/audio/arabic_audio'] },
  },
  [manifestKey('musa', 'B1')]: {
    sharedImages: { kind: 'image', paths: ['Moses/b1/images', 'Moses/moses_b1/images'] },
    arabicAudio: { kind: 'audio', paths: ['Moses/b1/audio/arabic_audio', 'moses/b1/audio/arabic_audio'] },
  },
  [manifestKey('musa', 'B2')]: {
    sharedImages: { kind: 'image', paths: ['Moses/b2/images', 'Moses/moses_b2/images'] },
    arabicAudio: { kind: 'audio', paths: ['Moses/b2/audio/arabic_audio', 'moses/b2/audio/arabic_audio'] },
  },

  [manifestKey('mecca', 'A2')]: {
    arabicAudio: { kind: 'audio', paths: ['mecca/a2/audio/arabic_audio', 'Mecca/a2/audio/arabic_audio'] },
  },
  [manifestKey('mecca', 'B1')]: {
    arabicAudio: { kind: 'audio', paths: ['mecca/b1/audio/arabic_audio', 'Mecca/b1/audio/arabic_audio'] },
  },
  [manifestKey('mecca', 'B2')]: {
    arabicAudio: { kind: 'audio', paths: ['mecca/b2/audio/arabic_audio', 'Mecca/b2/audio/arabic_audio'] },
  },

  [manifestKey('yunusEmre', 'A2')]: {
    sharedImages: {
      kind: 'image',
      paths: [
        'Yunus/a2/images',
        'yunus/a2/images',
        'Yunus/yunus_a2/images',
        'yunus/yunus_a2/images',
        'YunusEmre/a2/images',
        'YunusEmre/yunusemre_a2/images',
        'Yunus_Emre/a2/images',
        'Yunus_Emre/yunusemre_a2/images',
        'yunusEmre/a2/images',
        'yunusEmre/yunusemre_a2/images',
      ],
    },
    arabicAudio: { kind: 'audio', paths: ['yunus/a2/audio/arabic_audio'] },
  },
  [manifestKey('yunusEmre', 'B1')]: {
    sharedImages: {
      kind: 'image',
      paths: ['Yunus/b1/images', 'yunus/b1/images', 'Yunus/yunus_b1/images', 'yunus/yunus_b1/images', 'YunusEmre/b1/images', 'YunusEmre/yunusemre_b1/images'],
    },
    arabicAudio: { kind: 'audio', paths: ['yunus/b1/audio/arabic_audio'] },
  },
  [manifestKey('yunusEmre', 'B2')]: {
    sharedImages: {
      kind: 'image',
      paths: ['yunus/b2/images', 'Yunus/b2/images', 'Yunus/yunus_b2/images', 'yunus/yunus_b2/images', 'YunusEmre/b2/images', 'YunusEmre/yunusemre_b2/images'],
    },
    arabicAudio: { kind: 'audio', paths: ['yunus/b2/audio/arabic_audio'] },
  },
};

export const getStorageManifest = (storyId: StoryId, level: Level): BookAssetManifest =>
  storageManifests[manifestKey(storyId, level)] ?? {};
