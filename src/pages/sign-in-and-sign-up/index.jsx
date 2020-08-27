import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';

import './styles.scss';

const SignInAndSignUpPage = () => (
  <>
    <Route path='/login' exact component={SignIn} />
    <Route path='/signup' exact component={SignUp} />
  </>
);

export default SignInAndSignUpPage;
