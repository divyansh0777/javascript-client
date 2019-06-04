import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Z]+$/i, 'Name should be proper')
    .required('Name is required'),
  select: yup
    .string()
    .required('Select Option'),
  radio: yup
    .string()
    .required('Click one'),
});
