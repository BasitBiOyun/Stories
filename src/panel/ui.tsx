import { useEffect, useRef, useState, type ReactNode, type TextareaHTMLAttributes } from 'react';
import type { Finding } from './checks';
import { wordDiff } from './diff';
import { IconCheck, IconInfo, IconWarn, IconX } from './icons';
import { toast as showToast, useStore, setState } from './store';

export const Toast = () => {
  const current = useStore(state => state.toast);
  if (!current) return null;
  return (
    <div className={`toast ${current.kind}`} role={current.kind === 'bad' ? 'alert' : 'status'}>
      {current.kind === 'good' ? <IconCheck size={18} /> : current.kind === 'bad' ? <IconWarn size={18} /> : <IconInfo size={18} />}
      <span>{current.text}</span>
      <button type="button" aria-label="Kapat" onClick={() => setState({ toast: null })}>
        <IconX size={16} />
      </button>
    </div>
  );
};

export const toast = showToast;

export const Dialog = ({
  title,
  children,
  onClose,
  wide,
  labelledBy,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
  wide?: boolean;
  labelledBy?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const first = ref.current?.querySelector<HTMLElement>('input, textarea, select, button.primary, button');
    first?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      previous?.focus?.();
    };
  }, [onClose]);
  const id = labelledBy ?? `dialog-${title.replace(/\W+/g, '-')}`;
  return (
    <div
      className="overlay"
      onMouseDown={event => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={`dialog${wide ? ' wide' : ''}`} role="dialog" aria-modal="true" aria-labelledby={id} ref={ref}>
        <h2 id={id}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

/** A yes/no question in a dialog, as a promise: `if (await confirm({...})) ...`. */
let openConfirm: ((request: ConfirmRequest) => void) | null = null;
interface ConfirmRequest {
  title: string;
  text: ReactNode;
  yes: string;
  no?: string;
  danger?: boolean;
  resolve: (value: boolean) => void;
}

export const confirm = (request: Omit<ConfirmRequest, 'resolve'>): Promise<boolean> =>
  new Promise(resolve => {
    if (!openConfirm) resolve(window.confirm(String(request.title)));
    else openConfirm({ ...request, resolve });
  });

export const ConfirmHost = () => {
  const [request, setRequest] = useState<ConfirmRequest | null>(null);
  useEffect(() => {
    openConfirm = setRequest;
    return () => {
      openConfirm = null;
    };
  }, []);
  if (!request) return null;
  const close = (value: boolean) => {
    request.resolve(value);
    setRequest(null);
  };
  return (
    <Dialog title={request.title} onClose={() => close(false)}>
      <div className="muted">{request.text}</div>
      <div className="buttons">
        <button type="button" className="btn" onClick={() => close(false)}>
          {request.no ?? 'Vazgeç'}
        </button>
        <button type="button" className={`btn ${request.danger ? 'danger' : 'primary'}`} onClick={() => close(true)}>
          {request.yes}
        </button>
      </div>
    </Dialog>
  );
};

export const Findings = ({ findings, empty }: { findings: Finding[]; empty?: string }) => {
  if (findings.length === 0) {
    return empty ? (
      <div className="findings">
        <div className="finding ok">
          <IconCheck size={16} />
          <span>{empty}</span>
        </div>
      </div>
    ) : null;
  }
  return (
    <div className="findings" aria-live="polite">
      {findings.map((finding, index) => (
        <div key={`${finding.text}-${index}`} className={`finding ${finding.level}`}>
          <IconWarn size={16} />
          <span>
            {finding.text}
            {finding.level === 'blocker' && <b> Bu düzelmeden yayınlanamaz.</b>}
          </span>
        </div>
      ))}
    </div>
  );
};

export const WordDiff = ({ before, after, dir }: { before: string; after: string; dir?: 'rtl' | 'ltr' }) => (
  <div className="diff-text" dir={dir}>
    {wordDiff(before, after).map((part, index) =>
      part.kind === 'same' ? <span key={index}>{part.text}</span> : part.kind === 'added' ? <ins key={index}>{part.text}</ins> : <del key={index}>{part.text}</del>,
    )}
  </div>
);

export const Empty = ({ title, children }: { title: string; children?: ReactNode }) => (
  <div className="empty">
    <b>{title}</b>
    {children}
  </div>
);

export const isArabic = (text: string) => /[؀-ۿ]/.test(text);

/** A textarea that grows with its text. */
export const AutoText = ({
  value,
  onChange,
  minRows = 2,
  ...props
}: { value: string; onChange: (value: string) => void; minRows?: number } & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.style.height = 'auto';
    element.style.height = `${Math.min(element.scrollHeight + 2, 640)}px`;
  }, [value]);
  return (
    <textarea
      ref={ref}
      rows={minRows}
      value={value}
      dir={isArabic(value) ? 'rtl' : undefined}
      onChange={event => onChange(event.target.value)}
      {...props}
    />
  );
};
