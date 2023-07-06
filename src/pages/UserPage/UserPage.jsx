// import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import { selectIsScoreLoading, selectScoreError } from 'redux/selectors';
import css from './UserPage.module.css';
import Button from '../../components/Button/Button';
// import { useState, useEffect } from 'react';
// import { Preloader } from '../../components/Preloader/Preloader';
// import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import Container from 'components/Container/Container';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  const navigate = useNavigate();
  const handleHeaderButton = () => {
    console.log('show my cars');
    navigate('/user/userCars');
  };

  return (
    <div className={css.userPage}>
      <Container>
        <p>name: name</p>
        <p>city: city</p>
        <p>tel: tel</p>
        <p>email: email</p>
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

//dfdfdff
