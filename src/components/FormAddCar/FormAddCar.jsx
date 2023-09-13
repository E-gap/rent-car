import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './FormAddCar.module.css';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { addCar, getAllCars } from '../../redux/cars/carsOperations';
import { useDispatch, useSelector } from 'react-redux';
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

function FormAddCar({ closeModal }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    tel = 'not tel yet',
    city = 'not city yet',
    email,
  } = useSelector(selectUserData);

  const AddCarSchema = Yup.object().shape({
    mark: Yup.string().required('Please input mark'),
    model: Yup.string().required('Please input model'),
    type: Yup.string().required('Please input type'),
    transmission: Yup.string().required('Please input transmission'),
    mileage: Yup.number()
      .typeError('you must specify a number')
      .required('Please input mileage'),
    power: Yup.number()
      .typeError('you must specify a number')
      .required('Please input power'),
    engine: Yup.number()
      .typeError('you must specify a number')
      .required('Please input engine capacity'),
    tel: Yup.string().required('Please input tel'),
    year: Yup.number().required('Please input year'),
    color: Yup.string().required('Please input color'),
    fueltype: Yup.string().required('Please input fuel type'),
    city: Yup.string().required('Please input city'),
    email: Yup.string().required('Please input email'),
    price: Yup.number().required('Please input price'),
    description: Yup.string(),
  });

  const submitForm = async (values, actions) => {
    const dataCar = { ...values, date: Date.now() };
    if (!marksAndModels[values.mark].includes(values.model)) {
      console.log('bad');
      return;
    }

    actions.resetForm();

    closeModal();

    await dispatch(addCar(dataCar));
    if (!location.pathname.includes('favorite')) {
      dispatch(getAllCars());
    }
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
        validationSchema={AddCarSchema}
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
            <label className={`${css.label} ${css.description}`}>
              Description
              <Field
                as="textarea"
                name="description"
                className={css.descriptionText}
              />
            </label>
            <button type="submit" className={css.submit}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormAddCar;

FormAddCar.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
