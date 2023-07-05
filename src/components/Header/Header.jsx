import css from './Header.module.css';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsLogin,
  selectUserName,
  selectAllScores,
  selectScoresByUser,
} from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logout } from '../../redux/auth/authOperations';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import FormSign from '../../components/FormSign/FormSign';
import { Scores } from '../../components/Scores/Scores';

const Header = () => {
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [sign, setSign] = useState('');
  const isLogin = useSelector(selectIsLogin);
  const userName = useSelector(selectUserName);
  const allScores = useSelector(selectAllScores);
  const myScores = useSelector(selectScoresByUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(-1);
  };

  const closeModal = e => {
    setIsModalWindowOpen(false);
  };

  const handleHeaderButton = e => {
    if (e.target.getAttribute('class').includes('Up')) {
      setSign('signUp');
      setIsModalWindowOpen(true);
    } else if (e.target.getAttribute('class').includes('In')) {
      setSign('signIn');
      setIsModalWindowOpen(true);
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

  return (
    <>
      <header className={css.header}>
        <div>
          <Button text="Back" handleButton={handleButton} view="back" />
        </div>
        {!isLogin ? (
          <div>
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
          <div>
            <p className={css.userName}>user: {userName}</p>
            <Button
              text="Log out"
              handleButton={handleHeaderButton}
              view="logOut"
            />
          </div>
        )}
      </header>
      {isModalWindowOpen && (
        <ModalWindow
          setIsModalWindowOpen={setIsModalWindowOpen}
          onKeyDown={onKeyDown}
        >
          {sign.includes('sign') && (
            <FormSign sign={sign} closeModal={closeModal} />
          )}
          {sign === 'allScores' && (
            <Scores sign={sign} closeModal={closeModal} scores={allScores} />
          )}
          {sign === 'myScores' && (
            <Scores sign={sign} closeModal={closeModal} scores={myScores} />
          )}
        </ModalWindow>
      )}
    </>
  );
};

export default Header;
