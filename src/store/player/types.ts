export type TPlayerSliceTrack = {
  id: string;
  url: string;
  title: string;
  artist: string;
};

export type TPlayerState = {
  isPlaying: boolean;
  playlist: TPlayerSliceTrack[];
  currentTrack: TPlayerSliceTrack | null;
};
