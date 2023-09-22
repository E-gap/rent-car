import css from './NotFoundPage.module.css';
import Container from 'components/Container/Container';

const NotFoundPage = () => {
  return (
    <div className={css.notFoundPage}>
      <Container>
        <p>The page is not found</p>
      </Container>
    </div>
  );
};

export default NotFoundPage;
