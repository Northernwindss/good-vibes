import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginComp from './Components/Landing/loginComp';
import Profile from './Components/profile/profile';
// import Nav from './Components/NavComponents/navBar';
// import Home from './Components/NavComponents/home'
import Contact from './Components/NavComponents/contact'
import About from './Components/NavComponents/about'
import ForumsMain from './Components/forumsComponents/forumManagement/forumMain'


export default (
  <Switch>

    <Route path='/contact-us' component={Contact} />
    <Route path='/about' component={About} />
    <Route exact path='/'
      component={() => (
        <LoginComp />
      )}
    />
    <Route path='/forums' component={ForumsMain} />
    <Route path={`/profile/:id`}
      component={Profile} />
  </Switch>
)