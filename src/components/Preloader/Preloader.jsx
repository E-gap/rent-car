import loader from '../../images/loader-car.gif';
// import PropTypes from 'prop-types';
import css from './Preloader.module.css';

export const Preloader = () => {
  return (
    <div>
      <div className={css.preloader}>
        <img src={loader} alt="qwerty" className={css.imagePreloader} />
      </div>
    </div>
  );
};

/* Preloader.propTypes = {
  sign: PropTypes.string,
}; */
