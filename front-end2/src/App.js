import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Login from './components/pages/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
      </Router>
    );
  }
}

export default App;
