import css from './UserCarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCars } from '../../redux/cars/carsOperations';
import { useEffect } from 'react';
import { selectAllCars } from '../../redux/selectors';

const UserCarsPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);

  useEffect(() => {
    dispatch(getUserCars());
  }, [dispatch]);

  return (
    <div className={css.userCarsPage}>
      <Container>
        <CarsList cars={cars} />
      </Container>
    </div>
  );
};

export default UserCarsPage;
