import React from 'react';
import { Download } from './icons';
import { useLanguage } from '../../contexts/LanguageContext';
import { useInstallPrompt } from '../../lib/pwa';

/** Home header: "Install app" while the browser offers its install prompt. */
export const InstallAppButton: React.FC = () => {
  const { t } = useLanguage();
  const { canInstall, install } = useInstallPrompt();
  if (!canInstall) return null;
  return (
    <button
      type="button"
      onClick={() => { void install(); }}
      className="hidden min-h-9 items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-3 font-display text-[11px] font-semibold uppercase tracking-wider text-parchment/80 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-parchment sm:inline-flex"
      data-install-app
    >
      <Download size={14} />
      {t('nav.installApp')}
    </button>
  );
};
