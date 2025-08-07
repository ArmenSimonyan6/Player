import { useBaseClassNames } from '@/hooks';
import { HomeScreen } from '@/pages/HomeScreen';
import styles from './Home.module.scss';

const Home = () => {
  const { baseClassName } = useBaseClassNames('home', styles);

  return (
    <div className={baseClassName()}>
      <HomeScreen />
    </div>
  );
};

export default Home;
