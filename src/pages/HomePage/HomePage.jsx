import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import { AnimationHome } from '../../components/AnimationHome/AnimationHome';
import Container from 'components/Container/Container';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <Container>
        <AnimationHome />
        <NavLink to="/cars" className={css.moveToCards}>
          Go to Cars
        </NavLink>
      </Container>
    </div>
  );
};

export default HomePage;
