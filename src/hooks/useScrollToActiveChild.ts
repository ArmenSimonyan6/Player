import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToActiveChild = (
  containerRef: React.RefObject<HTMLElement | null>,
  activeElementRef: React.RefObject<HTMLElement | null>,
  options: ScrollIntoViewOptions = { behavior: 'smooth' }
) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = containerRef.current;
    const element = activeElementRef.current;

    if (!container || !element) return;

    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const scrollTop =
      elementRect.top - containerRect.top - container.clientHeight / 2 + element.clientHeight / 2;

    const scrollLeft =
      elementRect.left - containerRect.left - container.clientWidth / 2 + element.clientWidth / 2;

    container.scrollTo({
      top: scrollTop + container.scrollTop,
      left: scrollLeft + container.scrollLeft,
      ...options,
    });
  }, [activeElementRef, containerRef, pathname, options]);
};
