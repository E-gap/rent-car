import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './FormAddCar.module.css';
import PropTypes from 'prop-types';

import { addCar } from '../../redux/cars/carsOperations';

import { useDispatch } from 'react-redux';
// import Button from '../Button/Button';

function FormAddCar({ closeModal }) {
  const dispatch = useDispatch();

  const AddCarSchema = Yup.object().shape({
    model: Yup.string().required('Please input model'),
    type: Yup.string().required('Please input type'),
    transmission: Yup.string().required('Please input transmission'),
    mileage: Yup.number()
      .typeError('you must specify a number')
      .required('Please input mileage'),
    power: Yup.number()
      .typeError('you must specify a number')
      .required('Please input power'),
    tel: Yup.string().required('Please input tel'),
    year: Yup.number().required('Please input year'),
    color: Yup.string().required('Please input color'),
    fueltype: Yup.string().required('Please input fuel type'),
    city: Yup.string().required('Please input city'),
    email: Yup.string().required('Please input email'),
    price: Yup.number().required('Please input price'),
  });

  const submitForm = (values, actions) => {
    const dataCar = { ...values };
    console.log(dataCar);
    actions.resetForm();

    closeModal();

    dispatch(addCar(dataCar));
  };

  return (
    <>
      <Formik
        initialValues={{
          model: '',
          type: '',
          transmission: '',
          mileage: '',
          power: '',
          tel: '',
          year: '',
          color: '',
          fueltype: '',
          city: '',
          email: '',
          price: '',
        }}
        validationSchema={AddCarSchema}
        onSubmit={submitForm}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Model
            <Field name="model" className={css.field} />
            <ErrorMessage
              name="model"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Type
            <Field name="type" />
            <ErrorMessage
              name="type"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Transmission
            <Field name="transmission" />
            <ErrorMessage
              name="transmission"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Mileage
            <Field name="mileage" />
            <ErrorMessage
              name="mileage"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Power
            <Field name="power" />
            <ErrorMessage
              name="power"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Tel
            <Field name="tel" />
            <ErrorMessage
              name="tel"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Year
            <Field name="year" />
            <ErrorMessage
              name="year"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Color
            <Field name="color" />
            <ErrorMessage
              name="color"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Fuel type
            <Field name="fueltype" />
            <ErrorMessage
              name="fueltype"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            City
            <Field name="city" />
            <ErrorMessage
              name="city"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Email
            <Field name="email" />
            <ErrorMessage
              name="email"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Price
            <Field name="price" />
            <ErrorMessage
              name="price"
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
    </>
  );
}

export default FormAddCar;

FormAddCar.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
