import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

class Navbar extends Component {



    render() {
        return (
            <div className="navbar">
                <div className="logo-holder">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="search-button">
                    <Link to="/search" input type="text" placeholder><button className="button">Search for Movies</button></Link>
                </div>
                <div className="button-holder">
                    <Link to="/login"><button className="button">Login</button></Link>
                    <Link to="/register"><button className="button">Register</button></Link>
                </div>
            </div>
        )
    };
}
export default Navbar;
