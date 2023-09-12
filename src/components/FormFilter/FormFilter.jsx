import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './FormFilter.module.css';
import PropTypes from 'prop-types';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  getAllCars,
  getFavoriteCars,
  getUserCars,
} from '../../redux/cars/carsOperations';
import { useDispatch } from 'react-redux';
import CarMapCharacteristic from 'components/CarMapCharacteristic/CarMapCharacteristic';
import {
  carColors,
  carMarks,
  carTypes,
  carFuelTypes,
  carTransmissionTypes,
  carModels,
  carYears,
} from '../../utils/CarCharacteristics';

const FormFilter = ({ closeModal, changeFilter }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  // const [searchParams, setSearchParams] = useSearchParams();

  /* if (searchParams.get('guery')) {
    console.log(searchParams);
  } */

  const FilterSchema = Yup.object().shape({
    mark: Yup.string(),
    model: Yup.string(),
    type: Yup.string(),
    transmission: Yup.string(),
    mileage: Yup.number().typeError('you must specify a number'),
    power: Yup.number().typeError('you must specify a number'),
    engine: Yup.number().typeError('you must specify a number'),
    year: Yup.number().typeError('you must specify a number'),
    color: Yup.string(),
    fueltype: Yup.string(),
    city: Yup.string(),
    price: Yup.number().typeError('you must specify a number'),
  });

  const submitForm = async (values, actions) => {
    const filterCar = { ...values };

    actions.resetForm();
    closeModal();

    for (var [k, v] of Object.entries(filterCar)) {
      if (!v) {
        delete filterCar[k];
      }
    }

    changeFilter(filterCar);

    // setSearchParams(filterCar);
    // const { search } = window.location;

    /* if (location.pathname.includes('all')) {
      dispatch(getAllCars(search));
    }
    if (location.pathname.includes('favorite')) {
      dispatch(getFavoriteCars(search));
    }
    if (location.pathname.includes('user')) {
      dispatch(getUserCars(search));
    } */
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
          year: '',
          color: '',
          fueltype: '',
          city: '',
          price: '',
        }}
        validationSchema={FilterSchema}
        onSubmit={submitForm}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Mark
            <Field name="mark" className={css.field} as="select">
              <CarMapCharacteristic characteristics={carMarks} />
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
            <Field name="model" className={css.field} as="select">
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

          <button type="submit" className={css.submit}>
            Filter
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default FormFilter;

FormFilter.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
