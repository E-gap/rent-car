import loader from '../../images/loader-car.gif';

import css from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={css.preloader}>
      <img src={loader} alt="qwerty" className={css.imagePreloader} />
    </div>
  );
};

export default Preloader;
