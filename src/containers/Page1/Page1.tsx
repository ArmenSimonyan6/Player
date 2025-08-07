import { useBaseClassNames } from '@/hooks';
import styles from './Page1.module.scss';

const Page1 = () => {
  const { baseClassName } = useBaseClassNames('page1', styles);

  return (
    <div className={baseClassName()}>
      <span className={baseClassName('__title')}>Page 1</span>
    </div>
  );
};

export default Page1;
