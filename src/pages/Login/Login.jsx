import React from 'react';
import Container from 'components/Container/Container';
import css from './Login.module.css';
import FormSign from 'components/FormSign/FormSign';

function Login() {
  return (
    <div className={css.loginPage}>
      <Container>
        <h1 className={css.titlePage}>Login</h1>
        <FormSign sign="signIn" />
      </Container>
    </div>
  );
}

export default Login;
