import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './Home.js'
import Login from './Login.js'
import Signup from './Signup.js'
import Settings from './Settings.js'
import Account from './Account.js'


/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const activeLink = { background: 'darkblue' }

/* add the navbar component */
const Navbar = () =>
  <div>
    <NavLink exact to="/"   style={link} activeStyle={activeLink}>Home</NavLink>
    <NavLink to="/login"    style={link} activeStyle={activeLink}>Login</NavLink>
    <NavLink to="/signup"   style={link} activeStyle={activeLink}>Signup</NavLink>
    <NavLink to="/settings" style={link} activeStyle={activeLink}>Settings</NavLink>
    <NavLink to="/account"  style={link} activeStyle={activeLink}>Account</NavLink>
  </div>;

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
