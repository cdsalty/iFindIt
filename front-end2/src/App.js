import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import MovieSearch from './components/pages/MovieSearch';
import ScraperResults from './components/pages/ScraperResults';
import Home from './components/pages/Home';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/search" component={MovieSearch} />
          <Route exact path='/search_results' component={ScraperResults} />
        </div>
      </Router>
    );
  }
}

export default App;