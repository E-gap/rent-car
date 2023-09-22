import React from 'react';
import css from './Register.module.css';
import Container from 'components/Container/Container';
import FormSign from 'components/FormSign/FormSign';
// import PropTypes from 'prop-types';

function Register() {
  return (
    <div className={css.registerPage}>
      <Container>
        <h1 className={css.titlePage}>Register</h1>
        <FormSign sign="signUp" />
      </Container>
    </div>
  );
}

export default Register;

/* FormSign.propTypes = {
  sign: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
}; */
