import { DESKTOP_XL_WIDTH } from '@/const';
import { useEffect, useRef, useState } from 'react';
import { TExtraControlsProps } from './ExtraControls.props';
import { useBaseClassNames, useClickOutside } from '@/hooks';
import { FavoriteControl, TaskSquareControl, VolumeControl } from '@/components';

import styles from './ExtraControls.module.scss';

export const ExtraControls = ({
  isVolume,
  isFavorite,
  setIsFavorite,
  handleVolumeChange,
}: TExtraControlsProps) => {
  const volumeRef = useRef<HTMLDivElement | null>(null);
  const [isVolumeOpen, setIsVolumeOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > DESKTOP_XL_WIDTH);

  const { baseClassName } = useBaseClassNames('extra-controls', styles);

  useClickOutside(volumeRef, () => {
    if (!isDesktop) {
      setIsVolumeOpen(false);
    }
  });

  useEffect(() => {
    const checkIsDesktop = () => {
      const isMatched = window.innerWidth > DESKTOP_XL_WIDTH;

      setIsDesktop(isMatched);
      setIsVolumeOpen(isMatched);
    };

    checkIsDesktop();

    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  return (
    <div className={baseClassName('__controlsExtra')}>
      <FavoriteControl isFavorite={isFavorite} setIsFavorite={setIsFavorite} />

      <div className={baseClassName('__volumeWrapper')} ref={volumeRef}>
        <VolumeControl
          isDesktop={isDesktop}
          isVolumeOpen={isVolumeOpen}
          setIsVolumeOpen={setIsVolumeOpen}
        />

        {isVolumeOpen && (
          <input
            min={0}
            max={1}
            step={0.01}
            type='range'
            value={isVolume}
            aria-label='Volume control'
            onChange={handleVolumeChange}
            className={baseClassName('__volumeSlider')}
            style={{ '--volume-percent': `${isVolume * 100}%` } as React.CSSProperties}
          />
        )}
      </div>

      <TaskSquareControl />
    </div>
  );
};
