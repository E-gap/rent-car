import css from './CarMapCharacteristic.module.css';
import PropTypes from 'prop-types';
import { sortOrder } from '../../utils/operations';

const CarMapCharacteristic = ({ characteristics, sort = 'up' }) => {
  return (
    <>
      <option value="" className={css.grayBg}>
        Select
      </option>
      {characteristics
        .sort(sortOrder(characteristics, sort))
        .map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      <option value="Else">Else</option>
    </>
  );
};

export default CarMapCharacteristic;

CarMapCharacteristic.propTypes = {
  characteristics: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  sort: PropTypes.string,
};
