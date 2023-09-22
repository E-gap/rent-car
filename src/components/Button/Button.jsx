import PropTypes from 'prop-types';
import css from './Button.module.css';
import { FiLogOut } from 'react-icons/fi';

const Button = ({ text, handleButton, view }) => {
  let style;

  switch (view) {
    case 'signIn':
      style = css.buttonSignIn;
      break;

    case 'signUp':
      style = css.buttonSignUp;
      break;

    case 'logOut':
      style = css.buttonLogOut;
      break;

    case 'buttonQuestionSign':
      style = css.buttonQuestionSign;
      break;

    case 'sort':
      style = css.sortCars;
      break;

    case 'filter':
      style = css.filterCars;
      break;

    case 'reset filters':
      style = css.resetFilter;
      break;

    case 'back':
      style = css.back;
      break;

    case 'goToHome':
      style = css.goToHome;
      break;

    default:
      style = '';
  }

  return (
    <button type="button" className={style} onClick={handleButton}>
      {text}
      {view === 'logOut' && <FiLogOut className={css.logOutIcon} />}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  handleButton: PropTypes.func,
};
