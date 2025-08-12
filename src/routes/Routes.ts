import { NotFound } from '@/pages';
import { FC, ReactNode } from 'react';
import { Home, Page1 } from '@/containers';
import { AllRecommendedTracks } from '@/components';

interface IRouteItem {
  path: string;
  component: FC;
  title?: string;
  icon?: ReactNode;
  IsShowInSidebar?: boolean;
}

export const ROUTES = {
  HOME: '/',
  NOTFOUND: '*',
  PAGE1: '/page1',
  PAGE2: '/page2',
  PAGE3: '/page3',
  PAGE4: '/page4',
  RECOMMENDED_TRACKS: '/recommendedTracks',
};

export const ROUTES_GROUP: IRouteItem[] = [
  {
    path: ROUTES.HOME,
    component: Home,
    title: 'Home',
    IsShowInSidebar: true,
  },
  {
    path: ROUTES.NOTFOUND,
    component: NotFound,
    IsShowInSidebar: false,
  },
  {
    path: ROUTES.PAGE1,
    component: Page1,
    title: 'Page 1',
    IsShowInSidebar: true,
  },
  {
    path: ROUTES.PAGE2,
    component: Page1,
    title: 'Page 2',
    IsShowInSidebar: true,
  },
  {
    path: ROUTES.PAGE3,
    component: Page1,
    title: 'Page 3',
    IsShowInSidebar: true,
  },
  {
    path: ROUTES.PAGE4,
    component: Page1,
    title: 'Page 4',
    IsShowInSidebar: true,
  },
  {
    path: ROUTES.RECOMMENDED_TRACKS,
    component: AllRecommendedTracks,
    title: 'Recommended Tracks',
    IsShowInSidebar: false,
  },
];
