import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
  const {
    confirmPassword,
    email,
    formData,
    handleChange,
    isValidEmail,
    name,
    password,
    resetForm,
  } = useForm({
    email: 'elisperezmusic@gmail.com',
    name: 'Elis Antonio',
    password: '123456',
    confirmPassword: '123456',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1>RegisterPage</h1>
      <form noValidate onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          onChange={handleChange}
          value={name}
          name='name'
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Name is required</span>}
        <input
          type='email'
          placeholder='Email'
          onChange={handleChange}
          value={email}
          name='email'
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Email is required</span>}
        <input
          type='password'
          placeholder='Password'
          onChange={handleChange}
          value={password}
          name='password'
        />
        {password.trim().length <= 0 && <span>This field is required</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>Password must be 6 letters long</span>
        )}
        <input
          type='password'
          placeholder='Repeat Password'
          onChange={handleChange}
          value={confirmPassword}
          name='confirmPassword'
        />

        {confirmPassword.trim().length <= 0 && <span>This field is required</span>}
        {confirmPassword.trim().length > 0 && password !== confirmPassword && (
          <span>Passwords must be the same</span>
        )}
        <button type='submit'>Register</button>

        <button type='button' onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
