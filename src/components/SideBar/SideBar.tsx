import classNames from 'classnames';
import { JSX, useRef } from 'react';
import { RouteTitle } from './SideBar.props';
import { ROUTES, ROUTES_GROUP } from '@/routes';
import { NavLink, useLocation } from 'react-router-dom';
import { useBaseClassNames, useScrollToActiveChild } from '@/hooks';
import { BookSaveIcon, HomeIcon, Logo, MicrophoneIcon, MusicLibraryIcon } from '@/assets';
import styles from './Sidebar.module.scss';

const iconMap: Record<RouteTitle, JSX.Element> = {
  Home: <HomeIcon />,
  [RouteTitle.Page1]: <MicrophoneIcon />,
  [RouteTitle.Page2]: <MusicLibraryIcon />,
  [RouteTitle.Page3]: <MicrophoneIcon />,
  [RouteTitle.Page4]: <BookSaveIcon />,
};

export const Sidebar = () => {
  const { pathname } = useLocation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeElementRef = useRef<HTMLAnchorElement | null>(null);

  const { baseClassName } = useBaseClassNames('sidebar', styles);
  const shownLinks = ROUTES_GROUP.filter(({ IsShowInSidebar }) => IsShowInSidebar);

  useScrollToActiveChild(containerRef, activeElementRef);

  return (
    <div className={baseClassName()}>
      <div className={baseClassName('__logo')}>
        <NavLink to={ROUTES.HOME}>
          <Logo />
        </NavLink>
      </div>

      <div className={baseClassName('__sectionLinks')}>
        <div className={baseClassName('__sectionTitleWrap')}>
          <span className={baseClassName('__sectionTitle')}>Discover</span>
        </div>

        <nav className={baseClassName('__nav')} ref={containerRef}>
          {shownLinks.map(({ path, title }) => {
            const isActive = pathname === path;

            return (
              <NavLink
                key={path}
                to={path}
                ref={isActive ? activeElementRef : null}
                className={({ isActive }) =>
                  classNames(baseClassName('__link'), {
                    [baseClassName('__link', ['active'])]: isActive,
                  })
                }
              >
                <div className={baseClassName('__linkContent')}>
                  <span className={baseClassName('__linkContent__icon')}>
                    {iconMap[title as RouteTitle]}
                  </span>
                  <span className={baseClassName('__linkContent__title')}>{title}</span>
                </div>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
