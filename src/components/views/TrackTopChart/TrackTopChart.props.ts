export type TTrackTopChart = {
  title: string;
  artist: string;
  duration: string;
};

export type TChartCategory = {
  title: string;
  image: string;
  tracks: TTrackTopChart[];
};
