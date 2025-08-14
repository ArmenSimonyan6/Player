import { ArrowLeftIcon } from '@/assets';
import { CustomButton } from '@/components';
import { useBaseClassNames } from '@/hooks';
import { TSectionGoBackHeaderProps } from './SectionGoBackHeader.props';

import styles from './SectionGoBackHeader.module.scss';

export const SectionGoBackHeader = ({ title, onBack }: TSectionGoBackHeaderProps) => {
  const { baseClassName } = useBaseClassNames('section-go-back-header', styles);

  return (
    <div className={baseClassName()}>
      <CustomButton onClick={onBack} className={baseClassName('__goBackButton')}>
        <ArrowLeftIcon />
      </CustomButton>
      <h1 className={baseClassName('__title')}>{title}</h1>
    </div>
  );
};
