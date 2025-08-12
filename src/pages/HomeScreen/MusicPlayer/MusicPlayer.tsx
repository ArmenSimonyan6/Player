import { useBaseClassNames } from '@/hooks';
import { TopChartFabulaImage } from '@/assets';
import { ActivePlayerArtist } from '@/components';

import styles from './MusicPlayer.module.scss';

export const MusicPlayer = () => {
  const { baseClassName } = useBaseClassNames('music-player', styles);

  return (
    <div className={baseClassName()}>
      <ActivePlayerArtist
        image={TopChartFabulaImage}
        title='Jiwa yang Bersedih'
        subtitle='Ghea Indrawati'
      />
    </div>
  );
};
