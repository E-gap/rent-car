// import PropTypes from 'prop-types';
import { BsTrashFill } from 'react-icons/bs';
import css from './OneCarPage.module.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar, getOneCar } from '../../redux/cars/carsOperations';
import { changeFavorite } from '../../redux/auth/authOperations';
import { Preloader } from '../../components/Preloader/Preloader';
// import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import { selectUserFavorites } from '../../redux/selectors';
import Container from 'components/Container/Container';
import { MdFavorite } from 'react-icons/md';

const OneCarPage = () => {
  const [carOne, setCarOne] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: carId } = useParams();
  const favorites = useSelector(selectUserFavorites);

  useEffect(() => {
    getOneCar(carId).then(res => {
      setIsLoading(false);
      if (res.status === 'OK') {
        setError('');
        setCarOne(res.data[0]);
      } else {
        setError('Something went wrong try later');
      }
    });

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
    description,
  } = carOne;

  const handleFavorite = () => {
    dispatch(changeFavorite(carId));
  };

  const handleDelete = () => {
    dispatch(deleteCar(carId));
    navigate('/cars');
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={css.oneCarPage}>
          <Container>
            {error ? (
              <div className={css.errorDiv}>
                <p className={css.errorMessage}>{error}</p>
              </div>
            ) : (
              <>
                <img
                  src={require('../../images/cards-page-bg-tablet.jpg')}
                  className={css.carPhoto}
                  alt="car appearance"
                />
                <div className={css.mainCarInfo}>
                  <p>model: {model}</p>
                  <MdFavorite
                    className={
                      favorites.includes(carId)
                        ? `${css.iconFavorite} ${css.favoriteSelected}`
                        : css.iconFavorite
                    }
                    onClick={handleFavorite}
                  />
                  <BsTrashFill
                    className={css.iconDelete}
                    onClick={handleDelete}
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
                  <p className={css.description}>{description}</p>
                </div>
              </>
            )}
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
