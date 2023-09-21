import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import css from './Register.module.css';
import PropTypes from 'prop-types';
import { BiShow } from 'react-icons/bi';
import { register, login } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import { selectIsLogin } from '../../redux/selectors';

function Register({ sign, closeModal }) {
  const isLogin = useSelector(selectIsLogin);
  const [typePassword, setTypePassword] = useState('password');
  const [typeConfirmPassword, setTypeConfirmPassword] = useState('password');
  const dispatch = useDispatch();
  const [signValue, setSignValue] = useState(() => {
    return sign;
  });

  const SignupSchema = Yup.object().shape({
    name:
      signValue === 'signUp'
        ? Yup.string().required('Please input name')
        : Yup.string(),
    email: Yup.string().required('Please input email'),
    password: Yup.string().required('Please input password'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  });

  const submitForm = (values, actions) => {
    actions.resetForm();
    const userDataForRegister = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const userDataForLogin = {
      email: values.email,
      password: values.password,
    };

    if (signValue === 'signUp') {
      dispatch(register(userDataForRegister));
    } else {
      dispatch(login(userDataForLogin));
    }
  };

  const toggleShowPassword = () => {
    if (typePassword === 'password') {
      setTypePassword('text');
    } else {
      setTypePassword('password');
    }
  };

  const toggleShowConfirmPassword = () => {
    if (typeConfirmPassword === 'password') {
      setTypeConfirmPassword('text');
    } else {
      setTypeConfirmPassword('password');
    }
  };

  const handleButton = e => {
    if (e.target.textContent === 'Sign Up') {
      setSignValue('signUp');
    } else {
      setSignValue('signIn');
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={submitForm}
      >
        <Form className={css.form}>
          {signValue === 'signUp' && (
            <label className={css.label}>
              Name
              <Field name="name" />
              <ErrorMessage
                name="name"
                render={message => (
                  <div className={css.errorValidation}>{message}</div>
                )}
              />
            </label>
          )}
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
          {signValue === 'signUp' && (
            <label className={css.label}>
              Confirm password
              <Field type={typeConfirmPassword} name="confirmPassword" />
              <BiShow
                className={css.buttonHide}
                onClick={toggleShowConfirmPassword}
              />
              <ErrorMessage
                name="confirmPassword"
                render={message => (
                  <div className={css.errorValidation}>
                    Passwords must match
                  </div>
                )}
              />
            </label>
          )}
          <button type="submit" className={css.submit}>
            Submit
          </button>
        </Form>
      </Formik>
      {signValue === 'signUp' ? (
        <p className={css.question}>
          Are you Signed Up?{' '}
          <Button
            text="Sign In"
            handleButton={handleButton}
            view="buttonQuestionSign"
          />
        </p>
      ) : (
        <p className={css.question}>
          Are you not Signed Up?{' '}
          <Button
            text="Sign Up"
            handleButton={handleButton}
            view="buttonQuestionSign"
          />
        </p>
      )}
    </>
  );
}

export default Register;

/* FormSign.propTypes = {
  sign: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
}; */
