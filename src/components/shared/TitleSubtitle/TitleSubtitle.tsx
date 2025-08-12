import cx from 'classnames';
import { useBaseClassNames } from '@/hooks';
import { TTitleSubtitleProps } from './TitleSubtitle.props';

import styles from './TitleSubtitle.module.scss';

export const TitleSubtitle = ({
  title,
  subtitle,
  className = '',
  titleClassName = '__title',
  subTitleClassName = '__subtitle',
}: TTitleSubtitleProps) => {
  const { baseClassName } = useBaseClassNames('title-subtitle', styles);

  if (!title && !subtitle) return null;

  return (
    <div className={cx(baseClassName(), className)}>
      {title && <p className={baseClassName(titleClassName)}>{title}</p>}
      {subtitle && <p className={baseClassName(subTitleClassName)}>{subtitle}</p>}
    </div>
  );
};
