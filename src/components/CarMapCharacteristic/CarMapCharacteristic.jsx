import css from './CarMapCharacteristic.module.css';
import PropTypes from 'prop-types';

const CarMapCharacteristic = ({ characteristics }) => {
  return (
    <>
      <option value="" className={css.grayBg}>
        Select
      </option>
      {characteristics.sort().map((color, index) => {
        return (
          <option key={index} value={color}>
            {color}
          </option>
        );
      })}
      <option value="Else">Else</option>
    </>
  );
};

export default CarMapCharacteristic;

CarMapCharacteristic.propTypes = {
  characteristics: PropTypes.arrayOf(PropTypes.string).isRequired,
};
