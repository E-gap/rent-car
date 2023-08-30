import css from './FavoritePage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteCars } from '../../redux/cars/carsOperations';
import { useEffect } from 'react';
import { selectAllCars } from '../../redux/selectors';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);

  useEffect(() => {
    dispatch(getFavoriteCars());
  }, [dispatch]);

  return (
    <div className={css.favoritePage}>
      <Container>
        <CarsList cars={cars} />
      </Container>
    </div>
  );
};

export default FavoritePage;
