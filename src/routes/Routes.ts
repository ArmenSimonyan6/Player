import { Home } from '@/containers';
import { NotFound } from '@/pages';
import { FC } from 'react';

interface RouteItem {
  path: string;
  component: FC;
}

export const ROUTES = {
  HOME: '/',
  NOTFOUND: '*',
};

export const ROUTES_GROUP: RouteItem[] = [
  {
    path: ROUTES.HOME,
    component: Home,
  },
  {
    path: ROUTES.NOTFOUND,
    component: NotFound,
  },
];
