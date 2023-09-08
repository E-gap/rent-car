import css from './FavoritePage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import HandlePanel from 'components/HandlePanel/HandlePanel';

const FavoritePage = () => {
  return (
    <div className={css.favoritePage}>
      <Container>
        <HandlePanel />
        <CarsList page="favoritePage" />
      </Container>
    </div>
  );
};

export default FavoritePage;
