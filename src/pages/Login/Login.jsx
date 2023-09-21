import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Container from 'components/Container/Container';
import * as Yup from 'yup';
import { useState } from 'react';
import css from './Login.module.css';
// import PropTypes from 'prop-types';
import { BiShow } from 'react-icons/bi';
import { /* register, */ login } from '../../redux/auth/authOperations';
import { useDispatch /* useSelector */ } from 'react-redux';
import Button from '../../components/Button/Button';
// import { selectIsLogin } from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';

function Login({ sign, closeModal }) {
  const navigate = useNavigate();
  // const isLogin = useSelector(selectIsLogin);
  const [typePassword, setTypePassword] = useState('password');
  // const [typeConfirmPassword, setTypeConfirmPassword] = useState('password');
  const dispatch = useDispatch();
  /* const [signValue, setSignValue] = useState(() => {
    return sign;
  }); */

  const SignInSchema = Yup.object().shape({
    email: Yup.string().required('Please input email'),
    password: Yup.string().required('Please input password'),
  });

  const submitForm = (values, actions) => {
    actions.resetForm();
    const userDataForLogin = {
      email: values.email,
      password: values.password,
    };

    dispatch(login(userDataForLogin));
  };

  const toggleShowPassword = () => {
    if (typePassword === 'password') {
      setTypePassword('text');
    } else {
      setTypePassword('password');
    }
  };

  const handleButton = () => {
    navigate('/register');
  };

  return (
    <div className={css.loginPage}>
      <Container>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={submitForm}
        >
          <Form className={css.form}>
            <label className={css.label}>
              E-mail
              <Field name="email" />
              <ErrorMessage
                name="email"
                render={message => (
                  <div className={css.errorValidation}>{message}</div>
                )}
              />
            </label>
            <label className={css.label}>
              Password
              <Field type={typePassword} name="password" />
              <BiShow className={css.buttonHide} onClick={toggleShowPassword} />
              <ErrorMessage
                name="password"
                render={message => (
                  <div className={css.errorValidation}>{message}</div>
                )}
              />
            </label>
            <button type="submit" className={css.submit}>
              Submit
            </button>
          </Form>
        </Formik>
        <p className={css.question}>
          Are you not Signed Up?
          <Button
            text="Sign Up"
            handleButton={handleButton}
            view="buttonQuestionSign"
          />
        </p>
      </Container>
    </div>
  );
}

export default Login;

/* FormSign.propTypes = {
  sign: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
}; */
