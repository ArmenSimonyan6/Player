import { useEffect } from 'react';

export const useWindowResize = (callback: () => void) => {
  useEffect(() => {
    if (!callback) return;

    window.addEventListener('resize', callback);

    return () => {
      window.removeEventListener('resize', callback);
    };
  }, [callback]);
};
