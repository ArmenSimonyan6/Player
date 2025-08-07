import { useBaseClassNames } from '@/hooks';
import styles from './TopChartTracks.module.scss';

export const TopChartTracks = () => {
  const { baseClassName } = useBaseClassNames('top-chart-tracks', styles);

  return <div className={baseClassName()}></div>;
};
