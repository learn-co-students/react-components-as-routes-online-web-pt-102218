import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Navbar.js'
import Home from './Home.js'
import Login from './Login.js'
import Signup from './Signup.js'
import Settings from './Settings.js'
import Account from './Account.js'

ReactDOM.render(
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/settings" component={Settings} />
      <Route path="/account" component={Account} />
    </Fragment>
  </Router>,
  document.getElementById('root')
);
