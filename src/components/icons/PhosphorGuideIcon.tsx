import React from 'react';
import {
  BookOpen,
  CheckCircle,
  Clock,
  Eye,
  Headphones,
  Pencil,
  Search,
  Target,
  Trophy,
  type AppIconProps,
} from '../ui/icons';

type GuideIconName = 'eye' | 'headphones' | 'book' | 'check' | 'search' | 'pencil' | 'clock' | 'target' | 'trophy';

const icons: Record<GuideIconName, React.ComponentType<AppIconProps>> = {
  eye: Eye,
  headphones: Headphones,
  book: BookOpen,
  check: CheckCircle,
  search: Search,
  pencil: Pencil,
  clock: Clock,
  target: Target,
  trophy: Trophy,
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
