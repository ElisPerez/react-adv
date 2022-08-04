import { useState } from 'react';

import '../styles/styles.css';

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    email: 'elisperezmusic@gmail.com',
    name: 'Elis Antonio',
    password: '123456',
    confirmPassword: '123456',
  });

  const { confirmPassword, email, name, password } = registerData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h1>RegisterPage</h1>
      <form noValidate onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' onChange={handleChange} value={name} name='name' />
        <input
          type='email'
          placeholder='Email'
          onChange={handleChange}
          value={email}
          name='email'
        />
        <input
          type='password'
          placeholder='Password'
          onChange={handleChange}
          value={password}
          name='password'
        />
        <input
          type='password'
          placeholder='Repeat Password'
          onChange={handleChange}
          value={confirmPassword}
          name='confirmPassword'
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};
