import loader from '../../images/Spinner-0.9s-200px.gif';
/* import loader from '../../images/shirt.jpg'; */
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
