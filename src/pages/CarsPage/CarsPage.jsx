import css from './CarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import ErrorComponent from 'components/ErrorComponent/ErrorComponent';
import { Preloader } from '../../components/Preloader/Preloader';
import { getAllCars } from '../../redux/cars/carsOperations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllCars,
  selectIsCarsLoading,
  selectCarsError,
} from '../../redux/selectors';

const CarsPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const isLoading = useSelector(selectIsCarsLoading);
  const carsError = useSelector(selectCarsError);

  useEffect(() => {
    dispatch(getAllCars());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={css.carsPage}>
          <Container>
            {carsError ? (
              <ErrorComponent errorText={carsError} />
            ) : (
              <CarsList cars={cars} />
            )}
          </Container>
        </div>
      )}
    </>
  );
};

export default CarsPage;
