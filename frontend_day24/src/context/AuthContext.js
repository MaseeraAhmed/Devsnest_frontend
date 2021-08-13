"use strict"
import React, {useState} from 'react';

const Context = React.createContext()

export default Context;

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

export function AuthContext({children}) {
  const [logStatus, setLoggedin] = useState({
    loggedIn: false,
    loading: false
  })
  const logger = {
    login: () => {
      setLoggedin((prevState) => {
        return {
          loggedIn: prevState.loggedIn,
          loading: true
        }
      })
      wait(1000).then(()=>{
        setLoggedin((prevState) => {
          return {
            loggedIn: true,
            loading: false
          }
        })
      })
    },

    logout: () => {
      setLoggedin((prevState) => {
        return {
          loggedIn: prevState.loggedIn,
          loading: true
        }
      })
      wait(1000).then(()=>{
        setLoggedin((prevState) => {
          return {
            loggedIn: false,
            loading: false
          }
        })
      })
    },
    loggedIn: logStatus.loggedIn,
    loading: logStatus.loading
  }
  return (
    <Context.Provider value={logger}>
      {children}
    </Context.Provider>
  );
}
