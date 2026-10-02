import React from 'react';
import { cn } from '../../lib/utils';
import type { HistoricalEntity, LearnerLanguage } from './types';

/**
 * The learners' own language. Every reader is a Turkish-speaking learner for
 * now; a future edition for other learners changes this one value.
 */
export const LEARNER_LANGUAGE: LearnerLanguage = 'tr';

const LEARNER_NAME_LABEL: Record<LearnerLanguage, string> = {
  tr: 'Türkçesi',
};

export const LearnerNameLine = ({
  entity,
  className,
}: {
  entity: HistoricalEntity;
  className?: string;
}) => {
  const name = entity.learnerNames?.[LEARNER_LANGUAGE];
  if (!name) return null;

  return (
    <p lang={LEARNER_LANGUAGE} dir="ltr" className={cn('text-[13px] leading-snug', className)}>
      <span className="opacity-75">{LEARNER_NAME_LABEL[LEARNER_LANGUAGE]}:</span>{' '}
      <span className="font-semibold">{name}</span>
    </p>
  );
};
