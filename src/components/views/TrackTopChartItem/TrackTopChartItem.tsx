import { PlayIcon } from '@/assets';
import { useRef, useState } from 'react';
import { DOT, joinStrings } from '@/utils';
import { useBaseClassNames } from '@/hooks';
import { TTrackItemProps } from './TrackTopChartItem.props';

import styles from './TrackTopChartItem.module.scss';

export const TrackTopChartItem = ({ index, title, artist, duration }: TTrackItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const touchTimeoutRef = useRef<number | null>(null);
  const { baseClassName } = useBaseClassNames('track-top-chart-item', styles);

  const handleTouchStart = () => {
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
      touchTimeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    if (touchTimeoutRef.current) {
      setIsHovered(false);
      touchTimeoutRef.current = null;
    }
  };

  const info = joinStrings([artist, duration], DOT);

  return (
    <div
      className={`${baseClassName()} ${isHovered ? baseClassName('__hovered') : ''}`}
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={baseClassName('__content')}>
        {isHovered ? (
          <PlayIcon className={baseClassName('__playIcon')} />
        ) : (
          <span className={baseClassName('__itemIndex')}>{index}</span>
        )}
        <div className={baseClassName('__track')}>
          <div className={baseClassName('__title')}>{title}</div>
          <div className={baseClassName('__trackInfo')}>{info}</div>
        </div>
      </div>
    </div>
  );
};
