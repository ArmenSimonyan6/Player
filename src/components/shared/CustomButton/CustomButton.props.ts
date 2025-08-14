import { CSSProperties, PropsWithChildren, Ref } from 'react';

export type TButtonProps = {
  className?: string;
  isDisabled?: boolean;
  style?: CSSProperties;
  type?: 'button' | 'submit';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onTouchStart?: (e: React.TouchEvent<HTMLButtonElement>) => void;
};

export type CustomButtonProps = PropsWithChildren<TButtonProps> & {
  ref?: Ref<HTMLButtonElement>;
};
