import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import LogIn from './LogIn/LogIn'
import SignUp from './SignUp/SignUp'

class App extends Component {
  render() {
    return (
  	  <BrowserRouter>
          <div className = "App">
          <Switch>
            <Route exact path = '/' component = {LogIn} />
            <Route path = '/signup' component = {SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
