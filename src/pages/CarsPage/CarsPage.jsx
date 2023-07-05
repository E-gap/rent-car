import css from './CarsPage.module.css';
import ItemCar from 'components/ItemCar/ItemCar';

const allCars = [
  {
    _id: '1',
    name: 'firstCar',
    price: 1000,
  },
  {
    _id: '2',
    name: 'secondCar',
    price: 2000,
  },
];

const CarsPage = () => {
  return (
    <div className={css.cardPage}>
      <ul className={css.carList}>
        {allCars.map(oneCar => (
          <ItemCar key={oneCar._id} oneCar={oneCar} />
        ))}
      </ul>
    </div>
  );
};

export default CarsPage;
