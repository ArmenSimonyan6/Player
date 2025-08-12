import { useBaseClassNames } from '@/hooks';
import { TopChartTracks } from './TopChartTracks';
import { RecommendedTracks } from './RecommendedTracks';

import styles from './HomeScreen.module.scss';

export const HomeScreen = () => {
  const { baseClassName } = useBaseClassNames('home-screen', styles);

  return (
    <div className={baseClassName()}>
      <RecommendedTracks />
      <TopChartTracks />
    </div>
  );
};
