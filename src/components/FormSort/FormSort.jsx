import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import css from './FormSort.module.css';
import PropTypes from 'prop-types';
import { changeSortBy } from '../../redux/cars/carsSlice';
import { useDispatch } from 'react-redux';

const FormSort = ({ closeModal }) => {
  const dispatch = useDispatch();
  const SortSchema = Yup.object().shape({
    sort: Yup.string().require,
  });

  const submitForm = e => {
    closeModal();
    dispatch(changeSortBy(e.target.value));
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
            Sort by mark up
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="mark up"
              onClick={submitForm}
            />
          </label>
          <label className={css.label}>
            Sort by mark down
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="mark down"
              onClick={submitForm}
            />
          </label>
          <label className={css.label}>
            Sort by model up
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="model up"
              onClick={submitForm}
            />
          </label>
          <label className={css.label}>
            Sort by model down
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="model down"
              onClick={submitForm}
            />
          </label>
          <label className={css.label}>
            Sort by price up
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="price up"
              onClick={submitForm}
            />
          </label>
          <label className={css.label}>
            Sort by price down
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="price down"
              onClick={submitForm}
            />
          </label>
          <label className={css.label}>
            Sort by year up
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="year up"
              onClick={submitForm}
            />
          </label>
          <label className={css.label}>
            Sort by year down
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="year down"
              onClick={submitForm}
            />
          </label>

          <label className={css.label}>
            Sort by date up
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="date up"
              onClick={submitForm}
            />
          </label>
          <label className={css.label}>
            Sort by date down
            <Field
              name="sort"
              className={css.field}
              type="radio"
              value="date down"
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
