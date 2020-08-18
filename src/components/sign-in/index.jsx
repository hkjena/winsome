import React, { useState } from 'react';

import Input from '../form-input';
import Button from '../custom-button';

import './styles.scss';

const SignIn = () => {
  const [input, setInput] = useState({ email: '', password: '' });
  const handelSubmit = e => {
    e.preventDefault();
  };
  const handelChange = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handelSubmit}>
          <Input
            type='email'
            name='email'
            label='email'
            value={input.email}
            handelChange={handelChange}
            required
          />

          <Input
            type='password'
            name='password'
            label='password'
            value={input.password}
            handelChange={handelChange}
            required
          />

          <Button type='submit'>Sign In</Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
