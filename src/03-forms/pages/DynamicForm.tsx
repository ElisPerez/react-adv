import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
}

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {formik => {
          return (
            <Form>
              {formJson.map(({ label, name, placeholder, type }) => {
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    type={type as any}
                  />
                );
              })}
              <button type='submit'>Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
