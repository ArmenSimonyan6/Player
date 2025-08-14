import { CustomButtonProps } from './CustomButton.props';

export const CustomButton = ({
  ref,
  style,
  onClick,
  children,
  isDisabled,
  className = '',
  type = 'button',
}: CustomButtonProps) => {
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
