import { Button } from '@/components';
import { ArrowRightIcon } from '@/assets';
import { useBaseClassNames } from '@/hooks';

import styles from './SwiperNextIcon.module.scss';

type SwiperNextIconProps = {
  onNext?: () => void;
  ref?: React.Ref<HTMLButtonElement>;
};

export const SwiperNextIcon = ({ onNext, ref }: SwiperNextIconProps) => {
  const { baseClassName } = useBaseClassNames('custom-right-button', styles);

  return (
    <Button ref={ref} onClick={onNext} className={baseClassName()}>
      <ArrowRightIcon />
    </Button>
  );
};
