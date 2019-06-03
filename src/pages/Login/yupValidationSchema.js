import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email()
    .min(1)
    .required('Email Address must be of Email type'),
  password: yup
    .string('Password is not in valid format')
    .required('Password is required'),
});
