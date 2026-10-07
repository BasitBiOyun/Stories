import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Panel } from './Panel';
import './panel.css';

createRoot(document.getElementById('panel-root')!).render(
  <StrictMode>
    <Panel />
  </StrictMode>,
);
