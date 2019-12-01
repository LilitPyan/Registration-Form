import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import LogIn from './LogIn/LogIn'
import SignUp from './SignUp/SignUp'
import User from'./User/User'

class App extends Component {

  render() {
   
    return (
  	  <BrowserRouter>
        <div className = "App">
          <Switch>
            <Route exact path = '/' component = {SignUp} />
            <Route path = '/login' component = {LogIn} />
            <Route path = '/user' component = {User} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
