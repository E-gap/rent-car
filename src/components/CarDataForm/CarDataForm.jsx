import css from './CarDataForm.module.css';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { changeCar } from '../../redux/cars/carsOperations';
import { useState } from 'react';
import CarMapCharacteristic from 'components/CarMapCharacteristic/CarMapCharacteristic';
import {
  carColors,
  carTypes,
  carFuelTypes,
  carTransmissionTypes,
  carYears,
  marksAndModels,
} from '../../utils/CarCharacteristics';
import Notiflix from 'notiflix';
import { CarSchema } from '../../utils/CarSchema';

const CarDataForm = ({
  oneCar: {
    mark,
    model,
    price,
    type,
    year,
    transmission,
    color,
    mileage,
    engine,
    fueltype,
    power,
    city,
    tel,
    email,
    description,
    _id,
  },
  getCar,
  canChange,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDisabledFields, setIsDisabledFields] = useState(true);
  const [textButton, setTextButton] = useState('');
  const dispatch = useDispatch();

  const submitForm = (values, actions) => {
    if (!marksAndModels[values.mark].includes(values.model)) {
      Notiflix.Notify.failure('Please, reselect a model', {
        fontSize: '15px',
        position: 'center-center',
        timeout: 2000,
        width: '400px',
      });
      return;
    }

    if (textButton === 'Save changes') {
      if (!marksAndModels[values.mark].includes(values.model)) {
        return;
      }

      const formData = new FormData();

      formData.append('mark', values.mark);
      formData.append('model', values.model);
      formData.append('type', values.type);
      formData.append('transmission', values.transmission);
      formData.append('mileage', values.mileage);
      formData.append('power', values.power);
      formData.append('engine', values.engine);
      formData.append('tel', values.tel);
      formData.append('year', values.year);
      formData.append('color', values.color);
      formData.append('fueltype', values.fueltype);
      formData.append('city', values.city);
      formData.append('email', values.email);
      formData.append('price', values.price);
      formData.append('description', values.description);
      formData.append('photo', selectedFile);

      const dataCar = { dataCar: formData, carId: _id };

      setIsDisabledFields(true);
      dispatch(changeCar(dataCar));
      getCar();
    } else {
      actions.setValues(initialValues);
    }
  };

  const handleChange = e => {
    setSelectedFile(e.target.files[0]);
  };

  const initialValues = {
    mark,
    model,
    type,
    transmission,
    mileage,
    power,
    tel,
    year,
    color,
    fueltype,
    engine,
    city,
    email,
    price,
    description,
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={CarSchema}
        onSubmit={submitForm}
      >
        {({ values }) => (
          <Form className={css.form}>
            <label className={css.label}>
              Mark
              <Field
                name="mark"
                className={css.field}
                disabled={isDisabledFields}
                as="select"
              >
                <CarMapCharacteristic characteristics={marksAndModels.marks} />
              </Field>
              <ErrorMessage
                name="mark"
                render={message => (
                  <div className={css.errorValidation}>{message}</div>
                )}
              />
            </label>
            <label className={css.label}>
              Model
              <Field
                name="model"
                className={css.field}
                disabled={!values.mark || isDisabledFields}
                as="select"
              >
                <CarMapCharacteristic
                  characteristics={
                    !values.mark ? [] : marksAndModels[values.mark]
                  }
                />
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
              <Field name="year" disabled={isDisabledFields} as="select">
                <CarMapCharacteristic characteristics={carYears} sort="down" />
              </Field>
              <ErrorMessage
                name="year"
                render={message => (
                  <div className={css.errorValidation}>{message}</div>
                )}
              />
            </label>
            <label className={css.label}>
              Transmission
              <Field
                name="transmission"
                disabled={isDisabledFields}
                as="select"
              >
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
              Engine capacity
              <Field name="engine" disabled={isDisabledFields} />
              <ErrorMessage
                name="engine"
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
            <label className={`${css.label} ${css.uploadFile}`}>
              Upload file
              <Field
                name="photo"
                accept=".jpg"
                type="file"
                className={css.file}
                /* multiple */
                onChange={handleChange}
                disabled={isDisabledFields}
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
                disabled={!canChange}
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
        )}
      </Formik>
    </>
  );
};

export default CarDataForm;

CarDataForm.propTypes = {
  getCar: PropTypes.func.isRequired,
  canChange: PropTypes.bool.isRequired,
  oneCar: PropTypes.shape({
    mark: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    power: PropTypes.number.isRequired,
    tel: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    fueltype: PropTypes.string.isRequired,
    engine: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
};
