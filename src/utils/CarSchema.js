import * as Yup from 'yup';

export const CarSchema = Yup.object().shape({
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
  photo: Yup.mixed(),
});
