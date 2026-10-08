import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Level, PageData } from '../types';
import { Inspector } from './Inspector';
import { IconBack, IconChevron, IconDesktop, IconPhone, IconPointer, IconRefresh, IconTablet } from './icons';
import { findText, unitOf } from './mapping';
import { PAGE_TYPES } from './labels';
import { navigate } from './router';
import { dirtyDrafts, getState, loadFile, onDraftChange, storyName, toast, useStore, type EditionSummary } from './store';
import { bookPath, editionOf, guidePath, normalize, TTS_PATH, type Path } from './util';

/**
 * "Uygulamada düzenle": the real app in a frame, and beside it the form for whatever was clicked.
 * The frame reads the panel's edited files (bridge.ts), so every change shows in the app at once,
 * before it is saved.
 */

export interface Selection {
  /** Which file: the book or the guide, in which language. */
  file: string;
  /** The unit in that file (one paragraph, one exercise, the picture…). */
  unit: Path;
  /** The exact place that was clicked, to light it up in the form. */
  focus?: Path;
}

type Device = 'phone' | 'tablet' | 'desktop';

const HOVER_STYLE = `
[data-panel-hover] { outline: 2px dashed #c2aa6b !important; outline-offset: 2px; cursor: pointer !important; }
[data-panel-selected] { outline: 3px solid #0b7a52 !important; outline-offset: 2px; }
`;

