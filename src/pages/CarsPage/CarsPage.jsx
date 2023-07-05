import css from './CarsPage.module.css';
import ItemCar from 'components/ItemCar/ItemCar';
import Container from 'components/Container/Container';

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
      <Container>
        <ul className={css.carList}>
          {allCars.map(oneCar => (
            <ItemCar key={oneCar._id} oneCar={oneCar} />
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default CarsPage;
