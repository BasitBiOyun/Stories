import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

/**
 * "Skip to content": the first Tab stop on every screen, shown only while focused (WCAG 2.4.1).
 * The app routes by the URL hash, so the link moves focus itself instead of changing the hash.
 */
export const SkipLink: React.FC = () => {
  const { t, isRTL } = useLanguage();
  return (
    <a
      href="#main"
      className="skip-link"
      dir={isRTL ? 'rtl' : 'ltr'}
      onClick={event => {
        event.preventDefault();
        const main = document.getElementById('main') ?? document.querySelector<HTMLElement>('main');
        if (!main) return;
        if (!main.hasAttribute('tabindex')) main.tabIndex = -1;
        main.focus({ preventScroll: true });
        main.scrollIntoView({ block: 'start' });
      }}
    >
      {t('nav.skipToContent')}
    </a>
  );
};
