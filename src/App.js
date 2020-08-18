import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import Header from './components/header';
import SignInAndSignUpPage from './pages/sign-in';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' exact component={ShopPage} />
        <Route path='/login' exact component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
