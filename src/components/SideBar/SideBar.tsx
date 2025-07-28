import { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { ROUTES_GROUP } from '@/routes';
import { BookSaveIcon, HomeIcon, Logo, MicrophoneIcon, MusicLibraryIcon } from '@/assets';
import { IRouteItem, TRouteTitle } from './SideBar.props';

const iconMap: Record<TRouteTitle, JSX.Element> = {
  Home: <HomeIcon />,
  'Page 1': <MicrophoneIcon />,
  'Page 2': <MusicLibraryIcon />,
  'Page 3': <MicrophoneIcon />,
  'Page 4': <BookSaveIcon />,
};

const shownLinks = ROUTES_GROUP.filter(
  (route): route is IRouteItem & { title: TRouteTitle } =>
    Boolean(route.showInSidebar) && typeof route.title === 'string'
);

export const Sidebar = () => (
  <aside className={styles.sidebar}>
    <div className={styles.container}>
      <div className={styles.container__logo}>
        <Logo />
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
                isActive ? styles.container__active : styles.container__link
              }
            >
              <span className={styles.icon}>{iconMap[title]}</span>
              <span className={styles.title}>{title}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  </aside>
);
