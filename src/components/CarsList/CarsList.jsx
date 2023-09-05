import css from './CarsList.module.css';
import ItemCar from 'components/ItemCar/ItemCar';
import PropTypes from 'prop-types';

const CarsList = ({ cars, refreshCarList }) => {
  return (
    <ul className={css.carList}>
      {cars.map(oneCar => (
        <ItemCar
          key={oneCar._id}
          oneCar={oneCar}
          refreshCarList={refreshCarList}
        />
      ))}
    </ul>
  );
};

export default CarsList;

CarsList.propTypes = {
  cars: PropTypes.array,
};
