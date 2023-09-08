import css from './CarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import HandlePanel from 'components/HandlePanel/HandlePanel';

const CarsPage = () => {
  return (
    <div className={css.carsPage}>
      <Container>
        <HandlePanel />
        <CarsList page="carsPage" />
      </Container>
    </div>
  );
};

export default CarsPage;