export const Editor = ({ storyId, level, pageNumber, language: initialLanguage, focus }: { storyId: string; level: string; pageNumber: number; language: 'en' | 'ar'; focus?: string }) => {
  const summary = useStore(state => state.summary);
  const drafts = useStore(state => state.drafts);
  const locks = useStore(state => state.locks);
  const [language, setLanguage] = useState<'en' | 'ar'>(initialLanguage);
  // A link to the other language of the open book (search, a notice) switches the page too.
  useEffect(() => setLanguage(initialLanguage), [initialLanguage]);
  const [device, setDevice] = useState<Device>('phone');
  const [picking, setPicking] = useState(true);
  const [selection, setSelection] = useState<Selection | null>(null);
  const [frameKey, setFrameKey] = useState(0);
  const frame = useRef<HTMLIFrameElement>(null);
  const pickingRef = useRef(picking);
  pickingRef.current = picking;

  const edition = editionOf(storyId, level, language);
  const enPath = bookPath(editionOf(storyId, level, 'en'));
  const arPath = bookPath(editionOf(storyId, level, 'ar'));
  const filePath = bookPath(edition);
  const guideFile = guidePath(edition);
  const pageIndex = Math.max(0, pageNumber - 1);

  // The four files of this book level, and the narration list of its language.
  useEffect(() => {
    void Promise.all([loadFile(enPath), loadFile(arPath), loadFile(guidePath(editionOf(storyId, level, 'en'))), loadFile(guidePath(editionOf(storyId, level, 'ar')))]).then(results => {
      if (!results[0]) toast('Bu kitabın dosyası açılamadı.', 'bad');
    });
    void loadFile(TTS_PATH.en);
    void loadFile(TTS_PATH.ar);
  }, [enPath, arPath, storyId, level]);

  const book = drafts[filePath]?.value as { level: Level; book: { pages: PageData[] } } | undefined;
  const pages = book?.book.pages ?? [];
  const page = pages[pageIndex];

  // A frame address that opens the book where the panel is, as a teacher (so teacher-only parts show).
  const src = useMemo(() => {
    try {
      // The app's own entry screens (access code, role, tour) are skipped: the panel is already signed in.
      if (!localStorage.getItem('app_access_code')) localStorage.setItem('app_access_code', 'stories_enar');
      if (!localStorage.getItem('app_user_role')) localStorage.setItem('app_user_role', 'teacher');
      localStorage.setItem('app_reader_tour_done', '1');
    } catch {
      /* storage may be closed */
    }
    return `/?panel-preview=1&gizli=panel&lang=${language}#/${storyId}/${level.toLowerCase()}/${pageIndex + 1}`;
    // The frame keeps its own page after the first load; moving is done through its hash.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyId, level, language, frameKey]);

  // Tell the app in the frame to re-read a file the panel changed.
  useEffect(() => {
    let timer: number | undefined;
    const ours = new Set([enPath, arPath, guidePath(editionOf(storyId, level, 'en')), guidePath(editionOf(storyId, level, 'ar'))]);
    const off = onDraftChange(path => {
      if (!ours.has(path)) return;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => frame.current?.contentWindow?.dispatchEvent(new Event('panel-preview-refresh')), 350);
    });
    return () => {
      window.clearTimeout(timer);
      off();
    };
  }, [enPath, arPath, storyId, level]);

  // Move the frame when the panel's page changes (and the frame is elsewhere).
  useEffect(() => {
    const view = frame.current?.contentWindow;
    if (!view) return;
    try {
      const wanted = `#/${storyId}/${level.toLowerCase()}/${pageIndex + 1}`;
      if (view.location.hash !== wanted) view.location.hash = wanted;
    } catch {
      /* not loaded yet */
    }
  }, [storyId, level, pageIndex]);

  const go = useCallback(
    (number: number, lang = language, place?: string) => navigate(`/duzenle/${storyId}/${level.toLowerCase()}/${number}?dil=${lang}${place ? `&yer=${encodeURIComponent(place)}` : ''}`, { replace: true }),
    [storyId, level, language],
  );

  // A place given in the address (from search or from a check) is opened once the file is in.
  useEffect(() => {
    if (!focus || !book) return;
    const path = focus.split('.').map(part => (/^\d+$/.test(part) ? Number(part) : part));
    setSelection({ file: filePath, unit: unitOf(path), focus: path });
  }, [focus, book, filePath]);

  const select = useCallback(
    (text: string, isPicture: boolean, word?: string) => {
      const state = getState();
      const current = state.drafts[filePath]?.value as { book: { pages: PageData[] } } | undefined;
      const guide = state.drafts[guideFile]?.value;
      if (!current) return;
      const currentPage = current.book.pages[pageIndex];
      if (isPicture && currentPage) {
        setSelection({ file: filePath, unit: ['book', 'pages', pageIndex, 'hotspots'] });
        return;
      }
      if (word && currentPage) {
        const wanted = normalize(word).replace(/[^\p{L}\p{N} ]+/gu, '').trim();
        const at = (currentPage.vocabulary ?? []).findIndex(item => {
          const name = normalize(item.word).replace(/[^\p{L}\p{N} ]+/gu, '').trim();
          return name === wanted || (name.length > 2 && (wanted.includes(name) || name.includes(wanted)));
        });
        if (at >= 0) {
          setSelection({ file: filePath, unit: ['book', 'pages', pageIndex, 'vocabulary', at] });
          return;
        }
      }
      const found = findText(
        [
          { root: ['book', 'pages', pageIndex], value: currentPage },
          { root: ['book'], value: current.book },
          ...(guide ? [{ root: [] as Path, value: guide }] : []),
        ],
        text,
      );
      if (!found) {
        toast('Bu yazı kitabın dosyasında yok: uygulamanın kendi düğme veya başlık yazısı olabilir. Onlar kodla değişir.', 'info');
        return;
      }
      const inGuide = found[0] !== 'book';
      setSelection({ file: inGuide ? guideFile : filePath, unit: unitOf(found), focus: found });
    },
    [filePath, guideFile, pageIndex],
  );

  // The frame's listeners are added once per load, so they read the current values through refs.
  const selectRef = useRef(select);
  selectRef.current = select;
  const routeRef = useRef({ storyId, level, pageNumber, go });
  routeRef.current = { storyId, level, pageNumber, go };

  // Clicks, hovers and page changes inside the frame.
  const onFrameLoad = useCallback(() => {
    const view = frame.current?.contentWindow;
    const doc = frame.current?.contentDocument;
    if (!view || !doc) return;
    const style = doc.createElement('style');
    style.textContent = HOVER_STYLE;
    doc.head.appendChild(style);
    let hovered: Element | null = null;
    const clearHover = () => {
      hovered?.removeAttribute('data-panel-hover');
      hovered = null;
    };
    doc.addEventListener('mouseover', event => {
      if (!pickingRef.current) return clearHover();
      const target = event.target as Element;
      if (hovered === target) return;
      clearHover();
      if (target && target !== doc.body && target !== doc.documentElement) {
        hovered = target;
        target.setAttribute('data-panel-hover', '');
      }
    });
    doc.addEventListener('mouseout', clearHover);
    doc.addEventListener(
      'click',
      event => {
        if (!pickingRef.current) return;
        const target = event.target as HTMLElement;
        // Moving between pages stays possible: page arrows and the page menu work as usual.
        if (target.closest('[data-panel-pass], nav[aria-label], [role="navigation"]')) return;
        event.preventDefault();
        event.stopPropagation();
        doc.querySelectorAll('[data-panel-selected]').forEach(element => element.removeAttribute('data-panel-selected'));
        target.setAttribute('data-panel-selected', '');
        const picture = target.tagName === 'IMG' || Boolean(target.closest('figure, [data-hotspot], [class*="hotspot"]'));
        // Story texts are drawn word by word, so a click lands on one word: a highlighted word
        // opens its word note, any other word the whole paragraph (or option, title, button) it is in.
        const word = target.closest<HTMLElement>('[data-vocab-word], p [role="button"]');
        const block = target.closest<HTMLElement>('p, li, h1, h2, h3, h4, h5, h6, blockquote, figcaption, label, button, td, th, dt, dd, summary, legend') ?? target;
        const textOf = (element: HTMLElement) => (element.innerText || element.getAttribute('aria-label') || element.getAttribute('title') || element.getAttribute('alt') || '').trim();
        const text = textOf(block);
        selectRef.current(text, picture && textOf(target).length < 2, word ? textOf(word) : undefined);
      },
      true,
    );
    const syncRoute = () => {
      const parts = view.location.hash.replace(/^#\/?/, '').split('/');
      const [routeStory, routeLevel, routePage] = parts;
      if (!routeStory || !routeLevel) return;
      const number = Number(routePage || 1);
      const current = routeRef.current;
      if (routeStory !== current.storyId || routeLevel.toUpperCase() !== current.level.toUpperCase()) {
        navigate(`/duzenle/${routeStory}/${routeLevel}/${number}?dil=${doc.documentElement.lang === 'ar' ? 'ar' : 'en'}`);
        return;
      }
      if (number !== current.pageNumber) current.go(number);
    };
    view.addEventListener('hashchange', syncRoute);
    // The app's own language switch: follow it.
    new MutationObserver(() => {
      const lang = doc.documentElement.lang === 'ar' ? 'ar' : 'en';
      setLanguage(current => (current === lang ? current : lang));
    }).observe(doc.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }, []);

  const lockedBy = locks[filePath] ?? [];
  const editions = summary?.filter(item => item.language === 'en') ?? [];

  return (
    <div className="editor">
      <section className="editor-stage" aria-label="Uygulama önizlemesi">
        <div className="stage-bar">
          <button type="button" className="icon-btn" aria-label="Kitaba dön" title="Kitaba dön" onClick={() => navigate(`/kitap/${storyId}`)}>
            <IconBack size={18} />
          </button>
          <select
            aria-label="Kitap"
            value={`${storyId}/${level.toLowerCase()}`}
            onChange={event => {
              const [nextStory, nextLevel] = event.target.value.split('/');
              navigate(`/duzenle/${nextStory}/${nextLevel}/1?dil=${language}`);
            }}
          >
            {editions.map((item: EditionSummary) => (
              <option key={item.edition} value={`${item.storyId}/${item.level.toLowerCase()}`}>
                {storyName(item.storyId)} · {item.level}
              </option>
            ))}
          </select>
          <select aria-label="Sayfa" value={pageIndex} onChange={event => go(Number(event.target.value) + 1)}>
            {pages.map((item, index) => (
              <option key={item.id} value={index}>
                {item.type === 'story' ? `${index + 1}. ${item.title}` : `${index + 1}. ${PAGE_TYPES[item.type] ?? item.title}`}
              </option>
            ))}
          </select>
          <span className="row" style={{ gap: 2 }}>
            <button type="button" className="icon-btn" aria-label="Önceki sayfa" disabled={pageIndex === 0} onClick={() => go(pageIndex)}>
              <IconBack size={18} />
            </button>
            <button type="button" className="icon-btn" aria-label="Sonraki sayfa" disabled={pageIndex >= pages.length - 1} onClick={() => go(pageIndex + 2)}>
              <IconChevron size={18} />
            </button>
          </span>
          <div className="seg" role="group" aria-label="Dil">
            <button type="button" aria-pressed={language === 'en'} onClick={() => (setLanguage('en'), go(pageNumber, 'en'))}>
              English
            </button>
            <button type="button" aria-pressed={language === 'ar'} onClick={() => (setLanguage('ar'), go(pageNumber, 'ar'))}>
              العربية
            </button>
          </div>
          <div className="seg device-seg" role="group" aria-label="Ekran">
            <button type="button" aria-pressed={device === 'phone'} onClick={() => setDevice('phone')} title="Telefon">
              <IconPhone size={16} />
              <span className="sr-only">Telefon</span>
            </button>
            <button type="button" aria-pressed={device === 'tablet'} onClick={() => setDevice('tablet')} title="Tablet">
              <IconTablet size={16} />
              <span className="sr-only">Tablet</span>
            </button>
            <button type="button" aria-pressed={device === 'desktop'} onClick={() => setDevice('desktop')} title="Bilgisayar">
              <IconDesktop size={16} />
              <span className="sr-only">Bilgisayar</span>
            </button>
          </div>
          <button
            type="button"
            className={`btn small ${picking ? 'gold' : ''}`}
            aria-pressed={picking}
            onClick={() => setPicking(value => !value)}
            title="Açıkken uygulamada tıkladığınız şey sağda düzenlenmek üzere açılır. Kapalıyken uygulamayı normal kullanırsınız (alıştırma çözmek gibi)."
          >
            <IconPointer size={15} /> {picking ? 'Tıkla-düzenle açık' : 'Tıkla-düzenle kapalı'}
          </button>
          <button type="button" className="icon-btn" aria-label="Önizlemeyi yenile" title="Önizlemeyi yenile" onClick={() => setFrameKey(value => value + 1)}>
            <IconRefresh size={17} />
          </button>
        </div>
        {lockedBy.length > 0 && (
          <div className="notice warn" style={{ margin: '10px 14px 0' }}>
            {lockedBy.join(', ')} bu kitapta onay bekleyen bir değişiklik yaptı. Aynı yeri siz de değiştirirseniz ikinci yayınlanan çakışabilir; önce onunkinin yayınlanmasını bekleyin.
          </div>
        )}
        <div className={`frame-holder ${device}`}>
          <iframe key={`${src}-${frameKey}`} ref={frame} src={src} title="Uygulama" onLoad={onFrameLoad} />
        </div>
      </section>
      <Inspector
        storyId={storyId}
        level={level}
        language={language}
        pageIndex={pageIndex}
        page={page}
        selection={selection}
        onSelect={setSelection}
        dirtyCount={dirtyDrafts(drafts).length}
      />
    </div>
  );
};
