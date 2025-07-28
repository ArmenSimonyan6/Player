export enum RouteTitle {
  Home = 'Home',
  Page1 = 'Page 1',
  Page2 = 'Page 2',
  Page3 = 'Page 3',
  Page4 = 'Page 4',
}

export interface IRouteItem {
  path: string;
  title?: string;
  component: React.FC;
  showInSidebar?: boolean;
}
