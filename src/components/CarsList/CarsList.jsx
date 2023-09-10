import css from './CarsList.module.css';
import ItemCar from 'components/ItemCar/ItemCar';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCars,
  getFavoriteCars,
  getUserCars,
} from '../../redux/cars/carsOperations';
import {
  selectAllCars,
  selectIsCarsLoading,
  selectCarsError,
  selectCarsSortBy,
} from '../../redux/selectors';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import Preloader from '../../components/Preloader/Preloader';

const CarsList = ({ page }) => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const isLoading = useSelector(selectIsCarsLoading);
  const carsError = useSelector(selectCarsError);
  const sortBy = useSelector(selectCarsSortBy);

  useEffect(() => {
    if (page === 'carsPage') {
      dispatch(getAllCars());
    }
    if (page === 'favoritePage') {
      dispatch(getFavoriteCars());
    }
    if (page === 'userCarsPage') {
      dispatch(getUserCars());
    }
  }, [dispatch, page]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {carsError ? (
            <ErrorComponent errorText={carsError} />
          ) : (
            <ul className={css.carList}>
              {cars.map(oneCar => (
                <ItemCar key={oneCar._id} oneCar={oneCar} />
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};

export default CarsList;

CarsList.propTypes = {
  cars: PropTypes.array,
};
