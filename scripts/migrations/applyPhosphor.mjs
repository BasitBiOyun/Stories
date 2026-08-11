import fs from 'node:fs';
import path from 'node:path';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
delete pkg.dependencies['lucide-react'];
delete pkg.dependencies['@phosphor-icons/react'];
if (pkg.devDependencies) {
  delete pkg.devDependencies['lucide-react'];
  delete pkg.devDependencies['@phosphor-icons/react'];
  delete pkg.devDependencies['@phosphor-icons/core'];
}
pkg.dependencies = Object.fromEntries(Object.entries(pkg.dependencies || {}).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');

const semanticToAsset = {
  Accessibility: 'person-arms-spread',
  AlertCircle: 'warning-circle',
  ArrowDown: 'arrow-down',
  ArrowLeftRight: 'arrows-left-right',
  ArrowRight: 'arrow-right',
  Award: 'medal',
  Book: 'book',
  BookIcon: 'book',
  BookMarked: 'book-bookmark',
  BookOpen: 'book-open',
  BookOpenCheck: 'book-open-text',
  BrainCircuit: 'brain',
  Check: 'check',
  CheckCircle: 'check-circle',
  CheckCircle2: 'check-circle',
  ChevronLeft: 'caret-left',
  ChevronRight: 'caret-right',
  ChevronUp: 'caret-up',
  ClipboardCheck: 'clipboard-text',
  ClipboardList: 'clipboard-text',
  Clock: 'clock',
  Compass: 'compass',
  Crown: 'crown',
  Download: 'download',
  Eye: 'eye',
  EyeOff: 'eye-slash',
  FileText: 'file-text',
  Globe: 'globe',
  Globe2: 'globe',
  GraduationCap: 'graduation-cap',
  GripVertical: 'dots-six-vertical',
  Headphones: 'headphones',
  Heart: 'heart',
  HelpCircle: 'question',
  Home: 'house',
  Info: 'info',
  Languages: 'translate',
  Layers: 'stack',
  Layout: 'squares-four',
  Library: 'books',
  Lightbulb: 'lightbulb',
  Link: 'link',
  ListOrdered: 'list-numbers',
  LoaderCircle: 'spinner-gap',
  Lock: 'lock',
  LockKeyhole: 'lock-key',
  MapPin: 'map-pin',
  Medal: 'medal',
  Menu: 'list',
  MessageSquare: 'chat-text',
  Move: 'arrows-out-cardinal',
  Pause: 'pause',
  Pencil: 'pencil',
  Play: 'play',
  Reorder: 'list-numbers',
  Rocket: 'rocket',
  RotateCcw: 'arrow-counter-clockwise',
  Scale: 'scales',
  School: 'graduation-cap',
  Scroll: 'scroll',
  Search: 'magnifying-glass',
  ShieldAlert: 'shield-warning',
  ShieldCheck: 'shield-check',
  Sparkles: 'sparkle',
  Star: 'star',
  Target: 'target',
  Trophy: 'trophy',
  Type: 'text-t',
  Users: 'users',
  Volume2: 'speaker-high',
  VolumeX: 'speaker-slash',
  X: 'x',
  XCircle: 'x-circle',
  Zap: 'lightning',
};

const coreRoot = path.resolve('node_modules/@phosphor-icons/core/assets/regular');
const uniqueAssets = [...new Set(Object.values(semanticToAsset))];
const pascal = (value) => value.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');
const bodies = new Map();
for (const asset of uniqueAssets) {
  const file = path.join(coreRoot, `${asset}-regular.svg`);
  if (!fs.existsSync(file)) throw new Error(`Missing Phosphor Core asset: ${file}`);
  const svg = fs.readFileSync(file, 'utf8');
  const match = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  if (!match) throw new Error(`Could not parse SVG body: ${file}`);
  bodies.set(asset, match[1].replace(/>\s+</g, '><').trim());
}

let registry = `import React, { forwardRef } from 'react';\n\n`;
registry += `/**\n * Semantic application icon registry generated from the official Phosphor Core\n * Regular SVG set (MIT). Only icons actually used by this application are embedded.\n * The same semantic action/concept resolves to the same glyph everywhere.\n */\n`;
registry += `export type AppIconProps = React.SVGProps<SVGSVGElement> & {\n  size?: number | string;\n  color?: string;\n  mirrored?: boolean;\n  weight?: string;\n};\n\n`;
registry += `const createPhosphorIcon = (displayName: string, body: string) => {\n  const Icon = forwardRef<SVGSVGElement, AppIconProps>(({ size = 24, color = 'currentColor', mirrored = false, style, weight: _weight, ...props }, ref) => (\n    <svg\n      ref={ref}\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width={size}\n      height={size}\n      viewBox=\"0 0 256 256\"\n      fill={color}\n      style={{ ...style, ...(mirrored ? { transform: 'scaleX(-1)' } : {}) }}\n      {...props}\n      dangerouslySetInnerHTML={{ __html: body }}\n    />\n  ));\n  Icon.displayName = displayName;\n  return Icon;\n};\n\n`;
for (const asset of uniqueAssets) {
  registry += `const Ph${pascal(asset)} = createPhosphorIcon('${pascal(asset)}', ${JSON.stringify(bodies.get(asset))});\n`;
}
registry += '\n';
for (const [semantic, asset] of Object.entries(semanticToAsset)) {
  registry += `export const ${semantic} = Ph${pascal(asset)};\n`;
}
registry += `\nexport const iconStrokeWidth = 2;\n`;
fs.writeFileSync('src/components/ui/icons.tsx', registry);
if (fs.existsSync('src/components/ui/icons.ts')) fs.rmSync('src/components/ui/icons.ts');

const target = path.resolve('src/components/ui/icons');
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.tsx?$/.test(entry.name)) files.push(p);
  }
}
walk('src');
let changed = 0;
for (const file of files) {
  const old = fs.readFileSync(file, 'utf8');
  if (!old.includes('lucide-react')) continue;
  const rel = path.relative(path.dirname(path.resolve(file)), target).replace(/\\/g, '/');
  const spec = rel.startsWith('.') ? rel : './' + rel;
  const next = old
    .replace(/from\s+(['"])lucide-react\1/g, `from '${spec}'`)
    .replace(/Icon name from lucide-react/g, 'Icon name from the application semantic icon registry');
  if (next !== old) {
    fs.writeFileSync(file, next);
    changed += 1;
    console.log('rewired', file, '->', spec);
  }
}
console.log('rewired files:', changed);
const remaining = files.filter((file) => fs.readFileSync(file, 'utf8').match(/from\s+['"]lucide-react['"]/));
if (remaining.length) throw new Error(`Direct Lucide imports remain: ${remaining.join(', ')}`);
