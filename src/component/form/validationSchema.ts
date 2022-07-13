import * as Yup from 'yup';

export const EmailValidationSchema = Yup.string()
    .email('email invalide')
    .required('l\'email est obligatoire');
