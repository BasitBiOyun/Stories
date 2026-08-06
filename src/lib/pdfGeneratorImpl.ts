import jsPDF from 'jspdf';
import {
  TeacherGuideSection,
  TeacherGuideMetadata,
  StudentGuideMetadata,
  BookData,
  PageData,
  Exercise,
} from '../types';

/**
 * Premium PDF Generator (v3)
 * ------------------------------------------------------------------
 * Layout master: the approved "Yunus Emre B2" reading PDF.
 * - Category-based theming via PDF_CATEGORY_THEMES (3 categories)
 * - Poppins only (Regular / Italic / Medium / SemiBold / Bold),
 *   loaded at runtime from the Google Fonts GitHub repository
 * - Full structure: Cover → Contents → Chapters → Additional Practice
 *   → Master Glossary → Final Review → Final Challenge → Answer Key
 *   → Back Cover
 * - Story text is rendered verbatim (poems become styled poem cards,
 *   **bold** markers become bold text — no content is dropped)
 * - Every PageData type is processed; nothing is silently skipped
 */

// ─── Category theme configuration ────────────────────────────────

type CategoryKey = 'prophets' | 'civilization' | 'scholars';

const PDF_CATEGORY_THEMES = {
  prophets: {
    label: 'Stories of the Prophets',
    primary: '#c2aa6b',
    primaryDark: '#1F0E08',
    primaryLight: '#2F1A12',
    pageBg: '#f4f1ea',
    cardBg: '#fef3c7',
    accent: '#d97706',
    challengeBg: '#fef3c7',
    titleText: '#78350f',
    bodyText: '#2A2622',
    secondaryText: '#57534e',
    border: 'rgba(180, 83, 9, 0.25)',
    highlight: '#d97706',
  },
  civilization: {
    label: 'Islamic History and Civilization',
    primary: '#10b981',
    primaryDark: '#052117',
    primaryLight: '#0C2E22',
    pageBg: '#f4f1ea',
    cardBg: '#ecfdf5',
    accent: '#34d399',
    challengeBg: '#ecfdf5',
    titleText: '#064e3b',
    bodyText: '#2A2622',
    secondaryText: '#475569',
    border: 'rgba(5, 150, 105, 0.25)',
    highlight: '#047857',
  },
  scholars: {
    label: 'Great Figures of Turkish Islamic Heritage',
    primary: '#22D3EE',
    primaryDark: '#051121',
    primaryLight: '#0C1E30',
    pageBg: '#f4f1ea',
    cardBg: '#f0f9ff',
    accent: '#22D3EE',
    challengeBg: '#f0f9ff',
    titleText: '#0c4a6e',
    bodyText: '#2A2622',
    secondaryText: '#475569',
    border: 'rgba(14, 165, 233, 0.25)',
    highlight: '#0369a1',
  },
} as const;

// Category icons: reuse the app's existing icon assets, with an
// elegant vector fallback drawn in code if the fetch fails.
const CATEGORY_ICONS: Record<CategoryKey, string> = {
  prophets:
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/prophets_icon.png?alt=media&token=985739ce-9484-4998-a9e3-a11077955048',
  civilization:
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/civilization_icon.png?alt=media&token=fc8ac841-d12e-4169-a052-4946d20409f2',
  scholars:
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/scholars_icon.png?alt=media&token=3c0b480b-bea3-42e3-9718-2a1967dacf78',
};

// ─── Color utilities ─────────────────────────────────────────────

type RGB = [number, number, number];

const hexToRgb = (hex: string): RGB => {
  const h = hex.replace('#', '');
  const v = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)];
};

/** Parses '#hex' or 'rgba(r,g,b,a)'; rgba is flattened over `base`. */
const parseColor = (value: string, base: RGB = [244, 241, 234]): RGB => {
  if (value.startsWith('#')) return hexToRgb(value);
  const m = value.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i);
  if (!m) return [0, 0, 0];
  const [r, g, b] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const a = m[4] !== undefined ? Number(m[4]) : 1;
  return [
    Math.round(r * a + base[0] * (1 - a)),
    Math.round(g * a + base[1] * (1 - a)),
    Math.round(b * a + base[2] * (1 - a)),
  ];
};

const mix = (a: RGB, b: RGB, t: number): RGB => [
  Math.round(a[0] + (b[0] - a[0]) * t),
  Math.round(a[1] + (b[1] - a[1]) * t),
  Math.round(a[2] + (b[2] - a[2]) * t),
];

// ─── Runtime theme (RGB, resolved once per document) ─────────────

type Theme = {
  key: CategoryKey;
  label: string;
  iconUrl: string;
  primary: RGB;
  dark: RGB;        // primaryDark — cover / challenge card background
  light: RGB;       // primaryLight
  paper: RGB;       // pageBg
  card: RGB;        // cardBg
  accent: RGB;
  challengeBg: RGB;
  title: RGB;       // titleText
  ink: RGB;         // bodyText
  muted: RGB;       // secondaryText
  line: RGB;        // border (rgba flattened over pageBg)
  highlight: RGB;
  cream: RGB;       // light text on dark surfaces
  white: RGB;
};

const buildTheme = (key: CategoryKey): Theme => {
  const c = PDF_CATEGORY_THEMES[key];
  const paper = hexToRgb(c.pageBg);
  return {
    key,
    label: c.label,
    iconUrl: CATEGORY_ICONS[key],
    primary: hexToRgb(c.primary),
    dark: hexToRgb(c.primaryDark),
    light: hexToRgb(c.primaryLight),
    paper,
    card: hexToRgb(c.cardBg),
    accent: hexToRgb(c.accent),
    challengeBg: hexToRgb(c.challengeBg),
    title: hexToRgb(c.titleText),
    ink: hexToRgb(c.bodyText),
    muted: hexToRgb(c.secondaryText),
    line: parseColor(c.border, paper),
    highlight: hexToRgb(c.highlight),
    cream: paper,
    white: [255, 255, 255],
  };
};

const detectCategory = (input: string, explicitCategory?: string): CategoryKey => {
  const raw = `${explicitCategory || ''} ${input || ''}`.toLowerCase();
  if (raw.includes('prophet') || raw.includes('peygamber')) return 'prophets';
  if (
    raw.includes('scholar') || raw.includes('yunus') || raw.includes('alim') ||
    raw.includes('âlim') || raw.includes('heritage') || raw.includes('türk') ||
    raw.includes('turkish')
  ) return 'scholars';
  if (
    raw.includes('civilization') || raw.includes('medeniyet') || raw.includes('mecca') ||
    raw.includes('makkah') || raw.includes('history') || raw.includes('city and age') ||
    raw.includes('jahili') || raw.includes('ignorance')
  ) return 'civilization';
  return 'prophets';
};

const getThemeForBook = (bookOrTitle: BookData | string, explicitCategory?: string): Theme => {
  const title =
    typeof bookOrTitle === 'string'
      ? bookOrTitle
      : `${bookOrTitle.title} ${(bookOrTitle as any).category || ''}`;
  const category = detectCategory(
    title,
    explicitCategory || (typeof bookOrTitle === 'string' ? undefined : (bookOrTitle as any).category)
  );
  return buildTheme(category);
};

// ─── Poppins runtime loading (Google Fonts GitHub) ───────────────

const POPPINS_BASE = 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins';
const POPPINS_FILES: { file: string; style: FontWeight }[] = [
  { file: 'Poppins-Regular.ttf', style: 'normal' },
  { file: 'Poppins-Italic.ttf', style: 'italic' },
  { file: 'Poppins-Medium.ttf', style: 'medium' },
  { file: 'Poppins-SemiBold.ttf', style: 'semibold' },
  { file: 'Poppins-Bold.ttf', style: 'bold' },
];

type FontWeight = 'normal' | 'italic' | 'medium' | 'semibold' | 'bold';

let poppinsCache: Map<FontWeight, string> | null = null;
let poppinsLoadPromise: Promise<Map<FontWeight, string> | null> | null = null;

const bytesToBase64 = (bytes: Uint8Array): string => {
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
};

const loadPoppins = async (): Promise<Map<FontWeight, string> | null> => {
  if (poppinsCache) return poppinsCache;
  if (!poppinsLoadPromise) {
    poppinsLoadPromise = (async () => {
      try {
        const entries = await Promise.all(
          POPPINS_FILES.map(async ({ file, style }) => {
            const res = await fetch(`${POPPINS_BASE}/${file}`, { cache: 'force-cache' });
            if (!res.ok) throw new Error(`Poppins fetch failed: ${file}`);
            const buf = new Uint8Array(await res.arrayBuffer());
            return [style, bytesToBase64(buf)] as const;
          })
        );
        poppinsCache = new Map(entries);
        return poppinsCache;
      } catch (e) {
        console.warn('PDF: Poppins could not be loaded, falling back to Helvetica.', e);
        poppinsLoadPromise = null;
        return null;
      }
    })();
  }
  return poppinsLoadPromise;
};

/** Registers Poppins on a jsPDF instance. Returns the family name to use. */
const registerPoppins = async (doc: jsPDF): Promise<string> => {
  const fonts = await loadPoppins();
  if (!fonts) return 'helvetica';
  fonts.forEach((base64, style) => {
    const vfsName = `Poppins-${style}.ttf`;
    doc.addFileToVFS(vfsName, base64);
    doc.addFont(vfsName, 'Poppins', style);
  });
  return 'Poppins';
};

// ─── Page geometry ───────────────────────────────────────────────

const PAGE = {
  w: 210,
  h: 297,
  marginX: 17,
  headerY: 12.5,
  headerRuleY: 17,
  contentTop: 25,
  contentBottom: 276,
  footerY: 288,
};
const CONTENT_W = PAGE.w - PAGE.marginX * 2;

// ─── Generic helpers ─────────────────────────────────────────────

const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));
const safeText = (value?: string | null) => (value || '').replace(/\s+/g, ' ').trim();
const fileNameSafe = (value: string) => value.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '');
const stripMd = (value?: string | null) => (value || '').replace(/\*\*/g, '');

const NUMBER_WORDS = [
  'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN',
  'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'SEVENTEEN',
  'EIGHTEEN', 'NINETEEN', 'TWENTY',
];
const chapterWord = (n: number) => NUMBER_WORDS[n - 1] || String(n);

const dispatchPdfStart = (name: string) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('pdf-generation-start', { detail: { name } }));
  }
};
const dispatchPdfEnd = (name: string) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('pdf-generation-end', { detail: { name } }));
  }
};

const normalizeOptionText = (option: unknown): string => {
  if (typeof option === 'string') return option;
  if (option && typeof option === 'object' && 'text' in option) return String((option as any).text || '');
  return String(option || '');
};

const letterFor = (idx: number) => String.fromCharCode(65 + idx);

