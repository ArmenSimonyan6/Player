import { Sidebar } from '@/components';
import { type PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => (
  <div className={styles.layout}>
    <Sidebar />
    <main>{children}</main>
  </div>
);
