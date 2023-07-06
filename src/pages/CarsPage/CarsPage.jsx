import css from './CarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';

const CarsPage = () => {
  return (
    <div className={css.carsPage}>
      <Container>
        <CarsList />
      </Container>
    </div>
  );
};

export default CarsPage;
