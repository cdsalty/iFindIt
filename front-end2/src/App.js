import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import MovieSearch from './components/pages/MovieSearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/search" component={MovieSearch} />
        </div>
      </Router>
    );
  }
}

export default App;