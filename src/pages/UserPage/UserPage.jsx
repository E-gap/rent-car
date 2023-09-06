// import PropTypes from 'prop-types';

import css from './UserPage.module.css';
import Button from '../../components/Button/Button';
import UserDataForm from '../../components/UserDataForm/UserDataForm';
// import { useState, useEffect } from 'react';
// import { Preloader } from '../../components/Preloader/Preloader';
// import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import Container from 'components/Container/Container';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectUserData } from '../../redux/selectors';

const UserPage = () => {
  // const { email, name, city, tel } = useSelector(selectUserData);
  // const userData = useSelector(selectUserData);
  const navigate = useNavigate();
  const handleHeaderButton = () => {
    navigate('/user/userCars');
  };

  return (
    <div className={css.userPage}>
      <Container>
        <UserDataForm />
        <Button
          text="My Cars"
          handleButton={handleHeaderButton}
          view="mycars"
        />
      </Container>
    </div>
  );
};

export default UserPage;

/* OneCarPage.propTypes = {
  scores: PropTypes.array,
  sign: PropTypes.string,
}; */
