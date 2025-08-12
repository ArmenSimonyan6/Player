import { Image } from '@/components';
import { useBaseClassNames } from '@/hooks';
import { TChartCategory } from './TrackTopChart.props';
import { TrackTopChartItem } from '../TrackTopChartItem';

import styles from './TrackTopChart.module.scss';

export const TrackTopChart = ({ title, image, tracks }: TChartCategory) => {
  const { baseClassName } = useBaseClassNames('track-top-chart', styles);

  return (
    <div className={baseClassName()}>
      <div className={baseClassName('__imageSection')}>
        <Image src={image} className={baseClassName('__image')} />
        <div className={baseClassName('__imageTitle')}>{title}</div>
      </div>
      <div className={baseClassName('__trackList')}>
        {tracks.map((track, id) => (
          <TrackTopChartItem key={id} index={id + 1} {...track} />
        ))}
      </div>
    </div>
  );
};
