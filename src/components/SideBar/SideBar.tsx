import { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { ROUTES, ROUTES_GROUP } from '@/routes';
import { BookSaveIcon, HomeIcon, Logo, MicrophoneIcon, MusicLibraryIcon } from '@/assets';
import { RouteTitle } from './SideBar.props';
import classNames from 'classnames';

const iconMap: Record<RouteTitle, JSX.Element> = {
  Home: <HomeIcon />,
  'Page 1': <MicrophoneIcon />,
  'Page 2': <MusicLibraryIcon />,
  'Page 3': <MicrophoneIcon />,
  'Page 4': <BookSaveIcon />,
};

const shownLinks = ROUTES_GROUP.filter(route => route.showInSidebar);

export const Sidebar = () => (
  <aside className={styles.sidebar}>
    <div className={styles.sidebar__logo}>
      <NavLink to={ROUTES.HOME}>
        <Logo />
      </NavLink>
    </div>

    <div className={styles.sidebar__sectionLinks}>
      <div className={styles.sidebar__sectionTitleWrap}>
        <span className={styles.sidebar__sectionTitle}>Discover</span>
      </div>

      <nav className={styles.sidebar__nav}>
        {shownLinks.map(({ path, title }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              classNames(styles.sidebar__link, {
                [styles['sidebar__link--active']]: isActive,
              })
            }
          >
            <div className={styles.sidebar__linkContent}>
              <span className={styles.sidebar__linkContent__icon}>
                {iconMap[title as RouteTitle]}
              </span>
              <span className={styles.sidebar__linkContent__title}>{title}</span>
            </div>
          </NavLink>
        ))}
      </nav>
    </div>
  </aside>
);
