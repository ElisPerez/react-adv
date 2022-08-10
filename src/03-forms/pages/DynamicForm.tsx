import { Form, Formik } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;

  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Required');
    }

    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value || 2,
        `Must be at least ${(rule as any).value || 2} characters`
      );
    }

    if (rule.type === 'email') {
      schema = schema.email('Invalid email address');
    }

    requiredFields[input.name] = schema;
  }
}

// const validationSchema = Yup.object().shape(requiredFields);
const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {formik => {
          return (
            <Form noValidate>
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
                      {options?.map(({ id, label }) => (
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
