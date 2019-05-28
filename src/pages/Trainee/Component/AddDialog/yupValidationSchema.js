import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email()
    .required('Email Address must be of email type'),
  password: yup
    .string('Password should be more than 5 characters')
    .required('Password is required')
    .min(5, 'Seems a bit short...!  Password should be more than 5 characters'),
  rePassword: yup
    .string()
    .required('Confirm Password')
    .oneOf([yup.ref('password'), null], 'Passwords not matched'),
});
