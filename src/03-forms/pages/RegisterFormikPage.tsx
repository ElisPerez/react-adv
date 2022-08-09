import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          confirmPassword: '',
          email: '',
          name: '',
          password: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          email: Yup.string().required('email is a required field (default)').email('Invalid Email').max(255),
          name: Yup.string().required('Required').min(2, 'Too Short!').max(15, 'Too Long!'),
          password: Yup.string().required('Required').min(6, 'Too Short!'),
          confirmPassword: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
        })}
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput label={'Name'} name={'name'} placeholder={'Your Name'} />
            <MyTextInput label={'Email Address'} name={'email'} type={'email'} placeholder={'jonh@example.com'} />
            <MyTextInput label={'Password'} name={'password'} type={'password'} placeholder={'Password'} />
            <MyTextInput label={'Confirm Password'} name={'confirmPassword'} type={'password'} placeholder={'Confirm Password'} />
            <button type={'submit'}>Register</button>

            <button type={'button'} onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
