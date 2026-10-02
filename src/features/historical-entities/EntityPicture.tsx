import React from 'react';
import { Compass, Globe, MapPin, School, Users } from '../../components/ui/icons';
import { cn } from '../../lib/utils';
import { GROUP_COLORS, groupOf, tint, type EntityGroup } from './categories';
import { entityPictureUrl } from './pictures';
import type { HistoricalEntity } from './types';

const GROUP_ICONS: Record<EntityGroup, React.ComponentType<{ size?: number | string; className?: string }>> = {
  cities: MapPin,
  lands: Globe,
  water: Compass,
  buildings: School,
  people: Users,
};

/** The entity's square picture, or a soft placeholder in its group colour until it is drawn. */
export const EntityPicture = ({ entity, className, iconSize = 28 }: { entity: HistoricalEntity; className?: string; iconSize?: number }) => {
  const url = entityPictureUrl(entity);
  const group = groupOf(entity);
  const color = GROUP_COLORS[group].base;
  if (url) {
    return <img src={url} alt="" loading="lazy" draggable={false} className={cn('object-cover', className)} />;
  }
  const Icon = GROUP_ICONS[group];
  return (
    <span
      aria-hidden="true"
      className={cn('flex items-center justify-center', className)}
      style={{ backgroundColor: tint(color, 0.1), color: tint(color, 0.55), boxShadow: `inset 0 0 0 1px ${tint(color, 0.18)}` }}
    >
      <Icon size={iconSize} />
    </span>
  );
};
