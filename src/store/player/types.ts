export interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
}

export interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  playlist: Track[];
}
