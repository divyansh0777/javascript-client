import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string().required('Name is required'),
  select: yup
    .string()
    .required('Select Option'),
  radio: yup
    .string()
    .required('Click one'),
});
