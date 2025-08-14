import cx from 'classnames';
import { HeartIcon } from '@/assets';
import { CustomButton } from '@/components';
import { useBaseClassNames } from '@/hooks';
import { TFavoriteIconProps } from './FavoriteControl.props';

import styles from './FavoriteControl.module.scss';

export const FavoriteControl = ({ isFavorite, setIsFavorite }: TFavoriteIconProps) => {
  const { baseClassName } = useBaseClassNames('favorite-control', styles);

  const handleChange = () => {
    console.log(isFavorite ? 'Remove from favorites' : 'Add to favorites');
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={baseClassName()}>
      <CustomButton
        type='button'
        onClick={handleChange}
        aria-label={isFavorite ? 'Unfavorite' : 'Favorite'}
        className={cx(baseClassName('__buttonControlsExtra'), {
          [baseClassName('__buttonControlsExtra', ['active'])]: isFavorite,
        })}
      >
        <HeartIcon />
      </CustomButton>
    </div>
  );
};
