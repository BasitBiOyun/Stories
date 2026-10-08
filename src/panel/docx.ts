/**
 * Reads a Word (.docx) file in the browser: chapters from its headings (or from lines such as
 * "Chapter 3: …" / "Bölüm 3"), paragraphs as text, bold and highlighted words kept as **word**,
 * which the hoca uses to mark word-note candidates. Nothing leaves the computer but the text.
 *
 * A .docx file is a zip; the browser unpacks it with its own DecompressionStream.
 */

export interface StoryDraft {
  title: string;
  chapters: { title: string; paragraphs: string[]; marked: string[] }[];
  /** Text before the first chapter (a foreword, notes to the editor). */
  front: string[];
  markdown: string;
}

const inflate = async (data: Uint8Array): Promise<Uint8Array> => {
  const stream = new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
};

/** The files of a zip, by name (only the ones asked for are unpacked). */
const readZipEntry = async (buffer: ArrayBuffer, wanted: string): Promise<string | null> => {
  const view = new DataView(buffer);
  // The central directory's end record is in the last 64 KB.
  let end = -1;
  for (let at = buffer.byteLength - 22; at >= Math.max(0, buffer.byteLength - 65_558); at -= 1) {
    if (view.getUint32(at, true) === 0x06054b50) {
      end = at;
      break;
    }
  }
  if (end < 0) throw new Error('Bu bir Word (.docx) dosyası değil.');
  const count = view.getUint16(end + 10, true);
  let at = view.getUint32(end + 16, true);
  const decoder = new TextDecoder();
  for (let index = 0; index < count; index += 1) {
    if (view.getUint32(at, true) !== 0x02014b50) break;
    const method = view.getUint16(at + 10, true);
    const compressed = view.getUint32(at + 20, true);
    const nameLength = view.getUint16(at + 28, true);
    const extraLength = view.getUint16(at + 30, true);
    const commentLength = view.getUint16(at + 32, true);
    const local = view.getUint32(at + 42, true);
    const name = decoder.decode(new Uint8Array(buffer, at + 46, nameLength));
    if (name === wanted) {
      const localName = view.getUint16(local + 26, true);
      const localExtra = view.getUint16(local + 28, true);
      const data = new Uint8Array(buffer, local + 30 + localName + localExtra, compressed);
      const bytes = method === 0 ? data : await inflate(data);
      return decoder.decode(bytes);
    }
    at += 46 + nameLength + extraLength + commentLength;
  }
  return null;
};

const W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';
const CHAPTER_LINE = /^(?:chapter|bölüm|bolum|part)\s*(\d+)\s*[:.\-–—]?\s*(.*)$/i;

export const readDocx = async (file: File): Promise<StoryDraft> => {
  const xml = await readZipEntry(await file.arrayBuffer(), 'word/document.xml');
  if (!xml) throw new Error('Word dosyasının metni bulunamadı.');
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  const paragraphs = Array.from(doc.getElementsByTagNameNS(W, 'p'));
  const lines: { text: string; heading: number; marked: string[] }[] = [];
  for (const paragraph of paragraphs) {
    const style = paragraph.getElementsByTagNameNS(W, 'pStyle')[0]?.getAttributeNS(W, 'val') ?? '';
    const headingMatch = /(?:heading|başlık|baslik|title)\s*(\d)?/i.exec(style);
    const heading = headingMatch ? (/title/i.test(style) ? 1 : Number(headingMatch[1] ?? 1)) : 0;
    let text = '';
    const marked: string[] = [];
    let open = '';
    const flush = () => {
      if (open.trim()) {
        marked.push(open.trim());
        text += `**${open.trim()}**${/\s$/.test(open) ? ' ' : ''}`;
      } else text += open;
      open = '';
    };
    for (const run of Array.from(paragraph.getElementsByTagNameNS(W, 'r'))) {
      const props = run.getElementsByTagNameNS(W, 'rPr')[0];
      const bold = Boolean(props?.getElementsByTagNameNS(W, 'b')[0] && props.getElementsByTagNameNS(W, 'b')[0].getAttributeNS(W, 'val') !== '0');
      const highlight = Boolean(props?.getElementsByTagNameNS(W, 'highlight')[0]);
      let piece = '';
      for (const node of Array.from(run.childNodes)) {
        const name = (node as Element).localName;
        if (name === 't') piece += node.textContent ?? '';
        else if (name === 'tab') piece += ' ';
        else if (name === 'br') piece += '\n';
      }
      if ((bold || highlight) && !heading) open += piece;
      else {
        flush();
        text += piece;
      }
    }
    flush();
    text = text.replace(/\*\*\s*\*\*/g, '').replace(/[ \t]+/g, ' ').trim();
    if (text) lines.push({ text, heading, marked });
  }

  const draft: StoryDraft = { title: '', chapters: [], front: [], markdown: '' };
  let current: StoryDraft['chapters'][number] | null = null;
  for (const line of lines) {
    const plainLine = line.text.replace(/\*\*/g, '');
    const chapterLine = CHAPTER_LINE.exec(plainLine);
    if (line.heading === 1 && !draft.title && !chapterLine && draft.chapters.length === 0) {
      draft.title = plainLine;
      continue;
    }
    if (chapterLine || (line.heading > 0 && plainLine.length < 120)) {
      current = { title: chapterLine ? chapterLine[2] || `Chapter ${chapterLine[1]}` : plainLine, paragraphs: [], marked: [] };
      draft.chapters.push(current);
      continue;
    }
    if (current) {
      current.paragraphs.push(line.text);
      current.marked.push(...line.marked);
    } else draft.front.push(line.text);
  }
  draft.markdown = [
    `# ${draft.title || file.name.replace(/\.docx$/i, '')}`,
    ...(draft.front.length ? ['', ...draft.front] : []),
    ...draft.chapters.flatMap((chapter, index) => ['', `## Chapter ${index + 1}: ${chapter.title}`, '', chapter.paragraphs.join('\n\n')]),
  ].join('\n');
  return draft;
};
