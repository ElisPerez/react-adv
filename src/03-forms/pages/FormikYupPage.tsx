import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

export const FormikYupPage = () => {
  // const {values, handleSubmit, handleChange, handleBlur, errors, touched, getFieldProps} = useFormik({
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
  });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form onSubmit={formik.handleSubmit} noValidate>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          // name='firstName'
          // onBlur={formik.handleBlur}
          // onChange={formik.handleChange}
          // value={formik.values.firstName}
          {...formik.getFieldProps('firstName')}
        />

        {formik.touched.firstName && formik.errors.firstName && (
          <span>{formik.errors.firstName}</span>
        )}

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          // name='lastName'
          // onBlur={formik.handleBlur}
          // onChange={formik.handleChange}
          // value={formik.values.lastName}
          {...formik.getFieldProps('lastName')}
        />

        {formik.touched.lastName && formik.errors.lastName && <span>{formik.errors.lastName}</span>}

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          // name='email'
          // onBlur={formik.handleBlur}
          // onChange={formik.handleChange}
          // value={formik.values.email}
          {...formik.getFieldProps('email')}
        />

        {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
