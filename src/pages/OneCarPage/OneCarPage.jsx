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
        <div className={css.mainCarInfo}>
          <p>model: template</p>
          <MdFavoriteBorder
            className={css.iconFavorite}
            onClick={handleFavorite}
          />
          <p>price: template usd</p>
        </div>
        <div className={css.detailInfo}>
          <p>type: TYPE</p>
          <p>year: YEAR</p>
          <p>transmission: transmission</p>
          <p>color: color</p>
          <p>mileage: mileage km</p>
          <p>fuel type: diezel/benzin</p>
          <p>power: 100 hp</p>
          <p>city: Kyiv</p>
          <p>tel: +0939999999</p>
          <p>email: template@gmail.com</p>
          <p>
            description:{' '}
            <div className={css.description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              nihil cupiditate aliquid, a, reiciendis pariatur, consequatur
              nesciunt aut ex magnam officia. Nesciunt delectus facere tenetur
              pariatur quam quibusdam dolore repellat.
            </div>
          </p>
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
