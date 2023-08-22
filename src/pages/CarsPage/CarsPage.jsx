import css from './CarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../redux/cars/carsOperations';
import { useEffect } from 'react';
import { selectAllCars } from '../../redux/selectors';

const CarsPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);

  

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <div className={css.carsPage}>
      <Container>
        <CarsList cars={cars} />
      </Container>
    </div>
  );
};

export default CarsPage;
