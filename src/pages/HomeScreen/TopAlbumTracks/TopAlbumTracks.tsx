import { ROUTES } from '@/routes';
import { topAlbumTracks } from '@/utils';
import { useBaseClassNames } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { SectionHeader, TrackCardAlbum } from '@/components';
import styles from './TopAlbumTracks.module.scss';

export const TopAlbumTracks = () => {
  const navigate = useNavigate();
  const { baseClassName } = useBaseClassNames('top-album-tracks', styles);

  const handlePlay = (title: string) => {
    console.log(`Play: ${title}`);
  };

  const handleViewAll = () => {
    void navigate(ROUTES.TOP_ALBUM_TRACKS, {
      state: {
        trackList: topAlbumTracks,
      },
    });
  };

  return (
    <div className={baseClassName()}>
      <SectionHeader onClick={handleViewAll} title='Top Album' actionLabel='View all' />

      <div className={baseClassName('__trackList')}>
        {topAlbumTracks.map(track => (
          <TrackCardAlbum key={track.id} image={track.image} onPlay={() => handlePlay('Playing')} />
        ))}
      </div>
    </div>
  );
};
