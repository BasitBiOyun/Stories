import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PanelApp } from './App';
import { installBridge } from './bridge';
import './panel.css';

installBridge();

createRoot(document.getElementById('panel-root')!).render(
  <StrictMode>
    <PanelApp />
  </StrictMode>,
);
