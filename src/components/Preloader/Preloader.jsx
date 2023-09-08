import loader from '../../images/loader-car.gif';
// import PropTypes from 'prop-types';
import css from './Preloader.module.css';

const Preloader = () => {
  return (
    <div>
      <div className={css.preloader}>
        <img src={loader} alt="qwerty" className={css.imagePreloader} />
      </div>
    </div>
  );
};

export default Preloader;

/* Preloader.propTypes = {
  sign: PropTypes.string,
}; */
