import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { BookSaveIcon, HomeIcon, Logo, MicrophoneIcon, MusicLibraryIcon } from '@/assets';
import { ROUTES_GROUP } from '@/routes';

const iconMap = {
  Home: <HomeIcon />,
  'Page 1': <MicrophoneIcon />,
  'Page 2': <MusicLibraryIcon />,
  'Page 3': <MicrophoneIcon />,
  'Page 4': <BookSaveIcon />,
};

export const Sidebar = () => (
  <aside className={styles.sidebar}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.sectionLinks}>
        <div className={styles.sectionTitle}>
          <span>Discover</span>
        </div>

        <nav className={styles.nav}>
          {ROUTES_GROUP.filter(route => route.showInSidebar).map(({ path, title }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              <span className={styles.icon}>{iconMap[title as keyof typeof iconMap]}</span>
              <span className={styles.title}>{title}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  </aside>
);
