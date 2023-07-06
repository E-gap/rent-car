// import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import { selectIsScoreLoading, selectScoreError } from 'redux/selectors';
import css from './OneCarPage.module.css';
// import Button from '../../components/Button/Button';
// import { useState, useEffect } from 'react';
// import { Preloader } from '../../components/Preloader/Preloader';
// import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import Container from 'components/Container/Container';
import { MdFavoriteBorder } from 'react-icons/md';

const OneCarPage = () => {
  const handleFavorite = () => {
    console.log('add to favorite from OneCarPage');
  };
  return (
    <div className={css.oneCarPage}>
      <Container>
        <img
          src={require('../../images/cards-page-bg-tablet.jpg')}
          className={css.carPhoto}
          alt="car appearance"
        />
        <div className={css.carInfo}>
          <p>model: template</p>
          <MdFavoriteBorder
            className={css.iconFavorite}
            onClick={handleFavorite}
          />
          <p>price: template usd</p>
        </div>
      </Container>
    </div>
  );
};

export default OneCarPage;

/* OneCarPage.propTypes = {
  scores: PropTypes.array,
  sign: PropTypes.string,
}; */
