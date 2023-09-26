import css from './CarsList.module.css';
import ItemCar from 'components/ItemCar/ItemCar';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const CarsList = ({ cars }) => {
  const location = useLocation();

  return (
    <ul className={css.carList}>
      {cars.map(oneCar => (
        <ItemCar key={oneCar._id} oneCar={oneCar} state={{ from: location }} />
      ))}
    </ul>
  );
};

export default CarsList;

CarsList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object),
};
