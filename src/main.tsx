import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './loading.css';
import './guideTheme.css';
import './pdfLocked.css';
import './layoutFixes.css';
import './lib/pdfDownloadLock';
import { LanguageProvider } from './contexts/LanguageContext';
import { FullscreenButton } from './components/ui/FullscreenButton';
import { ArabicUiSanitizer } from './components/ArabicUiSanitizer';

const CHUNK_RELOAD_KEY = 'stories_chunk_reload_at';

window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();

  const now = Date.now();
  const lastReload = Number(sessionStorage.getItem(CHUNK_RELOAD_KEY) || 0);

  // A Cloud Run deploy replaces hashed Vite chunks. If an already-open tab
  // requests a chunk from the previous revision, reload once to pick up the
  // fresh index.html and its current asset hashes. The guard prevents loops if
  // the failure is caused by a real network outage instead of a stale bundle.
  if (!Number.isFinite(lastReload) || now - lastReload > 15_000) {
    sessionStorage.setItem(CHUNK_RELOAD_KEY, String(now));
    window.location.reload();
  }
});

window.setTimeout(() => {
  sessionStorage.removeItem(CHUNK_RELOAD_KEY);
}, 30_000);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
      <FullscreenButton />
      <ArabicUiSanitizer />
    </LanguageProvider>
  </StrictMode>,
);
