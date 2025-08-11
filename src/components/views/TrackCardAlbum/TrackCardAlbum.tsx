import { Image } from '@/components';
import { useBaseClassNames } from '@/hooks';
import { TPropsTrackCardAlbum } from './TrackCardAlbum.props';

import styles from './TrackCardAlbum.module.scss';

export const TrackCardAlbum = ({ image, onPlay }: TPropsTrackCardAlbum) => {
  const { baseClassName } = useBaseClassNames('track-card-album', styles);

  return (
    <div className={baseClassName()}>
      <div className={baseClassName('__imageWrapperAlbum')}>
        <Image src={image} className={baseClassName('__image')} onClick={onPlay} />
      </div>
    </div>
  );
};
