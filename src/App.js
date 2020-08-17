import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './pages/homepage';
import ShopPage from './pages/shop';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' exact component={ShopPage} />
    </div>
  );
}

export default App;
