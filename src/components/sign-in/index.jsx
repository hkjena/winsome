import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../form-input';
import Button from '../custom-button';

import { SignInWithGoogle } from '../../firebase/firebase.utils';
import { GoogleSvg } from '../assets/allsvgs';

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

          <div className='buttons'>
            <Button type='submit'>Sign In</Button>
            <div className='google-btns' onClick={SignInWithGoogle}>
              <Button isGoogleSignIn type='button'>
                Sign In with Google
              </Button>
              <GoogleSvg height={'30px'} width={'30px'} />
            </div>
          </div>
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            New to Winsome?{' '}
            <Link to='/signup' className='link'>
              Create an account.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
