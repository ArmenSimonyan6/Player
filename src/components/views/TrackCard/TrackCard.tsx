import { PlayIcon } from '@/assets';
import { useBaseClassNames } from '@/hooks';
import { Button, Image } from '@/components';
import { TPropsTrackCard } from './TrackCard.props';
import styles from './TrackCard.module.scss';

export const TrackCard = ({ title, artist, image, onPlay }: TPropsTrackCard) => {
  const { baseClassName } = useBaseClassNames('track-card', styles);

  return (
    <div className={baseClassName()}>
      <div className={baseClassName('__imageWrapper')}>
        <Image src={image} alt={title} className={baseClassName('__image')} />
        <Button className={baseClassName('__playButton')} onClick={onPlay}>
          <PlayIcon />
        </Button>
      </div>
      <div className={baseClassName('__info')}>
        <div className={baseClassName('__infoTitle')}>{title}</div>
        <div className={baseClassName('__infoArtist')}>{artist}</div>
      </div>
    </div>
  );
};
