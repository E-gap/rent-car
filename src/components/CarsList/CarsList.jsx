import css from './CarsList.module.css';
import ItemCar from 'components/ItemCar/ItemCar';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsCarsLoading, selectCarsError } from '../../redux/selectors';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import Preloader from '../../components/Preloader/Preloader';

const CarsList = ({ cars }) => {
  const isLoading = useSelector(selectIsCarsLoading);
  const carsError = useSelector(selectCarsError);

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
