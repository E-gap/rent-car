import css from './UserDataForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { changeCar } from '../../redux/cars/carsOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const UserDataForm = ({
  userData: {
    userData: { email, name, city, tel },
    userId,
  },
}) => {
  const [isDisabledFields, setIsDisabledFields] = useState(true);
  const [textButton, setTextButton] = useState('');
  const dispatch = useDispatch();

  const UpdateUserSchema = Yup.object().shape({
    name: Yup.string().required('Please input your name'),
    email: Yup.string().required('Please input email'),
    tel: Yup.string(),
    city: Yup.string(),
  });

  const submitForm = (values, actions) => {
    const dataUser = { dataUser: { ...values }, userId };

    if (textButton === 'Save changes') {
      setIsDisabledFields(true);
      dispatch(changeCar(dataUser));
    } else {
      actions.setValues(initialValues);
    }
  };

  const initialValues = {
    name,
    email,
    city,
    tel,
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={UpdateUserSchema}
        onSubmit={submitForm}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field
              name="name"
              className={css.field}
              disabled={isDisabledFields}
            />
            <ErrorMessage
              name="name"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Email
            <Field name="email" disabled={isDisabledFields} />
            <ErrorMessage
              name="email"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Tel
            <Field name="tel" disabled={isDisabledFields} />
            <ErrorMessage
              name="tel"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            City
            <Field name="city" disabled={isDisabledFields} />
            <ErrorMessage
              name="city"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <div className={css.buttonsChanges}>
            <button
              type="submit"
              className={css.buttonChangeCar}
              onClick={e => {
                setIsDisabledFields(!isDisabledFields);
                setTextButton(e.target.textContent);
              }}
            >
              {isDisabledFields ? 'Change data' : 'Cancel changes'}
            </button>
            <button
              type="submit"
              className={css.submit}
              onClick={e => {
                setTextButton(e.target.textContent);
              }}
              disabled={isDisabledFields}
            >
              Save changes
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default UserDataForm;
