"use strict"
import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';

import Context from '../context/AuthContext'

function Profile() {
  const logger = useContext(Context)
  const loggedIn = logger.loggedIn;
  return (
    <Route>
      <h1>Profile</h1>
      {
        loggedIn ? "Welcome to Your Profile": <Redirect to="/"/>
      }
    </Route>
);
}

export default Profile;
