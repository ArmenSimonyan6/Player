import classNames from 'classnames';
import { IImageProps } from './Image.props';
import { useBaseClassNames } from '@/hooks';

import styles from './Image.module.scss';

export const Image = ({
  src,
  alt,
  width,
  height,
  onClick,
  className,
  objectFit = 'cover',
  ...rest
}: IImageProps) => {
  const { baseClassName } = useBaseClassNames('image', styles);

  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      style={{ objectFit }}
      className={classNames(baseClassName(), className)}
    />
  );
};
