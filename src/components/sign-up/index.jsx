import React, { useState } from 'react';

import Input from '../form-input';
import Button from '../custom-button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './styles.scss';

const SignUp = () => {
  const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPasword: '',
  };

  const [user, setsUser] = useState(initialState);
  const { displayName, email, password, confirmPasword } = user;

  const handelChange = e => {
    const { name, value } = e.target;
    setsUser({ ...user, [name]: value });
  };

  const handelSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPasword) {
      setsUser({ ...user, password: '', confirmPasword: '' });
      alert("password don't match");
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setsUser(initialState);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='sign-up-container'>
      <div className='sign-up'>
        <h2 className='title'>I don't have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handelSubmit}>
          <Input
            type='text'
            name='displayName'
            value={displayName}
            onChange={handelChange}
            label='Name'
            required
          />
          <Input
            type='email'
            name='email'
            value={email}
            onChange={handelChange}
            label='Email'
            required
          />
          <Input
            type='password'
            name='password'
            value={password}
            onChange={handelChange}
            label='Password'
            required
          />
          <Input
            type='password'
            name='confirmPasword'
            value={confirmPasword}
            onChange={handelChange}
            label='Confirm Password'
            required
          />
          <Button type='submit'>SIGN UP</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
