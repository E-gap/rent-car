import css from './Footer.module.css';
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
import { NavLink, Link, useNavigate } from 'react-router-dom';
import QuestionSure from 'components/QuestionSure/QuestionSure';
import logo from '../../images/logo.jpg';

const Footer = () => {
  return (
    <>
      <footer className={css.footer}>
        <Container>
          <div className={css.displayFlex}>
            <NavLink to="/" className={css.logo}>
              <img src={logo} alt="" className={css.logoImage} />
            </NavLink>
            <ul className={css.displayFlex}>
              <li>
                <Link to="#" className={css.linkSupport}>
                  Policy
                </Link>
              </li>
              <li>
                <Link to="#" className={css.linkAgreement}>
                  Agreement about services
                </Link>
              </li>
              <li>
                <Link to="#" className={css.linkSupport}>
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
