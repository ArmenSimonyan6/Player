import { useBaseClassNames } from '@/hooks';
import { TrackCardAlbum } from '../TrackCardAlbum';
import { useLocation, useNavigate } from 'react-router-dom';
import { SectionGoBackHeader } from '../SectionGoBackHeader';
import { TTopAlbumTracksLocationState } from './AllTopAlbumTracks.props';

import styles from './AllTopAlbumTracks.module.scss';

export const AllTopAlbumTracks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { baseClassName } = useBaseClassNames('all-top-album-tracks', styles);
  const trackList = (location.state as TTopAlbumTracksLocationState)?.trackList || [];

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
          <TrackCardAlbum key={track.id} image={track.image} onPlay={() => handlePlay('Playing')} />
        ))}
      </div>
    </div>
  );
};
