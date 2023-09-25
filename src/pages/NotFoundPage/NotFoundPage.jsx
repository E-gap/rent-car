import css from './NotFoundPage.module.css';
import Container from 'components/Container/Container';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleHeaderButton = () => {
    navigate('/');
  };
  return (
    <section className={css.notFoundPage}>
      <Container>
        <h1 className={css.notFound_title}>
          Oooops! <br /> This page is not found
        </h1>
        <div className={css.notFound_Wrapper}></div>
        <Button
          text="Go to Home"
          handleButton={handleHeaderButton}
          view="goToHome"
        />
      </Container>
    </section>
  );
};

export default NotFoundPage;
