import React from 'react';
import { cn } from '../../lib/utils';
import type { HistoricalEntity, LearnerLanguage } from './types';

/**
 * The learners' own language. Every reader is a Turkish-speaking learner for
 * now; a future edition for other learners changes this one value.
 */
export const LEARNER_LANGUAGE: LearnerLanguage = 'tr';

/** The name in the learner's language, in brackets after the title: "Damascus (Şam)". */
export const LearnerName = ({
  entity,
  className,
}: {
  entity: HistoricalEntity;
  className?: string;
}) => {
  const name = entity.learnerNames?.[LEARNER_LANGUAGE];
  if (!name) return null;

  return (
    <>
      {' '}
      <span lang={LEARNER_LANGUAGE} className={cn('font-normal opacity-80', className)}>({name})</span>
    </>
  );
};
