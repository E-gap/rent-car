import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

import Container from 'components/Container/Container';
import AnimationHome from '../../components/AnimationHome/AnimationHome';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <Container>
        <AnimationHome />
        <NavLink to="/cars/all" className={css.moveToCars}>
          Go to Cars
        </NavLink>
      </Container>
    </div>
  );
};

export default HomePage;
