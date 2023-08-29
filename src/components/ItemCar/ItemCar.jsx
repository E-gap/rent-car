import css from './ItemCar.module.css';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsTrashFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/auth/authOperations';

const ItemCar = ({ oneCar }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const handleFavorite = () => {
    console.log('add to favorite');
    dispatch(addFavorite(oneCar._id));
  };

  const handleDelete = () => {
    console.log('delete');
  };

  return (
    <li className={css.itemCar}>
      <NavLink to={`/cars/${oneCar._id}`} className={css.carLink}>
        <img
          src={require('../../images/cards-page-bg-tablet.jpg')}
          className={css.carPhoto}
          alt="car appearance"
        />
      </NavLink>
      <div className={css.carInfo}>
        <p>model: {oneCar.model}</p>
        {isLogin && (
          <div className={css.iconsFavoriteDelete}>
            <MdFavoriteBorder
              className={css.iconFavorite}
              onClick={handleFavorite}
            />
            <BsTrashFill className={css.iconDelete} onClick={handleDelete} />
          </div>
        )}

        <p>price: {oneCar.price} usd</p>
      </div>
    </li>
  );
};

export default ItemCar;

ItemCar.propTypes = {
  // id: PropTypes.number.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
};
