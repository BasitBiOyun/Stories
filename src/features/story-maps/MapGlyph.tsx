import React from 'react';
import type { StoryMapIcon } from './types';

/** Stroke glyphs on a 24-unit grid, drawn by the map itself so they work inside SVG and HTML alike. */
const GLYPHS: Record<StoryMapIcon, React.ReactNode> = {
  // A pen nib for the poet's homeland.
  quill: (
    <>
      <path d="M19.5 4.5C12.5 5 8 9.5 7 16.5" />
      <path d="M7 16.5c4.2-.2 8.3-3.2 10-7.5" />
      <path d="M10.2 12.6h4.3" />
      <path d="M7 16.5 5 20" />
    </>
  ),
  // A dome and doorway for a city of learning.
  dome: (
    <>
      <path d="M4.5 19.5h15" />
      <path d="M6.5 19.5v-4.5a5.5 5.5 0 0 1 11 0v4.5" />
      <path d="M10.3 19.5v-2.6a1.7 1.7 0 0 1 3.4 0v2.6" />
      <path d="M12 9.5V6.8" />
      <path d="M12 4.6v.4" />
    </>
  ),
  // Crossed swords for a battle.
  swords: (
    <>
      <path d="M5 5l10 10" />
      <path d="M19 5 9 15" />
      <path d="M13.2 16.8l3.9-3.9" />
      <path d="M6.9 12.9l3.9 3.9" />
      <path d="M16.1 16.1 19 19" />
      <path d="M7.9 16.1 5 19" />
    </>
  ),
  // A travelled path between two stops.
  route: (
    <>
      <path d="M6.5 17.5c2.8-.3 4-2.6 5.4-5.2s2.9-5 5.6-5.3" strokeDasharray="2.2 2.2" />
      <circle cx="5.3" cy="18" r="1.9" />
      <circle cx="18.7" cy="6" r="1.9" />
    </>
  ),
};

interface MapGlyphProps {
  icon: StoryMapIcon;
  size?: number;
  /** Position inside an SVG; omit to render a standalone inline SVG. */
  x?: number;
  y?: number;
  className?: string;
  strokeWidth?: number;
}

export const MapGlyph: React.FC<MapGlyphProps> = ({ icon, size = 20, x, y, className, strokeWidth = 1.9 }) => (
  <svg
    x={x}
    y={y}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    {GLYPHS[icon]}
  </svg>
);
