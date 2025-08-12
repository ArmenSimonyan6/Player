import { Button } from '@/components';
import { useBaseClassNames } from '@/hooks';
import colors from '@/styles/colors/colors.module.scss';
import { TSectionHeaderProps } from './SectionHeader.props';

import styles from './SectionHeader.module.scss';

export const SectionHeader = ({ title, onClick, actionLabel }: TSectionHeaderProps) => {
  const { baseClassName } = useBaseClassNames('section-header', styles);

  return (
    <div className={baseClassName()}>
      <span className={baseClassName('__title')}>{title}</span>
      <Button
        onClick={onClick}
        style={{ color: colors.colorViolet }}
        className={baseClassName('__button')}
      >
        {actionLabel}
      </Button>
    </div>
  );
};
