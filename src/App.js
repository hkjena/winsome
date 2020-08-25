import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import Header from './components/header';
import SignInAndSignUpPage from './pages/sign-in';
import { auth } from './firebase/firebase.utils';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      setCurrentUser(user)
    );
    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div className='App'>
      <Header currentUser={!!currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' exact component={ShopPage} />
        <Route path='/login' exact component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
