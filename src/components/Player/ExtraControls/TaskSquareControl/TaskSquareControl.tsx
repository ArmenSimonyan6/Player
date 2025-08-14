import { TaskSquareIcon } from '@/assets';
import { CustomButton } from '@/components';
import { useBaseClassNames } from '@/hooks';

import styles from './TaskSquareControl.module.scss';

export const TaskSquareControl = () => {
  const { baseClassName } = useBaseClassNames('task-square-control', styles);

  return (
    <div className={baseClassName()}>
      <CustomButton
        aria-label='Playlist'
        type='button'
        className={baseClassName('__taskSquareIcon')}
      >
        <TaskSquareIcon />
      </CustomButton>
    </div>
  );
};
