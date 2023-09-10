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

  const firstWordSortBy = sortBy?.split(' ')[0];
  const directionSortBy = sortBy?.split(' ')[1];

  const sortedCars = [...cars];

  if (sortedCars.length > 0 && sortBy) {
    if (
      typeof sortedCars[0][firstWordSortBy] === 'string' &&
      directionSortBy === 'up'
    ) {
      sortedCars.sort((a, b) =>
        a[firstWordSortBy].localeCompare(b[firstWordSortBy])
      );
    } else if (
      typeof sortedCars[0][firstWordSortBy] === 'string' &&
      directionSortBy === 'down'
    ) {
      sortedCars.sort((a, b) =>
        b[firstWordSortBy].localeCompare(a[firstWordSortBy])
      );
    } else if (
      typeof sortedCars[0][firstWordSortBy] === 'number' &&
      directionSortBy === 'up'
    ) {
      sortedCars.sort((a, b) => a[firstWordSortBy] - b[firstWordSortBy]);
    } else if (
      typeof sortedCars[0][firstWordSortBy] === 'number' &&
      directionSortBy === 'down'
    ) {
      sortedCars.sort((a, b) => b[firstWordSortBy] - a[firstWordSortBy]);
    }
  }

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
              {sortedCars.map(oneCar => (
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
