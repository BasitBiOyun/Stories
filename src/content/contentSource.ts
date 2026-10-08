// Where the book and guide JSON comes from. In the browser Vite turns each JSON file into its
// own lazily loaded chunk; Node scripts (validators, audits) install a reader that reads the
// files from disk instead, so the same registry serves both.
type Loader = () => Promise<unknown>;
type Reader = (kind: 'books' | 'guides', name: string) => Promise<unknown>;

let bundled: Record<'books' | 'guides', Record<string, Loader>> | null = null;

const bundledModules = () => {
  if (!bundled) {
    try {
      // Vite replaces these calls with the real file map. Outside a Vite build (Node scripts)
      // they are not available, and the disk reader below is used instead.
      bundled = {
        books: import.meta.glob('./books/*.json', { import: 'default' }) as Record<string, Loader>,
        guides: import.meta.glob('./guides/*.json', { import: 'default' }) as Record<string, Loader>,
      };
    } catch {
      bundled = { books: {}, guides: {} };
    }
  }
  return bundled;
};

const bundledReader: Reader = (kind, name) => {
  const loader = bundledModules()[kind][`./${kind}/${name}.json`];
  if (!loader) throw new Error(`[Content] Missing ${kind} file: ${name}.json`);
  return loader();
};

/**
 * Inside the content panel the app is shown in a frame with ?panel-preview. The panel (same
 * origin) then lends the book and guide files it is editing, so the page shows a change before it
 * is saved. Anywhere else, or when the panel has no edited copy, the app's own files are used.
 */
interface PanelPreviewBridge {
  read: (kind: 'books' | 'guides', name: string) => unknown;
}

const panelPreviewReader = (): Reader | null => {
  if (typeof window === 'undefined' || window.parent === window) return null;
  if (!new URLSearchParams(window.location.search).has('panel-preview')) return null;
  try {
    const bridge = (window.parent as unknown as { __panelPreview?: PanelPreviewBridge }).__panelPreview;
    if (!bridge) return null;
    return (kind, name) => {
      const lent = bridge.read(kind, name);
      return lent === undefined || lent === null ? bundledReader(kind, name) : Promise.resolve(lent);
    };
  } catch {
    // A frame from another site: no access to the parent, so no lent files.
    return null;
  }
};

let reader: Reader = panelPreviewReader() ?? bundledReader;

/** Node scripts call this once with a disk reader before touching any content. */
export const setContentReader = (value: Reader) => {
  reader = value;
};

export const readContent = <T>(kind: 'books' | 'guides', name: string): Promise<T> => reader(kind, name) as Promise<T>;
