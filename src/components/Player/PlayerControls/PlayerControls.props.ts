export type TPlayerControlsProps = {
  duration: number;
  isRepeat: boolean;
  isShuffle: boolean;
  isPlaying: boolean;
  currentTime: number;
  togglePlay: () => void;
  formatTime: (seconds: number) => string;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  setIsRepeat: React.Dispatch<React.SetStateAction<boolean>>;
  setIsShuffle: React.Dispatch<React.SetStateAction<boolean>>;
};
