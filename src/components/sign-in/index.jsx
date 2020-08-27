import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../form-input';
import Button from '../custom-button';

import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';
import { GoogleSvg } from '../assets/allsvgs';

import './styles.scss';

const SignIn = () => {
  const initialState = { email: '', password: '' };

  const [userdata, setUserdata] = useState(initialState);

  const handelSubmit = async e => {
    e.preventDefault();
    const { email, password } = userdata;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserdata(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  const handelChange = e => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
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
            value={userdata.email}
            handelChange={handelChange}
            required
          />

          <Input
            type='password'
            name='password'
            label='password'
            value={userdata.password}
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
