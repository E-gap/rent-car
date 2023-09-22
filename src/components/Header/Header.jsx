import css from './Header.module.css';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLogin, selectUserName } from '../../redux/selectors';
import { useState } from 'react';
import { logout } from '../../redux/auth/authOperations';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
// import FormSign from '../../components/FormSign/FormSign';
import FormAddCar from '../../components/FormAddCar/FormAddCar';
import Container from 'components/Container/Container';
import { MdFavorite } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { ImPlus } from 'react-icons/im';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [sign, setSign] = useState('');
  const isLogin = useSelector(selectIsLogin);
  const userName = useSelector(selectUserName);

  const dispatch = useDispatch();

  const closeModal = () => {
    setIsModalWindowOpen(false);
  };

  const handleHeaderButton = e => {
    if (e.target.getAttribute('class').includes('Up')) {
      navigate('/register');
      setSign('signUp');
    } else if (e.target.getAttribute('class').includes('In')) {
      navigate('/login');
      setSign('signIn');
    } else if (e.target.getAttribute('class').includes('Out')) {
      dispatch(logout());
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
    setIsModalWindowOpen(true);
    setSign('addCar');
  };

  return (
    <>
      <header className={css.header}>
        <Container>
          <div className={css.displayFlex}>
            <div className={css.displayFlex}>
              <NavLink to="/" className={`${css.marginRight10} ${css.link}`}>
                Home
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
                  <HiOutlineUserCircle className={css.userIcon} />
                </NavLink>
                <p className={css.userName}>{userName}</p>
                <NavLink
                  to="/cars/favorite"
                  className={`${css.linkFavorite} ${css.displayFlex}`}
                >
                  <MdFavorite className={css.userFavoriteIcon} />
                </NavLink>
                <ImPlus className={css.addCar} onClick={handleAddCar} />
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
          {sign === 'addCar' && <FormAddCar closeModal={closeModal} />}
        </ModalWindow>
      )}
    </>
  );
};

export default Header;
