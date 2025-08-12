export type TSwiperBreakpointsConfig = Record<number, { slidesPerView: number }>;

export const swiperResponsiveConfig: TSwiperBreakpointsConfig = {
  0: { slidesPerView: 1 },
  768: { slidesPerView: 1 },
  1101: { slidesPerView: 2 },
  1921: { slidesPerView: 3 },
};
