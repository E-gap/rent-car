import css from './ItemCar.module.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import { BsTrashFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import {
  selectUserFavorites,
  selectUserId,
  selectIsLogin,
} from '../../redux/selectors';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFavorite } from '../../redux/auth/authOperations';
import { deleteCar } from '../../redux/cars/carsOperations';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import QuestionSure from '../../components/QuestionSure/QuestionSure';
import Notiflix from 'notiflix';

const ItemCar = ({ oneCar, state }) => {
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(selectUserFavorites);
  const userId = useSelector(selectUserId);
  const isUserLogin = useSelector(selectIsLogin);

  const handleFavorite = () => {
    if (!isUserLogin) {
      Notiflix.Notify.failure('Please, log in to add item to favorites ', {
        fontSize: '15px',
        position: 'center-center',
        timeout: 2000,
        width: '400px',
      });
      return;
    }
    dispatch(changeFavorite(oneCar._id));
  };

  const handleDelete = () => {
    setIsModalWindowOpen(false);
    dispatch(deleteCar(oneCar._id));
  };

  const onKeyDown = e => {
    if (e.target.getAttribute('class').includes('backdrop')) {
      setIsModalWindowOpen(false);
    }

    if (e.code === 'Escape') {
      setIsModalWindowOpen(false);
    }
  };

  return (
    <>
      <li className={css.itemCar}>
        <NavLink
          to={`/cars/${oneCar._id}`}
          className={css.carLink}
          state={state}
        >
          <img
            src={require('../../images/cards-page-bg-tablet.jpg')}
            className={css.carPhoto}
            alt="car appearance"
          />
        </NavLink>
        <div className={css.carInfo}>
          <p>model: {oneCar.model}</p>

          <div className={css.iconsFavoriteDelete}>
            <MdFavorite
              className={
                favorites.includes(oneCar._id)
                  ? `${css.iconFavorite} ${css.favoriteSelected}`
                  : css.iconFavorite
              }
              onClick={handleFavorite}
            />
            {oneCar.owner?._id === userId && (
              <BsTrashFill
                className={css.iconDelete}
                onClick={() => {
                  setIsModalWindowOpen(true);
                }}
              />
            )}
          </div>
          <p>price: {oneCar.price} usd</p>
        </div>
      </li>
      {isModalWindowOpen && (
        <ModalWindow
          setIsModalWindowOpen={setIsModalWindowOpen}
          onKeyDown={onKeyDown}
        >
          <QuestionSure
            textQuestion="Are you sure you want to delete this item?"
            setIsModalWindowOpen={setIsModalWindowOpen}
            handleDelete={handleDelete}
          />
        </ModalWindow>
      )}
    </>
  );
};

export default ItemCar;

ItemCar.propTypes = {
  // id: PropTypes.number.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
};
