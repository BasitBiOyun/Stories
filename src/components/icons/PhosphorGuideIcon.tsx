import React from 'react';
import {
  BookOpen,
  CheckCircle,
  Clock,
  FileText,
  Headphones,
  Lightbulb,
  Pencil,
  Search,
  Type,
  type AppIconProps,
} from '../ui/icons';

/** A goal flag drawn in the Phosphor Regular style; no app section uses it, so it can mean "your goal" here. */
const GoalFlag = ({ size = 24, className, ...props }: AppIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 256"
    fill="none"
    stroke="currentColor"
    strokeWidth={16}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M48 224V48" />
    <path d="M48 168c64-48 96 32 160-16V48c-64 48-96-32-160 16" />
  </svg>
);

/**
 * Icons for the Self-Study Guide. Each name keeps away from the icons that stand for reader sections
 * (eye = Before you read, magnifier = Language Focus, target = map game, trophy = Final Challenge).
 * The magnifier stays only on search fields.
 */
type GuideIconName = 'goal' | 'headphones' | 'book' | 'check' | 'language' | 'pencil' | 'clock' | 'help' | 'file' | 'search';

const icons: Record<GuideIconName, React.ComponentType<AppIconProps>> = {
  goal: GoalFlag,
  headphones: Headphones,
  book: BookOpen,
  check: CheckCircle,
  language: Type,
  pencil: Pencil,
  clock: Clock,
  help: Lightbulb,
  file: FileText,
  search: Search,
};

export const PhosphorGuideIcon = ({
  name,
  className = '',
  title,
}: {
  name: GuideIconName;
  className?: string;
  title?: string;
}) => {
  const Icon = icons[name];
  return (
    <Icon
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    />
  );
};

export type { GuideIconName };
