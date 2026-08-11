import fs from 'node:fs';
import path from 'node:path';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
delete pkg.dependencies['lucide-react'];
pkg.dependencies['@phosphor-icons/react'] = '^2.1.10';
pkg.dependencies = Object.fromEntries(Object.entries(pkg.dependencies).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');

const registry = `/**
 * Semantic application icon registry.
 * The same action/concept resolves to the same Phosphor glyph everywhere.
 */
export {
  PersonArmsSpreadIcon as Accessibility,
  WarningCircleIcon as AlertCircle,
  ArrowDownIcon as ArrowDown,
  ArrowsLeftRightIcon as ArrowLeftRight,
  ArrowRightIcon as ArrowRight,
  MedalIcon as Award,
  BookIcon as Book,
  BookIcon as BookIcon,
  BookBookmarkIcon as BookMarked,
  BookOpenIcon as BookOpen,
  BookOpenTextIcon as BookOpenCheck,
  BrainIcon as BrainCircuit,
  CheckIcon as Check,
  CheckCircleIcon as CheckCircle,
  CheckCircleIcon as CheckCircle2,
  CaretLeftIcon as ChevronLeft,
  CaretRightIcon as ChevronRight,
  CaretUpIcon as ChevronUp,
  ClipboardTextIcon as ClipboardCheck,
  ClipboardTextIcon as ClipboardList,
  ClockIcon as Clock,
  CompassIcon as Compass,
  CrownIcon as Crown,
  DownloadIcon as Download,
  EyeIcon as Eye,
  EyeSlashIcon as EyeOff,
  FileTextIcon as FileText,
  GlobeIcon as Globe,
  GlobeIcon as Globe2,
  GraduationCapIcon as GraduationCap,
  GraduationCapIcon as School,
  DotsSixVerticalIcon as GripVertical,
  HeadphonesIcon as Headphones,
  HeartIcon as Heart,
  QuestionIcon as HelpCircle,
  HouseIcon as Home,
  InfoIcon as Info,
  TranslateIcon as Languages,
  StackIcon as Layers,
  SquaresFourIcon as Layout,
  BooksIcon as Library,
  LightbulbIcon as Lightbulb,
  LinkIcon as Link,
  ListNumbersIcon as ListOrdered,
  SpinnerGapIcon as LoaderCircle,
  LockIcon as Lock,
  LockKeyIcon as LockKeyhole,
  MapPinIcon as MapPin,
  MedalIcon as Medal,
  ListIcon as Menu,
  ChatTextIcon as MessageSquare,
  ArrowsOutCardinalIcon as Move,
  PauseIcon as Pause,
  PlayIcon as Play,
  ListNumbersIcon as Reorder,
  RocketIcon as Rocket,
  ArrowCounterClockwiseIcon as RotateCcw,
  ScalesIcon as Scale,
  ScrollIcon as Scroll,
  MagnifyingGlassIcon as Search,
  ShieldWarningIcon as ShieldAlert,
  ShieldCheckIcon as ShieldCheck,
  SparkleIcon as Sparkles,
  StarIcon as Star,
  TargetIcon as Target,
  TrophyIcon as Trophy,
  TextTIcon as Type,
  UsersIcon as Users,
  SpeakerHighIcon as Volume2,
  SpeakerSlashIcon as VolumeX,
  XIcon as X,
  XCircleIcon as XCircle,
  LightningIcon as Zap,
} from '@phosphor-icons/react';

export const iconStrokeWidth = 2;
`;
fs.writeFileSync('src/components/ui/icons.ts', registry);

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
