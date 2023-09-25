import css from './UserPage.module.css';
import Button from '../../components/Button/Button';
import UserDataForm from '../../components/UserDataForm/UserDataForm';
import Container from 'components/Container/Container';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserData, selectUserId } from '../../redux/selectors';

const UserPage = () => {
  const userId = useSelector(selectUserId);
  const userData = useSelector(selectUserData);
  const navigate = useNavigate();
  const handleHeaderButton = () => {
    navigate('/user/userCars');
  };

  return (
    <section className={css.userPage}>
      <Container>
        <h1 className={css.titlePage}>Your information</h1>
        <UserDataForm userData={{ userData, userId }} />
        <Button
          text="My Cars"
          handleButton={handleHeaderButton}
          view="mycars"
        />
      </Container>
    </section>
  );
};

export default UserPage;
