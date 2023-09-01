// import PropTypes from 'prop-types';

import css from './OneCarPage.module.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneCar } from '../../redux/cars/carsOperations';
// import { Preloader } from '../../components/Preloader/Preloader';
// import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import { selectAllCars, selectIsCarsLoading } from '../../redux/selectors';
import Container from 'components/Container/Container';
import { MdFavorite } from 'react-icons/md';

const OneCarPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const IsLoading = useSelector(selectIsCarsLoading);

  const handleFavorite = () => {
    console.log('add to favorite from OneCarPage');
  };

  const { id: carId } = useParams();

  useEffect(() => {
    dispatch(getOneCar(carId));
    // eslint-disable-next-line
  }, []);

  console.log(cars);
  console.log(IsLoading);

  return (
    <div className={css.oneCarPage}>
      <Container>
        <img
          src={require('../../images/cards-page-bg-tablet.jpg')}
          className={css.carPhoto}
          alt="car appearance"
        />
        <div className={css.mainCarInfo}>
          <p>model: template</p>
          <MdFavorite className={css.iconFavorite} onClick={handleFavorite} />
          <p>price: template usd</p>
        </div>
        <div className={css.detailInfo}>
          <p>type: TYPE</p>
          <p>year: YEAR</p>
          <p>transmission: transmission</p>
          <p>color: color</p>
          <p>mileage: mileage km</p>
          <p>fuel type: diezel/benzin</p>
          <p>power: 100 hp</p>
          <p>city: Kyiv</p>
          <p>tel: +0939999999</p>
          <p>email: template@gmail.com</p>
          <p>description:</p>
          <p className={css.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nihil
            cupiditate aliquid, a, reiciendis pariatur, consequatur nesciunt aut
            ex magnam officia. Nesciunt delectus facere tenetur pariatur quam
            quibusdam dolore repellat.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default OneCarPage;

/* OneCarPage.propTypes = {
  scores: PropTypes.array,
  sign: PropTypes.string,
}; */
