type TRecommendedTrack = {
  id: string;
  title: string;
  image: string;
  artist: string;
};

export type TRecommendedLocationState = {
  trackList: TRecommendedTrack[];
};
