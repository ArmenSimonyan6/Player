import { TButtonProps } from './Button.props';
import { PropsWithChildren, Ref } from 'react';

type ButtonProps = PropsWithChildren<TButtonProps> & {
  ref?: Ref<HTMLButtonElement>;
};

export const Button = ({
  ref,
  style,
  onClick,
  children,
  isDisabled,
  className = '',
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      ref={ref}
      type={type}
      style={style}
      onClick={onClick}
      disabled={isDisabled}
      className={className}
    >
      {children}
    </button>
  );
};
