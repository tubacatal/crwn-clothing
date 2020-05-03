import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";

import './App.css';

const TestPage = () => {

  return (
    <div>
      <h1>TEST PAGE</h1>
    </div>
  );
};

const App = () => {

  return (
    <div>
      <Switch>
        <Route path='/' component={HomePage}/>
        <Route path='/test' component={TestPage}/>
      </Switch>
    </div>
  );
};

export default App;
