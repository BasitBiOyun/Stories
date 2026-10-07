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

let reader: Reader = bundledReader;

/** Node scripts call this once with a disk reader before touching any content. */
export const setContentReader = (value: Reader) => {
  reader = value;
};

export const readContent = <T>(kind: 'books' | 'guides', name: string): Promise<T> => reader(kind, name) as Promise<T>;
