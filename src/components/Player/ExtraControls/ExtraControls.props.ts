export type TExtraControlsProps = {
  isVolume: number;
  isFavorite: boolean;
  setIsFavorite: (value: boolean) => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
