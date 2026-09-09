const PDF_LABELS = new Set(['Download PDF', 'تَحْمِيل PDF']);
const boundPdfButtons = new WeakSet<HTMLButtonElement>();

const blockPdfAction = (event: Event): void => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
};

const isPdfButton = (button: HTMLButtonElement): boolean => {
  if (button.dataset.pdfLocked === 'true') return true;

  const title = button.getAttribute('title') ?? '';
  const text = (button.textContent ?? '').replace(/\s+/g, ' ').trim();

  return PDF_LABELS.has(title) || PDF_LABELS.has(text);
};

const lockPdfButtons = (): void => {
  document.querySelectorAll<HTMLButtonElement>('button').forEach(button => {
    if (!isPdfButton(button)) return;

    const isArabic = button.closest('[lang="ar"], [dir="rtl"]') !== null;
    const tooltip = isArabic ? 'PDF قريبًا' : 'PDF Coming Soon';

    // Keep pointer interaction enabled so the native title tooltip can appear,
    // while the capture listener blocks the unavailable PDF action.
    button.disabled = false;
    button.setAttribute('aria-disabled', 'true');
    button.setAttribute('aria-label', tooltip);
    button.dataset.pdfLocked = 'true';
    button.title = tooltip;

    if (!boundPdfButtons.has(button)) {
      button.addEventListener('click', blockPdfAction, true);
      boundPdfButtons.add(button);
    }
  });
};

if (typeof document !== 'undefined') {
  const start = () => {
    lockPdfButtons();
    const observer = new MutationObserver(lockPdfButtons);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
}
