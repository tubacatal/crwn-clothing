import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Header from "./components/header/header.component";

import './App.css';

const App = () => {

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/sign-in' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
};

export default App;
