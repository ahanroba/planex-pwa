import React from 'react';
import { Composition } from 'remotion';
import { PlanExWebPromo } from './PlanExWebPromo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PlanExWebPromo"
        component={PlanExWebPromo}
        durationInFrames={1800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
    </>
  );
};
