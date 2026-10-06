import { useEffect, useState } from 'react';

/** Registers the service worker in production builds; the dev server keeps working without it. */
export const registerServiceWorker = () => {
  if (!import.meta.env.PROD || !('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => undefined);
  });
};

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

/** True when the app runs installed (from the home screen), where the system already gives it the whole screen. */
export const isStandalone = () =>
  window.matchMedia?.('(display-mode: standalone)').matches ||
  (navigator as Navigator & { standalone?: boolean }).standalone === true;

/** The browser's install prompt, when it offers one; iOS Safari offers none (Share → Add to Home Screen). */
export const useInstallPrompt = () => {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(() => isStandalone());

  useEffect(() => {
    const onPrompt = (event: Event) => {
      event.preventDefault();
      setPrompt(event as BeforeInstallPromptEvent);
    };
    const onInstalled = () => {
      setInstalled(true);
      setPrompt(null);
    };
    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const install = async () => {
    if (!prompt) return;
    await prompt.prompt();
    const choice = await prompt.userChoice;
    if (choice.outcome === 'accepted') setInstalled(true);
    setPrompt(null);
  };

  return { canInstall: Boolean(prompt) && !installed, installed, install };
};

export interface CacheBookResult {
  stored: number;
  failed: number;
  total: number;
}

/** Asks the service worker to store a book's images and audio; resolves with what it managed. */
export const saveBookOffline = (urls: string[]): Promise<CacheBookResult> =>
  new Promise((resolve, reject) => {
    if (!('serviceWorker' in navigator)) {
      reject(new Error('Service workers are not available.'));
      return;
    }
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const onMessage = (event: MessageEvent) => {
      const data = event.data || {};
      if (data.type !== 'cache-book-result' || data.id !== id) return;
      navigator.serviceWorker.removeEventListener('message', onMessage);
      resolve({ stored: data.stored, failed: data.failed, total: data.total });
    };
    navigator.serviceWorker.addEventListener('message', onMessage);
    navigator.serviceWorker.ready
      .then(registration => {
        const worker = registration.active;
        if (!worker) throw new Error('No active service worker.');
        worker.postMessage({ type: 'cache-book', id, urls });
      })
      .catch(error => {
        navigator.serviceWorker.removeEventListener('message', onMessage);
        reject(error);
      });
  });
