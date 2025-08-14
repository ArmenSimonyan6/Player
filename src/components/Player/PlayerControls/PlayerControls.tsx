import cx from 'classnames';
import { useBaseClassNames } from '@/hooks';
import { CustomButton } from '@/components';
import { TPlayerControlsProps } from './PlayerControls.props';
import {
  NextPlayerIcon,
  PlayPlayerIcon,
  PausePlayerIcon,
  RepeatPlayerIcon,
  ShufflePlayerIcon,
  PreviousPlayerIcon,
} from '@/assets';

import styles from './PlayerControls.module.scss';

export const PlayerControls = ({
  audioRef,
  duration,
  isRepeat,
  isShuffle,
  isPlaying,
  formatTime,
  togglePlay,
  setIsRepeat,
  currentTime,
  setIsShuffle,
}: TPlayerControlsProps) => {
  const { baseClassName } = useBaseClassNames('player-controls', styles);

  return (
    <div className={baseClassName()}>
      <audio
        ref={audioRef}
        preload='metadata'
        src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
      />

      <div className={baseClassName('__controle')}>
        <div className={baseClassName('__controlsMain')}>
          <CustomButton
            type='button'
            aria-label='Shuffle'
            onClick={() => setIsShuffle(!isShuffle)}
            className={cx(baseClassName('__buttonControlsMain'), {
              [baseClassName('__buttonControlsMain', ['active'])]: isShuffle,
            })}
          >
            <ShufflePlayerIcon />
          </CustomButton>

          <CustomButton aria-label='Previous Track' type='button'>
            <PreviousPlayerIcon />
          </CustomButton>

          <CustomButton
            type='button'
            onClick={togglePlay}
            className={baseClassName('__playPause')}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <PausePlayerIcon /> : <PlayPlayerIcon />}
          </CustomButton>

          <CustomButton aria-label='Next Track' type='button'>
            <NextPlayerIcon />
          </CustomButton>

          <CustomButton
            type='button'
            aria-label='Repeat'
            className={isRepeat ? 'active' : ''}
            onClick={() => setIsRepeat(!isRepeat)}
          >
            <RepeatPlayerIcon />
          </CustomButton>
        </div>

        <div className={baseClassName('__progressContainer')}>
          <span className={baseClassName('__currentTime')}>{formatTime(currentTime)}</span>

          <input
            min={0}
            step='0.01'
            type='range'
            max={duration}
            aria-label='Seek'
            value={currentTime}
            className={baseClassName('__progressBar')}
            style={
              {
                '--progress-percent': `${(currentTime / duration) * 100}%`,
              } as React.CSSProperties
            }
          />

          <span className={baseClassName('__duration')}>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};
