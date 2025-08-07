import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { useBaseClassNames } from '@/hooks';
import { TButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button = ({
  style,
  onClick,
  children,
  isDisabled,
  className = '',
  type = 'button',
}: PropsWithChildren<TButtonProps>) => {
  const { baseClassName } = useBaseClassNames('button', styles);

  return (
    <button
      type={type}
      style={style}
      onClick={onClick}
      disabled={isDisabled}
      className={classNames(baseClassName(), className)}
    >
      {children}
    </button>
  );
};
