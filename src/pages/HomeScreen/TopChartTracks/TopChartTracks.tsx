import { useRef } from 'react';
import { chartData } from '@/utils';
import { useBaseClassNames } from '@/hooks';
import { swiperResponsiveConfig } from '@/const';
import { SectionHeader, SwiperNextIcon, CustomSwiper, TrackTopChart } from '@/components';

import styles from './TopChartTracks.module.scss';

export const TopChartTracks = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { baseClassName } = useBaseClassNames('top-chart-tracks', styles);

  const handleViewAll = () => {
    console.log('TODO, Implement later');
  };

  return (
    <>
      <SectionHeader title='Top Chart This Week' actionLabel='View all' onClick={handleViewAll} />
      <div className={baseClassName()}>
        <CustomSwiper
          isLoop={true}
          data={chartData}
          nextRef={ref}
          breakpoints={swiperResponsiveConfig}
          renderSwipe={(item, index) => <TrackTopChart key={index} {...item} />}
        />
        <SwiperNextIcon ref={ref} />
      </div>
    </>
  );
};
