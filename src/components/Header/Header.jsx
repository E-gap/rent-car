import css from './Header.module.css';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsLogin,
  selectUserName,
  selectUserFavorites,
} from '../../redux/selectors';
import { useState } from 'react';
import { logout } from '../../redux/auth/authOperations';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import Container from 'components/Container/Container';
import { MdFavorite } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { ImPlus } from 'react-icons/im';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import QuestionSure from 'components/QuestionSure/QuestionSure';
import logo from '../../images/logo.jpg';

const Header = () => {
  const navigate = useNavigate();
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const isLogin = useSelector(selectIsLogin);
  const userName = useSelector(selectUserName);
  const favorites = useSelector(selectUserFavorites);
  const [sign, setSign] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const handleHeaderButton = e => {
    if (e.target.getAttribute('class').includes('Up')) {
      navigate('/register');
    } else if (e.target.getAttribute('class').includes('In')) {
      navigate('/login');
    } else if (e.target.getAttribute('class').includes('Out')) {
      setSign('out');
      setIsModalWindowOpen(true);
    }
  };

  const onKeyDown = e => {
    if (e.target.getAttribute('class').includes('backdrop')) {
      setIsModalWindowOpen(false);
    }

    if (e.code === 'Escape') {
      setIsModalWindowOpen(false);
    }
  };

  const handleAddCar = () => {
    navigate('/cars/addCar');
  };

  return (
    <>
      <header className={css.header}>
        <Container>
          <div className={css.displayFlex}>
            <div className={css.displayFlex}>
              <NavLink to="/" className={`${css.marginRight10} ${css.logo}`}>
                <img src={logo} alt="" className={css.logoImage} />
              </NavLink>
              <NavLink className={css.link} to="/cars/all">
                All cars
              </NavLink>
            </div>
            {!isLogin ? (
              <div className={css.header_buttons}>
                <Button
                  text="Sign In"
                  handleButton={handleHeaderButton}
                  view="signIn"
                />
                <Button
                  text="Sign Up"
                  handleButton={handleHeaderButton}
                  view="signUp"
                />
              </div>
            ) : (
              <div className={css.displayFlex}>
                <NavLink
                  to="/user"
                  className={`${css.linkUser} ${css.displayFlex}`}
                >
                  <HiOutlineUserCircle
                    className={`${css.userIcon} ${css.icon}`}
                  />
                </NavLink>
                <p className={css.userName}>{userName}</p>

                <NavLink
                  to="/cars/favorite"
                  className={`${css.linkFavorite} ${css.displayFlex}`}
                >
                  <MdFavorite
                    className={`${css.userFavoriteIcon}  ${css.icon}`}
                  />
                  <p
                    className={
                      location.pathname.includes('favorite')
                        ? `${css.numberFavorites} ${css.numberFavoritesYellow}`
                        : `${css.numberFavorites} ${css.numberFavoritesRed}`
                    }
                  >
                    {favorites.length}
                  </p>
                </NavLink>

                <ImPlus
                  className={`${css.addCarIcon} ${css.icon}`}
                  onClick={handleAddCar}
                />
                <Button
                  text="Log out"
                  handleButton={handleHeaderButton}
                  view="logOut"
                />
              </div>
            )}
          </div>
        </Container>
      </header>
      {isModalWindowOpen && (
        <ModalWindow
          setIsModalWindowOpen={setIsModalWindowOpen}
          onKeyDown={onKeyDown}
        >
          {sign === 'out' && (
            <QuestionSure
              textQuestion="Do you really want to log out ?"
              setIsModalWindowOpen={setIsModalWindowOpen}
              handleOk={() => {
                dispatch(logout());
              }}
            />
          )}
        </ModalWindow>
      )}
    </>
  );
};

export default Header;
