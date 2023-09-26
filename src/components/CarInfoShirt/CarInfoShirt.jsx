import css from './CarInfoShirt.module.css';
import PropTypes from 'prop-types';
import {
  BsSpeedometer,
  BsFuelPumpFill,
  BsFuelPumpDieselFill,
  BsFire,
} from 'react-icons/bs';
import { MdOutlinePlace, MdHdrAuto } from 'react-icons/md';
import { TbManualGearbox } from 'react-icons/tb';
import { FaChargingStation } from 'react-icons/fa';

const CarInfoShirt = ({
  oneCar: { mark, model, price, year, mileage, fueltype, city, transmission },
}) => {
  return (
    <section className={css.carInfoShirt}>
      <div className={css.mainInfo}>
        <p className={css.markInfo}>{mark}</p>
        <p className={css.modelInfo}>{model}</p>
        <p className={css.yearInfo}>{year}</p>
      </div>
      <p className={css.priceInfo}>{price}$</p>
      <div className={css.detailInfo}>
        <ul className={`${css.infoPart_1} ${css.list}`}>
          <li className={css.mileage}>
            <BsSpeedometer className={css.iconInfo} /> {mileage}
          </li>
          <li className={css.fueltype}>
            {fueltype === 'Benzin' && (
              <BsFuelPumpFill className={css.iconInfo} />
            )}
            {fueltype === 'Diesel' && (
              <BsFuelPumpDieselFill className={css.iconInfo} />
            )}
            {fueltype === 'Electro' && (
              <FaChargingStation className={css.iconInfo} />
            )}
            {fueltype === 'Gas' && <BsFire className={css.iconInfo} />}
            {fueltype}
          </li>
        </ul>
        <ul className={`${css.infoPart_2} ${css.list}`}>
          <li className={css.city}>
            <MdOutlinePlace className={css.iconInfo} />
            {city}
          </li>
          <li className={css.trasmission}>
            {transmission === 'Manual' ? (
              <TbManualGearbox className={css.iconInfo} />
            ) : (
              <MdHdrAuto className={css.iconInfo} />
            )}
            {transmission}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CarInfoShirt;

CarInfoShirt.propTypes = {
  oneCar: PropTypes.shape({
    mark: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    mileage: PropTypes.number.isRequired,
    fueltype: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
  }),
};
