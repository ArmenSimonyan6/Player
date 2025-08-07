import { Button } from '../Button';
import { GoBackIcon } from '@/assets';
import { useBaseClassNames } from '@/hooks';
import styles from './SectionGoBackHeader.module.scss';
import { TSectionGoBackHeaderProps } from './SectionGoBackHeader.props';

export const SectionGoBackHeader = ({ title, onBack }: TSectionGoBackHeaderProps) => {
  const { baseClassName } = useBaseClassNames('section-go-back-header', styles);

  return (
    <div className={baseClassName()}>
      <Button onClick={onBack} className={baseClassName('__goBackButton')}>
        <GoBackIcon />
      </Button>
      <h1 className={baseClassName('__title')}>{title}</h1>
    </div>
  );
};
