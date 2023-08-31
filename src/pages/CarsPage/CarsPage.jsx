import css from './CarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import { Preloader } from '../../components/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../redux/cars/carsOperations';
import { useEffect } from 'react';
import { selectAllCars, selectIsCarsLoading } from '../../redux/selectors';

const CarsPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const IsLoading = useSelector(selectIsCarsLoading);

  useEffect(() => {
    dispatch(getAllCars());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {IsLoading ? (
        <Preloader />
      ) : (
        <div className={css.carsPage}>
          <Container>
            <CarsList cars={cars} />
          </Container>
        </div>
      )}
    </>
  );
};

export default CarsPage;
