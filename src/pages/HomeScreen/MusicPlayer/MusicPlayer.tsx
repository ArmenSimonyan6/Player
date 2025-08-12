import { useBaseClassNames } from '@/hooks';

import styles from './MusicPlayer.module.scss';

export const MusicPlayer = () => {
  const { baseClassName } = useBaseClassNames('music-player', styles);

  return <div className={baseClassName()} />;
};
