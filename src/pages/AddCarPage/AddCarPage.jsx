import css from './AddCarPage.module.css';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Container from 'components/Container/Container';
import FormAddCar from 'components/FormAddCar/FormAddCar';
import { addCar, getAllCars } from '../../redux/cars/carsOperations';

const AddCarPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleAddCar = dataCar => {
    dispatch(addCar(dataCar));
    if (!location.pathname.includes('favorite')) {
      const { search } = window.location;
      dispatch(getAllCars(search));
    }
  };

  return (
    <section className={css.addCarPage}>
      <Container>
        <h1 className={css.titlePage}>Add car</h1>
        <FormAddCar handleAddCar={handleAddCar} />
      </Container>
    </section>
  );
};

export default AddCarPage;
