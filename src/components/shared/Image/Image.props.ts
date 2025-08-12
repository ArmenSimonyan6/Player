import React, { CSSProperties } from 'react';

export interface IImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  objectFit?: CSSProperties['objectFit'];
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
