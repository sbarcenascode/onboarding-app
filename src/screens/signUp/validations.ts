import * as yup from 'yup';

export const createUserValidationStepOneSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email().required('Email is required'),
});

export const createUserValidationStepTwoSchema = yup.object().shape({
  phoneNumber: yup.string().required('Phone is required'),
});
