import css from './FavoritePage.module.css';
import Container from 'components/Container/Container';
import ErrorComponent from 'components/ErrorComponent/ErrorComponent';
import CarsList from 'components/CarsList/CarsList';
import { Preloader } from '../../components/Preloader/Preloader';
// import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteCars } from '../../redux/cars/carsOperations';
import { useEffect, useState } from 'react';
// import { selectAllCars, selectIsCarsLoading } from '../../redux/selectors';

const FavoritePage = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  // const dispatch = useDispatch();
  // const cars = useSelector(selectAllCars);
  // const IsLoading = useSelector(selectIsCarsLoading);

  useEffect(() => {
    getFavoriteCars().then(res => {
      setIsLoading(false);
      if (res.status === 'OK') {
        setError('');
        setCars(res.data);
      } else {
        setError('Something went wrong try later');
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={css.favoritePage}>
          <Container>
            {error ? (
              <ErrorComponent errorText={error} />
            ) : (
              <CarsList cars={cars} />
            )}
          </Container>
        </div>
      )}
    </>
  );
};

export default FavoritePage;
