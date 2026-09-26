import React from 'react';

/**
 * Draws a thin connector between each linked pair of matching cards.
 * Cards are found inside `containerRef` by `data-match-left` / `data-match-right`.
 * Lines are drawn only while the two columns sit side by side; on stacked
 * (mobile) layouts the shared pair badge carries the link instead.
 */

export interface MatchConnector {
  left: string;
  right: string;
  color: string;
  dashed?: boolean;
}

export const PAIR_COLORS = ['#2563EB', '#C2410C', '#7E22CE', '#0E7490', '#BE185D', '#A16207'];
export const pairColor = (index: number) => PAIR_COLORS[index % PAIR_COLORS.length];

interface Segment { key: string; d: string; color: string; dashed?: boolean }

export const MatchConnectors = ({ containerRef, connectors }: {
  containerRef: React.RefObject<HTMLElement | null>;
  connectors: MatchConnector[];
}) => {
  const [segments, setSegments] = React.useState<Segment[]>([]);
  const signature = connectors.map(c => `${c.left}>${c.right}:${c.color}:${c.dashed ? 1 : 0}`).join('|');

  React.useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const measure = () => {
      const box = container.getBoundingClientRect();
      const next: Segment[] = [];
      connectors.forEach(connector => {
        const a = container.querySelector<HTMLElement>(`[data-match-left="${CSS.escape(connector.left)}"]`)?.getBoundingClientRect();
        const b = container.querySelector<HTMLElement>(`[data-match-right="${CSS.escape(connector.right)}"]`)?.getBoundingClientRect();
        if (!a || !b) return;
        const sideBySide = b.left >= a.right - 1 || a.left >= b.right - 1;
        if (!sideBySide) return;
        const ltr = b.left >= a.right - 1;
        const x1 = (ltr ? a.right : a.left) - box.left;
        const x2 = (ltr ? b.left : b.right) - box.left;
        const y1 = a.top + a.height / 2 - box.top;
        const y2 = b.top + b.height / 2 - box.top;
        const dx = (x2 - x1) / 2;
        next.push({
          key: `${connector.left}>${connector.right}`,
          d: `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`,
          color: connector.color,
          dashed: connector.dashed,
        });
      });
      setSegments(next);
    };

    measure();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, signature]);

  if (!segments.length) return null;
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
      {segments.map(segment => (
        <path
          key={segment.key}
          d={segment.d}
          fill="none"
          stroke={segment.color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeDasharray={segment.dashed ? '6 5' : undefined}
        />
      ))}
    </svg>
  );
};
