import { Form, Formik } from 'formik';
import { MySelect, MyTextInput } from '../components';
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
              {formJson.map(({ label, name, placeholder, type, options }) => {
                if (type === 'input' || type === 'password' || type === 'email') {
                  return (
                    <MyTextInput
                      key={name}
                      label={label}
                      name={name}
                      placeholder={placeholder}
                      type={type as any}
                    />
                  );
                } else if (type === 'select') {
                  return (
                    <MySelect key={name} label={label} name={name}>
                      <option value=''>Select an Option</option>
                      {options?.map(({id, label}) => (
                        <option key={id} value={id}>
                          {label}
                        </option>
                      ))}
                    </MySelect>
                  );
                }
                throw new Error(`Unsupported input type: ${type}`);
              })}
              <button type='submit'>Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
