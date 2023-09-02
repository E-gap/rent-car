import css from './CarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import ErrorComponent from 'components/ErrorComponent/ErrorComponent';
import { Preloader } from '../../components/Preloader/Preloader';
import { getAllCars } from '../../redux/cars/carsOperations';
import { useEffect, useState } from 'react';

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllCars().then(res => {
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
        <div className={css.carsPage}>
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

export default CarsPage;
