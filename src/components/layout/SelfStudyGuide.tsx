import React from 'react';

type SelfStudyGuideProps = React.ComponentProps<
  typeof import('./SelfStudyGuideImpl').SelfStudyGuide
>;

const LazySelfStudyGuide = React.lazy(async () => {
  const module = await import('./SelfStudyGuideImpl');
  return { default: module.SelfStudyGuide };
});

/**
 * Keep the large self-study guide UI out of the initial app bundle.
 * The implementation is loaded only when the guide is actually rendered.
 * Full Guide is intentionally disabled globally; chapter support and the
 * student-facing study sections remain the canonical self-study surfaces.
 */
export const SelfStudyGuide = (props: SelfStudyGuideProps) => (
  <React.Suspense fallback={null}>
    <LazySelfStudyGuide {...props} studentGuideText="" />
  </React.Suspense>
);
