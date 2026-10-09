import { useEffect, useRef, type RefObject } from 'react';

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

// Open dialogs, newest last: only the top one answers Tab and Escape (a guide opened from the menu).
const openDialogs: object[] = [];

// The element focused before the current one: when a dialog focuses its own button while mounting
// (autoFocus, or its own effect), that is the control that opened it.
let previousFocus: HTMLElement | null = null;
let currentFocus: HTMLElement | null = null;
if (typeof document !== 'undefined') {
  document.addEventListener(
    'focusin',
    event => {
      previousFocus = currentFocus;
      currentFocus = event.target instanceof HTMLElement ? event.target : null;
    },
    true,
  );
}

const focusables = (root: HTMLElement) =>
  [...root.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(el => el.getClientRects().length > 0);

interface DialogFocusOptions {
  /** A modal dialog keeps Tab inside it. A popover (the desktop Story settings) lets it move on. */
  modal?: boolean;
  /** Off for dialogs that already close on Escape themselves. */
  escape?: boolean;
  /** 'dialog' focuses the card itself, so a screen reader reads it all (Word Notes, Places & People). */
  initialFocus?: 'first' | 'dialog';
}

/**
 * Keyboard and screen-reader behaviour for a dialog, sheet or popover (WCAG 2.1.2, 2.4.3): when it
 * opens, focus moves into it (unless the dialog already placed it), Escape closes it, Tab stays
 * inside a modal one, and when it closes focus goes back to the control that opened it.
 * Put the returned ref on the element that has role="dialog".
 */
export function useDialogFocus<T extends HTMLElement = HTMLDivElement>(
  open: boolean,
  onClose: () => void,
  { modal = true, escape = true, initialFocus = 'first' }: DialogFocusOptions = {},
  /** The dialog's own ref, when it already has one (for measuring). */
  target?: RefObject<T | null>,
) {
  const ownRef = useRef<T>(null);
  const ref = target ?? ownRef;
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    const active = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const opener = active && ref.current?.contains(active) ? previousFocus : active;
    const token = {};
    openDialogs.push(token);
    let dialog: HTMLElement | null = null;

    // The dialog may mount in the same render (or animate in), so it is looked up a frame later.
    const frame = requestAnimationFrame(() => {
      dialog = ref.current;
      if (!dialog || dialog.contains(document.activeElement)) return;
      const first = initialFocus === 'first' ? focusables(dialog)[0] : undefined;
      if (first) first.focus({ preventScroll: true });
      else {
        dialog.tabIndex = -1;
        dialog.focus({ preventScroll: true });
      }
    });

    const onKey = (event: KeyboardEvent) => {
      const el = ref.current;
      if (!el || openDialogs[openDialogs.length - 1] !== token) return;
      if (event.key === 'Escape' && escape) {
        event.stopPropagation();
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab' || !modal) return;
      const items = focusables(el);
      if (items.length === 0) {
        event.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (!el.contains(active)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);

    return () => {
      cancelAnimationFrame(frame);
      openDialogs.splice(openDialogs.indexOf(token), 1);
      document.removeEventListener('keydown', onKey);
      const active = document.activeElement;
      const focusLost = !active || active === document.body || !active.isConnected || Boolean(dialog?.contains(active));
      if (opener?.isConnected && focusLost) opener.focus({ preventScroll: true });
    };
  }, [open, modal, escape, initialFocus, ref]);

  return ref;
}
