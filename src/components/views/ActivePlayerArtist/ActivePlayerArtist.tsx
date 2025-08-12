import { useBaseClassNames } from '@/hooks';
import { TPlayerArtist } from './ActivePlayerArtist.props';
import { Image, TitleSubtitle } from '@/components/shared';

import styles from './ActivePlayerArtist.module.scss';

export const ActivePlayerArtist = ({ image, title, subtitle }: TPlayerArtist) => {
  const { baseClassName } = useBaseClassNames('active-player-artist', styles);

  return (
    <div className={baseClassName()}>
      <Image
        src={image}
        objectFit='cover'
        alt={`${title} cover`}
        className={baseClassName('__image')}
      />
      <TitleSubtitle title={title} subtitle={subtitle} />
    </div>
  );
};
