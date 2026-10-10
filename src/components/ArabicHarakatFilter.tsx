import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { isPanelPreview } from '../content/panelPreview';
import { hasHarakat, stripHarakat, useHarakatShown } from '../lib/arabicHarakat';

/**
 * When the reader turns harakat off, the Arabic on screen is shown without them. Only what is on
 * screen changes: the content keeps its harakat, so turning them back on restores every text exactly.
 * React never reads text back from the page, so it simply writes its own text again on its next update,
 * and the filter strips that too. Qur'an verses, inputs and the content panel's preview are left alone.
 */
const SKIP = 'script, style, textarea, input, [contenteditable="true"], .quran-verse, [data-keep-harakat]';

interface Entry {
  original: string;
  shown: string;
}

export const ArabicHarakatFilter: React.FC = () => {
  const { language } = useLanguage();
  const shown = useHarakatShown();
  const active = language === 'ar' && !shown && !isPanelPreview();

  React.useEffect(() => {
    if (!active) return;
    const entries = new Map<Text, Entry>();

    const filterNode = (node: Text) => {
      const value = node.nodeValue ?? '';
      const entry = entries.get(node);
      if (entry && entry.shown === value) return;
      if (!hasHarakat(value) || node.parentElement?.closest(SKIP)) {
        entries.delete(node);
        return;
      }
      const stripped = stripHarakat(value);
      entries.set(node, { original: value, shown: stripped });
      if (stripped !== value) node.nodeValue = stripped;
    };

    const filterTree = (root: Node) => {
      if (root.nodeType === Node.TEXT_NODE) {
        filterNode(root as Text);
        return;
      }
      if (root.nodeType !== Node.ELEMENT_NODE) return;
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      for (let node = walker.nextNode(); node; node = walker.nextNode()) filterNode(node as Text);
    };

    filterTree(document.body);
    let batches = 0;
    const observer = new MutationObserver(records => {
      // Now and then forget texts that left the page.
      if (++batches % 50 === 0) entries.forEach((_, node) => { if (!node.isConnected) entries.delete(node); });
      for (const record of records) {
        if (record.type === 'characterData') filterTree(record.target);
        else record.addedNodes.forEach(filterTree);
      }
    });
    observer.observe(document.body, { subtree: true, childList: true, characterData: true });

    return () => {
      observer.disconnect();
      // Harakat back on: every text still showing the stripped version gets its own text back.
      entries.forEach((entry, node) => {
        if (node.isConnected && node.nodeValue === entry.shown) node.nodeValue = entry.original;
      });
      entries.clear();
    };
  }, [active]);

  return null;
};
