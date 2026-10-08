import { useEffect, useState } from 'react';

/**
 * The content panel tells the app in its frame that an edited file changed by sending the
 * `panel-preview-refresh` event. Loaders forget what they cached and the open book reloads in
 * place, so the change shows without the page jumping back to the start.
 */
export const PANEL_PREVIEW_EVENT = 'panel-preview-refresh';

export const isPanelPreview = (): boolean =>
  typeof window !== 'undefined' && window.parent !== window && new URLSearchParams(window.location.search).has('panel-preview');

const listeners = new Set<() => void>();
let revision = 0;

if (typeof window !== 'undefined') {
  window.addEventListener(PANEL_PREVIEW_EVENT, () => {
    revision += 1;
    for (const listener of listeners) listener();
  });
}

/** Runs `callback` before the app re-reads its files after a panel change. */
export const onPanelPreviewChange = (callback: () => void): (() => void) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};

/** A number that grows each time the panel changes a file (always 0 outside the panel). */
export const usePanelPreviewRevision = (): number => {
  const [value, setValue] = useState(revision);
  useEffect(() => onPanelPreviewChange(() => setValue(revision)), []);
  return value;
};

export interface PanelAssetOverrides {
  images?: Record<number, string>;
  englishAudio?: Record<number, string>;
  arabicAudio?: Record<number, string>;
}

/** Pictures and recordings uploaded in the panel but not yet published, shown only in its frame. */
export const panelAssetOverrides = (storyId: string, level: string): PanelAssetOverrides | null => {
  if (!isPanelPreview()) return null;
  try {
    const bridge = (window.parent as unknown as { __panelPreview?: { assets?: (storyId: string, level: string) => PanelAssetOverrides | null } }).__panelPreview;
    return bridge?.assets?.(storyId, level) ?? null;
  } catch {
    return null;
  }
};
