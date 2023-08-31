import css from './UserCarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import { Preloader } from '../../components/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCars } from '../../redux/cars/carsOperations';
import { useEffect } from 'react';
import { selectAllCars, selectIsCarsLoading } from '../../redux/selectors';

const UserCarsPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const IsLoading = useSelector(selectIsCarsLoading);

  useEffect(() => {
    dispatch(getUserCars());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {IsLoading ? (
        <Preloader />
      ) : (
        <div className={css.userCarsPage}>
          <Container>
            <CarsList cars={cars} />
          </Container>
        </div>
      )}
    </>
  );
};

export default UserCarsPage;
