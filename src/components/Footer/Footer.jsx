import css from './Footer.module.css';
import Container from 'components/Container/Container';
import { NavLink, Link } from 'react-router-dom';
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
