import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginComp from './Components/Landing/loginComp';
import Profile from './Components/profile/profile'


export default (
  <Switch>
    <Route exact path='/'
      component={() => (
        <LoginComp />
      )}
    />
    <Route path={`/profile/:id`}
      component={Profile} />
  </Switch>
)