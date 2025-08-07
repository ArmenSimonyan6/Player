import { useBaseClassNames } from '@/hooks';
import styles from './HomeScreen.module.scss';
import { RecommendedTracks } from './RecommendedTracks';
import { TopAlbumTracks } from './TopAlbumTracks';

export const HomeScreen = () => {
  const { baseClassName } = useBaseClassNames('home-screen', styles);

  return (
    <div className={baseClassName()}>
      <RecommendedTracks />
      <TopAlbumTracks />
    </div>
  );
};
