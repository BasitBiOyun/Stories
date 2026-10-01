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
  // The Ka‘ba: a cube with its band.
  kaaba: (
    <>
      <path d="M5 8.5 12 5l7 3.5v8L12 20l-7-3.5z" />
      <path d="M5 8.5 12 12l7-3.5" />
      <path d="M12 12v8" />
      <path d="M5 11.2 12 14.7l7-3.5" />
    </>
  ),
  // A well with its rope and bucket.
  well: (
    <>
      <path d="M5 11.5h14" />
      <path d="M6.5 11.5v7.5h11v-7.5" />
      <path d="M7 11.5 8 6h8l1 5.5" />
      <path d="M12 6v3.2" />
      <path d="M10.6 9.2h2.8v1.6h-2.8z" />
    </>
  ),
  // A mountain with a snowy top.
  mountain: (
    <>
      <path d="M3.5 19 10 7.5l3.4 5.8L15.5 10l5 9z" />
      <path d="M8.3 10.6 10 11.8l1.6-1.2" />
    </>
  ),
  // Water: a river or a sea.
  waves: (
    <>
      <path d="M3.5 9.5c2.1-1.6 3.6-1.6 5.7 0s3.6 1.6 5.7 0 3.6-1.6 5.6 0" />
      <path d="M3.5 14c2.1-1.6 3.6-1.6 5.7 0s3.6 1.6 5.7 0 3.6-1.6 5.6 0" />
      <path d="M3.5 18.5c2.1-1.6 3.6-1.6 5.7 0s3.6 1.6 5.7 0 3.6-1.6 5.6 0" />
    </>
  ),
  // A date palm for an oasis town.
  palm: (
    <>
      <path d="M12.4 20c.4-3.6.2-7-.6-10" />
      <path d="M11.8 10C10 7.4 7.4 6.6 4.8 7.6" />
      <path d="M11.8 10c1.4-2.8 4-3.9 6.8-3.2" />
      <path d="M11.8 10c-2.5-.4-4.6.8-5.8 3" />
      <path d="M11.8 10c2.6-.2 4.6 1.2 5.6 3.5" />
      <path d="M8.5 20h8" />
    </>
  ),
  // A tent for a desert land.
  tent: (
    <>
      <path d="M3.5 19 12 5.5 20.5 19z" />
      <path d="M12 5.5 9 19" />
      <path d="M12 12.5 14.6 19" />
    </>
  ),
  // Houses for a town or city.
  city: (
    <>
      <path d="M4 19.5h16" />
      <path d="M5.5 19.5v-7l4-3 4 3v7" />
      <path d="M13.5 19.5V9.5h5v10" />
      <path d="M8.3 19.5v-3h2.4v3" />
      <path d="M15.4 12.5h1.2M15.4 15.5h1.2" />
    </>
  ),
  // Columns of a palace.
  palace: (
    <>
      <path d="M4 9.5 12 5l8 4.5z" />
      <path d="M5 19.5h14" />
      <path d="M6.5 11.5v6M10 11.5v6M14 11.5v6M17.5 11.5v6" />
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
