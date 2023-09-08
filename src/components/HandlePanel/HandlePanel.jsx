import css from './HandlePanel.module.css';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { getAllCars } from '../../redux/cars/carsOperations';

const HandlePanel = () => {
  const dispatch = useDispatch();

  const filterCars = () => {
    console.log('filter cars');
    dispatch(getAllCars());
  };

  const sortCars = () => {
    console.log('sort cars');
  };

  return (
    <div className={css.handlePanel}>
      <Button text="Filter" view="filter" handleButton={filterCars} />
      <Button text="Sort" view="sort" handleButton={sortCars} />
    </div>
  );
};

export default HandlePanel;
