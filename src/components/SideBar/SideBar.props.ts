export type TRouteTitle = 'Home' | 'Page 1' | 'Page 2' | 'Page 3' | 'Page 4';

export interface IRouteItem {
  path: string;
  title?: string;
  component: React.FC;
  showInSidebar?: boolean;
}
