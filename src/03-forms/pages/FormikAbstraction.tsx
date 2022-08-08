import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox } from '../components/MyCheckbox';
import { MySelect } from '../components/MySelect';
import { MyTextInput } from '../components/MyTextInput';
import '../styles/styles.css';

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          // terms: Yup.boolean().isTrue('You must accept the terms and conditions').required('Required'), // this is the same as the below
          terms: Yup.boolean()
            .oneOf([true], 'You must accept the terms and conditions')
            .required('Required'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'This option is not allowed')
            .required('Required'),
        })}
      >
        {formik => (
          <Form>
            <MyTextInput label='First Name' name='firstName' placeholder='First Name' />

            <MyTextInput label='Last Name' name='lastName' placeholder='Last Name' />

            <MyTextInput label='Email' name='email' placeholder='Email Address' type='email' />

            <MySelect label='Jobs types' name='jobType'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Jr.</option>
            </MySelect>

            <MyCheckbox label='Accept Terms & conditions' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
