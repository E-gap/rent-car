import css from './FavoritePage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';

const FavoritePage = () => {
  return (
    <div className={css.favoritePage}>
      <Container>
        <CarsList />
      </Container>
    </div>
  );
};

export default FavoritePage;
