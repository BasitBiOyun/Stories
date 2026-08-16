import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './loading.css';
import './guideTheme.css';
import './pdfLocked.css';
import './lib/pdfDownloadLock';
import { LanguageProvider } from './contexts/LanguageContext';
import { FullscreenButton } from './components/ui/FullscreenButton';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
      <FullscreenButton />
    </LanguageProvider>
  </StrictMode>,
);