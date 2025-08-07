import { useBaseClassNames } from '@/hooks';
import styles from './NotFound.module.scss';

const NotFound = () => {
  const { baseClassName } = useBaseClassNames('not-found', styles);

  return (
    <div className={baseClassName()}>
      <h2>Error 404</h2>
      <span>This Page Not Found</span>
    </div>
  );
};

export default NotFound;
