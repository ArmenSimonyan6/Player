import { ArrowRightIcon } from '@/assets';
import { CustomButton } from '@/components';
import { useBaseClassNames } from '@/hooks';

import styles from './SwiperNextIcon.module.scss';

type SwiperNextIconProps = {
  onNext?: () => void;
  ref?: React.Ref<HTMLButtonElement>;
};

export const SwiperNextIcon = ({ onNext, ref }: SwiperNextIconProps) => {
  const { baseClassName } = useBaseClassNames('custom-right-button', styles);

  return (
    <CustomButton ref={ref} onClick={onNext} className={baseClassName()}>
      <ArrowRightIcon />
    </CustomButton>
  );
};
