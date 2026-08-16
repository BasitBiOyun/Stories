const PDF_TITLES = new Set(['Download PDF', 'تَحْمِيل PDF']);

const lockPdfButtons = (): void => {
  document.querySelectorAll<HTMLButtonElement>('button[title]').forEach(button => {
    const title = button.getAttribute('title') ?? '';
    if (!PDF_TITLES.has(title) || button.dataset.pdfLocked === 'true') return;

    const isArabic = title === 'تَحْمِيل PDF';
    button.disabled = true;
    button.setAttribute('aria-disabled', 'true');
    button.dataset.pdfLocked = 'true';
    button.dataset.pdfLockLabel = isArabic ? 'مُغْلَق' : 'LOCKED';
    button.title = isArabic
      ? 'تنزيل PDF متوقف مؤقتًا حتى إعادة بناء نظام النشر.'
      : 'PDF download is temporarily locked while the publication system is rebuilt.';
  });
};

if (typeof document !== 'undefined') {
  const start = () => {
    lockPdfButtons();
    const observer = new MutationObserver(lockPdfButtons);
    observer.observe(document.documentElement, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
}
