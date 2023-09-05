import css from './UserCarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import ErrorComponent from 'components/ErrorComponent/ErrorComponent';
import { Preloader } from '../../components/Preloader/Preloader';
import { getUserCars } from '../../redux/cars/carsOperations';
import { useEffect /* useState */ } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllCars,
  selectIsCarsLoading,
  selectCarsError,
} from '../../redux/selectors';

const UserCarsPage = () => {
  /* const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(''); */
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const isLoading = useSelector(selectIsCarsLoading);
  const carsError = useSelector(selectCarsError);

  /* useEffect(() => {
    getUserCars().then(res => {
      setIsLoading(false);
      if (res.status === 'OK') {
        setError('');
        setCars(res.data);
      } else {
        setError('Something went wrong try later');
      }
    });
    // eslint-disable-next-line
  }, []); */

  useEffect(() => {
    dispatch(getUserCars());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={css.userCarsPage}>
          <Container>
            {carsError ? (
              <ErrorComponent errorText={carsError} />
            ) : (
              <CarsList cars={cars} />
            )}
          </Container>
        </div>
      )}
    </>
  );
};

export default UserCarsPage;
