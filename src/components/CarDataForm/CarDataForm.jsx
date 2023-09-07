import css from './CarDataForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { changeCar } from '../../redux/cars/carsOperations';
import { useState } from 'react';
import CarMapCharacteristic from 'components/CarMapCharacteristic/CarMapCharacteristic';
import {
  carColors,
  carModels,
  carTypes,
  carFuelTypes,
  carTransmissionTypes,
} from '../../utils/CarCharacteristics';

const CarDataForm = ({
  carOne: {
    model,
    price,
    type,
    year,
    transmission,
    color,
    mileage,
    fueltype,
    power,
    city,
    tel,
    email,
    description,
    _id,
  },
  getCar,
}) => {
  const [isDisabledFields, setIsDisabledFields] = useState(true);
  const [textButton, setTextButton] = useState('');
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
    description: Yup.string(),
  });

  const submitForm = (values, actions) => {
    const dataCar = { dataCar: { ...values }, carId: _id };

    if (textButton === 'Save changes') {
      setIsDisabledFields(true);
      dispatch(changeCar(dataCar));
      getCar();
    } else {
      actions.setValues(initialValues);
    }
  };

  const initialValues = {
    model,
    type,
    transmission,
    mileage,
    power,
    tel,
    year,
    color,
    fueltype,
    city,
    email,
    price,
    description,
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={AddCarSchema}
        onSubmit={submitForm}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Model
            <Field
              name="model"
              className={css.field}
              disabled={isDisabledFields}
              as="select"
            >
              <CarMapCharacteristic characteristics={carModels} />
            </Field>
            <ErrorMessage
              name="model"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Type
            <Field name="type" disabled={isDisabledFields} as="select">
              <CarMapCharacteristic characteristics={carTypes} />
            </Field>
            <ErrorMessage
              name="type"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Year
            <Field name="year" disabled={isDisabledFields} />
            <ErrorMessage
              name="year"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Transmission
            <Field name="transmission" disabled={isDisabledFields} as="select">
              <CarMapCharacteristic characteristics={carTransmissionTypes} />
            </Field>
            <ErrorMessage
              name="transmission"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Fuel type
            <Field name="fueltype" disabled={isDisabledFields} as="select">
              <CarMapCharacteristic characteristics={carFuelTypes} />
            </Field>
            <ErrorMessage
              name="fueltype"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Mileage
            <Field name="mileage" disabled={isDisabledFields} />
            <ErrorMessage
              name="mileage"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Power
            <Field name="power" disabled={isDisabledFields} />
            <ErrorMessage
              name="power"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Color
            <Field name="color" disabled={isDisabledFields} as="select">
              <CarMapCharacteristic characteristics={carColors} />
            </Field>
            <ErrorMessage
              name="color"
              render={message => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={css.label}>
            Price
            <Field name="price" disabled={isDisabledFields} />
            <ErrorMessage
              name="price"
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
          <label className={`${css.label} ${css.description}`}>
            Description
            <Field
              as="textarea"
              name="description"
              className={css.descriptionText}
              disabled={isDisabledFields}
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

export default CarDataForm;
