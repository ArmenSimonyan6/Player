import { useBaseClassNames } from '@/hooks';
import { PlayIconDarkOpacity } from '@/assets';
import { TPropsTrackCard } from './TrackCard.props';
import { CustomButton, Image, TitleSubtitle } from '@/components';

import styles from './TrackCard.module.scss';

export const TrackCard = ({ title, artist, image, onPlay }: TPropsTrackCard) => {
  const { baseClassName } = useBaseClassNames('track-card', styles);

  return (
    <div className={baseClassName()}>
      <div className={baseClassName('__imageWrapper')}>
        <Image src={image} alt={title} className={baseClassName('__image')} />
        <CustomButton className={baseClassName('__playButton')} onClick={onPlay}>
          <PlayIconDarkOpacity />
        </CustomButton>
      </div>
      <div className={baseClassName('__info')}>
        <TitleSubtitle title={title} subtitle={artist} />
      </div>
    </div>
  );
};
