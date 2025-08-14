export const formatTime = (secondsArg: number) => {
  const minutes = Math.floor(secondsArg / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor(secondsArg % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${seconds}`;
};
