import css from './UserCarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import HandlePanel from 'components/HandlePanel/HandlePanel';

const UserCarsPage = () => {
  return (
    <div className={css.userCarsPage}>
      <Container>
        <HandlePanel />
        <CarsList page="userCarsPage" />
      </Container>
    </div>
  );
};

export default UserCarsPage;
