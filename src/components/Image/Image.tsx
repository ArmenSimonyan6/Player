import classNames from 'classnames';
import { IImageProps } from './Image.props';
import { useBaseClassNames } from '@/hooks';
import styles from './Image.module.scss';

export const Image = ({
  src,
  alt,
  width,
  style,
  height,
  onClick,
  className,
  ...rest
}: IImageProps) => {
  const { baseClassName } = useBaseClassNames('image', styles);

  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      width={width}
      style={style}
      height={height}
      onClick={onClick}
      className={classNames(baseClassName(), className)}
    />
  );
};
