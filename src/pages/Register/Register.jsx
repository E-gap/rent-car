import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import css from './Register.module.css';
import Container from 'components/Container/Container';
// import PropTypes from 'prop-types';
import { BiShow } from 'react-icons/bi';
import { register /* login */ } from '../../redux/auth/authOperations';
import { useDispatch /* useSelector */ } from 'react-redux';
import Button from '../../components/Button/Button';
// import { selectIsLogin } from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';

function Register({ sign, closeModal }) {
  const navigate = useNavigate();
  // const isLogin = useSelector(selectIsLogin);
  const [typePassword, setTypePassword] = useState('password');
  const [typeConfirmPassword, setTypeConfirmPassword] = useState('password');
  const dispatch = useDispatch();
  /* const [signValue, setSignValue] = useState(() => {
    return sign;
  }); */

  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required('Please input name'),
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

    dispatch(register(userDataForRegister));
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
    navigate('/login');
  };

  return (
    <div className={css.registerPage}>
      <Container>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={submitForm}
        >
          <Form className={css.form}>
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

            <button type="submit" className={css.submit}>
              Submit
            </button>
          </Form>
        </Formik>

        <p className={css.question}>
          Are you Signed Up?
          <Button
            text="Sign In"
            handleButton={handleButton}
            view="buttonQuestionSign"
          />
        </p>
      </Container>
    </div>
  );
}

export default Register;

/* FormSign.propTypes = {
  sign: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
}; */
