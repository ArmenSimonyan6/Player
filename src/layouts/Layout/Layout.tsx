import { Sidebar } from '@/components';
import { useBaseClassNames } from '@/hooks';
import { type PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => {
  const { baseClassName } = useBaseClassNames('layout', styles);

  return (
    <div className={baseClassName()}>
      <Sidebar />
      <div className={baseClassName('__rightBlock')}>{children}</div>
    </div>
  );
};
