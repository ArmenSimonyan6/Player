import { Home, Page1 } from '@/containers';
import { NotFound } from '@/pages';
import { FC, ReactNode } from 'react';

interface RouteItem {
  path: string;
  component: FC;
  title?: string;
  icon?: ReactNode;
  showInSidebar?: boolean;
}

export const ROUTES = {
  HOME: '/',
  PAGE1: '/page1',
  PAGE2: '/page2',
  PAGE3: '/page3',
  PAGE4: '/page4',
  NOTFOUND: '*',
};

export const ROUTES_GROUP: RouteItem[] = [
  {
    path: ROUTES.HOME,
    component: Home,
    title: 'Home',
    showInSidebar: true,
  },
  {
    path: ROUTES.PAGE1,
    component: Page1,
    title: 'Page 1',
    showInSidebar: true,
  },
  {
    path: ROUTES.PAGE2,
    component: Page1,
    title: 'Page 2',
    showInSidebar: true,
  },
  {
    path: ROUTES.PAGE3,
    component: Page1,
    title: 'Page 3',
    showInSidebar: true,
  },
  {
    path: ROUTES.PAGE4,
    component: Page1,
    title: 'Page 4',
    showInSidebar: true,
  },
  {
    path: ROUTES.NOTFOUND,
    component: NotFound,
    showInSidebar: false,
  },
];
