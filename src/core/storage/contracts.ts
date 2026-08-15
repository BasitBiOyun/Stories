export type AssetKind = 'image' | 'audio';

export interface StoragePathCandidates {
  /** Existing Firebase folders are preserved. Candidates are merged in order; earlier paths win. */
  paths: readonly string[];
  kind: AssetKind;
}

export interface BookAssetManifest {
  /** Chapter images are shared by English and Arabic for the same story/level. */
  sharedImages?: StoragePathCandidates;
  /** English narration resolved from existing Firebase folders. */
  englishAudio?: StoragePathCandidates;
  /** Arabic narration resolved from existing Firebase folders. */
  arabicAudio?: StoragePathCandidates;
}

export interface ResolvedBookAssets {
  images: Record<number, string>;
  englishAudio: Record<number, string>;
  arabicAudio: Record<number, string>;
}
