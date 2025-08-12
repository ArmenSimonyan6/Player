import { TrackCard } from '../TrackCard';
import { useBaseClassNames } from '@/hooks';
import { SectionGoBackHeader } from '@/components';
import { useLocation, useNavigate } from 'react-router-dom';
import { TRecommendedLocationState } from './AllRecommendedTracks.props';

import styles from './AllRecommendedTracks.module.scss';

export const AllRecommendedTracks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { baseClassName } = useBaseClassNames('all-recommended-tracks', styles);

  const trackList = (location.state as TRecommendedLocationState)?.trackList || {};

  const handlePlay = (title: string) => {
    console.log(`Play: ${title}`);
  };

  const navigateBack = () => {
    void navigate(-1);
  };

  return (
    <div className={baseClassName()}>
      <SectionGoBackHeader title='All Tracks' onBack={navigateBack} />
      <div className={baseClassName('__trackList')}>
        {trackList.map(track => (
          <TrackCard
            key={track.id}
            title={track.title}
            image={track.image}
            artist={track.artist}
            onPlay={() => handlePlay(track.title)}
          />
        ))}
      </div>
    </div>
  );
};
