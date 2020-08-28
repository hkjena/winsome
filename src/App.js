import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import Header from './components/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

function App({ setCurrentUser }) {
  // const history = useHistory();

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // history.replace('/');
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' exact component={ShopPage} />
        <Route path='/login' exact component={SignInAndSignUpPage} />
        <Route path='/signup' exact component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
