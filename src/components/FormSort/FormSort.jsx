import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import css from './FormSort.module.css';
import PropTypes from 'prop-types';
import { changeSortBy } from '../../redux/cars/carsSlice';

const FormSort = ({ closeModal }) => {
  const SortSchema = Yup.object().shape({
    sort: Yup.string().require,
  });

  const submitForm = e => {
    closeModal();
    console.log(e.target.value);
    changeSortBy(e.target.value);
  };

  return (
    <>
      <Formik
        initialValues={{
          sort: '',
        }}
        validationSchema={SortSchema}
        onSubmit={submitForm}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Sort by mark
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="mark"
              onClick={submitForm}
            />
          </label>
          <label className={css.label}>
            Sort by model
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="model"
              onClick={submitForm}
            />
          </label>
          <label className={css.label}>
            Sort by price
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="price"
              onClick={submitForm}
            />
          </label>
          <label className={css.label}>
            Sort by year
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="year"
              onClick={submitForm}
            />
          </label>
          <label className={css.label}>
            Sort by power
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="power"
              onClick={submitForm}
            />
          </label>
          <label className={css.label}>
            Sort by engine capacity
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="engine"
              onClick={submitForm}
            />
          </label>
        </Form>
      </Formik>
    </>
  );
};

export default FormSort;

FormSort.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
