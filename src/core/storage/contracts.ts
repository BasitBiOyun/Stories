export type AssetKind = 'image' | 'audio';

export interface StoragePathCandidates {
  /** Existing Firebase folders are preserved in this phase. Candidates are tried in order. */
  paths: readonly string[];
  kind: AssetKind;
}

export interface BookAssetManifest {
  /** Shared chapter images are applied to both language variants without editing page content. */
  sharedImages?: StoragePathCandidates;
  /** Arabic narration is resolved dynamically from the existing Storage folders. */
  arabicAudio?: StoragePathCandidates;
}

export interface ResolvedBookAssets {
  images: Record<number, string>;
  arabicAudio: Record<number, string>;
}