const normalizeAnswer = (answer: unknown, exercise?: Exercise): string => {
  if (answer === null || answer === undefined) return '';
  if (typeof answer === 'boolean') return answer ? 'True' : 'False';
  if (typeof answer === 'number') {
    const opts = (exercise as any)?.options;
    if (Array.isArray(opts) && opts[answer] !== undefined) {
      return `${letterFor(answer)}) ${stripMd(normalizeOptionText(opts[answer]))}`;
    }
    return String(answer);
  }
  if (Array.isArray(answer)) return answer.join(' → ');
  if (typeof answer === 'object') {
    return Object.entries(answer as Record<string, unknown>)
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : String(v)}`)
      .join('  |  ');
  }
  return stripMd(String(answer));
};

const getLevelDescription = (level?: string) => {
  switch ((level || '').toUpperCase()) {
    case 'A1': return 'BEGINNER READER';
    case 'A2': return 'ELEMENTARY READER';
    case 'B1': return 'INTERMEDIATE READER';
    case 'B2': return 'UPPER-INTERMEDIATE READER';
    case 'C1': return 'ADVANCED READER';
    case 'C2': return 'PROFICIENT READER';
    default: return 'GRADED READER';
  }
};

const guessImageFormat = (dataUrl: string) => {
  if (dataUrl.includes('image/png')) return 'PNG';
  if (dataUrl.includes('image/webp')) return 'WEBP';
  return 'JPEG';
};

// ─── Image loading (fetch → base64, canvas fallback) ─────────────

const loadImageAsDataUrl = async (url?: string | null): Promise<string | null> => {
  if (!url) return null;
  if (url.startsWith('data:image/')) return url;

  try {
    const response = await fetch(url, { mode: 'cors', cache: 'force-cache' });
    if (response.ok) {
      const contentType = response.headers.get('content-type') || 'image/jpeg';
      const bytes = new Uint8Array(await response.arrayBuffer());
      if (bytes.length > 0) return `data:${contentType};base64,${bytesToBase64(bytes)}`;
    }
  } catch (e) {
    console.warn('PDF: image fetch failed, trying canvas:', url, e);
  }

  if (typeof document === 'undefined' || typeof Image === 'undefined') return null;
  return await new Promise<string | null>((resolve) => {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth || img.width;
          canvas.height = img.naturalHeight || img.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) return resolve(null);
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL('image/jpeg', 0.9));
        } catch {
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = url;
    } catch {
      resolve(null);
    }
  });
};

// ─── Content parsing: paragraphs, poems, vocabulary emphasis ─────

const B_ON = '\u0001';
const B_OFF = '\u0002';

type PoemBlock = { kind: 'poem'; lines: { text: string; isLabel: boolean }[] };
type ParaBlock = { kind: 'para'; text: string };
type ContentBlock = PoemBlock | ParaBlock;

/** Splits raw story content into paragraphs and [POEM] blocks, verbatim. */
const parseContentBlocks = (content: string): ContentBlock[] => {
  const blocks: ContentBlock[] = [];
  const parts = (content || '').split(/\[POEM\]|\[\/POEM\]/);
  parts.forEach((part, idx) => {
    const isPoem = idx % 2 === 1;
    if (!part.trim()) return;
    if (isPoem) {
      const lines = part
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean)
        .map((l) => ({ text: l, isLabel: /^(english|turkish|arabic)\s*:$/i.test(l) }));
      if (lines.length) blocks.push({ kind: 'poem', lines });
    } else {
      part
        .split(/\n\s*\n/)
        .map((p) => p.replace(/\n/g, ' ').trim())
        .filter(Boolean)
        .forEach((p) => blocks.push({ kind: 'para', text: p }));
    }
  });
  return blocks;
};

const escapeRegExp = (v: string) => v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Marks **bold** spans and vocabulary phrases with sentinel characters. */
const markEmphasis = (text: string, vocabWords: string[]): string => {
  let marked = text.replace(/\*\*(.+?)\*\*/g, `${B_ON}$1${B_OFF}`);
  const vocabs = [...new Set(vocabWords.map((v) => v.trim()).filter(Boolean))]
    .sort((a, b) => b.length - a.length);
  vocabs.forEach((word) => {
    const pattern = new RegExp(`(?<![\\p{L}${B_ON}${B_OFF}])(${escapeRegExp(word)})(?![\\p{L}])`, 'giu');
    marked = marked.replace(pattern, `${B_ON}$1${B_OFF}`);
  });
  return marked;
};

type RichWord = { text: string; bold: boolean };

const tokenizeRich = (marked: string): RichWord[] => {
  const words: RichWord[] = [];
  let depth = 0;
  let current = '';
  const flush = (boldAtStart: boolean) => {
    if (current) words.push({ text: current, bold: boldAtStart });
    current = '';
  };
  let wordBold = false;
  for (const ch of marked) {
    if (ch === B_ON) { if (!current) wordBold = depth + 1 > 0; depth++; if (current) wordBold = true; continue; }
    if (ch === B_OFF) { depth = Math.max(0, depth - 1); continue; }
    if (/\s/.test(ch)) { flush(wordBold); wordBold = depth > 0; continue; }
    if (!current) wordBold = depth > 0;
    current += ch;
  }
  flush(wordBold);
  return words;
};

// ─── Layout engine ───────────────────────────────────────────────

type TocEntry = { label: string; sub?: string; page: number; kind: 'chapter' | 'section'; num?: number };

class Layout {
  doc: jsPDF;
  theme: Theme;
  font: string;
  bookTitle: string;
  level?: string;
  pageNumber = 0;
  y = PAGE.contentTop;
  /** While > y, text wraps beside the chapter image. */
  wrapUntilY = 0;
  wrapX = PAGE.marginX;
  wrapW = CONTENT_W;
  toc: TocEntry[] = [];

  constructor(doc: jsPDF, theme: Theme, font: string, bookTitle: string, level?: string) {
    this.doc = doc;
    this.theme = theme;
    this.font = font;
    this.bookTitle = bookTitle;
    this.level = level;
  }

  setFont(weight: FontWeight, size: number, color: RGB) {
    let style: string = weight;
    if (this.font === 'helvetica') {
      style = weight === 'italic' ? 'italic' : weight === 'normal' ? 'normal' : 'bold';
    }
    this.doc.setFont(this.font, style);
    this.doc.setFontSize(size);
    this.doc.setTextColor(...color);
  }

  colX(y: number) { return y < this.wrapUntilY ? this.wrapX : PAGE.marginX; }
  colW(y: number) { return y < this.wrapUntilY ? this.wrapW : CONTENT_W; }

  newPage(opts?: { plain?: boolean }) {
    if (this.pageNumber > 0) this.doc.addPage();
    this.pageNumber += 1;
    this.y = PAGE.contentTop;
    this.wrapUntilY = 0;
    this.drawPageBase(opts?.plain);
  }

  drawPageBase(plain?: boolean) {
    const { doc, theme: t } = this;
    doc.setFillColor(...t.paper);
    doc.rect(0, 0, PAGE.w, PAGE.h, 'F');
    if (plain) return;

    // Header: story name left, level right, thin rule.
    this.setFont('semibold', 9, t.muted);
    doc.text(stripMd(this.bookTitle).toUpperCase(), PAGE.marginX, PAGE.headerY, { charSpace: 0.5 });
    if (this.level) {
      this.setFont('semibold', 9, t.highlight);
      doc.text(this.level.toUpperCase(), PAGE.w - PAGE.marginX, PAGE.headerY, { align: 'right', charSpace: 0.5 });
    }
    doc.setDrawColor(...t.line);
    doc.setLineWidth(0.3);
    doc.line(PAGE.marginX, PAGE.headerRuleY, PAGE.w - PAGE.marginX, PAGE.headerRuleY);

    // Footer: centered page number only.
    this.setFont('medium', 9.5, t.muted);
    doc.text(`—  ${this.pageNumber}  —`, PAGE.w / 2, PAGE.footerY, { align: 'center' });
  }

  ensure(needed: number) {
    if (this.y + needed > PAGE.contentBottom) this.newPage();
  }

  /** Simple wrapped text block at full/current width. Returns height used. */
  text(value: string, opts?: {
    x?: number; width?: number; size?: number; weight?: FontWeight; color?: RGB;
    align?: 'left' | 'center' | 'right'; after?: number; lineHeight?: number; charSpace?: number;
  }) {
    const size = opts?.size ?? 11;
    const weight = opts?.weight ?? 'normal';
    const color = opts?.color ?? this.theme.ink;
    const width = opts?.width ?? CONTENT_W;
    const x = opts?.x ?? PAGE.marginX;
    const lineHeight = opts?.lineHeight ?? size * 0.5;
    const after = opts?.after ?? 2.5;
    this.setFont(weight, size, color);
    const lines = this.doc.splitTextToSize(safeText(value), width);
    lines.forEach((line: string) => {
      this.ensure(lineHeight);
      const drawX = opts?.align === 'center' ? x + width / 2 : opts?.align === 'right' ? x + width : x;
      this.setFont(weight, size, color);
      this.doc.text(line, drawX, this.y, { align: opts?.align ?? 'left', charSpace: opts?.charSpace });
      this.y += lineHeight;
    });
    this.y += after;
  }
}

// ─── Decorative elements ─────────────────────────────────────────

const drawDiamond = (doc: jsPDF, cx: number, cy: number, r: number, color: RGB, filled = true) => {
  doc.setFillColor(...color);
  doc.setDrawColor(...color);
  doc.setLineWidth(0.3);
  const style = filled ? 'F' : 'S';
  doc.triangle(cx, cy - r, cx + r, cy, cx - r, cy, style);
  doc.triangle(cx - r, cy, cx + r, cy, cx, cy + r, style);
};

/** ◆ —— ◆ —— ◆ centered ornament row. Sized so diamonds are never cropped. */
const drawOrnamentRow = (doc: jsPDF, cx: number, cy: number, color: RGB, halfWidth = 24) => {
  drawDiamond(doc, cx, cy, 1.5, color);
  drawDiamond(doc, cx - halfWidth, cy, 1, color);
  drawDiamond(doc, cx + halfWidth, cy, 1, color);
  doc.setDrawColor(...color);
  doc.setLineWidth(0.3);
  doc.line(cx - halfWidth + 3, cy, cx - 4.5, cy);
  doc.line(cx + 4.5, cy, cx + halfWidth - 3, cy);
};

/** Simple printable vector icon per category (fallback when PNG unavailable). */
const drawCategoryGlyph = (doc: jsPDF, theme: Theme, cx: number, cy: number, r: number) => {
  doc.setDrawColor(...theme.primary);
  doc.setLineWidth(0.55);
  if (theme.key === 'prophets') {
    // Eight-pointed star: two overlapping squares.
    const s = r * 0.82;
    doc.lines([[s, 0], [0, s], [-s, 0], [0, -s]], cx, cy - s, [1, 1], 'S', true);
    const d = s * Math.SQRT1_2;
    doc.rect(cx - d, cy - d, d * 2, d * 2, 'S');
    drawDiamond(doc, cx, cy, r * 0.18, theme.primary);
  } else if (theme.key === 'civilization') {
    // Dome with finial on a base line.
    doc.ellipse(cx, cy + r * 0.15, r * 0.75, r * 0.75, 'S');
    doc.setFillColor(...theme.paper);
    doc.rect(cx - r, cy + r * 0.15, r * 2, r, 'F');
    doc.line(cx - r * 0.9, cy + r * 0.15, cx + r * 0.9, cy + r * 0.15);
    doc.line(cx, cy - r * 0.6, cx, cy - r * 0.95);
    drawDiamond(doc, cx, cy - r * 1.05, r * 0.14, theme.primary);
  } else {
    // Open book.
    doc.lines([[r * 0.85, -r * 0.3], [0, r * 0.85], [-r * 0.85, r * 0.3], [0, -r * 0.85]], cx, cy - r * 0.25, [1, 1], 'S', true);
    doc.lines([[-r * 0.85, -r * 0.3], [0, r * 0.85], [r * 0.85, r * 0.3], [0, -r * 0.85]], cx, cy - r * 0.25, [1, 1], 'S', true);
    doc.line(cx, cy - r * 0.55, cx, cy + r * 0.6);
  }
};

const drawIconOrGlyph = (
  doc: jsPDF, theme: Theme, icon: string | null, cx: number, cy: number, size: number
) => {
  if (icon) {
    try {
      doc.addImage(icon, guessImageFormat(icon), cx - size / 2, cy - size / 2, size, size, undefined, 'MEDIUM');
      return;
    } catch { /* fall through to vector glyph */ }
  }
  drawCategoryGlyph(doc, theme, cx, cy, size / 2);
};

/** Framed 4:5 image with double border, never letterboxed to 16:9. */
const drawFramedImage = (doc: jsPDF, theme: Theme, image: string | null, x: number, y: number, w: number) => {
  const h = w * 1.25; // 4:5 portrait frame
  doc.setDrawColor(...theme.primary);
  doc.setLineWidth(0.7);
  doc.rect(x - 1.6, y - 1.6, w + 3.2, h + 3.2);
  doc.setLineWidth(0.3);
  doc.rect(x - 0.6, y - 0.6, w + 1.2, h + 1.2);
  if (image) {
    try {
      doc.addImage(image, guessImageFormat(image), x, y, w, h, undefined, 'MEDIUM');
    } catch {
      doc.setFillColor(...theme.card);
      doc.rect(x, y, w, h, 'F');
    }
  } else {
    doc.setFillColor(...theme.card);
    doc.rect(x, y, w, h, 'F');
    drawCategoryGlyph(doc, theme, x + w / 2, y + h / 2, Math.min(14, w * 0.2));
  }
  drawDiamond(doc, x + w / 2, y - 1.6, 1.4, theme.primary);
  drawDiamond(doc, x + w / 2, y + h + 1.6, 1.4, theme.primary);
  return h;
};

// ─── Rich paragraph writer (vocab bold + highlight color) ────────

const writeRichParagraph = (
  L: Layout,
  paragraph: string,
  vocabWords: string[],
  opts?: { size?: number; lineHeight?: number; after?: number }
) => {
  const size = opts?.size ?? 11;
  const lineHeight = opts?.lineHeight ?? 5.4;
  const after = opts?.after ?? 3;
  const words = tokenizeRich(markEmphasis(paragraph, vocabWords));
  const doc = L.doc;

  const measure = (word: RichWord) => {
    L.setFont(word.bold ? 'semibold' : 'normal', size, L.theme.ink);
    return doc.getTextWidth(word.text);
  };
  L.setFont('normal', size, L.theme.ink);
  const spaceW = doc.getTextWidth(' ');

  let i = 0;
  while (i < words.length) {
    L.ensure(lineHeight);
    const width = L.colW(L.y);
    const x = L.colX(L.y);

    // Fill one line.
    const line: RichWord[] = [];
    let lineW = 0;
    while (i < words.length) {
      const w = measure(words[i]);
      const needed = line.length === 0 ? w : lineW + spaceW + w;
      if (line.length > 0 && needed > width) break;
      line.push(words[i]);
      lineW = needed;
      i++;
    }

    // Draw segments.
    let cx = x;
    line.forEach((word, idx) => {
      if (word.bold) L.setFont('semibold', size, L.theme.highlight);
      else L.setFont('normal', size, L.theme.ink);
      doc.text(word.text, cx, L.y);
      cx += measure(word) + (idx < line.length - 1 ? spaceW : 0);
    });
    L.y += lineHeight;
  }
  L.y += after;
};

// ─── Poem card ───────────────────────────────────────────────────

const drawPoemCard = (L: Layout, poem: PoemBlock) => {
  const { doc, theme: t } = L;
  const lineH = 5.1;
  const labelH = 5.4;
  const padY = 5;

  const x = L.colX(L.y);
  const w = L.colW(L.y);
  const innerW = w - 14;

  // Pre-wrap all lines to compute height.
  const rendered: { text: string; isLabel: boolean }[] = [];
  poem.lines.forEach((line) => {
    if (line.isLabel) { rendered.push(line); return; }
    L.setFont('italic', 10.5, t.ink);
    doc.splitTextToSize(stripMd(line.text), innerW).forEach((seg: string) =>
      rendered.push({ text: seg, isLabel: false })
    );
  });
  const cardH = padY * 2 + rendered.reduce((s, l) => s + (l.isLabel ? labelH : lineH), 0);

  if (L.y + cardH > PAGE.contentBottom) L.newPage();
  const cx = L.colX(L.y);
  const cw = L.colW(L.y);
  const y0 = L.y;

  doc.setFillColor(...t.card);
  doc.roundedRect(cx, y0, cw, cardH, 1.5, 1.5, 'F');
  doc.setFillColor(...t.primary);
  doc.rect(cx, y0, 1.4, cardH, 'F');

  let cy = y0 + padY + 2.2;
  let turkish = false;
  rendered.forEach((line) => {
    if (line.isLabel) {
      turkish = /^turkish/i.test(line.text);
      L.setFont('semibold', 8.5, t.highlight);
      doc.text(line.text.replace(/:$/, '').toUpperCase(), cx + 8, cy, { charSpace: 0.5 });
      cy += labelH;
    } else {
      L.setFont('italic', 10.5, turkish ? t.muted : t.ink);
      doc.text(line.text, cx + 8, cy);
      cy += lineH;
    }
  });
  L.y = y0 + cardH + 4.5;
};

// ─── Shared card primitives ──────────────────────────────────────

const sectionEyebrow = (L: Layout, label: string) => {
  const { doc, theme: t } = L;
  L.setFont('semibold', 10, t.highlight);
  const tw = doc.getTextWidth(label.toUpperCase()) + label.length * 1.2;
  drawDiamond(doc, PAGE.marginX + 1.5, L.y - 1.3, 1.3, t.primary);
  doc.text(label.toUpperCase(), PAGE.marginX + 6, L.y, { charSpace: 1.2 });
  drawDiamond(doc, PAGE.marginX + 10 + tw, L.y - 1.3, 1.3, t.primary);
  L.y += 7;
};

const sectionHeading = (L: Layout, eyebrow: string, title: string, subtitle?: string) => {
  L.ensure(30);
  sectionEyebrow(L, eyebrow);
  L.text(stripMd(title), { size: 20, weight: 'semibold', color: L.theme.title, lineHeight: 9, after: 2 });
  L.doc.setDrawColor(...L.theme.primary);
  L.doc.setLineWidth(0.5);
  L.doc.line(PAGE.marginX, L.y, PAGE.marginX + 46, L.y);
  drawDiamond(L.doc, PAGE.marginX + 49.5, L.y, 1.2, L.theme.primary);
  L.y += 6.5;
  if (subtitle) L.text(safeText(subtitle), { size: 10.5, weight: 'italic', color: L.theme.muted, after: 5 });
};

// ─── Key Words chips ─────────────────────────────────────────────

const drawKeyWordChips = (L: Layout, words: string[]) => {
  if (!words.length) return;
  const { doc, theme: t } = L;
  L.ensure(16);
  L.setFont('semibold', 8.5, t.muted);
  drawDiamond(doc, PAGE.marginX + 1.2, L.y - 1.1, 1.1, t.primary);
  doc.text('KEY WORDS', PAGE.marginX + 5, L.y, { charSpace: 1 });
  L.y += 4.5;

  const chipH = 7;
  const gap = 2.5;
  let cx = PAGE.marginX;
  words.forEach((word) => {
    const label = safeText(word);
    L.setFont('medium', 9, t.title);
    const cw = doc.getTextWidth(label) + 8;
    if (cx + cw > PAGE.w - PAGE.marginX) {
      cx = PAGE.marginX;
      L.y += chipH + gap;
      L.ensure(chipH);
    }
    doc.setFillColor(...t.card);
    doc.setDrawColor(...t.line);
    doc.setLineWidth(0.35);
    doc.roundedRect(cx, L.y, cw, chipH, 3.5, 3.5, 'FD');
    L.setFont('medium', 9, t.title);
    doc.text(label, cx + cw / 2, L.y + 4.7, { align: 'center' });
    cx += cw + gap;
  });
  L.y += chipH + 6;
};

// ─── Vocabulary card ─────────────────────────────────────────────

const drawVocabularyCard = (L: Layout, vocab: { word: string; definition: string }[]) => {
  if (!vocab.length) return;
  const { doc, theme: t } = L;
  const w = CONTENT_W;
  const innerW = w - 14;

  // Measure entries.
  const entries = vocab.map((v) => {
    const word = safeText(v.word);
    L.setFont('semibold', 10, t.highlight);
    const wordW = doc.getTextWidth(word);
    L.setFont('normal', 10, t.ink);
    const defLines = doc.splitTextToSize(safeText(v.definition), innerW - wordW - 6);
    const oneLine = defLines.length === 1;
    const wrapLines = oneLine ? [] : doc.splitTextToSize(safeText(v.definition), innerW);
    const h = oneLine ? 5.4 : 5.4 + wrapLines.length * 4.8;
    return { word, definition: safeText(v.definition), oneLine, wrapLines, wordW, h };
  });
  const headH = 11;
  const cardH = headH + 5 + entries.reduce((s, e) => s + e.h + 1.6, 0);

  if (L.y + Math.min(cardH, 60) > PAGE.contentBottom) L.newPage();
  const y0 = L.y;
  const fitsWhole = y0 + cardH <= PAGE.contentBottom;

  // If the card doesn't fit as one block, render it as a flowing list with the
  // same styling (rare — long vocab sets).
  const drawShell = (top: number, h: number) => {
    doc.setFillColor(...t.card);
    doc.roundedRect(PAGE.marginX, top, w, h, 2, 2, 'F');
    doc.setFillColor(...t.primary);
    doc.rect(PAGE.marginX, top, 1.6, h, 'F');
  };

  if (fitsWhole) {
    drawShell(y0, cardH);
    L.setFont('semibold', 9.5, t.title);
    drawDiamond(doc, PAGE.marginX + 8, y0 + 6.4, 1.2, t.primary);
    doc.text('VOCABULARY', PAGE.marginX + 12, y0 + 7.5, { charSpace: 1.2 });
    doc.setDrawColor(...t.line);
    doc.setLineWidth(0.3);
    doc.line(PAGE.marginX + 7, y0 + headH, PAGE.marginX + w - 7, y0 + headH);
    let cy = y0 + headH + 6.5;
    entries.forEach((e) => {
      L.setFont('semibold', 10, t.highlight);
      doc.text(e.word, PAGE.marginX + 7, cy);
      if (e.oneLine) {
        L.setFont('normal', 10, t.ink);
        doc.text(`—  ${e.definition}`, PAGE.marginX + 7 + e.wordW + 2.5, cy);
        cy += 5.4 + 1.6;
      } else {
        cy += 5.4;
        L.setFont('normal', 10, t.ink);
        e.wrapLines.forEach((line: string) => { doc.text(line, PAGE.marginX + 7, cy); cy += 4.8; });
        cy += 1.6;
      }
    });
    L.y = y0 + cardH + 6;
  } else {
    // Flowing fallback with per-entry page breaks.
    L.text('VOCABULARY', { size: 9.5, weight: 'semibold', color: t.title, charSpace: 1.2, after: 3 });
    entries.forEach((e) => {
      L.ensure(e.h + 2);
      const top = L.y - 4;
      drawShell(top, e.h + 3);
      L.setFont('semibold', 10, t.highlight);
      doc.text(e.word, PAGE.marginX + 7, L.y);
      if (e.oneLine) {
        L.setFont('normal', 10, t.ink);
        doc.text(`—  ${e.definition}`, PAGE.marginX + 7 + e.wordW + 2.5, L.y);
        L.y += e.h + 3;
      } else {
        L.y += 5.4;
        L.setFont('normal', 10, t.ink);
        e.wrapLines.forEach((line: string) => { doc.text(line, PAGE.marginX + 7, L.y); L.y += 4.8; });
        L.y += 3;
      }
    });
    L.y += 4;
  }
};

// ─── Quick Challenge card (chapter checkpoint, dark style) ───────

const drawQuickChallengeCard = (L: Layout, exercise: Exercise) => {
  const { doc, theme: t } = L;
  const w = CONTENT_W;
  const innerW = w - 16;
  const type = (exercise as any).type;

  // Measure.
  L.setFont('semibold', 10.5, t.cream);
  const qLines = doc.splitTextToSize(stripMd(safeText(exercise.question || '')), innerW);
  const options: string[] =
    type === 'multiple-choice' ? ((exercise as any).options || []).map(normalizeOptionText) : [];
  L.setFont('normal', 10, t.cream);
  const optionRows = options.map((o) => doc.splitTextToSize(stripMd(o), innerW - 11));
  const optionsH =
    type === 'true-false' ? 13 :
    options.length ? options.reduce((s, _o, i) => s + optionRows[i].length * 4.8 + 3.6, 2) :
    14; // write-in lines
  const cardH = 13 + qLines.length * 5.2 + 4 + optionsH + 6;

  if (L.y + cardH > PAGE.contentBottom) L.newPage();
  const y0 = L.y;

  doc.setFillColor(...t.dark);
  doc.roundedRect(PAGE.marginX, y0, w, cardH, 2.5, 2.5, 'F');
  doc.setDrawColor(...t.primary);
  doc.setLineWidth(0.4);
  doc.roundedRect(PAGE.marginX + 1.5, y0 + 1.5, w - 3, cardH - 3, 2, 2, 'S');

  drawDiamond(doc, PAGE.marginX + 9.5, y0 + 8.2, 1.4, t.primary);
  L.setFont('semibold', 10, t.primary);
  doc.text('QUICK CHALLENGE', PAGE.marginX + 13.5, y0 + 9.4, { charSpace: 1.4 });

  let cy = y0 + 17.5;
  L.setFont('semibold', 10.5, t.cream);
  qLines.forEach((line: string) => { doc.text(line, PAGE.marginX + 8, cy); cy += 5.2; });
  cy += 3;

  if (type === 'true-false') {
    const btnW = (innerW - 6) / 2;
    ['TRUE', 'FALSE'].forEach((label, i) => {
      const bx = PAGE.marginX + 8 + i * (btnW + 6);
      doc.setDrawColor(...t.primary);
      doc.setLineWidth(0.4);
      doc.roundedRect(bx, cy - 1, btnW, 9.5, 4.5, 4.5, 'S');
      L.setFont('semibold', 10, t.cream);
      doc.text(label, bx + btnW / 2, cy + 5.2, { align: 'center', charSpace: 1 });
    });
  } else if (options.length) {
    options.forEach((_o, i) => {
      doc.setDrawColor(...t.primary);
      doc.setLineWidth(0.4);
      doc.circle(PAGE.marginX + 11, cy + 1.4, 2.8, 'S');
      L.setFont('semibold', 9, t.primary);
      doc.text(letterFor(i), PAGE.marginX + 11, cy + 2.6, { align: 'center' });
      L.setFont('normal', 10, t.cream);
      optionRows[i].forEach((line: string, li: number) => {
        doc.text(line, PAGE.marginX + 17, cy + 2.6 + li * 4.8);
      });
      cy += optionRows[i].length * 4.8 + 3.6;
    });
  } else {
    doc.setDrawColor(...mix(t.dark, t.cream, 0.4));
    doc.setLineWidth(0.3);
    doc.line(PAGE.marginX + 8, cy + 4, PAGE.marginX + w - 8, cy + 4);
    doc.line(PAGE.marginX + 8, cy + 11, PAGE.marginX + w - 8, cy + 11);
  }

  L.y = y0 + cardH + 6;
};

// ─── Cover & back cover ──────────────────────────────────────────

const addCoverPage = async (
  doc: jsPDF,
  theme: Theme,
  font: string,
  title: string,
  level: string | undefined,
  coverImageUrl?: string | null
) => {
  const L = new Layout(doc, theme, font, title, level); // font helper only
  const [coverImg, icon] = await Promise.all([
    loadImageAsDataUrl(coverImageUrl || null),
    loadImageAsDataUrl(theme.iconUrl),
  ]);

  doc.setFillColor(...theme.dark);
  doc.rect(0, 0, PAGE.w, PAGE.h, 'F');

  // Double frame.
  doc.setDrawColor(...theme.primary);
  doc.setLineWidth(0.5);
  doc.rect(9, 9, PAGE.w - 18, PAGE.h - 18);
  doc.setLineWidth(0.2);
  doc.rect(12, 12, PAGE.w - 24, PAGE.h - 24);

  // Series label + icon + ornament.
  drawIconOrGlyph(doc, theme, icon, PAGE.w / 2, 33, 17);
  L.setFont('semibold', 10.5, theme.primary);
  doc.text(theme.label.toUpperCase(), PAGE.w / 2, 49, { align: 'center', charSpace: 1.6 });
  L.setFont('medium', 8.5, mix(theme.dark, theme.cream, 0.55));
  doc.text('PREMIUM READING SERIES', PAGE.w / 2, 55.5, { align: 'center', charSpace: 2 });
  drawOrnamentRow(doc, PAGE.w / 2, 62, theme.primary, 30);

  // Title.
  L.setFont('semibold', 30, theme.cream);
  const titleLines = doc.splitTextToSize(stripMd(title), 160);
  let ty = 80;
  titleLines.forEach((line: string) => {
    doc.text(line, PAGE.w / 2, ty, { align: 'center' });
    ty += 13.5;
  });

  // Level badge pill.
  const badge = `${level ? `${level.toUpperCase()}  ·  ` : ''}${getLevelDescription(level)}`;
  L.setFont('semibold', 9.5, theme.primary);
  const badgeW = doc.getTextWidth(badge) + badge.length * 1 + 16;
  const badgeY = ty + 1;
  doc.setDrawColor(...theme.primary);
  doc.setLineWidth(0.4);
  doc.roundedRect(PAGE.w / 2 - badgeW / 2, badgeY, badgeW, 10, 5, 5, 'S');
  doc.text(badge, PAGE.w / 2, badgeY + 6.6, { align: 'center', charSpace: 1 });

  // Cover image: 4:5 with double gold frame.
  const imgW = 92;
  const imgH = imgW * 1.25;
  const imgY = Math.max(badgeY + 20, PAGE.h - 40 - imgH);
  drawFramedImage(doc, { ...theme, card: theme.light, paper: theme.dark } as Theme, coverImg, PAGE.w / 2 - imgW / 2, imgY, imgW);

  // Footer ornament + tagline.
  drawOrnamentRow(doc, PAGE.w / 2, PAGE.h - 22, theme.primary, 26);
  L.setFont('medium', 8, mix(theme.dark, theme.cream, 0.55));
  doc.text('A PREMIUM ILLUSTRATED READING EXPERIENCE', PAGE.w / 2, PAGE.h - 16, { align: 'center', charSpace: 1.6 });
};

const addBackCover = async (L: Layout, book: BookData) => {
  const { doc, theme: t } = L;
  doc.addPage();
  L.pageNumber += 1;

  doc.setFillColor(...t.dark);
  doc.rect(0, 0, PAGE.w, PAGE.h, 'F');
  doc.setDrawColor(...t.primary);
  doc.setLineWidth(0.5);
  doc.rect(9, 9, PAGE.w - 18, PAGE.h - 18);
  doc.setLineWidth(0.2);
  doc.rect(12, 12, PAGE.w - 24, PAGE.h - 24);

  const icon = await loadImageAsDataUrl(t.iconUrl);
  drawIconOrGlyph(doc, t, icon, PAGE.w / 2, 92, 20);
  drawOrnamentRow(doc, PAGE.w / 2, 112, t.primary, 30);

  L.setFont('semibold', 19, t.cream);
  doc.text('The End', PAGE.w / 2, 130, { align: 'center' });

  L.setFont('normal', 11, mix(t.dark, t.cream, 0.8));
  const message = `You have completed "${stripMd(book.title)}". Revisit the chapters, review the glossary, and keep the values of this story alive in your daily life.`;
  const msgLines = doc.splitTextToSize(message, 130);
  let my = 144;
  msgLines.forEach((line: string) => { doc.text(line, PAGE.w / 2, my, { align: 'center' }); my += 6; });

  drawOrnamentRow(doc, PAGE.w / 2, my + 8, t.primary, 26);

  L.setFont('semibold', 10, t.primary);
  doc.text(t.label.toUpperCase(), PAGE.w / 2, PAGE.h - 30, { align: 'center', charSpace: 1.4 });
  if (book.level) {
    L.setFont('medium', 8.5, mix(t.dark, t.cream, 0.55));
    doc.text(`${book.level.toUpperCase()}  ·  ${getLevelDescription(book.level)}`, PAGE.w / 2, PAGE.h - 23, {
      align: 'center', charSpace: 1.4,
    });
  }
};

// ─── Table of Contents (reserved page, filled after rendering) ───

const fillTableOfContents = (L: Layout, tocPage: number) => {
  const { doc, theme: t } = L;
  doc.setPage(tocPage);

  let y = PAGE.contentTop + 6;
  L.setFont('semibold', 22, t.title);
  doc.text('Contents', PAGE.w / 2, y, { align: 'center' });
  y += 6;
  drawOrnamentRow(doc, PAGE.w / 2, y + 2, t.primary, 28);
  y += 9;
  L.setFont('italic', 10, t.muted);
  doc.text('What awaits inside', PAGE.w / 2, y, { align: 'center' });
  y += 10;

  const chapters = L.toc.filter((e) => e.kind === 'chapter');
  const sections = L.toc.filter((e) => e.kind === 'section');
  const rows = chapters.length + sections.length;
  const available = PAGE.contentBottom - y - (sections.length ? 12 : 0);
  const rowH = Math.max(8, Math.min(11, available / Math.max(rows, 1)));

  const drawRow = (entry: TocEntry) => {
    const cy = y;
    if (entry.kind === 'chapter') {
      doc.setDrawColor(...t.primary);
      doc.setLineWidth(0.45);
      doc.circle(PAGE.marginX + 4, cy - 1.4, 3.4, 'S');
      L.setFont('semibold', 9, t.highlight);
      doc.text(String(entry.num), PAGE.marginX + 4, cy - 0.1, { align: 'center' });
    } else {
      drawDiamond(doc, PAGE.marginX + 4, cy - 1.4, 1.6, t.primary);
    }
    L.setFont(entry.kind === 'chapter' ? 'medium' : 'semibold', 10.5, t.ink);
    const label = stripMd(entry.label);
    doc.text(label, PAGE.marginX + 11, cy);
    const labelW = doc.getTextWidth(label);

    L.setFont('semibold', 10.5, t.title);
    const pn = String(entry.page);
    const pnW = doc.getTextWidth(pn);
    doc.text(pn, PAGE.w - PAGE.marginX, cy, { align: 'right' });

    doc.setDrawColor(...t.line);
    doc.setLineWidth(0.35);
    doc.setLineDashPattern([0.4, 1.6], 0);
    doc.line(PAGE.marginX + 13 + labelW, cy - 1, PAGE.w - PAGE.marginX - pnW - 3, cy - 1);
    doc.setLineDashPattern([], 0);
    y += rowH;
  };

  chapters.forEach(drawRow);
  if (sections.length) {
    y += 2;
    doc.setDrawColor(...t.line);
    doc.setLineWidth(0.3);
    doc.line(PAGE.marginX, y - rowH * 0.55, PAGE.w - PAGE.marginX, y - rowH * 0.55);
    y += 2;
    sections.forEach(drawRow);
  }
};

// ─── Chapter pages ───────────────────────────────────────────────

const addChapterPages = async (L: Layout, page: PageData, chapterNum: number) => {
  const { doc, theme: t } = L;
  L.newPage();
  L.toc.push({ label: stripMd(page.title || `Chapter ${chapterNum}`), page: L.pageNumber, kind: 'chapter', num: chapterNum });

  // Chapter heading.
  sectionEyebrow(L, `Chapter ${chapterWord(chapterNum)}`);
  L.text(stripMd(page.title || ''), { size: 19, weight: 'semibold', color: t.title, lineHeight: 8.6, after: 2 });
  doc.setDrawColor(...t.primary);
  doc.setLineWidth(0.5);
  doc.line(PAGE.marginX, L.y, PAGE.marginX + 46, L.y);
  drawDiamond(doc, PAGE.marginX + 49.5, L.y, 1.2, t.primary);
  L.y += 7;

  // Image: 4:5 framed, alternating side, text wraps beside it.
  const image = await loadImageAsDataUrl(page.image || null);
  const imgW = 72;
  const imgH = imgW * 1.25;
  const onLeft = chapterNum % 2 === 1;
  const imgX = onLeft ? PAGE.marginX : PAGE.w - PAGE.marginX - imgW;
  const gap = 7;

  if (L.y + imgH + 4 <= PAGE.contentBottom) {
    drawFramedImage(doc, t, image, imgX, L.y + 2, imgW);
    L.wrapUntilY = L.y + 2 + imgH + 6;
    L.wrapX = onLeft ? imgX + imgW + gap : PAGE.marginX;
    L.wrapW = CONTENT_W - imgW - gap;
  }

  // Story content — verbatim, with poem cards.
  const vocab = page.vocabulary || [];
  const vocabWords = vocab.map((v) => v.word).filter(Boolean);
  const blocks = parseContentBlocks(page.content || '');
  blocks.forEach((block) => {
    if (block.kind === 'para') writeRichParagraph(L, block.text, vocabWords);
    else drawPoemCard(L, block);
  });

  // Clear the wrap zone before the cards.
  if (L.y < L.wrapUntilY) L.y = L.wrapUntilY;
  L.wrapUntilY = 0;
  L.y += 1;

  drawKeyWordChips(L, vocabWords);
  drawVocabularyCard(L, vocab);
  (page.exercises || []).forEach((ex) => drawQuickChallengeCard(L, ex));
};

// ─── Practice exercise renderers (full workbook style) ───────────

const exerciseHeader = (L: Layout, index: number, exercise: Exercise) => {
  const { doc, theme: t } = L;
  L.ensure(24);
  const y0 = L.y;
  doc.setFillColor(...t.card);
  doc.roundedRect(PAGE.marginX, y0, CONTENT_W, 11, 2, 2, 'F');
  doc.setFillColor(...t.primary);
  doc.rect(PAGE.marginX, y0, 1.6, 11, 'F');
  L.setFont('semibold', 10.5, t.title);
  doc.text(`${index}.  ${stripMd(safeText(exercise.title || 'Exercise'))}`, PAGE.marginX + 6, y0 + 7.2);
  L.y = y0 + 15;
  if (exercise.instructions) {
    L.text(safeText(exercise.instructions), { size: 9.5, weight: 'italic', color: t.muted, after: 2 });
  }
  if (exercise.question) {
    L.text(stripMd(safeText(exercise.question)), { size: 10.5, weight: 'semibold', color: t.ink, after: 3.5 });
  }
};

const drawTrueFalseRow = (L: Layout, num: number, statement: string) => {
  const { doc, theme: t } = L;
  L.setFont('normal', 10.5, t.ink);
  const textW = CONTENT_W - 36;
  const lines = doc.splitTextToSize(stripMd(safeText(statement)), textW);
  const rowH = Math.max(11, lines.length * 4.9 + 5);
  L.ensure(rowH + 2);
  const y0 = L.y;

  doc.setFillColor(...t.white);
  doc.setDrawColor(...t.line);
  doc.setLineWidth(0.35);
  doc.roundedRect(PAGE.marginX, y0, CONTENT_W, rowH, 1.5, 1.5, 'FD');

  L.setFont('semibold', 10, t.highlight);
  doc.text(`${num}.`, PAGE.marginX + 4.5, y0 + 6.8);
  L.setFont('normal', 10.5, t.ink);
  lines.forEach((line: string, i: number) => doc.text(line, PAGE.marginX + 11.5, y0 + 6.8 + i * 4.9));

  ['T', 'F'].forEach((label, i) => {
    const cx = PAGE.w - PAGE.marginX - 19 + i * 11;
    doc.setDrawColor(...t.primary);
    doc.setLineWidth(0.45);
    doc.circle(cx, y0 + rowH / 2, 3.6, 'S');
    L.setFont('semibold', 9.5, t.title);
    doc.text(label, cx, y0 + rowH / 2 + 1.2, { align: 'center' });
  });
  L.y = y0 + rowH + 2.5;
};

const drawVocabularyMatch = (L: Layout, pairs: { word: string; meaning: string }[]) => {
  const { doc, theme: t } = L;
  // Rotate meanings so the answer column is not aligned 1:1.
  const offset = pairs.length > 1 ? Math.max(1, Math.floor(pairs.length / 2)) : 0;
  const meanings = pairs.map((_, i) => pairs[(i + offset) % pairs.length].meaning);

  const colGap = 6;
  const leftW = 56;
  const rightW = CONTENT_W - leftW - colGap;

  pairs.forEach((pair, i) => {
    L.setFont('normal', 10, t.ink);
    const meaningLines = doc.splitTextToSize(safeText(meanings[i]), rightW - 12);
    const rowH = Math.max(11.5, meaningLines.length * 4.7 + 6);
    L.ensure(rowH + 2);
    const y0 = L.y;

    // Left: numbered word + answer box.
    doc.setFillColor(...t.card);
    doc.setDrawColor(...t.line);
    doc.setLineWidth(0.35);
    doc.roundedRect(PAGE.marginX, y0, leftW, rowH, 1.5, 1.5, 'FD');
    L.setFont('semibold', 10, t.highlight);
    doc.text(`${i + 1}.`, PAGE.marginX + 4, y0 + rowH / 2 + 1.4);
    L.setFont('semibold', 10, t.title);
    doc.text(safeText(pair.word), PAGE.marginX + 10.5, y0 + rowH / 2 + 1.4);
    doc.setDrawColor(...t.primary);
    doc.setLineWidth(0.4);
    doc.rect(PAGE.marginX + leftW - 9.5, y0 + rowH / 2 - 3.2, 6.4, 6.4, 'S');

    // Right: lettered meaning.
    const rx = PAGE.marginX + leftW + colGap;
    doc.setFillColor(...t.white);
    doc.setDrawColor(...t.line);
    doc.setLineWidth(0.35);
    doc.roundedRect(rx, y0, rightW, rowH, 1.5, 1.5, 'FD');
    L.setFont('semibold', 10, t.highlight);
    doc.text(`${letterFor(i)})`, rx + 4, y0 + 7);
    L.setFont('normal', 10, t.ink);
    meaningLines.forEach((line: string, li: number) => doc.text(line, rx + 12, y0 + 7 + li * 4.7));

    L.y = y0 + rowH + 2.5;
  });
  L.text('Write the letter of the correct meaning in the box next to each word.', {
    size: 9, weight: 'italic', color: t.muted, after: 5,
  });
};

const drawSequencing = (L: Layout, exercise: Exercise) => {
  const { doc, theme: t } = L;
  const items = ((exercise as any).sequencingItems || []) as { id: string; text: string }[];
  items.forEach((item) => {
    L.setFont('normal', 10.5, t.ink);
    const lines = doc.splitTextToSize(safeText(item.text), CONTENT_W - 26);
    const rowH = Math.max(11, lines.length * 4.9 + 5);
    L.ensure(rowH + 2);
    const y0 = L.y;
    doc.setFillColor(...t.white);
    doc.setDrawColor(...t.line);
    doc.setLineWidth(0.35);
    doc.roundedRect(PAGE.marginX, y0, CONTENT_W, rowH, 1.5, 1.5, 'FD');
    doc.setDrawColor(...t.primary);
    doc.setLineWidth(0.45);
    doc.rect(PAGE.marginX + 4, y0 + rowH / 2 - 3.4, 6.8, 6.8, 'S');
    L.setFont('normal', 10.5, t.ink);
    lines.forEach((line: string, i: number) => doc.text(line, PAGE.marginX + 16, y0 + 6.8 + i * 4.9));
    L.y = y0 + rowH + 2.5;
  });
  L.text('Number the boxes to show the correct order.', { size: 9, weight: 'italic', color: L.theme.muted, after: 5 });
};

const drawDragDrop = (L: Layout, exercise: Exercise) => {
  const { doc, theme: t } = L;
  const groups = ((exercise as any).dragDropGroups || []) as { group: string; items: string[] }[];
  if (!groups.length) return;
  const gap = 5;
  const colW = (CONTENT_W - gap * (groups.length - 1)) / groups.length;
  const maxItems = Math.max(...groups.map((g) => (g.items || []).length), 3);
  const boxH = 15 + maxItems * 7.5;
  L.ensure(boxH + 8);
  const y0 = L.y;
  groups.forEach((group, gi) => {
    const gx = PAGE.marginX + gi * (colW + gap);
    doc.setFillColor(...t.card);
    doc.setDrawColor(...t.line);
    doc.setLineWidth(0.35);
    doc.roundedRect(gx, y0, colW, boxH, 2, 2, 'FD');
    doc.setFillColor(...t.primary);
    doc.rect(gx, y0, colW, 1.2, 'F');
    L.setFont('semibold', 9.5, t.title);
    doc.text(String(group.group).toUpperCase(), gx + colW / 2, y0 + 8.5, { align: 'center', charSpace: 0.6 });
    doc.setDrawColor(...t.line);
    doc.setLineWidth(0.3);
    for (let i = 0; i < maxItems; i++) {
      doc.line(gx + 6, y0 + 17 + i * 7.5, gx + colW - 6, y0 + 17 + i * 7.5);
    }
  });
  L.y = y0 + boxH + 5;

  // Word bank chips.
  const allItems = groups.flatMap((g) => g.items || []);
  if (allItems.length) {
    L.setFont('semibold', 8.5, t.muted);
    L.ensure(14);
    doc.text('WORD BANK', PAGE.marginX, L.y, { charSpace: 1 });
    L.y += 4.5;
    let cx = PAGE.marginX;
    const chipH = 7;
    allItems.forEach((item) => {
      L.setFont('medium', 9, t.ink);
      const cw = doc.getTextWidth(item) + 8;
      if (cx + cw > PAGE.w - PAGE.marginX) { cx = PAGE.marginX; L.y += chipH + 2.5; L.ensure(chipH); }
      doc.setFillColor(...t.white);
      doc.setDrawColor(...t.line);
      doc.setLineWidth(0.35);
      doc.roundedRect(cx, L.y, cw, chipH, 3.5, 3.5, 'FD');
      L.setFont('medium', 9, t.ink);
      doc.text(item, cx + cw / 2, L.y + 4.7, { align: 'center' });
      cx += cw + 2.5;
    });
    L.y += chipH + 6;
  }
};

const drawReflection = (L: Layout, exercise: Exercise) => {
  const { doc, theme: t } = L;
  const prompts = ((exercise as any).discussionPrompts || []) as { question: string; mode?: string }[];
  if (prompts.length) {
    prompts.forEach((p, i) => {
      L.setFont('normal', 10.5, t.ink);
      const lines = doc.splitTextToSize(safeText(p.question), CONTENT_W - (p.mode ? 26 : 10));
      const rowH = Math.max(11, lines.length * 4.9 + 5);
      L.ensure(rowH + 2);
      const y0 = L.y;
      doc.setFillColor(...t.white);
      doc.setDrawColor(...t.line);
      doc.setLineWidth(0.35);
      doc.roundedRect(PAGE.marginX, y0, CONTENT_W, rowH, 1.5, 1.5, 'FD');
      L.setFont('semibold', 10, t.highlight);
      doc.text(`${i + 1}.`, PAGE.marginX + 4.5, y0 + 6.8);
      L.setFont('normal', 10.5, t.ink);
      lines.forEach((line: string, li: number) => doc.text(line, PAGE.marginX + 11.5, y0 + 6.8 + li * 4.9));
      if (p.mode) {
        L.setFont('semibold', 7.5, t.highlight);
        const mw = doc.getTextWidth(p.mode.toUpperCase()) + 6;
        doc.setDrawColor(...t.primary);
        doc.setLineWidth(0.35);
        doc.roundedRect(PAGE.w - PAGE.marginX - mw - 3, y0 + rowH / 2 - 3, mw, 6, 3, 3, 'S');
        doc.text(p.mode.toUpperCase(), PAGE.w - PAGE.marginX - 3 - mw / 2, y0 + rowH / 2 + 1, { align: 'center' });
      }
      L.y = y0 + rowH + 2.5;
    });
  } else {
    for (let i = 0; i < 5; i++) {
      L.ensure(9);
      doc.setDrawColor(...t.line);
      doc.setLineWidth(0.3);
      doc.line(PAGE.marginX, L.y + 5, PAGE.w - PAGE.marginX, L.y + 5);
      L.y += 9;
    }
  }
  L.y += 3;
};

const drawQuizQuestions = (L: Layout, quizQuestions: any[]) => {
  const { doc, theme: t } = L;
  quizQuestions.forEach((q, qi) => {
    const options = (q.options || []) as any[];
    L.setFont('semibold', 10.5, t.ink);
    const qLines = doc.splitTextToSize(`${qi + 1}.  ${stripMd(safeText(q.question))}`, CONTENT_W - 8);
    L.setFont('normal', 10, t.ink);
    const optionRows = options.map((o) => doc.splitTextToSize(stripMd(normalizeOptionText(o)), CONTENT_W - 24));
    const blockH = 8 + qLines.length * 5 + optionRows.reduce((s, r) => s + r.length * 4.7 + 2.6, 0) + 5;
    L.ensure(Math.min(blockH, 70));
    const y0 = L.y;
    doc.setFillColor(...t.white);
    doc.setDrawColor(...t.line);
    doc.setLineWidth(0.35);
    doc.roundedRect(PAGE.marginX, y0, CONTENT_W, blockH, 1.5, 1.5, 'FD');

    let cy = y0 + 7.5;
    L.setFont('semibold', 10.5, t.ink);
    qLines.forEach((line: string) => { doc.text(line, PAGE.marginX + 5, cy); cy += 5; });
    cy += 1;
    options.forEach((_o, oi) => {
      doc.setDrawColor(...t.primary);
      doc.setLineWidth(0.4);
      doc.circle(PAGE.marginX + 9, cy + 0.4, 2.6, 'S');
      L.setFont('semibold', 8.5, t.title);
      doc.text(letterFor(oi), PAGE.marginX + 9, cy + 1.5, { align: 'center' });
      L.setFont('normal', 10, t.ink);
      optionRows[oi].forEach((line: string, li: number) => doc.text(line, PAGE.marginX + 15, cy + 1.5 + li * 4.7));
      cy += optionRows[oi].length * 4.7 + 2.6;
    });
    L.y = y0 + blockH + 4;
  });
};

/** Renders any Exercise in full workbook style (Additional Practice / Final Review). */
const renderWorkbookExercise = (L: Layout, exercise: Exercise, index: number) => {
  const { doc, theme: t } = L;
  const type = (exercise as any).type;
  exerciseHeader(L, index, exercise);

  if (type === 'true-false') {
    L.ensure(14);
    const y0 = L.y;
    const btnW = (CONTENT_W - 8) / 2;
    ['TRUE', 'FALSE'].forEach((label, i) => {
      const bx = PAGE.marginX + i * (btnW + 8);
      doc.setFillColor(...t.white);
      doc.setDrawColor(...t.primary);
      doc.setLineWidth(0.45);
      doc.roundedRect(bx, y0, btnW, 10, 5, 5, 'FD');
      L.setFont('semibold', 10, t.title);
      doc.text(label, bx + btnW / 2, y0 + 6.6, { align: 'center', charSpace: 1 });
    });
    L.y = y0 + 14;
  } else if (type === 'multiple-choice') {
    const options = ((exercise as any).options || []).map(normalizeOptionText);
    options.forEach((option: string, i: number) => {
      L.setFont('normal', 10.5, t.ink);
      const lines = doc.splitTextToSize(stripMd(option), CONTENT_W - 22);
      const rowH = Math.max(10.5, lines.length * 4.9 + 5);
      L.ensure(rowH + 2);
      const y0 = L.y;
      doc.setFillColor(...t.white);
      doc.setDrawColor(...t.line);
      doc.setLineWidth(0.35);
      doc.roundedRect(PAGE.marginX, y0, CONTENT_W, rowH, 1.5, 1.5, 'FD');
      doc.setDrawColor(...t.primary);
      doc.setLineWidth(0.4);
      doc.circle(PAGE.marginX + 6.5, y0 + rowH / 2, 2.8, 'S');
      L.setFont('semibold', 9, t.title);
      doc.text(letterFor(i), PAGE.marginX + 6.5, y0 + rowH / 2 + 1.2, { align: 'center' });
      L.setFont('normal', 10.5, t.ink);
      lines.forEach((line: string, li: number) => doc.text(line, PAGE.marginX + 13, y0 + 6.6 + li * 4.9));
      L.y = y0 + rowH + 2.5;
    });
    L.y += 2;
  } else if (type === 'sequencing') {
    drawSequencing(L, exercise);
  } else if (type === 'drag-drop') {
    drawDragDrop(L, exercise);
  } else if (type === 'reflection') {
    drawReflection(L, exercise);
  } else if (type === 'quiz-game' && Array.isArray((exercise as any).quizQuestions)) {
    drawQuizQuestions(L, (exercise as any).quizQuestions);
  } else if (type === 'fill-blanks') {
    const fillText = safeText((exercise as any).fillBlanksText || '').replace(/\[blank\]/gi, '____________');
    if (fillText) L.text(fillText, { size: 10.5, weight: 'italic', after: 4 });
    for (let i = 0; i < 2; i++) {
      L.ensure(9);
      doc.setDrawColor(...t.line);
      doc.setLineWidth(0.3);
      doc.line(PAGE.marginX, L.y + 5, PAGE.w - PAGE.marginX, L.y + 5);
      L.y += 9;
    }
  } else {
    for (let i = 0; i < 3; i++) {
      L.ensure(9);
      doc.setDrawColor(...t.line);
      doc.setLineWidth(0.3);
      doc.line(PAGE.marginX, L.y + 5, PAGE.w - PAGE.marginX, L.y + 5);
      L.y += 9;
    }
  }
  L.y += 4;
};

// ─── Page classification ─────────────────────────────────────────

const isStoryPage = (page: PageData) => page.type === 'story';
const isGlossaryPage = (page: PageData) => page.type === 'glossary';
const isFinalReviewPage = (page: PageData) => page.type === 'exercises';
const isFinalChallengePage = (page: PageData) => page.type === 'final-challenge';
const isPracticePage = (page: PageData) =>
  !isStoryPage(page) && !isGlossaryPage(page) && !isFinalReviewPage(page) && !isFinalChallengePage(page);

// ─── Additional Practice section ─────────────────────────────────

const addAdditionalPractice = (L: Layout, practicePages: PageData[]) => {
  if (!practicePages.length) return;
  L.newPage();
  L.toc.push({ label: 'Additional Practice', page: L.pageNumber, kind: 'section' });
  sectionHeading(L, 'Practice', 'Additional Practice', 'Reinforce what you learned in the story with these activities.');

  let exIndex = 0;
  practicePages.forEach((page) => {
    L.ensure(28);
    // Sub-section heading per practice page.
    sectionEyebrow(L, stripMd(page.title || 'Practice'));
    if (page.content) L.text(safeText(page.content), { size: 10, weight: 'italic', color: L.theme.muted, after: 4 });

    const exercises = page.exercises || [];
    const trueFalseOnly = exercises.length > 1 && exercises.every((e) => (e as any).type === 'true-false');

    if (trueFalseOnly) {
      // Knowledge-check style: compact numbered statements with T/F circles.
      exercises.forEach((ex, i) => drawTrueFalseRow(L, i + 1, ex.question || ''));
      L.text('Circle T (true) or F (false) for each statement.', { size: 9, weight: 'italic', color: L.theme.muted, after: 6 });
    } else if (exercises.length) {
      exercises.forEach((ex) => renderWorkbookExercise(L, ex, ++exIndex));
    }

    if ((page as any).vocabularyPairs?.length) {
      drawVocabularyMatch(L, (page as any).vocabularyPairs);
    }
    L.y += 4;
  });
};

// ─── Master Glossary (full page height, two columns) ─────────────

const addMasterGlossary = (L: Layout, book: BookData) => {
  // Prefer curated glossary pages; fall back to collected chapter vocabulary.
  const glossaryPages = book.pages.filter(isGlossaryPage);
  let entries: { word: string; definition: string }[] = [];
  if (glossaryPages.length) {
    glossaryPages.forEach((p) => (p.vocabulary || []).forEach((v) => entries.push({ word: safeText(v.word), definition: safeText(v.definition) })));
  } else {
    const map = new Map<string, { word: string; definition: string }>();
    book.pages.forEach((page) =>
      (page.vocabulary || []).forEach((v) => {
        const key = safeText(v.word).toLowerCase();
        if (key && !map.has(key)) map.set(key, { word: safeText(v.word), definition: safeText(v.definition) });
      })
    );
    entries = [...map.values()];
  }
  if (!entries.length) return;

  const { doc, theme: t } = L;
  L.newPage();
  L.toc.push({ label: 'Master Glossary', page: L.pageNumber, kind: 'section' });
  sectionHeading(L, 'Reference', 'Master Glossary', 'Every key word from the story, in one place.');

  const gap = 7;
  const colW = (CONTENT_W - gap) / 2;
  let col = 0;
  let colY = [L.y, L.y];

  const entryHeight = (e: { word: string; definition: string }) => {
    L.setFont('normal', 9.5, t.ink);
    const defLines = doc.splitTextToSize(e.definition, colW - 10);
    return 6 + defLines.length * 4.4 + 5.5;
  };

  entries.forEach((e) => {
    const h = entryHeight(e);
    if (colY[col] + h > PAGE.contentBottom) {
      if (col === 0 && colY[1] + h <= PAGE.contentBottom) {
        col = 1;
      } else {
        L.newPage();
        L.y = PAGE.contentTop + 4;
        sectionEyebrow(L, 'Master Glossary — continued');
        colY = [L.y, L.y];
        col = 0;
      }
    }
    const x = PAGE.marginX + col * (colW + gap);
    const y0 = colY[col];
    doc.setFillColor(...t.card);
    doc.roundedRect(x, y0, colW, h - 2.5, 1.5, 1.5, 'F');
    doc.setFillColor(...t.primary);
    doc.rect(x, y0, 1.3, h - 2.5, 'F');
    L.setFont('semibold', 10, t.highlight);
    doc.text(e.word, x + 5.5, y0 + 5.6);
    L.setFont('normal', 9.5, t.ink);
    doc.splitTextToSize(e.definition, colW - 10).forEach((line: string, i: number) => {
      doc.text(line, x + 5.5, y0 + 10.4 + i * 4.4);
    });
    colY[col] += h;
    // Balance columns: always fill the shorter column next.
    col = colY[0] <= colY[1] ? 0 : 1;
  });
  L.y = Math.max(colY[0], colY[1]) + 4;
};

// ─── Final Review & Final Challenge ──────────────────────────────

const addFinalReviewAndChallenge = (L: Layout, book: BookData) => {
  const reviewPages = book.pages.filter(isFinalReviewPage);
  const challengePages = book.pages.filter(isFinalChallengePage);

  // Split review exercises: quiz-game exercises belong to the Final Challenge.
  const reviewExercises: Exercise[] = [];
  const challengeExercises: Exercise[] = [];
  reviewPages.forEach((p) =>
    (p.exercises || []).forEach((ex) =>
      ((ex as any).type === 'quiz-game' ? challengeExercises : reviewExercises).push(ex)
    )
  );
  challengePages.forEach((p) => (p.exercises || []).forEach((ex) => challengeExercises.push(ex)));

  if (reviewExercises.length) {
    L.newPage();
    L.toc.push({ label: 'Final Review', page: L.pageNumber, kind: 'section' });
    const intro = reviewPages.map((p) => p.content).find(Boolean);
    sectionHeading(L, 'Review', reviewPages[0]?.title ? stripMd(reviewPages[0].title!) : 'Final Review', intro || undefined);
    reviewExercises.forEach((ex, i) => renderWorkbookExercise(L, ex, i + 1));
  }

  if (challengeExercises.length) {
    L.newPage();
    L.toc.push({ label: 'Final Challenge', page: L.pageNumber, kind: 'section' });
    const intro =
      challengePages.map((p) => p.content).find(Boolean) ||
      challengeExercises.map((e) => (e as any).instructions).find(Boolean);
    const title = challengePages[0]?.title || (challengeExercises[0] as any)?.title || 'Final Challenge';
    sectionHeading(L, 'Challenge', stripMd(title), intro || undefined);
    challengeExercises.forEach((ex) => {
      if ((ex as any).type === 'quiz-game' && Array.isArray((ex as any).quizQuestions)) {
        drawQuizQuestions(L, (ex as any).quizQuestions);
      } else {
        renderWorkbookExercise(L, ex, 1);
      }
    });
  }
};

// ─── Answer Key ──────────────────────────────────────────────────

type AnswerGroup = { heading: string; items: string[] };

const collectAnswerKey = (book: BookData): AnswerGroup[] => {
  const groups: AnswerGroup[] = [];

  // Chapter Quick Challenges.
  const chapterItems: string[] = [];
  book.pages.filter(isStoryPage).forEach((page, i) => {
    (page.exercises || []).forEach((ex) => {
      const answer = normalizeAnswer((ex as any).correctAnswer, ex);
      if (answer) chapterItems.push(`Ch. ${i + 1}:  ${answer}`);
    });
  });
  if (chapterItems.length) groups.push({ heading: 'Chapter Quick Challenges', items: chapterItems });

  // Additional Practice pages.
  book.pages.filter(isPracticePage).forEach((page) => {
    const items: string[] = [];
    (page.exercises || []).forEach((ex, i) => {
      const answer = normalizeAnswer((ex as any).correctAnswer, ex);
      if (answer) items.push(`${i + 1}.  ${answer}`);
    });
    if ((page as any).vocabularyPairs?.length) {
      ((page as any).vocabularyPairs as { word: string; meaning: string }[]).forEach((p) => {
        items.push(`${p.word}  →  ${p.meaning}`);
      });
    }
    if (items.length) groups.push({ heading: stripMd(page.title || 'Practice'), items });
  });

  // Final Review (non quiz-game) + Final Challenge (quiz-game questions).
  const reviewItems: string[] = [];
  const challengeItems: string[] = [];
  const pushQuiz = (ex: Exercise) => {
    ((ex as any).quizQuestions || []).forEach((q: any, i: number) => {
      const idx = (q.options || []).findIndex((o: any) => o?.isCorrect);
      if (idx >= 0) challengeItems.push(`${i + 1}.  ${letterFor(idx)}) ${stripMd(normalizeOptionText(q.options[idx]))}`);
    });
  };
  book.pages.filter(isFinalReviewPage).forEach((page) => {
    (page.exercises || []).forEach((ex, i) => {
      if ((ex as any).type === 'quiz-game') { pushQuiz(ex); return; }
      const type = (ex as any).type;
      const raw = (ex as any).correctAnswer;
      let answer = '';
      if (type === 'sequencing' && Array.isArray(raw)) answer = `Correct order: ${raw.join(' → ')}`;
      else if (type === 'reflection' || raw === null || raw === undefined) answer = 'Open-ended — see discussion prompts.';
      else answer = normalizeAnswer(raw, ex);
      if (answer) reviewItems.push(`${i + 1}. ${stripMd(safeText(ex.title || `Exercise ${i + 1}`))}:  ${answer}`);
    });
  });
  book.pages.filter(isFinalChallengePage).forEach((page) => {
    (page.exercises || []).forEach((ex) => {
      if ((ex as any).type === 'quiz-game') pushQuiz(ex);
      else {
        const answer = normalizeAnswer((ex as any).correctAnswer, ex);
        if (answer) challengeItems.push(answer);
      }
    });
  });
  if (reviewItems.length) groups.push({ heading: 'Final Review', items: reviewItems });
  if (challengeItems.length) groups.push({ heading: 'Final Challenge', items: challengeItems });

  return groups;
};

const addAnswerKey = (L: Layout, book: BookData) => {
  const groups = collectAnswerKey(book);
  if (!groups.length) return;

  const { doc, theme: t } = L;
  L.newPage();
  L.toc.push({ label: 'Answer Key', page: L.pageNumber, kind: 'section' });
  sectionHeading(L, 'Solutions', 'Answer Key', 'Check your answers for every activity in this book.');

  // Two-column flow using the full page height.
  const gap = 7;
  const colW = (CONTENT_W - gap) / 2;
  let col = 0;
  let colY = [L.y, L.y];

  const write = (h: number, draw: (x: number, y: number) => void) => {
    if (colY[col] + h > PAGE.contentBottom) {
      if (col === 0) col = 1;
      if (colY[col] + h > PAGE.contentBottom) {
        L.newPage();
        L.y = PAGE.contentTop + 4;
        sectionEyebrow(L, 'Answer Key — continued');
        colY = [L.y, L.y];
        col = 0;
      }
    }
    draw(PAGE.marginX + col * (colW + gap), colY[col]);
    colY[col] += h;
  };

  groups.forEach((group) => {
    // Group heading.
    write(9, (x, y) => {
      doc.setFillColor(...t.card);
      doc.roundedRect(x, y, colW, 7, 1.5, 1.5, 'F');
      doc.setFillColor(...t.primary);
      doc.rect(x, y, 1.3, 7, 'F');
      L.setFont('semibold', 9, t.title);
      doc.text(group.heading.toUpperCase(), x + 4.5, y + 4.8, { charSpace: 0.4 });
    });
    // Items.
    group.items.forEach((item) => {
      L.setFont('normal', 9, t.ink);
      const lines = doc.splitTextToSize(item, colW - 5);
      const h = lines.length * 4.1 + 1.8;
      write(h, (x, y) => {
        L.setFont('normal', 9, t.ink);
        lines.forEach((line: string, i: number) => doc.text(line, x + 3, y + 3.2 + i * 4.1));
      });
    });
    write(3.5, () => undefined);
  });
};

// ─── Book PDF (public API) ───────────────────────────────────────

export const generateBookPDF = async (book: BookData) => {
  dispatchPdfStart(book.title);
  await sleep(50);

  try {
    const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
    const font = await registerPoppins(doc);
    const theme = getThemeForBook(book);

    const storyPages = book.pages.filter(isStoryPage);
    const practicePages = book.pages.filter(isPracticePage);

    // 1. Cover
    await addCoverPage(doc, theme, font, book.title, book.level, storyPages[0]?.image || null);

    const layout = new Layout(doc, theme, font, book.title, book.level);
    layout.pageNumber = 1; // cover

    // 2. Table of Contents — reserved now, filled after rendering.
    layout.newPage();
    const tocPage = doc.getNumberOfPages();

    // 3. Story chapters
    for (let i = 0; i < storyPages.length; i += 1) {
      await addChapterPages(layout, storyPages[i], i + 1);
      await sleep(5);
    }

    // 4. Additional Practice (every non-story practice page — quizzes,
    //    vocabulary matching, knowledge checks, true/false, review drills)
    addAdditionalPractice(layout, practicePages);

    // 5. Master Glossary
    addMasterGlossary(layout, book);

    // 6 & 7. Final Review + Final Challenge
    addFinalReviewAndChallenge(layout, book);

    // 8. Answer Key
    addAnswerKey(layout, book);

    // 9. Back Cover
    await addBackCover(layout, book);

    // Fill the reserved Contents page now that page numbers are known.
    fillTableOfContents(layout, tocPage);

    const fileName = `${fileNameSafe(book.title)}_${book.level || ''}_Reading_Book.pdf`.replace(/__+/g, '_');
    doc.save(fileName);
  } finally {
    dispatchPdfEnd(book.title);
  }
};

// ─── Teacher / Student guides (public API preserved) ─────────────

const addGuideSectionCard = (
  L: Layout,
  heading: string,
  value?: string | string[],
  options?: { accent?: boolean; numbered?: boolean }
) => {
  if (!value || (Array.isArray(value) && value.length === 0)) return;
  const { doc, theme: t } = L;
  const items = (Array.isArray(value) ? value : [value]).map((v) => safeText(v)).filter(Boolean);
  if (!items.length) return;

  // Measure.
  L.setFont('normal', 10, t.ink);
  const rendered = items.map((item, i) => {
    const prefix = Array.isArray(value) ? (options?.numbered ? `${i + 1}.  ` : '·  ') : '';
    return doc.splitTextToSize(`${prefix}${item}`, CONTENT_W - 12) as string[];
  });
  const bodyH = rendered.reduce((s, lines) => s + lines.length * 4.8 + 1.6, 0);
  const cardH = 12 + bodyH + 4;

  if (L.y + Math.min(cardH, 60) > PAGE.contentBottom) L.newPage();
  const fits = L.y + cardH <= PAGE.contentBottom;
  const y0 = L.y;

  if (fits) {
    doc.setFillColor(...(options?.accent ? t.card : t.white));
    doc.setDrawColor(...t.line);
    doc.setLineWidth(0.35);
    doc.roundedRect(PAGE.marginX, y0, CONTENT_W, cardH, 2, 2, 'FD');
    doc.setFillColor(...t.primary);
    doc.rect(PAGE.marginX, y0, 1.5, cardH, 'F');
  }
  L.setFont('semibold', 9.5, t.title);
  doc.text(heading.toUpperCase(), PAGE.marginX + 6, y0 + 7.5, { charSpace: 0.8 });
  L.y = y0 + 13;
  rendered.forEach((lines) => {
    lines.forEach((line) => {
      L.ensure(4.8);
      L.setFont('normal', 10, t.ink);
      doc.text(line, PAGE.marginX + 6, L.y);
      L.y += 4.8;
    });
    L.y += 1.6;
  });
  L.y = fits ? y0 + cardH + 5 : L.y + 5;
};

export const generateTeacherGuidePDF = async (
  title: string,
  subtitle: string,
  content: TeacherGuideSection[],
  metadata?: TeacherGuideMetadata
) => {
  dispatchPdfStart(title);
  await sleep(50);

  try {
    const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
    const font = await registerPoppins(doc);
    const theme = getThemeForBook(title);
    const level = (metadata as any)?.level || subtitle?.match(/\b(A1|A2|B1|B2|C1|C2)\b/i)?.[1];

    await addCoverPage(doc, theme, font, title, level, null);
    const layout = new Layout(doc, theme, font, title, level);
    layout.pageNumber = 1;

    if (metadata?.purpose || metadata?.approachDesc) {
      layout.newPage();
      sectionHeading(layout, 'Teacher Guide', 'Overview & Pedagogical Goals');
      addGuideSectionCard(layout, 'Core Educational Purpose', metadata.purpose, { accent: true });
      addGuideSectionCard(layout, 'Pedagogical Approach', metadata.approachDesc);
    }

    for (let i = 0; i < content.length; i += 1) {
      const s = content[i];
      layout.newPage();
      sectionHeading(layout, `Lesson ${i + 1}`, s.chapter, s.timing ? `Suggested timing: ${s.timing}` : undefined);
      addGuideSectionCard(layout, 'Objectives', s.objectives, { accent: true, numbered: true });
      addGuideSectionCard(layout, 'Pedagogy', s.pedagogy);
      addGuideSectionCard(layout, 'Grammar Focus', s.grammarFocus, { accent: true });
      addGuideSectionCard(layout, 'Pronunciation Focus', s.pronunciationFocus);
      addGuideSectionCard(layout, 'Lesson Flow', s.lessonPlan, { accent: true });
      addGuideSectionCard(layout, 'Discussion Points', s.discussionPoints, { numbered: true });
      addGuideSectionCard(layout, 'Support for Struggling Learners', s.differentiation?.strugglingLearners, { accent: true });
      addGuideSectionCard(layout, 'Extension for Fast Finishers', s.differentiation?.fastFinishers);
      addGuideSectionCard(layout, 'Interactive Tips', s.interactiveTips, { numbered: true });
      addGuideSectionCard(layout, 'Kinesthetic Activities', (s as any).kinestheticActivities, { accent: true });
      addGuideSectionCard(layout, 'Global Citizenship / Values Link', (s as any).globalCitizenship);
      addGuideSectionCard(layout, 'Extra Resources', (s as any).extraResources?.worksheets);
      await sleep(5);
    }

    doc.save(`${fileNameSafe(title)}_Teacher_Guide.pdf`);
  } finally {
    dispatchPdfEnd(title);
  }
};

const cleanMarkdownLine = (line: string) => line.replace(/[#*_`~>-]/g, '').trim();

