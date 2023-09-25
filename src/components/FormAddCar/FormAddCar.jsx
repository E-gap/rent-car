import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './FormAddCar.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CarMapCharacteristic from 'components/CarMapCharacteristic/CarMapCharacteristic';
import {
  carColors,
  carTypes,
  carFuelTypes,
  carTransmissionTypes,
  carYears,
  marksAndModels,
} from '../../utils/CarCharacteristics';
import { selectUserData } from '../../redux/selectors';
import Notiflix from 'notiflix';
import { useState } from 'react';
import { CarSchema } from '../../utils/CarSchema';

function FormAddCar({ handleAddCar }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const {
    tel = 'not tel yet',
    city = 'not city yet',
    email,
  } = useSelector(selectUserData);

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
    formData.append('date', Date.now());
    formData.append('photo', selectedFile);

    actions.resetForm();

    handleAddCar(formData);
  };

  const handleChange = e => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <Formik
        initialValues={{
          mark: '',
          model: '',
          type: '',
          transmission: '',
          mileage: '',
          power: '',
          engine: '',
          tel,
          year: '',
          color: '',
          fueltype: '',
          city,
          email,
          price: '',
          description: '',
        }}
        validationSchema={CarSchema}
        onSubmit={submitForm}
      >
        {({ values }) => (
          <Form className={css.form}>
            <label className={css.label}>
              Mark
              <Field name="mark" className={css.field} as="select">
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
                as="select"
                disabled={!values.mark}
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
              <Field name="type" as="select">
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
              <Field name="year" as="select">
                <CarMapCharacteristic characteristics={carYears} />
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
              <Field name="transmission" as="select">
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
              <Field name="fueltype" as="select">
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
              <Field name="mileage" />
              <ErrorMessage
                name="mileage"
                render={message => (
                  <div className={css.errorValidation}>{message}</div>
                )}
              />
            </label>
            <label className={css.label}>
              Engine capacity
              <Field name="engine" />
              <ErrorMessage
                name="engine"
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
              Color
              <Field name="color" as="select">
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
              <Field name="price" />
              <ErrorMessage
                name="price"
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
              Tel
              <Field name="tel" />
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
              />
            </label>
            <label className={`${css.label} ${css.description}`}>
              Description
              <Field
                as="textarea"
                name="description"
                className={css.descriptionText}
              />
            </label>
            <button type="submit" className={css.submit}>
              Add car
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormAddCar;

FormAddCar.propTypes = {
  handleAddCar: PropTypes.func.isRequired,
};
