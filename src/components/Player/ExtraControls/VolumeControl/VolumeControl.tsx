import { VolumeIcon } from '@/assets';
import { CustomButton } from '@/components';
import { useBaseClassNames } from '@/hooks';
import { TVolumeControlProps } from './VolumeControl.props';

import styles from './VolumeControl.module.scss';

export const VolumeControl = ({
  isDesktop,
  isVolumeOpen,
  setIsVolumeOpen,
}: TVolumeControlProps) => {
  const { baseClassName } = useBaseClassNames('volume-control', styles);

  return (
    <CustomButton
      type='button'
      aria-label='Volume'
      className={baseClassName('__volumeIcon')}
      onClick={() => !isDesktop && setIsVolumeOpen(!isVolumeOpen)}
    >
      <VolumeIcon />
    </CustomButton>
  );
};
