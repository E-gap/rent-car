import css from './UserCarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';

const UserCarsPage = () => {
  return (
    <div className={css.userCarsPage}>
      <Container>
        <CarsList />
      </Container>
    </div>
  );
};

export default UserCarsPage;
