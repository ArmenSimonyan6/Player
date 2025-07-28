import { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { ROUTES, ROUTES_GROUP } from '@/routes';
import { BookSaveIcon, HomeIcon, Logo, MicrophoneIcon, MusicLibraryIcon } from '@/assets';
import { IRouteItem, RouteTitle } from './SideBar.props';
import classNames from 'classnames';

const iconMap: Record<RouteTitle, JSX.Element> = {
  Home: <HomeIcon />,
  'Page 1': <MicrophoneIcon />,
  'Page 2': <MusicLibraryIcon />,
  'Page 3': <MicrophoneIcon />,
  'Page 4': <BookSaveIcon />,
};

const shownLinks = ROUTES_GROUP.filter(
  (route): route is IRouteItem & { title: RouteTitle } =>
    Boolean(route.showInSidebar) && typeof route.title === 'string'
);

export const Sidebar = () => (
  <aside className={styles.sidebar}>
    <div className={styles.container}>
      <div className={styles.container__logo}>
        <NavLink to={ROUTES.HOME}>
          <Logo />
        </NavLink>
      </div>
      <div className={styles.container__sectionLinks}>
        <div className={styles.container__sectionTitleWrap}>
          <span className={styles.container__sectionTitle}>Discover</span>
        </div>

        <nav className={styles.container__nav}>
          {shownLinks.map(({ path, title }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                classNames(styles.container__link, {
                  [styles.container__active]: isActive,
                })
              }
            >
              <span className={styles.icon}>{iconMap[title]}</span>
              <span className={styles.titleWrapper}>
                <span className={styles.title}>{title}</span>
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  </aside>
);
