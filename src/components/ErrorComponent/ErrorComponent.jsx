import PropTypes from 'prop-types';
import css from './ErrorComponent.module.css';

const ErrorComponent = ({ errorText }) => {
  return (
    <div className={css.errorDiv}>
      <p className={css.errorMessage}>{errorText}</p>
    </div>
  );
};

export default ErrorComponent;

ErrorComponent.propTypes = {
  errorText: PropTypes.string.isRequired,
};
