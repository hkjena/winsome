import React from 'react';
import Homepage from './pages/homepage/homepage';
import { Route } from 'react-router-dom';

import './App.css';

const HatsPage = () => <h1>Hats Page</h1>;

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop/hats' exact component={HatsPage} />
    </div>
  );
}

export default App;