export const generateStudentGuidePDF = async (
  title: string,
  subtitle: string,
  metadata?: StudentGuideMetadata,
  guideText?: string,
  sections?: any[]
) => {
  dispatchPdfStart(title);
  await sleep(50);

  try {
    const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
    const font = await registerPoppins(doc);
    const theme = getThemeForBook(title);
    const level = (metadata as any)?.level || subtitle?.match(/\b(A1|A2|B1|B2|C1|C2)\b/i)?.[1];

    await addCoverPage(doc, theme, font, title, level, null);
    const layout = new Layout(doc, theme, font, title, level);
    layout.pageNumber = 1;

    layout.newPage();
    sectionHeading(
      layout,
      'Self-Study Guide',
      'Your Study Roadmap',
      'Use this guide as a personal learning companion before, during, and after reading.'
    );

    if ((metadata as any)?.whoIsThisFor) addGuideSectionCard(layout, 'Who Is This For?', (metadata as any).whoIsThisFor, { accent: true });
    if ((metadata as any)?.whatWillYouLearn) addGuideSectionCard(layout, 'What Will You Learn?', (metadata as any).whatWillYouLearn);
    if ((metadata as any)?.howToUse) addGuideSectionCard(layout, 'How to Use This Guide', (metadata as any).howToUse, { accent: true });

    if (sections && sections.length > 0) {
      sections.forEach((section, idx) => {
        addGuideSectionCard(layout, `${idx + 1}. ${section.title || 'Study Section'}`, section.text || '', { accent: idx % 2 === 0 });
        if (section.points?.length) addGuideSectionCard(layout, 'Practice Points', section.points, { numbered: true });
      });
    }

    if (guideText) {
      const blocks = guideText.split(/\n\s*\n/).map(cleanMarkdownLine).filter(Boolean);
      if (blocks.length) {
        layout.newPage();
        sectionHeading(layout, 'Study Material', 'Additional Study Material');
      }
      blocks.forEach((block) => {
        if (block.length < 80 && /:$/.test(block)) {
          addGuideSectionCard(layout, block.replace(/:$/, ''), '', { accent: true });
        } else {
          addGuideSectionCard(layout, 'Study Note', block);
        }
      });
    }

    // Reflection pages.
    layout.newPage();
    sectionHeading(layout, 'Reflection', 'Personal Reflection Pages');
    ['My Chapter Summary', 'New Words I Learned', 'A Lesson for My Life', 'Questions I Want to Discuss'].forEach((label) => {
      layout.ensure(42);
      const y0 = layout.y;
      layout.doc.setFillColor(...theme.white);
      layout.doc.setDrawColor(...theme.line);
      layout.doc.setLineWidth(0.35);
      layout.doc.roundedRect(PAGE.marginX, y0, CONTENT_W, 37, 2, 2, 'FD');
      layout.doc.setFillColor(...theme.primary);
      layout.doc.rect(PAGE.marginX, y0, 1.5, 37, 'F');
      layout.setFont('semibold', 10, theme.title);
      layout.doc.text(label.toUpperCase(), PAGE.marginX + 6, y0 + 8, { charSpace: 0.8 });
      layout.doc.setDrawColor(...theme.line);
      layout.doc.setLineWidth(0.3);
      for (let i = 0; i < 3; i++) {
        layout.doc.line(PAGE.marginX + 6, y0 + 17 + i * 7, PAGE.w - PAGE.marginX - 6, y0 + 17 + i * 7);
      }
      layout.y = y0 + 42;
    });

    doc.save(`${fileNameSafe(title)}_Self_Study_Guide.pdf`);
  } finally {
    dispatchPdfEnd(title);
  }
};