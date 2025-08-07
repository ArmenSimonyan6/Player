import { ROUTES } from '@/routes';
import { useBaseClassNames } from '@/hooks';
import { recommendedTracks } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { SectionHeader, TrackCard } from '@/components';
import styles from './RecommendedTracks.module.scss';

export const RecommendedTracks = () => {
  const navigate = useNavigate();
  const { baseClassName } = useBaseClassNames('recommended-tracks', styles);

  const handlePlay = (title: string) => {
    console.log(`Play: ${title}`);
  };

  const handleViewAll = () => {
    void navigate(ROUTES.RECOMMENDED_TRACKS, {
      state: {
        trackList: recommendedTracks,
      },
    });
  };

  return (
    <div className={baseClassName()}>
      <SectionHeader onClick={handleViewAll} title='Recommended' actionLabel='View all' />
      <div className={baseClassName('__trackList')}>
        {recommendedTracks.map(track => (
          <TrackCard
            key={track.id}
            image={track.image}
            title={track.title}
            artist={track.artist}
            onPlay={() => handlePlay(track.title)}
          />
        ))}
      </div>
    </div>
  );
};
