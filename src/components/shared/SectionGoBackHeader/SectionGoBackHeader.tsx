import { Button } from '@/components';
import { ArrowLeftIcon } from '@/assets';
import { useBaseClassNames } from '@/hooks';
import { TSectionGoBackHeaderProps } from './SectionGoBackHeader.props';

import styles from './SectionGoBackHeader.module.scss';

export const SectionGoBackHeader = ({ title, onBack }: TSectionGoBackHeaderProps) => {
  const { baseClassName } = useBaseClassNames('section-go-back-header', styles);

  return (
    <div className={baseClassName()}>
      <Button onClick={onBack} className={baseClassName('__goBackButton')}>
        <ArrowLeftIcon />
      </Button>
      <h1 className={baseClassName('__title')}>{title}</h1>
    </div>
  );
};
