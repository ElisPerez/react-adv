import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [key: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {
  const [
    field,
    // meta
  ] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}></select>
      <ErrorMessage name={props.name} component='span' />
      {/* {meta.touched && meta.error && <span className='error'>{meta.error}</span>} */}
    </>
  );
};
