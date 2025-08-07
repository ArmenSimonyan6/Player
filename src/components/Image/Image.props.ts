import React, { CSSProperties } from 'react';

export interface IImageProps {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  width?: number | string;
  height?: number | string;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
