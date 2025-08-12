import { useWindowResize } from '@/hooks';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { TSwiperBreakpointsConfig } from '@/const';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';

interface TopChartSwiperProps<T> {
  data: T[];
  isLoop?: boolean;
  className?: string;
  spaceBetween?: number;
  breakpoints?: TSwiperBreakpointsConfig;
  nextRef?: React.RefObject<HTMLButtonElement | null>;
  prevRef?: React.RefObject<HTMLButtonElement | null>;
  renderSwipe: (item: T, index: number) => React.ReactNode;
}

export const CustomSwiper = <T,>({
  data,
  nextRef,
  prevRef,
  breakpoints,
  renderSwipe,
  isLoop = false,
  className = '',
  spaceBetween = 24,
}: TopChartSwiperProps<T>) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  useEffect(() => {
    if (!swiperInstance) return;

    if (swiperInstance.params.navigation && typeof swiperInstance.params.navigation !== 'boolean') {
      swiperInstance.params.navigation.nextEl = nextRef?.current || null;
      swiperInstance.params.navigation.prevEl = prevRef?.current || null;
    }
    swiperInstance.navigation.destroy();
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }, [swiperInstance, nextRef, prevRef]);

  useWindowResize(() => {
    swiperInstance?.update();
  });

  return (
    <Swiper
      loop={isLoop}
      className={className}
      modules={[Navigation]}
      breakpoints={breakpoints}
      spaceBetween={spaceBetween}
      onSwiper={setSwiperInstance}
      navigation={{
        prevEl: prevRef?.current || null,
        nextEl: nextRef?.current || null,
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>{renderSwipe(item, index)}</SwiperSlide>
      ))}
    </Swiper>
  );
};
