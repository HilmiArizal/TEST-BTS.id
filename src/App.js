import React, { Component } from 'react';
import Login from './Pages/Login/Login';
import { Route } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Checklist from './Pages/Checklist/Checklist';


class App extends Component {

  state = {}

  render() {
    return (
      <div>
        <Route path = "/" component ={Login} exact/>
        <Route path = "/register" component ={Register} />
        <Route path = "/checklist" component ={Checklist} />
      </div>
    );
  }
}

export default App;