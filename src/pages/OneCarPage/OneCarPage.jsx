// import PropTypes from 'prop-types';

import css from './OneCarPage.module.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneCar } from '../../redux/cars/carsOperations';
import { Preloader } from '../../components/Preloader/Preloader';
// import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import { selectAllCars, selectIsCarsLoading } from '../../redux/selectors';
import Container from 'components/Container/Container';
import { MdFavorite } from 'react-icons/md';

const OneCarPage = () => {
  const dispatch = useDispatch();
  const { id: carId } = useParams();
  const IsLoading = useSelector(selectIsCarsLoading);
  useEffect(() => {
    dispatch(getOneCar(carId));
    // eslint-disable-next-line
  }, []);

  const {
    model,
    price,
    type,
    year,
    transmission,
    color,
    mileage,
    fueltype,
    power,
    city,
    tel,
    email,
  } = useSelector(selectAllCars)[0];

  const handleFavorite = () => {
    console.log('add to favorite from OneCarPage');
  };

  return (
    <>
      {IsLoading ? (
        <Preloader />
      ) : (
        <div className={css.oneCarPage}>
          <Container>
            <img
              src={require('../../images/cards-page-bg-tablet.jpg')}
              className={css.carPhoto}
              alt="car appearance"
            />
            <div className={css.mainCarInfo}>
              <p>model: {model}</p>
              <MdFavorite
                className={css.iconFavorite}
                onClick={handleFavorite}
              />
              <p>price: {price} usd</p>
            </div>
            <div className={css.detailInfo}>
              <p>type: {type}</p>
              <p>year: {year}</p>
              <p>transmission: {transmission}</p>
              <p>color: {color}</p>
              <p>mileage: {mileage} km</p>
              <p>fuel type: {fueltype}</p>
              <p>power: {power} hp</p>
              <p>city: {city}</p>
              <p>tel: {tel}</p>
              <p>email: {email}</p>
              <p>description:</p>
              <p className={css.description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                nihil cupiditate aliquid, a, reiciendis pariatur, consequatur
                nesciunt aut ex magnam officia. Nesciunt delectus facere tenetur
                pariatur quam quibusdam dolore repellat.
              </p>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default OneCarPage;

/* OneCarPage.propTypes = {
  scores: PropTypes.array,
  sign: PropTypes.string,
}; */
