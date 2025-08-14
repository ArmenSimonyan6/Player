import { formatTime } from '@/utils';
import { DESKTOP_WIDTH } from '@/const';
import { TopChartFabulaImage } from '@/assets';
import { useRef, useState, useEffect } from 'react';
import { useBaseClassNames, useWindowResize } from '@/hooks';
import { TExtraControlsProps, TPlayerControlsProps } from './MusicPlayer.props';
import { ActivePlayerArtist, ExtraControls, PlayerControls } from '@/components';

import styles from './MusicPlayer.module.scss';

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [duration, setDuration] = useState<number>(0);
  const [isVolume, setIsVolume] = useState<number>(0.6);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= DESKTOP_WIDTH);

  const { baseClassName } = useBaseClassNames('music-player', styles);

  useWindowResize(() => {
    const isMatched = window.innerWidth > DESKTOP_WIDTH;
    setIsDesktop(isMatched);
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoadedMetadata = () => {
      setDuration(audio.duration);
    };
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);

    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const vol = Number(e.target.value);
    audio.volume = vol;

    setIsVolume(vol);
  };

  const playerControlsProps: TPlayerControlsProps = {
    duration,
    audioRef,
    isRepeat,
    isShuffle,
    isPlaying,
    togglePlay,
    formatTime,
    currentTime,
    setIsRepeat,
    setIsShuffle,
  };

  const extraControlsProps: TExtraControlsProps = {
    isVolume,
    isFavorite,
    setIsFavorite,
    handleVolumeChange,
  };

  return (
    <div className={baseClassName()}>
      {isDesktop ? (
        <>
          <ActivePlayerArtist
            image={TopChartFabulaImage}
            title='Jiwa yang Bersedih'
            subtitle='Ghea Indrawati'
          />
          <PlayerControls {...playerControlsProps} />
          <ExtraControls {...extraControlsProps} />
        </>
      ) : (
        <>
          <div className={baseClassName('__top')}>
            <ActivePlayerArtist
              image={TopChartFabulaImage}
              title='Jiwa yang Bersedih'
              subtitle='Ghea Indrawati'
            />
            <ExtraControls {...extraControlsProps} />
          </div>
          <PlayerControls {...playerControlsProps} />
        </>
      )}
    </div>
  );
};
