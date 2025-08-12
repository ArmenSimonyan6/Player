import { TopChartFabulaImage, TopChartSevenImage } from '@/assets';

type TChartDataTracks = {
  title: string;
  artist: string;
  duration: string;
};

type TChartData = {
  title: string;
  image: string;
  tracks: TChartDataTracks[];
};

export const chartData: TChartData[] = [
  {
    title: '100 TOP Hits',
    image: TopChartFabulaImage,
    tracks: [
      { title: 'Sial', artist: 'Mahalini', duration: '4:03' },
      { title: 'Rayuan Perempuan Gila', artist: 'Nadin Amizah', duration: '5:20' },
      { title: 'Jiwa yang Bersedih', artist: 'Ghea Indrawari', duration: '4:38' },
      { title: 'Komang', artist: 'Raim Laude', duration: '3:42' },
    ],
  },
  {
    title: 'New Release',
    image: TopChartSevenImage,
    tracks: [
      { title: 'Seven (feat. Latto)', artist: 'Jung Kook', duration: '3:04' },
      { title: 'Super Shy', artist: 'NewJeans', duration: '2:34' },
      { title: 'Somebody’s Pleasure', artist: 'Aziz Hedra', duration: '3:44' },
      { title: 'Tally', artist: 'BLACKPINK', duration: '3:04' },
    ],
  },

  {
    title: '200 TOP Hits',
    image: TopChartFabulaImage,
    tracks: [
      { title: 'Sial', artist: 'Mahalini', duration: '4:03' },
      { title: 'Rayuan Perempuan Gila', artist: 'Nadin Amizah', duration: '5:20' },
      { title: 'Jiwa yang Bersedih', artist: 'Ghea Indrawari', duration: '4:38' },
      { title: 'Komang', artist: 'Raim Laude', duration: '3:42' },
    ],
  },
  {
    title: 'New Release',
    image: TopChartSevenImage,
    tracks: [
      { title: 'Seven (feat. Latto)', artist: 'Jung Kook', duration: '3:04' },
      { title: 'Super Shy', artist: 'NewJeans', duration: '2:34' },
      { title: 'Somebody’s Pleasure', artist: 'Aziz Hedra', duration: '3:44' },
      { title: 'Tally', artist: 'BLACKPINK', duration: '3:04' },
    ],
  },
];
