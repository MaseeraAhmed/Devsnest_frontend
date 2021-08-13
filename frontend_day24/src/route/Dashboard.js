"use strict"
import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";

import Context from "../context/AuthContext";

function Dashboard() {
  const logger = useContext(Context)
  return (
    <Route>
      <h1>Dashboard</h1>
      {
        logger.loggedIn ? "Welcome to Dashboard" : <Redirect to="/"/>
      }
    </Route>
  );
}

export default Dashboard;