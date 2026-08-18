import React from 'react';

type SelfStudyGuideProps = React.ComponentProps<
  typeof import('./SelfStudyGuideImpl').SelfStudyGuide
>;

const LazySelfStudyGuide = React.lazy(async () => {
  const module = await import('./SelfStudyGuideImpl');
  return { default: module.SelfStudyGuide };
});

/**
 * Keep the large self-study guide UI and react-markdown out of the initial app bundle.
 * The implementation is loaded only when the guide is actually rendered.
 */
export const SelfStudyGuide = (props: SelfStudyGuideProps) => (
  <React.Suspense fallback={null}>
    <LazySelfStudyGuide {...props} />
  </React.Suspense>
);
