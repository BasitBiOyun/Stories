import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const REPLACEMENTS: Array<[RegExp, string]> = [
  [/Professional Teacher Guide/gi, 'دليل المعلم المهني'],
  [/Student(?:'s|’s)? Self[- ]Study Guide/gi, 'دليل الدراسة الذاتية للطالب'],
  [/Self[- ]Study Guide/gi, 'دليل الدراسة الذاتية'],
  [/Tap\s*&\s*Reveal/gi, 'اضغط واكشف'],
  [/Tap\s+and\s+Reveal/gi, 'اضغط واكشف'],
  [/Language Focus/gi, 'التركيز اللغوي'],
  [/Language Review/gi, 'مراجعة اللغة'],
  [/Quick Challenge/gi, 'التحدي السريع'],
  [/Knowledge Check/gi, 'اختبار المعرفة'],
  [/Final Challenge/gi, 'التحدي النهائي'],
  [/Retrieval Review/gi, 'مراجعة الاسترجاع'],
  [/Teacher Guide/gi, 'دليل المعلم'],
  [/Chapter Support/gi, 'دعم الفصول'],
  [/Full Guide/gi, 'الدليل الكامل'],
  [/Individual Mode/gi, 'وضع فردي'],
  [/Pair Mode/gi, 'وضع ثنائي'],
  [/Class Mode/gi, 'وضع صفي'],
  [/Language selection/gi, 'اختيار اللغة'],
  [/Use English/gi, 'استخدام الإنجليزية'],
  [/Access Required/gi, 'يلزم رمز الدخول'],
  [/Please enter the access code provided to you to unlock the application\./gi, 'يرجى إدخال رمز الدخول المقدم لك لفتح التطبيق.'],
  [/Access Code/gi, 'رمز الدخول'],
  [/Unlock App/gi, 'فتح التطبيق'],
  [/Show password/gi, 'إظهار كلمة المرور'],
  [/Hide password/gi, 'إخفاء كلمة المرور'],
  [/Incorrect password! Please try again\./gi, 'كلمة المرور غير صحيحة. حاول مرة أخرى.'],
  [/Interactive E-Book Series/gi, 'سلسلة الكتب الإلكترونية التفاعلية'],
  [/ex\.type\.matching/gi, 'مُطَابَقَة'],
  [/ex\.type\.fill-blanks/gi, 'مَلْءُ الْفَرَاغَات'],
];

const localize = (value: string) => REPLACEMENTS.reduce(
  (result, [pattern, replacement]) => result.replace(pattern, replacement),
  value,
);

const sanitizeElement = (root: ParentNode) => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    const current = node.nodeValue ?? '';
    const localized = localize(current);
    if (localized !== current) node.nodeValue = localized;
    node = walker.nextNode();
  }

  if (root instanceof Element) {
    for (const attr of ['aria-label', 'title', 'placeholder']) {
      const value = root.getAttribute(attr);
      if (!value) continue;
      const localized = localize(value);
      if (localized !== value) root.setAttribute(attr, localized);
    }
  }

  root.querySelectorAll?.('[aria-label], [title], [placeholder]').forEach((element) => {
    for (const attr of ['aria-label', 'title', 'placeholder']) {
      const value = element.getAttribute(attr);
      if (!value) continue;
      const localized = localize(value);
      if (localized !== value) element.setAttribute(attr, localized);
    }
  });
};

export const ArabicUiSanitizer: React.FC = () => {
  const { language } = useLanguage();

  React.useEffect(() => {
    if (language !== 'ar') return;

    const root = document.getElementById('root');
    if (!root) return;

    sanitizeElement(root);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'characterData' && mutation.target.parentNode) {
          sanitizeElement(mutation.target.parentNode);
          continue;
        }
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE && node.parentNode) {
            sanitizeElement(node.parentNode);
          } else if (node instanceof Element) {
            sanitizeElement(node);
          }
        });
      }
    });

    observer.observe(root, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [language]);

  return null;
};
