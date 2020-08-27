import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import Header from './components/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        history.replace('/');
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div className='App'>
      <Header currentUser={!!currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' exact component={ShopPage} />
        <Route path='/login' exact component={SignInAndSignUpPage} />
        <Route path='/signup' exact component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
