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

const CarsList = ({ page, pageNumber }) => {
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

  const { search } = window.location;
  console.log(search);

  useEffect(() => {
    if (page === 'carsPage' && pageNumber === 1) {
      dispatch(getAllCars());
    }
    if (page === 'carsPage' && pageNumber > 1) {
      dispatch(getAllCars(search));
    }
    if (page === 'favoritePage' && pageNumber === 1) {
      dispatch(getFavoriteCars());
    }
    if (page === 'favoritePage' && pageNumber > 1) {
      dispatch(getFavoriteCars(search));
    }
    if (page === 'userCarsPage' && pageNumber === 1) {
      dispatch(getUserCars());
    }
    if (page === 'userCarsPage' && pageNumber > 1) {
      dispatch(getUserCars(search));
    }
  }, [dispatch, page, pageNumber, search]);

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
